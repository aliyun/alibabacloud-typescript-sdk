// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceSpec } from "./ResourceSpec";


export class ResourceQuota extends $dara.Model {
  limit?: ResourceSpec;
  request?: ResourceSpec;
  used?: ResourceSpec;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      request: 'request',
      used: 'used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: ResourceSpec,
      request: ResourceSpec,
      used: ResourceSpec,
    };
  }

  validate() {
    if(this.limit && typeof (this.limit as any).validate === 'function') {
      (this.limit as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.used && typeof (this.used as any).validate === 'function') {
      (this.used as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

