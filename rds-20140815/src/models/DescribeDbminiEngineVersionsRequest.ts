// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the DescribeDBInstances operation to query the ID.
   * 
   * > For an ApsaraDB RDS for PostgreSQL instance, if you specify the instance ID, the system queries only the minor engine versions that are later than the current minor engine version of the instance.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster. You can call the DescribeDedicatedHostGroups operation to query the ID.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The database engine. Valid values: **MySQL** and **PostgreSQL**.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * * MySQL: **8.0**, **5.7**, **5.6**, and **5.5**.
   * * PostgreSQL: **17.0**, **16.0**, **15.0**, **14.0**, **13.0**, **12.0**, **11.0**, and **10.0**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The minor engine version number of the instance. Specify this parameter to query the details of a specific minor engine version.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for MySQL.
   * 
   * @example
   * rds_20220731
   */
  minorVersionTag?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * * **Basic**: Basic Edition.
   * * **HighAvailability**: High-availability Edition.
   * * **cluster**: Cluster Edition.
   * * **Finance**: RDS Enterprise Edition.
   * 
   * @example
   * HighAvailability
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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
   * The instance storage type. Valid values:
   * * **local_ssd**: premium local SSD.
   * * **general_essd**: premium performance disk.
   * * **cloud_ssd**: standard SSD.
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
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

