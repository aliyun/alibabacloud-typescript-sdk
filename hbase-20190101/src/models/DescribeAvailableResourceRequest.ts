// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - **Prepaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The specifications of the core node. For more information about valid values, see [Instance node specifications](https://help.aliyun.com/document_detail/194870.html).
   * 
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The disk type of the core node. Valid values:
   * - **cloud_efficiency**: ultra cloud disk
   * - **cloud_ssd**: standard SSD
   * - **cloud_essd_pl1**: ESSD
   * - **local_hdd_pro**: local HDD
   * - **local_ssd_pro**: local SSD.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The service type of the instance. Valid values:
   * - **hbase**: ApsaraDB for HBase Standard Edition standard instance.
   * - **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition standard instance.
   * - **singlehbase**: ApsaraDB for HBase single-node standard instance.
   * - **bds**: Data Synchronization (BDS) service.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * The version number of the service type. Valid values:
   * - **1.0**: The Data Synchronization (BDS) service supports version 1.0.
   * - **1.1**: ApsaraDB for HBase Standard Edition standard instances and ApsaraDB for HBase single-node standard instances support version 1.1.
   * - **2.0**: ApsaraDB for HBase Standard Edition standard instances, ApsaraDB for HBase Performance-enhanced Edition standard instances, and ApsaraDB for HBase single-node standard instances support version 2.0.
   * 
   * > Specify the version number based on the service type of the ApsaraDB for HBase instance.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query available zones.
   * 
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

