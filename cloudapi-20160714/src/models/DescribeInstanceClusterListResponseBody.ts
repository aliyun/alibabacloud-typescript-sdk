// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceClusterListResponseBodyInstanceClusters } from "./DescribeInstanceClusterListResponseBodyInstanceClusters";


export class DescribeInstanceClusterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance cluster list.
   */
  instanceClusters?: DescribeInstanceClusterListResponseBodyInstanceClusters;
  /**
   * @remarks
   * The page number of the returned page.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceClusters: 'InstanceClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClusters: DescribeInstanceClusterListResponseBodyInstanceClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceClusters && typeof (this.instanceClusters as any).validate === 'function') {
      (this.instanceClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

