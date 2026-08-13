// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnpaidOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that is associated with the bill. For the default compute group, which includes the FE compute group and the default BE compute group, this parameter is the instance ID. For other compute groups, this parameter is the compute group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-12zxs328sha2
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Order type
   * 
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

