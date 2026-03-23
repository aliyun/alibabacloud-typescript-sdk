// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequest extends $dara.Model {
  clientToken?: string;
  commodityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceClass?: string;
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  /**
   * **if can be null:**
   * true
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineVersion?: string;
  instanceUsedType?: number;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  quantity?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverlessConfigShrink?: string;
  timeType?: string;
  usedTime?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNodeShrink: 'DBNode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceUsedType: 'InstanceUsedType',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverlessConfigShrink: 'ServerlessConfig',
      timeType: 'TimeType',
      usedTime: 'UsedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBNodeShrink: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceUsedType: 'number',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverlessConfigShrink: 'string',
      timeType: 'string',
      usedTime: 'number',
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

