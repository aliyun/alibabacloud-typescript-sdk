// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceKubernetesClusterResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The corresponding MSE namespace name.
   * 
   * @example
   * default
   */
  mseNamespace?: string;
  /**
   * @remarks
   * The Kubernetes namespace name.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mseNamespace: 'MseNamespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mseNamespace: 'string',
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

export class GetGovernanceKubernetesClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cd23228b3c80c4d4f9ad7af1d87cc30d5
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * myCluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The Kubernetes version.
   * 
   * @example
   * 1.20.11-aliyun.1
   */
  k8sVersion?: string;
  /**
   * @remarks
   * The information about namespaces.
   * 
   * @example
   * [{\\"Name\\":\\"ack-onepilot\\",\\"Tags\\":null},{\\"Name\\":\\"default\\",\\"Tags\\":{\\"mse-enable\\":\\"enabled\\"}},{\\"Name\\":\\"kube-node-lease\\",\\"Tags\\":null},{\\"Name\\":\\"kube-public\\",\\"Tags\\":null},{\\"Name\\":\\"kube-system\\",\\"Tags\\":null}]
   */
  namespaceInfos?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: GetGovernanceKubernetesClusterResponseBodyDataNamespaces[];
  /**
   * @remarks
   * The Pilot startup time.
   * 
   * @example
   * 2022-01-11T11:50:38.000+0000
   */
  pilotStartTime?: string;
  /**
   * @remarks
   * The ack-onepilot component version
   * 
   * @example
   * 4.1.1
   */
  pilotVersion?: string;
  /**
   * @remarks
   * The region where the cluster is located. MSE supports specific regions.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the UDF was last modified.
   * 
   * @example
   * 2022-01-12T05:24:31.000+0000
   */
  updateTime?: string;
  /**
   * @remarks
   * The version lifecycle.
   * 
   * @example
   * STABLE
   */
  versionLifeCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      k8sVersion: 'K8sVersion',
      namespaceInfos: 'NamespaceInfos',
      namespaces: 'Namespaces',
      pilotStartTime: 'PilotStartTime',
      pilotVersion: 'PilotVersion',
      region: 'Region',
      updateTime: 'UpdateTime',
      versionLifeCycle: 'VersionLifeCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      k8sVersion: 'string',
      namespaceInfos: 'string',
      namespaces: { 'type': 'array', 'itemType': GetGovernanceKubernetesClusterResponseBodyDataNamespaces },
      pilotStartTime: 'string',
      pilotVersion: 'string',
      region: 'string',
      updateTime: 'string',
      versionLifeCycle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: GetGovernanceKubernetesClusterResponseBodyData;
  /**
   * @remarks
   * The information that is returned.
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
   * 5B170A0D-2C5D-4CF8-B808-03966B86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGovernanceKubernetesClusterResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

