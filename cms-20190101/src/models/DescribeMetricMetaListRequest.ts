// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The tags for filtering metrics. Specify a JSON string.
   * 
   * Format: ` [{"name":"tag key","value":"tag value"},{"name":"tag key","value":"tag value"}]  `. The following tags are available:
   * 
   * *   metricCategory: the category of the metric.
   * *   alertEnable: specifies whether to report alerts for the metric.
   * *   alertUnit: the unit of the metric in the alerts.
   * *   unitFactor: the factor for metric unit conversion.
   * *   minAlertPeriod: the minimum interval at which the alert is reported.
   * *   productCategory: the category of the service.
   * 
   * @example
   * [{"name":"productCategory","value":"kvstore_old"}]
   */
  labels?: string;
  /**
   * @remarks
   * The metric name. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * @example
   * acs_kvstore
   */
  namespace?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

