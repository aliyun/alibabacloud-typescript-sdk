// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
  siteId?: number;
  siteName?: string;
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
  billingMode?: string;
  botInstanceLevel?: string;
  botRequest?: string;
  coverages?: string;
  createTime?: string;
  crossborderTraffic?: string;
  ddosBurstableDomesticProtection?: string;
  ddosBurstableOverseasProtection?: string;
  ddosInstanceLevel?: string;
  duration?: number;
  edgeRoutineRquest?: string;
  edgeWafRequest?: string;
  expireTime?: string;
  instanceId?: string;
  layer4Traffic?: string;
  layer4TrafficIntl?: string;
  planName?: string;
  planTraffic?: string;
  planType?: string;
  siteQuota?: string;
  sites?: ListUserRatePlanInstancesResponseBodyInstanceInfoSites[];
  smartRoutingRequest?: string;
  staticRequest?: string;
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
  instanceInfo?: ListUserRatePlanInstancesResponseBodyInstanceInfo[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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

