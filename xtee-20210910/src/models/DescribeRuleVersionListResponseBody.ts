// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleVersionListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * Initiator UID
   * 
   * @example
   * 1519714049632764
   */
  applyUserId?: string;
  /**
   * @remarks
   * Initiator name
   * 
   * @example
   * root
   */
  applyUserName?: string;
  /**
   * @remarks
   * Approval comment
   * 
   * @example
   * 同意
   */
  auditMsg?: string;
  /**
   * @remarks
   * Final approver UID
   * 
   * @example
   * 1519714049632764
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * Final approver name
   * 
   * @example
   * root
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * Approver\\"s remarks.
   * 
   * @example
   * 备注
   */
  auditRemark?: string;
  /**
   * @remarks
   * Approval status
   * 
   * @example
   * AGREE
   */
  auditStatus?: string;
  /**
   * @remarks
   * Approval time.
   * 
   * @example
   * 1545726028000
   */
  auditTime?: number;
  /**
   * @remarks
   * Designated approver UID
   * 
   * @example
   * 1519714049632764
   */
  auditUserId?: string;
  /**
   * @remarks
   * Designated auditor\\"s name
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
   * Information of related others (in JSON format)
   * 
   * @example
   * {}
   */
  relationExt?: string;
  /**
   * @remarks
   * ID of the associated transaction
   * 
   * @example
   * 123
   */
  relationId?: number;
  /**
   * @remarks
   * Name of the associated item
   * 
   * @example
   * 营销风险识别
   */
  relationName?: string;
  /**
   * @remarks
   * Type of approval (e.g., `rule` for policy approval)
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

export class DescribeRuleVersionListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Audit object
   */
  consoleAudit?: DescribeRuleVersionListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * Console rule ID.
   * 
   * @example
   * 6715
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Associated policy remarks
   * 
   * @example
   * 备注
   */
  consoleRuleMemo?: string;
  /**
   * @remarks
   * Associated policy name
   * 
   * @example
   * 营销风险识别
   */
  consoleRuleName?: string;
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
   * Event type
   * 
   * @example
   * MAIN
   */
  eventType?: string;
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
   * Primary key ID of the policy
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * The user who last operated.
   * 
   * @example
   * 1519714049632764
   */
  lastOperator?: string;
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
   * Policy ID
   * 
   * @example
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Rule Type
   * 
   * @example
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * Version number
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      consoleAudit: 'consoleAudit',
      consoleRuleId: 'consoleRuleId',
      consoleRuleMemo: 'consoleRuleMemo',
      consoleRuleName: 'consoleRuleName',
      eventCode: 'eventCode',
      eventType: 'eventType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      lastOperator: 'lastOperator',
      priority: 'priority',
      ruleId: 'ruleId',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleAudit: DescribeRuleVersionListResponseBodyResultObjectConsoleAudit,
      consoleRuleId: 'number',
      consoleRuleMemo: 'string',
      consoleRuleName: 'string',
      eventCode: 'string',
      eventType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      lastOperator: 'string',
      priority: 'number',
      ruleId: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
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

export class DescribeRuleVersionListResponseBody extends $dara.Model {
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
   * Page size, default value is 10
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
   * Returned object
   */
  resultObject?: DescribeRuleVersionListResponseBodyResultObject[];
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
   * Total number of pages.
   * 
   * @example
   * 7
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
      resultObject: { 'type': 'array', 'itemType': DescribeRuleVersionListResponseBodyResultObject },
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

