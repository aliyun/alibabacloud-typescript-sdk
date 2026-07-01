// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignListResponseBodySmsSignListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the signature was rejected. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 13:35:10
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason for the rejection.
   * 
   * @example
   * 文件不能证明信息真实性，请重新上传。
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks for the rejection.
   * 
   * @example
   * 文件不能证明信息真实性，请重新上传。
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
  /**
   * @remarks
   * The APP-ICP filing entity ID.
   * 
   * @example
   * 1000001***123
   */
  appIcpRecordId?: number;
  /**
   * @remarks
   * The audit status of the signature. Valid values:
   * 
   * - **AUDIT_STATE_INIT**: under review.
   * 
   * - **AUDIT_STATE_PASS**: approved.
   * 
   * - **AUDIT_STATE_NOT_PASS**: rejected. You can view the rejection reason in the Reason response parameter.
   * 
   * - **AUDIT_STATE_CANCEL**: review canceled.
   * 
   * @example
   * AUDIT_STATE_NOT_PASS
   */
  auditStatus?: string;
  /**
   * @remarks
   * The ID of the letter of authorization.
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * The scenario type of the signature. Valid values:
   * 
   * - Verification code.
   * 
   * - General-purpose.
   * 
   * @example
   * 验证码类型
   */
  businessType?: string;
  /**
   * @remarks
   * The time when the SMS signature was created. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 11:42:17
   */
  createDate?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is used by auditors when querying the audit. You must provide this order ID if you need to expedite the audit.
   * 
   * @example
   * 2005098****
   */
  orderId?: string;
  /**
   * @remarks
   * The audit remarks.
   * 
   * - If the audit status is **approved** or **under review**, the Reason parameter is displayed as "No audit remarks".
   * 
   * - If the audit status is **rejected**, the Reason parameter displays the specific reason for the rejection.
   */
  reason?: QuerySmsSignListResponseBodySmsSignListReason;
  /**
   * @remarks
   * The signature name.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The trademark entity ID.
   * 
   * @example
   * 1000009081***
   */
  trademarkId?: number;
  /**
   * @remarks
   * The audit status of the letter of authorization. Valid values:
   * - true: approved.
   * - false: not approved (includes all statuses other than approved).
   * 
   * @example
   * true
   */
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
   * The HTTP status code. Valid values:
   *  
   * - OK: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
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
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The number of signatures to return on each page. Default value: **10**. Valid values: **1 to 50**.
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned results.
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

