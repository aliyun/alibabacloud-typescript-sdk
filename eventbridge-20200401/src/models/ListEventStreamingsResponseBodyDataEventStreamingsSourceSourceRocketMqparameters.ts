// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters extends $dara.Model {
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
   * The ID of the consumer group on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance
   * 
   * @example
   * i-f8zbher64dlm58plyfte
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the ApsaraMQ for RocketMQ instance. Valid values:
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
   * The password that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * 123
   */
  instancePassword?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * sg-m5edtu24f12345****
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
   * The username that is used to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * admin**
   */
  instanceUsername?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for RocketMQ instance is associated.
   * 
   * @example
   * vsw-m5ev8asdc6h123456****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ApsaraMQ for RocketMQ instance belongs.
   * 
   * @example
   * vpc-bp1a4gmlk31hy***l3ss
   */
  instanceVpcId?: string;
  /**
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The offset from which messages are consumed. Valid values: CONSUMEFROMLASTOFFSET: Messages are consumed from the latest offset. CONSUMEFROMFIRSTOFFSET: Messages are consumed from the earliest offset. CONSUME_FROM_TIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * @example
   * CONSUMEFROMTIMESTAMP
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tag that is used to filter messages.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The timestamp that indicates the time from which messages are consumed. This parameter is valid only if Offset is set to CONSUMEFROMTIMESTAMP.
   * 
   * @example
   * 1670742074043
   */
  timestamp?: number;
  /**
   * @remarks
   * The topic from which messages are sent.
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

