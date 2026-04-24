// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListResponseBodyResourcesDimensionDescription extends $dara.Model {
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
  description?: string;
  dimensionDescription?: DescribeMetricMetaListResponseBodyResourcesDimensionDescription[];
  dimensions?: string[];
  labels?: { [key: string]: string };
  metricName?: string;
  namespace?: string;
  periods?: string;
  statistics?: string;
  type?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      dimensionDescription: 'dimensionDescription',
      dimensions: 'dimensions',
      labels: 'labels',
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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
  resources?: DescribeMetricMetaListResponseBodyResources[];
  /**
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

