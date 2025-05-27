// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * GID_TEST
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * bastionhost-cn-i7m2gwt7z1n
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Default value: Default. The value PublicNetwork indicates a VPC.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The offset from which messages are consumed.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for Kafka instance resides.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * sg-5ud5f3p0rqqis69tpp8eho7cp
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * topic_empower_1642473600414
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for Kafka instance is associated.
   * 
   * @example
   * vsw-bp1rmi8rind7eo50cbied
   */
  vSwitchIds?: string;
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * vpc-wz9ki1qdlx3cx5cbbhowf
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
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

