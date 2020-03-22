import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "autonomies",
    loadChildren: () =>
      import("./autonomies/autonomies.module").then(m => m.AutonomiesModule)
  },
  {
    path: "",
    redirectTo: "autonomies",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
