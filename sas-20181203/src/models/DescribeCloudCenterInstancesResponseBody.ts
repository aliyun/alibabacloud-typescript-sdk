// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether security alerts exist on the asset. Valid values:
   * - **YES**: Security alerts exist.
   * - **NO**: No security alerts exist.
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The application ID.
   * > This parameter is returned only when **Vendor** is set to 9.
   * 
   * @example
   * test
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * > This parameter is returned only when **Vendor** is set to 9.
   * 
   * @example
   * testAppName
   */
  appName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **0**: ECS instance
   * - **1**: SLB instance
   * - **2**: NAT gateway
   * - **3**: ApsaraDB RDS instance
   * - **4**: ApsaraDB for MongoDB instance
   * - **5**: ApsaraDB for Redis instance
   * - **6**: container image
   * - **7**: container
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
   * The timestamp when the asset authorization was bound. Unit: milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * <props="china">
   * - **1**: Free Edition
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * 
   * 
   * <props="intl">
   * - **1**: Free Edition
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * 
   * @example
   * 1
   */
  authVersion?: number;
  /**
   * @remarks
   * The name of the authorization version of the asset. Valid values:
   * 
   * - Free Edition
   * - Anti-virus Edition
   * - Advanced Edition
   * - Enterprise Edition
   * - Ultimate Edition
   * 
   * @example
   * Ultimate Edition
   */
  authVersionName?: string;
  /**
   * @remarks
   * Indicates whether the asset is bound to an authorization. Valid values:
   * 
   * - **true**: The asset is bound to an authorization.
   * - **false**: The asset is not bound to an authorization.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * Indicates whether tamper-proof authorization is bound to the asset. Valid values:
   * 
   * - **block**: Tamper-proof authorization is bound.
   * - **none**: Tamper-proof authorization is not bound.
   * 
   * @example
   * block
   */
  bindFileProtectType?: string;
  /**
   * @remarks
   * The online status of the client on the instance. Valid values:
   * 
   * - **online**: online. The Agent client on the asset is **enabled**.
   * - **offline**: offline. The Agent client on the asset is **disabled**.
   * - **pause**: paused. The Agent client on the asset is in **paused protection** status.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The sub-status of the client on the instance. Valid values:
   * 
   * - **online**: online. The Agent client on the asset is **enabled**.
   * - **offline**: offline. The Agent client on the asset is **disabled**.
   * - **pause**: paused. The Agent client on the asset is in **paused protection** status.
   * - **uninstalled**: not installed. The Agent client is **not installed** on the asset.
   * - **stopped**: The server is shut down.
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
  /**
   * @remarks
   * The exposure status of the asset. Valid values:
   * 
   * - **0**: not exposed
   * - **1**: exposed
   * 
   * @example
   * 0
   */
  exposedStatus?: number;
  /**
   * @remarks
   * Indicates whether the instance is an Alibaba Cloud asset. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-Alibaba Cloud asset
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * - **ALIYUN**
   * - **OUT**
   * - **IDC**
   * - **Tencent**
   * - **HUAWEICLOUD**
   * - **Azure**
   * - **AWS**
   * - **ASK**
   * - **TRIPARTITE**
   * - **SAE**
   * - **PAI**
   * - **google**
   * - **VOLCENGINE**
   * 
   * @example
   * ASK
   */
  flagName?: string;
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
   * - **YES**: The asset contains containers.
   * - **NO**: The asset does not contain containers.
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
   * The importance level of the asset. Valid values:
   * - **2**: important asset
   * - **1**: normal asset
   * - **0**: test asset
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
   * The kernel version.
   * 
   * @example
   * 3.10.0-1127.19.1.el7.x86_64
   */
  kernel?: string;
  /**
   * @remarks
   * The timestamp when the client was last online. Unit: milliseconds.
   * 
   * @example
   * 1637592907000
   */
  lastLoginTimestamp?: number;
  /**
   * @remarks
   * The MAC addresses of the system.
   * 
   * @example
   * 00:13:3e:31:13:39,02:12:67:b8:**:**
   */
  macListString?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
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
   * The operating system version of the instance.
   * 
   * @example
   * -
   */
  osName?: string;
  /**
   * @remarks
   * The number of pods.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The billing method of the protection plan bound to the asset. Valid values:
   * - **0**: subscription
   * - **1**: pay-as-you-go
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
   * The ID of the region where the asset resides.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The statistics of risk items on the asset. The value is in JSON format and contains the following fields:
   * 
   * - **account**: the number of accounts with remote logons and successful brute-force attacks
   * - **appNum**: the number of scanner vulnerabilities
   * - **asapVulCount**: the total number of high-severity vulnerabilities
   * - **baselineHigh**: the number of high-risk baseline risks
   * - **baselineLow**: the number of low-risk baseline risks
   * - **baselineMedium**: the number of medium-risk baseline risks
   * - **baselineNum**: the total number of cloud product configuration risks
   * - **cmsNum**: the number of Web-CMS vulnerabilities
   * - **containerAsap**: the number of high-severity container vulnerabilities
   * - **containerLater**: the number of medium-severity container vulnerabilities
   * - **containerNntf**: the number of low-severity container vulnerabilities
   * - **containerRemind**: the number of reminder-level container alerts
   * - **containerSerious**: the number of urgent container alerts
   * - **containerSuspicious**: the number of suspicious container alerts
   * - **cveNum**: the number of Linux vulnerabilities
   * - **emgNum**: the number of emergency vulnerabilities
   * - **health**: the number of unhandled baseline alerts
   * - **imageBaselineHigh**: the number of high-risk image baseline risks
   * - **imageBaselineLow**: the number of low-risk image baseline risks
   * - **imageBaselineMedium**: the number of medium-risk image baseline risks
   * - **imageBaselineNum**: the total number of image baseline risks
   * - **imageMaliciousFileRemind**: the number of reminder-level malicious image files
   * - **imageMaliciousFileSerious**: the number of urgent malicious image files
   * - **imageMaliciousFileSuspicious**: the number of suspicious malicious image files
   * - **imageVulAsap**: the number of high-severity image vulnerabilities
   * - **imageVulLater**: the number of medium-severity image vulnerabilities
   * - **imageVulNntf**: the number of low-severity image vulnerabilities
   * - **laterVulCount**: the number of medium-severity vulnerabilities
   * - **newSuspicious**: the number of alerts
   * - **nntfVulCount**: the number of low-severity vulnerabilities
   * - **remindNum**: the number of reminder-level alerts
   * - **scaNum**: the number of software composition analysis vulnerabilities
   * - **seriousNum**: the number of urgent alerts
   * - **suspNum**: the number of suspicious alerts
   * - **suspicious**: the total number of alerts
   * - **sysNum**: the number of Windows vulnerabilities
   * - **trojan**: the number of trojans
   * - **uuid**: the UUID of the asset
   * - **vul**: the number of vulnerabilities
   * - **weakPWNum**: the number of weak passwords
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
   * Indicates whether security risks exist on the asset. Valid values:
   * - **YES**: Security risks exist.
   * - **NO**: No security risks exist.
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
   * The service ID. This parameter has a value only when the instance is a Serverless instance and belongs to the PAI platform.
   * 
   * @example
   * dsw-76jlywunsif09bp15p
   */
  serviceId?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * 
   * - **Running**: The instance is running.
   * - **notRunning**: The instance is stopped.
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
   * The custom tags of Lingjun nodes. This parameter is returned only when the machine is a Lingjun machine.
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
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**, **14**, **16**: third-party cloud asset
   * - **8**: lightweight asset
   * - **9**: SAE
   * - **10**: PAI
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The name of the asset vendor.
   * 
   * Valid values:
   * - **ALIYUN**: Alibaba Cloud
   * - **OUT**: non-cloud asset
   * - **IDC**: IDC
   * - **TENCENT**: third-party cloud
   * - **HUAWEICLOUD**: third-party cloud
   * - **Microsoft**: third-party cloud
   * - **AWS**: third-party cloud
   * - **TRIPARTITE**: lightweight server
   * - **SAE**: SAE
   * - **PAI**: PAI
   * - **VOLCENGINE**: third-party cloud
   * - **google**: third-party cloud
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
   * - **YES**: Vulnerabilities exist.
   * - **NO**: No vulnerabilities exist.
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
      exposedStatus: 'ExposedStatus',
      flag: 'Flag',
      flagName: 'FlagName',
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
      exposedStatus: 'number',
      flag: 'number',
      flagName: 'string',
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
   * The page number of the current page in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **20**, which indicates that 20 entries of asset information are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of assets returned.
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
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 32A73759-4C0F-4801-BE98-901223ACEE9A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
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

