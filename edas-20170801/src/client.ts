// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  message?: string;
  requestId?: string;
  traceId?: string;
  data?: AbortAndRollbackChangeOrderResponseBodyData;
  errorCode?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
      data: 'Data',
      errorCode: 'ErrorCode',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      traceId: 'string',
      data: AbortAndRollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  traceId?: string;
  data?: AbortChangeOrderResponseBodyData;
  errorCode?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
      data: 'Data',
      errorCode: 'ErrorCode',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      traceId: 'string',
      data: AbortChangeOrderResponseBodyData,
      errorCode: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  name?: string;
  region?: string;
  source?: string;
  providerAppId?: string;
  providerAppName?: string;
  extraJson?: string;
  scMockItemJson?: string;
  dubboMockItemJson?: string;
  consumerAppsJson?: string;
  enable?: boolean;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      source: 'Source',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      extraJson: 'ExtraJson',
      scMockItemJson: 'ScMockItemJson',
      dubboMockItemJson: 'DubboMockItemJson',
      consumerAppsJson: 'ConsumerAppsJson',
      enable: 'Enable',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      source: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      extraJson: 'string',
      scMockItemJson: 'string',
      dubboMockItemJson: 'string',
      consumerAppsJson: 'string',
      enable: 'boolean',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddMockRuleResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddMockRuleResponseBodyData,
      code: 'number',
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

