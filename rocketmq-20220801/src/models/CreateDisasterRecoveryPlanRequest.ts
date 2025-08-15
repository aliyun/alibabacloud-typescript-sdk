// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDisasterRecoveryPlanRequestInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * The attribute value.
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

export class CreateDisasterRecoveryPlanRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The authentication method. If you set instanceType to ALIYUN_ROCKETMQ and the instance is an ApsaraMQ for RocketMQ 4.0 instance, you do not need to specify this parameter.
   * 
   * *   NO_AUTH: no authentication
   * *   ACL_AUTH: access control list (ACL)-based authentication
   * 
   * Valid values:
   * 
   * *   NO_AUTH: no authentication
   * *   ACL_AUTH: access control list (ACL)-based authentication
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * GID_DS_XXX_YYY
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance endpoint. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required only if you set instanceType to ALIYUN_ROCKETMQ.
   * 
   * @example
   * rmq-cn-******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance role. Valid values:
   * 
   * *   ACTIVE: primary instance
   * *   Passive: secondary instance
   * 
   * @example
   * PASSIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: external RocketMQ instance
   * 
   * Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: external RocketMQ instance
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The message attribute. When you synchronize a message to the destination cluster, the system automatically adds the attribute to the message for SQL-based filtering.
   */
  messageProperty?: CreateDisasterRecoveryPlanRequestInstancesMessageProperty;
  /**
   * @remarks
   * The network type. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ. Valid values:
   * 
   * *   TCP_INTERNET: Internet over TCP
   * *   TCP_VPC: virtual private cloud (VPC) over TCP.
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The password used for authentication. This parameter is required only if you set authType to ACL_AUTH. If you set instanceType to ALIYUN_ROCKETMQ, you do not need to specify this parameter.
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
   * The ID of the security group to which the instance belongs. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ and networkType to TCP_VPC.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username used for authentication. This parameter is required only if you set authType to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ and networkType to TCP_VPC.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ and networkType to TCP_VPC.
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
      messageProperty: CreateDisasterRecoveryPlanRequestInstancesMessageProperty,
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

export class CreateDisasterRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic consumer progress synchronization.
   * 
   * >  This parameter takes effect only when you set `syncCheckpointEnabled` to true.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The instances involved in the Global Replicator task. You must specify this parameter.
   */
  instances?: CreateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * The description of the Global Replicator task.
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The name of the Global Replicator task. You must specify this parameter.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The type of the Global Replicator task. You must specify this parameter. For more information, see [Global Replicator](https://help.aliyun.com/document_detail/2843187.html). Valid values:
   * 
   * *   ACTIVE_PASSIVE: one-way backup
   * *   ACTIVE_ACTIVE: two-way backup
   * 
   * @example
   * ACTIVE_ACTIVE
   */
  planType?: string;
  /**
   * @remarks
   * Specifies whether to enable consumer progress synchronization.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  syncCheckpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSyncCheckpoint: 'autoSyncCheckpoint',
      instances: 'instances',
      planDesc: 'planDesc',
      planName: 'planName',
      planType: 'planType',
      syncCheckpointEnabled: 'syncCheckpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSyncCheckpoint: 'boolean',
      instances: { 'type': 'array', 'itemType': CreateDisasterRecoveryPlanRequestInstances },
      planDesc: 'string',
      planName: 'string',
      planType: 'string',
      syncCheckpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

