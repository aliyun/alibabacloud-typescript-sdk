// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientDTO } from "./ClientDto";


export class ModelRouterQueryClientListResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ClientDTO[];
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
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * skip
   * 
   * @example
   * 10
   */
  skip?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      skip: 'skip',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ClientDTO },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      skip: 'number',
      success: 'boolean',
      totalCount: 'number',
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

