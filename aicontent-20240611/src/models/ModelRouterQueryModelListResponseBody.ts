// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelDTO } from "./ModelDto";


export class ModelRouterQueryModelListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array of model objects.
   */
  list?: ModelDTO[];
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * None
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. An empty value indicates that no more results are available.
   * 
   * @example
   * None
   */
  nextToken?: string;
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
   * The number of models per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of models that meet the filter criteria.
   * 
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
   * @remarks
   * Contains the paginated list of models and pagination metadata.
   * 
   * @example
   * []
   */
  data?: ModelRouterQueryModelListResponseBodyData;
  /**
   * @remarks
   * The error code. Returned only when the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. Returned only when the request fails.
   * 
   * @example
   * 未知错误
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
   * The maximum number of results per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The unique identifier for the request.
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

