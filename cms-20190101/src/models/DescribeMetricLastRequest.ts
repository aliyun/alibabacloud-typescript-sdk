// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastRequest extends $dara.Model {
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Format: a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * > A maximum of 50 instances can be queried in a single request.
   * 
   * @example
   * [{"instanceId":"i-2ze2d6j5uhg20x47****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end time for querying the metric.
   * 
   * The system automatically limits the query start time (query window size) based on data granularity:
   * 1. Second-level data: The maximum query span is 20 minutes (start time = Max(startTime, EndTime - 20min)).
   * 2. Minute-level data: The maximum query span is 2 hours (start time = Max(startTime, EndTime - 2h)).
   * 3. Hour-level data: The maximum query span is 2 days (start time = Max(startTime, EndTime - 2d)).
   * 
   * > If the specified startTime is earlier than the limit, the system automatically uses the limit as the actual query start time.
   * 
   * @example
   * 2019-01-31 10:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression for real-time computation on existing query results.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries per page for monitoring data. This parameter is used for paged query.
   * 
   * Default value: 1000, which indicates 1000 entries of monitoring data per page.
   * 
   * > The maximum value of Length in a single request is 1440.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The metric name of the cloud service.
   * 
   * For information about metric names, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * For information about namespaces of cloud services, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * - If the query results that match the filter conditions exceed the page size, a pagination cursor is returned.
   * - To retrieve the next page of data, use the returned cursor value as the request parameter until no cursor value is returned, which indicates that all data has been retrieved.
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
   * > - If you do not set the statistical period, monitoring data is queried based on the reporting period that was specified when the metric was registered.
   *     - The statistical period varies by metric (`MetricName`) for each cloud service. For more information, see the `Min Periods` column on the metric list page of the target cloud service in [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * Two formats are supported: 1. A UNIX timestamp string in milliseconds (ms), which represents the number of milliseconds elapsed since 1970-01-01 00:00:00 UTC. 2. A time string in the ISO 8601 format of YYYY-MM-DDThh:mm:ssZ in UTC.
   * 
   * > The query range uses a left-exclusive and right-inclusive mode. StartTime cannot be equal to or greater than EndTime, and the interval between them must be less than or equal to 31 days.
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

