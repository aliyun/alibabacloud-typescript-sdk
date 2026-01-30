// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTier2CouponApprovalResponseBodyData extends $dara.Model {
  /**
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @example
   * 2026-01-21 11:24
   */
  applicationTime?: string;
  /**
   * @example
   * 1
   */
  approvalStatus?: string;
  /**
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
   * @example
   * 5248516956402795
   */
  t2PartnerUid?: number;
  /**
   * @example
   * 200
   */
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSheetId: 'ApplicationSheetId',
      applicationTime: 'ApplicationTime',
      approvalStatus: 'ApprovalStatus',
      t2PartnerName: 'T2PartnerName',
      t2PartnerUid: 'T2PartnerUid',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSheetId: 'string',
      applicationTime: 'string',
      approvalStatus: 'string',
      t2PartnerName: 'string',
      t2PartnerUid: 'number',
      totalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTier2CouponApprovalResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListTier2CouponApprovalResponseBodyData[];
  /**
   * @example
   * SUCCESS
   */
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
      data: { 'type': 'array', 'itemType': ListTier2CouponApprovalResponseBodyData },
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

