// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicStatusResponseBodyTopicStatusOffsetTable } from "./GetTopicStatusResponseBodyTopicStatusOffsetTable";


export class GetTopicStatusResponseBodyTopicStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the last consumed message was generated.
   * 
   * @example
   * 1566470063575
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The information about offsets in the topic.
   */
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTable;
  /**
   * @remarks
   * The number of messages in the topic.
   * 
   * @example
   * 423
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      offsetTable: 'OffsetTable',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      offsetTable: GetTopicStatusResponseBodyTopicStatusOffsetTable,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.offsetTable && typeof (this.offsetTable as any).validate === 'function') {
      (this.offsetTable as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

