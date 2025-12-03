// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      coreInstanceType: 'CoreInstanceType',
      diskType: 'DiskType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      coreInstanceType: 'string',
      diskType: 'string',
      engine: 'string',
      engineVersion: 'string',
      regionId: 'string',
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

