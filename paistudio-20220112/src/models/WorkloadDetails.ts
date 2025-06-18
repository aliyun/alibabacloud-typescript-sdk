// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaJob } from "./QuotaJob";


export class WorkloadDetails extends $dara.Model {
  DLC?: QuotaJob;
  DSW?: QuotaJob;
  EAS?: QuotaJob;
  summary?: QuotaJob;
  static names(): { [key: string]: string } {
    return {
      DLC: 'DLC',
      DSW: 'DSW',
      EAS: 'EAS',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DLC: QuotaJob,
      DSW: QuotaJob,
      EAS: QuotaJob,
      summary: QuotaJob,
    };
  }

  validate() {
    if(this.DLC && typeof (this.DLC as any).validate === 'function') {
      (this.DLC as any).validate();
    }
    if(this.DSW && typeof (this.DSW as any).validate === 'function') {
      (this.DSW as any).validate();
    }
    if(this.EAS && typeof (this.EAS as any).validate === 'function') {
      (this.EAS as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

