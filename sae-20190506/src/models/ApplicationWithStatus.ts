// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Application } from "./Application";
import { ApplicationStatus } from "./ApplicationStatus";


export class ApplicationWithStatus extends $dara.Model {
  application?: Application;
  status?: ApplicationStatus;
  static names(): { [key: string]: string } {
    return {
      application: 'application',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: Application,
      status: ApplicationStatus,
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

