// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesResponseBodySites extends $dara.Model {
  /**
   * @remarks
   * The site access type. Valid values:
   * 
   * - **NS**: NS-based access.
   * - **CNAME**: CNAME-based access.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The CNAME suffix of the site. For sites that use CNAME-based access, this is the CNAME suffix that needs to be configured for records.
   * 
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @remarks
   * The acceleration region of the site. Valid values:
   * 
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The creation time of the site. The time is in ISO 8601 format and displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID of the plan attached to the site.
   * 
   * @example
   * onBvtlmIyeXLbiDw81F9
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of name servers assigned to the site. Multiple values are separated by commas (,).
   * 
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The reason why the site is disabled. Valid values:
   * 
   * - **expiration_ arrears**: The subscription plan has expired or the account has an overdue payment.
   * - **internally_disabled**: The site is disabled by the system.
   * - **missing_icp**: The domain name does not have an ICP filing.
   * - **content_violation**: Content violation.
   * - **proactively_disabled**: You proactively disabled the site or the site is disabled because the usage cap you configured is reached.
   * 
   * @example
   * expiration_ arrears
   */
  offlineReason?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * plan-168656498****
   */
  planName?: string;
  /**
   * @remarks
   * The specification name of the site plan.
   * 
   * @example
   * normal
   */
  planSpecName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek26g6i6se6pna
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456789****
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
   * - **pending**: the site is pending configuration.
   * - **active**: the site is activated.
   * - **offline**: the site is offline.
   * - **moved**: the site has been superseded.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The site tags.
   * 
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The update time of the site. The time is in ISO 8601 format and displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The site ownership verification code. When a site uses CNAME-based access, this TXT verification code must be configured.
   * 
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  /**
   * @remarks
   * The access time of the site. The time is in ISO 8601 format and displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  visitTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      cnameZone: 'CnameZone',
      coverage: 'Coverage',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nameServerList: 'NameServerList',
      offlineReason: 'OfflineReason',
      planName: 'PlanName',
      planSpecName: 'PlanSpecName',
      resourceGroupId: 'ResourceGroupId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
      visitTime: 'VisitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      cnameZone: 'string',
      coverage: 'string',
      createTime: 'string',
      instanceId: 'string',
      nameServerList: 'string',
      offlineReason: 'string',
      planName: 'string',
      planSpecName: 'string',
      resourceGroupId: 'string',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
      verifyCode: 'string',
      visitTime: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of sites displayed per page.
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The list of queried site information.
   */
  sites?: ListSitesResponseBodySites[];
  /**
   * @remarks
   * The total number of sites.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sites: 'Sites',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sites: { 'type': 'array', 'itemType': ListSitesResponseBodySites },
      totalCount: 'number',
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

