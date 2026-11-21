// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListResponseBodyResourcesDimensionDescription extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * user_id
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ECS CPU Utilization
   */
  description?: string;
  /**
   * @remarks
   * The description of the dimension information.
   */
  dimensionDescription?: DescribeMetricMetaListResponseBodyResourcesDimensionDescription[];
  /**
   * @remarks
   * The resource filtering dimensions of CloudMonitor Basic.
   */
  dimensions?: string[];
  /**
   * @remarks
   * The CloudMonitor labels. This parameter is returned only when metaFormat is set to CMS.
   * 
   * @example
   * {"DefaultTemplate":"false","alertDefault":"80","alertUnit":"%","is_alarm":"true","metricCategory":"instanceId","minAlertPeriod":"60","productCategory":"ecs","unitFactor":"1"}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The source of metadata. Valid values: CMS for CloudMonitor Basic monitoring metrics, and PROM_BASIC for basic monitoring metrics of Managed Service for Prometheus.
   * 
   * Example value:
   * CMS
   * Valid values:
   * CMS
   * PROM_BASIC
   * 
   * @example
   * PROM_BASIC
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
   * The namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The period.
   * 
   * @example
   * 60
   */
  periods?: string;
  /**
   * @remarks
   * The statistical method of the metric. Valid values:
   * - Maximum: the maximum value.
   * - Minimum: the minimum value.
   * - Average: the average value.
   * 
   * @example
   * Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * The type of the metric.
   * 
   * @example
   * Gauge
   */
  type?: string;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      dimensionDescription: 'dimensionDescription',
      dimensions: 'dimensions',
      labels: 'labels',
      metaFormat: 'metaFormat',
      metricName: 'metricName',
      namespace: 'namespace',
      periods: 'periods',
      statistics: 'statistics',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimensionDescription: { 'type': 'array', 'itemType': DescribeMetricMetaListResponseBodyResourcesDimensionDescription },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      metaFormat: 'string',
      metricName: 'string',
      namespace: 'string',
      periods: 'string',
      statistics: 'string',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensionDescription)) {
      $dara.Model.validateArray(this.dimensionDescription);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration information of the metrics for the resource.
   */
  resources?: DescribeMetricMetaListResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6370
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resources: 'resources',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeMetricMetaListResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

