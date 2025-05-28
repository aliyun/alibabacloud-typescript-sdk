// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryItemsResponseBodyDataListTopics extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID
   * 
   * @example
   * group-test
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance.
   * 
   * Parameter values are as follows:
   * - Concurrently: concurrent delivery
   * - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-kh43w0olz0c
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
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
   * The topic name.
   * 
   * @example
   * topic-test
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

