// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoListPodsList extends $dara.Model {
  podId?: string;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      podId: 'podId',
      podName: 'podName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podId: 'string',
      podName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList extends $dara.Model {
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * @example
   * standalone
   */
  componentType?: string;
  /**
   * @remarks
   * The number of compute units (CUs).
   * 
   * @example
   * 8
   */
  cuNum?: number;
  /**
   * @remarks
   * The CU specifications. Valid values:
   * 
   * @example
   * 4
   */
  cuRatio?: number;
  /**
   * @remarks
   * The disk size.
   * 
   * @example
   * 100
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * essd
   */
  diskType?: string;
  payType?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
  replica?: number;
  zoneId?: string;
  /**
   * @example
   * true
   */
  dataDiskEnabled?: boolean;
  /**
   * @example
   * 100
   */
  dataDiskSize?: number;
  /**
   * @example
   * alicloud-disk-essd-pl1
   */
  dataDiskStorageClass?: string;
  podsList?: GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoListPodsList[];
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      cuNum: 'CuNum',
      cuRatio: 'CuRatio',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      payType: 'PayType',
      replica: 'Replica',
      zoneId: 'ZoneId',
      dataDiskEnabled: 'dataDiskEnabled',
      dataDiskSize: 'dataDiskSize',
      dataDiskStorageClass: 'dataDiskStorageClass',
      podsList: 'podsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      cuNum: 'number',
      cuRatio: 'number',
      diskSize: 'number',
      diskType: 'string',
      payType: 'string',
      replica: 'number',
      zoneId: 'string',
      dataDiskEnabled: 'boolean',
      dataDiskSize: 'number',
      dataDiskStorageClass: 'string',
      podsList: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoListPodsList },
    };
  }

  validate() {
    if(Array.isArray(this.podsList)) {
      $dara.Model.validateArray(this.podsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The Attu component port.
   * 
   * @example
   * 3000
   */
  attuPort?: number;
  /**
   * @remarks
   * The public network address.
   * 
   * @example
   * c-123xxx-.milvus.aliyuncs.com
   */
  internetUrl?: string;
  /**
   * @remarks
   * The internal network address.
   * 
   * @example
   * c-123xxx-internal.milvus.aliyuncs.com
   */
  intranetUrl?: string;
  /**
   * @remarks
   * The resource details.
   */
  milvusResourceInfoList?: GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList[];
  /**
   * @remarks
   * The OSS storage data size.
   * 
   * @example
   * 125.15 GB
   */
  ossStorageSize?: string;
  /**
   * @remarks
   * The timestamp of the OSS storage metric.
   * 
   * @example
   * 1718604000000
   */
  ossStorageTimestamp?: number;
  /**
   * @remarks
   * The proxy port.
   * 
   * @example
   * 19530
   */
  proxyPort?: number;
  /**
   * @remarks
   * The total number of CUs.
   * 
   * @example
   * 24
   */
  totalCuNum?: number;
  /**
   * @remarks
   * The total disk size.
   * 
   * @example
   * 500
   */
  totalDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      attuPort: 'AttuPort',
      internetUrl: 'InternetUrl',
      intranetUrl: 'IntranetUrl',
      milvusResourceInfoList: 'MilvusResourceInfoList',
      ossStorageSize: 'OssStorageSize',
      ossStorageTimestamp: 'OssStorageTimestamp',
      proxyPort: 'ProxyPort',
      totalCuNum: 'TotalCuNum',
      totalDiskSize: 'TotalDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attuPort: 'number',
      internetUrl: 'string',
      intranetUrl: 'string',
      milvusResourceInfoList: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList },
      ossStorageSize: 'string',
      ossStorageTimestamp: 'number',
      proxyPort: 'number',
      totalCuNum: 'number',
      totalDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.milvusResourceInfoList)) {
      $dara.Model.validateArray(this.milvusResourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataHighAvailability extends $dara.Model {
  currentActiveAZ?: string;
  mode?: string;
  primaryZoneId?: string;
  secondaryZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      currentActiveAZ: 'CurrentActiveAZ',
      mode: 'Mode',
      primaryZoneId: 'PrimaryZoneId',
      secondaryZoneId: 'SecondaryZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentActiveAZ: 'string',
      mode: 'string',
      primaryZoneId: 'string',
      secondaryZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataMeasureConfig extends $dara.Model {
  /**
   * @remarks
   * The number of CUs for the Data node.
   * 
   * @example
   * 4
   */
  dataNodeCuNum?: number;
  /**
   * @remarks
   * The number of replicas for the Data node.
   * 
   * @example
   * 2
   */
  dataNodeReplica?: number;
  /**
   * @remarks
   * The number of CUs for the Index node.
   * 
   * @example
   * 4
   */
  indexNodeCuNum?: number;
  /**
   * @remarks
   * The number of replicas for the Index node.
   * 
   * @example
   * 2
   */
  indexNodeReplica?: number;
  /**
   * @remarks
   * The number of CUs for the MixCoordinator node.
   * 
   * @example
   * 4
   */
  mixCoodinatorNodeCuNum?: number;
  /**
   * @remarks
   * The number of replicas for the MixCoordinator node.
   * 
   * @example
   * 2
   */
  mixCoodinatorNodeReplica?: number;
  /**
   * @remarks
   * The number of CUs for the Proxy node.
   * 
   * @example
   * 4
   */
  proxyNodeCuNum?: number;
  /**
   * @remarks
   * The number of replicas for the Proxy node.
   * 
   * @example
   * 2
   */
  proxyNodeReplica?: number;
  /**
   * @remarks
   * The number of CUs for the Query node.
   * 
   * @example
   * 4
   */
  queryNodeCuNum?: number;
  /**
   * @remarks
   * The number of replicas for the Query node.
   * 
   * @example
   * 2
   */
  queryNodeReplica?: number;
  static names(): { [key: string]: string } {
    return {
      dataNodeCuNum: 'DataNodeCuNum',
      dataNodeReplica: 'DataNodeReplica',
      indexNodeCuNum: 'IndexNodeCuNum',
      indexNodeReplica: 'IndexNodeReplica',
      mixCoodinatorNodeCuNum: 'MixCoodinatorNodeCuNum',
      mixCoodinatorNodeReplica: 'MixCoodinatorNodeReplica',
      proxyNodeCuNum: 'ProxyNodeCuNum',
      proxyNodeReplica: 'ProxyNodeReplica',
      queryNodeCuNum: 'QueryNodeCuNum',
      queryNodeReplica: 'QueryNodeReplica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataNodeCuNum: 'number',
      dataNodeReplica: 'number',
      indexNodeCuNum: 'number',
      indexNodeReplica: 'number',
      mixCoodinatorNodeCuNum: 'number',
      mixCoodinatorNodeReplica: 'number',
      proxyNodeCuNum: 'number',
      proxyNodeReplica: 'number',
      queryNodeCuNum: 'number',
      queryNodeReplica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataVSwitches extends $dara.Model {
  vswId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ACL ID for public network access control.
   * 
   * @example
   * acl-123xxx
   */
  aclId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1716863508000
   */
  beginTime?: number;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * milvus-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The bucket path.
   * 
   * @example
   * https://oss.console.aliyun.com/bucket/oss-cn-beijing/xxxx/object?spm=a2cug.25127996.0.0.577990370Ebsqt&path=milvus-c-123xxxx
   */
  bucketPath?: string;
  /**
   * @remarks
   * The instance details.
   */
  clusterInfo?: GetInstanceDetailResponseBodyDataClusterInfo;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * aliyun-test
   */
  clusterName?: string;
  /**
   * @remarks
   * Indicates whether high availability is enabled.
   * 
   * @example
   * true
   */
  enableHa?: boolean;
  encrypted?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1721664000000
   */
  expireTime?: number;
  highAvailability?: GetInstanceDetailResponseBodyDataHighAvailability;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  kmsKeyId?: string;
  maintainablePeriod?: string;
  /**
   * @remarks
   * The configuration information.
   */
  measureConfig?: GetInstanceDetailResponseBodyDataMeasureConfig;
  multiZoneMode?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * @example
   * perf
   */
  nodeType?: string;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  openPublicNet?: boolean;
  /**
   * @remarks
   * The specification details. Valid values:
   * 
   * @example
   * standard
   */
  packageType?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * milvus_milvuspre_public_cn
   */
  productCode?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The running time.
   * 
   * @example
   * 1743679
   */
  runningTime?: number;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-123xxx
   */
  sgId?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: GetInstanceDetailResponseBodyDataTags[];
  /**
   * @remarks
   * The software stack version.
   * 
   * @example
   * 2.4.1-1.0-0.0.1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user-defined configuration.
   * 
   * @example
   * dataCoord:\\n  segment:\\n    maxSize: 1024
   */
  userConfig?: string;
  vSwitches?: GetInstanceDetailResponseBodyDataVSwitches[];
  /**
   * @remarks
   * The Milvus version.
   * 
   * @example
   * 2.4
   */
  version?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-123xxx
   */
  vswId?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  maintainablePeriodTimeZone?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      beginTime: 'BeginTime',
      bucketName: 'BucketName',
      bucketPath: 'BucketPath',
      clusterInfo: 'ClusterInfo',
      clusterName: 'ClusterName',
      enableHa: 'EnableHa',
      encrypted: 'Encrypted',
      expireTime: 'ExpireTime',
      highAvailability: 'HighAvailability',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      kmsKeyId: 'KmsKeyId',
      maintainablePeriod: 'MaintainablePeriod',
      measureConfig: 'MeasureConfig',
      multiZoneMode: 'MultiZoneMode',
      nodeType: 'NodeType',
      openPublicNet: 'OpenPublicNet',
      packageType: 'PackageType',
      payType: 'PayType',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningTime: 'RunningTime',
      sgId: 'SgId',
      tags: 'Tags',
      templateVersion: 'TemplateVersion',
      userConfig: 'UserConfig',
      vSwitches: 'VSwitches',
      version: 'Version',
      vpcId: 'VpcId',
      vswId: 'VswId',
      zoneId: 'ZoneId',
      maintainablePeriodTimeZone: 'maintainablePeriodTimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      beginTime: 'number',
      bucketName: 'string',
      bucketPath: 'string',
      clusterInfo: GetInstanceDetailResponseBodyDataClusterInfo,
      clusterName: 'string',
      enableHa: 'boolean',
      encrypted: 'string',
      expireTime: 'number',
      highAvailability: GetInstanceDetailResponseBodyDataHighAvailability,
      instanceId: 'string',
      instanceStatus: 'string',
      kmsKeyId: 'string',
      maintainablePeriod: 'string',
      measureConfig: GetInstanceDetailResponseBodyDataMeasureConfig,
      multiZoneMode: 'string',
      nodeType: 'string',
      openPublicNet: 'boolean',
      packageType: 'string',
      payType: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'number',
      sgId: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDataTags },
      templateVersion: 'string',
      userConfig: 'string',
      vSwitches: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDataVSwitches },
      version: 'string',
      vpcId: 'string',
      vswId: 'string',
      zoneId: 'string',
      maintainablePeriodTimeZone: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    if(this.highAvailability && typeof (this.highAvailability as any).validate === 'function') {
      (this.highAvailability as any).validate();
    }
    if(this.measureConfig && typeof (this.measureConfig as any).validate === 'function') {
      (this.measureConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission verification failure.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetInstanceDetailResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCD-1234-5678-EFGH
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
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: GetInstanceDetailResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

