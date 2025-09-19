// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotNodeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Valid values:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC
   * *   Date format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2019-01-30 00:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression that is used to compute the query results in real time.
   * 
   * >  Only the groupby expression is supported. This expression is similar to the GROUP BY statement that applies to databases.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * >  The maximum value of the Length parameter in a request is 1440.
   * 
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service. Format: acs_cloud service name.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The management node ID.
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
   * The beginning of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC
   * *   Date format: YYYY-MM-DDThh:mm:ssZ
   * *   The interval between the start time and the end time is less than or equal to 31 days.
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

