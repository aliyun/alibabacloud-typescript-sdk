// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListResponseBodyResourcesResource extends $dara.Model {
  description?: string;
  dimensions?: string;
  labels?: string;
  metricName?: string;
  namespace?: string;
  periods?: string;
  statistics?: string;
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
   * > The status code 200 indicates that the request was successful.
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
   * CDE9EAFF-D54E-4024-BBFC-B0AAC883143B
   */
  requestId?: string;
  resources?: DescribeMetricMetaListResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
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
   * 10
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

