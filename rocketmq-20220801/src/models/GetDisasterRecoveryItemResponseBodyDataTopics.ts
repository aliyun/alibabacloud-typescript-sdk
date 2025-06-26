// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDisasterRecoveryItemResponseBodyDataTopics extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * xxx_reserve_group
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
   * The instance ID.
   * 
   * @example
   * rmq-cn-wwo3xxx
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
   * regionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * order_push_xxx
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

