// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * rm-***************.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The number of CPU cores of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * 8
   */
  DBInstanceCPU?: string;
  /**
   * @remarks
   * The instance family of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   **x**: general-purpose instance family
   * *   **d**: dedicated instance family
   * *   **h**: dedicated host instance family
   * 
   * @example
   * x
   */
  DBInstanceClassType?: string;
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * rm-*****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory size of the custom ApsaraDB RDS for MySQL instance at the storage layer. Unit: MB.
   * 
   * @example
   * 8192
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * The status of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   0: The instance is being created.
   * *   1: The instance is running.
   * *   3: The instance is being deleted.
   * *   5: The instance is being restarted.
   * *   6: The instance is being upgraded or downgraded.
   * *   7: The instance is being backed up.
   * *   8: The network type of the instance is being changed.
   * *   9: The instance is being migrated.
   * *   11: The data stored on the instance is being migrated.
   * *   12: A disaster recovery instance is being generated.
   * *   13: Data is being imported to the instance.
   * *   14: Data is being imported from another RDS instance to the instance.
   * *   15: A switchover is being performed.
   * *   16: A temporary instance is being created.
   * *   17: The network of the instance is being created.
   * *   18: The instance is being cloned.
   * *   19: The link is being changed.
   * *   20: The read-only RDS instances of the instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage space of the custom ApsaraDB RDS for MySQL instance at the storage layer. Unit: GB.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The type of the instance at the storage layer. The value is RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * dm-*************
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * The engine type of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is 8.0.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The lock mode of the RDS instance. Valid values:
   * 
   * 0: The instance is not locked.
   * 
   * 1: The instance is manually locked.
   * 
   * 2: The instance is automatically locked if the instance expires.
   * 
   * 3: The instance is automatically locked if the instance is rolled back.
   * 
   * 4: The instance is automatically locked if the storage space of the instance reaches the upper limit.
   * 
   * 5: The instance is automatically locked if the storage space of the read-only instances reaches the upper limit.
   * 
   * @example
   * 1
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason why the RDS instance is locked.
   * 
   * @example
   * Manually Locked
   */
  lockReason?: string;
  /**
   * @remarks
   * The network type of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is VPC.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   Postpaid: pay-as-you-go
   * *   Prepaid: subscription
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the instance over an internal network.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   Primary: primary instance
   * *   Readonly: read-only instance
   * 
   * @example
   * Primary
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The read and write weights of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * 0
   */
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClassType: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'number',
      lockReason: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance },
    };
  }

  validate() {
    if(Array.isArray(this.dbInstance)) {
      $dara.Model.validateArray(this.dbInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom ApsaraDB RDS for MySQL instances at the storage layer.
   */
  dbInstances?: DescribeDrdsRdsInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123DB16B-02F2-45F7-A571-843991******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeDrdsRdsInstancesResponseBodyDbInstances,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstances && typeof (this.dbInstances as any).validate === 'function') {
      (this.dbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

