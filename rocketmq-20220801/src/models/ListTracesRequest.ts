// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTracesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-19 10:10:09
   */
  endTime?: string;
  /**
   * @remarks
   * The lightweight topic name.
   * 
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * Required if queryType is set to MESSAGE_ID.
   * 
   * @example
   * 0100163E0EC1F1965C04C7906700000000
   */
  messageId?: string;
  /**
   * @remarks
   * The message key.
   * 
   * Required if queryType is set to MESSAGE_KEY.
   * 
   * @example
   * order_ceating
   */
  messageKey?: string;
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results to display per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type.
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE_ID
   */
  queryType?: string;
  /**
   * @remarks
   * The start time in YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-10 10:42:11
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
      queryType: 'queryType',
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
      queryType: 'string',
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

