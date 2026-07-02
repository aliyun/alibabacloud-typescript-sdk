// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * \\* **true**: Enables automatic payment. This is the default value.
   * \\* **false**: Disables automatic payment. You must go to the console to complete the payment. In the top navigation bar, choose **Expenses** > **Renewal Management**. In the navigation pane on the left, click **Or*er Management** > **My Or*ers**, find the or*er, and then complete the payment.
   * \\> This parameter is valid only when **ChargeType** is set to **PrePaid** in **Instances**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * \\* **true**: Enables auto-renewal.
   * \\* **false**: Disables auto-renewal. This is the default value.
   * \\> This parameter is valid only when **ChargeType** is set to **PrePaid** in **Instances**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * Additional business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. The default value is `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The Redis-compatible engine version for the instance. Valid values: **4.0** and **5.0**. The default value is **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The configurations of the new instances, specified in JSON format. For more information, see the details of the Instances parameter.
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
   * Specifies whether to rebuild an instance from the recycle bin. Valid values:
   * \\* **true**: Rebuilds the instance.
   * \\* **false**: Does not rebuild the instance. This is the default value.
   * \\> This parameter is valid only when **SrcDBInstanceId** is specified in **Instances**.
   * 
   * @example
   * false
   */
  rebuildInstance?: boolean;
  /**
   * @remarks
   * The resource group ID.
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
   * A client-generated token to ensure request idempotence. The value must be unique across requests, case-sensitive, and up to 64 ASCII characters long.
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

