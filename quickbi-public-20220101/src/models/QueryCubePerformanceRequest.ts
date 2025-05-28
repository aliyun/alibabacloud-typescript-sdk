// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubePerformanceRequest extends $dara.Model {
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
   * The dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The current page number of the workspace member list:
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
   * 100
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
      cubeId: 'CubeId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      cubeId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
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

