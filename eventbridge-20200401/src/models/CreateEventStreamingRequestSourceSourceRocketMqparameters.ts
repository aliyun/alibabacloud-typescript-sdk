// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSourceSourceRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * JSON
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The SQL statement that you want to use to filter messages.
   * 
   * @example
   * index > 10
   */
  filterSql?: string;
  /**
   * @remarks
   * The method that you want to use to filter messages.
   * 
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The ID of the consumer group on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * default_C56C360261515
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   * 
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @remarks
   * The password that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * sg-m5edtu24f123456789
   */
  instanceSecurityGroupId?: string;
  /**
   * @remarks
   * The type of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * 2
   */
  instanceType?: string;
  /**
   * @remarks
   * The username that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for RocketMQ instance is associated.
   * 
   * @example
   * vsw-m5ev8asdc6h123456789
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * vpc-m5e3sv4b123456789
   */
  instanceVpcId?: string;
  /**
   * @remarks
   * The network type. Valid values: PublicNetwork and PrivateNetwork.
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
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
   * CONSUMEFROMLAST_OFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID of the cross-border task.
   * 
   * @example
   * sg-m5edtu24f123456789
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tag that you want to use to filter messages.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that indicates the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1670656652009
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * Topic_publicRule_api_1667273421288
   */
  topic?: string;
  /**
   * @remarks
   * The vSwitch ID of the cross-border task.
   * 
   * @example
   * vsw-m5ev8asdc6h123456789
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID of the cross-border task.
   * 
   * @example
   * vpc-m5e3sv4b123456789
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
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
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
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
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

