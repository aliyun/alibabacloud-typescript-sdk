// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListPocResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * true
   */
  resultObject?: boolean;
  /**
   * @remarks
   * Total number of items returned.
   * 
   * @example
   * 0
   */
  totalItem?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 0
   */
  totalPage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'string',
      httpStatusCode: 'string',
      message: 'string',
      pageSize: 'string',
      requestId: 'string',
      resultObject: 'boolean',
      totalItem: 'string',
      totalPage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

