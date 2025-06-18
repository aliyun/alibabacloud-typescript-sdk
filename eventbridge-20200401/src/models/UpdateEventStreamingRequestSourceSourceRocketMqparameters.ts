// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSourceSourceRocketMQParameters extends $dara.Model {
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
   * The ID of the consumer group on the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * GID_test
   */
  groupID?: string;
  /**
   * @remarks
   * The endpoint that you want to use to access the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * reg****-vpc.cn-zhangjiakou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   * 
   * @example
   * i-f8z9a9mcgwri1c1idd0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the ApsaraMQ for RocketMQ instance. Valid values:
   * 
   * PublicNetwork and PrivateNetwork.
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
   * vsw-m5ev8asdc6h12****
   */
  instanceVSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the ApsaraMQ for RocketMQ instance is deployed.
   * 
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
   * The offset from which messages are consumed. Valid values:
   * 
   * *   CONSUMEFROMLASTOFFSET: Messages are consumed from the latest offset.
   * *   CONSUMEFROMFIRSTOFFSET: Messages are consumed from the earliest offset.
   * *   CONSUMEFROMTIMESTAMP: Messages are consumed from the offset at the specified point in time.
   * 
   * Default value: CONSUMEFROMLASTOFFSET.
   * 
   * @example
   * CONSUMEFROMLASTOFFSET
   */
  offset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for RocketMQ instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * sg-m5edtu24f12345****
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
   * The timestamp that specifies the time from which messages are consumed. This parameter is valid only if you set Offset to CONSUMEFROMTIMESTAMP.
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
   * TOPIC-cainiao-pcs-order-process-inBoundConditionCheck
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

