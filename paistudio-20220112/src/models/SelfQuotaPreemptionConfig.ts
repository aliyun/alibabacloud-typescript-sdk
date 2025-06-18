// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelfQuotaPreemptionConfig extends $dara.Model {
  preemptedPriorities?: number[];
  preemptedProducts?: string[];
  preemptorPriorities?: number[];
  static names(): { [key: string]: string } {
    return {
      preemptedPriorities: 'PreemptedPriorities',
      preemptedProducts: 'PreemptedProducts',
      preemptorPriorities: 'PreemptorPriorities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preemptedPriorities: { 'type': 'array', 'itemType': 'number' },
      preemptedProducts: { 'type': 'array', 'itemType': 'string' },
      preemptorPriorities: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.preemptedPriorities)) {
      $dara.Model.validateArray(this.preemptedPriorities);
    }
    if(Array.isArray(this.preemptedProducts)) {
      $dara.Model.validateArray(this.preemptedProducts);
    }
    if(Array.isArray(this.preemptorPriorities)) {
      $dara.Model.validateArray(this.preemptorPriorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

