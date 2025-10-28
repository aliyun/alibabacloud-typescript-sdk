// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sClusterResponseBodyClusterPageClusterListCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 81453e4b-4df0-4592-****-b835a2ee****
   */
  clusterId?: string;
  /**
   * @remarks
   * The import state of the cluster. Valid values:
   * 
   * *   0: The cluster is not imported.
   * *   1: The cluster is imported.
   * *   2: The cluster fails to be imported.
   * *   3: The cluster is being imported.
   * *   4: The cluster is deleted.
   * 
   * @example
   * 1
   */
  clusterImportStatus?: number;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   1: The cluster runs as expected.
   * *   2: The cluster does not run as expected.
   * *   3: The cluster is offline.
   * 
   * @example
   * 1
   */
  clusterStatus?: number;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   2: Elastic Compute Service (ECS) cluster
   * *   5: ACK cluster or Serverless Kubernetes cluster
   * 
   * @example
   * 5
   */
  clusterType?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * @example
   * 2ce62869f4d4466b920312315f05****
   */
  csClusterId?: string;
  /**
   * @remarks
   * The state of the ACK cluster. Valid values:
   * 
   * *   initial: The cluster is being initialized.
   * *   failed: The cluster fails to be created.
   * *   running: The cluster is running.
   * *   updating: The cluster is being updated.
   * *   scaling: The cluster is being scaled out.
   * *   removing: Nodes are being removed from the cluster.
   * *   upgrading: The cluster is being upgraded.
   * *   deleting: The cluster is being deleted.
   * *   delete_failed: The cluster fails to be deleted.
   * *   deleted: The cluster is deleted. The deleted cluster is invisible to users.
   * 
   * @example
   * running
   */
  csClusterStatus?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   1: classic network
   * *   2: VPC
   * 
   * @example
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 4
   */
  nodeNum?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * test
   */
  regionId?: string;
  /**
   * @remarks
   * The subtype of the cluster. Valid values:
   * 
   * *   Ask: Serverless Kubernetes cluster
   * *   ManagedKubernetes: ACK cluster
   * 
   * @example
   * Ask
   */
  subClusterType?: string;
  /**
   * @remarks
   * The CIDR block of the subnet.
   * 
   * @example
   * 172.20.0.0/16
   */
  subNetCidr?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-**z1mlwpbjx3e9m**
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1uf97****xjxgip****
   */
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
  /**
   * @remarks
   * The list of clusters.
   */
  clusterList?: GetK8sClusterResponseBodyClusterPageClusterList;
  /**
   * @remarks
   * The number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages that are returned.
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
   * The cluster data that is returned by page.
   */
  clusterPage?: GetK8sClusterResponseBodyClusterPage;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

