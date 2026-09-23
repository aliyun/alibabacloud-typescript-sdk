// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentMonitorSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID.
   * - Required only when QueryType is set to CustomAgent.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * The end time for statistics (epoch millis).
   * - Note: The maximum time range is 3 months.
   * 
   * @example
   * 1756742400000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 200. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query scope. Default value: All. Valid values:
   * - Default: default DataAgent sessions.
   * - CustomAgent: specified custom agent sessions.
   * - All: all sessions in the workspace.
   * 
   * @example
   * All
   */
  queryType?: string;
  /**
   * @remarks
   * The start time for statistics (epoch millis).
   * - Note: The maximum time range is 3 months.
   * 
   * @example
   * 1756656000000
   */
  startTime?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'number',
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

