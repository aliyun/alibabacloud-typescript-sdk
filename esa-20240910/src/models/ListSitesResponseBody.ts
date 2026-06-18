// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesResponseBodySites extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - **NS**: The site connects via NS.
   * 
   * - **CNAME**: The site connects via a CNAME record.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The CNAME suffix for the site. This suffix is required for CNAME record configuration.
   * 
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * - **domestic**: Chinese mainland only.
   * 
   * - **global**: Global.
   * 
   * - **overseas**: Global (excluding Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The time (UTC) when the site was created, in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the plan instance associated with the site.
   * 
   * @example
   * onBvtlmIyeXLbiDw81F9
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of name servers (NS) assigned to the site. Multiple name servers are separated by commas.
   * 
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The reason the site was disabled. Valid values:
   * 
   * - **expiration_ arrears**: The plan has expired or payment is overdue.
   * 
   * - **internally_disabled**: Disabled by the system.
   * 
   * - **missing_icp**: The domain name is missing an ICP filing.
   * 
   * - **content_violation**: The site content violates regulations.
   * 
   * - **proactively_disabled**: The user disabled the site, or a usage cap was reached.
   * 
   * @example
   * expiration_ arrears
   */
  offlineReason?: string;
  /**
   * @remarks
   * The name of the plan.
   * 
   * @example
   * plan-168656498****
   */
  planName?: string;
  /**
   * @remarks
   * The name of the plan specification.
   * 
   * @example
   * normal
   */
  planSpecName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek26g6i6se6pna
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **pending**: The site is awaiting configuration.
   * 
   * - **active**: The site is active.
   * 
   * - **offline**: The site is offline.
   * 
   * - **moved**: The site has moved to another instance.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The tags associated with the site.
   * 
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time (UTC) when the site was last updated, in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The TXT verification code for site ownership. For sites that connect via CNAME, you must configure this code.
   * 
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  /**
   * @remarks
   * The time (UTC) when the site was last accessed, in `yyyy-MM-ddTHH:mm:ssZ` format.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of sites to return on each page.
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
   * A list of sites.
   */
  sites?: ListSitesResponseBodySites[];
  /**
   * @remarks
   * The total count of sites.
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

