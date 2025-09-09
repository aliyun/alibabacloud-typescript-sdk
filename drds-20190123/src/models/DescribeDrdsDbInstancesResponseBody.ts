// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates the endpoint that is used to connect to the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * Indicates the state of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **0**: The ApsaraDB RDS for MySQL instance is being created.
   * *   **1**: The ApsaraDB RDS for MySQL instance is running.
   * *   **3**: The ApsaraDB RDS for MySQL instance is being deleted.
   * *   **5**: The ApsaraDB RDS for MySQL instance is being restarted.
   * *   **6**: The ApsaraDB RDS for MySQL instance is being upgraded or downgraded.
   * *   **7**: The ApsaraDB RDS for MySQL instance is being backed up.
   * *   **8**: The network type of the ApsaraDB RDS for MySQL instance is being changed.
   * *   **9**: The ApsaraDB RDS for MySQL instance is being migrated.
   * *   **11**: The data of the ApsaraDB RDS for MySQL instance is being migrated.
   * *   **12**: A disaster-recovery instance is being generated.
   * *   **13**: Data is being imported to the ApsaraDB RDS for MySQL instance.
   * *   **14**: Data is being imported to the ApsaraDB RDS for MySQL instance from an another ApsaraDB RDS for MySQL instance.
   * *   **15**: A failover is being performed.
   * *   **16**: A temporary instance is being created.
   * *   **17**: A network is being created for the ApsaraDB RDS for MySQL instance.
   * *   **18**: The ApsaraDB RDS for MySQL instance is being cloned.
   * *   **19**: The link is being changed.
   * *   **20**: The read-only instances of the ApsaraDB RDS for MySQL instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * Indicates the type of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. The value is set to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the ID of a resource.
   * 
   * @example
   * dm-hbgau1zp****
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * Indicates the engine of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * Indicates the engine version of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates the timestamp when the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database expires.
   * 
   * @example
   * 123421352351234
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates the name of a read-only instance.
   * 
   * @example
   * **
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates the network type of the read-only instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Indicates the billing method of the read-only instance.
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Indicates the port that is used to connect to the read-only instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Indicates the type of the read-only instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * Indicates the read weight of the read-only instance.
   * 
   * @example
   * 70
   */
  readWeight?: number;
  /**
   * @remarks
   * Indicates the number of remaining days before the read-only instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceName: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances extends $dara.Model {
  readOnlyInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyInstance)) {
      $dara.Model.validateArray(this.readOnlyInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates the endpoint that is used to connect to an ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * Indicates the ID of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates the state of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **0**: The ApsaraDB RDS for MySQL instance is being created.
   * *   **1**: The ApsaraDB RDS for MySQL instance is running.
   * *   **3**: The ApsaraDB RDS for MySQL instance is being deleted.
   * *   **5**: The ApsaraDB RDS for MySQL instance is being restarted.
   * *   **6**: The ApsaraDB RDS for MySQL instance is being upgraded or downgraded.
   * *   **7**: The ApsaraDB RDS for MySQL instance is being backed up.
   * *   **8**: The network type of the ApsaraDB RDS for MySQL instance is being changed.
   * *   **9**: The ApsaraDB RDS for MySQL instance is being migrated.
   * *   **11**: The data of the ApsaraDB RDS for MySQL instance is being migrated.
   * *   **12**: A disaster-recovery instance is being generated.
   * *   **13**: Data is being imported to the ApsaraDB RDS for MySQL instance.
   * *   **14**: Data is being imported to the ApsaraDB RDS for MySQL instance from an another ApsaraDB RDS for MySQL instance.
   * *   **15**: A failover is being performed.
   * *   **16**: A temporary instance is being created.
   * *   **17**: A network is being created for the ApsaraDB RDS for MySQL instance.
   * *   **18**: The ApsaraDB RDS for MySQL instance is being cloned.
   * *   **19**: The link is being changed.
   * *   **20**: The read-only instances of the ApsaraDB RDS for MySQL instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * Indicates the type of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. The value is set to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the ID of a resource.
   * 
   * @example
   * dm-hbgau1zp****
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * Indicates the engine of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * Indicates the engine version of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates the point in time when the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database expires.
   * 
   * @example
   * 1237486127634
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates the network type of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Indicates the billing method of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * Indicates the port that is used to connect to the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Indicates whether the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database is a primary instance or a read-only instance.
   * 
   * *   **Primary**: The instance is a primary instance.
   * *   **Readonly**: The instance is a read-only instance.
   * 
   * @example
   * Primary
   */
  rdsInstType?: string;
  /**
   * @remarks
   * Indicates information about the read-only instances of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   */
  readOnlyInstances?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances;
  /**
   * @remarks
   * Indicates the read weight of the read-only instance.
   * 
   * @example
   * 30
   */
  readWeight?: number;
  /**
   * @remarks
   * Indicates the number of remaining days before a subscription instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readOnlyInstances: 'ReadOnlyInstances',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readOnlyInstances: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  validate() {
    if(this.readOnlyInstances && typeof (this.readOnlyInstances as any).validate === 'function') {
      (this.readOnlyInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance },
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

export class DescribeDrdsDbInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates information about the ApsaraDB RDS for MySQL instances that are used to store the data of the specified database.
   */
  dbInstances?: DescribeDrdsDbInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the number of primary ApsaraDB RDS for MySQL instances.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeDrdsDbInstancesResponseBodyDbInstances,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
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

