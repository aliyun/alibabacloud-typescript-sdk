// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulePageListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * UID of the user who passed the audit
   * 
   * @example
   * 用户uid
   */
  applyUserId?: string;
  /**
   * @remarks
   * Name of the user who passed the audit
   * 
   * @example
   * root
   */
  applyUserName?: string;
  /**
   * @remarks
   * Approval comments
   * 
   * @example
   * 同意
   */
  auditMsg?: string;
  /**
   * @remarks
   * UID of the final auditor
   * 
   * @example
   * 1728
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * Name of the final auditor
   * 
   * @example
   * root
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * Remarks by the approver.
   * 
   * @example
   * 备注
   */
  auditRemark?: string;
  /**
   * @remarks
   * Application audit status
   * 
   * @example
   * AGREE
   */
  auditStatus?: string;
  /**
   * @remarks
   * Approval time
   * 
   * @example
   * 1545726028000
   */
  auditTime?: number;
  /**
   * @remarks
   * UID of the auditor
   * 
   * @example
   * 1234xxxx
   */
  auditUserId?: string;
  /**
   * @remarks
   * Name of the auditor
   * 
   * @example
   * root
   */
  auditUserName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1545726028000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 1728
   */
  id?: number;
  /**
   * @remarks
   * Information of other related parties (in JSON format)
   * 
   * @example
   * {}
   */
  relationExt?: string;
  /**
   * @remarks
   * ID of the related transaction for the approval
   * 
   * @example
   * 123
   */
  relationId?: number;
  /**
   * @remarks
   * Name of the related transaction for the approval (can be null)
   * 
   * @example
   * 策略1
   */
  relationName?: string;
  /**
   * @remarks
   * Type of the approval (e.g., `rule` represents the approval of a rule)
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
   * Service authorization type
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * Audit object
   */
  consoleAudit?: DescribeRulePageListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_arcehq4370
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Event type
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * External name of the rule
   * 
   * @example
   * 策略1
   */
  externalRuleName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Whether there is a new version
   * 
   * @example
   * true
   */
  hasNewVersion?: boolean;
  /**
   * @remarks
   * Primary key ID of the policy.
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * Main rule ID
   * 
   * @example
   * 4399
   */
  mainRuleId?: string;
  /**
   * @remarks
   * Policy priority, the higher the number, the higher the priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Rule type
   * 
   * @example
   * NORMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy description.
   * 
   * @example
   * 描述信息
   */
  ruleMemo?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Rule type
   * 
   * @example
   * NORMAL
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the rule version.
   * 
   * @example
   * 11300
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * register
   */
  templateId?: number;
  /**
   * @remarks
   * Version number.
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeRulePageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 28
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
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

