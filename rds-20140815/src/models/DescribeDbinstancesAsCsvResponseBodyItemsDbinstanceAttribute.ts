// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones } from "./DescribeDbinstancesAsCsvResponseBodyItemsDbinstanceAttributeSlaveZones";


export class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * The maximum number of accounts.
   * 
   * @example
   * 500
   */
  accountMaxQuantity?: number;
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * super
   */
  accountType?: string;
  /**
   * @remarks
   * The service availability of the instance in percentage.
   * 
   * @example
   * 100
   */
  availabilityValue?: string;
  /**
   * @remarks
   * The category of the instance.
   * 
   * @example
   * 0
   */
  category?: string;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **Performance**: standard mode.
   * *   **Safety**: enhanced mode
   * 
   * @example
   * Performance
   */
  connectionMode?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2011-05-30T12:11:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  DBInstanceCPU?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.mys2.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * s
   */
  DBInstanceClassType?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * 0
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory capacity of the instance. Unit: MB.
   * 
   * @example
   * 4096
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **Primary**: primary instance
   * *   **ReadOnly**: read-only instance
   * *   **Guard**: disaster recovery instance
   * *   **Temp**: temporary instance
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The maximum number of databases that can be created on the instance.
   * 
   * @example
   * 200
   */
  DBMaxQuantity?: number;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2019-03-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * API
   */
  exportKey?: string;
  /**
   * @remarks
   * The ID of the disaster recovery instance that is attached to the primary instance.
   * 
   * @example
   * rm-uf64zsuxxxxxxxxxx
   */
  guardDBInstanceId?: string;
  /**
   * @remarks
   * The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance comes from its primary instance. The incremental data of a read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  incrementSourceDBInstanceId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The lock mode of the instance.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the instance was locked.
   * 
   * @example
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The maintenance window of the instance. The time follows the ISO 8601 standard and is displayed in UTC. In the ApsaraDB RDS console, the maintenance window is displayed in UTC+8.
   * 
   * @example
   * 00:00Z-02:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The primary instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 60
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum number of I/O requests per second.
   * 
   * @example
   * 150
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance over an internal network.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The latency of data replication from the primary instance to the read-only instance. This parameter is valid for read-only instances.
   * 
   * @example
   * 0
   */
  readDelayTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 42.xx.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   */
  slaveZones?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones;
  /**
   * @remarks
   * N/A.
   * 
   * @example
   * No
   */
  supportUpgradeAccountType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * 0
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the temporary instance that is attached to the primary instance.
   * 
   * @example
   * rm-uf64zsuxxxxxxxxxx
   */
  tempDBInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6adz52c2pxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf6f7l4fg90xxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountMaxQuantity: 'AccountMaxQuantity',
      accountType: 'AccountType',
      availabilityValue: 'AvailabilityValue',
      category: 'Category',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      DBMaxQuantity: 'DBMaxQuantity',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      exportKey: 'ExportKey',
      guardDBInstanceId: 'GuardDBInstanceId',
      incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      masterInstanceId: 'MasterInstanceId',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      payType: 'PayType',
      port: 'Port',
      readDelayTime: 'ReadDelayTime',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      slaveZones: 'SlaveZones',
      supportUpgradeAccountType: 'SupportUpgradeAccountType',
      tags: 'Tags',
      tempDBInstanceId: 'TempDBInstanceId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountMaxQuantity: 'number',
      accountType: 'string',
      availabilityValue: 'string',
      category: 'string',
      connectionMode: 'string',
      connectionString: 'string',
      creationTime: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      DBMaxQuantity: 'number',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      exportKey: 'string',
      guardDBInstanceId: 'string',
      incrementSourceDBInstanceId: 'string',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      masterInstanceId: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      payType: 'string',
      port: 'string',
      readDelayTime: 'string',
      regionId: 'string',
      securityIPList: 'string',
      slaveZones: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones,
      supportUpgradeAccountType: 'string',
      tags: 'string',
      tempDBInstanceId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.slaveZones && typeof (this.slaveZones as any).validate === 'function') {
      (this.slaveZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

