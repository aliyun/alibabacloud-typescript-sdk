// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of rebalances.
   * 
   * @example
   * 100
   */
  generation?: number;
  /**
   * @remarks
   * The group ID of the subscriber.
   * 
   * @example
   * falcon-uat
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the last rebalance occurred. Unit: milliseconds.
   * 
   * @example
   * 1709199270
   */
  lastRebalanceTimestamp?: number;
  /**
   * @remarks
   * The cause of the rebalance.
   * 
   * @example
   * removing member consumer-1-cd14eb9c-379b-4b8e-9bbd-76f147f8536f on LeaveGroup
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether new members are added to the consumer group in the rebalance.
   * 
   * @example
   * true
   */
  rebalanceSuccess?: boolean;
  /**
   * @remarks
   * The duration of the rebalance. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  rebalanceTimeConsuming?: number;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      groupId: 'GroupId',
      lastRebalanceTimestamp: 'LastRebalanceTimestamp',
      reason: 'Reason',
      rebalanceSuccess: 'RebalanceSuccess',
      rebalanceTimeConsuming: 'RebalanceTimeConsuming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'number',
      groupId: 'string',
      lastRebalanceTimestamp: 'number',
      reason: 'string',
      rebalanceSuccess: 'boolean',
      rebalanceTimeConsuming: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList extends $dara.Model {
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      rebalanceInfoList: 'RebalanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebalanceInfoList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.rebalanceInfoList)) {
      $dara.Model.validateArray(this.rebalanceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList extends $dara.Model {
  /**
   * @remarks
   * The latest offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  brokerOffset?: number;
  /**
   * @remarks
   * Client ID of the application.
   * 
   * @example
   * client-id-KafkaConsumerDemo
   */
  clientId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.11.3
   */
  clientIp?: string;
  /**
   * @remarks
   * The consumer offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  consumerOffset?: number;
  /**
   * @remarks
   * The time when the last consumed message in the partition was generated.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Member ID.
   * 
   * @example
   * client-id-KafkaConsumerDemo-70b64883-a911-4882-8084-598b958848b4
   */
  memberId?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      brokerOffset: 'BrokerOffset',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      consumerOffset: 'ConsumerOffset',
      lastTimestamp: 'LastTimestamp',
      memberId: 'MemberId',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerOffset: 'number',
      clientId: 'string',
      clientIp: 'string',
      consumerOffset: 'number',
      lastTimestamp: 'number',
      memberId: 'string',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList extends $dara.Model {
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList[];
  static names(): { [key: string]: string } {
    return {
      offsetList: 'OffsetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList },
    };
  }

  validate() {
    if(Array.isArray(this.offsetList)) {
      $dara.Model.validateArray(this.offsetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList extends $dara.Model {
  /**
   * @remarks
   * The time when the last consumed message in the topic was generated.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The consumer offsets.
   */
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * kafka-test
   */
  topic?: string;
  /**
   * @remarks
   * The number of unconsumed messages in the topic to which the consumer group subscribes.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      offsetList: 'OffsetList',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      offsetList: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList,
      topic: 'string',
      totalDiff: 'number',
    };
  }

  validate() {
    if(this.offsetList && typeof (this.offsetList as any).validate === 'function') {
      (this.offsetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgressTopicList extends $dara.Model {
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList[];
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: { 'type': 'array', 'itemType': GetConsumerProgressResponseBodyConsumerProgressTopicListTopicList },
    };
  }

  validate() {
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBodyConsumerProgress extends $dara.Model {
  /**
   * @remarks
   * The time when the last message consumed by the consumer group was generated.
   * 
   * @example
   * 1566874931671
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The details of rebalances in the consumer group.
   */
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList;
  /**
   * @remarks
   * The consumer progress of each topic to which the consumer group subscribes.
   */
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicList;
  /**
   * @remarks
   * The total number of unconsumed messages in all topics to which the consumer group subscribes.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      lastTimestamp: 'LastTimestamp',
      rebalanceInfoList: 'RebalanceInfoList',
      topicList: 'TopicList',
      totalDiff: 'TotalDiff',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimestamp: 'number',
      rebalanceInfoList: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList,
      topicList: GetConsumerProgressResponseBodyConsumerProgressTopicList,
      totalDiff: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.rebalanceInfoList && typeof (this.rebalanceInfoList as any).validate === 'function') {
      (this.rebalanceInfoList as any).validate();
    }
    if(this.topicList && typeof (this.topicList as any).validate === 'function') {
      (this.topicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumer progress of the consumer group.
   */
  consumerProgress?: GetConsumerProgressResponseBodyConsumerProgress;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 252820E1-A2E6-45F2-B4C9-1056B8CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerProgress: 'ConsumerProgress',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerProgress: GetConsumerProgressResponseBodyConsumerProgress,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.consumerProgress && typeof (this.consumerProgress as any).validate === 'function') {
      (this.consumerProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

