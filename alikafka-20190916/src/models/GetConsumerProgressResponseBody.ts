// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList extends $dara.Model {
  generation?: number;
  groupId?: string;
  lastRebalanceTimestamp?: number;
  reason?: string;
  rebalanceSuccess?: boolean;
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
  accumulate?: number;
  brokerOffset?: number;
  clientId?: string;
  clientIp?: string;
  consumerOffset?: number;
  lastTimestamp?: number;
  memberId?: string;
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      accumulate: 'Accumulate',
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
      accumulate: 'number',
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
  lastTimestamp?: number;
  offsetList?: GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList;
  topic?: string;
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
   * The latest time when a message was stored. This time is calculated based on the consumer offsets of all topics in the consumer group.
   * 
   * > - This parameter is not supported for topics on Serverless instances or topics that use local storage on provisioned instances. In these cases, -1 is returned.
   * >
   * > - For topics that use cloud storage on provisioned instances, this parameter returns the message creation timestamp. This happens only after you submit the consumer offset for a consumer group that was created in the console or by an API call. If the message has no creation timestamp, -1 is returned.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  rebalanceInfoList?: GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList;
  topicList?: GetConsumerProgressResponseBodyConsumerProgressTopicList;
  /**
   * @remarks
   * The total number of unconsumed messages in all topics. This value is the message accumulation.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  /**
   * @remarks
   * The status of the consumer group:
   * 
   * - UNKNOWN
   * 
   * - PREPARING_REBALANCE
   * 
   * - COMPLETING_REBALANCE
   * 
   * - STABLE
   * 
   * - DEAD
   * 
   * - EMPTY
   * 
   * @example
   * STABLE
   */
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
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumption status.
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
   * Indicates whether the call is successful.
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

