// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistributionMaxRefundFee extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxRefundFee?: number;
  /**
   * @example
   * 1
   */
  minRefundFee?: number;
  static names(): { [key: string]: string } {
    return {
      maxRefundFee: 'maxRefundFee',
      minRefundFee: 'minRefundFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRefundFee: 'number',
      minRefundFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

