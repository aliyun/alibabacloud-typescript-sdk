// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimpleOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The access attribute of the office network (workspace).
   * 
   * @example
   * Private
   */
  accessAttribute?: string;
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The authority URL of the identity authentication service.
   * 
   * @example
   * https://login.microsoftonline.com
   */
  authorityHost?: string;
  /**
   * @remarks
   * The peak Internet bandwidth. Valid values: 10 to 200. Unit: Mbit/s.
   * You can specify this parameter when `EnableInternetAccess` is set to `true`.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * > To connect to cloud desktops over a VPC connection, add the office network to a CEN instance. The CEN instance is the one that the on-premises network connects to by using a VPN or Express Connect circuit.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the CEN instance belongs.
   * 
   * - If CenId is not specified or the specified CEN instance belongs to the current Alibaba Cloud account, you do not need to specify this parameter.
   * - If the specified CEN instance belongs to another Alibaba Cloud account, specify the Alibaba Cloud account ID of that account.
   * 
   * @example
   * 118272523431****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC for the office network. This parameter is required for advanced office networks. The system uses automatic creation of a VPC based on the specified IPv4 CIDR block. Use one of the following CIDR blocks or their subnets:
   * 
   * - `10.0.0.0/12` (valid mask range: 12 to 24 bits)
   * - `172.16.0.0/12` (valid mask range: 12 to 24 bits)
   * - `192.168.0.0/16` (valid mask range: 16 to 24 bits)
   * 
   * @example
   * 172.16.0.0/12
   */
  cidrBlock?: string;
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
   * Specifies whether the office network is a CloudBox office network.
   * 
   * @example
   * false
   */
  cloudBoxOfficeSite?: boolean;
  /**
   * @remarks
   * The access method allowed when connecting to cloud desktops.
   * 
   * > The VPC connection method depends on the Alibaba Cloud PrivateLink service, which is free of charge. If this parameter is set to `VPC` or `Any`, the system automatically activates the PrivateLink service.
   * 
   * @example
   * Internet
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
   * The enterprise ID (EID).
   * 
   * @example
   * e-1234abcd****
   */
  eid?: string;
  /**
   * @remarks
   * Specifies whether to grant local administrator permissions to users who use cloud desktops.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable trusted device verification.
   * 
   * @example
   * true
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The name of the office network. The name must be 2 to 255 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestOfficeSite_Simple
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
   * The ID of the vSwitch in the VPC. This parameter is required when you create a CloudBox office network.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The verification code. If the specified CEN instance belongs to another Alibaba Cloud account, call [SendVerifyCode](https://help.aliyun.com/document_detail/335132.html) to obtain the verification code first.
   * 
   * @example
   * 123456
   */
  verifyCode?: string;
  /**
   * @remarks
   * The type of the office network.
   * 
   * @example
   * standard
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      accessAttribute: 'AccessAttribute',
      accountType: 'AccountType',
      authorityHost: 'AuthorityHost',
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      desktopAccessType: 'DesktopAccessType',
      domainName: 'DomainName',
      eid: 'Eid',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
      verifyCode: 'VerifyCode',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAttribute: 'string',
      accountType: 'string',
      authorityHost: 'string',
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      clientId: 'string',
      clientSecret: 'string',
      cloudBoxOfficeSite: 'boolean',
      desktopAccessType: 'string',
      domainName: 'string',
      eid: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteName: 'string',
      regionId: 'string',
      tenantId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      verifyCode: 'string',
      vpcType: 'string',
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

