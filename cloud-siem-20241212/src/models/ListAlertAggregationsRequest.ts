// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertAggregationsRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation method.
   * 
   * @example
   * avg
   */
  aggregationType?: string;
  /**
   * @remarks
   * The end time of the alert.
   * 
   * @example
   * 1773936020000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If a next page exists, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query filter condition in JSON format. Valid values:
   * 
   * - `{"Type":"maxCost", "Value":"100"}`: The 100 queries with the longest execution duration.
   * - `{"Type":"status","Value":"finished"}`: Completed queries.
   * - `{"Type":"status","Value":"running"}`: Running queries.
   * - `{"Type":"cost","Min":"30","Max":"50"}`: Custom execution duration queries. You can set the minimum and maximum execution duration. **Min** specifies the minimum execution duration. **Max** specifies the maximum execution duration. Unit: milliseconds (ms).
   *     - If only **Min** is set, queries with an execution duration greater than this value are returned.
   *     - If only **Max** is set, queries with an execution duration less than this value are returned.
   *     - If both **Min** and **Max** are set, queries with an execution duration greater than or equal to **Min** and less than or equal to **Max** are returned.
   * 
   * @example
   * {\\"Type\\":\\"cost\\",\\"Max\\":\\"200\\"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The unique identifier of the query view.
   * 
   * @example
   * qv-a1b2c3d4e5f6g7****
   */
  queryViewId?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center is located. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The time when the alert first occurred.
   * 
   * @example
   * 2026-02-04T08:36:26Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationType: 'AggregationType',
      endTime: 'EndTime',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryCondition: 'QueryCondition',
      queryViewId: 'QueryViewId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationType: 'string',
      endTime: 'number',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryCondition: 'string',
      queryViewId: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
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

