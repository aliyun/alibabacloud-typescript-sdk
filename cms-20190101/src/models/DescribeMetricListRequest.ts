// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The dimensions that specify the resources to be monitored.
   * 
   * Format: a collection of key-value pairs, such as `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * > A single request can be used to query a maximum of 50 instances.
   * 
   * @example
   * [{"instanceId":"i-2ze2d6j5uhg20x47****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * - Format: YYYY-MM-DD hh:mm:ss.
   * 
   * > The interval between \\`StartTime\\` and \\`EndTime\\` must be less than or equal to 31 days.
   * 
   * @example
   * 2019-01-30 00:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression that is used for real-time computing based on the query results.
   * 
   * > Only the groupby expression is supported. This expression is similar to the GROUP BY statement in databases.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query.
   * 
   * > The maximum value of \\`Length\\` in a single request is 1440.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * For more information, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * > If you do not set this parameter, the first page of data is returned. If a value is returned for this parameter, it indicates that more data is available. To retrieve the next page, use the returned value as the \\`NextToken\\` in your next request. A null value indicates that all data has been retrieved.
   * 
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
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
   * > - If you do not set this parameter, the reporting period that was specified when the metric was registered is used.
   * 
   * - The statistical period of each metric (`MetricName`) of a cloud service is different. For more information, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * - Format: YYYY-MM-DD hh:mm:ss.
   * 
   * > * The time range is a left-open and right-closed interval. The value of \\`StartTime\\` must be earlier than the value of \\`EndTime\\`.
   * 
   * - The interval between \\`StartTime\\` and \\`EndTime\\` must be less than or equal to 31 days.
   * 
   * @example
   * 2019-01-30 00:00:00
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

