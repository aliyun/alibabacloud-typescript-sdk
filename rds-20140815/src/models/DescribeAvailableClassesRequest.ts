// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  commodityCode?: string;
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceStorageType?: string;
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
  instanceChargeType?: string;
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorageType: 'DBInstanceStorageType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceChargeType: 'InstanceChargeType',
      orderType: 'OrderType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      DBInstanceId: 'string',
      DBInstanceStorageType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceChargeType: 'string',
      orderType: 'string',
      regionId: 'string',
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

