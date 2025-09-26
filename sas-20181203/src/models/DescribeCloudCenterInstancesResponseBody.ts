// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alerts are generated on the asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * >  This parameter is available only when the **Vendor** parameter is set to 9.
   * 
   * @example
   * test
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * >  This parameter is available only when the **Vendor** parameter is set to 9.
   * 
   * @example
   * testAppName
   */
  appName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **0**: an ECS instance
   * *   **1**: a Server Load Balancer (SLB) instance
   * *   **2**: a Network Address Translation (NAT) gateway
   * *   **3**: an ApsaraDB RDS instance
   * *   **4**: an ApsaraDB for MongoDB instance
   * *   **5**: an ApsaraDB for Redis instance
   * *   **6**: a container image
   * *   **7**: a container
   * 
   * @example
   * ecs
   */
  assetType?: string;
  /**
   * @remarks
   * The name of the asset type.
   * 
   * @example
   * Elastic Compute Service
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The timestamp when Security Center is authorized to scan the asset.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The edition of Security Center that is authorized to scan the asset. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **6**: Anti-virus edition
   * *   **5**: Advanced edition
   * *   **3**: Enterprise edition
   * *   **7**: Ultimate edition
   * *   **10**: Value-added Plan edition
   * 
   * @example
   * 3
   */
  authVersion?: number;
  /**
   * @remarks
   * The name of the Security Center edition that is authorized to protect the asset. Valid values:
   * 
   * *   Basic edition
   * *   Anti-virus edition
   * *   Advanced edition
   * *   Enterprise edition
   * *   Ultimate edition
   * 
   * @example
   * Ultimate Edition
   */
  authVersionName?: string;
  /**
   * @remarks
   * Indicates whether Security Center is authorized to scan the asset. Valid values:
   * 
   * *   **true**: Security Center is authorized to scan the asset.
   * *   **false**: Security Center is not authorized to scan the asset.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the Security Center agent installed on the asset. Valid values:
   * 
   * *   **online**: The Security Center agent is **enabled**.
   * *   **offline**: The Security Center agent is **disabled**.
   * *   **pause**: The Security Center agent is **suspended**.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The sub-status of the Security Center agent installed on the asset. Valid values:
   * 
   * *   **online**: The Security Center agent is **enabled**.
   * *   **offline**: The Security Center agent is **disabled**.
   * *   **pause**: The Security Center agent is **suspended**.
   * *   **uninstalled**: The Security Center agent is **uninstalled**.
   * *   **stopped**: The Security Center agent is **stopped**.
   * 
   * @example
   * online
   */
  clientSubStatus?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c690a0789419f4284a4e0a29e12fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster1
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of the CPU cores used by the asset.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The CPU information about the asset.
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
   * Indicates whether the asset is exposed. Valid values:
   * 
   * *   **0**: The asset is not exposed.
   * *   **1**: The asset is exposed.
   * 
   * @example
   * 0
   */
  exposedStatus?: number;
  /**
   * @remarks
   * Indicates whether the asset is an Alibaba Cloud asset. Valid values:
   * 
   * *   **0**: The asset is an Alibaba Cloud asset.
   * *   **1**: The asset is not an Alibaba Cloud asset.
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * Asset vendor. Values: 
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
   * The ID of the asset group to which the asset belongs.
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
   * Indicates if containers are included. Valid values:
   * 
   * *   **YES**: yes.
   * *   **NO**: no.
   * 
   * @example
   * YES
   */
  hasContainer?: string;
  /**
   * @remarks
   * Indicates whether baseline risks are detected on the asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * YES
   */
  hcStatus?: string;
  /**
   * @remarks
   * The number of baseline risks that are detected on the asset.
   * 
   * @example
   * 1
   */
  healthCheckCount?: number;
  /**
   * @remarks
   * The importance of the asset. Valid values:
   * 
   * *   **2**: an important asset
   * *   **1**: a common asset
   * *   **0**: a test asset
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * i-m5***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP addresses of the system.
   * 
   * @example
   * 172.31.XX.XX,172.171.XX.XX
   */
  ipListString?: string;
  /**
   * @remarks
   * The version of the kernel.
   * 
   * @example
   * 3.10.0-1127.19.1.el7.x86_64
   */
  kernel?: string;
  /**
   * @remarks
   * The timestamp when the Security Center agent was last online. Unit: milliseconds.
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
   * The size of the memory. Unit: MB.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * The operating system of the asset.
   * 
   * @example
   * Linux
   */
  os?: string;
  /**
   * @remarks
   * The kernel version of the asset.
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
   * The billing method of the protection version currently bound to the asset. Values: - **0**: Subscription - **1**: Pay-as-you-go
   * 
   * @example
   * 0
   */
  postPaidFlag?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou-cm***-***
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region in which the asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The total number of baseline risks that are detected on the asset. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **account**: the number of accounts that are used to log on from unapproved logon locations and whose passwords are cracked
   * *   **appNum**: the number of scanners
   * *   **asapVulCount**: the total number of high-severity vulnerabilities
   * *   **baselineHigh**: the number of high-risk baseline risks
   * *   **baselineLow**: the number of low-risk baseline risks
   * *   **baselineMedium**: the number of medium-risk baseline risks
   * *   **baselineNum**: the total number of baseline risks
   * *   **cmsNum**: the number of Web-CMS vulnerabilities
   * *   **containerAsap**: the number of high-severity vulnerabilities that are detected on containers
   * *   **containerLater**: the number of medium-severity vulnerabilities that are detected on containers
   * *   **containerNntf**: the number of low-severity vulnerabilities that are detected on containers
   * *   **containerRemind**: the number of alerts whose Emergency level is Reminder on containers
   * *   **containerSerious**: the number of alerts Emergency level is Urgent on containers
   * *   **containerSuspicious**: the number of alerts whose Emergency level is Suspicious on containers
   * *   **cveNum**: the number of Linux software vulnerabilities
   * *   **emgNum**: the number of urgent vulnerabilities
   * *   **health**: the number of baseline alerts that are unhandled
   * *   **imageBaselineHigh**: the number of high-risk baseline risks that are detected on images
   * *   **imageBaselineLow**: the number of low-risk baseline risks that are detected on images
   * *   **imageBaselineMedium**: the number of medium-risk baseline risks that are detected on images
   * *   **imageBaselineNum**: the total number of baseline risks that are detected on images
   * *   **imageMaliciousFileRemind**: the number of malicious files that are detected on images and have the Emergency level of Reminder
   * *   **imageMaliciousFileSerious**: the number of malicious files that are detected on images and have the Emergency level of Urgent
   * *   **imageMaliciousFileSuspicious**: the number of malicious files that are detected on images and have the Emergency level of Suspicious
   * *   **imageVulAsap**: the number of high-severity vulnerabilities that are detected on images
   * *   **imageVulLater**: the number of medium-severity vulnerabilities that are detected on an image
   * *   **imageVulNntf**: the number of low-severity vulnerabilities that are detected on an image
   * *   **laterVulCount**: the number of medium-severity vulnerabilities
   * *   **newSuspicious**: the number of alerts
   * *   **nntfVulCount**: the number of low-severity vulnerabilities.
   * *   **remindNum**: the number of alerts whose Emergency level is Reminder
   * *   **scaNum**: the number of vulnerabilities that are detected based on software component analysis
   * *   **seriousNum**: the number of alerts whose Emergency level is Urgent
   * *   **suspNum**: the number of alerts whose Emergency level is Suspicious
   * *   **suspicious**: the total number of alerts
   * *   **sysNum**: the number of Windows system vulnerabilities
   * *   **trojan**: the number of trojans
   * *   **uuid**: the UUIDs of assets
   * *   **vul**: the number of vulnerabilities
   * *   **weakPWNum**: the number of weak passwords
   * 
   * @example
   * {"account":0,"appNum":0,"asapVulCount":0,"baselineHigh":0,"baselineLow":0,"baselineMedium":0,"baselineNum":0,"cmsNum":0,"containerAsap":0,"containerLater":0,"containerNntf":0,"containerRemind":0,"containerSerious":0,"containerSuspicious":0,"cveNum":0,"emgNum":0,"health":0,"imageBaselineHigh":0,"imageBaselineLow":0,"imageBaselineMedium":0,"imageBaselineNum":0,"imageMaliciousFileRemind":0,"imageMaliciousFileSerious":0,"imageMaliciousFileSuspicious":0,"imageVulAsap":0,"imageVulLater":0,"imageVulNntf":0,"laterVulCount":0,"newSuspicious":0,"nntfVulCount":0,"remindNum":0,"scaNum":0,"seriousNum":0,"suspNum":0,"suspicious":0,"sysNum":0,"trojan":0,"uuid":"inet-37316411-37fe-4b72-b245-346a2721d4b6","vul":0,"weakPWNum":0}
   */
  riskCount?: string;
  /**
   * @remarks
   * Indicates whether risks are detected on the asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The number of alerts that are generated on the asset.
   * 
   * @example
   * 5
   */
  safeEventCount?: number;
  /**
   * @remarks
   * Service ID. Only available for PAI instances.
   * 
   * @example
   * dsw-76jlywunsif09bp15p
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the asset. Valid values:
   * 
   * *   **Running**: running
   * *   **notRunning**: stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The name of the asset tag.
   * 
   * @example
   * InternetIp,test
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the asset tag.
   * 
   * @example
   * 121313,41412
   */
  tagId?: string;
  /**
   * @remarks
   * The custom tag added to the Lingjun node. This parameter is returned only for LINGJUN GPU-accelerated instances.
   * 
   * @example
   * app:test,type:lingjun
   */
  tagResources?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * c9107c04-942f-40c1-981a-f1c1***
   */
  uuid?: string;
  /**
   * @remarks
   * Asset vendor. Values:
   * - **0**: an asset provided by Alibaba Cloud
   * - **1**: an asset outside Alibaba Cloud
   * - **2**: an asset in a data center
   * - **3**, **4**, **5**, **7**, **14**, **16**: an asset from a third-party cloud service provider
   * - **8**: a lightweight asset
   * - **9**: a Serverless App Engine (SAE) instance
   * - **10**: an instance in Platform for AI (PAI)
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The name of the service provider for the asset.
   * Values:
   *  - **ALIYUN**: Alibaba Cloud 
   * - **OUT**: a third-party service provider
   * - **IDC**: an asset in a data center
   * - **TENCENT**: Tencent Cloud
   * - **HUAWEICLOUD**: Huawei Cloud
   * - **Microsoft**: Microsoft Azure
   * - **AWS**: Amazon Web Services (AWS)
   * - **TRIPARTITE**: a lightweight server
   * - **SAE**: a Serverless App Engine (SAE) instance
   * - **PAI**: an instance in Platform for AI (PAI)
   * - **VOLCENGINE**: VOLCENGINE Cloud
   * - **google**: GOOGLE Cloud
   * 
   * @example
   * Tencent
   */
  vendorName?: string;
  /**
   * @example
   * 123
   */
  vendorUid?: string;
  /**
   * @example
   * VendorUserName
   */
  vendorUserName?: string;
  /**
   * @remarks
   * The ID of the VPC to which the asset belongs.
   * 
   * @example
   * vpc-uf60agqq65bs98zoo****
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The number of vulnerabilities that are detected on the asset.
   * 
   * @example
   * 2
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities are detected on the asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The value of NextToken that is returned when the NextToken method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The details about the assets.
   */
  instances?: DescribeCloudCenterInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudCenterInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 32A73759-4C0F-4801-BE98-901223ACEE9A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
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

