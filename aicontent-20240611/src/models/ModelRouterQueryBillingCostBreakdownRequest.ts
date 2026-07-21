// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingCostBreakdownRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The ID of the client to query. If not specified, data for all clients is returned.
   * 
   * @example
   * 5
   */
  clientId?: number;
  /**
   * @remarks
   * The end time for the query, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The granularity for data aggregation. Valid values: `hourly` and `daily`.
   * 
   * This parameter is required.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results to return. This parameter is used for pagination along with `nextToken` and is mutually exclusive with `page` and `pageSize`.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the model to query. If not specified, data for all models is returned.
   * 
   * @example
   * 12
   */
  modelId?: number;
  /**
   * @remarks
   * The types of the models to query, separated by commas. For example: `Chat,Embedding`. If not specified, data for all model types is returned.
   * 
   * @example
   * Chat
   */
  modelTypes?: string;
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page of results.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 20. Maximum: 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for the query, specified as a Unix timestamp in seconds.
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
      granularity: 'granularity',
      maxResults: 'maxResults',
      modelId: 'modelId',
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      endTime: 'number',
      granularity: 'string',
      maxResults: 'number',
      modelId: 'number',
      modelTypes: 'string',
      nextToken: 'string',
      page: 'number',
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

