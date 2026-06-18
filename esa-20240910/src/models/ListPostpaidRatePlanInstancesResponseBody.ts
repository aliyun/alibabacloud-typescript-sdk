// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the site.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status of the site. Valid values:
   * 
   * - `pending`: The site is awaiting configuration.
   * 
   * - `active`: The site is active.
   * 
   * - `offline`: The site is offline.
   * 
   * - `moved`: The site has been replaced.
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
   * The billing method. Valid value:
   * 
   * - `dps_month95`: Monthly 95th percentile.
   * 
   * @example
   * SUBSCRIBE
   */
  billingMethod?: string;
  /**
   * @remarks
   * The billing mode. Valid value:
   * 
   * - `POSTPAY`: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * The coverage area of the instance. Only sites within this area can be bound to the instance. If multiple areas are supported, they are separated by a comma (`,`). Valid values:
   * 
   * - `domestic`: Chinese mainland.
   * 
   * - `overseas`: Regions outside the Chinese mainland.
   * 
   * - `global`: Global (including the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverages?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  createTime?: string;
  /**
   * @remarks
   * The time of a scheduled configuration change.
   * 
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  expectedUpdateTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The plan name in English.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The plan name in Chinese.
   * 
   * @example
   * 测试套餐
   */
  planNameCn?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * - `normal`: Normal plan.
   * 
   * - `enterprise`: Enterprise plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @remarks
   * The maximum number of sites that can be bound to the instance.
   * 
   * @example
   * 1
   */
  siteQuota?: string;
  /**
   * @remarks
   * A list of sites bound to the instance.
   */
  sites?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites[];
  /**
   * @remarks
   * The status of the instance.
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
      planName: 'PlanName',
      planNameCn: 'PlanNameCn',
      planType: 'PlanType',
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
      planName: 'string',
      planNameCn: 'string',
      planType: 'string',
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
   * A list of instances.
   */
  instanceInfo?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * The page number.
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
   * The request ID, used for troubleshooting.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

