// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterInfoListResponseBodyClusterList extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * cfeb7a9f99ce740e98c5595d0fe37****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the container cluster.
   * 
   * @example
   * test111
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **ManagedKubernetes**: managed Kubernetes cluster.
   * *   **NotManagedKubernetes**: non-managed Kubernetes cluster.
   * *   **PrivateKubernetes**: private cluster.
   * *   **kubernetes**: dedicated Kubernetes cluster.
   * *   **ask**: dedicated serverless Kubernetes (ASK) cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The region in which the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **unavailable**: The cluster is unavailable.
   * *   **Available**: The cluster is available.
   * *   **Creating**: The cluster is being created.
   * *   **CreateFailed**: The cluster failed to be created.
   * 
   * @example
   * Available
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether container network topology was enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  targetResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      regionId: 'RegionId',
      state: 'State',
      targetResult: 'TargetResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      regionId: 'string',
      state: 'string',
      targetResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about clusters.
   */
  clusterList?: DescribeClusterInfoListResponseBodyClusterList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: { 'type': 'array', 'itemType': DescribeClusterInfoListResponseBodyClusterList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterList)) {
      $dara.Model.validateArray(this.clusterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

