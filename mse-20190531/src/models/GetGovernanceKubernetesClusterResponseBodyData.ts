// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGovernanceKubernetesClusterResponseBodyDataNamespaces } from "./GetGovernanceKubernetesClusterResponseBodyDataNamespaces";


export class GetGovernanceKubernetesClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cd23228b3c80c4d4f9ad7af1d87cc30d5
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * myCluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The version of Kubernetes.
   * 
   * @example
   * 1.20.11-aliyun.1
   */
  k8sVersion?: string;
  /**
   * @remarks
   * The information of the namespace.
   * 
   * @example
   * [{\\"Name\\":\\"ack-onepilot\\",\\"Tags\\":null},{\\"Name\\":\\"default\\",\\"Tags\\":{\\"mse-enable\\":\\"enabled\\"}},{\\"Name\\":\\"kube-node-lease\\",\\"Tags\\":null},{\\"Name\\":\\"kube-public\\",\\"Tags\\":null},{\\"Name\\":\\"kube-system\\",\\"Tags\\":null}]
   */
  namespaceInfos?: string;
  /**
   * @remarks
   * The queried namespaces.
   */
  namespaces?: GetGovernanceKubernetesClusterResponseBodyDataNamespaces[];
  /**
   * @remarks
   * The time when the pilot component was started.
   * 
   * @example
   * 2022-01-11T11:50:38.000+0000
   */
  pilotStartTime?: string;
  pilotVersion?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by MSE.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time of the last modification.
   * 
   * @example
   * 2022-01-12T05:24:31.000+0000
   */
  updateTime?: string;
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

