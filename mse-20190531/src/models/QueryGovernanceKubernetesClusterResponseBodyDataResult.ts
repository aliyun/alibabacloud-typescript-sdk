// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGovernanceKubernetesClusterResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * abcdef123456789
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * example-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.22
   */
  k8sVersion?: string;
  /**
   * @remarks
   * The information about the namespace.
   * 
   * @example
   * [{"Name":"ack-onepilot","Tags":{"name":"ack-onepilot"}}]
   */
  namespaceInfos?: string;
  /**
   * @remarks
   * The time when the pilot component was started.
   * 
   * @example
   * 2022-05-17T05:39:43.000+0000
   */
  pilotStartTime?: string;
  pilotVersion?: string;
  /**
   * @remarks
   * The region where the cluster resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  versionLifeCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      k8sVersion: 'K8sVersion',
      namespaceInfos: 'NamespaceInfos',
      pilotStartTime: 'PilotStartTime',
      pilotVersion: 'PilotVersion',
      region: 'Region',
      versionLifeCycle: 'VersionLifeCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      k8sVersion: 'string',
      namespaceInfos: 'string',
      pilotStartTime: 'string',
      pilotVersion: 'string',
      region: 'string',
      versionLifeCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

