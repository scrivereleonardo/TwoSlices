import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ReaderPdfComponent } from './reader-pdf/reader-pdf.component';

const routes: Routes = [
  { component: HomepageComponent, path: "" },
  { component: ReaderPdfComponent, path: "lol" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
