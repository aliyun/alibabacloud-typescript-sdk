// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForDeleteDBNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * 1. **true**: enables automatic payment. You must ensure that your account balance is sufficient.
   * 
   * 1. **false**: generates an unpaid order without deducting fees.
   * 
   * > Default value: true. If your payment method has an insufficient balance, you can change the Settings of the AutoPay parameter to false. In this case, an unpaid order is generated, and you can logon to the ApsaraDB RDS console to pay for the order.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business extension parameters.
   * 
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the instance ID.
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
   * MySQL: **5.5, 5.6, 5.7, and 8.0**
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
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

