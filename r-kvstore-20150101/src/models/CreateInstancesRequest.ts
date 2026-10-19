// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * * **true**: enables automatic payment. This is the default value.
   * * **false**: disables automatic payment. You must manually pay for the order. In the top navigation bar of the console, choose **Billing** > **Renewal Management**. In the left-side navigation pane, choose **Order Management** > **My Orders**, find the order, and then complete the payment.
   * 
   * > This parameter is available only when the **ChargeType** parameter in the **Instances** array is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal. This is the default value.
   * 
   * > This parameter is available only when the **ChargeType** parameter in the **Instances** array is set to **PrePaid**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The extended business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The Redis-compatible engine version of the instance. Valid values: **4.0** and **5.0**.
   * > Default value: **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The configuration information of the new instances. The value must be in JSON format. For more information, see the supplementary description of the Instances parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * [{
   *     "RegionId": "cn-hangzhou",
   *     "izNo": "cn-hangzhou-b",
   *     "quantity": 1,
   *     "instanceType": "Redis",
   *     "instanceClass": "redis.logic.sharding.1g.2db.0rodb.4proxy.default",
   *     "EngineVersion": "5.0", 
   *     "ChargeType":"PrePaid",
   *     "Period":"1",
   *     "networkType": "VPC" ,
   *     "vpcId": "vpc-2zex6u1nu32k3ux35oxxx", 
   *     "vSwitchId": "vsw-2zesk464e647104kw3xxx"
   * }]
   */
  instances?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to rebuild and restore the source instance from the recycle bin. Valid values:
   * * **true**: yes.
   * * **false**: no. This is the default value.
   * 
   * > This parameter is available only when the **SrcDBInstanceId** parameter is specified in the **Instances** array.
   * 
   * @example
   * false
   */
  rebuildInstance?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-resourcegroupid1
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      engineVersion: 'EngineVersion',
      instances: 'Instances',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rebuildInstance: 'RebuildInstance',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      engineVersion: 'string',
      instances: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rebuildInstance: 'boolean',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

