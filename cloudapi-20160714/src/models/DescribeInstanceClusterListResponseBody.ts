// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster extends $dara.Model {
  createdTime?: string;
  description?: string;
  instanceClusterId?: string;
  instanceClusterName?: string;
  instanceClusterStatus?: string;
  instanceClusterType?: string;
  modifiedTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceClusterId: 'InstanceClusterId',
      instanceClusterName: 'InstanceClusterName',
      instanceClusterStatus: 'InstanceClusterStatus',
      instanceClusterType: 'InstanceClusterType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceClusterId: 'string',
      instanceClusterName: 'string',
      instanceClusterStatus: 'string',
      instanceClusterType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceClusterListResponseBodyInstanceClusters extends $dara.Model {
  instanceCluster?: DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster[];
  static names(): { [key: string]: string } {
    return {
      instanceCluster: 'InstanceCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCluster: { 'type': 'array', 'itemType': DescribeInstanceClusterListResponseBodyInstanceClustersInstanceCluster },
    };
  }

  validate() {
    if(Array.isArray(this.instanceCluster)) {
      $dara.Model.validateArray(this.instanceCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceClusterListResponseBody extends $dara.Model {
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

