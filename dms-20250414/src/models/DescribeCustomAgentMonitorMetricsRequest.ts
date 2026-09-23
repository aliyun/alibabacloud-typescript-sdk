// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentMonitorMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID.
   * - Required only when QueryType is set to CustomAgent.
   * 
   * @example
   * ca-a9fd******0lnq4g6c
   */
  customAgentId?: string;
  /**
   * @remarks
   * The end time of the statistical period (epoch millis).
   * - Note: The maximum time range is 3 months.
   * 
   * @example
   * 1756742400000
   */
  endTime?: number;
  /**
   * @remarks
   * The aggregation granularity. Valid values:
   * - DAY: daily. The maximum supported time range is 3 months.
   * - HOUR: hourly. The maximum supported time range is 72 hours.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The statistical scope. Default value: All. Valid values:
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
   * The start time of the statistical period (epoch millis).
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
   * 99fad******qg6c0l4nlacu
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      endTime: 'EndTime',
      granularity: 'Granularity',
      queryType: 'QueryType',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      endTime: 'number',
      granularity: 'string',
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

