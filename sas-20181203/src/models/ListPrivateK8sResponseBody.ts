// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateK8sResponseBodyPrivateK8sInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 12345
   */
  aliUid?: number;
  /**
   * @remarks
   * The IP address of the API server.
   * 
   * @example
   * 192.168.XX.XX
   */
  apiServerIp?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * xxx
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The version of Kubernetes.
   * 
   * @example
   * 1.18
   */
  k8sVersion?: string;
  /**
   * @remarks
   * The server configuration of Kubernetes.
   * 
   * @example
   * xxx
   */
  kubeConfig?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **1**: Internet.
   * *   **2**: VPC.
   * 
   * @example
   * 1
   */
  netType?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zet5l358k6z0gnz*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiServerIp: 'ApiServerIp',
      clusterName: 'ClusterName',
      id: 'Id',
      k8sVersion: 'K8sVersion',
      kubeConfig: 'KubeConfig',
      netType: 'NetType',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiServerIp: 'string',
      clusterName: 'string',
      id: 'number',
      k8sVersion: 'string',
      kubeConfig: 'string',
      netType: 'number',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateK8sResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the self-managed Kubernetes clusters.
   */
  privateK8sInfos?: ListPrivateK8sResponseBodyPrivateK8sInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      privateK8sInfos: 'PrivateK8sInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateK8sInfos: { 'type': 'array', 'itemType': ListPrivateK8sResponseBodyPrivateK8sInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateK8sInfos)) {
      $dara.Model.validateArray(this.privateK8sInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

