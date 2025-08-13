// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneRulePageListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * Initiator account ID
   * 
   * @example
   * 1234567890999
   */
  applyUserId?: string;
  /**
   * @remarks
   * Initiator account name
   * 
   * @example
   * 张三
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
   * Final approver ID
   * 
   * @example
   * 1234567890
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * Approver account name
   * 
   * @example
   * 王五
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * Approval application remarks
   * 
   * @example
   * 备注
   */
  auditRemark?: string;
  /**
   * @remarks
   * Status
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
   * Designated auditor account IDs (comma-separated for multiple)
   * 
   * @example
   * 123
   */
  auditUserId?: string;
  /**
   * @remarks
   * Designated auditor account names (comma-separated for multiple)
   * 
   * @example
   * 李四
   */
  auditUserName?: string;
  /**
   * @remarks
   * Creation time in UTC
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
   * Information about other related parties (in JSON format)
   * 
   * @example
   * {}
   */
  relationExt?: string;
  /**
   * @remarks
   * 审批关联的事务ID
   * 
   * @example
   * 123
   */
  relationId?: number;
  /**
   * @remarks
   * The name of the associated transaction (can be null)
   * 
   * @example
   * t
   */
  relationName?: string;
  /**
   * @remarks
   * 审批的类型（如rule代表策略的审批）
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
   * Service authorization type
   * 
   * @example
   * admin
   */
  authType?: string;
  /**
   * @remarks
   * Audit object
   */
  consoleAudit?: DescribeSceneRulePageListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
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
   * External rule name
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
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID of the rule
   * 
   * @example
   * 497
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
   * Strategy priority, where a higher number indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Rule Auth type
   * 
   * @example
   * CUSTMER
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Strategy ID
   * 
   * @example
   * 4730
   */
  ruleId?: string;
  /**
   * @remarks
   * Strategy description
   * 
   * @example
   * 描述信息
   */
  ruleMemo?: string;
  /**
   * @remarks
   * Strategy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Strategy status
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
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the rule version
   * 
   * @example
   * 3823
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 6
   */
  templateId?: number;
  /**
   * @remarks
   * Version number
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned results. Default value: 20, minimum value: 1, maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID, which is unique for each request, facilitating subsequent troubleshooting
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeSceneRulePageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
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

