import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedAssociate: any[];
  associate: any[];

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }
  selectAll(select: MatSelect, values, array) {
    select.value = values;
    array = values;
    console.log(this.selectedAssociate);
  }

  deselectAll(select: MatSelect) {
    this.selectedAssociate = [];
    select.value = [];
  }

  ngOnInit() {
    this.associate = [
      { id: 1, viewValue: "payer" },
      { id: 2, viewValue: "provider location(s)" },
      { id: 3, viewValue: "Provider" },
    ]
  }
  displayedColumns = ['name', 'orgName', 'userName', 'roles', 'associatedwith'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users: UserData[] = [
      { name: 'Maia', orgName: 'sdsd', userName: 'sdasd@dsad.com', roles: '', associatedwith: '' },
      { name: 'Mary', orgName: 'asasa', userName: 'asa@dsas.com', roles: '', associatedwith: '' },
      { name: 'saina', orgName: 'sdsd', userName: 'sdasd@wewe.com', roles: '', associatedwith: '' },
      { name: 'raj', orgName: 'asasa', userName: 'asa@sdasd.com', roles: '', associatedwith: '' },
      { name: 'rani', orgName: 'sdsd', userName: 'sdasd@gmail.com', roles: '', associatedwith: '' },
      { name: 'rashmi', orgName: 'asasa', userName: 'asa@gmail.com', roles: '', associatedwith: '' },
      { name: 'megha', orgName: 'sdsd', userName: 'sdasd@dsad.com', roles: '', associatedwith: '' },
      { name: 'Merry', orgName: 'asasa', userName: 'asa@sds.com', roles: '', associatedwith: '' }
    ];

    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
export interface UserData {
  name: string;
  orgName: string;
  userName: string;
  roles: string;
  associatedwith: string;
}

