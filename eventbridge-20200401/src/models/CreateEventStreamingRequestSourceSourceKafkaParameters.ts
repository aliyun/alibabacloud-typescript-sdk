// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * r-8vb64581862cd814
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Default value: Default. The value PublicNetwork specifies a virtual private cloud (VPC).
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * sg-bp1iv19sp1msc7zot4wr
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * popvip_center_robot_order
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for Kafka instance is associated.
   * 
   * @example
   * vsw-bp179l3llg3jjxwrq72hh
   */
  vSwitchIds?: string;
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * vpc-8vblalsi0vbhizr77cbhu
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

