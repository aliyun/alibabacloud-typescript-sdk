// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceRequestSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * dsp_online_ml_request
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * @example
   * cbwp-bp1o3m66wcjgbkssm3k5m
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of consumers.
   * 
   * @example
   * 1
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network. Valid values: Default and PublicNetwork. Default value: Default. The value PublicNetwork indicates a self-managed network.
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The consumer offset.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for Apache Kafka instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache Kafka instance belongs. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * sg-5wz3mjgo9wpvdnwpwnhkjdjwn
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the Message Queue for Apache Kafka instance.
   * 
   * @example
   * billing_notify
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache Kafka instance is associated. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vsw-bp1xyntcxiwplhqxjybuk
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the Message Queue for Apache Kafka instance resides. This parameter is required only if you set Network to PublicNetwork.
   * 
   * @example
   * vpc-2zefu4vfmx6siogujmo0b
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      maximumTasks: 'number',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
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

