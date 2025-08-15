// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDisasterRecoveryItemRequestTopics extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID, required for ACTIVE_ACTIVE bidirectional backup
   * 
   * @example
   * GID_xxx
   * 
   * @deprecated
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance. The parameter values ​​are as follows:
   *   - Concurrently: concurrent delivery
   *   - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Instance ID, an instance ID will be automatically generated when `instanceType` is `EXTERNAL_ROCKETMQ`, and it can be obtained by querying the backup plan.
   * 
   * @example
   * rmq-cn-em93y94xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Disaster recovery topic name, required
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
   * Topics included in the backup mapping. Required.
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

