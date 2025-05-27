// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceRequestSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication type. You can set this parameter to ACL or leave this parameter empty.
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
  groupID?: string;
  /**
   * @remarks
   * The endpoint that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * registry-vpc****.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * dbaudit-cn-i7m2nx2or01
   */
  instanceId?: string;
  /**
   * @remarks
   * None.
   * 
   * @example
   * None
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that is used to access the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * ******
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache RocketMQ instance belongs.
   * 
   * @example
   * sg-catalog-eventlistener
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The type of the Message Queue for Apache RocketMQ instance. Valid values:
   * 
   * *   Cloud_4: Message Queue for Apache RocketMQ 4.0 instance.
   * *   Cloud_5: Message Queue for Apache RocketMQ 5.0 instance.
   * 
   * @example
   * Cloud_4
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
   * vsw-bp10rbrt6rb6vrd89****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * vpc-bp1a4gmlk31hyg6ptl3ss
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The offset from which message consumption starts. Valid values:
   * 
   * *   CONSUME_FROM_LAST_OFFSET: Start message consumption from the latest offset.
   * *   CONSUME_FROM_FIRST_OFFSET: Start message consumption from the earliest offset.
   * *   CONSUME_FROM_TIMESTAMP: Start message consumption from the offset at the specified point in time.
   * 
   * Default value: CONSUME_FROM_LAST_OFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region where the Message Queue for Apache RocketMQ instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * KEY2
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that specifies the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1663555399032
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache RocketMQ instance. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * topic_default_195820716552192
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
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

