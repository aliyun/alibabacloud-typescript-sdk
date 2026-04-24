// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListRequestLabels extends $dara.Model {
  /**
   * @example
   * productCategory
   */
  name?: string;
  /**
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
  labels?: DescribeMetricMetaListRequestLabels[];
  /**
   * @example
   * CMS
   */
  metaFormat?: string;
  /**
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
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
  static names(): { [key: string]: string } {
    return {
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

