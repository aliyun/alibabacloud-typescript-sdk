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
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) to which the AD connector is attached.
   * 
   * @example
   * eni-bp1i4wx78lgosrj6****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The specification of the AD connector.
   * 
   * @example
   * 1
   */
  specification?: string;
  /**
   * @remarks
   * The trust password that is configured when you set up an AD trust relationship.
   * 
   * @example
   * password123***
   */
  trustKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch that corresponds to the network of the AD connector.
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
   * The log level.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The log message.
   * 
   * @example
   * code:success | message:Create Connector complete
   */
  message?: string;
  /**
   * @remarks
   * The registration step.
   * 
   * @example
   * CREATE_CONNECTOR
   */
  step?: string;
  /**
   * @remarks
   * The timestamp of the log entry.
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
   * The number of resources of this type.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The resource type.
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
   * A list of AD connectors.
   */
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  /**
   * @remarks
   * The ID of the Global Accelerator (GA) instance.
   * 
   * @example
   * ga-bp1astu3yrplkzoo2****
   */
  acceleratorId?: string;
  accessAttribute?: string;
  accountType?: string;
  /**
   * @remarks
   * The hostname of the domain controller.
   * The hostname must comply with the Windows hostname naming conventions.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
  authorityHost?: string;
  /**
   * @remarks
   * The hostname of the backup domain controller.
   * 
   * @example
   * beijing-ad02
   */
  backupDCHostname?: string;
  /**
   * @remarks
   * The DNS address of the backup domain controller.
   * 
   * @example
   * 172.24.XX.XX
   */
  backupDns?: string;
  /**
   * @remarks
   * The peak public bandwidth, in Mbit/s. Valid values: 0 to 1000. <br>A value of 0 indicates that internet access is disabled.<br>
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The attachment status of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * attached
   */
  cenAttachStatus?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the office network\\"s Virtual Private Cloud (VPC).
   * 
   * @example
   * 47.100.XX.XX
   */
  cidrBlock?: string;
  clientId?: string;
  clientSecret?: string;
  /**
   * @remarks
   * Specifies whether the office network is a CloudBox-based office network.
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
   * The address of the custom access gateway.
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
   * The security group ID.
   * 
   * @example
   * sg-bp1ce64o4g9mdf5u****
   */
  customSecurityGroupId?: string;
  /**
   * @remarks
   * The method for connecting to cloud computers from an Elastic Desktop Service client.
   * 
   * > Connections over a VPC use Alibaba Cloud PrivateLink, which is provided free of charge. The PrivateLink service is enabled when this parameter is returned as `VPC` or `Any`.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The number of individually provisioned cloud computers.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The endpoint used to connect to cloud computers over a VPC.
   * 
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @remarks
   * The DNS addresses of the AD domain.
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The DNS username.
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
   * Specifies whether to grant local administrator permissions to users of cloud computers in the office network.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether cloud computers in the office network can access each other.
   * 
   * @example
   * false
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * Indicates whether internet access is enabled.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable access control for cloud service routing.
   * 
   * @example
   * false
   */
  enableServiceRoute?: boolean;
  envType?: string;
  /**
   * @remarks
   * The IDs of Apsara File Storage for NAS file systems.
   */
  fileSystemIds?: string[];
  isLdap?: boolean;
  ldapUrl?: string;
  /**
   * @remarks
   * The registration logs.
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
   * The name of the office network. The name must be unique within the same region.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether risk-based verification is enabled for user logon. This feature applies only to office networks that use convenience accounts. If enabled, the system checks for security risks during logon. If a risk is detected, the user must enter a verification code sent to their email address to complete the logon process.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
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
   * The ID of the premium bandwidth plan.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The network version. The new version supports products such as App Streaming.
   * 
   * @example
   * NM
   */
  nmVersion?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The account type of the office network.
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The organizational unit (OU) in the Active Directory (AD) domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  ouName?: string;
  /**
   * @remarks
   * The streaming protocol.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The IP address of the RDS license server.
   * 
   * @example
   * 47.100.XX.XX
   */
  rdsLicenseAddress?: string;
  /**
   * @remarks
   * The domain name of the RDS license server.
   * 
   * @example
   * example.com
   */
  rdsLicenseDomainName?: string;
  /**
   * @remarks
   * The status of the Remote Desktop Services (RDS) license.
   * 
   * @example
   * 2
   */
  rdsLicenseStatus?: string;
  /**
   * @remarks
   * A list of resource quantities.
   */
  resourceAmounts?: DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts[];
  /**
   * @remarks
   * The security protection configuration for the office network.
   * 
   * @example
   * SASE
   */
  securityProtection?: string;
  /**
   * @remarks
   * Specifies whether to enable single sign-on (SSO).
   * 
   * @example
   * false
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * The single sign-on (SSO) type.
   * 
   * @example
   * SAML
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the office network.
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  /**
   * @remarks
   * The DNS addresses of the AD subdomains.
   */
  subDnsAddress?: string[];
  /**
   * @remarks
   * The name of the Active Directory (AD) subdomain.
   * 
   * @example
   * testSubDnsUserName
   */
  subDomainName?: string;
  /**
   * @remarks
   * The subnet mode of the office network.
   * 
   * @example
   * 0
   */
  subnetMode?: string;
  tenantId?: string;
  /**
   * @remarks
   * The total number of cloud computers in the office network, including individual and shared computers.
   * 
   * @example
   * 0
   */
  totalEdsCount?: number;
  /**
   * @remarks
   * The number of shared cloud computers.
   * 
   * @example
   * 0
   */
  totalEdsCountForGroup?: number;
  /**
   * @remarks
   * The total number of resources, including cloud computers and shared cloud computers.
   * 
   * @example
   * 1
   */
  totalResourceAmount?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * To be hidden.
   */
  trustPassword?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the office network\\"s Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-uf6tz5k67puge5jn8****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type.
   * 
   * @example
   * Basic
   */
  vpcType?: string;
  vplVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      acceleratorId: 'AcceleratorId',
      accessAttribute: 'AccessAttribute',
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
      vplVersion: 'VplVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesADConnectors },
      acceleratorId: 'string',
      accessAttribute: 'string',
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
      vplVersion: 'string',
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
   * The token used to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of office networks.
   */
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  /**
   * @remarks
   * The request ID.
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

