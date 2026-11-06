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
   * The time when the alert ended.
   * 
   * @example
   * 1773936020000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If this is the first query or no subsequent query is required, you do not need to specify this parameter. If a subsequent query is required, set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
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
   * The query filter conditions in JSON format. Valid values:
   * 
   * - `{"Type":"maxCost", "Value":"100"}`: The top 100 queries that take the longest time.
   * - `{"Type":"status","Value":"finished"}`: Completed queries.
   * - `{"Type":"status","Value":"running"}`: Running queries.
   * - `{"Type":"cost","Min":"30","Max":"50"}`: Custom duration queries. You can specify the minimum and maximum query durations. **Min** specifies the minimum duration, and **Max** specifies the maximum duration. Unit: milliseconds.
   *     - If only **Min** is specified, the query returns queries whose execution duration is greater than the specified value.
   *     - If only **Max** is specified, the query returns queries whose execution duration is less than the specified value.
   *     - If both **Min** and **Max** are specified, the query returns queries whose execution duration is greater than or equal to the value of **Min** and less than or equal to the value of **Max**.
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
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member whose view the administrator switches to.
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

