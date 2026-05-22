// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage extends $dara.Model {
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 34818329392****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * test.top
   */
  siteName?: string;
  /**
   * @remarks
   * The quota usage of the website.
   * 
   * @example
   * 1
   */
  siteUsage?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListInstanceQuotasWithUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan ID.[](~~2850189~~)
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The quotas and their actual usage in the plan.
   */
  quotas?: ListInstanceQuotasWithUsageResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The plan status. Valid values:
   * 
   * *   online: The plan is in service.
   * *   offline: The plan has expired within an allowable period. In this state, the plan is unavailable.
   * *   disable: The plan is released.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

