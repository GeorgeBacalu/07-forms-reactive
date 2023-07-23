import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

  static invalidProjectName(control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}> {
    return new Promise<{[s: string]: boolean}>((resolve, reject) => setTimeout(() => resolve(control.value === "Test" ? { invalidProjectName: true } : null), 1000));
  }
}
