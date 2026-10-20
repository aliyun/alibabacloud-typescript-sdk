// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
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
   * - **pending**: The site is pending configuration.
   * - **active**: The site is activated.
   * - **offline**: The site is offline.
   * - **moved**: The site is replaced.
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
   * - **PREPAY**: Subscription.
   * - **POSTPAY**: Pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * If this parameter is empty, no bot protection instance is purchased for the plan. If a value is returned, a bot protection instance is purchased for the plan. Valid values:
   * 
   * - enterprise_bot: Web edition.
   * 
   * - enterprise_bot_with_app: App edition.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  /**
   * @remarks
   * The prepaid number of bot requests in the plan. Unit: 10,000 requests.
   * 
   * @example
   * 100
   */
  botRequest?: string;
  /**
   * @remarks
   * The acceleration regions where the site can be bound. Multiple regions are separated by commas (,). Valid values:
   * 
   * - **domestic**: Chinese mainland.
   * - **overseas**: Global (excluding the Chinese mainland).
   * - **global**: Global (including the Chinese mainland).
   * 
   * @example
   * domestic,overseas
   */
  coverages?: string;
  /**
   * @remarks
   * The creation time of the plan instance. The time is displayed in UTC and formatted as yyyy-MM-ddTHH:mm:ssZ in accordance with ISO 8601.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The prepaid China network acceleration traffic in the plan. Unit: GB.
   * 
   * @example
   * 100
   */
  crossborderTraffic?: string;
  /**
   * @remarks
   * The specifications of the Anti-DDoS instance in the plan for the Chinese mainland.
   * 
   * @example
   * cn_300
   */
  ddosBurstableDomesticProtection?: string;
  /**
   * @remarks
   * The specifications of the Anti-DDoS instance in the plan for regions outside the Chinese mainland.
   * 
   * @example
   * overseas_300
   */
  ddosBurstableOverseasProtection?: string;
  /**
   * @remarks
   * If this parameter is empty, no Anti-DDoS instance is purchased for the plan. If a value is returned, an Anti-DDoS instance is purchased for the plan, and the value is `esa_ddos_instance`.
   * 
   * @example
   * esa_ddos_instance
   */
  ddosInstanceLevel?: string;
  /**
   * @remarks
   * The subscription duration of the plan instance. Unit: months.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * The prepaid number of Edge Routine (ER) requests in the plan. Unit: 10,000 requests.
   * 
   * @example
   * 100
   */
  edgeRoutineRquest?: string;
  /**
   * @remarks
   * The prepaid number of Web Application Firewall (WAF) requests in the plan. Unit: 10,000 requests.
   * 
   * @example
   * 100
   */
  edgeWafRequest?: string;
  /**
   * @remarks
   * The expiration time of the plan instance. The time is displayed in UTC and formatted as yyyy-MM-ddTHH:mm:ssZ in accordance with ISO 8601.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The prepaid Layer 4 proxy traffic in the plan for the Chinese mainland. Unit: GB.
   * 
   * @example
   * 100
   */
  layer4Traffic?: string;
  /**
   * @remarks
   * The prepaid Layer 4 proxy traffic in the plan for regions outside the Chinese mainland. Unit: GB.
   * 
   * @example
   * 100
   */
  layer4TrafficIntl?: string;
  ownerId?: string;
  /**
   * @remarks
   * The name of the plan corresponding to the plan instance.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The prepaid Layer 7 acceleration traffic in the plan. Unit: GB.
   * 
   * @example
   * 100
   */
  planTraffic?: string;
  /**
   * @remarks
   * The type of the plan corresponding to the plan instance. Valid values:
   * - **normal**: Fixed plan.
   * - **enterprise**: Enterprise plan.
   * 
   * @example
   * normal
   */
  planType?: string;
  /**
   * @remarks
   * The auto-renewal cycle. Unit: months.
   * 
   * @example
   * 6
   */
  renewalDuration?: number;
  /**
   * @remarks
   * The auto-renewal status. Valid values:
   * 
   * - nomal: Normal.
   * - auto_renewal: Auto-renewal.
   * - not_renewal: Non-renewal.
   * 
   * @example
   * nomal
   */
  renewalStatus?: string;
  resourceOwner?: number;
  shareType?: string;
  /**
   * @remarks
   * The quota for the number of sites under the plan instance.
   * 
   * @example
   * 1
   */
  siteQuota?: string;
  /**
   * @remarks
   * The list of sites bound to the current plan instance.
   */
  sites?: ListUserRatePlanInstancesResponseBodyInstanceInfoSites[];
  /**
   * @remarks
   * The prepaid number of smart routing requests in the plan. Unit: 10,000 requests.
   * 
   * @example
   * 100
   */
  smartRoutingRequest?: string;
  /**
   * @remarks
   * The prepaid number of HTTP requests in the plan. Unit: 10,000 requests.
   * 
   * @example
   * 100
   */
  staticRequest?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The instance is in normal service status.
   * - **offline**: The instance has expired but is not overdue, and is in an inactive state.
   * - **disable**: The instance is released.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The subscription type of the plan. Valid values:
   * 
   * - entranceplan: Free Edition (Chinese mainland).
   * - entranceplan_intl: Free Edition (International).
   * - basicplan: Basic Edition.
   * - standardplan: Standard Edition.
   * - advancedplan: Advanced Edition.
   * - enterpriseplan: Enterprise Edition.
   * 
   * @example
   * basicplan
   */
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
      ownerId: 'OwnerId',
      planName: 'PlanName',
      planTraffic: 'PlanTraffic',
      planType: 'PlanType',
      renewalDuration: 'RenewalDuration',
      renewalStatus: 'RenewalStatus',
      resourceOwner: 'ResourceOwner',
      shareType: 'ShareType',
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
      ownerId: 'string',
      planName: 'string',
      planTraffic: 'string',
      planType: 'string',
      renewalDuration: 'number',
      renewalStatus: 'string',
      resourceOwner: 'number',
      shareType: 'string',
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
   * The plan instances that meet the query conditions under the user.
   */
  instanceInfo?: ListUserRatePlanInstancesResponseBodyInstanceInfo[];
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
   * The total number of entries.
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

