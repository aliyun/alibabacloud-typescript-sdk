// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The dimensions that specify the resources whose monitoring data you want to query.
   * 
   * Set the value to a collection of key-value pairs. A typical key-value pair is `instanceId:i-2ze2d6j5uhg20x47****`.
   * 
   * >  You can query a maximum of 50 instances in a single request.
   * 
   * @example
   * [{"instanceId": "i-abcdefgh12****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format
   * 
   * @example
   * 2019-01-30 00:10:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression that is used to compute the query results in real time.
   * 
   * >  Only the groupby expression is supported. This expression is similar to the GROUP BY statement that is used in databases.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * >  The maximum value of the Length parameter in a request is 1440.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * For more information about metric names, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service. Format: acs_service name.
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
   * The paging token.
   * 
   * >  If this parameter is not specified, the data on the first page is returned. A return value other than Null of this parameter indicates that not all entries have been returned. You can use this value as an input parameter to obtain entries on the next page. The value Null indicates that all query results have been returned.
   * 
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried.
   * 
   * Valid values: 60, 300, and 900.
   * 
   * Unit: seconds.
   * 
   * >  Configure this parameter based on your business scenario.
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
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format
   * 
   * >  The specified period includes the end time and excludes the start time. The start time must be earlier than the end time.
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

