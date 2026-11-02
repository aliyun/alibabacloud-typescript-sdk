// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHiMarketConsumerSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. The default value and valid values are not specified in the API definition.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the token returned in the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from 1.
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
   * The subscription status, which is used to filter subscriptions. Valid values: PENDING and APPROVED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

