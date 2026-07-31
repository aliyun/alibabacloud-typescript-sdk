// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by balance type (permanent/monthly).
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
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
   * "5" or ""
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters by status (active/stopped).
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

