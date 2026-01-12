// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address of the AD connector.
   * 
   * @example
   * 172.24.*.*
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * The status of the AD connector.
   * 
   * Valid values:
   * 
   * *   CONNECT_ERROR
   * *   RUNNING
   * *   CONNECTING (You must configure the AD domain in which the AD connector is used.)
   * *   EXPIRED
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of an elastic network interface (ENI) to which the AD connector is mounted.
   * 
   * @example
   * eni-bp1i4wx78lgosrj6****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The AD connector type.
   * 
   * Valid values:
   * 
   * *   1: General
   * *   2: Advanced
   * 
   * @example
   * 1
   */
  specification?: string;
  /**
   * @remarks
   * The trust password that is specified when you configure the AD trust relationship.
   * 
   * @example
   * password123***
   */
  trustKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch that resides in the network of the AD connector.
   * 
   * @example
   * vsw-bp19ocz3erfx15uon****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesLogs extends $dara.Model {
  /**
   * @remarks
   * The log severity.
   * 
   * Valid values:
   * 
   * *   ERROR
   * *   INFO
   * *   WARN
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Details of the log entry.
   * 
   * @example
   * code:success | message:Create Connector complete
   */
  message?: string;
  /**
   * @remarks
   * The step in the log entry.
   * 
   * @example
   * CREATE_CONNECTOR
   */
  step?: string;
  /**
   * @remarks
   * The time when the log entry was printed.
   * 
   * @example
   * 2021-05-12T09:42Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts extends $dara.Model {
  /**
   * @remarks
   * The number of resources.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   desktop: the cloud computer.
   * *   DesktopGroup: the cloud computer share.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $dara.Model {
  /**
   * @remarks
   * Details of AD connectors.
   */
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1astu3yrplkzoo2****
   */
  acceleratorId?: string;
  accountType?: string;
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with the hostname naming convention of Windows.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
  authorityHost?: string;
  /**
   * @remarks
   * The hostname of the secondary domain controller.
   * 
   * @example
   * beijing-ad02
   */
  backupDCHostname?: string;
  /**
   * @remarks
   * The DNS address of the secondary domain controller.
   * 
   * @example
   * 172.24.XX.XX
   */
  backupDns?: string;
  /**
   * @remarks
   * The maximum public bandwidth value. Valid values: 0 to 1000.\\
   * If you leave this parameter empty or set this parameter to 0, Internet access is not enabled.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The CEN instance status.
   * 
   * @example
   * attached
   */
  cenAttachStatus?: string;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC that the office network uses.
   * 
   * @example
   * 172.16.0.0/16
   */
  cidrBlock?: string;
  clientId?: string;
  clientSecret?: string;
  /**
   * @remarks
   * Indicates whether the CloudBox-based office network is created.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  cloudBoxOfficeSite?: boolean;
  /**
   * @remarks
   * The time when the office network was created.
   * 
   * @example
   * 2021-05-06T05:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The custom endpoint of the access gateway.
   * 
   * @example
   * gw-****.com
   */
  customAccessPoint?: string;
  /**
   * @remarks
   * The custom DNS addresses.
   */
  customDnsAddress?: string[];
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1ce64o4g9mdf5u****
   */
  customSecurityGroupId?: string;
  /**
   * @remarks
   * The method that is used to connect cloud computers that reside in the office network from Alibaba Cloud Workspace clients.
   * 
   * >  The VPC connection depends on Alibaba Cloud PrivateLink. You can use Alibaba Cloud PrivateLink for free. When you set this parameter to `VPC` or `Any`, PrivateLink is automatically activated.
   * 
   * Valid values:
   * 
   * *   INTERNET (default): Cloud computers are connected from Alibaba Cloud Workspace clients over the Internet.
   * *   VPC: Cloud computers are connected from Alibaba Cloud Workspace clients over the VPC.
   * *   ANY: Cloud computers are connected from Alibaba Cloud Workspace clients over the Internet or the VPC. When end users connect to cloud computers from Alibaba Cloud Workspace clients, you can choose a connection method based on your business requirements.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The number of cloud computers that are created.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The endpoint that is used to connect to cloud computers in the directory over a VPC.
   * 
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @remarks
   * The DNS addresses for the AD domains.
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The username of a Domain Name System (DNS) user.
   * 
   * @example
   * testDnsUserName
   */
  dnsUserName?: string;
  /**
   * @remarks
   * The domain name of the enterprise AD.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the domain administrator.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  eid?: string;
  /**
   * @remarks
   * Indicates whether the local administrator permissions are granted to users that are authorized to use cloud computers in the office network.
   * 
   * Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the connection between cloud computers in the office network is enabled. After you enable the connection between cloud computers in the office network, cloud computers in the office network can access each other.
   * 
   * @example
   * false
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * Indicates whether route access control is enabled for cloud services.
   * 
   * @example
   * false
   */
  enableServiceRoute?: boolean;
  envType?: string;
  /**
   * @remarks
   * An array of File Storage NAS (NAS) file system IDs.
   */
  fileSystemIds?: string[];
  isLdap?: boolean;
  ldapUrl?: string;
  /**
   * @remarks
   * Details about registration logs.
   */
  logs?: DescribeOfficeSitesResponseBodyOfficeSitesLogs[];
  /**
   * @remarks
   * Indicates whether multi-factor authentication (MFA) is enabled.
   * 
   * @example
   * false
   */
  mfaEnabled?: boolean;
  /**
   * @remarks
   * The name of the office network. The name is unique in a region.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether two-factor verification is enabled when an end user logs on to an Alibaba Cloud Workspace client. This parameter is required only for convenience office networks. If two-factor verification is enabled, the system checks whether security risks exist within the logon account when a convenience user logs on to the client. If risks are detected, the system sends a verification code to the email address that is associated with the account. Then, the convenience user can log on to the client only after the user enters the correct verification code.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * Indicates whether the trusted device verification is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The premium bandwidth plan ID.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The network version. The new version supports App Streaming.
   * 
   * Valid values:
   * 
   * *   DEFAULT: the old version.
   * *   NM: the new version.
   * 
   * @example
   * NM
   */
  nmVersion?: string;
  /**
   * @remarks
   * The IDs of the office networks.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The account type of the office network.
   * 
   * Valid values:
   * 
   * *   SIMPLE: the convenience account
   * *   AD_CONNECTOR: the enterprise AD account
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The organizational unit (OU) in the AD domain to which the office network is connected.
   * 
   * @example
   * example.com/Domain Controllers
   */
  ouName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX
   * *   ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The IP address of the RDS license.
   * 
   * @example
   * 47.100.XX.XX
   */
  rdsLicenseAddress?: string;
  /**
   * @remarks
   * The domain name of the RDS license.
   * 
   * @example
   * test.com
   */
  rdsLicenseDomainName?: string;
  /**
   * @remarks
   * The remote desktop service (RDS) license status.
   * 
   * @example
   * 2
   */
  rdsLicenseStatus?: string;
  /**
   * @remarks
   * The number of resources.
   */
  resourceAmounts?: DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts[];
  /**
   * @remarks
   * The security protection setting of the office network.
   * 
   * Valid values:
   * 
   * *   SASE: SASE is configured.
   * *   OFF: No security protection setting is configured.
   * 
   * @example
   * SASE
   */
  securityProtection?: string;
  /**
   * @remarks
   * Indicates whether single sign-on (SSO) is enabled.
   * 
   * @example
   * false
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * The SSO type.
   * 
   * Valid values:
   * 
   * *   SAML.
   * 
   * @example
   * null
   */
  ssoType?: string;
  /**
   * @remarks
   * The office network status.
   * 
   * Valid values:
   * 
   * *   REGISTERING: The office network is being registered.
   * *   DEREGISTERING: The office network is being deregistered.
   * *   REGISTERED: The office network is registered.
   * *   NEEDCONFIGTRUST: A trust relationship is required for the office network.
   * *   CONFIGTRUSTFAILED: A trust relationship fails to be configured for the office network.
   * *   DEREGISTERED: The office network is deregistered.
   * *   ERROR: One or more configurations of the office network are invalid.
   * *   CONFIGTRUSTING: A trust relationship is being configured for the office network.
   * *   NEEDCONFIGUSER: Users are required for the office network.
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  /**
   * @remarks
   * The DNS addresses for the AD subdomains.
   */
  subDnsAddress?: string[];
  /**
   * @remarks
   * The username of enterprise AD subdomain.
   * 
   * @example
   * testSubDnsUserName
   */
  subDomainName?: string;
  /**
   * @remarks
   * The subnet mode of the office network.
   * 
   * Valid values:
   * 
   * *   0: disabled.
   * *   1: enabled.
   * 
   * @example
   * 0
   */
  subnetMode?: string;
  tenantId?: string;
  /**
   * @remarks
   * The total number of cloud computers.
   * 
   * @example
   * 0
   */
  totalEdsCount?: number;
  /**
   * @remarks
   * The number of cloud computers in the cloud computer share.
   * 
   * @example
   * 0
   */
  totalEdsCountForGroup?: number;
  /**
   * @remarks
   * The number of network interface controllers (NICs).
   * 
   * @example
   * 1
   */
  totalResourceAmount?: number;
  /**
   * @remarks
   * >  This parameter is unavailable.
   * 
   * @example
   * null
   */
  trustPassword?: string;
  /**
   * @remarks
   * An array of VSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6tz5k67puge5jn8****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type.
   * 
   * Valid values:
   * 
   * *   Basic
   * *   Customized
   * *   Standard
   * 
   * @example
   * Basic
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      acceleratorId: 'AcceleratorId',
      accountType: 'AccountType',
      adHostname: 'AdHostname',
      authorityHost: 'AuthorityHost',
      backupDCHostname: 'BackupDCHostname',
      backupDns: 'BackupDns',
      bandwidth: 'Bandwidth',
      cenAttachStatus: 'CenAttachStatus',
      cenId: 'CenId',
      cidrBlock: 'CidrBlock',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      creationTime: 'CreationTime',
      customAccessPoint: 'CustomAccessPoint',
      customDnsAddress: 'CustomDnsAddress',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopCount: 'DesktopCount',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      eid: 'Eid',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      enableServiceRoute: 'EnableServiceRoute',
      envType: 'EnvType',
      fileSystemIds: 'FileSystemIds',
      isLdap: 'IsLdap',
      ldapUrl: 'LdapUrl',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      networkPackageId: 'NetworkPackageId',
      nmVersion: 'NmVersion',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      ouName: 'OuName',
      protocolType: 'ProtocolType',
      rdsLicenseAddress: 'RdsLicenseAddress',
      rdsLicenseDomainName: 'RdsLicenseDomainName',
      rdsLicenseStatus: 'RdsLicenseStatus',
      resourceAmounts: 'ResourceAmounts',
      securityProtection: 'SecurityProtection',
      ssoEnabled: 'SsoEnabled',
      ssoType: 'SsoType',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      subnetMode: 'SubnetMode',
      tenantId: 'TenantId',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      totalResourceAmount: 'TotalResourceAmount',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesADConnectors },
      acceleratorId: 'string',
      accountType: 'string',
      adHostname: 'string',
      authorityHost: 'string',
      backupDCHostname: 'string',
      backupDns: 'string',
      bandwidth: 'number',
      cenAttachStatus: 'string',
      cenId: 'string',
      cidrBlock: 'string',
      clientId: 'string',
      clientSecret: 'string',
      cloudBoxOfficeSite: 'boolean',
      creationTime: 'string',
      customAccessPoint: 'string',
      customDnsAddress: { 'type': 'array', 'itemType': 'string' },
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopCount: 'number',
      desktopVpcEndpoint: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      eid: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      enableServiceRoute: 'boolean',
      envType: 'string',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      isLdap: 'boolean',
      ldapUrl: 'string',
      logs: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      networkPackageId: 'string',
      nmVersion: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      ouName: 'string',
      protocolType: 'string',
      rdsLicenseAddress: 'string',
      rdsLicenseDomainName: 'string',
      rdsLicenseStatus: 'string',
      resourceAmounts: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts },
      securityProtection: 'string',
      ssoEnabled: 'boolean',
      ssoType: 'string',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      subnetMode: 'string',
      tenantId: 'string',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      totalResourceAmount: 'number',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ADConnectors)) {
      $dara.Model.validateArray(this.ADConnectors);
    }
    if(Array.isArray(this.customDnsAddress)) {
      $dara.Model.validateArray(this.customDnsAddress);
    }
    if(Array.isArray(this.dnsAddress)) {
      $dara.Model.validateArray(this.dnsAddress);
    }
    if(Array.isArray(this.fileSystemIds)) {
      $dara.Model.validateArray(this.fileSystemIds);
    }
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    if(Array.isArray(this.resourceAmounts)) {
      $dara.Model.validateArray(this.resourceAmounts);
    }
    if(Array.isArray(this.subDnsAddress)) {
      $dara.Model.validateArray(this.subDnsAddress);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office networks.
   */
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

