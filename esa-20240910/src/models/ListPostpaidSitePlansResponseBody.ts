// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidSitePlansResponseBodyPlanInfo extends $dara.Model {
  /**
   * @remarks
   * The billable methods of the plan. Valid values:
   * - dps_month95: monthly 95th percentile billing method.
   * 
   * @example
   * dps_month95
   */
  billingMethod?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * 
   * - PREPAY: subscription.
   * - POSTPAY: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * The acceleration regions to which sites can be added under the plan. Multiple values are separated by commas (,). Valid values:
   * 
   * - domestic: the Chinese mainland.
   * - overseas: global (excluding the Chinese mainland).
   * - global: global (including the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverages?: string;
  /**
   * @remarks
   * The name of the plan, which serves as a unique identifier in English.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The plan description.
   * 
   * @example
   * 测试版套餐
   */
  planNameCn?: string;
  /**
   * @remarks
   * The plan type of the plan instance. Valid values:
   * - normal: fixed edition plan.
   * - enterprise: enterprise edition plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @remarks
   * The sale status of the plan. Valid values for enterprise edition plans:
   * 
   * - saled: sold.
   * - upgrading: specification change in progress.
   * 
   * @example
   * saled
   */
  saleStatus?: string;
  /**
   * @remarks
   * The site quantity quota.
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
   * The page size. Default value: 20. Maximum value: 500. Valid values: any integer from 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The pay-as-you-go plan details.
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

