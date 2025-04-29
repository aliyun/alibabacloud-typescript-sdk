// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters";


export class DescribeDedicatedHostClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of host group information.
   */
  dedicatedHostClusters?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters;
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 214A2187-B06F-4E49-A081-4D053466A8C7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of dedicated host clusters.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusters: 'DedicatedHostClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusters: DescribeDedicatedHostClustersResponseBodyDedicatedHostClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dedicatedHostClusters && typeof (this.dedicatedHostClusters as any).validate === 'function') {
      (this.dedicatedHostClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

