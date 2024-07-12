// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeAccessControlListRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: DescribeAccessControlListResponseBodyData;
  errMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: Buffer;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: GetInstanceDetailResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: ListInstancesResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigRequest extends $tea.Model {
  instanceId?: string;
  reason?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListRequest extends $tea.Model {
  aclId?: string;
  cidr?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: boolean;
  errMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessControlListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameRequest extends $tea.Model {
  clusterName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusRequest extends $tea.Model {
  cidr?: string;
  componentType?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkStatusResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList extends $tea.Model {
  componentType?: string;
  cuNum?: number;
  diskSize?: number;
  diskType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDataClusterInfo extends $tea.Model {
  attuPort?: number;
  internetUrl?: string;
  intranetUrl?: string;
  milvusResourceInfoList?: GetInstanceDetailResponseBodyDataClusterInfoMilvusResourceInfoList[];
  ossStorageSize?: string;
  ossStorageTimestamp?: number;
  proxyPort?: number;
  totalCuNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyData extends $tea.Model {
  aclId?: string;
  beginTime?: number;
  bucketName?: string;
  bucketPath?: string;
  clusterInfo?: GetInstanceDetailResponseBodyDataClusterInfo;
  clusterName?: string;
  expireTime?: number;
  instanceId?: string;
  instanceStatus?: string;
  openPublicNet?: boolean;
  packageType?: string;
  payType?: number;
  productCode?: string;
  regionId?: string;
  runningTime?: number;
  sgId?: string;
  templateVersion?: string;
  userConfig?: string;
  version?: string;
  vpcId?: string;
  vswId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      beginTime: 'BeginTime',
      bucketName: 'BucketName',
      bucketPath: 'BucketPath',
      clusterInfo: 'ClusterInfo',
      clusterName: 'ClusterName',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      openPublicNet: 'OpenPublicNet',
      packageType: 'PackageType',
      payType: 'PayType',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      runningTime: 'RunningTime',
      sgId: 'SgId',
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
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      openPublicNet: 'boolean',
      packageType: 'string',
      payType: 'number',
      productCode: 'string',
      regionId: 'string',
      runningTime: 'number',
      sgId: 'string',
      templateVersion: 'string',
      userConfig: 'string',
      version: 'string',
      vpcId: 'string',
      vswId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList extends $tea.Model {
  componentType?: string;
  cuNum?: number;
  diskSize?: number;
  diskType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataClusterInfo extends $tea.Model {
  attuPort?: number;
  internetUrl?: string;
  intranetUrl?: string;
  milvusResourceInfoList?: ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList[];
  proxyPort?: number;
  totalCuNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  beginTime?: number;
  clusterInfo?: ListInstancesResponseBodyDataClusterInfo;
  clusterName?: string;
  expireTime?: number;
  instanceId?: string;
  instanceStatus?: string;
  openPublicNet?: boolean;
  packageType?: string;
  payType?: number;
  productCode?: string;
  regionId?: string;
  runningTime?: number;
  sgId?: string;
  vpcId?: string;
  vswId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clusterInfo: 'ClusterInfo',
      clusterName: 'ClusterName',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      openPublicNet: 'OpenPublicNet',
      packageType: 'PackageType',
      payType: 'PayType',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      runningTime: 'RunningTime',
      sgId: 'SgId',
      vpcId: 'VpcId',
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clusterInfo: ListInstancesResponseBodyDataClusterInfo,
      clusterName: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      openPublicNet: 'boolean',
      packageType: 'string',
      payType: 'number',
      productCode: 'string',
      regionId: 'string',
      runningTime: 'number',
      sgId: 'string',
      vpcId: 'string',
      vswId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("milvus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary 获取Milvus公网访问ACL信息
   *
   * @param request DescribeAccessControlListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAccessControlListResponse
   */
  async describeAccessControlListWithOptions(request: DescribeAccessControlListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAccessControlListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeAccessControlListResponse>(await this.callApi(params, req, runtime), new DescribeAccessControlListResponse({}));
  }

  /**
   * @summary 获取Milvus公网访问ACL信息
   *
   * @param request DescribeAccessControlListRequest
   * @return DescribeAccessControlListResponse
   */
  async describeAccessControlList(request: DescribeAccessControlListRequest): Promise<DescribeAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询实例用户配置
   *
   * @param request DescribeInstanceConfigsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigsWithOptions(request: DescribeInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeInstanceConfigsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceConfigsResponse({}));
  }

  /**
   * @summary 查询实例用户配置
   *
   * @param request DescribeInstanceConfigsRequest
   * @return DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigs(request: DescribeInstanceConfigsRequest): Promise<DescribeInstanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceConfigsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 根据集群ID获取集群的详细信息
   *
   * @param request GetInstanceDetailRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceDetailResponse
   */
  async getInstanceDetailWithOptions(request: GetInstanceDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetInstanceDetailResponse>(await this.callApi(params, req, runtime), new GetInstanceDetailResponse({}));
  }

  /**
   * @summary 根据集群ID获取集群的详细信息
   *
   * @param request GetInstanceDetailRequest
   * @return GetInstanceDetailResponse
   */
  async getInstanceDetail(request: GetInstanceDetailRequest): Promise<GetInstanceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceDetailWithOptions(request, headers, runtime);
  }

  /**
   * @summary 根据集群ID或者名称等信息过滤集群
   *
   * @param request ListInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @summary 根据集群ID或者名称等信息过滤集群
   *
   * @param request ListInstancesRequest
   * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 修改实例配置
   *
   * @param request ModifyInstanceConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: ModifyInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyInstanceConfigResponse({}));
  }

  /**
   * @summary 修改实例配置
   *
   * @param request ModifyInstanceConfigRequest
   * @return ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: ModifyInstanceConfigRequest): Promise<ModifyInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceConfigWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新Milvus公网访问ACL信息
   *
   * @param request UpdateAccessControlListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAccessControlListResponse
   */
  async updateAccessControlListWithOptions(request: UpdateAccessControlListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAccessControlListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateAccessControlListResponse>(await this.callApi(params, req, runtime), new UpdateAccessControlListResponse({}));
  }

  /**
   * @summary 更新Milvus公网访问ACL信息
   *
   * @param request UpdateAccessControlListRequest
   * @return UpdateAccessControlListResponse
   */
  async updateAccessControlList(request: UpdateAccessControlListRequest): Promise<UpdateAccessControlListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccessControlListWithOptions(request, headers, runtime);
  }

  /**
   * @summary 修改集群名称
   *
   * @param request UpdateInstanceNameRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceNameResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNameResponse({}));
  }

  /**
   * @summary 修改集群名称
   *
   * @param request UpdateInstanceNameRequest
   * @return UpdateInstanceNameResponse
   */
  async updateInstanceName(request: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(request, headers, runtime);
  }

  /**
   * @summary 该接口用于开通/关闭 Proxy的公网SLB。
   *
   * @param request UpdatePublicNetworkStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatusWithOptions(request: UpdatePublicNetworkStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePublicNetworkStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!Util.isUnset(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.publicNetworkEnabled)) {
      query["PublicNetworkEnabled"] = request.publicNetworkEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdatePublicNetworkStatusResponse>(await this.callApi(params, req, runtime), new UpdatePublicNetworkStatusResponse({}));
  }

  /**
   * @summary 该接口用于开通/关闭 Proxy的公网SLB。
   *
   * @param request UpdatePublicNetworkStatusRequest
   * @return UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatus(request: UpdatePublicNetworkStatusRequest): Promise<UpdatePublicNetworkStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkStatusWithOptions(request, headers, runtime);
  }

}
