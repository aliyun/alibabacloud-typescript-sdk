// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The property key.
   * 
   * @example
   * xxx
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * xxx
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

export class GetDisasterRecoveryPlanResponseBodyDataInstances extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * The consumer group ID used to pull messages from the source instance.
   * 
   * @example
   * GID_DS_XXX_YYY
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
   * rmq-cn-gpz3qtcdxxx
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
   * The message filtering property.
   */
  messageProperty?: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty;
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
   * cn-shanghai
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
   * vpc-wz9qt50xhtj9krb******
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
      messageProperty: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty,
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

export class GetDisasterRecoveryPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic consumer automatic synchronization is enabled.
   * 
   * > This field is valid only when consumer automatic synchronization is enabled, that is, when the `syncCheckpointEnabled` field is set to true.
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
  instances?: GetDisasterRecoveryPlanResponseBodyDataInstances[];
  /**
   * @remarks
   * The plan description.
   * 
   * @example
   * xxxx
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
      instances: { 'type': 'array', 'itemType': GetDisasterRecoveryPlanResponseBodyDataInstances },
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

export class GetDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details. This field is returned only when the request is denied because the RAM user does not have the required permissions.
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
  data?: GetDisasterRecoveryPlanResponseBodyData;
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
   * instanceId
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
   * 7358418D-83BD-507A-8079-611C63E0xxx
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
      data: GetDisasterRecoveryPlanResponseBodyData,
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

