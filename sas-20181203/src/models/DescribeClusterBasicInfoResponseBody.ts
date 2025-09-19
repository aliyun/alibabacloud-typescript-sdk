// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBasicInfoResponseBodyClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * c870ec78ecbcb41d2a35c679823ef****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * testackpro
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **ManagedKubernetes**: managed Kubernetes cluster
   * *   **NotManagedKubernetes**: non-managed Kubernetes cluster
   * *   **PrivateKubernetes**: private cluster
   * *   **kubernetes**: dedicated Kubernetes cluster
   * *   **ask**: dedicated ASK cluster
   * 
   * @example
   * kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The timestamp when the cluster was created. Unit: milliseconds.
   * 
   * @example
   * 1662038134000
   */
  createTime?: number;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.22.10-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * The number of instances in the cluster.
   * 
   * @example
   * 10
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the region in which the cluster is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **unavailable**
   * *   **Available**
   * *   **Creating**
   * *   **CreateFailed**
   * 
   * @example
   * Available
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the cluster is enabled. Valid values:
   * 
   * *   **true**: The cluster is enabled.
   * *   **false**: The cluster is disabled.
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
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      instanceCount: 'InstanceCount',
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
      createTime: 'number',
      currentVersion: 'string',
      instanceCount: 'number',
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

export class DescribeClusterBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the cluster.
   */
  clusterInfo?: DescribeClusterBasicInfoResponseBodyClusterInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterBasicInfoResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