export class AddServiceTimeConfigRequest extends $tea.Model {
  region?: string;
  serviceType?: string;
  appId?: string;
  serviceName?: string;
  serviceVersion?: string;
  serviceGroup?: string;
  path?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  timeout?: string;
  namespace?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      serviceType: 'ServiceType',
      appId: 'AppId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      serviceGroup: 'ServiceGroup',
      path: 'Path',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      timeout: 'Timeout',
      namespace: 'Namespace',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      serviceType: 'string',
      appId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      serviceGroup: 'string',
      path: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      timeout: 'string',
      namespace: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceTimeConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddServiceTimeConfigResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddServiceTimeConfigResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceTimeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddServiceTimeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddServiceTimeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationRequest extends $tea.Model {
  targetUserId?: string;
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
      appIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  targetUserId?: string;
  resourceGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
      resourceGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResourceGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  targetUserId?: string;
  roleIds?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
      roleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  slbId?: string;
  listenerPort?: number;
  VServerGroupId?: string;
  listenerProtocol?: string;
  deployGroupId?: string;
  VServerGroupName?: string;
  listenerHealthCheckUrl?: string;
  VForwardingUrlRule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      slbId: 'SlbId',
      listenerPort: 'ListenerPort',
      VServerGroupId: 'VServerGroupId',
      listenerProtocol: 'ListenerProtocol',
      deployGroupId: 'DeployGroupId',
      VServerGroupName: 'VServerGroupName',
      listenerHealthCheckUrl: 'ListenerHealthCheckUrl',
      VForwardingUrlRule: 'VForwardingUrlRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      slbId: 'string',
      listenerPort: 'number',
      VServerGroupId: 'string',
      listenerProtocol: 'string',
      deployGroupId: 'string',
      VServerGroupName: 'string',
      listenerHealthCheckUrl: 'string',
      VForwardingUrlRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEcsSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  type?: string;
  slbId?: string;
  slbProtocol?: string;
  targetPort?: string;
  port?: string;
  servicePortInfos?: string;
  specification?: string;
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      type: 'Type',
      slbId: 'SlbId',
      slbProtocol: 'SlbProtocol',
      targetPort: 'TargetPort',
      port: 'Port',
      servicePortInfos: 'ServicePortInfos',
      specification: 'Specification',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      type: 'string',
      slbId: 'string',
      slbProtocol: 'string',
      targetPort: 'string',
      port: 'string',
      servicePortInfos: 'string',
      specification: 'string',
      scheduler: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindK8sSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  slbId?: string;
  slbIp?: string;
  type?: string;
  listenerPort?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      type: 'Type',
      listenerPort: 'ListenerPort',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      slbId: 'string',
      slbIp: 'string',
      type: 'string',
      listenerPort: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: BindSlbResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: BindSlbResponseBodyData,
      code: 'number',
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
  groupName?: string;
  forceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
      groupName: 'GroupName',
      forceStatus: 'ForceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
      groupName: 'string',
      forceStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDeployGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  pipelineId?: string;
  confirm?: boolean;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      confirm: 'Confirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      confirm: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuePipelineResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  resourceType?: string;
  resourceName?: string;
  namespace?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceName: 'ResourceName',
      namespace: 'Namespace',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceName: 'string',
      namespace: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertK8sResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
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

export class CreateK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  name?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      name: 'Name',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      name: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleResponseBody extends $tea.Model {
  message?: string;
  changeOrderIds?: CreateK8sIngressRuleResponseBodyChangeOrderIds[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      changeOrderIds: 'ChangeOrderIds',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      changeOrderIds: { 'type': 'array', 'itemType': CreateK8sIngressRuleResponseBodyChangeOrderIds },
      code: 'number',
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

export class CreateK8sServiceRequest extends $tea.Model {
  appId?: string;
  name?: string;
  type?: string;
  servicePorts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      type: 'Type',
      servicePorts: 'ServicePorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      type: 'string',
      servicePorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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

export class DelegateAdminRoleRequest extends $tea.Model {
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelegateAdminRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelegateAdminRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DelegateAdminRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DelegateAdminRoleResponseBody,
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'number',
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

export class DeleteConfigCenterRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigCenterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDegradeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDegradeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDegradeControlResponseBody,
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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

export class DeleteFlowControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowControlResponseBody,
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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

export class DeleteK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sIngressRuleResponseBody extends $tea.Model {
  message?: string;
  changeOrderIds?: DeleteK8sIngressRuleResponseBodyChangeOrderIds[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      changeOrderIds: 'ChangeOrderIds',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      changeOrderIds: { 'type': 'array', 'itemType': DeleteK8sIngressRuleResponseBodyChangeOrderIds },
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class DeleteServiceTimeConfigRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceTimeConfigResponseBody extends $tea.Model {
  message?: string;
  data?: DeleteServiceTimeConfigResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: DeleteServiceTimeConfigResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceTimeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceTimeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceTimeConfigResponseBody,
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
  message?: string;
  requestId?: string;
  data?: number;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneGroupRequest extends $tea.Model {
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

export class DeleteSwimmingLaneGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSwimmingLaneGroupResponseBody,
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
  message?: string;
  requestId?: string;
  regionDefine?: DeleteUserDefineRegionResponseBodyRegionDefine;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      regionDefine: 'RegionDefine',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      regionDefine: DeleteUserDefineRegionResponseBodyRegionDefine,
      code: 'number',
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
  appId?: string;
  packageVersion?: string;
  desc?: string;
  deployType?: string;
  warUrl?: string;
  imageUrl?: string;
  groupId?: string;
  batch?: number;
  batchWaitTime?: number;
  appEnv?: string;
  buildPackId?: number;
  componentIds?: string;
  releaseType?: number;
  gray?: boolean;
  trafficControlStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      packageVersion: 'PackageVersion',
      desc: 'Desc',
      deployType: 'DeployType',
      warUrl: 'WarUrl',
      imageUrl: 'ImageUrl',
      groupId: 'GroupId',
      batch: 'Batch',
      batchWaitTime: 'BatchWaitTime',
      appEnv: 'AppEnv',
      buildPackId: 'BuildPackId',
      componentIds: 'ComponentIds',
      releaseType: 'ReleaseType',
      gray: 'Gray',
      trafficControlStrategy: 'TrafficControlStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      packageVersion: 'string',
      desc: 'string',
      deployType: 'string',
      warUrl: 'string',
      imageUrl: 'string',
      groupId: 'string',
      batch: 'number',
      batchWaitTime: 'number',
      appEnv: 'string',
      buildPackId: 'number',
      componentIds: 'string',
      releaseType: 'number',
      gray: 'boolean',
      trafficControlStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  preStop?: string;
  envs?: string;
  imageTag?: string;
  batchWaitTime?: number;
  command?: string;
  appId?: string;
  postStart?: string;
  readiness?: string;
  liveness?: string;
  args?: string;
  replicas?: number;
  image?: string;
  cpuLimit?: number;
  memoryLimit?: number;
  cpuRequest?: number;
  memoryRequest?: number;
  nasId?: string;
  mountDescs?: string;
  storageType?: string;
  localVolume?: string;
  packageUrl?: string;
  packageVersion?: string;
  JDK?: string;
  webContainer?: string;
  edasContainerVersion?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  updateStrategy?: string;
  mcpuRequest?: number;
  mcpuLimit?: number;
  volumesStr?: string;
  packageVersionId?: string;
  changeOrderDesc?: string;
  runtimeClassName?: string;
  deployAcrossZones?: string;
  batchTimeout?: number;
  enableAhas?: boolean;
  webContainerConfig?: string;
  javaStartUpConfig?: string;
  slsConfigs?: string;
  deployAcrossNodes?: string;
  trafficControlStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      preStop: 'PreStop',
      envs: 'Envs',
      imageTag: 'ImageTag',
      batchWaitTime: 'BatchWaitTime',
      command: 'Command',
      appId: 'AppId',
      postStart: 'PostStart',
      readiness: 'Readiness',
      liveness: 'Liveness',
      args: 'Args',
      replicas: 'Replicas',
      image: 'Image',
      cpuLimit: 'CpuLimit',
      memoryLimit: 'MemoryLimit',
      cpuRequest: 'CpuRequest',
      memoryRequest: 'MemoryRequest',
      nasId: 'NasId',
      mountDescs: 'MountDescs',
      storageType: 'StorageType',
      localVolume: 'LocalVolume',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      JDK: 'JDK',
      webContainer: 'WebContainer',
      edasContainerVersion: 'EdasContainerVersion',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      updateStrategy: 'UpdateStrategy',
      mcpuRequest: 'McpuRequest',
      mcpuLimit: 'McpuLimit',
      volumesStr: 'VolumesStr',
      packageVersionId: 'PackageVersionId',
      changeOrderDesc: 'ChangeOrderDesc',
      runtimeClassName: 'RuntimeClassName',
      deployAcrossZones: 'DeployAcrossZones',
      batchTimeout: 'BatchTimeout',
      enableAhas: 'EnableAhas',
      webContainerConfig: 'WebContainerConfig',
      javaStartUpConfig: 'JavaStartUpConfig',
      slsConfigs: 'SlsConfigs',
      deployAcrossNodes: 'DeployAcrossNodes',
      trafficControlStrategy: 'TrafficControlStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preStop: 'string',
      envs: 'string',
      imageTag: 'string',
      batchWaitTime: 'number',
      command: 'string',
      appId: 'string',
      postStart: 'string',
      readiness: 'string',
      liveness: 'string',
      args: 'string',
      replicas: 'number',
      image: 'string',
      cpuLimit: 'number',
      memoryLimit: 'number',
      cpuRequest: 'number',
      memoryRequest: 'number',
      nasId: 'string',
      mountDescs: 'string',
      storageType: 'string',
      localVolume: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      JDK: 'string',
      webContainer: 'string',
      edasContainerVersion: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      updateStrategy: 'string',
      mcpuRequest: 'number',
      mcpuLimit: 'number',
      volumesStr: 'string',
      packageVersionId: 'string',
      changeOrderDesc: 'string',
      runtimeClassName: 'string',
      deployAcrossZones: 'string',
      batchTimeout: 'number',
      enableAhas: 'boolean',
      webContainerConfig: 'string',
      javaStartUpConfig: 'string',
      slsConfigs: 'string',
      deployAcrossNodes: 'string',
      trafficControlStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployK8sApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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

export class DisableDegradeControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDegradeControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDegradeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDegradeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDegradeControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableFlowControlResponseBody,
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
  message?: string;
  requestId?: string;
  data?: DisableMockRuleResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DisableMockRuleResponseBodyData,
      code: 'number',
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

export class EnableDegradeControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDegradeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableDegradeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableDegradeControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableFlowControlResponseBody,
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
  message?: string;
  requestId?: string;
  data?: EnableMockRuleResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EnableMockRuleResponseBodyData,
      code: 'number',
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

export class ExecuteStatusRequest extends $tea.Model {
  region?: string;
  namespaceId?: string;
  tenantId?: string;
  source?: string;
  accountId?: string;
  appId?: string;
  ip?: string;
  podName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      namespaceId: 'NamespaceId',
      tenantId: 'TenantId',
      source: 'Source',
      accountId: 'AccountId',
      appId: 'AppId',
      ip: 'Ip',
      podName: 'PodName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespaceId: 'string',
      tenantId: 'string',
      source: 'string',
      accountId: 'string',
      appId: 'string',
      ip: 'string',
      podName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ExecuteStatusResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ExecuteStatusResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleRequest extends $tea.Model {
  region?: string;
  pageSize?: string;
  pageNumber?: string;
  name?: string;
  consumerAppName?: string;
  providerAppName?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      name: 'Name',
      consumerAppName: 'ConsumerAppName',
      providerAppName: 'ProviderAppName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      name: 'string',
      consumerAppName: 'string',
      providerAppName: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBody extends $tea.Model {
  message?: string;
  data?: GetAccountMockRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: GetAccountMockRuleResponseBodyData,
      code: 'string',
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
  message?: string;
  requestId?: string;
  code?: number;
  application?: GetApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      application: GetApplicationResponseBodyApplication,
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
  message?: string;
  requestId?: string;
  code?: number;
  changeOrderInfo?: GetChangeOrderInfoResponseBodyChangeOrderInfo;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      changeOrderInfo: 'changeOrderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  cluster?: GetClusterResponseBodyCluster;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cluster: 'Cluster',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cluster: GetClusterResponseBodyCluster,
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  containerConfiguration?: GetContainerConfigurationResponseBodyContainerConfiguration;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      containerConfiguration: 'ContainerConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      containerConfiguration: GetContainerConfigurationResponseBodyContainerConfiguration,
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
  message?: string;
  requestId?: string;
  jvmConfiguration?: GetJvmConfigurationResponseBodyJvmConfiguration;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      jvmConfiguration: 'JvmConfiguration',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      jvmConfiguration: GetJvmConfigurationResponseBodyJvmConfiguration,
      code: 'number',
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
  message?: string;
  requestId?: string;
  applcation?: GetK8sApplicationResponseBodyApplcation;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      applcation: 'Applcation',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      applcation: GetK8sApplicationResponseBodyApplcation,
      code: 'number',
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
  regionTag?: string;
  currentPage?: number;
  pageSize?: number;
  clusterType?: number;
  static names(): { [key: string]: string } {
    return {
      regionTag: 'RegionTag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionTag: 'string',
      currentPage: 'number',
      pageSize: 'number',
      clusterType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  clusterPage?: GetK8sClusterResponseBodyClusterPage;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      clusterPage: 'ClusterPage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      clusterPage: GetK8sClusterResponseBodyClusterPage,
      code: 'number',
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
  services?: GetK8sServicesResponseBodyServices[];
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServices },
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  region?: string;
  consumerAppId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      consumerAppId: 'ConsumerAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      consumerAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: GetMockRuleByConsumerAppIdResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetMockRuleByConsumerAppIdResponseBodyData },
      code: 'string',
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

export class GetMockRuleByIdRequest extends $tea.Model {
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

export class GetMockRuleByIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMockRuleByIdResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMockRuleByIdResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMockRuleByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMockRuleByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdRequest extends $tea.Model {
  region?: string;
  providerAppId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      providerAppId: 'ProviderAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      providerAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: GetMockRuleByProviderAppIdResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetMockRuleByProviderAppIdResponseBodyData },
      code: 'string',
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
  credential?: GetPackageStorageCredentialResponseBodyCredential;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      credential: 'Credential',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: GetPackageStorageCredentialResponseBodyCredential,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  updateTime?: number;
  data?: GetScalingRulesResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      updateTime: 'number',
      data: GetScalingRulesResponseBodyData,
      code: 'number',
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
  secureToken?: GetSecureTokenResponseBodySecureToken;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      secureToken: 'SecureToken',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureToken: GetSecureTokenResponseBodySecureToken,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  appId?: string;
  source?: string;
  serviceId?: string;
  serviceName?: string;
  serviceVersion?: string;
  group?: string;
  ip?: string;
  registryType?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      appId: 'appId',
      source: 'source',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceVersion: 'serviceVersion',
      group: 'group',
      ip: 'ip',
      registryType: 'registryType',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      appId: 'string',
      source: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      group: 'string',
      ip: 'string',
      registryType: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBody extends $tea.Model {
  message?: string;
  data?: GetServiceConsumersPageResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: GetServiceConsumersPageResponseBodyData,
      code: 'number',
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
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  appId?: string;
  source?: string;
  serviceId?: string;
  serviceName?: string;
  serviceVersion?: string;
  group?: string;
  ip?: string;
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      appId: 'appId',
      source: 'source',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceVersion: 'serviceVersion',
      group: 'group',
      ip: 'ip',
      registryType: 'registryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      appId: 'string',
      source: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      group: 'string',
      ip: 'string',
      registryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBody extends $tea.Model {
  message?: string;
  data?: GetServiceDetailResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: GetServiceDetailResponseBodyData,
      code: 'number',
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

export class GetServiceListRequest extends $tea.Model {
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  searchType?: string;
  searchValue?: string;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      searchType: 'searchType',
      searchValue: 'searchValue',
      side: 'side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      searchType: 'string',
      searchValue: 'string',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  data?: GetServiceListResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': GetServiceListResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageRequest extends $tea.Model {
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  searchType?: string;
  searchValue?: string;
  side?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      searchType: 'searchType',
      searchValue: 'searchValue',
      side: 'side',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      searchType: 'string',
      searchValue: 'string',
      side: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBody extends $tea.Model {
  message?: string;
  data?: GetServiceListPageResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: GetServiceListPageResponseBodyData,
      code: 'number',
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
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  appId?: string;
  source?: string;
  serviceId?: string;
  serviceName?: string;
  serviceVersion?: string;
  group?: string;
  ip?: string;
  registryType?: string;
  pageNumber?: number;
  pageSize?: number;
  methodController?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      appId: 'appId',
      source: 'source',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceVersion: 'serviceVersion',
      group: 'group',
      ip: 'ip',
      registryType: 'registryType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      methodController: 'methodController',
      path: 'path',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      appId: 'string',
      source: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      group: 'string',
      ip: 'string',
      registryType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      methodController: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: GetServiceMethodPageResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: GetServiceMethodPageResponseBodyData,
      code: 'string',
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
  region?: string;
  namespace?: string;
  origin?: string;
  serviceType?: string;
  appId?: string;
  source?: string;
  serviceId?: string;
  serviceName?: string;
  serviceVersion?: string;
  group?: string;
  ip?: string;
  registryType?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      namespace: 'namespace',
      origin: 'origin',
      serviceType: 'serviceType',
      appId: 'appId',
      source: 'source',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceVersion: 'serviceVersion',
      group: 'group',
      ip: 'ip',
      registryType: 'registryType',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespace: 'string',
      origin: 'string',
      serviceType: 'string',
      appId: 'string',
      source: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      group: 'string',
      ip: 'string',
      registryType: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBody extends $tea.Model {
  message?: string;
  data?: GetServiceProvidersPageResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: GetServiceProvidersPageResponseBodyData,
      code: 'number',
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

export class GetSubAccountInfoRequest extends $tea.Model {
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubAccountInfoResponseBody extends $tea.Model {
  authorization?: GetSubAccountInfoResponseBodyAuthorization;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: GetSubAccountInfoResponseBodyAuthorization,
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSubAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSubAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimmingLaneRequest extends $tea.Model {
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

export class GetSwimmingLaneResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetSwimmingLaneResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetSwimmingLaneResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportK8sClusterRequest extends $tea.Model {
  clusterId?: string;
  namespaceId?: string;
  mode?: number;
  enableAsm?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespaceId: 'NamespaceId',
      mode: 'Mode',
      enableAsm: 'EnableAsm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespaceId: 'string',
      mode: 'number',
      enableAsm: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportK8sClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  clusterId?: string;
  buildPackId?: number;
  description?: string;
  applicationName?: string;
  reservedPortStr?: string;
  ecuInfo?: string;
  cpu?: number;
  mem?: number;
  healthCheckURL?: string;
  logicalRegionId?: string;
  jdk?: string;
  webContainer?: string;
  packageType?: string;
  componentIds?: string;
  hooks?: string;
  jvmOptions?: string;
  minHeapSize?: number;
  maxPermSize?: number;
  maxHeapSize?: number;
  enableUrlCheck?: boolean;
  enablePortCheck?: boolean;
  healthCheckUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      buildPackId: 'BuildPackId',
      description: 'Description',
      applicationName: 'ApplicationName',
      reservedPortStr: 'ReservedPortStr',
      ecuInfo: 'EcuInfo',
      cpu: 'Cpu',
      mem: 'Mem',
      healthCheckURL: 'HealthCheckURL',
      logicalRegionId: 'LogicalRegionId',
      jdk: 'Jdk',
      webContainer: 'WebContainer',
      packageType: 'PackageType',
      componentIds: 'ComponentIds',
      hooks: 'Hooks',
      jvmOptions: 'JvmOptions',
      minHeapSize: 'MinHeapSize',
      maxPermSize: 'MaxPermSize',
      maxHeapSize: 'MaxHeapSize',
      enableUrlCheck: 'EnableUrlCheck',
      enablePortCheck: 'EnablePortCheck',
      healthCheckUrl: 'HealthCheckUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      buildPackId: 'number',
      description: 'string',
      applicationName: 'string',
      reservedPortStr: 'string',
      ecuInfo: 'string',
      cpu: 'number',
      mem: 'number',
      healthCheckURL: 'string',
      logicalRegionId: 'string',
      jdk: 'string',
      webContainer: 'string',
      packageType: 'string',
      componentIds: 'string',
      hooks: 'string',
      jvmOptions: 'string',
      minHeapSize: 'number',
      maxPermSize: 'number',
      maxHeapSize: 'number',
      enableUrlCheck: 'boolean',
      enablePortCheck: 'boolean',
      healthCheckUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  applicationInfo?: InsertApplicationResponseBodyApplicationInfo;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      applicationInfo: 'ApplicationInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      applicationInfo: InsertApplicationResponseBodyApplicationInfo,
      code: 'number',
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
  logicalRegionId?: string;
  clusterName?: string;
  clusterType?: number;
  networkMode?: number;
  vpcId?: string;
  oversoldFactor?: number;
  iaasProvider?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      networkMode: 'NetworkMode',
      vpcId: 'VpcId',
      oversoldFactor: 'OversoldFactor',
      iaasProvider: 'IaasProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      networkMode: 'number',
      vpcId: 'string',
      oversoldFactor: 'number',
      iaasProvider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  cluster?: InsertClusterResponseBodyCluster;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      cluster: 'Cluster',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      cluster: InsertClusterResponseBodyCluster,
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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

export class InsertConfigCenterRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  data?: string;
  logicalRegionId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      data: 'Data',
      logicalRegionId: 'LogicalRegionId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      data: 'string',
      logicalRegionId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertConfigCenterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertConfigCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertConfigCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertConfigCenterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDegradeControlRequest extends $tea.Model {
  appId?: string;
  duration?: number;
  methodName?: string;
  rtThreshold?: number;
  serviceName?: string;
  urlVar?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      duration: 'Duration',
      methodName: 'MethodName',
      rtThreshold: 'RtThreshold',
      serviceName: 'ServiceName',
      urlVar: 'UrlVar',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      duration: 'number',
      methodName: 'string',
      rtThreshold: 'number',
      serviceName: 'string',
      urlVar: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDegradeControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDegradeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertDegradeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertDegradeControlResponseBody,
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
  message?: string;
  requestId?: string;
  code?: number;
  deployGroupEntity?: InsertDeployGroupResponseBodyDeployGroupEntity;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      deployGroupEntity: 'DeployGroupEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      deployGroupEntity: InsertDeployGroupResponseBodyDeployGroupEntity,
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

export class InsertFlowControlRequest extends $tea.Model {
  appId?: string;
  consumerAppId?: string;
  granularity?: string;
  methodName?: string;
  ruleType?: string;
  serviceName?: string;
  strategy?: string;
  threshold?: number;
  urlVar?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      consumerAppId: 'ConsumerAppId',
      granularity: 'Granularity',
      methodName: 'MethodName',
      ruleType: 'RuleType',
      serviceName: 'ServiceName',
      strategy: 'Strategy',
      threshold: 'Threshold',
      urlVar: 'UrlVar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      consumerAppId: 'string',
      granularity: 'string',
      methodName: 'string',
      ruleType: 'string',
      serviceName: 'string',
      strategy: 'string',
      threshold: 'number',
      urlVar: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertFlowControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertFlowControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationRequest extends $tea.Model {
  intranetTargetPort?: number;
  intranetSlbPort?: number;
  imageUrl?: string;
  applicationDescription?: string;
  repoId?: string;
  replicas?: number;
  limitCpu?: number;
  limitMem?: number;
  requestsCpu?: number;
  requestsMem?: number;
  command?: string;
  commandArgs?: string;
  appName?: string;
  intranetSlbProtocol?: string;
  intranetSlbId?: string;
  clusterId?: string;
  internetSlbId?: string;
  internetSlbProtocol?: string;
  internetSlbPort?: number;
  internetTargetPort?: number;
  envs?: string;
  preStop?: string;
  postStart?: string;
  liveness?: string;
  readiness?: string;
  nasId?: string;
  mountDescs?: string;
  storageType?: string;
  localVolume?: string;
  namespace?: string;
  logicalRegionId?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  JDK?: string;
  webContainer?: string;
  edasContainerVersion?: string;
  uriEncoding?: string;
  useBodyEncoding?: boolean;
  requestsmCpu?: number;
  limitmCpu?: number;
  runtimeClassName?: string;
  deployAcrossZones?: string;
  timeout?: number;
  enableAhas?: boolean;
  webContainerConfig?: string;
  javaStartUpConfig?: string;
  slsConfigs?: string;
  isMultilingualApp?: boolean;
  deployAcrossNodes?: string;
  static names(): { [key: string]: string } {
    return {
      intranetTargetPort: 'IntranetTargetPort',
      intranetSlbPort: 'IntranetSlbPort',
      imageUrl: 'ImageUrl',
      applicationDescription: 'ApplicationDescription',
      repoId: 'RepoId',
      replicas: 'Replicas',
      limitCpu: 'LimitCpu',
      limitMem: 'LimitMem',
      requestsCpu: 'RequestsCpu',
      requestsMem: 'RequestsMem',
      command: 'Command',
      commandArgs: 'CommandArgs',
      appName: 'AppName',
      intranetSlbProtocol: 'IntranetSlbProtocol',
      intranetSlbId: 'IntranetSlbId',
      clusterId: 'ClusterId',
      internetSlbId: 'InternetSlbId',
      internetSlbProtocol: 'InternetSlbProtocol',
      internetSlbPort: 'InternetSlbPort',
      internetTargetPort: 'InternetTargetPort',
      envs: 'Envs',
      preStop: 'PreStop',
      postStart: 'PostStart',
      liveness: 'Liveness',
      readiness: 'Readiness',
      nasId: 'NasId',
      mountDescs: 'MountDescs',
      storageType: 'StorageType',
      localVolume: 'LocalVolume',
      namespace: 'Namespace',
      logicalRegionId: 'LogicalRegionId',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      JDK: 'JDK',
      webContainer: 'WebContainer',
      edasContainerVersion: 'EdasContainerVersion',
      uriEncoding: 'UriEncoding',
      useBodyEncoding: 'UseBodyEncoding',
      requestsmCpu: 'RequestsmCpu',
      limitmCpu: 'LimitmCpu',
      runtimeClassName: 'RuntimeClassName',
      deployAcrossZones: 'DeployAcrossZones',
      timeout: 'Timeout',
      enableAhas: 'EnableAhas',
      webContainerConfig: 'WebContainerConfig',
      javaStartUpConfig: 'JavaStartUpConfig',
      slsConfigs: 'SlsConfigs',
      isMultilingualApp: 'IsMultilingualApp',
      deployAcrossNodes: 'DeployAcrossNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetTargetPort: 'number',
      intranetSlbPort: 'number',
      imageUrl: 'string',
      applicationDescription: 'string',
      repoId: 'string',
      replicas: 'number',
      limitCpu: 'number',
      limitMem: 'number',
      requestsCpu: 'number',
      requestsMem: 'number',
      command: 'string',
      commandArgs: 'string',
      appName: 'string',
      intranetSlbProtocol: 'string',
      intranetSlbId: 'string',
      clusterId: 'string',
      internetSlbId: 'string',
      internetSlbProtocol: 'string',
      internetSlbPort: 'number',
      internetTargetPort: 'number',
      envs: 'string',
      preStop: 'string',
      postStart: 'string',
      liveness: 'string',
      readiness: 'string',
      nasId: 'string',
      mountDescs: 'string',
      storageType: 'string',
      localVolume: 'string',
      namespace: 'string',
      logicalRegionId: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      JDK: 'string',
      webContainer: 'string',
      edasContainerVersion: 'string',
      uriEncoding: 'string',
      useBodyEncoding: 'boolean',
      requestsmCpu: 'number',
      limitmCpu: 'number',
      runtimeClassName: 'string',
      deployAcrossZones: 'string',
      timeout: 'number',
      enableAhas: 'boolean',
      webContainerConfig: 'string',
      javaStartUpConfig: 'string',
      slsConfigs: 'string',
      isMultilingualApp: 'boolean',
      deployAcrossNodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  applicationInfo?: InsertK8sApplicationResponseBodyApplicationInfo;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      applicationInfo: 'ApplicationInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      applicationInfo: InsertK8sApplicationResponseBodyApplicationInfo,
      code: 'number',
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
  regionTag?: string;
  regionName?: string;
  description?: string;
  id?: number;
  debugEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionTag: 'RegionTag',
      regionName: 'RegionName',
      description: 'Description',
      id: 'Id',
      debugEnable: 'DebugEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionTag: 'string',
      regionName: 'string',
      description: 'string',
      id: 'number',
      debugEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  userDefineRegionEntity?: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionEntity: 'UserDefineRegionEntity',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      userDefineRegionEntity: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity,
      code: 'number',
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
  roleName?: string;
  actionData?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      actionData: 'ActionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      actionData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class InsertSwimmingLaneRequest extends $tea.Model {
  logicalRegionId?: string;
  name?: string;
  tag?: string;
  groupId?: number;
  entryRules?: string;
  enableRules?: boolean;
  appInfos?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      name: 'Name',
      tag: 'Tag',
      groupId: 'GroupId',
      entryRules: 'EntryRules',
      enableRules: 'EnableRules',
      appInfos: 'AppInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      name: 'string',
      tag: 'string',
      groupId: 'number',
      entryRules: 'string',
      enableRules: 'boolean',
      appInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InsertSwimmingLaneResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InsertSwimmingLaneResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupRequest extends $tea.Model {
  name?: string;
  entryApp?: string;
  appIds?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      entryApp: 'EntryApp',
      appIds: 'AppIds',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      entryApp: 'string',
      appIds: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InsertSwimmingLaneGroupResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InsertSwimmingLaneGroupResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertSwimmingLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentRequest extends $tea.Model {
  clusterId?: string;
  instanceIds?: string;
  doAsync?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
      doAsync: 'DoAsync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: 'string',
      doAsync: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  executionResultList?: InstallAgentResponseBodyExecutionResultList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      executionResultList: 'ExecutionResultList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      executionResultList: InstallAgentResponseBodyExecutionResultList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  regionEntityList?: ListAliyunRegionResponseBodyRegionEntityList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      regionEntityList: 'RegionEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      regionEntityList: ListAliyunRegionResponseBodyRegionEntityList,
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
  clusterId?: string;
  logicalRegionId?: string;
  appName?: string;
  resourceGroupId?: string;
  logicalRegionIdFilter?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      logicalRegionId: 'LogicalRegionId',
      appName: 'AppName',
      resourceGroupId: 'ResourceGroupId',
      logicalRegionIdFilter: 'LogicalRegionIdFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      logicalRegionId: 'string',
      appName: 'string',
      resourceGroupId: 'string',
      logicalRegionIdFilter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  applicationList?: ListApplicationResponseBodyApplicationList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      applicationList: 'ApplicationList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      applicationList: ListApplicationResponseBodyApplicationList,
      code: 'number',
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

export class ListApplicationEcuResponseBody extends $tea.Model {
  ecuInfoList?: ListApplicationEcuResponseBodyEcuInfoList;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      ecuInfoList: 'EcuInfoList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuInfoList: ListApplicationEcuResponseBodyEcuInfoList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  authorityList?: ListAuthorityResponseBodyAuthorityList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      authorityList: 'AuthorityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      authorityList: ListAuthorityResponseBodyAuthorityList,
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
  message?: string;
  requestId?: string;
  buildPackList?: ListBuildPackResponseBodyBuildPackList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      buildPackList: 'BuildPackList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      buildPackList: ListBuildPackResponseBodyBuildPackList,
      code: 'number',
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

export class ListChildrenStacksRequest extends $tea.Model {
  stackId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChildrenStacksResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListChildrenStacksResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListChildrenStacksResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChildrenStacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChildrenStacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChildrenStacksResponseBody,
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: ListClusterResponseBodyClusterList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  pageSize?: number;
  ecsList?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      ecsList: 'EcsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      ecsList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterMembersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  clusterMemberPage?: ListClusterMembersResponseBodyClusterMemberPage;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      clusterMemberPage: 'ClusterMemberPage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      clusterMemberPage: ListClusterMembersResponseBodyClusterMemberPage,
      code: 'number',
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
  message?: string;
  componentList?: ListComponentsResponseBodyComponentList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      componentList: 'ComponentList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      componentList: ListComponentsResponseBodyComponentList,
      code: 'number',
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

export class ListConfigCentersRequest extends $tea.Model {
  dataIdPattern?: string;
  group?: string;
  logicalRegionId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      dataIdPattern: 'DataIdPattern',
      group: 'Group',
      logicalRegionId: 'LogicalRegionId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIdPattern: 'string',
      group: 'string',
      logicalRegionId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigCentersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configCentersList?: ListConfigCentersResponseBodyConfigCentersList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configCentersList: 'ConfigCentersList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configCentersList: ListConfigCentersResponseBodyConfigCentersList,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigCentersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigCentersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigCentersResponseBody,
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
  message?: string;
  requestId?: string;
  consumedServicesList?: ListConsumedServicesResponseBodyConsumedServicesList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      consumedServicesList: 'ConsumedServicesList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      consumedServicesList: ListConsumedServicesResponseBodyConsumedServicesList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  instanceList?: ListConvertableEcuResponseBodyInstanceList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      instanceList: 'InstanceList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      instanceList: ListConvertableEcuResponseBodyInstanceList,
      code: 'number',
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

export class ListCSBGatewayRequest extends $tea.Model {
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

export class ListCSBGatewayResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListCSBGatewayResponseBodyData[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListCSBGatewayResponseBodyData },
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCSBGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCSBGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCSBGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsRequest extends $tea.Model {
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

export class ListDegradeControlsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  flowControlsMap?: ListDegradeControlsResponseBodyFlowControlsMap;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      flowControlsMap: 'FlowControlsMap',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      flowControlsMap: ListDegradeControlsResponseBodyFlowControlsMap,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDegradeControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDegradeControlsResponseBody,
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
  deployGroupList?: ListDeployGroupResponseBodyDeployGroupList;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      deployGroupList: 'DeployGroupList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployGroupList: ListDeployGroupResponseBodyDeployGroupList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  ecsEntityList?: ListEcsNotInClusterResponseBodyEcsEntityList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      ecsEntityList: 'EcsEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      ecsEntityList: ListEcsNotInClusterResponseBodyEcsEntityList,
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
  logicalRegionId?: string;
  act?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      act: 'Act',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      act: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  ecuEntityList?: ListEcuByRegionResponseBodyEcuEntityList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      ecuEntityList: 'EcuEntityList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      ecuEntityList: ListEcuByRegionResponseBodyEcuEntityList,
      code: 'number',
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

export class ListFlowControlsRequest extends $tea.Model {
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

export class ListFlowControlsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  flowControlsMap?: ListFlowControlsResponseBodyFlowControlsMap;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      flowControlsMap: 'FlowControlsMap',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      flowControlsMap: ListFlowControlsResponseBodyFlowControlsMap,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowControlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowControlsResponseBody,
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
  packageVersionList?: ListHistoryDeployVersionResponseBodyPackageVersionList;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      packageVersionList: 'PackageVersionList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersionList: ListHistoryDeployVersionResponseBodyPackageVersionList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class ListK8sIngressRulesRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  ingressConfigs?: ListK8sIngressRulesResponseBodyIngressConfigs[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      ingressConfigs: 'IngressConfigs',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      ingressConfigs: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyIngressConfigs },
      code: 'number',
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
  message?: string;
  requestId?: string;
  serviceMethodList?: ListMethodsResponseBodyServiceMethodList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      serviceMethodList: 'ServiceMethodList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      serviceMethodList: ListMethodsResponseBodyServiceMethodList,
      code: 'number',
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

export class ListOperationLogsRequest extends $tea.Model {
  appId?: string;
  beginTime?: number;
  endTime?: number;
  userId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      userId: 'UserId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      beginTime: 'number',
      endTime: 'number',
      userId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationLogsResponseBody extends $tea.Model {
  logList?: ListOperationLogsResponseBodyLogList[];
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  totalSize?: number;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      totalSize: 'TotalSize',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': ListOperationLogsResponseBodyLogList },
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      totalSize: 'number',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOperationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOperationLogsResponseBody,
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
  message?: string;
  requestId?: string;
  publishedServicesList?: ListPublishedServicesResponseBodyPublishedServicesList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      publishedServicesList: 'PublishedServicesList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      publishedServicesList: ListPublishedServicesResponseBodyPublishedServicesList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderList?: ListRecentChangeOrderResponseBodyChangeOrderList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderList: 'ChangeOrderList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderList: ListRecentChangeOrderResponseBodyChangeOrderList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  roleList?: ListRoleResponseBodyRoleList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      roleList: ListRoleResponseBodyRoleList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: ListRootStacksResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListRootStacksResponseBodyData,
      code: 'number',
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
  logicalRegionId?: string;
  clusterId?: string;
  appId?: string;
  groupId?: string;
  cpu?: number;
  mem?: number;
  instanceNum?: number;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      clusterId: 'ClusterId',
      appId: 'AppId',
      groupId: 'GroupId',
      cpu: 'Cpu',
      mem: 'Mem',
      instanceNum: 'InstanceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      clusterId: 'string',
      appId: 'string',
      groupId: 'string',
      cpu: 'number',
      mem: 'number',
      instanceNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBody extends $tea.Model {
  ecuInfoList?: ListScaleOutEcuResponseBodyEcuInfoList;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      ecuInfoList: 'EcuInfoList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuInfoList: ListScaleOutEcuResponseBodyEcuInfoList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  serviceGroupsList?: ListServiceGroupsResponseBodyServiceGroupsList;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      serviceGroupsList: 'ServiceGroupsList',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupsList: ListServiceGroupsResponseBodyServiceGroupsList,
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  slbList?: ListSlbResponseBodySlbList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      slbList: 'SlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class ListStatusRequest extends $tea.Model {
  region?: string;
  namespaceId?: string;
  tenantId?: string;
  source?: string;
  accountId?: string;
  appId?: string;
  ip?: string;
  podName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      namespaceId: 'NamespaceId',
      tenantId: 'TenantId',
      source: 'Source',
      accountId: 'AccountId',
      appId: 'AppId',
      ip: 'Ip',
      podName: 'PodName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      namespaceId: 'string',
      tenantId: 'string',
      source: 'string',
      accountId: 'string',
      appId: 'string',
      ip: 'string',
      podName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListStatusResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListStatusResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  subAccountList?: ListSubAccountResponseBodySubAccountList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      subAccountList: 'SubAccountList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      subAccountList: ListSubAccountResponseBodySubAccountList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: ListSwimmingLaneResponseBodyData[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyData },
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupRequest extends $tea.Model {
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

export class ListSwimmingLaneGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListSwimmingLaneGroupResponseBodyData[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyData },
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSwimmingLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceIds?: string;
  tags?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceIds: 'string',
      tags: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
      code: 'number',
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
  message?: string;
  requestId?: string;
  userDefineRegionList?: ListUserDefineRegionResponseBodyUserDefineRegionList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionList: 'UserDefineRegionList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      userDefineRegionList: ListUserDefineRegionResponseBodyUserDefineRegionList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  vpcList?: ListVpcResponseBodyVpcList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      vpcList: 'VpcList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      vpcList: ListVpcResponseBodyVpcList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  appId?: string;
  groupId?: string;
  inCondition?: string;
  inEnable?: boolean;
  inCpu?: number;
  inDuration?: number;
  inInstanceNum?: number;
  inLoad?: number;
  inRT?: number;
  inStep?: number;
  outCondition?: string;
  outCPU?: number;
  outDuration?: number;
  outEnable?: boolean;
  outInstanceNum?: number;
  outLoad?: number;
  outRT?: number;
  outStep?: number;
  resourceFrom?: string;
  multiAzPolicy?: string;
  vpcId?: string;
  vSwitchIds?: string;
  scalingPolicy?: string;
  templateInstanceId?: string;
  templateInstanceName?: string;
  password?: string;
  keyPairName?: string;
  acceptEULA?: boolean;
  templateId?: string;
  templateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      inCondition: 'InCondition',
      inEnable: 'InEnable',
      inCpu: 'InCpu',
      inDuration: 'InDuration',
      inInstanceNum: 'InInstanceNum',
      inLoad: 'InLoad',
      inRT: 'InRT',
      inStep: 'InStep',
      outCondition: 'OutCondition',
      outCPU: 'OutCPU',
      outDuration: 'OutDuration',
      outEnable: 'OutEnable',
      outInstanceNum: 'OutInstanceNum',
      outLoad: 'OutLoad',
      outRT: 'OutRT',
      outStep: 'OutStep',
      resourceFrom: 'ResourceFrom',
      multiAzPolicy: 'MultiAzPolicy',
      vpcId: 'VpcId',
      vSwitchIds: 'VSwitchIds',
      scalingPolicy: 'ScalingPolicy',
      templateInstanceId: 'TemplateInstanceId',
      templateInstanceName: 'TemplateInstanceName',
      password: 'Password',
      keyPairName: 'KeyPairName',
      acceptEULA: 'AcceptEULA',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      inCondition: 'string',
      inEnable: 'boolean',
      inCpu: 'number',
      inDuration: 'number',
      inInstanceNum: 'number',
      inLoad: 'number',
      inRT: 'number',
      inStep: 'number',
      outCondition: 'string',
      outCPU: 'number',
      outDuration: 'number',
      outEnable: 'boolean',
      outInstanceNum: 'number',
      outLoad: 'number',
      outRT: 'number',
      outStep: 'number',
      resourceFrom: 'string',
      multiAzPolicy: 'string',
      vpcId: 'string',
      vSwitchIds: 'string',
      scalingPolicy: 'string',
      templateInstanceId: 'string',
      templateInstanceName: 'string',
      password: 'string',
      keyPairName: 'string',
      acceptEULA: 'boolean',
      templateId: 'string',
      templateVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  code?: number;
  message?: string;
  requestId?: string;
  appInfo?: QueryApplicationStatusResponseBodyAppInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      appInfo: QueryApplicationStatusResponseBodyAppInfo,
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

export class QueryConfigCenterRequest extends $tea.Model {
  dataId?: string;
  group?: string;
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      logicalRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigCenterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configCenterInfo?: QueryConfigCenterResponseBodyConfigCenterInfo;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configCenterInfo: 'configCenterInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configCenterInfo: QueryConfigCenterResponseBodyConfigCenterInfo,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigCenterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConfigCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConfigCenterResponseBody,
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
  eccInfo?: QueryEccInfoResponseBodyEccInfo;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      eccInfo: 'EccInfo',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eccInfo: QueryEccInfoResponseBodyEccInfo,
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class QueryK8sClusterLogProjectInfoRequest extends $tea.Model {
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

export class QueryK8sClusterLogProjectInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  projectInfo?: QueryK8sClusterLogProjectInfoResponseBodyProjectInfo;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      projectInfo: 'ProjectInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      projectInfo: QueryK8sClusterLogProjectInfoResponseBodyProjectInfo,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryK8sClusterLogProjectInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryK8sClusterLogProjectInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryK8sClusterLogProjectInfoResponseBody,
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
  message?: string;
  requestId?: string;
  ecuEntityList?: QueryMigrateEcuListResponseBodyEcuEntityList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      ecuEntityList: 'EcuEntityList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      ecuEntityList: QueryMigrateEcuListResponseBodyEcuEntityList,
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  regionEntityList?: QueryMigrateRegionListResponseBodyRegionEntityList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      regionEntityList: 'RegionEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      regionEntityList: QueryMigrateRegionListResponseBodyRegionEntityList,
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

export class QueryMonitorInfoRequest extends $tea.Model {
  start?: number;
  end?: number;
  metric?: string;
  tags?: string;
  aggregator?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      metric: 'Metric',
      tags: 'Tags',
      aggregator: 'Aggregator',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
      metric: 'string',
      tags: 'string',
      aggregator: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorInfoResponseBody extends $tea.Model {
  monitorInfo?: string;
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      monitorInfo: 'MonitorInfo',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorInfo: 'string',
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonitorInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonitorInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  regionConfig?: QueryRegionConfigResponseBodyRegionConfig;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      regionConfig: 'RegionConfig',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      regionConfig: QueryRegionConfigResponseBodyRegionConfig,
      code: 'number',
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

export class QueryServiceTimeConfigRequest extends $tea.Model {
  region?: string;
  serviceType?: string;
  appId?: string;
  serviceName?: string;
  serviceVersion?: string;
  serviceGroup?: string;
  pageSize?: number;
  pageNumber?: number;
  namespace?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      serviceType: 'ServiceType',
      appId: 'AppId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      serviceGroup: 'ServiceGroup',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      namespace: 'Namespace',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      serviceType: 'string',
      appId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      serviceGroup: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      namespace: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceTimeConfigResponseBody extends $tea.Model {
  message?: string;
  data?: QueryServiceTimeConfigResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: QueryServiceTimeConfigResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceTimeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServiceTimeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServiceTimeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListRequest extends $tea.Model {
  appId?: string;
  type?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  totalSize?: number;
  code?: number;
  result?: QuerySlsLogStoreListResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      totalSize: 'number',
      code: 'number',
      result: { 'type': 'array', 'itemType': QuerySlsLogStoreListResponseBodyResult },
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
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: RemoveMockRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: RemoveMockRuleResponseBodyData,
      code: 'string',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  historyVersion?: string;
  groupId?: string;
  batch?: number;
  batchWaitTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      historyVersion: 'HistoryVersion',
      groupId: 'GroupId',
      batch: 'Batch',
      batchWaitTime: 'BatchWaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      historyVersion: 'string',
      groupId: 'string',
      batch: 'number',
      batchWaitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  traceId?: string;
  data?: RollbackChangeOrderResponseBodyData;
  errorCode?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
      data: 'Data',
      errorCode: 'ErrorCode',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      traceId: 'string',
      data: RollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      code: 'number',
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
  message?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  ecuInfo?: string;
  deployGroup?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ecuInfo: 'EcuInfo',
      deployGroup: 'DeployGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ecuInfo: 'string',
      deployGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  groupId?: string;
  scalingNum?: number;
  templateId?: string;
  templateVersion?: string;
  scalingPolicy?: string;
  templateInstanceId?: string;
  clusterId?: string;
  instanceChargeType?: string;
  instanceChargePeriodUnit?: string;
  instanceChargePeriod?: number;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      scalingNum: 'ScalingNum',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      scalingPolicy: 'ScalingPolicy',
      templateInstanceId: 'TemplateInstanceId',
      clusterId: 'ClusterId',
      instanceChargeType: 'InstanceChargeType',
      instanceChargePeriodUnit: 'InstanceChargePeriodUnit',
      instanceChargePeriod: 'InstanceChargePeriod',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      scalingNum: 'number',
      templateId: 'string',
      templateVersion: 'string',
      scalingPolicy: 'string',
      templateInstanceId: 'string',
      clusterId: 'string',
      instanceChargeType: 'string',
      instanceChargePeriodUnit: 'string',
      instanceChargePeriod: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleoutApplicationWithNewInstancesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  instanceIds?: string[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      instanceIds: 'InstanceIds',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  replicas?: number;
  timeout?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      replicas: 'Replicas',
      timeout: 'Timeout',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicas: 'number',
      timeout: 'number',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartK8sApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      advancedMonitoringEnabled: 'AdvancedMonitoringEnabled',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedMonitoringEnabled: 'boolean',
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  type?: string;
  resourceIds?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      resourceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeResourceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  resourceType?: string;
  resourceIds?: string;
  tags?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceIds: 'string',
      tags: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  targetClusterId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      targetClusterId: 'TargetClusterId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      targetClusterId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClusterMemberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  type?: string;
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      type: 'Type',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      type: 'string',
      slbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindK8sSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  slbId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      slbId: 'SlbId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      slbId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  resourceRegionId?: string;
  resourceType?: string;
  resourceIds?: string;
  tagKeys?: string;
  deleteAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      tagKeys: 'TagKeys',
      deleteAll: 'DeleteAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRegionId: 'string',
      resourceType: 'string',
      resourceIds: 'string',
      tagKeys: 'string',
      deleteAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  name?: string;
  telephone?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      telephone: 'Telephone',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      telephone: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  applcation?: UpdateApplicationBaseInfoResponseBodyApplcation;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      applcation: 'Applcation',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      applcation: UpdateApplicationBaseInfoResponseBodyApplcation,
      code: 'number',
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
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  groupId?: string;
  contextPath?: string;
  httpPort?: number;
  maxThreads?: number;
  URIEncoding?: string;
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
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

export class UpdateContainerConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  containerConfiguration?: UpdateContainerConfigurationResponseBodyContainerConfiguration;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      containerConfiguration: 'ContainerConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      containerConfiguration: UpdateContainerConfigurationResponseBodyContainerConfiguration,
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

export class UpdateDegradeControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  duration?: number;
  methodName?: string;
  rtThreshold?: number;
  serviceName?: string;
  urlVar?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
      duration: 'Duration',
      methodName: 'MethodName',
      rtThreshold: 'RtThreshold',
      serviceName: 'ServiceName',
      urlVar: 'UrlVar',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
      duration: 'number',
      methodName: 'string',
      rtThreshold: 'number',
      serviceName: 'string',
      urlVar: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDegradeControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDegradeControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDegradeControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDegradeControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowControlRequest extends $tea.Model {
  appId?: string;
  ruleId?: string;
  consumerAppId?: string;
  granularity?: string;
  methodName?: string;
  ruleType?: string;
  serviceName?: string;
  strategy?: string;
  threshold?: number;
  urlVar?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ruleId: 'RuleId',
      consumerAppId: 'ConsumerAppId',
      granularity: 'Granularity',
      methodName: 'MethodName',
      ruleType: 'RuleType',
      serviceName: 'ServiceName',
      strategy: 'Strategy',
      threshold: 'Threshold',
      urlVar: 'UrlVar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ruleId: 'string',
      consumerAppId: 'string',
      granularity: 'string',
      methodName: 'string',
      ruleType: 'string',
      serviceName: 'string',
      strategy: 'string',
      threshold: 'number',
      urlVar: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowControlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlowControlResponseBody,
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
  message?: string;
  requestId?: string;
  healthCheckURL?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      healthCheckURL: 'HealthCheckURL',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      healthCheckURL: 'string',
      code: 'number',
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
  hooksConfiguration?: UpdateHookConfigurationResponseBodyHooksConfiguration[];
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      hooksConfiguration: 'HooksConfiguration',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooksConfiguration: { 'type': 'array', 'itemType': UpdateHookConfigurationResponseBodyHooksConfiguration },
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  options?: string;
  minHeapSize?: number;
  maxPermSize?: number;
  maxHeapSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      options: 'Options',
      minHeapSize: 'MinHeapSize',
      maxPermSize: 'MaxPermSize',
      maxHeapSize: 'MaxHeapSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      options: 'string',
      minHeapSize: 'number',
      maxPermSize: 'number',
      maxHeapSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  jvmConfiguration?: UpdateJvmConfigurationResponseBodyJvmConfiguration;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      jvmConfiguration: 'JvmConfiguration',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      jvmConfiguration: UpdateJvmConfigurationResponseBodyJvmConfiguration,
      code: 'number',
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
  owner?: string;
  phoneNumber?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      owner: 'Owner',
      phoneNumber: 'PhoneNumber',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      owner: 'string',
      phoneNumber: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationBaseInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  memoryLimit?: string;
  mcpuLimit?: string;
  cpuRequest?: string;
  mcpuRequest?: string;
  memoryRequest?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      cpuLimit: 'CpuLimit',
      memoryLimit: 'MemoryLimit',
      mcpuLimit: 'McpuLimit',
      cpuRequest: 'CpuRequest',
      mcpuRequest: 'McpuRequest',
      memoryRequest: 'MemoryRequest',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      cpuLimit: 'string',
      memoryLimit: 'string',
      mcpuLimit: 'string',
      cpuRequest: 'string',
      mcpuRequest: 'string',
      memoryRequest: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sApplicationConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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

export class UpdateK8sIngressRuleRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  name?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      name: 'Name',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      name: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleResponseBody extends $tea.Model {
  message?: string;
  changeOrderIds?: UpdateK8sIngressRuleResponseBodyChangeOrderIds[];
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      changeOrderIds: 'ChangeOrderIds',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      changeOrderIds: { 'type': 'array', 'itemType': UpdateK8sIngressRuleResponseBodyChangeOrderIds },
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class UpdateK8sServiceRequest extends $tea.Model {
  appId?: string;
  name?: string;
  type?: string;
  servicePorts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      type: 'Type',
      servicePorts: 'ServicePorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      type: 'string',
      servicePorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  type?: string;
  slbProtocol?: string;
  targetPort?: string;
  port?: string;
  servicePortInfos?: string;
  specification?: string;
  scheduler?: string;
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      type: 'Type',
      slbProtocol: 'SlbProtocol',
      targetPort: 'TargetPort',
      port: 'Port',
      servicePortInfos: 'ServicePortInfos',
      specification: 'Specification',
      scheduler: 'Scheduler',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      type: 'string',
      slbProtocol: 'string',
      targetPort: 'string',
      port: 'string',
      servicePortInfos: 'string',
      specification: 'string',
      scheduler: 'string',
      slbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sSlbResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  changeOrderId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      changeOrderId: 'string',
      code: 'number',
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
  name?: string;
  region?: string;
  extraJson?: string;
  scMockItemJson?: string;
  dubboMockItemJson?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      extraJson: 'ExtraJson',
      scMockItemJson: 'ScMockItemJson',
      dubboMockItemJson: 'DubboMockItemJson',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      extraJson: 'string',
      scMockItemJson: 'string',
      dubboMockItemJson: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: UpdateMockRuleResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: UpdateMockRuleResponseBodyData,
      code: 'string',
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
  roleId?: number;
  actionData?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      actionData: 'ActionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      actionData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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
  message?: string;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
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

export class UpdateSwimmingLaneRequest extends $tea.Model {
  laneId?: number;
  name?: string;
  enableRules?: boolean;
  appInfos?: string;
  entryRules?: string;
  static names(): { [key: string]: string } {
    return {
      laneId: 'LaneId',
      name: 'Name',
      enableRules: 'EnableRules',
      appInfos: 'AppInfos',
      entryRules: 'EntryRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laneId: 'number',
      name: 'string',
      enableRules: 'boolean',
      appInfos: 'string',
      entryRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateSwimmingLaneResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateSwimmingLaneResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupRequest extends $tea.Model {
  groupId?: number;
  name?: string;
  entryApp?: string;
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      name: 'Name',
      entryApp: 'EntryApp',
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      name: 'string',
      entryApp: 'string',
      appIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateSwimmingLaneGroupResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateSwimmingLaneGroupResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSwimmingLaneGroupResponseBody,
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
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceTimeConfigResponseBodyData extends $tea.Model {
  timeout?: string;
  consumerAppName?: string;
  path?: string;
  consumerAppId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      consumerAppName: 'ConsumerAppName',
      path: 'Path',
      consumerAppId: 'ConsumerAppId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      consumerAppName: 'string',
      path: 'string',
      consumerAppId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBodyData extends $tea.Model {
  VServerGroupId?: string;
  slbId?: string;
  extSlbIp?: string;
  slbPort?: number;
  extSlbName?: string;
  extSlbId?: string;
  extVServerGroupId?: string;
  slbName?: string;
  slbIp?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      slbId: 'SlbId',
      extSlbIp: 'ExtSlbIp',
      slbPort: 'SlbPort',
      extSlbName: 'ExtSlbName',
      extSlbId: 'ExtSlbId',
      extVServerGroupId: 'ExtVServerGroupId',
      slbName: 'SlbName',
      slbIp: 'SlbIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      slbId: 'string',
      extSlbIp: 'string',
      slbPort: 'number',
      extSlbName: 'string',
      extSlbId: 'string',
      extVServerGroupId: 'string',
      slbName: 'string',
      slbIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateK8sIngressRuleResponseBodyChangeOrderIds extends $tea.Model {
  changeOrderId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteK8sIngressRuleResponseBodyChangeOrderIds extends $tea.Model {
  changeOrderId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceTimeConfigResponseBodyData extends $tea.Model {
  timeout?: string;
  consumerAppName?: string;
  path?: string;
  consumerAppId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      consumerAppName: 'ConsumerAppName',
      path: 'Path',
      consumerAppId: 'ConsumerAppId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      consumerAppName: 'string',
      path: 'string',
      consumerAppId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionResponseBodyRegionDefine extends $tea.Model {
  belongRegion?: string;
  regionName?: string;
  description?: string;
  userId?: string;
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      regionName: 'RegionName',
      description: 'Description',
      userId: 'UserId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      regionName: 'string',
      description: 'string',
      userId: 'string',
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMockRuleResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMockRuleResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatusResponseBodyData extends $tea.Model {
  status?: string;
  podName?: string;
  namespaceId?: string;
  appId?: string;
  region?: string;
  ip?: string;
  accountId?: string;
  source?: string;
  id?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      podName: 'PodName',
      namespaceId: 'NamespaceId',
      appId: 'AppId',
      region: 'Region',
      ip: 'Ip',
      accountId: 'AccountId',
      source: 'Source',
      id: 'Id',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      podName: 'string',
      namespaceId: 'string',
      appId: 'string',
      region: 'string',
      ip: 'string',
      accountId: 'string',
      source: 'string',
      id: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResultDubboMockItems extends $tea.Model {
  methodName?: string;
  paramTypes?: string[];
  value?: string;
  oper?: string;
  executeCondition?: string;
  version?: string;
  exceptionClassName?: string;
  serviceName?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      methodName: 'MethodName',
      paramTypes: 'ParamTypes',
      value: 'Value',
      oper: 'Oper',
      executeCondition: 'ExecuteCondition',
      version: 'Version',
      exceptionClassName: 'ExceptionClassName',
      serviceName: 'ServiceName',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodName: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
      oper: 'string',
      executeCondition: 'string',
      version: 'string',
      exceptionClassName: 'string',
      serviceName: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResultScMockItems extends $tea.Model {
  value?: string;
  oper?: string;
  executeCondition?: string;
  path?: string;
  method?: string;
  exceptionClassName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      oper: 'Oper',
      executeCondition: 'ExecuteCondition',
      path: 'Path',
      method: 'Method',
      exceptionClassName: 'ExceptionClassName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      oper: 'string',
      executeCondition: 'string',
      path: 'string',
      method: 'string',
      exceptionClassName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyDataResult extends $tea.Model {
  dubboMockItems?: GetAccountMockRuleResponseBodyDataResultDubboMockItems[];
  status?: number;
  consumerAppName?: string;
  consumerAppId?: string;
  gmtModified?: string;
  region?: string;
  scMockItems?: GetAccountMockRuleResponseBodyDataResultScMockItems[];
  gmtCreate?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      dubboMockItems: 'DubboMockItems',
      status: 'Status',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      gmtModified: 'GmtModified',
      region: 'Region',
      scMockItems: 'ScMockItems',
      gmtCreate: 'GmtCreate',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMockItems: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResultDubboMockItems },
      status: 'number',
      consumerAppName: 'string',
      consumerAppId: 'string',
      gmtModified: 'string',
      region: 'string',
      scMockItems: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResultScMockItems },
      gmtCreate: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMockRuleResponseBodyData extends $tea.Model {
  result?: GetAccountMockRuleResponseBodyDataResult[];
  totalSize?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      totalSize: 'TotalSize',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetAccountMockRuleResponseBodyDataResult },
      totalSize: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  extSlbIp?: string;
  owner?: string;
  slbPort?: number;
  nameSpace?: string;
  extSlbName?: string;
  createTime?: number;
  userId?: string;
  port?: number;
  runningInstanceCount?: number;
  slbIp?: string;
  dockerize?: boolean;
  instanceCount?: number;
  description?: string;
  appId?: string;
  slbInfo?: string;
  memory?: number;
  name?: string;
  clusterId?: string;
  healthCheckUrl?: string;
  slbId?: string;
  applicationType?: string;
  extSlbId?: string;
  buildPackageId?: number;
  regionId?: string;
  email?: string;
  cpu?: number;
  clusterType?: string;
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      extSlbIp: 'ExtSlbIp',
      owner: 'Owner',
      slbPort: 'SlbPort',
      nameSpace: 'NameSpace',
      extSlbName: 'ExtSlbName',
      createTime: 'CreateTime',
      userId: 'UserId',
      port: 'Port',
      runningInstanceCount: 'RunningInstanceCount',
      slbIp: 'SlbIp',
      dockerize: 'Dockerize',
      instanceCount: 'InstanceCount',
      description: 'Description',
      appId: 'AppId',
      slbInfo: 'SlbInfo',
      memory: 'Memory',
      name: 'Name',
      clusterId: 'ClusterId',
      healthCheckUrl: 'HealthCheckUrl',
      slbId: 'SlbId',
      applicationType: 'ApplicationType',
      extSlbId: 'ExtSlbId',
      buildPackageId: 'BuildPackageId',
      regionId: 'RegionId',
      email: 'Email',
      cpu: 'Cpu',
      clusterType: 'ClusterType',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSlbIp: 'string',
      owner: 'string',
      slbPort: 'number',
      nameSpace: 'string',
      extSlbName: 'string',
      createTime: 'number',
      userId: 'string',
      port: 'number',
      runningInstanceCount: 'number',
      slbIp: 'string',
      dockerize: 'boolean',
      instanceCount: 'number',
      description: 'string',
      appId: 'string',
      slbInfo: 'string',
      memory: 'number',
      name: 'string',
      clusterId: 'string',
      healthCheckUrl: 'string',
      slbId: 'string',
      applicationType: 'string',
      extSlbId: 'string',
      buildPackageId: 'number',
      regionId: 'string',
      email: 'string',
      cpu: 'number',
      clusterType: 'string',
      slbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl extends $tea.Model {
  tips?: string;
  routes?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      tips: 'Tips',
      routes: 'Routes',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tips: 'string',
      routes: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO extends $tea.Model {
  taskErrorIgnorance?: number;
  showManualIgnorance?: boolean;
  taskStatus?: string;
  taskName?: string;
  taskMessage?: string;
  taskErrorCode?: string;
  taskId?: string;
  taskErrorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      taskErrorIgnorance: 'TaskErrorIgnorance',
      showManualIgnorance: 'ShowManualIgnorance',
      taskStatus: 'TaskStatus',
      taskName: 'TaskName',
      taskMessage: 'TaskMessage',
      taskErrorCode: 'TaskErrorCode',
      taskId: 'TaskId',
      taskErrorMessage: 'TaskErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskErrorIgnorance: 'number',
      showManualIgnorance: 'boolean',
      taskStatus: 'string',
      taskName: 'string',
      taskMessage: 'string',
      taskErrorCode: 'string',
      taskId: 'string',
      taskErrorMessage: 'string',
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
  stageStatus?: number;
  taskList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageStatus: 'StageStatus',
      taskList: 'TaskList',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageStatus: 'number',
      taskList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList,
      stageName: 'string',
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

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage extends $tea.Model {
  stageId?: string;
  status?: number;
  message?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      status: 'Status',
      message: 'Message',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      status: 'number',
      message: 'string',
      stageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO extends $tea.Model {
  stageId?: string;
  status?: number;
  startTime?: string;
  stageMessage?: string;
  finishTime?: string;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      status: 'Status',
      startTime: 'StartTime',
      stageMessage: 'StageMessage',
      finishTime: 'FinishTime',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      status: 'number',
      startTime: 'string',
      stageMessage: 'string',
      finishTime: 'string',
      stageName: 'string',
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
  status?: number;
  instanceIp?: string;
  podName?: string;
  instanceStageDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList;
  instanceName?: string;
  podStatus?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceIp: 'InstanceIp',
      podName: 'PodName',
      instanceStageDTOList: 'InstanceStageDTOList',
      instanceName: 'InstanceName',
      podStatus: 'PodStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      instanceIp: 'string',
      podName: 'string',
      instanceStageDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList,
      instanceName: 'string',
      podStatus: 'string',
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

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO extends $tea.Model {
  serviceStage?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage;
  instanceDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList;
  static names(): { [key: string]: string } {
    return {
      serviceStage: 'ServiceStage',
      instanceDTOList: 'InstanceDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStage: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage,
      instanceDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO extends $tea.Model {
  stageId?: string;
  status?: number;
  stageResultDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO;
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      status: 'Status',
      stageResultDTO: 'StageResultDTO',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      status: 'number',
      stageResultDTO: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO,
      stageName: 'string',
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
  startTime?: string;
  updateTime?: string;
  pipelineStatus?: number;
  stageDetailList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList;
  pipelineName?: string;
  stageList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList;
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
      pipelineStatus: 'PipelineStatus',
      stageDetailList: 'StageDetailList',
      pipelineName: 'PipelineName',
      stageList: 'StageList',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      updateTime: 'string',
      pipelineStatus: 'number',
      stageDetailList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList,
      pipelineName: 'string',
      stageList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList,
      pipelineId: 'string',
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

export class GetChangeOrderInfoResponseBodyChangeOrderInfo extends $tea.Model {
  status?: number;
  createTime?: string;
  changeOrderDescription?: string;
  batchCount?: number;
  createUserId?: string;
  supportRollback?: boolean;
  desc?: string;
  changeOrderId?: string;
  batchType?: string;
  coType?: string;
  trafficControl?: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl;
  pipelineInfoList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      changeOrderDescription: 'ChangeOrderDescription',
      batchCount: 'BatchCount',
      createUserId: 'CreateUserId',
      supportRollback: 'SupportRollback',
      desc: 'Desc',
      changeOrderId: 'ChangeOrderId',
      batchType: 'BatchType',
      coType: 'CoType',
      trafficControl: 'TrafficControl',
      pipelineInfoList: 'PipelineInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      createTime: 'string',
      changeOrderDescription: 'string',
      batchCount: 'number',
      createUserId: 'string',
      supportRollback: 'boolean',
      desc: 'string',
      changeOrderId: 'string',
      batchType: 'string',
      coType: 'string',
      trafficControl: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl,
      pipelineInfoList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyCluster extends $tea.Model {
  oversoldFactor?: number;
  vpcId?: string;
  updateTime?: number;
  memUsed?: number;
  iaasProvider?: string;
  createTime?: number;
  cpuUsed?: number;
  mem?: number;
  regionId?: string;
  cpu?: number;
  csClusterId?: string;
  description?: string;
  networkMode?: number;
  clusterType?: number;
  clusterName?: string;
  nodeNum?: number;
  clusterImportStatus?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldFactor: 'OversoldFactor',
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      memUsed: 'MemUsed',
      iaasProvider: 'IaasProvider',
      createTime: 'CreateTime',
      cpuUsed: 'CpuUsed',
      mem: 'Mem',
      regionId: 'RegionId',
      cpu: 'Cpu',
      csClusterId: 'CsClusterId',
      description: 'Description',
      networkMode: 'NetworkMode',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      nodeNum: 'NodeNum',
      clusterImportStatus: 'ClusterImportStatus',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldFactor: 'number',
      vpcId: 'string',
      updateTime: 'number',
      memUsed: 'number',
      iaasProvider: 'string',
      createTime: 'number',
      cpuUsed: 'number',
      mem: 'number',
      regionId: 'string',
      cpu: 'number',
      csClusterId: 'string',
      description: 'string',
      networkMode: 'number',
      clusterType: 'number',
      clusterName: 'string',
      nodeNum: 'number',
      clusterImportStatus: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationResponseBodyContainerConfiguration extends $tea.Model {
  contextPath?: string;
  URIEncoding?: string;
  httpPort?: number;
  useBodyEncoding?: boolean;
  maxThreads?: number;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      URIEncoding: 'URIEncoding',
      httpPort: 'HttpPort',
      useBodyEncoding: 'UseBodyEncoding',
      maxThreads: 'MaxThreads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      URIEncoding: 'string',
      httpPort: 'number',
      useBodyEncoding: 'boolean',
      maxThreads: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJvmConfigurationResponseBodyJvmConfiguration extends $tea.Model {
  maxPermSize?: number;
  maxHeapSize?: number;
  options?: string;
  minHeapSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxPermSize: 'MaxPermSize',
      maxHeapSize: 'MaxHeapSize',
      options: 'Options',
      minHeapSize: 'MinHeapSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxPermSize: 'number',
      maxHeapSize: 'number',
      options: 'string',
      minHeapSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationConf extends $tea.Model {
  postStart?: string;
  readiness?: string;
  ahasEnabled?: boolean;
  k8sCmdArgs?: string;
  liveness?: string;
  deployAcrossNodes?: string;
  k8sCmd?: string;
  preStop?: string;
  jarStartArgs?: string;
  deployAcrossZones?: string;
  k8sNasInfo?: string;
  jarStartOptions?: string;
  runtimeClassName?: string;
  k8sLocalvolumeInfo?: string;
  k8sVolumeInfo?: string;
  static names(): { [key: string]: string } {
    return {
      postStart: 'PostStart',
      readiness: 'Readiness',
      ahasEnabled: 'AhasEnabled',
      k8sCmdArgs: 'K8sCmdArgs',
      liveness: 'Liveness',
      deployAcrossNodes: 'DeployAcrossNodes',
      k8sCmd: 'K8sCmd',
      preStop: 'PreStop',
      jarStartArgs: 'JarStartArgs',
      deployAcrossZones: 'DeployAcrossZones',
      k8sNasInfo: 'K8sNasInfo',
      jarStartOptions: 'JarStartOptions',
      runtimeClassName: 'RuntimeClassName',
      k8sLocalvolumeInfo: 'K8sLocalvolumeInfo',
      k8sVolumeInfo: 'K8sVolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postStart: 'string',
      readiness: 'string',
      ahasEnabled: 'boolean',
      k8sCmdArgs: 'string',
      liveness: 'string',
      deployAcrossNodes: 'string',
      k8sCmd: 'string',
      preStop: 'string',
      jarStartArgs: 'string',
      deployAcrossZones: 'string',
      k8sNasInfo: 'string',
      jarStartOptions: 'string',
      runtimeClassName: 'string',
      k8sLocalvolumeInfo: 'string',
      k8sVolumeInfo: 'string',
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
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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
  instancesBeforeScaling?: number;
  deployType?: string;
  applicationName?: string;
  applicationType?: string;
  instances?: number;
  cmdArgs?: GetK8sApplicationResponseBodyApplcationAppCmdArgs;
  cmd?: string;
  buildpackId?: number;
  tomcatVersion?: string;
  csClusterId?: string;
  appId?: string;
  edasContainerVersion?: string;
  clusterId?: string;
  envList?: GetK8sApplicationResponseBodyApplcationAppEnvList;
  static names(): { [key: string]: string } {
    return {
      instancesBeforeScaling: 'InstancesBeforeScaling',
      deployType: 'DeployType',
      applicationName: 'ApplicationName',
      applicationType: 'ApplicationType',
      instances: 'Instances',
      cmdArgs: 'CmdArgs',
      cmd: 'Cmd',
      buildpackId: 'BuildpackId',
      tomcatVersion: 'TomcatVersion',
      csClusterId: 'CsClusterId',
      appId: 'AppId',
      edasContainerVersion: 'EdasContainerVersion',
      clusterId: 'ClusterId',
      envList: 'EnvList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesBeforeScaling: 'number',
      deployType: 'string',
      applicationName: 'string',
      applicationType: 'string',
      instances: 'number',
      cmdArgs: GetK8sApplicationResponseBodyApplcationAppCmdArgs,
      cmd: 'string',
      buildpackId: 'number',
      tomcatVersion: 'string',
      csClusterId: 'string',
      appId: 'string',
      edasContainerVersion: 'string',
      clusterId: 'string',
      envList: GetK8sApplicationResponseBodyApplcationAppEnvList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents extends $tea.Model {
  componentKey?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      componentKey: 'ComponentKey',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentKey: 'string',
      componentId: 'string',
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
  repoId?: string;
  imageUrl?: string;
  repoOriginType?: string;
  tag?: string;
  repoName?: string;
  repoNamespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      repoId: 'RepoId',
      imageUrl: 'ImageUrl',
      repoOriginType: 'RepoOriginType',
      tag: 'Tag',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoId: 'string',
      imageUrl: 'string',
      repoOriginType: 'string',
      tag: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcation extends $tea.Model {
  conf?: GetK8sApplicationResponseBodyApplcationConf;
  appId?: string;
  app?: GetK8sApplicationResponseBodyApplcationApp;
  deployGroups?: GetK8sApplicationResponseBodyApplcationDeployGroups;
  imageInfo?: GetK8sApplicationResponseBodyApplcationImageInfo;
  static names(): { [key: string]: string } {
    return {
      conf: 'Conf',
      appId: 'AppId',
      app: 'App',
      deployGroups: 'DeployGroups',
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conf: GetK8sApplicationResponseBodyApplcationConf,
      appId: 'string',
      app: GetK8sApplicationResponseBodyApplcationApp,
      deployGroups: GetK8sApplicationResponseBodyApplcationDeployGroups,
      imageInfo: GetK8sApplicationResponseBodyApplcationImageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sClusterResponseBodyClusterPageClusterListCluster extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  subNetCidr?: string;
  mem?: number;
  regionId?: string;
  csClusterStatus?: string;
  cpu?: number;
  description?: string;
  csClusterId?: string;
  networkMode?: number;
  clusterType?: number;
  clusterStatus?: number;
  clusterName?: string;
  nodeNum?: number;
  clusterId?: string;
  clusterImportStatus?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      subNetCidr: 'SubNetCidr',
      mem: 'Mem',
      regionId: 'RegionId',
      csClusterStatus: 'CsClusterStatus',
      cpu: 'Cpu',
      description: 'Description',
      csClusterId: 'CsClusterId',
      networkMode: 'NetworkMode',
      clusterType: 'ClusterType',
      clusterStatus: 'ClusterStatus',
      clusterName: 'ClusterName',
      nodeNum: 'NodeNum',
      clusterId: 'ClusterId',
      clusterImportStatus: 'ClusterImportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      subNetCidr: 'string',
      mem: 'number',
      regionId: 'string',
      csClusterStatus: 'string',
      cpu: 'number',
      description: 'string',
      csClusterId: 'string',
      networkMode: 'number',
      clusterType: 'number',
      clusterStatus: 'number',
      clusterName: 'string',
      nodeNum: 'number',
      clusterId: 'string',
      clusterImportStatus: 'number',
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
  currentPage?: number;
  clusterList?: GetK8sClusterResponseBodyClusterPageClusterList;
  totalSize?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      clusterList: 'ClusterList',
      totalSize: 'TotalSize',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      clusterList: GetK8sClusterResponseBodyClusterPageClusterList,
      totalSize: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBodyServicesServicePorts extends $tea.Model {
  protocol?: string;
  targetPort?: string;
  nodePort?: number;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      targetPort: 'TargetPort',
      nodePort: 'NodePort',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      targetPort: 'string',
      nodePort: 'number',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBodyServices extends $tea.Model {
  type?: string;
  servicePorts?: GetK8sServicesResponseBodyServicesServicePorts[];
  name?: string;
  clusterIP?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      servicePorts: 'ServicePorts',
      name: 'Name',
      clusterIP: 'ClusterIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      servicePorts: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServicesServicePorts },
      name: 'string',
      clusterIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByConsumerAppIdResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByIdResponseBodyDataDubboMockItems extends $tea.Model {
  paramTypes?: string;
  methodName?: string;
  value?: string;
  oper?: string;
  exceptionMessage?: string;
  executeCondition?: string;
  version?: string;
  path?: string;
  exceptionClassName?: string;
  serviceName?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      paramTypes: 'ParamTypes',
      methodName: 'MethodName',
      value: 'Value',
      oper: 'Oper',
      exceptionMessage: 'ExceptionMessage',
      executeCondition: 'ExecuteCondition',
      version: 'Version',
      path: 'Path',
      exceptionClassName: 'ExceptionClassName',
      serviceName: 'ServiceName',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTypes: 'string',
      methodName: 'string',
      value: 'string',
      oper: 'string',
      exceptionMessage: 'string',
      executeCondition: 'string',
      version: 'string',
      path: 'string',
      exceptionClassName: 'string',
      serviceName: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByIdResponseBodyDataScMockItems extends $tea.Model {
  value?: string;
  oper?: string;
  executeCondition?: string;
  path?: string;
  method?: string;
  exceptionClassName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      oper: 'Oper',
      executeCondition: 'ExecuteCondition',
      path: 'Path',
      method: 'Method',
      exceptionClassName: 'ExceptionClassName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      oper: 'string',
      executeCondition: 'string',
      path: 'string',
      method: 'string',
      exceptionClassName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByIdResponseBodyData extends $tea.Model {
  dubboMockItems?: GetMockRuleByIdResponseBodyDataDubboMockItems[];
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  scMockItems?: GetMockRuleByIdResponseBodyDataScMockItems[];
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      dubboMockItems: 'DubboMockItems',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      scMockItems: 'ScMockItems',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMockItems: { 'type': 'array', 'itemType': GetMockRuleByIdResponseBodyDataDubboMockItems },
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      scMockItems: { 'type': 'array', 'itemType': GetMockRuleByIdResponseBodyDataScMockItems },
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMockRuleByProviderAppIdResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageStorageCredentialResponseBodyCredential extends $tea.Model {
  keyPrefix?: string;
  securityToken?: string;
  accessKeySecret?: string;
  expiration?: string;
  accessKeyId?: string;
  bucket?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPrefix: 'KeyPrefix',
      securityToken: 'SecurityToken',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      accessKeyId: 'AccessKeyId',
      bucket: 'Bucket',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPrefix: 'string',
      securityToken: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      accessKeyId: 'string',
      bucket: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyDataRuleListRule extends $tea.Model {
  vpcId?: string;
  updateTime?: number;
  rt?: number;
  createTime?: number;
  resourceFrom?: string;
  multiAzPolicy?: string;
  specId?: string;
  mode?: string;
  loadNum?: number;
  templateVersion?: number;
  cond?: string;
  step?: number;
  cpu?: number;
  groupId?: string;
  instNum?: number;
  appId?: string;
  duration?: number;
  vSwitchIds?: string;
  metricType?: string;
  templateId?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      rt: 'Rt',
      createTime: 'CreateTime',
      resourceFrom: 'ResourceFrom',
      multiAzPolicy: 'MultiAzPolicy',
      specId: 'SpecId',
      mode: 'Mode',
      loadNum: 'LoadNum',
      templateVersion: 'TemplateVersion',
      cond: 'Cond',
      step: 'Step',
      cpu: 'Cpu',
      groupId: 'GroupId',
      instNum: 'InstNum',
      appId: 'AppId',
      duration: 'Duration',
      vSwitchIds: 'VSwitchIds',
      metricType: 'MetricType',
      templateId: 'TemplateId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      updateTime: 'number',
      rt: 'number',
      createTime: 'number',
      resourceFrom: 'string',
      multiAzPolicy: 'string',
      specId: 'string',
      mode: 'string',
      loadNum: 'number',
      templateVersion: 'number',
      cond: 'string',
      step: 'number',
      cpu: 'number',
      groupId: 'string',
      instNum: 'number',
      appId: 'string',
      duration: 'number',
      vSwitchIds: 'string',
      metricType: 'string',
      templateId: 'string',
      enable: 'boolean',
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
  oversoldFactor?: number;
  vpcId?: string;
  updateTime?: number;
  clusterType?: number;
  ruleList?: GetScalingRulesResponseBodyDataRuleList;
  static names(): { [key: string]: string } {
    return {
      oversoldFactor: 'OversoldFactor',
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      clusterType: 'ClusterType',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldFactor: 'number',
      vpcId: 'string',
      updateTime: 'number',
      clusterType: 'number',
      ruleList: GetScalingRulesResponseBodyDataRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecureTokenResponseBodySecureToken extends $tea.Model {
  secretKey?: string;
  accessKey?: string;
  belongRegion?: string;
  description?: string;
  regionName?: string;
  edasId?: string;
  addressServerHost?: string;
  userId?: string;
  id?: number;
  tenantId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      accessKey: 'AccessKey',
      belongRegion: 'BelongRegion',
      description: 'Description',
      regionName: 'RegionName',
      edasId: 'EdasId',
      addressServerHost: 'AddressServerHost',
      userId: 'UserId',
      id: 'Id',
      tenantId: 'TenantId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      accessKey: 'string',
      belongRegion: 'string',
      description: 'string',
      regionName: 'string',
      edasId: 'string',
      addressServerHost: 'string',
      userId: 'string',
      id: 'number',
      tenantId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBodyDataContent extends $tea.Model {
  edasAppName?: string;
  ip?: string;
  edassAppId?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppName: 'EdasAppName',
      ip: 'Ip',
      edassAppId: 'EdassAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppName: 'string',
      ip: 'string',
      edassAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBodyData extends $tea.Model {
  size?: number;
  totalPages?: number;
  totalElements?: number;
  content?: GetServiceConsumersPageResponseBodyDataContent[];
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      totalPages: 'number',
      totalElements: 'number',
      content: { 'type': 'array', 'itemType': GetServiceConsumersPageResponseBodyDataContent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyDataMethodsReturnDefinition extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyDataMethods extends $tea.Model {
  parameterDetails?: string;
  parameterNames?: string;
  paths?: string;
  parameterTypes?: string;
  returnType?: string;
  nameDetail?: string;
  parameterDefinitions?: string;
  returnDefinition?: GetServiceDetailResponseBodyDataMethodsReturnDefinition;
  requestMethods?: string;
  returnDetails?: string;
  name?: string;
  methodController?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDetails: 'ParameterDetails',
      parameterNames: 'ParameterNames',
      paths: 'Paths',
      parameterTypes: 'ParameterTypes',
      returnType: 'ReturnType',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      returnDefinition: 'ReturnDefinition',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      name: 'Name',
      methodController: 'MethodController',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDetails: 'string',
      parameterNames: 'string',
      paths: 'string',
      parameterTypes: 'string',
      returnType: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      returnDefinition: GetServiceDetailResponseBodyDataMethodsReturnDefinition,
      requestMethods: 'string',
      returnDetails: 'string',
      name: 'string',
      methodController: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceDetailResponseBodyData extends $tea.Model {
  edasAppName?: string;
  dubboApplicationName?: string;
  version?: string;
  registryType?: string;
  springApplicationName?: string;
  serviceType?: string;
  serviceName?: string;
  methods?: GetServiceDetailResponseBodyDataMethods[];
  metadata?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppName: 'EdasAppName',
      dubboApplicationName: 'DubboApplicationName',
      version: 'Version',
      registryType: 'RegistryType',
      springApplicationName: 'SpringApplicationName',
      serviceType: 'ServiceType',
      serviceName: 'ServiceName',
      methods: 'Methods',
      metadata: 'Metadata',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppName: 'string',
      dubboApplicationName: 'string',
      version: 'string',
      registryType: 'string',
      springApplicationName: 'string',
      serviceType: 'string',
      serviceName: 'string',
      methods: { 'type': 'array', 'itemType': GetServiceDetailResponseBodyDataMethods },
      metadata: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBodyDataMethods extends $tea.Model {
  name?: string;
  returnType?: string;
  methodController?: string;
  parameterNames?: string;
  nameDetail?: string;
  returnDetails?: string;
  parameterTypes?: string;
  parameterDetails?: string;
  requestMethods?: string;
  paths?: string;
  parameterDefinitions?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      returnType: 'ReturnType',
      methodController: 'MethodController',
      parameterNames: 'ParameterNames',
      nameDetail: 'NameDetail',
      returnDetails: 'ReturnDetails',
      parameterTypes: 'ParameterTypes',
      parameterDetails: 'ParameterDetails',
      requestMethods: 'RequestMethods',
      paths: 'Paths',
      parameterDefinitions: 'ParameterDefinitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      returnType: 'string',
      methodController: 'string',
      parameterNames: 'string',
      nameDetail: 'string',
      returnDetails: 'string',
      parameterTypes: 'string',
      parameterDetails: 'string',
      requestMethods: 'string',
      paths: 'string',
      parameterDefinitions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBodyData extends $tea.Model {
  serviceName?: string;
  edasAppName?: string;
  dubboApplicationName?: string;
  springApplicationName?: string;
  serviceType?: string;
  registryType?: string;
  version?: string;
  group?: string;
  metadata?: string;
  methods?: GetServiceListResponseBodyDataMethods[];
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      edasAppName: 'EdasAppName',
      dubboApplicationName: 'DubboApplicationName',
      springApplicationName: 'SpringApplicationName',
      serviceType: 'ServiceType',
      registryType: 'RegistryType',
      version: 'Version',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      edasAppName: 'string',
      dubboApplicationName: 'string',
      springApplicationName: 'string',
      serviceType: 'string',
      registryType: 'string',
      version: 'string',
      group: 'string',
      metadata: 'string',
      methods: { 'type': 'array', 'itemType': GetServiceListResponseBodyDataMethods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBodyDataContent extends $tea.Model {
  edasAppName?: string;
  instanceNum?: number;
  version?: string;
  serviceId?: string;
  edasAppId?: string;
  serviceName?: string;
  registerType?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppName: 'EdasAppName',
      instanceNum: 'InstanceNum',
      version: 'Version',
      serviceId: 'ServiceId',
      edasAppId: 'EdasAppId',
      serviceName: 'ServiceName',
      registerType: 'RegisterType',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppName: 'string',
      instanceNum: 'number',
      version: 'string',
      serviceId: 'string',
      edasAppId: 'string',
      serviceName: 'string',
      registerType: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBodyData extends $tea.Model {
  size?: number;
  totalPages?: number;
  totalElements?: number;
  content?: GetServiceListPageResponseBodyDataContent[];
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      totalPages: 'number',
      totalElements: 'number',
      content: { 'type': 'array', 'itemType': GetServiceListPageResponseBodyDataContent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyDataResultReturnDefinition extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyDataResult extends $tea.Model {
  parameterDetails?: string;
  parameterNames?: string;
  paths?: string;
  parameterTypes?: string;
  returnType?: string;
  nameDetail?: string;
  parameterDefinitions?: string;
  returnDefinition?: GetServiceMethodPageResponseBodyDataResultReturnDefinition;
  requestMethods?: string;
  returnDetails?: string;
  name?: string;
  methodController?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDetails: 'ParameterDetails',
      parameterNames: 'ParameterNames',
      paths: 'Paths',
      parameterTypes: 'ParameterTypes',
      returnType: 'ReturnType',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      returnDefinition: 'ReturnDefinition',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      name: 'Name',
      methodController: 'MethodController',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDetails: 'string',
      parameterNames: 'string',
      paths: 'string',
      parameterTypes: 'string',
      returnType: 'string',
      nameDetail: 'string',
      parameterDefinitions: 'string',
      returnDefinition: GetServiceMethodPageResponseBodyDataResultReturnDefinition,
      requestMethods: 'string',
      returnDetails: 'string',
      name: 'string',
      methodController: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceMethodPageResponseBodyData extends $tea.Model {
  result?: GetServiceMethodPageResponseBodyDataResult[];
  totalSize?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      totalSize: 'TotalSize',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetServiceMethodPageResponseBodyDataResult },
      totalSize: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBodyDataContent extends $tea.Model {
  timeout?: string;
  ip?: string;
  port?: string;
  serializeType?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      ip: 'Ip',
      port: 'Port',
      serializeType: 'SerializeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      ip: 'string',
      port: 'string',
      serializeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBodyData extends $tea.Model {
  size?: number;
  totalPages?: number;
  totalElements?: number;
  content?: GetServiceProvidersPageResponseBodyDataContent[];
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      totalPages: 'TotalPages',
      totalElements: 'TotalElements',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      totalPages: 'number',
      totalElements: 'number',
      content: { 'type': 'array', 'itemType': GetServiceProvidersPageResponseBodyDataContent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubAccountInfoResponseBodyAuthorization extends $tea.Model {
  roleIdData?: string;
  ramOperation?: boolean;
  updateTime?: number;
  edasId?: string;
  isRamDel?: boolean;
  createTime?: number;
  userId?: string;
  adminEdasId?: string;
  resGroupId?: number;
  isRamSlave?: boolean;
  adminUserId?: string;
  subUserKp?: string;
  appIdData?: string;
  resGroupIdData?: string;
  sts?: boolean;
  delegateAdmin?: boolean;
  static names(): { [key: string]: string } {
    return {
      roleIdData: 'RoleIdData',
      ramOperation: 'RamOperation',
      updateTime: 'UpdateTime',
      edasId: 'EdasId',
      isRamDel: 'IsRamDel',
      createTime: 'CreateTime',
      userId: 'UserId',
      adminEdasId: 'AdminEdasId',
      resGroupId: 'ResGroupId',
      isRamSlave: 'IsRamSlave',
      adminUserId: 'AdminUserId',
      subUserKp: 'SubUserKp',
      appIdData: 'AppIdData',
      resGroupIdData: 'ResGroupIdData',
      sts: 'Sts',
      delegateAdmin: 'DelegateAdmin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIdData: 'string',
      ramOperation: 'boolean',
      updateTime: 'number',
      edasId: 'string',
      isRamDel: 'boolean',
      createTime: 'number',
      userId: 'string',
      adminEdasId: 'string',
      resGroupId: 'number',
      isRamSlave: 'boolean',
      adminUserId: 'string',
      subUserKp: 'string',
      appIdData: 'string',
      resGroupIdData: 'string',
      sts: 'boolean',
      delegateAdmin: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appName?: string;
  appId?: string;
  rules?: string;
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      rules: 'Rules',
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      rules: 'string',
      laneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwimmingLaneResponseBodyData extends $tea.Model {
  namespaceId?: string;
  groupId?: number;
  scenarioSign?: string;
  entryRule?: string;
  tag?: string;
  enableRules?: boolean;
  name?: string;
  swimmingLaneAppRelationShipList?: GetSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      groupId: 'GroupId',
      scenarioSign: 'ScenarioSign',
      entryRule: 'EntryRule',
      tag: 'Tag',
      enableRules: 'EnableRules',
      name: 'Name',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      groupId: 'number',
      scenarioSign: 'string',
      entryRule: 'string',
      tag: 'string',
      enableRules: 'boolean',
      name: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': GetSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertApplicationResponseBodyApplicationInfo extends $tea.Model {
  changeOrderId?: string;
  appName?: string;
  owner?: string;
  dockerize?: boolean;
  regionName?: string;
  appId?: string;
  userId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      appName: 'AppName',
      owner: 'Owner',
      dockerize: 'Dockerize',
      regionName: 'RegionName',
      appId: 'AppId',
      userId: 'UserId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      appName: 'string',
      owner: 'string',
      dockerize: 'boolean',
      regionName: 'string',
      appId: 'string',
      userId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertClusterResponseBodyCluster extends $tea.Model {
  vpcId?: string;
  oversoldFactor?: number;
  networkMode?: number;
  iaasProvider?: string;
  clusterType?: number;
  clusterName?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      oversoldFactor: 'OversoldFactor',
      networkMode: 'NetworkMode',
      iaasProvider: 'IaasProvider',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      oversoldFactor: 'number',
      networkMode: 'number',
      iaasProvider: 'string',
      clusterType: 'number',
      clusterName: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertDeployGroupResponseBodyDeployGroupEntity extends $tea.Model {
  updateTime?: number;
  groupName?: string;
  createTime?: number;
  appVersionId?: string;
  appId?: string;
  packageVersionId?: string;
  groupType?: number;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      groupName: 'GroupName',
      createTime: 'CreateTime',
      appVersionId: 'AppVersionId',
      appId: 'AppId',
      packageVersionId: 'PackageVersionId',
      groupType: 'GroupType',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      groupName: 'string',
      createTime: 'number',
      appVersionId: 'string',
      appId: 'string',
      packageVersionId: 'string',
      groupType: 'number',
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertK8sApplicationResponseBodyApplicationInfo extends $tea.Model {
  changeOrderId?: string;
  appName?: string;
  dockerize?: boolean;
  owner?: string;
  edasId?: string;
  clusterType?: number;
  appId?: string;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      appName: 'AppName',
      dockerize: 'Dockerize',
      owner: 'Owner',
      edasId: 'EdasId',
      clusterType: 'ClusterType',
      appId: 'AppId',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      appName: 'string',
      dockerize: 'boolean',
      owner: 'string',
      edasId: 'string',
      clusterType: 'number',
      appId: 'string',
      userId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponseBodyUserDefineRegionEntity extends $tea.Model {
  belongRegion?: string;
  regionName?: string;
  description?: string;
  debugEnable?: boolean;
  userId?: string;
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      regionName: 'RegionName',
      description: 'Description',
      debugEnable: 'DebugEnable',
      userId: 'UserId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      regionName: 'string',
      description: 'string',
      debugEnable: 'boolean',
      userId: 'string',
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appName?: string;
  appId?: string;
  rules?: string;
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      rules: 'Rules',
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      rules: 'string',
      laneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneResponseBodyData extends $tea.Model {
  namespaceId?: string;
  groupId?: number;
  entryRule?: string;
  appInfos?: string;
  tag?: string;
  name?: string;
  swimmingLaneAppRelationShipList?: InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      groupId: 'GroupId',
      entryRule: 'EntryRule',
      appInfos: 'AppInfos',
      tag: 'Tag',
      name: 'Name',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      groupId: 'number',
      entryRule: 'string',
      appInfos: 'string',
      tag: 'string',
      name: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication extends $tea.Model {
  appName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
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
  appName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBodyData extends $tea.Model {
  namespaceId?: string;
  applicationList?: InsertSwimmingLaneGroupResponseBodyDataApplicationList;
  entryApplication?: InsertSwimmingLaneGroupResponseBodyDataEntryApplication;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      applicationList: InsertSwimmingLaneGroupResponseBodyDataApplicationList,
      entryApplication: InsertSwimmingLaneGroupResponseBodyDataEntryApplication,
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBodyExecutionResultListExecutionResult extends $tea.Model {
  status?: string;
  success?: boolean;
  finishedTime?: string;
  instanceId?: string;
  invokeRecordStatus?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      success: 'Success',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      success: 'boolean',
      finishedTime: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
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
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
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
  clusterType?: number;
  appId?: string;
  resourceGroupId?: string;
  applicationType?: string;
  name?: string;
  runningInstanceCount?: number;
  buildPackageId?: number;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      appId: 'AppId',
      resourceGroupId: 'ResourceGroupId',
      applicationType: 'ApplicationType',
      name: 'Name',
      runningInstanceCount: 'RunningInstanceCount',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      appId: 'string',
      resourceGroupId: 'string',
      applicationType: 'string',
      name: 'string',
      runningInstanceCount: 'number',
      buildPackageId: 'number',
      clusterId: 'string',
      regionId: 'string',
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
  vpcId?: string;
  updateTime?: number;
  ipAddr?: string;
  availableCpu?: number;
  createTime?: number;
  userId?: string;
  instanceId?: string;
  mem?: number;
  regionId?: string;
  ecuId?: string;
  cpu?: number;
  appId?: string;
  dockerEnv?: boolean;
  online?: boolean;
  availableMem?: number;
  zoneId?: string;
  name?: string;
  heartbeatTime?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      availableCpu: 'AvailableCpu',
      createTime: 'CreateTime',
      userId: 'UserId',
      instanceId: 'InstanceId',
      mem: 'Mem',
      regionId: 'RegionId',
      ecuId: 'EcuId',
      cpu: 'Cpu',
      appId: 'AppId',
      dockerEnv: 'DockerEnv',
      online: 'Online',
      availableMem: 'AvailableMem',
      zoneId: 'ZoneId',
      name: 'Name',
      heartbeatTime: 'HeartbeatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      updateTime: 'number',
      ipAddr: 'string',
      availableCpu: 'number',
      createTime: 'number',
      userId: 'string',
      instanceId: 'string',
      mem: 'number',
      regionId: 'string',
      ecuId: 'string',
      cpu: 'number',
      appId: 'string',
      dockerEnv: 'boolean',
      online: 'boolean',
      availableMem: 'number',
      zoneId: 'string',
      name: 'string',
      heartbeatTime: 'number',
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
  description?: string;
  groupId?: string;
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      code: 'string',
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
  groupId?: string;
  description?: string;
  actionList?: ListAuthorityResponseBodyAuthorityListAuthorityActionList;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      description: 'Description',
      actionList: 'ActionList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      description: 'string',
      actionList: ListAuthorityResponseBodyAuthorityListAuthorityActionList,
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
  pandoraVersion?: string;
  pandoraDesc?: string;
  feature?: string;
  pluginInfo?: string;
  tengineDownloadUrl?: string;
  disabled?: boolean;
  tomcatPath?: string;
  tomcatDesc?: string;
  supportFeatures?: string;
  tomcatDownloadUrl?: string;
  tomcatVersion?: string;
  pandoraDownloadUrl?: string;
  packVersion?: string;
  multipleTenant?: boolean;
  tengineImageId?: string;
  withTengine?: boolean;
  imageId?: string;
  scriptName?: string;
  scriptVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      pandoraVersion: 'PandoraVersion',
      pandoraDesc: 'PandoraDesc',
      feature: 'Feature',
      pluginInfo: 'PluginInfo',
      tengineDownloadUrl: 'TengineDownloadUrl',
      disabled: 'Disabled',
      tomcatPath: 'TomcatPath',
      tomcatDesc: 'TomcatDesc',
      supportFeatures: 'SupportFeatures',
      tomcatDownloadUrl: 'TomcatDownloadUrl',
      tomcatVersion: 'TomcatVersion',
      pandoraDownloadUrl: 'PandoraDownloadUrl',
      packVersion: 'PackVersion',
      multipleTenant: 'MultipleTenant',
      tengineImageId: 'TengineImageId',
      withTengine: 'WithTengine',
      imageId: 'ImageId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      pandoraVersion: 'string',
      pandoraDesc: 'string',
      feature: 'string',
      pluginInfo: 'string',
      tengineDownloadUrl: 'string',
      disabled: 'boolean',
      tomcatPath: 'string',
      tomcatDesc: 'string',
      supportFeatures: 'string',
      tomcatDownloadUrl: 'string',
      tomcatVersion: 'string',
      pandoraDownloadUrl: 'string',
      packVersion: 'string',
      multipleTenant: 'boolean',
      tengineImageId: 'string',
      withTengine: 'boolean',
      imageId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
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

export class ListChildrenStacksResponseBodyDataResult extends $tea.Model {
  comment?: string;
  buildTypes?: string[];
  latest?: boolean;
  name?: string;
  preferred?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      buildTypes: 'BuildTypes',
      latest: 'Latest',
      name: 'Name',
      preferred: 'Preferred',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      buildTypes: { 'type': 'array', 'itemType': 'string' },
      latest: 'boolean',
      name: 'string',
      preferred: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChildrenStacksResponseBodyData extends $tea.Model {
  currentPage?: number;
  result?: ListChildrenStacksResponseBodyDataResult[];
  totalSize?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      result: 'Result',
      totalSize: 'TotalSize',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      result: { 'type': 'array', 'itemType': ListChildrenStacksResponseBodyDataResult },
      totalSize: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyClusterListCluster extends $tea.Model {
  oversoldFactor?: number;
  vpcId?: string;
  updateTime?: number;
  memUsed?: number;
  iaasProvider?: string;
  createTime?: number;
  cpuUsed?: number;
  mem?: number;
  regionId?: string;
  cpu?: number;
  csClusterId?: string;
  description?: string;
  networkMode?: number;
  clusterType?: number;
  resourceGroupId?: string;
  clusterName?: string;
  nodeNum?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldFactor: 'OversoldFactor',
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      memUsed: 'MemUsed',
      iaasProvider: 'IaasProvider',
      createTime: 'CreateTime',
      cpuUsed: 'CpuUsed',
      mem: 'Mem',
      regionId: 'RegionId',
      cpu: 'Cpu',
      csClusterId: 'CsClusterId',
      description: 'Description',
      networkMode: 'NetworkMode',
      clusterType: 'ClusterType',
      resourceGroupId: 'ResourceGroupId',
      clusterName: 'ClusterName',
      nodeNum: 'NodeNum',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldFactor: 'number',
      vpcId: 'string',
      updateTime: 'number',
      memUsed: 'number',
      iaasProvider: 'string',
      createTime: 'number',
      cpuUsed: 'number',
      mem: 'number',
      regionId: 'string',
      cpu: 'number',
      csClusterId: 'string',
      description: 'string',
      networkMode: 'number',
      clusterType: 'number',
      resourceGroupId: 'string',
      clusterName: 'string',
      nodeNum: 'number',
      clusterId: 'string',
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
  status?: number;
  updateTime?: number;
  ecuId?: string;
  ecsId?: string;
  createTime?: number;
  clusterMemberId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      ecuId: 'EcuId',
      ecsId: 'EcsId',
      createTime: 'CreateTime',
      clusterMemberId: 'ClusterMemberId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      updateTime: 'number',
      ecuId: 'string',
      ecsId: 'string',
      createTime: 'number',
      clusterMemberId: 'string',
      clusterId: 'string',
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
  currentPage?: number;
  totalSize?: number;
  pageSize?: number;
  clusterMemberList?: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      totalSize: 'TotalSize',
      pageSize: 'PageSize',
      clusterMemberList: 'ClusterMemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      totalSize: 'number',
      pageSize: 'number',
      clusterMemberList: ListClusterMembersResponseBodyClusterMemberPageClusterMemberList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentListComponent extends $tea.Model {
  type?: string;
  componentKey?: string;
  version?: string;
  expired?: boolean;
  componentId?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      componentKey: 'ComponentKey',
      version: 'Version',
      expired: 'Expired',
      componentId: 'ComponentId',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      componentKey: 'string',
      version: 'string',
      expired: 'boolean',
      componentId: 'string',
      desc: 'string',
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

export class ListConfigCentersResponseBodyConfigCentersListListConfigCenters extends $tea.Model {
  appName?: string;
  dataId?: string;
  id?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      id: 'Id',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      id: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigCentersResponseBodyConfigCentersList extends $tea.Model {
  listConfigCenters?: ListConfigCentersResponseBodyConfigCentersListListConfigCenters[];
  static names(): { [key: string]: string } {
    return {
      listConfigCenters: 'ListConfigCenters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listConfigCenters: { 'type': 'array', 'itemType': ListConfigCentersResponseBodyConfigCentersListListConfigCenters },
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
  dockerApplication?: boolean;
  type?: string;
  groups?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups;
  version?: string;
  appId?: string;
  group2Ip?: string;
  ips?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dockerApplication: 'DockerApplication',
      type: 'Type',
      groups: 'Groups',
      version: 'Version',
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      ips: 'Ips',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dockerApplication: 'boolean',
      type: 'string',
      groups: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups,
      version: 'string',
      appId: 'string',
      group2Ip: 'string',
      ips: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps,
      name: 'string',
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
  status?: string;
  vpcId?: string;
  privateIp?: string;
  expired?: boolean;
  instanceId?: string;
  mem?: number;
  regionId?: string;
  vpcName?: string;
  ecuId?: string;
  innerIp?: string;
  cpu?: number;
  eip?: string;
  instanceName?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      privateIp: 'PrivateIp',
      expired: 'Expired',
      instanceId: 'InstanceId',
      mem: 'Mem',
      regionId: 'RegionId',
      vpcName: 'VpcName',
      ecuId: 'EcuId',
      innerIp: 'InnerIp',
      cpu: 'Cpu',
      eip: 'Eip',
      instanceName: 'InstanceName',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      privateIp: 'string',
      expired: 'boolean',
      instanceId: 'string',
      mem: 'number',
      regionId: 'string',
      vpcName: 'string',
      ecuId: 'string',
      innerIp: 'string',
      cpu: 'number',
      eip: 'string',
      instanceName: 'string',
      publicIp: 'string',
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

export class ListCSBGatewayResponseBodyData extends $tea.Model {
  gatewayType?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'GatewayType',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods extends $tea.Model {
  method?: string[];
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod extends $tea.Model {
  version?: string;
  name?: string;
  methods?: ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      name: 'name',
      methods: 'Methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      name: 'string',
      methods: ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethods extends $tea.Model {
  interfaceMethod?: ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod[];
  static names(): { [key: string]: string } {
    return {
      interfaceMethod: 'InterfaceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceMethod: { 'type': 'array', 'itemType': ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultListRule extends $tea.Model {
  resource?: string;
  ruleType?: string;
  updateTime?: number;
  state?: number;
  createTime?: number;
  appId?: string;
  duration?: number;
  rtThreshold?: number;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      ruleType: 'RuleType',
      updateTime: 'UpdateTime',
      state: 'State',
      createTime: 'CreateTime',
      appId: 'AppId',
      duration: 'Duration',
      rtThreshold: 'RtThreshold',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      ruleType: 'string',
      updateTime: 'number',
      state: 'number',
      createTime: 'number',
      appId: 'string',
      duration: 'number',
      rtThreshold: 'number',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultList extends $tea.Model {
  rule?: ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultListRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultListRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMapRuleList extends $tea.Model {
  currentPage?: number;
  totalSize?: number;
  ruleResultList?: ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultList;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      totalSize: 'TotalSize',
      ruleResultList: 'RuleResultList',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      totalSize: 'number',
      ruleResultList: ListDegradeControlsResponseBodyFlowControlsMapRuleListRuleResultList,
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDegradeControlsResponseBodyFlowControlsMap extends $tea.Model {
  interfaceMethods?: ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethods;
  appName?: string;
  appId?: string;
  ruleList?: ListDegradeControlsResponseBodyFlowControlsMapRuleList;
  static names(): { [key: string]: string } {
    return {
      interfaceMethods: 'InterfaceMethods',
      appName: 'AppName',
      appId: 'AppId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceMethods: ListDegradeControlsResponseBodyFlowControlsMapInterfaceMethods,
      appName: 'string',
      appId: 'string',
      ruleList: ListDegradeControlsResponseBodyFlowControlsMapRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBodyDeployGroupListDeployGroup extends $tea.Model {
  VServerGroupId?: string;
  status?: string;
  cpuRequest?: string;
  updateTime?: number;
  memoryRequest?: string;
  nameSpace?: string;
  appVersionId?: string;
  createTime?: number;
  deploymentName?: string;
  preStop?: string;
  packageUrl?: string;
  packageVersion?: string;
  baseComponentMetaName?: string;
  csClusterId?: string;
  appId?: string;
  env?: string;
  lastUpdateTime?: number;
  groupType?: number;
  cpuLimit?: string;
  clusterId?: string;
  postStart?: string;
  labels?: string;
  memoryLimit?: string;
  strategy?: string;
  selector?: string;
  groupId?: string;
  groupName?: string;
  clusterName?: string;
  packageVersionId?: string;
  reversion?: string;
  VExtServerGroupId?: string;
  packagePublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      status: 'Status',
      cpuRequest: 'CpuRequest',
      updateTime: 'UpdateTime',
      memoryRequest: 'MemoryRequest',
      nameSpace: 'NameSpace',
      appVersionId: 'AppVersionId',
      createTime: 'CreateTime',
      deploymentName: 'DeploymentName',
      preStop: 'PreStop',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      baseComponentMetaName: 'BaseComponentMetaName',
      csClusterId: 'CsClusterId',
      appId: 'AppId',
      env: 'Env',
      lastUpdateTime: 'LastUpdateTime',
      groupType: 'GroupType',
      cpuLimit: 'CpuLimit',
      clusterId: 'ClusterId',
      postStart: 'PostStart',
      labels: 'Labels',
      memoryLimit: 'MemoryLimit',
      strategy: 'Strategy',
      selector: 'Selector',
      groupId: 'GroupId',
      groupName: 'GroupName',
      clusterName: 'ClusterName',
      packageVersionId: 'PackageVersionId',
      reversion: 'Reversion',
      VExtServerGroupId: 'VExtServerGroupId',
      packagePublicUrl: 'PackagePublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      status: 'string',
      cpuRequest: 'string',
      updateTime: 'number',
      memoryRequest: 'string',
      nameSpace: 'string',
      appVersionId: 'string',
      createTime: 'number',
      deploymentName: 'string',
      preStop: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      baseComponentMetaName: 'string',
      csClusterId: 'string',
      appId: 'string',
      env: 'string',
      lastUpdateTime: 'number',
      groupType: 'number',
      cpuLimit: 'string',
      clusterId: 'string',
      postStart: 'string',
      labels: 'string',
      memoryLimit: 'string',
      strategy: 'string',
      selector: 'string',
      groupId: 'string',
      groupName: 'string',
      clusterName: 'string',
      packageVersionId: 'string',
      reversion: 'string',
      VExtServerGroupId: 'string',
      packagePublicUrl: 'string',
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
  status?: string;
  vpcId?: string;
  privateIp?: string;
  expired?: boolean;
  instanceId?: string;
  mem?: number;
  regionId?: string;
  vpcName?: string;
  innerIp?: string;
  cpu?: number;
  eip?: string;
  instanceName?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      privateIp: 'PrivateIp',
      expired: 'Expired',
      instanceId: 'InstanceId',
      mem: 'Mem',
      regionId: 'RegionId',
      vpcName: 'VpcName',
      innerIp: 'InnerIp',
      cpu: 'Cpu',
      eip: 'Eip',
      instanceName: 'InstanceName',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      privateIp: 'string',
      expired: 'boolean',
      instanceId: 'string',
      mem: 'number',
      regionId: 'string',
      vpcName: 'string',
      innerIp: 'string',
      cpu: 'number',
      eip: 'string',
      instanceName: 'string',
      publicIp: 'string',
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
  vpcId?: string;
  updateTime?: number;
  ipAddr?: string;
  availableCpu?: number;
  createTime?: number;
  userId?: string;
  instanceId?: string;
  mem?: number;
  regionId?: string;
  ecuId?: string;
  cpu?: number;
  dockerEnv?: boolean;
  online?: boolean;
  availableMem?: number;
  zoneId?: string;
  name?: string;
  heartbeatTime?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      availableCpu: 'AvailableCpu',
      createTime: 'CreateTime',
      userId: 'UserId',
      instanceId: 'InstanceId',
      mem: 'Mem',
      regionId: 'RegionId',
      ecuId: 'EcuId',
      cpu: 'Cpu',
      dockerEnv: 'DockerEnv',
      online: 'Online',
      availableMem: 'AvailableMem',
      zoneId: 'ZoneId',
      name: 'Name',
      heartbeatTime: 'HeartbeatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      updateTime: 'number',
      ipAddr: 'string',
      availableCpu: 'number',
      createTime: 'number',
      userId: 'string',
      instanceId: 'string',
      mem: 'number',
      regionId: 'string',
      ecuId: 'string',
      cpu: 'number',
      dockerEnv: 'boolean',
      online: 'boolean',
      availableMem: 'number',
      zoneId: 'string',
      name: 'string',
      heartbeatTime: 'number',
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

export class ListFlowControlsResponseBodyFlowControlsMapAppListApp extends $tea.Model {
  slbId?: string;
  extSlbIp?: string;
  healthCheckUrl?: string;
  owner?: string;
  slbPort?: number;
  createTime?: number;
  userId?: string;
  applicationType?: string;
  extSlbId?: string;
  port?: number;
  runningInstanceCount?: number;
  slbIp?: string;
  buildPackageId?: number;
  regionId?: string;
  dockerize?: boolean;
  cpu?: number;
  instanceCount?: number;
  description?: string;
  clusterType?: number;
  appId?: string;
  memory?: number;
  name?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      slbId: 'SlbId',
      extSlbIp: 'ExtSlbIp',
      healthCheckUrl: 'HealthCheckUrl',
      owner: 'Owner',
      slbPort: 'SlbPort',
      createTime: 'CreateTime',
      userId: 'UserId',
      applicationType: 'ApplicationType',
      extSlbId: 'ExtSlbId',
      port: 'Port',
      runningInstanceCount: 'RunningInstanceCount',
      slbIp: 'SlbIp',
      buildPackageId: 'BuildPackageId',
      regionId: 'RegionId',
      dockerize: 'Dockerize',
      cpu: 'Cpu',
      instanceCount: 'InstanceCount',
      description: 'Description',
      clusterType: 'ClusterType',
      appId: 'AppId',
      memory: 'Memory',
      name: 'Name',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbId: 'string',
      extSlbIp: 'string',
      healthCheckUrl: 'string',
      owner: 'string',
      slbPort: 'number',
      createTime: 'number',
      userId: 'string',
      applicationType: 'string',
      extSlbId: 'string',
      port: 'number',
      runningInstanceCount: 'number',
      slbIp: 'string',
      buildPackageId: 'number',
      regionId: 'string',
      dockerize: 'boolean',
      cpu: 'number',
      instanceCount: 'number',
      description: 'string',
      clusterType: 'number',
      appId: 'string',
      memory: 'number',
      name: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapAppList extends $tea.Model {
  app?: ListFlowControlsResponseBodyFlowControlsMapAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListFlowControlsResponseBodyFlowControlsMapAppListApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods extends $tea.Model {
  method?: string[];
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod extends $tea.Model {
  version?: string;
  name?: string;
  methods?: ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      name: 'name',
      methods: 'Methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      name: 'string',
      methods: ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethodMethods,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapInterfaceMethods extends $tea.Model {
  interfaceMethod?: ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod[];
  static names(): { [key: string]: string } {
    return {
      interfaceMethod: 'InterfaceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceMethod: { 'type': 'array', 'itemType': ListFlowControlsResponseBodyFlowControlsMapInterfaceMethodsInterfaceMethod },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultListRule extends $tea.Model {
  updateTime?: number;
  ruleType?: string;
  state?: number;
  createTime?: number;
  consumerAppId?: string;
  ruleId?: string;
  strategy?: string;
  resource?: string;
  appId?: string;
  granularity?: string;
  threshold?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      ruleType: 'RuleType',
      state: 'State',
      createTime: 'CreateTime',
      consumerAppId: 'ConsumerAppId',
      ruleId: 'RuleId',
      strategy: 'Strategy',
      resource: 'Resource',
      appId: 'AppId',
      granularity: 'Granularity',
      threshold: 'Threshold',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      ruleType: 'string',
      state: 'number',
      createTime: 'number',
      consumerAppId: 'string',
      ruleId: 'string',
      strategy: 'string',
      resource: 'string',
      appId: 'string',
      granularity: 'string',
      threshold: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultList extends $tea.Model {
  rule?: ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultListRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultListRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMapRuleList extends $tea.Model {
  currentPage?: number;
  totalSize?: number;
  ruleResultList?: ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultList;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      totalSize: 'TotalSize',
      ruleResultList: 'RuleResultList',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      totalSize: 'number',
      ruleResultList: ListFlowControlsResponseBodyFlowControlsMapRuleListRuleResultList,
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlsResponseBodyFlowControlsMap extends $tea.Model {
  appList?: ListFlowControlsResponseBodyFlowControlsMapAppList;
  interfaceMethods?: ListFlowControlsResponseBodyFlowControlsMapInterfaceMethods;
  appName?: string;
  appId?: string;
  ruleList?: ListFlowControlsResponseBodyFlowControlsMapRuleList;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      interfaceMethods: 'InterfaceMethods',
      appName: 'AppName',
      appId: 'AppId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListFlowControlsResponseBodyFlowControlsMapAppList,
      interfaceMethods: ListFlowControlsResponseBodyFlowControlsMapInterfaceMethods,
      appName: 'string',
      appId: 'string',
      ruleList: ListFlowControlsResponseBodyFlowControlsMapRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion extends $tea.Model {
  type?: string;
  publicUrl?: string;
  updateTime?: number;
  description?: string;
  createTime?: number;
  appId?: string;
  warUrl?: string;
  id?: string;
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      publicUrl: 'PublicUrl',
      updateTime: 'UpdateTime',
      description: 'Description',
      createTime: 'CreateTime',
      appId: 'AppId',
      warUrl: 'WarUrl',
      id: 'Id',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      publicUrl: 'string',
      updateTime: 'number',
      description: 'string',
      createTime: 'number',
      appId: 'string',
      warUrl: 'string',
      id: 'string',
      packageVersion: 'string',
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

export class ListK8sIngressRulesResponseBodyIngressConfigsIngressRulesIngressPaths extends $tea.Model {
  status?: string;
  appName?: string;
  host?: string;
  servicePort?: number;
  appId?: string;
  path?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      appName: 'AppName',
      host: 'Host',
      servicePort: 'ServicePort',
      appId: 'AppId',
      path: 'Path',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      appName: 'string',
      host: 'string',
      servicePort: 'number',
      appId: 'string',
      path: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyIngressConfigsIngressRules extends $tea.Model {
  creationTime?: string;
  ingressPaths?: ListK8sIngressRulesResponseBodyIngressConfigsIngressRulesIngressPaths[];
  endpoint?: string;
  namespace?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ingressPaths: 'IngressPaths',
      endpoint: 'Endpoint',
      namespace: 'Namespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ingressPaths: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyIngressConfigsIngressRulesIngressPaths },
      endpoint: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyIngressConfigs extends $tea.Model {
  clusterName?: string;
  ingressRules?: ListK8sIngressRulesResponseBodyIngressConfigsIngressRules[];
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      ingressRules: 'IngressRules',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      ingressRules: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyIngressConfigsIngressRules },
      clusterId: 'string',
      regionId: 'string',
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

export class ListMethodsResponseBodyServiceMethodListServiceMethod extends $tea.Model {
  methodName?: string;
  paramTypes?: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes;
  inputParams?: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams;
  appName?: string;
  output?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      methodName: 'MethodName',
      paramTypes: 'ParamTypes',
      inputParams: 'InputParams',
      appName: 'AppName',
      output: 'Output',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodName: 'string',
      paramTypes: ListMethodsResponseBodyServiceMethodListServiceMethodParamTypes,
      inputParams: ListMethodsResponseBodyServiceMethodListServiceMethodInputParams,
      appName: 'string',
      output: 'string',
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

export class ListOperationLogsResponseBodyLogList extends $tea.Model {
  status?: string;
  endTime?: number;
  actionGroup?: string;
  operatorId?: string;
  operatorName?: string;
  appId?: string;
  beginTime?: number;
  message?: string;
  actionName?: string;
  extraParameters?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      actionGroup: 'ActionGroup',
      operatorId: 'OperatorId',
      operatorName: 'OperatorName',
      appId: 'AppId',
      beginTime: 'BeginTime',
      message: 'Message',
      actionName: 'ActionName',
      extraParameters: 'ExtraParameters',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'number',
      actionGroup: 'string',
      operatorId: 'string',
      operatorName: 'string',
      appId: 'string',
      beginTime: 'number',
      message: 'string',
      actionName: 'string',
      extraParameters: 'string',
      source: 'string',
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
  dockerApplication?: boolean;
  type?: string;
  groups?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups;
  version?: string;
  appId?: string;
  group2Ip?: string;
  ips?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dockerApplication: 'DockerApplication',
      type: 'Type',
      groups: 'Groups',
      version: 'Version',
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      ips: 'Ips',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dockerApplication: 'boolean',
      type: 'string',
      groups: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups,
      version: 'string',
      appId: 'string',
      group2Ip: 'string',
      ips: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps,
      name: 'string',
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
  status?: number;
  finishTime?: string;
  createTime?: string;
  userId?: string;
  changeOrderDescription?: string;
  source?: string;
  createUserId?: string;
  batchCount?: number;
  coTypeCode?: string;
  changeOrderId?: string;
  batchType?: string;
  groupId?: string;
  coType?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      userId: 'UserId',
      changeOrderDescription: 'ChangeOrderDescription',
      source: 'Source',
      createUserId: 'CreateUserId',
      batchCount: 'BatchCount',
      coTypeCode: 'CoTypeCode',
      changeOrderId: 'ChangeOrderId',
      batchType: 'BatchType',
      groupId: 'GroupId',
      coType: 'CoType',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      finishTime: 'string',
      createTime: 'string',
      userId: 'string',
      changeOrderDescription: 'string',
      source: 'string',
      createUserId: 'string',
      batchCount: 'number',
      coTypeCode: 'string',
      changeOrderId: 'string',
      batchType: 'string',
      groupId: 'string',
      coType: 'string',
      appId: 'string',
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

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity extends $tea.Model {
  ecuId?: string;
  online?: boolean;
  dockerEnv?: boolean;
  createTime?: number;
  updateTime?: number;
  ipAddr?: string;
  heartbeatTime?: number;
  userId?: string;
  name?: string;
  zoneId?: string;
  regionId?: string;
  instanceId?: string;
  vpcId?: string;
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      ecuId: 'EcuId',
      online: 'Online',
      dockerEnv: 'DockerEnv',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      heartbeatTime: 'HeartbeatTime',
      userId: 'UserId',
      name: 'Name',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuId: 'string',
      online: 'boolean',
      dockerEnv: 'boolean',
      createTime: 'number',
      updateTime: 'number',
      ipAddr: 'string',
      heartbeatTime: 'number',
      userId: 'string',
      name: 'string',
      zoneId: 'string',
      regionId: 'string',
      instanceId: 'string',
      vpcId: 'string',
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity extends $tea.Model {
  vpcId?: string;
  vpcName?: string;
  regionId?: string;
  userId?: string;
  cidrblock?: string;
  status?: string;
  description?: string;
  expired?: boolean;
  ecsNum?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      regionId: 'RegionId',
      userId: 'UserId',
      cidrblock: 'Cidrblock',
      status: 'Status',
      description: 'Description',
      expired: 'Expired',
      ecsNum: 'EcsNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      regionId: 'string',
      userId: 'string',
      cidrblock: 'string',
      status: 'string',
      description: 'string',
      expired: 'boolean',
      ecsNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  hostName?: string;
  description?: string;
  status?: string;
  publicIp?: string;
  innerIp?: string;
  privateIp?: string;
  eip?: string;
  serialNum?: string;
  userId?: string;
  zoneId?: string;
  regionId?: string;
  expired?: boolean;
  sgId?: string;
  vpcId?: string;
  groupId?: string;
  cpu?: number;
  mem?: number;
  ecuEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity;
  vpcEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      description: 'Description',
      status: 'Status',
      publicIp: 'PublicIp',
      innerIp: 'InnerIp',
      privateIp: 'PrivateIp',
      eip: 'Eip',
      serialNum: 'SerialNum',
      userId: 'UserId',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      expired: 'Expired',
      sgId: 'SgId',
      vpcId: 'VpcId',
      groupId: 'GroupId',
      cpu: 'Cpu',
      mem: 'Mem',
      ecuEntity: 'EcuEntity',
      vpcEntity: 'VpcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      hostName: 'string',
      description: 'string',
      status: 'string',
      publicIp: 'string',
      innerIp: 'string',
      privateIp: 'string',
      eip: 'string',
      serialNum: 'string',
      userId: 'string',
      zoneId: 'string',
      regionId: 'string',
      expired: 'boolean',
      sgId: 'string',
      vpcId: 'string',
      groupId: 'string',
      cpu: 'number',
      mem: 'number',
      ecuEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity,
      vpcEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity,
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

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity extends $tea.Model {
  slbId?: string;
  slbName?: string;
  regionId?: string;
  userId?: string;
  address?: string;
  slbStatus?: string;
  addressType?: string;
  vswitchId?: string;
  vpcId?: string;
  networkType?: string;
  groupId?: number;
  expired?: boolean;
  static names(): { [key: string]: string } {
    return {
      slbId: 'SlbId',
      slbName: 'SlbName',
      regionId: 'RegionId',
      userId: 'UserId',
      address: 'Address',
      slbStatus: 'SlbStatus',
      addressType: 'AddressType',
      vswitchId: 'VswitchId',
      vpcId: 'VpcId',
      networkType: 'NetworkType',
      groupId: 'GroupId',
      expired: 'Expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbId: 'string',
      slbName: 'string',
      regionId: 'string',
      userId: 'string',
      address: 'string',
      slbStatus: 'string',
      addressType: 'string',
      vswitchId: 'string',
      vpcId: 'string',
      networkType: 'string',
      groupId: 'number',
      expired: 'boolean',
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

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntity extends $tea.Model {
  id?: number;
  name?: string;
  description?: string;
  adminUserId?: string;
  createTime?: number;
  updateTime?: number;
  regionId?: string;
  ecsList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList;
  slbList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      description: 'Description',
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      regionId: 'RegionId',
      ecsList: 'ecsList',
      slbList: 'SlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      description: 'string',
      adminUserId: 'string',
      createTime: 'number',
      updateTime: 'number',
      regionId: 'string',
      ecsList: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList,
      slbList: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList,
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
  description?: string;
  groupId?: string;
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      code: 'string',
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
  updateTime?: number;
  isDefault?: boolean;
  adminUserId?: string;
  createTime?: number;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      isDefault: 'IsDefault',
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      isDefault: 'boolean',
      adminUserId: 'string',
      createTime: 'number',
      name: 'string',
      id: 'number',
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
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      icon: 'Icon',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      icon: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootStacksResponseBodyDataResultRoot extends $tea.Model {
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
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
  result?: ListRootStacksResponseBodyDataResult[];
  totalSize?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      result: 'Result',
      totalSize: 'TotalSize',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      result: { 'type': 'array', 'itemType': ListRootStacksResponseBodyDataResult },
      totalSize: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBodyEcuInfoListEcuInfo extends $tea.Model {
  vpcId?: string;
  updateTime?: number;
  ipAddr?: string;
  availableCpu?: number;
  createTime?: number;
  userId?: string;
  instanceId?: string;
  regionId?: string;
  ecuId?: string;
  dockerEnv?: boolean;
  online?: boolean;
  availableMem?: number;
  zoneId?: string;
  name?: string;
  heartbeatTime?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      availableCpu: 'AvailableCpu',
      createTime: 'CreateTime',
      userId: 'UserId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ecuId: 'EcuId',
      dockerEnv: 'DockerEnv',
      online: 'Online',
      availableMem: 'AvailableMem',
      zoneId: 'ZoneId',
      name: 'Name',
      heartbeatTime: 'HeartbeatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      updateTime: 'number',
      ipAddr: 'string',
      availableCpu: 'number',
      createTime: 'number',
      userId: 'string',
      instanceId: 'string',
      regionId: 'string',
      ecuId: 'string',
      dockerEnv: 'boolean',
      online: 'boolean',
      availableMem: 'number',
      zoneId: 'string',
      name: 'string',
      heartbeatTime: 'number',
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
  groupId?: string;
  groupName?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      createTime: 'string',
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
  vpcId?: string;
  slbId?: string;
  vswitchId?: string;
  expired?: boolean;
  userId?: string;
  addressType?: string;
  networkType?: string;
  regionId?: string;
  groupId?: number;
  address?: string;
  slbName?: string;
  slbStatus?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      slbId: 'SlbId',
      vswitchId: 'VswitchId',
      expired: 'Expired',
      userId: 'UserId',
      addressType: 'AddressType',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      groupId: 'GroupId',
      address: 'Address',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      slbId: 'string',
      vswitchId: 'string',
      expired: 'boolean',
      userId: 'string',
      addressType: 'string',
      networkType: 'string',
      regionId: 'string',
      groupId: 'number',
      address: 'string',
      slbName: 'string',
      slbStatus: 'string',
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

export class ListStatusResponseBodyData extends $tea.Model {
  status?: string;
  podName?: string;
  namespaceId?: string;
  appId?: string;
  region?: string;
  ip?: string;
  accountId?: string;
  source?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      podName: 'PodName',
      namespaceId: 'NamespaceId',
      appId: 'AppId',
      region: 'Region',
      ip: 'Ip',
      accountId: 'AccountId',
      source: 'Source',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      podName: 'string',
      namespaceId: 'string',
      appId: 'string',
      region: 'string',
      ip: 'string',
      accountId: 'string',
      source: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAccountResponseBodySubAccountListSubAccount extends $tea.Model {
  subEdasId?: string;
  subUserId?: string;
  email?: string;
  adminUserId?: string;
  adminUserKp?: string;
  adminEdasId?: string;
  subUserKp?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      subEdasId: 'SubEdasId',
      subUserId: 'SubUserId',
      email: 'Email',
      adminUserId: 'AdminUserId',
      adminUserKp: 'AdminUserKp',
      adminEdasId: 'AdminEdasId',
      subUserKp: 'SubUserKp',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subEdasId: 'string',
      subUserId: 'string',
      email: 'string',
      adminUserId: 'string',
      adminUserKp: 'string',
      adminEdasId: 'string',
      subUserKp: 'string',
      phone: 'string',
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
  appName?: string;
  appId?: string;
  rules?: string;
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      rules: 'Rules',
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      rules: 'string',
      laneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponseBodyData extends $tea.Model {
  namespaceId?: string;
  groupId?: number;
  scenarioSign?: string;
  entryRule?: string;
  tag?: string;
  enableRules?: boolean;
  name?: string;
  swimmingLaneAppRelationShipList?: ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      groupId: 'GroupId',
      scenarioSign: 'ScenarioSign',
      entryRule: 'EntryRule',
      tag: 'Tag',
      enableRules: 'EnableRules',
      name: 'Name',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      groupId: 'number',
      scenarioSign: 'string',
      entryRule: 'string',
      tag: 'string',
      enableRules: 'boolean',
      name: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyDataApplicationList extends $tea.Model {
  appName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyDataEntryApplication extends $tea.Model {
  appName?: string;
  appId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyData extends $tea.Model {
  namespaceId?: string;
  applicationList?: ListSwimmingLaneGroupResponseBodyDataApplicationList[];
  entryApplication?: ListSwimmingLaneGroupResponseBodyDataEntryApplication;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      applicationList: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: ListSwimmingLaneGroupResponseBodyDataEntryApplication,
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
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
  regionName?: string;
  description?: string;
  debugEnable?: boolean;
  userId?: string;
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      regionName: 'RegionName',
      description: 'Description',
      debugEnable: 'DebugEnable',
      userId: 'UserId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      regionName: 'string',
      description: 'string',
      debugEnable: 'boolean',
      userId: 'string',
      id: 'number',
      regionId: 'string',
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
  vpcId?: string;
  vpcName?: string;
  expired?: boolean;
  userId?: string;
  ecsNum?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      expired: 'Expired',
      userId: 'UserId',
      ecsNum: 'EcsNum',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      expired: 'boolean',
      userId: 'string',
      ecsNum: 'number',
      regionId: 'string',
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

export class QueryApplicationStatusResponseBodyAppInfoEcuListEcu extends $tea.Model {
  ecuId?: string;
  online?: boolean;
  dockerEnv?: boolean;
  createTime?: number;
  updateTime?: number;
  ipAddr?: string;
  heartbeatTime?: number;
  userId?: string;
  groupId?: string;
  name?: string;
  zoneId?: string;
  regionId?: string;
  instanceId?: string;
  vpcId?: string;
  availableCpu?: number;
  availableMem?: number;
  static names(): { [key: string]: string } {
    return {
      ecuId: 'EcuId',
      online: 'Online',
      dockerEnv: 'DockerEnv',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      heartbeatTime: 'HeartbeatTime',
      userId: 'UserId',
      groupId: 'GroupId',
      name: 'Name',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuId: 'string',
      online: 'boolean',
      dockerEnv: 'boolean',
      createTime: 'number',
      updateTime: 'number',
      ipAddr: 'string',
      heartbeatTime: 'number',
      userId: 'string',
      groupId: 'string',
      name: 'string',
      zoneId: 'string',
      regionId: 'string',
      instanceId: 'string',
      vpcId: 'string',
      availableCpu: 'number',
      availableMem: 'number',
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

export class QueryApplicationStatusResponseBodyAppInfoEccListEcc extends $tea.Model {
  eccId?: string;
  ecuId?: string;
  appId?: string;
  appState?: number;
  taskState?: number;
  createTime?: number;
  updateTime?: number;
  ip?: string;
  vpcId?: string;
  groupId?: string;
  containerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eccId: 'EccId',
      ecuId: 'EcuId',
      appId: 'AppId',
      appState: 'AppState',
      taskState: 'TaskState',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      ip: 'Ip',
      vpcId: 'VpcId',
      groupId: 'GroupId',
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eccId: 'string',
      ecuId: 'string',
      appId: 'string',
      appState: 'number',
      taskState: 'number',
      createTime: 'number',
      updateTime: 'number',
      ip: 'string',
      vpcId: 'string',
      groupId: 'string',
      containerStatus: 'string',
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

export class QueryApplicationStatusResponseBodyAppInfoGroupListGroup extends $tea.Model {
  groupId?: string;
  groupName?: string;
  appId?: string;
  packageVersionId?: string;
  appVersionId?: string;
  groupType?: number;
  clusterId?: string;
  createTime?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      appId: 'AppId',
      packageVersionId: 'PackageVersionId',
      appVersionId: 'AppVersionId',
      groupType: 'GroupType',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      appId: 'string',
      packageVersionId: 'string',
      appVersionId: 'string',
      groupType: 'number',
      clusterId: 'string',
      createTime: 'number',
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

export class QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord extends $tea.Model {
  deployRecordId?: string;
  eccId?: string;
  ecuId?: string;
  packageVersionId?: string;
  packageMd5?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      deployRecordId: 'DeployRecordId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      packageVersionId: 'PackageVersionId',
      packageMd5: 'PackageMd5',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRecordId: 'string',
      eccId: 'string',
      ecuId: 'string',
      packageVersionId: 'string',
      packageMd5: 'string',
      createTime: 'number',
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

export class QueryApplicationStatusResponseBodyAppInfo extends $tea.Model {
  ecuList?: QueryApplicationStatusResponseBodyAppInfoEcuList;
  eccList?: QueryApplicationStatusResponseBodyAppInfoEccList;
  groupList?: QueryApplicationStatusResponseBodyAppInfoGroupList;
  deployRecordList?: QueryApplicationStatusResponseBodyAppInfoDeployRecordList;
  application?: QueryApplicationStatusResponseBodyAppInfoApplication;
  static names(): { [key: string]: string } {
    return {
      ecuList: 'EcuList',
      eccList: 'EccList',
      groupList: 'GroupList',
      deployRecordList: 'DeployRecordList',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuList: QueryApplicationStatusResponseBodyAppInfoEcuList,
      eccList: QueryApplicationStatusResponseBodyAppInfoEccList,
      groupList: QueryApplicationStatusResponseBodyAppInfoGroupList,
      deployRecordList: QueryApplicationStatusResponseBodyAppInfoDeployRecordList,
      application: QueryApplicationStatusResponseBodyAppInfoApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigCenterResponseBodyConfigCenterInfo extends $tea.Model {
  appName?: string;
  dataId?: string;
  content?: string;
  id?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      content: 'Content',
      id: 'Id',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      content: 'string',
      id: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoResponseBodyEccInfo extends $tea.Model {
  vpcId?: string;
  eccId?: string;
  ecuId?: string;
  groupId?: string;
  groupName?: string;
  packageMd5?: string;
  appId?: string;
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      packageMd5: 'PackageMd5',
      appId: 'AppId',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      eccId: 'string',
      ecuId: 'string',
      groupId: 'string',
      groupName: 'string',
      packageMd5: 'string',
      appId: 'string',
      packageVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryK8sClusterLogProjectInfoResponseBodyProjectInfo extends $tea.Model {
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity extends $tea.Model {
  vpcId?: string;
  updateTime?: number;
  ipAddr?: string;
  availableCpu?: number;
  createTime?: number;
  userId?: string;
  instanceId?: string;
  mem?: number;
  regionId?: string;
  ecuId?: string;
  cpu?: number;
  dockerEnv?: boolean;
  online?: boolean;
  availableMem?: number;
  zoneId?: string;
  name?: string;
  heartbeatTime?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      updateTime: 'UpdateTime',
      ipAddr: 'IpAddr',
      availableCpu: 'AvailableCpu',
      createTime: 'CreateTime',
      userId: 'UserId',
      instanceId: 'InstanceId',
      mem: 'Mem',
      regionId: 'RegionId',
      ecuId: 'EcuId',
      cpu: 'Cpu',
      dockerEnv: 'DockerEnv',
      online: 'Online',
      availableMem: 'AvailableMem',
      zoneId: 'ZoneId',
      name: 'Name',
      heartbeatTime: 'HeartbeatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      updateTime: 'number',
      ipAddr: 'string',
      availableCpu: 'number',
      createTime: 'number',
      userId: 'string',
      instanceId: 'string',
      mem: 'number',
      regionId: 'string',
      ecuId: 'string',
      cpu: 'number',
      dockerEnv: 'boolean',
      online: 'boolean',
      availableMem: 'number',
      zoneId: 'string',
      name: 'string',
      heartbeatTime: 'number',
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
  internalUrl?: string;
  publicUrl?: string;
  vpcUrl?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      internalUrl: 'InternalUrl',
      publicUrl: 'PublicUrl',
      vpcUrl: 'VpcUrl',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalUrl: 'string',
      publicUrl: 'string',
      vpcUrl: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBodyRegionConfig extends $tea.Model {
  no?: number;
  fileServerConfig?: QueryRegionConfigResponseBodyRegionConfigFileServerConfig;
  addressServerHost?: string;
  tag?: string;
  agentInstallScript?: string;
  fileServerType?: string;
  name?: string;
  imageId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      no: 'No',
      fileServerConfig: 'FileServerConfig',
      addressServerHost: 'AddressServerHost',
      tag: 'Tag',
      agentInstallScript: 'AgentInstallScript',
      fileServerType: 'FileServerType',
      name: 'Name',
      imageId: 'ImageId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      no: 'number',
      fileServerConfig: QueryRegionConfigResponseBodyRegionConfigFileServerConfig,
      addressServerHost: 'string',
      tag: 'string',
      agentInstallScript: 'string',
      fileServerType: 'string',
      name: 'string',
      imageId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceTimeConfigResponseBodyDataResult extends $tea.Model {
  timeout?: string;
  consumerAppName?: string;
  path?: string;
  consumerAppId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      consumerAppName: 'ConsumerAppName',
      path: 'Path',
      consumerAppId: 'ConsumerAppId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      consumerAppName: 'string',
      path: 'string',
      consumerAppId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceTimeConfigResponseBodyData extends $tea.Model {
  currentPage?: number;
  result?: QueryServiceTimeConfigResponseBodyDataResult[];
  totalSize?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      result: 'Result',
      totalSize: 'TotalSize',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      result: { 'type': 'array', 'itemType': QueryServiceTimeConfigResponseBodyDataResult },
      totalSize: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponseBodyResult extends $tea.Model {
  link?: string;
  createTime?: string;
  logstore?: string;
  consumerSide?: string;
  project?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      createTime: 'CreateTime',
      logstore: 'Logstore',
      consumerSide: 'ConsumerSide',
      project: 'Project',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      createTime: 'string',
      logstore: 'string',
      consumerSide: 'string',
      project: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMockRuleResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
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
  extSlbIp?: string;
  owner?: string;
  slbPort?: number;
  extSlbName?: string;
  createTime?: number;
  userId?: string;
  port?: number;
  runningInstanceCount?: number;
  slbIp?: string;
  dockerize?: boolean;
  description?: string;
  instanceCount?: number;
  appId?: string;
  memory?: number;
  name?: string;
  clusterId?: string;
  healthCheckUrl?: string;
  slbId?: string;
  applicationType?: string;
  extSlbId?: string;
  buildPackageId?: number;
  regionId?: string;
  cpu?: number;
  clusterType?: number;
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      extSlbIp: 'ExtSlbIp',
      owner: 'Owner',
      slbPort: 'SlbPort',
      extSlbName: 'ExtSlbName',
      createTime: 'CreateTime',
      userId: 'UserId',
      port: 'Port',
      runningInstanceCount: 'RunningInstanceCount',
      slbIp: 'SlbIp',
      dockerize: 'Dockerize',
      description: 'Description',
      instanceCount: 'InstanceCount',
      appId: 'AppId',
      memory: 'Memory',
      name: 'Name',
      clusterId: 'ClusterId',
      healthCheckUrl: 'HealthCheckUrl',
      slbId: 'SlbId',
      applicationType: 'ApplicationType',
      extSlbId: 'ExtSlbId',
      buildPackageId: 'BuildPackageId',
      regionId: 'RegionId',
      cpu: 'Cpu',
      clusterType: 'ClusterType',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSlbIp: 'string',
      owner: 'string',
      slbPort: 'number',
      extSlbName: 'string',
      createTime: 'number',
      userId: 'string',
      port: 'number',
      runningInstanceCount: 'number',
      slbIp: 'string',
      dockerize: 'boolean',
      description: 'string',
      instanceCount: 'number',
      appId: 'string',
      memory: 'number',
      name: 'string',
      clusterId: 'string',
      healthCheckUrl: 'string',
      slbId: 'string',
      applicationType: 'string',
      extSlbId: 'string',
      buildPackageId: 'number',
      regionId: 'string',
      cpu: 'number',
      clusterType: 'number',
      slbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerConfigurationResponseBodyContainerConfiguration extends $tea.Model {
  contextPath?: string;
  URIEncoding?: string;
  httpPort?: number;
  useBodyEncoding?: boolean;
  maxThreads?: number;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      URIEncoding: 'URIEncoding',
      httpPort: 'HttpPort',
      useBodyEncoding: 'UseBodyEncoding',
      maxThreads: 'MaxThreads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      URIEncoding: 'string',
      httpPort: 'number',
      useBodyEncoding: 'boolean',
      maxThreads: 'number',
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
  maxPermSize?: number;
  options?: string;
  maxHeapSize?: number;
  minHeapSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxPermSize: 'MaxPermSize',
      options: 'Options',
      maxHeapSize: 'MaxHeapSize',
      minHeapSize: 'MinHeapSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxPermSize: 'number',
      options: 'string',
      maxHeapSize: 'number',
      minHeapSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sIngressRuleResponseBodyChangeOrderIds extends $tea.Model {
  changeOrderId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMockRuleResponseBodyData extends $tea.Model {
  namespaceId?: string;
  scMockItemJson?: string;
  consumerAppName?: string;
  consumerAppId?: string;
  accountId?: string;
  extraJson?: string;
  source?: string;
  region?: string;
  providerAppId?: string;
  dubboMockItemJson?: string;
  providerAppName?: string;
  name?: string;
  id?: number;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      scMockItemJson: 'ScMockItemJson',
      consumerAppName: 'ConsumerAppName',
      consumerAppId: 'ConsumerAppId',
      accountId: 'AccountId',
      extraJson: 'ExtraJson',
      source: 'Source',
      region: 'Region',
      providerAppId: 'ProviderAppId',
      dubboMockItemJson: 'DubboMockItemJson',
      providerAppName: 'ProviderAppName',
      name: 'Name',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      scMockItemJson: 'string',
      consumerAppName: 'string',
      consumerAppId: 'string',
      accountId: 'string',
      extraJson: 'string',
      source: 'string',
      region: 'string',
      providerAppId: 'string',
      dubboMockItemJson: 'string',
      providerAppName: 'string',
      name: 'string',
      id: 'number',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $tea.Model {
  appName?: string;
  appId?: string;
  rules?: string;
  laneId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      rules: 'Rules',
      laneId: 'LaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
      rules: 'string',
      laneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneResponseBodyData extends $tea.Model {
  namespaceId?: string;
  groupId?: number;
  entryRule?: string;
  tag?: string;
  name?: string;
  swimmingLaneAppRelationShipList?: UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      groupId: 'GroupId',
      entryRule: 'EntryRule',
      tag: 'Tag',
      name: 'Name',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      groupId: 'number',
      entryRule: 'string',
      tag: 'string',
      name: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyDataApplicationList extends $tea.Model {
  appName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyDataEntryApplication extends $tea.Model {
  appName?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyData extends $tea.Model {
  namespaceId?: string;
  applicationList?: UpdateSwimmingLaneGroupResponseBodyDataApplicationList[];
  entryApplication?: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      applicationList: { 'type': 'array', 'itemType': UpdateSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication,
      name: 'string',
      id: 'number',
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
    return $tea.cast<AbortAndRollbackChangeOrderResponse>(await this.doROARequest("AbortAndRollbackChangeOrder", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/changeorder/change_order_abort_and_rollback`, "json", req, runtime), new AbortAndRollbackChangeOrderResponse({}));
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
    return $tea.cast<AbortChangeOrderResponse>(await this.doROARequest("AbortChangeOrder", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/changeorder/change_order_abort`, "json", req, runtime), new AbortChangeOrderResponse({}));
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
    return $tea.cast<AddLogPathResponse>(await this.doROARequestWithForm("AddLogPath", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/log/popListLogDirs`, "json", req, runtime), new AddLogPathResponse({}));
  }

  async addMockRule(request: AddMockRuleRequest): Promise<AddMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMockRuleWithOptions(request, headers, runtime);
  }

  async addMockRuleWithOptions(request: AddMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    if (!Util.isUnset(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!Util.isUnset(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!Util.isUnset(request.scMockItemJson)) {
      query["ScMockItemJson"] = request.scMockItemJson;
    }

    if (!Util.isUnset(request.dubboMockItemJson)) {
      query["DubboMockItemJson"] = request.dubboMockItemJson;
    }

    if (!Util.isUnset(request.consumerAppsJson)) {
      query["ConsumerAppsJson"] = request.consumerAppsJson;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddMockRuleResponse>(await this.doROARequest("AddMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/addMockRule`, "json", req, runtime), new AddMockRuleResponse({}));
  }

  async addServiceTimeConfig(request: AddServiceTimeConfigRequest): Promise<AddServiceTimeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addServiceTimeConfigWithOptions(request, headers, runtime);
  }

  async addServiceTimeConfigWithOptions(request: AddServiceTimeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddServiceTimeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.consumerAppName)) {
      query["ConsumerAppName"] = request.consumerAppName;
    }

    if (!Util.isUnset(request.consumerAppId)) {
      query["ConsumerAppId"] = request.consumerAppId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddServiceTimeConfigResponse>(await this.doROARequest("AddServiceTimeConfig", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/timeout/add`, "json", req, runtime), new AddServiceTimeConfigResponse({}));
  }

  async authorizeApplication(request: AuthorizeApplicationRequest): Promise<AuthorizeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeApplicationWithOptions(request, headers, runtime);
  }

  async authorizeApplicationWithOptions(request: AuthorizeApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AuthorizeApplicationResponse>(await this.doROARequest("AuthorizeApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/authorize_app`, "json", req, runtime), new AuthorizeApplicationResponse({}));
  }

  async authorizeResourceGroup(request: AuthorizeResourceGroupRequest): Promise<AuthorizeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeResourceGroupWithOptions(request, headers, runtime);
  }

  async authorizeResourceGroupWithOptions(request: AuthorizeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeResourceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AuthorizeResourceGroupResponse>(await this.doROARequest("AuthorizeResourceGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/authorize_res_group`, "json", req, runtime), new AuthorizeResourceGroupResponse({}));
  }

  async authorizeRole(request: AuthorizeRoleRequest): Promise<AuthorizeRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeRoleWithOptions(request, headers, runtime);
  }

  async authorizeRoleWithOptions(request: AuthorizeRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthorizeRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AuthorizeRoleResponse>(await this.doROARequest("AuthorizeRole", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/authorize_role`, "json", req, runtime), new AuthorizeRoleResponse({}));
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

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.deployGroupId)) {
      query["DeployGroupId"] = request.deployGroupId;
    }

    if (!Util.isUnset(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    if (!Util.isUnset(request.listenerHealthCheckUrl)) {
      query["ListenerHealthCheckUrl"] = request.listenerHealthCheckUrl;
    }

    if (!Util.isUnset(request.VForwardingUrlRule)) {
      query["VForwardingUrlRule"] = request.VForwardingUrlRule;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<BindEcsSlbResponse>(await this.doROARequest("BindEcsSlb", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/slb/bind_slb`, "json", req, runtime), new BindEcsSlbResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<BindK8sSlbResponse>(await this.doROARequest("BindK8sSlb", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/k8s_slb_binding`, "json", req, runtime), new BindK8sSlbResponse({}));
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

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.slbIp)) {
      query["SlbIp"] = request.slbIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<BindSlbResponse>(await this.doROARequest("BindSlb", "2017-08-01", "HTTPS", "POST", "AK", `/pop/app/bind_slb_json`, "json", req, runtime), new BindSlbResponse({}));
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

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.forceStatus)) {
      query["ForceStatus"] = request.forceStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ChangeDeployGroupResponse>(await this.doROARequest("ChangeDeployGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_change_group`, "json", req, runtime), new ChangeDeployGroupResponse({}));
  }

  async continuePipeline(request: ContinuePipelineRequest): Promise<ContinuePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.continuePipelineWithOptions(request, headers, runtime);
  }

  async continuePipelineWithOptions(request: ContinuePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ContinuePipelineResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.confirm)) {
      query["Confirm"] = request.confirm;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ContinuePipelineResponse>(await this.doROARequest("ContinuePipeline", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/changeorder/pipeline_batch_confirm`, "json", req, runtime), new ContinuePipelineResponse({}));
  }

  async convertK8sResource(request: ConvertK8sResourceRequest): Promise<ConvertK8sResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertK8sResourceWithOptions(request, headers, runtime);
  }

  async convertK8sResourceWithOptions(request: ConvertK8sResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConvertK8sResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ConvertK8sResourceResponse>(await this.doROARequest("ConvertK8sResource", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/oam/k8s_resource_convert`, "json", req, runtime), new ConvertK8sResourceResponse({}));
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
    return $tea.cast<CreateIDCImportCommandResponse>(await this.doROARequestWithForm("CreateIDCImportCommand", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/create_idc_import_command`, "json", req, runtime), new CreateIDCImportCommandResponse({}));
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

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateK8sIngressRuleResponse>(await this.doROARequest("CreateK8sIngressRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/k8s_ingress`, "json", req, runtime), new CreateK8sIngressRuleResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateK8sServiceResponse>(await this.doROARequest("CreateK8sService", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/k8s_service`, "json", req, runtime), new CreateK8sServiceResponse({}));
  }

  async delegateAdminRole(request: DelegateAdminRoleRequest): Promise<DelegateAdminRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.delegateAdminRoleWithOptions(request, headers, runtime);
  }

  async delegateAdminRoleWithOptions(request: DelegateAdminRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DelegateAdminRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DelegateAdminRoleResponse>(await this.doROARequest("DelegateAdminRole", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/account/delegate_admin_role`, "json", req, runtime), new DelegateAdminRoleResponse({}));
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
    return $tea.cast<DeleteApplicationResponse>(await this.doROARequest("DeleteApplication", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/changeorder/co_delete_app`, "json", req, runtime), new DeleteApplicationResponse({}));
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
    return $tea.cast<DeleteClusterResponse>(await this.doROARequest("DeleteCluster", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/resource/cluster`, "json", req, runtime), new DeleteClusterResponse({}));
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
    return $tea.cast<DeleteClusterMemberResponse>(await this.doROARequest("DeleteClusterMember", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/resource/cluster_member`, "json", req, runtime), new DeleteClusterMemberResponse({}));
  }

  async deleteConfigCenter(request: DeleteConfigCenterRequest): Promise<DeleteConfigCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigCenterWithOptions(request, headers, runtime);
  }

  async deleteConfigCenterWithOptions(request: DeleteConfigCenterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigCenterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteConfigCenterResponse>(await this.doROARequest("DeleteConfigCenter", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/configCenter`, "json", req, runtime), new DeleteConfigCenterResponse({}));
  }

  async deleteDegradeControl(request: DeleteDegradeControlRequest): Promise<DeleteDegradeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDegradeControlWithOptions(request, headers, runtime);
  }

  async deleteDegradeControlWithOptions(request: DeleteDegradeControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDegradeControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteDegradeControlResponse>(await this.doROARequest("DeleteDegradeControl", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/degradeControl`, "json", req, runtime), new DeleteDegradeControlResponse({}));
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
    return $tea.cast<DeleteDeployGroupResponse>(await this.doROARequest("DeleteDeployGroup", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/deploy_group`, "json", req, runtime), new DeleteDeployGroupResponse({}));
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
    return $tea.cast<DeleteEcuResponse>(await this.doROARequest("DeleteEcu", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/delete_ecu`, "json", req, runtime), new DeleteEcuResponse({}));
  }

  async deleteFlowControl(request: DeleteFlowControlRequest): Promise<DeleteFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowControlWithOptions(request, headers, runtime);
  }

  async deleteFlowControlWithOptions(request: DeleteFlowControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFlowControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteFlowControlResponse>(await this.doROARequest("DeleteFlowControl", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/flowControl`, "json", req, runtime), new DeleteFlowControlResponse({}));
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
    return $tea.cast<DeleteK8sApplicationResponse>(await this.doROARequest("DeleteK8sApplication", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/k8s/acs/k8s_apps`, "json", req, runtime), new DeleteK8sApplicationResponse({}));
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

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteK8sIngressRuleResponse>(await this.doROARequest("DeleteK8sIngressRule", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/k8s/acs/k8s_ingress`, "json", req, runtime), new DeleteK8sIngressRuleResponse({}));
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
    return $tea.cast<DeleteK8sServiceResponse>(await this.doROARequest("DeleteK8sService", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/k8s/acs/k8s_service`, "json", req, runtime), new DeleteK8sServiceResponse({}));
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
    return $tea.cast<DeleteLogPathResponse>(await this.doROARequest("DeleteLogPath", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/log/popListLogDirs`, "json", req, runtime), new DeleteLogPathResponse({}));
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
    return $tea.cast<DeleteRoleResponse>(await this.doROARequest("DeleteRole", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/delete_role`, "json", req, runtime), new DeleteRoleResponse({}));
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
    return $tea.cast<DeleteServiceGroupResponse>(await this.doROARequest("DeleteServiceGroup", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/service/serviceGroups`, "json", req, runtime), new DeleteServiceGroupResponse({}));
  }

  async deleteServiceTimeConfig(request: DeleteServiceTimeConfigRequest): Promise<DeleteServiceTimeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceTimeConfigWithOptions(request, headers, runtime);
  }

  async deleteServiceTimeConfigWithOptions(request: DeleteServiceTimeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceTimeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteServiceTimeConfigResponse>(await this.doROARequest("DeleteServiceTimeConfig", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/timeout/remove`, "json", req, runtime), new DeleteServiceTimeConfigResponse({}));
  }

  async deleteSwimmingLane(request: DeleteSwimmingLaneRequest): Promise<DeleteSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSwimmingLaneWithOptions(request, headers, runtime);
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
    return $tea.cast<DeleteSwimmingLaneResponse>(await this.doROARequest("DeleteSwimmingLane", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/trafficmgnt/swimming_lanes`, "json", req, runtime), new DeleteSwimmingLaneResponse({}));
  }

  async deleteSwimmingLaneGroup(request: DeleteSwimmingLaneGroupRequest): Promise<DeleteSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  async deleteSwimmingLaneGroupWithOptions(request: DeleteSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteSwimmingLaneGroupResponse>(await this.doROARequest("DeleteSwimmingLaneGroup", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/trafficmgnt/swimming_lane_groups`, "json", req, runtime), new DeleteSwimmingLaneGroupResponse({}));
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
    return $tea.cast<DeleteUserDefineRegionResponse>(await this.doROARequest("DeleteUserDefineRegion", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/user_region_def`, "json", req, runtime), new DeleteUserDefineRegionResponse({}));
  }

  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  async deployApplicationWithOptions(request: DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.warUrl)) {
      query["WarUrl"] = request.warUrl;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.appEnv)) {
      query["AppEnv"] = request.appEnv;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!Util.isUnset(request.releaseType)) {
      query["ReleaseType"] = request.releaseType;
    }

    if (!Util.isUnset(request.gray)) {
      query["Gray"] = request.gray;
    }

    if (!Util.isUnset(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeployApplicationResponse>(await this.doROARequest("DeployApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_deploy`, "json", req, runtime), new DeployApplicationResponse({}));
  }

  async deployK8sApplication(request: DeployK8sApplicationRequest): Promise<DeployK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployK8sApplicationWithOptions(request, headers, runtime);
  }

  async deployK8sApplicationWithOptions(request: DeployK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.args)) {
      query["Args"] = request.args;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!Util.isUnset(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!Util.isUnset(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!Util.isUnset(request.memoryRequest)) {
      query["MemoryRequest"] = request.memoryRequest;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!Util.isUnset(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
    }

    if (!Util.isUnset(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!Util.isUnset(request.volumesStr)) {
      query["VolumesStr"] = request.volumesStr;
    }

    if (!Util.isUnset(request.packageVersionId)) {
      query["PackageVersionId"] = request.packageVersionId;
    }

    if (!Util.isUnset(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!Util.isUnset(request.batchTimeout)) {
      query["BatchTimeout"] = request.batchTimeout;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    if (!Util.isUnset(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeployK8sApplicationResponse>(await this.doROARequest("DeployK8sApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/k8s_apps`, "json", req, runtime), new DeployK8sApplicationResponse({}));
  }

  async disableDegradeControl(request: DisableDegradeControlRequest): Promise<DisableDegradeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableDegradeControlWithOptions(request, headers, runtime);
  }

  async disableDegradeControlWithOptions(request: DisableDegradeControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableDegradeControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DisableDegradeControlResponse>(await this.doROARequest("DisableDegradeControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/degradecontrol/disable`, "json", req, runtime), new DisableDegradeControlResponse({}));
  }

  async disableFlowControl(request: DisableFlowControlRequest): Promise<DisableFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableFlowControlWithOptions(request, headers, runtime);
  }

  async disableFlowControlWithOptions(request: DisableFlowControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableFlowControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DisableFlowControlResponse>(await this.doROARequest("DisableFlowControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/flowcontrol/disable`, "json", req, runtime), new DisableFlowControlResponse({}));
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
    return $tea.cast<DisableMockRuleResponse>(await this.doROARequest("DisableMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/disableMockRule`, "json", req, runtime), new DisableMockRuleResponse({}));
  }

  async enableDegradeControl(request: EnableDegradeControlRequest): Promise<EnableDegradeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableDegradeControlWithOptions(request, headers, runtime);
  }

  async enableDegradeControlWithOptions(request: EnableDegradeControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableDegradeControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<EnableDegradeControlResponse>(await this.doROARequest("EnableDegradeControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/degradecontrol/enable`, "json", req, runtime), new EnableDegradeControlResponse({}));
  }

  async enableFlowControl(request: EnableFlowControlRequest): Promise<EnableFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableFlowControlWithOptions(request, headers, runtime);
  }

  async enableFlowControlWithOptions(request: EnableFlowControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableFlowControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<EnableFlowControlResponse>(await this.doROARequest("EnableFlowControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/flowcontrol/enable`, "json", req, runtime), new EnableFlowControlResponse({}));
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
    return $tea.cast<EnableMockRuleResponse>(await this.doROARequest("EnableMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/enableMockRule`, "json", req, runtime), new EnableMockRuleResponse({}));
  }

  async executeStatus(request: ExecuteStatusRequest): Promise<ExecuteStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeStatusWithOptions(request, headers, runtime);
  }

  async executeStatusWithOptions(request: ExecuteStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ExecuteStatusResponse>(await this.doROARequest("ExecuteStatus", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mse/status/execute`, "json", req, runtime), new ExecuteStatusResponse({}));
  }

  async getAccountMockRule(request: GetAccountMockRuleRequest): Promise<GetAccountMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccountMockRuleWithOptions(request, headers, runtime);
  }

  async getAccountMockRuleWithOptions(request: GetAccountMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAccountMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.consumerAppName)) {
      query["ConsumerAppName"] = request.consumerAppName;
    }

    if (!Util.isUnset(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetAccountMockRuleResponse>(await this.doROARequest("GetAccountMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/getAccountMockRule`, "json", req, runtime), new GetAccountMockRuleResponse({}));
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
    return $tea.cast<GetApplicationResponse>(await this.doROARequest("GetApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/app_info`, "json", req, runtime), new GetApplicationResponse({}));
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
    return $tea.cast<GetChangeOrderInfoResponse>(await this.doROARequest("GetChangeOrderInfo", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/change_order_info`, "json", req, runtime), new GetChangeOrderInfoResponse({}));
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
    return $tea.cast<GetClusterResponse>(await this.doROARequest("GetCluster", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/cluster`, "json", req, runtime), new GetClusterResponse({}));
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
    return $tea.cast<GetContainerConfigurationResponse>(await this.doROARequest("GetContainerConfiguration", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/container_config`, "json", req, runtime), new GetContainerConfigurationResponse({}));
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
    return $tea.cast<GetJvmConfigurationResponse>(await this.doROARequest("GetJvmConfiguration", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/app_jvm_config`, "json", req, runtime), new GetJvmConfigurationResponse({}));
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
    return $tea.cast<GetK8sApplicationResponse>(await this.doROARequest("GetK8sApplication", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/changeorder/co_application`, "json", req, runtime), new GetK8sApplicationResponse({}));
  }

  async getK8sCluster(request: GetK8sClusterRequest): Promise<GetK8sClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sClusterWithOptions(request, headers, runtime);
  }

  async getK8sClusterWithOptions(request: GetK8sClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetK8sClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetK8sClusterResponse>(await this.doROARequest("GetK8sCluster", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s_clusters`, "json", req, runtime), new GetK8sClusterResponse({}));
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
    return $tea.cast<GetK8sServicesResponse>(await this.doROARequest("GetK8sServices", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/k8s/acs/k8s_service`, "json", req, runtime), new GetK8sServicesResponse({}));
  }

  async getMockRuleByConsumerAppId(request: GetMockRuleByConsumerAppIdRequest): Promise<GetMockRuleByConsumerAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMockRuleByConsumerAppIdWithOptions(request, headers, runtime);
  }

  async getMockRuleByConsumerAppIdWithOptions(request: GetMockRuleByConsumerAppIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMockRuleByConsumerAppIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.consumerAppId)) {
      query["ConsumerAppId"] = request.consumerAppId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetMockRuleByConsumerAppIdResponse>(await this.doROARequest("GetMockRuleByConsumerAppId", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/getMockRuleByConsumerAppId`, "json", req, runtime), new GetMockRuleByConsumerAppIdResponse({}));
  }

  async getMockRuleById(request: GetMockRuleByIdRequest): Promise<GetMockRuleByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMockRuleByIdWithOptions(request, headers, runtime);
  }

  async getMockRuleByIdWithOptions(request: GetMockRuleByIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMockRuleByIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetMockRuleByIdResponse>(await this.doROARequest("GetMockRuleById", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/getMockRuleById`, "json", req, runtime), new GetMockRuleByIdResponse({}));
  }

  async getMockRuleByProviderAppId(request: GetMockRuleByProviderAppIdRequest): Promise<GetMockRuleByProviderAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMockRuleByProviderAppIdWithOptions(request, headers, runtime);
  }

  async getMockRuleByProviderAppIdWithOptions(request: GetMockRuleByProviderAppIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMockRuleByProviderAppIdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetMockRuleByProviderAppIdResponse>(await this.doROARequest("GetMockRuleByProviderAppId", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/getMockRuleByProviderAppId`, "json", req, runtime), new GetMockRuleByProviderAppIdResponse({}));
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
    return $tea.cast<GetPackageStorageCredentialResponse>(await this.doROARequest("GetPackageStorageCredential", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/package_storage_credential`, "json", req, runtime), new GetPackageStorageCredentialResponse({}));
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
    return $tea.cast<GetScalingRulesResponse>(await this.doROARequest("GetScalingRules", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/scalingRules`, "json", req, runtime), new GetScalingRulesResponse({}));
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
    return $tea.cast<GetSecureTokenResponse>(await this.doROARequest("GetSecureToken", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/secure_token`, "json", req, runtime), new GetSecureTokenResponse({}));
  }

  async getServiceConsumersPage(request: GetServiceConsumersPageRequest): Promise<GetServiceConsumersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceConsumersPageWithOptions(request, headers, runtime);
  }

  async getServiceConsumersPageWithOptions(request: GetServiceConsumersPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceConsumersPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceConsumersPageResponse>(await this.doROARequest("GetServiceConsumersPage", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceConsumersPage`, "json", req, runtime), new GetServiceConsumersPageResponse({}));
  }

  async getServiceDetail(request: GetServiceDetailRequest): Promise<GetServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDetailWithOptions(request, headers, runtime);
  }

  async getServiceDetailWithOptions(request: GetServiceDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceDetailResponse>(await this.doROARequest("GetServiceDetail", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceDetail`, "json", req, runtime), new GetServiceDetailResponse({}));
  }

  async getServiceList(request: GetServiceListRequest): Promise<GetServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceListWithOptions(request, headers, runtime);
  }

  async getServiceListWithOptions(request: GetServiceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.searchType)) {
      query["searchType"] = request.searchType;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["searchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.side)) {
      query["side"] = request.side;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceListResponse>(await this.doROARequest("GetServiceList", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceList`, "json", req, runtime), new GetServiceListResponse({}));
  }

  async getServiceListPage(request: GetServiceListPageRequest): Promise<GetServiceListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceListPageWithOptions(request, headers, runtime);
  }

  async getServiceListPageWithOptions(request: GetServiceListPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceListPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.searchType)) {
      query["searchType"] = request.searchType;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["searchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.side)) {
      query["side"] = request.side;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceListPageResponse>(await this.doROARequest("GetServiceListPage", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceListPage`, "json", req, runtime), new GetServiceListPageResponse({}));
  }

  async getServiceMethodPage(request: GetServiceMethodPageRequest): Promise<GetServiceMethodPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceMethodPageWithOptions(request, headers, runtime);
  }

  async getServiceMethodPageWithOptions(request: GetServiceMethodPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceMethodPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.methodController)) {
      query["methodController"] = request.methodController;
    }

    if (!Util.isUnset(request.path)) {
      query["path"] = request.path;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceMethodPageResponse>(await this.doROARequest("GetServiceMethodPage", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceMethodPage`, "json", req, runtime), new GetServiceMethodPageResponse({}));
  }

  async getServiceProvidersPage(request: GetServiceProvidersPageRequest): Promise<GetServiceProvidersPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceProvidersPageWithOptions(request, headers, runtime);
  }

  async getServiceProvidersPageWithOptions(request: GetServiceProvidersPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceProvidersPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceProvidersPageResponse>(await this.doROARequest("GetServiceProvidersPage", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mseForOam/getServiceProvidersPage`, "json", req, runtime), new GetServiceProvidersPageResponse({}));
  }

  async getSubAccountInfo(request: GetSubAccountInfoRequest): Promise<GetSubAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubAccountInfoWithOptions(request, headers, runtime);
  }

  async getSubAccountInfoWithOptions(request: GetSubAccountInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSubAccountInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetSubAccountInfoResponse>(await this.doROARequest("GetSubAccountInfo", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/sub_account_info`, "json", req, runtime), new GetSubAccountInfoResponse({}));
  }

  async getSwimmingLane(request: GetSwimmingLaneRequest): Promise<GetSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSwimmingLaneWithOptions(request, headers, runtime);
  }

  async getSwimmingLaneWithOptions(request: GetSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetSwimmingLaneResponse>(await this.doROARequest("GetSwimmingLane", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/trafficmgnt/swimming_lane`, "json", req, runtime), new GetSwimmingLaneResponse({}));
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

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.enableAsm)) {
      query["EnableAsm"] = request.enableAsm;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ImportK8sClusterResponse>(await this.doROARequest("ImportK8sCluster", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/import_k8s_cluster`, "json", req, runtime), new ImportK8sClusterResponse({}));
  }

  async insertApplication(request: InsertApplicationRequest): Promise<InsertApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertApplicationWithOptions(request, headers, runtime);
  }

  async insertApplicationWithOptions(request: InsertApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.reservedPortStr)) {
      query["ReservedPortStr"] = request.reservedPortStr;
    }

    if (!Util.isUnset(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.mem)) {
      query["Mem"] = request.mem;
    }

    if (!Util.isUnset(request.healthCheckURL)) {
      query["HealthCheckURL"] = request.healthCheckURL;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!Util.isUnset(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    if (!Util.isUnset(request.jvmOptions)) {
      query["JvmOptions"] = request.jvmOptions;
    }

    if (!Util.isUnset(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!Util.isUnset(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!Util.isUnset(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    if (!Util.isUnset(request.enableUrlCheck)) {
      query["EnableUrlCheck"] = request.enableUrlCheck;
    }

    if (!Util.isUnset(request.enablePortCheck)) {
      query["EnablePortCheck"] = request.enablePortCheck;
    }

    if (!Util.isUnset(request.healthCheckUrl)) {
      query["HealthCheckUrl"] = request.healthCheckUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertApplicationResponse>(await this.doROARequest("InsertApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_create_app`, "json", req, runtime), new InsertApplicationResponse({}));
  }

  async insertCluster(request: InsertClusterRequest): Promise<InsertClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterWithOptions(request, headers, runtime);
  }

  async insertClusterWithOptions(request: InsertClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.oversoldFactor)) {
      query["OversoldFactor"] = request.oversoldFactor;
    }

    if (!Util.isUnset(request.iaasProvider)) {
      query["IaasProvider"] = request.iaasProvider;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertClusterResponse>(await this.doROARequest("InsertCluster", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/cluster`, "json", req, runtime), new InsertClusterResponse({}));
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
    return $tea.cast<InsertClusterMemberResponse>(await this.doROARequest("InsertClusterMember", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/cluster_member`, "json", req, runtime), new InsertClusterMemberResponse({}));
  }

  async insertConfigCenter(request: InsertConfigCenterRequest): Promise<InsertConfigCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertConfigCenterWithOptions(request, headers, runtime);
  }

  async insertConfigCenterWithOptions(request: InsertConfigCenterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertConfigCenterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertConfigCenterResponse>(await this.doROARequest("InsertConfigCenter", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/configCenter`, "json", req, runtime), new InsertConfigCenterResponse({}));
  }

  async insertDegradeControl(request: InsertDegradeControlRequest): Promise<InsertDegradeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertDegradeControlWithOptions(request, headers, runtime);
  }

  async insertDegradeControlWithOptions(request: InsertDegradeControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertDegradeControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.rtThreshold)) {
      query["RtThreshold"] = request.rtThreshold;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.urlVar)) {
      query["UrlVar"] = request.urlVar;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertDegradeControlResponse>(await this.doROARequest("InsertDegradeControl", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/degradeControl`, "json", req, runtime), new InsertDegradeControlResponse({}));
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
    return $tea.cast<InsertDeployGroupResponse>(await this.doROARequest("InsertDeployGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/deploy_group`, "json", req, runtime), new InsertDeployGroupResponse({}));
  }

  async insertFlowControl(request: InsertFlowControlRequest): Promise<InsertFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertFlowControlWithOptions(request, headers, runtime);
  }

  async insertFlowControlWithOptions(request: InsertFlowControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertFlowControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.consumerAppId)) {
      query["ConsumerAppId"] = request.consumerAppId;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.urlVar)) {
      query["UrlVar"] = request.urlVar;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertFlowControlResponse>(await this.doROARequest("InsertFlowControl", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/flowControl`, "json", req, runtime), new InsertFlowControlResponse({}));
  }

  async insertK8sApplication(request: InsertK8sApplicationRequest): Promise<InsertK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertK8sApplicationWithOptions(request, headers, runtime);
  }

  async insertK8sApplicationWithOptions(request: InsertK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.intranetTargetPort)) {
      query["IntranetTargetPort"] = request.intranetTargetPort;
    }

    if (!Util.isUnset(request.intranetSlbPort)) {
      query["IntranetSlbPort"] = request.intranetSlbPort;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.applicationDescription)) {
      query["ApplicationDescription"] = request.applicationDescription;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.limitCpu)) {
      query["LimitCpu"] = request.limitCpu;
    }

    if (!Util.isUnset(request.limitMem)) {
      query["LimitMem"] = request.limitMem;
    }

    if (!Util.isUnset(request.requestsCpu)) {
      query["RequestsCpu"] = request.requestsCpu;
    }

    if (!Util.isUnset(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.intranetSlbProtocol)) {
      query["IntranetSlbProtocol"] = request.intranetSlbProtocol;
    }

    if (!Util.isUnset(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!Util.isUnset(request.internetSlbProtocol)) {
      query["InternetSlbProtocol"] = request.internetSlbProtocol;
    }

    if (!Util.isUnset(request.internetSlbPort)) {
      query["InternetSlbPort"] = request.internetSlbPort;
    }

    if (!Util.isUnset(request.internetTargetPort)) {
      query["InternetTargetPort"] = request.internetTargetPort;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
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

    if (!Util.isUnset(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!Util.isUnset(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!Util.isUnset(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    if (!Util.isUnset(request.limitmCpu)) {
      query["LimitmCpu"] = request.limitmCpu;
    }

    if (!Util.isUnset(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!Util.isUnset(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    if (!Util.isUnset(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.isMultilingualApp)) {
      query["IsMultilingualApp"] = request.isMultilingualApp;
    }

    if (!Util.isUnset(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertK8sApplicationResponse>(await this.doROARequest("InsertK8sApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/create_k8s_app`, "json", req, runtime), new InsertK8sApplicationResponse({}));
  }

  async insertOrUpdateRegion(request: InsertOrUpdateRegionRequest): Promise<InsertOrUpdateRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertOrUpdateRegionWithOptions(request, headers, runtime);
  }

  async insertOrUpdateRegionWithOptions(request: InsertOrUpdateRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertOrUpdateRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.debugEnable)) {
      query["DebugEnable"] = request.debugEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertOrUpdateRegionResponse>(await this.doROARequest("InsertOrUpdateRegion", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/user_region_def`, "json", req, runtime), new InsertOrUpdateRegionResponse({}));
  }

  async insertRole(request: InsertRoleRequest): Promise<InsertRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertRoleWithOptions(request, headers, runtime);
  }

  async insertRoleWithOptions(request: InsertRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertRoleResponse>(await this.doROARequest("InsertRole", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/create_role`, "json", req, runtime), new InsertRoleResponse({}));
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
    return $tea.cast<InsertServiceGroupResponse>(await this.doROARequest("InsertServiceGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/service/serviceGroups`, "json", req, runtime), new InsertServiceGroupResponse({}));
  }

  async insertSwimmingLane(request: InsertSwimmingLaneRequest): Promise<InsertSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneWithOptions(request, headers, runtime);
  }

  async insertSwimmingLaneWithOptions(request: InsertSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!Util.isUnset(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!Util.isUnset(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertSwimmingLaneResponse>(await this.doROARequest("InsertSwimmingLane", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/trafficmgnt/swimming_lanes`, "json", req, runtime), new InsertSwimmingLaneResponse({}));
  }

  async insertSwimmingLaneGroup(request: InsertSwimmingLaneGroupRequest): Promise<InsertSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  async insertSwimmingLaneGroupWithOptions(request: InsertSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InsertSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InsertSwimmingLaneGroupResponse>(await this.doROARequest("InsertSwimmingLaneGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/trafficmgnt/swimming_lane_groups`, "json", req, runtime), new InsertSwimmingLaneGroupResponse({}));
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

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.doAsync)) {
      query["DoAsync"] = request.doAsync;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InstallAgentResponse>(await this.doROARequest("InstallAgent", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/ecss/install_agent`, "json", req, runtime), new InstallAgentResponse({}));
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
    return $tea.cast<ListAliyunRegionResponse>(await this.doROARequest("ListAliyunRegion", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/region_list`, "json", req, runtime), new ListAliyunRegionResponse({}));
  }

  async listApplication(request: ListApplicationRequest): Promise<ListApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationWithOptions(request, headers, runtime);
  }

  async listApplicationWithOptions(request: ListApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.logicalRegionIdFilter)) {
      query["LogicalRegionIdFilter"] = request.logicalRegionIdFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListApplicationResponse>(await this.doROARequest("ListApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/app_list`, "json", req, runtime), new ListApplicationResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListApplicationEcuResponse>(await this.doROARequest("ListApplicationEcu", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/ecu_list`, "json", req, runtime), new ListApplicationEcuResponse({}));
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
    return $tea.cast<ListAuthorityResponse>(await this.doROARequest("ListAuthority", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/authority_list`, "json", req, runtime), new ListAuthorityResponse({}));
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
    return $tea.cast<ListBuildPackResponse>(await this.doROARequest("ListBuildPack", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/build_pack_list`, "json", req, runtime), new ListBuildPackResponse({}));
  }

  async listChildrenStacks(request: ListChildrenStacksRequest): Promise<ListChildrenStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChildrenStacksWithOptions(request, headers, runtime);
  }

  async listChildrenStacksWithOptions(request: ListChildrenStacksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChildrenStacksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

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
    return $tea.cast<ListChildrenStacksResponse>(await this.doROARequest("ListChildrenStacks", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/s2i/list_children_stack`, "json", req, runtime), new ListChildrenStacksResponse({}));
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
    return $tea.cast<ListClusterResponse>(await this.doROARequest("ListCluster", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/cluster_list`, "json", req, runtime), new ListClusterResponse({}));
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

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ecsList)) {
      query["EcsList"] = request.ecsList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListClusterMembersResponse>(await this.doROARequest("ListClusterMembers", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/cluster_member_list`, "json", req, runtime), new ListClusterMembersResponse({}));
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
    return $tea.cast<ListComponentsResponse>(await this.doROARequest("ListComponents", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/components`, "json", req, runtime), new ListComponentsResponse({}));
  }

  async listConfigCenters(request: ListConfigCentersRequest): Promise<ListConfigCentersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigCentersWithOptions(request, headers, runtime);
  }

  async listConfigCentersWithOptions(request: ListConfigCentersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConfigCentersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataIdPattern)) {
      query["DataIdPattern"] = request.dataIdPattern;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListConfigCentersResponse>(await this.doROARequest("ListConfigCenters", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/configCenters`, "json", req, runtime), new ListConfigCentersResponse({}));
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
    return $tea.cast<ListConsumedServicesResponse>(await this.doROARequest("ListConsumedServices", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/service/listConsumedServices`, "json", req, runtime), new ListConsumedServicesResponse({}));
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
    return $tea.cast<ListConvertableEcuResponse>(await this.doROARequest("ListConvertableEcu", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/convertable_ecu_list`, "json", req, runtime), new ListConvertableEcuResponse({}));
  }

  async listCSBGateway(request: ListCSBGatewayRequest): Promise<ListCSBGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCSBGatewayWithOptions(request, headers, runtime);
  }

  async listCSBGatewayWithOptions(request: ListCSBGatewayRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCSBGatewayResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListCSBGatewayResponse>(await this.doROARequest("ListCSBGateway", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/csbgateway/gateway`, "json", req, runtime), new ListCSBGatewayResponse({}));
  }

  async listDegradeControls(request: ListDegradeControlsRequest): Promise<ListDegradeControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDegradeControlsWithOptions(request, headers, runtime);
  }

  async listDegradeControlsWithOptions(request: ListDegradeControlsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDegradeControlsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDegradeControlsResponse>(await this.doROARequest("ListDegradeControls", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/degradeControls`, "json", req, runtime), new ListDegradeControlsResponse({}));
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
    return $tea.cast<ListDeployGroupResponse>(await this.doROARequest("ListDeployGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/deploy_group_list`, "json", req, runtime), new ListDeployGroupResponse({}));
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
    return $tea.cast<ListEcsNotInClusterResponse>(await this.doROARequest("ListEcsNotInCluster", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/ecs_not_in_cluster`, "json", req, runtime), new ListEcsNotInClusterResponse({}));
  }

  async listEcuByRegion(request: ListEcuByRegionRequest): Promise<ListEcuByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcuByRegionWithOptions(request, headers, runtime);
  }

  async listEcuByRegionWithOptions(request: ListEcuByRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcuByRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.act)) {
      query["Act"] = request.act;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListEcuByRegionResponse>(await this.doROARequest("ListEcuByRegion", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/ecu_list`, "json", req, runtime), new ListEcuByRegionResponse({}));
  }

  async listFlowControls(request: ListFlowControlsRequest): Promise<ListFlowControlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlsWithOptions(request, headers, runtime);
  }

  async listFlowControlsWithOptions(request: ListFlowControlsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListFlowControlsResponse>(await this.doROARequest("ListFlowControls", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/flowControls`, "json", req, runtime), new ListFlowControlsResponse({}));
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
    return $tea.cast<ListHistoryDeployVersionResponse>(await this.doROARequest("ListHistoryDeployVersion", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/deploy_history_version_list`, "json", req, runtime), new ListHistoryDeployVersionResponse({}));
  }

  async listK8sIngressRules(request: ListK8sIngressRulesRequest): Promise<ListK8sIngressRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sIngressRulesWithOptions(request, headers, runtime);
  }

  async listK8sIngressRulesWithOptions(request: ListK8sIngressRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListK8sIngressRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
    return $tea.cast<ListK8sIngressRulesResponse>(await this.doROARequest("ListK8sIngressRules", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/k8s/acs/k8s_ingress`, "json", req, runtime), new ListK8sIngressRulesResponse({}));
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
    return $tea.cast<ListMethodsResponse>(await this.doROARequest("ListMethods", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/service/list_methods`, "json", req, runtime), new ListMethodsResponse({}));
  }

  async listOperationLogs(request: ListOperationLogsRequest): Promise<ListOperationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationLogsWithOptions(request, headers, runtime);
  }

  async listOperationLogsWithOptions(request: ListOperationLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOperationLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

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
    return $tea.cast<ListOperationLogsResponse>(await this.doROARequest("ListOperationLogs", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/operationlog/log_list`, "json", req, runtime), new ListOperationLogsResponse({}));
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
    return $tea.cast<ListPublishedServicesResponse>(await this.doROARequest("ListPublishedServices", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/service/listPublishedServices`, "json", req, runtime), new ListPublishedServicesResponse({}));
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
    return $tea.cast<ListRecentChangeOrderResponse>(await this.doROARequest("ListRecentChangeOrder", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/change_order_list`, "json", req, runtime), new ListRecentChangeOrderResponse({}));
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
    return $tea.cast<ListResourceGroupResponse>(await this.doROARequest("ListResourceGroup", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/reg_group_list`, "json", req, runtime), new ListResourceGroupResponse({}));
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
    return $tea.cast<ListRoleResponse>(await this.doROARequest("ListRole", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/role_list`, "json", req, runtime), new ListRoleResponse({}));
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
    return $tea.cast<ListRootStacksResponse>(await this.doROARequest("ListRootStacks", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/s2i/list_root_stack`, "json", req, runtime), new ListRootStacksResponse({}));
  }

  async listScaleOutEcu(request: ListScaleOutEcuRequest): Promise<ListScaleOutEcuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScaleOutEcuWithOptions(request, headers, runtime);
  }

  async listScaleOutEcuWithOptions(request: ListScaleOutEcuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScaleOutEcuResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.mem)) {
      query["Mem"] = request.mem;
    }

    if (!Util.isUnset(request.instanceNum)) {
      query["InstanceNum"] = request.instanceNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListScaleOutEcuResponse>(await this.doROARequest("ListScaleOutEcu", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/scale_out_ecu_list`, "json", req, runtime), new ListScaleOutEcuResponse({}));
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
    return $tea.cast<ListServiceGroupsResponse>(await this.doROARequest("ListServiceGroups", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/service/serviceGroups`, "json", req, runtime), new ListServiceGroupsResponse({}));
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
    return $tea.cast<ListSlbResponse>(await this.doROARequest("ListSlb", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/slb_list`, "json", req, runtime), new ListSlbResponse({}));
  }

  async listStatus(request: ListStatusRequest): Promise<ListStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatusWithOptions(request, headers, runtime);
  }

  async listStatusWithOptions(request: ListStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.podName)) {
      query["PodName"] = request.podName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListStatusResponse>(await this.doROARequest("ListStatus", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mse/status/list`, "json", req, runtime), new ListStatusResponse({}));
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
    return $tea.cast<ListSubAccountResponse>(await this.doROARequest("ListSubAccount", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/sub_account_list`, "json", req, runtime), new ListSubAccountResponse({}));
  }

  async listSwimmingLane(request: ListSwimmingLaneRequest): Promise<ListSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneWithOptions(request, headers, runtime);
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
    return $tea.cast<ListSwimmingLaneResponse>(await this.doROARequest("ListSwimmingLane", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/trafficmgnt/swimming_lanes`, "json", req, runtime), new ListSwimmingLaneResponse({}));
  }

  async listSwimmingLaneGroup(request: ListSwimmingLaneGroupRequest): Promise<ListSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  async listSwimmingLaneGroupWithOptions(request: ListSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSwimmingLaneGroupResponse>(await this.doROARequest("ListSwimmingLaneGroup", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/trafficmgnt/swimming_lane_groups`, "json", req, runtime), new ListSwimmingLaneGroupResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doROARequest("ListTagResources", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/tag/tags`, "json", req, runtime), new ListTagResourcesResponse({}));
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
    return $tea.cast<ListUserDefineRegionResponse>(await this.doROARequest("ListUserDefineRegion", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/user_region_defs`, "json", req, runtime), new ListUserDefineRegionResponse({}));
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
    return $tea.cast<ListVpcResponse>(await this.doROARequest("ListVpc", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/vpc_list`, "json", req, runtime), new ListVpcResponse({}));
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
    return $tea.cast<MigrateEcuResponse>(await this.doROARequest("MigrateEcu", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/migrate_ecu`, "json", req, runtime), new MigrateEcuResponse({}));
  }

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScalingRuleWithOptions(request, headers, runtime);
  }

  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.inCondition)) {
      query["InCondition"] = request.inCondition;
    }

    if (!Util.isUnset(request.inEnable)) {
      query["InEnable"] = request.inEnable;
    }

    if (!Util.isUnset(request.inCpu)) {
      query["InCpu"] = request.inCpu;
    }

    if (!Util.isUnset(request.inDuration)) {
      query["InDuration"] = request.inDuration;
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

    if (!Util.isUnset(request.outCondition)) {
      query["OutCondition"] = request.outCondition;
    }

    if (!Util.isUnset(request.outCPU)) {
      query["OutCPU"] = request.outCPU;
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

    if (!Util.isUnset(request.resourceFrom)) {
      query["ResourceFrom"] = request.resourceFrom;
    }

    if (!Util.isUnset(request.multiAzPolicy)) {
      query["MultiAzPolicy"] = request.multiAzPolicy;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!Util.isUnset(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!Util.isUnset(request.templateInstanceName)) {
      query["TemplateInstanceName"] = request.templateInstanceName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.acceptEULA)) {
      query["AcceptEULA"] = request.acceptEULA;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifyScalingRuleResponse>(await this.doROARequest("ModifyScalingRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/scaling_rules`, "json", req, runtime), new ModifyScalingRuleResponse({}));
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
    return $tea.cast<QueryApplicationStatusResponse>(await this.doROARequest("QueryApplicationStatus", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/app/app_status`, "json", req, runtime), new QueryApplicationStatusResponse({}));
  }

  async queryConfigCenter(request: QueryConfigCenterRequest): Promise<QueryConfigCenterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryConfigCenterWithOptions(request, headers, runtime);
  }

  async queryConfigCenterWithOptions(request: QueryConfigCenterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryConfigCenterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryConfigCenterResponse>(await this.doROARequest("QueryConfigCenter", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/configCenter`, "json", req, runtime), new QueryConfigCenterResponse({}));
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
    return $tea.cast<QueryEccInfoResponse>(await this.doROARequest("QueryEccInfo", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/ecc`, "json", req, runtime), new QueryEccInfoResponse({}));
  }

  async queryK8sClusterLogProjectInfo(request: QueryK8sClusterLogProjectInfoRequest): Promise<QueryK8sClusterLogProjectInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryK8sClusterLogProjectInfoWithOptions(request, headers, runtime);
  }

  async queryK8sClusterLogProjectInfoWithOptions(request: QueryK8sClusterLogProjectInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryK8sClusterLogProjectInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryK8sClusterLogProjectInfoResponse>(await this.doROARequest("QueryK8sClusterLogProjectInfo", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/k8s/sls/project`, "json", req, runtime), new QueryK8sClusterLogProjectInfoResponse({}));
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
    return $tea.cast<QueryMigrateEcuListResponse>(await this.doROARequest("QueryMigrateEcuList", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/migrate_ecu_list`, "json", req, runtime), new QueryMigrateEcuListResponse({}));
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
    return $tea.cast<QueryMigrateRegionListResponse>(await this.doROARequest("QueryMigrateRegionList", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/migrate_region_select`, "json", req, runtime), new QueryMigrateRegionListResponse({}));
  }

  async queryMonitorInfo(request: QueryMonitorInfoRequest): Promise<QueryMonitorInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMonitorInfoWithOptions(request, headers, runtime);
  }

  async queryMonitorInfoWithOptions(request: QueryMonitorInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryMonitorInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryMonitorInfoResponse>(await this.doROARequest("QueryMonitorInfo", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/monitor/queryMonitorInfo`, "json", req, runtime), new QueryMonitorInfoResponse({}));
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
    return $tea.cast<QueryRegionConfigResponse>(await this.doROARequest("QueryRegionConfig", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/region_config`, "json", req, runtime), new QueryRegionConfigResponse({}));
  }

  async queryServiceTimeConfig(request: QueryServiceTimeConfigRequest): Promise<QueryServiceTimeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryServiceTimeConfigWithOptions(request, headers, runtime);
  }

  async queryServiceTimeConfigWithOptions(request: QueryServiceTimeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryServiceTimeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QueryServiceTimeConfigResponse>(await this.doROARequest("QueryServiceTimeConfig", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/timeout/page`, "json", req, runtime), new QueryServiceTimeConfigResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<QuerySlsLogStoreListResponse>(await this.doROARequest("QuerySlsLogStoreList", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/k8s/sls/query_sls_log_store_list`, "json", req, runtime), new QuerySlsLogStoreListResponse({}));
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
    return $tea.cast<RemoveMockRuleResponse>(await this.doROARequest("RemoveMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/removeMockRule`, "json", req, runtime), new RemoveMockRuleResponse({}));
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
    return $tea.cast<ResetApplicationResponse>(await this.doROARequest("ResetApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_reset`, "json", req, runtime), new ResetApplicationResponse({}));
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
    return $tea.cast<RestartApplicationResponse>(await this.doROARequest("RestartApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_restart`, "json", req, runtime), new RestartApplicationResponse({}));
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
    return $tea.cast<RestartK8sApplicationResponse>(await this.doROARequest("RestartK8sApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/restart_k8s_app`, "json", req, runtime), new RestartK8sApplicationResponse({}));
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

    if (!Util.isUnset(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RollbackApplicationResponse>(await this.doROARequest("RollbackApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_rollback`, "json", req, runtime), new RollbackApplicationResponse({}));
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
    return $tea.cast<RollbackChangeOrderResponse>(await this.doROARequest("RollbackChangeOrder", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/oam/changeorder/rollback`, "json", req, runtime), new RollbackChangeOrderResponse({}));
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
    return $tea.cast<ScaleInApplicationResponse>(await this.doROARequest("ScaleInApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_scale_in`, "json", req, runtime), new ScaleInApplicationResponse({}));
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
    return $tea.cast<ScaleK8sApplicationResponse>(await this.doROARequest("ScaleK8sApplication", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/k8s/acs/k8s_apps`, "json", req, runtime), new ScaleK8sApplicationResponse({}));
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

    if (!Util.isUnset(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    if (!Util.isUnset(request.deployGroup)) {
      query["DeployGroup"] = request.deployGroup;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ScaleOutApplicationResponse>(await this.doROARequest("ScaleOutApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_scale_out`, "json", req, runtime), new ScaleOutApplicationResponse({}));
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

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.scalingNum)) {
      query["ScalingNum"] = request.scalingNum;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!Util.isUnset(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.instanceChargePeriodUnit)) {
      query["InstanceChargePeriodUnit"] = request.instanceChargePeriodUnit;
    }

    if (!Util.isUnset(request.instanceChargePeriod)) {
      query["InstanceChargePeriod"] = request.instanceChargePeriod;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ScaleoutApplicationWithNewInstancesResponse>(await this.doROARequest("ScaleoutApplicationWithNewInstances", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/scaling/scale_out`, "json", req, runtime), new ScaleoutApplicationWithNewInstancesResponse({}));
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
    return $tea.cast<StartApplicationResponse>(await this.doROARequest("StartApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_start`, "json", req, runtime), new StartApplicationResponse({}));
  }

  async startK8sApplication(request: StartK8sApplicationRequest): Promise<StartK8sApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sApplicationWithOptions(request, headers, runtime);
  }

  async startK8sApplicationWithOptions(request: StartK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartK8sApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StartK8sApplicationResponse>(await this.doROARequest("StartK8sApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/start_k8s_app`, "json", req, runtime), new StartK8sApplicationResponse({}));
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
    return $tea.cast<StopApplicationResponse>(await this.doROARequest("StopApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_stop`, "json", req, runtime), new StopApplicationResponse({}));
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
    return $tea.cast<StopK8sApplicationResponse>(await this.doROARequest("StopK8sApplication", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/acs/stop_k8s_app`, "json", req, runtime), new StopK8sApplicationResponse({}));
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
    return $tea.cast<SwitchAdvancedMonitoringResponse>(await this.doROARequest("SwitchAdvancedMonitoring", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/monitor/advancedMonitorInfo`, "json", req, runtime), new SwitchAdvancedMonitoringResponse({}));
  }

  async synchronizeResource(request: SynchronizeResourceRequest): Promise<SynchronizeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.synchronizeResourceWithOptions(request, headers, runtime);
  }

  async synchronizeResourceWithOptions(request: SynchronizeResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SynchronizeResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<SynchronizeResourceResponse>(await this.doROARequest("SynchronizeResource", "2017-08-01", "HTTPS", "GET", "AK", `/pop/v5/resource/pop_sync_resource`, "json", req, runtime), new SynchronizeResourceResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<TagResourcesResponse>(await this.doROARequest("TagResources", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/tag/tags`, "json", req, runtime), new TagResourcesResponse({}));
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

    if (!Util.isUnset(request.targetClusterId)) {
      query["TargetClusterId"] = request.targetClusterId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<TransformClusterMemberResponse>(await this.doROARequest("TransformClusterMember", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/resource/transform_cluster_member`, "json", req, runtime), new TransformClusterMemberResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UnbindK8sSlbResponse>(await this.doROARequest("UnbindK8sSlb", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/k8s/acs/k8s_slb_binding`, "json", req, runtime), new UnbindK8sSlbResponse({}));
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
    return $tea.cast<UnbindSlbResponse>(await this.doROARequest("UnbindSlb", "2017-08-01", "HTTPS", "POST", "AK", `/pop/app/unbind_slb_json`, "json", req, runtime), new UnbindSlbResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!Util.isUnset(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doROARequest("UntagResources", "2017-08-01", "HTTPS", "DELETE", "AK", `/pop/v5/tag/tags`, "json", req, runtime), new UntagResourcesResponse({}));
  }

  async updateAccountInfo(request: UpdateAccountInfoRequest): Promise<UpdateAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccountInfoWithOptions(request, headers, runtime);
  }

  async updateAccountInfoWithOptions(request: UpdateAccountInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAccountInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAccountInfoResponse>(await this.doROARequest("UpdateAccountInfo", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/edit_account_info`, "json", req, runtime), new UpdateAccountInfoResponse({}));
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
    return $tea.cast<UpdateApplicationBaseInfoResponse>(await this.doROARequest("UpdateApplicationBaseInfo", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/update_app_info`, "json", req, runtime), new UpdateApplicationBaseInfoResponse({}));
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
    return $tea.cast<UpdateContainerResponse>(await this.doROARequest("UpdateContainer", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/changeorder/co_update_container`, "json", req, runtime), new UpdateContainerResponse({}));
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

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.contextPath)) {
      query["ContextPath"] = request.contextPath;
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
    return $tea.cast<UpdateContainerConfigurationResponse>(await this.doROARequest("UpdateContainerConfiguration", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/container_config`, "json", req, runtime), new UpdateContainerConfigurationResponse({}));
  }

  async updateDegradeControl(request: UpdateDegradeControlRequest): Promise<UpdateDegradeControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDegradeControlWithOptions(request, headers, runtime);
  }

  async updateDegradeControlWithOptions(request: UpdateDegradeControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDegradeControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.rtThreshold)) {
      query["RtThreshold"] = request.rtThreshold;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.urlVar)) {
      query["UrlVar"] = request.urlVar;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateDegradeControlResponse>(await this.doROARequest("UpdateDegradeControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/degradeControl`, "json", req, runtime), new UpdateDegradeControlResponse({}));
  }

  async updateFlowControl(request: UpdateFlowControlRequest): Promise<UpdateFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowControlWithOptions(request, headers, runtime);
  }

  async updateFlowControlWithOptions(request: UpdateFlowControlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFlowControlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.consumerAppId)) {
      query["ConsumerAppId"] = request.consumerAppId;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.urlVar)) {
      query["UrlVar"] = request.urlVar;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateFlowControlResponse>(await this.doROARequest("UpdateFlowControl", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/flowControl`, "json", req, runtime), new UpdateFlowControlResponse({}));
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
    return $tea.cast<UpdateHealthCheckUrlResponse>(await this.doROARequest("UpdateHealthCheckUrl", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/modify_hc_url`, "json", req, runtime), new UpdateHealthCheckUrlResponse({}));
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
    return $tea.cast<UpdateHookConfigurationResponse>(await this.doROARequest("UpdateHookConfiguration", "2017-08-01", "HTTPS", "POST", "AK", `/pop/app/config_app_hook_json`, "json", req, runtime), new UpdateHookConfigurationResponse({}));
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

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    if (!Util.isUnset(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!Util.isUnset(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!Util.isUnset(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateJvmConfigurationResponse>(await this.doROARequest("UpdateJvmConfiguration", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/app/app_jvm_config`, "json", req, runtime), new UpdateJvmConfigurationResponse({}));
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

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateK8sApplicationBaseInfoResponse>(await this.doROARequest("UpdateK8sApplicationBaseInfo", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/oam/update_app_basic_info`, "json", req, runtime), new UpdateK8sApplicationBaseInfoResponse({}));
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

    if (!Util.isUnset(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!Util.isUnset(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!Util.isUnset(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!Util.isUnset(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
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
    return $tea.cast<UpdateK8sApplicationConfigResponse>(await this.doROARequest("UpdateK8sApplicationConfig", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/k8s/acs/k8s_app_configuration`, "json", req, runtime), new UpdateK8sApplicationConfigResponse({}));
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

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateK8sIngressRuleResponse>(await this.doROARequest("UpdateK8sIngressRule", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/k8s/acs/k8s_ingress`, "json", req, runtime), new UpdateK8sIngressRuleResponse({}));
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
    return $tea.cast<UpdateK8sResourceResponse>(await this.doROARequestWithForm("UpdateK8sResource", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/oam/update_k8s_resource_config`, "json", req, runtime), new UpdateK8sResourceResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateK8sServiceResponse>(await this.doROARequest("UpdateK8sService", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/k8s/acs/k8s_service`, "json", req, runtime), new UpdateK8sServiceResponse({}));
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateK8sSlbResponse>(await this.doROARequest("UpdateK8sSlb", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/k8s/acs/k8s_slb_binding`, "json", req, runtime), new UpdateK8sSlbResponse({}));
  }

  async updateMockRule(request: UpdateMockRuleRequest): Promise<UpdateMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMockRuleWithOptions(request, headers, runtime);
  }

  async updateMockRuleWithOptions(request: UpdateMockRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMockRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!Util.isUnset(request.scMockItemJson)) {
      query["ScMockItemJson"] = request.scMockItemJson;
    }

    if (!Util.isUnset(request.dubboMockItemJson)) {
      query["DubboMockItemJson"] = request.dubboMockItemJson;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateMockRuleResponse>(await this.doROARequest("UpdateMockRule", "2017-08-01", "HTTPS", "POST", "AK", `/pop/sp/api/mock/updateMockRule`, "json", req, runtime), new UpdateMockRuleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateRoleResponse>(await this.doROARequest("UpdateRole", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/account/edit_role`, "json", req, runtime), new UpdateRoleResponse({}));
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
    return $tea.cast<UpdateSlsLogStoreResponse>(await this.doROARequestWithForm("UpdateSlsLogStore", "2017-08-01", "HTTPS", "POST", "AK", `/pop/v5/k8s/sls/update_sls_log_store`, "json", req, runtime), new UpdateSlsLogStoreResponse({}));
  }

  async updateSwimmingLane(request: UpdateSwimmingLaneRequest): Promise<UpdateSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneWithOptions(request, headers, runtime);
  }

  async updateSwimmingLaneWithOptions(request: UpdateSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSwimmingLaneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!Util.isUnset(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    if (!Util.isUnset(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateSwimmingLaneResponse>(await this.doROARequest("UpdateSwimmingLane", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/trafficmgnt/swimming_lanes`, "json", req, runtime), new UpdateSwimmingLaneResponse({}));
  }

  async updateSwimmingLaneGroup(request: UpdateSwimmingLaneGroupRequest): Promise<UpdateSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  async updateSwimmingLaneGroupWithOptions(request: UpdateSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateSwimmingLaneGroupResponse>(await this.doROARequest("UpdateSwimmingLaneGroup", "2017-08-01", "HTTPS", "PUT", "AK", `/pop/v5/trafficmgnt/swimming_lane_groups`, "json", req, runtime), new UpdateSwimmingLaneGroupResponse({}));
  }

}
