// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CouponApprovalStatusListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The issuing account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  issuerAccount?: string;
  /**
   * @remarks
   * The UID of the issuing account.
   * 
   * @example
   * 5432738203821334
   */
  issuerUid?: string;
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * Approved
   */
  note?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * S00000101-100040
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the coupon template.
   * 
   * @example
   * Template name
   */
  templateName?: string;
  /**
   * @remarks
   * The status of the coupon template. Valid values:
   * - **1**: application revoked
   * - **2**: under review
   * - **3**: review rejected
   * - **4**: review approved
   * - **5**: review approved but issuance failed
   * - **6**: automatically approved
   * - **7**: automatically approved but issuance failed
   * 
   * @example
   * 2
   */
  templateStatus?: number;
  /**
   * @remarks
   * The application time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-02-02 09:46:59
   */
  timeOfRequest?: string;
  static names(): { [key: string]: string } {
    return {
      issuerAccount: 'IssuerAccount',
      issuerUid: 'IssuerUid',
      note: 'Note',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      timeOfRequest: 'TimeOfRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuerAccount: 'string',
      issuerUid: 'string',
      note: 'string',
      templateId: 'string',
      templateName: 'string',
      templateStatus: 'number',
      timeOfRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CouponApprovalStatusListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CouponApprovalStatusListResponseBodyData[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CouponApprovalStatusListResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

