// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - **NS**: NS hosting.
   * 
   * - **CNAME**: CNAME access.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The CNAME suffix of the site. For sites accessed through CNAME, this field records the CNAME suffix that needs to be configured.
   * 
   * @example
   * gf-test.hkrt.cn
   */
  cnameZone?: string;
  /**
   * @remarks
   * The acceleration region of the site. Valid values:
   * - **domestic**: The Chinese mainland only.
   * - **global**: Global.
   * - **overseas**: Global (excluding the Chinese mainland).
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
   * The list of name servers assigned to the site, separated by commas (,). This field has a value when the site is accessed through NS. You must change the DNS servers of the site to these name servers. Then, you can verify the ownership of the site and activate it.
   * 
   * @example
   * ns1.example.com,ns2.example.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The reason why the site is disabled. Valid values:
   * 
   * - **expiration_ arrears**: The subscription plan has expired or the account has an overdue payment.
   * - **internally_disabled**: Disabled internally by the system.
   * - **missing_icp**: The domain name lacks an ICP filing.
   * - **content_violation**: Content violation.
   * - **proactively_disabled**: Manually disabled by you or disabled due to a usage cap set by you.
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
   * - **pending**: The site is pending configuration.
   * - **active**: The site is activated.
   * - **offline**: The site is offline.
   * - **moved**: The site has been moved.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-03-13T02:13:28Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The verification code for site ownership. When a site is accessed through CNAME, this is the TXT verification code that needs to be configured.
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

