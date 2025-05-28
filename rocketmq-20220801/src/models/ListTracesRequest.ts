// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTracesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-19 10:10:09
   */
  endTime?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required if you set queryType to MESSAGE_ID.
   * 
   * @example
   * 0100163E0EC1F1965C04C7906700000000
   */
  messageId?: string;
  /**
   * @remarks
   * The message key.
   * 
   * This parameter is required if you set queryType to MESSAGE_ID.
   * 
   * @example
   * order_ceating
   */
  messageKey?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * Valid values:
   * 
   * *   MESSAGE_ID
   * *   MESSAGE_KEY
   * *   TOPIC
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE_ID
   */
  queryType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
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

