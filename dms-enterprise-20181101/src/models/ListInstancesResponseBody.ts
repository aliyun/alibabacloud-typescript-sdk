// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceListInstanceOwnerIdList extends $dara.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstanceOwnerNameList extends $dara.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerNames)) {
      $dara.Model.validateArray(this.ownerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstanceStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the control mode. Valid values:
   * 
   * *   **COMMON**: Security Collaboration
   * *   **NONE_CONTROL**: Flexible Management
   * *   **STABLE**: Stable Change
   * 
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule corresponding to the control mode.
   * 
   * @example
   * test
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupMode: 'GroupMode',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMode: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListInstance extends $dara.Model {
  /**
   * @remarks
   * The name of the database link for the database instance.
   * 
   * @example
   * dblink_test
   */
  dataLinkName?: string;
  /**
   * @remarks
   * The password that is used to log on to the database instance.
   * 
   * @example
   * ******
   */
  databasePassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database.
   * 
   * @example
   * dbUser
   */
  databaseUser?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA) of the database instance.
   * 
   * @example
   * 31****
   */
  dbaId?: string;
  /**
   * @remarks
   * The nickname of the DBA of the instance.
   * 
   * @example
   * dbaName
   */
  dbaNickName?: string;
  /**
   * @remarks
   * Indicates whether the lock-free schema change feature is enabled for the database instance.
   * 
   * @example
   * 1
   */
  ddlOnline?: number;
  /**
   * @remarks
   * The ID of the ECS instance on which the database instance is deployed.
   * 
   * @example
   * 150****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the database instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  ecsRegion?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. Valid values:
   * 
   * *   **product:** production environment
   * *   **dev**: development environment
   * *   **pre**: pre-release environment
   * *   **test**: test environment
   * *   **sit**: SIT environment
   * *   **uat**: UAT environment
   * *   **pet**: stress testing environment
   * *   **stag:** staging environment
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The timeout period for exporting data from the database instance.
   * 
   * @example
   * 86400
   */
  exportTimeout?: number;
  /**
   * @remarks
   * The host address that is used to connect to the database instance.
   * 
   * @example
   * ****.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 150***
   */
  instanceId?: string;
  /**
   * @remarks
   * The source of the database instance.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the database instance.
   * 
   * @example
   * mysql
   */
  instanceType?: string;
  /**
   * @remarks
   * The IDs of the owners of the database instance.
   */
  ownerIdList?: ListInstancesResponseBodyInstanceListInstanceOwnerIdList;
  /**
   * @remarks
   * The nicknames of the owners of the database instance.
   */
  ownerNameList?: ListInstancesResponseBodyInstanceListInstanceOwnerNameList;
  /**
   * @remarks
   * The port number that is used to connect to the database instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for querying data in the database instance.
   * 
   * @example
   * 60
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The ID of the security rule set of the database instance.
   * 
   * @example
   * 1
   */
  safeRuleId?: string;
  /**
   * @remarks
   * Indicates whether the sensitive data protection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sellSitd?: boolean;
  sellTrust?: string;
  /**
   * @remarks
   * The system ID (SID) of the database instance.
   * 
   * @example
   * test
   */
  sid?: string;
  /**
   * @remarks
   * The control mode of the database instance.
   */
  standardGroup?: ListInstancesResponseBodyInstanceListInstanceStandardGroup;
  /**
   * @remarks
   * The status of the database instance.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the cross-database query feature is enabled for the database instance. Valid values:
   * 
   * *   **0**: disabled
   * *   **1:**: enabled
   * 
   * @example
   * 1
   */
  useDsql?: number;
  /**
   * @remarks
   * The ID of the VPC to which the database instance belongs.
   * 
   * @example
   * vpc-o6wrloqsdqc9io3mg****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      ddlOnline: 'DdlOnline',
      ecsInstanceId: 'EcsInstanceId',
      ecsRegion: 'EcsRegion',
      envType: 'EnvType',
      exportTimeout: 'ExportTimeout',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      queryTimeout: 'QueryTimeout',
      safeRuleId: 'SafeRuleId',
      sellSitd: 'SellSitd',
      sellTrust: 'SellTrust',
      sid: 'Sid',
      standardGroup: 'StandardGroup',
      state: 'State',
      useDsql: 'UseDsql',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      databasePassword: 'string',
      databaseUser: 'string',
      dbaId: 'string',
      dbaNickName: 'string',
      ddlOnline: 'number',
      ecsInstanceId: 'string',
      ecsRegion: 'string',
      envType: 'string',
      exportTimeout: 'number',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      ownerIdList: ListInstancesResponseBodyInstanceListInstanceOwnerIdList,
      ownerNameList: ListInstancesResponseBodyInstanceListInstanceOwnerNameList,
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
      sellSitd: 'boolean',
      sellTrust: 'string',
      sid: 'string',
      standardGroup: ListInstancesResponseBodyInstanceListInstanceStandardGroup,
      state: 'string',
      useDsql: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.ownerIdList && typeof (this.ownerIdList as any).validate === 'function') {
      (this.ownerIdList as any).validate();
    }
    if(this.ownerNameList && typeof (this.ownerNameList as any).validate === 'function') {
      (this.ownerNameList as any).validate();
    }
    if(this.standardGroup && typeof (this.standardGroup as any).validate === 'function') {
      (this.standardGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  instance?: ListInstancesResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the database instances that are returned.
   */
  instanceList?: ListInstancesResponseBodyInstanceList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B07137-F6AE-4756-8474-7F92BB6C4E04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of database instances that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceList: ListInstancesResponseBodyInstanceList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

