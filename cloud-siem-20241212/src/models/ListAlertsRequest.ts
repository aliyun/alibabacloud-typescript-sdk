// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The threat level of the alert. Valid values:
   * 
   * - 5: critical.
   * - 4: high-risk.
   * - 3: medium-risk.
   * - 2: low-risk.
   * - 1: informational.
   */
  alertLevel?: string[];
  /**
   * @remarks
   * The alert ID associated with the event.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The end time of the alert.
   * 
   * @example
   * 1766801904000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
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
   * The pagination token. You do not need to specify this parameter for the first request or if no more results exist. If more results exist, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc** (default): ascending order.
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * - GmtCreate: creation time.
   * - GmtModified: update time.
   * 
   * @example
   * GmtModified
   */
  orderFieldName?: string;
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
   * - `{"Type":"maxCost", "Value":"100"}`: the top 100 queries with the longest execution duration.
   * - `{"Type":"status","Value":"finished"}`: completed queries.
   * - `{"Type":"status","Value":"running"}`: running queries.
   * - `{"Type":"cost","Min":"30","Max":"50"}`: queries with a custom execution duration range. You can specify the minimum and maximum execution duration. **Min** specifies the minimum execution duration. **Max** specifies the maximum execution duration. Unit: milliseconds (ms).
   *     - If only **Min** is specified, queries with an execution duration greater than this value are returned.
   *     - If only **Max** is specified, queries with an execution duration less than this value are returned.
   *     - If both **Min** and **Max** are specified, queries with an execution duration greater than or equal to **Min** and less than or equal to **Max** are returned.
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
   * 
   * - cn-hangzhou: Your assets are located in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets are located outside China.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
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
   * 2025-09-30T02:23:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      alertUuid: 'AlertUuid',
      endTime: 'EndTime',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderDirection: 'OrderDirection',
      orderFieldName: 'OrderFieldName',
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
      alertLevel: { 'type': 'array', 'itemType': 'string' },
      alertUuid: 'string',
      endTime: 'number',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderDirection: 'string',
      orderFieldName: 'string',
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
    if(Array.isArray(this.alertLevel)) {
      $dara.Model.validateArray(this.alertLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

