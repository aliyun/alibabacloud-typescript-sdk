// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebApplicationStatus } from "./WebApplicationStatus";
import { WebApplication } from "./WebApplication";


export class WebApplicationWithStatus extends $dara.Model {
  status?: WebApplicationStatus;
  webApplication?: WebApplication;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      webApplication: 'WebApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: WebApplicationStatus,
      webApplication: WebApplication,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.webApplication && typeof (this.webApplication as any).validate === 'function') {
      (this.webApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

