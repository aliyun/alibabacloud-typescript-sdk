// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTier2CouponApprovalDetailResponseBodyDataApplicantInfo extends $dara.Model {
  /**
   * @remarks
   * The applicable products. Valid values:
   * - UNIVERSAL: All products.
   * - A specific commodity code.
   * 
   * @example
   * UNIVERSAL
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The timestamp when the application was submitted.
   * 
   * @example
   * 2026-01-21 11:24
   */
  applicationTime?: string;
  /**
   * @remarks
   * The order type for which the coupon is used. Valid values:
   * - ALL: Alibaba Cloud subscription.
   * - BILLING: Alibaba Cloud pay-as-you-go bills.
   * - ALL,BILLING: Alibaba Cloud subscription and pay-as-you-go bills.
   * 
   * @example
   * ALL,BILLING
   */
  orderType?: string;
  /**
   * @remarks
   * The name of the tier-2 distributor.
   * 
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
   * @remarks
   * The UID of the tier-2 distributor.
   * 
   * @example
   * 5248516846402795
   */
  t2PartnerUid?: number;
  /**
   * @remarks
   * The validity period, which can be a number of valid days or a valid time range.
   * 
   * @example
   * 2026-01-21 ~ 2199-12-31
   */
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicationTime: 'ApplicationTime',
      orderType: 'OrderType',
      t2PartnerName: 'T2PartnerName',
      t2PartnerUid: 'T2PartnerUid',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicationTime: 'string',
      orderType: 'string',
      t2PartnerName: 'string',
      t2PartnerUid: 'number',
      validUntil: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTier2CouponApprovalDetailResponseBodyDataCouponReceiptUidList extends $dara.Model {
  /**
   * @remarks
   * The denomination.
   * 
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
   * @remarks
   * The UID of the customer.
   * 
   * @example
   * 1703016242044705
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      nominalValue: 'NominalValue',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nominalValue: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTier2CouponApprovalDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic information of the application.
   */
  applicantInfo?: GetTier2CouponApprovalDetailResponseBodyDataApplicantInfo;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * Reason for application
   */
  applicationReason?: string;
  /**
   * @remarks
   * The ID of the application form.
   * 
   * @example
   * 0b9a079e17691387754512757e6a1b
   */
  applicationSheetId?: string;
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
   * 2
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The list of customer UIDs that receive the coupons.
   */
  couponReceiptUidList?: GetTier2CouponApprovalDetailResponseBodyDataCouponReceiptUidList[];
  /**
   * @remarks
   * The estimated remaining quota of PoC coupon benefits for new partner customers after the coupons are issued.
   * 
   * @example
   * 20.00
   */
  remainingQuota?: string;
  /**
   * @remarks
   * The requested amount.
   * 
   * @example
   * 100.00
   */
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      applicantInfo: 'ApplicantInfo',
      applicationReason: 'ApplicationReason',
      applicationSheetId: 'ApplicationSheetId',
      approvalStatus: 'ApprovalStatus',
      couponReceiptUidList: 'CouponReceiptUidList',
      remainingQuota: 'RemainingQuota',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantInfo: GetTier2CouponApprovalDetailResponseBodyDataApplicantInfo,
      applicationReason: 'string',
      applicationSheetId: 'string',
      approvalStatus: 'string',
      couponReceiptUidList: { 'type': 'array', 'itemType': GetTier2CouponApprovalDetailResponseBodyDataCouponReceiptUidList },
      remainingQuota: 'string',
      totalAmount: 'string',
    };
  }

  validate() {
    if(this.applicantInfo && typeof (this.applicantInfo as any).validate === 'function') {
      (this.applicantInfo as any).validate();
    }
    if(Array.isArray(this.couponReceiptUidList)) {
      $dara.Model.validateArray(this.couponReceiptUidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTier2CouponApprovalDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate error codes. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetTier2CouponApprovalDetailResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b9a079e17691387754512757e6a1b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTier2CouponApprovalDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

