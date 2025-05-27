// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable extends $dara.Model {
  /**
   * @remarks
   * The last time when the partition was modified.
   * 
   * @example
   * 1566470063547
   */
  lastUpdateTimestamp?: number;
  /**
   * @remarks
   * The latest offset in the partition of the topic.
   * 
   * @example
   * 76
   */
  maxOffset?: number;
  /**
   * @remarks
   * The earliest offset in the partition of the topic.
   * 
   * @example
   * 0
   */
  minOffset?: number;
  /**
   * @remarks
   * The ID of the partition.
   * 
   * @example
   * 0
   */
  partition?: number;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * testkafka
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTimestamp: 'LastUpdateTimestamp',
      maxOffset: 'MaxOffset',
      minOffset: 'MinOffset',
      partition: 'Partition',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTimestamp: 'number',
      maxOffset: 'number',
      minOffset: 'number',
      partition: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

