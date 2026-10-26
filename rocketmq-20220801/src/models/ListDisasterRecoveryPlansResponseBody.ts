// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The property key.
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * bbb
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyDataListInstances extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * NO_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * The consumer group ID, used to pull messages from the source instance.
   * 
   * @example
   * GID_xxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The endpoint address.
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-ot93rbxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance role.
   * 
   * @example
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The message properties.
   */
  messageProperty?: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The authentication password.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The authentication username.
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp13docqysrgxtbxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      consumerGroupId: 'consumerGroupId',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      consumerGroupId: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic synchronization of the consumer offset is enabled.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The creation time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The extended information.
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * The instances participating in the backup plan.
   */
  instances?: ListDisasterRecoveryPlansResponseBodyDataListInstances[];
  /**
   * @remarks
   * The plan description.
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The plan status. Valid values:
   *   - CREATED: created.
   *   - RUNNING: running.
   *   - DELETED: deleted.
   * 
   * @example
   * RUNNING
   */
  planStatus?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   *   - ACTIVE_PASSIVE: one-way backup.
   *   - ACTIVE_ACTIVE: two-way backup.
   * 
   * @example
   * ACTIVE_PASSIVE
   */
  planType?: string;
  /**
   * @remarks
   * Specifies whether consumer offset synchronization is enabled.
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  /**
   * @remarks
   * The modification time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      createTime: 'createTime',
      extInfo: 'extInfo',
      instances: 'instances',
      planDesc: 'planDesc',
      planId: 'planId',
      planName: 'planName',
      planStatus: 'planStatus',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': ListDisasterRecoveryPlansResponseBodyDataListInstances },
      planDesc: 'string',
      planId: 'number',
      planName: 'string',
      planStatus: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The paged data.
   */
  list?: ListDisasterRecoveryPlansResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll ID for the request. The system generates this value automatically. You must include this value in subsequent paginated requests to continue pagination.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 28
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDisasterRecoveryPlansResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details. This field is returned only when access is denied due to insufficient RAM permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListDisasterRecoveryPlansResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 855EF8E6-9C1D-5DE2-9E84-924E13Exxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListDisasterRecoveryPlansResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

