// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateADConnectorOfficeSiteRequest extends $dara.Model {
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
   * The hostname of the domain controller. The hostname must comply with Windows hostname naming conventions.
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
   * The peak Internet bandwidth, in Mbit/s. Valid values: 0 to 200.    
   * If you do not set this parameter or set it to 0, the Internet access feature is not enabled. Settings take effect immediately.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the Cloud Enterprise Network (CEN) instance owner.
   * 
   * - If CenId is not specified, or the specified CenId belongs to the current Alibaba Cloud account, you do not need to specify this parameter.
   * - If the specified CenId belongs to another Alibaba Cloud account, specify the Alibaba Cloud account ID of that account.
   * 
   * @example
   * 102681951715****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block of the office network VPC. The system uses automatic creation to provision a VPC based on the specified IPv4 CIDR block. Use one of the following CIDR blocks or their subnets as the IPv4 CIDR block:
   * 
   * - `10.0.0.0/12` (valid mask range: 12 to 24 bits)
   * - `172.16.0.0/12` (valid mask range: 12 to 24 bits)
   * - `192.168.0.0/16` (valid mask range: 16 to 24 bits)
   * 
   * @example
   * 47.100.XX.XX
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The access method allowed when connecting to cloud computers.
   * 
   * > The VPC connection method depends on the Alibaba Cloud PrivateLink service, which is free of charge. If this parameter is set to `VPC` or `Any`, the system automatically activates the PrivateLink service for you.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The IP address of the DNS server corresponding to the enterprise AD. Currently, only one IP address is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD. The same domain name can be registered only once.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator. The password can be up to 64 characters in length.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the domain administrator. The username can be up to 64 characters in length.
   * 
   * > Use the sAMAccountName format for the username. Do not use the userPrincipalName format.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * Specifies whether to grant local administrator permissions to users who use cloud computers.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether public network access is enabled. This parameter indicates whether the feature is active.
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
   * The name of the office network. The name must be 2 to 255 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter or Chinese character and cannot start with `http://` or `https://`.    
   * Default value: null.
   * 
   * @example
   * RD_Office_Network
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
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The AD Connector specification.
   * 
   * @example
   * 1
   */
  specification?: number;
  /**
   * @remarks
   * The DNS address of the enterprise AD subdomain. If `SubDomainName` is specified but this parameter is not, the subdomain DNS is considered the same as the parent domain DNS.
   * 
   * @example
   * 192.168.XX.XX
   */
  subDomainDnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD subdomain.
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
   * The verification code. If the specified CenId belongs to another Alibaba Cloud account, you must first call [SendVerifyCode](https://help.aliyun.com/document_detail/436847.html) to obtain the verification code.
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

