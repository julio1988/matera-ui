import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CestaDataSource } from './list-cesta-datasource';

@Component({
  selector: 'app-cesta',
  templateUrl: './list-cesta.component.html',
  styleUrls: ['./list-cesta.component.css']
})
export class CestaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CestaDataSource;
  value = 'Clear me';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['acao', 'id', 'valor', 'dataCadastro'];

  ngOnInit() {
    this.dataSource = new CestaDataSource(this.paginator, this.sort);
  }
}
