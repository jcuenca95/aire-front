import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map, flatMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hospitals-list",
  templateUrl: "./hospitals-list.component.html",
  styleUrls: ["./hospitals-list.component.scss"]
})
export class HospitalsListComponent implements OnInit {
  autonomyName = "";

  dataSource: Observable<Array<any>>;
  displayedColumns = ["name", "location", "telephone"];

  constructor(
    private activeRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSource = this.activeRoute.queryParams.pipe(
      flatMap(query => {
        this.autonomyName = query.name ? query.name : "Todas las comunidades";
        const queryToApi = { autonomy: query.autonomy };
        return this.httpClient.get<Array<any>>("/api/v1/hospitals", {
          params: queryToApi
        });
      })
    );
  }

  navigateToDetail(element) {
    this.router.navigate(["hospitals/" + element.id]);
  }
}
