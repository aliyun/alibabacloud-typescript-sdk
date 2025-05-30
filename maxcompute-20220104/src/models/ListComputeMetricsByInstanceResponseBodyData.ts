// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics } from "./ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics";


export class ListComputeMetricsByInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of pay-as-you-go job compute usage.
   */
  instanceComputeMetrics?: ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics[];
  /**
   * @remarks
   * The current page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results returned.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceComputeMetrics: 'instanceComputeMetrics',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceComputeMetrics: { 'type': 'array', 'itemType': ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceComputeMetrics)) {
      $dara.Model.validateArray(this.instanceComputeMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

