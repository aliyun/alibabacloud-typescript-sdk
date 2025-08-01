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

export class QueryGovernanceKubernetesClusterResponseBodyData extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the data.
   */
  result?: QueryGovernanceKubernetesClusterResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 3
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': QueryGovernanceKubernetesClusterResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryGovernanceKubernetesClusterResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * DE34D413-2B79-5E77-9696-36D875E822AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
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
      data: QueryGovernanceKubernetesClusterResponseBodyData,
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

