// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimpleOfficeSiteRequest extends $dara.Model {
  accountType?: string;
  authorityHost?: string;
  /**
   * @remarks
   * The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set `EnableInternetAccess` to `true`.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * >  If you want end users to connect to cloud computers from Alibaba Cloud Workspace clients over VPCs, you can attach the office network to a CEN instance. The CEN instance is the one that connects to your on-premises network over VPN Gateway or Express Connect.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
   * 
   * - If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
   * - If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
   * 
   * @example
   * 118272523431****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block that you want the office network to use in the virtual private cloud (VPC) of the office network. The system automatically creates a VPC for the office network based on the IPv4 CIDR block. We recommend that you set this parameter to one of the following CIDR blocks and their subnets:
   * 
   * *   `10.0.0.0/12` (subnet mask range: 12 to 14 bits)
   * *   `172.16.0.0/12` (subnet mask range: 12 to 24 bits)
   * *   `192.168.0.0/16` (subnet mask range: 16 to 24 bits)
   * 
   * @example
   * 172.16.0.0/12
   */
  cidrBlock?: string;
  clientId?: string;
  clientSecret?: string;
  /**
   * @remarks
   * Specifies whether to create a CloudBox-based office network.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  cloudBoxOfficeSite?: boolean;
  /**
   * @remarks
   * The method to connect to cloud computers from Alibaba Cloud Workspace clients.
   * 
   * >  The VPC connection depends on Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.````
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  domainName?: string;
  eid?: string;
  /**
   * @remarks
   * Specifies whether to grant the local administrator permissions to users that are authorized to use cloud computers in the office network.
   * 
   * Valid values:
   * 
   * * true (default)
   * * false
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Internet access.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false (default)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * The office network name. The name must be 2 to 255 characters in length. It can contain digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestOfficeSite_Simple
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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
   * The IDs of the vSwitches that you want to specify in VPCs. This parameter is required only when you create CloudBox-based office networks.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the [SendVerifyCode](https://help.aliyun.com/document_detail/335132.html) operation to obtain the verification code.
   * 
   * @example
   * 123456
   */
  verifyCode?: string;
  /**
   * @remarks
   * The network type of the office network.
   * 
   * Valid values:
   * 
   * *   standard: advanced
   * *   basic: basic
   * 
   * @example
   * standard
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
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

