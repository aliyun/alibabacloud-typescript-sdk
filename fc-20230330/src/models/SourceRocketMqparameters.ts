// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Set the value to ACL or leave the value empty. The value ACL indicates that authentication is enabled. In this case, you must specify InstanceUsername and InstancePassword.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The message filter type.
   * 
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The ID of the consumer group of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @remarks
   * The information about the endpoint of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * 123
   */
  instancePassword?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-hp35r2hc3a3sv8q2****
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The type of ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The username of the ApsaraMQ for RocketMQ instance. If you use the Internet, you must configure the username and password of the instance in the SDK code for authentication.
   * 
   * @example
   * 6W0xz2uPfiwp****
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the instance.
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) associated with the instance.
   * 
   * @example
   * vpc-uf6of9452b2pba82c****
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The consumer offset of the message. CONSUME_FROM_LAST_OFFSET: consumes messages from the latest offset. This is the default value. CONSUME_FROM_FIRST_OFFSET: consumes messages from the earliest offset. CONSUME_FROM_TIMESTAMP: consumes messages from the offset at the specified point in time.
   * 
   * @example
   * CONSUME_FROM_TIMESTAMP
   */
  offset?: string;
  /**
   * @remarks
   * The region to which the ApsaraMQ for RocketMQ queue belongs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that are used to filter messages.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp. This parameter is valid only when you set Offset to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic in the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * myTopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

