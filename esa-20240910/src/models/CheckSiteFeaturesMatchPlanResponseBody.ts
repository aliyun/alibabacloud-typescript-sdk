// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteFeaturesMatchPlanResponseBodyUnPassedSiteQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota value of the current site.
   * 
   * @example
   * true
   */
  currentQuotaValue?: string;
  /**
   * @remarks
   * The quota value of the target instance.
   * 
   * @example
   * false
   */
  destQuotaValue?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * cache_reserve
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      currentQuotaValue: 'CurrentQuotaValue',
      destQuotaValue: 'DestQuotaValue',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentQuotaValue: 'string',
      destQuotaValue: 'string',
      quotaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteFeaturesMatchPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the features of the current site are compatible with the target instance.
   * 
   * @example
   * true
   */
  isPassed?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65705631-908C-5D24-997C-17E0397721C8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about site quotas that do not meet the requirements.
   */
  unPassedSiteQuotas?: CheckSiteFeaturesMatchPlanResponseBodyUnPassedSiteQuotas[];
  static names(): { [key: string]: string } {
    return {
      isPassed: 'IsPassed',
      requestId: 'RequestId',
      unPassedSiteQuotas: 'UnPassedSiteQuotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPassed: 'boolean',
      requestId: 'string',
      unPassedSiteQuotas: { 'type': 'array', 'itemType': CheckSiteFeaturesMatchPlanResponseBodyUnPassedSiteQuotas },
    };
  }

  validate() {
    if(Array.isArray(this.unPassedSiteQuotas)) {
      $dara.Model.validateArray(this.unPassedSiteQuotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

