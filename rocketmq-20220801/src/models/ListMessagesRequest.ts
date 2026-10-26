// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query time range. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-09-09 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The lite topic name.
   * 
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @remarks
   * The message key.
   * 
   * @example
   * XSCBillResult
   */
  messageKey?: string;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll ID for the request.
   * 
   * You do not need to specify this parameter for the first page request. For subsequent page requests, specify this parameter based on the value returned from the first page.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * The start time of the query time range. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-09-09 08:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      liteTopicName: 'liteTopicName',
      messageId: 'messageId',
      messageKey: 'messageKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      liteTopicName: 'string',
      messageId: 'string',
      messageKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

