// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnpaidOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ng-12zxs328sha2
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      billingInstanceId: 'BillingInstanceId',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingInstanceId: 'string',
      instanceId: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

