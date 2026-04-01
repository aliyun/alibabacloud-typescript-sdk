// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceRequestDBNodes extends $dara.Model {
  /**
   * @example
   * 28542293
   */
  nodeId?: string;
  /**
   * @example
   * Master
   */
  role?: string;
  /**
   * @example
   * vsw-bp1g7uym6ia6yroes6dkm
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-shanghai-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      role: 'Role',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      role: 'string',
      vSwitchId: 'string',
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

export class ModifyDBInstanceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @example
   * Standard
   */
  category?: string;
  /**
   * @example
   * true
   */
  coldDataEnabled?: boolean;
  /**
   * @example
   * pg.n4.2c.1m
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pgm-bp15i4hn07r******
   */
  DBInstanceId?: string;
  /**
   * @example
   * 500
   */
  DBInstanceStorage?: number;
  /**
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  DBNodes?: ModifyDBInstanceRequestDBNodes[];
  /**
   * @example
   * Up
   */
  direction?: string;
  /**
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * rpg-dp****
   */
  parameterGroupId?: string;
  parameters?: { [key: string]: string };
  /**
   * @example
   * aliwood-1688-mobile-promotion
   */
  promotionCode?: string;
  /**
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  /**
   * @example
   * rds_postgres_1200_20200830
   */
  targetMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNodes: 'DBNodes',
      direction: 'Direction',
      effectiveTime: 'EffectiveTime',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      promotionCode: 'PromotionCode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBNodes: { 'type': 'array', 'itemType': ModifyDBInstanceRequestDBNodes },
      direction: 'string',
      effectiveTime: 'string',
      ioAccelerationEnabled: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promotionCode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetMinorVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

