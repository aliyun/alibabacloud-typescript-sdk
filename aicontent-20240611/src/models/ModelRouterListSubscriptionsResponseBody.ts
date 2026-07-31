// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionDTO } from "./SubscriptionDto";


export class ModelRouterListSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of subscription information.
   */
  list?: SubscriptionDTO[];
  /**
   * @remarks
   * The maximum number of results per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first query. For subsequent queries, specify the value returned from the previous query. Set to "" when no more data is available. Set to "5" when there is a next page.
   * 
   * @example
   * 5" or ""
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SubscriptionDTO },
      maxResults: 'number',
      nextToken: 'string',
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

export class ModelRouterListSubscriptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The subscription information.
   */
  data?: ModelRouterListSubscriptionsResponseBodyData;
  /**
   * @remarks
   * The fault error message encoding.
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
   * Unknown error.
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
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterListSubscriptionsResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

