// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeAccessControlListResponseBodyData extends $dara.Model {
  /**
   * @example
   * acl-xxxx
   */
  aclId?: string;
  cidr?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      cidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cidr)) {
      $dara.Model.validateArray(this.cidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList extends $dara.Model {
  /**
   * @example
   * QueryNode
   */
  componentType?: string;
  /**
   * @example
   * 8
   */
  cuNum?: number;
  cuRatio?: number;
  /**
   * @example
   * 100
   */
  diskSize?: number;
  /**
   * @example
   * essd
   */
  diskType?: string;
  /**
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
   * @example
   * 3000
   */
  attuPort?: number;
  /**
   * @example
   * c-123xxx-.milvus.aliyuncs.com
   */
  internetUrl?: string;
  /**
   * @example
   * c-123xxx-internal.milvus.aliyuncs.com
   */
  intranetUrl?: string;
  milvusResourceInfoList?: GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList[];
  /**
   * @example
   * 125.15 GB
   */
  ossStorageSize?: string;
  /**
   * @example
   * 1718604000000
   */
  ossStorageTimestamp?: number;
  /**
   * @example
   * 19530
   */
  proxyPort?: number;
  /**
   * @example
   * 24
   */
  totalCuNum?: number;
  /**
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
  dataNodeCuNum?: number;
  dataNodeReplica?: number;
  indexNodeCuNum?: number;
  indexNodeReplica?: number;
  mixCoodinatorNodeCuNum?: number;
  mixCoodinatorNodeReplica?: number;
  proxyNodeCuNum?: number;
  proxyNodeReplica?: number;
  queryNodeCuNum?: number;
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
  key?: string;
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

export class GetInstanceDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * acl-123xxx
   */
  aclId?: string;
  /**
   * @example
   * 1716863508000
   */
  beginTime?: number;
  /**
   * @example
   * milvus-test
   */
  bucketName?: string;
  /**
   * @example
   * https://oss.console.aliyun.com/bucket/oss-cn-beijing/xxxx/object?spm=a2cug.25127996.0.0.577990370Ebsqt&path=milvus-c-123xxxx
   */
  bucketPath?: string;
  clusterInfo?: GetInstanceDetailResponseBodyDataClusterInfo;
  /**
   * @example
   * aliyun-test
   */
  clusterName?: string;
  enableHa?: boolean;
  /**
   * @example
   * 1721664000000
   */
  expireTime?: number;
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @example
   * running
   */
  instanceStatus?: string;
  measureConfig?: GetInstanceDetailResponseBodyDataMeasureConfig;
  nodeType?: string;
  /**
   * @example
   * true
   */
  openPublicNet?: boolean;
  /**
   * @example
   * standard
   */
  packageType?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * milvus_milvuspre_public_cn
   */
  productCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1743679
   */
  runningTime?: number;
  /**
   * @example
   * sg-123xxx
   */
  sgId?: string;
  tags?: GetInstanceDetailResponseBodyDataTags[];
  /**
   * @example
   * 2.4.1-1.0-0.0.1
   */
  templateVersion?: string;
  /**
   * @example
   * dataCoord:\\n  segment:\\n    maxSize: 1024
   */
  userConfig?: string;
  /**
   * @example
   * 2.4
   */
  version?: string;
  /**
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @example
   * vsw-123xxx
   */
  vswId?: string;
  /**
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $dara.Model {
  key?: string;
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

export class ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList extends $dara.Model {
  /**
   * @example
   * standalone
   */
  componentType?: string;
  /**
   * @example
   * 16
   */
  cuNum?: number;
  /**
   * @example
   * 100
   */
  diskSize?: number;
  /**
   * @example
   * essd
   */
  diskType?: string;
  /**
   * @example
   * 1
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      cuNum: 'CuNum',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      cuNum: 'number',
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

export class ListInstancesResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @example
   * 3000
   */
  attuPort?: number;
  /**
   * @example
   * c-123xxx.milvus.aliyuncs.com
   */
  internetUrl?: string;
  /**
   * @example
   * c-123xxx-internal.milvus.aliyuncs.com
   */
  intranetUrl?: string;
  milvusResourceInfoList?: ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList[];
  /**
   * @example
   * 19530
   */
  proxyPort?: number;
  /**
   * @example
   * 24
   */
  totalCuNum?: number;
  /**
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
      milvusResourceInfoList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList },
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

export class ListInstancesResponseBodyDataTags extends $dara.Model {
  key?: string;
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

export class ListInstancesResponseBodyData extends $dara.Model {
  autoBackup?: boolean;
  /**
   * @example
   * 1718608505000
   */
  beginTime?: number;
  clusterInfo?: ListInstancesResponseBodyDataClusterInfo;
  /**
   * @example
   * milvus-test
   */
  clusterName?: string;
  /**
   * @example
   * 1721232000000
   */
  expireTime?: number;
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @example
   * running
   */
  instanceStatus?: string;
  nodeType?: string;
  /**
   * @example
   * true
   */
  openPublicNet?: boolean;
  /**
   * @example
   * trial
   */
  packageType?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * milvus_milvuspre_public_cn
   */
  productCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 536611
   */
  runningTime?: number;
  /**
   * @example
   * sg-123xxx
   */
  sgId?: string;
  tags?: ListInstancesResponseBodyDataTags[];
  /**
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @example
   * vsw-123xxx
   */
  vswId?: string;
  /**
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBackup: 'AutoBackup',
      beginTime: 'BeginTime',
      clusterInfo: 'ClusterInfo',
      clusterName: 'ClusterName',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
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
      vpcId: 'VpcId',
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBackup: 'boolean',
      beginTime: 'number',
      clusterInfo: ListInstancesResponseBodyDataClusterInfo,
      clusterName: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      nodeType: 'string',
      openPublicNet: 'boolean',
      packageType: 'string',
      payType: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'number',
      sgId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataTags },
      vpcId: 'string',
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefaultRoleResponseBody extends $dara.Model {
  /**
   * @example
   * { "PolicyType": "AccountLevelIdentityBasedPolicy", "AuthPrincipalOwnerId": "xxxx", "EncodedDiagnosticMessage": "xxxx", "AuthPrincipalType": "SubUser", "AuthPrincipalDisplayName": "xxxx", "NoPermissionType": "ImplicitDeny", "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDefaultRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDefaultRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDefaultRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListRequest extends $dara.Model {
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  data?: DescribeAccessControlListResponseBodyData;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * Instance.NotFound
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeAccessControlListResponseBodyData,
      errMessage: 'string',
      errorCode: 'string',
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

export class DescribeAccessControlListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessControlListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccessControlListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * dataCoord:\\n  enableCompaction: true
   */
  data?: Buffer;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx.
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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
      data: 'Buffer',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceConfigsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailRequest extends $dara.Model {
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  data?: GetInstanceDetailResponseBodyData;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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

export class GetInstanceDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * c-123xxx
   */
  clusterId?: string;
  /**
   * @example
   * milvus-test
   */
  clusterName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @example
   * c-123xxx
   */
  clusterId?: string;
  /**
   * @example
   * milvus-test
   */
  clusterName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  data?: ListInstancesResponseBodyData[];
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * for test
   */
  reason?: string;
  /**
   * @example
   * dataCoord:\\n  segment:\\n    maxSize: 1024
   */
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      reason: 'Reason',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      reason: 'string',
      userConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListRequest extends $dara.Model {
  /**
   * @example
   * acl-123xxx
   */
  aclId?: string;
  /**
   * @example
   * 192.168.1.0/24,172.16.0.0/16
   */
  cidr?: string;
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      cidr: 'Cidr',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      cidr: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * The format of cidr is illegal.
   */
  errMessage?: string;
  /**
   * @example
   * ILLEGAL.MilvusCidrFormat
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      errMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccessControlListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccessControlListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * milvus-test
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusRequest extends $dara.Model {
  cidr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Proxy
   */
  componentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  publicNetworkEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      componentType: 'ComponentType',
      instanceId: 'InstanceId',
      publicNetworkEnabled: 'PublicNetworkEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      componentType: 'string',
      instanceId: 'string',
      publicNetworkEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Failed to find instance
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
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
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicNetworkStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePublicNetworkStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("milvus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 为用户创建AliyunServiceRoleForMilvus
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefaultRoleResponse
   */
  async createDefaultRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDefaultRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefaultRole",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/user/create_default_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDefaultRoleResponse>(await this.callApi(params, req, runtime), new CreateDefaultRoleResponse({}));
    } else {
      return $dara.cast<CreateDefaultRoleResponse>(await this.execute(params, req, runtime), new CreateDefaultRoleResponse({}));
    }

  }

  /**
   * 为用户创建AliyunServiceRoleForMilvus
   * @returns CreateDefaultRoleResponse
   */
  async createDefaultRole(): Promise<CreateDefaultRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDefaultRoleWithOptions(headers, runtime);
  }

  /**
   * 获取Milvus公网访问ACL信息
   * 
   * @param request - DescribeAccessControlListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListResponse
   */
  async describeAccessControlListWithOptions(request: DescribeAccessControlListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeAccessControlListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessControlList",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/milvus/describe_access_control_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccessControlListResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListResponse({}));
    } else {
      return $dara.cast<DescribeAccessControlListResponse>(await this.execute(params, req, runtime), new DescribeAccessControlListResponse({}));
    }

  }

  /**
   * 获取Milvus公网访问ACL信息
   * 
   * @param request - DescribeAccessControlListRequest
   * @returns DescribeAccessControlListResponse
   */
  async describeAccessControlList(request: DescribeAccessControlListRequest): Promise<DescribeAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * 查询实例用户配置
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigsWithOptions(request: DescribeInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceConfigs",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/config/describe_milvus_user_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceConfigsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceConfigsResponse({}));
    } else {
      return $dara.cast<DescribeInstanceConfigsResponse>(await this.execute(params, req, runtime), new DescribeInstanceConfigsResponse({}));
    }

  }

  /**
   * 查询实例用户配置
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigs(request: DescribeInstanceConfigsRequest): Promise<DescribeInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 根据集群ID获取集群的详细信息
   * 
   * @param request - GetInstanceDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetailWithOptions(request: GetInstanceDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceDetail",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceDetailResponse>(await this.callApi(params, req, runtime), new GetInstanceDetailResponse({}));
    } else {
      return $dara.cast<GetInstanceDetailResponse>(await this.execute(params, req, runtime), new GetInstanceDetailResponse({}));
    }

  }

  /**
   * 根据集群ID获取集群的详细信息
   * 
   * @param request - GetInstanceDetailRequest
   * @returns GetInstanceDetailResponse
   */
  async getInstanceDetail(request: GetInstanceDetailRequest): Promise<GetInstanceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceDetailWithOptions(request, headers, runtime);
  }

  /**
   * 根据集群ID或者名称搜索集群
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/order/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * 根据集群ID或者名称搜索集群
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 修改实例配置
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: ModifyInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ModifyInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfig",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/config/modify_milvus_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyInstanceConfigResponse({}));
    } else {
      return $dara.cast<ModifyInstanceConfigResponse>(await this.execute(params, req, runtime), new ModifyInstanceConfigResponse({}));
    }

  }

  /**
   * 修改实例配置
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: ModifyInstanceConfigRequest): Promise<ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceConfigWithOptions(request, headers, runtime);
  }

  /**
   * 更新Milvus公网访问ACL信息
   * 
   * @param request - UpdateAccessControlListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessControlListResponse
   */
  async updateAccessControlListWithOptions(request: UpdateAccessControlListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAccessControlListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccessControlList",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/milvus/update_access_control_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAccessControlListResponse>(await this.callApi(params, req, runtime), new UpdateAccessControlListResponse({}));
    } else {
      return $dara.cast<UpdateAccessControlListResponse>(await this.execute(params, req, runtime), new UpdateAccessControlListResponse({}));
    }

  }

  /**
   * 更新Milvus公网访问ACL信息
   * 
   * @param request - UpdateAccessControlListRequest
   * @returns UpdateAccessControlListResponse
   */
  async updateAccessControlList(request: UpdateAccessControlListRequest): Promise<UpdateAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * 修改集群名称
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNameResponse({}));
    } else {
      return $dara.cast<UpdateInstanceNameResponse>(await this.execute(params, req, runtime), new UpdateInstanceNameResponse({}));
    }

  }

  /**
   * 修改集群名称
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(request, headers, runtime);
  }

  /**
   * 该接口用于开通/关闭 Proxy的公网SLB。
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatusWithOptions(request: UpdatePublicNetworkStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdatePublicNetworkStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicNetworkEnabled)) {
      query["PublicNetworkEnabled"] = request.publicNetworkEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicNetworkStatus",
      version: "2023-10-12",
      protocol: "HTTPS",
      pathname: `/webapi/network/updatePublicNetworkStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePublicNetworkStatusResponse>(await this.callApi(params, req, runtime), new UpdatePublicNetworkStatusResponse({}));
    } else {
      return $dara.cast<UpdatePublicNetworkStatusResponse>(await this.execute(params, req, runtime), new UpdatePublicNetworkStatusResponse({}));
    }

  }

  /**
   * 该接口用于开通/关闭 Proxy的公网SLB。
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatus(request: UpdatePublicNetworkStatusRequest): Promise<UpdatePublicNetworkStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkStatusWithOptions(request, headers, runtime);
  }

}
