// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForDeleteDBNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete automatic payment. Valid values:
   * 
   * 1. **true**: automatically completes automatic payment. Make sure that your account balance is sufficient.
   * 
   * 1. **false**: generates the order without completing automatic payment.
   * 
   * 
   * 
   * 
   * > Default value: true. If your payment method has insufficient balance, set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ApsaraDB RDS console to complete automatic payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The additional business information about the instance.
   * 
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * * **bards**: pay-as-you-go primary instance
   * * **rds**: subscription primary instance
   * * **rords**: pay-as-you-go read-only instance
   * * **rds_rordspre_public_cn**: subscription read-only instance
   * * **bards_intl**: pay-as-you-go primary instance
   * * **rds_intl**: subscription primary instance
   * * **rords_intl**: pay-as-you-go read-only instance
   * * **rds_rordspre_public_intl**: subscription read-only instance
   * 
   * This parameter is required.
   * 
   * @example
   * bards
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * @example
   * rm-8vb9******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of node IDs.
   */
  DBNodeId?: string[];
  /**
   * @remarks
   * The current database engine version. Valid values:
   * 
   * MySQL: **5.5, 5.6, 5.7, 8.0**
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The database node type. Valid values:
   * - **Master**: primary node
   * - **Slave**: secondary node
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * buy
   */
  resource?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

