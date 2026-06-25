// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageResponseBodyCreditsPackageInfos extends $dara.Model {
  /**
   * @remarks
   * The number of available credits in the credit package.
   * 
   * @example
   * 70
   */
  availableCredits?: string;
  /**
   * @remarks
   * The ID of the credit package.
   * 
   * @example
   * crp-xagydbhfkah****
   */
  creditPackageId?: string;
  /**
   * @remarks
   * The status of the credit package.
   * 
   * @example
   * ACTIVE
   */
  creditPackageStatus?: string;
  /**
   * @remarks
   * The time when the credit package becomes effective.
   * 
   * @example
   * 2026-04-30 00:00:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The number of exhausted credits in the credit package.
   * 
   * @example
   * 30
   */
  exhaustedCredits?: string;
  /**
   * @remarks
   * The time when the credit package expires.
   * 
   * @example
   * 2026-10-30 00:00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The total number of credits in the credit package.
   * 
   * @example
   * 100
   */
  totalCredits?: string;
  static names(): { [key: string]: string } {
    return {
      availableCredits: 'AvailableCredits',
      creditPackageId: 'CreditPackageId',
      creditPackageStatus: 'CreditPackageStatus',
      effectiveTime: 'EffectiveTime',
      exhaustedCredits: 'ExhaustedCredits',
      expiredTime: 'ExpiredTime',
      totalCredits: 'TotalCredits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCredits: 'string',
      creditPackageId: 'string',
      creditPackageStatus: 'string',
      effectiveTime: 'string',
      exhaustedCredits: 'string',
      expiredTime: 'string',
      totalCredits: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of credit package details.
   */
  creditsPackageInfos?: DescribeCreditPackageResponseBodyCreditsPackageInfos[];
  /**
   * @remarks
   * Indicates whether this is your first purchase.
   * 
   * @example
   * true
   */
  isFirstPurchase?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of available credits.
   * 
   * @example
   * 1000
   */
  totalAvailableCredits?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of exhausted credits.
   * 
   * @example
   * 30
   */
  totalExhaustedCredit?: string;
  static names(): { [key: string]: string } {
    return {
      creditsPackageInfos: 'CreditsPackageInfos',
      isFirstPurchase: 'IsFirstPurchase',
      requestId: 'RequestId',
      totalAvailableCredits: 'TotalAvailableCredits',
      totalCount: 'TotalCount',
      totalExhaustedCredit: 'TotalExhaustedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditsPackageInfos: { 'type': 'array', 'itemType': DescribeCreditPackageResponseBodyCreditsPackageInfos },
      isFirstPurchase: 'boolean',
      requestId: 'string',
      totalAvailableCredits: 'string',
      totalCount: 'number',
      totalExhaustedCredit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creditsPackageInfos)) {
      $dara.Model.validateArray(this.creditsPackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

