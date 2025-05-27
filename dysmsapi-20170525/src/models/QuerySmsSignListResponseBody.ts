// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignListResponseBodySmsSignList } from "./QuerySmsSignListResponseBodySmsSignList";


export class QuerySmsSignListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The number of signatures per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried message signatures.
   */
  smsSignList?: QuerySmsSignListResponseBodySmsSignList[];
  /**
   * @remarks
   * The total number of signatures.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsSignList: 'SmsSignList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      smsSignList: { 'type': 'array', 'itemType': QuerySmsSignListResponseBodySmsSignList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smsSignList)) {
      $dara.Model.validateArray(this.smsSignList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

