// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTier2CouponApprovalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application form.
   * 
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @remarks
   * The application time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-01-21 11:24
   */
  applicationTime?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * - 1: Revoked.
   * - 2: Under review.
   * - 3: Rejected.
   * - 4: Approved.
   * - 5: Approved but issuance failed.
   * - 8: Pending.
   * 
   * @example
   * 1
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The name of the secondary distributor.
   * 
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
   * @remarks
   * The UID of the secondary distributor.
   * 
   * @example
   * 5248516956402795
   */
  t2PartnerUid?: number;
  /**
   * @remarks
   * The requested amount.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListTier2CouponApprovalResponseBodyData[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The page number.
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

