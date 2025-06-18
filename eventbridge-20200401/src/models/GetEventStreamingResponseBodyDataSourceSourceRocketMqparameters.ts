// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @example
   * index > 10
   */
  filterSql?: string;
  /**
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @remarks
   * The ID of the consumer group in the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @example
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * i-f8zbher64dlm58plyfte
   */
  instanceId?: string;
  /**
   * @example
   * PublicNetwork
   */
  instanceNetwork?: string;
  /**
   * @example
   * xxxa
   */
  instancePassword?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  instanceSecurityGroupId?: string;
  /**
   * @example
   * 2
   */
  instanceType?: string;
  /**
   * @example
   * xxxa
   */
  instanceUsername?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12****
   */
  instanceVSwitchIds?: string;
  /**
   * @example
   * vpc-m5e3sv4b12345****
   */
  instanceVpcId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The consumer offset of messages. Valid values: CONSUME_FROM_LAST_OFFSET: Start consumption from the latest offset. CONSUME_FROM_FIRST_OFFSET: Start consumption from the earliest offset. CONSUME_FROM_TIMESTAMP: Start consumption from the offset at the specified point in time.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The region ID of the Message Queue for Apache RocketMQ instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tags that are used to filter messages.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp of the offset from which consumption starts. This parameter is valid only if you set the Offset parameter to CONSUME_FROM_TIMESTAMP.
   * 
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * topic_add_anima
   */
  topic?: string;
  /**
   * @example
   * vsw-m5ev8asdc6h12345****
   */
  vSwitchIds?: string;
  /**
   * @example
   * vpc-m5e3sv4b12345****
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

