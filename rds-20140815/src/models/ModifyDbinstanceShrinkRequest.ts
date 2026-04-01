// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceShrinkRequest extends $dara.Model {
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
  DBNodesShrink?: string;
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
  parametersShrink?: string;
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
      DBNodesShrink: 'DBNodes',
      direction: 'Direction',
      effectiveTime: 'EffectiveTime',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parametersShrink: 'Parameters',
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
      DBNodesShrink: 'string',
      direction: 'string',
      effectiveTime: 'string',
      ioAccelerationEnabled: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parametersShrink: 'string',
      promotionCode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetMinorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

