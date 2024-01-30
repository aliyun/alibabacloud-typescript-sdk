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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortAndRollbackChangeOrderResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortChangeOrderResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddLogPathResponseBody;
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
      body: AddLogPathResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeResourceGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeRoleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEcsSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindK8sSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeDeployGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinuePipelineResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertK8sResourceResponseBody;
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
      body: ConvertK8sResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingBehaviour?: string;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleTrigger?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingBehaviour: 'ScalingBehaviour',
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
      scalingBehaviour: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationScalingRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigTemplateResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIDCImportCommandResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateK8sConfigMapResponseBody;
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
      body: CreateK8sConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleRequest extends $tea.Model {
  annotations?: string;
  clusterId?: string;
  ingressConf?: { [key: string]: any };
  labels?: string;
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      ingressConf: 'IngressConf',
      labels: 'Labels',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      clusterId: 'string',
      ingressConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateK8sIngressRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateK8sSecretResponseBody;
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
      body: CreateK8sSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sServiceRequest extends $tea.Model {
  appId?: string;
  externalTrafficPolicy?: string;
  name?: string;
  servicePorts?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      externalTrafficPolicy: 'ExternalTrafficPolicy',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      externalTrafficPolicy: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateK8sServiceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationScalingRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterMemberResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigTemplateResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeployGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEcuResponseBody;
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
      body: DeleteEcuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sApplicationRequest extends $tea.Model {
  appId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      force: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteK8sConfigMapResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteK8sIngressRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteK8sSecretResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteK8sServiceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLogPathResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRoleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceGroupResponseBody;
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
      body: DeleteServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneRequest extends $tea.Model {
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: number;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSwimmingLaneResponseBody;
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
      body: DeleteSwimmingLaneResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserDefineRegionResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployApplicationResponseBody;
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
      body: DeployApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployK8sApplicationRequest extends $tea.Model {
  annotations?: string;
  appId?: string;
  args?: string;
  batchTimeout?: number;
  batchWaitTime?: number;
  buildPackId?: string;
  canaryRuleId?: string;
  changeOrderDesc?: string;
  command?: string;
  configMountDescs?: string;
  cpuLimit?: number;
  cpuRequest?: number;
  customAffinity?: string;
  customAgentVersion?: string;
  customTolerations?: string;
  deployAcrossNodes?: string;
  deployAcrossZones?: string;
  edasContainerVersion?: string;
  emptyDirs?: string;
  enableAhas?: boolean;
  enableEmptyPushReject?: boolean;
  enableLosslessRule?: boolean;
  envFroms?: string;
  envs?: string;
  image?: string;
  imagePlatforms?: string;
  imageTag?: string;
  initContainers?: string;
  JDK?: string;
  javaStartUpConfig?: string;
  labels?: string;
  limitEphemeralStorage?: number;
  liveness?: string;
  localVolume?: string;
  losslessRuleAligned?: boolean;
  losslessRuleDelayTime?: number;
  losslessRuleFuncType?: number;
  losslessRuleRelated?: boolean;
  losslessRuleWarmupTime?: number;
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
  requestsEphemeralStorage?: number;
  runtimeClassName?: string;
  sidecars?: string;
  slsConfigs?: string;
  startup?: string;
  storageType?: string;
  terminateGracePeriod?: number;
  trafficControlStrategy?: string;
  updateStrategy?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  userBaseImageUrl?: string;
  volumesStr?: string;
  webContainer?: string;
  webContainerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appId: 'AppId',
      args: 'Args',
      batchTimeout: 'BatchTimeout',
      batchWaitTime: 'BatchWaitTime',
      buildPackId: 'BuildPackId',
      canaryRuleId: 'CanaryRuleId',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      configMountDescs: 'ConfigMountDescs',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      customAffinity: 'CustomAffinity',
      customAgentVersion: 'CustomAgentVersion',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      image: 'Image',
      imagePlatforms: 'ImagePlatforms',
      imageTag: 'ImageTag',
      initContainers: 'InitContainers',
      JDK: 'JDK',
      javaStartUpConfig: 'JavaStartUpConfig',
      labels: 'Labels',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
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
      requestsEphemeralStorage: 'RequestsEphemeralStorage',
      runtimeClassName: 'RuntimeClassName',
      sidecars: 'Sidecars',
      slsConfigs: 'SlsConfigs',
      startup: 'Startup',
      storageType: 'StorageType',
      terminateGracePeriod: 'TerminateGracePeriod',
      trafficControlStrategy: 'TrafficControlStrategy',
      updateStrategy: 'UpdateStrategy',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      userBaseImageUrl: 'UserBaseImageUrl',
      volumesStr: 'VolumesStr',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appId: 'string',
      args: 'string',
      batchTimeout: 'number',
      batchWaitTime: 'number',
      buildPackId: 'string',
      canaryRuleId: 'string',
      changeOrderDesc: 'string',
      command: 'string',
      configMountDescs: 'string',
      cpuLimit: 'number',
      cpuRequest: 'number',
      customAffinity: 'string',
      customAgentVersion: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envFroms: 'string',
      envs: 'string',
      image: 'string',
      imagePlatforms: 'string',
      imageTag: 'string',
      initContainers: 'string',
      JDK: 'string',
      javaStartUpConfig: 'string',
      labels: 'string',
      limitEphemeralStorage: 'number',
      liveness: 'string',
      localVolume: 'string',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
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
      requestsEphemeralStorage: 'number',
      runtimeClassName: 'string',
      sidecars: 'string',
      slsConfigs: 'string',
      startup: 'string',
      storageType: 'string',
      terminateGracePeriod: 'number',
      trafficControlStrategy: 'string',
      updateStrategy: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      userBaseImageUrl: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppInstanceListResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationScalingRulesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationScalingRuleResponseBody;
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
      body: DisableApplicationScalingRuleResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationScalingRuleResponseBody;
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
      body: EnableApplicationScalingRuleResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppDeploymentResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChangeOrderInfoResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContainerConfigurationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJavaStartUpConfigResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJvmConfigurationResponseBody;
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
      body: GetJvmConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultRequest extends $tea.Model {
  appName?: string;
  clusterId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetK8sAppPrecheckResultResponseBodyData;
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
      data: GetK8sAppPrecheckResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetK8sAppPrecheckResultResponseBody;
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
      body: GetK8sAppPrecheckResultResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetK8sApplicationResponseBody;
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
  subClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionTag: 'RegionTag',
      subClusterType: 'SubClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regionTag: 'string',
      subClusterType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetK8sClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetK8sServicesResponseBody;
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
      body: GetK8sServicesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPackageStorageCredentialResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScalingRulesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecureTokenResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceConsumersPageResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceDetailResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceListPageResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceMethodPageResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceProvidersPageResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWebContainerConfigResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportK8sClusterResponseBody;
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
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertClusterMemberResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertDeployGroupResponseBody;
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
      body: InsertDeployGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationRequest extends $tea.Model {
  annotations?: string;
  appConfig?: string;
  appName?: string;
  appTemplateName?: string;
  applicationDescription?: string;
  buildPackId?: string;
  clusterId?: string;
  command?: string;
  commandArgs?: string;
  configMountDescs?: string;
  containerRegistryId?: string;
  csClusterId?: string;
  customAffinity?: string;
  customAgentVersion?: string;
  customTolerations?: string;
  deployAcrossNodes?: string;
  deployAcrossZones?: string;
  edasContainerVersion?: string;
  emptyDirs?: string;
  enableAhas?: boolean;
  enableAsm?: boolean;
  enableEmptyPushReject?: boolean;
  enableLosslessRule?: boolean;
  envFroms?: string;
  envs?: string;
  featureConfig?: string;
  imagePlatforms?: string;
  imageUrl?: string;
  initContainers?: string;
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
  labels?: string;
  limitCpu?: number;
  limitEphemeralStorage?: number;
  limitMem?: number;
  limitmCpu?: number;
  liveness?: string;
  localVolume?: string;
  logicalRegionId?: string;
  losslessRuleAligned?: boolean;
  losslessRuleDelayTime?: number;
  losslessRuleFuncType?: number;
  losslessRuleRelated?: boolean;
  losslessRuleWarmupTime?: number;
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
  requestsEphemeralStorage?: number;
  requestsMem?: number;
  requestsmCpu?: number;
  resourceGroupId?: string;
  runtimeClassName?: string;
  secretName?: string;
  serviceConfigs?: string;
  sidecars?: string;
  slsConfigs?: string;
  startup?: string;
  storageType?: string;
  terminateGracePeriod?: number;
  timeout?: number;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  userBaseImageUrl?: string;
  webContainer?: string;
  webContainerConfig?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appConfig: 'AppConfig',
      appName: 'AppName',
      appTemplateName: 'AppTemplateName',
      applicationDescription: 'ApplicationDescription',
      buildPackId: 'BuildPackId',
      clusterId: 'ClusterId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMountDescs: 'ConfigMountDescs',
      containerRegistryId: 'ContainerRegistryId',
      csClusterId: 'CsClusterId',
      customAffinity: 'CustomAffinity',
      customAgentVersion: 'CustomAgentVersion',
      customTolerations: 'CustomTolerations',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirs: 'EmptyDirs',
      enableAhas: 'EnableAhas',
      enableAsm: 'EnableAsm',
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      featureConfig: 'FeatureConfig',
      imagePlatforms: 'ImagePlatforms',
      imageUrl: 'ImageUrl',
      initContainers: 'InitContainers',
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
      labels: 'Labels',
      limitCpu: 'LimitCpu',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      limitMem: 'LimitMem',
      limitmCpu: 'LimitmCpu',
      liveness: 'Liveness',
      localVolume: 'LocalVolume',
      logicalRegionId: 'LogicalRegionId',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
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
      requestsEphemeralStorage: 'RequestsEphemeralStorage',
      requestsMem: 'RequestsMem',
      requestsmCpu: 'RequestsmCpu',
      resourceGroupId: 'ResourceGroupId',
      runtimeClassName: 'RuntimeClassName',
      secretName: 'SecretName',
      serviceConfigs: 'ServiceConfigs',
      sidecars: 'Sidecars',
      slsConfigs: 'SlsConfigs',
      startup: 'Startup',
      storageType: 'StorageType',
      terminateGracePeriod: 'TerminateGracePeriod',
      timeout: 'Timeout',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      userBaseImageUrl: 'UserBaseImageUrl',
      webContainer: 'WebContainer',
      webContainerConfig: 'WebContainerConfig',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appConfig: 'string',
      appName: 'string',
      appTemplateName: 'string',
      applicationDescription: 'string',
      buildPackId: 'string',
      clusterId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMountDescs: 'string',
      containerRegistryId: 'string',
      csClusterId: 'string',
      customAffinity: 'string',
      customAgentVersion: 'string',
      customTolerations: 'string',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      edasContainerVersion: 'string',
      emptyDirs: 'string',
      enableAhas: 'boolean',
      enableAsm: 'boolean',
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envFroms: 'string',
      envs: 'string',
      featureConfig: 'string',
      imagePlatforms: 'string',
      imageUrl: 'string',
      initContainers: 'string',
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
      labels: 'string',
      limitCpu: 'number',
      limitEphemeralStorage: 'number',
      limitMem: 'number',
      limitmCpu: 'number',
      liveness: 'string',
      localVolume: 'string',
      logicalRegionId: 'string',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
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
      requestsEphemeralStorage: 'number',
      requestsMem: 'number',
      requestsmCpu: 'number',
      resourceGroupId: 'string',
      runtimeClassName: 'string',
      secretName: 'string',
      serviceConfigs: 'string',
      sidecars: 'string',
      slsConfigs: 'string',
      startup: 'string',
      storageType: 'string',
      terminateGracePeriod: 'number',
      timeout: 'number',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      userBaseImageUrl: 'string',
      webContainer: 'string',
      webContainerConfig: 'string',
      workloadType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertK8sApplicationResponseBody;
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
  mseInstanceId?: string;
  regionName?: string;
  regionTag?: string;
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      mseInstanceId: 'MseInstanceId',
      regionName: 'RegionName',
      regionTag: 'RegionTag',
      registryType: 'RegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      mseInstanceId: 'string',
      regionName: 'string',
      regionTag: 'string',
      registryType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertOrUpdateRegionResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertRoleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertServiceGroupResponseBody;
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
      body: InsertServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneRequest extends $tea.Model {
  appInfos?: string;
  enableRules?: boolean;
  entryRules?: string;
  groupId?: number;
  logicalRegionId?: string;
  name?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      enableRules: 'EnableRules',
      entryRules: 'EntryRules',
      groupId: 'GroupId',
      logicalRegionId: 'LogicalRegionId',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      enableRules: 'boolean',
      entryRules: 'string',
      groupId: 'number',
      logicalRegionId: 'string',
      name: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: InsertSwimmingLaneResponseBodyData;
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
      data: InsertSwimmingLaneResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertSwimmingLaneResponseBody;
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
      body: InsertSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupRequest extends $tea.Model {
  appIds?: string;
  entryApp?: string;
  logicalRegionId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryApp: 'EntryApp',
      logicalRegionId: 'LogicalRegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      entryApp: 'string',
      logicalRegionId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: InsertSwimmingLaneGroupResponseBodyData;
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
      data: InsertSwimmingLaneGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertSwimmingLaneGroupResponseBody;
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
      body: InsertSwimmingLaneGroupResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAgentResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliyunRegionResponseBody;
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
      body: ListAliyunRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationRequest extends $tea.Model {
  appIds?: string;
  appName?: string;
  clusterId?: string;
  currentPage?: number;
  logicalRegionId?: string;
  logicalRegionIdFilter?: string;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      appName: 'AppName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      logicalRegionId: 'LogicalRegionId',
      logicalRegionIdFilter: 'LogicalRegionIdFilter',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      appName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      logicalRegionId: 'string',
      logicalRegionIdFilter: 'string',
      pageSize: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationEcuResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthorityResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBuildPackResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterMembersResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListComponentsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigTemplatesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumedServicesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConvertableEcuResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeployGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEcsNotInClusterResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEcuByRegionResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHistoryDeployVersionResponseBody;
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
  result?: ListK8sConfigMapsResponseBodyResult;
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
      result: ListK8sConfigMapsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListK8sConfigMapsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListK8sIngressRulesResponseBody;
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
      body: ListK8sIngressRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sNamespacesRequest extends $tea.Model {
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

export class ListK8sNamespacesResponseBody extends $tea.Model {
  code?: number;
  data?: ListK8sNamespacesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListK8sNamespacesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListK8sNamespacesResponseBody;
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
      body: ListK8sNamespacesResponseBody,
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
  result?: ListK8sSecretsResponseBodyResult;
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
      result: ListK8sSecretsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListK8sSecretsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMethodsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedServicesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecentChangeOrderResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRoleResponseBody;
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
      body: ListRoleResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScaleOutEcuResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceGroupsResponseBody;
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
      body: ListServiceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbRequest extends $tea.Model {
  addressType?: string;
  slbType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      slbType: 'SlbType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      slbType: 'string',
      vpcId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubAccountResponseBody;
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
      body: ListSubAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneRequest extends $tea.Model {
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: ListSwimmingLaneResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSwimmingLaneResponseBody;
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
      body: ListSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupRequest extends $tea.Model {
  groupId?: number;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: ListSwimmingLaneGroupResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSwimmingLaneGroupResponseBody;
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
      body: ListSwimmingLaneGroupResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserDefineRegionResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateEcuResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScalingRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryApplicationStatusResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEccInfoResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMigrateEcuListResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMigrateRegionListResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRegionConfigResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySlsLogStoreListResponseBody;
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
      body: QuerySlsLogStoreListResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryChangeOrderTaskResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackChangeOrderResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleInApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleOutApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleoutApplicationWithNewInstancesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartApplicationResponseBody;
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
      body: StartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sAppPrecheckRequest extends $tea.Model {
  annotations?: string;
  appId?: string;
  appName?: string;
  clusterId?: string;
  componentIds?: string;
  configMountDescs?: string;
  emptyDirs?: string;
  envFroms?: string;
  envs?: string;
  imageUrl?: string;
  javaStartUpConfig?: string;
  labels?: string;
  limitEphemeralStorage?: number;
  limitMem?: number;
  limitmCpu?: number;
  localVolume?: string;
  namespace?: string;
  packageUrl?: string;
  pvcMountDescs?: string;
  regionId?: string;
  replicas?: number;
  requestsEphemeralStorage?: number;
  requestsMem?: number;
  requestsmCpu?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appId: 'AppId',
      appName: 'AppName',
      clusterId: 'ClusterId',
      componentIds: 'ComponentIds',
      configMountDescs: 'ConfigMountDescs',
      emptyDirs: 'EmptyDirs',
      envFroms: 'EnvFroms',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      javaStartUpConfig: 'JavaStartUpConfig',
      labels: 'Labels',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      limitMem: 'LimitMem',
      limitmCpu: 'LimitmCpu',
      localVolume: 'LocalVolume',
      namespace: 'Namespace',
      packageUrl: 'PackageUrl',
      pvcMountDescs: 'PvcMountDescs',
      regionId: 'RegionId',
      replicas: 'Replicas',
      requestsEphemeralStorage: 'RequestsEphemeralStorage',
      requestsMem: 'RequestsMem',
      requestsmCpu: 'RequestsmCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appId: 'string',
      appName: 'string',
      clusterId: 'string',
      componentIds: 'string',
      configMountDescs: 'string',
      emptyDirs: 'string',
      envFroms: 'string',
      envs: 'string',
      imageUrl: 'string',
      javaStartUpConfig: 'string',
      labels: 'string',
      limitEphemeralStorage: 'number',
      limitMem: 'number',
      limitmCpu: 'number',
      localVolume: 'string',
      namespace: 'string',
      packageUrl: 'string',
      pvcMountDescs: 'string',
      regionId: 'string',
      replicas: 'number',
      requestsEphemeralStorage: 'number',
      requestsMem: 'number',
      requestsmCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sAppPrecheckResponseBody extends $tea.Model {
  code?: number;
  data?: StartK8sAppPrecheckResponseBodyData;
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
      data: StartK8sAppPrecheckResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sAppPrecheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartK8sAppPrecheckResponseBody;
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
      body: StartK8sAppPrecheckResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopK8sApplicationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchAdvancedMonitoringResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SynchronizeResourceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformClusterMemberResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindK8sSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindSlbResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccountInfoResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationBaseInfoResponseBody;
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
      body: UpdateApplicationBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingBehaviour?: string;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleTrigger?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingBehaviour: 'ScalingBehaviour',
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
      scalingBehaviour: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationScalingRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigTemplateResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContainerResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContainerConfigurationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHealthCheckUrlResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHookConfigurationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateJvmConfigurationResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sApplicationBaseInfoResponseBody;
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
  ephemeralStorageLimit?: string;
  ephemeralStorageRequest?: string;
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
      ephemeralStorageLimit: 'EphemeralStorageLimit',
      ephemeralStorageRequest: 'EphemeralStorageRequest',
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
      ephemeralStorageLimit: 'string',
      ephemeralStorageRequest: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sApplicationConfigResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sConfigMapResponseBody;
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
      body: UpdateK8sConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleRequest extends $tea.Model {
  annotations?: string;
  clusterId?: string;
  ingressConf?: { [key: string]: any };
  labels?: string;
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      ingressConf: 'IngressConf',
      labels: 'Labels',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      clusterId: 'string',
      ingressConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sIngressRuleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sResourceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sSecretResponseBody;
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
      body: UpdateK8sSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sServiceRequest extends $tea.Model {
  appId?: string;
  externalTrafficPolicy?: string;
  name?: string;
  servicePorts?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      externalTrafficPolicy: 'ExternalTrafficPolicy',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      externalTrafficPolicy: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sServiceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateK8sSlbResponseBody;
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
      body: UpdateK8sSlbResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSlsLogStoreResponseBody;
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
      body: UpdateSlsLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneRequest extends $tea.Model {
  appInfos?: string;
  enableRules?: boolean;
  entryRules?: string;
  laneId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      enableRules: 'EnableRules',
      entryRules: 'EntryRules',
      laneId: 'LaneId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      enableRules: 'boolean',
      entryRules: 'string',
      laneId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: UpdateSwimmingLaneResponseBodyData;
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
      data: UpdateSwimmingLaneResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSwimmingLaneResponseBody;
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
      body: UpdateSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupRequest extends $tea.Model {
  appIds?: string;
  entryApp?: string;
  groupId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryApp: 'EntryApp',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      entryApp: 'string',
      groupId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: UpdateSwimmingLaneGroupResponseBodyData;
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
      data: UpdateSwimmingLaneGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSwimmingLaneGroupResponseBody;
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
      body: UpdateSwimmingLaneGroupResponseBody,
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown extends $tea.Model {
  policies?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp extends $tea.Model {
  policies?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour extends $tea.Model {
  scaleDown?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown;
  scaleUp?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown,
      scaleUp: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp,
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
  behaviour?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour;
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
      behaviour: 'Behaviour',
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
      behaviour: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour,
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown extends $tea.Model {
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp extends $tea.Model {
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour extends $tea.Model {
  scaleDown?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown;
  scaleUp?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown,
      scaleUp: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp,
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
  behaviour?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour;
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
      behaviour: 'Behaviour',
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
      behaviour: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour,
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

export class GetApplicationResponseBodyApplication extends $tea.Model {
  appId?: string;
  appPhase?: string;
  applicationType?: string;
  buildPackageId?: number;
  clusterId?: string;
  clusterType?: string;
  cpu?: number;
  createTime?: number;
  description?: string;
  dockerize?: boolean;
  email?: string;
  enablePortCheck?: boolean;
  enableUrlCheck?: boolean;
  extSlbId?: string;
  extSlbIp?: string;
  extSlbName?: string;
  haveManageAccess?: string;
  healthCheckUrl?: string;
  instanceCount?: number;
  memory?: number;
  name?: string;
  nameSpace?: string;
  owner?: string;
  port?: number;
  regionId?: string;
  resourceGroupId?: string;
  runningInstanceCount?: number;
  slbId?: string;
  slbInfo?: string;
  slbIp?: string;
  slbName?: string;
  slbPort?: number;
  userId?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appPhase: 'AppPhase',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      description: 'Description',
      dockerize: 'Dockerize',
      email: 'Email',
      enablePortCheck: 'EnablePortCheck',
      enableUrlCheck: 'EnableUrlCheck',
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      haveManageAccess: 'HaveManageAccess',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      name: 'Name',
      nameSpace: 'NameSpace',
      owner: 'Owner',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningInstanceCount: 'RunningInstanceCount',
      slbId: 'SlbId',
      slbInfo: 'SlbInfo',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      userId: 'UserId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appPhase: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'string',
      cpu: 'number',
      createTime: 'number',
      description: 'string',
      dockerize: 'boolean',
      email: 'string',
      enablePortCheck: 'boolean',
      enableUrlCheck: 'boolean',
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      haveManageAccess: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      memory: 'number',
      name: 'string',
      nameSpace: 'string',
      owner: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      runningInstanceCount: 'number',
      slbId: 'string',
      slbInfo: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      userId: 'string',
      workloadType: 'string',
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
  subClusterType?: string;
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
      subClusterType: 'SubClusterType',
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
      subClusterType: 'string',
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

export class GetK8sAppPrecheckResultResponseBodyDataJobResults extends $tea.Model {
  interrupted?: boolean;
  name?: string;
  pass?: boolean;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      interrupted: 'Interrupted',
      name: 'Name',
      pass: 'Pass',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interrupted: 'boolean',
      name: 'string',
      pass: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultResponseBodyData extends $tea.Model {
  jobResults?: GetK8sAppPrecheckResultResponseBodyDataJobResults[];
  reason?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobResults: 'JobResults',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResults: { 'type': 'array', 'itemType': GetK8sAppPrecheckResultResponseBodyDataJobResults },
      reason: 'string',
      status: 'string',
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
  annotations?: string;
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
  enableEmptyPushReject?: boolean;
  enableLosslessRule?: boolean;
  envList?: GetK8sApplicationResponseBodyApplcationAppEnvList;
  featureAnnotations?: string;
  instances?: number;
  instancesBeforeScaling?: number;
  k8sNamespace?: string;
  labels?: string;
  limitCpuM?: number;
  limitEphemeralStorage?: string;
  limitMem?: number;
  losslessRuleAligned?: boolean;
  losslessRuleDelayTime?: number;
  losslessRuleFuncType?: number;
  losslessRuleRelated?: boolean;
  losslessRuleWarmupTime?: number;
  regionId?: string;
  requestCpuM?: number;
  requestEphemeralStorage?: string;
  requestMem?: number;
  slbInfo?: string;
  tomcatVersion?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
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
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envList: 'EnvList',
      featureAnnotations: 'FeatureAnnotations',
      instances: 'Instances',
      instancesBeforeScaling: 'InstancesBeforeScaling',
      k8sNamespace: 'K8sNamespace',
      labels: 'Labels',
      limitCpuM: 'LimitCpuM',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      limitMem: 'LimitMem',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
      regionId: 'RegionId',
      requestCpuM: 'RequestCpuM',
      requestEphemeralStorage: 'RequestEphemeralStorage',
      requestMem: 'RequestMem',
      slbInfo: 'SlbInfo',
      tomcatVersion: 'TomcatVersion',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
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
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envList: GetK8sApplicationResponseBodyApplcationAppEnvList,
      featureAnnotations: 'string',
      instances: 'number',
      instancesBeforeScaling: 'number',
      k8sNamespace: 'string',
      labels: 'string',
      limitCpuM: 'number',
      limitEphemeralStorage: 'string',
      limitMem: 'number',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
      regionId: 'string',
      requestCpuM: 'number',
      requestEphemeralStorage: 'string',
      requestMem: 'number',
      slbInfo: 'string',
      tomcatVersion: 'string',
      workloadType: 'string',
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
  userBaseImageUrl?: string;
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
      userBaseImageUrl: 'UserBaseImageUrl',
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
      userBaseImageUrl: 'string',
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
  env?: string;
  envFrom?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      env: 'Env',
      envFrom: 'EnvFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents,
      env: 'string',
      envFrom: 'string',
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
  subClusterType?: string;
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
      subClusterType: 'SubClusterType',
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
      subClusterType: 'string',
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

export class GetPackageStorageCredentialResponseBodyCredential extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucket?: string;
  expiration?: string;
  keyPrefix?: string;
  ossInternalEndpoint?: string;
  ossPublicEndpoint?: string;
  ossVpcEndpoint?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      expiration: 'Expiration',
      keyPrefix: 'KeyPrefix',
      ossInternalEndpoint: 'OssInternalEndpoint',
      ossPublicEndpoint: 'OssPublicEndpoint',
      ossVpcEndpoint: 'OssVpcEndpoint',
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
      ossInternalEndpoint: 'string',
      ossPublicEndpoint: 'string',
      ossVpcEndpoint: 'string',
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
  mseInstanceId?: string;
  mseInternetAddress?: string;
  mseIntranetAddress?: string;
  mseRegistryType?: string;
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
      mseInstanceId: 'MseInstanceId',
      mseInternetAddress: 'MseInternetAddress',
      mseIntranetAddress: 'MseIntranetAddress',
      mseRegistryType: 'MseRegistryType',
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
      mseInstanceId: 'string',
      mseInternetAddress: 'string',
      mseIntranetAddress: 'string',
      mseRegistryType: 'string',
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
  iannotations?: string;
  ip?: string;
  port?: string;
  serializeType?: string;
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      iannotations: 'Iannotations',
      ip: 'Ip',
      port: 'Port',
      serializeType: 'SerializeType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iannotations: 'string',
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

export class InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appId?: string;
  appName?: string;
  laneId?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      laneId: 'LaneId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      laneId: 'number',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponseBodyData extends $tea.Model {
  appInfos?: string;
  entryRule?: string;
  groupId?: number;
  id?: number;
  name?: string;
  namespaceId?: string;
  swimmingLaneAppRelationShipList?: InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      entryRule: 'EntryRule',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication extends $tea.Model {
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

export class InsertSwimmingLaneGroupResponseBodyDataApplicationList extends $tea.Model {
  application?: InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBodyDataEntryApplication extends $tea.Model {
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

export class InsertSwimmingLaneGroupResponseBodyData extends $tea.Model {
  applicationList?: InsertSwimmingLaneGroupResponseBodyDataApplicationList;
  entryApplication?: InsertSwimmingLaneGroupResponseBodyDataEntryApplication;
  id?: number;
  name?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: InsertSwimmingLaneGroupResponseBodyDataApplicationList,
      entryApplication: InsertSwimmingLaneGroupResponseBodyDataEntryApplication,
      id: 'number',
      name: 'string',
      namespaceId: 'string',
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
  createTime?: number;
  extSlbIp?: string;
  extSlbListenerPort?: number;
  instances?: number;
  k8sNamespace?: string;
  name?: string;
  namespaceId?: string;
  port?: number;
  regionId?: string;
  resourceGroupId?: string;
  runningInstanceCount?: number;
  slbIp?: string;
  slbListenerPort?: number;
  slbPort?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      applicationType: 'ApplicationType',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      extSlbIp: 'ExtSlbIp',
      extSlbListenerPort: 'ExtSlbListenerPort',
      instances: 'Instances',
      k8sNamespace: 'K8sNamespace',
      name: 'Name',
      namespaceId: 'NamespaceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningInstanceCount: 'RunningInstanceCount',
      slbIp: 'SlbIp',
      slbListenerPort: 'SlbListenerPort',
      slbPort: 'SlbPort',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      applicationType: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      clusterType: 'number',
      createTime: 'number',
      extSlbIp: 'string',
      extSlbListenerPort: 'number',
      instances: 'number',
      k8sNamespace: 'string',
      name: 'string',
      namespaceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      runningInstanceCount: 'number',
      slbIp: 'string',
      slbListenerPort: 'number',
      slbPort: 'number',
      state: 'string',
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
  privateIp?: string;
  status?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterMemberId: 'ClusterMemberId',
      createTime: 'CreateTime',
      ecsId: 'EcsId',
      ecuId: 'EcuId',
      privateIp: 'PrivateIp',
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
      privateIp: 'string',
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
  ephemeralStorageLimit?: string;
  ephemeralStorageRequest?: string;
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
      ephemeralStorageLimit: 'EphemeralStorageLimit',
      ephemeralStorageRequest: 'EphemeralStorageRequest',
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
      ephemeralStorageLimit: 'string',
      ephemeralStorageRequest: 'string',
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
  collectRate?: number;
  path?: string;
  pathType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backend: 'Backend',
      collectRate: 'CollectRate',
      path: 'Path',
      pathType: 'PathType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backend: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend,
      collectRate: 'number',
      path: 'string',
      pathType: 'string',
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
  annotations?: string;
  creationTime?: string;
  dashboardUrl?: string;
  endpoint?: string;
  ingressType?: string;
  labels?: string;
  mseGatewayId?: string;
  mseGatewayName?: string;
  name?: string;
  namespace?: string;
  officalBasicUrl?: string;
  officalRequestUrl?: string;
  rules?: ListK8sIngressRulesResponseBodyDataIngressConfsRules[];
  sslRedirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      albId: 'AlbId',
      annotations: 'Annotations',
      creationTime: 'CreationTime',
      dashboardUrl: 'DashboardUrl',
      endpoint: 'Endpoint',
      ingressType: 'IngressType',
      labels: 'Labels',
      mseGatewayId: 'MseGatewayId',
      mseGatewayName: 'MseGatewayName',
      name: 'Name',
      namespace: 'Namespace',
      officalBasicUrl: 'OfficalBasicUrl',
      officalRequestUrl: 'OfficalRequestUrl',
      rules: 'Rules',
      sslRedirect: 'SslRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albId: 'string',
      annotations: 'string',
      creationTime: 'string',
      dashboardUrl: 'string',
      endpoint: 'string',
      ingressType: 'string',
      labels: 'string',
      mseGatewayId: 'string',
      mseGatewayName: 'string',
      name: 'string',
      namespace: 'string',
      officalBasicUrl: 'string',
      officalRequestUrl: 'string',
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

export class ListK8sNamespacesResponseBodyData extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
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
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      issuer: 'Issuer',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      issuer: 'string',
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
  reusable?: boolean;
  slbId?: string;
  slbName?: string;
  slbStatus?: string;
  tags?: string;
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
      reusable: 'Reusable',
      slbId: 'SlbId',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
      tags: 'Tags',
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
      reusable: 'boolean',
      slbId: 'string',
      slbName: 'string',
      slbStatus: 'string',
      tags: 'string',
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

export class ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appId?: string;
  appName?: string;
  extra?: string;
  laneId?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      extra: 'Extra',
      laneId: 'LaneId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      extra: 'string',
      laneId: 'number',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponseBodyData extends $tea.Model {
  enableRules?: boolean;
  entryRule?: string;
  groupId?: number;
  id?: number;
  name?: string;
  namespaceId?: string;
  scenarioSign?: string;
  swimmingLaneAppRelationShipList?: ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      scenarioSign: 'ScenarioSign',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRules: 'boolean',
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      scenarioSign: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyDataApplicationList extends $tea.Model {
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

export class ListSwimmingLaneGroupResponseBodyDataEntryApplication extends $tea.Model {
  appId?: string;
  appName?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyData extends $tea.Model {
  applicationList?: ListSwimmingLaneGroupResponseBodyDataApplicationList[];
  entryApplication?: ListSwimmingLaneGroupResponseBodyDataEntryApplication;
  id?: number;
  name?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: ListSwimmingLaneGroupResponseBodyDataEntryApplication,
      id: 'number',
      name: 'string',
      namespaceId: 'string',
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
  mseInstanceId?: string;
  regionId?: string;
  regionName?: string;
  registryType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      mseInstanceId: 'MseInstanceId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      registryType: 'RegistryType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      mseInstanceId: 'string',
      regionId: 'string',
      regionName: 'string',
      registryType: 'string',
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

export class StartK8sAppPrecheckResponseBodyData extends $tea.Model {
  jobs?: string[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown extends $tea.Model {
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies extends $tea.Model {
  periodSeconds?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp extends $tea.Model {
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour extends $tea.Model {
  scaleDown?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown;
  scaleUp?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown,
      scaleUp: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp,
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
  behaviour?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour;
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
      behaviour: 'Behaviour',
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
      behaviour: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour,
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

export class UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appId?: string;
  appName?: string;
  laneId?: number;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      laneId: 'LaneId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      laneId: 'number',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponseBodyData extends $tea.Model {
  entryRule?: string;
  groupId?: number;
  id?: number;
  name?: string;
  namespaceId?: string;
  swimmingLaneAppRelationShipList?: UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      entryRule: 'EntryRule',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyDataApplicationList extends $tea.Model {
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

export class UpdateSwimmingLaneGroupResponseBodyDataEntryApplication extends $tea.Model {
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

export class UpdateSwimmingLaneGroupResponseBodyData extends $tea.Model {
  applicationList?: UpdateSwimmingLaneGroupResponseBodyDataApplicationList[];
  entryApplication?: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication;
  id?: number;
  name?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: { 'type': 'array', 'itemType': UpdateSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication,
      id: 'number',
      name: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
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

  async abortAndRollbackChangeOrder(request: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortAndRollbackChangeOrderWithOptions(request, headers, runtime);
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

  async abortChangeOrder(request: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeOrderWithOptions(request, headers, runtime);
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

  async addLogPath(request: AddLogPathRequest): Promise<AddLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addLogPathWithOptions(request, headers, runtime);
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

  async authorizeApplication(request: AuthorizeApplicationRequest): Promise<AuthorizeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeApplicationWithOptions(request, headers, runtime);
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

  async authorizeResourceGroup(request: AuthorizeResourceGroupRequest): Promise<AuthorizeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeResourceGroupWithOptions(request, headers, runtime);
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

  async authorizeRole(request: AuthorizeRoleRequest): Promise<AuthorizeRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeRoleWithOptions(request, headers, runtime);
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

  async bindEcsSlb(request: BindEcsSlbRequest): Promise<BindEcsSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEcsSlbWithOptions(request, headers, runtime);
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

  async bindK8sSlb(request: BindK8sSlbRequest): Promise<BindK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindK8sSlbWithOptions(request, headers, runtime);
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

  async bindSlb(request: BindSlbRequest): Promise<BindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
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

  async changeDeployGroup(request: ChangeDeployGroupRequest): Promise<ChangeDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeDeployGroupWithOptions(request, headers, runtime);
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

  async continuePipeline(request: ContinuePipelineRequest): Promise<ContinuePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.continuePipelineWithOptions(request, headers, runtime);
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

  async convertK8sResource(request: ConvertK8sResourceRequest): Promise<ConvertK8sResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertK8sResourceWithOptions(request, headers, runtime);
  }

  async createApplicationScalingRuleWithOptions(request: CreateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingBehaviour)) {
      query["ScalingBehaviour"] = request.scalingBehaviour;
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

  async createApplicationScalingRule(request: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationScalingRuleWithOptions(request, headers, runtime);
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

  async createConfigTemplate(request: CreateConfigTemplateRequest): Promise<CreateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigTemplateWithOptions(request, headers, runtime);
  }

  /**
    * ## Description
    * You must call the CreateIDCImportCommand operation first to generate a command used to import hybrid cloud ECS instances to a hybrid cloud ECS cluster. Then, run this command on the instances to import the instances to the cluster.
    *
    * @param request CreateIDCImportCommandRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateIDCImportCommandResponse
   */
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

  /**
    * ## Description
    * You must call the CreateIDCImportCommand operation first to generate a command used to import hybrid cloud ECS instances to a hybrid cloud ECS cluster. Then, run this command on the instances to import the instances to the cluster.
    *
    * @param request CreateIDCImportCommandRequest
    * @return CreateIDCImportCommandResponse
   */
  async createIDCImportCommand(request: CreateIDCImportCommandRequest): Promise<CreateIDCImportCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIDCImportCommandWithOptions(request, headers, runtime);
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

  async createK8sConfigMap(request: CreateK8sConfigMapRequest): Promise<CreateK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sConfigMapWithOptions(request, headers, runtime);
  }

  async createK8sIngressRuleWithOptions(request: CreateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sIngressRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
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

  async createK8sIngressRule(request: CreateK8sIngressRuleRequest): Promise<CreateK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sIngressRuleWithOptions(request, headers, runtime);
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

  async createK8sSecret(request: CreateK8sSecretRequest): Promise<CreateK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sSecretWithOptions(request, headers, runtime);
  }

  async createK8sServiceWithOptions(request: CreateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateK8sServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.externalTrafficPolicy)) {
      query["ExternalTrafficPolicy"] = request.externalTrafficPolicy;
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

  async createK8sService(request: CreateK8sServiceRequest): Promise<CreateK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sServiceWithOptions(request, headers, runtime);
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

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
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

  async deleteApplicationScalingRule(request: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationScalingRuleWithOptions(request, headers, runtime);
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

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(request, headers, runtime);
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

  async deleteClusterMember(request: DeleteClusterMemberRequest): Promise<DeleteClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterMemberWithOptions(request, headers, runtime);
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

  async deleteConfigTemplate(request: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigTemplateWithOptions(request, headers, runtime);
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

  async deleteDeployGroup(request: DeleteDeployGroupRequest): Promise<DeleteDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeployGroupWithOptions(request, headers, runtime);
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

  async deleteEcu(request: DeleteEcuRequest): Promise<DeleteEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEcuWithOptions(request, headers, runtime);
  }

  async deleteK8sApplicationWithOptions(request: DeleteK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
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

  async deleteK8sApplication(request: DeleteK8sApplicationRequest): Promise<DeleteK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sApplicationWithOptions(request, headers, runtime);
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

  async deleteK8sConfigMap(request: DeleteK8sConfigMapRequest): Promise<DeleteK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sConfigMapWithOptions(request, headers, runtime);
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

  async deleteK8sIngressRule(request: DeleteK8sIngressRuleRequest): Promise<DeleteK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sIngressRuleWithOptions(request, headers, runtime);
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

  async deleteK8sSecret(request: DeleteK8sSecretRequest): Promise<DeleteK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sSecretWithOptions(request, headers, runtime);
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

  async deleteK8sService(request: DeleteK8sServiceRequest): Promise<DeleteK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sServiceWithOptions(request, headers, runtime);
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

  async deleteLogPath(request: DeleteLogPathRequest): Promise<DeleteLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogPathWithOptions(request, headers, runtime);
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

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(request, headers, runtime);
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

  async deleteServiceGroup(request: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupWithOptions(request, headers, runtime);
  }

  async deleteSwimmingLaneWithOptions(request: DeleteSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSwimmingLaneResponse>(await this.callApi(params, req, runtime), new DeleteSwimmingLaneResponse({}));
  }

  async deleteSwimmingLane(request: DeleteSwimmingLaneRequest): Promise<DeleteSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSwimmingLaneWithOptions(request, headers, runtime);
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

  async deleteUserDefineRegion(request: DeleteUserDefineRegionRequest): Promise<DeleteUserDefineRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserDefineRegionWithOptions(request, headers, runtime);
  }

  /**
    * > To deploy an application in a Container Service for Kubernetes (ACK) cluster that is imported into Enterprise Distributed Application Service (EDAS), call the DeployK8sApplication operation provided by EDAS. For more information, see [](~~149420~~)DeployK8sApplication.
    *
    * @param request DeployApplicationRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeployApplicationResponse
   */
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

  /**
    * > To deploy an application in a Container Service for Kubernetes (ACK) cluster that is imported into Enterprise Distributed Application Service (EDAS), call the DeployK8sApplication operation provided by EDAS. For more information, see [](~~149420~~)DeployK8sApplication.
    *
    * @param request DeployApplicationRequest
    * @return DeployApplicationResponse
   */
  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  async deployK8sApplicationWithOptions(request: DeployK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

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

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.canaryRuleId)) {
      query["CanaryRuleId"] = request.canaryRuleId;
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

    if (!Util.isUnset(request.customAgentVersion)) {
      query["CustomAgentVersion"] = request.customAgentVersion;
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

    if (!Util.isUnset(request.enableEmptyPushReject)) {
      query["EnableEmptyPushReject"] = request.enableEmptyPushReject;
    }

    if (!Util.isUnset(request.enableLosslessRule)) {
      query["EnableLosslessRule"] = request.enableLosslessRule;
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

    if (!Util.isUnset(request.imagePlatforms)) {
      query["ImagePlatforms"] = request.imagePlatforms;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!Util.isUnset(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.losslessRuleAligned)) {
      query["LosslessRuleAligned"] = request.losslessRuleAligned;
    }

    if (!Util.isUnset(request.losslessRuleDelayTime)) {
      query["LosslessRuleDelayTime"] = request.losslessRuleDelayTime;
    }

    if (!Util.isUnset(request.losslessRuleFuncType)) {
      query["LosslessRuleFuncType"] = request.losslessRuleFuncType;
    }

    if (!Util.isUnset(request.losslessRuleRelated)) {
      query["LosslessRuleRelated"] = request.losslessRuleRelated;
    }

    if (!Util.isUnset(request.losslessRuleWarmupTime)) {
      query["LosslessRuleWarmupTime"] = request.losslessRuleWarmupTime;
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

    if (!Util.isUnset(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.sidecars)) {
      query["Sidecars"] = request.sidecars;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.startup)) {
      query["Startup"] = request.startup;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.terminateGracePeriod)) {
      query["TerminateGracePeriod"] = request.terminateGracePeriod;
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

    if (!Util.isUnset(request.userBaseImageUrl)) {
      query["UserBaseImageUrl"] = request.userBaseImageUrl;
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

  async deployK8sApplication(request: DeployK8sApplicationRequest): Promise<DeployK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployK8sApplicationWithOptions(request, headers, runtime);
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

  async describeAppInstanceList(request: DescribeAppInstanceListRequest): Promise<DescribeAppInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppInstanceListWithOptions(request, headers, runtime);
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

  async describeApplicationScalingRules(request: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRulesWithOptions(request, headers, runtime);
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

  async disableApplicationScalingRule(request: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
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

  async enableApplicationScalingRule(request: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApplicationScalingRuleWithOptions(request, headers, runtime);
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

  async getAppDeployment(request: GetAppDeploymentRequest): Promise<GetAppDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppDeploymentWithOptions(request, headers, runtime);
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

  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(request, headers, runtime);
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

  async getChangeOrderInfo(request: GetChangeOrderInfoRequest): Promise<GetChangeOrderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChangeOrderInfoWithOptions(request, headers, runtime);
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

  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(request, headers, runtime);
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

  async getContainerConfiguration(request: GetContainerConfigurationRequest): Promise<GetContainerConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContainerConfigurationWithOptions(request, headers, runtime);
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

  async getJavaStartUpConfig(request: GetJavaStartUpConfigRequest): Promise<GetJavaStartUpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJavaStartUpConfigWithOptions(request, headers, runtime);
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

  async getJvmConfiguration(request: GetJvmConfigurationRequest): Promise<GetJvmConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJvmConfigurationWithOptions(request, headers, runtime);
  }

  async getK8sAppPrecheckResultWithOptions(request: GetK8sAppPrecheckResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetK8sAppPrecheckResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetK8sAppPrecheckResult",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/app_precheck`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetK8sAppPrecheckResultResponse>(await this.callApi(params, req, runtime), new GetK8sAppPrecheckResultResponse({}));
  }

  async getK8sAppPrecheckResult(request: GetK8sAppPrecheckResultRequest): Promise<GetK8sAppPrecheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sAppPrecheckResultWithOptions(request, headers, runtime);
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

  async getK8sApplication(request: GetK8sApplicationRequest): Promise<GetK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sApplicationWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.subClusterType)) {
      query["SubClusterType"] = request.subClusterType;
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

  async getK8sCluster(request: GetK8sClusterRequest): Promise<GetK8sClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sClusterWithOptions(request, headers, runtime);
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

  async getK8sServices(request: GetK8sServicesRequest): Promise<GetK8sServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sServicesWithOptions(request, headers, runtime);
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

  async getPackageStorageCredential(): Promise<GetPackageStorageCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageStorageCredentialWithOptions(headers, runtime);
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

  async getScalingRules(request: GetScalingRulesRequest): Promise<GetScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScalingRulesWithOptions(request, headers, runtime);
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

  async getSecureToken(request: GetSecureTokenRequest): Promise<GetSecureTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecureTokenWithOptions(request, headers, runtime);
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

  async getServiceConsumersPage(request: GetServiceConsumersPageRequest): Promise<GetServiceConsumersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceConsumersPageWithOptions(request, headers, runtime);
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

  async getServiceDetail(request: GetServiceDetailRequest): Promise<GetServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDetailWithOptions(request, headers, runtime);
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

  async getServiceListPage(request: GetServiceListPageRequest): Promise<GetServiceListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceListPageWithOptions(request, headers, runtime);
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

  async getServiceMethodPage(request: GetServiceMethodPageRequest): Promise<GetServiceMethodPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceMethodPageWithOptions(request, headers, runtime);
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

  async getServiceProvidersPage(request: GetServiceProvidersPageRequest): Promise<GetServiceProvidersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceProvidersPageWithOptions(request, headers, runtime);
  }

  /**
    * ***
    *
    * @param request GetWebContainerConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetWebContainerConfigResponse
   */
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

  /**
    * ***
    *
    * @param request GetWebContainerConfigRequest
    * @return GetWebContainerConfigResponse
   */
  async getWebContainerConfig(request: GetWebContainerConfigRequest): Promise<GetWebContainerConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebContainerConfigWithOptions(request, headers, runtime);
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

  async importK8sCluster(request: ImportK8sClusterRequest): Promise<ImportK8sClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importK8sClusterWithOptions(request, headers, runtime);
  }

  /**
    * > To create an application in a Kubernetes cluster, call the InsertK8sApplication operation provided by Enterprise Distributed Application Service (EDAS).
    *
    * @param request InsertApplicationRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return InsertApplicationResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

  /**
    * > To create an application in a Kubernetes cluster, call the InsertK8sApplication operation provided by Enterprise Distributed Application Service (EDAS).
    *
    * @param request InsertApplicationRequest
    * @return InsertApplicationResponse
   */
  async insertApplication(request: InsertApplicationRequest): Promise<InsertApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertApplicationWithOptions(request, headers, runtime);
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

  async insertCluster(request: InsertClusterRequest): Promise<InsertClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterWithOptions(request, headers, runtime);
  }

  /**
    * ##
    * If you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all original data of the ECS instance is deleted. In addition, you must set a logon password for the ECS instance. Make sure that no important data exists on the ECS instance that you want to import or data has been backed up for the ECS instance.
    * > We recommend that you call the InstallAgent operation instead of this operation. For more information, see [InstallAgent](~~127023~~).
    *
    * @param request InsertClusterMemberRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return InsertClusterMemberResponse
   */
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

  /**
    * ##
    * If you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all original data of the ECS instance is deleted. In addition, you must set a logon password for the ECS instance. Make sure that no important data exists on the ECS instance that you want to import or data has been backed up for the ECS instance.
    * > We recommend that you call the InstallAgent operation instead of this operation. For more information, see [InstallAgent](~~127023~~).
    *
    * @param request InsertClusterMemberRequest
    * @return InsertClusterMemberResponse
   */
  async insertClusterMember(request: InsertClusterMemberRequest): Promise<InsertClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterMemberWithOptions(request, headers, runtime);
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

  async insertDeployGroup(request: InsertDeployGroupRequest): Promise<InsertDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertDeployGroupWithOptions(request, headers, runtime);
  }

  async insertK8sApplicationWithOptions(request: InsertK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.appConfig)) {
      query["AppConfig"] = request.appConfig;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appTemplateName)) {
      query["AppTemplateName"] = request.appTemplateName;
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

    if (!Util.isUnset(request.containerRegistryId)) {
      query["ContainerRegistryId"] = request.containerRegistryId;
    }

    if (!Util.isUnset(request.csClusterId)) {
      query["CsClusterId"] = request.csClusterId;
    }

    if (!Util.isUnset(request.customAffinity)) {
      query["CustomAffinity"] = request.customAffinity;
    }

    if (!Util.isUnset(request.customAgentVersion)) {
      query["CustomAgentVersion"] = request.customAgentVersion;
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

    if (!Util.isUnset(request.enableEmptyPushReject)) {
      query["EnableEmptyPushReject"] = request.enableEmptyPushReject;
    }

    if (!Util.isUnset(request.enableLosslessRule)) {
      query["EnableLosslessRule"] = request.enableLosslessRule;
    }

    if (!Util.isUnset(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.featureConfig)) {
      query["FeatureConfig"] = request.featureConfig;
    }

    if (!Util.isUnset(request.imagePlatforms)) {
      query["ImagePlatforms"] = request.imagePlatforms;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
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

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.limitCpu)) {
      query["LimitCpu"] = request.limitCpu;
    }

    if (!Util.isUnset(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
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

    if (!Util.isUnset(request.losslessRuleAligned)) {
      query["LosslessRuleAligned"] = request.losslessRuleAligned;
    }

    if (!Util.isUnset(request.losslessRuleDelayTime)) {
      query["LosslessRuleDelayTime"] = request.losslessRuleDelayTime;
    }

    if (!Util.isUnset(request.losslessRuleFuncType)) {
      query["LosslessRuleFuncType"] = request.losslessRuleFuncType;
    }

    if (!Util.isUnset(request.losslessRuleRelated)) {
      query["LosslessRuleRelated"] = request.losslessRuleRelated;
    }

    if (!Util.isUnset(request.losslessRuleWarmupTime)) {
      query["LosslessRuleWarmupTime"] = request.losslessRuleWarmupTime;
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

    if (!Util.isUnset(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!Util.isUnset(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!Util.isUnset(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.serviceConfigs)) {
      query["ServiceConfigs"] = request.serviceConfigs;
    }

    if (!Util.isUnset(request.sidecars)) {
      query["Sidecars"] = request.sidecars;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.startup)) {
      query["Startup"] = request.startup;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.terminateGracePeriod)) {
      query["TerminateGracePeriod"] = request.terminateGracePeriod;
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

    if (!Util.isUnset(request.userBaseImageUrl)) {
      query["UserBaseImageUrl"] = request.userBaseImageUrl;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    if (!Util.isUnset(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
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

  async insertK8sApplication(request: InsertK8sApplicationRequest): Promise<InsertK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertK8sApplicationWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.mseInstanceId)) {
      query["MseInstanceId"] = request.mseInstanceId;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    if (!Util.isUnset(request.registryType)) {
      query["RegistryType"] = request.registryType;
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

  async insertOrUpdateRegion(request: InsertOrUpdateRegionRequest): Promise<InsertOrUpdateRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertOrUpdateRegionWithOptions(request, headers, runtime);
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

  async insertRole(request: InsertRoleRequest): Promise<InsertRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertRoleWithOptions(request, headers, runtime);
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

  async insertServiceGroup(request: InsertServiceGroupRequest): Promise<InsertServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertServiceGroupWithOptions(request, headers, runtime);
  }

  async insertSwimmingLaneWithOptions(request: InsertSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    if (!Util.isUnset(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!Util.isUnset(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertSwimmingLaneResponse>(await this.callApi(params, req, runtime), new InsertSwimmingLaneResponse({}));
  }

  async insertSwimmingLane(request: InsertSwimmingLaneRequest): Promise<InsertSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneWithOptions(request, headers, runtime);
  }

  async insertSwimmingLaneGroupWithOptions(request: InsertSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InsertSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new InsertSwimmingLaneGroupResponse({}));
  }

  async insertSwimmingLaneGroup(request: InsertSwimmingLaneGroupRequest): Promise<InsertSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  /**
    * If you call this operation to import an ECS instance into EDAS, the operating system of the ECS instance is not reinstalled. We recommend that you call this operation to import ECS instances into EDAS.
    *
    * @param request InstallAgentRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return InstallAgentResponse
   */
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

  /**
    * If you call this operation to import an ECS instance into EDAS, the operating system of the ECS instance is not reinstalled. We recommend that you call this operation to import ECS instances into EDAS.
    *
    * @param request InstallAgentRequest
    * @return InstallAgentResponse
   */
  async installAgent(request: InstallAgentRequest): Promise<InstallAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentWithOptions(request, headers, runtime);
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

  async listAliyunRegion(): Promise<ListAliyunRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliyunRegionWithOptions(headers, runtime);
  }

  async listApplicationWithOptions(request: ListApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.logicalRegionIdFilter)) {
      query["LogicalRegionIdFilter"] = request.logicalRegionIdFilter;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

  async listApplication(request: ListApplicationRequest): Promise<ListApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationWithOptions(request, headers, runtime);
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

  async listApplicationEcu(request: ListApplicationEcuRequest): Promise<ListApplicationEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationEcuWithOptions(request, headers, runtime);
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

  async listAuthority(): Promise<ListAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorityWithOptions(headers, runtime);
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

  async listBuildPack(): Promise<ListBuildPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBuildPackWithOptions(headers, runtime);
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

  async listCluster(request: ListClusterRequest): Promise<ListClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterWithOptions(request, headers, runtime);
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

  async listClusterMembers(request: ListClusterMembersRequest): Promise<ListClusterMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterMembersWithOptions(request, headers, runtime);
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

  async listComponents(): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(headers, runtime);
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

  async listConfigTemplates(request: ListConfigTemplatesRequest): Promise<ListConfigTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigTemplatesWithOptions(request, headers, runtime);
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

  async listConsumedServices(request: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumedServicesWithOptions(request, headers, runtime);
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

  async listConvertableEcu(request: ListConvertableEcuRequest): Promise<ListConvertableEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConvertableEcuWithOptions(request, headers, runtime);
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

  async listDeployGroup(request: ListDeployGroupRequest): Promise<ListDeployGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeployGroupWithOptions(request, headers, runtime);
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

  async listEcsNotInCluster(request: ListEcsNotInClusterRequest): Promise<ListEcsNotInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsNotInClusterWithOptions(request, headers, runtime);
  }

  /**
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
    * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request ListEcuByRegionRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListEcuByRegionResponse
   */
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

  /**
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
    * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request ListEcuByRegionRequest
    * @return ListEcuByRegionResponse
   */
  async listEcuByRegion(request: ListEcuByRegionRequest): Promise<ListEcuByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcuByRegionWithOptions(request, headers, runtime);
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

  async listHistoryDeployVersion(request: ListHistoryDeployVersionRequest): Promise<ListHistoryDeployVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHistoryDeployVersionWithOptions(request, headers, runtime);
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

  async listK8sConfigMaps(request: ListK8sConfigMapsRequest): Promise<ListK8sConfigMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sConfigMapsWithOptions(request, headers, runtime);
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

  async listK8sIngressRules(request: ListK8sIngressRulesRequest): Promise<ListK8sIngressRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sIngressRulesWithOptions(request, headers, runtime);
  }

  async listK8sNamespacesWithOptions(request: ListK8sNamespacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListK8sNamespacesResponse> {
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
      action: "ListK8sNamespaces",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListK8sNamespacesResponse>(await this.callApi(params, req, runtime), new ListK8sNamespacesResponse({}));
  }

  async listK8sNamespaces(request: ListK8sNamespacesRequest): Promise<ListK8sNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sNamespacesWithOptions(request, headers, runtime);
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

  async listK8sSecrets(request: ListK8sSecretsRequest): Promise<ListK8sSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sSecretsWithOptions(request, headers, runtime);
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

  async listMethods(request: ListMethodsRequest): Promise<ListMethodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMethodsWithOptions(request, headers, runtime);
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

  async listPublishedServices(request: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedServicesWithOptions(request, headers, runtime);
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

  async listRecentChangeOrder(request: ListRecentChangeOrderRequest): Promise<ListRecentChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecentChangeOrderWithOptions(request, headers, runtime);
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

  async listResourceGroup(): Promise<ListResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupWithOptions(headers, runtime);
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

  async listRole(): Promise<ListRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRoleWithOptions(headers, runtime);
  }

  /**
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
    * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request ListScaleOutEcuRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListScaleOutEcuResponse
   */
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

  /**
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
    * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request ListScaleOutEcuRequest
    * @return ListScaleOutEcuResponse
   */
  async listScaleOutEcu(request: ListScaleOutEcuRequest): Promise<ListScaleOutEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScaleOutEcuWithOptions(request, headers, runtime);
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

  async listServiceGroups(): Promise<ListServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsWithOptions(headers, runtime);
  }

  async listSlbWithOptions(request: ListSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.slbType)) {
      query["SlbType"] = request.slbType;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
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

  async listSlb(request: ListSlbRequest): Promise<ListSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlbWithOptions(request, headers, runtime);
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

  async listSubAccount(): Promise<ListSubAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubAccountWithOptions(headers, runtime);
  }

  async listSwimmingLaneWithOptions(request: ListSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSwimmingLaneResponse> {
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
      action: "ListSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSwimmingLaneResponse>(await this.callApi(params, req, runtime), new ListSwimmingLaneResponse({}));
  }

  async listSwimmingLane(request: ListSwimmingLaneRequest): Promise<ListSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneWithOptions(request, headers, runtime);
  }

  async listSwimmingLaneGroupWithOptions(request: ListSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new ListSwimmingLaneGroupResponse({}));
  }

  async listSwimmingLaneGroup(request: ListSwimmingLaneGroupRequest): Promise<ListSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneGroupWithOptions(request, headers, runtime);
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
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

  async listUserDefineRegion(request: ListUserDefineRegionRequest): Promise<ListUserDefineRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserDefineRegionWithOptions(request, headers, runtime);
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

  async listVpc(): Promise<ListVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcWithOptions(headers, runtime);
  }

  /**
    * ## Limits
    * We recommend that you do not call this operation. Instead, we recommend that you call the TransformClusterMember operation. For more information, see [TransformClusterMember](~~71514~~).
    * When you call this operation to import an Elastic Compute Service (ECS) instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources and microservices in Enterprise Distributed Application Service (EDAS). The resources include clusters, ECS instances, and applications. You can use a default or custom namespace. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources or microservices.
    * *   **ECU**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request MigrateEcuRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return MigrateEcuResponse
   */
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

  /**
    * ## Limits
    * We recommend that you do not call this operation. Instead, we recommend that you call the TransformClusterMember operation. For more information, see [TransformClusterMember](~~71514~~).
    * When you call this operation to import an Elastic Compute Service (ECS) instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
    * ## Terms
    * *   **Namespace**: the logical concept that is used to isolate resources and microservices in Enterprise Distributed Application Service (EDAS). The resources include clusters, ECS instances, and applications. You can use a default or custom namespace. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources or microservices.
    * *   **ECU**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
    * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
    *
    * @param request MigrateEcuRequest
    * @return MigrateEcuResponse
   */
  async migrateEcu(request: MigrateEcuRequest): Promise<MigrateEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateEcuWithOptions(request, headers, runtime);
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

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScalingRuleWithOptions(request, headers, runtime);
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

  async queryApplicationStatus(request: QueryApplicationStatusRequest): Promise<QueryApplicationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryApplicationStatusWithOptions(request, headers, runtime);
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

  async queryEccInfo(request: QueryEccInfoRequest): Promise<QueryEccInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryEccInfoWithOptions(request, headers, runtime);
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

  async queryMigrateEcuList(request: QueryMigrateEcuListRequest): Promise<QueryMigrateEcuListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateEcuListWithOptions(request, headers, runtime);
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

  async queryMigrateRegionList(request: QueryMigrateRegionListRequest): Promise<QueryMigrateRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateRegionListWithOptions(request, headers, runtime);
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

  async queryRegionConfig(): Promise<QueryRegionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRegionConfigWithOptions(headers, runtime);
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

  async querySlsLogStoreList(request: QuerySlsLogStoreListRequest): Promise<QuerySlsLogStoreListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySlsLogStoreListWithOptions(request, headers, runtime);
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

  async resetApplication(request: ResetApplicationRequest): Promise<ResetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApplicationWithOptions(request, headers, runtime);
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

  async restartApplication(request: RestartApplicationRequest): Promise<RestartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartApplicationWithOptions(request, headers, runtime);
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

  async restartK8sApplication(request: RestartK8sApplicationRequest): Promise<RestartK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartK8sApplicationWithOptions(request, headers, runtime);
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

  async retryChangeOrderTask(request: RetryChangeOrderTaskRequest): Promise<RetryChangeOrderTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryChangeOrderTaskWithOptions(request, headers, runtime);
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

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackApplicationWithOptions(request, headers, runtime);
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

  async rollbackChangeOrder(request: RollbackChangeOrderRequest): Promise<RollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackChangeOrderWithOptions(request, headers, runtime);
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

  async scaleInApplication(request: ScaleInApplicationRequest): Promise<ScaleInApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInApplicationWithOptions(request, headers, runtime);
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

  async scaleK8sApplication(request: ScaleK8sApplicationRequest): Promise<ScaleK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleK8sApplicationWithOptions(request, headers, runtime);
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

  async scaleOutApplication(request: ScaleOutApplicationRequest): Promise<ScaleOutApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutApplicationWithOptions(request, headers, runtime);
  }

  /**
    * ## Limits
    * Assume that the auto scaling feature is configured and enabled for an application. When an auto scale-in is triggered for the application, the ECS instances that are purchased by calling this operation are removed first.
    *
    * @param request ScaleoutApplicationWithNewInstancesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ScaleoutApplicationWithNewInstancesResponse
   */
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

  /**
    * ## Limits
    * Assume that the auto scaling feature is configured and enabled for an application. When an auto scale-in is triggered for the application, the ECS instances that are purchased by calling this operation are removed first.
    *
    * @param request ScaleoutApplicationWithNewInstancesRequest
    * @return ScaleoutApplicationWithNewInstancesResponse
   */
  async scaleoutApplicationWithNewInstances(request: ScaleoutApplicationWithNewInstancesRequest): Promise<ScaleoutApplicationWithNewInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleoutApplicationWithNewInstancesWithOptions(request, headers, runtime);
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

  async startApplication(request: StartApplicationRequest): Promise<StartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApplicationWithOptions(request, headers, runtime);
  }

  async startK8sAppPrecheckWithOptions(request: StartK8sAppPrecheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartK8sAppPrecheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!Util.isUnset(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!Util.isUnset(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
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

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
    }

    if (!Util.isUnset(request.limitMem)) {
      query["LimitMem"] = request.limitMem;
    }

    if (!Util.isUnset(request.limitmCpu)) {
      query["LimitmCpu"] = request.limitmCpu;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!Util.isUnset(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!Util.isUnset(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartK8sAppPrecheck",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/app_precheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartK8sAppPrecheckResponse>(await this.callApi(params, req, runtime), new StartK8sAppPrecheckResponse({}));
  }

  async startK8sAppPrecheck(request: StartK8sAppPrecheckRequest): Promise<StartK8sAppPrecheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sAppPrecheckWithOptions(request, headers, runtime);
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

  async startK8sApplication(request: StartK8sApplicationRequest): Promise<StartK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sApplicationWithOptions(request, headers, runtime);
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

  async stopApplication(request: StopApplicationRequest): Promise<StopApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApplicationWithOptions(request, headers, runtime);
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

  async stopK8sApplication(request: StopK8sApplicationRequest): Promise<StopK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
    * To call the SwitchAdvancedMonitoring operation, you must make sure that the version of Enterprise Distributed Application Service (EDAS) SDK for Java or Python is 3.15.2 or later.
    *
    * @param request SwitchAdvancedMonitoringRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return SwitchAdvancedMonitoringResponse
   */
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

  /**
    * To call the SwitchAdvancedMonitoring operation, you must make sure that the version of Enterprise Distributed Application Service (EDAS) SDK for Java or Python is 3.15.2 or later.
    *
    * @param request SwitchAdvancedMonitoringRequest
    * @return SwitchAdvancedMonitoringResponse
   */
  async switchAdvancedMonitoring(request: SwitchAdvancedMonitoringRequest): Promise<SwitchAdvancedMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.switchAdvancedMonitoringWithOptions(request, headers, runtime);
  }

  /**
    * If you call this operation to synchronize ECS resource information, all instance data is synchronized from ECS. If you have more than 100 ECS instances, we recommend that you do not frequently call this operation.
    *
    * @param request SynchronizeResourceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return SynchronizeResourceResponse
   */
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

  /**
    * If you call this operation to synchronize ECS resource information, all instance data is synchronized from ECS. If you have more than 100 ECS instances, we recommend that you do not frequently call this operation.
    *
    * @param request SynchronizeResourceRequest
    * @return SynchronizeResourceResponse
   */
  async synchronizeResource(request: SynchronizeResourceRequest): Promise<SynchronizeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.synchronizeResourceWithOptions(request, headers, runtime);
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
    * ## Limits
    * When you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
    *
    * @param request TransformClusterMemberRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return TransformClusterMemberResponse
   */
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

  /**
    * ## Limits
    * When you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
    *
    * @param request TransformClusterMemberRequest
    * @return TransformClusterMemberResponse
   */
  async transformClusterMember(request: TransformClusterMemberRequest): Promise<TransformClusterMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transformClusterMemberWithOptions(request, headers, runtime);
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

  async unbindK8sSlb(request: UnbindK8sSlbRequest): Promise<UnbindK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindK8sSlbWithOptions(request, headers, runtime);
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

  async unbindSlb(request: UnbindSlbRequest): Promise<UnbindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindSlbWithOptions(request, headers, runtime);
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
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

  async updateAccountInfo(request: UpdateAccountInfoRequest): Promise<UpdateAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccountInfoWithOptions(request, headers, runtime);
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

  async updateApplicationBaseInfo(request: UpdateApplicationBaseInfoRequest): Promise<UpdateApplicationBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationBaseInfoWithOptions(request, headers, runtime);
  }

  async updateApplicationScalingRuleWithOptions(request: UpdateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingBehaviour)) {
      query["ScalingBehaviour"] = request.scalingBehaviour;
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

  async updateApplicationScalingRule(request: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationScalingRuleWithOptions(request, headers, runtime);
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

  async updateConfigTemplate(request: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigTemplateWithOptions(request, headers, runtime);
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

  async updateContainer(request: UpdateContainerRequest): Promise<UpdateContainerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerWithOptions(request, headers, runtime);
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

  async updateContainerConfiguration(request: UpdateContainerConfigurationRequest): Promise<UpdateContainerConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerConfigurationWithOptions(request, headers, runtime);
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

  async updateHealthCheckUrl(request: UpdateHealthCheckUrlRequest): Promise<UpdateHealthCheckUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHealthCheckUrlWithOptions(request, headers, runtime);
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

  async updateHookConfiguration(request: UpdateHookConfigurationRequest): Promise<UpdateHookConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHookConfigurationWithOptions(request, headers, runtime);
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

  async updateJvmConfiguration(request: UpdateJvmConfigurationRequest): Promise<UpdateJvmConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJvmConfigurationWithOptions(request, headers, runtime);
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

  async updateK8sApplicationBaseInfo(request: UpdateK8sApplicationBaseInfoRequest): Promise<UpdateK8sApplicationBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationBaseInfoWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.ephemeralStorageLimit)) {
      query["EphemeralStorageLimit"] = request.ephemeralStorageLimit;
    }

    if (!Util.isUnset(request.ephemeralStorageRequest)) {
      query["EphemeralStorageRequest"] = request.ephemeralStorageRequest;
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

  async updateK8sApplicationConfig(request: UpdateK8sApplicationConfigRequest): Promise<UpdateK8sApplicationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationConfigWithOptions(request, headers, runtime);
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

  async updateK8sConfigMap(request: UpdateK8sConfigMapRequest): Promise<UpdateK8sConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sConfigMapWithOptions(request, headers, runtime);
  }

  async updateK8sIngressRuleWithOptions(request: UpdateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sIngressRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
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

  async updateK8sIngressRule(request: UpdateK8sIngressRuleRequest): Promise<UpdateK8sIngressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sIngressRuleWithOptions(request, headers, runtime);
  }

  /**
    * > You can update only Deployments.
    *
    * @param request UpdateK8sResourceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateK8sResourceResponse
   */
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

  /**
    * > You can update only Deployments.
    *
    * @param request UpdateK8sResourceRequest
    * @return UpdateK8sResourceResponse
   */
  async updateK8sResource(request: UpdateK8sResourceRequest): Promise<UpdateK8sResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sResourceWithOptions(request, headers, runtime);
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

  async updateK8sSecret(request: UpdateK8sSecretRequest): Promise<UpdateK8sSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSecretWithOptions(request, headers, runtime);
  }

  async updateK8sServiceWithOptions(request: UpdateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.externalTrafficPolicy)) {
      query["ExternalTrafficPolicy"] = request.externalTrafficPolicy;
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

  async updateK8sService(request: UpdateK8sServiceRequest): Promise<UpdateK8sServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sServiceWithOptions(request, headers, runtime);
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

  async updateK8sSlb(request: UpdateK8sSlbRequest): Promise<UpdateK8sSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSlbWithOptions(request, headers, runtime);
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

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
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

  async updateSlsLogStore(request: UpdateSlsLogStoreRequest): Promise<UpdateSlsLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSlsLogStoreWithOptions(request, headers, runtime);
  }

  async updateSwimmingLaneWithOptions(request: UpdateSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    if (!Util.isUnset(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!Util.isUnset(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSwimmingLaneResponse>(await this.callApi(params, req, runtime), new UpdateSwimmingLaneResponse({}));
  }

  async updateSwimmingLane(request: UpdateSwimmingLaneRequest): Promise<UpdateSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneWithOptions(request, headers, runtime);
  }

  async updateSwimmingLaneGroupWithOptions(request: UpdateSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new UpdateSwimmingLaneGroupResponse({}));
  }

  async updateSwimmingLaneGroup(request: UpdateSwimmingLaneGroupRequest): Promise<UpdateSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

}
