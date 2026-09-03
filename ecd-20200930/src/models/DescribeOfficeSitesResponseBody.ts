// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the AD Connector.
   * 
   * @example
   * 172.24.*.*
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * The status of the AD Connector.
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC) attached to the AD Connector.
   * 
   * @example
   * eni-bp1i4wx78lgosrj6****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The specification of the AD Connector.
   * 
   * @example
   * 1
   */
  specification?: string;
  /**
   * @remarks
   * The trust password configured when setting up the AD trust relationship.
   * 
   * @example
   * password123***
   */
  trustKey?: string;
  /**
   * @remarks
   * The vSwitch ID of the network where the AD Connector resides.
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
   * The detailed log information.
   * 
   * @example
   * code:success | message:Create Connector complete
   */
  message?: string;
  /**
   * @remarks
   * The step that corresponds to the log entry.
   * 
   * @example
   * CREATE_CONNECTOR
   */
  step?: string;
  /**
   * @remarks
   * The time when the log was printed. The time is in the ISO 8601 standard (UTC).
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
   * The resource count.
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
   * The collection of AD Connector information.
   */
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  /**
   * @remarks
   * The Alibaba Cloud Global Accelerator (GA) instance ID.
   * 
   * @example
   * ga-bp1astu3yrplkzoo2****
   */
  acceleratorId?: string;
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
   * The hostname of the domain controller. The hostname must comply with Windows hostname naming conventions.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
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
   * The peak Internet bandwidth. Valid values: 0 to 1000. Unit: Mbit/s.    
   * If the value is empty or 0, Internet access is not enabled.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The basic bandwidth type.
   * 
   * @example
   * basic_plus
   */
  basicInternetType?: string;
  /**
   * @remarks
   * The status of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * attached
   */
  cenAttachStatus?: string;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the office network VPC.
   * 
   * @example
   * 47.100.XX.XX
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
   * Indicates whether the office network is a CloudBox office network.
   * 
   * @example
   * true
   */
  cloudBoxOfficeSite?: boolean;
  /**
   * @remarks
   * The time when the office network was created. The time is in the ISO 8601 standard (UTC).
   * 
   * @example
   * 2021-05-06T05:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The custom access gateway address.
   * 
   * @example
   * gw-****.com
   */
  customAccessPoint?: string;
  /**
   * @remarks
   * The array of custom DNS addresses.
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
   * The access method allowed when connecting to cloud computers.
   * 
   * > The VPC connection method depends on the Alibaba Cloud PrivateLink service, which is free of charge. When this parameter is set to `VPC` or `Any`, the system automatically activates the PrivateLink service for you.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The number of cloud computers that have been created.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The endpoint used for VPC connections to cloud computers.
   * 
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @remarks
   * The array of DNS addresses corresponding to the AD domain.
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
   * Indicates whether local administrator permissions are granted to users of cloud computers.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Indicates whether cross-cloud computer access within the office network is enabled. If enabled, cloud computers within the same office network can access each other over the network.
   * 
   * @example
   * false
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the public network access feature is enabled.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * Indicates whether cloud service route access control is enabled.
   * 
   * @example
   * false
   */
  enableServiceRoute?: boolean;
  /**
   * @remarks
   * The environment type. This parameter is not publicly available.
   * 
   * @example
   * Private
   */
  envType?: string;
  /**
   * @remarks
   * The array of NAS file system IDs.
   */
  fileSystemIds?: string[];
  /**
   * @remarks
   * Indicates whether the directory is an LDAP directory.
   */
  isLdap?: boolean;
  /**
   * @remarks
   * The access URL of the LDAP service.
   * 
   * @example
   * ldap://192.168.0.10:389
   */
  ldapUrl?: string;
  /**
   * @remarks
   * The registration log information.
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
   * The name of the office network. The name is unique within a region.
   * 
   * @example
   * R&D_Office_Network
   */
  name?: string;
  /**
   * @remarks
   * Applicable only to convenience account office networks. Indicates whether secondary authentication is required during logon. If logon secondary authentication is enabled, the system checks whether the logon account has security risks when a convenience user logs on to the client. If a risk is detected, the system sends a verification code to the email address associated with the account. The convenience user can log on to the client only after passing the verification code check.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * Indicates whether trusted device verification is enabled.
   * 
   * @example
   * true
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The Internet access package ID.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The network version. The new version supports products such as WUYING Cloud Application.
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
   * The account system type of the office network.
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The organizational unit (OU) in the AD domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  ouName?: string;
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
   * The IP address of the RDS license.
   * 
   * @example
   * 47.100.XX.XX
   */
  rdsLicenseAddress?: string;
  /**
   * @remarks
   * The domain name where the RDS license resides.
   * 
   * @example
   * example.com
   */
  rdsLicenseDomainName?: string;
  /**
   * @remarks
   * The status of the RDS license.
   * 
   * @example
   * 2
   */
  rdsLicenseStatus?: string;
  /**
   * @remarks
   * The resource count list.
   */
  resourceAmounts?: DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts[];
  /**
   * @remarks
   * The Network Security Protection Settings of the office network.
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
   * The array of DNS addresses of the AD subdomain.
   */
  subDnsAddress?: string[];
  /**
   * @remarks
   * The username of the AD subdomain DNS.
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
   * The number of cloud computers.
   * 
   * @example
   * 0
   */
  totalEdsCount?: number;
  /**
   * @remarks
   * The number of cloud computers in shared cloud computer groups.
   * 
   * @example
   * 0
   */
  totalEdsCountForGroup?: number;
  /**
   * @remarks
   * The total number of network interface controllers (NICs).
   * 
   * @example
   * 1
   */
  totalResourceAmount?: number;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * To be hidden.
   */
  trustPassword?: string;
  /**
   * @remarks
   * The array of vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID of the secure office network.
   * 
   * @example
   * vpc-uf6tz5k67puge5jn8****
   */
  vpcId?: string;
  /**
   * @remarks
   * The usage mode of the VPC.
   * 
   * @example
   * Basic
   */
  vpcType?: string;
  /**
   * @remarks
   * The version of the workspace network component (VPL).
   * 
   * @example
   * 2.0.0
   */
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
      basicInternetType: 'BasicInternetType',
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
      basicInternetType: 'string',
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
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The collection of office network information.
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
   * The total number of query results.
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

