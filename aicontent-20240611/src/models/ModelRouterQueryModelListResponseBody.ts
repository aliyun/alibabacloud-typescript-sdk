// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelDTO } from "./ModelDto";


export class ModelRouterQueryModelListResponseBodyData extends $dara.Model {
  list?: ModelDTO[];
  /**
   * @example
   * None
   */
  maxResults?: string;
  /**
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ModelDTO },
      maxResults: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      total: 'string',
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

export class ModelRouterQueryModelListResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ModelRouterQueryModelListResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterQueryModelListResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
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

