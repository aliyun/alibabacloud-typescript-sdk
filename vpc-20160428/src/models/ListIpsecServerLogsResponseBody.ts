// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServerLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Log information list.
   */
  data?: string[];
  /**
   * @remarks
   * Indicates whether the log is accurate. Valid values:
   * 
   * *   **true**: accurate
   * *   **false**: inaccurate
   * 
   * @example
   * true
   */
  isCompleted?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DEDAC5B1-9292-5BF7-BDDF-61BA58CFB2FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      isCompleted: 'IsCompleted',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      isCompleted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

