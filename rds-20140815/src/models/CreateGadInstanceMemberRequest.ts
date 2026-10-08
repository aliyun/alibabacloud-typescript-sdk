// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceMemberRequestUnitNode extends $dara.Model {
  /**
   * @remarks
   * The name of the new unit node. The name must meet the following requirements:
   * - The name must be **2 to 255** characters in length.
   * - The name must start with a Chinese character or a letter. It can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
   * - The name cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage capacity of the new unit node. Unit: GB. The value is incremented in steps of 5 GB. For the value range, see [Instance types](https://help.aliyun.com/document_detail/26312.html). You can also call the DescribeAvailableResource operation to query the available storage capacity range for the target instance type.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * 
   * * **local_ssd**: local SSD
   * * **cloud_ssd**: standard SSD cloud disk
   * * **cloud_essd**: PL1 ESSD cloud disk
   * * **cloud_essd2**: PL2 ESSD cloud disk
   * * **cloud_essd3**: PL3 ESSD cloud disk
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The instance type of the new unit node. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html). You can also call the DescribeAvailableResource operation to query the available instance types in the target region.
   * 
   * @example
   * rds.mysql.t1.small
   */
  dbInstanceClass?: string;
  /**
   * @remarks
   * The conflict resolution policy used when a primary key conflict occurs during data synchronization for the new unit node. Valid values:
   * * **overwrite**: Overwrites the conflicting primary key on the destination node.
   * * **interrupt**: Stops the synchronization task and reports an error.
   * * **ignore**: Overwrites the conflicting primary key on the current node.
   * 
   * This parameter is required.
   * 
   * @example
   * overwrite
   */
  dtsConflict?: string;
  /**
   * @remarks
   * The specification of the data synchronization link for the new unit node. Valid values:
   * * **small**
   * * **medium**
   * * **large**
   * * **micro**
   * 
   * > For more information about the differences between specifications, see [Data synchronization link specifications](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * medium
   */
  dtsInstanceClass?: string;
  /**
   * @remarks
   * The database engine of the new unit node. Only **MySQL** is supported.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the new unit node. Valid values:
   * * **8.0**
   * * **5.7**
   * * **5.6**
   * * **5.5**
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The region ID of the new unit node (secondary node). You can call DescribeRegions to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * The [IP whitelist](https://help.aliyun.com/document_detail/43185.html) of the new unit node. Separate multiple entries with commas (,). Entries cannot be duplicated. A maximum of 1,000 entries are allowed. The following two formats are supported:
   * * IP address format, such as `10.10.XX.XX`.
   * * CIDR format, such as `10.10.XX.XX/24` (Classless Inter-Domain Routing, where **24** indicates the prefix length, ranging from **1 to 32**).
   * 
   * @example
   * 10.10.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID of the new unit node.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1tg609m5j85****
   */
  vSwitchID?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the new unit node.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp19ame5m1r3o****
   */
  vpcID?: string;
  /**
   * @remarks
   * The zone ID of the new unit node. You can call DescribeRegions to query the zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneID?: string;
  /**
   * @remarks
   * The zone ID of the secondary node for the new unit node. You can call DescribeRegions to query the zone ID.
   * * If this value is the same as the **ZoneId** of the current unit node, the single-zone deployment is used.
   * * If this value is different from the **ZoneId** of the current unit node, the multi-zone deployment is used.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIDSlave1?: string;
  /**
   * @remarks
   * The zone ID of the logger node for the new unit node. You can call DescribeRegions to query the zone ID.
   * * If this value is the same as the **ZoneId** of the current unit node, the single-zone deployment is used.
   * * If this value is different from the **ZoneId** of the current unit node, the multi-zone deployment is used.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIDSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbInstanceClass: 'DbInstanceClass',
      dtsConflict: 'DtsConflict',
      dtsInstanceClass: 'DtsInstanceClass',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionID: 'RegionID',
      securityIPList: 'SecurityIPList',
      vSwitchID: 'VSwitchID',
      vpcID: 'VpcID',
      zoneID: 'ZoneID',
      zoneIDSlave1: 'ZoneIDSlave1',
      zoneIDSlave2: 'ZoneIDSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbInstanceClass: 'string',
      dtsConflict: 'string',
      dtsInstanceClass: 'string',
      engine: 'string',
      engineVersion: 'string',
      regionID: 'string',
      securityIPList: 'string',
      vSwitchID: 'string',
      vpcID: 'string',
      zoneID: 'string',
      zoneIDSlave1: 'string',
      zoneIDSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGadInstanceMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the central node. You can call DescribeGadInstances to query the central node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp190h8y69tad****
   */
  centralDBInstanceId?: string;
  /**
   * @remarks
   * The privileged account of the central node. You can call DescribeAccounts to query the account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  centralRdsDtsAdminAccount?: string;
  /**
   * @remarks
   * The password of the privileged account for the central node.
   * 
   * This parameter is required.
   * 
   * @example
   * Test12345
   */
  centralRdsDtsAdminPassword?: string;
  /**
   * @remarks
   * The region ID of the central node (primary node). You can call DescribeRegions to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  centralRegionId?: string;
  /**
   * @remarks
   * A JSON array of database information from the central node. All databases in the array are synchronized to the current unit node. Metric description:
   * * **name**: the database name.
   * * **all**: specifies whether to synchronize all data in the current database or table. Valid values: **true** | **false**.
   * * **Table**: the table name. If the **all** parameter is set to **false**, you must also specify the table names to be synchronized in the JSON array.
   * 
   * Example: `{
   *    "testdb": {
   *     "name": "testdb",
   *     "all": false,
   *     "Table": {
   *       "order": {
   *         "name": "order",
   *         "all": true
   *       },
   *       "ordernew": {
   *         "name": "ordernew",
   *         "all": true
   *       }
   *     }
   *   }
   * }`
   * > For more information, see [Objects for migration, synchronization, or subscribe](https://help.aliyun.com/document_detail/209545.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {    "testdb": {     "name": "testdb",     "all": false,     "Table": {       "order": {         "name": "order",         "all": true       },       "ordernew": {         "name": "ordernew",         "all": true       }     }   } }
   */
  DBList?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS global active database cluster. You can call DescribeGadInstances to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gad-rm-bp1npi2j8****
   */
  gadInstanceId?: string;
  /**
   * @remarks
   * The list of unit node (secondary node) information.
   * 
   * This parameter is required.
   */
  unitNode?: CreateGadInstanceMemberRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      gadInstanceId: 'GadInstanceId',
      unitNode: 'UnitNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralDBInstanceId: 'string',
      centralRdsDtsAdminAccount: 'string',
      centralRdsDtsAdminPassword: 'string',
      centralRegionId: 'string',
      DBList: 'string',
      gadInstanceId: 'string',
      unitNode: { 'type': 'array', 'itemType': CreateGadInstanceMemberRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

