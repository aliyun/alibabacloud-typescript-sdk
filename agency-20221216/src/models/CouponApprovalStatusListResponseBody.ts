// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CouponApprovalStatusListResponseBodyData extends $dara.Model {
  /**
   * @example
   * test@test.aliyunid.com
   */
  issuerAccount?: string;
  /**
   * @example
   * 5432738203821334
   */
  issuerUid?: string;
  note?: string;
  /**
   * @example
   * S00000101-100040
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * 2
   */
  templateStatus?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: CouponApprovalStatusListResponseBodyData[];
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
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

