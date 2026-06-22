// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInterceptionConfigResponseBodyClusterConfigList extends $dara.Model {
  /**
   * @remarks
   * The container firewall status of the cluster. Valid values:
   * - **-1**: unknown
   * - **0**: abnormal
   * - **1**: normal
   * - **2**: normal pending confirmation.
   * 
   * @example
   * 0
   */
  clusterCNNFStatus?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c9051d30d8a044b4d99e1cb5d25ac****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * container-opa-kill-02
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - **ManagedKubernetes**: managed Kubernetes
   * - **NotManagedKubernetes**: non-managed Kubernetes
   * - **PrivateKubernetes**: private cluster
   * - **kubernetes**: dedicated Kubernetes
   * - **ask**: dedicated ASK.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The status of the rule interception switch. Valid values:
   * - **0**: disabled
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  interceptionSwitch?: number;
  /**
   * @remarks
   * The number of active rules.
   * 
   * @example
   * 12
   */
  openRuleCount?: number;
  /**
   * @remarks
   * Indicates whether the container firewall is supported.
   * 
   * @example
   * false
   */
  supportCNNF?: boolean;
  /**
   * @remarks
   * The total number of rules.
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
   * The number of cluster interception rules on the current page.
   * 
   * @example
   * 11
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currrentPage?: number;
  /**
   * @remarks
   * The number of cluster interception rules per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of cluster interception rules.
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
   * The list of cluster configuration information.
   */
  clusterConfigList?: ListClusterInterceptionConfigResponseBodyClusterConfigList[];
  /**
   * @remarks
   * The paging information for a paged query.
   */
  pageInfo?: ListClusterInterceptionConfigResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

