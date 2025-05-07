// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateOrderForDeleteDBNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * 1.  **true**: automatically completes the payment. You must make sure that your account balance is sufficient.
   * 2.  **false**: does not automatically complete the payment. An unpaid order is generated.
   * 
   * >  The default value is true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * True
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The additional business information about the instance.
   * 
   * @example
   * {\\"promotion_input_param\\":\\"{\\\\\\"promotionFilter\\\\\\":{},\\\\\\"promotionOptionCode\\\\\\":\\\\\\"youhui_quan\\\\\\"}\\"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code. Valid value:
   * 
   * *   **bards**: The instance is a pay-as-you-go primary instance.
   * *   **rds**: The instance is a subscription primary instance.
   * *   **rords**: The instance is a pay-as-you-go read-only instance.
   * *   **rds_rordspre_public_cn**: The instance is a subscription read-only instance.
   * *   **bards_intl**: The instance is a pay-as-you-go primary instance.
   * *   **rds_intl**: The instance is a subscription primary instance.
   * *   **rords_intl**: The instance is a pay-as-you-go read-only instance.
   * *   **rds_rordspre_public_intl**: The instance is a subscription read-only instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-wz9rziy3he051if82
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The node IDs.
   */
  DBNodeId?: string[];
  /**
   * @remarks
   * The major engine version of the destination instance. The value of this parameter varies based on the value of **Engine**.
   * 
   * *   Valid values when Engine is set to MySQL: **5.5, 5.6, 5.7, and 8.0**
   * *   Valid values when Engine is set to SQLServer: **2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent**
   * *   Valid values when Engine is set to PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The type of the database node. Valid value:
   * 
   * *   **Master**: the primary node
   * *   **Slave**: the secondary node
   * 
   * @example
   * Master
   */
  nodeType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * aliwood-1688-mobile-promotion
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource of the instance.
   * 
   * @example
   * buy
   */
  resource?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      DBInstanceId: 'DBInstanceId',
      DBNodeId: 'DBNodeId',
      engineVersion: 'EngineVersion',
      nodeType: 'NodeType',
      ownerId: 'OwnerId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      commodityCode: 'string',
      DBInstanceId: 'string',
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
      engineVersion: 'string',
      nodeType: 'string',
      ownerId: 'number',
      promotionCode: 'string',
      regionId: 'string',
      resource: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeId)) {
      $dara.Model.validateArray(this.DBNodeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

