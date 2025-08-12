// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The metric description.
   * 
   * @example
   * CPUUtilization
   */
  description?: string;
  /**
   * @remarks
   * The monitoring dimensions of the resource. Multiple monitoring dimensions are separated with commas (,).
   * 
   * @example
   * instanceId
   */
  dimensions?: string;
  /**
   * @remarks
   * The tags of the metric, including one or more JSON strings.
   * 
   * Format: `[{"name":"tag key","value":"tag value"}]`. The `name` can be repeated. The following tags are available:
   * 
   * *   metricCategory: the category of the metric.
   * *   alertEnable: indicates whether to report alerts for the metric.
   * *   alertUnit: the unit of the metric in the alerts.
   * *   unitFactor: the factor for metric unit conversion.
   * *   minAlertPeriod: the minimum interval at which the alert is reported.
   * *   productCategory: the category of the service.
   * 
   * @example
   * [{\\"name\\":\\"alertUnit\\",\\"value\\":\\"Bytes\\"},{\\"name\\":\\"minAlertPeriod\\",\\"value\\":\\"60\\"},{\\"name\\":\\"metricCategory\\",\\"value\\":\\"instanceId\\"},{\\"name\\":\\"instanceType\\",\\"value\\":\\"disaster\\"},{\\"name\\":\\"is_alarm\\",\\"value\\":\\"true\\"},{\\"name\\":\\"productCategory\\",\\"value\\":\\"kvstore_old\\"}]
   */
  labels?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * @example
   * acs_kvstore
   */
  namespace?: string;
  /**
   * @remarks
   * The statistical periods of the metric. Multiple statistical periods are separated with commas (,).
   * 
   * Unit: seconds.
   * 
   * @example
   * 60,300
   */
  periods?: string;
  /**
   * @remarks
   * The statistical method. Multiple statistical methods are separated with commas (,).
   * 
   * @example
   * Average,Minimum,Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimensions: 'Dimensions',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      periods: 'Periods',
      statistics: 'Statistics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimensions: 'string',
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      periods: 'string',
      statistics: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResources extends $dara.Model {
  resource?: DescribeMetricMetaListResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMetricMetaListResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CCE0AF0-053C-4B13-A583-DC9A85785D49
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration of the metrics in the resources.
   */
  resources?: DescribeMetricMetaListResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resources: DescribeMetricMetaListResponseBodyResources,
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

