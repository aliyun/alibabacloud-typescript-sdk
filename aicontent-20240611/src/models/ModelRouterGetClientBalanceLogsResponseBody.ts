// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientBalanceLogDTO } from "./ClientBalanceLogDto";


export class ModelRouterGetClientBalanceLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of balance change logs.
   */
  list?: ClientBalanceLogDTO[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      page: 'page',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ClientBalanceLogDTO },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterGetClientBalanceLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ModelRouterGetClientBalanceLogsResponseBodyData;
  /**
   * @remarks
   * The fault code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterGetClientBalanceLogsResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

