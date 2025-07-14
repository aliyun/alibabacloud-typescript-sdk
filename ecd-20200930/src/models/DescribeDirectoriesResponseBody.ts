// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address.
   * 
   * @example
   * ``172.17.**.**``
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   CONNECT_ERROR
   * *   RUNNING
   * *   CONNECTING: You must configure domain trust for your AD system.
   * *   EXPIRED
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of the NIC to which the AD connector is mounted.
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
  specification?: string;
  /**
   * @remarks
   * The trust password of the AD domain controller.
   * 
   * @example
   * yfpoAD****
   */
  trustKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the AD connector is associated.
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

export class DescribeDirectoriesResponseBodyDirectoriesLogs extends $dara.Model {
  /**
   * @remarks
   * The level of the log entry.
   * 
   * Valid values:
   * 
   * *   ERROR
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   INFO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   WARN
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * code:success | message:Create Connector complete.
   */
  message?: string;
  /**
   * @remarks
   * The step that corresponds to the log entry.
   * 
   * @example
   * DescribeDirectories
   */
  step?: string;
  /**
   * @remarks
   * The time when the log entry was printed.
   * 
   * @example
   * 2021-01-22T06:45Z
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

export class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @remarks
   * Details of the AD connector.
   */
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  /**
   * @remarks
   * The hostname of the domain controller.
   * 
   * @example
   * dc001
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
   * The time when the directory was created.
   * 
   * @example
   * 2020-11-02T01:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The security group ID. This parameter is returned only when the directory type is AD office network.
   * 
   * @example
   * sg-bp1ce64o4g9mdf5u****
   */
  customSecurityGroupId?: string;
  /**
   * @remarks
   * The method in which the cloud computer is connected.
   * 
   * Valid values:
   * 
   * *   VPC
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Internet
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Any
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
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
   * The directory ID.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * Valid values:
   * 
   * *   AD_CONNECTOR: AD directory
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RAM: RAM directory
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * RAM
   */
  directoryType?: string;
  /**
   * @remarks
   * The DNS address of the directory.
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The username of a DNS user.
   * 
   * @example
   * testDnsUserName
   */
  dnsUserName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator. This parameter is returned only when the directory type is AD office network.
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
   * sAMAccountName
   */
  domainUserName?: string;
  /**
   * @remarks
   * Indicates whether the local administrator permissions are granted to users that use cloud computers in the office network.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Indicates whether cloud computers can communicate with each other in the directory.
   * 
   * @example
   * true
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * Indicates whether access over the Internet is enabled.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * The IDs of File Storage NAS (NAS) file systems.
   */
  fileSystemIds?: string[];
  /**
   * @remarks
   * The registration logs. This parameter is returned only when the directory type is AD office network.
   */
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
  /**
   * @remarks
   * Indicates whether MFA is enabled.
   * 
   * @example
   * false
   */
  mfaEnabled?: boolean;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * testDirectoryName
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether two-step verification for logons is enabled. This parameter is returned only for directories of convenience account type.\\
   * If two-factor verification is enabled, the system checks whether security risks exist within the logon account when a convenience user logs on to an Alibaba Cloud Workspace client. If risks are detected, the system sends a verification code to the email address that is associated with the account. Then, the convenience user can log on to the client only after the user enters the correct verification code.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * The organization unit that you selected when you added the cloud computer to the domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  ouName?: string;
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
   * The status of the AD directory.
   * 
   * Valid values:
   * 
   * *   REGISTERING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REGISTERED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * REGISTERING
   */
  status?: string;
  /**
   * @remarks
   * The DNS address of the enterprise AD subdomain.
   */
  subDnsAddress?: string[];
  /**
   * @remarks
   * The fully qualified domain name (FQDN) of the existing AD subdomain. The value contains both the host name and the domain name.
   * 
   * @example
   * child.example.com
   */
  subDomainName?: string;
  /**
   * @remarks
   * The AD trust password. This parameter is returned only when the directory type is AD office network.
   * 
   * @example
   * 82Tg****
   */
  trustPassword?: string;
  /**
   * @remarks
   * The IDs of the vSwitches specified when the directory was created.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs. This parameter is returned only when the directory type is AD office network.
   * 
   * @example
   * vpc-uf6tz5k67puge5jn8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      adHostname: 'AdHostname',
      backupDCHostname: 'BackupDCHostname',
      backupDns: 'BackupDns',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      fileSystemIds: 'FileSystemIds',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      ouName: 'OuName',
      ssoEnabled: 'SsoEnabled',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      adHostname: 'string',
      backupDCHostname: 'string',
      backupDns: 'string',
      creationTime: 'string',
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      directoryId: 'string',
      directoryType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      ouName: 'string',
      ssoEnabled: 'boolean',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ADConnectors)) {
      $dara.Model.validateArray(this.ADConnectors);
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

export class DescribeDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with the hostname naming convention of Windows. This parameter is returned only when the directory type is AD office network.
   * 
   * @example
   * cnshsv21hmc****
   */
  adHostname?: string;
  /**
   * @remarks
   * The directories.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F369A091-002F-49C8-AD55-02A776297C7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

