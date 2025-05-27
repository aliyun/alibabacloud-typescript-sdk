// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. This parameter can be set to ACL or left empty.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the consumer group on the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * GID-test
   */
  groupId?: string;
  /**
   * @remarks
   * The endpoint that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * bastionhost-cn-7mz293s9d1p
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of network over which the Message Queue for Apache RocketMQ instance is accessed.
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * ***
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache RocketMQ instance belongs.
   * 
   * @example
   * eb-167adad548***
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values: CLOUD_4, CLOUD_5, and SELF_BUILT. The value CLOUD_4 indicates that the instance is a Message Queue for Apache RocketMQ 4.0 instance. The value CLOUD_5 indicates that the instance is a Message Queue for Apache RocketMQ 5.0 instance. The value SELF_BUILT indicates that the instance is a self-managed RocketMQ instance.
   * 
   * @example
   * CLOUD_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The username that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * root
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache RocketMQ instance is associated.
   * 
   * @example
   * vsw-bp1iu***
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the Message Queue for Apache RocketMQ instance is deployed.
   * 
   * @example
   * vpc-***
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The offset from which messages are consumed. Valid values:
   * 
   * *   CONSUME_FROM_LAST_OFFSET: Messages are consumed from the latest offset.
   * *   CONSUME_FROM_FIRST_OFFSET: Messages are consumed from the earliest offset.
   * *   CONSUME_FROM_TIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * dataact
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that indicates the time from which messages are consumed. This parameter is valid only if Offset is set to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1664591760
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * migration_instance
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupId: 'GroupId',
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
      groupId: 'string',
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

