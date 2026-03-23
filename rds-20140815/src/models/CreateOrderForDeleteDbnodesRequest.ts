// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForDeleteDBNodesRequest extends $dara.Model {
  autoPay?: boolean;
  businessInfo?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  DBInstanceId?: string;
  DBNodeId?: string[];
  engineVersion?: string;
  nodeType?: string;
  ownerId?: number;
  promotionCode?: string;
  regionId?: string;
  resource?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

