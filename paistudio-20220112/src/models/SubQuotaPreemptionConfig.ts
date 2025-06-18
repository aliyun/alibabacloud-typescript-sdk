// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubQuotaPreemptionConfig extends $dara.Model {
  /**
   * @example
   * 9
   */
  preemptedPriorityUpperBound?: number;
  preemptedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      preemptedPriorityUpperBound: 'PreemptedPriorityUpperBound',
      preemptedProducts: 'PreemptedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preemptedPriorityUpperBound: 'number',
      preemptedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.preemptedProducts)) {
      $dara.Model.validateArray(this.preemptedProducts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

