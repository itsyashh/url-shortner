import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ShrtcodeService } from 'src/app/services/shrtcode.service';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.css']
})
export class UrlShortnerComponent implements OnInit {

  constructor(private _shortUrl: ShrtcodeService) { }
  responceData: any = [];
  ngOnInit(): void {
  }

  urlLink = new FormGroup({
    url: new FormControl(),
  })


  onSubmit() {
    debugger
    const urlValue = this.urlLink.value;
    if (urlValue.url != null) {
      this.responceData = [];
      this._shortUrl.shrtCodeUrl(urlValue)
        .subscribe((responce) => {
          this.responceData.push(responce.result.short_link);
          this.responceData.push(responce.result.short_link2);
          console.log(this.responceData)
        });
    } else {
      alert("Please Enter URL");
      window.location.reload();
    }
  }

  goToUrl(url: any) {
    window.open("https://" + url, "_blank");
  }
}
