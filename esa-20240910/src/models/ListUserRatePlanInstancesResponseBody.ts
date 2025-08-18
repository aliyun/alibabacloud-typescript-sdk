// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The website status. Valid values:
   * 
   * *   pending: The website is to be configured.
   * *   active: The website is active.
   * *   offline: The website is suspended.
   * *   moved: The website has been added and verified by another Alibaba Cloud account.
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
   * *   PREPAY: subscription.
   * *   POSTPAY: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  botInstanceLevel?: string;
  botRequest?: string;
  /**
   * @remarks
   * The service locations for the websites that can be associated with the plan. Multiple values are separated by commas (,). Valid values:
   * 
   * *   domestic: the Chinese mainland.
   * *   overseas: outside the Chinese mainland.
   * *   global: global.
   * 
   * @example
   * domestic,overseas
   */
  coverages?: string;
  /**
   * @remarks
   * The time when the plan was purchased.
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
   * The subscription duration of the plan. Unit: month.
   * 
   * @example
   * 3
   */
  duration?: number;
  edgeRoutineRquest?: string;
  edgeWafRequest?: string;
  /**
   * @remarks
   * The time when the plan expires.
   * 
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  expireTime?: string;
  /**
   * @remarks
   * The plan ID.
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
   * *   normal
   * *   enterprise
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @remarks
   * The maximum number of websites that can be associated with the plan.
   * 
   * @example
   * 1
   */
  siteQuota?: string;
  /**
   * @remarks
   * The websites that have been associated with the plan.
   */
  sites?: ListUserRatePlanInstancesResponseBodyInstanceInfoSites[];
  smartRoutingRequest?: string;
  staticRequest?: string;
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
   * The queried plans.
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
   * The number of entries per page.
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
   * The total number of entries returned.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
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

