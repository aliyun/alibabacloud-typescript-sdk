// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateADConnectorOfficeSiteRequest extends $dara.Model {
  accessAttribute?: string;
  /**
   * @remarks
   * The domain controller hostname.
   * The hostname must comply with Windows hostname naming conventions.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
  /**
   * @remarks
   * The hostname of the backup domain controller.
   * 
   * @example
   * dc002
   */
  backupDCHostname?: string;
  /**
   * @remarks
   * The DNS address of the backup domain controller.
   * 
   * @example
   * 192.168.2.100
   */
  backupDns?: string;
  /**
   * @remarks
   * The peak public bandwidth, specified in Mbit/s. The value can range from 0 to 200.<br>
   * If you omit this parameter or set it to 0, internet access is disabled.<br>
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the Cloud Enterprise Network (CEN) instance.
   * 
   * - If you do not specify `CenId`, or the specified CEN instance belongs to your Alibaba Cloud account, you do not need to specify this parameter.
   * 
   * - If the specified CEN instance belongs to another Alibaba Cloud account, you must specify that account\\"s ID.
   * 
   * @example
   * 102681951715****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block for the office site\\"s VPC. The system uses this IPv4 CIDR block to automatically create a VPC. We recommend that you use one of the following CIDR blocks or their subnets:
   * 
   * - `10.0.0.0/12` (The subnet mask length must be 12 to 24 bits.)
   * 
   * - `172.16.0.0/12` (The subnet mask length must be 12 to 24 bits.)
   * 
   * - `192.168.0.0/16` (The subnet mask length must be 16 to 24 bits.)
   * 
   * @example
   * 47.100.XX.XX
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The method for connecting to cloud desktops.
   * 
   * > VPC connections are established using Alibaba Cloud PrivateLink, which is a free service. If you set this parameter to `VPC` or `Any`, PrivateLink is automatically enabled.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * An array that contains the IP address of the DNS server for the enterprise AD. You can specify only one IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The domain name for the enterprise AD. Each domain name must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain administrator\\"s password. The password cannot exceed 64 characters in length.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The domain administrator\\"s username. The username cannot exceed 64 characters in length.
   * 
   * > Use the sAMAccountName, not the userPrincipalName.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * Specifies whether to grant local administrator permissions to cloud desktop users. Default: true.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the `Bandwidth` parameter to manage internet access.
   * 
   * @example
   * true
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable multi-factor authentication (MFA).
   * 
   * @example
   * false
   */
  mfaEnabled?: boolean;
  /**
   * @remarks
   * The name of the office site. The name must be 2 to 255 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).<br>
   * This parameter is empty by default.<br>
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The AD Connector type.
   * 
   * @example
   * 1
   */
  specification?: number;
  /**
   * @remarks
   * The DNS address of the enterprise AD child domain. If you specify `SubDomainName` but not this parameter, the DNS address of the child domain is considered the same as that of the parent domain.
   * 
   * @example
   * 192.168.XX.XX
   */
  subDomainDnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD child domain.
   * 
   * @example
   * child.example.com
   */
  subDomainName?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The verification code. If the `CenId` that you specify belongs to another Alibaba Cloud account, you must first call the [SendVerifyCode](https://help.aliyun.com/document_detail/436847.html) operation to obtain the verification code.
   * 
   * @example
   * 12****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessAttribute: 'AccessAttribute',
      adHostname: 'AdHostname',
      backupDCHostname: 'BackupDCHostname',
      backupDns: 'BackupDns',
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      desktopAccessType: 'DesktopAccessType',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      mfaEnabled: 'MfaEnabled',
      officeSiteName: 'OfficeSiteName',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      specification: 'Specification',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      vSwitchId: 'VSwitchId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAttribute: 'string',
      adHostname: 'string',
      backupDCHostname: 'string',
      backupDns: 'string',
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      desktopAccessType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      mfaEnabled: 'boolean',
      officeSiteName: 'string',
      protocolType: 'string',
      regionId: 'string',
      specification: 'number',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      verifyCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsAddress)) {
      $dara.Model.validateArray(this.dnsAddress);
    }
    if(Array.isArray(this.subDomainDnsAddress)) {
      $dara.Model.validateArray(this.subDomainDnsAddress);
    }
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

