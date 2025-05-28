// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReportPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The average duration (minutes).
   * 
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @remarks
   * Current page number for organization member list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   **lastDay**: Yesterday
   * *   **sevenDays**: Within seven days
   * *   **thirtyDays**: Within 30 days
   * 
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the security report.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The resource types.
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
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
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

