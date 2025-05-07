// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebApplication } from "./WebApplication";


export class WebApplicationWithInstanceCount extends $dara.Model {
  instanceCount?: number;
  webApplication?: WebApplication;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      webApplication: 'WebApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      webApplication: WebApplication,
    };
  }

  validate() {
    if(this.webApplication && typeof (this.webApplication as any).validate === 'function') {
      (this.webApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

