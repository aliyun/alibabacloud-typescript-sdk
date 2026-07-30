// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeAccountCreditResponseBodyCreditInfo extends $dara.Model {
  /**
   * @remarks
   * The total granted credits.
   * 
   * @example
   * 200
   */
  grantedCreditQuota?: number;
  /**
   * @remarks
   * The remaining granted credits.
   * 
   * @example
   * 0
   */
  grantedCreditQuotaUsage?: number;
  /**
   * @remarks
   * The total credits of the booster pack.
   * 
   * @example
   * 20000
   */
  packCreditQuota?: number;
  /**
   * @remarks
   * The remaining credits of the booster pack.
   * 
   * @example
   * 5000
   */
  packCreditQuotaUsage?: number;
  /**
   * @remarks
   * The total credits of the membership plan.
   * 
   * @example
   * 10000
   */
  resourceCreditQuota?: number;
  /**
   * @remarks
   * The remaining credits of the membership plan.
   * 
   * @example
   * 2000
   */
  resourceCreditQuotaUsage?: number;
  static names(): { [key: string]: string } {
    return {
      grantedCreditQuota: 'GrantedCreditQuota',
      grantedCreditQuotaUsage: 'GrantedCreditQuotaUsage',
      packCreditQuota: 'PackCreditQuota',
      packCreditQuotaUsage: 'PackCreditQuotaUsage',
      resourceCreditQuota: 'ResourceCreditQuota',
      resourceCreditQuotaUsage: 'ResourceCreditQuotaUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantedCreditQuota: 'number',
      grantedCreditQuotaUsage: 'number',
      packCreditQuota: 'number',
      packCreditQuotaUsage: 'number',
      resourceCreditQuota: 'number',
      resourceCreditQuotaUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAccountCreditResponseBodyMembershipInfo extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1784179281
   */
  endTime?: string;
  /**
   * @remarks
   * The membership level. Valid values:
   * 
   * - basic: Basic Edition.
   * - standard: Standard Edition.
   * - professional: Ultimate Edition.
   * - ultra: Ultra Edition.
   * 
   * @example
   * basic
   */
  membership?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1784784081
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      membership: 'Membership',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      membership: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAccountCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credit information.
   */
  creditInfo?: GetYikeAccountCreditResponseBodyCreditInfo;
  /**
   * @remarks
   * The membership information.
   */
  membershipInfo?: GetYikeAccountCreditResponseBodyMembershipInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creditInfo: 'CreditInfo',
      membershipInfo: 'MembershipInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditInfo: GetYikeAccountCreditResponseBodyCreditInfo,
      membershipInfo: GetYikeAccountCreditResponseBodyMembershipInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.creditInfo && typeof (this.creditInfo as any).validate === 'function') {
      (this.creditInfo as any).validate();
    }
    if(this.membershipInfo && typeof (this.membershipInfo as any).validate === 'function') {
      (this.membershipInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

