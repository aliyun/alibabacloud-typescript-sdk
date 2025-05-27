// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic on the Message Queue for Apache Kafka instance.
   * 
   * @example
   * test-gid
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * @example
   * i-2ze6kiwzkebf04s5h8ds
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of consumers.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The network type. Valid values: Default and PublicNetwork. Default value: Default. The value PublicNetwork indicates a self-managed network.
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
   * earliest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the Message Queue for Apache Kafka instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the Message Queue for Apache Kafka instance belongs.
   * 
   * @example
   * sg-f8zatts5g97x0j***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_api_1674441611897
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the Message Queue for Apache Kafka instance is associated.
   * 
   * @example
   * vsw-bp1hcrxq3mkcik***e
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC in which the Message Queue for Apache Kafka instance is deployed.
   * 
   * @example
   * vpc-bp1kz3ohhzgrau2***
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

