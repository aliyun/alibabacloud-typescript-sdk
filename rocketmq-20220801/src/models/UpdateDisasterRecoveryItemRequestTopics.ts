// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDisasterRecoveryItemRequestTopics extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. If you use the two-way backup mode, you must specify this parameter.
   * 
   * @example
   * GID_xxx
   * 
   * @deprecated
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The method used to deliver messages to the destination instance.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The instance ID. If you set instanceType to EXTERNAL_ROCKETMQ, the system automatically generates an ID for the instance. You can obtain the ID by querying the global message backup plan.
   * 
   * @example
   * rmq-cn-em93y94xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   ALIYUN_ROCKETMQ: ApsaraMQ for RocketMQ instance
   * *   EXTERNAL_ROCKETMQ: open source RocketMQ cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name. You must specify this parameter.
   * 
   * @example
   * Topic_xxx
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

