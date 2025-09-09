// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance extends $dara.Model {
  /**
   * @remarks
   * The URL used to connect to the read-only instance.
   * 
   * @example
   * rm-bp1ub71ct9skc3yxx.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The ID of the read-only instance.
   * 
   * @example
   * rm-bp1ub71ct9skc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the read-only instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the read-only instance.
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
   * The engine of the database that is run on the read-only instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the database that is run on the read-only instance.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The timestamp that indicates when the read-only instance expires.
   * 
   * @example
   * 1823487328173
   */
  expireTime?: string;
  /**
   * @remarks
   * The network type of the read-only instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the read-only instance.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the read-only instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The read ratio of the read-only instance.
   * 
   * @example
   * 30
   */
  readWeight?: number;
  /**
   * @remarks
   * The number of remaining days before the read-only instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: string;
  /**
   * @remarks
   * This parameter is unavailable for read-only instances.
   * 
   * @example
   * 0
   */
  versionAction?: number;
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
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
      versionAction: 'VersionAction',
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
      readWeight: 'number',
      remainDays: 'string',
      versionAction: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances extends $dara.Model {
  readOnlyInstance?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance },
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

export class DescribeDrdsDbInstanceResponseBodyDbInstance extends $dara.Model {
  /**
   * @remarks
   * The URL used to connect to the custom ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-***************.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **Primary**: The instance is a primary instance.
   * *   **ReadOnly**: The instance is a read-only instance.
   * 
   * @example
   * Primary
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
   * The engine of the database that is run on the instance. Valid value: **MySQL**.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the database that is run on the instance. Valid values: **5.7**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the custom ApsaraDB RDS for MySQL instance expires. The value of this parameter is a UNIX timestamp. Unit: seconds.
   * 
   * >  This parameter is returned only when the custom ApsaraDB RDS for MySQL instance is a subscription instance.
   * 
   * @example
   * 12341434315
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the network. Valid values: **VPC**.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the custom ApsaraDB RDS for MySQL instance. Valid values:
   * 
   * *   **Prepaid**: subscription
   * *   **Postaid**: pay-as-you-go
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the custom ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The list of read-only ApsaraDB RDS for MySQL instances.
   */
  readOnlyInstances?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances;
  /**
   * @remarks
   * The read ratio of the instance.
   * 
   * @example
   * 70
   */
  readWeight?: number;
  /**
   * @remarks
   * The number of remaining days before the instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: string;
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
      readOnlyInstances: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'string',
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

export class DescribeDrdsDbInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the returned custom ApsaraDB RDS for MySQL instance.
   */
  dbInstance?: DescribeDrdsDbInstanceResponseBodyDbInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FE09970-CA69-4144-88CA-67FB4BTY56G3
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
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDbInstanceResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstance && typeof (this.dbInstance as any).validate === 'function') {
      (this.dbInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

