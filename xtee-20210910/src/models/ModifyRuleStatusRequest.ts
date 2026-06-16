// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the user who initiated the approval.
   * 
   * @example
   * 1519714049632764
   */
  applyUserId?: string;
  /**
   * @remarks
   * The name of the user who initiated the approval.
   * 
   * @example
   * root
   */
  applyUserName?: string;
  /**
   * @remarks
   * The remarks for the approval request.
   * 
   * @example
   * 申请发布上线
   */
  auditRemark?: string;
  /**
   * @remarks
   * The UID of the approver.
   * 
   * @example
   * 1519714049632764
   */
  auditUserId?: string;
  /**
   * @remarks
   * The name of the approver.
   * 
   * @example
   * root
   */
  auditUserName?: string;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 6843
   */
  consoleRuleId?: number;
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
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The approval status.
   * 
   * @example
   * DRAFT_TO_RUNNING
   */
  ruleAuditType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      applyUserId: 'applyUserId',
      applyUserName: 'applyUserName',
      auditRemark: 'auditRemark',
      auditUserId: 'auditUserId',
      auditUserName: 'auditUserName',
      consoleRuleId: 'consoleRuleId',
      eventType: 'eventType',
      regId: 'regId',
      ruleAuditType: 'ruleAuditType',
      ruleId: 'ruleId',
      ruleVersionId: 'ruleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      applyUserId: 'string',
      applyUserName: 'string',
      auditRemark: 'string',
      auditUserId: 'string',
      auditUserName: 'string',
      consoleRuleId: 'number',
      eventType: 'string',
      regId: 'string',
      ruleAuditType: 'string',
      ruleId: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

