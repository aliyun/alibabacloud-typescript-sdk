// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryComponentPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The average duration, in minutes.
   * 
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @remarks
   * The current page number of the workspace member list. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 10. Maximum value: 1000.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **lastDay**: yesterday
   * - **sevenDays**: within the last seven days
   * - **thirtyDays**: within the last thirty days
   * 
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the report. Reports include data portals, dashboards, workbooks, and ad hoc queries.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * report
   */
  resourceType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      reportId: 'ReportId',
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      reportId: 'string',
      resourceType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

