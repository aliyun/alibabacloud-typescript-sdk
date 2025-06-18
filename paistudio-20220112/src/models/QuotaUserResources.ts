// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QuotaUserResources extends $dara.Model {
  submitted?: ResourceAmount;
  used?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      submitted: 'Submitted',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitted: ResourceAmount,
      used: ResourceAmount,
    };
  }

  validate() {
    if(this.submitted && typeof (this.submitted as any).validate === 'function') {
      (this.submitted as any).validate();
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

