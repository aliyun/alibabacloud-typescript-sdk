// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AppConfig extends $tea.Model {
  command?: string;
  commandArgs?: string[];
  configMountDescs?: AppConfigConfigMountDescs[];
  deployAcrossNodes?: boolean;
  deployAcrossZones?: boolean;
  emptyDirs?: AppConfigEmptyDirs[];
  enableAhas?: boolean;
  envFroms?: AppConfigEnvFroms[];
  envs?: AppConfigEnvs[];
  imageConfig?: AppConfigImageConfig;
  isMultilingualApp?: boolean;
  javaStartUpConfig?: string;
  limitCpu?: string;
  limitMem?: string;
  liveness?: string;
  localVolumes?: AppConfigLocalVolumes[];
  nasId?: string;
  nasMountDescs?: AppConfigNasMountDescs[];
  nasStorageType?: string;
  packageConfig?: AppConfigPackageConfig;
  postStart?: string;
  preStop?: string;
  pvcMountDescs?: AppConfigPvcMountDescs[];
  readiness?: string;
  replicas?: number;
  requestCpu?: string;
  requestMem?: string;
  runtimeClassName?: string;
  slsConfigs?: AppConfigSlsConfigs[];
  webContainerConfig?: AppConfigWebContainerConfig;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMountDescs: 'ConfigMountDescs',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      imageConfig: 'ImageConfig',
      isMultilingualApp: 'IsMultilingualApp',
      javaStartUpConfig: 'JavaStartUpConfig',
      limitCpu: 'LimitCpu',
      limitMem: 'LimitMem',
      liveness: 'Liveness',
      localVolumes: 'LocalVolumes',
      nasId: 'NasId',
      nasMountDescs: 'NasMountDescs',
      nasStorageType: 'NasStorageType',
      packageConfig: 'PackageConfig',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      requestCpu: 'RequestCpu',
      requestMem: 'RequestMem',
      runtimeClassName: 'RuntimeClassName',
      slsConfigs: 'SlsConfigs',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: { 'type': 'array', 'itemType': 'string' },
      configMountDescs: { 'type': 'array', 'itemType': AppConfigConfigMountDescs },
      deployAcrossNodes: 'boolean',
      deployAcrossZones: 'boolean',
      emptyDirs: { 'type': 'array', 'itemType': AppConfigEmptyDirs },
      enableAhas: 'boolean',
      envFroms: { 'type': 'array', 'itemType': AppConfigEnvFroms },
      envs: { 'type': 'array', 'itemType': AppConfigEnvs },
      imageConfig: AppConfigImageConfig,
      isMultilingualApp: 'boolean',
      javaStartUpConfig: 'string',
      limitCpu: 'string',
      limitMem: 'string',
      liveness: 'string',
      localVolumes: { 'type': 'array', 'itemType': AppConfigLocalVolumes },
      nasId: 'string',
      nasMountDescs: { 'type': 'array', 'itemType': AppConfigNasMountDescs },
      nasStorageType: 'string',
      packageConfig: AppConfigPackageConfig,
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: { 'type': 'array', 'itemType': AppConfigPvcMountDescs },
      readiness: 'string',
      replicas: 'number',
      requestCpu: 'string',
      requestMem: 'string',
      runtimeClassName: 'string',
      slsConfigs: { 'type': 'array', 'itemType': AppConfigSlsConfigs },
      webContainerConfig: AppConfigWebContainerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBody extends $tea.Model {
  code?: number;
  data?: AbortAndRollbackChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AbortAndRollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortAndRollbackChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortAndRollbackChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBody extends $tea.Model {
  code?: number;
  data?: AbortChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AbortChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbortChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbortChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogPathRequest extends $tea.Model {
  appId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogPathResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLogPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLogPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleRequest extends $tea.Model {
  consumerAppsJson?: string;
  dubboMockItemJson?: string;
  enable?: boolean;
  extraJson?: string;
  mockType?: number;
  name?: string;
  namespace?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAppsJson: 'ConsumerAppsJson',
      dubboMockItemJson: 'DubboMockItemJson',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      mockType: 'MockType',
      name: 'Name',
      namespace: 'Namespace',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAppsJson: 'string',
      dubboMockItemJson: 'string',
      enable: 'boolean',
      extraJson: 'string',
      mockType: 'number',
      name: 'string',
      namespace: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBody extends $tea.Model {
  code?: number;
  data?: AddMockRuleResponseBodyData;
  message?: string;
  requestId?: string;
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
      code: 'number',
      data: AddMockRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationRequest extends $tea.Model {
  appIds?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResourceGroupRequest extends $tea.Model {
  resourceGroupIds?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupIds: 'ResourceGroupIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupIds: 'string',
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResourceGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRoleRequest extends $tea.Model {
  roleIds?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: 'string',
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRoleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEcsSlbRequest extends $tea.Model {
  appId?: string;
  deployGroupId?: string;
  listenerHealthCheckUrl?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  slbId?: string;
  VForwardingUrlRule?: string;
  VServerGroupId?: string;
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployGroupId: 'DeployGroupId',
      listenerHealthCheckUrl: 'ListenerHealthCheckUrl',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      slbId: 'SlbId',
      VForwardingUrlRule: 'VForwardingUrlRule',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deployGroupId: 'string',
      listenerHealthCheckUrl: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      slbId: 'string',
      VForwardingUrlRule: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEcsSlbResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEcsSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindEcsSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindEcsSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindK8sSlbRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  port?: string;
  scheduler?: string;
  servicePortInfos?: string;
  slbId?: string;
  slbProtocol?: string;
  specification?: string;
  targetPort?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      port: 'Port',
      scheduler: 'Scheduler',
      servicePortInfos: 'ServicePortInfos',
      slbId: 'SlbId',
      slbProtocol: 'SlbProtocol',
      specification: 'Specification',
      targetPort: 'TargetPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      port: 'string',
      scheduler: 'string',
      servicePortInfos: 'string',
      slbId: 'string',
      slbProtocol: 'string',
      specification: 'string',
      targetPort: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindK8sSlbResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindK8sSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindK8sSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindK8sSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbRequest extends $tea.Model {
  appId?: string;
  listenerPort?: number;
  slbId?: string;
  slbIp?: string;
  type?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      listenerPort: 'ListenerPort',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      listenerPort: 'number',
      slbId: 'string',
      slbIp: 'string',
      type: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBody extends $tea.Model {
  code?: number;
  data?: BindSlbResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BindSlbResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDeployGroupRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  forceStatus?: boolean;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
      forceStatus: 'ForceStatus',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
      forceStatus: 'boolean',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDeployGroupResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDeployGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeDeployGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeDeployGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuePipelineRequest extends $tea.Model {
  confirm?: boolean;
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      confirm: 'Confirm',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirm: 'boolean',
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuePipelineResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContinuePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContinuePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertK8sResourceRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertK8sResourceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertK8sResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertK8sResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertK8sResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleTrigger?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleTrigger: 'ScalingRuleTrigger',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleTrigger: 'string',
      scalingRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBody extends $tea.Model {
  appScalingRule?: CreateApplicationScalingRuleResponseBodyAppScalingRule;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRule: 'AppScalingRule',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRule: CreateApplicationScalingRuleResponseBodyAppScalingRule,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateRequest extends $tea.Model {
  content?: string;
  description?: string;
  format?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponseBody extends $tea.Model {
  code?: number;
  data?: CreateConfigTemplateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateConfigTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIDCImportCommandRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIDCImportCommandResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIDCImportCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIDCImportCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIDCImportCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sConfigMapRequest extends $tea.Model {
  clusterId?: string;
  data?: { [key: string]: any };
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sConfigMapResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateK8sConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateK8sConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  ingressConf?: { [key: string]: any };
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ingressConf: 'IngressConf',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ingressConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateK8sIngressRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateK8sIngressRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sSecretRequest extends $tea.Model {
  base64Encoded?: boolean;
  certId?: string;
  certRegionId?: string;
  clusterId?: string;
  data?: string;
  name?: string;
  namespace?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64Encoded: 'Base64Encoded',
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      clusterId: 'ClusterId',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64Encoded: 'boolean',
      certId: 'string',
      certRegionId: 'string',
      clusterId: 'string',
      data: 'string',
      name: 'string',
      namespace: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sSecretResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateK8sSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateK8sSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sServiceRequest extends $tea.Model {
  appId?: string;
  name?: string;
  servicePorts?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      servicePorts: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sServiceResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateK8sServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateK8sServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleResponseBody extends $tea.Model {
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

export class DeleteApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      mode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterMemberRequest extends $tea.Model {
  clusterId?: string;
  clusterMemberId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterMemberId: 'ClusterMemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterMemberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterMemberResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployGroupRequest extends $tea.Model {
  appId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeployGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeployGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeployGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEcuRequest extends $tea.Model {
  ecuId?: string;
  static names(): { [key: string]: string } {
    return {
      ecuId: 'EcuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEcuResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sConfigMapRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sConfigMapResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteK8sConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteK8sConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sIngressRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sIngressRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteK8sIngressRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteK8sIngressRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sSecretRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sSecretResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteK8sSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteK8sSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sServiceRequest extends $tea.Model {
  appId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sServiceResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteK8sServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteK8sServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogPathRequest extends $tea.Model {
  appId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogPathResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleRequest extends $tea.Model {
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionRequest extends $tea.Model {
  id?: number;
  regionTag?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionTag: 'RegionTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regionDefine?: DeleteUserDefineRegionResponseBodyRegionDefine;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionDefine: 'RegionDefine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionDefine: DeleteUserDefineRegionResponseBodyRegionDefine,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserDefineRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserDefineRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationRequest extends $tea.Model {
  appEnv?: string;
  appId?: string;
  batch?: number;
  batchWaitTime?: number;
  buildPackId?: number;
  componentIds?: string;
  deployType?: string;
  desc?: string;
  gray?: boolean;
  groupId?: string;
  imageUrl?: string;
  packageVersion?: string;
  releaseType?: number;
  trafficControlStrategy?: string;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appEnv: 'AppEnv',
      appId: 'AppId',
      batch: 'Batch',
      batchWaitTime: 'BatchWaitTime',
      buildPackId: 'BuildPackId',
      componentIds: 'ComponentIds',
      deployType: 'DeployType',
      desc: 'Desc',
      gray: 'Gray',
      groupId: 'GroupId',
      imageUrl: 'ImageUrl',
      packageVersion: 'PackageVersion',
      releaseType: 'ReleaseType',
      trafficControlStrategy: 'TrafficControlStrategy',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEnv: 'string',
      appId: 'string',
      batch: 'number',
      batchWaitTime: 'number',
      buildPackId: 'number',
      componentIds: 'string',
      deployType: 'string',
      desc: 'string',
      gray: 'boolean',
      groupId: 'string',
      imageUrl: 'string',
      packageVersion: 'string',
      releaseType: 'number',
      trafficControlStrategy: 'string',
      warUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployK8sApplicationRequest extends $tea.Model {
  appId?: string;
  args?: string;
  batchTimeout?: number;
  batchWaitTime?: number;
  changeOrderDesc?: string;
  command?: string;
  configMountDescs?: string;
  cpuLimit?: number;
  cpuRequest?: number;
  customAffinity?: string;
  customTolerations?: string;
  deployAcrossNodes?: string;
  deployAcrossZones?: string;
  edasContainerVersion?: string;
  emptyDirs?: string;
  enableAhas?: boolean;
  envFroms?: string;
  envs?: string;
  image?: string;
  imageTag?: string;
  JDK?: string;
  javaStartUpConfig?: string;
  liveness?: string;
  localVolume?: string;
  mcpuLimit?: number;
  mcpuRequest?: number;
  memoryLimit?: number;
  memoryRequest?: number;
  mountDescs?: string;
  nasId?: string;
  packageUrl?: string;
  packageVersion?: string;
  packageVersionId?: string;
  postStart?: string;
  preStop?: string;
  pvcMountDescs?: string;
  readiness?: string;
  replicas?: number;
  runtimeClassName?: string;
  slsConfigs?: string;
  storageType?: string;
  trafficControlStrategy?: string;
  updateStrategy?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  volumesStr?: string;
  webContainer?: string;
  webContainerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      args: 'Args',
      batchTimeout: 'BatchTimeout',
      batchWaitTime: 'BatchWaitTime',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      configMountDescs: 'ConfigMountDescs',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      customAffinity: 'CustomAffinity',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      image: 'Image',
      imageTag: 'ImageTag',
      JDK: 'JDK',
      javaStartUpConfig: 'JavaStartUpConfig',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      mcpuLimit: 'McpuLimit',
      mcpuRequest: 'McpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      mountDescs: 'MountDescs',
      nasId: 'NasId',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      packageVersionId: 'PackageVersionId',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      runtimeClassName: 'RuntimeClassName',
      slsConfigs: 'SlsConfigs',
      storageType: 'StorageType',
      trafficControlStrategy: 'TrafficControlStrategy',
      updateStrategy: 'UpdateStrategy',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      volumesStr: 'VolumesStr',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      args: 'string',
      batchTimeout: 'number',
      batchWaitTime: 'number',
      changeOrderDesc: 'string',
      command: 'string',
      configMountDescs: 'string',
      cpuLimit: 'number',
      cpuRequest: 'number',
      customAffinity: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      envFroms: 'string',
      envs: 'string',
      image: 'string',
      imageTag: 'string',
      JDK: 'string',
      javaStartUpConfig: 'string',
      liveness: 'string',
      localVolume: 'string',
      mcpuLimit: 'number',
      mcpuRequest: 'number',
      memoryLimit: 'number',
      memoryRequest: 'number',
      mountDescs: 'string',
      nasId: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      packageVersionId: 'string',
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: 'string',
      readiness: 'string',
      replicas: 'number',
      runtimeClassName: 'string',
      slsConfigs: 'string',
      storageType: 'string',
      trafficControlStrategy: 'string',
      updateStrategy: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      volumesStr: 'string',
      webContainer: 'string',
      webContainerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceListRequest extends $tea.Model {
  appId?: string;
  withNodeInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      withNodeInfo: 'WithNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      withNodeInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceListResponseBody extends $tea.Model {
  code?: number;
  instanceList?: DescribeAppInstanceListResponseBodyInstanceList[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeAppInstanceListResponseBodyInstanceList },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBody extends $tea.Model {
  appScalingRules?: DescribeApplicationScalingRulesResponseBodyAppScalingRules;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRules: 'AppScalingRules',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRules: DescribeApplicationScalingRulesResponseBodyAppScalingRules,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBody extends $tea.Model {
  appScalingRule?: DisableApplicationScalingRuleResponseBodyAppScalingRule;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRule: 'AppScalingRule',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRule: DisableApplicationScalingRuleResponseBodyAppScalingRule,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMockRuleRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMockRuleResponseBody extends $tea.Model {
  code?: number;
  data?: DisableMockRuleResponseBodyData;
  message?: string;
  requestId?: string;
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
      code: 'number',
      data: DisableMockRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBody extends $tea.Model {
  appScalingRule?: EnableApplicationScalingRuleResponseBodyAppScalingRule;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRule: 'AppScalingRule',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRule: EnableApplicationScalingRuleResponseBodyAppScalingRule,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMockRuleRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMockRuleResponseBody extends $tea.Model {
  code?: number;
  data?: EnableMockRuleResponseBodyData;
  message?: string;
  requestId?: string;
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
      code: 'number',
      data: EnableMockRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleRequest extends $tea.Model {
  consumerAppName?: string;
  mockType?: number;
  name?: string;
  namespace?: string;
  pageNumber?: string;
  pageSize?: string;
  providerAppName?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAppName: 'ConsumerAppName',
      mockType: 'MockType',
      name: 'Name',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerAppName: 'ProviderAppName',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAppName: 'string',
      mockType: 'number',
      name: 'string',
      namespace: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      providerAppName: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBody extends $tea.Model {
  code?: string;
  data?: GetAccountMockRuleResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAccountMockRuleResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDeploymentRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDeploymentResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  application?: GetApplicationResponseBodyApplication;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  changeOrderInfo?: GetChangeOrderInfoResponseBodyChangeOrderInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      changeOrderInfo: 'changeOrderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      changeOrderInfo: GetChangeOrderInfoResponseBodyChangeOrderInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChangeOrderInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChangeOrderInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  cluster?: GetClusterResponseBodyCluster;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: GetClusterResponseBodyCluster,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationRequest extends $tea.Model {
  appId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationResponseBody extends $tea.Model {
  code?: number;
  containerConfiguration?: GetContainerConfigurationResponseBodyContainerConfiguration;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      containerConfiguration: 'ContainerConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      containerConfiguration: GetContainerConfigurationResponseBodyContainerConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetContainerConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetContainerConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJavaStartUpConfigRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJavaStartUpConfigResponseBody extends $tea.Model {
  code?: number;
  javaStartUpConfig?: GetJavaStartUpConfigResponseBodyJavaStartUpConfig;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      javaStartUpConfig: 'JavaStartUpConfig',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      javaStartUpConfig: GetJavaStartUpConfigResponseBodyJavaStartUpConfig,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJavaStartUpConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJavaStartUpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJavaStartUpConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJvmConfigurationRequest extends $tea.Model {
  appId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJvmConfigurationResponseBody extends $tea.Model {
  code?: number;
  jvmConfiguration?: GetJvmConfigurationResponseBodyJvmConfiguration;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jvmConfiguration: 'JvmConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      jvmConfiguration: GetJvmConfigurationResponseBodyJvmConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJvmConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJvmConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJvmConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationRequest extends $tea.Model {
  appId?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBody extends $tea.Model {
  applcation?: GetK8sApplicationResponseBodyApplcation;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applcation: 'Applcation',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applcation: GetK8sApplicationResponseBodyApplcation,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterRequest extends $tea.Model {
  clusterType?: number;
  currentPage?: number;
  pageSize?: number;
  regionTag?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionTag: 'RegionTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regionTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBody extends $tea.Model {
  clusterPage?: GetK8sClusterResponseBodyClusterPage;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterPage: 'ClusterPage',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterPage: GetK8sClusterResponseBodyClusterPage,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetK8sClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetK8sClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  services?: GetK8sServicesResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetK8sServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetK8sServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdRequest extends $tea.Model {
  consumerAppId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAppId: 'ConsumerAppId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAppId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetMockRuleByConsumerAppIdResponseBodyData[];
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetMockRuleByConsumerAppIdResponseBodyData },
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMockRuleByConsumerAppIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMockRuleByConsumerAppIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdRequest extends $tea.Model {
  providerAppId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      providerAppId: 'ProviderAppId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerAppId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetMockRuleByProviderAppIdResponseBodyData[];
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetMockRuleByProviderAppIdResponseBodyData },
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMockRuleByProviderAppIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMockRuleByProviderAppIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageStorageCredentialResponseBody extends $tea.Model {
  code?: number;
  credential?: GetPackageStorageCredentialResponseBodyCredential;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      credential: 'Credential',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      credential: GetPackageStorageCredentialResponseBodyCredential,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageStorageCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPackageStorageCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPackageStorageCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesRequest extends $tea.Model {
  appId?: string;
  groupId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBody extends $tea.Model {
  code?: number;
  data?: GetScalingRulesResponseBodyData;
  message?: string;
  requestId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScalingRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  secureToken?: GetSecureTokenResponseBodySecureToken;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secureToken: 'SecureToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      secureToken: GetSecureTokenResponseBodySecureToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecureTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecureTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageRequest extends $tea.Model {
  appId?: string;
  group?: string;
  ip?: string;
  namespace?: string;
  origin?: string;
  page?: number;
  region?: string;
  registryType?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  size?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      group: 'group',
      ip: 'ip',
      namespace: 'namespace',
      origin: 'origin',
      page: 'page',
      region: 'region',
      registryType: 'registryType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      serviceVersion: 'serviceVersion',
      size: 'size',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group: 'string',
      ip: 'string',
      namespace: 'string',
      origin: 'string',
      page: 'number',
      region: 'string',
      registryType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      size: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetServiceConsumersPageResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceConsumersPageResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceConsumersPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceConsumersPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailRequest extends $tea.Model {
  appId?: string;
  group?: string;
  ip?: string;
  namespace?: string;
  origin?: string;
  region?: string;
  registryType?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      group: 'group',
      ip: 'ip',
      namespace: 'namespace',
      origin: 'origin',
      region: 'region',
      registryType: 'registryType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      serviceVersion: 'serviceVersion',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group: 'string',
      ip: 'string',
      namespace: 'string',
      origin: 'string',
      region: 'string',
      registryType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetServiceDetailResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceDetailResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageRequest extends $tea.Model {
  namespace?: string;
  origin?: string;
  page?: number;
  region?: string;
  searchType?: string;
  searchValue?: string;
  serviceType?: string;
  side?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      origin: 'origin',
      page: 'page',
      region: 'region',
      searchType: 'searchType',
      searchValue: 'searchValue',
      serviceType: 'serviceType',
      side: 'side',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      origin: 'string',
      page: 'number',
      region: 'string',
      searchType: 'string',
      searchValue: 'string',
      serviceType: 'string',
      side: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetServiceListPageResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceListPageResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceListPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceListPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageRequest extends $tea.Model {
  appId?: string;
  group?: string;
  ip?: string;
  methodController?: string;
  name?: string;
  namespace?: string;
  origin?: string;
  pageNumber?: number;
  pageSize?: number;
  path?: string;
  region?: string;
  registryType?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      group: 'group',
      ip: 'ip',
      methodController: 'methodController',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      path: 'path',
      region: 'region',
      registryType: 'registryType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      serviceVersion: 'serviceVersion',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group: 'string',
      ip: 'string',
      methodController: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      region: 'string',
      registryType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBody extends $tea.Model {
  code?: string;
  data?: GetServiceMethodPageResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetServiceMethodPageResponseBodyData,
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceMethodPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceMethodPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageRequest extends $tea.Model {
  appId?: string;
  group?: string;
  ip?: string;
  namespace?: string;
  origin?: string;
  page?: number;
  region?: string;
  registryType?: string;
  serviceId?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  size?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      group: 'group',
      ip: 'ip',
      namespace: 'namespace',
      origin: 'origin',
      page: 'page',
      region: 'region',
      registryType: 'registryType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      serviceVersion: 'serviceVersion',
      size: 'size',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group: 'string',
      ip: 'string',
      namespace: 'string',
      origin: 'string',
      page: 'number',
      region: 'string',
      registryType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      size: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetServiceProvidersPageResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceProvidersPageResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceProvidersPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceProvidersPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebContainerConfigRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebContainerConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  webContainerConfig?: GetWebContainerConfigResponseBodyWebContainerConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      webContainerConfig: GetWebContainerConfigResponseBodyWebContainerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebContainerConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebContainerConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebContainerConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportK8sClusterRequest extends $tea.Model {
  clusterId?: string;
  enableAsm?: boolean;
  mode?: number;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      enableAsm: 'EnableAsm',
      mode: 'Mode',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      enableAsm: 'boolean',
      mode: 'number',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportK8sClusterResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportK8sClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportK8sClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportK8sClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationRequest extends $tea.Model {
  applicationName?: string;
  buildPackId?: number;
  clusterId?: string;
  componentIds?: string;
  cpu?: number;
  description?: string;
  ecuInfo?: string;
  enablePortCheck?: boolean;
  enableUrlCheck?: boolean;
  healthCheckURL?: string;
  healthCheckUrl?: string;
  hooks?: string;
  jdk?: string;
  jvmOptions?: string;
  logicalRegionId?: string;
  maxHeapSize?: number;
  maxPermSize?: number;
  mem?: number;
  minHeapSize?: number;
  packageType?: string;
  reservedPortStr?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      buildPackId: 'BuildPackId',
      clusterId: 'ClusterId',
      componentIds: 'ComponentIds',
      cpu: 'Cpu',
      description: 'Description',
      ecuInfo: 'EcuInfo',
      enablePortCheck: 'EnablePortCheck',
      enableUrlCheck: 'EnableUrlCheck',
      healthCheckURL: 'HealthCheckURL',
      healthCheckUrl: 'HealthCheckUrl',
      hooks: 'Hooks',
      jdk: 'Jdk',
      jvmOptions: 'JvmOptions',
      logicalRegionId: 'LogicalRegionId',
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      mem: 'Mem',
      minHeapSize: 'MinHeapSize',
      packageType: 'PackageType',
      reservedPortStr: 'ReservedPortStr',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      buildPackId: 'number',
      clusterId: 'string',
      componentIds: 'string',
      cpu: 'number',
      description: 'string',
      ecuInfo: 'string',
      enablePortCheck: 'boolean',
      enableUrlCheck: 'boolean',
      healthCheckURL: 'string',
      healthCheckUrl: 'string',
      hooks: 'string',
      jdk: 'string',
      jvmOptions: 'string',
      logicalRegionId: 'string',
      maxHeapSize: 'number',
      maxPermSize: 'number',
      mem: 'number',
      minHeapSize: 'number',
      packageType: 'string',
      reservedPortStr: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponseBody extends $tea.Model {
  applicationInfo?: InsertApplicationResponseBodyApplicationInfo;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: InsertApplicationResponseBodyApplicationInfo,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterRequest extends $tea.Model {
  clusterName?: string;
  clusterType?: number;
  iaasProvider?: string;
  logicalRegionId?: string;
  networkMode?: number;
  oversoldFactor?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      iaasProvider: 'IaasProvider',
      logicalRegionId: 'LogicalRegionId',
      networkMode: 'NetworkMode',
      oversoldFactor: 'OversoldFactor',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterType: 'number',
      iaasProvider: 'string',
      logicalRegionId: 'string',
      networkMode: 'number',
      oversoldFactor: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterResponseBody extends $tea.Model {
  cluster?: InsertClusterResponseBodyCluster;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: InsertClusterResponseBodyCluster,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterMemberRequest extends $tea.Model {
  clusterId?: string;
  instanceIds?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      instanceIds: 'instanceIds',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertClusterMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertClusterMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDeployGroupRequest extends $tea.Model {
  appId?: string;
  groupName?: string;
  initPackageVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupName: 'GroupName',
      initPackageVersionId: 'InitPackageVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupName: 'string',
      initPackageVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDeployGroupResponseBody extends $tea.Model {
  code?: number;
  deployGroupEntity?: InsertDeployGroupResponseBodyDeployGroupEntity;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deployGroupEntity: 'DeployGroupEntity',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deployGroupEntity: InsertDeployGroupResponseBodyDeployGroupEntity,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDeployGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertDeployGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertDeployGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationRequest extends $tea.Model {
  appName?: string;
  applicationDescription?: string;
  buildPackId?: string;
  clusterId?: string;
  command?: string;
  commandArgs?: string;
  configMountDescs?: string;
  csClusterId?: string;
  customAffinity?: string;
  customTolerations?: string;
  deployAcrossNodes?: string;
  deployAcrossZones?: string;
  edasContainerVersion?: string;
  emptyDirs?: string;
  enableAhas?: boolean;
  enableAsm?: boolean;
  envFroms?: string;
  envs?: string;
  imageUrl?: string;
  internetSlbId?: string;
  internetSlbPort?: number;
  internetSlbProtocol?: string;
  internetTargetPort?: number;
  intranetSlbId?: string;
  intranetSlbPort?: number;
  intranetSlbProtocol?: string;
  intranetTargetPort?: number;
  isMultilingualApp?: boolean;
  JDK?: string;
  javaStartUpConfig?: string;
  limitCpu?: number;
  limitMem?: number;
  limitmCpu?: number;
  liveness?: string;
  localVolume?: string;
  logicalRegionId?: string;
  mountDescs?: string;
  namespace?: string;
  nasId?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  postStart?: string;
  preStop?: string;
  pvcMountDescs?: string;
  readiness?: string;
  replicas?: number;
  repoId?: string;
  requestsCpu?: number;
  requestsMem?: number;
  requestsmCpu?: number;
  runtimeClassName?: string;
  slsConfigs?: string;
  storageType?: string;
  timeout?: number;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  webContainer?: string;
  webContainerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      applicationDescription: 'ApplicationDescription',
      buildPackId: 'BuildPackId',
      clusterId: 'ClusterId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMountDescs: 'ConfigMountDescs',
      csClusterId: 'CsClusterId',
      customAffinity: 'CustomAffinity',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      enableAsm: 'EnableAsm',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      internetSlbId: 'InternetSlbId',
      internetSlbPort: 'InternetSlbPort',
      internetSlbProtocol: 'InternetSlbProtocol',
      internetTargetPort: 'InternetTargetPort',
      intranetSlbId: 'IntranetSlbId',
      intranetSlbPort: 'IntranetSlbPort',
      intranetSlbProtocol: 'IntranetSlbProtocol',
      intranetTargetPort: 'IntranetTargetPort',
      isMultilingualApp: 'IsMultilingualApp',
      JDK: 'JDK',
      javaStartUpConfig: 'JavaStartUpConfig',
      limitCpu: 'LimitCpu',
      limitMem: 'LimitMem',
      limitmCpu: 'LimitmCpu',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      logicalRegionId: 'LogicalRegionId',
      mountDescs: 'MountDescs',
      namespace: 'Namespace',
      nasId: 'NasId',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvcMountDescs: 'PvcMountDescs',
      readiness: 'Readiness',
      replicas: 'Replicas',
      repoId: 'RepoId',
      requestsCpu: 'RequestsCpu',
      requestsMem: 'RequestsMem',
      requestsmCpu: 'RequestsmCpu',
      runtimeClassName: 'RuntimeClassName',
      slsConfigs: 'SlsConfigs',
      storageType: 'StorageType',
      timeout: 'Timeout',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      applicationDescription: 'string',
      buildPackId: 'string',
      clusterId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMountDescs: 'string',
      csClusterId: 'string',
      customAffinity: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      enableAsm: 'boolean',
      envFroms: 'string',
      envs: 'string',
      imageUrl: 'string',
      internetSlbId: 'string',
      internetSlbPort: 'number',
      internetSlbProtocol: 'string',
      internetTargetPort: 'number',
      intranetSlbId: 'string',
      intranetSlbPort: 'number',
      intranetSlbProtocol: 'string',
      intranetTargetPort: 'number',
      isMultilingualApp: 'boolean',
      JDK: 'string',
      javaStartUpConfig: 'string',
      limitCpu: 'number',
      limitMem: 'number',
      limitmCpu: 'number',
      liveness: 'string',
      localVolume: 'string',
      logicalRegionId: 'string',
      mountDescs: 'string',
      namespace: 'string',
      nasId: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      postStart: 'string',
      preStop: 'string',
      pvcMountDescs: 'string',
      readiness: 'string',
      replicas: 'number',
      repoId: 'string',
      requestsCpu: 'number',
      requestsMem: 'number',
      requestsmCpu: 'number',
      runtimeClassName: 'string',
      slsConfigs: 'string',
      storageType: 'string',
      timeout: 'number',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      webContainer: 'string',
      webContainerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationResponseBody extends $tea.Model {
  applicationInfo?: InsertK8sApplicationResponseBodyApplicationInfo;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: InsertK8sApplicationResponseBodyApplicationInfo,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionRequest extends $tea.Model {
  debugEnable?: boolean;
  description?: string;
  id?: number;
  regionName?: string;
  regionTag?: string;
  static names(): { [key: string]: string } {
    return {
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      regionName: 'RegionName',
      regionTag: 'RegionTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      regionName: 'string',
      regionTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  userDefineRegionEntity?: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionEntity: 'UserDefineRegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      userDefineRegionEntity: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertOrUpdateRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertOrUpdateRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRoleRequest extends $tea.Model {
  actionData?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRoleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertServiceGroupRequest extends $tea.Model {
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertServiceGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertServiceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentRequest extends $tea.Model {
  clusterId?: string;
  doAsync?: boolean;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      doAsync: 'DoAsync',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      doAsync: 'boolean',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBody extends $tea.Model {
  code?: number;
  executionResultList?: InstallAgentResponseBodyExecutionResultList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executionResultList: 'ExecutionResultList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      executionResultList: InstallAgentResponseBodyExecutionResultList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regionEntityList?: ListAliyunRegionResponseBodyRegionEntityList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionEntityList: 'RegionEntityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionEntityList: ListAliyunRegionResponseBodyRegionEntityList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAliyunRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAliyunRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationRequest extends $tea.Model {
  appName?: string;
  clusterId?: string;
  logicalRegionId?: string;
  logicalRegionIdFilter?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      logicalRegionId: 'LogicalRegionId',
      logicalRegionIdFilter: 'LogicalRegionIdFilter',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      logicalRegionId: 'string',
      logicalRegionIdFilter: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $tea.Model {
  applicationList?: ListApplicationResponseBodyApplicationList;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: ListApplicationResponseBodyApplicationList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationEcuRequest extends $tea.Model {
  appId?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationEcuResponseBody extends $tea.Model {
  code?: number;
  ecuInfoList?: ListApplicationEcuResponseBodyEcuInfoList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuInfoList: 'EcuInfoList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuInfoList: ListApplicationEcuResponseBodyEcuInfoList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationEcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplicationEcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplicationEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBody extends $tea.Model {
  authorityList?: ListAuthorityResponseBodyAuthorityList;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorityList: 'AuthorityList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityList: ListAuthorityResponseBodyAuthorityList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponseBody extends $tea.Model {
  buildPackList?: ListBuildPackResponseBodyBuildPackList;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackList: 'BuildPackList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackList: ListBuildPackResponseBodyBuildPackList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBuildPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBuildPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterRequest extends $tea.Model {
  logicalRegionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBody extends $tea.Model {
  clusterList?: ListClusterResponseBodyClusterList;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: ListClusterResponseBodyClusterList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersRequest extends $tea.Model {
  clusterId?: string;
  currentPage?: number;
  ecsList?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      ecsList: 'EcsList',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      ecsList: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBody extends $tea.Model {
  clusterMemberPage?: ListClusterMembersResponseBodyClusterMemberPage;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMemberPage: 'ClusterMemberPage',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMemberPage: ListClusterMembersResponseBodyClusterMemberPage,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $tea.Model {
  code?: number;
  componentList?: ListComponentsResponseBodyComponentList;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      componentList: 'ComponentList',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      componentList: ListComponentsResponseBodyComponentList,
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesRequest extends $tea.Model {
  currentPage?: number;
  id?: number;
  name?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      id: 'number',
      name: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponseBody extends $tea.Model {
  code?: number;
  data?: ListConfigTemplatesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListConfigTemplatesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBody extends $tea.Model {
  code?: number;
  consumedServicesList?: ListConsumedServicesResponseBodyConsumedServicesList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumedServicesList: 'ConsumedServicesList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumedServicesList: ListConsumedServicesResponseBodyConsumedServicesList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConsumedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConsumedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuResponseBody extends $tea.Model {
  code?: number;
  instanceList?: ListConvertableEcuResponseBodyInstanceList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: ListConvertableEcuResponseBodyInstanceList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConvertableEcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConvertableEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBody extends $tea.Model {
  code?: number;
  deployGroupList?: ListDeployGroupResponseBodyDeployGroupList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deployGroupList: 'DeployGroupList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deployGroupList: ListDeployGroupResponseBodyDeployGroupList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsNotInClusterRequest extends $tea.Model {
  networkMode?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      networkMode: 'NetworkMode',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsNotInClusterResponseBody extends $tea.Model {
  code?: number;
  ecsEntityList?: ListEcsNotInClusterResponseBodyEcsEntityList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsEntityList: 'EcsEntityList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecsEntityList: ListEcsNotInClusterResponseBodyEcsEntityList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsNotInClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEcsNotInClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEcsNotInClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionRequest extends $tea.Model {
  act?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponseBody extends $tea.Model {
  code?: number;
  ecuEntityList?: ListEcuByRegionResponseBodyEcuEntityList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuEntityList: 'EcuEntityList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuEntityList: ListEcuByRegionResponseBodyEcuEntityList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEcuByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEcuByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  packageVersionList?: ListHistoryDeployVersionResponseBodyPackageVersionList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      packageVersionList: 'PackageVersionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      packageVersionList: ListHistoryDeployVersionResponseBodyPackageVersionList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHistoryDeployVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHistoryDeployVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsRequest extends $tea.Model {
  clusterId?: string;
  condition?: { [key: string]: any };
  namespace?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  showRelatedApps?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      condition: 'Condition',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      showRelatedApps: 'ShowRelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      showRelatedApps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListK8sConfigMapsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListK8sConfigMapsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListK8sConfigMapsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesRequest extends $tea.Model {
  clusterId?: string;
  condition?: string;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      condition: 'Condition',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      condition: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBody extends $tea.Model {
  code?: number;
  data?: ListK8sIngressRulesResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListK8sIngressRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListK8sIngressRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsRequest extends $tea.Model {
  clusterId?: string;
  condition?: string;
  namespace?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  showRelatedApps?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      condition: 'Condition',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      showRelatedApps: 'ShowRelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      condition: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      showRelatedApps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: ListK8sSecretsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListK8sSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListK8sSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsRequest extends $tea.Model {
  appId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  serviceMethodList?: ListMethodsResponseBodyServiceMethodList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      serviceMethodList: 'ServiceMethodList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      serviceMethodList: ListMethodsResponseBodyServiceMethodList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMethodsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMethodsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  publishedServicesList?: ListPublishedServicesResponseBodyPublishedServicesList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      publishedServicesList: 'PublishedServicesList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      publishedServicesList: ListPublishedServicesResponseBodyPublishedServicesList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublishedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublishedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderResponseBody extends $tea.Model {
  changeOrderList?: ListRecentChangeOrderResponseBodyChangeOrderList;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: ListRecentChangeOrderResponseBodyChangeOrderList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecentChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecentChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resourceGroupList?: ListResourceGroupResponseBodyResourceGroupList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceGroupList: 'ResourceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resourceGroupList: ListResourceGroupResponseBodyResourceGroupList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  roleList?: ListRoleResponseBodyRoleList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      roleList: ListRoleResponseBodyRoleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBody extends $tea.Model {
  code?: number;
  data?: ListRootStacksResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListRootStacksResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRootStacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRootStacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  cpu?: number;
  groupId?: string;
  instanceNum?: number;
  logicalRegionId?: string;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      groupId: 'GroupId',
      instanceNum: 'InstanceNum',
      logicalRegionId: 'LogicalRegionId',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      cpu: 'number',
      groupId: 'string',
      instanceNum: 'number',
      logicalRegionId: 'string',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBody extends $tea.Model {
  code?: number;
  ecuInfoList?: ListScaleOutEcuResponseBodyEcuInfoList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuInfoList: 'EcuInfoList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuInfoList: ListScaleOutEcuResponseBodyEcuInfoList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScaleOutEcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScaleOutEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  serviceGroupsList?: ListServiceGroupsResponseBodyServiceGroupsList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      serviceGroupsList: 'ServiceGroupsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      serviceGroupsList: ListServiceGroupsResponseBodyServiceGroupsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  slbList?: ListSlbResponseBodySlbList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      slbList: 'SlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      slbList: ListSlbResponseBodySlbList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  subAccountList?: ListSubAccountResponseBodySubAccountList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subAccountList: 'SubAccountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      subAccountList: ListSubAccountResponseBodySubAccountList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSubAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSubAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceIds?: { [key: string]: any };
  resourceRegionId?: string;
  resourceType?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceRegionId: 'string',
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionRequest extends $tea.Model {
  debugEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      debugEnable: 'DebugEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  userDefineRegionList?: ListUserDefineRegionResponseBodyUserDefineRegionList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionList: 'UserDefineRegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      userDefineRegionList: ListUserDefineRegionResponseBodyUserDefineRegionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserDefineRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserDefineRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  vpcList?: ListVpcResponseBodyVpcList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      vpcList: ListVpcResponseBodyVpcList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateEcuRequest extends $tea.Model {
  instanceIds?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateEcuResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateEcuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateEcuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequest extends $tea.Model {
  acceptEULA?: boolean;
  appId?: string;
  groupId?: string;
  inCondition?: string;
  inCpu?: number;
  inDuration?: number;
  inEnable?: boolean;
  inInstanceNum?: number;
  inLoad?: number;
  inRT?: number;
  inStep?: number;
  keyPairName?: string;
  multiAzPolicy?: string;
  outCPU?: number;
  outCondition?: string;
  outDuration?: number;
  outEnable?: boolean;
  outInstanceNum?: number;
  outLoad?: number;
  outRT?: number;
  outStep?: number;
  password?: string;
  resourceFrom?: string;
  scalingPolicy?: string;
  templateId?: string;
  templateInstanceId?: string;
  templateInstanceName?: string;
  templateVersion?: number;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptEULA: 'AcceptEULA',
      appId: 'AppId',
      groupId: 'GroupId',
      inCondition: 'InCondition',
      inCpu: 'InCpu',
      inDuration: 'InDuration',
      inEnable: 'InEnable',
      inInstanceNum: 'InInstanceNum',
      inLoad: 'InLoad',
      inRT: 'InRT',
      inStep: 'InStep',
      keyPairName: 'KeyPairName',
      multiAzPolicy: 'MultiAzPolicy',
      outCPU: 'OutCPU',
      outCondition: 'OutCondition',
      outDuration: 'OutDuration',
      outEnable: 'OutEnable',
      outInstanceNum: 'OutInstanceNum',
      outLoad: 'OutLoad',
      outRT: 'OutRT',
      outStep: 'OutStep',
      password: 'Password',
      resourceFrom: 'ResourceFrom',
      scalingPolicy: 'ScalingPolicy',
      templateId: 'TemplateId',
      templateInstanceId: 'TemplateInstanceId',
      templateInstanceName: 'TemplateInstanceName',
      templateVersion: 'TemplateVersion',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptEULA: 'boolean',
      appId: 'string',
      groupId: 'string',
      inCondition: 'string',
      inCpu: 'number',
      inDuration: 'number',
      inEnable: 'boolean',
      inInstanceNum: 'number',
      inLoad: 'number',
      inRT: 'number',
      inStep: 'number',
      keyPairName: 'string',
      multiAzPolicy: 'string',
      outCPU: 'number',
      outCondition: 'string',
      outDuration: 'number',
      outEnable: 'boolean',
      outInstanceNum: 'number',
      outLoad: 'number',
      outRT: 'number',
      outStep: 'number',
      password: 'string',
      resourceFrom: 'string',
      scalingPolicy: 'string',
      templateId: 'string',
      templateInstanceId: 'string',
      templateInstanceName: 'string',
      templateVersion: 'number',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBody extends $tea.Model {
  appInfo?: QueryApplicationStatusResponseBodyAppInfo;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: QueryApplicationStatusResponseBodyAppInfo,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryApplicationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryApplicationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoRequest extends $tea.Model {
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoResponseBody extends $tea.Model {
  code?: number;
  eccInfo?: QueryEccInfoResponseBodyEccInfo;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eccInfo: 'EccInfo',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      eccInfo: QueryEccInfoResponseBodyEccInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEccInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEccInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListRequest extends $tea.Model {
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListResponseBody extends $tea.Model {
  code?: number;
  ecuEntityList?: QueryMigrateEcuListResponseBodyEcuEntityList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuEntityList: 'EcuEntityList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuEntityList: QueryMigrateEcuListResponseBodyEcuEntityList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMigrateEcuListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMigrateEcuListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListRequest extends $tea.Model {
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regionEntityList?: QueryMigrateRegionListResponseBodyRegionEntityList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionEntityList: 'RegionEntityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionEntityList: QueryMigrateRegionListResponseBodyRegionEntityList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMigrateRegionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMigrateRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regionConfig?: QueryRegionConfigResponseBodyRegionConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionConfig: 'RegionConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionConfig: QueryRegionConfigResponseBodyRegionConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRegionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRegionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: QuerySlsLogStoreListResponseBodyResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QuerySlsLogStoreListResponseBodyResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySlsLogStoreListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySlsLogStoreListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMockRuleRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMockRuleResponseBody extends $tea.Model {
  code?: string;
  data?: RemoveMockRuleResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RemoveMockRuleResponseBodyData,
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetApplicationRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartK8sApplicationRequest extends $tea.Model {
  appId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeOrderTaskRequest extends $tea.Model {
  retryStatus?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      retryStatus: 'RetryStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryStatus: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeOrderTaskResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeOrderTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryChangeOrderTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryChangeOrderTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  batch?: number;
  batchWaitTime?: number;
  groupId?: string;
  historyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batch: 'Batch',
      batchWaitTime: 'BatchWaitTime',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batch: 'number',
      batchWaitTime: 'number',
      groupId: 'string',
      historyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackChangeOrderResponseBody extends $tea.Model {
  code?: number;
  data?: RollbackChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: RollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackChangeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInApplicationRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  forceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
      forceStatus: 'ForceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
      forceStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScaleInApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleInApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleK8sApplicationRequest extends $tea.Model {
  appId?: string;
  replicas?: number;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      replicas: 'Replicas',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      replicas: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScaleK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutApplicationRequest extends $tea.Model {
  appId?: string;
  deployGroup?: string;
  ecuInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployGroup: 'DeployGroup',
      ecuInfo: 'EcuInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deployGroup: 'string',
      ecuInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScaleOutApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleOutApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleoutApplicationWithNewInstancesRequest extends $tea.Model {
  appId?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  clusterId?: string;
  groupId?: string;
  instanceChargePeriod?: number;
  instanceChargePeriodUnit?: string;
  instanceChargeType?: string;
  scalingNum?: number;
  scalingPolicy?: string;
  templateId?: string;
  templateInstanceId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      instanceChargePeriod: 'InstanceChargePeriod',
      instanceChargePeriodUnit: 'InstanceChargePeriodUnit',
      instanceChargeType: 'InstanceChargeType',
      scalingNum: 'ScalingNum',
      scalingPolicy: 'ScalingPolicy',
      templateId: 'TemplateId',
      templateInstanceId: 'TemplateInstanceId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clusterId: 'string',
      groupId: 'string',
      instanceChargePeriod: 'number',
      instanceChargePeriodUnit: 'string',
      instanceChargeType: 'string',
      scalingNum: 'number',
      scalingPolicy: 'string',
      templateId: 'string',
      templateInstanceId: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleoutApplicationWithNewInstancesResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  instanceIds?: string[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleoutApplicationWithNewInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScaleoutApplicationWithNewInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleoutApplicationWithNewInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sApplicationRequest extends $tea.Model {
  appId?: string;
  replicas?: number;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      replicas: 'Replicas',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      replicas: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationRequest extends $tea.Model {
  appId?: string;
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopK8sApplicationRequest extends $tea.Model {
  appId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopK8sApplicationResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopK8sApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopK8sApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopK8sApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchAdvancedMonitoringRequest extends $tea.Model {
  appId?: string;
  enableAdvancedMonitoring?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableAdvancedMonitoring: 'EnableAdvancedMonitoring',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableAdvancedMonitoring: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchAdvancedMonitoringResponseBody extends $tea.Model {
  advancedMonitoringEnabled?: boolean;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedMonitoringEnabled: 'AdvancedMonitoringEnabled',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedMonitoringEnabled: 'boolean',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchAdvancedMonitoringResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchAdvancedMonitoringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchAdvancedMonitoringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeResourceRequest extends $tea.Model {
  resourceIds?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeResourceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SynchronizeResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SynchronizeResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceIds?: string;
  resourceRegionId?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClusterMemberRequest extends $tea.Model {
  instanceIds?: string;
  password?: string;
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      password: 'Password',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      password: 'string',
      targetClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClusterMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClusterMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransformClusterMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransformClusterMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindK8sSlbRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  slbName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      slbName: 'SlbName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      slbName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindK8sSlbResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindK8sSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindK8sSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindK8sSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbRequest extends $tea.Model {
  appId?: string;
  deleteListener?: string;
  slbId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deleteListener: 'DeleteListener',
      slbId: 'SlbId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deleteListener: 'string',
      slbId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  deleteAll?: boolean;
  resourceIds?: string;
  resourceRegionId?: string;
  resourceType?: string;
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      resourceIds: 'ResourceIds',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      resourceIds: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountInfoRequest extends $tea.Model {
  email?: string;
  name?: string;
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      telephone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationBaseInfoRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  desc?: string;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      desc: 'Desc',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      desc: 'string',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationBaseInfoResponseBody extends $tea.Model {
  applcation?: UpdateApplicationBaseInfoResponseBodyApplcation;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applcation: 'Applcation',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applcation: UpdateApplicationBaseInfoResponseBodyApplcation,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationBaseInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApplicationBaseInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicationBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleTrigger?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleTrigger: 'ScalingRuleTrigger',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleTrigger: 'string',
      scalingRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBody extends $tea.Model {
  appScalingRule?: UpdateApplicationScalingRuleResponseBodyAppScalingRule;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRule: 'AppScalingRule',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRule: UpdateApplicationScalingRuleResponseBodyAppScalingRule,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateRequest extends $tea.Model {
  content?: string;
  description?: string;
  format?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerRequest extends $tea.Model {
  appId?: string;
  buildPackId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      buildPackId: 'BuildPackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      buildPackId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateContainerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateContainerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerConfigurationRequest extends $tea.Model {
  appId?: string;
  contextPath?: string;
  groupId?: string;
  httpPort?: number;
  maxThreads?: number;
  URIEncoding?: string;
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      contextPath: 'ContextPath',
      groupId: 'GroupId',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      contextPath: 'string',
      groupId: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      URIEncoding: 'string',
      useBodyEncoding: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerConfigurationResponseBody extends $tea.Model {
  code?: number;
  containerConfiguration?: UpdateContainerConfigurationResponseBodyContainerConfiguration;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      containerConfiguration: 'ContainerConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      containerConfiguration: UpdateContainerConfigurationResponseBodyContainerConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateContainerConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateContainerConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckUrlRequest extends $tea.Model {
  appId?: string;
  hcURL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      hcURL: 'hcURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      hcURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckUrlResponseBody extends $tea.Model {
  code?: number;
  healthCheckURL?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      healthCheckURL: 'HealthCheckURL',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      healthCheckURL: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHealthCheckUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHealthCheckUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHealthCheckUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHookConfigurationRequest extends $tea.Model {
  appId?: string;
  groupId?: string;
  hooks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      hooks: 'Hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      hooks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHookConfigurationResponseBody extends $tea.Model {
  code?: number;
  hooksConfiguration?: UpdateHookConfigurationResponseBodyHooksConfiguration[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hooksConfiguration: 'HooksConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      hooksConfiguration: { 'type': 'array', 'itemType': UpdateHookConfigurationResponseBodyHooksConfiguration },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHookConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHookConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHookConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationRequest extends $tea.Model {
  appId?: string;
  groupId?: string;
  maxHeapSize?: number;
  maxPermSize?: number;
  minHeapSize?: number;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      minHeapSize: 'MinHeapSize',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      maxHeapSize: 'number',
      maxPermSize: 'number',
      minHeapSize: 'number',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationResponseBody extends $tea.Model {
  code?: number;
  jvmConfiguration?: UpdateJvmConfigurationResponseBodyJvmConfiguration;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jvmConfiguration: 'JvmConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      jvmConfiguration: UpdateJvmConfigurationResponseBodyJvmConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateJvmConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateJvmConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationBaseInfoRequest extends $tea.Model {
  appId?: string;
  description?: string;
  email?: string;
  owner?: string;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      email: 'Email',
      owner: 'Owner',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      email: 'string',
      owner: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationBaseInfoResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationBaseInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sApplicationBaseInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sApplicationBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationConfigRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  cpuLimit?: string;
  cpuRequest?: string;
  mcpuLimit?: string;
  mcpuRequest?: string;
  memoryLimit?: string;
  memoryRequest?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      mcpuLimit: 'McpuLimit',
      mcpuRequest: 'McpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      cpuLimit: 'string',
      cpuRequest: 'string',
      mcpuLimit: 'string',
      mcpuRequest: 'string',
      memoryLimit: 'string',
      memoryRequest: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationConfigResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sApplicationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sApplicationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sConfigMapRequest extends $tea.Model {
  clusterId?: string;
  data?: { [key: string]: any };
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sConfigMapResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sConfigMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  ingressConf?: { [key: string]: any };
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ingressConf: 'IngressConf',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ingressConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sIngressRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sIngressRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sResourceRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  resourceContent?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      resourceContent: 'ResourceContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      resourceContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sResourceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSecretRequest extends $tea.Model {
  base64Encoded?: boolean;
  certId?: string;
  certRegionId?: string;
  clusterId?: string;
  data?: string;
  name?: string;
  namespace?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64Encoded: 'Base64Encoded',
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      clusterId: 'ClusterId',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64Encoded: 'boolean',
      certId: 'string',
      certRegionId: 'string',
      clusterId: 'string',
      data: 'string',
      name: 'string',
      namespace: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSecretResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sServiceRequest extends $tea.Model {
  appId?: string;
  name?: string;
  servicePorts?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      servicePorts: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sServiceResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSlbRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  disableForceOverride?: boolean;
  port?: string;
  scheduler?: string;
  servicePortInfos?: string;
  slbName?: string;
  slbProtocol?: string;
  specification?: string;
  targetPort?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      disableForceOverride: 'DisableForceOverride',
      port: 'Port',
      scheduler: 'Scheduler',
      servicePortInfos: 'ServicePortInfos',
      slbName: 'SlbName',
      slbProtocol: 'SlbProtocol',
      specification: 'Specification',
      targetPort: 'TargetPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      disableForceOverride: 'boolean',
      port: 'string',
      scheduler: 'string',
      servicePortInfos: 'string',
      slbName: 'string',
      slbProtocol: 'string',
      specification: 'string',
      targetPort: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSlbResponseBody extends $tea.Model {
  changeOrderId?: string;
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateK8sSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateK8sSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleRequest extends $tea.Model {
  dubboMockItemJson?: string;
  extraJson?: string;
  id?: string;
  name?: string;
  region?: string;
  scMockItemJson?: string;
  static names(): { [key: string]: string } {
    return {
      dubboMockItemJson: 'DubboMockItemJson',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMockItemJson: 'string',
      extraJson: 'string',
      id: 'string',
      name: 'string',
      region: 'string',
      scMockItemJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateMockRuleResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateMockRuleResponseBodyData,
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  actionData?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlsLogStoreRequest extends $tea.Model {
  appId?: string;
  configs?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      configs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlsLogStoreResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSlsLogStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSlsLogStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigConfigMountDescsMountItems extends $tea.Model {
  key?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigConfigMountDescs extends $tea.Model {
  mountItems?: AppConfigConfigMountDescsMountItems[];
  mountPath?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mountItems: 'MountItems',
      mountPath: 'MountPath',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountItems: { 'type': 'array', 'itemType': AppConfigConfigMountDescsMountItems },
      mountPath: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEmptyDirs extends $tea.Model {
  mountPath?: string;
  name?: string;
  readOnly?: boolean;
  subPathExpr?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPathExpr: 'SubPathExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPathExpr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEnvFroms extends $tea.Model {
  configMapRef?: string;
  secretRef?: string;
  static names(): { [key: string]: string } {
    return {
      configMapRef: 'ConfigMapRef',
      secretRef: 'SecretRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapRef: 'string',
      secretRef: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigEnvs extends $tea.Model {
  name?: string;
  value?: string;
  valueFrom?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigImageConfig extends $tea.Model {
  containerRegistryId?: string;
  crInstanceId?: string;
  crRegionId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      containerRegistryId: 'ContainerRegistryId',
      crInstanceId: 'CrInstanceId',
      crRegionId: 'CrRegionId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerRegistryId: 'string',
      crInstanceId: 'string',
      crRegionId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigLocalVolumes extends $tea.Model {
  mountPath?: string;
  name?: string;
  nodePath?: string;
  opsAuth?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      nodePath: 'NodePath',
      opsAuth: 'OpsAuth',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      nodePath: 'string',
      opsAuth: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigNasMountDescs extends $tea.Model {
  mountPath?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPackageConfig extends $tea.Model {
  edasContainerVersion?: string;
  jdk?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  timezone?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      edasContainerVersion: 'EdasContainerVersion',
      jdk: 'Jdk',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      timezone: 'Timezone',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasContainerVersion: 'string',
      jdk: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      timezone: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPvcMountDescsMountPaths extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPathExpr?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPathExpr: 'SubPathExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPathExpr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigPvcMountDescs extends $tea.Model {
  mountPaths?: AppConfigPvcMountDescsMountPaths[];
  pvcName?: string;
  static names(): { [key: string]: string } {
    return {
      mountPaths: 'MountPaths',
      pvcName: 'PvcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPaths: { 'type': 'array', 'itemType': AppConfigPvcMountDescsMountPaths },
      pvcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigSlsConfigs extends $tea.Model {
  logDir?: string;
  logstore?: string;
  project?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logDir: 'LogDir',
      logstore: 'Logstore',
      project: 'Project',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logDir: 'string',
      logstore: 'string',
      project: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppConfigWebContainerConfig extends $tea.Model {
  connectorType?: string;
  contextInputType?: string;
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  serverXml?: string;
  uriEncoding?: string;
  useAdvancedServerXml?: boolean;
  useBodyEncoding?: boolean;
  useDefaultConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectorType: 'ConnectorType',
      contextInputType: 'ContextInputType',
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      serverXml: 'ServerXml',
      uriEncoding: 'UriEncoding',
      useAdvancedServerXml: 'UseAdvancedServerXml',
      useBodyEncoding: 'UseBodyEncoding',
      useDefaultConfig: 'UseDefaultConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorType: 'string',
      contextInputType: 'string',
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      serverXml: 'string',
      uriEncoding: 'string',
      useAdvancedServerXml: 'boolean',
      useBodyEncoding: 'boolean',
      useDefaultConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBodyData extends $tea.Model {
  extSlbId?: string;
  extSlbIp?: string;
  extSlbName?: string;
  extVServerGroupId?: string;
  slbId?: string;
  slbIp?: string;
  slbName?: string;
  slbPort?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      extVServerGroupId: 'ExtVServerGroupId',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      extVServerGroupId: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $tea.Model {
  metaData?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $tea.Model {
  maxReplicas?: number;
  minReplicas?: number;
  triggers?: CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRule extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  maxReplicas?: number;
  metric?: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric;
  minReplicas?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  trigger?: CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigTemplateResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionResponseBodyRegionDefine extends $tea.Model {
  belongRegion?: string;
  description?: string;
  id?: number;
  regionId?: string;
  regionName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      description: 'Description',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      description: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceListResponseBodyInstanceList extends $tea.Model {
  appId?: string;
  canary?: boolean;
  groupId?: string;
  groupName?: string;
  nodeLabels?: string;
  nodeName?: string;
  podRaw?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      canary: 'Canary',
      groupId: 'GroupId',
      groupName: 'GroupName',
      nodeLabels: 'NodeLabels',
      nodeName: 'NodeName',
      podRaw: 'PodRaw',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      canary: 'boolean',
      groupId: 'string',
      groupName: 'string',
      nodeLabels: 'string',
      nodeName: 'string',
      podRaw: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers extends $tea.Model {
  metaData?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger extends $tea.Model {
  maxReplicas?: number;
  minReplicas?: number;
  triggers?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  maxReplicas?: number;
  metric?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric;
  minReplicas?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  trigger?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRules extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  result?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $tea.Model {
  metaData?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $tea.Model {
  maxReplicas?: number;
  minReplicas?: number;
  triggers?: DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBodyAppScalingRule extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  maxReplicas?: number;
  metric?: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric;
  minReplicas?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  trigger?: DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: EnableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': EnableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $tea.Model {
  metaData?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $tea.Model {
  maxReplicas?: number;
  minReplicas?: number;
  triggers?: EnableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': EnableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBodyAppScalingRule extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  maxReplicas?: number;
  metric?: EnableApplicationScalingRuleResponseBodyAppScalingRuleMetric;
  minReplicas?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  trigger?: EnableApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: EnableApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: EnableApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResultDubboMockItems extends $tea.Model {
  exceptionClassName?: string;
  executeCondition?: string;
  group?: string;
  methodName?: string;
  oper?: string;
  paramTypes?: string[];
  serviceName?: string;
  value?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionClassName: 'ExceptionClassName',
      executeCondition: 'ExecuteCondition',
      group: 'Group',
      methodName: 'MethodName',
      oper: 'Oper',
      paramTypes: 'ParamTypes',
      serviceName: 'ServiceName',
      value: 'Value',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionClassName: 'string',
      executeCondition: 'string',
      group: 'string',
      methodName: 'string',
      oper: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      serviceName: 'string',
      value: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResultScMockItems extends $tea.Model {
  exceptionClassName?: string;
  executeCondition?: string;
  method?: string;
  oper?: string;
  path?: string;
  serviceName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionClassName: 'ExceptionClassName',
      executeCondition: 'ExecuteCondition',
      method: 'Method',
      oper: 'Oper',
      path: 'Path',
      serviceName: 'ServiceName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionClassName: 'string',
      executeCondition: 'string',
      method: 'string',
      oper: 'string',
      path: 'string',
      serviceName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResult extends $tea.Model {
  consumerAppId?: string;
  consumerAppName?: string;
  dubboMockItems?: GetAccountMockRuleResponseBodyDataResultDubboMockItems[];
  enable?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItems?: GetAccountMockRuleResponseBodyDataResultScMockItems[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      dubboMockItems: 'DubboMockItems',
      enable: 'Enable',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItems: 'ScMockItems',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAppId: 'string',
      consumerAppName: 'string',
      dubboMockItems: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResultDubboMockItems },
      enable: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItems: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResultScMockItems },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: GetAccountMockRuleResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  appId?: string;
  applicationType?: string;
  buildPackageId?: number;
  clusterId?: string;
  clusterType?: string;
  cpu?: number;
  createTime?: number;
  description?: string;
  dockerize?: boolean;
  email?: string;
  extSlbId?: string;
  extSlbIp?: string;
  extSlbName?: string;
  healthCheckUrl?: string;
  instanceCount?: number;
  memory?: number;
  name?: string;
  nameSpace?: string;
  owner?: string;
  port?: number;
  regionId?: string;
  runningInstanceCount?: number;
  slbId?: string;
  slbInfo?: string;
  slbIp?: string;
  slbName?: string;
  slbPort?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      description: 'Description',
      dockerize: 'Dockerize',
      email: 'Email',
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      name: 'Name',
      nameSpace: 'NameSpace',
      owner: 'Owner',
      port: 'Port',
      regionId: 'RegionId',
      runningInstanceCount: 'RunningInstanceCount',
      slbId: 'SlbId',
      slbInfo: 'SlbInfo',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'string',
      cpu: 'number',
      createTime: 'number',
      description: 'string',
      dockerize: 'boolean',
      email: 'string',
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      memory: 'number',
      name: 'string',
      nameSpace: 'string',
      owner: 'string',
      port: 'number',
      regionId: 'string',
      runningInstanceCount: 'number',
      slbId: 'string',
      slbInfo: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO extends $tea.Model {
  retryType?: number;
  showManualIgnorance?: boolean;
  taskErrorCode?: string;
  taskErrorIgnorance?: number;
  taskErrorMessage?: string;
  taskId?: string;
  taskMessage?: string;
  taskName?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      retryType: 'RetryType',
      showManualIgnorance: 'ShowManualIgnorance',
      taskErrorCode: 'TaskErrorCode',
      taskErrorIgnorance: 'TaskErrorIgnorance',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryType: 'number',
      showManualIgnorance: 'boolean',
      taskErrorCode: 'string',
      taskErrorIgnorance: 'number',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskMessage: 'string',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList extends $tea.Model {
  taskInfoDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO[];
  static names(): { [key: string]: string } {
    return {
      taskInfoDTO: 'TaskInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfoDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO extends $tea.Model {
  stageId?: string;
  stageName?: string;
  stageStatus?: number;
  taskList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageName: 'StageName',
      stageStatus: 'StageStatus',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageName: 'string',
      stageStatus: 'number',
      taskList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList extends $tea.Model {
  stageDetailDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO[];
  static names(): { [key: string]: string } {
    return {
      stageDetailDTO: 'StageDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageDetailDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO extends $tea.Model {
  finishTime?: string;
  stageId?: string;
  stageMessage?: string;
  stageName?: string;
  startTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      stageId: 'StageId',
      stageMessage: 'StageMessage',
      stageName: 'StageName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      stageId: 'string',
      stageMessage: 'string',
      stageName: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList extends $tea.Model {
  instanceStageDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO[];
  static names(): { [key: string]: string } {
    return {
      instanceStageDTO: 'InstanceStageDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStageDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO extends $tea.Model {
  instanceIp?: string;
  instanceName?: string;
  instanceStageDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList;
  podName?: string;
  podStatus?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceStageDTOList: 'InstanceStageDTOList',
      podName: 'PodName',
      podStatus: 'PodStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIp: 'string',
      instanceName: 'string',
      instanceStageDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList,
      podName: 'string',
      podStatus: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList extends $tea.Model {
  instanceDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO[];
  static names(): { [key: string]: string } {
    return {
      instanceDTO: 'InstanceDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage extends $tea.Model {
  message?: string;
  stageId?: string;
  stageName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO extends $tea.Model {
  instanceDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList;
  serviceStage?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage;
  static names(): { [key: string]: string } {
    return {
      instanceDTOList: 'InstanceDTOList',
      serviceStage: 'ServiceStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList,
      serviceStage: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO extends $tea.Model {
  stageId?: string;
  stageName?: string;
  stageResultDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageName: 'StageName',
      stageResultDTO: 'StageResultDTO',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageName: 'string',
      stageResultDTO: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList extends $tea.Model {
  stageInfoDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO[];
  static names(): { [key: string]: string } {
    return {
      stageInfoDTO: 'StageInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageInfoDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo extends $tea.Model {
  pipelineId?: string;
  pipelineName?: string;
  pipelineStatus?: number;
  stageDetailList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList;
  stageList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList;
  startTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      stageDetailList: 'StageDetailList',
      stageList: 'StageList',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      stageDetailList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList,
      stageList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList,
      startTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList extends $tea.Model {
  pipelineInfo?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo[];
  static names(): { [key: string]: string } {
    return {
      pipelineInfo: 'PipelineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineInfo: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoTargets extends $tea.Model {
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl extends $tea.Model {
  routes?: string;
  rules?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      routes: 'Routes',
      rules: 'Rules',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: 'string',
      rules: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfo extends $tea.Model {
  batchCount?: number;
  batchType?: string;
  changeOrderDescription?: string;
  changeOrderId?: string;
  coType?: string;
  createTime?: string;
  createUserId?: string;
  desc?: string;
  pipelineInfoList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList;
  status?: number;
  supportRollback?: boolean;
  targets?: GetChangeOrderInfoResponseBodyChangeOrderInfoTargets;
  trafficControl?: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderDescription: 'ChangeOrderDescription',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      desc: 'Desc',
      pipelineInfoList: 'PipelineInfoList',
      status: 'Status',
      supportRollback: 'SupportRollback',
      targets: 'Targets',
      trafficControl: 'TrafficControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderDescription: 'string',
      changeOrderId: 'string',
      coType: 'string',
      createTime: 'string',
      createUserId: 'string',
      desc: 'string',
      pipelineInfoList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList,
      status: 'number',
      supportRollback: 'boolean',
      targets: GetChangeOrderInfoResponseBodyChangeOrderInfoTargets,
      trafficControl: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyCluster extends $tea.Model {
  clusterId?: string;
  clusterImportStatus?: number;
  clusterName?: string;
  clusterType?: number;
  cpu?: number;
  cpuUsed?: number;
  createTime?: number;
  csClusterId?: string;
  description?: string;
  iaasProvider?: string;
  mem?: number;
  memUsed?: number;
  networkMode?: number;
  nodeNum?: number;
  oversoldFactor?: number;
  regionId?: string;
  updateTime?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterImportStatus: 'ClusterImportStatus',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      description: 'Description',
      iaasProvider: 'IaasProvider',
      mem: 'Mem',
      memUsed: 'MemUsed',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterImportStatus: 'number',
      clusterName: 'string',
      clusterType: 'number',
      cpu: 'number',
      cpuUsed: 'number',
      createTime: 'number',
      csClusterId: 'string',
      description: 'string',
      iaasProvider: 'string',
      mem: 'number',
      memUsed: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationResponseBodyContainerConfiguration extends $tea.Model {
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  URIEncoding?: string;
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      URIEncoding: 'string',
      useBodyEncoding: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJavaStartUpConfigResponseBodyJavaStartUpConfig extends $tea.Model {
  originalConfigs?: string;
  startUpArgs?: string;
  static names(): { [key: string]: string } {
    return {
      originalConfigs: 'OriginalConfigs',
      startUpArgs: 'StartUpArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalConfigs: 'string',
      startUpArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJvmConfigurationResponseBodyJvmConfiguration extends $tea.Model {
  maxHeapSize?: number;
  maxPermSize?: number;
  minHeapSize?: number;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      minHeapSize: 'MinHeapSize',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHeapSize: 'number',
      maxPermSize: 'number',
      minHeapSize: 'number',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationAppCmdArgs extends $tea.Model {
  cmdArg?: string[];
  static names(): { [key: string]: string } {
    return {
      cmdArg: 'CmdArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdArg: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationAppEnvListEnv extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationAppEnvList extends $tea.Model {
  env?: GetK8sApplicationResponseBodyApplcationAppEnvListEnv[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationAppEnvListEnv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationApp extends $tea.Model {
  appId?: string;
  applicationName?: string;
  applicationType?: string;
  buildpackId?: number;
  clusterId?: string;
  cmd?: string;
  cmdArgs?: GetK8sApplicationResponseBodyApplcationAppCmdArgs;
  csClusterId?: string;
  deployType?: string;
  developType?: string;
  edasContainerVersion?: string;
  envList?: GetK8sApplicationResponseBodyApplcationAppEnvList;
  instances?: number;
  instancesBeforeScaling?: number;
  k8sNamespace?: string;
  limitCpuM?: number;
  limitMem?: number;
  regionId?: string;
  requestCpuM?: number;
  requestMem?: number;
  tomcatVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationName: 'ApplicationName',
      applicationType: 'ApplicationType',
      buildpackId: 'BuildpackId',
      clusterId: 'ClusterId',
      cmd: 'Cmd',
      cmdArgs: 'CmdArgs',
      csClusterId: 'CsClusterId',
      deployType: 'DeployType',
      developType: 'DevelopType',
      edasContainerVersion: 'EdasContainerVersion',
      envList: 'EnvList',
      instances: 'Instances',
      instancesBeforeScaling: 'InstancesBeforeScaling',
      k8sNamespace: 'K8sNamespace',
      limitCpuM: 'LimitCpuM',
      limitMem: 'LimitMem',
      regionId: 'RegionId',
      requestCpuM: 'RequestCpuM',
      requestMem: 'RequestMem',
      tomcatVersion: 'TomcatVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationName: 'string',
      applicationType: 'string',
      buildpackId: 'number',
      clusterId: 'string',
      cmd: 'string',
      cmdArgs: GetK8sApplicationResponseBodyApplcationAppCmdArgs,
      csClusterId: 'string',
      deployType: 'string',
      developType: 'string',
      edasContainerVersion: 'string',
      envList: GetK8sApplicationResponseBodyApplcationAppEnvList,
      instances: 'number',
      instancesBeforeScaling: 'number',
      k8sNamespace: 'string',
      limitCpuM: 'number',
      limitMem: 'number',
      regionId: 'string',
      requestCpuM: 'number',
      requestMem: 'number',
      tomcatVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationConf extends $tea.Model {
  affinity?: string;
  ahasEnabled?: boolean;
  deployAcrossNodes?: string;
  deployAcrossZones?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  k8sCmd?: string;
  k8sCmdArgs?: string;
  k8sLocalvolumeInfo?: string;
  k8sNasInfo?: string;
  k8sVolumeInfo?: string;
  liveness?: string;
  postStart?: string;
  preStop?: string;
  readiness?: string;
  runtimeClassName?: string;
  tolerations?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      ahasEnabled: 'AhasEnabled',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      k8sCmd: 'K8sCmd',
      k8sCmdArgs: 'K8sCmdArgs',
      k8sLocalvolumeInfo: 'K8sLocalvolumeInfo',
      k8sNasInfo: 'K8sNasInfo',
      k8sVolumeInfo: 'K8sVolumeInfo',
      liveness: 'Liveness',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      runtimeClassName: 'RuntimeClassName',
      tolerations: 'Tolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      ahasEnabled: 'boolean',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      k8sCmd: 'string',
      k8sCmdArgs: 'string',
      k8sLocalvolumeInfo: 'string',
      k8sNasInfo: 'string',
      k8sVolumeInfo: 'string',
      liveness: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      runtimeClassName: 'string',
      tolerations: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents extends $tea.Model {
  componentId?: string;
  componentKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentKey: 'ComponentKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents extends $tea.Model {
  components?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents[];
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup extends $tea.Model {
  components?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroups extends $tea.Model {
  deployGroup?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup[];
  static names(): { [key: string]: string } {
    return {
      deployGroup: 'DeployGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployGroup: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationImageInfo extends $tea.Model {
  imageUrl?: string;
  regionId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoOriginType?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationLatestVersion extends $tea.Model {
  packageVersion?: string;
  url?: string;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
      url: 'Url',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: 'string',
      url: 'string',
      warUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcation extends $tea.Model {
  app?: GetK8sApplicationResponseBodyApplcationApp;
  appId?: string;
  conf?: GetK8sApplicationResponseBodyApplcationConf;
  deployGroups?: GetK8sApplicationResponseBodyApplcationDeployGroups;
  imageInfo?: GetK8sApplicationResponseBodyApplcationImageInfo;
  latestVersion?: GetK8sApplicationResponseBodyApplcationLatestVersion;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      appId: 'AppId',
      conf: 'Conf',
      deployGroups: 'DeployGroups',
      imageInfo: 'ImageInfo',
      latestVersion: 'LatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: GetK8sApplicationResponseBodyApplcationApp,
      appId: 'string',
      conf: GetK8sApplicationResponseBodyApplcationConf,
      deployGroups: GetK8sApplicationResponseBodyApplcationDeployGroups,
      imageInfo: GetK8sApplicationResponseBodyApplcationImageInfo,
      latestVersion: GetK8sApplicationResponseBodyApplcationLatestVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPageClusterListCluster extends $tea.Model {
  clusterId?: string;
  clusterImportStatus?: number;
  clusterName?: string;
  clusterStatus?: number;
  clusterType?: number;
  cpu?: number;
  csClusterId?: string;
  csClusterStatus?: string;
  description?: string;
  mem?: number;
  networkMode?: number;
  nodeNum?: number;
  regionId?: string;
  subNetCidr?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterImportStatus: 'ClusterImportStatus',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      csClusterId: 'CsClusterId',
      csClusterStatus: 'CsClusterStatus',
      description: 'Description',
      mem: 'Mem',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      regionId: 'RegionId',
      subNetCidr: 'SubNetCidr',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterImportStatus: 'number',
      clusterName: 'string',
      clusterStatus: 'number',
      clusterType: 'number',
      cpu: 'number',
      csClusterId: 'string',
      csClusterStatus: 'string',
      description: 'string',
      mem: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      regionId: 'string',
      subNetCidr: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPageClusterList extends $tea.Model {
  cluster?: GetK8sClusterResponseBodyClusterPageClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': GetK8sClusterResponseBodyClusterPageClusterListCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPage extends $tea.Model {
  clusterList?: GetK8sClusterResponseBodyClusterPageClusterList;
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: GetK8sClusterResponseBodyClusterPageClusterList,
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBodyServicesServicePorts extends $tea.Model {
  nodePort?: number;
  port?: number;
  protocol?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBodyServices extends $tea.Model {
  clusterIP?: string;
  name?: string;
  servicePorts?: GetK8sServicesResponseBodyServicesServicePorts[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIP: 'ClusterIP',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIP: 'string',
      name: 'string',
      servicePorts: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServicesServicePorts },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageStorageCredentialResponseBodyCredential extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  expiration?: string;
  keyPrefix?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      expiration: 'Expiration',
      keyPrefix: 'KeyPrefix',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      expiration: 'string',
      keyPrefix: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyDataRuleListRule extends $tea.Model {
  appId?: string;
  cond?: string;
  cpu?: number;
  createTime?: number;
  duration?: number;
  enable?: boolean;
  groupId?: string;
  instNum?: number;
  loadNum?: number;
  metricType?: string;
  mode?: string;
  multiAzPolicy?: string;
  resourceFrom?: string;
  rt?: number;
  specId?: string;
  step?: number;
  templateId?: string;
  templateVersion?: number;
  updateTime?: number;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cond: 'Cond',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      duration: 'Duration',
      enable: 'Enable',
      groupId: 'GroupId',
      instNum: 'InstNum',
      loadNum: 'LoadNum',
      metricType: 'MetricType',
      mode: 'Mode',
      multiAzPolicy: 'MultiAzPolicy',
      resourceFrom: 'ResourceFrom',
      rt: 'Rt',
      specId: 'SpecId',
      step: 'Step',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cond: 'string',
      cpu: 'number',
      createTime: 'number',
      duration: 'number',
      enable: 'boolean',
      groupId: 'string',
      instNum: 'number',
      loadNum: 'number',
      metricType: 'string',
      mode: 'string',
      multiAzPolicy: 'string',
      resourceFrom: 'string',
      rt: 'number',
      specId: 'string',
      step: 'number',
      templateId: 'string',
      templateVersion: 'number',
      updateTime: 'number',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyDataRuleList extends $tea.Model {
  rule?: GetScalingRulesResponseBodyDataRuleListRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': GetScalingRulesResponseBodyDataRuleListRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyData extends $tea.Model {
  clusterType?: number;
  oversoldFactor?: number;
  ruleList?: GetScalingRulesResponseBodyDataRuleList;
  updateTime?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      oversoldFactor: 'OversoldFactor',
      ruleList: 'RuleList',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      oversoldFactor: 'number',
      ruleList: GetScalingRulesResponseBodyDataRuleList,
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenResponseBodySecureToken extends $tea.Model {
  accessKey?: string;
  addressServerHost?: string;
  belongRegion?: string;
  description?: string;
  edasId?: string;
  id?: number;
  regionId?: string;
  regionName?: string;
  secretKey?: string;
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      addressServerHost: 'AddressServerHost',
      belongRegion: 'BelongRegion',
      description: 'Description',
      edasId: 'EdasId',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      addressServerHost: 'string',
      belongRegion: 'string',
      description: 'string',
      edasId: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      secretKey: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBodyDataContent extends $tea.Model {
  edasAppName?: string;
  edassAppId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppName: 'EdasAppName',
      edassAppId: 'EdassAppId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppName: 'string',
      edassAppId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBodyData extends $tea.Model {
  content?: GetServiceConsumersPageResponseBodyDataContent[];
  size?: number;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      size: 'Size',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetServiceConsumersPageResponseBodyDataContent },
      size: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyDataMethodsReturnDefinition extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyDataMethods extends $tea.Model {
  methodController?: string;
  name?: string;
  nameDetail?: string;
  parameterDefinitions?: string;
  parameterDetails?: string;
  parameterNames?: string;
  parameterTypes?: string;
  paths?: string;
  requestMethods?: string;
  returnDefinition?: GetServiceDetailResponseBodyDataMethodsReturnDefinition;
  returnDetails?: string;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterNames: 'ParameterNames',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDefinition: 'ReturnDefinition',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      parameterDetails: 'string',
      parameterNames: 'string',
      parameterTypes: 'string',
      paths: 'string',
      requestMethods: 'string',
      returnDefinition: GetServiceDetailResponseBodyDataMethodsReturnDefinition,
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyData extends $tea.Model {
  dubboApplicationName?: string;
  edasAppName?: string;
  group?: string;
  metadata?: string;
  methods?: GetServiceDetailResponseBodyDataMethods[];
  registryType?: string;
  serviceName?: string;
  serviceType?: string;
  springApplicationName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: 'string',
      methods: { 'type': 'array', 'itemType': GetServiceDetailResponseBodyDataMethods },
      registryType: 'string',
      serviceName: 'string',
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBodyDataContent extends $tea.Model {
  edasAppId?: string;
  edasAppName?: string;
  group?: string;
  instanceNum?: number;
  registerType?: string;
  serviceId?: string;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      registerType: 'RegisterType',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      registerType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBodyData extends $tea.Model {
  content?: GetServiceListPageResponseBodyDataContent[];
  size?: number;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      size: 'Size',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetServiceListPageResponseBodyDataContent },
      size: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyDataResultReturnDefinition extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyDataResult extends $tea.Model {
  methodController?: string;
  name?: string;
  nameDetail?: string;
  parameterDefinitions?: string;
  parameterDetails?: string;
  parameterNames?: string;
  parameterTypes?: string;
  paths?: string;
  requestMethods?: string;
  returnDefinition?: GetServiceMethodPageResponseBodyDataResultReturnDefinition;
  returnDetails?: string;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterNames: 'ParameterNames',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDefinition: 'ReturnDefinition',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      parameterDetails: 'string',
      parameterNames: 'string',
      parameterTypes: 'string',
      paths: 'string',
      requestMethods: 'string',
      returnDefinition: GetServiceMethodPageResponseBodyDataResultReturnDefinition,
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: GetServiceMethodPageResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetServiceMethodPageResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBodyDataContent extends $tea.Model {
  ip?: string;
  port?: string;
  serializeType?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serializeType: 'SerializeType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'string',
      serializeType: 'string',
      timeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBodyData extends $tea.Model {
  content?: GetServiceProvidersPageResponseBodyDataContent[];
  size?: number;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      size: 'Size',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetServiceProvidersPageResponseBodyDataContent },
      size: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebContainerConfigResponseBodyWebContainerConfig extends $tea.Model {
  contextInputType?: string;
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  serverXml?: string;
  uriEncoding?: string;
  useAdvancedServerXml?: boolean;
  useBodyEncoding?: boolean;
  useDefaultConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      contextInputType: 'ContextInputType',
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      serverXml: 'ServerXml',
      uriEncoding: 'UriEncoding',
      useAdvancedServerXml: 'UseAdvancedServerXml',
      useBodyEncoding: 'UseBodyEncoding',
      useDefaultConfig: 'UseDefaultConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextInputType: 'string',
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      serverXml: 'string',
      uriEncoding: 'string',
      useAdvancedServerXml: 'boolean',
      useBodyEncoding: 'boolean',
      useDefaultConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponseBodyApplicationInfo extends $tea.Model {
  appId?: string;
  appName?: string;
  changeOrderId?: string;
  dockerize?: boolean;
  owner?: string;
  port?: number;
  regionName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      changeOrderId: 'ChangeOrderId',
      dockerize: 'Dockerize',
      owner: 'Owner',
      port: 'Port',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      changeOrderId: 'string',
      dockerize: 'boolean',
      owner: 'string',
      port: 'number',
      regionName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterResponseBodyCluster extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  clusterType?: number;
  iaasProvider?: string;
  networkMode?: number;
  oversoldFactor?: number;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      iaasProvider: 'IaasProvider',
      networkMode: 'NetworkMode',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      iaasProvider: 'string',
      networkMode: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDeployGroupResponseBodyDeployGroupEntity extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  clusterId?: string;
  createTime?: number;
  groupName?: string;
  groupType?: number;
  id?: string;
  packageVersionId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      groupName: 'GroupName',
      groupType: 'GroupType',
      id: 'Id',
      packageVersionId: 'PackageVersionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      clusterId: 'string',
      createTime: 'number',
      groupName: 'string',
      groupType: 'number',
      id: 'string',
      packageVersionId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationResponseBodyApplicationInfo extends $tea.Model {
  appId?: string;
  appName?: string;
  changeOrderId?: string;
  clusterType?: number;
  dockerize?: boolean;
  edasId?: string;
  owner?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      changeOrderId: 'ChangeOrderId',
      clusterType: 'ClusterType',
      dockerize: 'Dockerize',
      edasId: 'EdasId',
      owner: 'Owner',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      changeOrderId: 'string',
      clusterType: 'number',
      dockerize: 'boolean',
      edasId: 'string',
      owner: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponseBodyUserDefineRegionEntity extends $tea.Model {
  belongRegion?: string;
  debugEnable?: boolean;
  description?: string;
  id?: number;
  regionId?: string;
  regionName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBodyExecutionResultListExecutionResult extends $tea.Model {
  finishedTime?: string;
  instanceId?: string;
  invokeRecordStatus?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBodyExecutionResultList extends $tea.Model {
  executionResult?: InstallAgentResponseBodyExecutionResultListExecutionResult[];
  static names(): { [key: string]: string } {
    return {
      executionResult: 'ExecutionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionResult: { 'type': 'array', 'itemType': InstallAgentResponseBodyExecutionResultListExecutionResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponseBodyRegionEntityListRegionEntity extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponseBodyRegionEntityList extends $tea.Model {
  regionEntity?: ListAliyunRegionResponseBodyRegionEntityListRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      regionEntity: 'RegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEntity: { 'type': 'array', 'itemType': ListAliyunRegionResponseBodyRegionEntityListRegionEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBodyApplicationListApplication extends $tea.Model {
  appId?: string;
  applicationType?: string;
  buildPackageId?: number;
  clusterId?: string;
  clusterType?: number;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  runningInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningInstanceCount: 'RunningInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'number',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBodyApplicationList extends $tea.Model {
  application?: ListApplicationResponseBodyApplicationListApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationResponseBodyApplicationListApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationEcuResponseBodyEcuInfoListEcuEntity extends $tea.Model {
  appId?: string;
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationEcuResponseBodyEcuInfoList extends $tea.Model {
  ecuEntity?: ListApplicationEcuResponseBodyEcuInfoListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': ListApplicationEcuResponseBodyEcuInfoListEcuEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityListAuthorityActionListAction extends $tea.Model {
  code?: string;
  description?: string;
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityListAuthorityActionList extends $tea.Model {
  action?: ListAuthorityResponseBodyAuthorityListAuthorityActionListAction[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': ListAuthorityResponseBodyAuthorityListAuthorityActionListAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityListAuthority extends $tea.Model {
  actionList?: ListAuthorityResponseBodyAuthorityListAuthorityActionList;
  description?: string;
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: ListAuthorityResponseBodyAuthorityListAuthorityActionList,
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityList extends $tea.Model {
  authority?: ListAuthorityResponseBodyAuthorityListAuthority[];
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: { 'type': 'array', 'itemType': ListAuthorityResponseBodyAuthorityListAuthority },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponseBodyBuildPackListBuildPack extends $tea.Model {
  configId?: number;
  disabled?: boolean;
  feature?: string;
  imageId?: string;
  multipleTenant?: boolean;
  packVersion?: string;
  pandoraDesc?: string;
  pandoraDownloadUrl?: string;
  pandoraVersion?: string;
  pluginInfo?: string;
  scriptName?: string;
  scriptVersion?: string;
  supportFeatures?: string;
  tengineDownloadUrl?: string;
  tengineImageId?: string;
  tomcatDesc?: string;
  tomcatDownloadUrl?: string;
  tomcatPath?: string;
  tomcatVersion?: string;
  withTengine?: boolean;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      disabled: 'Disabled',
      feature: 'Feature',
      imageId: 'ImageId',
      multipleTenant: 'MultipleTenant',
      packVersion: 'PackVersion',
      pandoraDesc: 'PandoraDesc',
      pandoraDownloadUrl: 'PandoraDownloadUrl',
      pandoraVersion: 'PandoraVersion',
      pluginInfo: 'PluginInfo',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      supportFeatures: 'SupportFeatures',
      tengineDownloadUrl: 'TengineDownloadUrl',
      tengineImageId: 'TengineImageId',
      tomcatDesc: 'TomcatDesc',
      tomcatDownloadUrl: 'TomcatDownloadUrl',
      tomcatPath: 'TomcatPath',
      tomcatVersion: 'TomcatVersion',
      withTengine: 'WithTengine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      disabled: 'boolean',
      feature: 'string',
      imageId: 'string',
      multipleTenant: 'boolean',
      packVersion: 'string',
      pandoraDesc: 'string',
      pandoraDownloadUrl: 'string',
      pandoraVersion: 'string',
      pluginInfo: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      supportFeatures: 'string',
      tengineDownloadUrl: 'string',
      tengineImageId: 'string',
      tomcatDesc: 'string',
      tomcatDownloadUrl: 'string',
      tomcatPath: 'string',
      tomcatVersion: 'string',
      withTengine: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponseBodyBuildPackList extends $tea.Model {
  buildPack?: ListBuildPackResponseBodyBuildPackListBuildPack[];
  static names(): { [key: string]: string } {
    return {
      buildPack: 'BuildPack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPack: { 'type': 'array', 'itemType': ListBuildPackResponseBodyBuildPackListBuildPack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyClusterListCluster extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  clusterType?: number;
  cpu?: number;
  cpuUsed?: number;
  createTime?: number;
  csClusterId?: string;
  description?: string;
  iaasProvider?: string;
  mem?: number;
  memUsed?: number;
  networkMode?: number;
  nodeNum?: number;
  oversoldFactor?: number;
  regionId?: string;
  resourceGroupId?: string;
  updateTime?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      description: 'Description',
      iaasProvider: 'IaasProvider',
      mem: 'Mem',
      memUsed: 'MemUsed',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      cpu: 'number',
      cpuUsed: 'number',
      createTime: 'number',
      csClusterId: 'string',
      description: 'string',
      iaasProvider: 'string',
      mem: 'number',
      memUsed: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyClusterList extends $tea.Model {
  cluster?: ListClusterResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': ListClusterResponseBodyClusterListCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember extends $tea.Model {
  clusterId?: string;
  clusterMemberId?: string;
  createTime?: number;
  ecsId?: string;
  ecuId?: string;
  status?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterMemberId: 'ClusterMemberId',
      createTime: 'CreateTime',
      ecsId: 'EcsId',
      ecuId: 'EcuId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterMemberId: 'string',
      createTime: 'number',
      ecsId: 'string',
      ecuId: 'string',
      status: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBodyClusterMemberPageClusterMemberList extends $tea.Model {
  clusterMember?: ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember[];
  static names(): { [key: string]: string } {
    return {
      clusterMember: 'ClusterMember',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMember: { 'type': 'array', 'itemType': ListClusterMembersResponseBodyClusterMemberPageClusterMemberListClusterMember },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBodyClusterMemberPage extends $tea.Model {
  clusterMemberList?: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList;
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterMemberList: 'ClusterMemberList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMemberList: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList,
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentListComponent extends $tea.Model {
  componentId?: string;
  componentKey?: string;
  desc?: string;
  expired?: boolean;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentKey: 'ComponentKey',
      desc: 'Desc',
      expired: 'Expired',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentKey: 'string',
      desc: 'string',
      expired: 'boolean',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentList extends $tea.Model {
  component?: ListComponentsResponseBodyComponentListComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentListComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponseBodyDataResult extends $tea.Model {
  content?: string;
  description?: string;
  format?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTemplatesResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  result?: ListConfigTemplatesResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListConfigTemplatesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups extends $tea.Model {
  group?: string[];
  static names(): { [key: string]: string } {
    return {
      group: 'group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices extends $tea.Model {
  appId?: string;
  dockerApplication?: boolean;
  group2Ip?: string;
  groups?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups;
  ips?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps;
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dockerApplication: 'DockerApplication',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dockerApplication: 'boolean',
      group2Ip: 'string',
      groups: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups,
      ips: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps,
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyConsumedServicesList extends $tea.Model {
  listConsumedServices?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices[];
  static names(): { [key: string]: string } {
    return {
      listConsumedServices: 'ListConsumedServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listConsumedServices: { 'type': 'array', 'itemType': ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuResponseBodyInstanceListInstance extends $tea.Model {
  cpu?: number;
  ecuId?: string;
  eip?: string;
  expired?: boolean;
  innerIp?: string;
  instanceId?: string;
  instanceName?: string;
  mem?: number;
  privateIp?: string;
  publicIp?: string;
  regionId?: string;
  status?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      ecuId: 'EcuId',
      eip: 'Eip',
      expired: 'Expired',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      mem: 'Mem',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      ecuId: 'string',
      eip: 'string',
      expired: 'boolean',
      innerIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      mem: 'number',
      privateIp: 'string',
      publicIp: 'string',
      regionId: 'string',
      status: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuResponseBodyInstanceList extends $tea.Model {
  instance?: ListConvertableEcuResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListConvertableEcuResponseBodyInstanceListInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBodyDeployGroupListDeployGroup extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  baseComponentMetaName?: string;
  clusterId?: string;
  clusterName?: string;
  cpuLimit?: string;
  cpuRequest?: string;
  createTime?: number;
  csClusterId?: string;
  deploymentName?: string;
  env?: string;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  labels?: string;
  lastUpdateTime?: number;
  memoryLimit?: string;
  memoryRequest?: string;
  nameSpace?: string;
  packagePublicUrl?: string;
  packageUrl?: string;
  packageVersion?: string;
  packageVersionId?: string;
  postStart?: string;
  preStop?: string;
  reversion?: string;
  selector?: string;
  status?: string;
  strategy?: string;
  updateTime?: number;
  VExtServerGroupId?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      baseComponentMetaName: 'BaseComponentMetaName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      deploymentName: 'DeploymentName',
      env: 'Env',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      labels: 'Labels',
      lastUpdateTime: 'LastUpdateTime',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      nameSpace: 'NameSpace',
      packagePublicUrl: 'PackagePublicUrl',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      packageVersionId: 'PackageVersionId',
      postStart: 'PostStart',
      preStop: 'PreStop',
      reversion: 'Reversion',
      selector: 'Selector',
      status: 'Status',
      strategy: 'Strategy',
      updateTime: 'UpdateTime',
      VExtServerGroupId: 'VExtServerGroupId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      baseComponentMetaName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cpuLimit: 'string',
      cpuRequest: 'string',
      createTime: 'number',
      csClusterId: 'string',
      deploymentName: 'string',
      env: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      labels: 'string',
      lastUpdateTime: 'number',
      memoryLimit: 'string',
      memoryRequest: 'string',
      nameSpace: 'string',
      packagePublicUrl: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      packageVersionId: 'string',
      postStart: 'string',
      preStop: 'string',
      reversion: 'string',
      selector: 'string',
      status: 'string',
      strategy: 'string',
      updateTime: 'number',
      VExtServerGroupId: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBodyDeployGroupList extends $tea.Model {
  deployGroup?: ListDeployGroupResponseBodyDeployGroupListDeployGroup[];
  static names(): { [key: string]: string } {
    return {
      deployGroup: 'DeployGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployGroup: { 'type': 'array', 'itemType': ListDeployGroupResponseBodyDeployGroupListDeployGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity extends $tea.Model {
  cpu?: number;
  eip?: string;
  expired?: boolean;
  innerIp?: string;
  instanceId?: string;
  instanceName?: string;
  mem?: number;
  privateIp?: string;
  publicIp?: string;
  regionId?: string;
  status?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      eip: 'Eip',
      expired: 'Expired',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      mem: 'Mem',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      eip: 'string',
      expired: 'boolean',
      innerIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      mem: 'number',
      privateIp: 'string',
      publicIp: 'string',
      regionId: 'string',
      status: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsNotInClusterResponseBodyEcsEntityList extends $tea.Model {
  ecsEntity?: ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity[];
  static names(): { [key: string]: string } {
    return {
      ecsEntity: 'EcsEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsEntity: { 'type': 'array', 'itemType': ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponseBodyEcuEntityListEcuEntity extends $tea.Model {
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponseBodyEcuEntityList extends $tea.Model {
  ecuEntity?: ListEcuByRegionResponseBodyEcuEntityListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': ListEcuByRegionResponseBodyEcuEntityListEcuEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion extends $tea.Model {
  appId?: string;
  createTime?: number;
  description?: string;
  id?: string;
  packageVersion?: string;
  publicUrl?: string;
  type?: string;
  updateTime?: number;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      packageVersion: 'PackageVersion',
      publicUrl: 'PublicUrl',
      type: 'Type',
      updateTime: 'UpdateTime',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'string',
      packageVersion: 'string',
      publicUrl: 'string',
      type: 'string',
      updateTime: 'number',
      warUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBodyPackageVersionList extends $tea.Model {
  packageVersion?: ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion[];
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: { 'type': 'array', 'itemType': ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBodyResultConfigMapsData extends $tea.Model {
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

export class ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBodyResultConfigMaps extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  creationTime?: string;
  data?: ListK8sConfigMapsResponseBodyResultConfigMapsData[];
  name?: string;
  namespace?: string;
  relatedApps?: ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      data: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMapsData },
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBodyResult extends $tea.Model {
  configMaps?: ListK8sConfigMapsResponseBodyResultConfigMaps[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMaps },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend extends $tea.Model {
  serviceName?: string;
  servicePort?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      servicePort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths extends $tea.Model {
  appId?: string;
  appName?: string;
  backend?: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend;
  path?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backend: 'Backend',
      path: 'Path',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backend: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend,
      path: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfsRules extends $tea.Model {
  enableTls?: boolean;
  host?: string;
  paths?: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths[];
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      enableTls: 'EnableTls',
      host: 'Host',
      paths: 'Paths',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTls: 'boolean',
      host: 'string',
      paths: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths },
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfs extends $tea.Model {
  albId?: string;
  creationTime?: string;
  dashboardUrl?: string;
  endpoint?: string;
  ingressType?: string;
  name?: string;
  namespace?: string;
  rules?: ListK8sIngressRulesResponseBodyDataIngressConfsRules[];
  sslRedirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      albId: 'AlbId',
      creationTime: 'CreationTime',
      dashboardUrl: 'DashboardUrl',
      endpoint: 'Endpoint',
      ingressType: 'IngressType',
      name: 'Name',
      namespace: 'Namespace',
      rules: 'Rules',
      sslRedirect: 'SslRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albId: 'string',
      creationTime: 'string',
      dashboardUrl: 'string',
      endpoint: 'string',
      ingressType: 'string',
      name: 'string',
      namespace: 'string',
      rules: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfsRules },
      sslRedirect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyData extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  ingressConfs?: ListK8sIngressRulesResponseBodyDataIngressConfs[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      ingressConfs: 'IngressConfs',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      ingressConfs: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfs },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsCertDetail extends $tea.Model {
  domainNames?: string[];
  endTime?: string;
  issuer?: string;
  keySize?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      issuer: 'Issuer',
      keySize: 'KeySize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      issuer: 'string',
      keySize: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsData extends $tea.Model {
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

export class ListK8sSecretsResponseBodyResultSecretsRelatedApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules extends $tea.Model {
  name?: string;
  namespace?: string;
  relatedApps?: ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecrets extends $tea.Model {
  base64Encoded?: boolean;
  certDetail?: ListK8sSecretsResponseBodyResultSecretsCertDetail;
  certId?: string;
  certRegionId?: string;
  clusterId?: string;
  clusterName?: string;
  creationTime?: string;
  data?: ListK8sSecretsResponseBodyResultSecretsData[];
  name?: string;
  namespace?: string;
  relatedApps?: ListK8sSecretsResponseBodyResultSecretsRelatedApps[];
  relatedIngressRules?: ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64Encoded: 'Base64Encoded',
      certDetail: 'CertDetail',
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
      relatedIngressRules: 'RelatedIngressRules',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64Encoded: 'boolean',
      certDetail: ListK8sSecretsResponseBodyResultSecretsCertDetail,
      certId: 'string',
      certRegionId: 'string',
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      data: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsData },
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedApps },
      relatedIngressRules: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResult extends $tea.Model {
  secrets?: ListK8sSecretsResponseBodyResultSecrets[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecrets },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodListServiceMethodInputParams extends $tea.Model {
  inputParam?: string[];
  static names(): { [key: string]: string } {
    return {
      inputParam: 'InputParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParam: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes extends $tea.Model {
  paramType?: string[];
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodListServiceMethod extends $tea.Model {
  appName?: string;
  inputParams?: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams;
  methodName?: string;
  output?: string;
  paramTypes?: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      inputParams: 'InputParams',
      methodName: 'MethodName',
      output: 'Output',
      paramTypes: 'ParamTypes',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      inputParams: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams,
      methodName: 'string',
      output: 'string',
      paramTypes: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes,
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMethodsResponseBodyServiceMethodList extends $tea.Model {
  serviceMethod?: ListMethodsResponseBodyServiceMethodListServiceMethod[];
  static names(): { [key: string]: string } {
    return {
      serviceMethod: 'ServiceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceMethod: { 'type': 'array', 'itemType': ListMethodsResponseBodyServiceMethodListServiceMethod },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups extends $tea.Model {
  group?: string[];
  static names(): { [key: string]: string } {
    return {
      group: 'group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices extends $tea.Model {
  appId?: string;
  dockerApplication?: boolean;
  group2Ip?: string;
  groups?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups;
  ips?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps;
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dockerApplication: 'DockerApplication',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dockerApplication: 'boolean',
      group2Ip: 'string',
      groups: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups,
      ips: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps,
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesList extends $tea.Model {
  listPublishedServices?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices[];
  static names(): { [key: string]: string } {
    return {
      listPublishedServices: 'ListPublishedServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPublishedServices: { 'type': 'array', 'itemType': ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder extends $tea.Model {
  appId?: string;
  batchCount?: number;
  batchType?: string;
  changeOrderDescription?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  finishTime?: string;
  groupId?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderDescription: 'ChangeOrderDescription',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batchCount: 'number',
      batchType: 'string',
      changeOrderDescription: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      finishTime: 'string',
      groupId: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentChangeOrderResponseBodyChangeOrderList extends $tea.Model {
  changeOrder?: ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder[];
  static names(): { [key: string]: string } {
    return {
      changeOrder: 'ChangeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrder: { 'type': 'array', 'itemType': ListRecentChangeOrderResponseBodyChangeOrderListChangeOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity extends $tea.Model {
  address?: string;
  addressType?: string;
  expired?: boolean;
  groupId?: number;
  networkType?: string;
  regionId?: string;
  slbId?: string;
  slbName?: string;
  slbStatus?: string;
  userId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      expired: 'Expired',
      groupId: 'GroupId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      slbId: 'SlbId',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      expired: 'boolean',
      groupId: 'number',
      networkType: 'string',
      regionId: 'string',
      slbId: 'string',
      slbName: 'string',
      slbStatus: 'string',
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList extends $tea.Model {
  slbEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity[];
  static names(): { [key: string]: string } {
    return {
      slbEntity: 'SlbEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity extends $tea.Model {
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity extends $tea.Model {
  cidrblock?: string;
  description?: string;
  ecsNum?: number;
  expired?: boolean;
  regionId?: string;
  status?: string;
  userId?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrblock: 'Cidrblock',
      description: 'Description',
      ecsNum: 'EcsNum',
      expired: 'Expired',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrblock: 'string',
      description: 'string',
      ecsNum: 'number',
      expired: 'boolean',
      regionId: 'string',
      status: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity extends $tea.Model {
  cpu?: number;
  description?: string;
  ecuEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity;
  eip?: string;
  expired?: boolean;
  groupId?: string;
  hostName?: string;
  innerIp?: string;
  instanceId?: string;
  instanceName?: string;
  mem?: number;
  privateIp?: string;
  publicIp?: string;
  regionId?: string;
  serialNum?: string;
  sgId?: string;
  status?: string;
  userId?: string;
  vpcEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      description: 'Description',
      ecuEntity: 'EcuEntity',
      eip: 'Eip',
      expired: 'Expired',
      groupId: 'GroupId',
      hostName: 'HostName',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      mem: 'Mem',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      serialNum: 'SerialNum',
      sgId: 'SgId',
      status: 'Status',
      userId: 'UserId',
      vpcEntity: 'VpcEntity',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      description: 'string',
      ecuEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity,
      eip: 'string',
      expired: 'boolean',
      groupId: 'string',
      hostName: 'string',
      innerIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      mem: 'number',
      privateIp: 'string',
      publicIp: 'string',
      regionId: 'string',
      serialNum: 'string',
      sgId: 'string',
      status: 'string',
      userId: 'string',
      vpcEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity,
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList extends $tea.Model {
  ecsEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity[];
  static names(): { [key: string]: string } {
    return {
      ecsEntity: 'EcsEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntity extends $tea.Model {
  adminUserId?: string;
  createTime?: number;
  description?: string;
  id?: number;
  name?: string;
  regionId?: string;
  slbList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList;
  updateTime?: number;
  ecsList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList;
  static names(): { [key: string]: string } {
    return {
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      slbList: 'SlbList',
      updateTime: 'UpdateTime',
      ecsList: 'ecsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      slbList: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList,
      updateTime: 'number',
      ecsList: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupList extends $tea.Model {
  resGroupEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntity[];
  static names(): { [key: string]: string } {
    return {
      resGroupEntity: 'ResGroupEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resGroupEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItemActionListAction extends $tea.Model {
  code?: string;
  description?: string;
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItemActionList extends $tea.Model {
  action?: ListRoleResponseBodyRoleListRoleItemActionListAction[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': ListRoleResponseBodyRoleListRoleItemActionListAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItemRole extends $tea.Model {
  adminUserId?: string;
  createTime?: number;
  id?: number;
  isDefault?: boolean;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserId: 'string',
      createTime: 'number',
      id: 'number',
      isDefault: 'boolean',
      name: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItem extends $tea.Model {
  actionList?: ListRoleResponseBodyRoleListRoleItemActionList;
  role?: ListRoleResponseBodyRoleListRoleItemRole;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: ListRoleResponseBodyRoleListRoleItemActionList,
      role: ListRoleResponseBodyRoleListRoleItemRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleList extends $tea.Model {
  roleItem?: ListRoleResponseBodyRoleListRoleItem[];
  static names(): { [key: string]: string } {
    return {
      roleItem: 'RoleItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleItem: { 'type': 'array', 'itemType': ListRoleResponseBodyRoleListRoleItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBodyDataResultChildren extends $tea.Model {
  comment?: string;
  icon?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBodyDataResultRoot extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBodyDataResult extends $tea.Model {
  children?: ListRootStacksResponseBodyDataResultChildren[];
  root?: ListRootStacksResponseBodyDataResultRoot;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      root: 'Root',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': ListRootStacksResponseBodyDataResultChildren },
      root: ListRootStacksResponseBodyDataResultRoot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  result?: ListRootStacksResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListRootStacksResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBodyEcuInfoListEcuInfo extends $tea.Model {
  availableCpu?: number;
  availableMem?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBodyEcuInfoList extends $tea.Model {
  ecuInfo?: ListScaleOutEcuResponseBodyEcuInfoListEcuInfo[];
  static names(): { [key: string]: string } {
    return {
      ecuInfo: 'EcuInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuInfo: { 'type': 'array', 'itemType': ListScaleOutEcuResponseBodyEcuInfoListEcuInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups extends $tea.Model {
  createTime?: string;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBodyServiceGroupsList extends $tea.Model {
  listServiceGroups?: ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups[];
  static names(): { [key: string]: string } {
    return {
      listServiceGroups: 'ListServiceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listServiceGroups: { 'type': 'array', 'itemType': ListServiceGroupsResponseBodyServiceGroupsListListServiceGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponseBodySlbListSlbEntity extends $tea.Model {
  address?: string;
  addressType?: string;
  expired?: boolean;
  groupId?: number;
  networkType?: string;
  regionId?: string;
  slbId?: string;
  slbName?: string;
  slbStatus?: string;
  userId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      expired: 'Expired',
      groupId: 'GroupId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      slbId: 'SlbId',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      expired: 'boolean',
      groupId: 'number',
      networkType: 'string',
      regionId: 'string',
      slbId: 'string',
      slbName: 'string',
      slbStatus: 'string',
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponseBodySlbList extends $tea.Model {
  slbEntity?: ListSlbResponseBodySlbListSlbEntity[];
  static names(): { [key: string]: string } {
    return {
      slbEntity: 'SlbEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbEntity: { 'type': 'array', 'itemType': ListSlbResponseBodySlbListSlbEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponseBodySubAccountListSubAccount extends $tea.Model {
  adminEdasId?: string;
  adminUserId?: string;
  adminUserKp?: string;
  email?: string;
  phone?: string;
  subEdasId?: string;
  subUserId?: string;
  subUserKp?: string;
  static names(): { [key: string]: string } {
    return {
      adminEdasId: 'AdminEdasId',
      adminUserId: 'AdminUserId',
      adminUserKp: 'AdminUserKp',
      email: 'Email',
      phone: 'Phone',
      subEdasId: 'SubEdasId',
      subUserId: 'SubUserId',
      subUserKp: 'SubUserKp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminEdasId: 'string',
      adminUserId: 'string',
      adminUserKp: 'string',
      email: 'string',
      phone: 'string',
      subEdasId: 'string',
      subUserId: 'string',
      subUserKp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponseBodySubAccountList extends $tea.Model {
  subAccount?: ListSubAccountResponseBodySubAccountListSubAccount[];
  static names(): { [key: string]: string } {
    return {
      subAccount: 'SubAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subAccount: { 'type': 'array', 'itemType': ListSubAccountResponseBodySubAccountListSubAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity extends $tea.Model {
  belongRegion?: string;
  debugEnable?: boolean;
  description?: string;
  id?: number;
  regionId?: string;
  regionName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionResponseBodyUserDefineRegionList extends $tea.Model {
  userDefineRegionEntity?: ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      userDefineRegionEntity: 'UserDefineRegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userDefineRegionEntity: { 'type': 'array', 'itemType': ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponseBodyVpcListVpcEntity extends $tea.Model {
  ecsNum?: number;
  expired?: boolean;
  regionId?: string;
  userId?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      ecsNum: 'EcsNum',
      expired: 'Expired',
      regionId: 'RegionId',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsNum: 'number',
      expired: 'boolean',
      regionId: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponseBodyVpcList extends $tea.Model {
  vpcEntity?: ListVpcResponseBodyVpcListVpcEntity[];
  static names(): { [key: string]: string } {
    return {
      vpcEntity: 'VpcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEntity: { 'type': 'array', 'itemType': ListVpcResponseBodyVpcListVpcEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoApplication extends $tea.Model {
  applicationId?: string;
  buildPackageId?: number;
  clusterId?: string;
  cpu?: number;
  createTime?: number;
  dockerize?: boolean;
  email?: string;
  healthCheckUrl?: string;
  instanceCount?: number;
  launchTime?: number;
  memory?: number;
  name?: string;
  owner?: string;
  phone?: string;
  port?: number;
  regionId?: string;
  runningInstanceCount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerize: 'Dockerize',
      email: 'Email',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      launchTime: 'LaunchTime',
      memory: 'Memory',
      name: 'Name',
      owner: 'Owner',
      phone: 'Phone',
      port: 'Port',
      regionId: 'RegionId',
      runningInstanceCount: 'RunningInstanceCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      cpu: 'number',
      createTime: 'number',
      dockerize: 'boolean',
      email: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      launchTime: 'number',
      memory: 'number',
      name: 'string',
      owner: 'string',
      phone: 'string',
      port: 'number',
      regionId: 'string',
      runningInstanceCount: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord extends $tea.Model {
  createTime?: number;
  deployRecordId?: string;
  eccId?: string;
  ecuId?: string;
  packageMd5?: string;
  packageVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deployRecordId: 'DeployRecordId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      packageMd5: 'PackageMd5',
      packageVersionId: 'PackageVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      deployRecordId: 'string',
      eccId: 'string',
      ecuId: 'string',
      packageMd5: 'string',
      packageVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoDeployRecordList extends $tea.Model {
  deployRecord?: QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord[];
  static names(): { [key: string]: string } {
    return {
      deployRecord: 'DeployRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRecord: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEccListEcc extends $tea.Model {
  appId?: string;
  appState?: number;
  containerStatus?: string;
  createTime?: number;
  eccId?: string;
  ecuId?: string;
  groupId?: string;
  ip?: string;
  taskState?: number;
  updateTime?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appState: 'AppState',
      containerStatus: 'ContainerStatus',
      createTime: 'CreateTime',
      eccId: 'EccId',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      ip: 'Ip',
      taskState: 'TaskState',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appState: 'number',
      containerStatus: 'string',
      createTime: 'number',
      eccId: 'string',
      ecuId: 'string',
      groupId: 'string',
      ip: 'string',
      taskState: 'number',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEccList extends $tea.Model {
  ecc?: QueryApplicationStatusResponseBodyAppInfoEccListEcc[];
  static names(): { [key: string]: string } {
    return {
      ecc: 'Ecc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecc: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoEccListEcc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEcuListEcu extends $tea.Model {
  availableCpu?: number;
  availableMem?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  groupId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      groupId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEcuList extends $tea.Model {
  ecu?: QueryApplicationStatusResponseBodyAppInfoEcuListEcu[];
  static names(): { [key: string]: string } {
    return {
      ecu: 'Ecu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecu: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoEcuListEcu },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoGroupListGroup extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  clusterId?: string;
  createTime?: number;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  packageVersionId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      packageVersionId: 'PackageVersionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      clusterId: 'string',
      createTime: 'number',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      packageVersionId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoGroupList extends $tea.Model {
  group?: QueryApplicationStatusResponseBodyAppInfoGroupListGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoGroupListGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfo extends $tea.Model {
  application?: QueryApplicationStatusResponseBodyAppInfoApplication;
  deployRecordList?: QueryApplicationStatusResponseBodyAppInfoDeployRecordList;
  eccList?: QueryApplicationStatusResponseBodyAppInfoEccList;
  ecuList?: QueryApplicationStatusResponseBodyAppInfoEcuList;
  groupList?: QueryApplicationStatusResponseBodyAppInfoGroupList;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      deployRecordList: 'DeployRecordList',
      eccList: 'EccList',
      ecuList: 'EcuList',
      groupList: 'GroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: QueryApplicationStatusResponseBodyAppInfoApplication,
      deployRecordList: QueryApplicationStatusResponseBodyAppInfoDeployRecordList,
      eccList: QueryApplicationStatusResponseBodyAppInfoEccList,
      ecuList: QueryApplicationStatusResponseBodyAppInfoEcuList,
      groupList: QueryApplicationStatusResponseBodyAppInfoGroupList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoResponseBodyEccInfo extends $tea.Model {
  appId?: string;
  eccId?: string;
  ecuId?: string;
  groupId?: string;
  groupName?: string;
  packageMd5?: string;
  packageVersion?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      packageMd5: 'PackageMd5',
      packageVersion: 'PackageVersion',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccId: 'string',
      ecuId: 'string',
      groupId: 'string',
      groupName: 'string',
      packageMd5: 'string',
      packageVersion: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity extends $tea.Model {
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListResponseBodyEcuEntityList extends $tea.Model {
  ecuEntity?: QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity extends $tea.Model {
  regionName?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListResponseBodyRegionEntityList extends $tea.Model {
  regionEntity?: QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      regionEntity: 'RegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEntity: { 'type': 'array', 'itemType': QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBodyRegionConfigFileServerConfig extends $tea.Model {
  bucket?: string;
  internalUrl?: string;
  publicUrl?: string;
  vpcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      internalUrl: 'InternalUrl',
      publicUrl: 'PublicUrl',
      vpcUrl: 'VpcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      internalUrl: 'string',
      publicUrl: 'string',
      vpcUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBodyRegionConfig extends $tea.Model {
  addressServerHost?: string;
  agentInstallScript?: string;
  fileServerConfig?: QueryRegionConfigResponseBodyRegionConfigFileServerConfig;
  fileServerType?: string;
  id?: string;
  imageId?: string;
  name?: string;
  no?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      addressServerHost: 'AddressServerHost',
      agentInstallScript: 'AgentInstallScript',
      fileServerConfig: 'FileServerConfig',
      fileServerType: 'FileServerType',
      id: 'Id',
      imageId: 'ImageId',
      name: 'Name',
      no: 'No',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressServerHost: 'string',
      agentInstallScript: 'string',
      fileServerConfig: QueryRegionConfigResponseBodyRegionConfigFileServerConfig,
      fileServerType: 'string',
      id: 'string',
      imageId: 'string',
      name: 'string',
      no: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponseBodyResult extends $tea.Model {
  consumerSide?: string;
  createTime?: string;
  link?: string;
  logstore?: string;
  project?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      consumerSide: 'ConsumerSide',
      createTime: 'CreateTime',
      link: 'Link',
      logstore: 'Logstore',
      project: 'Project',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerSide: 'string',
      createTime: 'string',
      link: 'string',
      logstore: 'string',
      project: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationBaseInfoResponseBodyApplcation extends $tea.Model {
  appId?: string;
  applicationType?: string;
  buildPackageId?: number;
  clusterId?: string;
  clusterType?: number;
  cpu?: number;
  createTime?: number;
  description?: string;
  dockerize?: boolean;
  extSlbId?: string;
  extSlbIp?: string;
  extSlbName?: string;
  healthCheckUrl?: string;
  instanceCount?: number;
  memory?: number;
  name?: string;
  owner?: string;
  port?: number;
  regionId?: string;
  runningInstanceCount?: number;
  slbId?: string;
  slbIp?: string;
  slbName?: string;
  slbPort?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      description: 'Description',
      dockerize: 'Dockerize',
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      name: 'Name',
      owner: 'Owner',
      port: 'Port',
      regionId: 'RegionId',
      runningInstanceCount: 'RunningInstanceCount',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'number',
      cpu: 'number',
      createTime: 'number',
      description: 'string',
      dockerize: 'boolean',
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      memory: 'number',
      name: 'string',
      owner: 'string',
      port: 'number',
      regionId: 'string',
      runningInstanceCount: 'number',
      slbId: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $tea.Model {
  metaData?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $tea.Model {
  maxReplicas?: number;
  minReplicas?: number;
  triggers?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRule extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  maxReplicas?: number;
  metric?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric;
  minReplicas?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  trigger?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerConfigurationResponseBodyContainerConfiguration extends $tea.Model {
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  URIEncoding?: string;
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      URIEncoding: 'string',
      useBodyEncoding: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHookConfigurationResponseBodyHooksConfiguration extends $tea.Model {
  ignoreFail?: boolean;
  name?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFail: 'IgnoreFail',
      name: 'Name',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFail: 'boolean',
      name: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationResponseBodyJvmConfiguration extends $tea.Model {
  maxHeapSize?: number;
  maxPermSize?: number;
  minHeapSize?: number;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      minHeapSize: 'MinHeapSize',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHeapSize: 'number',
      maxPermSize: 'number',
      minHeapSize: 'number',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  dubboMockItemJson?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      dubboMockItemJson: 'DubboMockItemJson',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      dubboMockItemJson: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "edas.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "edas.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "edas.aliyuncs.com",
      'cn-beijing-finance-pop': "edas.aliyuncs.com",
      'cn-beijing-gov-1': "edas.aliyuncs.com",
      'cn-beijing-nu16-b01': "edas.aliyuncs.com",
      'cn-chengdu': "edas.aliyuncs.com",
      'cn-edge-1': "edas.aliyuncs.com",
      'cn-fujian': "edas.aliyuncs.com",
      'cn-haidian-cm12-c01': "edas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "edas.aliyuncs.com",
      'cn-hangzhou-finance': "edas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "edas.aliyuncs.com",
      'cn-hangzhou-test-306': "edas.aliyuncs.com",
      'cn-hongkong-finance-pop': "edas.aliyuncs.com",
      'cn-huhehaote': "edas.aliyuncs.com",
      'cn-qingdao-nebula': "edas.aliyuncs.com",
      'cn-shanghai-et15-b01': "edas.aliyuncs.com",
      'cn-shanghai-et2-b01': "edas.aliyuncs.com",
      'cn-shanghai-finance-1': "edas.aliyuncs.com",
      'cn-shanghai-inner': "edas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "edas.aliyuncs.com",
      'cn-shenzhen-finance-1': "edas.aliyuncs.com",
      'cn-shenzhen-inner': "edas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "edas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "edas.aliyuncs.com",
      'cn-wuhan': "edas.aliyuncs.com",
      'cn-yushanfang': "edas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "edas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "edas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "edas.aliyuncs.com",
      'eu-west-1': "edas.ap-northeast-1.aliyuncs.com",
      'eu-west-1-oxs': "edas.ap-northeast-1.aliyuncs.com",
      'me-east-1': "edas.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "edas.ap-northeast-1.aliyuncs.com",
      'us-west-1': "edas.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("edas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortAndRollbackChangeOrder(request: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortAndRollbackChangeOrderWithOptions(request, headers, runtime);
  }

  async abortAndRollbackChangeOrderWithOptions(request: AbortAndRollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortAndRollbackChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortAndRollbackChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_abort_and_rollback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortAndRollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortAndRollbackChangeOrderResponse({}));
  }

  async abortChangeOrder(request: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeOrderWithOptions(request, headers, runtime);
  }

  async abortChangeOrderWithOptions(request: AbortChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_abort`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortChangeOrderResponse({}));
  }

  async addLogPath(request: AddLogPathRequest): Promise<AddLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addLogPathWithOptions(request, headers, runtime);
  }

  async addLogPathWithOptions(request: AddLogPathRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddLogPathResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddLogPath",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/log/popListLogDirs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddLogPathResponse>(await this.callApi(params, req, runtime), new AddLogPathResponse({}));
  }

  async addMockRule(request: AddMockRuleRequest): Promise<AddMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMockRuleWithOptions(request, headers, runtime);
  }

  async addMockRuleWithOptions(request: AddMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumerAppsJson)) {
      query["ConsumerAppsJson"] = request.consumerAppsJson;
    }

    if (!Util.isUnset(request.dubboMockItemJson)) {
      query["DubboMockItemJson"] = request.dubboMockItemJson;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!Util.isUnset(request.mockType)) {
      query["MockType"] = request.mockType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    if (!Util.isUnset(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.scMockItemJson)) {
      query["ScMockItemJson"] = request.scMockItemJson;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/addMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddMockRuleResponse>(await this.callApi(params, req, runtime), new AddMockRuleResponse({}));
  }

  async authorizeApplication(request: AuthorizeApplicationRequest): Promise<AuthorizeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeApplicationWithOptions(request, headers, runtime);
  }

  async authorizeApplicationWithOptions(request: AuthorizeApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeApplicationResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationResponse({}));
  }

  async authorizeResourceGroup(request: AuthorizeResourceGroupRequest): Promise<AuthorizeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeResourceGroupWithOptions(request, headers, runtime);
  }

  async authorizeResourceGroupWithOptions(request: AuthorizeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeResourceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeResourceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_res_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeResourceGroupResponse>(await this.callApi(params, req, runtime), new AuthorizeResourceGroupResponse({}));
  }

  async authorizeRole(request: AuthorizeRoleRequest): Promise<AuthorizeRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeRoleWithOptions(request, headers, runtime);
  }

  async authorizeRoleWithOptions(request: AuthorizeRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeRoleResponse>(await this.callApi(params, req, runtime), new AuthorizeRoleResponse({}));
  }

  async bindEcsSlb(request: BindEcsSlbRequest): Promise<BindEcsSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEcsSlbWithOptions(request, headers, runtime);
  }

  async bindEcsSlbWithOptions(request: BindEcsSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindEcsSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deployGroupId)) {
      query["DeployGroupId"] = request.deployGroupId;
    }

    if (!Util.isUnset(request.listenerHealthCheckUrl)) {
      query["ListenerHealthCheckUrl"] = request.listenerHealthCheckUrl;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.VForwardingUrlRule)) {
      query["VForwardingUrlRule"] = request.VForwardingUrlRule;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindEcsSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/slb/bind_slb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindEcsSlbResponse>(await this.callApi(params, req, runtime), new BindEcsSlbResponse({}));
  }

  async bindK8sSlb(request: BindK8sSlbRequest): Promise<BindK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindK8sSlbWithOptions(request, headers, runtime);
  }

  async bindK8sSlbWithOptions(request: BindK8sSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindK8sSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindK8sSlbResponse>(await this.callApi(params, req, runtime), new BindK8sSlbResponse({}));
  }

  async bindSlb(request: BindSlbRequest): Promise<BindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
  }

  async bindSlbWithOptions(request: BindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.slbIp)) {
      query["SlbIp"] = request.slbIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/bind_slb_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindSlbResponse>(await this.callApi(params, req, runtime), new BindSlbResponse({}));
  }

  async changeDeployGroup(request: ChangeDeployGroupRequest): Promise<ChangeDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeDeployGroupWithOptions(request, headers, runtime);
  }

  async changeDeployGroupWithOptions(request: ChangeDeployGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeDeployGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    if (!Util.isUnset(request.forceStatus)) {
      query["ForceStatus"] = request.forceStatus;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_change_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeDeployGroupResponse>(await this.callApi(params, req, runtime), new ChangeDeployGroupResponse({}));
  }

  async continuePipeline(request: ContinuePipelineRequest): Promise<ContinuePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.continuePipelineWithOptions(request, headers, runtime);
  }

  async continuePipelineWithOptions(request: ContinuePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ContinuePipelineResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.confirm)) {
      query["Confirm"] = request.confirm;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinuePipeline",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/pipeline_batch_confirm`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ContinuePipelineResponse>(await this.callApi(params, req, runtime), new ContinuePipelineResponse({}));
  }

  async convertK8sResource(request: ConvertK8sResourceRequest): Promise<ConvertK8sResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertK8sResourceWithOptions(request, headers, runtime);
  }

  async convertK8sResourceWithOptions(request: ConvertK8sResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConvertK8sResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertK8sResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/k8s_resource_convert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConvertK8sResourceResponse>(await this.callApi(params, req, runtime), new ConvertK8sResourceResponse({}));
  }

  async createApplicationScalingRule(request: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async createApplicationScalingRuleWithOptions(request: CreateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!Util.isUnset(request.scalingRuleTrigger)) {
      query["ScalingRuleTrigger"] = request.scalingRuleTrigger;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new CreateApplicationScalingRuleResponse({}));
  }

  async createConfigTemplate(request: CreateConfigTemplateRequest): Promise<CreateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigTemplateWithOptions(request, headers, runtime);
  }

  async createConfigTemplateWithOptions(request: CreateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigTemplateResponse>(await this.callApi(params, req, runtime), new CreateConfigTemplateResponse({}));
  }

  async createIDCImportCommand(request: CreateIDCImportCommandRequest): Promise<CreateIDCImportCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIDCImportCommandWithOptions(request, headers, runtime);
  }

  async createIDCImportCommandWithOptions(request: CreateIDCImportCommandRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIDCImportCommandResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIDCImportCommand",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/create_idc_import_command`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIDCImportCommandResponse>(await this.callApi(params, req, runtime), new CreateIDCImportCommandResponse({}));
  }

  async createK8sConfigMap(request: CreateK8sConfigMapRequest): Promise<CreateK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sConfigMapWithOptions(request, headers, runtime);
  }

  async createK8sConfigMapWithOptions(request: CreateK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sConfigMapResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateK8sConfigMapResponse>(await this.callApi(params, req, runtime), new CreateK8sConfigMapResponse({}));
  }

  async createK8sIngressRule(request: CreateK8sIngressRuleRequest): Promise<CreateK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sIngressRuleWithOptions(request, headers, runtime);
  }

  async createK8sIngressRuleWithOptions(request: CreateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sIngressRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new CreateK8sIngressRuleResponse({}));
  }

  async createK8sSecret(request: CreateK8sSecretRequest): Promise<CreateK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sSecretWithOptions(request, headers, runtime);
  }

  async createK8sSecretWithOptions(request: CreateK8sSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sSecretResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.base64Encoded)) {
      body["Base64Encoded"] = request.base64Encoded;
    }

    if (!Util.isUnset(request.certId)) {
      body["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certRegionId)) {
      body["CertRegionId"] = request.certRegionId;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateK8sSecretResponse>(await this.callApi(params, req, runtime), new CreateK8sSecretResponse({}));
  }

  async createK8sService(request: CreateK8sServiceRequest): Promise<CreateK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sServiceWithOptions(request, headers, runtime);
  }

  async createK8sServiceWithOptions(request: CreateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateK8sServiceResponse>(await this.callApi(params, req, runtime), new CreateK8sServiceResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_delete_app`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplicationScalingRule(request: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async deleteApplicationScalingRuleWithOptions(request: DeleteApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DeleteApplicationScalingRuleResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(request, headers, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteClusterMember(request: DeleteClusterMemberRequest): Promise<DeleteClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterMemberWithOptions(request, headers, runtime);
  }

  async deleteClusterMemberWithOptions(request: DeleteClusterMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterMemberId)) {
      query["ClusterMemberId"] = request.clusterMemberId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterMemberResponse>(await this.callApi(params, req, runtime), new DeleteClusterMemberResponse({}));
  }

  async deleteConfigTemplate(request: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigTemplateWithOptions(request, headers, runtime);
  }

  async deleteConfigTemplateWithOptions(request: DeleteConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigTemplateResponse>(await this.callApi(params, req, runtime), new DeleteConfigTemplateResponse({}));
  }

  async deleteDeployGroup(request: DeleteDeployGroupRequest): Promise<DeleteDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeployGroupWithOptions(request, headers, runtime);
  }

  async deleteDeployGroupWithOptions(request: DeleteDeployGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDeployGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/deploy_group`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeployGroupResponse>(await this.callApi(params, req, runtime), new DeleteDeployGroupResponse({}));
  }

  async deleteEcu(request: DeleteEcuRequest): Promise<DeleteEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEcuWithOptions(request, headers, runtime);
  }

  async deleteEcuWithOptions(request: DeleteEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ecuId)) {
      query["EcuId"] = request.ecuId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/delete_ecu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEcuResponse>(await this.callApi(params, req, runtime), new DeleteEcuResponse({}));
  }

  async deleteK8sApplication(request: DeleteK8sApplicationRequest): Promise<DeleteK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sApplicationWithOptions(request, headers, runtime);
  }

  async deleteK8sApplicationWithOptions(request: DeleteK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteK8sApplicationResponse>(await this.callApi(params, req, runtime), new DeleteK8sApplicationResponse({}));
  }

  async deleteK8sConfigMap(request: DeleteK8sConfigMapRequest): Promise<DeleteK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sConfigMapWithOptions(request, headers, runtime);
  }

  async deleteK8sConfigMapWithOptions(request: DeleteK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteK8sConfigMapResponse>(await this.callApi(params, req, runtime), new DeleteK8sConfigMapResponse({}));
  }

  async deleteK8sIngressRule(request: DeleteK8sIngressRuleRequest): Promise<DeleteK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sIngressRuleWithOptions(request, headers, runtime);
  }

  async deleteK8sIngressRuleWithOptions(request: DeleteK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sIngressRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new DeleteK8sIngressRuleResponse({}));
  }

  async deleteK8sSecret(request: DeleteK8sSecretRequest): Promise<DeleteK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sSecretWithOptions(request, headers, runtime);
  }

  async deleteK8sSecretWithOptions(request: DeleteK8sSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sSecretResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteK8sSecretResponse>(await this.callApi(params, req, runtime), new DeleteK8sSecretResponse({}));
  }

  async deleteK8sService(request: DeleteK8sServiceRequest): Promise<DeleteK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sServiceWithOptions(request, headers, runtime);
  }

  async deleteK8sServiceWithOptions(request: DeleteK8sServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteK8sServiceResponse>(await this.callApi(params, req, runtime), new DeleteK8sServiceResponse({}));
  }

  async deleteLogPath(request: DeleteLogPathRequest): Promise<DeleteLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogPathWithOptions(request, headers, runtime);
  }

  async deleteLogPathWithOptions(request: DeleteLogPathRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLogPathResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogPath",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/log/popListLogDirs`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogPathResponse>(await this.callApi(params, req, runtime), new DeleteLogPathResponse({}));
  }

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(request, headers, runtime);
  }

  async deleteRoleWithOptions(request: DeleteRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/delete_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoleResponse>(await this.callApi(params, req, runtime), new DeleteRoleResponse({}));
  }

  async deleteServiceGroup(request: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupWithOptions(request, headers, runtime);
  }

  async deleteServiceGroupWithOptions(request: DeleteServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceGroupResponse>(await this.callApi(params, req, runtime), new DeleteServiceGroupResponse({}));
  }

  async deleteUserDefineRegion(request: DeleteUserDefineRegionRequest): Promise<DeleteUserDefineRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserDefineRegionWithOptions(request, headers, runtime);
  }

  async deleteUserDefineRegionWithOptions(request: DeleteUserDefineRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteUserDefineRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserDefineRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_def`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserDefineRegionResponse>(await this.callApi(params, req, runtime), new DeleteUserDefineRegionResponse({}));
  }

  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  async deployApplicationWithOptions(request: DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appEnv)) {
      query["AppEnv"] = request.appEnv;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.gray)) {
      query["Gray"] = request.gray;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.releaseType)) {
      query["ReleaseType"] = request.releaseType;
    }

    if (!Util.isUnset(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    if (!Util.isUnset(request.warUrl)) {
      query["WarUrl"] = request.warUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationResponse>(await this.callApi(params, req, runtime), new DeployApplicationResponse({}));
  }

  async deployK8sApplication(request: DeployK8sApplicationRequest): Promise<DeployK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployK8sApplicationWithOptions(request, headers, runtime);
  }

  async deployK8sApplicationWithOptions(request: DeployK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.args)) {
      query["Args"] = request.args;
    }

    if (!Util.isUnset(request.batchTimeout)) {
      query["BatchTimeout"] = request.batchTimeout;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!Util.isUnset(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!Util.isUnset(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!Util.isUnset(request.customAffinity)) {
      query["CustomAffinity"] = request.customAffinity;
    }

    if (!Util.isUnset(request.customTolerations)) {
      query["CustomTolerations"] = request.customTolerations;
    }

    if (!Util.isUnset(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    if (!Util.isUnset(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!Util.isUnset(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
    }

    if (!Util.isUnset(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!Util.isUnset(request.memoryRequest)) {
      query["MemoryRequest"] = request.memoryRequest;
    }

    if (!Util.isUnset(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.packageVersionId)) {
      query["PackageVersionId"] = request.packageVersionId;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!Util.isUnset(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!Util.isUnset(request.volumesStr)) {
      query["VolumesStr"] = request.volumesStr;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeployK8sApplicationResponse>(await this.callApi(params, req, runtime), new DeployK8sApplicationResponse({}));
  }

  async describeAppInstanceList(request: DescribeAppInstanceListRequest): Promise<DescribeAppInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppInstanceListWithOptions(request, headers, runtime);
  }

  async describeAppInstanceListWithOptions(request: DescribeAppInstanceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppInstanceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.withNodeInfo)) {
      query["WithNodeInfo"] = request.withNodeInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppInstanceList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/app_instance_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppInstanceListResponse>(await this.callApi(params, req, runtime), new DescribeAppInstanceListResponse({}));
  }

  async describeApplicationScalingRules(request: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRulesWithOptions(request, headers, runtime);
  }

  async describeApplicationScalingRulesWithOptions(request: DescribeApplicationScalingRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationScalingRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationScalingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationScalingRulesResponse>(await this.callApi(params, req, runtime), new DescribeApplicationScalingRulesResponse({}));
  }

  async disableApplicationScalingRule(request: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async disableApplicationScalingRuleWithOptions(request: DisableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/disable_application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DisableApplicationScalingRuleResponse({}));
  }

  async disableMockRule(request: DisableMockRuleRequest): Promise<DisableMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableMockRuleWithOptions(request, headers, runtime);
  }

  async disableMockRuleWithOptions(request: DisableMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/disableMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableMockRuleResponse>(await this.callApi(params, req, runtime), new DisableMockRuleResponse({}));
  }

  async enableApplicationScalingRule(request: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async enableApplicationScalingRuleWithOptions(request: EnableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/enable_application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new EnableApplicationScalingRuleResponse({}));
  }

  async enableMockRule(request: EnableMockRuleRequest): Promise<EnableMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableMockRuleWithOptions(request, headers, runtime);
  }

  async enableMockRuleWithOptions(request: EnableMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/enableMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableMockRuleResponse>(await this.callApi(params, req, runtime), new EnableMockRuleResponse({}));
  }

  async getAccountMockRule(request: GetAccountMockRuleRequest): Promise<GetAccountMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccountMockRuleWithOptions(request, headers, runtime);
  }

  async getAccountMockRuleWithOptions(request: GetAccountMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAccountMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumerAppName)) {
      query["ConsumerAppName"] = request.consumerAppName;
    }

    if (!Util.isUnset(request.mockType)) {
      query["MockType"] = request.mockType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/getAccountMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAccountMockRuleResponse>(await this.callApi(params, req, runtime), new GetAccountMockRuleResponse({}));
  }

  async getAppDeployment(request: GetAppDeploymentRequest): Promise<GetAppDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppDeploymentWithOptions(request, headers, runtime);
  }

  async getAppDeploymentWithOptions(request: GetAppDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppDeploymentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppDeployment",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/app_deployment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppDeploymentResponse>(await this.callApi(params, req, runtime), new GetAppDeploymentResponse({}));
  }

  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(request, headers, runtime);
  }

  async getApplicationWithOptions(request: GetApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  async getChangeOrderInfo(request: GetChangeOrderInfoRequest): Promise<GetChangeOrderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChangeOrderInfoWithOptions(request, headers, runtime);
  }

  async getChangeOrderInfoWithOptions(request: GetChangeOrderInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetChangeOrderInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChangeOrderInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetChangeOrderInfoResponse>(await this.callApi(params, req, runtime), new GetChangeOrderInfoResponse({}));
  }

  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(request, headers, runtime);
  }

  async getClusterWithOptions(request: GetClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  async getContainerConfiguration(request: GetContainerConfigurationRequest): Promise<GetContainerConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContainerConfigurationWithOptions(request, headers, runtime);
  }

  async getContainerConfigurationWithOptions(request: GetContainerConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetContainerConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContainerConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/container_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetContainerConfigurationResponse>(await this.callApi(params, req, runtime), new GetContainerConfigurationResponse({}));
  }

  async getJavaStartUpConfig(request: GetJavaStartUpConfigRequest): Promise<GetJavaStartUpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJavaStartUpConfigWithOptions(request, headers, runtime);
  }

  async getJavaStartUpConfigWithOptions(request: GetJavaStartUpConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJavaStartUpConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJavaStartUpConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/java_start_up_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJavaStartUpConfigResponse>(await this.callApi(params, req, runtime), new GetJavaStartUpConfigResponse({}));
  }

  async getJvmConfiguration(request: GetJvmConfigurationRequest): Promise<GetJvmConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJvmConfigurationWithOptions(request, headers, runtime);
  }

  async getJvmConfigurationWithOptions(request: GetJvmConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJvmConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJvmConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_jvm_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJvmConfigurationResponse>(await this.callApi(params, req, runtime), new GetJvmConfigurationResponse({}));
  }

  async getK8sApplication(request: GetK8sApplicationRequest): Promise<GetK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sApplicationWithOptions(request, headers, runtime);
  }

  async getK8sApplicationWithOptions(request: GetK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_application`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetK8sApplicationResponse>(await this.callApi(params, req, runtime), new GetK8sApplicationResponse({}));
  }

  async getK8sCluster(request: GetK8sClusterRequest): Promise<GetK8sClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sClusterWithOptions(request, headers, runtime);
  }

  async getK8sClusterWithOptions(request: GetK8sClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetK8sClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetK8sCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s_clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetK8sClusterResponse>(await this.callApi(params, req, runtime), new GetK8sClusterResponse({}));
  }

  async getK8sServices(request: GetK8sServicesRequest): Promise<GetK8sServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sServicesWithOptions(request, headers, runtime);
  }

  async getK8sServicesWithOptions(request: GetK8sServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetK8sServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetK8sServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetK8sServicesResponse>(await this.callApi(params, req, runtime), new GetK8sServicesResponse({}));
  }

  async getMockRuleByConsumerAppId(request: GetMockRuleByConsumerAppIdRequest): Promise<GetMockRuleByConsumerAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMockRuleByConsumerAppIdWithOptions(request, headers, runtime);
  }

  async getMockRuleByConsumerAppIdWithOptions(request: GetMockRuleByConsumerAppIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMockRuleByConsumerAppIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumerAppId)) {
      query["ConsumerAppId"] = request.consumerAppId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMockRuleByConsumerAppId",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/getMockRuleByConsumerAppId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMockRuleByConsumerAppIdResponse>(await this.callApi(params, req, runtime), new GetMockRuleByConsumerAppIdResponse({}));
  }

  async getMockRuleByProviderAppId(request: GetMockRuleByProviderAppIdRequest): Promise<GetMockRuleByProviderAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMockRuleByProviderAppIdWithOptions(request, headers, runtime);
  }

  async getMockRuleByProviderAppIdWithOptions(request: GetMockRuleByProviderAppIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMockRuleByProviderAppIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMockRuleByProviderAppId",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/getMockRuleByProviderAppId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMockRuleByProviderAppIdResponse>(await this.callApi(params, req, runtime), new GetMockRuleByProviderAppIdResponse({}));
  }

  async getPackageStorageCredential(): Promise<GetPackageStorageCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageStorageCredentialWithOptions(headers, runtime);
  }

  async getPackageStorageCredentialWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPackageStorageCredentialResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPackageStorageCredential",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/package_storage_credential`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPackageStorageCredentialResponse>(await this.callApi(params, req, runtime), new GetPackageStorageCredentialResponse({}));
  }

  async getScalingRules(request: GetScalingRulesRequest): Promise<GetScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScalingRulesWithOptions(request, headers, runtime);
  }

  async getScalingRulesWithOptions(request: GetScalingRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScalingRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScalingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/scalingRules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScalingRulesResponse>(await this.callApi(params, req, runtime), new GetScalingRulesResponse({}));
  }

  async getSecureToken(request: GetSecureTokenRequest): Promise<GetSecureTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecureTokenWithOptions(request, headers, runtime);
  }

  async getSecureTokenWithOptions(request: GetSecureTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSecureTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecureToken",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/secure_token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSecureTokenResponse>(await this.callApi(params, req, runtime), new GetSecureTokenResponse({}));
  }

  async getServiceConsumersPage(request: GetServiceConsumersPageRequest): Promise<GetServiceConsumersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceConsumersPageWithOptions(request, headers, runtime);
  }

  async getServiceConsumersPageWithOptions(request: GetServiceConsumersPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceConsumersPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceConsumersPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceConsumersPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceConsumersPageResponse>(await this.callApi(params, req, runtime), new GetServiceConsumersPageResponse({}));
  }

  async getServiceDetail(request: GetServiceDetailRequest): Promise<GetServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDetailWithOptions(request, headers, runtime);
  }

  async getServiceDetailWithOptions(request: GetServiceDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceDetail",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceDetailResponse>(await this.callApi(params, req, runtime), new GetServiceDetailResponse({}));
  }

  async getServiceListPage(request: GetServiceListPageRequest): Promise<GetServiceListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceListPageWithOptions(request, headers, runtime);
  }

  async getServiceListPageWithOptions(request: GetServiceListPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceListPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.searchType)) {
      query["searchType"] = request.searchType;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["searchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.side)) {
      query["side"] = request.side;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceListPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceListPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceListPageResponse>(await this.callApi(params, req, runtime), new GetServiceListPageResponse({}));
  }

  async getServiceMethodPage(request: GetServiceMethodPageRequest): Promise<GetServiceMethodPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceMethodPageWithOptions(request, headers, runtime);
  }

  async getServiceMethodPageWithOptions(request: GetServiceMethodPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceMethodPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.methodController)) {
      query["methodController"] = request.methodController;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["path"] = request.path;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceMethodPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceMethodPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceMethodPageResponse>(await this.callApi(params, req, runtime), new GetServiceMethodPageResponse({}));
  }

  async getServiceProvidersPage(request: GetServiceProvidersPageRequest): Promise<GetServiceProvidersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceProvidersPageWithOptions(request, headers, runtime);
  }

  async getServiceProvidersPageWithOptions(request: GetServiceProvidersPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceProvidersPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceProvidersPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceProvidersPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceProvidersPageResponse>(await this.callApi(params, req, runtime), new GetServiceProvidersPageResponse({}));
  }

  async getWebContainerConfig(request: GetWebContainerConfigRequest): Promise<GetWebContainerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebContainerConfigWithOptions(request, headers, runtime);
  }

  async getWebContainerConfigWithOptions(request: GetWebContainerConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWebContainerConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWebContainerConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/web_container_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWebContainerConfigResponse>(await this.callApi(params, req, runtime), new GetWebContainerConfigResponse({}));
  }

  async importK8sCluster(request: ImportK8sClusterRequest): Promise<ImportK8sClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importK8sClusterWithOptions(request, headers, runtime);
  }

  async importK8sClusterWithOptions(request: ImportK8sClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImportK8sClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.enableAsm)) {
      query["EnableAsm"] = request.enableAsm;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportK8sCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/import_k8s_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImportK8sClusterResponse>(await this.callApi(params, req, runtime), new ImportK8sClusterResponse({}));
  }

  async insertApplication(request: InsertApplicationRequest): Promise<InsertApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertApplicationWithOptions(request, headers, runtime);
  }

  async insertApplicationWithOptions(request: InsertApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    if (!Util.isUnset(request.enablePortCheck)) {
      query["EnablePortCheck"] = request.enablePortCheck;
    }

    if (!Util.isUnset(request.enableUrlCheck)) {
      query["EnableUrlCheck"] = request.enableUrlCheck;
    }

    if (!Util.isUnset(request.healthCheckURL)) {
      query["HealthCheckURL"] = request.healthCheckURL;
    }

    if (!Util.isUnset(request.healthCheckUrl)) {
      query["HealthCheckUrl"] = request.healthCheckUrl;
    }

    if (!Util.isUnset(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.jvmOptions)) {
      query["JvmOptions"] = request.jvmOptions;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    if (!Util.isUnset(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!Util.isUnset(request.mem)) {
      query["Mem"] = request.mem;
    }

    if (!Util.isUnset(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.reservedPortStr)) {
      query["ReservedPortStr"] = request.reservedPortStr;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_create_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertApplicationResponse>(await this.callApi(params, req, runtime), new InsertApplicationResponse({}));
  }

  async insertCluster(request: InsertClusterRequest): Promise<InsertClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterWithOptions(request, headers, runtime);
  }

  async insertClusterWithOptions(request: InsertClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.iaasProvider)) {
      query["IaasProvider"] = request.iaasProvider;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!Util.isUnset(request.oversoldFactor)) {
      query["OversoldFactor"] = request.oversoldFactor;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertClusterResponse>(await this.callApi(params, req, runtime), new InsertClusterResponse({}));
  }

  async insertClusterMember(request: InsertClusterMemberRequest): Promise<InsertClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterMemberWithOptions(request, headers, runtime);
  }

  async insertClusterMemberWithOptions(request: InsertClusterMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertClusterMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["clusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["instanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertClusterMemberResponse>(await this.callApi(params, req, runtime), new InsertClusterMemberResponse({}));
  }

  async insertDeployGroup(request: InsertDeployGroupRequest): Promise<InsertDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertDeployGroupWithOptions(request, headers, runtime);
  }

  async insertDeployGroupWithOptions(request: InsertDeployGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertDeployGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.initPackageVersionId)) {
      query["InitPackageVersionId"] = request.initPackageVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/deploy_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertDeployGroupResponse>(await this.callApi(params, req, runtime), new InsertDeployGroupResponse({}));
  }

  async insertK8sApplication(request: InsertK8sApplicationRequest): Promise<InsertK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertK8sApplicationWithOptions(request, headers, runtime);
  }

  async insertK8sApplicationWithOptions(request: InsertK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.applicationDescription)) {
      query["ApplicationDescription"] = request.applicationDescription;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!Util.isUnset(request.csClusterId)) {
      query["CsClusterId"] = request.csClusterId;
    }

    if (!Util.isUnset(request.customAffinity)) {
      query["CustomAffinity"] = request.customAffinity;
    }

    if (!Util.isUnset(request.customTolerations)) {
      query["CustomTolerations"] = request.customTolerations;
    }

    if (!Util.isUnset(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    if (!Util.isUnset(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.enableAsm)) {
      query["EnableAsm"] = request.enableAsm;
    }

    if (!Util.isUnset(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!Util.isUnset(request.internetSlbPort)) {
      query["InternetSlbPort"] = request.internetSlbPort;
    }

    if (!Util.isUnset(request.internetSlbProtocol)) {
      query["InternetSlbProtocol"] = request.internetSlbProtocol;
    }

    if (!Util.isUnset(request.internetTargetPort)) {
      query["InternetTargetPort"] = request.internetTargetPort;
    }

    if (!Util.isUnset(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    if (!Util.isUnset(request.intranetSlbPort)) {
      query["IntranetSlbPort"] = request.intranetSlbPort;
    }

    if (!Util.isUnset(request.intranetSlbProtocol)) {
      query["IntranetSlbProtocol"] = request.intranetSlbProtocol;
    }

    if (!Util.isUnset(request.intranetTargetPort)) {
      query["IntranetTargetPort"] = request.intranetTargetPort;
    }

    if (!Util.isUnset(request.isMultilingualApp)) {
      query["IsMultilingualApp"] = request.isMultilingualApp;
    }

    if (!Util.isUnset(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.limitCpu)) {
      query["LimitCpu"] = request.limitCpu;
    }

    if (!Util.isUnset(request.limitMem)) {
      query["LimitMem"] = request.limitMem;
    }

    if (!Util.isUnset(request.limitmCpu)) {
      query["LimitmCpu"] = request.limitmCpu;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.requestsCpu)) {
      query["RequestsCpu"] = request.requestsCpu;
    }

    if (!Util.isUnset(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!Util.isUnset(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!Util.isUnset(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/create_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertK8sApplicationResponse>(await this.callApi(params, req, runtime), new InsertK8sApplicationResponse({}));
  }

  async insertOrUpdateRegion(request: InsertOrUpdateRegionRequest): Promise<InsertOrUpdateRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertOrUpdateRegionWithOptions(request, headers, runtime);
  }

  async insertOrUpdateRegionWithOptions(request: InsertOrUpdateRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertOrUpdateRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.debugEnable)) {
      query["DebugEnable"] = request.debugEnable;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertOrUpdateRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_def`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertOrUpdateRegionResponse>(await this.callApi(params, req, runtime), new InsertOrUpdateRegionResponse({}));
  }

  async insertRole(request: InsertRoleRequest): Promise<InsertRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertRoleWithOptions(request, headers, runtime);
  }

  async insertRoleWithOptions(request: InsertRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/create_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertRoleResponse>(await this.callApi(params, req, runtime), new InsertRoleResponse({}));
  }

  async insertServiceGroup(request: InsertServiceGroupRequest): Promise<InsertServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertServiceGroupWithOptions(request, headers, runtime);
  }

  async insertServiceGroupWithOptions(request: InsertServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertServiceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertServiceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertServiceGroupResponse>(await this.callApi(params, req, runtime), new InsertServiceGroupResponse({}));
  }

  async installAgent(request: InstallAgentRequest): Promise<InstallAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentWithOptions(request, headers, runtime);
  }

  async installAgentWithOptions(request: InstallAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallAgentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.doAsync)) {
      query["DoAsync"] = request.doAsync;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallAgent",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/ecss/install_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InstallAgentResponse>(await this.callApi(params, req, runtime), new InstallAgentResponse({}));
  }

  async listAliyunRegion(): Promise<ListAliyunRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliyunRegionWithOptions(headers, runtime);
  }

  async listAliyunRegionWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAliyunRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListAliyunRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/region_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAliyunRegionResponse>(await this.callApi(params, req, runtime), new ListAliyunRegionResponse({}));
  }

  async listApplication(request: ListApplicationRequest): Promise<ListApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationWithOptions(request, headers, runtime);
  }

  async listApplicationWithOptions(request: ListApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.logicalRegionIdFilter)) {
      query["LogicalRegionIdFilter"] = request.logicalRegionIdFilter;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationResponse>(await this.callApi(params, req, runtime), new ListApplicationResponse({}));
  }

  async listApplicationEcu(request: ListApplicationEcuRequest): Promise<ListApplicationEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationEcuWithOptions(request, headers, runtime);
  }

  async listApplicationEcuWithOptions(request: ListApplicationEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecu_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationEcuResponse>(await this.callApi(params, req, runtime), new ListApplicationEcuResponse({}));
  }

  async listAuthority(): Promise<ListAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorityWithOptions(headers, runtime);
  }

  async listAuthorityWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAuthorityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListAuthority",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authority_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorityResponse>(await this.callApi(params, req, runtime), new ListAuthorityResponse({}));
  }

  async listBuildPack(): Promise<ListBuildPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBuildPackWithOptions(headers, runtime);
  }

  async listBuildPackWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListBuildPackResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListBuildPack",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/build_pack_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBuildPackResponse>(await this.callApi(params, req, runtime), new ListBuildPackResponse({}));
  }

  async listCluster(request: ListClusterRequest): Promise<ListClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterWithOptions(request, headers, runtime);
  }

  async listClusterWithOptions(request: ListClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterResponse>(await this.callApi(params, req, runtime), new ListClusterResponse({}));
  }

  async listClusterMembers(request: ListClusterMembersRequest): Promise<ListClusterMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterMembersWithOptions(request, headers, runtime);
  }

  async listClusterMembersWithOptions(request: ListClusterMembersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ecsList)) {
      query["EcsList"] = request.ecsList;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterMembers",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterMembersResponse>(await this.callApi(params, req, runtime), new ListClusterMembersResponse({}));
  }

  async listComponents(): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(headers, runtime);
  }

  async listComponentsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListComponentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListComponents",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListComponentsResponse>(await this.callApi(params, req, runtime), new ListComponentsResponse({}));
  }

  async listConfigTemplates(request: ListConfigTemplatesRequest): Promise<ListConfigTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigTemplatesWithOptions(request, headers, runtime);
  }

  async listConfigTemplatesWithOptions(request: ListConfigTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConfigTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigTemplates",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConfigTemplatesResponse>(await this.callApi(params, req, runtime), new ListConfigTemplatesResponse({}));
  }

  async listConsumedServices(request: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumedServicesWithOptions(request, headers, runtime);
  }

  async listConsumedServicesWithOptions(request: ListConsumedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConsumedServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/listConsumedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumedServicesResponse>(await this.callApi(params, req, runtime), new ListConsumedServicesResponse({}));
  }

  async listConvertableEcu(request: ListConvertableEcuRequest): Promise<ListConvertableEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConvertableEcuWithOptions(request, headers, runtime);
  }

  async listConvertableEcuWithOptions(request: ListConvertableEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConvertableEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["clusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConvertableEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/convertable_ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConvertableEcuResponse>(await this.callApi(params, req, runtime), new ListConvertableEcuResponse({}));
  }

  async listDeployGroup(request: ListDeployGroupRequest): Promise<ListDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeployGroupWithOptions(request, headers, runtime);
  }

  async listDeployGroupWithOptions(request: ListDeployGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeployGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/deploy_group_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeployGroupResponse>(await this.callApi(params, req, runtime), new ListDeployGroupResponse({}));
  }

  async listEcsNotInCluster(request: ListEcsNotInClusterRequest): Promise<ListEcsNotInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsNotInClusterWithOptions(request, headers, runtime);
  }

  async listEcsNotInClusterWithOptions(request: ListEcsNotInClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsNotInClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEcsNotInCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecs_not_in_cluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEcsNotInClusterResponse>(await this.callApi(params, req, runtime), new ListEcsNotInClusterResponse({}));
  }

  async listEcuByRegion(request: ListEcuByRegionRequest): Promise<ListEcuByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcuByRegionWithOptions(request, headers, runtime);
  }

  async listEcuByRegionWithOptions(request: ListEcuByRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcuByRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.act)) {
      query["Act"] = request.act;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEcuByRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEcuByRegionResponse>(await this.callApi(params, req, runtime), new ListEcuByRegionResponse({}));
  }

  async listHistoryDeployVersion(request: ListHistoryDeployVersionRequest): Promise<ListHistoryDeployVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHistoryDeployVersionWithOptions(request, headers, runtime);
  }

  async listHistoryDeployVersionWithOptions(request: ListHistoryDeployVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListHistoryDeployVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHistoryDeployVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/deploy_history_version_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHistoryDeployVersionResponse>(await this.callApi(params, req, runtime), new ListHistoryDeployVersionResponse({}));
  }

  async listK8sConfigMaps(request: ListK8sConfigMapsRequest): Promise<ListK8sConfigMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sConfigMapsWithOptions(request, headers, runtime);
  }

  async listK8sConfigMapsWithOptions(request: ListK8sConfigMapsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListK8sConfigMapsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showRelatedApps)) {
      query["ShowRelatedApps"] = request.showRelatedApps;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListK8sConfigMaps",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListK8sConfigMapsResponse>(await this.callApi(params, req, runtime), new ListK8sConfigMapsResponse({}));
  }

  async listK8sIngressRules(request: ListK8sIngressRulesRequest): Promise<ListK8sIngressRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sIngressRulesWithOptions(request, headers, runtime);
  }

  async listK8sIngressRulesWithOptions(request: ListK8sIngressRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListK8sIngressRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListK8sIngressRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListK8sIngressRulesResponse>(await this.callApi(params, req, runtime), new ListK8sIngressRulesResponse({}));
  }

  async listK8sSecrets(request: ListK8sSecretsRequest): Promise<ListK8sSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sSecretsWithOptions(request, headers, runtime);
  }

  async listK8sSecretsWithOptions(request: ListK8sSecretsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListK8sSecretsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showRelatedApps)) {
      query["ShowRelatedApps"] = request.showRelatedApps;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListK8sSecrets",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListK8sSecretsResponse>(await this.callApi(params, req, runtime), new ListK8sSecretsResponse({}));
  }

  async listMethods(request: ListMethodsRequest): Promise<ListMethodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMethodsWithOptions(request, headers, runtime);
  }

  async listMethodsWithOptions(request: ListMethodsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMethodsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMethods",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/list_methods`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMethodsResponse>(await this.callApi(params, req, runtime), new ListMethodsResponse({}));
  }

  async listPublishedServices(request: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedServicesWithOptions(request, headers, runtime);
  }

  async listPublishedServicesWithOptions(request: ListPublishedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPublishedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/listPublishedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedServicesResponse>(await this.callApi(params, req, runtime), new ListPublishedServicesResponse({}));
  }

  async listRecentChangeOrder(request: ListRecentChangeOrderRequest): Promise<ListRecentChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecentChangeOrderWithOptions(request, headers, runtime);
  }

  async listRecentChangeOrderWithOptions(request: ListRecentChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRecentChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRecentChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRecentChangeOrderResponse>(await this.callApi(params, req, runtime), new ListRecentChangeOrderResponse({}));
  }

  async listResourceGroup(): Promise<ListResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupWithOptions(headers, runtime);
  }

  async listResourceGroupWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/reg_group_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupResponse>(await this.callApi(params, req, runtime), new ListResourceGroupResponse({}));
  }

  async listRole(): Promise<ListRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRoleWithOptions(headers, runtime);
  }

  async listRoleWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/role_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRoleResponse>(await this.callApi(params, req, runtime), new ListRoleResponse({}));
  }

  async listRootStacks(request: ListRootStacksRequest): Promise<ListRootStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRootStacksWithOptions(request, headers, runtime);
  }

  async listRootStacksWithOptions(request: ListRootStacksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRootStacksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRootStacks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/s2i/list_root_stack`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRootStacksResponse>(await this.callApi(params, req, runtime), new ListRootStacksResponse({}));
  }

  async listScaleOutEcu(request: ListScaleOutEcuRequest): Promise<ListScaleOutEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScaleOutEcuWithOptions(request, headers, runtime);
  }

  async listScaleOutEcuWithOptions(request: ListScaleOutEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScaleOutEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceNum)) {
      query["InstanceNum"] = request.instanceNum;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.mem)) {
      query["Mem"] = request.mem;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScaleOutEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/scale_out_ecu_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListScaleOutEcuResponse>(await this.callApi(params, req, runtime), new ListScaleOutEcuResponse({}));
  }

  async listServiceGroups(): Promise<ListServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsWithOptions(headers, runtime);
  }

  async listServiceGroupsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceGroupsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListServiceGroups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceGroupsResponse>(await this.callApi(params, req, runtime), new ListServiceGroupsResponse({}));
  }

  async listSlb(): Promise<ListSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlbWithOptions(headers, runtime);
  }

  async listSlbWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlbResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/slb_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSlbResponse>(await this.callApi(params, req, runtime), new ListSlbResponse({}));
  }

  async listSubAccount(): Promise<ListSubAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubAccountWithOptions(headers, runtime);
  }

  async listSubAccountWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubAccountResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSubAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/sub_account_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubAccountResponse>(await this.callApi(params, req, runtime), new ListSubAccountResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listUserDefineRegion(request: ListUserDefineRegionRequest): Promise<ListUserDefineRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserDefineRegionWithOptions(request, headers, runtime);
  }

  async listUserDefineRegionWithOptions(request: ListUserDefineRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserDefineRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.debugEnable)) {
      query["DebugEnable"] = request.debugEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserDefineRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_defs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserDefineRegionResponse>(await this.callApi(params, req, runtime), new ListUserDefineRegionResponse({}));
  }

  async listVpc(): Promise<ListVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcWithOptions(headers, runtime);
  }

  async listVpcWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVpcResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListVpc",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/vpc_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVpcResponse>(await this.callApi(params, req, runtime), new ListVpcResponse({}));
  }

  async migrateEcu(request: MigrateEcuRequest): Promise<MigrateEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateEcuWithOptions(request, headers, runtime);
  }

  async migrateEcuWithOptions(request: MigrateEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MigrateEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MigrateEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_ecu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MigrateEcuResponse>(await this.callApi(params, req, runtime), new MigrateEcuResponse({}));
  }

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScalingRuleWithOptions(request, headers, runtime);
  }

  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptEULA)) {
      query["AcceptEULA"] = request.acceptEULA;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.inCondition)) {
      query["InCondition"] = request.inCondition;
    }

    if (!Util.isUnset(request.inCpu)) {
      query["InCpu"] = request.inCpu;
    }

    if (!Util.isUnset(request.inDuration)) {
      query["InDuration"] = request.inDuration;
    }

    if (!Util.isUnset(request.inEnable)) {
      query["InEnable"] = request.inEnable;
    }

    if (!Util.isUnset(request.inInstanceNum)) {
      query["InInstanceNum"] = request.inInstanceNum;
    }

    if (!Util.isUnset(request.inLoad)) {
      query["InLoad"] = request.inLoad;
    }

    if (!Util.isUnset(request.inRT)) {
      query["InRT"] = request.inRT;
    }

    if (!Util.isUnset(request.inStep)) {
      query["InStep"] = request.inStep;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.multiAzPolicy)) {
      query["MultiAzPolicy"] = request.multiAzPolicy;
    }

    if (!Util.isUnset(request.outCPU)) {
      query["OutCPU"] = request.outCPU;
    }

    if (!Util.isUnset(request.outCondition)) {
      query["OutCondition"] = request.outCondition;
    }

    if (!Util.isUnset(request.outDuration)) {
      query["OutDuration"] = request.outDuration;
    }

    if (!Util.isUnset(request.outEnable)) {
      query["OutEnable"] = request.outEnable;
    }

    if (!Util.isUnset(request.outInstanceNum)) {
      query["OutInstanceNum"] = request.outInstanceNum;
    }

    if (!Util.isUnset(request.outLoad)) {
      query["OutLoad"] = request.outLoad;
    }

    if (!Util.isUnset(request.outRT)) {
      query["OutRT"] = request.outRT;
    }

    if (!Util.isUnset(request.outStep)) {
      query["OutStep"] = request.outStep;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.resourceFrom)) {
      query["ResourceFrom"] = request.resourceFrom;
    }

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!Util.isUnset(request.templateInstanceName)) {
      query["TemplateInstanceName"] = request.templateInstanceName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/scaling_rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyScalingRuleResponse>(await this.callApi(params, req, runtime), new ModifyScalingRuleResponse({}));
  }

  async queryApplicationStatus(request: QueryApplicationStatusRequest): Promise<QueryApplicationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryApplicationStatusWithOptions(request, headers, runtime);
  }

  async queryApplicationStatusWithOptions(request: QueryApplicationStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryApplicationStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryApplicationStatus",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryApplicationStatusResponse>(await this.callApi(params, req, runtime), new QueryApplicationStatusResponse({}));
  }

  async queryEccInfo(request: QueryEccInfoRequest): Promise<QueryEccInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryEccInfoWithOptions(request, headers, runtime);
  }

  async queryEccInfoWithOptions(request: QueryEccInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryEccInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eccId)) {
      query["EccId"] = request.eccId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEccInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/ecc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryEccInfoResponse>(await this.callApi(params, req, runtime), new QueryEccInfoResponse({}));
  }

  async queryMigrateEcuList(request: QueryMigrateEcuListRequest): Promise<QueryMigrateEcuListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateEcuListWithOptions(request, headers, runtime);
  }

  async queryMigrateEcuListWithOptions(request: QueryMigrateEcuListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryMigrateEcuListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMigrateEcuList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryMigrateEcuListResponse>(await this.callApi(params, req, runtime), new QueryMigrateEcuListResponse({}));
  }

  async queryMigrateRegionList(request: QueryMigrateRegionListRequest): Promise<QueryMigrateRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateRegionListWithOptions(request, headers, runtime);
  }

  async queryMigrateRegionListWithOptions(request: QueryMigrateRegionListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryMigrateRegionListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMigrateRegionList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_region_select`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryMigrateRegionListResponse>(await this.callApi(params, req, runtime), new QueryMigrateRegionListResponse({}));
  }

  async queryRegionConfig(): Promise<QueryRegionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRegionConfigWithOptions(headers, runtime);
  }

  async queryRegionConfigWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRegionConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "QueryRegionConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/region_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRegionConfigResponse>(await this.callApi(params, req, runtime), new QueryRegionConfigResponse({}));
  }

  async querySlsLogStoreList(request: QuerySlsLogStoreListRequest): Promise<QuerySlsLogStoreListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySlsLogStoreListWithOptions(request, headers, runtime);
  }

  async querySlsLogStoreListWithOptions(request: QuerySlsLogStoreListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySlsLogStoreListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySlsLogStoreList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/sls/query_sls_log_store_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySlsLogStoreListResponse>(await this.callApi(params, req, runtime), new QuerySlsLogStoreListResponse({}));
  }

  async removeMockRule(request: RemoveMockRuleRequest): Promise<RemoveMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMockRuleWithOptions(request, headers, runtime);
  }

  async removeMockRuleWithOptions(request: RemoveMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/removeMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveMockRuleResponse>(await this.callApi(params, req, runtime), new RemoveMockRuleResponse({}));
  }

  async resetApplication(request: ResetApplicationRequest): Promise<ResetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApplicationWithOptions(request, headers, runtime);
  }

  async resetApplicationWithOptions(request: ResetApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResetApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_reset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResetApplicationResponse>(await this.callApi(params, req, runtime), new ResetApplicationResponse({}));
  }

  async restartApplication(request: RestartApplicationRequest): Promise<RestartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartApplicationWithOptions(request, headers, runtime);
  }

  async restartApplicationWithOptions(request: RestartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartApplicationResponse>(await this.callApi(params, req, runtime), new RestartApplicationResponse({}));
  }

  async restartK8sApplication(request: RestartK8sApplicationRequest): Promise<RestartK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartK8sApplicationWithOptions(request, headers, runtime);
  }

  async restartK8sApplicationWithOptions(request: RestartK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/restart_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartK8sApplicationResponse>(await this.callApi(params, req, runtime), new RestartK8sApplicationResponse({}));
  }

  async retryChangeOrderTask(request: RetryChangeOrderTaskRequest): Promise<RetryChangeOrderTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryChangeOrderTaskWithOptions(request, headers, runtime);
  }

  async retryChangeOrderTaskWithOptions(request: RetryChangeOrderTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetryChangeOrderTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.retryStatus)) {
      query["RetryStatus"] = request.retryStatus;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryChangeOrderTask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/task_retry`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetryChangeOrderTaskResponse>(await this.callApi(params, req, runtime), new RetryChangeOrderTaskResponse({}));
  }

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackApplicationWithOptions(request, headers, runtime);
  }

  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_rollback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RollbackApplicationResponse>(await this.callApi(params, req, runtime), new RollbackApplicationResponse({}));
  }

  async rollbackChangeOrder(request: RollbackChangeOrderRequest): Promise<RollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackChangeOrderWithOptions(request, headers, runtime);
  }

  async rollbackChangeOrderWithOptions(request: RollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RollbackChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/changeorder/rollback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new RollbackChangeOrderResponse({}));
  }

  async scaleInApplication(request: ScaleInApplicationRequest): Promise<ScaleInApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInApplicationWithOptions(request, headers, runtime);
  }

  async scaleInApplicationWithOptions(request: ScaleInApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleInApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    if (!Util.isUnset(request.forceStatus)) {
      query["ForceStatus"] = request.forceStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleInApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_scale_in`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleInApplicationResponse>(await this.callApi(params, req, runtime), new ScaleInApplicationResponse({}));
  }

  async scaleK8sApplication(request: ScaleK8sApplicationRequest): Promise<ScaleK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleK8sApplicationWithOptions(request, headers, runtime);
  }

  async scaleK8sApplicationWithOptions(request: ScaleK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleK8sApplicationResponse>(await this.callApi(params, req, runtime), new ScaleK8sApplicationResponse({}));
  }

  async scaleOutApplication(request: ScaleOutApplicationRequest): Promise<ScaleOutApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutApplicationWithOptions(request, headers, runtime);
  }

  async scaleOutApplicationWithOptions(request: ScaleOutApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleOutApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deployGroup)) {
      query["DeployGroup"] = request.deployGroup;
    }

    if (!Util.isUnset(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleOutApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_scale_out`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleOutApplicationResponse>(await this.callApi(params, req, runtime), new ScaleOutApplicationResponse({}));
  }

  async scaleoutApplicationWithNewInstances(request: ScaleoutApplicationWithNewInstancesRequest): Promise<ScaleoutApplicationWithNewInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleoutApplicationWithNewInstancesWithOptions(request, headers, runtime);
  }

  async scaleoutApplicationWithNewInstancesWithOptions(request: ScaleoutApplicationWithNewInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleoutApplicationWithNewInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceChargePeriod)) {
      query["InstanceChargePeriod"] = request.instanceChargePeriod;
    }

    if (!Util.isUnset(request.instanceChargePeriodUnit)) {
      query["InstanceChargePeriodUnit"] = request.instanceChargePeriodUnit;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.scalingNum)) {
      query["ScalingNum"] = request.scalingNum;
    }

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleoutApplicationWithNewInstances",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/scaling/scale_out`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleoutApplicationWithNewInstancesResponse>(await this.callApi(params, req, runtime), new ScaleoutApplicationWithNewInstancesResponse({}));
  }

  async startApplication(request: StartApplicationRequest): Promise<StartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApplicationWithOptions(request, headers, runtime);
  }

  async startApplicationWithOptions(request: StartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartApplicationResponse>(await this.callApi(params, req, runtime), new StartApplicationResponse({}));
  }

  async startK8sApplication(request: StartK8sApplicationRequest): Promise<StartK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sApplicationWithOptions(request, headers, runtime);
  }

  async startK8sApplicationWithOptions(request: StartK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/start_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartK8sApplicationResponse>(await this.callApi(params, req, runtime), new StartK8sApplicationResponse({}));
  }

  async stopApplication(request: StopApplicationRequest): Promise<StopApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApplicationWithOptions(request, headers, runtime);
  }

  async stopApplicationWithOptions(request: StopApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopApplicationResponse>(await this.callApi(params, req, runtime), new StopApplicationResponse({}));
  }

  async stopK8sApplication(request: StopK8sApplicationRequest): Promise<StopK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopK8sApplicationWithOptions(request, headers, runtime);
  }

  async stopK8sApplicationWithOptions(request: StopK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/stop_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopK8sApplicationResponse>(await this.callApi(params, req, runtime), new StopK8sApplicationResponse({}));
  }

  async switchAdvancedMonitoring(request: SwitchAdvancedMonitoringRequest): Promise<SwitchAdvancedMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.switchAdvancedMonitoringWithOptions(request, headers, runtime);
  }

  async switchAdvancedMonitoringWithOptions(request: SwitchAdvancedMonitoringRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SwitchAdvancedMonitoringResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.enableAdvancedMonitoring)) {
      query["EnableAdvancedMonitoring"] = request.enableAdvancedMonitoring;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchAdvancedMonitoring",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/monitor/advancedMonitorInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SwitchAdvancedMonitoringResponse>(await this.callApi(params, req, runtime), new SwitchAdvancedMonitoringResponse({}));
  }

  async synchronizeResource(request: SynchronizeResourceRequest): Promise<SynchronizeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.synchronizeResourceWithOptions(request, headers, runtime);
  }

  async synchronizeResourceWithOptions(request: SynchronizeResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SynchronizeResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SynchronizeResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/pop_sync_resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SynchronizeResourceResponse>(await this.callApi(params, req, runtime), new SynchronizeResourceResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async transformClusterMember(request: TransformClusterMemberRequest): Promise<TransformClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transformClusterMemberWithOptions(request, headers, runtime);
  }

  async transformClusterMemberWithOptions(request: TransformClusterMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TransformClusterMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.targetClusterId)) {
      query["TargetClusterId"] = request.targetClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransformClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/transform_cluster_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TransformClusterMemberResponse>(await this.callApi(params, req, runtime), new TransformClusterMemberResponse({}));
  }

  async unbindK8sSlb(request: UnbindK8sSlbRequest): Promise<UnbindK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindK8sSlbWithOptions(request, headers, runtime);
  }

  async unbindK8sSlbWithOptions(request: UnbindK8sSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindK8sSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindK8sSlbResponse>(await this.callApi(params, req, runtime), new UnbindK8sSlbResponse({}));
  }

  async unbindSlb(request: UnbindSlbRequest): Promise<UnbindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindSlbWithOptions(request, headers, runtime);
  }

  async unbindSlbWithOptions(request: UnbindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deleteListener)) {
      query["DeleteListener"] = request.deleteListener;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/unbind_slb_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindSlbResponse>(await this.callApi(params, req, runtime), new UnbindSlbResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async updateAccountInfo(request: UpdateAccountInfoRequest): Promise<UpdateAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccountInfoWithOptions(request, headers, runtime);
  }

  async updateAccountInfoWithOptions(request: UpdateAccountInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAccountInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccountInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/edit_account_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccountInfoResponse>(await this.callApi(params, req, runtime), new UpdateAccountInfoResponse({}));
  }

  async updateApplicationBaseInfo(request: UpdateApplicationBaseInfoRequest): Promise<UpdateApplicationBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationBaseInfoWithOptions(request, headers, runtime);
  }

  async updateApplicationBaseInfoWithOptions(request: UpdateApplicationBaseInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationBaseInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationBaseInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/update_app_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationBaseInfoResponse>(await this.callApi(params, req, runtime), new UpdateApplicationBaseInfoResponse({}));
  }

  async updateApplicationScalingRule(request: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  async updateApplicationScalingRuleWithOptions(request: UpdateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!Util.isUnset(request.scalingRuleTrigger)) {
      query["ScalingRuleTrigger"] = request.scalingRuleTrigger;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new UpdateApplicationScalingRuleResponse({}));
  }

  async updateConfigTemplate(request: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigTemplateWithOptions(request, headers, runtime);
  }

  async updateConfigTemplateWithOptions(request: UpdateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConfigTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigTemplateResponse>(await this.callApi(params, req, runtime), new UpdateConfigTemplateResponse({}));
  }

  async updateContainer(request: UpdateContainerRequest): Promise<UpdateContainerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerWithOptions(request, headers, runtime);
  }

  async updateContainerWithOptions(request: UpdateContainerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateContainerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContainer",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_update_container`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateContainerResponse>(await this.callApi(params, req, runtime), new UpdateContainerResponse({}));
  }

  async updateContainerConfiguration(request: UpdateContainerConfigurationRequest): Promise<UpdateContainerConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerConfigurationWithOptions(request, headers, runtime);
  }

  async updateContainerConfigurationWithOptions(request: UpdateContainerConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateContainerConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.contextPath)) {
      query["ContextPath"] = request.contextPath;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!Util.isUnset(request.maxThreads)) {
      query["MaxThreads"] = request.maxThreads;
    }

    if (!Util.isUnset(request.URIEncoding)) {
      query["URIEncoding"] = request.URIEncoding;
    }

    if (!Util.isUnset(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContainerConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/container_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateContainerConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateContainerConfigurationResponse({}));
  }

  async updateHealthCheckUrl(request: UpdateHealthCheckUrlRequest): Promise<UpdateHealthCheckUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHealthCheckUrlWithOptions(request, headers, runtime);
  }

  async updateHealthCheckUrlWithOptions(request: UpdateHealthCheckUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHealthCheckUrlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.hcURL)) {
      query["hcURL"] = request.hcURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHealthCheckUrl",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/modify_hc_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateHealthCheckUrlResponse>(await this.callApi(params, req, runtime), new UpdateHealthCheckUrlResponse({}));
  }

  async updateHookConfiguration(request: UpdateHookConfigurationRequest): Promise<UpdateHookConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHookConfigurationWithOptions(request, headers, runtime);
  }

  async updateHookConfigurationWithOptions(request: UpdateHookConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHookConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHookConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/config_app_hook_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateHookConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateHookConfigurationResponse({}));
  }

  async updateJvmConfiguration(request: UpdateJvmConfigurationRequest): Promise<UpdateJvmConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJvmConfigurationWithOptions(request, headers, runtime);
  }

  async updateJvmConfigurationWithOptions(request: UpdateJvmConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateJvmConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    if (!Util.isUnset(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!Util.isUnset(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateJvmConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_jvm_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateJvmConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateJvmConfigurationResponse({}));
  }

  async updateK8sApplicationBaseInfo(request: UpdateK8sApplicationBaseInfoRequest): Promise<UpdateK8sApplicationBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationBaseInfoWithOptions(request, headers, runtime);
  }

  async updateK8sApplicationBaseInfoWithOptions(request: UpdateK8sApplicationBaseInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sApplicationBaseInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sApplicationBaseInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/update_app_basic_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sApplicationBaseInfoResponse>(await this.callApi(params, req, runtime), new UpdateK8sApplicationBaseInfoResponse({}));
  }

  async updateK8sApplicationConfig(request: UpdateK8sApplicationConfigRequest): Promise<UpdateK8sApplicationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationConfigWithOptions(request, headers, runtime);
  }

  async updateK8sApplicationConfigWithOptions(request: UpdateK8sApplicationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sApplicationConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!Util.isUnset(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!Util.isUnset(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!Util.isUnset(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
    }

    if (!Util.isUnset(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!Util.isUnset(request.memoryRequest)) {
      query["MemoryRequest"] = request.memoryRequest;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sApplicationConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_app_configuration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sApplicationConfigResponse>(await this.callApi(params, req, runtime), new UpdateK8sApplicationConfigResponse({}));
  }

  async updateK8sConfigMap(request: UpdateK8sConfigMapRequest): Promise<UpdateK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sConfigMapWithOptions(request, headers, runtime);
  }

  async updateK8sConfigMapWithOptions(request: UpdateK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sConfigMapResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sConfigMapResponse>(await this.callApi(params, req, runtime), new UpdateK8sConfigMapResponse({}));
  }

  async updateK8sIngressRule(request: UpdateK8sIngressRuleRequest): Promise<UpdateK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sIngressRuleWithOptions(request, headers, runtime);
  }

  async updateK8sIngressRuleWithOptions(request: UpdateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sIngressRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new UpdateK8sIngressRuleResponse({}));
  }

  async updateK8sResource(request: UpdateK8sResourceRequest): Promise<UpdateK8sResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sResourceWithOptions(request, headers, runtime);
  }

  async updateK8sResourceWithOptions(request: UpdateK8sResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.resourceContent)) {
      body["ResourceContent"] = request.resourceContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/update_k8s_resource_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sResourceResponse>(await this.callApi(params, req, runtime), new UpdateK8sResourceResponse({}));
  }

  async updateK8sSecret(request: UpdateK8sSecretRequest): Promise<UpdateK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSecretWithOptions(request, headers, runtime);
  }

  async updateK8sSecretWithOptions(request: UpdateK8sSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sSecretResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.base64Encoded)) {
      body["Base64Encoded"] = request.base64Encoded;
    }

    if (!Util.isUnset(request.certId)) {
      body["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certRegionId)) {
      body["CertRegionId"] = request.certRegionId;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sSecretResponse>(await this.callApi(params, req, runtime), new UpdateK8sSecretResponse({}));
  }

  async updateK8sService(request: UpdateK8sServiceRequest): Promise<UpdateK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sServiceWithOptions(request, headers, runtime);
  }

  async updateK8sServiceWithOptions(request: UpdateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sServiceResponse>(await this.callApi(params, req, runtime), new UpdateK8sServiceResponse({}));
  }

  async updateK8sSlb(request: UpdateK8sSlbRequest): Promise<UpdateK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSlbWithOptions(request, headers, runtime);
  }

  async updateK8sSlbWithOptions(request: UpdateK8sSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.disableForceOverride)) {
      query["DisableForceOverride"] = request.disableForceOverride;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!Util.isUnset(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    if (!Util.isUnset(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateK8sSlbResponse>(await this.callApi(params, req, runtime), new UpdateK8sSlbResponse({}));
  }

  async updateMockRule(request: UpdateMockRuleRequest): Promise<UpdateMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMockRuleWithOptions(request, headers, runtime);
  }

  async updateMockRuleWithOptions(request: UpdateMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dubboMockItemJson)) {
      query["DubboMockItemJson"] = request.dubboMockItemJson;
    }

    if (!Util.isUnset(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.scMockItemJson)) {
      query["ScMockItemJson"] = request.scMockItemJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMockRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mock/updateMockRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMockRuleResponse>(await this.callApi(params, req, runtime), new UpdateMockRuleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/edit_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoleResponse>(await this.callApi(params, req, runtime), new UpdateRoleResponse({}));
  }

  async updateSlsLogStore(request: UpdateSlsLogStoreRequest): Promise<UpdateSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSlsLogStoreWithOptions(request, headers, runtime);
  }

  async updateSlsLogStoreWithOptions(request: UpdateSlsLogStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSlsLogStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSlsLogStore",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/sls/update_sls_log_store`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSlsLogStoreResponse>(await this.callApi(params, req, runtime), new UpdateSlsLogStoreResponse({}));
  }

}
