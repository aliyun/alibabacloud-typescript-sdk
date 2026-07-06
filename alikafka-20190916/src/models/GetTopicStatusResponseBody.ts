// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable extends $dara.Model {
  lastUpdateTimestamp?: number;
  maxOffset?: number;
  minOffset?: number;
  partition?: number;
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

export class GetTopicStatusResponseBodyTopicStatusOffsetTable extends $dara.Model {
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable[];
  static names(): { [key: string]: string } {
    return {
      offsetTable: 'OffsetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetTable: { 'type': 'array', 'itemType': GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable },
    };
  }

  validate() {
    if(Array.isArray(this.offsetTable)) {
      $dara.Model.validateArray(this.offsetTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicStatusResponseBodyTopicStatus extends $dara.Model {
  /**
   * @remarks
   * Generation time of the last consumed message. Unit: ms.
   * 
   * @example
   * 1566470063575
   */
  lastTimeStamp?: number;
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTable;
  /**
   * @remarks
   * Total number of messages.
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

export class GetTopicStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E475C7E2-8C35-46EF-BE7D-5D2A9F5D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Topic status.
   */
  topicStatus?: GetTopicStatusResponseBodyTopicStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      topicStatus: GetTopicStatusResponseBodyTopicStatus,
    };
  }

  validate() {
    if(this.topicStatus && typeof (this.topicStatus as any).validate === 'function') {
      (this.topicStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

