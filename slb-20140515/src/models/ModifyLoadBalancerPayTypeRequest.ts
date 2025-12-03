// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerPayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * >  This parameter is valid only when the `PayType` parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   If **PricingCycle** is set to **month**, the valid values are **1** to **9**.
   * *   If **PricingCycle** is set to **year**, the valid values are **1** to **3**.
   * 
   * >  This parameter is valid only when the **PayType** parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   **PayOnDemand** (default): pay-as-you-go
   * 
   * To change the billing method of a pay-as-you-go CLB instance to subscription, you must set the parameter to **PrePay**. In addition, the previous billing method of the CLB instance must be **PayOnDemand**.
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * Valid values: **year** and **month**.
   * 
   * >  This parameter is valid only when the **PayType** parameter is set to **PrePay**. This parameter is valid only for pay-as-you-go instances.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
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
      duration: 'Duration',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      duration: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
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

