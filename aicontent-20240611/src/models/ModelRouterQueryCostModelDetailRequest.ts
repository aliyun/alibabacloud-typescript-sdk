// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostModelDetailRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID by which to filter results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The end of the time range to query, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of results to return per page. This parameter is recommended for pagination.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. Obtain this token from the `nextToken` field in a previous response.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. This parameter is part of an older pagination method. For better performance and consistency, use `maxResults` and `nextToken` instead.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page number. This parameter is part of an older pagination method. For better performance and consistency, use `maxResults` and `nextToken` instead.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size. Default: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      endTime: 'endTime',
      maxResults: 'maxResults',
      modelId: 'modelId',
      nextToken: 'nextToken',
      page: 'page',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      endTime: 'number',
      maxResults: 'number',
      modelId: 'number',
      nextToken: 'string',
      page: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

