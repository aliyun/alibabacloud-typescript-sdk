// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default).
   * *   **false**. If automatic payment is disabled, you must perform the following steps to complete the payment in the Tair (Redis OSS-compatible) console: In the top navigation bar, choose **Expenses** > **Renewal Management**. In the left-side navigation pane, click **Orders**. On the **Orders** page, find the order and complete the payment.
   * 
   * >  This parameter is valid only if the value of the **ChargeType** field in the **Instances** parameter is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Default value: false. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  This parameter is available only if **ChargeType** in the **Instances** parameter is set to **PrePaid**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The additional business information about the instance.
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
   * The database engine version of the instance. Valid values: **4.0** and **5.0**.
   * 
   * >  The default value is **5.0**.
   * 
   * Valid values:
   * 
   * *   2.8
   * *   4.0
   * *   5.0
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The JSON-formatted configurations of the instance. For more information, see the "Additional description of the Instances parameter" section.
   * 
   * This parameter is required.
   * 
   * @example
   * [{	"RegionId": "cn-hangzhou",	"izNo": "cn-hangzhou-b",	"quantity": 2,	"instanceType": "Redis",	"instanceClass": "redis.master.small.default",	"EngineVersion": "5.0",	"ChargeType": "PostPaid"}]
   */
  instances?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to restore the source instance from the recycle bin. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is valid only if the **SrcDBInstanceId** field in the **Instances** parameter is specified.
   * 
   * @example
   * false
   */
  rebuildInstance?: boolean;
  /**
   * @remarks
   * The ID of the resource group to which to assign the instance.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token is case-sensitive. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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

