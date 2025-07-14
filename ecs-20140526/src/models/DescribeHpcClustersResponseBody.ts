// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHpcClustersResponseBodyHpcClustersHpcCluster extends $dara.Model {
  /**
   * @remarks
   * The description of the HPC cluster.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The description of the HPC cluster.
   * 
   * @example
   * hpc-bp1a5zr3u7nq9cx****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * The name of the HPC cluster.
   * 
   * @example
   * testName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hpcClusterId: 'HpcClusterId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hpcClusterId: 'string',
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

export class DescribeHpcClustersResponseBodyHpcClusters extends $dara.Model {
  hpcCluster?: DescribeHpcClustersResponseBodyHpcClustersHpcCluster[];
  static names(): { [key: string]: string } {
    return {
      hpcCluster: 'HpcCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcCluster: { 'type': 'array', 'itemType': DescribeHpcClustersResponseBodyHpcClustersHpcCluster },
    };
  }

  validate() {
    if(Array.isArray(this.hpcCluster)) {
      $dara.Model.validateArray(this.hpcCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

