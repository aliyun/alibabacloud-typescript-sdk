// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * 实例理论
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
   * - productCategory: the service type category.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The metadata source. Valid values:
   * - CMS: CloudMonitor Basic monitoring metrics.
   * - PROM_BASIC: Prometheus CloudMonitor basic monitoring metrics.
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
      keywords: 'keywords',
      labelsShrink: 'labels',
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
      labelsShrink: 'string',
      metaFormat: 'string',
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

