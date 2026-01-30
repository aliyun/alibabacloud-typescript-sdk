// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTier2CouponApprovalDetailResponseBodyDataApplicantInfo extends $dara.Model {
  /**
   * @example
   * UNIVERSAL
   */
  applicableProducts?: string;
  /**
   * @example
   * 2026-01-21 11:24
   */
  applicationTime?: string;
  /**
   * @example
   * ALL,BILLING
   */
  orderType?: string;
  /**
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
   * @example
   * 5248516846402795
   */
  t2PartnerUid?: number;
  /**
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
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
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
  applicantInfo?: GetTier2CouponApprovalDetailResponseBodyDataApplicantInfo;
  applicationReason?: string;
  /**
   * @example
   * 0b9a079e17691387754512757e6a1b
   */
  applicationSheetId?: string;
  /**
   * @example
   * 2
   */
  approvalStatus?: string;
  couponReceiptUidList?: GetTier2CouponApprovalDetailResponseBodyDataCouponReceiptUidList[];
  /**
   * @example
   * 20.00
   */
  remainingQuota?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetTier2CouponApprovalDetailResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

