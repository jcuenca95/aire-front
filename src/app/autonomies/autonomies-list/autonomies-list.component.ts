import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Autonomies } from "../autonomies.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-autonomies-list",
  templateUrl: "./autonomies-list.component.html",
  styleUrls: ["./autonomies-list.component.scss"]
})
export class AutonomiesListComponent implements OnInit {
  dataSource: Observable<Array<Autonomies>>;
  displayedColumns = ["name"];
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.dataSource = this.httpClient.get<Array<Autonomies>>(
      "/api/v1/autonomies"
    );
  }

  navigateToHospital(autonomy) {
    this.router.navigate(["hospitals"], {
      queryParams: { autonomy: autonomy.id, name: autonomy.name }
    });
  }
}
