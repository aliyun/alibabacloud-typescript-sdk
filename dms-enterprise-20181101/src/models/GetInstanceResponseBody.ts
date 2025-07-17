// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstanceOwnerIdList extends $dara.Model {
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

export class GetInstanceResponseBodyInstanceOwnerNameList extends $dara.Model {
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

export class GetInstanceResponseBodyInstanceStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the control mode. Valid values:
   * 
   * *   **COMMON**: Security Collaboration
   * *   **NONE_CONTROL**: Flexible Management
   * *   **STABLE**: Stable Change
   * 
   * @example
   * NONE_CONTROL
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule set corresponding to the control mode.
   * 
   * @example
   * test group name
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

export class GetInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The name of the database link for the database instance.
   * 
   * @example
   * test
   */
  dataLinkName?: string;
  /**
   * @remarks
   * The password that is used to log on to the database.
   * 
   * @example
   * ******
   */
  databasePassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database instance.
   * 
   * @example
   * dbuser
   */
  databaseUser?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA) for the database instance.
   * 
   * @example
   * 29****
   */
  dbaId?: string;
  /**
   * @remarks
   * The nickname of the DBA for the database instance.
   * 
   * @example
   * dbaname
   */
  dbaNickName?: string;
  /**
   * @remarks
   * Indicates whether the lock-free schema change feature is enabled for the database instance.
   * 
   * @example
   * 0
   */
  ddlOnline?: number;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance on which the database instance is deployed.
   * 
   * @example
   * i-bp124ldpklqz59y3****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the database instance resides.
   * 
   * @example
   * cn-beijing
   */
  ecsRegion?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. Valid values:
   * 
   * *   **product**: production environment
   * *   **dev**: development environment
   * *   **pre**: staging environment
   * *   **test**: test environment
   * *   **sit**: system integration testing (SIT) environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag**: STAG environment
   * 
   * @example
   * test
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
   * 192.168.XXX.XXX
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
   * The ID of the database instance.
   * 
   * @example
   * 188****
   */
  instanceId?: string;
  /**
   * @remarks
   * The source of the database instance.
   * 
   * @example
   * ECS_OWN
   */
  instanceSource?: string;
  /**
   * @remarks
   * The type of the database instance.
   * 
   * @example
   * postgresql
   */
  instanceType?: string;
  /**
   * @remarks
   * The IDs of the owners for the database instance.
   */
  ownerIdList?: GetInstanceResponseBodyInstanceOwnerIdList;
  /**
   * @remarks
   * The nicknames of the owners for the database instance.
   */
  ownerNameList?: GetInstanceResponseBodyInstanceOwnerNameList;
  /**
   * @remarks
   * The port number that is used to connect to the database instance.
   * 
   * @example
   * 5432
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for querying data in the database instance.
   * 
   * @example
   * 7200
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The ID of the security rule set for the database instance.
   * 
   * @example
   * 3****
   */
  safeRuleId?: string;
  /**
   * @remarks
   * Whether sensitive data protection is enabled.  Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Close.
   * 
   * @example
   * false
   */
  sellSitd?: string;
  sellTrust?: string;
  /**
   * @remarks
   * The SID of the database instance.
   * 
   * @example
   * test
   */
  sid?: string;
  /**
   * @remarks
   * The control mode of the database instance.
   */
  standardGroup?: GetInstanceResponseBodyInstanceStandardGroup;
  /**
   * @remarks
   * The status of the database instance. Valid values:
   * 
   * *   **NORMAL**: normal
   * *   **DISABLE**: disabled
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
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  useDsql?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the database instance belongs.
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
      ownerIdList: GetInstanceResponseBodyInstanceOwnerIdList,
      ownerNameList: GetInstanceResponseBodyInstanceOwnerNameList,
      port: 'number',
      queryTimeout: 'number',
      safeRuleId: 'string',
      sellSitd: 'string',
      sellTrust: 'string',
      sid: 'string',
      standardGroup: GetInstanceResponseBodyInstanceStandardGroup,
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

export class GetInstanceResponseBody extends $dara.Model {
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
   * The details of the database instance.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6C80B69-3203-56AC-8021-18BA72A6F4E1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

