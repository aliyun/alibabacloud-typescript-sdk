// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionOccupancyOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payments. Valid values:
   * 
   * *   **true**: yes Make sure that you have a sufficient balance in your account. Otherwise, your order becomes invalid and is automatically canceled.
   * *   **false**: disables automatic payment. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * @example
   * CBCE910E-D396-4944
   */
  clientToken?: string;
  /**
   * @remarks
   * The billing method. Set the value to
   * 
   * **PrePaid**, which specifies the subscription billing method. If you choose this billing method, make sure that your Alibaba Cloud account supports balance payments or credit payments.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   If **PricingCycle** is set to **Month**, set **Period** to a value from **1 to 9**.
   * *   If **PricingCycle** is set to **Year**, set **Period** to a value from **1 to 5**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * 
   * *   **Month** (default)
   * *   **Year**
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      instanceChargeType: 'InstanceChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      physicalConnectionId: 'PhysicalConnectionId',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      clientToken: 'string',
      instanceChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      physicalConnectionId: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

