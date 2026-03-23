// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForDeleteDBNodesShrinkRequest extends $dara.Model {
  autoPay?: boolean;
  businessInfo?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  DBInstanceId?: string;
  DBNodeIdShrink?: string;
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
      DBNodeIdShrink: 'DBNodeId',
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
      DBNodeIdShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

