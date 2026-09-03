// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * 172.17.XX.XX
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC) attached to the AD connector.
   * 
   * @example
   * eni-bp1i4wx78lgosrj6****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The AD connector specification.
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
   * The ID of the vSwitch where the AD connector resides.
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
   * The time when the log was printed. The time is in the ISO 8601 standard (UTC).
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
   * The information about AD connectors.
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
   * The time when the directory was created. The time is in the ISO 8601 standard (UTC).
   * 
   * @example
   * 2020-11-02T01:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The security group ID. This parameter is returned only when the directory type is AD workspace.
   * 
   * @example
   * sg-bp1ce64o4g9mdf5u****
   */
  customSecurityGroupId?: string;
  /**
   * @remarks
   * The method allowed for connecting to cloud computers. Valid values:
   * 
   * - VPC: VPC connection.
   * - Internet: Internet connection.
   * - Any: Both Internet and VPC connections.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The endpoint used for connecting to cloud computers over a VPC.
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
   * @example
   * RAM
   */
  directoryType?: string;
  /**
   * @remarks
   * The DNS addresses of the directory.
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
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator. This parameter is returned only when the directory type is AD workspace.
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
   * Indicates whether local administrator permissions are granted to cloud computer users.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the cross-cloud-computer access feature is enabled for the directory. After this feature is enabled, cloud computers within the same directory can access each other over the network.
   * 
   * @example
   * true
   */
  enableCrossDesktopAccess?: boolean;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.    
   * 
   * > This parameter is not yet available for use.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * The NAS file system IDs.
   */
  fileSystemIds?: string[];
  /**
   * @remarks
   * The list of registration log information. This parameter is returned only when the directory type is AD workspace.
   */
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
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
   * The directory name.
   * 
   * @example
   * testDirectoryName
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether secondary authentication is required for logon. This parameter applies only to convenience directories. If secondary authentication is enabled, the system checks for security risks when a convenience user logs on to the client. If a risk is detected, the system sends a verification code to the email address associated with the account. The convenience user can log on to the client only after passing the verification.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * The organizational unit (OU) selected when cloud computers join the domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  ouName?: string;
  /**
   * @remarks
   * Indicates whether SSO is enabled.
   * 
   * @example
   * false
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * The status of the AD directory.
   * 
   * @example
   * REGISTERING
   */
  status?: string;
  /**
   * @remarks
   * The DNS addresses of the AD subdomain.
   */
  subDnsAddress?: string[];
  /**
   * @remarks
   * The fully qualified domain name (FQDN) of the existing AD subdomain, which includes both the hostname and the domain name.
   * 
   * @example
   * child.example.com
   */
  subDomainName?: string;
  /**
   * @remarks
   * The AD trust password. This parameter is returned only when the directory type is AD workspace.
   * 
   * @example
   * 82Tg****
   */
  trustPassword?: string;
  /**
   * @remarks
   * The vSwitch IDs specified when the directory was created.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs. This parameter is returned only when the directory type is AD workspace.
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
   * The hostname of the domain controller. The hostname must comply with Windows hostname naming conventions. This parameter is returned only when the directory type is AD workspace.
   * 
   * @example
   * cnshsv21hmc****
   */
  adHostname?: string;
  /**
   * @remarks
   * The list of directory information.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

