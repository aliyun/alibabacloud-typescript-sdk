// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulePageListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * The UID of the user who approved the request.
   * 
   * @example
   * 用户uid
   */
  applyUserId?: string;
  /**
   * @remarks
   * The name of the user who approved the request.
   * 
   * @example
   * root
   */
  applyUserName?: string;
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * 同意
   */
  auditMsg?: string;
  /**
   * @remarks
   * The UID of the final reviewer.
   * 
   * @example
   * 1728
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * The name of the final reviewer.
   * 
   * @example
   * root
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * The remark from the reviewer.
   * 
   * @example
   * 备注
   */
  auditRemark?: string;
  /**
   * @remarks
   * The approval status.
   * 
   * @example
   * AGREE
   */
  auditStatus?: string;
  /**
   * @remarks
   * The approval time.
   * 
   * @example
   * 1545726028000
   */
  auditTime?: number;
  /**
   * @remarks
   * The UID of the reviewer.
   * 
   * @example
   * 1234xxxx
   */
  auditUserId?: string;
  /**
   * @remarks
   * The name of the reviewer.
   * 
   * @example
   * root
   */
  auditUserName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1545726028000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1728
   */
  id?: number;
  /**
   * @remarks
   * The information about other associated users in JSON format.
   * 
   * @example
   * {}
   */
  relationExt?: string;
  /**
   * @remarks
   * The transaction ID associated with the approval.
   * 
   * @example
   * 123
   */
  relationId?: number;
  /**
   * @remarks
   * The transaction name associated with the approval. This parameter can be empty.
   * 
   * @example
   * 策略1
   */
  relationName?: string;
  /**
   * @remarks
   * The type of the approval. For example, rule indicates a policy approval.
   * 
   * @example
   * RULE
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      applyUserId: 'applyUserId',
      applyUserName: 'applyUserName',
      auditMsg: 'auditMsg',
      auditRealUserId: 'auditRealUserId',
      auditRealUserName: 'auditRealUserName',
      auditRemark: 'auditRemark',
      auditStatus: 'auditStatus',
      auditTime: 'auditTime',
      auditUserId: 'auditUserId',
      auditUserName: 'auditUserName',
      gmtCreate: 'gmtCreate',
      id: 'id',
      relationExt: 'relationExt',
      relationId: 'relationId',
      relationName: 'relationName',
      relationType: 'relationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUserId: 'string',
      applyUserName: 'string',
      auditMsg: 'string',
      auditRealUserId: 'string',
      auditRealUserName: 'string',
      auditRemark: 'string',
      auditStatus: 'string',
      auditTime: 'number',
      auditUserId: 'string',
      auditUserName: 'string',
      gmtCreate: 'number',
      id: 'number',
      relationExt: 'string',
      relationId: 'number',
      relationName: 'string',
      relationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The service authorization type.
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * The approval object.
   */
  consoleAudit?: DescribeRulePageListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_arcehq4370
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * The customer-facing policy name.
   * 
   * @example
   * 策略1
   */
  externalRuleName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether a new version is available.
   * 
   * @example
   * true
   */
  hasNewVersion?: boolean;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * The ID of the main policy.
   * 
   * @example
   * 4399
   */
  mainRuleId?: string;
  /**
   * @remarks
   * The policy priority. A larger value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * NORMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 描述信息
   */
  ruleMemo?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * The policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * NORMAL
   */
  ruleType?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
   * 
   * @example
   * 11300
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * register
   */
  templateId?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      consoleAudit: 'consoleAudit',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventType: 'eventType',
      externalRuleName: 'externalRuleName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasNewVersion: 'hasNewVersion',
      id: 'id',
      mainRuleId: 'mainRuleId',
      priority: 'priority',
      ruleAuthType: 'ruleAuthType',
      ruleId: 'ruleId',
      ruleMemo: 'ruleMemo',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      ruleVersionId: 'ruleVersionId',
      templateId: 'templateId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      consoleAudit: DescribeRulePageListResponseBodyResultObjectConsoleAudit,
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
      externalRuleName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hasNewVersion: 'boolean',
      id: 'number',
      mainRuleId: 'string',
      priority: 'number',
      ruleAuthType: 'string',
      ruleId: 'string',
      ruleMemo: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
      ruleVersionId: 'number',
      templateId: 'number',
      version: 'number',
    };
  }

  validate() {
    if(this.consoleAudit && typeof (this.consoleAudit as any).validate === 'function') {
      (this.consoleAudit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulePageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeRulePageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 28
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeRulePageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

