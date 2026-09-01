// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether security alerts exist on the asset. Valid values:
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * test
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * testAppName
   */
  appName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The type name of the asset.
   * 
   * @example
   * Elastic Compute Service
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The timestamp when the authorization was bound to the asset. Unit: milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * 
   * @example
   * 1
   */
  authVersion?: number;
  /**
   * @remarks
   * The authorization version name of the asset. Valid values:
   * 
   * @example
   * Ultimate Edition
   */
  authVersionName?: string;
  /**
   * @remarks
   * Indicates whether the asset is bound to an authorization. Valid values:
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * Indicates whether the tamper-proofing authorization is bound. Valid values:
   * 
   * @example
   * block
   */
  bindFileProtectType?: string;
  /**
   * @remarks
   * The online status of the client on the instance. Valid values:
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The sub-status of the client on the instance. Valid values:
   * 
   * @example
   * online
   */
  clientSubStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c690a0789419f4284a4e0a29e12fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cluster1
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of CPU cores of the asset.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The CPU information of the asset.
   * 
   * @example
   * Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
   */
  cpuInfo?: string;
  /**
   * @remarks
   * The timestamp when the cluster was created. Unit: milliseconds.
   * 
   * @example
   * 1607365213000
   */
  createdTime?: number;
  edrAuthVersion?: string;
  /**
   * @remarks
   * The exposure status of the asset. Valid values:
   * 
   * @example
   * 0
   */
  exposedStatus?: number;
  /**
   * @remarks
   * Indicates whether the instance is an Alibaba Cloud asset. Valid values:
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * @example
   * ASK
   */
  flagName?: string;
  freeType?: string;
  /**
   * @remarks
   * The ID of the group to which the instance belongs.
   * 
   * @example
   * 4120080
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the group to which the asset belongs.
   * 
   * @example
   * default
   */
  groupTrace?: string;
  /**
   * @remarks
   * Indicates whether the asset contains containers. Valid values:
   * 
   * @example
   * YES
   */
  hasContainer?: string;
  /**
   * @remarks
   * Indicates whether baseline risks are detected on the instance. Valid values:
   * - **YES**: Baseline risks are detected.
   * - **NO**: No baseline risks are detected.
   * 
   * @example
   * YES
   */
  hcStatus?: string;
  /**
   * @remarks
   * The number of baseline risks on the instance.
   * 
   * @example
   * 1
   */
  healthCheckCount?: number;
  /**
   * @remarks
   * The importance of the asset. Valid values:
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-m5***
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address list of the system.
   * 
   * @example
   * 172.31.XX.XX,172.171.XX.XX
   */
  ipListString?: string;
  /**
   * @remarks
   * The kernel version information.
   * 
   * @example
   * 3.10.0-1127.19.1.el7.x86_64
   */
  kernel?: string;
  /**
   * @remarks
   * The timestamp when the client last went online. Unit: milliseconds.
   * 
   * @example
   * 1637592907000
   */
  lastLoginTimestamp?: number;
  /**
   * @remarks
   * The MAC address of the system.
   * 
   * @example
   * 00:13:3e:31:13:39,02:12:67:b8:**:**
   */
  macListString?: string;
  /**
   * @remarks
   * The memory size, in MB.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * crm-test
   */
  namespace?: string;
  /**
   * @remarks
   * The operating system of the instance.
   * 
   * @example
   * Linux
   */
  os?: string;
  /**
   * @remarks
   * The kernel version of the instance.
   * 
   * @example
   * -
   */
  osName?: string;
  /**
   * @remarks
   * The number of pod groups.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The billing method of the protection edition bound to the current asset. Valid values:
   * 
   * @example
   * 0
   */
  postPaidFlag?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou-cm***-***
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name of the asset.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * Statistics on risk items of the asset. The value is in JSON format and contains the following fields:
   * 
   * - **account**: The number of accounts with unusual logons and successful brute-force attacks.
   * - **appNum**: The number of scanner vulnerabilities.
   * - **asapVulCount**: The total number of high-priority vulnerabilities.
   * - **baselineHigh**: The number of high-risk baseline risks.
   * - **baselineLow**: The number of low-risk baseline risks.
   * - **baselineMedium**: The number of medium-risk baseline risks.
   * - **baselineNum**: The total number of cloud product configuration risks.
   * - **cmsNum**: The number of Web-CMS vulnerabilities.
   * - **containerAsap**: The number of high-priority container vulnerabilities.
   * - **containerLater**: The number of medium-priority container vulnerabilities.
   * - **containerNntf**: The number of low-priority container vulnerabilities.
   * - **containerRemind**: The number of container reminder alerts.
   * - **containerSerious**: The number of container critical alerts.
   * - **containerSuspicious**: The number of container suspicious alerts.
   * - **cveNum**: The number of Linux vulnerabilities.
   * - **emgNum**: The number of emergency vulnerabilities.
   * - **health**: The number of unhandled baseline alerts.
   * - **imageBaselineHigh**: The number of high-risk image baseline risks.
   * - **imageBaselineLow**: The number of low-risk image baseline risks.
   * - **imageBaselineMedium**: The number of medium-risk image baseline risks.
   * - **imageBaselineNum**: The total number of image baseline risks.
   * - **imageMaliciousFileRemind**: The number of image reminder-level malicious files.
   * - **imageMaliciousFileSerious**: The number of image critical-level malicious files.
   * - **imageMaliciousFileSuspicious**: The number of image suspicious-level malicious files.
   * - **imageVulAsap**: The number of high-priority image vulnerabilities.
   * - **imageVulLater**: The number of medium-priority image vulnerabilities.
   * - **imageVulNntf**: The number of low-priority image vulnerabilities.
   * - **laterVulCount**: The number of medium-priority vulnerabilities.
   * - **newSuspicious**: The number of alerts.
   * - **nntfVulCount**: The number of low-priority vulnerabilities.
   * - **remindNum**: The number of reminder alerts.
   * - **scaNum**: The number of software composition analysis vulnerabilities.
   * - **seriousNum**: The number of critical alerts.
   * - **suspNum**: The number of suspicious alerts.
   * - **suspicious**: The total number of alerts.
   * - **sysNum**: The number of Windows vulnerabilities.
   * - **trojan**: The number of trojans.
   * - **uuid**: The UUID of the asset.
   * - **vul**: The number of vulnerabilities.
   * - **weakPWNum**: The number of weak passwords.
   * 
   * @example
   * {
   *       "account": 0,
   *       "appNum": 0,
   *       "asapVulCount": 0,
   *       "baselineHigh": 0,
   *       "baselineLow": 0,
   *       "baselineMedium": 0,
   *       "baselineNum": 0,
   *       "cmsNum": 0,
   *       "containerAsap": 0,
   *       "containerLater": 0,
   *       "containerNntf": 0,
   *       "containerRemind": 0,
   *       "containerSerious": 0,
   *       "containerSuspicious": 0,
   *       "cveNum": 0,
   *       "emgNum": 0,
   *       "health": 0,
   *       "imageBaselineHigh": 0,
   *       "imageBaselineLow": 0,
   *       "imageBaselineMedium": 0,
   *       "imageBaselineNum": 0,
   *       "imageMaliciousFileRemind": 0,
   *       "imageMaliciousFileSerious": 0,
   *       "imageMaliciousFileSuspicious": 0,
   *       "imageVulAsap": 0,
   *       "imageVulLater": 0,
   *       "imageVulNntf": 0,
   *       "laterVulCount": 0,
   *       "newSuspicious": 0,
   *       "nntfVulCount": 0,
   *       "remindNum": 0,
   *       "scaNum": 0,
   *       "seriousNum": 0,
   *       "suspNum": 0,
   *       "suspicious": 0,
   *       "sysNum": 0,
   *       "trojan": 0,
   *       "uuid": "inet-37316411-37fe-4b72-b245-346a2721****",
   *       "vul": 0,
   *       "weakPWNum": 0
   * }
   */
  riskCount?: string;
  /**
   * @remarks
   * Indicates whether the asset has security risks. Valid values:
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The number of security alerts on the asset.
   * 
   * @example
   * 5
   */
  safeEventCount?: number;
  /**
   * @remarks
   * The service ID. This field has a value only when the instance is a serverless instance that belongs to the PAI platform.
   * 
   * @example
   * dsw-76jlywunsif09bp15p
   */
  serviceId?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * 
   * - **Running**: Running.
   * - **notRunning**: Stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tag name of the asset instance.
   * 
   * @example
   * InternetIp,test
   */
  tag?: string;
  /**
   * @remarks
   * The tag ID of the asset.
   * 
   * @example
   * 121313,41412
   */
  tagId?: string;
  /**
   * @remarks
   * The custom tags of the Lingjun node. This field is returned only when the machine is a Lingjun machine.
   * 
   * @example
   * app:test,type:lingjun
   */
  tagResources?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * c9107c04-942f-40c1-981a-f1c1***
   */
  uuid?: string;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset.
   * - **1**: Non-cloud asset.
   * - **2**: IDC asset.
   * - **3**, **4**, **5**, **7**, **14**, **16**: Third-party cloud asset.
   * - **8**: Lightweight asset.
   * - **9**: SAE.
   * - **10**: PAI.
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The service provider name of the asset.
   * 
   * @example
   * IDC
   */
  vendorName?: string;
  /**
   * @remarks
   * The account ID of the multi-cloud instance.
   * 
   * @example
   * 123
   */
  vendorUid?: string;
  /**
   * @remarks
   * The account name of the multi-cloud instance.
   * 
   * @example
   * VendorUserName
   */
  vendorUserName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-uf60agqq65bs98zoo****
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The number of vulnerabilities on the instance.
   * 
   * @example
   * 2
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities exist on the instance. Valid values:
   * 
   * @example
   * YES
   */
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      appId: 'AppId',
      appName: 'AppName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      authModifyTime: 'AuthModifyTime',
      authVersion: 'AuthVersion',
      authVersionName: 'AuthVersionName',
      bind: 'Bind',
      bindFileProtectType: 'BindFileProtectType',
      clientStatus: 'ClientStatus',
      clientSubStatus: 'ClientSubStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cores: 'Cores',
      cpuInfo: 'CpuInfo',
      createdTime: 'CreatedTime',
      edrAuthVersion: 'EdrAuthVersion',
      exposedStatus: 'ExposedStatus',
      flag: 'Flag',
      flagName: 'FlagName',
      freeType: 'FreeType',
      groupId: 'GroupId',
      groupTrace: 'GroupTrace',
      hasContainer: 'HasContainer',
      hcStatus: 'HcStatus',
      healthCheckCount: 'HealthCheckCount',
      importance: 'Importance',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      ipListString: 'IpListString',
      kernel: 'Kernel',
      lastLoginTimestamp: 'LastLoginTimestamp',
      macListString: 'MacListString',
      mem: 'Mem',
      namespace: 'Namespace',
      os: 'Os',
      osName: 'OsName',
      podCount: 'PodCount',
      postPaidFlag: 'PostPaidFlag',
      region: 'Region',
      regionId: 'RegionId',
      regionName: 'RegionName',
      riskCount: 'RiskCount',
      riskStatus: 'RiskStatus',
      safeEventCount: 'SafeEventCount',
      serviceId: 'ServiceId',
      status: 'Status',
      tag: 'Tag',
      tagId: 'TagId',
      tagResources: 'TagResources',
      uuid: 'Uuid',
      vendor: 'Vendor',
      vendorName: 'VendorName',
      vendorUid: 'VendorUid',
      vendorUserName: 'VendorUserName',
      vpcInstanceId: 'VpcInstanceId',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      appId: 'string',
      appName: 'string',
      assetType: 'string',
      assetTypeName: 'string',
      authModifyTime: 'number',
      authVersion: 'number',
      authVersionName: 'string',
      bind: 'boolean',
      bindFileProtectType: 'string',
      clientStatus: 'string',
      clientSubStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cores: 'number',
      cpuInfo: 'string',
      createdTime: 'number',
      edrAuthVersion: 'string',
      exposedStatus: 'number',
      flag: 'number',
      flagName: 'string',
      freeType: 'string',
      groupId: 'number',
      groupTrace: 'string',
      hasContainer: 'string',
      hcStatus: 'string',
      healthCheckCount: 'number',
      importance: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      ipListString: 'string',
      kernel: 'string',
      lastLoginTimestamp: 'number',
      macListString: 'string',
      mem: 'number',
      namespace: 'string',
      os: 'string',
      osName: 'string',
      podCount: 'number',
      postPaidFlag: 'number',
      region: 'string',
      regionId: 'string',
      regionName: 'string',
      riskCount: 'string',
      riskStatus: 'string',
      safeEventCount: 'number',
      serviceId: 'string',
      status: 'string',
      tag: 'string',
      tagId: 'string',
      tagResources: 'string',
      uuid: 'string',
      vendor: 'number',
      vendorName: 'string',
      vendorUid: 'string',
      vendorUserName: 'string',
      vpcInstanceId: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of assets displayed on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The value of NextToken returned when the NextToken-based pagination method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of assets displayed per page in a paging query. Default value: **20**, which indicates that 20 asset records are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of assets returned by the query.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of asset details.
   */
  instances?: DescribeCloudCenterInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudCenterInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 32A73759-4C0F-4801-BE98-901223ACEE9A
   */
  requestId?: string;
  /**
   * @remarks
   * The result status of the API call. Valid values:
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeCloudCenterInstancesResponseBodyInstances },
      pageInfo: DescribeCloudCenterInstancesResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

