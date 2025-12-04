// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription duration of the instance. The parameter is required if the instance is an subscription instance.
   * 
   * *   If PricingCycle is set to Month, set this parameter to an integer that ranges from 1 to 9.
   * *   If PricingCycle is set to Year, set this parameter to an integer that ranges from 1 to 3.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the instance.
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
   * *   **PREPAY**: subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration for the instance. Valid values:
   * 
   * *   Month
   * *   Year
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

