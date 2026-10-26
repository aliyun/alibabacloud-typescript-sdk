// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDisasterRecoveryPlanRequestInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The key of the property.
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * The value of the property.
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
   * The authentication method. This parameter is not required if instanceType is set to ALIYUN_ROCKETMQ and the instance version is 4.0. Valid values:
   *   - NO_AUTH: no authentication
   *   - ACL_AUTH: ACL authentication
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the consumer group, which is used to pull messages from the source instance.
   * <notice>This parameter is required for self-managed instances. For Alibaba Cloud instances, this parameter is automatically generated.</notice>
   * 
   * @example
   * GID_DS_XXX_YYY
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The endpoint URL. This parameter is not required if instanceType is set to ALIYUN_ROCKETMQ. This parameter is required if instanceType is set to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID. This parameter is not required if instanceType is set to EXTERNAL_ROCKETMQ. This parameter is required if instanceType is set to ALIYUN_ROCKETMQ.
   * 
   * @example
   * rmq-cn-******
   */
  instanceId?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   *   - ACTIVE: primary
   *   - PASSIVE: secondary
   * 
   * @example
   * PASSIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: external instance, open-source instance, or open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The message filtering property. When a message is synchronized to the destination cluster, this property is automatically added to the message for SQL-based filtering during message consumption.
   */
  messageProperty?: CreateDisasterRecoveryPlanRequestInstancesMessageProperty;
  /**
   * @remarks
   * The network type. This parameter is not required if instanceType is set to ALIYUN_ROCKETMQ. This parameter is required if instanceType is set to EXTERNAL_ROCKETMQ. Valid values:
   *   - TCP_INTERNET: TCP over the Internet
   *   - TCP_VPC: TCP over a VPC
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The password for authentication. This parameter is required if authType is set to ACL_AUTH. This parameter is not required if instanceType is set to ALIYUN_ROCKETMQ.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is required only if instanceType is set to EXTERNAL_ROCKETMQ and networkType is set to TCP_VPC.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username for authentication. This parameter is required if authType is set to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated. This parameter is required only if instanceType is set to EXTERNAL_ROCKETMQ and networkType is set to TCP_VPC.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated. This parameter is required only if instanceType is set to EXTERNAL_ROCKETMQ and networkType is set to TCP_VPC.
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
   * Specifies whether to enable automatic consumer automatic synchronization.
   * 
   * > This parameter takes effect only when consumer automatic synchronization is enabled. That is, the `syncCheckpointEnabled` field is set to true.
   * 
   * @example
   * true
   */
  autoSyncCheckpoint?: boolean;
  /**
   * @remarks
   * The instances involved in the backup plan. This parameter is required.
   */
  instances?: CreateDisasterRecoveryPlanRequestInstances[];
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * xxx
   */
  planDesc?: string;
  /**
   * @remarks
   * The name of the plan. This parameter is required.
   * 
   * @example
   * xxx
   */
  planName?: string;
  /**
   * @remarks
   * The type of the backup plan. This parameter is required. For more information, see [Global Replicator](https://help.aliyun.com/document_detail/2843187.html). Valid values:
   *   - ACTIVE_PASSIVE: one-way backup
   *   - ACTIVE_ACTIVE: two-way backup
   * 
   * @example
   * ACTIVE_ACTIVE
   */
  planType?: string;
  /**
   * @remarks
   * Specifies whether to enable consumer offset synchronization.
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

