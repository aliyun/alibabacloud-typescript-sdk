// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleVersionListResponseBodyResultObjectConsoleAudit extends $dara.Model {
  /**
   * @remarks
   * The UID of the applicant.
   * 
   * @example
   * 1519714049632764
   */
  applyUserId?: string;
  /**
   * @remarks
   * The name of the applicant.
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
   * The UID of the final approver.
   * 
   * @example
   * 1519714049632764
   */
  auditRealUserId?: string;
  /**
   * @remarks
   * The name of the final approver.
   * 
   * @example
   * root
   */
  auditRealUserName?: string;
  /**
   * @remarks
   * The remark of the approver.
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
   * The UID of the designated approver.
   * 
   * @example
   * 1519714049632764
   */
  auditUserId?: string;
  /**
   * @remarks
   * The name of the designated approver.
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
   * The information about other related persons in JSON format.
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
   * The name associated with the approval.
   * 
   * @example
   * 营销风险识别
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

export class DescribeRuleVersionListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The approval object.
   */
  consoleAudit?: DescribeRuleVersionListResponseBodyResultObjectConsoleAudit;
  /**
   * @remarks
   * The console rule ID.
   * 
   * @example
   * 6715
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The remark of the associated policy.
   * 
   * @example
   * 备注
   */
  consoleRuleMemo?: string;
  /**
   * @remarks
   * The Policy Name of the associated policy.
   * 
   * @example
   * 营销风险识别
   */
  consoleRuleName?: string;
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
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
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
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * The user who last performed an operation.
   * 
   * @example
   * 1519714049632764
   */
  lastOperator?: string;
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
   * The policy ID.
   * 
   * @example
   * 102224
   */
  ruleId?: string;
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
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * The version number.
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
  resultObject?: DescribeRuleVersionListResponseBodyResultObject[];
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

