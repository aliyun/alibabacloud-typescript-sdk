// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
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

export class ListPostpaidRatePlanInstancesResponseBodyInstanceInfo extends $dara.Model {
  billingMethod?: string;
  billingMode?: string;
  coverages?: string;
  createTime?: string;
  expectedUpdateTime?: string;
  instanceId?: string;
  planName?: string;
  planNameCn?: string;
  planType?: string;
  siteQuota?: string;
  sites?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfoSites[];
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
  instanceInfo?: ListPostpaidRatePlanInstancesResponseBodyInstanceInfo[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   */
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

