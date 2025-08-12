// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopRequest extends $dara.Model {
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Set the value to a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * >  You can query a maximum of 50 instances in each request.
   * 
   * @example
   * [{"instanceId": "i-abcdefgh12****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query monitoring data.
   * 
   * *   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.``
   * 
   * *   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.````
   * 
   *     *   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
   *     *   If you set the `Period` parameter to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
   *     *   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to two days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
   * 
   * The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   Time format: YYYY-MM-DDThh:mm:ssZ
   * 
   * >  We recommend that you use UNIX timestamps to prevent time zone-related issues.
   * 
   * @example
   * 2021-05-08 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The expression that is used to compute the query results in real time.
   * 
   * >  Only the `groupby` expression is supported. This expression is similar to the GROUP BY statement used in databases.
   * 
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * >  The maximum value of the Length parameter in a request is 1440.
   * 
   * @example
   * 10
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
   * cpu_idle
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
   * The order in which data is sorted. Valid values:
   * 
   * *   True: sorts data in ascending order.
   * *   False (default): sorts data in descending order.
   * 
   * @example
   * False
   */
  orderDesc?: string;
  /**
   * @remarks
   * The field based on which data is sorted. Valid values:
   * 
   * *   Average
   * *   Minimum
   * *   Maximum
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  orderby?: string;
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
   * *   If this parameter is not specified, monitoring data is queried based on the period in which metric values are reported.
   * 
   * *   Statistical periods vary based on the metrics that are specified by `MetricName`. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * *   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.``
   * 
   * *   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.````
   * 
   *     *   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
   *     *   If you set the `Period` parameter to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
   *     *   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to two days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
   * 
   * The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   Time format: YYYY-MM-DDThh:mm:ssZ
   * 
   * > 
   * 
   * *   You must set the `StartTime` parameter to a point in time that is later than 00:00:00 Thursday, January 1, 1970. Otherwise, this parameter is invalid.
   * 
   * *   We recommend that you use UNIX timestamps to prevent time zone-related issues.
   * 
   * @example
   * 2021-05-08 08:00:00
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
      orderDesc: 'OrderDesc',
      orderby: 'Orderby',
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
      orderDesc: 'string',
      orderby: 'string',
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

