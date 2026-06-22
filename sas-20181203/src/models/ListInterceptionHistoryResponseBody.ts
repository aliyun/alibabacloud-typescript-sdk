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
   * The cluster name.
   * 
   * @example
   * opa-terway-nonet****
   */
  clusterName?: string;
  /**
   * @remarks
   * The destination application name configured in the rule.
   * 
   * @example
   * sas-web****
   */
  dstAppName?: string;
  /**
   * @remarks
   * The destination namespace configured in the rule.
   * 
   * @example
   * service****
   */
  dstNamespace?: string;
  /**
   * @remarks
   * The destination port number configured in the rule.
   * 
   * @example
   * 33
   */
  dstPort?: number;
  /**
   * @remarks
   * The destination target object name of the rule.
   * 
   * @example
   * sas-web****
   */
  dstRuleTargetName?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence on the current day.
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
   * The alert name.
   * 
   * @example
   * 异常访问。
   */
  interceptionName?: number;
  /**
   * @remarks
   * The processing type. Valid values:
   * 
   * - **0**: observe
   * - **1**: block
   * - **2**: alert
   * - **3**: allow.
   * 
   * @example
   * 0
   */
  interceptionType?: number;
  /**
   * @remarks
   * The timestamp of the latest occurrence on the current day.
   * 
   * @example
   * 1639731078000
   */
  lastTime?: number;
  /**
   * @remarks
   * The destination application name.
   * 
   * @example
   * sas-service****
   */
  realDstAppName?: string;
  /**
   * @remarks
   * The destination image name.
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
   * The actual processing type that was matched. Valid values:
   * 
   * - **0**: observe
   * - **1**: block
   * - **2**: alert
   * - **3**: allow.
   * 
   * @example
   * 0
   */
  realInterceptionType?: number;
  /**
   * @remarks
   * The source application name.
   * 
   * @example
   * sas-service****
   */
  realSrcAppName?: string;
  /**
   * @remarks
   * The source image name.
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
   * - **-1**: unknown
   * - **0**: none
   * - **1**: low
   * - **2**: medium
   * - **3**: high.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The ID of the corresponding rule.
   * 
   * @example
   * 136
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * all****
   */
  ruleName?: string;
  /**
   * @remarks
   * The source application name configured in the rule.
   * 
   * @example
   * sas-web****
   */
  srcAppName?: string;
  /**
   * @remarks
   * The namespace of the source instance.
   * 
   * @example
   * service****
   */
  srcNamespace?: string;
  /**
   * @remarks
   * The source target object name of the rule.
   * 
   * @example
   * sas-web****
   */
  srcRuleTargetName?: string;
  /**
   * @remarks
   * The processing status. Valid values:
   * 
   * - **0**: unprocessed
   * - **1**: processed
   * - **2**: manually processed
   * - **3**: ignored.
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
   * The number of records on the current page in a paged query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records returned.
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
   * The container firewall interception records.
   */
  interceptionHistoryList?: ListInterceptionHistoryResponseBodyInterceptionHistoryList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListInterceptionHistoryResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
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

