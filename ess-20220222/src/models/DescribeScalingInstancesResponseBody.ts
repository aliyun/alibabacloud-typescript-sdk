// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingInstancesResponseBodyScalingInstances } from "./DescribeScalingInstancesResponseBodyScalingInstances";


export class DescribeScalingInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * B13527BF-1FBD-4334-A512-20F5E9D3FB4D
   */
  requestId?: string;
  /**
   * @remarks
   * The ECS instances.
   */
  scalingInstances?: DescribeScalingInstancesResponseBodyScalingInstances[];
  /**
   * @remarks
   * The total number of ECS instances in the scaling group.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of preemptible instances that run as expected in the scaling group.
   * 
   * @example
   * 4
   */
  totalSpotCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingInstances: 'ScalingInstances',
      totalCount: 'TotalCount',
      totalSpotCount: 'TotalSpotCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingInstances: { 'type': 'array', 'itemType': DescribeScalingInstancesResponseBodyScalingInstances },
      totalCount: 'number',
      totalSpotCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingInstances)) {
      $dara.Model.validateArray(this.scalingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

