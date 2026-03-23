// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZonesRequest extends $dara.Model {
  category?: string;
  commodityCode?: string;
  DBInstanceName?: string;
  dispenseMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      DBInstanceName: 'DBInstanceName',
      dispenseMode: 'DispenseMode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      DBInstanceName: 'string',
      dispenseMode: 'string',
      engine: 'string',
      engineVersion: 'string',
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

