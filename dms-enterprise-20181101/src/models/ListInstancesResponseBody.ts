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
  groupMode?: string;
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
  dataLinkName?: string;
  databasePassword?: string;
  databaseUser?: string;
  dbaId?: string;
  dbaNickName?: string;
  ddlOnline?: number;
  ecsInstanceId?: string;
  ecsRegion?: string;
  envType?: string;
  exportTimeout?: number;
  host?: string;
  instanceAlias?: string;
  instanceId?: string;
  instanceSource?: string;
  instanceType?: string;
  ownerIdList?: ListInstancesResponseBodyInstanceListInstanceOwnerIdList;
  ownerNameList?: ListInstancesResponseBodyInstanceListInstanceOwnerNameList;
  port?: number;
  queryTimeout?: number;
  safeRuleId?: string;
  sellSitd?: boolean;
  sellTrust?: string;
  sid?: string;
  standardGroup?: ListInstancesResponseBodyInstanceListInstanceStandardGroup;
  state?: string;
  useDsql?: number;
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

