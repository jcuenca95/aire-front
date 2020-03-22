import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HospitalsListComponent } from "./hospitals-list/hospitals-list.component";
import { HospitalsDetailComponent } from "./hospitals-detail/hospitals-detail.component";
import { MaterialModule } from "../shared/material/material.module";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "",
    component: HospitalsListComponent
  },
  {
    path: ":id",
    component: HospitalsDetailComponent
  }
];

@NgModule({
  declarations: [HospitalsListComponent, HospitalsDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HttpClientModule
  ]
})
export class HospitalsModule {}
