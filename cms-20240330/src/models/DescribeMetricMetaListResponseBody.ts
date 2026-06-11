// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListResponseBodyResourcesDimensionDescription extends $dara.Model {
  /**
   * @remarks
   * The name of the dimension.
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
   * The descriptions of the dimensions.
   */
  dimensionDescription?: DescribeMetricMetaListResponseBodyResourcesDimensionDescription[];
  /**
   * @remarks
   * The dimensions for filtering resources in CloudMonitor.
   */
  dimensions?: string[];
  /**
   * @remarks
   * The CloudMonitor labels. This parameter is returned only when `metaFormat` is set to `CMS`.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The metadata format.
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
   * The namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The aggregation period.
   * 
   * @example
   * 60
   */
  periods?: string;
  /**
   * @remarks
   * The statistic of the metric. Examples:
   * 
   * - `Maximum`: the maximum value.
   * 
   * - `Minimum`: the minimum value.
   * 
   * - `Average`: the average value.
   * 
   * @example
   * Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * The metric type.
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
   * The page number. The default value is `1`.
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
   * The ID of the request.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the metrics in the resource.
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

