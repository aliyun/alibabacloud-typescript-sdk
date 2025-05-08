// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage } from "./ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage";


export class ListInstanceQuotasWithUsageResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * redirect_rules|rule_quota
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  quotaValue?: string;
  /**
   * @remarks
   * The usage of the quota in each website associated with the plan.
   */
  siteUsage?: ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage[];
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 3
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      siteUsage: 'SiteUsage',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      siteUsage: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage },
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.siteUsage)) {
      $dara.Model.validateArray(this.siteUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

