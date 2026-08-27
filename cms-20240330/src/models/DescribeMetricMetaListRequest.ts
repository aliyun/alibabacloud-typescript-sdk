// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * productCategory
   */
  name?: string;
  /**
   * @remarks
   * The label value.
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
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The category.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * Instance theory
   */
  keywords?: string;
  /**
   * @remarks
   * Filters resources by label. The following labels are available:
   * - metricCategory: the metric category description.
   * - alertEnable: specifies whether alerting is required.
   * - alertUnit: the recommended alert unit.
   * - unitFactor: the unit conversion factor.
   * - minAlertPeriod: the minimum alert period.
   * - productCategory: the product type category.
   */
  labels?: DescribeMetricMetaListRequestLabels[];
  /**
   * @remarks
   * The metadata source. Valid values:
   * 
   * - CMS: CloudMonitor Basic monitoring metrics.
   * - PROM_BASIC: Prometheus CloudMonitor Basic monitoring metrics.
   * 
   * @example
   * CMS
   */
  metaFormat?: string;
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
   * The namespace, which is used to distinguish between services.
   * 
   * @example
   * acs_ecs_dashboard
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
   * The number of entries per page. Default value: 2000.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      category: 'category',
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
      aliyunLang: 'string',
      category: 'string',
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

