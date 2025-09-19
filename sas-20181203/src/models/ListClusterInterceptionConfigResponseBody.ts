// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInterceptionConfigResponseBodyClusterConfigList extends $dara.Model {
  /**
   * @remarks
   * The status of the container firewall feature. Valid values:
   * 
   * *   **-1**: unknown
   * *   **0**: abnormal
   * *   **1**: normal
   * *   **2**: normal to be confirmed
   * 
   * @example
   * 0
   */
  clusterCNNFStatus?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c9051d30d8a044b4d99e1cb5d25ac****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * container-opa-kill-02
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
   * *   **ask**: dedicated serverless Kubernetes (ASK) cluster
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The status of the defense rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  interceptionSwitch?: number;
  /**
   * @remarks
   * The number of defense rules that are in effect.
   * 
   * @example
   * 12
   */
  openRuleCount?: number;
  /**
   * @remarks
   * Indicates whether the container firewall feature is supported.
   * 
   * @example
   * false
   */
  supportCNNF?: boolean;
  /**
   * @remarks
   * The total number of defense rules.
   * 
   * @example
   * 123
   */
  totalRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterCNNFStatus: 'ClusterCNNFStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      interceptionSwitch: 'InterceptionSwitch',
      openRuleCount: 'OpenRuleCount',
      supportCNNF: 'SupportCNNF',
      totalRuleCount: 'TotalRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCNNFStatus: 'number',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      interceptionSwitch: 'number',
      openRuleCount: 'number',
      supportCNNF: 'boolean',
      totalRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInterceptionConfigResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 11
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currrentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currrentPage: 'CurrrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currrentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInterceptionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the cluster.
   */
  clusterConfigList?: ListClusterInterceptionConfigResponseBodyClusterConfigList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListClusterInterceptionConfigResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 49FDE92F-A0B8-56CC-B7A8-23B17646****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfigList: 'ClusterConfigList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfigList: { 'type': 'array', 'itemType': ListClusterInterceptionConfigResponseBodyClusterConfigList },
      pageInfo: ListClusterInterceptionConfigResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterConfigList)) {
      $dara.Model.validateArray(this.clusterConfigList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

