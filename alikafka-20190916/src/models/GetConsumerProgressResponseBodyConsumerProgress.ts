// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList } from "./GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoList";
import { GetConsumerProgressResponseBodyConsumerProgressTopicList } from "./GetConsumerProgressResponseBodyConsumerProgressTopicList";


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

