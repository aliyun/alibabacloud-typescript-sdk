// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDisasterRecoveryPlanRequestInstancesMessageProperty } from "./UpdateDisasterRecoveryPlanRequestInstancesMessageProperty";


export class UpdateDisasterRecoveryPlanRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The authentication type.
   * 
   * *   NO_AUTH: no authentication
   * *   ACL_AUTH: access control list (ACL)-based authentication
   * 
   * @example
   * NO_AUTH
   */
  authType?: string;
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
   * The instance ID.
   * 
   * @example
   * rmq-cn-83l3r0xxxx
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
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: open source RocketMQ cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The message attribute. When you synchronize a message to the destination cluster, the system automatically adds the attribute to the message for SQL-based filtering.
   */
  messageProperty?: UpdateDisasterRecoveryPlanRequestInstancesMessageProperty;
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
   * The password that is used for authentication. This parameter is required only if you set authType to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username that is used for authentication. This parameter is required only if you set authType to ACL_AUTH.
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated. If you want to specify multiple vSwitches, separate the vSwitches with vertical bars (|).
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated. This parameter is required only if you set instanceType to EXTERNAL_ROCKETMQ.
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
      messageProperty: UpdateDisasterRecoveryPlanRequestInstancesMessageProperty,
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

