// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesResponseBodyDataBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image has security alerts. Valid values:
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
   * FC2U0JVHWS49S2OT
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * guokent
   */
  appName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * @example
   * 1
   */
  assetType?: string;
  /**
   * @remarks
   * The name of the asset type.
   * 
   * @example
   * xxxxxx
   */
  assetTypeName?: string;
  /**
   * @remarks
   * The timestamp when the asset was bound for authorization. Unit: milliseconds.
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
   * 5
   */
  authVersion?: number;
  /**
   * @remarks
   * The authorization version name of the asset. Valid values:
   * 
   * @example
   * Free Edition.
   */
  authVersionName?: string;
  /**
   * @remarks
   * Indicates whether the asset is bound with authorization. Valid values:
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * Indicates whether web tamper-proofing authorization is bound. Valid values:
   * 
   * @example
   * none
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
   * The ID of the cluster where the resource group resides.
   * 
   * @example
   * cb703cb0ba6bd40d4a6d8de5bff050fb9
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * auto-cn-heyuan
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of CPU cores of the asset.
   * 
   * @example
   * 9
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
   * @example
   * 0
   */
  exposedStatus?: number;
  /**
   * @remarks
   * The asset vendor. Separate multiple asset vendors with commas (,). Valid values:
   * 
   * @example
   * 0,1,2
   */
  flag?: number;
  /**
   * @remarks
   * The vendor of the asset. Valid values:
   * 
   * @example
   * ALIYUN
   */
  flagName?: string;
  /**
   * @remarks
   * The ID of the group to which the instance belongs.
   * 
   * @example
   * 86d30f8b0e124aadb7ef3197f9dbd1f5
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
   * ls-cn-tl32rf**008
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ra-supabase-22u1iv3hr**5v9
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the associated instance.
   * 
   * @example
   * 47.1**.52.125
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the current server.
   * 
   * @example
   * 172.16.1**.245
   */
  intranetIp?: string;
  /**
   * @remarks
   * The management IP address.
   * 
   * @example
   * 114.55.*4.*6
   */
  ip?: string;
  /**
   * @remarks
   * The list of IP addresses of the system.
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
   * The total memory. Unit: MB.
   * 
   * @example
   * 1024
   */
  mem?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * slsshpcorlsmetrics
   */
  namespace?: string;
  /**
   * @remarks
   * The operating system of the instance. Valid values:
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The kernel version of the instance.
   * 
   * @example
   * AliOS7U2-x86-64
   */
  osName?: string;
  /**
   * @remarks
   * The number of pods.
   * 
   * @example
   * 8
   */
  podCount?: number;
  /**
   * @remarks
   * The billing method of the protection edition bound to the current asset. Valid values:
   * 
   * @example
   * 1
   */
  postPaidFlag?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhouxxxx
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the asset resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * cn-shanghai
   */
  regionName?: string;
  /**
   * @remarks
   * The statistics of risk items on the asset. The value is in JSON format and contains the following fields:
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
   * Indicates whether risks exist. Valid values:
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
  safeEventCount?: string;
  /**
   * @remarks
   * The service ID. This parameter has a value only when the instance is a serverless instance that belongs to the PAI platform.
   * 
   * @example
   * dsw-76jlywunsif09bp15p
   */
  serviceId?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
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
   * pre_20250714_idpt_adjust
   */
  tag?: string;
  /**
   * @remarks
   * The tag ID of the asset.
   * 
   * @example
   * d8586ab8be4549e3815995858d277763
   */
  tagId?: string;
  /**
   * @remarks
   * The custom tags of the Lingjun node. This parameter is returned only when the machine is a Lingjun machine.
   * 
   * @example
   * app:test,type:lingjun
   */
  tagResources?: string;
  /**
   * @remarks
   * The UUID of the terminal device.
   * 
   * @example
   * 1f0459ee-ed49-6484-8958-4f10f61e6362
   */
  uuid?: string;
  /**
   * @remarks
   * The vendor of the asset. Valid values:
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
   * vpc-2zek7v0z4r6lbp02xckei
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
      mem: 'string',
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
      safeEventCount: 'string',
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

export class DescribeCloudCenterInstancesResponseBodyDataBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 7
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query.
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
   * m1NGAAAAAABzLzIwMjQwMg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 0
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

export class DescribeCloudCenterInstancesResponseBodyDataBody extends $dara.Model {
  /**
   * @remarks
   * The list of asset details.
   */
  instances?: DescribeCloudCenterInstancesResponseBodyDataBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudCenterInstancesResponseBodyDataBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 20EBDE7B-AA36-5D60-9DCA-151C48EDB9F8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      instances: { 'type': 'array', 'itemType': DescribeCloudCenterInstancesResponseBodyDataBodyInstances },
      pageInfo: DescribeCloudCenterInstancesResponseBodyDataBodyPageInfo,
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

export class DescribeCloudCenterInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The string of the message body content encoded by using the Base64 algorithm.
   */
  body?: DescribeCloudCenterInstancesResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DescribeCloudCenterInstancesResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of instance details.
   */
  data?: DescribeCloudCenterInstancesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 1B4C9A14-94E6-5EEB-BF39-7DACCE9AC0D6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudCenterInstancesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

