// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastRequest extends $dara.Model {
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Set the value to a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * >  You can query a maximum of 50 instances in each request.
   * 
   * @example
   * [{"instanceId":"i-abcdefgh12****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query monitoring data.
   * 
   * *   For second-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and 20 minutes earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
   * *   For minute-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and 2 hours earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
   * *   For hour-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and two days earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
   * 
   * @example
   * 2019-01-31 10:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression that is used to calculate the query results in real time.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 1000. This value indicates that a maximum of 1,000 entries of monitoring data can be returned on each page.
   * 
   * >  The maximum value of the Length parameter for each request is 1440.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
   * 
   * For more information about metric names, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * *   If the number of results exceeds the maximum number of entries allowed on a single page, a pagination token is returned.
   * *   This token can be used as an input parameter to obtain the next page of results. If all results are obtained, no token is returned.
   * 
   * @example
   * 15761432850009dd70bb64cff1f0fff6c0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae****
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * 
   * Valid values: 15, 60, 900, and 3600.
   * 
   * Unit: seconds.
   * 
   * > 
   * 
   * *   If this parameter is not specified, monitoring data is queried based on the period in which metric values are reported. The statistical period of metrics (`MetricName`) varies for each cloud service. The statistical period of metrics is displayed in the `MinPeriods` column on the **Metrics** page for each cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query monitoring data.
   * 
   * @example
   * 2019-01-31 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
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

