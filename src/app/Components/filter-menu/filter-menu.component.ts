import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonCheckbox, MenuController } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';
import { CategoryModel } from 'src/app/models/categoryModel';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {
      @Output('checkbox') checkbox: EventEmitter<any> = new EventEmitter<any>();
      @Input('categories') categories: CategoryModel[] = [];

      collapsed: boolean;

      @ViewChild('checkbox',{static:false}) ionCheckbox: IonCheckbox;

  constructor(private menuController: MenuController,
    private router:Router) { }

  ngOnInit(): void {
    this.collapsed=true;
  }

  onClick(){
    this.collapsed = !this.collapsed;
  }
  checkboxSelected(ev: any){
      this.menuController.close('filter').then();

      this.checkbox.emit({
        name: ev.target.name,
        selected: ev.target.checked
      });
  }
  closeMenu(){
    this.menuController.close('filter').then();
  }

}
