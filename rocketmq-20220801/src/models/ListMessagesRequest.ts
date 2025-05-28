// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2024-09-09 09:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Message Id.
   * 
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @remarks
   * Message key.
   * 
   * @example
   * XSCBillResult
   */
  messageKey?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll ID of the request.
   * 
   * You do not need to configure this parameter for the first page. This parameter is included in the pagination request based on the result returned for the first page.
   * 
   * @example
   * B13D0B07-F24B-4790-88D8-D47A38063D00
   */
  scrollId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2024-09-09 08:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
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

