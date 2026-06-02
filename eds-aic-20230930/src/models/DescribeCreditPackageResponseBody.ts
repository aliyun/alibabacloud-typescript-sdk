// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageResponseBodyCreditsPackageInfos extends $dara.Model {
  /**
   * @example
   * 70
   */
  availableCredits?: string;
  /**
   * @example
   * crp-xagydbhfkah****
   */
  creditPackageId?: string;
  /**
   * @example
   * ACTIVE
   */
  creditPackageStatus?: string;
  /**
   * @example
   * 2026-04-30 00:00:00
   */
  effectiveTime?: string;
  /**
   * @example
   * 30
   */
  exhaustedCredits?: string;
  /**
   * @example
   * 2026-10-30 00:00:00
   */
  expiredTime?: string;
  /**
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
  creditsPackageInfos?: DescribeCreditPackageResponseBodyCreditsPackageInfos[];
  /**
   * @example
   * true
   */
  isFirstPurchase?: boolean;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalAvailableCredits?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
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

