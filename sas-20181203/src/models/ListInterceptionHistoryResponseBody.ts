// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionHistoryResponseBodyInterceptionHistoryList extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c556c8133b5ad4378b7fc533ddbda****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * opa-terway-nonet****
   */
  clusterName?: string;
  /**
   * @remarks
   * The name of the destination application.
   * 
   * @example
   * sas-web****
   */
  dstAppName?: string;
  /**
   * @remarks
   * The destination namespace.
   * 
   * @example
   * service****
   */
  dstNamespace?: string;
  /**
   * @remarks
   * The destination port range configured for the defense rule.
   * 
   * @example
   * 33
   */
  dstPort?: number;
  /**
   * @remarks
   * The name of the destination network object.
   * 
   * @example
   * sas-web****
   */
  dstRuleTargetName?: string;
  /**
   * @remarks
   * The timestamp when the alert was first generated on the current day.
   * 
   * @example
   * 1639718858000
   */
  firstTime?: number;
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 1126
   */
  id?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Abnormal access
   */
  interceptionName?: number;
  /**
   * @remarks
   * The handling type. Valid values:
   * 
   * *   **0**: monitor
   * *   **1**: intercept
   * *   **2**: generate alert
   * *   **3**: allow
   * 
   * @example
   * 0
   */
  interceptionType?: number;
  /**
   * @remarks
   * The timestamp when the alert was last generated on the current day.
   * 
   * @example
   * 1639731078000
   */
  lastTime?: number;
  /**
   * @remarks
   * The name of the destination application.
   * 
   * @example
   * sas-service****
   */
  realDstAppName?: string;
  /**
   * @remarks
   * The name of the destination image.
   * 
   * @example
   * sas-servi****
   */
  realDstImageName?: string;
  /**
   * @remarks
   * The destination namespace.
   * 
   * @example
   * service****
   */
  realDstNamespace?: string;
  /**
   * @remarks
   * The destination pod.
   * 
   * @example
   * sas-web-84cc7dd9****
   */
  realDstPodName?: string;
  /**
   * @remarks
   * The handling type of actual hits. Valid values:
   * 
   * *   **0**: monitor
   * *   **1**: intercept
   * *   **2**: generate alert
   * *   **3**: allow
   * 
   * @example
   * 0
   */
  realInterceptionType?: number;
  /**
   * @remarks
   * The name of the source application.
   * 
   * @example
   * sas-service****
   */
  realSrcAppName?: string;
  /**
   * @remarks
   * The name of the source image.
   * 
   * @example
   * sas-servi****
   */
  realSrcImageName?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * service****
   */
  realSrcNamespace?: string;
  /**
   * @remarks
   * The source pod.
   * 
   * @example
   * sas-service-757b9d****
   */
  realSrcPodName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **-1**: unknown
   * *   **0**: none
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The ID of the defense rule based on which the alert was generated.
   * 
   * @example
   * 136
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * @example
   * all****
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the source application.
   * 
   * @example
   * sas-web****
   */
  srcAppName?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * service****
   */
  srcNamespace?: string;
  /**
   * @remarks
   * The name of the source network object.
   * 
   * @example
   * sas-web****
   */
  srcRuleTargetName?: string;
  /**
   * @remarks
   * The handling status. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: handled
   * *   **2**: manually handled
   * *   **3**: ignored
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The number of attempts.
   * 
   * @example
   * 34
   */
  tryCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      dstAppName: 'DstAppName',
      dstNamespace: 'DstNamespace',
      dstPort: 'DstPort',
      dstRuleTargetName: 'DstRuleTargetName',
      firstTime: 'FirstTime',
      id: 'Id',
      interceptionName: 'InterceptionName',
      interceptionType: 'InterceptionType',
      lastTime: 'LastTime',
      realDstAppName: 'RealDstAppName',
      realDstImageName: 'RealDstImageName',
      realDstNamespace: 'RealDstNamespace',
      realDstPodName: 'RealDstPodName',
      realInterceptionType: 'RealInterceptionType',
      realSrcAppName: 'RealSrcAppName',
      realSrcImageName: 'RealSrcImageName',
      realSrcNamespace: 'RealSrcNamespace',
      realSrcPodName: 'RealSrcPodName',
      riskLevel: 'RiskLevel',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      srcAppName: 'SrcAppName',
      srcNamespace: 'SrcNamespace',
      srcRuleTargetName: 'SrcRuleTargetName',
      status: 'Status',
      tryCount: 'TryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      dstAppName: 'string',
      dstNamespace: 'string',
      dstPort: 'number',
      dstRuleTargetName: 'string',
      firstTime: 'number',
      id: 'number',
      interceptionName: 'number',
      interceptionType: 'number',
      lastTime: 'number',
      realDstAppName: 'string',
      realDstImageName: 'string',
      realDstNamespace: 'string',
      realDstPodName: 'string',
      realInterceptionType: 'number',
      realSrcAppName: 'string',
      realSrcImageName: 'string',
      realSrcNamespace: 'string',
      realSrcPodName: 'string',
      riskLevel: 'number',
      ruleId: 'number',
      ruleName: 'string',
      srcAppName: 'string',
      srcNamespace: 'string',
      srcRuleTargetName: 'string',
      status: 'number',
      tryCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterceptionHistoryResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
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

export class ListInterceptionHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the alerts generated by defense rules.
   */
  interceptionHistoryList?: ListInterceptionHistoryResponseBodyInterceptionHistoryList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListInterceptionHistoryResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D81DD78E-E006-5C65-A171-C8CB0904****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      interceptionHistoryList: 'InterceptionHistoryList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interceptionHistoryList: { 'type': 'array', 'itemType': ListInterceptionHistoryResponseBodyInterceptionHistoryList },
      pageInfo: ListInterceptionHistoryResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interceptionHistoryList)) {
      $dara.Model.validateArray(this.interceptionHistoryList);
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

