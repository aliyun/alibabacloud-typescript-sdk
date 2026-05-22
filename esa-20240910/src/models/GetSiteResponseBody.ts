// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteResponseBodySiteModel extends $dara.Model {
  /**
   * @remarks
   * The DNS setup option for the website. Valid values:
   * 
   * *   **NS**
   * *   **CNAME**
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The CNAME of the website domain. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
   * 
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @remarks
   * The service location. Valid values:
   * 
   * *   **domestic**: the Chinese mainland.
   * *   **global**: global.
   * *   **overseas**: outside the Chinese mainland.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The time when the WEBsite was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * cas-merge-q6h0bv
   */
  instanceId?: string;
  /**
   * @remarks
   * The nameservers assigned to the website domain. They are separated by commas (,).
   * 
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  offlineReason?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * plan-168777532****
   */
  planName?: string;
  /**
   * @remarks
   * The specification of the plan associated with the website.
   * 
   * @example
   * normal
   */
  planSpecName?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek26g6i6se****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
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
   * *   **pending**: The website is to be configured.
   * *   **active**: The website is active.
   * *   **offline**: The website is suspended.
   * *   **moved**: The website has been added and verified by another Alibaba Cloud account.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The tags of the website.
   * 
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the WEBsite was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The information about custom nameservers of the website domain. The key is a custom nameserver name, and the value is the IP address of the custom nameserver. Multiple IP addresses are separated by commas (,).
   */
  vanityNSList?: { [key: string]: string };
  /**
   * @remarks
   * The code that is used to verify the website domain ownership. As part of the verification TXT record, this parameter is returned for websites that use CNAME setup.
   * 
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  /**
   * @remarks
   * The status of version management. If true is returned, version management is enabled for the website.
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
   * The queried website information.
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

