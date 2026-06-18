// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteResponseBodySiteModel extends $dara.Model {
  /**
   * @remarks
   * The access type of the site. Valid values:
   * 
   * - **NS**: Access via NS.
   * 
   * - **CNAME**: Access via CNAME.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * For sites onboarded via CNAME, use this suffix to configure the CNAME record.
   * 
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * - **domestic**: Chinese mainland only
   * 
   * - **global**: Global
   * 
   * - **overseas**: Global (excluding the Chinese mainland)
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The time (in UTC) when the site was created, formatted in ISO 8601 (`yyyy-MM-ddTHH:mm:ssZ`).
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the plan instance.
   * 
   * @example
   * cas-merge-q6h0bv
   */
  instanceId?: string;
  /**
   * @remarks
   * A comma-separated list of name servers assigned to the site.
   * 
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The reason the site is offline. This parameter appears only when `Status` is `offline`. Valid values:
   * 
   * - **expiration_arrears**: The subscription plan has expired or the account has overdue payments.
   * 
   * - **internally_disabled**: The site was disabled by the system.
   * 
   * - **missing_icp**: The domain is missing an ICP license.
   * 
   * - **content_violation**: The site violated content policies.
   * 
   * - **proactively_disabled**: The site was disabled either by you or by a usage limit that you configured.
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
   * plan-168777532****
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
   * rg-aek26g6i6se****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * 1234567890123
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
   * 
   * - **active**: The site is active.
   * 
   * - **offline**: The site is offline.
   * 
   * - **moved**: The site has been superseded.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The tags of the site.
   * 
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time (in UTC) when the site was last updated, formatted in ISO 8601 (`yyyy-MM-ddTHH:mm:ssZ`).
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Each key is a custom name server, and its value is a comma-separated list of the server\\"s IP addresses.
   */
  vanityNSList?: { [key: string]: string };
  /**
   * @remarks
   * For sites onboarded via CNAME, you must configure this code as a TXT record.
   * 
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  /**
   * @remarks
   * If `true`, version management is enabled for the site.
   * 
   * @example
   * true
   */
  versionManagement?: boolean;
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
      vanityNSList: 'VanityNSList',
      verifyCode: 'VerifyCode',
      versionManagement: 'VersionManagement',
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
      vanityNSList: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      verifyCode: 'string',
      versionManagement: 'boolean',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(this.vanityNSList) {
      $dara.Model.validateMap(this.vanityNSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the site.
   */
  siteModel?: GetSiteResponseBodySiteModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteModel: 'SiteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteModel: GetSiteResponseBodySiteModel,
    };
  }

  validate() {
    if(this.siteModel && typeof (this.siteModel as any).validate === 'function') {
      (this.siteModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

