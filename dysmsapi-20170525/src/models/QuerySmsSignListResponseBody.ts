// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignListResponseBodySmsSignListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the signature was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-08 19:02:13
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the signature was rejected.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks about the rejection.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsSignListResponseBodySmsSignList extends $dara.Model {
  appIcpRecordId?: number;
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
  trademarkId?: number;
  authorizationLetterAuditPass?: boolean;
  static names(): { [key: string]: string } {
    return {
      appIcpRecordId: 'AppIcpRecordId',
      auditStatus: 'AuditStatus',
      authorizationLetterId: 'AuthorizationLetterId',
      businessType: 'BusinessType',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      reason: 'Reason',
      signName: 'SignName',
      trademarkId: 'TrademarkId',
      authorizationLetterAuditPass: 'authorizationLetterAuditPass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordId: 'number',
      auditStatus: 'string',
      authorizationLetterId: 'number',
      businessType: 'string',
      createDate: 'string',
      orderId: 'string',
      reason: QuerySmsSignListResponseBodySmsSignListReason,
      signName: 'string',
      trademarkId: 'number',
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

export class QuerySmsSignListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The number of signatures per page. Valid values: **1 to 50**.
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
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried message signatures.
   */
  smsSignList?: QuerySmsSignListResponseBodySmsSignList[];
  /**
   * @remarks
   * The total number of signatures.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsSignList: 'SmsSignList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      smsSignList: { 'type': 'array', 'itemType': QuerySmsSignListResponseBodySmsSignList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smsSignList)) {
      $dara.Model.validateArray(this.smsSignList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

