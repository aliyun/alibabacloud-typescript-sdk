// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerChannelResponseBodyConsumerChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * dtsor2y66j4219****
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * Consumer group A
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The account of the consumer group.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the time when the client consumed the last message in the change tracking channel. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC time).
   * 
   * @example
   * 2021-06-20T12:00:00Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The message delay, which is the difference between the timestamp of the latest data tracked in the change tracking task and the timestamp of the latest data consumed by the downstream client. The value is a UNIX timestamp in seconds.
   * For example, if the latest data in the source database is generated at 10:00, the DTS change tracking task has tracked data up to 09:55, and the downstream client has consumed data up to 09:30, the message delay is the difference between the UNIX timestamps of 09:55 and 09:30.
   * 
   * > If this parameter returns **-1**, it indicates that no client is connected to the consumer group.
   * 
   * @example
   * 1500
   */
  messageDelay?: number;
  /**
   * @remarks
   * The total number of unconsumed messages, which is the sum of the number of unconsumed tracked data records and the number of heartbeat messages.
   * > If this parameter returns -1, it indicates that no client is connected to the consumer group.
   * 
   * @example
   * 186600
   */
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumptionCheckpoint: 'string',
      messageDelay: 'number',
      unconsumedData: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer groups.
   */
  consumerChannels?: DescribeConsumerChannelResponseBodyConsumerChannels[];
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of consumer groups that can be displayed on a single page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D66140B3-C747-42B6-8315-BAF6490E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of consumer groups.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      consumerChannels: 'ConsumerChannels',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerChannels: { 'type': 'array', 'itemType': DescribeConsumerChannelResponseBodyConsumerChannels },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.consumerChannels)) {
      $dara.Model.validateArray(this.consumerChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

