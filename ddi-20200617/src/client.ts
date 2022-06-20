// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  statusCode: number;
  body: CloneFlowJobResponseBody;
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
      body: CloneFlowJobResponseBody,
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
  statusCode: number;
  body: CreateClusterV2ResponseBody;
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
  statusCode: number;
  body: CreateFlowResponseBody;
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
  statusCode: number;
  body: CreateFlowCategoryResponseBody;
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
      body: CreateFlowCategoryResponseBody,
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
  statusCode: number;
  body: CreateFlowJobResponseBody;
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
  statusCode: number;
  body: CreateFlowProjectResponseBody;
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
      body: CreateFlowProjectResponseBody,
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
  statusCode: number;
  body: CreateFlowProjectUserResponseBody;
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
  statusCode: number;
  body: DeleteFlowResponseBody;
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
  flowId?: string;
  jobId?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      jobId: 'JobId',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      jobId: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFlowCategoryResponseBody;
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
      body: DeleteFlowCategoryResponseBody,
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
  statusCode: number;
  body: DeleteFlowProjectResponseBody;
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
      body: DeleteFlowProjectResponseBody,
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
  statusCode: number;
  body: DeleteFlowProjectUserResponseBody;
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
  statusCode: number;
  body: DescribeClusterV2ResponseBody;
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
  statusCode: number;
  body: DescribeFlowResponseBody;
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
  statusCode: number;
  body: DescribeFlowCategoryTreeResponseBody;
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
      body: DescribeFlowCategoryTreeResponseBody,
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
  statusCode: number;
  body: DescribeFlowJobResponseBody;
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
  statusCode: number;
  body: DescribeFlowNodeInstanceResponseBody;
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
      body: DescribeFlowNodeInstanceResponseBody,
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
  statusCode: number;
  body: DescribeFlowProjectResponseBody;
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
      body: DescribeFlowProjectResponseBody,
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
  statusCode: number;
  body: KillFlowJobResponseBody;
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
  statusCode: number;
  body: ListClustersResponseBody;
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
  statusCode: number;
  body: ListFlowResponseBody;
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
      body: ListFlowResponseBody,
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
  statusCode: number;
  body: ListFlowJobHistoryResponseBody;
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
      body: ListFlowJobHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobsRequest extends $tea.Model {
  adhoc?: boolean;
  exactName?: string;
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
      exactName: 'ExactName',
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
      exactName: 'string',
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
  statusCode: number;
  body: ListFlowJobsResponseBody;
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
      body: ListFlowJobsResponseBody,
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
  statusCode: number;
  body: ListFlowProjectUserResponseBody;
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
  statusCode: number;
  body: ListFlowProjectsResponseBody;
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
      body: ListFlowProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
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
  statusCode: number;
  body: ModifyFlowForWebResponseBody;
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
  statusCode: number;
  body: ModifyFlowJobResponseBody;
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
  statusCode: number;
  body: ModifyFlowProjectResponseBody;
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
      body: ModifyFlowProjectResponseBody,
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
  statusCode: number;
  body: ReleaseClusterResponseBody;
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
  statusCode: number;
  body: RerunFlowResponseBody;
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
      body: RerunFlowResponseBody,
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
  statusCode: number;
  body: ResumeFlowResponseBody;
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
      body: ResumeFlowResponseBody,
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
  statusCode: number;
  body: SubmitFlowResponseBody;
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
  statusCode: number;
  body: SubmitFlowJobResponseBody;
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
      body: SubmitFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
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

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class TagResourcesRequestTag extends $tea.Model {
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

    if (!Util.isUnset(request.exactName)) {
      query["ExactName"] = request.exactName;
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

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
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

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-06-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
