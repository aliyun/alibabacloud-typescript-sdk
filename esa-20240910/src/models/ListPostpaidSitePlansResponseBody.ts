// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidSitePlansResponseBodyPlanInfo extends $dara.Model {
  /**
   * @remarks
   * The billable methods of the plan. Valid values:
   * - dps_month95: Monthly 95th percentile billing.
   * 
   * @example
   * dps_month95
   */
  billingMethod?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * 
   * - PREPAY: Subscription.
   * - POSTPAY: Pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * The acceleration regions for sites that can be added to the plan. Separate multiple values with commas (,). Valid values:
   * 
   * - domestic: The Chinese mainland.
   * - overseas: Global (excluding the Chinese mainland).
   * - global: Global (including the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverages?: string;
  /**
   * @remarks
   * The name of the plan, which is uniquely identified in English.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * Beta plan
   */
  planNameCn?: string;
  /**
   * @remarks
   * The plan type of the plan instance. Valid values:
   * - normal: Fixed plan.
   * - enterprise: Enterprise plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @remarks
   * The sales status of the plan. For Enterprise plans, valid values are:
   * 
   * - saled: Sold.
   * - upgrading: Upgrading or downgrading.
   * 
   * @example
   * saled
   */
  saleStatus?: string;
  /**
   * @remarks
   * The quota for the number of sites.
   * 
   * @example
   * 1
   */
  siteQuota?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'BillingMethod',
      billingMode: 'BillingMode',
      coverages: 'Coverages',
      planName: 'PlanName',
      planNameCn: 'PlanNameCn',
      planType: 'PlanType',
      saleStatus: 'SaleStatus',
      siteQuota: 'SiteQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      billingMode: 'string',
      coverages: 'string',
      planName: 'string',
      planNameCn: 'string',
      planType: 'string',
      saleStatus: 'string',
      siteQuota: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostpaidSitePlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 500. Valid values: any integer from 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the pay-as-you-go plan.
   */
  planInfo?: ListPostpaidSitePlansResponseBodyPlanInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CD541DB-CD83-5D0C-BE94-21B794074249
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planInfo: 'PlanInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planInfo: { 'type': 'array', 'itemType': ListPostpaidSitePlansResponseBodyPlanInfo },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planInfo)) {
      $dara.Model.validateArray(this.planInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

