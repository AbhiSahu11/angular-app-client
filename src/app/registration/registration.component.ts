import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private service: UserService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData = {
      name: "",
      email: "",
      phone: null,
      password: "",
      confpassword: ""
    };
  }
  onSubmit(form: NgForm) {
    this.service.addUser(form.value).subscribe(response => {
      this.resetForm(form);
      this.snackBar.open(response.toString(), "", {
        duration: 5000,
        verticalPosition: "top"
      });
    });
  }
}
