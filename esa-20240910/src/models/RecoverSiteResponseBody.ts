// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - **NS**: access through NS hosting.
   * 
   * - **CNAME**: access through CNAME.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The CNAME suffix of the site. For sites accessed through CNAME, this is the suffix that needs to be configured for the CNAME record.
   * 
   * @example
   * gf-test.hkrt.cn
   */
  cnameZone?: string;
  /**
   * @remarks
   * The acceleration region of the site. Valid values:
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The plan instance ID.
   * 
   * @example
   * esa-site-9vjienwn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of name servers assigned to the site, separated by commas (,). When the site is accessed through NS, this field contains values. You need to change the DNS servers of the site to these name servers. Then you can verify site ownership and activate the site.
   * 
   * @example
   * ns1.example.com,ns2.example.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The reason why the site was disabled. Valid values:
   * 
   * - **expiration_ arrears**: the subscription plan expired or the account has an overdue payment.
   * - **internally_disabled**: disabled by the system internally.
   * - **missing_icp**: the domain name lacks an ICP filing.
   * - **content_violation**: content violation.
   * - **proactively_disabled**: you proactively disabled the site or the site was disabled due to the usage cap you configured.
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
   * basic
   */
  planName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-axxxxxx
   */
  resourceGroupId?: string;
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
   * - **pending**: the site is pending configuration.
   * - **active**: the site is activated.
   * - **offline**: the site is offline.
   * - **moved**: the site has been superseded.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-03-13T02:13:28Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The site ownership verification code. When the site is accessed through CNAME, this is the TXT verification code that needs to be configured.
   * 
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
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
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
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
      requestId: 'string',
      resourceGroupId: 'string',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      updateTime: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

