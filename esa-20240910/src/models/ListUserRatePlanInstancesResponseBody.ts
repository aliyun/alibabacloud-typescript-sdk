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
   * - **active**: The site is activated.
   * - **offline**: The site is offline.
   * - **moved**: The site has been superseded.
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
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * If this field is empty, the plan does not include a bot protection instance. If a value is returned, the plan includes a bot protection instance. Valid values:
   * 
   * - enterprise_bot: Web Edition
   * 
   * - enterprise_bot_with_app: App Edition.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  /**
   * @remarks
   * The prepaid bot protection requests included in the plan, in units of 10,000.
   * 
   * @example
   * 100
   */
  botRequest?: string;
  /**
   * @remarks
   * The acceleration regions to which sites can be bound under this plan instance. Multiple values are separated by commas (,). Valid values:
   * 
   * - **domestic**: China or the Chinese mainland.
   * - **overseas**: Global (excluding China or the Chinese mainland).
   * - **global**: Global (including China or the Chinese mainland).
   * 
   * @example
   * domestic,overseas
   */
  coverages?: string;
  /**
   * @remarks
   * The purchase time of the plan instance. The time is in ISO 8601 format and displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The prepaid China network acceleration traffic included in the plan, in GB.
   * 
   * @example
   * 100
   */
  crossborderTraffic?: string;
  /**
   * @remarks
   * The Anti-DDoS instance specification for the Chinese mainland included in the plan.
   * 
   * @example
   * cn_300
   */
  ddosBurstableDomesticProtection?: string;
  /**
   * @remarks
   * The Anti-DDoS instance specification outside the Chinese mainland included in the plan.
   * 
   * @example
   * overseas_300
   */
  ddosBurstableOverseasProtection?: string;
  /**
   * @remarks
   * If this field is empty, the plan does not include an Anti-DDoS instance. If a value is returned, the plan includes an Anti-DDoS instance. The value is `esa_ddos_instance`.
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
   * The prepaid Edge Routine (ER) requests included in the plan, in units of 10,000.
   * 
   * @example
   * 100
   */
  edgeRoutineRquest?: string;
  /**
   * @remarks
   * The prepaid WAF requests included in the plan, in units of 10,000.
   * 
   * @example
   * 100
   */
  edgeWafRequest?: string;
  /**
   * @remarks
   * The expiration time of the plan instance. The time is in ISO 8601 format and displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
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
  /**
   * @remarks
   * The prepaid Layer 4 proxy traffic included in the plan, in GB, for the Chinese mainland.
   * 
   * @example
   * 100
   */
  layer4Traffic?: string;
  /**
   * @remarks
   * The prepaid Layer 4 proxy traffic included in the plan, in GB, outside the Chinese mainland.
   * 
   * @example
   * 100
   */
  layer4TrafficIntl?: string;
  /**
   * @remarks
   * The plan name associated with the plan instance.
   * 
   * @example
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The prepaid Layer 7 acceleration traffic included in the plan, in GB.
   * 
   * @example
   * 100
   */
  planTraffic?: string;
  /**
   * @remarks
   * The plan type associated with the plan instance. Valid values:
   * - **normal**: fixed-version plan.
   * - **enterprise**: Enterprise Edition plan.
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
   * - nomal: normal
   * - auto_renewal: auto-renewal enabled
   * - not_renewal: auto-renewal disabled.
   * 
   * @example
   * nomal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The site quota for the plan instance.
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
   * The prepaid smart routing requests included in the plan, in units of 10,000.
   * 
   * @example
   * 100
   */
  smartRoutingRequest?: string;
  /**
   * @remarks
   * The prepaid HTTP requests included in the plan, in units of 10,000.
   * 
   * @example
   * 100
   */
  staticRequest?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The plan instance is in normal service.
   * - **offline**: The plan instance has expired but has not exceeded the grace period and is not active.
   * - **disable**: The plan instance has been released.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The plan subscription type. Valid values:
   * 
   * - entranceplan: Free Edition (Chinese mainland)
   * - entranceplan_intl: Free Edition (International)
   * - basicplan: Basic Edition
   * - standardplan: Standard Edition
   * - advancedplan: Premium Edition
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
   * The plan instances that match the specified conditions under the user.
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

