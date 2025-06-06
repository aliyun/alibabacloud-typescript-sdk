// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInstance } from "./ServiceInstance";


export class ServiceBaseline extends $dara.Model {
  serviceInstance?: ServiceInstance;
  static names(): { [key: string]: string } {
    return {
      serviceInstance: 'serviceInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstance: ServiceInstance,
    };
  }

  validate() {
    if(this.serviceInstance && typeof (this.serviceInstance as any).validate === 'function') {
      (this.serviceInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

