import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {SERVER_API_URL} from '../../../app.constants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit
{
  categoryObservable:  Observable<Category>;
  constructor(private categoryService:CategoryService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit()
  {
    this.getCategory();
  }

  private getCategory()
  {
    const id = this.route.snapshot.paramMap.get('id');
    const url=SERVER_API_URL+'api/v2/category/'+id;
    this.categoryService.getCategoryDetails(url).subscribe(
      data=>{
        // @ts-ignore
        this.categoryObservable=data;
        console.log(this.categoryObservable);
      },
      error1 => console.log(error1),
      ()=> console.log('getCategoryDetails() success'));
    return this.categoryObservable;
  }

  categoryDataAvailable(): boolean
  {
    return this.categoryObservable!==undefined;
  }
}