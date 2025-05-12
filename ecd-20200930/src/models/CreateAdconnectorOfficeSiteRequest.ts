// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateADConnectorOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with the naming conventions for Windows hosts.
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
   * The maximum public bandwidth of the Internet access package. Valid values: 0 to 200.\\
   * If you do not specify this parameter or you set this parameter to 0, Internet access is disabled.
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
   * The Alibaba Cloud account that creates the Cloud Enterprise Network (CEN) instance.
   * 
   * *   If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
   * *   If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
   * 
   * @example
   * 102681951715****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block of the virtual private cloud (VPC) that your office network uses. The system creates a VPC for your office network based on the IPv4 CIDR block. We recommend that you set this parameter to one of the following CIDR blocks and their subnets:
   * 
   * *   `10.0.0.0/12` (subnet mask range: 12 to 24 bits)
   * *   `172.16.0.0/12` (subnet mask range: 12 to 24 bits)
   * *   `192.168.0.0/16` (subnet mask range: 16 to 24 bits)
   * 
   * @example
   * 47.100.XX.XX
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The method to connect to cloud computers from Alibaba Cloud Workspace clients.
   * 
   * >  The VPC connection depends on Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to `VPC` or `Any`, PrivateLink is automatically activated.
   * 
   * Valid values:
   * 
   * - Internet: connects clients to cloud desktops only over the Internet. [Default]
   * - VPC: connects clients to cloud desktops only over a VPC.
   * - Any: connects clients to cloud desktops over the Internet or a VPC. You can select a connection method based on your business requirements when you connect to your cloud desktop from a client.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The IP address of the DNS server of the enterprise AD system. You can specify only one IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD system. You can register each domain name only once.
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
   * > Specify the username by using sAMAccountName instead of userPrincipalName.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * Specifies whether to grant the local administrator permissions to users that are authorized to use cloud computers in the office network.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     true
   * 
   *     <!-- -->
   * 
   *     (default)
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Internet access.
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
   * The office network name. The name must be 2 to 255 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.\\
   * This parameter is empty by default.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid value:
   * 
   * *   Adaptive Streaming Protocol (ASP)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ASP
   */
  protocolType?: string;
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
  /**
   * @remarks
   * The AD connector type.
   * 
   * Valid values:
   * 
   * *   1: General
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   2: Advanced
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 1
   */
  specification?: number;
  /**
   * @remarks
   * The DNS address of the enterprise AD subdomain. If you specify `SubDomainName` but do not specify this parameter, the DNS address of the subdomain is the same as the DNS address of the parent domain.
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
   * The array of the vSwitch IDs.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the [SendVerifyCode](https://help.aliyun.com/document_detail/436847.html) operation to obtain the verification code.
   * 
   * @example
   * 12****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
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

