// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QuotaDetails extends $dara.Model {
  actualMinQuota?: ResourceAmount;
  desiredMinQuota?: ResourceAmount;
  requestedQuota?: ResourceAmount;
  usedQuota?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      actualMinQuota: 'ActualMinQuota',
      desiredMinQuota: 'DesiredMinQuota',
      requestedQuota: 'RequestedQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinQuota: ResourceAmount,
      desiredMinQuota: ResourceAmount,
      requestedQuota: ResourceAmount,
      usedQuota: ResourceAmount,
    };
  }

  validate() {
    if(this.actualMinQuota && typeof (this.actualMinQuota as any).validate === 'function') {
      (this.actualMinQuota as any).validate();
    }
    if(this.desiredMinQuota && typeof (this.desiredMinQuota as any).validate === 'function') {
      (this.desiredMinQuota as any).validate();
    }
    if(this.requestedQuota && typeof (this.requestedQuota as any).validate === 'function') {
      (this.requestedQuota as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

