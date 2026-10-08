// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sClusterResponseBodyClusterPageClusterListCluster extends $dara.Model {
  clusterId?: string;
  clusterImportStatus?: number;
  clusterName?: string;
  clusterStatus?: number;
  clusterType?: number;
  cpu?: number;
  csClusterId?: string;
  csClusterStatus?: string;
  description?: string;
  mem?: number;
  networkMode?: number;
  nodeNum?: number;
  regionId?: string;
  subClusterType?: string;
  subNetCidr?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterImportStatus: 'ClusterImportStatus',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      csClusterId: 'CsClusterId',
      csClusterStatus: 'CsClusterStatus',
      description: 'Description',
      mem: 'Mem',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      regionId: 'RegionId',
      subClusterType: 'SubClusterType',
      subNetCidr: 'SubNetCidr',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterImportStatus: 'number',
      clusterName: 'string',
      clusterStatus: 'number',
      clusterType: 'number',
      cpu: 'number',
      csClusterId: 'string',
      csClusterStatus: 'string',
      description: 'string',
      mem: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      regionId: 'string',
      subClusterType: 'string',
      subNetCidr: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPageClusterList extends $dara.Model {
  cluster?: GetK8sClusterResponseBodyClusterPageClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': GetK8sClusterResponseBodyClusterPageClusterListCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPage extends $dara.Model {
  clusterList?: GetK8sClusterResponseBodyClusterPageClusterList;
  /**
   * @remarks
   * The number of the returned page. The default value is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. The default value is 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: GetK8sClusterResponseBodyClusterPageClusterList,
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.clusterList && typeof (this.clusterList as any).validate === 'function') {
      (this.clusterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated list of clusters.
   */
  clusterPage?: GetK8sClusterResponseBodyClusterPage;
  /**
   * @remarks
   * The status of the call or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3CE915C-0C83-4AA5-8D66-E8BEED62939E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterPage: 'ClusterPage',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterPage: GetK8sClusterResponseBodyClusterPage,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterPage && typeof (this.clusterPage as any).validate === 'function') {
      (this.clusterPage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

