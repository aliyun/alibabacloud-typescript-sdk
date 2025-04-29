// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHpcClustersResponseBodyHpcClusters } from "./DescribeHpcClustersResponseBodyHpcClusters";


export class DescribeHpcClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the HPC cluster.
   */
  hpcClusters?: DescribeHpcClustersResponseBodyHpcClusters;
  /**
   * @remarks
   * Details about the HPC clusters. The value is an array that consists of the information of each HPC cluster.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of HPC clusters.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the HPC cluster.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hpcClusters: 'HpcClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcClusters: DescribeHpcClustersResponseBodyHpcClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hpcClusters && typeof (this.hpcClusters as any).validate === 'function') {
      (this.hpcClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

