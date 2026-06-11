// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * productCategory
   */
  name?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * ecs
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListRequest extends $dara.Model {
  keywords?: string;
  /**
   * @remarks
   * The labels used to filter resources. The following labels are supported:
   * 
   * - `metricCategory`: The metric category.
   * 
   * - `alertEnable`: Indicates whether to enable alerts.
   * 
   * - `alertUnit`: The recommended unit for alerts.
   * 
   * - `unitFactor`: The unit conversion factor.
   * 
   * - `minAlertPeriod`: The minimum alert period.
   * 
   * - `productCategory`: The product category.
   */
  labels?: DescribeMetricMetaListRequestLabels[];
  /**
   * @remarks
   * The source of the metadata. Valid values: `CMS` for CloudMonitor metrics and `PROM_BASIC` for basic Prometheus metrics.
   * 
   * @example
   * CMS
   */
  metaFormat?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the product.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: `1`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: `2000`.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keywords: 'keywords',
      labels: 'labels',
      metaFormat: 'metaFormat',
      metricName: 'metricName',
      namespace: 'namespace',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      labels: { 'type': 'array', 'itemType': DescribeMetricMetaListRequestLabels },
      metaFormat: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

