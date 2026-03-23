// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDBNode extends $dara.Model {
  classCode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
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

export class DescribePriceRequestServerlessConfig extends $dara.Model {
  maxCapacity?: number;
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $dara.Model {
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
  DBNode?: DescribePriceRequestDBNode[];
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
  serverlessConfig?: DescribePriceRequestServerlessConfig;
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
      DBNode: 'DBNode',
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
      serverlessConfig: 'ServerlessConfig',
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
      DBNode: { 'type': 'array', 'itemType': DescribePriceRequestDBNode },
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
      serverlessConfig: DescribePriceRequestServerlessConfig,
      timeType: 'string',
      usedTime: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

