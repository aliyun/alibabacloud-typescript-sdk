// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CloneFlowRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponseBody extends $tea.Model {
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

export class CloneFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobRequest extends $tea.Model {
  id?: string;
  name?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobResponseBody extends $tea.Model {
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

export class CloneFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotRequest extends $tea.Model {
  entityId?: string;
  entityType?: string;
  message?: string;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      message: 'Message',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      message: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CommitFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CommitFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateFlowRequest extends $tea.Model {
  alertConf?: string;
  alertDingDingGroupBizId?: string;
  alertUserGroupBizId?: string;
  application?: string;
  clientToken?: string;
  clusterId?: string;
  createCluster?: boolean;
  cronExpression?: string;
  description?: string;
  endSchedule?: number;
  hostName?: string;
  name?: string;
  namespace?: string;
  parentCategory?: string;
  parentFlowList?: string;
  projectId?: string;
  regionId?: string;
  startSchedule?: number;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      application: 'Application',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      createCluster: 'CreateCluster',
      cronExpression: 'CronExpression',
      description: 'Description',
      endSchedule: 'EndSchedule',
      hostName: 'HostName',
      name: 'Name',
      namespace: 'Namespace',
      parentCategory: 'ParentCategory',
      parentFlowList: 'ParentFlowList',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      startSchedule: 'StartSchedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      alertDingDingGroupBizId: 'string',
      alertUserGroupBizId: 'string',
      application: 'string',
      clientToken: 'string',
      clusterId: 'string',
      createCluster: 'boolean',
      cronExpression: 'string',
      description: 'string',
      endSchedule: 'number',
      hostName: 'string',
      name: 'string',
      namespace: 'string',
      parentCategory: 'string',
      parentFlowList: 'string',
      projectId: 'string',
      regionId: 'string',
      startSchedule: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
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

export class CreateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryRequest extends $tea.Model {
  clientToken?: string;
  name?: string;
  parentId?: string;
  projectId?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      name: 'string',
      parentId: 'string',
      projectId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryResponseBody extends $tea.Model {
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

export class CreateFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockRequest extends $tea.Model {
  entityId?: string;
  force?: boolean;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      force: 'Force',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      force: 'boolean',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponseBody extends $tea.Model {
  bizId?: string;
  entityId?: string;
  ownerId?: string;
  requestId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      entityId: 'EntityId',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      entityId: 'string',
      ownerId: 'string',
      requestId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowEditLockResponseBody,
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

export class CreateFlowProjectClusterSettingRequest extends $tea.Model {
  clientToken?: string;
  clusterId?: string;
  defaultQueue?: string;
  defaultUser?: string;
  hostList?: string[];
  projectId?: string;
  queueList?: string[];
  regionId?: string;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      defaultQueue: 'DefaultQueue',
      defaultUser: 'DefaultUser',
      hostList: 'HostList',
      projectId: 'ProjectId',
      queueList: 'QueueList',
      regionId: 'RegionId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      defaultQueue: 'string',
      defaultUser: 'string',
      hostList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      queueList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserRequest extends $tea.Model {
  clientToken?: string;
  projectId?: string;
  regionId?: string;
  user?: CreateFlowProjectUserRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'string',
      regionId: 'string',
      user: { 'type': 'array', 'itemType': CreateFlowProjectUserRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockRequest extends $tea.Model {
  entityId?: string;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowEditLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingRequest extends $tea.Model {
  clusterId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectUserResponseBody,
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

export class DescribeFlowRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  alertConf?: string;
  alertDingDingGroupBizId?: string;
  alertUserGroupBizId?: string;
  application?: string;
  categoryId?: string;
  clusterId?: string;
  createCluster?: boolean;
  cronExpr?: string;
  description?: string;
  editLockDetail?: string;
  endSchedule?: number;
  gmtCreate?: number;
  gmtModified?: number;
  graph?: string;
  hostName?: string;
  id?: string;
  name?: string;
  namespace?: string;
  parentFlowList?: DescribeFlowResponseBodyParentFlowList;
  periodic?: boolean;
  requestId?: string;
  startSchedule?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      application: 'Application',
      categoryId: 'CategoryId',
      clusterId: 'ClusterId',
      createCluster: 'CreateCluster',
      cronExpr: 'CronExpr',
      description: 'Description',
      editLockDetail: 'EditLockDetail',
      endSchedule: 'EndSchedule',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      graph: 'Graph',
      hostName: 'HostName',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      parentFlowList: 'ParentFlowList',
      periodic: 'Periodic',
      requestId: 'RequestId',
      startSchedule: 'StartSchedule',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      alertDingDingGroupBizId: 'string',
      alertUserGroupBizId: 'string',
      application: 'string',
      categoryId: 'string',
      clusterId: 'string',
      createCluster: 'boolean',
      cronExpr: 'string',
      description: 'string',
      editLockDetail: 'string',
      endSchedule: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      graph: 'string',
      hostName: 'string',
      id: 'string',
      name: 'string',
      namespace: 'string',
      parentFlowList: DescribeFlowResponseBodyParentFlowList,
      periodic: 'boolean',
      requestId: 'string',
      startSchedule: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeRequest extends $tea.Model {
  categoryId?: string;
  keyword?: string;
  mode?: string;
  projectId?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      keyword: 'Keyword',
      mode: 'Mode',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      keyword: 'string',
      mode: 'string',
      projectId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowCategoryTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowCategoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBody extends $tea.Model {
  clusterId?: string;
  cronExpression?: string;
  dependencyFlowList?: DescribeFlowInstanceResponseBodyDependencyFlowList;
  duration?: number;
  endTime?: number;
  flowId?: string;
  flowName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  graph?: string;
  hasNodeFailed?: boolean;
  id?: string;
  namespace?: string;
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstance;
  projectId?: string;
  requestId?: string;
  scheduleTime?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cronExpression: 'CronExpression',
      dependencyFlowList: 'DependencyFlowList',
      duration: 'Duration',
      endTime: 'EndTime',
      flowId: 'FlowId',
      flowName: 'FlowName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      graph: 'Graph',
      hasNodeFailed: 'HasNodeFailed',
      id: 'Id',
      namespace: 'Namespace',
      nodeInstance: 'NodeInstance',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cronExpression: 'string',
      dependencyFlowList: DescribeFlowInstanceResponseBodyDependencyFlowList,
      duration: 'number',
      endTime: 'number',
      flowId: 'string',
      flowName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      graph: 'string',
      hasNodeFailed: 'boolean',
      id: 'string',
      namespace: 'string',
      nodeInstance: DescribeFlowInstanceResponseBodyNodeInstance,
      projectId: 'string',
      requestId: 'string',
      scheduleTime: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBody extends $tea.Model {
  adhoc?: string;
  alertConf?: string;
  categoryId?: string;
  customVariables?: string;
  description?: string;
  editLockDetail?: string;
  envConf?: string;
  failAct?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  knoxPassword?: string;
  knoxUser?: string;
  lastInstanceId?: string;
  maxRetry?: number;
  maxRunningTimeSec?: number;
  mode?: string;
  monitorConf?: string;
  name?: string;
  paramConf?: string;
  params?: string;
  requestId?: string;
  resourceList?: DescribeFlowJobResponseBodyResourceList;
  retryInterval?: number;
  retryPolicy?: string;
  runConf?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adhoc: 'Adhoc',
      alertConf: 'AlertConf',
      categoryId: 'CategoryId',
      customVariables: 'CustomVariables',
      description: 'Description',
      editLockDetail: 'EditLockDetail',
      envConf: 'EnvConf',
      failAct: 'FailAct',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      knoxPassword: 'KnoxPassword',
      knoxUser: 'KnoxUser',
      lastInstanceId: 'LastInstanceId',
      maxRetry: 'MaxRetry',
      maxRunningTimeSec: 'MaxRunningTimeSec',
      mode: 'Mode',
      monitorConf: 'MonitorConf',
      name: 'Name',
      paramConf: 'ParamConf',
      params: 'Params',
      requestId: 'RequestId',
      resourceList: 'ResourceList',
      retryInterval: 'RetryInterval',
      retryPolicy: 'RetryPolicy',
      runConf: 'RunConf',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhoc: 'string',
      alertConf: 'string',
      categoryId: 'string',
      customVariables: 'string',
      description: 'string',
      editLockDetail: 'string',
      envConf: 'string',
      failAct: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      knoxPassword: 'string',
      knoxUser: 'string',
      lastInstanceId: 'string',
      maxRetry: 'number',
      maxRunningTimeSec: 'number',
      mode: 'string',
      monitorConf: 'string',
      name: 'string',
      paramConf: 'string',
      params: 'string',
      requestId: 'string',
      resourceList: DescribeFlowJobResponseBodyResourceList,
      retryInterval: 'number',
      retryPolicy: 'string',
      runConf: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponseBody extends $tea.Model {
  adhoc?: boolean;
  clusterId?: string;
  clusterName?: string;
  duration?: number;
  endTime?: number;
  envConf?: string;
  externalChildIds?: string;
  externalId?: string;
  externalInfo?: string;
  externalStatus?: string;
  externalSubId?: string;
  failAct?: string;
  flowId?: string;
  flowInstanceId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hostName?: string;
  id?: string;
  jobId?: string;
  jobName?: string;
  jobParams?: string;
  jobType?: string;
  maxRetry?: string;
  mode?: string;
  monitorConf?: string;
  nodeName?: string;
  paramConf?: string;
  pending?: boolean;
  projectId?: string;
  requestId?: string;
  retries?: number;
  retryInterval?: string;
  retryPolicy?: string;
  runConf?: string;
  startTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adhoc: 'Adhoc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      duration: 'Duration',
      endTime: 'EndTime',
      envConf: 'EnvConf',
      externalChildIds: 'ExternalChildIds',
      externalId: 'ExternalId',
      externalInfo: 'ExternalInfo',
      externalStatus: 'ExternalStatus',
      externalSubId: 'ExternalSubId',
      failAct: 'FailAct',
      flowId: 'FlowId',
      flowInstanceId: 'FlowInstanceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      id: 'Id',
      jobId: 'JobId',
      jobName: 'JobName',
      jobParams: 'JobParams',
      jobType: 'JobType',
      maxRetry: 'MaxRetry',
      mode: 'Mode',
      monitorConf: 'MonitorConf',
      nodeName: 'NodeName',
      paramConf: 'ParamConf',
      pending: 'Pending',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      retries: 'Retries',
      retryInterval: 'RetryInterval',
      retryPolicy: 'RetryPolicy',
      runConf: 'RunConf',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhoc: 'boolean',
      clusterId: 'string',
      clusterName: 'string',
      duration: 'number',
      endTime: 'number',
      envConf: 'string',
      externalChildIds: 'string',
      externalId: 'string',
      externalInfo: 'string',
      externalStatus: 'string',
      externalSubId: 'string',
      failAct: 'string',
      flowId: 'string',
      flowInstanceId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hostName: 'string',
      id: 'string',
      jobId: 'string',
      jobName: 'string',
      jobParams: 'string',
      jobType: 'string',
      maxRetry: 'string',
      mode: 'string',
      monitorConf: 'string',
      nodeName: 'string',
      paramConf: 'string',
      pending: 'boolean',
      projectId: 'string',
      requestId: 'string',
      retries: 'number',
      retryInterval: 'string',
      retryPolicy: 'string',
      runConf: 'string',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogRequest extends $tea.Model {
  appId?: string;
  containerId?: string;
  length?: number;
  logName?: string;
  nodeInstanceId?: string;
  offset?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerId: 'ContainerId',
      length: 'Length',
      logName: 'LogName',
      nodeInstanceId: 'NodeInstanceId',
      offset: 'Offset',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containerId: 'string',
      length: 'number',
      logName: 'string',
      nodeInstanceId: 'string',
      offset: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBody extends $tea.Model {
  logEnd?: boolean;
  logEntrys?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logEnd: 'LogEnd',
      logEntrys: 'LogEntrys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnd: 'boolean',
      logEntrys: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceContainerLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceContainerLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogRequest extends $tea.Model {
  endTime?: number;
  length?: number;
  lines?: number;
  nodeInstanceId?: string;
  offset?: number;
  projectId?: string;
  regionId?: string;
  reverse?: boolean;
  start?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      length: 'Length',
      lines: 'Lines',
      nodeInstanceId: 'NodeInstanceId',
      offset: 'Offset',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      reverse: 'Reverse',
      start: 'Start',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      length: 'number',
      lines: 'number',
      nodeInstanceId: 'string',
      offset: 'number',
      projectId: 'string',
      regionId: 'string',
      reverse: 'boolean',
      start: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBody extends $tea.Model {
  logEnd?: boolean;
  logEntrys?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logEnd: 'LogEnd',
      logEntrys: 'LogEntrys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnd: 'boolean',
      logEntrys: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceLauncherLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceLauncherLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponseBody extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  name?: string;
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingRequest extends $tea.Model {
  clusterId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBody extends $tea.Model {
  clusterId?: string;
  defaultQueue?: string;
  defaultUser?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hostList?: DescribeFlowProjectClusterSettingResponseBodyHostList;
  k8sClusterId?: string;
  projectId?: string;
  queueList?: DescribeFlowProjectClusterSettingResponseBodyQueueList;
  requestId?: string;
  userList?: DescribeFlowProjectClusterSettingResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      defaultQueue: 'DefaultQueue',
      defaultUser: 'DefaultUser',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostList: 'HostList',
      k8sClusterId: 'K8sClusterId',
      projectId: 'ProjectId',
      queueList: 'QueueList',
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      defaultQueue: 'string',
      defaultUser: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hostList: DescribeFlowProjectClusterSettingResponseBodyHostList,
      k8sClusterId: 'string',
      projectId: 'string',
      queueList: DescribeFlowProjectClusterSettingResponseBodyQueueList,
      requestId: 'string',
      userList: DescribeFlowProjectClusterSettingResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowSLARequest extends $tea.Model {
  from?: number;
  metrics?: string;
  periodType?: string;
  projectId?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  to?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      metrics: 'Metrics',
      periodType: 'PeriodType',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      metrics: 'string',
      periodType: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      to: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowSLAResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowSLAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowSLAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowSLAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowVariableCollectionRequest extends $tea.Model {
  entityId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowVariableCollectionResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowVariableCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowVariableCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowVariableCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowAuditLogsRequest extends $tea.Model {
  currentSize?: number;
  entityGroupId?: string;
  entityId?: string;
  entityType?: string;
  limit?: number;
  operation?: string;
  operatorId?: string;
  orderField?: string;
  orderMode?: string;
  pageCount?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentSize: 'CurrentSize',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      entityType: 'EntityType',
      limit: 'Limit',
      operation: 'Operation',
      operatorId: 'OperatorId',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentSize: 'number',
      entityGroupId: 'string',
      entityId: 'string',
      entityType: 'string',
      limit: 'number',
      operation: 'string',
      operatorId: 'string',
      orderField: 'string',
      orderMode: 'string',
      pageCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowAuditLogsResponseBody extends $tea.Model {
  items?: GetFlowAuditLogsResponseBodyItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: GetFlowAuditLogsResponseBodyItems,
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

export class GetFlowAuditLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFlowAuditLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFlowAuditLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowRequest extends $tea.Model {
  flowInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobRequest extends $tea.Model {
  jobInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInstanceId: 'JobInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillFlowJobResponseBody,
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

export class ListFlowRequest extends $tea.Model {
  clusterId?: string;
  id?: string;
  jobId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  periodic?: boolean;
  projectId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
      jobId: 'JobId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'string',
      jobId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      periodic: 'boolean',
      projectId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $tea.Model {
  flow?: ListFlowResponseBodyFlow;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: ListFlowResponseBodyFlow,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBody extends $tea.Model {
  clusters?: ListFlowClusterResponseBodyClusters;
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
      clusters: ListFlowClusterResponseBodyClusters,
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

export class ListFlowClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBody extends $tea.Model {
  clusters?: ListFlowClusterAllResponseBodyClusters;
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
      clusters: ListFlowClusterAllResponseBodyClusters,
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

export class ListFlowClusterAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsRequest extends $tea.Model {
  clusterId?: string;
  projectId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBody extends $tea.Model {
  hostList?: ListFlowClusterAllHostsResponseBodyHostList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostList: 'HostList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostList: ListFlowClusterAllHostsResponseBodyHostList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostRequest extends $tea.Model {
  clusterId?: string;
  projectId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBody extends $tea.Model {
  hostList?: ListFlowClusterHostResponseBodyHostList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostList: 'HostList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostList: ListFlowClusterHostResponseBodyHostList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotRequest extends $tea.Model {
  committerId?: string;
  currentSize?: number;
  entityGroupId?: string;
  entityId?: string;
  entityType?: string;
  limit?: number;
  orderField?: string;
  orderMode?: string;
  pageCount?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerId?: number;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      committerId: 'CommitterId',
      currentSize: 'CurrentSize',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      entityType: 'EntityType',
      limit: 'Limit',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committerId: 'string',
      currentSize: 'number',
      entityGroupId: 'string',
      entityId: 'string',
      entityType: 'string',
      limit: 'number',
      orderField: 'string',
      orderMode: 'string',
      pageCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerId: 'number',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBody extends $tea.Model {
  items?: ListFlowEntitySnapshotResponseBodyItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: ListFlowEntitySnapshotResponseBodyItems,
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

export class ListFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceRequest extends $tea.Model {
  flowId?: string;
  flowName?: string;
  id?: string;
  instanceId?: string;
  orderBy?: string;
  orderType?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  statusList?: string[];
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowName: 'FlowName',
      id: 'Id',
      instanceId: 'InstanceId',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      statusList: 'StatusList',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowName: 'string',
      id: 'string',
      instanceId: 'string',
      orderBy: 'string',
      orderType: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBody extends $tea.Model {
  flowInstances?: ListFlowInstanceResponseBodyFlowInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      flowInstances: 'FlowInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstances: ListFlowInstanceResponseBodyFlowInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryRequest extends $tea.Model {
  id?: string;
  instanceId?: string;
  jobType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  statusList?: string[];
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      statusList: 'StatusList',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      jobType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBody extends $tea.Model {
  nodeInstances?: ListFlowJobHistoryResponseBodyNodeInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nodeInstances: 'NodeInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstances: ListFlowJobHistoryResponseBodyNodeInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsRequest extends $tea.Model {
  adhoc?: boolean;
  id?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adhoc: 'Adhoc',
      id: 'Id',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhoc: 'boolean',
      id: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBody extends $tea.Model {
  jobList?: ListFlowJobsResponseBodyJobList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: ListFlowJobsResponseBodyJobList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusRequest extends $tea.Model {
  nodeInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceId: 'NodeInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBody extends $tea.Model {
  containerStatusList?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      containerStatusList: 'ContainerStatusList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatusList: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeInstanceContainerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeInstanceContainerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultRequest extends $tea.Model {
  length?: number;
  nodeInstanceId?: string;
  offset?: number;
  projectId?: string;
  regionId?: string;
  sqlIndex?: number;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      nodeInstanceId: 'NodeInstanceId',
      offset: 'Offset',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      sqlIndex: 'SqlIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      nodeInstanceId: 'string',
      offset: 'number',
      projectId: 'string',
      regionId: 'string',
      sqlIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBody extends $tea.Model {
  end?: boolean;
  headerList?: ListFlowNodeSqlResultResponseBodyHeaderList;
  requestId?: string;
  rowList?: ListFlowNodeSqlResultResponseBodyRowList;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      headerList: 'HeaderList',
      requestId: 'RequestId',
      rowList: 'RowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      headerList: ListFlowNodeSqlResultResponseBodyHeaderList,
      requestId: 'string',
      rowList: ListFlowNodeSqlResultResponseBodyRowList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeSqlResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeSqlResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBody extends $tea.Model {
  clusterSettings?: ListFlowProjectClusterSettingResponseBodyClusterSettings;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      clusterSettings: 'ClusterSettings',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSettings: ListFlowProjectClusterSettingResponseBodyClusterSettings,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  users?: ListFlowProjectUserResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      users: ListFlowProjectUserResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  projectId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projects?: ListFlowProjectsResponseBodyProjects;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projects: 'Projects',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projects: ListFlowProjectsResponseBodyProjects,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectsResponseBody,
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

export class ModifyFlowRequest extends $tea.Model {
  alertConf?: string;
  alertDingDingGroupBizId?: string;
  alertUserGroupBizId?: string;
  application?: string;
  clusterId?: string;
  createCluster?: boolean;
  cronExpr?: string;
  description?: string;
  endSchedule?: number;
  hostName?: string;
  id?: string;
  name?: string;
  parentCategory?: string;
  parentFlowList?: string;
  periodic?: boolean;
  projectId?: string;
  regionId?: string;
  startSchedule?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      application: 'Application',
      clusterId: 'ClusterId',
      createCluster: 'CreateCluster',
      cronExpr: 'CronExpr',
      description: 'Description',
      endSchedule: 'EndSchedule',
      hostName: 'HostName',
      id: 'Id',
      name: 'Name',
      parentCategory: 'ParentCategory',
      parentFlowList: 'ParentFlowList',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      startSchedule: 'StartSchedule',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      alertDingDingGroupBizId: 'string',
      alertUserGroupBizId: 'string',
      application: 'string',
      clusterId: 'string',
      createCluster: 'boolean',
      cronExpr: 'string',
      description: 'string',
      endSchedule: 'number',
      hostName: 'string',
      id: 'string',
      name: 'string',
      parentCategory: 'string',
      parentFlowList: 'string',
      periodic: 'boolean',
      projectId: 'string',
      regionId: 'string',
      startSchedule: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryRequest extends $tea.Model {
  id?: string;
  name?: string;
  parentId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      parentId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebRequest extends $tea.Model {
  alertConf?: string;
  alertDingDingGroupBizId?: string;
  alertUserGroupBizId?: string;
  clusterId?: string;
  createCluster?: boolean;
  cronExpr?: string;
  description?: string;
  endSchedule?: number;
  graph?: string;
  hostName?: string;
  id?: string;
  name?: string;
  namespace?: string;
  parentCategory?: string;
  parentFlowList?: string;
  periodic?: boolean;
  projectId?: string;
  regionId?: string;
  startSchedule?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      clusterId: 'ClusterId',
      createCluster: 'CreateCluster',
      cronExpr: 'CronExpr',
      description: 'Description',
      endSchedule: 'EndSchedule',
      graph: 'Graph',
      hostName: 'HostName',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      parentCategory: 'ParentCategory',
      parentFlowList: 'ParentFlowList',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      startSchedule: 'StartSchedule',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      alertDingDingGroupBizId: 'string',
      alertUserGroupBizId: 'string',
      clusterId: 'string',
      createCluster: 'boolean',
      cronExpr: 'string',
      description: 'string',
      endSchedule: 'number',
      graph: 'string',
      hostName: 'string',
      id: 'string',
      name: 'string',
      namespace: 'string',
      parentCategory: 'string',
      parentFlowList: 'string',
      periodic: 'boolean',
      projectId: 'string',
      regionId: 'string',
      startSchedule: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowForWebResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowForWebResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobRequest extends $tea.Model {
  alertConf?: string;
  clusterId?: string;
  customVariables?: string;
  description?: string;
  envConf?: string;
  failAct?: string;
  id?: string;
  knoxPassword?: string;
  knoxUser?: string;
  mode?: string;
  monitorConf?: string;
  name?: string;
  paramConf?: string;
  params?: string;
  projectId?: string;
  regionId?: string;
  resourceList?: ModifyFlowJobRequestResourceList[];
  retryPolicy?: string;
  runConf?: string;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      clusterId: 'ClusterId',
      customVariables: 'CustomVariables',
      description: 'Description',
      envConf: 'EnvConf',
      failAct: 'FailAct',
      id: 'Id',
      knoxPassword: 'KnoxPassword',
      knoxUser: 'KnoxUser',
      mode: 'Mode',
      monitorConf: 'MonitorConf',
      name: 'Name',
      paramConf: 'ParamConf',
      params: 'Params',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      resourceList: 'ResourceList',
      retryPolicy: 'RetryPolicy',
      runConf: 'RunConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      clusterId: 'string',
      customVariables: 'string',
      description: 'string',
      envConf: 'string',
      failAct: 'string',
      id: 'string',
      knoxPassword: 'string',
      knoxUser: 'string',
      mode: 'string',
      monitorConf: 'string',
      name: 'string',
      paramConf: 'string',
      params: 'string',
      projectId: 'string',
      regionId: 'string',
      resourceList: { 'type': 'array', 'itemType': ModifyFlowJobRequestResourceList },
      retryPolicy: 'string',
      runConf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectRequest extends $tea.Model {
  description?: string;
  name?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingRequest extends $tea.Model {
  clusterId?: string;
  defaultQueue?: string;
  defaultUser?: string;
  hostList?: string[];
  projectId?: string;
  queueList?: string[];
  regionId?: string;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      defaultQueue: 'DefaultQueue',
      defaultUser: 'DefaultUser',
      hostList: 'HostList',
      projectId: 'ProjectId',
      queueList: 'QueueList',
      regionId: 'RegionId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      defaultQueue: 'string',
      defaultUser: 'string',
      hostList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      queueList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowVariableCollectionRequest extends $tea.Model {
  data?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowVariableCollectionResponseBody extends $tea.Model {
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

export class ModifyFlowVariableCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowVariableCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowVariableCollectionResponseBody,
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

export class RerunFlowRequest extends $tea.Model {
  flowInstanceId?: string;
  projectId?: string;
  reRunFail?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      reRunFail: 'ReRunFail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstanceId: 'string',
      projectId: 'string',
      reRunFail: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RerunFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RerunFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotRequest extends $tea.Model {
  entityId?: string;
  entityType?: string;
  operatorId?: string;
  regionId?: string;
  resourceOwnerId?: number;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      operatorId: 'OperatorId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      operatorId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowRequest extends $tea.Model {
  flowInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowRequest extends $tea.Model {
  flowInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowRequest extends $tea.Model {
  conf?: string;
  flowId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      conf: 'Conf',
      flowId: 'FlowId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conf: 'string',
      flowId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponseBody extends $tea.Model {
  data?: string;
  id?: string;
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      id: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobRequest extends $tea.Model {
  clusterId?: string;
  conf?: string;
  hostName?: string;
  jobId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      conf: 'Conf',
      hostName: 'HostName',
      jobId: 'JobId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      conf: 'string',
      hostName: 'string',
      jobId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobResponseBody extends $tea.Model {
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

export class SubmitFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowRequest extends $tea.Model {
  flowInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendFlowResponseBody,
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

export class CreateFlowProjectUserRequestUser extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
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

export class DescribeFlowResponseBodyParentFlowListParentFlow extends $tea.Model {
  parentFlowId?: string;
  parentFlowName?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      parentFlowId: 'ParentFlowId',
      parentFlowName: 'ParentFlowName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlowId: 'string',
      parentFlowName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBodyParentFlowList extends $tea.Model {
  parentFlow?: DescribeFlowResponseBodyParentFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowResponseBodyParentFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow extends $tea.Model {
  bizDate?: number;
  dependencyFlowId?: string;
  dependencyInstanceId?: string;
  flowId?: string;
  flowInstanceId?: string;
  meet?: boolean;
  projectId?: string;
  scheduleKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dependencyFlowId: 'DependencyFlowId',
      dependencyInstanceId: 'DependencyInstanceId',
      flowId: 'FlowId',
      flowInstanceId: 'FlowInstanceId',
      meet: 'Meet',
      projectId: 'ProjectId',
      scheduleKey: 'ScheduleKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      dependencyFlowId: 'string',
      dependencyInstanceId: 'string',
      flowId: 'string',
      flowInstanceId: 'string',
      meet: 'boolean',
      projectId: 'string',
      scheduleKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowList extends $tea.Model {
  parentFlow?: DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance extends $tea.Model {
  clusterId?: string;
  duration?: number;
  endTime?: number;
  externalId?: string;
  externalInfo?: string;
  externalStatus?: string;
  failAct?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hostName?: string;
  id?: string;
  jobId?: string;
  jobName?: string;
  jobType?: string;
  maxRetry?: string;
  nodeName?: string;
  pending?: boolean;
  projectId?: string;
  retries?: number;
  retryInterval?: string;
  startTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      endTime: 'EndTime',
      externalId: 'ExternalId',
      externalInfo: 'ExternalInfo',
      externalStatus: 'ExternalStatus',
      failAct: 'FailAct',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      id: 'Id',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      maxRetry: 'MaxRetry',
      nodeName: 'NodeName',
      pending: 'Pending',
      projectId: 'ProjectId',
      retries: 'Retries',
      retryInterval: 'RetryInterval',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      endTime: 'number',
      externalId: 'string',
      externalInfo: 'string',
      externalStatus: 'string',
      failAct: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hostName: 'string',
      id: 'string',
      jobId: 'string',
      jobName: 'string',
      jobType: 'string',
      maxRetry: 'string',
      nodeName: 'string',
      pending: 'boolean',
      projectId: 'string',
      retries: 'number',
      retryInterval: 'string',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstance extends $tea.Model {
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBodyResourceListResource extends $tea.Model {
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

export class DescribeFlowJobResponseBodyResourceList extends $tea.Model {
  resource?: DescribeFlowJobResponseBodyResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeFlowJobResponseBodyResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowAuditLogsResponseBodyItemsItem extends $tea.Model {
  content?: string;
  entityGroupId?: string;
  entityId?: string;
  entityType?: string;
  operation?: string;
  operatorId?: string;
  status?: string;
  ts?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      entityType: 'EntityType',
      operation: 'Operation',
      operatorId: 'OperatorId',
      status: 'Status',
      ts: 'Ts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      entityType: 'string',
      operation: 'string',
      operatorId: 'string',
      status: 'string',
      ts: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowAuditLogsResponseBodyItems extends $tea.Model {
  item?: GetFlowAuditLogsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': GetFlowAuditLogsResponseBodyItemsItem },
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

export class ListFlowResponseBodyFlowFlow extends $tea.Model {
  alertConf?: string;
  alertDingDingGroupBizId?: string;
  alertUserGroupBizId?: string;
  categoryId?: string;
  clusterId?: string;
  createCluster?: boolean;
  cronExpr?: string;
  description?: string;
  endSchedule?: number;
  gmtCreate?: number;
  gmtModified?: number;
  graph?: string;
  hostName?: string;
  id?: string;
  name?: string;
  periodic?: boolean;
  projectId?: string;
  startSchedule?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertConf: 'AlertConf',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      categoryId: 'CategoryId',
      clusterId: 'ClusterId',
      createCluster: 'CreateCluster',
      cronExpr: 'CronExpr',
      description: 'Description',
      endSchedule: 'EndSchedule',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      graph: 'Graph',
      hostName: 'HostName',
      id: 'Id',
      name: 'Name',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      startSchedule: 'StartSchedule',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConf: 'string',
      alertDingDingGroupBizId: 'string',
      alertUserGroupBizId: 'string',
      categoryId: 'string',
      clusterId: 'string',
      createCluster: 'boolean',
      cronExpr: 'string',
      description: 'string',
      endSchedule: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      graph: 'string',
      hostName: 'string',
      id: 'string',
      name: 'string',
      periodic: 'boolean',
      projectId: 'string',
      startSchedule: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlow extends $tea.Model {
  flow?: ListFlowResponseBodyFlowFlow[];
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: { 'type': 'array', 'itemType': ListFlowResponseBodyFlowFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfoFailReason extends $tea.Model {
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

export class ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
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

export class ListFlowClusterResponseBodyClustersClusterInfo extends $tea.Model {
  chargeType?: string;
  createResource?: string;
  createTime?: number;
  expiredTime?: number;
  failReason?: ListFlowClusterResponseBodyClustersClusterInfoFailReason;
  hasUncompletedOrder?: boolean;
  id?: string;
  k8sClusterId?: string;
  name?: string;
  orderList?: string;
  orderTaskInfo?: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo;
  period?: number;
  runningTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createResource: 'CreateResource',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      failReason: 'FailReason',
      hasUncompletedOrder: 'HasUncompletedOrder',
      id: 'Id',
      k8sClusterId: 'K8sClusterId',
      name: 'Name',
      orderList: 'OrderList',
      orderTaskInfo: 'OrderTaskInfo',
      period: 'Period',
      runningTime: 'RunningTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createResource: 'string',
      createTime: 'number',
      expiredTime: 'number',
      failReason: ListFlowClusterResponseBodyClustersClusterInfoFailReason,
      hasUncompletedOrder: 'boolean',
      id: 'string',
      k8sClusterId: 'string',
      name: 'string',
      orderList: 'string',
      orderTaskInfo: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo,
      period: 'number',
      runningTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfoFailReason extends $tea.Model {
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

export class ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
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

export class ListFlowClusterAllResponseBodyClustersClusterInfo extends $tea.Model {
  chargeType?: string;
  createResource?: string;
  createTime?: number;
  expiredTime?: number;
  failReason?: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason;
  hasUncompletedOrder?: boolean;
  id?: string;
  k8sClusterId?: string;
  name?: string;
  orderList?: string;
  orderTaskInfo?: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo;
  period?: number;
  runningTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createResource: 'CreateResource',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      failReason: 'FailReason',
      hasUncompletedOrder: 'HasUncompletedOrder',
      id: 'Id',
      k8sClusterId: 'K8sClusterId',
      name: 'Name',
      orderList: 'OrderList',
      orderTaskInfo: 'OrderTaskInfo',
      period: 'Period',
      runningTime: 'RunningTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createResource: 'string',
      createTime: 'number',
      expiredTime: 'number',
      failReason: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason,
      hasUncompletedOrder: 'boolean',
      id: 'string',
      k8sClusterId: 'string',
      name: 'string',
      orderList: 'string',
      orderTaskInfo: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo,
      period: 'number',
      runningTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterAllResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterAllResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostListHost extends $tea.Model {
  cpu?: number;
  hostId?: string;
  hostInstanceId?: string;
  hostName?: string;
  instanceType?: string;
  memory?: number;
  privateIp?: string;
  publicIp?: string;
  role?: string;
  serialNumber?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      memory: 'Memory',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      role: 'Role',
      serialNumber: 'SerialNumber',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      hostId: 'string',
      hostInstanceId: 'string',
      hostName: 'string',
      instanceType: 'string',
      memory: 'number',
      privateIp: 'string',
      publicIp: 'string',
      role: 'string',
      serialNumber: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterAllHostsResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterAllHostsResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostListHost extends $tea.Model {
  cpu?: number;
  hostId?: string;
  hostInstanceId?: string;
  hostName?: string;
  instanceType?: string;
  memory?: number;
  privateIp?: string;
  publicIp?: string;
  role?: string;
  serialNumber?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      memory: 'Memory',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      role: 'Role',
      serialNumber: 'SerialNumber',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      hostId: 'string',
      hostInstanceId: 'string',
      hostName: 'string',
      instanceType: 'string',
      memory: 'number',
      privateIp: 'string',
      publicIp: 'string',
      role: 'string',
      serialNumber: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterHostResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterHostResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItemsItem extends $tea.Model {
  active?: boolean;
  committerId?: string;
  data?: string;
  entityGroupId?: string;
  entityId?: string;
  entityType?: string;
  gmtCreate?: number;
  message?: string;
  revision?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      committerId: 'CommitterId',
      data: 'Data',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      message: 'Message',
      revision: 'Revision',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      committerId: 'string',
      data: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      entityType: 'string',
      gmtCreate: 'number',
      message: 'string',
      revision: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItems extends $tea.Model {
  item?: ListFlowEntitySnapshotResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListFlowEntitySnapshotResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstancesFlowInstance extends $tea.Model {
  clusterId?: string;
  duration?: number;
  endTime?: number;
  flowId?: string;
  flowName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hasNodeFailed?: boolean;
  id?: string;
  owner?: string;
  projectId?: string;
  scheduleTime?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      endTime: 'EndTime',
      flowId: 'FlowId',
      flowName: 'FlowName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasNodeFailed: 'HasNodeFailed',
      id: 'Id',
      owner: 'Owner',
      projectId: 'ProjectId',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      endTime: 'number',
      flowId: 'string',
      flowName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hasNodeFailed: 'boolean',
      id: 'string',
      owner: 'string',
      projectId: 'string',
      scheduleTime: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstances extends $tea.Model {
  flowInstance?: ListFlowInstanceResponseBodyFlowInstancesFlowInstance[];
  static names(): { [key: string]: string } {
    return {
      flowInstance: 'FlowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstance: { 'type': 'array', 'itemType': ListFlowInstanceResponseBodyFlowInstancesFlowInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  envConf?: string;
  externalId?: string;
  externalInfo?: string;
  externalStatus?: string;
  failAct?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hostName?: string;
  id?: string;
  jobId?: string;
  jobName?: string;
  jobParams?: string;
  jobType?: string;
  maxRetry?: number;
  nodeName?: string;
  paramConf?: string;
  projectId?: string;
  retries?: number;
  retryInterval?: number;
  runConf?: string;
  startTime?: number;
  status?: string;
  type?: string;
  pending?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      envConf: 'EnvConf',
      externalId: 'ExternalId',
      externalInfo: 'ExternalInfo',
      externalStatus: 'ExternalStatus',
      failAct: 'FailAct',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      id: 'Id',
      jobId: 'JobId',
      jobName: 'JobName',
      jobParams: 'JobParams',
      jobType: 'JobType',
      maxRetry: 'MaxRetry',
      nodeName: 'NodeName',
      paramConf: 'ParamConf',
      projectId: 'ProjectId',
      retries: 'Retries',
      retryInterval: 'RetryInterval',
      runConf: 'RunConf',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      pending: 'pending',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      envConf: 'string',
      externalId: 'string',
      externalInfo: 'string',
      externalStatus: 'string',
      failAct: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hostName: 'string',
      id: 'string',
      jobId: 'string',
      jobName: 'string',
      jobParams: 'string',
      jobType: 'string',
      maxRetry: 'number',
      nodeName: 'string',
      paramConf: 'string',
      projectId: 'string',
      retries: 'number',
      retryInterval: 'number',
      runConf: 'string',
      startTime: 'number',
      status: 'string',
      type: 'string',
      pending: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstances extends $tea.Model {
  nodeInstance?: ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobListJobResourceListResource extends $tea.Model {
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

export class ListFlowJobsResponseBodyJobListJobResourceList extends $tea.Model {
  resource?: ListFlowJobsResponseBodyJobListJobResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListFlowJobsResponseBodyJobListJobResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobListJob extends $tea.Model {
  adhoc?: string;
  alertConf?: string;
  categoryId?: string;
  customVariables?: string;
  description?: string;
  envConf?: string;
  failAct?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  lastInstanceDetail?: string;
  maxRetry?: number;
  mode?: string;
  monitorConf?: string;
  name?: string;
  paramConf?: string;
  params?: string;
  resourceList?: ListFlowJobsResponseBodyJobListJobResourceList;
  retryInterval?: number;
  runConf?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adhoc: 'Adhoc',
      alertConf: 'AlertConf',
      categoryId: 'CategoryId',
      customVariables: 'CustomVariables',
      description: 'Description',
      envConf: 'EnvConf',
      failAct: 'FailAct',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastInstanceDetail: 'LastInstanceDetail',
      maxRetry: 'MaxRetry',
      mode: 'Mode',
      monitorConf: 'MonitorConf',
      name: 'Name',
      paramConf: 'ParamConf',
      params: 'Params',
      resourceList: 'ResourceList',
      retryInterval: 'RetryInterval',
      runConf: 'RunConf',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhoc: 'string',
      alertConf: 'string',
      categoryId: 'string',
      customVariables: 'string',
      description: 'string',
      envConf: 'string',
      failAct: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      lastInstanceDetail: 'string',
      maxRetry: 'number',
      mode: 'string',
      monitorConf: 'string',
      name: 'string',
      paramConf: 'string',
      params: 'string',
      resourceList: ListFlowJobsResponseBodyJobListJobResourceList,
      retryInterval: 'number',
      runConf: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsResponseBodyJobList extends $tea.Model {
  job?: ListFlowJobsResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListFlowJobsResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus extends $tea.Model {
  applicationId?: string;
  containerId?: string;
  hostName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      containerId: 'ContainerId',
      hostName: 'HostName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      containerId: 'string',
      hostName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList extends $tea.Model {
  containerStatus?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyHeaderList extends $tea.Model {
  header?: string[];
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRowRowItemList extends $tea.Model {
  rowItem?: string[];
  static names(): { [key: string]: string } {
    return {
      rowItem: 'RowItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRow extends $tea.Model {
  rowIndex?: number;
  rowItemList?: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList;
  static names(): { [key: string]: string } {
    return {
      rowIndex: 'RowIndex',
      rowItemList: 'RowItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowIndex: 'number',
      rowItemList: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowList extends $tea.Model {
  row?: ListFlowNodeSqlResultResponseBodyRowListRow[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': ListFlowNodeSqlResultResponseBodyRowListRow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  defaultQueue?: string;
  defaultUser?: string;
  gmtCreate?: number;
  gmtModified?: number;
  hostList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList;
  k8sClusterId?: string;
  projectId?: string;
  queueList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList;
  userList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      defaultQueue: 'DefaultQueue',
      defaultUser: 'DefaultUser',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostList: 'HostList',
      k8sClusterId: 'K8sClusterId',
      projectId: 'ProjectId',
      queueList: 'QueueList',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      defaultQueue: 'string',
      defaultUser: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      hostList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList,
      k8sClusterId: 'string',
      projectId: 'string',
      queueList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList,
      userList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettings extends $tea.Model {
  clusterSetting?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting[];
  static names(): { [key: string]: string } {
    return {
      clusterSetting: 'ClusterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSetting: { 'type': 'array', 'itemType': ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsersUser extends $tea.Model {
  accountUserId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  ownerId?: string;
  projectId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountUserId: 'AccountUserId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUserId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      ownerId: 'string',
      projectId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsers extends $tea.Model {
  user?: ListFlowProjectUserResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListFlowProjectUserResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBodyProjectsProject extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectsResponseBodyProjects extends $tea.Model {
  project?: ListFlowProjectsResponseBodyProjectsProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': ListFlowProjectsResponseBodyProjectsProject },
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

export class ModifyFlowJobRequestResourceList extends $tea.Model {
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

  async cloneFlowWithOptions(request: CloneFlowRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneFlowResponse>(await this.callApi(params, req, runtime), new CloneFlowResponse({}));
  }

  async cloneFlow(request: CloneFlowRequest): Promise<CloneFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowWithOptions(request, runtime);
  }

  async cloneFlowJobWithOptions(request: CloneFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneFlowJobResponse>(await this.callApi(params, req, runtime), new CloneFlowJobResponse({}));
  }

  async cloneFlowJob(request: CloneFlowJobRequest): Promise<CloneFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowJobWithOptions(request, runtime);
  }

  async commitFlowEntitySnapshotWithOptions(request: CommitFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CommitFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommitFlowEntitySnapshot",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitFlowEntitySnapshotResponse>(await this.callApi(params, req, runtime), new CommitFlowEntitySnapshotResponse({}));
  }

  async commitFlowEntitySnapshot(request: CommitFlowEntitySnapshotRequest): Promise<CommitFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitFlowEntitySnapshotWithOptions(request, runtime);
  }

  async createClusterV2WithOptions(request: CreateClusterV2Request, runtime: $Util.RuntimeOptions): Promise<CreateClusterV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizeContent)) {
      query["AuthorizeContent"] = request.authorizeContent;
    }

    if (!Util.isUnset(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!Util.isUnset(request.autoPayOrder)) {
      query["AutoPayOrder"] = request.autoPayOrder;
    }

    if (!Util.isUnset(request.bootstrapAction)) {
      query["BootstrapAction"] = request.bootstrapAction;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clickHouseConf)) {
      query["ClickHouseConf"] = request.clickHouseConf;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.configurations)) {
      query["Configurations"] = request.configurations;
    }

    if (!Util.isUnset(request.depositType)) {
      query["DepositType"] = request.depositType;
    }

    if (!Util.isUnset(request.emrVer)) {
      query["EmrVer"] = request.emrVer;
    }

    if (!Util.isUnset(request.enableEas)) {
      query["EnableEas"] = request.enableEas;
    }

    if (!Util.isUnset(request.enableHighAvailability)) {
      query["EnableHighAvailability"] = request.enableHighAvailability;
    }

    if (!Util.isUnset(request.enableSsh)) {
      query["EnableSsh"] = request.enableSsh;
    }

    if (!Util.isUnset(request.extraAttributes)) {
      query["ExtraAttributes"] = request.extraAttributes;
    }

    if (!Util.isUnset(request.hostComponentInfo)) {
      query["HostComponentInfo"] = request.hostComponentInfo;
    }

    if (!Util.isUnset(request.hostGroup)) {
      query["HostGroup"] = request.hostGroup;
    }

    if (!Util.isUnset(request.initCustomHiveMetaDB)) {
      query["InitCustomHiveMetaDB"] = request.initCustomHiveMetaDB;
    }

    if (!Util.isUnset(request.instanceGeneration)) {
      query["InstanceGeneration"] = request.instanceGeneration;
    }

    if (!Util.isUnset(request.isOpenPublicIp)) {
      query["IsOpenPublicIp"] = request.isOpenPublicIp;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.logPath)) {
      query["LogPath"] = request.logPath;
    }

    if (!Util.isUnset(request.machineType)) {
      query["MachineType"] = request.machineType;
    }

    if (!Util.isUnset(request.masterPwd)) {
      query["MasterPwd"] = request.masterPwd;
    }

    if (!Util.isUnset(request.metaStoreConf)) {
      query["MetaStoreConf"] = request.metaStoreConf;
    }

    if (!Util.isUnset(request.metaStoreType)) {
      query["MetaStoreType"] = request.metaStoreType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.promotionInfo)) {
      query["PromotionInfo"] = request.promotionInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.relatedClusterId)) {
      query["RelatedClusterId"] = request.relatedClusterId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    if (!Util.isUnset(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.useCustomHiveMetaDB)) {
      query["UseCustomHiveMetaDB"] = request.useCustomHiveMetaDB;
    }

    if (!Util.isUnset(request.useLocalMetaDb)) {
      query["UseLocalMetaDb"] = request.useLocalMetaDb;
    }

    if (!Util.isUnset(request.userDefinedEmrEcsRole)) {
      query["UserDefinedEmrEcsRole"] = request.userDefinedEmrEcsRole;
    }

    if (!Util.isUnset(request.userInfo)) {
      query["UserInfo"] = request.userInfo;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

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

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConf)) {
      query["AlertConf"] = request.alertConf;
    }

    if (!Util.isUnset(request.alertDingDingGroupBizId)) {
      query["AlertDingDingGroupBizId"] = request.alertDingDingGroupBizId;
    }

    if (!Util.isUnset(request.alertUserGroupBizId)) {
      query["AlertUserGroupBizId"] = request.alertUserGroupBizId;
    }

    if (!Util.isUnset(request.application)) {
      query["Application"] = request.application;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.createCluster)) {
      query["CreateCluster"] = request.createCluster;
    }

    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endSchedule)) {
      query["EndSchedule"] = request.endSchedule;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.parentCategory)) {
      query["ParentCategory"] = request.parentCategory;
    }

    if (!Util.isUnset(request.parentFlowList)) {
      query["ParentFlowList"] = request.parentFlowList;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startSchedule)) {
      query["StartSchedule"] = request.startSchedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowResponse>(await this.callApi(params, req, runtime), new CreateFlowResponse({}));
  }

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async createFlowCategoryWithOptions(request: CreateFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowCategory",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowCategoryResponse>(await this.callApi(params, req, runtime), new CreateFlowCategoryResponse({}));
  }

  async createFlowCategory(request: CreateFlowCategoryRequest): Promise<CreateFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowCategoryWithOptions(request, runtime);
  }

  async createFlowEditLockWithOptions(request: CreateFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowEditLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowEditLock",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowEditLockResponse>(await this.callApi(params, req, runtime), new CreateFlowEditLockResponse({}));
  }

  async createFlowEditLock(request: CreateFlowEditLockRequest): Promise<CreateFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowEditLockWithOptions(request, runtime);
  }

  async createFlowJobWithOptions(request: CreateFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adhoc)) {
      query["Adhoc"] = request.adhoc;
    }

    if (!Util.isUnset(request.alertConf)) {
      query["AlertConf"] = request.alertConf;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.customVariables)) {
      query["CustomVariables"] = request.customVariables;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envConf)) {
      query["EnvConf"] = request.envConf;
    }

    if (!Util.isUnset(request.failAct)) {
      query["FailAct"] = request.failAct;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.monitorConf)) {
      query["MonitorConf"] = request.monitorConf;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.paramConf)) {
      query["ParamConf"] = request.paramConf;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.parentCategory)) {
      query["ParentCategory"] = request.parentCategory;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceList)) {
      query["ResourceList"] = request.resourceList;
    }

    if (!Util.isUnset(request.retryPolicy)) {
      query["RetryPolicy"] = request.retryPolicy;
    }

    if (!Util.isUnset(request.runConf)) {
      query["RunConf"] = request.runConf;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

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
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

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

  async createFlowProjectClusterSettingWithOptions(request: CreateFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.defaultQueue)) {
      query["DefaultQueue"] = request.defaultQueue;
    }

    if (!Util.isUnset(request.defaultUser)) {
      query["DefaultUser"] = request.defaultUser;
    }

    if (!Util.isUnset(request.hostList)) {
      query["HostList"] = request.hostList;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.queueList)) {
      query["QueueList"] = request.queueList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowProjectClusterSetting",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowProjectClusterSettingResponse>(await this.callApi(params, req, runtime), new CreateFlowProjectClusterSettingResponse({}));
  }

  async createFlowProjectClusterSetting(request: CreateFlowProjectClusterSettingRequest): Promise<CreateFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async createFlowProjectUserWithOptions(request: CreateFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowProjectUser",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowProjectUserResponse>(await this.callApi(params, req, runtime), new CreateFlowProjectUserResponse({}));
  }

  async createFlowProjectUser(request: CreateFlowProjectUserRequest): Promise<CreateFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectUserWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowResponse>(await this.callApi(params, req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async deleteFlowCategoryWithOptions(request: DeleteFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowCategory",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowCategoryResponse>(await this.callApi(params, req, runtime), new DeleteFlowCategoryResponse({}));
  }

  async deleteFlowCategory(request: DeleteFlowCategoryRequest): Promise<DeleteFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowCategoryWithOptions(request, runtime);
  }

  async deleteFlowEditLockWithOptions(request: DeleteFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowEditLockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowEditLock",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowEditLockResponse>(await this.callApi(params, req, runtime), new DeleteFlowEditLockResponse({}));
  }

  async deleteFlowEditLock(request: DeleteFlowEditLockRequest): Promise<DeleteFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowEditLockWithOptions(request, runtime);
  }

  async deleteFlowProjectWithOptions(request: DeleteFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowProject",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowProjectResponse>(await this.callApi(params, req, runtime), new DeleteFlowProjectResponse({}));
  }

  async deleteFlowProject(request: DeleteFlowProjectRequest): Promise<DeleteFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectWithOptions(request, runtime);
  }

  async deleteFlowProjectClusterSettingWithOptions(request: DeleteFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowProjectClusterSetting",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowProjectClusterSettingResponse>(await this.callApi(params, req, runtime), new DeleteFlowProjectClusterSettingResponse({}));
  }

  async deleteFlowProjectClusterSetting(request: DeleteFlowProjectClusterSettingRequest): Promise<DeleteFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async deleteFlowProjectUserWithOptions(request: DeleteFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowProjectUser",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowProjectUserResponse>(await this.callApi(params, req, runtime), new DeleteFlowProjectUserResponse({}));
  }

  async deleteFlowProjectUser(request: DeleteFlowProjectUserRequest): Promise<DeleteFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectUserWithOptions(request, runtime);
  }

  async describeClusterV2WithOptions(request: DescribeClusterV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

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

  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowResponse>(await this.callApi(params, req, runtime), new DescribeFlowResponse({}));
  }

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  async describeFlowCategoryTreeWithOptions(request: DescribeFlowCategoryTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowCategoryTreeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowCategoryTree",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowCategoryTreeResponse>(await this.callApi(params, req, runtime), new DescribeFlowCategoryTreeResponse({}));
  }

  async describeFlowCategoryTree(request: DescribeFlowCategoryTreeRequest): Promise<DescribeFlowCategoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowCategoryTreeWithOptions(request, runtime);
  }

  async describeFlowInstanceWithOptions(request: DescribeFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowInstance",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowInstanceResponse>(await this.callApi(params, req, runtime), new DescribeFlowInstanceResponse({}));
  }

  async describeFlowInstance(request: DescribeFlowInstanceRequest): Promise<DescribeFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowInstanceWithOptions(request, runtime);
  }

  async describeFlowJobWithOptions(request: DescribeFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowJobResponse>(await this.callApi(params, req, runtime), new DescribeFlowJobResponse({}));
  }

  async describeFlowJob(request: DescribeFlowJobRequest): Promise<DescribeFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowJobWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceWithOptions(request: DescribeFlowNodeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowNodeInstance",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowNodeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeFlowNodeInstanceResponse({}));
  }

  async describeFlowNodeInstance(request: DescribeFlowNodeInstanceRequest): Promise<DescribeFlowNodeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceContainerLogWithOptions(request: DescribeFlowNodeInstanceContainerLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.containerId)) {
      query["ContainerId"] = request.containerId;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.logName)) {
      query["LogName"] = request.logName;
    }

    if (!Util.isUnset(request.nodeInstanceId)) {
      query["NodeInstanceId"] = request.nodeInstanceId;
    }

    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowNodeInstanceContainerLog",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowNodeInstanceContainerLogResponse>(await this.callApi(params, req, runtime), new DescribeFlowNodeInstanceContainerLogResponse({}));
  }

  async describeFlowNodeInstanceContainerLog(request: DescribeFlowNodeInstanceContainerLogRequest): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceContainerLogWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceLauncherLogWithOptions(request: DescribeFlowNodeInstanceLauncherLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.nodeInstanceId)) {
      query["NodeInstanceId"] = request.nodeInstanceId;
    }

    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowNodeInstanceLauncherLog",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowNodeInstanceLauncherLogResponse>(await this.callApi(params, req, runtime), new DescribeFlowNodeInstanceLauncherLogResponse({}));
  }

  async describeFlowNodeInstanceLauncherLog(request: DescribeFlowNodeInstanceLauncherLogRequest): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceLauncherLogWithOptions(request, runtime);
  }

  async describeFlowProjectWithOptions(request: DescribeFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowProject",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowProjectResponse>(await this.callApi(params, req, runtime), new DescribeFlowProjectResponse({}));
  }

  async describeFlowProject(request: DescribeFlowProjectRequest): Promise<DescribeFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectWithOptions(request, runtime);
  }

  async describeFlowProjectClusterSettingWithOptions(request: DescribeFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowProjectClusterSetting",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowProjectClusterSettingResponse>(await this.callApi(params, req, runtime), new DescribeFlowProjectClusterSettingResponse({}));
  }

  async describeFlowProjectClusterSetting(request: DescribeFlowProjectClusterSettingRequest): Promise<DescribeFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async describeFlowSLAWithOptions(request: DescribeFlowSLARequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowSLAResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowSLA",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowSLAResponse>(await this.callApi(params, req, runtime), new DescribeFlowSLAResponse({}));
  }

  async describeFlowSLA(request: DescribeFlowSLARequest): Promise<DescribeFlowSLAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowSLAWithOptions(request, runtime);
  }

  async describeFlowVariableCollectionWithOptions(request: DescribeFlowVariableCollectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowVariableCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowVariableCollection",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowVariableCollectionResponse>(await this.callApi(params, req, runtime), new DescribeFlowVariableCollectionResponse({}));
  }

  async describeFlowVariableCollection(request: DescribeFlowVariableCollectionRequest): Promise<DescribeFlowVariableCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowVariableCollectionWithOptions(request, runtime);
  }

  async getFlowAuditLogsWithOptions(request: GetFlowAuditLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowAuditLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentSize)) {
      query["CurrentSize"] = request.currentSize;
    }

    if (!Util.isUnset(request.entityGroupId)) {
      query["EntityGroupId"] = request.entityGroupId;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.operatorId)) {
      query["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.orderField)) {
      query["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.orderMode)) {
      query["OrderMode"] = request.orderMode;
    }

    if (!Util.isUnset(request.pageCount)) {
      query["PageCount"] = request.pageCount;
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

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFlowAuditLogs",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFlowAuditLogsResponse>(await this.callApi(params, req, runtime), new GetFlowAuditLogsResponse({}));
  }

  async getFlowAuditLogs(request: GetFlowAuditLogsRequest): Promise<GetFlowAuditLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowAuditLogsWithOptions(request, runtime);
  }

  async killFlowWithOptions(request: KillFlowRequest, runtime: $Util.RuntimeOptions): Promise<KillFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowInstanceId)) {
      query["FlowInstanceId"] = request.flowInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillFlowResponse>(await this.callApi(params, req, runtime), new KillFlowResponse({}));
  }

  async killFlow(request: KillFlowRequest): Promise<KillFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killFlowWithOptions(request, runtime);
  }

  async killFlowJobWithOptions(request: KillFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<KillFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillFlowJobResponse>(await this.callApi(params, req, runtime), new KillFlowJobResponse({}));
  }

  async killFlowJob(request: KillFlowJobRequest): Promise<KillFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killFlowJobWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterTypeList)) {
      query["ClusterTypeList"] = request.clusterTypeList;
    }

    if (!Util.isUnset(request.createType)) {
      query["CreateType"] = request.createType;
    }

    if (!Util.isUnset(request.defaultStatus)) {
      query["DefaultStatus"] = request.defaultStatus;
    }

    if (!Util.isUnset(request.depositType)) {
      query["DepositType"] = request.depositType;
    }

    if (!Util.isUnset(request.expiredTagList)) {
      query["ExpiredTagList"] = request.expiredTagList;
    }

    if (!Util.isUnset(request.isDesc)) {
      query["IsDesc"] = request.isDesc;
    }

    if (!Util.isUnset(request.machineType)) {
      query["MachineType"] = request.machineType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

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

  async listFlowWithOptions(request: ListFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodic)) {
      query["Periodic"] = request.periodic;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowResponse>(await this.callApi(params, req, runtime), new ListFlowResponse({}));
  }

  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  async listFlowClusterWithOptions(request: ListFlowClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowCluster",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowClusterResponse>(await this.callApi(params, req, runtime), new ListFlowClusterResponse({}));
  }

  async listFlowCluster(request: ListFlowClusterRequest): Promise<ListFlowClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterWithOptions(request, runtime);
  }

  async listFlowClusterAllWithOptions(request: ListFlowClusterAllRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowClusterAll",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowClusterAllResponse>(await this.callApi(params, req, runtime), new ListFlowClusterAllResponse({}));
  }

  async listFlowClusterAll(request: ListFlowClusterAllRequest): Promise<ListFlowClusterAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllWithOptions(request, runtime);
  }

  async listFlowClusterAllHostsWithOptions(request: ListFlowClusterAllHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowClusterAllHosts",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowClusterAllHostsResponse>(await this.callApi(params, req, runtime), new ListFlowClusterAllHostsResponse({}));
  }

  async listFlowClusterAllHosts(request: ListFlowClusterAllHostsRequest): Promise<ListFlowClusterAllHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllHostsWithOptions(request, runtime);
  }

  async listFlowClusterHostWithOptions(request: ListFlowClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowClusterHost",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowClusterHostResponse>(await this.callApi(params, req, runtime), new ListFlowClusterHostResponse({}));
  }

  async listFlowClusterHost(request: ListFlowClusterHostRequest): Promise<ListFlowClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterHostWithOptions(request, runtime);
  }

  async listFlowEntitySnapshotWithOptions(request: ListFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.committerId)) {
      query["CommitterId"] = request.committerId;
    }

    if (!Util.isUnset(request.currentSize)) {
      query["CurrentSize"] = request.currentSize;
    }

    if (!Util.isUnset(request.entityGroupId)) {
      query["EntityGroupId"] = request.entityGroupId;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderField)) {
      query["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.orderMode)) {
      query["OrderMode"] = request.orderMode;
    }

    if (!Util.isUnset(request.pageCount)) {
      query["PageCount"] = request.pageCount;
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

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.revision)) {
      query["Revision"] = request.revision;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowEntitySnapshot",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowEntitySnapshotResponse>(await this.callApi(params, req, runtime), new ListFlowEntitySnapshotResponse({}));
  }

  async listFlowEntitySnapshot(request: ListFlowEntitySnapshotRequest): Promise<ListFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowEntitySnapshotWithOptions(request, runtime);
  }

  async listFlowInstanceWithOptions(request: ListFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!Util.isUnset(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowInstance",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowInstanceResponse>(await this.callApi(params, req, runtime), new ListFlowInstanceResponse({}));
  }

  async listFlowInstance(request: ListFlowInstanceRequest): Promise<ListFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowInstanceWithOptions(request, runtime);
  }

  async listFlowJobHistoryWithOptions(request: ListFlowJobHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowJobHistory",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowJobHistoryResponse>(await this.callApi(params, req, runtime), new ListFlowJobHistoryResponse({}));
  }

  async listFlowJobHistory(request: ListFlowJobHistoryRequest): Promise<ListFlowJobHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobHistoryWithOptions(request, runtime);
  }

  async listFlowJobsWithOptions(request: ListFlowJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adhoc)) {
      query["Adhoc"] = request.adhoc;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowJobs",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowJobsResponse>(await this.callApi(params, req, runtime), new ListFlowJobsResponse({}));
  }

  async listFlowJobs(request: ListFlowJobsRequest): Promise<ListFlowJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobsWithOptions(request, runtime);
  }

  async listFlowNodeInstanceContainerStatusWithOptions(request: ListFlowNodeInstanceContainerStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nodeInstanceId)) {
      query["NodeInstanceId"] = request.nodeInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowNodeInstanceContainerStatus",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowNodeInstanceContainerStatusResponse>(await this.callApi(params, req, runtime), new ListFlowNodeInstanceContainerStatusResponse({}));
  }

  async listFlowNodeInstanceContainerStatus(request: ListFlowNodeInstanceContainerStatusRequest): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeInstanceContainerStatusWithOptions(request, runtime);
  }

  async listFlowNodeSqlResultWithOptions(request: ListFlowNodeSqlResultRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeSqlResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.nodeInstanceId)) {
      query["NodeInstanceId"] = request.nodeInstanceId;
    }

    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sqlIndex)) {
      query["SqlIndex"] = request.sqlIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowNodeSqlResult",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowNodeSqlResultResponse>(await this.callApi(params, req, runtime), new ListFlowNodeSqlResultResponse({}));
  }

  async listFlowNodeSqlResult(request: ListFlowNodeSqlResultRequest): Promise<ListFlowNodeSqlResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeSqlResultWithOptions(request, runtime);
  }

  async listFlowProjectClusterSettingWithOptions(request: ListFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowProjectClusterSetting",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowProjectClusterSettingResponse>(await this.callApi(params, req, runtime), new ListFlowProjectClusterSettingResponse({}));
  }

  async listFlowProjectClusterSetting(request: ListFlowProjectClusterSettingRequest): Promise<ListFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async listFlowProjectUserWithOptions(request: ListFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowProjectUser",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowProjectUserResponse>(await this.callApi(params, req, runtime), new ListFlowProjectUserResponse({}));
  }

  async listFlowProjectUser(request: ListFlowProjectUserRequest): Promise<ListFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectUserWithOptions(request, runtime);
  }

  async listFlowProjectsWithOptions(request: ListFlowProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowProjects",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFlowProjectsResponse>(await this.callApi(params, req, runtime), new ListFlowProjectsResponse({}));
  }

  async listFlowProjects(request: ListFlowProjectsRequest): Promise<ListFlowProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectsWithOptions(request, runtime);
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

  async modifyFlowWithOptions(request: ModifyFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConf)) {
      query["AlertConf"] = request.alertConf;
    }

    if (!Util.isUnset(request.alertDingDingGroupBizId)) {
      query["AlertDingDingGroupBizId"] = request.alertDingDingGroupBizId;
    }

    if (!Util.isUnset(request.alertUserGroupBizId)) {
      query["AlertUserGroupBizId"] = request.alertUserGroupBizId;
    }

    if (!Util.isUnset(request.application)) {
      query["Application"] = request.application;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.createCluster)) {
      query["CreateCluster"] = request.createCluster;
    }

    if (!Util.isUnset(request.cronExpr)) {
      query["CronExpr"] = request.cronExpr;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endSchedule)) {
      query["EndSchedule"] = request.endSchedule;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentCategory)) {
      query["ParentCategory"] = request.parentCategory;
    }

    if (!Util.isUnset(request.parentFlowList)) {
      query["ParentFlowList"] = request.parentFlowList;
    }

    if (!Util.isUnset(request.periodic)) {
      query["Periodic"] = request.periodic;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startSchedule)) {
      query["StartSchedule"] = request.startSchedule;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowResponse>(await this.callApi(params, req, runtime), new ModifyFlowResponse({}));
  }

  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  async modifyFlowCategoryWithOptions(request: ModifyFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowCategory",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowCategoryResponse>(await this.callApi(params, req, runtime), new ModifyFlowCategoryResponse({}));
  }

  async modifyFlowCategory(request: ModifyFlowCategoryRequest): Promise<ModifyFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowCategoryWithOptions(request, runtime);
  }

  async modifyFlowForWebWithOptions(request: ModifyFlowForWebRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowForWebResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConf)) {
      query["AlertConf"] = request.alertConf;
    }

    if (!Util.isUnset(request.alertDingDingGroupBizId)) {
      query["AlertDingDingGroupBizId"] = request.alertDingDingGroupBizId;
    }

    if (!Util.isUnset(request.alertUserGroupBizId)) {
      query["AlertUserGroupBizId"] = request.alertUserGroupBizId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.createCluster)) {
      query["CreateCluster"] = request.createCluster;
    }

    if (!Util.isUnset(request.cronExpr)) {
      query["CronExpr"] = request.cronExpr;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endSchedule)) {
      query["EndSchedule"] = request.endSchedule;
    }

    if (!Util.isUnset(request.graph)) {
      query["Graph"] = request.graph;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.parentCategory)) {
      query["ParentCategory"] = request.parentCategory;
    }

    if (!Util.isUnset(request.parentFlowList)) {
      query["ParentFlowList"] = request.parentFlowList;
    }

    if (!Util.isUnset(request.periodic)) {
      query["Periodic"] = request.periodic;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startSchedule)) {
      query["StartSchedule"] = request.startSchedule;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowForWeb",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowForWebResponse>(await this.callApi(params, req, runtime), new ModifyFlowForWebResponse({}));
  }

  async modifyFlowForWeb(request: ModifyFlowForWebRequest): Promise<ModifyFlowForWebResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowForWebWithOptions(request, runtime);
  }

  async modifyFlowJobWithOptions(request: ModifyFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConf)) {
      query["AlertConf"] = request.alertConf;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.customVariables)) {
      query["CustomVariables"] = request.customVariables;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.envConf)) {
      query["EnvConf"] = request.envConf;
    }

    if (!Util.isUnset(request.failAct)) {
      query["FailAct"] = request.failAct;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.knoxPassword)) {
      query["KnoxPassword"] = request.knoxPassword;
    }

    if (!Util.isUnset(request.knoxUser)) {
      query["KnoxUser"] = request.knoxUser;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.monitorConf)) {
      query["MonitorConf"] = request.monitorConf;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.paramConf)) {
      query["ParamConf"] = request.paramConf;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceList)) {
      query["ResourceList"] = request.resourceList;
    }

    if (!Util.isUnset(request.retryPolicy)) {
      query["RetryPolicy"] = request.retryPolicy;
    }

    if (!Util.isUnset(request.runConf)) {
      query["RunConf"] = request.runConf;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowJobResponse>(await this.callApi(params, req, runtime), new ModifyFlowJobResponse({}));
  }

  async modifyFlowJob(request: ModifyFlowJobRequest): Promise<ModifyFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowJobWithOptions(request, runtime);
  }

  async modifyFlowProjectWithOptions(request: ModifyFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowProject",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowProjectResponse>(await this.callApi(params, req, runtime), new ModifyFlowProjectResponse({}));
  }

  async modifyFlowProject(request: ModifyFlowProjectRequest): Promise<ModifyFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectWithOptions(request, runtime);
  }

  async modifyFlowProjectClusterSettingWithOptions(request: ModifyFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.defaultQueue)) {
      query["DefaultQueue"] = request.defaultQueue;
    }

    if (!Util.isUnset(request.defaultUser)) {
      query["DefaultUser"] = request.defaultUser;
    }

    if (!Util.isUnset(request.hostList)) {
      query["HostList"] = request.hostList;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.queueList)) {
      query["QueueList"] = request.queueList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userList)) {
      query["UserList"] = request.userList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowProjectClusterSetting",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowProjectClusterSettingResponse>(await this.callApi(params, req, runtime), new ModifyFlowProjectClusterSettingResponse({}));
  }

  async modifyFlowProjectClusterSetting(request: ModifyFlowProjectClusterSettingRequest): Promise<ModifyFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async modifyFlowVariableCollectionWithOptions(request: ModifyFlowVariableCollectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowVariableCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowVariableCollection",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowVariableCollectionResponse>(await this.callApi(params, req, runtime), new ModifyFlowVariableCollectionResponse({}));
  }

  async modifyFlowVariableCollection(request: ModifyFlowVariableCollectionRequest): Promise<ModifyFlowVariableCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowVariableCollectionWithOptions(request, runtime);
  }

  async releaseClusterWithOptions(request: ReleaseClusterRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceRelease)) {
      query["ForceRelease"] = request.forceRelease;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

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

  async rerunFlowWithOptions(request: RerunFlowRequest, runtime: $Util.RuntimeOptions): Promise<RerunFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowInstanceId)) {
      query["FlowInstanceId"] = request.flowInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.reRunFail)) {
      query["ReRunFail"] = request.reRunFail;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RerunFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RerunFlowResponse>(await this.callApi(params, req, runtime), new RerunFlowResponse({}));
  }

  async rerunFlow(request: RerunFlowRequest): Promise<RerunFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunFlowWithOptions(request, runtime);
  }

  async restoreFlowEntitySnapshotWithOptions(request: RestoreFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<RestoreFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.operatorId)) {
      query["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.revision)) {
      query["Revision"] = request.revision;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreFlowEntitySnapshot",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreFlowEntitySnapshotResponse>(await this.callApi(params, req, runtime), new RestoreFlowEntitySnapshotResponse({}));
  }

  async restoreFlowEntitySnapshot(request: RestoreFlowEntitySnapshotRequest): Promise<RestoreFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreFlowEntitySnapshotWithOptions(request, runtime);
  }

  async resumeFlowWithOptions(request: ResumeFlowRequest, runtime: $Util.RuntimeOptions): Promise<ResumeFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowInstanceId)) {
      query["FlowInstanceId"] = request.flowInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeFlowResponse>(await this.callApi(params, req, runtime), new ResumeFlowResponse({}));
  }

  async resumeFlow(request: ResumeFlowRequest): Promise<ResumeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeFlowWithOptions(request, runtime);
  }

  async startFlowWithOptions(request: StartFlowRequest, runtime: $Util.RuntimeOptions): Promise<StartFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowInstanceId)) {
      query["FlowInstanceId"] = request.flowInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartFlowResponse>(await this.callApi(params, req, runtime), new StartFlowResponse({}));
  }

  async startFlow(request: StartFlowRequest): Promise<StartFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startFlowWithOptions(request, runtime);
  }

  async submitFlowWithOptions(request: SubmitFlowRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conf)) {
      query["Conf"] = request.conf;
    }

    if (!Util.isUnset(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFlowResponse>(await this.callApi(params, req, runtime), new SubmitFlowResponse({}));
  }

  async submitFlow(request: SubmitFlowRequest): Promise<SubmitFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowWithOptions(request, runtime);
  }

  async submitFlowJobWithOptions(request: SubmitFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.conf)) {
      query["Conf"] = request.conf;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitFlowJob",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitFlowJobResponse>(await this.callApi(params, req, runtime), new SubmitFlowJobResponse({}));
  }

  async submitFlowJob(request: SubmitFlowJobRequest): Promise<SubmitFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowJobWithOptions(request, runtime);
  }

  async suspendFlowWithOptions(request: SuspendFlowRequest, runtime: $Util.RuntimeOptions): Promise<SuspendFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowInstanceId)) {
      query["FlowInstanceId"] = request.flowInstanceId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendFlow",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendFlowResponse>(await this.callApi(params, req, runtime), new SuspendFlowResponse({}));
  }

  async suspendFlow(request: SuspendFlowRequest): Promise<SuspendFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendFlowWithOptions(request, runtime);
  }

}
