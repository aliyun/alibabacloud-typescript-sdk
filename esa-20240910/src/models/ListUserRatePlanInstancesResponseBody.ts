// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
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
   * - **pending**: The site is pending configuration.
   * 
   * - **active**: The site is active.
   * 
   * - **offline**: The site is offline.
   * 
   * - **moved**: The site has been replaced.
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

export class ListUserRatePlanInstancesResponseBodyInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  botInstanceLevel?: string;
  botRequest?: string;
  /**
   * @remarks
   * The acceleration regions covered by the plan instance. Multiple values are separated by commas (,). Valid values:
   * 
   * - **domestic**: The Chinese mainland.
   * 
   * - **overseas**: Regions outside the Chinese mainland.
   * 
   * - **global**: Global (including the Chinese mainland).
   * 
   * @example
   * domestic,overseas
   */
  coverages?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  createTime?: string;
  crossborderTraffic?: string;
  ddosBurstableDomesticProtection?: string;
  ddosBurstableOverseasProtection?: string;
  ddosInstanceLevel?: string;
  /**
   * @remarks
   * The duration in months.
   * 
   * @example
   * 3
   */
  duration?: number;
  edgeRoutineRquest?: string;
  edgeWafRequest?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  expireTime?: string;
  /**
   * @remarks
   * The plan instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  layer4Traffic?: string;
  layer4TrafficIntl?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * basic
   */
  planName?: string;
  planTraffic?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * - **normal**: The normal plan.
   * 
   * - **enterprise**: The enterprise plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @example
   * 6
   */
  renewalDuration?: number;
  /**
   * @example
   * nomal
   */
  renewalStatus?: string;
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
   * The sites associated with this plan instance.
   */
  sites?: ListUserRatePlanInstancesResponseBodyInstanceInfoSites[];
  smartRoutingRequest?: string;
  staticRequest?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **online**: The plan instance is active.
   * 
   * - **offline**: The plan instance is unavailable because it has expired but is still within the grace period.
   * 
   * - **disable**: The plan instance is released.
   * 
   * @example
   * online
   */
  status?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'BillingMode',
      botInstanceLevel: 'BotInstanceLevel',
      botRequest: 'BotRequest',
      coverages: 'Coverages',
      createTime: 'CreateTime',
      crossborderTraffic: 'CrossborderTraffic',
      ddosBurstableDomesticProtection: 'DdosBurstableDomesticProtection',
      ddosBurstableOverseasProtection: 'DdosBurstableOverseasProtection',
      ddosInstanceLevel: 'DdosInstanceLevel',
      duration: 'Duration',
      edgeRoutineRquest: 'EdgeRoutineRquest',
      edgeWafRequest: 'EdgeWafRequest',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      layer4Traffic: 'Layer4Traffic',
      layer4TrafficIntl: 'Layer4TrafficIntl',
      planName: 'PlanName',
      planTraffic: 'PlanTraffic',
      planType: 'PlanType',
      renewalDuration: 'RenewalDuration',
      renewalStatus: 'RenewalStatus',
      siteQuota: 'SiteQuota',
      sites: 'Sites',
      smartRoutingRequest: 'SmartRoutingRequest',
      staticRequest: 'StaticRequest',
      status: 'Status',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      botInstanceLevel: 'string',
      botRequest: 'string',
      coverages: 'string',
      createTime: 'string',
      crossborderTraffic: 'string',
      ddosBurstableDomesticProtection: 'string',
      ddosBurstableOverseasProtection: 'string',
      ddosInstanceLevel: 'string',
      duration: 'number',
      edgeRoutineRquest: 'string',
      edgeWafRequest: 'string',
      expireTime: 'string',
      instanceId: 'string',
      layer4Traffic: 'string',
      layer4TrafficIntl: 'string',
      planName: 'string',
      planTraffic: 'string',
      planType: 'string',
      renewalDuration: 'number',
      renewalStatus: 'string',
      siteQuota: 'string',
      sites: { 'type': 'array', 'itemType': ListUserRatePlanInstancesResponseBodyInstanceInfoSites },
      smartRoutingRequest: 'string',
      staticRequest: 'string',
      status: 'string',
      subscribeType: 'string',
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

export class ListUserRatePlanInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of plan instances that meet the specified criteria.
   */
  instanceInfo?: ListUserRatePlanInstancesResponseBodyInstanceInfo[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of entries.
   * 
   * @example
   * 68
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
      instanceInfo: { 'type': 'array', 'itemType': ListUserRatePlanInstancesResponseBodyInstanceInfo },
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

