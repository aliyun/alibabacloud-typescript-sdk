// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteAttributeRequest extends $dara.Model {
  authorityHost?: string;
  clientId?: string;
  clientSecret?: string;
  /**
   * @remarks
   * The method for connecting to cloud computers.
   * 
   * > VPC connections use Alibaba Cloud PrivateLink, a free service. If you set this parameter to VPC or Any, PrivateLink is automatically activated.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to grant cloud computer users local administrative permissions.
   * 
   * @example
   * false
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable two-factor authentication. This parameter is applicable to only office sites that use convenience accounts. If enabled, the system performs a security check during logon. If the system detects a risk, it sends a verification code to the email address that is associated with the account. The user must enter the correct verification code to log on.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable device verification. This feature is available only for office sites that use convenience accounts.
   * 
   * @example
   * false
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The ID of the office site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-882398****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office site. The name must be 2 to 255 characters long. The name must start with a letter or a Chinese character, and cannot start with http\\:// or https\\://. It can contain digits, colons (:), underscores (_), and hyphens (-).<br>
   * This parameter is optional.<br>
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions where Elastic Desktop Service is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tenantId?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      authorityHost: 'AuthorityHost',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      desktopAccessType: 'DesktopAccessType',
      domainName: 'DomainName',
      enableAdminAccess: 'EnableAdminAccess',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityHost: 'string',
      clientId: 'string',
      clientSecret: 'string',
      desktopAccessType: 'string',
      domainName: 'string',
      enableAdminAccess: 'boolean',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      tenantId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

