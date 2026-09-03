// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The Authority URL of the identity authentication service.
   * 
   * @example
   * https://login.microsoftonline.com
   */
  authorityHost?: string;
  /**
   * @remarks
   * The client ID registered with the identity provider application.
   * 
   * @example
   * a2c8f7e4-1b3d-4c5e-9f0a-6d7b8c9e****
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret registered with the identity provider application.
   * 
   * @example
   * sct-9f3e2d1c****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The access method allowed when connecting to cloud computers.
   * 
   * > The VPC connection method depends on the Alibaba Cloud PrivateLink service, which is free of charge. If this parameter is set to `VPC` or `Any`, the system automatically activates the PrivateLink service for you.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The domain name of the enterprise AD.
   * 
   * @example
   * domain.local
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to grant local administrator permissions to cloud computer users.
   * 
   * @example
   * false
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * This parameter applies only to convenience account-based office networks. Specifies whether secondary authentication is required during logon. If logon secondary authentication is enabled, the system checks whether the logon account has security risks when a convenience user logs on to the client. If a risk is detected, the system sends a verification code to the email address associated with the account. The convenience user can log on to the client only after passing the verification code check.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * This parameter applies only to convenience account-based office networks. Specifies whether to enable device verification. For AD-based office networks, this parameter is empty.
   * 
   * @example
   * false
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-882398****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name. The name must be 2 to 255 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).    
   * Default value: empty.
   * 
   * @example
   * R&D_Office_Network
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tenant ID of the identity provider.
   * 
   * @example
   * 72f988bf-86f1-41af-91ab-2d7cd011****
   */
  tenantId?: string;
  /**
   * @remarks
   * The vSwitch ID. Only one vSwitch is supported.
   */
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

