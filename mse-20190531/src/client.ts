// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMockRuleRequest extends $tea.Model {
  name?: string;
  region?: string;
  source?: string;
  providerAppId?: string;
  providerAppName?: string;
  extraJson?: string;
  scMockItems?: string;
  dubboMockItems?: string;
  consumerAppIds?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      source: 'Source',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      extraJson: 'ExtraJson',
      scMockItems: 'ScMockItems',
      dubboMockItems: 'DubboMockItems',
      consumerAppIds: 'ConsumerAppIds',
      enable: 'Enable',
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
      scMockItems: 'string',
      dubboMockItems: 'string',
      consumerAppIds: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBody extends $tea.Model {
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: AddMockRuleResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
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

export class CloneNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  originNamespaceId?: string;
  targetNamespaceId?: string;
  policy?: string;
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      originNamespaceId: 'OriginNamespaceId',
      targetNamespaceId: 'TargetNamespaceId',
      policy: 'Policy',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      originNamespaceId: 'string',
      targetNamespaceId: 'string',
      policy: 'string',
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: CloneNacosConfigResponseBodyData;
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: CloneNacosConfigResponseBodyData,
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRuleRequest extends $tea.Model {
  instanceId?: string;
  alarmAliasName?: string;
  alertWay?: { [key: string]: any };
  contactGroupIds?: { [key: string]: any };
  alarmItem?: string;
  operator?: string;
  aggregates?: string;
  NValue?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      alarmAliasName: 'AlarmAliasName',
      alertWay: 'AlertWay',
      contactGroupIds: 'ContactGroupIds',
      alarmItem: 'AlarmItem',
      operator: 'Operator',
      aggregates: 'Aggregates',
      NValue: 'NValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      alarmAliasName: 'string',
      alertWay: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contactGroupIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      alarmItem: 'string',
      operator: 'string',
      aggregates: 'string',
      NValue: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRuleShrinkRequest extends $tea.Model {
  instanceId?: string;
  alarmAliasName?: string;
  alertWayShrink?: string;
  contactGroupIdsShrink?: string;
  alarmItem?: string;
  operator?: string;
  aggregates?: string;
  NValue?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      alarmAliasName: 'AlarmAliasName',
      alertWayShrink: 'AlertWay',
      contactGroupIdsShrink: 'ContactGroupIds',
      alarmItem: 'AlarmItem',
      operator: 'Operator',
      aggregates: 'Aggregates',
      NValue: 'NValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      alarmAliasName: 'string',
      alertWayShrink: 'string',
      contactGroupIdsShrink: 'string',
      alarmItem: 'string',
      operator: 'string',
      aggregates: 'string',
      NValue: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  appName?: string;
  region?: string;
  source?: string;
  language?: string;
  extraInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      region: 'Region',
      source: 'Source',
      language: 'Language',
      extraInfo: 'ExtraInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      region: 'string',
      source: 'string',
      language: 'string',
      extraInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateApplicationResponseBodyData;
  code?: number;
  success?: string;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateApplicationResponseBodyData,
      code: 'number',
      success: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  pubNetworkFlow?: string;
  pubSlbSpecification?: string;
  diskType?: string;
  vpcId?: string;
  netType?: string;
  vSwitchId?: string;
  instanceCount?: number;
  clusterSpecification?: string;
  clusterVersion?: string;
  clusterType?: string;
  region?: string;
  privateSlbSpecification?: string;
  connectionType?: string;
  requestPars?: string;
  diskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      pubNetworkFlow: 'PubNetworkFlow',
      pubSlbSpecification: 'PubSlbSpecification',
      diskType: 'DiskType',
      vpcId: 'VpcId',
      netType: 'NetType',
      vSwitchId: 'VSwitchId',
      instanceCount: 'InstanceCount',
      clusterSpecification: 'ClusterSpecification',
      clusterVersion: 'ClusterVersion',
      clusterType: 'ClusterType',
      region: 'Region',
      privateSlbSpecification: 'PrivateSlbSpecification',
      connectionType: 'ConnectionType',
      requestPars: 'RequestPars',
      diskCapacity: 'DiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubNetworkFlow: 'string',
      pubSlbSpecification: 'string',
      diskType: 'string',
      vpcId: 'string',
      netType: 'string',
      vSwitchId: 'string',
      instanceCount: 'number',
      clusterSpecification: 'string',
      clusterVersion: 'string',
      clusterType: 'string',
      region: 'string',
      privateSlbSpecification: 'string',
      connectionType: 'string',
      requestPars: 'string',
      diskCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  instanceId?: string;
  errorCode?: string;
  orderId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      instanceId: 'InstanceId',
      errorCode: 'ErrorCode',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      instanceId: 'string',
      errorCode: 'string',
      orderId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  desc?: string;
  instanceId?: string;
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      desc: 'Desc',
      instanceId: 'InstanceId',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      desc: 'string',
      instanceId: 'string',
      serviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  clusterId?: string;
  data?: CreateEngineNamespaceResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      clusterId: 'string',
      data: CreateEngineNamespaceResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  dataId?: string;
  group?: string;
  appName?: string;
  tags?: string;
  desc?: string;
  type?: string;
  content?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      appName: 'AppName',
      tags: 'Tags',
      desc: 'Desc',
      type: 'Type',
      content: 'Content',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      appName: 'string',
      tags: 'string',
      desc: 'string',
      type: 'string',
      content: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigResponseBody extends $tea.Model {
  httpCode?: string;
  requestId?: string;
  message?: string;
  errorCode?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      message: 'Message',
      errorCode: 'ErrorCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      requestId: 'string',
      message: 'string',
      errorCode: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeRequest extends $tea.Model {
  clusterId?: string;
  path?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      path: 'Path',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      path: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: CreateZnodeResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: CreateZnodeResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmRuleRequest extends $tea.Model {
  requestPars?: string;
  alarmRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      alarmRuleId: 'AlarmRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      alarmRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmRuleResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
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

export class DeleteClusterResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
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

export class DeleteEngineNamespaceRequest extends $tea.Model {
  id?: string;
  instanceId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineNamespaceResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigResponseBody extends $tea.Model {
  httpCode?: string;
  requestId?: string;
  message?: string;
  errorCode?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      message: 'Message',
      errorCode: 'ErrorCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      requestId: 'string',
      message: 'string',
      errorCode: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsRequest extends $tea.Model {
  instanceId?: string;
  ids?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ids: 'Ids',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ids: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsResponseBody extends $tea.Model {
  httpCode?: string;
  requestId?: string;
  message?: string;
  errorCode?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      message: 'Message',
      errorCode: 'ErrorCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      requestId: 'string',
      message: 'string',
      errorCode: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNacosConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNacosConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceRequest extends $tea.Model {
  instanceId?: string;
  serviceName?: string;
  groupName?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      serviceName: 'ServiceName',
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      serviceName: 'string',
      groupName: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  message?: string;
  code?: number;
  success?: boolean;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      message: 'string',
      code: 'number',
      success: 'boolean',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNacosServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNacosServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeRequest extends $tea.Model {
  requestPars?: string;
  clusterId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterId: 'ClusterId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  data?: DeleteZnodeResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      data: DeleteZnodeResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  namespaceId?: string;
  ids?: string;
  dataId?: string;
  group?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      ids: 'Ids',
      dataId: 'DataId',
      group: 'Group',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceId: 'string',
      ids: 'string',
      dataId: 'string',
      group: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: ExportNacosConfigResponseBodyData;
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: ExportNacosConfigResponseBodyData,
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceRequest extends $tea.Model {
  id?: string;
  instanceId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceResponseBody extends $tea.Model {
  httpCode?: string;
  type?: string;
  quota?: string;
  requestId?: string;
  message?: string;
  configCount?: string;
  namespaceShowName?: string;
  errorCode?: string;
  success?: boolean;
  namespaceDesc?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      type: 'Type',
      quota: 'Quota',
      requestId: 'RequestId',
      message: 'Message',
      configCount: 'ConfigCount',
      namespaceShowName: 'NamespaceShowName',
      errorCode: 'ErrorCode',
      success: 'Success',
      namespaceDesc: 'NamespaceDesc',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      type: 'string',
      quota: 'string',
      requestId: 'string',
      message: 'string',
      configCount: 'string',
      namespaceShowName: 'string',
      errorCode: 'string',
      success: 'boolean',
      namespaceDesc: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEngineNamepaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEngineNamepaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlRequest extends $tea.Model {
  contentType?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: GetImportFileUrlResponseBodyData;
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: GetImportFileUrlResponseBodyData,
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImportFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImportFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configuration?: GetNacosConfigResponseBodyConfiguration;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configuration: GetNacosConfigResponseBodyConfiguration,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigRequest extends $tea.Model {
  instanceId?: string;
  dataId?: string;
  group?: string;
  namespaceId?: string;
  nid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
      nid: 'Nid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
      nid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  configuration?: GetNacosHistoryConfigResponseBodyConfiguration;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      configuration: GetNacosHistoryConfigResponseBodyConfiguration,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNacosHistoryConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNacosHistoryConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewRequest extends $tea.Model {
  period?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: string;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
      success: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  namespaceId?: string;
  policy?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      policy: 'Policy',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceId: 'string',
      policy: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: ImportNacosConfigResponseBodyData;
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: ImportNacosConfigResponseBodyData,
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmContactGroupsRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmContactGroupsResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAlarmContactGroupsResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAlarmContactGroupsResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmContactGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmContactGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmContactGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  alarmMseType?: string;
  startTime?: number;
  endTime?: number;
  alarmName?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      alarmMseType: 'AlarmMseType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      alarmName: 'AlarmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      alarmMseType: 'string',
      startTime: 'number',
      endTime: 'number',
      alarmName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAlarmHistoriesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAlarmHistoriesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmItemsRequest extends $tea.Model {
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmItemsResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAlarmItemsResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAlarmItemsResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmRulesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  alarmMseType?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      alarmMseType: 'AlarmMseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      alarmMseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmRulesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAlarmRulesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAlarmRulesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  serviceName?: string;
  groupName?: string;
  namespaceId?: string;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      serviceName: 'string',
      groupName: 'string',
      namespaceId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAnsInstancesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAnsInstancesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAnsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAnsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  serviceName?: string;
  groupName?: string;
  namespaceId?: string;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      serviceName: 'string',
      groupName: 'string',
      namespaceId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListAnsServiceClustersResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListAnsServiceClustersResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAnsServiceClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAnsServiceClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  serviceName?: string;
  groupName?: string;
  hasIpCount?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      groupName: 'GroupName',
      hasIpCount: 'HasIpCount',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      serviceName: 'string',
      groupName: 'string',
      hasIpCount: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListAnsServicesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListAnsServicesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAnsServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAnsServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: ListClusterConnectionTypesResponseBodyData[];
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': ListClusterConnectionTypesResponseBodyData },
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterConnectionTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterConnectionTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterAliasName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterAliasName: 'ClusterAliasName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterAliasName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListClustersResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
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

export class ListClusterTypesRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: ListClusterTypesResponseBodyData[];
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': ListClusterTypesResponseBodyData },
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsRequest extends $tea.Model {
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

export class ListClusterVersionsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: ListClusterVersionsResponseBodyData[];
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': ListClusterVersionsResponseBodyData },
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesRequest extends $tea.Model {
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

export class ListEngineNamespacesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListEngineNamespacesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListEngineNamespacesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEngineNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEngineNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListEurekaInstancesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListEurekaInstancesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEurekaInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEurekaInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListEurekaServicesResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListEurekaServicesResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEurekaServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEurekaServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigRequest extends $tea.Model {
  requestPars?: string;
  instanceId?: string;
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  listeners?: ListListenersByConfigResponseBodyListeners[];
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      listeners: 'Listeners',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      listeners: { 'type': 'array', 'itemType': ListListenersByConfigResponseBodyListeners },
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenersByConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenersByConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpRequest extends $tea.Model {
  requestPars?: string;
  instanceId?: string;
  ip?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  listeners?: ListListenersByIpResponseBodyListeners[];
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      listeners: 'Listeners',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      listeners: { 'type': 'array', 'itemType': ListListenersByIpResponseBodyListeners },
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenersByIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenersByIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  instanceId?: string;
  regionId?: string;
  dataId?: string;
  group?: string;
  appName?: string;
  tags?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      dataId: 'DataId',
      group: 'Group',
      appName: 'AppName',
      tags: 'Tags',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      instanceId: 'string',
      regionId: 'string',
      dataId: 'string',
      group: 'string',
      appName: 'string',
      tags: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  errorCode?: string;
  configurations?: ListNacosConfigsResponseBodyConfigurations[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      errorCode: 'ErrorCode',
      configurations: 'Configurations',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      errorCode: 'string',
      configurations: { 'type': 'array', 'itemType': ListNacosConfigsResponseBodyConfigurations },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNacosConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNacosConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsRequest extends $tea.Model {
  requestPars?: string;
  pageNum?: number;
  pageSize?: number;
  instanceId?: string;
  regionId?: string;
  dataId?: string;
  group?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      dataId: 'DataId',
      group: 'Group',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      pageNum: 'number',
      pageSize: 'number',
      instanceId: 'string',
      regionId: 'string',
      dataId: 'string',
      group: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponseBody extends $tea.Model {
  httpCode?: string;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  errorCode?: string;
  success?: boolean;
  historyItems?: ListNacosHistoryConfigsResponseBodyHistoryItems[];
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      errorCode: 'ErrorCode',
      success: 'Success',
      historyItems: 'HistoryItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      errorCode: 'string',
      success: 'boolean',
      historyItems: { 'type': 'array', 'itemType': ListNacosHistoryConfigsResponseBodyHistoryItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNacosHistoryConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNacosHistoryConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenRequest extends $tea.Model {
  path?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListZnodeChildrenResponseBodyData[];
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListZnodeChildrenResponseBodyData },
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListZnodeChildrenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListZnodeChildrenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryBusinessLocationsResponseBodyData[];
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryBusinessLocationsResponseBodyData },
      errorCode: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBusinessLocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBusinessLocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailRequest extends $tea.Model {
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryClusterDetailResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: QueryClusterDetailResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationRequest extends $tea.Model {
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

export class QueryClusterDiskSpecificationResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: QueryClusterDiskSpecificationResponseBodyData;
  errorCode?: string;
  dynamicMessage?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      dynamicMessage: 'DynamicMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: QueryClusterDiskSpecificationResponseBodyData,
      errorCode: 'string',
      dynamicMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryClusterDiskSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryClusterDiskSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  httpStatusCode?: number;
  data?: QueryClusterSpecificationResponseBodyData[];
  errorCode?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      errorCode: 'ErrorCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': QueryClusterSpecificationResponseBodyData },
      errorCode: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryClusterSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryClusterSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigRequest extends $tea.Model {
  requestPars?: string;
  clusterId?: string;
  configType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterId: 'ClusterId',
      configType: 'ConfigType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterId: 'string',
      configType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryConfigResponseBodyData;
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: QueryConfigResponseBodyData,
      errorCode: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorRequest extends $tea.Model {
  requestPars?: string;
  monitorType?: string;
  startTime?: number;
  endTime?: number;
  step?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      monitorType: 'MonitorType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      step: 'Step',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      monitorType: 'string',
      startTime: 'number',
      endTime: 'number',
      step: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailRequest extends $tea.Model {
  requestPars?: string;
  clusterId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterId: 'ClusterId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryZnodeDetailResponseBodyData;
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: QueryZnodeDetailResponseBodyData,
      errorCode: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryZnodeDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryZnodeDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterRequest extends $tea.Model {
  requestPars?: string;
  instanceId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      instanceId: 'InstanceId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      instanceId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterRequest extends $tea.Model {
  requestPars?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingClusterRequest extends $tea.Model {
  instanceCount?: number;
  cpu?: number;
  memoryCapacity?: number;
  clusterSpecification?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      cpu: 'Cpu',
      memoryCapacity: 'MemoryCapacity',
      clusterSpecification: 'ClusterSpecification',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      cpu: 'number',
      memoryCapacity: 'number',
      clusterSpecification: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScalingClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScalingClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclRequest extends $tea.Model {
  aclEntryList?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryList: 'AclEntryList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryList: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequest extends $tea.Model {
  requestPars?: string;
  clusterAliasName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterAliasName: 'ClusterAliasName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterAliasName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRequest extends $tea.Model {
  requestPars?: string;
  clusterId?: string;
  configType?: string;
  tickTime?: string;
  initLimit?: string;
  syncLimit?: string;
  maxClientCnxns?: string;
  openSuperAcl?: string;
  userName?: string;
  passWord?: string;
  juteMaxbuffer?: string;
  autopurgePurgeInterval?: string;
  autopurgeSnapRetainCount?: string;
  configAuthEnabled?: boolean;
  MCPEnabled?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterId: 'ClusterId',
      configType: 'ConfigType',
      tickTime: 'TickTime',
      initLimit: 'InitLimit',
      syncLimit: 'SyncLimit',
      maxClientCnxns: 'MaxClientCnxns',
      openSuperAcl: 'OpenSuperAcl',
      userName: 'UserName',
      passWord: 'PassWord',
      juteMaxbuffer: 'JuteMaxbuffer',
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      configAuthEnabled: 'ConfigAuthEnabled',
      MCPEnabled: 'MCPEnabled',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterId: 'string',
      configType: 'string',
      tickTime: 'string',
      initLimit: 'string',
      syncLimit: 'string',
      maxClientCnxns: 'string',
      openSuperAcl: 'string',
      userName: 'string',
      passWord: 'string',
      juteMaxbuffer: 'string',
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      configAuthEnabled: 'boolean',
      MCPEnabled: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceRequest extends $tea.Model {
  name?: string;
  desc?: string;
  serviceCount?: number;
  id?: string;
  clusterId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      desc: 'Desc',
      serviceCount: 'ServiceCount',
      id: 'Id',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      desc: 'string',
      serviceCount: 'number',
      id: 'string',
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateEngineNamespaceResponseBodyData;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateEngineNamespaceResponseBodyData,
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigRequest extends $tea.Model {
  instanceId?: string;
  dataId?: string;
  group?: string;
  appName?: string;
  tags?: string;
  desc?: string;
  type?: string;
  content?: string;
  namespaceId?: string;
  md5?: string;
  betaIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataId: 'DataId',
      group: 'Group',
      appName: 'AppName',
      tags: 'Tags',
      desc: 'Desc',
      type: 'Type',
      content: 'Content',
      namespaceId: 'NamespaceId',
      md5: 'Md5',
      betaIps: 'BetaIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataId: 'string',
      group: 'string',
      appName: 'string',
      tags: 'string',
      desc: 'string',
      type: 'string',
      content: 'string',
      namespaceId: 'string',
      md5: 'string',
      betaIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceRequest extends $tea.Model {
  instanceId?: string;
  serviceName?: string;
  groupName?: string;
  namespaceId?: string;
  clusterName?: string;
  ip?: string;
  port?: number;
  ephemeral?: boolean;
  weight?: string;
  enabled?: boolean;
  metadata?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      serviceName: 'ServiceName',
      groupName: 'GroupName',
      namespaceId: 'NamespaceId',
      clusterName: 'ClusterName',
      ip: 'Ip',
      port: 'Port',
      ephemeral: 'Ephemeral',
      weight: 'Weight',
      enabled: 'Enabled',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      serviceName: 'string',
      groupName: 'string',
      namespaceId: 'string',
      clusterName: 'string',
      ip: 'string',
      port: 'number',
      ephemeral: 'boolean',
      weight: 'string',
      enabled: 'boolean',
      metadata: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  message?: string;
  code?: number;
  success?: boolean;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      message: 'string',
      code: 'number',
      success: 'boolean',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNacosInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNacosInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeRequest extends $tea.Model {
  requestPars?: string;
  clusterId?: string;
  path?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      clusterId: 'ClusterId',
      path: 'Path',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      clusterId: 'string',
      path: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $tea.Model {
  requestPars?: string;
  instanceId?: string;
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      requestPars: 'RequestPars',
      instanceId: 'InstanceId',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestPars: 'string',
      instanceId: 'string',
      upgradeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponseBody extends $tea.Model {
  httpCode?: string;
  message?: string;
  requestId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeClusterResponseBody,
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

export class CloneNacosConfigResponseBodyDataFailData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyDataSkipData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyData extends $tea.Model {
  succCount?: number;
  failData?: CloneNacosConfigResponseBodyDataFailData[];
  skipCount?: number;
  skipData?: CloneNacosConfigResponseBodyDataSkipData[];
  static names(): { [key: string]: string } {
    return {
      succCount: 'SuccCount',
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succCount: 'number',
      failData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataSkipData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyData extends $tea.Model {
  status?: number;
  extraInfo?: string;
  appName?: string;
  updateTime?: number;
  licenseKey?: string;
  createTime?: number;
  appId?: string;
  userId?: string;
  source?: string;
  language?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      extraInfo: 'ExtraInfo',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      licenseKey: 'LicenseKey',
      createTime: 'CreateTime',
      appId: 'AppId',
      userId: 'UserId',
      source: 'Source',
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      extraInfo: 'string',
      appName: 'string',
      updateTime: 'number',
      licenseKey: 'string',
      createTime: 'number',
      appId: 'string',
      userId: 'string',
      source: 'string',
      language: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponseBodyData extends $tea.Model {
  type?: number;
  namespaceShowName?: string;
  quota?: number;
  namespace?: string;
  namespaceDesc?: string;
  configCount?: number;
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      configCount: 'ConfigCount',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      namespaceShowName: 'string',
      quota: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      configCount: 'number',
      serviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponseBodyData extends $tea.Model {
  data?: string;
  path?: string;
  dir?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      path: 'Path',
      dir: 'Dir',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      path: 'string',
      dir: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponseBodyData extends $tea.Model {
  data?: string;
  path?: string;
  dir?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      path: 'Path',
      dir: 'Dir',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      path: 'string',
      dir: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponseBodyConfiguration extends $tea.Model {
  type?: string;
  appName?: string;
  tags?: string;
  md5?: string;
  dataId?: string;
  content?: string;
  group?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      tags: 'Tags',
      md5: 'Md5',
      dataId: 'DataId',
      content: 'Content',
      group: 'Group',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      tags: 'string',
      md5: 'string',
      dataId: 'string',
      content: 'string',
      group: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponseBodyConfiguration extends $tea.Model {
  appName?: string;
  md5?: string;
  dataId?: string;
  content?: string;
  group?: string;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      md5: 'Md5',
      dataId: 'DataId',
      content: 'Content',
      group: 'Group',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      md5: 'string',
      dataId: 'string',
      content: 'string',
      group: 'string',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyDataFailData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyDataSkipData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyData extends $tea.Model {
  succCount?: number;
  failData?: ImportNacosConfigResponseBodyDataFailData[];
  skipCount?: number;
  skipData?: ImportNacosConfigResponseBodyDataSkipData[];
  static names(): { [key: string]: string } {
    return {
      succCount: 'SuccCount',
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succCount: 'number',
      failData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataSkipData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmContactGroupsResponseBodyData extends $tea.Model {
  contactGroupName?: string;
  contactGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBodyData extends $tea.Model {
  alarmTime?: string;
  alarmEmail?: string;
  alarmDingDing?: string;
  alarmPhone?: string;
  alarmName?: string;
  alarmContent?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTime: 'AlarmTime',
      alarmEmail: 'AlarmEmail',
      alarmDingDing: 'AlarmDingDing',
      alarmPhone: 'AlarmPhone',
      alarmName: 'AlarmName',
      alarmContent: 'AlarmContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTime: 'string',
      alarmEmail: 'string',
      alarmDingDing: 'string',
      alarmPhone: 'string',
      alarmName: 'string',
      alarmContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmItemsResponseBodyData extends $tea.Model {
  alarmDesc?: string;
  clusterType?: string;
  alarmCode?: string;
  static names(): { [key: string]: string } {
    return {
      alarmDesc: 'AlarmDesc',
      clusterType: 'ClusterType',
      alarmCode: 'AlarmCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDesc: 'string',
      clusterType: 'string',
      alarmCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmRulesResponseBodyData extends $tea.Model {
  alarmStatus?: string;
  alarmRuleId?: string;
  createTime?: string;
  alarmRuleDetail?: string;
  alarmName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      alarmRuleId: 'AlarmRuleId',
      createTime: 'CreateTime',
      alarmRuleDetail: 'AlarmRuleDetail',
      alarmName: 'AlarmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      alarmRuleId: 'string',
      createTime: 'string',
      alarmRuleDetail: 'string',
      alarmName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponseBodyData extends $tea.Model {
  defaultKey?: string;
  ephemeral?: boolean;
  marked?: boolean;
  ip?: string;
  instanceId?: string;
  port?: number;
  lastBeat?: number;
  okCount?: number;
  weight?: number;
  instanceHeartBeatInterval?: number;
  ipDeleteTimeout?: number;
  app?: string;
  failCount?: number;
  healthy?: boolean;
  enabled?: boolean;
  datumKey?: string;
  clusterName?: string;
  instanceHeartBeatTimeOut?: number;
  serviceName?: string;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      defaultKey: 'DefaultKey',
      ephemeral: 'Ephemeral',
      marked: 'Marked',
      ip: 'Ip',
      instanceId: 'InstanceId',
      port: 'Port',
      lastBeat: 'LastBeat',
      okCount: 'OkCount',
      weight: 'Weight',
      instanceHeartBeatInterval: 'InstanceHeartBeatInterval',
      ipDeleteTimeout: 'IpDeleteTimeout',
      app: 'App',
      failCount: 'FailCount',
      healthy: 'Healthy',
      enabled: 'Enabled',
      datumKey: 'DatumKey',
      clusterName: 'ClusterName',
      instanceHeartBeatTimeOut: 'InstanceHeartBeatTimeOut',
      serviceName: 'ServiceName',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultKey: 'string',
      ephemeral: 'boolean',
      marked: 'boolean',
      ip: 'string',
      instanceId: 'string',
      port: 'number',
      lastBeat: 'number',
      okCount: 'number',
      weight: 'number',
      instanceHeartBeatInterval: 'number',
      ipDeleteTimeout: 'number',
      app: 'string',
      failCount: 'number',
      healthy: 'boolean',
      enabled: 'boolean',
      datumKey: 'string',
      clusterName: 'string',
      instanceHeartBeatTimeOut: 'number',
      serviceName: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyDataClusters extends $tea.Model {
  defaultCheckPort?: number;
  healthCheckerType?: string;
  useIPPort4Check?: boolean;
  serviceName?: string;
  name?: string;
  defaultPort?: number;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      defaultCheckPort: 'DefaultCheckPort',
      healthCheckerType: 'HealthCheckerType',
      useIPPort4Check: 'UseIPPort4Check',
      serviceName: 'ServiceName',
      name: 'Name',
      defaultPort: 'DefaultPort',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCheckPort: 'number',
      healthCheckerType: 'string',
      useIPPort4Check: 'boolean',
      serviceName: 'string',
      name: 'string',
      defaultPort: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyData extends $tea.Model {
  protectThreshold?: number;
  groupName?: string;
  clusters?: ListAnsServiceClustersResponseBodyDataClusters[];
  name?: string;
  selectorType?: string;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      protectThreshold: 'ProtectThreshold',
      groupName: 'GroupName',
      clusters: 'Clusters',
      name: 'Name',
      selectorType: 'SelectorType',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectThreshold: 'number',
      groupName: 'string',
      clusters: { 'type': 'array', 'itemType': ListAnsServiceClustersResponseBodyDataClusters },
      name: 'string',
      selectorType: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponseBodyData extends $tea.Model {
  healthyInstanceCount?: number;
  groupName?: string;
  ipCount?: number;
  name?: string;
  clusterCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthyInstanceCount: 'HealthyInstanceCount',
      groupName: 'GroupName',
      ipCount: 'IpCount',
      name: 'Name',
      clusterCount: 'ClusterCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyInstanceCount: 'number',
      groupName: 'string',
      ipCount: 'number',
      name: 'string',
      clusterCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponseBodyData extends $tea.Model {
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $tea.Model {
  endDate?: string;
  intranetDomain?: string;
  internetDomain?: string;
  createTime?: string;
  chargeType?: string;
  intranetAddress?: string;
  instanceId?: string;
  internetAddress?: string;
  clusterAliasName?: string;
  clusterType?: string;
  initStatus?: string;
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      intranetDomain: 'IntranetDomain',
      internetDomain: 'InternetDomain',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      intranetAddress: 'IntranetAddress',
      instanceId: 'InstanceId',
      internetAddress: 'InternetAddress',
      clusterAliasName: 'ClusterAliasName',
      clusterType: 'ClusterType',
      initStatus: 'InitStatus',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      intranetDomain: 'string',
      internetDomain: 'string',
      createTime: 'string',
      chargeType: 'string',
      intranetAddress: 'string',
      instanceId: 'string',
      internetAddress: 'string',
      clusterAliasName: 'string',
      clusterType: 'string',
      initStatus: 'string',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponseBodyData extends $tea.Model {
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsResponseBodyData extends $tea.Model {
  showName?: string;
  clusterType?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
      clusterType: 'ClusterType',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
      clusterType: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponseBodyData extends $tea.Model {
  type?: number;
  namespaceShowName?: string;
  quota?: number;
  namespace?: string;
  namespaceDesc?: string;
  configCount?: number;
  serviceCount?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      configCount: 'ConfigCount',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      namespaceShowName: 'string',
      quota: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      configCount: 'number',
      serviceCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponseBodyData extends $tea.Model {
  status?: string;
  lastDirtyTimestamp?: number;
  ipAddr?: string;
  homePageUrl?: string;
  hostName?: string;
  instanceId?: string;
  port?: number;
  securePort?: number;
  app?: string;
  durationInSecs?: number;
  lastUpdatedTimestamp?: number;
  renewalIntervalInSecs?: number;
  vipAddress?: string;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastDirtyTimestamp: 'LastDirtyTimestamp',
      ipAddr: 'IpAddr',
      homePageUrl: 'HomePageUrl',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      port: 'Port',
      securePort: 'SecurePort',
      app: 'App',
      durationInSecs: 'DurationInSecs',
      lastUpdatedTimestamp: 'LastUpdatedTimestamp',
      renewalIntervalInSecs: 'RenewalIntervalInSecs',
      vipAddress: 'VipAddress',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastDirtyTimestamp: 'number',
      ipAddr: 'string',
      homePageUrl: 'string',
      hostName: 'string',
      instanceId: 'string',
      port: 'number',
      securePort: 'number',
      app: 'string',
      durationInSecs: 'number',
      lastUpdatedTimestamp: 'number',
      renewalIntervalInSecs: 'number',
      vipAddress: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponseBodyData extends $tea.Model {
  instancesId?: string[];
  name?: string;
  upStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instancesId: 'InstancesId',
      name: 'Name',
      upStatus: 'UpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      upStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponseBodyListeners extends $tea.Model {
  ip?: string;
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      md5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponseBodyListeners extends $tea.Model {
  md5?: string;
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponseBodyConfigurations extends $tea.Model {
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

export class ListNacosHistoryConfigsResponseBodyHistoryItems extends $tea.Model {
  appName?: string;
  dataId?: string;
  group?: string;
  lastModifiedTime?: number;
  id?: number;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      lastModifiedTime: 'LastModifiedTime',
      id: 'Id',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      lastModifiedTime: 'number',
      id: 'number',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponseBodyData extends $tea.Model {
  data?: string;
  path?: string;
  dir?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      path: 'Path',
      dir: 'Dir',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      path: 'string',
      dir: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponseBodyData extends $tea.Model {
  ordering?: number;
  type?: string;
  districtEnName?: string;
  showName?: string;
  districtCnName?: string;
  enName?: string;
  districtId?: string;
  districtShowName?: string;
  description?: string;
  enDescription?: string;
  cnName?: string;
  name?: string;
  districtOrdering?: number;
  static names(): { [key: string]: string } {
    return {
      ordering: 'Ordering',
      type: 'Type',
      districtEnName: 'DistrictEnName',
      showName: 'ShowName',
      districtCnName: 'DistrictCnName',
      enName: 'EnName',
      districtId: 'DistrictId',
      districtShowName: 'DistrictShowName',
      description: 'Description',
      enDescription: 'EnDescription',
      cnName: 'CnName',
      name: 'Name',
      districtOrdering: 'DistrictOrdering',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ordering: 'number',
      type: 'string',
      districtEnName: 'string',
      showName: 'string',
      districtCnName: 'string',
      enName: 'string',
      districtId: 'string',
      districtShowName: 'string',
      description: 'string',
      enDescription: 'string',
      cnName: 'string',
      name: 'string',
      districtOrdering: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyDataInstanceModels extends $tea.Model {
  podName?: string;
  singleTunnelVip?: string;
  internetIp?: string;
  ip?: string;
  role?: string;
  healthStatus?: string;
  static names(): { [key: string]: string } {
    return {
      podName: 'PodName',
      singleTunnelVip: 'SingleTunnelVip',
      internetIp: 'InternetIp',
      ip: 'Ip',
      role: 'Role',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podName: 'string',
      singleTunnelVip: 'string',
      internetIp: 'string',
      ip: 'string',
      role: 'string',
      healthStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyData extends $tea.Model {
  vpcId?: string;
  createTime?: string;
  intranetAddress?: string;
  diskType?: string;
  pubNetworkFlow?: string;
  diskCapacity?: number;
  memoryCapacity?: number;
  clusterAliasName?: string;
  instanceCount?: number;
  intranetPort?: string;
  instanceModels?: QueryClusterDetailResponseBodyDataInstanceModels[];
  intranetDomain?: string;
  internetDomain?: string;
  payInfo?: string;
  internetAddress?: string;
  instanceId?: string;
  aclEntryList?: string;
  healthStatus?: string;
  initCostTime?: number;
  regionId?: string;
  aclId?: string;
  cpu?: number;
  clusterType?: string;
  clusterName?: string;
  initStatus?: string;
  internetPort?: string;
  appVersion?: string;
  netType?: string;
  clusterVersion?: string;
  clusterSpecification?: string;
  vSwitchId?: string;
  connectionType?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      createTime: 'CreateTime',
      intranetAddress: 'IntranetAddress',
      diskType: 'DiskType',
      pubNetworkFlow: 'PubNetworkFlow',
      diskCapacity: 'DiskCapacity',
      memoryCapacity: 'MemoryCapacity',
      clusterAliasName: 'ClusterAliasName',
      instanceCount: 'InstanceCount',
      intranetPort: 'IntranetPort',
      instanceModels: 'InstanceModels',
      intranetDomain: 'IntranetDomain',
      internetDomain: 'InternetDomain',
      payInfo: 'PayInfo',
      internetAddress: 'InternetAddress',
      instanceId: 'InstanceId',
      aclEntryList: 'AclEntryList',
      healthStatus: 'HealthStatus',
      initCostTime: 'InitCostTime',
      regionId: 'RegionId',
      aclId: 'AclId',
      cpu: 'Cpu',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      initStatus: 'InitStatus',
      internetPort: 'InternetPort',
      appVersion: 'AppVersion',
      netType: 'NetType',
      clusterVersion: 'ClusterVersion',
      clusterSpecification: 'ClusterSpecification',
      vSwitchId: 'VSwitchId',
      connectionType: 'ConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      createTime: 'string',
      intranetAddress: 'string',
      diskType: 'string',
      pubNetworkFlow: 'string',
      diskCapacity: 'number',
      memoryCapacity: 'number',
      clusterAliasName: 'string',
      instanceCount: 'number',
      intranetPort: 'string',
      instanceModels: { 'type': 'array', 'itemType': QueryClusterDetailResponseBodyDataInstanceModels },
      intranetDomain: 'string',
      internetDomain: 'string',
      payInfo: 'string',
      internetAddress: 'string',
      instanceId: 'string',
      aclEntryList: 'string',
      healthStatus: 'string',
      initCostTime: 'number',
      regionId: 'string',
      aclId: 'string',
      cpu: 'number',
      clusterType: 'string',
      clusterName: 'string',
      initStatus: 'string',
      internetPort: 'string',
      appVersion: 'string',
      netType: 'string',
      clusterVersion: 'string',
      clusterSpecification: 'string',
      vSwitchId: 'string',
      connectionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationResponseBodyData extends $tea.Model {
  step?: number;
  max?: number;
  min?: number;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'number',
      max: 'number',
      min: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponseBodyData extends $tea.Model {
  clusterSpecificationName?: string;
  diskCapacity?: string;
  memoryCapacity?: string;
  instanceCount?: string;
  maxTps?: string;
  maxCon?: string;
  cpuCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSpecificationName: 'ClusterSpecificationName',
      diskCapacity: 'DiskCapacity',
      memoryCapacity: 'MemoryCapacity',
      instanceCount: 'InstanceCount',
      maxTps: 'MaxTps',
      maxCon: 'MaxCon',
      cpuCapacity: 'CpuCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpecificationName: 'string',
      diskCapacity: 'string',
      memoryCapacity: 'string',
      instanceCount: 'string',
      maxTps: 'string',
      maxCon: 'string',
      cpuCapacity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBodyData extends $tea.Model {
  maxClientCnxns?: string;
  configAuthSupported?: boolean;
  initLimit?: string;
  MCPEnabled?: boolean;
  openSuperAcl?: boolean;
  restartFlag?: boolean;
  jvmFlagsCustom?: string;
  autopurgePurgeInterval?: string;
  autopurgeSnapRetainCount?: string;
  syncLimit?: string;
  configAuthEnabled?: boolean;
  clusterName?: string;
  MCPSupported?: boolean;
  juteMaxbuffer?: string;
  tickTime?: string;
  passWord?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      maxClientCnxns: 'MaxClientCnxns',
      configAuthSupported: 'ConfigAuthSupported',
      initLimit: 'InitLimit',
      MCPEnabled: 'MCPEnabled',
      openSuperAcl: 'OpenSuperAcl',
      restartFlag: 'RestartFlag',
      jvmFlagsCustom: 'JvmFlagsCustom',
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      syncLimit: 'SyncLimit',
      configAuthEnabled: 'ConfigAuthEnabled',
      clusterName: 'ClusterName',
      MCPSupported: 'MCPSupported',
      juteMaxbuffer: 'JuteMaxbuffer',
      tickTime: 'TickTime',
      passWord: 'PassWord',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxClientCnxns: 'string',
      configAuthSupported: 'boolean',
      initLimit: 'string',
      MCPEnabled: 'boolean',
      openSuperAcl: 'boolean',
      restartFlag: 'boolean',
      jvmFlagsCustom: 'string',
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      syncLimit: 'string',
      configAuthEnabled: 'boolean',
      clusterName: 'string',
      MCPSupported: 'boolean',
      juteMaxbuffer: 'string',
      tickTime: 'string',
      passWord: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponseBodyData extends $tea.Model {
  data?: string;
  path?: string;
  dir?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      path: 'Path',
      dir: 'Dir',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      path: 'string',
      dir: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponseBodyData extends $tea.Model {
  type?: number;
  namespaceShowName?: string;
  quota?: number;
  namespace?: string;
  namespaceDesc?: string;
  configCount?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      configCount: 'ConfigCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      namespaceShowName: 'string',
      quota: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      configCount: 'number',
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
      'cn-chengdu': "mse.cn-chegndu.aliyuncs.com",
      'ap-northeast-1': "mse. ap-northeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "msefinance-share.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shenzhen-finance-1': "msefinance-share.cn-shenzhen-finance-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addMockRuleWithOptions(request: AddMockRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddMockRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddMockRuleResponse>(await this.doRPCRequest("AddMockRule", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new AddMockRuleResponse({}));
  }

  async addMockRule(request: AddMockRuleRequest): Promise<AddMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMockRuleWithOptions(request, runtime);
  }

  async cloneNacosConfigWithOptions(request: CloneNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<CloneNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneNacosConfigResponse>(await this.doRPCRequest("CloneNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CloneNacosConfigResponse({}));
  }

  async cloneNacosConfig(request: CloneNacosConfigRequest): Promise<CloneNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneNacosConfigWithOptions(request, runtime);
  }

  async createAlarmRuleWithOptions(tmpReq: CreateAlarmRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlarmRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alertWay)) {
      request.alertWayShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertWay, "AlertWay", "json");
    }

    if (!Util.isUnset(tmpReq.contactGroupIds)) {
      request.contactGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactGroupIds, "ContactGroupIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlarmRuleResponse>(await this.doRPCRequest("CreateAlarmRule", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlarmRuleResponse({}));
  }

  async createAlarmRule(request: CreateAlarmRuleRequest): Promise<CreateAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlarmRuleWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApplicationResponse>(await this.doRPCRequest("CreateApplication", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterResponse>(await this.doRPCRequest("CreateCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createEngineNamespaceWithOptions(request: CreateEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEngineNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEngineNamespaceResponse>(await this.doRPCRequest("CreateEngineNamespace", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEngineNamespaceResponse({}));
  }

  async createEngineNamespace(request: CreateEngineNamespaceRequest): Promise<CreateEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEngineNamespaceWithOptions(request, runtime);
  }

  async createNacosConfigWithOptions(request: CreateNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNacosConfigResponse>(await this.doRPCRequest("CreateNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNacosConfigResponse({}));
  }

  async createNacosConfig(request: CreateNacosConfigRequest): Promise<CreateNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNacosConfigWithOptions(request, runtime);
  }

  async createZnodeWithOptions(request: CreateZnodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateZnodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateZnodeResponse>(await this.doRPCRequest("CreateZnode", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateZnodeResponse({}));
  }

  async createZnode(request: CreateZnodeRequest): Promise<CreateZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createZnodeWithOptions(request, runtime);
  }

  async deleteAlarmRuleWithOptions(request: DeleteAlarmRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlarmRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlarmRuleResponse>(await this.doRPCRequest("DeleteAlarmRule", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlarmRuleResponse({}));
  }

  async deleteAlarmRule(request: DeleteAlarmRuleRequest): Promise<DeleteAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlarmRuleWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterResponse>(await this.doRPCRequest("DeleteCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteEngineNamespaceWithOptions(request: DeleteEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEngineNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEngineNamespaceResponse>(await this.doRPCRequest("DeleteEngineNamespace", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEngineNamespaceResponse({}));
  }

  async deleteEngineNamespace(request: DeleteEngineNamespaceRequest): Promise<DeleteEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEngineNamespaceWithOptions(request, runtime);
  }

  async deleteNacosConfigWithOptions(request: DeleteNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNacosConfigResponse>(await this.doRPCRequest("DeleteNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNacosConfigResponse({}));
  }

  async deleteNacosConfig(request: DeleteNacosConfigRequest): Promise<DeleteNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosConfigWithOptions(request, runtime);
  }

  async deleteNacosConfigsWithOptions(request: DeleteNacosConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNacosConfigsResponse>(await this.doRPCRequest("DeleteNacosConfigs", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNacosConfigsResponse({}));
  }

  async deleteNacosConfigs(request: DeleteNacosConfigsRequest): Promise<DeleteNacosConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosConfigsWithOptions(request, runtime);
  }

  async deleteNacosServiceWithOptions(request: DeleteNacosServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNacosServiceResponse>(await this.doRPCRequest("DeleteNacosService", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNacosServiceResponse({}));
  }

  async deleteNacosService(request: DeleteNacosServiceRequest): Promise<DeleteNacosServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosServiceWithOptions(request, runtime);
  }

  async deleteZnodeWithOptions(request: DeleteZnodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZnodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteZnodeResponse>(await this.doRPCRequest("DeleteZnode", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteZnodeResponse({}));
  }

  async deleteZnode(request: DeleteZnodeRequest): Promise<DeleteZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZnodeWithOptions(request, runtime);
  }

  async exportNacosConfigWithOptions(request: ExportNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<ExportNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportNacosConfigResponse>(await this.doRPCRequest("ExportNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ExportNacosConfigResponse({}));
  }

  async exportNacosConfig(request: ExportNacosConfigRequest): Promise<ExportNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportNacosConfigWithOptions(request, runtime);
  }

  async getEngineNamepaceWithOptions(request: GetEngineNamepaceRequest, runtime: $Util.RuntimeOptions): Promise<GetEngineNamepaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEngineNamepaceResponse>(await this.doRPCRequest("GetEngineNamepace", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetEngineNamepaceResponse({}));
  }

  async getEngineNamepace(request: GetEngineNamepaceRequest): Promise<GetEngineNamepaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEngineNamepaceWithOptions(request, runtime);
  }

  async getImportFileUrlWithOptions(request: GetImportFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetImportFileUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImportFileUrlResponse>(await this.doRPCRequest("GetImportFileUrl", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetImportFileUrlResponse({}));
  }

  async getImportFileUrl(request: GetImportFileUrlRequest): Promise<GetImportFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImportFileUrlWithOptions(request, runtime);
  }

  async getNacosConfigWithOptions(request: GetNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNacosConfigResponse>(await this.doRPCRequest("GetNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetNacosConfigResponse({}));
  }

  async getNacosConfig(request: GetNacosConfigRequest): Promise<GetNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNacosConfigWithOptions(request, runtime);
  }

  async getNacosHistoryConfigWithOptions(request: GetNacosHistoryConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetNacosHistoryConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNacosHistoryConfigResponse>(await this.doRPCRequest("GetNacosHistoryConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetNacosHistoryConfigResponse({}));
  }

  async getNacosHistoryConfig(request: GetNacosHistoryConfigRequest): Promise<GetNacosHistoryConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNacosHistoryConfigWithOptions(request, runtime);
  }

  async getOverviewWithOptions(request: GetOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOverviewResponse>(await this.doRPCRequest("GetOverview", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetOverviewResponse({}));
  }

  async getOverview(request: GetOverviewRequest): Promise<GetOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  async importNacosConfigWithOptions(request: ImportNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<ImportNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportNacosConfigResponse>(await this.doRPCRequest("ImportNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ImportNacosConfigResponse({}));
  }

  async importNacosConfig(request: ImportNacosConfigRequest): Promise<ImportNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importNacosConfigWithOptions(request, runtime);
  }

  async listAlarmContactGroupsWithOptions(request: ListAlarmContactGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmContactGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmContactGroupsResponse>(await this.doRPCRequest("ListAlarmContactGroups", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmContactGroupsResponse({}));
  }

  async listAlarmContactGroups(request: ListAlarmContactGroupsRequest): Promise<ListAlarmContactGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmContactGroupsWithOptions(request, runtime);
  }

  async listAlarmHistoriesWithOptions(request: ListAlarmHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmHistoriesResponse>(await this.doRPCRequest("ListAlarmHistories", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmHistoriesResponse({}));
  }

  async listAlarmHistories(request: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  async listAlarmItemsWithOptions(request: ListAlarmItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmItemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmItemsResponse>(await this.doRPCRequest("ListAlarmItems", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmItemsResponse({}));
  }

  async listAlarmItems(request: ListAlarmItemsRequest): Promise<ListAlarmItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmItemsWithOptions(request, runtime);
  }

  async listAlarmRulesWithOptions(request: ListAlarmRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmRulesResponse>(await this.doRPCRequest("ListAlarmRules", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmRulesResponse({}));
  }

  async listAlarmRules(request: ListAlarmRulesRequest): Promise<ListAlarmRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmRulesWithOptions(request, runtime);
  }

  async listAnsInstancesWithOptions(request: ListAnsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAnsInstancesResponse>(await this.doRPCRequest("ListAnsInstances", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAnsInstancesResponse({}));
  }

  async listAnsInstances(request: ListAnsInstancesRequest): Promise<ListAnsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsInstancesWithOptions(request, runtime);
  }

  async listAnsServiceClustersWithOptions(request: ListAnsServiceClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsServiceClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAnsServiceClustersResponse>(await this.doRPCRequest("ListAnsServiceClusters", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAnsServiceClustersResponse({}));
  }

  async listAnsServiceClusters(request: ListAnsServiceClustersRequest): Promise<ListAnsServiceClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsServiceClustersWithOptions(request, runtime);
  }

  async listAnsServicesWithOptions(request: ListAnsServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsServicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAnsServicesResponse>(await this.doRPCRequest("ListAnsServices", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListAnsServicesResponse({}));
  }

  async listAnsServices(request: ListAnsServicesRequest): Promise<ListAnsServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsServicesWithOptions(request, runtime);
  }

  async listClusterConnectionTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListClusterConnectionTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListClusterConnectionTypesResponse>(await this.doRPCRequest("ListClusterConnectionTypes", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterConnectionTypesResponse({}));
  }

  async listClusterConnectionTypes(): Promise<ListClusterConnectionTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterConnectionTypesWithOptions(runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListClustersResponse>(await this.doRPCRequest("ListClusters", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listClusterTypesWithOptions(request: ListClusterTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterTypesResponse>(await this.doRPCRequest("ListClusterTypes", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterTypesResponse({}));
  }

  async listClusterTypes(request: ListClusterTypesRequest): Promise<ListClusterTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterTypesWithOptions(request, runtime);
  }

  async listClusterVersionsWithOptions(request: ListClusterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterVersionsResponse>(await this.doRPCRequest("ListClusterVersions", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterVersionsResponse({}));
  }

  async listClusterVersions(request: ListClusterVersionsRequest): Promise<ListClusterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterVersionsWithOptions(request, runtime);
  }

  async listEngineNamespacesWithOptions(request: ListEngineNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListEngineNamespacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListEngineNamespacesResponse>(await this.doRPCRequest("ListEngineNamespaces", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListEngineNamespacesResponse({}));
  }

  async listEngineNamespaces(request: ListEngineNamespacesRequest): Promise<ListEngineNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEngineNamespacesWithOptions(request, runtime);
  }

  async listEurekaInstancesWithOptions(request: ListEurekaInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListEurekaInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListEurekaInstancesResponse>(await this.doRPCRequest("ListEurekaInstances", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListEurekaInstancesResponse({}));
  }

  async listEurekaInstances(request: ListEurekaInstancesRequest): Promise<ListEurekaInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEurekaInstancesWithOptions(request, runtime);
  }

  async listEurekaServicesWithOptions(request: ListEurekaServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListEurekaServicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListEurekaServicesResponse>(await this.doRPCRequest("ListEurekaServices", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListEurekaServicesResponse({}));
  }

  async listEurekaServices(request: ListEurekaServicesRequest): Promise<ListEurekaServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEurekaServicesWithOptions(request, runtime);
  }

  async listListenersByConfigWithOptions(request: ListListenersByConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersByConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenersByConfigResponse>(await this.doRPCRequest("ListListenersByConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenersByConfigResponse({}));
  }

  async listListenersByConfig(request: ListListenersByConfigRequest): Promise<ListListenersByConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersByConfigWithOptions(request, runtime);
  }

  async listListenersByIpWithOptions(request: ListListenersByIpRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersByIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenersByIpResponse>(await this.doRPCRequest("ListListenersByIp", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenersByIpResponse({}));
  }

  async listListenersByIp(request: ListListenersByIpRequest): Promise<ListListenersByIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersByIpWithOptions(request, runtime);
  }

  async listNacosConfigsWithOptions(request: ListNacosConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListNacosConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNacosConfigsResponse>(await this.doRPCRequest("ListNacosConfigs", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListNacosConfigsResponse({}));
  }

  async listNacosConfigs(request: ListNacosConfigsRequest): Promise<ListNacosConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNacosConfigsWithOptions(request, runtime);
  }

  async listNacosHistoryConfigsWithOptions(request: ListNacosHistoryConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListNacosHistoryConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNacosHistoryConfigsResponse>(await this.doRPCRequest("ListNacosHistoryConfigs", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListNacosHistoryConfigsResponse({}));
  }

  async listNacosHistoryConfigs(request: ListNacosHistoryConfigsRequest): Promise<ListNacosHistoryConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNacosHistoryConfigsWithOptions(request, runtime);
  }

  async listZnodeChildrenWithOptions(request: ListZnodeChildrenRequest, runtime: $Util.RuntimeOptions): Promise<ListZnodeChildrenResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListZnodeChildrenResponse>(await this.doRPCRequest("ListZnodeChildren", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new ListZnodeChildrenResponse({}));
  }

  async listZnodeChildren(request: ListZnodeChildrenRequest): Promise<ListZnodeChildrenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listZnodeChildrenWithOptions(request, runtime);
  }

  async queryBusinessLocationsWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryBusinessLocationsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryBusinessLocationsResponse>(await this.doRPCRequest("QueryBusinessLocations", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new QueryBusinessLocationsResponse({}));
  }

  async queryBusinessLocations(): Promise<QueryBusinessLocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBusinessLocationsWithOptions(runtime);
  }

  async queryClusterDetailWithOptions(request: QueryClusterDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryClusterDetailResponse>(await this.doRPCRequest("QueryClusterDetail", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new QueryClusterDetailResponse({}));
  }

  async queryClusterDetail(request: QueryClusterDetailRequest): Promise<QueryClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterDetailWithOptions(request, runtime);
  }

  async queryClusterDiskSpecificationWithOptions(request: QueryClusterDiskSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterDiskSpecificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryClusterDiskSpecificationResponse>(await this.doRPCRequest("QueryClusterDiskSpecification", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new QueryClusterDiskSpecificationResponse({}));
  }

  async queryClusterDiskSpecification(request: QueryClusterDiskSpecificationRequest): Promise<QueryClusterDiskSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterDiskSpecificationWithOptions(request, runtime);
  }

  async queryClusterSpecificationWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryClusterSpecificationResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryClusterSpecificationResponse>(await this.doRPCRequest("QueryClusterSpecification", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new QueryClusterSpecificationResponse({}));
  }

  async queryClusterSpecification(): Promise<QueryClusterSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterSpecificationWithOptions(runtime);
  }

  async queryConfigWithOptions(request: QueryConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryConfigResponse>(await this.doRPCRequest("QueryConfig", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new QueryConfigResponse({}));
  }

  async queryConfig(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConfigWithOptions(request, runtime);
  }

  async queryMonitorWithOptions(request: QueryMonitorRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonitorResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryMonitorResponse>(await this.doRPCRequest("QueryMonitor", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new QueryMonitorResponse({}));
  }

  async queryMonitor(request: QueryMonitorRequest): Promise<QueryMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonitorWithOptions(request, runtime);
  }

  async queryZnodeDetailWithOptions(request: QueryZnodeDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryZnodeDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryZnodeDetailResponse>(await this.doRPCRequest("QueryZnodeDetail", "2019-05-31", "HTTPS", "GET", "AK", "json", req, runtime), new QueryZnodeDetailResponse({}));
  }

  async queryZnodeDetail(request: QueryZnodeDetailRequest): Promise<QueryZnodeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryZnodeDetailWithOptions(request, runtime);
  }

  async restartClusterWithOptions(request: RestartClusterRequest, runtime: $Util.RuntimeOptions): Promise<RestartClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartClusterResponse>(await this.doRPCRequest("RestartCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new RestartClusterResponse({}));
  }

  async restartCluster(request: RestartClusterRequest): Promise<RestartClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartClusterWithOptions(request, runtime);
  }

  async retryClusterWithOptions(request: RetryClusterRequest, runtime: $Util.RuntimeOptions): Promise<RetryClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetryClusterResponse>(await this.doRPCRequest("RetryCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new RetryClusterResponse({}));
  }

  async retryCluster(request: RetryClusterRequest): Promise<RetryClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryClusterWithOptions(request, runtime);
  }

  async scalingClusterWithOptions(request: ScalingClusterRequest, runtime: $Util.RuntimeOptions): Promise<ScalingClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScalingClusterResponse>(await this.doRPCRequest("ScalingCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new ScalingClusterResponse({}));
  }

  async scalingCluster(request: ScalingClusterRequest): Promise<ScalingClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scalingClusterWithOptions(request, runtime);
  }

  async updateAclWithOptions(request: UpdateAclRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAclResponse>(await this.doRPCRequest("UpdateAcl", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAclResponse({}));
  }

  async updateAcl(request: UpdateAclRequest): Promise<UpdateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclWithOptions(request, runtime);
  }

  async updateClusterWithOptions(request: UpdateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateClusterResponse>(await this.doRPCRequest("UpdateCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateClusterResponse({}));
  }

  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  async updateConfigWithOptions(request: UpdateConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConfigResponse>(await this.doRPCRequest("UpdateConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConfigResponse({}));
  }

  async updateConfig(request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigWithOptions(request, runtime);
  }

  async updateEngineNamespaceWithOptions(request: UpdateEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEngineNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEngineNamespaceResponse>(await this.doRPCRequest("UpdateEngineNamespace", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEngineNamespaceResponse({}));
  }

  async updateEngineNamespace(request: UpdateEngineNamespaceRequest): Promise<UpdateEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEngineNamespaceWithOptions(request, runtime);
  }

  async updateNacosConfigWithOptions(request: UpdateNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNacosConfigResponse>(await this.doRPCRequest("UpdateNacosConfig", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNacosConfigResponse({}));
  }

  async updateNacosConfig(request: UpdateNacosConfigRequest): Promise<UpdateNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosConfigWithOptions(request, runtime);
  }

  async updateNacosInstanceWithOptions(request: UpdateNacosInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNacosInstanceResponse>(await this.doRPCRequest("UpdateNacosInstance", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNacosInstanceResponse({}));
  }

  async updateNacosInstance(request: UpdateNacosInstanceRequest): Promise<UpdateNacosInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosInstanceWithOptions(request, runtime);
  }

  async updateZnodeWithOptions(request: UpdateZnodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZnodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateZnodeResponse>(await this.doRPCRequest("UpdateZnode", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateZnodeResponse({}));
  }

  async updateZnode(request: UpdateZnodeRequest): Promise<UpdateZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZnodeWithOptions(request, runtime);
  }

  async upgradeClusterWithOptions(request: UpgradeClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeClusterResponse>(await this.doRPCRequest("UpgradeCluster", "2019-05-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeClusterResponse({}));
  }

  async upgradeCluster(request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClusterWithOptions(request, runtime);
  }

}
