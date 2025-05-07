// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceMetricInfo } from "./InstanceMetricInfo";


export class ListInstancesMetricsOutput extends $dara.Model {
  requestId?: string;
  metricsList?: InstanceMetricInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1234
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metricsList: 'metricsList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metricsList: { 'type': 'array', 'itemType': InstanceMetricInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metricsList)) {
      $dara.Model.validateArray(this.metricsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

