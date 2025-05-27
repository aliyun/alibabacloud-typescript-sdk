// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList } from "./GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetList";


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

