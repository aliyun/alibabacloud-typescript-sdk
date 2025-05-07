// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * @example
   * rm-uf6wjk5*******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * @example
   * dhg-4n*****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values: **MySQL** and **PostgreSQL**.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   Valid values when you set the Engine parameter to MySQL: **8.0**, **5.7**, **5.6**, and **5.5**
   * *   Valid values when you set the Engine parameter to PostgreSQL: **15.0**, **14.0**, **13.0**, **12.0**, **11.0**, and **10.0**
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The minor engine version of the instance. You can specify this parameter to query the minor engine version of the instance.
   * 
   * @example
   * rds_20220731
   */
  minorVersionTag?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * HighAvailability
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd**: local SSD
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: enhanced SSD (ESSD) of performance level 1 (PL1)
   * *   **cloud_essd2**: ESSD of PL2
   * *   **cloud_essd3**: ESSD of PL3
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      minorVersionTag: 'MinorVersionTag',
      nodeType: 'NodeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      engine: 'string',
      engineVersion: 'string',
      minorVersionTag: 'string',
      nodeType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

