// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDisasterRecoveryItemRequestTopics extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. Required for ACTIVE_ACTIVE bidirectional backup.
   * 
   * @example
   * GID_xxx
   * 
   * @deprecated
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The delivery order of messages to the target instance. Valid values for the parameter:
   * - Concurrently: concurrent delivery
   * - Orderly: ordered delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The instance ID. If instanceType is set to EXTERNAL_ROCKETMQ, an instance ID is automatically generated. You can obtain this ID by querying the backup plan.
   * 
   * @example
   * rmq-cn-em93y94xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: external instance, open-source instance, or open-source cluster
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
   * The name of the disaster recovery topic. Required.
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

export class AddDisasterRecoveryItemRequest extends $dara.Model {
  /**
   * @remarks
   * The topics included in the backup mapping. Required.
   */
  topics?: AddDisasterRecoveryItemRequestTopics[];
  static names(): { [key: string]: string } {
    return {
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topics: { 'type': 'array', 'itemType': AddDisasterRecoveryItemRequestTopics },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

