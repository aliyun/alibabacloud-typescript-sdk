// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesResponseBodySites extends $dara.Model {
  /**
   * @remarks
   * The DNS setup for the website. Valid values:
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
   * The service location for the website. Valid values:
   * 
   * *   **domestic**: the Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The time when the website was added. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the plan associated with the website.
   * 
   * @example
   * onBvtlmIyeXLbiDw81F9
   */
  instanceId?: string;
  /**
   * @remarks
   * The nameservers assigned to the website domain, which are separated by commas (,).
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
   * plan-168656498****
   */
  planName?: string;
  /**
   * @remarks
   * The plan associated with the website.
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
   * The website ID.
   * 
   * @example
   * 123456789****
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
   * The time when the website was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
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
   * The website visit time is represented in the ISO 8601 date format using UTC time, formatted as yyyy-MM-ddTHH:mm:ssZ.
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

