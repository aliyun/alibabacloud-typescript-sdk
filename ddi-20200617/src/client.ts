// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateClusterV2Request extends $tea.Model {
  authorizeContent?: string;
  auto?: boolean;
  autoPayOrder?: boolean;
  bootstrapAction?: CreateClusterV2RequestBootstrapAction[];
  chargeType?: string;
  clickHouseConf?: string;
  clientToken?: string;
  clusterType?: string;
  config?: CreateClusterV2RequestConfig[];
  configurations?: string;
  depositType?: string;
  emrVer?: string;
  enableEas?: boolean;
  enableHighAvailability?: boolean;
  enableSsh?: boolean;
  extraAttributes?: string;
  hostComponentInfo?: CreateClusterV2RequestHostComponentInfo[];
  hostGroup?: CreateClusterV2RequestHostGroup[];
  initCustomHiveMetaDB?: boolean;
  instanceGeneration?: string;
  isOpenPublicIp?: boolean;
  keyPairName?: string;
  logPath?: string;
  machineType?: string;
  masterPwd?: string;
  metaStoreConf?: string;
  metaStoreType?: string;
  name?: string;
  netType?: string;
  period?: number;
  promotionInfo?: CreateClusterV2RequestPromotionInfo[];
  regionId?: string;
  relatedClusterId?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  securityGroupName?: string;
  serviceInfo?: CreateClusterV2RequestServiceInfo[];
  tag?: CreateClusterV2RequestTag[];
  useCustomHiveMetaDB?: boolean;
  useLocalMetaDb?: boolean;
  userDefinedEmrEcsRole?: string;
  userInfo?: CreateClusterV2RequestUserInfo[];
  vSwitchId?: string;
  vpcId?: string;
  whiteListType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeContent: 'AuthorizeContent',
      auto: 'Auto',
      autoPayOrder: 'AutoPayOrder',
      bootstrapAction: 'BootstrapAction',
      chargeType: 'ChargeType',
      clickHouseConf: 'ClickHouseConf',
      clientToken: 'ClientToken',
      clusterType: 'ClusterType',
      config: 'Config',
      configurations: 'Configurations',
      depositType: 'DepositType',
      emrVer: 'EmrVer',
      enableEas: 'EnableEas',
      enableHighAvailability: 'EnableHighAvailability',
      enableSsh: 'EnableSsh',
      extraAttributes: 'ExtraAttributes',
      hostComponentInfo: 'HostComponentInfo',
      hostGroup: 'HostGroup',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      instanceGeneration: 'InstanceGeneration',
      isOpenPublicIp: 'IsOpenPublicIp',
      keyPairName: 'KeyPairName',
      logPath: 'LogPath',
      machineType: 'MachineType',
      masterPwd: 'MasterPwd',
      metaStoreConf: 'MetaStoreConf',
      metaStoreType: 'MetaStoreType',
      name: 'Name',
      netType: 'NetType',
      period: 'Period',
      promotionInfo: 'PromotionInfo',
      regionId: 'RegionId',
      relatedClusterId: 'RelatedClusterId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      serviceInfo: 'ServiceInfo',
      tag: 'Tag',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      useLocalMetaDb: 'UseLocalMetaDb',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      userInfo: 'UserInfo',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      whiteListType: 'WhiteListType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeContent: 'string',
      auto: 'boolean',
      autoPayOrder: 'boolean',
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterV2RequestBootstrapAction },
      chargeType: 'string',
      clickHouseConf: 'string',
      clientToken: 'string',
      clusterType: 'string',
      config: { 'type': 'array', 'itemType': CreateClusterV2RequestConfig },
      configurations: 'string',
      depositType: 'string',
      emrVer: 'string',
      enableEas: 'boolean',
      enableHighAvailability: 'boolean',
      enableSsh: 'boolean',
      extraAttributes: 'string',
      hostComponentInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestHostComponentInfo },
      hostGroup: { 'type': 'array', 'itemType': CreateClusterV2RequestHostGroup },
      initCustomHiveMetaDB: 'boolean',
      instanceGeneration: 'string',
      isOpenPublicIp: 'boolean',
      keyPairName: 'string',
      logPath: 'string',
      machineType: 'string',
      masterPwd: 'string',
      metaStoreConf: 'string',
      metaStoreType: 'string',
      name: 'string',
      netType: 'string',
      period: 'number',
      promotionInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestPromotionInfo },
      regionId: 'string',
      relatedClusterId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestServiceInfo },
      tag: { 'type': 'array', 'itemType': CreateClusterV2RequestTag },
      useCustomHiveMetaDB: 'boolean',
      useLocalMetaDb: 'boolean',
      userDefinedEmrEcsRole: 'string',
      userInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestUserInfo },
      vSwitchId: 'string',
      vpcId: 'string',
      whiteListType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2ResponseBody extends $tea.Model {
  clusterId?: string;
  coreOrderId?: string;
  emrOrderId?: string;
  masterOrderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreOrderId: 'CoreOrderId',
      emrOrderId: 'EmrOrderId',
      masterOrderId: 'MasterOrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreOrderId: 'string',
      emrOrderId: 'string',
      masterOrderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequest extends $tea.Model {
  adhoc?: boolean;
  alertConf?: string;
  clientToken?: string;
  clusterId?: string;
  customVariables?: string;
  description?: string;
  envConf?: string;
  failAct?: string;
  mode?: string;
  monitorConf?: string;
  name?: string;
  paramConf?: string;
  params?: string;
  parentCategory?: string;
  projectId?: string;
  regionId?: string;
  resourceList?: CreateFlowJobRequestResourceList[];
  retryPolicy?: string;
  runConf?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adhoc: 'Adhoc',
      alertConf: 'AlertConf',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      customVariables: 'CustomVariables',
      description: 'Description',
      envConf: 'EnvConf',
      failAct: 'FailAct',
      mode: 'Mode',
      monitorConf: 'MonitorConf',
      name: 'Name',
      paramConf: 'ParamConf',
      params: 'Params',
      parentCategory: 'ParentCategory',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceList: 'ResourceList',
      retryPolicy: 'RetryPolicy',
      runConf: 'RunConf',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhoc: 'boolean',
      alertConf: 'string',
      clientToken: 'string',
      clusterId: 'string',
      customVariables: 'string',
      description: 'string',
      envConf: 'string',
      failAct: 'string',
      mode: 'string',
      monitorConf: 'string',
      name: 'string',
      paramConf: 'string',
      params: 'string',
      parentCategory: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceList: { 'type': 'array', 'itemType': CreateFlowJobRequestResourceList },
      retryPolicy: 'string',
      runConf: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  productType?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      productType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Request extends $tea.Model {
  id?: string;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBody extends $tea.Model {
  clusterInfo?: DescribeClusterV2ResponseBodyClusterInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterV2ResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  clusterTypeList?: string[];
  createType?: string;
  defaultStatus?: boolean;
  depositType?: string;
  expiredTagList?: string[];
  isDesc?: boolean;
  machineType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  statusList?: string[];
  tag?: ListClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterTypeList: 'ClusterTypeList',
      createType: 'CreateType',
      defaultStatus: 'DefaultStatus',
      depositType: 'DepositType',
      expiredTagList: 'ExpiredTagList',
      isDesc: 'IsDesc',
      machineType: 'MachineType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      statusList: 'StatusList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeList: { 'type': 'array', 'itemType': 'string' },
      createType: 'string',
      defaultStatus: 'boolean',
      depositType: 'string',
      expiredTagList: { 'type': 'array', 'itemType': 'string' },
      isDesc: 'boolean',
      machineType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: ListClustersResponseBodyClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainVersionsRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainVersionsResponseBody extends $tea.Model {
  mainVersionList?: ListMainVersionsResponseBodyMainVersionList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mainVersionList: 'MainVersionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainVersionList: { 'type': 'array', 'itemType': ListMainVersionsResponseBodyMainVersionList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMainVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMainVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterRequest extends $tea.Model {
  forceRelease?: boolean;
  id?: string;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      forceRelease: 'ForceRelease',
      id: 'Id',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceRelease: 'boolean',
      id: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestBootstrapAction extends $tea.Model {
  arg?: string;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestConfig extends $tea.Model {
  configKey?: string;
  configValue?: string;
  encrypt?: string;
  fileName?: string;
  replace?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      encrypt: 'Encrypt',
      fileName: 'FileName',
      replace: 'Replace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      encrypt: 'string',
      fileName: 'string',
      replace: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostComponentInfo extends $tea.Model {
  componentNameList?: string[];
  hostName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      componentNameList: 'ComponentNameList',
      hostName: 'HostName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentNameList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostGroup extends $tea.Model {
  autoRenew?: boolean;
  chargeType?: string;
  clusterId?: string;
  comment?: string;
  createType?: string;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  gpuDriver?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  instanceType?: string;
  nodeCount?: number;
  period?: number;
  sysDiskCapacity?: number;
  sysDiskType?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      comment: 'Comment',
      createType: 'CreateType',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      gpuDriver: 'GpuDriver',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      instanceType: 'InstanceType',
      nodeCount: 'NodeCount',
      period: 'Period',
      sysDiskCapacity: 'SysDiskCapacity',
      sysDiskType: 'SysDiskType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      clusterId: 'string',
      comment: 'string',
      createType: 'string',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      gpuDriver: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      instanceType: 'string',
      nodeCount: 'number',
      period: 'number',
      sysDiskCapacity: 'number',
      sysDiskType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestPromotionInfo extends $tea.Model {
  productCode?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestServiceInfo extends $tea.Model {
  serviceName?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestUserInfo extends $tea.Model {
  password?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequestResourceList extends $tea.Model {
  alias?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink extends $tea.Model {
  link?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks extends $tea.Model {
  ZKLink?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink[];
  static names(): { [key: string]: string } {
    return {
      ZKLink: 'ZKLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLink: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfo extends $tea.Model {
  ZKLinks?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks;
  static names(): { [key: string]: string } {
    return {
      ZKLinks: 'ZKLinks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLinks: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoFailReason extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList extends $tea.Model {
  gatewayClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayClusterInfo: 'GatewayClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClusterInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos extends $tea.Model {
  daemonInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo[];
  static names(): { [key: string]: string } {
    return {
      daemonInfo: 'DaemonInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemonInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo extends $tea.Model {
  device?: string;
  diskId?: string;
  diskName?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskId: 'DiskId',
      diskName: 'DiskName',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskId: 'string',
      diskName: 'string',
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos extends $tea.Model {
  diskInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo[];
  static names(): { [key: string]: string } {
    return {
      diskInfo: 'DiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode extends $tea.Model {
  createTime?: string;
  daemonInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos;
  diskInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos;
  emrExpiredTime?: string;
  expiredTime?: string;
  innerIp?: string;
  instanceId?: string;
  pubIp?: string;
  status?: string;
  supportIpV6?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      daemonInfos: 'DaemonInfos',
      diskInfos: 'DiskInfos',
      emrExpiredTime: 'EmrExpiredTime',
      expiredTime: 'ExpiredTime',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      pubIp: 'PubIp',
      status: 'Status',
      supportIpV6: 'SupportIpV6',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      daemonInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos,
      diskInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos,
      emrExpiredTime: 'string',
      expiredTime: 'string',
      innerIp: 'string',
      instanceId: 'string',
      pubIp: 'string',
      status: 'string',
      supportIpV6: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes extends $tea.Model {
  node?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup extends $tea.Model {
  bandWidth?: string;
  chargeType?: string;
  cpuCore?: number;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  hostGroupChangeStatus?: string;
  hostGroupChangeType?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  hostGroupSubType?: string;
  hostGroupType?: string;
  instanceType?: string;
  lockReason?: string;
  lockType?: string;
  memoryCapacity?: number;
  nodeCount?: number;
  nodes?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      chargeType: 'ChargeType',
      cpuCore: 'CpuCore',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      hostGroupChangeStatus: 'HostGroupChangeStatus',
      hostGroupChangeType: 'HostGroupChangeType',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      hostGroupSubType: 'HostGroupSubType',
      hostGroupType: 'HostGroupType',
      instanceType: 'InstanceType',
      lockReason: 'LockReason',
      lockType: 'LockType',
      memoryCapacity: 'MemoryCapacity',
      nodeCount: 'NodeCount',
      nodes: 'Nodes',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'string',
      chargeType: 'string',
      cpuCore: 'number',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      hostGroupChangeStatus: 'string',
      hostGroupChangeType: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      hostGroupSubType: 'string',
      hostGroupType: 'string',
      instanceType: 'string',
      lockReason: 'string',
      lockType: 'string',
      memoryCapacity: 'number',
      nodeCount: 'number',
      nodes: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes,
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupList extends $tea.Model {
  hostGroup?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo extends $tea.Model {
  hpBizId?: string;
  hpName?: string;
  static names(): { [key: string]: string } {
    return {
      hpBizId: 'HpBizId',
      hpName: 'HpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpBizId: 'string',
      hpName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware extends $tea.Model {
  displayName?: string;
  name?: string;
  onlyDisplay?: boolean;
  startTpe?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      name: 'Name',
      onlyDisplay: 'OnlyDisplay',
      startTpe: 'StartTpe',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      onlyDisplay: 'boolean',
      startTpe: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares extends $tea.Model {
  software?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware[];
  static names(): { [key: string]: string } {
    return {
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      software: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo extends $tea.Model {
  clusterType?: string;
  emrVer?: string;
  softwares?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      emrVer: 'EmrVer',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      emrVer: 'string',
      softwares: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfo extends $tea.Model {
  accessInfo?: DescribeClusterV2ResponseBodyClusterInfoAccessInfo;
  autoScalingAllowed?: boolean;
  autoScalingByLoadAllowed?: boolean;
  autoScalingEnable?: boolean;
  autoScalingSpotWithLimitAllowed?: boolean;
  autoScalingVersion?: string;
  autoScalingWithGraceAllowed?: boolean;
  bootstrapActionList?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList;
  bootstrapFailed?: boolean;
  chargeType?: string;
  configurations?: string;
  coreNodeInService?: number;
  coreNodeTotal?: number;
  createResource?: string;
  createType?: string;
  depositType?: string;
  easEnable?: boolean;
  expiredTime?: number;
  extraInfo?: string;
  failReason?: DescribeClusterV2ResponseBodyClusterInfoFailReason;
  gatewayClusterIds?: string;
  gatewayClusterInfoList?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList;
  highAvailabilityEnable?: boolean;
  hostGroupList?: DescribeClusterV2ResponseBodyClusterInfoHostGroupList;
  hostPoolInfo?: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo;
  id?: string;
  imageId?: string;
  instanceGeneration?: string;
  ioOptimized?: boolean;
  k8sClusterId?: string;
  localMetaDb?: boolean;
  logEnable?: boolean;
  logPath?: string;
  machineType?: string;
  masterNodeInService?: number;
  masterNodeTotal?: number;
  metaStoreType?: string;
  name?: string;
  netType?: string;
  period?: number;
  regionId?: string;
  relateClusterId?: string;
  relateClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo;
  resizeDiskEnable?: boolean;
  runningTime?: number;
  securityGroupId?: string;
  securityGroupName?: string;
  showSoftwareInterface?: boolean;
  softwareInfo?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo;
  startTime?: number;
  status?: string;
  stopTime?: number;
  taskNodeInService?: number;
  taskNodeTotal?: number;
  userDefinedEmrEcsRole?: string;
  userId?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInfo: 'AccessInfo',
      autoScalingAllowed: 'AutoScalingAllowed',
      autoScalingByLoadAllowed: 'AutoScalingByLoadAllowed',
      autoScalingEnable: 'AutoScalingEnable',
      autoScalingSpotWithLimitAllowed: 'AutoScalingSpotWithLimitAllowed',
      autoScalingVersion: 'AutoScalingVersion',
      autoScalingWithGraceAllowed: 'AutoScalingWithGraceAllowed',
      bootstrapActionList: 'BootstrapActionList',
      bootstrapFailed: 'BootstrapFailed',
      chargeType: 'ChargeType',
      configurations: 'Configurations',
      coreNodeInService: 'CoreNodeInService',
      coreNodeTotal: 'CoreNodeTotal',
      createResource: 'CreateResource',
      createType: 'CreateType',
      depositType: 'DepositType',
      easEnable: 'EasEnable',
      expiredTime: 'ExpiredTime',
      extraInfo: 'ExtraInfo',
      failReason: 'FailReason',
      gatewayClusterIds: 'GatewayClusterIds',
      gatewayClusterInfoList: 'GatewayClusterInfoList',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      hostGroupList: 'HostGroupList',
      hostPoolInfo: 'HostPoolInfo',
      id: 'Id',
      imageId: 'ImageId',
      instanceGeneration: 'InstanceGeneration',
      ioOptimized: 'IoOptimized',
      k8sClusterId: 'K8sClusterId',
      localMetaDb: 'LocalMetaDb',
      logEnable: 'LogEnable',
      logPath: 'LogPath',
      machineType: 'MachineType',
      masterNodeInService: 'MasterNodeInService',
      masterNodeTotal: 'MasterNodeTotal',
      metaStoreType: 'MetaStoreType',
      name: 'Name',
      netType: 'NetType',
      period: 'Period',
      regionId: 'RegionId',
      relateClusterId: 'RelateClusterId',
      relateClusterInfo: 'RelateClusterInfo',
      resizeDiskEnable: 'ResizeDiskEnable',
      runningTime: 'RunningTime',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      showSoftwareInterface: 'ShowSoftwareInterface',
      softwareInfo: 'SoftwareInfo',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
      taskNodeInService: 'TaskNodeInService',
      taskNodeTotal: 'TaskNodeTotal',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInfo: DescribeClusterV2ResponseBodyClusterInfoAccessInfo,
      autoScalingAllowed: 'boolean',
      autoScalingByLoadAllowed: 'boolean',
      autoScalingEnable: 'boolean',
      autoScalingSpotWithLimitAllowed: 'boolean',
      autoScalingVersion: 'string',
      autoScalingWithGraceAllowed: 'boolean',
      bootstrapActionList: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList,
      bootstrapFailed: 'boolean',
      chargeType: 'string',
      configurations: 'string',
      coreNodeInService: 'number',
      coreNodeTotal: 'number',
      createResource: 'string',
      createType: 'string',
      depositType: 'string',
      easEnable: 'boolean',
      expiredTime: 'number',
      extraInfo: 'string',
      failReason: DescribeClusterV2ResponseBodyClusterInfoFailReason,
      gatewayClusterIds: 'string',
      gatewayClusterInfoList: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList,
      highAvailabilityEnable: 'boolean',
      hostGroupList: DescribeClusterV2ResponseBodyClusterInfoHostGroupList,
      hostPoolInfo: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo,
      id: 'string',
      imageId: 'string',
      instanceGeneration: 'string',
      ioOptimized: 'boolean',
      k8sClusterId: 'string',
      localMetaDb: 'boolean',
      logEnable: 'boolean',
      logPath: 'string',
      machineType: 'string',
      masterNodeInService: 'number',
      masterNodeTotal: 'number',
      metaStoreType: 'string',
      name: 'string',
      netType: 'string',
      period: 'number',
      regionId: 'string',
      relateClusterId: 'string',
      relateClusterInfo: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo,
      resizeDiskEnable: 'boolean',
      runningTime: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
      showSoftwareInterface: 'boolean',
      softwareInfo: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo,
      startTime: 'number',
      status: 'string',
      stopTime: 'number',
      taskNodeInService: 'number',
      taskNodeTotal: 'number',
      userDefinedEmrEcsRole: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  currentCount?: number;
  orderIdList?: string;
  targetCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
      targetCount: 'TargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      orderIdList: 'string',
      targetCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTags extends $tea.Model {
  tag?: ListClustersResponseBodyClustersClusterInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfo extends $tea.Model {
  chargeType?: string;
  createResource?: string;
  createTime?: number;
  depositType?: string;
  expiredTime?: number;
  failReason?: ListClustersResponseBodyClustersClusterInfoFailReason;
  hasUncompletedOrder?: boolean;
  id?: string;
  k8sClusterId?: string;
  machineType?: string;
  metaStoreType?: string;
  name?: string;
  orderList?: string;
  orderTaskInfo?: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo;
  period?: number;
  runningTime?: number;
  status?: string;
  tags?: ListClustersResponseBodyClustersClusterInfoTags;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createResource: 'CreateResource',
      createTime: 'CreateTime',
      depositType: 'DepositType',
      expiredTime: 'ExpiredTime',
      failReason: 'FailReason',
      hasUncompletedOrder: 'HasUncompletedOrder',
      id: 'Id',
      k8sClusterId: 'K8sClusterId',
      machineType: 'MachineType',
      metaStoreType: 'MetaStoreType',
      name: 'Name',
      orderList: 'OrderList',
      orderTaskInfo: 'OrderTaskInfo',
      period: 'Period',
      runningTime: 'RunningTime',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createResource: 'string',
      createTime: 'number',
      depositType: 'string',
      expiredTime: 'number',
      failReason: ListClustersResponseBodyClustersClusterInfoFailReason,
      hasUncompletedOrder: 'boolean',
      id: 'string',
      k8sClusterId: 'string',
      machineType: 'string',
      metaStoreType: 'string',
      name: 'string',
      orderList: 'string',
      orderTaskInfo: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo,
      period: 'number',
      runningTime: 'number',
      status: 'string',
      tags: ListClustersResponseBodyClustersClusterInfoTags,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListClustersResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainVersionsResponseBodyMainVersionListClusterTypeInfoList extends $tea.Model {
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainVersionsResponseBodyMainVersionList extends $tea.Model {
  clusterTypeInfoList?: ListMainVersionsResponseBodyMainVersionListClusterTypeInfoList[];
  extraInfo?: string;
  mainVersionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypeInfoList: 'ClusterTypeInfoList',
      extraInfo: 'ExtraInfo',
      mainVersionName: 'MainVersionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeInfoList: { 'type': 'array', 'itemType': ListMainVersionsResponseBodyMainVersionListClusterTypeInfoList },
      extraInfo: 'string',
      mainVersionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-qingdao': "ddi.cn-qingdao.aliyuncs.com",
      'cn-chengdu': "ddi.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "ddi.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "ddi.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "ddi.cn-hongkong.aliyuncs.com",
      'ap-southeast-2': "ddi.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "ddi.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "ddi.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "ddi.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "ddi.eu-west-1.aliyuncs.com",
      'us-east-1': "ddi.us-east-1.aliyuncs.com",
      'eu-central-1': "ddi.eu-central-1.aliyuncs.com",
      'me-east-1': "ddi.me-east-1.aliyuncs.com",
      'ap-south-1': "ddi.ap-south-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createClusterV2WithOptions(request: CreateClusterV2Request, runtime: $Util.RuntimeOptions): Promise<CreateClusterV2Response> {
    Util.validateModel(request);
    let query = { };
    query["AuthorizeContent"] = request.authorizeContent;
    query["Auto"] = request.auto;
    query["AutoPayOrder"] = request.autoPayOrder;
    query["BootstrapAction"] = request.bootstrapAction;
    query["ChargeType"] = request.chargeType;
    query["ClickHouseConf"] = request.clickHouseConf;
    query["ClientToken"] = request.clientToken;
    query["ClusterType"] = request.clusterType;
    query["Config"] = request.config;
    query["Configurations"] = request.configurations;
    query["DepositType"] = request.depositType;
    query["EmrVer"] = request.emrVer;
    query["EnableEas"] = request.enableEas;
    query["EnableHighAvailability"] = request.enableHighAvailability;
    query["EnableSsh"] = request.enableSsh;
    query["ExtraAttributes"] = request.extraAttributes;
    query["HostComponentInfo"] = request.hostComponentInfo;
    query["HostGroup"] = request.hostGroup;
    query["InitCustomHiveMetaDB"] = request.initCustomHiveMetaDB;
    query["InstanceGeneration"] = request.instanceGeneration;
    query["IsOpenPublicIp"] = request.isOpenPublicIp;
    query["KeyPairName"] = request.keyPairName;
    query["LogPath"] = request.logPath;
    query["MachineType"] = request.machineType;
    query["MasterPwd"] = request.masterPwd;
    query["MetaStoreConf"] = request.metaStoreConf;
    query["MetaStoreType"] = request.metaStoreType;
    query["Name"] = request.name;
    query["NetType"] = request.netType;
    query["Period"] = request.period;
    query["PromotionInfo"] = request.promotionInfo;
    query["RegionId"] = request.regionId;
    query["RelatedClusterId"] = request.relatedClusterId;
    query["ResourceGroupId"] = request.resourceGroupId;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityGroupId"] = request.securityGroupId;
    query["SecurityGroupName"] = request.securityGroupName;
    query["ServiceInfo"] = request.serviceInfo;
    query["Tag"] = request.tag;
    query["UseCustomHiveMetaDB"] = request.useCustomHiveMetaDB;
    query["UseLocalMetaDb"] = request.useLocalMetaDb;
    query["UserDefinedEmrEcsRole"] = request.userDefinedEmrEcsRole;
    query["UserInfo"] = request.userInfo;
    query["VSwitchId"] = request.vSwitchId;
    query["VpcId"] = request.vpcId;
    query["WhiteListType"] = request.whiteListType;
    query["ZoneId"] = request.zoneId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClusterV2",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterV2Response>(await this.callApi(params, req, runtime), new CreateClusterV2Response({}));
  }

  async createClusterV2(request: CreateClusterV2Request): Promise<CreateClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterV2WithOptions(request, runtime);
  }

  async createFlowJobWithOptions(request: CreateFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    query["Adhoc"] = request.adhoc;
    query["AlertConf"] = request.alertConf;
    query["ClientToken"] = request.clientToken;
    query["ClusterId"] = request.clusterId;
    query["CustomVariables"] = request.customVariables;
    query["Description"] = request.description;
    query["EnvConf"] = request.envConf;
    query["FailAct"] = request.failAct;
    query["Mode"] = request.mode;
    query["MonitorConf"] = request.monitorConf;
    query["Name"] = request.name;
    query["ParamConf"] = request.paramConf;
    query["Params"] = request.params;
    query["ParentCategory"] = request.parentCategory;
    query["ProjectId"] = request.projectId;
    query["RegionId"] = request.regionId;
    query["ResourceList"] = request.resourceList;
    query["RetryPolicy"] = request.retryPolicy;
    query["RunConf"] = request.runConf;
    query["Type"] = request.type;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowJobResponse>(await this.callApi(params, req, runtime), new CreateFlowJobResponse({}));
  }

  async createFlowJob(request: CreateFlowJobRequest): Promise<CreateFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowJobWithOptions(request, runtime);
  }

  async createFlowProjectWithOptions(request: CreateFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClientToken"] = request.clientToken;
    query["Description"] = request.description;
    query["Name"] = request.name;
    query["ProductType"] = request.productType;
    query["RegionId"] = request.regionId;
    query["ResourceGroupId"] = request.resourceGroupId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowProject",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowProjectResponse>(await this.callApi(params, req, runtime), new CreateFlowProjectResponse({}));
  }

  async createFlowProject(request: CreateFlowProjectRequest): Promise<CreateFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectWithOptions(request, runtime);
  }

  async describeClusterV2WithOptions(request: DescribeClusterV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2Response> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterV2",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterV2Response>(await this.callApi(params, req, runtime), new DescribeClusterV2Response({}));
  }

  async describeClusterV2(request: DescribeClusterV2Request): Promise<DescribeClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterV2WithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClusterTypeList"] = request.clusterTypeList;
    query["CreateType"] = request.createType;
    query["DefaultStatus"] = request.defaultStatus;
    query["DepositType"] = request.depositType;
    query["ExpiredTagList"] = request.expiredTagList;
    query["IsDesc"] = request.isDesc;
    query["MachineType"] = request.machineType;
    query["Name"] = request.name;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["RegionId"] = request.regionId;
    query["ResourceGroupId"] = request.resourceGroupId;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["StatusList"] = request.statusList;
    query["Tag"] = request.tag;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listMainVersionsWithOptions(request: ListMainVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListMainVersionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMainVersions",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMainVersionsResponse>(await this.callApi(params, req, runtime), new ListMainVersionsResponse({}));
  }

  async listMainVersions(request: ListMainVersionsRequest): Promise<ListMainVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMainVersionsWithOptions(request, runtime);
  }

  async releaseClusterWithOptions(request: ReleaseClusterRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterResponse> {
    Util.validateModel(request);
    let query = { };
    query["ForceRelease"] = request.forceRelease;
    query["Id"] = request.id;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseCluster",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseClusterResponse>(await this.callApi(params, req, runtime), new ReleaseClusterResponse({}));
  }

  async releaseCluster(request: ReleaseClusterRequest): Promise<ReleaseClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterWithOptions(request, runtime);
  }

}
