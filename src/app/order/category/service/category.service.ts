import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{

  constructor(private httpClient:HttpClient) { }

  getCategories(url, httpOptions)
  {
    return this.httpClient.get<Category[]>(url,httpOptions);
  }

  createCategory(url, httpOptions, category)
  {
      return this.httpClient.post(url,category,httpOptions);
    //return this.httpClient.put(url,httpOptions,category);
  }

  getCategoryDetails(url, httpOptions)
  {
    return this.httpClient.get<Category>(url,httpOptions);
  }

  updateCategory(url: string, httpOptions: { headers: HttpHeaders }, category: Category)
  {
    return this.httpClient.put(url,category,httpOptions);
  }


  deleteCategory(url: string, httpOptions: { headers: HttpHeaders })
  {
    return this.httpClient.delete(url,httpOptions);
  }
}
