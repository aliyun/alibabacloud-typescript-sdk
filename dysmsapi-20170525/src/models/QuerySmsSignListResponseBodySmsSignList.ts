// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignListResponseBodySmsSignListReason } from "./QuerySmsSignListResponseBodySmsSignListReason";


export class QuerySmsSignListResponseBodySmsSignList extends $dara.Model {
  /**
   * @remarks
   * The approval status of the signature. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The signature is pending approval.
   * *   **AUDIT_STATE_PASS**: The signature is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The signature is rejected. You can view the reason in the Reason response parameter.
   * *   **AUDIT_STATE_CANCEL**: The approval is canceled.
   * 
   * @example
   * AUDIT_STATE_NOT_PASS
   */
  auditStatus?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * The type of the signature scenario. The return value ends with "type". Valid values:
   * 
   * *   Verification code type
   * *   General-purpose type
   * 
   * @example
   * Verification code type
   */
  businessType?: string;
  /**
   * @remarks
   * The time when the signature was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 236****5
   */
  orderId?: string;
  /**
   * @remarks
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the signature is rejected is returned.
   */
  reason?: QuerySmsSignListResponseBodySmsSignListReason;
  /**
   * @remarks
   * The name of the signature.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  authorizationLetterAuditPass?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authorizationLetterId: 'AuthorizationLetterId',
      businessType: 'BusinessType',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      reason: 'Reason',
      signName: 'SignName',
      authorizationLetterAuditPass: 'authorizationLetterAuditPass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      authorizationLetterId: 'number',
      businessType: 'string',
      createDate: 'string',
      orderId: 'string',
      reason: QuerySmsSignListResponseBodySmsSignListReason,
      signName: 'string',
      authorizationLetterAuditPass: 'boolean',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

