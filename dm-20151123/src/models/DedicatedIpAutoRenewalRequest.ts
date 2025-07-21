// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpAutoRenewalRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable auto-renewal
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoRenewal?: string;
  /**
   * @remarks
   * Purchase instance ID, separated by English commas if multiple.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx,xxx
   */
  buyResourceIds?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      buyResourceIds: 'BuyResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'string',
      buyResourceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

