// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillingBillTierDTO extends $dara.Model {
  /**
   * @example
   * {"context_tier": "0-32k"}
   */
  dimValues?: string;
  /**
   * @example
   * 0.05
   */
  payableAmount?: number;
  /**
   * @example
   * {"input_tokens": 1000, "output_tokens": 500}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      dimValues: 'dimValues',
      payableAmount: 'payableAmount',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimValues: 'string',
      payableAmount: 'number',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

