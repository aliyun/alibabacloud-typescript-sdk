// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGADInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at a time. Valid values of N: **1** to **20**. Empty strings are not allowed.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can create up to N tag values at a time. Valid values of N: **1** to **20**. Empty strings are allowed.
   * 
   * @example
   * testvalue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGADInstanceRequestUnitNode extends $dara.Model {
  /**
   * @remarks
   * The name of the new unit node. The name must meet the following rules:
   * - The name must be **2** to **255** characters in length.
   * - The name must start with a letter or a Chinese character and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * - The name cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage capacity of the new unit node. Unit: GB. The storage capacity increases in increments of 5 GB. For more information about the valid values, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html). You can also call the DescribeAvailableResource operation to query the available storage capacity range for the target instance type.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * * **local_ssd**: Premium Local SSD (recommended).
   * * **cloud_ssd**: standard SSD (not recommended, and no longer available in some regions).
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * 
   * The default value of this parameter is automatically determined based on the instance type code specified in the **DBInstanceClass** parameter:
   * - If the instance type code is for a Premium Local SSD, the default value is **local_ssd**.
   * - If the instance type code is for a cloud disk, the default value is **cloud_essd**.
   * 
   * @example
   * cloud_essd2
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The instance type of the new unit node. For more information about the valid values, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html). You can also call the DescribeAvailableResource operation to query the available instance types in the target region.
   * 
   * @example
   * rds.mysql.t1.small
   */
  dbInstanceClass?: string;
  /**
   * @remarks
   * The resolution policy for primary key conflicts that occur during synchronization on the new unit node. Valid values:
   * * **overwrite**: overwrites the conflicting primary keys in the destination node.
   * * **interrupt**: interrupts the synchronization task, reports an error, and exits.
   * * **ignore**: ignores the conflicting primary keys in the current node.
   * 
   * This parameter is required.
   * 
   * @example
   * overwrite
   */
  dtsConflict?: string;
  /**
   * @remarks
   * The data synchronization link specification for the new unit node. Valid values:
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
   * The billing method of the new unit node. Valid values:
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * 
   * > The system automatically generates an order and completes the payment. Manual payment confirmation is not required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the new unit node. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * The [IP whitelist](https://help.aliyun.com/document_detail/43185.html) of the new unit node. Separate multiple entries with commas (,). Duplicate entries are not allowed. A maximum of 1,000 entries are supported. The following two formats are supported:
   * * IP address format, such as `10.10.10.10`.
   * * CIDR block format, such as `10.10.10.10/24` (Classless Inter-Domain Routing, where **24** indicates the length of the prefix in the address, ranging from **1** to **32**).
   * 
   * @example
   * 10.10.10.10
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID of the new unit node.
   * 
   * @example
   * vsw-bp1tg609m5j85****
   */
  vSwitchID?: string;
  /**
   * @remarks
   * The VPC ID of the new unit node.
   * 
   * @example
   * vpc-bp19ame5m1r3o****
   */
  vpcID?: string;
  /**
   * @remarks
   * The zone ID of the new unit node. You can call the DescribeRegions operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneID?: string;
  /**
   * @remarks
   * The active zone ID of the secondary node for the new unit node. You can call the DescribeRegions operation to query the active zone ID.
   * * If this value is the same as the **ZoneId** of the current unit node, it is a single-zone deployment.
   * * If this value is different from the **ZoneId** of the current unit node, it is a multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIDSlave1?: string;
  /**
   * @remarks
   * The active zone ID of the logger node for the new unit node. You can call the DescribeRegions operation to query the active zone ID.
   * * If this value is the same as the **ZoneId** of the current unit node, it is a single-zone deployment.
   * * If this value is different from the **ZoneId** of the current unit node, it is a multi-zone deployment.
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
      payType: 'PayType',
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
      payType: 'string',
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

export class CreateGADInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary instance. You can call the DescribeDBInstances operation to query the ID. This instance serves as the central node (primary node) of the ApsaraDB RDS global active database cluster.
   * 
   * > * A primary instance ID can serve as the central node of only one ApsaraDB RDS global active database cluster.
   * > * Only primary ApsaraDB RDS for MySQL instances in the China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), and China (Chengdu) regions can serve as the central node of an ApsaraDB RDS global active database cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  centralDBInstanceId?: string;
  /**
   * @remarks
   * The privileged account of the central node. You can call the DescribeAccounts operation to query the account.
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
   * The region ID of the central node. You can call the DescribeRegions operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  centralRegionId?: string;
  /**
   * @remarks
   * The JSON array of database information in the central node. All database information in the array is used for synchronization to the current unit node (secondary node). Parameter description:
   * * **name**: the name of the database.
   * * **all**: specifies whether to synchronize all data in the current database or table. Valid values: **true** and **false**.
   * * **Table**: the name of the table. If the **all** parameter is set to **false**, you must also include the names of the tables to be synchronized in the JSON array.
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
   * 
   * This parameter is required.
   * 
   * @example
   * {    "testdb": {     "name": "testdb",     "all": false,     "Table": {       "order": {         "name": "order",         "all": true       },       "ordernew": {         "name": "ordernew",         "all": true       }     }   } }
   */
  DBList?: string;
  /**
   * @remarks
   * The name of the ApsaraDB RDS global active database cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateGADInstanceRequestTag[];
  /**
   * @remarks
   * The information about the unit node.
   * 
   * This parameter is required.
   */
  unitNode?: CreateGADInstanceRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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
      description: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateGADInstanceRequestTag },
      unitNode: { 'type': 'array', 'itemType': CreateGADInstanceRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

