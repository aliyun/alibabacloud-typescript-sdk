// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The site status. Valid values:
   * 
   * - pending: The site is pending configuration.
   * - active: The site is activated.
   * - offline: The site is offline.
   * - moved: The site has been superseded.
   * 
   * @example
   * pending
   */
  siteStatus?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteStatus: 'SiteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostpaidRatePlanInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - dps_month95: Monthly 95th Percentile.
   * 
   * @example
   * SUBSCRIBE
   */
  billingMethod?: string;
  /**
   * @remarks
   * The billing mode. Valid values:
   * 
   *  * POSTPAY: Pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * The acceleration regions to which the instance can bindable sites. Multiple values are separated by commas (,). Valid values:
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
   * The time when the instance was created. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The scheduled specification change time. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  expectedUpdateTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The English name of the plan.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The Chinese name of the plan.
   * 
   * @example
   * test-plan
   */
  planNameCn?: string;
  /**
   * @remarks
   * The plan type of the instance. Valid values:
   * - normal: Fixed edition plan.
   * - enterprise: Enterprise edition plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  shareType?: string;
  /**
   * @remarks
   * The site quota.
   * 
   * @example
   * 1
   */
  siteQuota?: string;
  /**
   * @remarks
   * The list of sites.
   */
  sites?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites[];
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'BillingMethod',
      billingMode: 'BillingMode',
      coverages: 'Coverages',
      createTime: 'CreateTime',
      expectedUpdateTime: 'ExpectedUpdateTime',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      planName: 'PlanName',
      planNameCn: 'PlanNameCn',
      planType: 'PlanType',
      shareType: 'ShareType',
      siteQuota: 'SiteQuota',
      sites: 'Sites',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      billingMode: 'string',
      coverages: 'string',
      createTime: 'string',
      expectedUpdateTime: 'string',
      instanceId: 'string',
      ownerId: 'string',
      planName: 'string',
      planNameCn: 'string',
      planType: 'string',
      shareType: 'string',
      siteQuota: 'string',
      sites: { 'type': 'array', 'itemType': ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sites)) {
      $dara.Model.validateArray(this.sites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPostpaidRatePlanInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance information.
   */
  instanceInfo?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListPostpaidRatePlanInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

