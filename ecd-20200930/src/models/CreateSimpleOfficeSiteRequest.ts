// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimpleOfficeSiteRequest extends $dara.Model {
  accessAttribute?: string;
  accountType?: string;
  authorityHost?: string;
  /**
   * @remarks
   * The peak public bandwidth. Valid values: 10 to 200. Unit: Mbps.
   * This parameter is valid only when `EnableInternetAccess` is set to `true`.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * > If you want to connect to cloud desktops over a VPC, attach the office site to the same CEN instance that is connected to your on-premises network by a VPN or an Express Connect circuit.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the CEN instance.
   * 
   * - If you do not specify CenId, or if the CEN instance belongs to your Alibaba Cloud account, this parameter is not required.
   * 
   * - If the CEN instance is owned by another Alibaba Cloud account, specify the ID of that account.
   * 
   * @example
   * 118272523431****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block for the office site\\"s Virtual Private Cloud (VPC). This parameter is required for standard office sites. The system automatically creates a VPC based on the specified IPv4 CIDR block. Use one of the following CIDR blocks or their subnets:
   * 
   * - `10.0.0.0/12` (The valid mask range is 12 to 24 bits.)
   * 
   * - `172.16.0.0/12` (The valid mask range is 12 to 24 bits.)
   * 
   * - `192.168.0.0/16` (The valid mask range is 16 to 24 bits.)
   * 
   * @example
   * 172.16.0.0/12
   */
  cidrBlock?: string;
  clientId?: string;
  clientSecret?: string;
  /**
   * @remarks
   * Specifies whether to create a Cloud Box office site.
   * 
   * @example
   * false
   */
  cloudBoxOfficeSite?: boolean;
  /**
   * @remarks
   * Specifies how clients can connect to cloud desktops.
   * 
   * > VPC connections rely on the Alibaba Cloud PrivateLink service, which is free of charge. If you set this parameter to `VPC` or `Any`, the system automatically enables the PrivateLink service.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  domainName?: string;
  eid?: string;
  /**
   * @remarks
   * Specifies whether to grant users local administrator privileges on their cloud desktops.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable internet access.
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
   * The name of the office site. The name must be 2 to 255 characters in length. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * TestOfficeSite_Simple
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to get a list of regions that support Elastic Desktop Service (ECD).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tenantId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required when you create a Cloud Box office site.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The verification code. If the CEN instance is owned by another Alibaba Cloud account, you must first call [SendVerifyCode](https://help.aliyun.com/document_detail/335132.html) to obtain a verification code.
   * 
   * @example
   * 123456
   */
  verifyCode?: string;
  /**
   * @remarks
   * The type of the office site.
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

