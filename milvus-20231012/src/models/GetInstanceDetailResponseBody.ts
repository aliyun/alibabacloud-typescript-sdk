// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList extends $dara.Model {
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * *   standalone
   * *   proxy
   * *   mix_coordinator
   * *   query
   * *   index
   * *   data
   * 
   * @example
   * QueryNode
   */
  componentType?: string;
  /**
   * @remarks
   * The number of CUs.
   * 
   * @example
   * 8
   */
  cuNum?: number;
  /**
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
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      cuNum: 'CuNum',
      cuRatio: 'CuRatio',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      cuNum: 'number',
      cuRatio: 'number',
      diskSize: 'number',
      diskType: 'string',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The port of the Attu component.
   * 
   * @example
   * 3000
   */
  attuPort?: number;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * c-123xxx-.milvus.aliyuncs.com
   */
  internetUrl?: string;
  /**
   * @remarks
   * The internal IP address.
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
   * The size of the data stored in OSS.
   * 
   * @example
   * 125.15 GB
   */
  ossStorageSize?: string;
  /**
   * @remarks
   * The timestamp when the OSS metric is stored.
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
   * The total number of disks.
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

export class GetInstanceDetailResponseBodyDataMeasureConfig extends $dara.Model {
  /**
   * @example
   * 4
   */
  dataNodeCuNum?: number;
  /**
   * @example
   * 2
   */
  dataNodeReplica?: number;
  /**
   * @example
   * 4
   */
  indexNodeCuNum?: number;
  /**
   * @example
   * 2
   */
  indexNodeReplica?: number;
  /**
   * @example
   * 4
   */
  mixCoodinatorNodeCuNum?: number;
  /**
   * @example
   * 2
   */
  mixCoodinatorNodeReplica?: number;
  /**
   * @example
   * 4
   */
  proxyNodeCuNum?: number;
  /**
   * @example
   * 2
   */
  proxyNodeReplica?: number;
  /**
   * @example
   * 4
   */
  queryNodeCuNum?: number;
  /**
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
   * @example
   * key1
   */
  key?: string;
  /**
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
   * AclId for Public Network Access Control.
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
   * The name of the bucket.
   * 
   * @example
   * milvus-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The address of the bucket.
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
   * @example
   * true
   */
  enableHa?: boolean;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1721664000000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   creating.
   * *   running.
   * *   updating. Cluster scaling (up/down), configuration changes, and enabling/disabling public network access.
   * *   disable. The cluster has expired and needs to be renewed for activation.
   * *   deleting.
   * *   deleted.
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  measureConfig?: GetInstanceDetailResponseBodyDataMeasureConfig;
  multiZoneMode?: string;
  /**
   * @example
   * perf
   */
  nodeType?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * true
   */
  openPublicNet?: boolean;
  /**
   * @remarks
   * The specification details. Valid values:
   * 
   * *   trial.
   * *   standard.
   * 
   * @example
   * standard
   */
  packageType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   0: pay-as-you-go
   * *   1: subscription
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
   * The region code.
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
   * The runtime.
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
  tags?: GetInstanceDetailResponseBodyDataTags[];
  /**
   * @remarks
   * The version of the software stack.
   * 
   * @example
   * 2.4.1-1.0-0.0.1
   */
  templateVersion?: string;
  /**
   * @remarks
   * User-defined configuration.
   * 
   * @example
   * dataCoord:\\n  segment:\\n    maxSize: 1024
   */
  userConfig?: string;
  vSwitches?: GetInstanceDetailResponseBodyDataVSwitches[];
  /**
   * @remarks
   * The kernel version.
   * 
   * @example
   * 2.4
   */
  version?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      beginTime: 'BeginTime',
      bucketName: 'BucketName',
      bucketPath: 'BucketPath',
      clusterInfo: 'ClusterInfo',
      clusterName: 'ClusterName',
      enableHa: 'EnableHa',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
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
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
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
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
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
   * The detailed information about the failed permission verification.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetInstanceDetailResponseBodyData;
  /**
   * @remarks
   * The error code returned.
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
   * The ID of the request.
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

