// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-kasjgfjshgf
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. This parameter is required if you switch the billing method to subscription. Valid values:
   * 
   * *   1 to 9
   * *   12
   * *   24
   * *   36
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service to which the instance belongs.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * >  After the call is successful, the billing method of the instance is switched.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      period: 'Period',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      period: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

