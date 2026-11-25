// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription duration. This parameter is required when you change the billing method to subscription.
   * 
   * - If PricingCycle is set to Month, valid values are [1, 9].
   * 
   * - If PricingCycle is set to Year, valid values are [1, 3].
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: subscription
   * - **POSTPAY**: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required when you change the billing method to subscription. Valid values:
   * 
   * - Month: month
   * 
   * - Year: year
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

