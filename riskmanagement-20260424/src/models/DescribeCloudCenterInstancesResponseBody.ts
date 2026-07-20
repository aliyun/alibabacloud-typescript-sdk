// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesResponseBodyDataBodyInstances extends $dara.Model {
  /**
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @example
   * FC2U0JVHWS49S2OT
   */
  appId?: string;
  /**
   * @example
   * guokent
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  assetType?: string;
  /**
   * @example
   * xxxxxx
   */
  assetTypeName?: string;
  /**
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @example
   * 5
   */
  authVersion?: number;
  /**
   * @example
   * 免费版
   */
  authVersionName?: string;
  /**
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @example
   * none
   */
  bindFileProtectType?: string;
  /**
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @example
   * online
   */
  clientSubStatus?: string;
  /**
   * @example
   * cb703cb0ba6bd40d4a6d8de5bff050fb9
   */
  clusterId?: string;
  /**
   * @example
   * auto-cn-heyuan
   */
  clusterName?: string;
  /**
   * @example
   * 9
   */
  cores?: number;
  /**
   * @example
   * Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
   */
  cpuInfo?: string;
  /**
   * @example
   * 1607365213000
   */
  createdTime?: number;
  /**
   * @example
   * 0
   */
  exposedStatus?: number;
  /**
   * @example
   * 0,1,2
   */
  flag?: number;
  /**
   * @example
   * ALIYUN
   */
  flagName?: string;
  /**
   * @example
   * 86d30f8b0e124aadb7ef3197f9dbd1f5
   */
  groupId?: number;
  /**
   * @example
   * default
   */
  groupTrace?: string;
  /**
   * @example
   * YES
   */
  hasContainer?: string;
  /**
   * @example
   * YES
   */
  hcStatus?: string;
  /**
   * @example
   * 1
   */
  healthCheckCount?: number;
  /**
   * @example
   * 2
   */
  importance?: number;
  /**
   * @example
   * ls-cn-tl32rf**008
   */
  instanceId?: string;
  /**
   * @example
   * ra-supabase-22u1iv3hr**5v9
   */
  instanceName?: string;
  /**
   * @example
   * 47.1**.52.125
   */
  internetIp?: string;
  /**
   * @example
   * 172.16.1**.245
   */
  intranetIp?: string;
  /**
   * @example
   * 114.55.*4.*6
   */
  ip?: string;
  /**
   * @example
   * 172.31.XX.XX,172.171.XX.XX
   */
  ipListString?: string;
  /**
   * @example
   * 3.10.0-1127.19.1.el7.x86_64
   */
  kernel?: string;
  /**
   * @example
   * 1637592907000
   */
  lastLoginTimestamp?: number;
  /**
   * @example
   * 00:13:3e:31:13:39,02:12:67:b8:**:**
   */
  macListString?: string;
  /**
   * @example
   * 1024
   */
  mem?: string;
  /**
   * @example
   * slsshpcorlsmetrics
   */
  namespace?: string;
  /**
   * @example
   * linux
   */
  os?: string;
  /**
   * @example
   * AliOS7U2-x86-64
   */
  osName?: string;
  /**
   * @example
   * 8
   */
  podCount?: number;
  /**
   * @example
   * 1
   */
  postPaidFlag?: number;
  /**
   * @example
   * cn-hangzhouxxxx
   */
  region?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionName?: string;
  /**
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
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @example
   * 5
   */
  safeEventCount?: string;
  /**
   * @example
   * dsw-76jlywunsif09bp15p
   */
  serviceId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * pre_20250714_idpt_adjust
   */
  tag?: string;
  /**
   * @example
   * d8586ab8be4549e3815995858d277763
   */
  tagId?: string;
  /**
   * @example
   * app:test,type:lingjun
   */
  tagResources?: string;
  /**
   * @example
   * 1f0459ee-ed49-6484-8958-4f10f61e6362
   */
  uuid?: string;
  /**
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @example
   * IDC
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
   * @example
   * vpc-2zek7v0z4r6lbp02xckei
   */
  vpcInstanceId?: string;
  /**
   * @example
   * 2
   */
  vulCount?: number;
  /**
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
   * @example
   * 7
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * m1NGAAAAAABzLzIwMjQwMg==
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  instances?: DescribeCloudCenterInstancesResponseBodyDataBodyInstances[];
  pageInfo?: DescribeCloudCenterInstancesResponseBodyDataBodyPageInfo;
  /**
   * @example
   * 20EBDE7B-AA36-5D60-9DCA-151C48EDB9F8
   */
  requestId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCloudCenterInstancesResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1B4C9A14-94E6-5EEB-BF39-7DACCE9AC0D6
   */
  requestId?: string;
  /**
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

