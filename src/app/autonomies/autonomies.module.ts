import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutonomiesListComponent } from "./autonomies-list/autonomies-list.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../shared/material/material.module";

const routes: Routes = [
  {
    path: "",
    component: AutonomiesListComponent
  }
];

@NgModule({
  declarations: [AutonomiesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule
  ]
})
export class AutonomiesModule {}
