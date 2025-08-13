// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * UID of the applicant.
   * 
   * @example
   * 1519714049632764
   */
  applyUserId?: string;
  /**
   * @remarks
   * Name of the applicant.
   * 
   * @example
   * root
   */
  applyUserName?: string;
  /**
   * @remarks
   * Approval remarks.
   * 
   * @example
   * 申请发布上线
   */
  auditRemark?: string;
  /**
   * @remarks
   * UID of the auditor.
   * 
   * @example
   * 1519714049632764
   */
  auditUserId?: string;
  /**
   * @remarks
   * Name of the auditor.
   * 
   * @example
   * root
   */
  auditUserName?: string;
  /**
   * @remarks
   * Primary key ID of the policy.
   * 
   * @example
   * 6843
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Audit status.
   * 
   * @example
   * DRAFT_TO_RUNNING
   */
  ruleAuditType?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * Primary key ID of the policy version.
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

