// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotNodeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Supported formats:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * - Formatted time: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2019-01-30 00:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression used to perform real-time calculations on the query results.
   * > Currently, only groupby (similar to the GROUP BY clause in databases) is supported.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of records to return on each page for paging in a paged query.
   * 
   * > The maximum value of Length for a single request is 1440.
   * 
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * The name of the monitoring metric for the cloud service.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the cloud service. Naming convention: acs_ServiceName.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * This parameter is required. If you do not specify this parameter, the API returns an IllegalParam error (HTTP 400).
   * 
   * @example
   * cc427e14-f257-4670-9d2b-d83bbbe7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds. Valid values: 60, 300, and 900.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The start time. Supported formats:
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * - Formatted time: YYYY-MM-DDThh:mm:ssZ.
   * - The interval between StartTime and EndTime must be less than or equal to 31 days.
   * 
   * @example
   * 2019-01-30 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nodeId: 'NodeId',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nodeId: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

