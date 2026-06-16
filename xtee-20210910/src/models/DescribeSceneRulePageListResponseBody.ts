// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneRulePageListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * The account ID of the applicant.
   * 
   * @example
   * 1234567890999
   */
  applyUserId?: string;
  /**
   * @remarks
   * The account name of the applicant.
   * 
   * @example
   * 张三
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
   * The ID of the final approver.
   * 
   * @example
   * 1234567890
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * The account name of the approver.
   * 
   * @example
   * 王五
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * The remark for the approval request.
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
   * The account IDs of the designated reviewers. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 123
   */
  auditUserId?: string;
  /**
   * @remarks
   * The account names of the designated reviewers. Multiple names are separated by commas (,).
   * 
   * @example
   * 李四
   */
  auditUserName?: string;
  /**
   * @remarks
   * The creation time in UTC.
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
   * The information about other associated persons in JSON format.
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
   * t
   */
  relationName?: string;
  /**
   * @remarks
   * The approval type. For example, rule indicates a policy approval.
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

export class DescribeSceneRulePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The service authorization type.
   * 
   * @example
   * admin
   */
  authType?: string;
  /**
   * @remarks
   * The audit object.
   */
  consoleAudit?: DescribeSceneRulePageListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
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
   * The event type. Valid values:
   * - BYPASS: bypass event.
   * - SHUNT: shunt event.
   * - MAIN: main event.
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
   * The primary key ID of the policy.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The main policy ID.
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
   * CUSTMER
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 4730
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
   * The rule type.
   * 
   * @example
   * DSL
   */
  ruleType?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
   * 
   * @example
   * 3823
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 6
   */
  templateId?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0
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
      consoleAudit: DescribeSceneRulePageListResponseBodyResultObjectConsoleAudit,
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
      externalRuleName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
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

export class DescribeSceneRulePageListResponseBody extends $dara.Model {
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
   * The number of entries per page. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. Each request has a unique ID for troubleshooting purposes.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
   */
  resultObject?: DescribeSceneRulePageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 9
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
      resultObject: { 'type': 'array', 'itemType': DescribeSceneRulePageListResponseBodyResultObject },
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

