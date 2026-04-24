// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricMetaListShrinkRequest extends $dara.Model {
  labelsShrink?: string;
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

