// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList extends $dara.Model {
  /**
   * @remarks
   * The component type. Valid values:
   * - standalone
   * - proxy
   * - mix_coordinator
   * - query
   * - index
   * - data
   * 
   * @example
   * standalone
   */
  componentType?: string;
  /**
   * @remarks
   * The number of CUs.
   * 
   * @example
   * 16
   */
  cuNum?: number;
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
   * @remarks
   * The port of the Attu component.
   * 
   * @example
   * 3000
   */
  attuPort?: number;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * c-123xxx.milvus.aliyuncs.com
   */
  internetUrl?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * c-123xxx-internal.milvus.aliyuncs.com
   */
  intranetUrl?: string;
  /**
   * @remarks
   * The resource details.
   */
  milvusResourceInfoList?: ListInstancesResponseBodyDataClusterInfoMilvusResourceInfoList[];
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
   * The ID of the resource owner account.
   * 
   * @example
   * 1234567890123456
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The number of CUs.
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
      proxyPort: 'ProxyPort',
      resourceOwnerId: 'ResourceOwnerId',
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
      resourceOwnerId: 'string',
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

export class ListInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic backup is enabled.
   * 
   * @example
   * true
   */
  autoBackup?: boolean;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1718608505000
   */
  beginTime?: number;
  /**
   * @remarks
   * The instance details.
   */
  clusterInfo?: ListInstancesResponseBodyDataClusterInfo;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * milvus-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1721232000000
   */
  expireTime?: number;
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
   * - creating: Being created.
   * - running: Running.
   * - updating: Being upgraded. This includes specification changes, configuration changes, and enabling or disabling public network access.
   * - disable: Unavailable. The cluster has expired and requires renewal to reactivate.
   * - deleting: Being deleted.
   * - deleted: Deleted.
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The node type.
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
   * The edition. Valid values:
   * - trial: Trial Edition.
   * - standard: Standard Edition.
   * 
   * @example
   * trial
   */
  packageType?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * - 0: Pay-as-you-go.
   * - 1: Subscription.
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
   * The region ID.
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
   * The ID of the resource owner account.
   * 
   * @example
   * 1234567890123456
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The running time.
   * 
   * @example
   * 536611
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
  tags?: ListInstancesResponseBodyDataTags[];
  templateVersion?: string;
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
      resourceOwnerId: 'ResourceOwnerId',
      runningTime: 'RunningTime',
      sgId: 'SgId',
      tags: 'Tags',
      templateVersion: 'TemplateVersion',
      version: 'Version',
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
      resourceOwnerId: 'string',
      runningTime: 'number',
      sgId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataTags },
      templateVersion: 'string',
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstancesResponseBodyData[];
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
  /**
   * @remarks
   * The total count.
   * 
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

