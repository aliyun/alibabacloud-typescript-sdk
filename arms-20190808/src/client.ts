// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddASMIntegrationRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddASMIntegrationResponseBody extends $tea.Model {
  requestId?: string;
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddASMIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddASMIntegrationResponseBody;
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
      body: AddASMIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAliClusterIdsToPrometheusGlobalViewRequest extends $tea.Model {
  clusterIds?: string;
  globalViewClusterId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAliClusterIdsToPrometheusGlobalViewResponseBody extends $tea.Model {
  data?: AddAliClusterIdsToPrometheusGlobalViewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddAliClusterIdsToPrometheusGlobalViewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAliClusterIdsToPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAliClusterIdsToPrometheusGlobalViewResponseBody;
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
      body: AddAliClusterIdsToPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaRequest extends $tea.Model {
  clusterId?: string;
  integration?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      integration: 'Integration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      integration: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaResponseBody extends $tea.Model {
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

export class AddGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGrafanaResponseBody;
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
      body: AddGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationRequest extends $tea.Model {
  clusterId?: string;
  integration?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      integration: 'Integration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      integration: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationResponseBody extends $tea.Model {
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

export class AddIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddIntegrationResponseBody;
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
      body: AddIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewRequest extends $tea.Model {
  clusters?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewResponseBody extends $tea.Model {
  data?: AddPrometheusGlobalViewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddPrometheusGlobalViewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddPrometheusGlobalViewResponseBody;
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
      body: AddPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsRequest extends $tea.Model {
  clusterIds?: string;
  groupName?: string;
  productCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      groupName: 'GroupName',
      productCode: 'ProductCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      groupName: 'string',
      productCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsResponseBody extends $tea.Model {
  data?: AddPrometheusGlobalViewByAliClusterIdsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddPrometheusGlobalViewByAliClusterIdsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddPrometheusGlobalViewByAliClusterIdsResponseBody;
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
      body: AddPrometheusGlobalViewByAliClusterIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordingRuleRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  ruleYaml?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      ruleYaml: 'RuleYaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      ruleYaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordingRuleResponseBody extends $tea.Model {
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

export class AddRecordingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddRecordingRuleResponseBody;
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
      body: AddRecordingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendInstancesToPrometheusGlobalViewRequest extends $tea.Model {
  clusters?: string;
  globalViewClusterId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: 'string',
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendInstancesToPrometheusGlobalViewResponseBody extends $tea.Model {
  data?: AppendInstancesToPrometheusGlobalViewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AppendInstancesToPrometheusGlobalViewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendInstancesToPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AppendInstancesToPrometheusGlobalViewResponseBody;
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
      body: AppendInstancesToPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioRequest extends $tea.Model {
  appId?: string;
  config?: { [key: string]: any };
  name?: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  snDump?: boolean;
  snForce?: boolean;
  snStat?: boolean;
  snTransfer?: boolean;
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      config: 'Config',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
      snDump: 'SnDump',
      snForce: 'SnForce',
      snStat: 'SnStat',
      snTransfer: 'SnTransfer',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
      snDump: 'boolean',
      snForce: 'boolean',
      snStat: 'boolean',
      snTransfer: 'boolean',
      updateOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioShrinkRequest extends $tea.Model {
  appId?: string;
  configShrink?: string;
  name?: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  snDump?: boolean;
  snForce?: boolean;
  snStat?: boolean;
  snTransfer?: boolean;
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      configShrink: 'Config',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
      snDump: 'SnDump',
      snForce: 'SnForce',
      snStat: 'SnStat',
      snTransfer: 'SnTransfer',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      configShrink: 'string',
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
      snDump: 'boolean',
      snForce: 'boolean',
      snStat: 'boolean',
      snTransfer: 'boolean',
      updateOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioResponseBody extends $tea.Model {
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

export class ApplyScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyScenarioResponseBody;
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
      body: ApplyScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CMonitorAlertEventRequest extends $tea.Model {
  clusterId?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  page?: string;
  pageSize?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      kind: 'Kind',
      name: 'Name',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      kind: 'string',
      name: 'string',
      namespace: 'string',
      page: 'string',
      pageSize: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CMonitorAlertEventResponseBody extends $tea.Model {
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

export class CMonitorAlertEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CMonitorAlertEventResponseBody;
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
      body: CMonitorAlertEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceStatusRequest extends $tea.Model {
  regionId?: string;
  svcCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      svcCode: 'SvcCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      svcCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceStatusResponseBody extends $tea.Model {
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

export class CheckServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckServiceStatusResponseBody;
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
      body: CheckServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAppRequest extends $tea.Model {
  appIds?: string;
  enable?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      enable: 'Enable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      enable: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAppResponseBody extends $tea.Model {
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

export class ConfigAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigAppResponseBody;
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
      body: ConfigAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactRequest extends $tea.Model {
  contactName?: string;
  dingRobotWebhookUrl?: string;
  email?: string;
  phoneNum?: string;
  regionId?: string;
  systemNoc?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      email: 'Email',
      phoneNum: 'PhoneNum',
      regionId: 'RegionId',
      systemNoc: 'SystemNoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      dingRobotWebhookUrl: 'string',
      email: 'string',
      phoneNum: 'string',
      regionId: 'string',
      systemNoc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponseBody extends $tea.Model {
  contactId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlertContactResponseBody;
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
      body: CreateAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  contactIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupResponseBody extends $tea.Model {
  contactGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlertContactGroupResponseBody;
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
      body: CreateAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleRequest extends $tea.Model {
  dispatchRule?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleResponseBody extends $tea.Model {
  dispatchRuleId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRuleId: 'DispatchRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRuleId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDispatchRuleResponseBody;
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
      body: CreateDispatchRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleRequest extends $tea.Model {
  alertCheckType?: string;
  alertGroup?: number;
  alertId?: number;
  alertName?: string;
  alertRuleContent?: string;
  alertStatus?: string;
  alertType?: string;
  annotations?: string;
  autoAddNewApplication?: boolean;
  clusterId?: string;
  duration?: number;
  filters?: string;
  labels?: string;
  level?: string;
  message?: string;
  metricsKey?: string;
  metricsType?: string;
  notifyStrategy?: string;
  pids?: string;
  promQL?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRuleContent: 'AlertRuleContent',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      annotations: 'Annotations',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      duration: 'Duration',
      filters: 'Filters',
      labels: 'Labels',
      level: 'Level',
      message: 'Message',
      metricsKey: 'MetricsKey',
      metricsType: 'MetricsType',
      notifyStrategy: 'NotifyStrategy',
      pids: 'Pids',
      promQL: 'PromQL',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertRuleContent: 'string',
      alertStatus: 'string',
      alertType: 'string',
      annotations: 'string',
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      duration: 'number',
      filters: 'string',
      labels: 'string',
      level: 'string',
      message: 'string',
      metricsKey: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      pids: 'string',
      promQL: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBody extends $tea.Model {
  alertRule?: CreateOrUpdateAlertRuleResponseBodyAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRule: 'AlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: CreateOrUpdateAlertRuleResponseBodyAlertRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateAlertRuleResponseBody;
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
      body: CreateOrUpdateAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactRequest extends $tea.Model {
  contactId?: number;
  contactName?: string;
  email?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactResponseBody extends $tea.Model {
  alertContact?: CreateOrUpdateContactResponseBodyAlertContact;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertContact: 'AlertContact',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContact: CreateOrUpdateContactResponseBodyAlertContact,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateContactResponseBody;
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
      body: CreateOrUpdateContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupRequest extends $tea.Model {
  contactGroupId?: number;
  contactGroupName?: string;
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contactIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupResponseBody extends $tea.Model {
  alertContactGroup?: CreateOrUpdateContactGroupResponseBodyAlertContactGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertContactGroup: 'AlertContactGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroup: CreateOrUpdateContactGroupResponseBodyAlertContactGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateContactGroupResponseBody;
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
      body: CreateOrUpdateContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateEventBridgeIntegrationRequest extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  description?: string;
  endpoint?: string;
  eventBusName?: string;
  eventBusRegionId?: string;
  id?: number;
  name?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      description: 'Description',
      endpoint: 'Endpoint',
      eventBusName: 'EventBusName',
      eventBusRegionId: 'EventBusRegionId',
      id: 'Id',
      name: 'Name',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      description: 'string',
      endpoint: 'string',
      eventBusName: 'string',
      eventBusRegionId: 'string',
      id: 'number',
      name: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateEventBridgeIntegrationResponseBody extends $tea.Model {
  eventBridgeIntegration?: CreateOrUpdateEventBridgeIntegrationResponseBodyEventBridgeIntegration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeIntegration: 'EventBridgeIntegration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeIntegration: CreateOrUpdateEventBridgeIntegrationResponseBodyEventBridgeIntegration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateEventBridgeIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateEventBridgeIntegrationResponseBody;
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
      body: CreateOrUpdateEventBridgeIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotRequest extends $tea.Model {
  dailyNoc?: boolean;
  dailyNocTime?: string;
  robotAddress?: string;
  robotId?: number;
  robotName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      robotAddress: 'RobotAddress',
      robotId: 'RobotId',
      robotName: 'RobotName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      robotAddress: 'string',
      robotId: 'number',
      robotName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotResponseBody extends $tea.Model {
  alertRobot?: CreateOrUpdateIMRobotResponseBodyAlertRobot;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRobot: 'AlertRobot',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRobot: CreateOrUpdateIMRobotResponseBodyAlertRobot,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateIMRobotResponseBody;
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
      body: CreateOrUpdateIMRobotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyRequest extends $tea.Model {
  escalationPolicyId?: number;
  groupRule?: string;
  id?: number;
  integrationId?: number;
  matchingRules?: string;
  name?: string;
  notifyRule?: string;
  notifyTemplate?: string;
  repeat?: boolean;
  repeatInterval?: number;
  sendRecoverMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      escalationPolicyId: 'EscalationPolicyId',
      groupRule: 'GroupRule',
      id: 'Id',
      integrationId: 'IntegrationId',
      matchingRules: 'MatchingRules',
      name: 'Name',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicyId: 'number',
      groupRule: 'string',
      id: 'number',
      integrationId: 'number',
      matchingRules: 'string',
      name: 'string',
      notifyRule: 'string',
      notifyTemplate: 'string',
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBody extends $tea.Model {
  notificationPolicy?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationPolicy: 'NotificationPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationPolicy: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateNotificationPolicyResponseBody;
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
      body: CreateOrUpdateNotificationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyRequest extends $tea.Model {
  id?: number;
  matchingRules?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchingRules: 'MatchingRules',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      matchingRules: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBody extends $tea.Model {
  requestId?: string;
  silencePolicy?: CreateOrUpdateSilencePolicyResponseBodySilencePolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      silencePolicy: 'SilencePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      silencePolicy: CreateOrUpdateSilencePolicyResponseBodySilencePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateSilencePolicyResponseBody;
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
      body: CreateOrUpdateSilencePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactRequest extends $tea.Model {
  bizHeaders?: string;
  bizParams?: string;
  body?: string;
  method?: string;
  recoverBody?: string;
  url?: string;
  webhookId?: number;
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      bizHeaders: 'BizHeaders',
      bizParams: 'BizParams',
      body: 'Body',
      method: 'Method',
      recoverBody: 'RecoverBody',
      url: 'Url',
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizHeaders: 'string',
      bizParams: 'string',
      body: 'string',
      method: 'string',
      recoverBody: 'string',
      url: 'string',
      webhookId: 'number',
      webhookName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseBody extends $tea.Model {
  requestId?: string;
  webhookContact?: CreateOrUpdateWebhookContactResponseBodyWebhookContact;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webhookContact: 'WebhookContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webhookContact: CreateOrUpdateWebhookContactResponseBodyWebhookContact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateWebhookContactResponseBody;
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
      body: CreateOrUpdateWebhookContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleRequest extends $tea.Model {
  alertName?: string;
  annotations?: string;
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: string;
  message?: string;
  notifyType?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      annotations: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: 'string',
      message: 'string',
      notifyType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponseBody extends $tea.Model {
  prometheusAlertRule?: CreatePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRule: CreatePrometheusAlertRuleResponseBodyPrometheusAlertRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePrometheusAlertRuleResponseBody;
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
      body: CreatePrometheusAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppRequest extends $tea.Model {
  regionId?: string;
  retcodeAppName?: string;
  retcodeAppType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retcodeAppName: 'RetcodeAppName',
      retcodeAppType: 'RetcodeAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retcodeAppName: 'string',
      retcodeAppType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponseBody extends $tea.Model {
  requestId?: string;
  retcodeAppDataBean?: CreateRetcodeAppResponseBodyRetcodeAppDataBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeAppDataBean: 'RetcodeAppDataBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeAppDataBean: CreateRetcodeAppResponseBodyRetcodeAppDataBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRetcodeAppResponseBody;
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
      body: CreateRetcodeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookRequest extends $tea.Model {
  body?: string;
  contactName?: string;
  httpHeaders?: string;
  httpParams?: string;
  method?: string;
  recoverBody?: string;
  regionId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contactName: 'ContactName',
      httpHeaders: 'HttpHeaders',
      httpParams: 'HttpParams',
      method: 'Method',
      recoverBody: 'RecoverBody',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      contactName: 'string',
      httpHeaders: 'string',
      httpParams: 'string',
      method: 'string',
      recoverBody: 'string',
      regionId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookResponseBody extends $tea.Model {
  contactId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWebhookResponseBody;
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
      body: CreateWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteASMIntegrationRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteASMIntegrationResponseBody extends $tea.Model {
  requestId?: string;
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteASMIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteASMIntegrationResponseBody;
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
      body: DeleteASMIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactRequest extends $tea.Model {
  contactId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlertContactResponseBody;
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
      body: DeleteAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
  contactGroupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlertContactGroupResponseBody;
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
      body: DeleteAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRuleRequest extends $tea.Model {
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRuleResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlertRuleResponseBody;
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
      body: DeleteAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesRequest extends $tea.Model {
  alertIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlertRulesResponseBody;
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
      body: DeleteAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCmsExporterRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCmsExporterResponseBody extends $tea.Model {
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

export class DeleteCmsExporterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCmsExporterResponseBody;
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
      body: DeleteCmsExporterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactRequest extends $tea.Model {
  contactId?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteContactResponseBody;
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
      body: DeleteContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupRequest extends $tea.Model {
  contactGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteContactGroupResponseBody;
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
      body: DeleteContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDispatchRuleRequest extends $tea.Model {
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDispatchRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDispatchRuleResponseBody;
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
      body: DeleteDispatchRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventBridgeIntegrationRequest extends $tea.Model {
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

export class DeleteEventBridgeIntegrationResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventBridgeIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEventBridgeIntegrationResponseBody;
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
      body: DeleteEventBridgeIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGrafanaResourceRequest extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGrafanaResourceResponseBody extends $tea.Model {
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

export class DeleteGrafanaResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGrafanaResourceResponseBody;
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
      body: DeleteGrafanaResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIMRobotRequest extends $tea.Model {
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      robotId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIMRobotResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIMRobotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIMRobotResponseBody;
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
      body: DeleteIMRobotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntegrationRequest extends $tea.Model {
  clusterId?: string;
  integration?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      integration: 'Integration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      integration: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntegrationResponseBody extends $tea.Model {
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

export class DeleteIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIntegrationResponseBody;
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
      body: DeleteIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationPolicyRequest extends $tea.Model {
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

export class DeleteNotificationPolicyResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNotificationPolicyResponseBody;
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
      body: DeleteNotificationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusAlertRuleRequest extends $tea.Model {
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusAlertRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePrometheusAlertRuleResponseBody;
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
      body: DeletePrometheusAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      globalViewClusterId: 'GlobalViewClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalViewClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusGlobalViewResponseBody extends $tea.Model {
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

export class DeletePrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePrometheusGlobalViewResponseBody;
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
      body: DeletePrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRetcodeAppRequest extends $tea.Model {
  appId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRetcodeAppResponseBody extends $tea.Model {
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

export class DeleteRetcodeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRetcodeAppResponseBody;
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
      body: DeleteRetcodeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioRequest extends $tea.Model {
  regionId?: string;
  scenarioId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenarioId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteScenarioResponseBody;
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
      body: DeleteScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSilencePolicyRequest extends $tea.Model {
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

export class DeleteSilencePolicyResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSilencePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSilencePolicyResponseBody;
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
      body: DeleteSilencePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppRequest extends $tea.Model {
  appId?: string;
  pid?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pid: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppResponseBody extends $tea.Model {
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

export class DeleteTraceAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTraceAppResponseBody;
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
      body: DeleteTraceAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebhookContactRequest extends $tea.Model {
  webhookId?: number;
  static names(): { [key: string]: string } {
    return {
      webhookId: 'WebhookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebhookContactResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebhookContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWebhookContactResponseBody;
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
      body: DeleteWebhookContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsRequest extends $tea.Model {
  contactGroupName?: string;
  isDetail?: boolean;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      isDetail: 'IsDetail',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      isDetail: 'boolean',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBody extends $tea.Model {
  pageBean?: DescribeContactGroupsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeContactGroupsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeContactGroupsResponseBody;
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
      body: DescribeContactGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsRequest extends $tea.Model {
  contactName?: string;
  email?: string;
  page?: number;
  phone?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      email: 'Email',
      page: 'Page',
      phone: 'Phone',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      email: 'string',
      page: 'number',
      phone: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponseBody extends $tea.Model {
  pageBean?: DescribeContactsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeContactsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeContactsResponseBody;
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
      body: DescribeContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleRequest extends $tea.Model {
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBody extends $tea.Model {
  dispatchRule?: DescribeDispatchRuleResponseBodyDispatchRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: DescribeDispatchRuleResponseBodyDispatchRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDispatchRuleResponseBody;
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
      body: DescribeDispatchRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsRequest extends $tea.Model {
  page?: number;
  robotName?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      robotName: 'RobotName',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      robotName: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponseBody extends $tea.Model {
  pageBean?: DescribeIMRobotsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeIMRobotsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIMRobotsResponseBody;
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
      body: DescribeIMRobotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleRequest extends $tea.Model {
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponseBody extends $tea.Model {
  prometheusAlertRule?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRule: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePrometheusAlertRuleResponseBody;
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
      body: DescribePrometheusAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLicenseKeyRequest extends $tea.Model {
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

export class DescribeTraceLicenseKeyResponseBody extends $tea.Model {
  licenseKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      licenseKey: 'LicenseKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLicenseKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTraceLicenseKeyResponseBody;
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
      body: DescribeTraceLicenseKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsRequest extends $tea.Model {
  page?: number;
  size?: number;
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      webhookName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBody extends $tea.Model {
  pageBean?: DescribeWebhookContactsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeWebhookContactsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeWebhookContactsResponseBody;
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
      body: DescribeWebhookContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetASMIntegrationStateRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetASMIntegrationStateResponseBody extends $tea.Model {
  requestId?: string;
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetASMIntegrationStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetASMIntegrationStateResponseBody;
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
      body: GetASMIntegrationStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDownloadUrlRequest extends $tea.Model {
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

export class GetAgentDownloadUrlResponseBody extends $tea.Model {
  armsAgentDownloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      armsAgentDownloadUrl: 'ArmsAgentDownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsAgentDownloadUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgentDownloadUrlResponseBody;
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
      body: GetAgentDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesRequest extends $tea.Model {
  alertIds?: string;
  alertNames?: string;
  alertStatus?: string;
  alertType?: string;
  page?: number;
  regionId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      alertNames: 'AlertNames',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
      alertNames: 'string',
      alertStatus: 'string',
      alertType: 'string',
      page: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBody extends $tea.Model {
  pageBean?: GetAlertRulesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: GetAlertRulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlertRulesResponseBody;
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
      body: GetAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  intervalMills?: number;
  PId?: string;
  pageSize?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      intervalMills: 'IntervalMills',
      PId: 'PId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      intervalMills: 'number',
      PId: 'string',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponseBody extends $tea.Model {
  code?: number;
  data?: GetAppApiByPageResponseBodyData;
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
      data: GetAppApiByPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppApiByPageResponseBody;
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
      body: GetAppApiByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsAgentDownLoadUrlRequest extends $tea.Model {
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

export class GetArmsAgentDownLoadUrlResponseBody extends $tea.Model {
  armsAgentDownloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      armsAgentDownloadUrl: 'ArmsAgentDownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsAgentDownloadUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsAgentDownLoadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetArmsAgentDownLoadUrlResponseBody;
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
      body: GetArmsAgentDownLoadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $tea.Model {
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

export class GetAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuthTokenResponseBody;
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
      body: GetAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEstimateFeeInfoRequest extends $tea.Model {
  targetUserId?: string;
  usageCn?: number;
  usageFn?: number;
  static names(): { [key: string]: string } {
    return {
      targetUserId: 'TargetUserId',
      usageCn: 'UsageCn',
      usageFn: 'UsageFn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserId: 'string',
      usageCn: 'number',
      usageFn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEstimateFeeInfoResponseBody extends $tea.Model {
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

export class GetEstimateFeeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEstimateFeeInfoResponseBody;
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
      body: GetEstimateFeeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExploreUrlRequest extends $tea.Model {
  clusterId?: string;
  expression?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      expression: 'Expression',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      expression: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExploreUrlResponseBody extends $tea.Model {
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

export class GetExploreUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExploreUrlResponseBody;
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
      body: GetExploreUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationStateRequest extends $tea.Model {
  clusterId?: string;
  integration?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      integration: 'Integration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      integration: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationStateResponseBody extends $tea.Model {
  requestId?: string;
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIntegrationStateResponseBody;
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
      body: GetIntegrationStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceRequest extends $tea.Model {
  regionId?: string;
  traceIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceIDs: 'TraceIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseBody extends $tea.Model {
  multiCallChainInfos?: GetMultipleTraceResponseBodyMultiCallChainInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      multiCallChainInfos: 'MultiCallChainInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCallChainInfos: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMultipleTraceResponseBody;
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
      body: GetMultipleTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusApiTokenRequest extends $tea.Model {
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

export class GetPrometheusApiTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusApiTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPrometheusApiTokenResponseBody;
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
      body: GetPrometheusApiTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      globalViewClusterId: 'GlobalViewClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalViewClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusGlobalViewResponseBody extends $tea.Model {
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

export class GetPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPrometheusGlobalViewResponseBody;
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
      body: GetPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingRuleRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingRuleResponseBody extends $tea.Model {
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

export class GetRecordingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRecordingRuleResponseBody;
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
      body: GetRecordingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeShareUrlRequest extends $tea.Model {
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeShareUrlResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeShareUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRetcodeShareUrlResponseBody;
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
      body: GetRetcodeShareUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  endTime?: number;
  pid?: string;
  regionId?: string;
  rpcID?: string;
  startTime?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pid: 'Pid',
      regionId: 'RegionId',
      rpcID: 'RpcID',
      startTime: 'StartTime',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pid: 'string',
      regionId: 'string',
      rpcID: 'string',
      startTime: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $tea.Model {
  requestId?: string;
  stackInfo?: GetStackResponseBodyStackInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: { 'type': 'array', 'itemType': GetStackResponseBodyStackInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackResponseBody;
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
      body: GetStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  startTime?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      startTime: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $tea.Model {
  requestId?: string;
  spans?: GetTraceResponseBodySpans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spans: { 'type': 'array', 'itemType': GetTraceResponseBodySpans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTraceResponseBody;
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
      body: GetTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppRequest extends $tea.Model {
  pid?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseBody extends $tea.Model {
  requestId?: string;
  traceApp?: GetTraceAppResponseBodyTraceApp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApp: 'TraceApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApp: GetTraceAppResponseBodyTraceApp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTraceAppResponseBody;
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
      body: GetTraceAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCommercialStatusRequest extends $tea.Model {
  parentId?: string;
  targetUserId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      targetUserId: 'TargetUserId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      targetUserId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCommercialStatusResponseBody extends $tea.Model {
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

export class GetUserCommercialStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserCommercialStatusResponseBody;
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
      body: GetUserCommercialStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesRequest extends $tea.Model {
  contactGroupIds?: string;
  isAutoStart?: boolean;
  pids?: string;
  regionId?: string;
  templageAlertConfig?: string;
  templateAlertId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      pids: 'Pids',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
      templateAlertId: 'TemplateAlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      pids: 'string',
      regionId: 'string',
      templageAlertConfig: 'string',
      templateAlertId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesResponseBody extends $tea.Model {
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

export class ImportAppAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportAppAlertRulesResponseBody;
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
      body: ImportAppAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCmsExporterRequest extends $tea.Model {
  clusterId?: string;
  cmsArgs?: string;
  enableTag?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cmsArgs: 'CmsArgs',
      enableTag: 'EnableTag',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cmsArgs: 'string',
      enableTag: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCmsExporterResponseBody extends $tea.Model {
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

export class InstallCmsExporterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InstallCmsExporterResponseBody;
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
      body: InstallCmsExporterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallManagedPrometheusRequest extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  kubeConfig?: string;
  regionId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      kubeConfig: 'KubeConfig',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      kubeConfig: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallManagedPrometheusResponseBody extends $tea.Model {
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

export class InstallManagedPrometheusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InstallManagedPrometheusResponseBody;
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
      body: InstallManagedPrometheusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsRequest extends $tea.Model {
  currentPage?: number;
  filter?: string;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      filter: 'Filter',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      filter: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBody extends $tea.Model {
  page?: ListActivatedAlertsResponseBodyPage;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListActivatedAlertsResponseBodyPage,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListActivatedAlertsResponseBody;
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
      body: ListActivatedAlertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsRequest extends $tea.Model {
  alertName?: string;
  dispatchRuleId?: number;
  endTime?: string;
  integrationType?: string;
  page?: number;
  severity?: string;
  showActivities?: boolean;
  showEvents?: boolean;
  size?: number;
  startTime?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      dispatchRuleId: 'DispatchRuleId',
      endTime: 'EndTime',
      integrationType: 'IntegrationType',
      page: 'Page',
      severity: 'Severity',
      showActivities: 'ShowActivities',
      showEvents: 'ShowEvents',
      size: 'Size',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      dispatchRuleId: 'number',
      endTime: 'string',
      integrationType: 'string',
      page: 'number',
      severity: 'string',
      showActivities: 'boolean',
      showEvents: 'boolean',
      size: 'number',
      startTime: 'string',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $tea.Model {
  pageBean?: ListAlertsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListAlertsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlertsResponseBody;
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
      body: ListAlertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaRequest extends $tea.Model {
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

export class ListClusterFromGrafanaResponseBody extends $tea.Model {
  promClusterList?: ListClusterFromGrafanaResponseBodyPromClusterList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promClusterList: 'PromClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promClusterList: { 'type': 'array', 'itemType': ListClusterFromGrafanaResponseBodyPromClusterList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterFromGrafanaResponseBody;
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
      body: ListClusterFromGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponseBody extends $tea.Model {
  data?: ListCmsInstancesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCmsInstancesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCmsInstancesResponseBody;
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
      body: ListCmsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsRequest extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  dashboardName?: string;
  language?: string;
  product?: string;
  recreateSwitch?: boolean;
  regionId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      dashboardName: 'DashboardName',
      language: 'Language',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
      regionId: 'RegionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      dashboardName: 'string',
      language: 'string',
      product: 'string',
      recreateSwitch: 'boolean',
      regionId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBody extends $tea.Model {
  dashboardVos?: ListDashboardsResponseBodyDashboardVos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardVos: 'DashboardVos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardVos: { 'type': 'array', 'itemType': ListDashboardsResponseBodyDashboardVos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDashboardsResponseBody;
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
      body: ListDashboardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      system: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponseBody extends $tea.Model {
  dispatchRules?: ListDispatchRuleResponseBodyDispatchRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRules: 'DispatchRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRules: { 'type': 'array', 'itemType': ListDispatchRuleResponseBodyDispatchRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDispatchRuleResponseBody;
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
      body: ListDispatchRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponseBody extends $tea.Model {
  pageBean?: ListEscalationPoliciesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListEscalationPoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEscalationPoliciesResponseBody;
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
      body: ListEscalationPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponseBody extends $tea.Model {
  pageBean?: ListEventBridgeIntegrationsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListEventBridgeIntegrationsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEventBridgeIntegrationsResponseBody;
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
      body: ListEventBridgeIntegrationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesRequest extends $tea.Model {
  isDetail?: boolean;
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDetail: 'IsDetail',
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDetail: 'boolean',
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBody extends $tea.Model {
  pageBean?: ListNotificationPoliciesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListNotificationPoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNotificationPoliciesResponseBody;
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
      body: ListNotificationPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponseBody extends $tea.Model {
  pageBean?: ListOnCallSchedulesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListOnCallSchedulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOnCallSchedulesResponseBody;
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
      body: ListOnCallSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesRequest extends $tea.Model {
  clusterId?: string;
  matchExpressions?: string;
  name?: string;
  regionId?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      matchExpressions: 'MatchExpressions',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      matchExpressions: 'string',
      name: 'string',
      regionId: 'string',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponseBody extends $tea.Model {
  prometheusAlertRules?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRules: 'PrometheusAlertRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRules: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPrometheusAlertRulesResponseBody;
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
      body: ListPrometheusAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponseBody extends $tea.Model {
  prometheusAlertTemplates?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertTemplates: 'PrometheusAlertTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertTemplates: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPrometheusAlertTemplatesResponseBody;
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
      body: ListPrometheusAlertTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusGlobalViewRequest extends $tea.Model {
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

export class ListPrometheusGlobalViewResponseBody extends $tea.Model {
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

export class ListPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPrometheusGlobalViewResponseBody;
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
      body: ListPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsRequest extends $tea.Model {
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBody extends $tea.Model {
  requestId?: string;
  retcodeApps?: ListRetcodeAppsResponseBodyRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApps: { 'type': 'array', 'itemType': ListRetcodeAppsResponseBodyRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRetcodeAppsResponseBody;
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
      body: ListRetcodeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioRequest extends $tea.Model {
  appId?: string;
  name?: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseBody extends $tea.Model {
  armsScenarios?: ListScenarioResponseBodyArmsScenarios[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      armsScenarios: 'ArmsScenarios',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsScenarios: { 'type': 'array', 'itemType': ListScenarioResponseBodyArmsScenarios },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScenarioResponseBody;
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
      body: ListScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesRequest extends $tea.Model {
  isDetail?: boolean;
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDetail: 'IsDetail',
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDetail: 'boolean',
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBody extends $tea.Model {
  pageBean?: ListSilencePoliciesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListSilencePoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSilencePoliciesResponseBody;
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
      body: ListSilencePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
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

export class ListTraceAppsRequest extends $tea.Model {
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

export class ListTraceAppsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceApps?: ListTraceAppsResponseBodyTraceApps[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceApps: { 'type': 'array', 'itemType': ListTraceAppsResponseBodyTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTraceAppsResponseBody;
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
      body: ListTraceAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageGetRecordingRuleRequest extends $tea.Model {
  clusterId?: string;
  queryUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queryUserId: 'QueryUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queryUserId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageGetRecordingRuleResponseBody extends $tea.Model {
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

export class ManageGetRecordingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ManageGetRecordingRuleResponseBody;
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
      body: ManageGetRecordingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageRecordingRuleRequest extends $tea.Model {
  clusterId?: string;
  queryUserId?: string;
  regionId?: string;
  ruleYaml?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queryUserId: 'QueryUserId',
      regionId: 'RegionId',
      ruleYaml: 'RuleYaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queryUserId: 'string',
      regionId: 'string',
      ruleYaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageRecordingRuleResponseBody extends $tea.Model {
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

export class ManageRecordingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ManageRecordingRuleResponseBody;
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
      body: ManageRecordingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsDefaultSLRRequest extends $tea.Model {
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

export class OpenArmsDefaultSLRResponseBody extends $tea.Model {
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

export class OpenArmsDefaultSLRResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenArmsDefaultSLRResponseBody;
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
      body: OpenArmsDefaultSLRResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceRequest extends $tea.Model {
  ownerId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenArmsServiceResponseBody;
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
      body: OpenArmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceSecondVersionRequest extends $tea.Model {
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceSecondVersionResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceSecondVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenArmsServiceSecondVersionResponseBody;
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
      body: OpenArmsServiceSecondVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVClusterRequest extends $tea.Model {
  clusterType?: string;
  length?: number;
  product?: string;
  recreateSwitch?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      length: 'Length',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      length: 'number',
      product: 'string',
      recreateSwitch: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVClusterResponseBody extends $tea.Model {
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

export class OpenVClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenVClusterResponseBody;
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
      body: OpenVClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceDefaultSLRRequest extends $tea.Model {
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

export class OpenXtraceDefaultSLRResponseBody extends $tea.Model {
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

export class OpenXtraceDefaultSLRResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenXtraceDefaultSLRResponseBody;
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
      body: OpenXtraceDefaultSLRResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromVpcExporterManagerRequest extends $tea.Model {
  clusterId?: string;
  exporterConfig?: string;
  exporterType?: string;
  method?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      exporterConfig: 'ExporterConfig',
      exporterType: 'ExporterType',
      method: 'Method',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      exporterConfig: 'string',
      exporterType: 'string',
      method: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromVpcExporterManagerResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromVpcExporterManagerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PromVpcExporterManagerResponseBody;
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
      body: PromVpcExporterManagerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequest extends $tea.Model {
  datasetId?: number;
  dateStr?: string;
  dimensions?: QueryDatasetRequestDimensions[];
  hungryMode?: boolean;
  intervalInSec?: number;
  isDrillDown?: boolean;
  limit?: number;
  maxTime?: number;
  measures?: string[];
  minTime?: number;
  optionalDims?: QueryDatasetRequestOptionalDims[];
  orderByKey?: string;
  proxyUserId?: string;
  reduceTail?: boolean;
  requiredDims?: QueryDatasetRequestRequiredDims[];
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      dateStr: 'DateStr',
      dimensions: 'Dimensions',
      hungryMode: 'HungryMode',
      intervalInSec: 'IntervalInSec',
      isDrillDown: 'IsDrillDown',
      limit: 'Limit',
      maxTime: 'MaxTime',
      measures: 'Measures',
      minTime: 'MinTime',
      optionalDims: 'OptionalDims',
      orderByKey: 'OrderByKey',
      proxyUserId: 'ProxyUserId',
      reduceTail: 'ReduceTail',
      requiredDims: 'RequiredDims',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      dateStr: 'string',
      dimensions: { 'type': 'array', 'itemType': QueryDatasetRequestDimensions },
      hungryMode: 'boolean',
      intervalInSec: 'number',
      isDrillDown: 'boolean',
      limit: 'number',
      maxTime: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      minTime: 'number',
      optionalDims: { 'type': 'array', 'itemType': QueryDatasetRequestOptionalDims },
      orderByKey: 'string',
      proxyUserId: 'string',
      reduceTail: 'boolean',
      requiredDims: { 'type': 'array', 'itemType': QueryDatasetRequestRequiredDims },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetResponseBody extends $tea.Model {
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

export class QueryDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDatasetResponseBody;
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
      body: QueryDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequest extends $tea.Model {
  currentPage?: number;
  customFilters?: string[];
  dimensions?: string[];
  endTime?: number;
  filters?: QueryMetricByPageRequestFilters[];
  intervalInSec?: number;
  measures?: string[];
  metric?: string;
  order?: string;
  orderBy?: string;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      customFilters: 'CustomFilters',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      filters: 'Filters',
      intervalInSec: 'IntervalInSec',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      customFilters: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricByPageRequestFilters },
      intervalInSec: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageResponseBody extends $tea.Model {
  code?: string;
  data?: QueryMetricByPageResponseBodyData;
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
      code: 'string',
      data: QueryMetricByPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMetricByPageResponseBody;
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
      body: QueryMetricByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusResponseBody extends $tea.Model {
  data?: QueryPromInstallStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPromInstallStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPromInstallStatusResponseBody;
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
      body: QueryPromInstallStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReleaseMetricRequest extends $tea.Model {
  changeOrderId?: string;
  createTime?: number;
  metricType?: string;
  pid?: string;
  proxyUserId?: string;
  releaseEndTime?: number;
  releaseStartTime?: number;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      createTime: 'CreateTime',
      metricType: 'MetricType',
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      releaseEndTime: 'ReleaseEndTime',
      releaseStartTime: 'ReleaseStartTime',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      createTime: 'number',
      metricType: 'string',
      pid: 'string',
      proxyUserId: 'string',
      releaseEndTime: 'number',
      releaseStartTime: 'number',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReleaseMetricResponseBody extends $tea.Model {
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

export class QueryReleaseMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryReleaseMetricResponseBody;
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
      body: QueryReleaseMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewRequest extends $tea.Model {
  clusterIds?: string;
  globalViewClusterId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponseBody extends $tea.Model {
  data?: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBody;
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
      body: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSourcesFromPrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId?: string;
  groupName?: string;
  regionId?: string;
  sourceNames?: string;
  static names(): { [key: string]: string } {
    return {
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      sourceNames: 'SourceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
      sourceNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSourcesFromPrometheusGlobalViewResponseBody extends $tea.Model {
  data?: RemoveSourcesFromPrometheusGlobalViewResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RemoveSourcesFromPrometheusGlobalViewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSourcesFromPrometheusGlobalViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveSourcesFromPrometheusGlobalViewResponseBody;
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
      body: RemoveSourcesFromPrometheusGlobalViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequest extends $tea.Model {
  pid?: string;
  settings?: SaveTraceAppConfigRequestSettings[];
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      settings: { 'type': 'array', 'itemType': SaveTraceAppConfigRequestSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigResponseBody extends $tea.Model {
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

export class SaveTraceAppConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveTraceAppConfigResponseBody;
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
      body: SaveTraceAppConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactRequest extends $tea.Model {
  contactIds?: string;
  contactName?: string;
  currentPage?: string;
  email?: string;
  pageSize?: string;
  phone?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      contactName: 'ContactName',
      currentPage: 'CurrentPage',
      email: 'Email',
      pageSize: 'PageSize',
      phone: 'Phone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      contactName: 'string',
      currentPage: 'string',
      email: 'string',
      pageSize: 'string',
      phone: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponseBody extends $tea.Model {
  pageBean?: SearchAlertContactResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertContactResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAlertContactResponseBody;
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
      body: SearchAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupRequest extends $tea.Model {
  contactGroupIds?: string;
  contactGroupName?: string;
  contactId?: number;
  contactName?: string;
  isDetail?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      contactGroupName: 'ContactGroupName',
      contactId: 'ContactId',
      contactName: 'ContactName',
      isDetail: 'IsDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      contactGroupName: 'string',
      contactId: 'number',
      contactName: 'string',
      isDetail: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseBody extends $tea.Model {
  contactGroups?: SearchAlertContactGroupResponseBodyContactGroups[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseBodyContactGroups },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAlertContactGroupResponseBody;
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
      body: SearchAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesRequest extends $tea.Model {
  alertId?: number;
  alertType?: number;
  currentPage?: number;
  endTime?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBody extends $tea.Model {
  pageBean?: SearchAlertHistoriesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertHistoriesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAlertHistoriesResponseBody;
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
      body: SearchAlertHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistorysRequest extends $tea.Model {
  alertId?: number;
  alertType?: number;
  currentPage?: number;
  endTime?: number;
  pageSize?: number;
  proxyUserId?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      proxyUserId: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistorysResponseBody extends $tea.Model {
  pageBean?: SearchAlertHistorysResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertHistorysResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistorysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAlertHistorysResponseBody;
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
      body: SearchAlertHistorysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesRequest extends $tea.Model {
  appType?: string;
  currentPage?: number;
  pageSize?: number;
  pid?: string;
  regionId?: string;
  systemRegionId?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      systemRegionId: 'SystemRegionId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      currentPage: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      systemRegionId: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBody extends $tea.Model {
  pageBean?: SearchAlertRulesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertRulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAlertRulesResponseBody;
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
      body: SearchAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsRequest extends $tea.Model {
  alertId?: number;
  alertType?: number;
  appType?: string;
  currentPage?: number;
  endTime?: number;
  isTrigger?: number;
  pageSize?: number;
  pid?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      appType: 'AppType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isTrigger: 'IsTrigger',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      appType: 'string',
      currentPage: 'number',
      endTime: 'number',
      isTrigger: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBody extends $tea.Model {
  isTrigger?: number;
  pageBean?: SearchEventsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTrigger: 'IsTrigger',
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTrigger: 'number',
      pageBean: SearchEventsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchEventsResponseBody;
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
      body: SearchEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  retcodeAppName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      retcodeAppName: 'RetcodeAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      retcodeAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBody extends $tea.Model {
  pageBean?: SearchRetcodeAppByPageResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchRetcodeAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchRetcodeAppByPageResponseBody;
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
      body: SearchRetcodeAppByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameRequest extends $tea.Model {
  regionId?: string;
  traceAppName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceAppName: 'TraceAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseBody extends $tea.Model {
  requestId?: string;
  traceApps?: SearchTraceAppByNameResponseBodyTraceApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseBodyTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTraceAppByNameResponseBody;
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
      body: SearchTraceAppByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  traceAppName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      traceAppName: 'TraceAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      traceAppName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBody extends $tea.Model {
  pageBean?: SearchTraceAppByPageResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTraceAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTraceAppByPageResponseBody;
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
      body: SearchTraceAppByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  endTime?: number;
  exclusionFilters?: SearchTracesRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
  pid?: string;
  regionId?: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime?: number;
  tag?: SearchTracesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pid: 'Pid',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesRequestExclusionFilters },
      minDuration: 'number',
      operationName: 'string',
      pid: 'string',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponseBody extends $tea.Model {
  requestId?: string;
  traceInfos?: SearchTracesResponseBodyTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesResponseBodyTraceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTracesResponseBody;
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
      body: SearchTracesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequest extends $tea.Model {
  endTime?: number;
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
  pageNumber?: number;
  pageSize?: number;
  pid?: string;
  regionId?: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime?: number;
  tags?: SearchTracesByPageRequestTags[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesByPageRequestExclusionFilters },
      minDuration: 'number',
      operationName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': SearchTracesByPageRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponseBody extends $tea.Model {
  pageBean?: SearchTracesByPageResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTracesByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTracesByPageResponseBody;
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
      body: SearchTracesByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTTSVerifyLinkRequest extends $tea.Model {
  contactId?: number;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTTSVerifyLinkResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTTSVerifyLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendTTSVerifyLinkResponseBody;
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
      body: SendTTSVerifyLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRetcodeShareStatusRequest extends $tea.Model {
  pid?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRetcodeShareStatusResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRetcodeShareStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetRetcodeShareStatusResponseBody;
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
      body: SetRetcodeShareStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertRequest extends $tea.Model {
  alertId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartAlertResponseBody;
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
      body: StartAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertRequest extends $tea.Model {
  alertId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopAlertResponseBody;
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
      body: StopAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TurnOnSecondSwitchRequest extends $tea.Model {
  pid?: string;
  proxyUserId?: string;
  releaseStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      releaseStartTime: 'ReleaseStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      proxyUserId: 'string',
      releaseStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TurnOnSecondSwitchResponseBody extends $tea.Model {
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

export class TurnOnSecondSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TurnOnSecondSwitchResponseBody;
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
      body: TurnOnSecondSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallManagedPrometheusRequest extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallManagedPrometheusResponseBody extends $tea.Model {
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

export class UninstallManagedPrometheusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UninstallManagedPrometheusResponseBody;
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
      body: UninstallManagedPrometheusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallPromClusterRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallPromClusterResponseBody extends $tea.Model {
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

export class UninstallPromClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UninstallPromClusterResponseBody;
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
      body: UninstallPromClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UpdateAlertContactRequest extends $tea.Model {
  contactId?: number;
  contactName?: string;
  dingRobotWebhookUrl?: string;
  email?: string;
  phoneNum?: string;
  regionId?: string;
  systemNoc?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      email: 'Email',
      phoneNum: 'PhoneNum',
      regionId: 'RegionId',
      systemNoc: 'SystemNoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      dingRobotWebhookUrl: 'string',
      email: 'string',
      phoneNum: 'string',
      regionId: 'string',
      systemNoc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlertContactResponseBody;
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
      body: UpdateAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupRequest extends $tea.Model {
  contactGroupId?: number;
  contactGroupName?: string;
  contactIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlertContactGroupResponseBody;
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
      body: UpdateAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleRequest extends $tea.Model {
  alertId?: number;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  regionId?: string;
  templageAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      regionId: 'string',
      templageAlertConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleResponseBody extends $tea.Model {
  alertId?: number;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlertRuleResponseBody;
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
      body: UpdateAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleRequest extends $tea.Model {
  dispatchRule?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDispatchRuleResponseBody;
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
      body: UpdateDispatchRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleRequest extends $tea.Model {
  alertId?: number;
  alertName?: string;
  annotations?: string;
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: string;
  message?: string;
  notifyType?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: 'string',
      message: 'string',
      notifyType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleResponseBody extends $tea.Model {
  prometheusAlertRule?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRule: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePrometheusAlertRuleResponseBody;
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
      body: UpdatePrometheusAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookRequest extends $tea.Model {
  body?: string;
  contactId?: number;
  contactName?: string;
  httpHeaders?: string;
  httpParams?: string;
  method?: string;
  recoverBody?: string;
  regionId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contactId: 'ContactId',
      contactName: 'ContactName',
      httpHeaders: 'HttpHeaders',
      httpParams: 'HttpParams',
      method: 'Method',
      recoverBody: 'RecoverBody',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      contactId: 'number',
      contactName: 'string',
      httpHeaders: 'string',
      httpParams: 'string',
      method: 'string',
      recoverBody: 'string',
      regionId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookResponseBody extends $tea.Model {
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWebhookResponseBody;
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
      body: UpdateWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRequest extends $tea.Model {
  file?: string;
  fileName?: string;
  pid?: string;
  regionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadResponseBody extends $tea.Model {
  fid?: string;
  fileName?: string;
  requestId?: string;
  uploadTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fid: 'Fid',
      fileName: 'FileName',
      requestId: 'RequestId',
      uploadTime: 'UploadTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fid: 'string',
      fileName: 'string',
      requestId: 'string',
      uploadTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadResponseBody;
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
      body: UploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAliClusterIdsToPrometheusGlobalViewResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendInstancesToPrometheusGlobalViewResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems extends $tea.Model {
  aggregate?: string;
  metricKey?: string;
  n?: number;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricKey: 'MetricKey',
      n: 'N',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricKey: 'string',
      n: 'number',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent extends $tea.Model {
  alertRuleItems?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems[];
  condition?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleItems: 'AlertRuleItems',
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleItems: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems },
      condition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations extends $tea.Model {
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters extends $tea.Model {
  key?: string;
  opt?: string;
  show?: boolean;
  t?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opt: 'Opt',
      show: 'Show',
      t: 'T',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opt: 'string',
      show: 'boolean',
      t: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters extends $tea.Model {
  filterKey?: string;
  filterOpt?: string;
  filterValues?: string[];
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterOpt: 'FilterOpt',
      filterValues: 'FilterValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterOpt: 'string',
      filterValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters extends $tea.Model {
  customSLSFilters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters[];
  customSLSGroupByDimensions?: string[];
  customSLSWheres?: string[];
  dimFilters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters[];
  static names(): { [key: string]: string } {
    return {
      customSLSFilters: 'CustomSLSFilters',
      customSLSGroupByDimensions: 'CustomSLSGroupByDimensions',
      customSLSWheres: 'CustomSLSWheres',
      dimFilters: 'DimFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSLSFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
      dimFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels extends $tea.Model {
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRule extends $tea.Model {
  alertCheckType?: string;
  alertGroup?: number;
  alertId?: number;
  alertName?: string;
  alertRuleContent?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent;
  alertStatus?: string;
  alertType?: string;
  annotations?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations[];
  autoAddNewApplication?: boolean;
  clusterId?: string;
  createdTime?: number;
  duration?: string;
  extend?: string;
  filters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters;
  labels?: CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels[];
  level?: string;
  message?: string;
  metricsType?: string;
  notifyStrategy?: string;
  pids?: string[];
  promQL?: string;
  regionId?: string;
  updatedTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRuleContent: 'AlertRuleContent',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      annotations: 'Annotations',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      extend: 'Extend',
      filters: 'Filters',
      labels: 'Labels',
      level: 'Level',
      message: 'Message',
      metricsType: 'MetricsType',
      notifyStrategy: 'NotifyStrategy',
      pids: 'Pids',
      promQL: 'PromQL',
      regionId: 'RegionId',
      updatedTime: 'UpdatedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertRuleContent: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent,
      alertStatus: 'string',
      alertType: 'string',
      annotations: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations },
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      filters: CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters,
      labels: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels },
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      pids: { 'type': 'array', 'itemType': 'string' },
      promQL: 'string',
      regionId: 'string',
      updatedTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactResponseBodyAlertContact extends $tea.Model {
  contactId?: number;
  contactName?: string;
  email?: string;
  isVerify?: boolean;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      isVerify: 'IsVerify',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      isVerify: 'boolean',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupResponseBodyAlertContactGroup extends $tea.Model {
  contactGroupId?: number;
  contactGroupName?: string;
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contactIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateEventBridgeIntegrationResponseBodyEventBridgeIntegration extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  description?: string;
  endpoint?: string;
  eventBusName?: string;
  eventBusRegionId?: string;
  id?: number;
  name?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      description: 'Description',
      endpoint: 'Endpoint',
      eventBusName: 'EventBusName',
      eventBusRegionId: 'EventBusRegionId',
      id: 'Id',
      name: 'Name',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      description: 'string',
      endpoint: 'string',
      eventBusName: 'string',
      eventBusRegionId: 'string',
      id: 'number',
      name: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotResponseBodyAlertRobot extends $tea.Model {
  dailyNoc?: boolean;
  dailyNocTime?: string;
  robotAddress?: string;
  robotId?: number;
  robotName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      robotAddress: 'RobotAddress',
      robotId: 'RobotId',
      robotName: 'RobotName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      robotAddress: 'string',
      robotId: 'number',
      robotName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule extends $tea.Model {
  groupInterval?: number;
  groupWait?: number;
  groupingFields?: string[];
  static names(): { [key: string]: string } {
    return {
      groupInterval: 'GroupInterval',
      groupWait: 'GroupWait',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInterval: 'number',
      groupWait: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules extends $tea.Model {
  matchingConditions?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects extends $tea.Model {
  notifyObjectId?: number;
  notifyObjectName?: string;
  notifyObjectType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyObjectId: 'NotifyObjectId',
      notifyObjectName: 'NotifyObjectName',
      notifyObjectType: 'NotifyObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjectId: 'number',
      notifyObjectName: 'string',
      notifyObjectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule extends $tea.Model {
  notifyChannels?: string[];
  notifyEndTime?: string;
  notifyObjects?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects[];
  notifyStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyEndTime: 'NotifyEndTime',
      notifyObjects: 'NotifyObjects',
      notifyStartTime: 'NotifyStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyEndTime: 'string',
      notifyObjects: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects },
      notifyStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate extends $tea.Model {
  emailContent?: string;
  emailRecoverContent?: string;
  emailRecoverTitle?: string;
  emailTitle?: string;
  robotContent?: string;
  smsContent?: string;
  smsRecoverContent?: string;
  ttsContent?: string;
  ttsRecoverContent?: string;
  static names(): { [key: string]: string } {
    return {
      emailContent: 'EmailContent',
      emailRecoverContent: 'EmailRecoverContent',
      emailRecoverTitle: 'EmailRecoverTitle',
      emailTitle: 'EmailTitle',
      robotContent: 'RobotContent',
      smsContent: 'SmsContent',
      smsRecoverContent: 'SmsRecoverContent',
      ttsContent: 'TtsContent',
      ttsRecoverContent: 'TtsRecoverContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailContent: 'string',
      emailRecoverContent: 'string',
      emailRecoverTitle: 'string',
      emailTitle: 'string',
      robotContent: 'string',
      smsContent: 'string',
      smsRecoverContent: 'string',
      ttsContent: 'string',
      ttsRecoverContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy extends $tea.Model {
  escalationPolicyId?: number;
  groupRule?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule;
  id?: number;
  integrationId?: number;
  matchingRules?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules[];
  name?: string;
  notifyRule?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule;
  notifyTemplate?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate;
  repeat?: boolean;
  repeatInterval?: number;
  sendRecoverMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      escalationPolicyId: 'EscalationPolicyId',
      groupRule: 'GroupRule',
      id: 'Id',
      integrationId: 'IntegrationId',
      matchingRules: 'MatchingRules',
      name: 'Name',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicyId: 'number',
      groupRule: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule,
      id: 'number',
      integrationId: 'number',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules },
      name: 'string',
      notifyRule: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule,
      notifyTemplate: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate,
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules extends $tea.Model {
  matchingConditions?: CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBodySilencePolicy extends $tea.Model {
  id?: number;
  matchingRules?: CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchingRules: 'MatchingRules',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook extends $tea.Model {
  bizHeaders?: string;
  bizParams?: string;
  body?: string;
  method?: string;
  recoverBody?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizHeaders: 'BizHeaders',
      bizParams: 'BizParams',
      body: 'Body',
      method: 'Method',
      recoverBody: 'RecoverBody',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizHeaders: 'string',
      bizParams: 'string',
      body: 'string',
      method: 'string',
      recoverBody: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseBodyWebhookContact extends $tea.Model {
  webhook?: CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook;
  webhookId?: number;
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      webhook: 'Webhook',
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhook: CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook,
      webhookId: 'number',
      webhookName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $tea.Model {
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

export class CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels extends $tea.Model {
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

export class CreatePrometheusAlertRuleResponseBodyPrometheusAlertRule extends $tea.Model {
  alertId?: number;
  alertName?: string;
  annotations?: CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
  message?: string;
  notifyType?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels },
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponseBodyRetcodeAppDataBean extends $tea.Model {
  appId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts extends $tea.Model {
  contactId?: number;
  contactName?: string;
  email?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBodyPageBeanAlertContactGroups extends $tea.Model {
  contactGroupId?: number;
  contactGroupName?: string;
  contacts?: DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts[];
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contacts: { 'type': 'array', 'itemType': DescribeContactGroupsResponseBodyPageBeanAlertContactGroupsContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponseBodyPageBean extends $tea.Model {
  alertContactGroups?: DescribeContactGroupsResponseBodyPageBeanAlertContactGroups[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertContactGroups: 'AlertContactGroups',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroups: { 'type': 'array', 'itemType': DescribeContactGroupsResponseBodyPageBeanAlertContactGroups },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponseBodyPageBeanAlertContacts extends $tea.Model {
  contactId?: number;
  contactName?: string;
  email?: string;
  isVerify?: boolean;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      email: 'Email',
      isVerify: 'IsVerify',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      email: 'string',
      isVerify: 'boolean',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponseBodyPageBean extends $tea.Model {
  alertContacts?: DescribeContactsResponseBodyPageBeanAlertContacts[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertContacts: 'AlertContacts',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContacts: { 'type': 'array', 'itemType': DescribeContactsResponseBodyPageBeanAlertContacts },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleGroupRules extends $tea.Model {
  groupId?: number;
  groupInterval?: number;
  groupWaitTime?: number;
  groupingFields?: string[];
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
      groupingFields: 'GroupingFields',
      repeatInterval: 'RepeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
      repeatInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects extends $tea.Model {
  name?: string;
  notifyObjectId?: string;
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyObjectId: 'NotifyObjectId',
      notifyType: 'NotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyObjectId: 'string',
      notifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules extends $tea.Model {
  notifyChannels?: string[];
  notifyObjects?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects[];
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyObjects: 'NotifyObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyObjects: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRule extends $tea.Model {
  dispatchType?: string;
  groupRules?: DescribeDispatchRuleResponseBodyDispatchRuleGroupRules[];
  isRecover?: boolean;
  labelMatchExpressionGrid?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid;
  name?: string;
  notifyRules?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules[];
  ruleId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchType: 'DispatchType',
      groupRules: 'GroupRules',
      isRecover: 'IsRecover',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      name: 'Name',
      notifyRules: 'NotifyRules',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchType: 'string',
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleGroupRules },
      isRecover: 'boolean',
      labelMatchExpressionGrid: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid,
      name: 'string',
      notifyRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules },
      ruleId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponseBodyPageBeanAlertIMRobots extends $tea.Model {
  dailyNoc?: boolean;
  dailyNocTime?: string;
  robotAddr?: string;
  robotId?: number;
  robotName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      robotAddr: 'RobotAddr',
      robotId: 'RobotId',
      robotName: 'RobotName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      robotAddr: 'string',
      robotId: 'number',
      robotName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponseBodyPageBean extends $tea.Model {
  alertIMRobots?: DescribeIMRobotsResponseBodyPageBeanAlertIMRobots[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertIMRobots: 'AlertIMRobots',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIMRobots: { 'type': 'array', 'itemType': DescribeIMRobotsResponseBodyPageBeanAlertIMRobots },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $tea.Model {
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

export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels extends $tea.Model {
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

export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule extends $tea.Model {
  alertId?: number;
  alertName?: string;
  annotations?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
  message?: string;
  notifyType?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels },
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook extends $tea.Model {
  bizHeaders?: { [key: string]: any };
  bizParams?: { [key: string]: any };
  body?: string;
  method?: string;
  recoverBody?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizHeaders: 'BizHeaders',
      bizParams: 'BizParams',
      body: 'Body',
      method: 'Method',
      recoverBody: 'RecoverBody',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bizParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      body: 'string',
      method: 'string',
      recoverBody: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBodyPageBeanWebhookContacts extends $tea.Model {
  webhook?: DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook;
  webhookId?: number;
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      webhook: 'Webhook',
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhook: DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook,
      webhookId: 'number',
      webhookName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBodyPageBean extends $tea.Model {
  page?: number;
  size?: number;
  total?: number;
  webhookContacts?: DescribeWebhookContactsResponseBodyPageBeanWebhookContacts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      webhookContacts: 'WebhookContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      webhookContacts: { 'type': 'array', 'itemType': DescribeWebhookContactsResponseBodyPageBeanWebhookContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems extends $tea.Model {
  aggregate?: string;
  metricKey?: string;
  n?: number;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricKey: 'MetricKey',
      n: 'N',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricKey: 'string',
      n: 'number',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent extends $tea.Model {
  alertRuleItems?: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems[];
  condition?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleItems: 'AlertRuleItems',
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleItems: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems },
      condition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations extends $tea.Model {
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters extends $tea.Model {
  key?: string;
  opt?: string;
  show?: boolean;
  t?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opt: 'Opt',
      show: 'Show',
      t: 'T',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opt: 'string',
      show: 'boolean',
      t: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters extends $tea.Model {
  filterKey?: string;
  filterOpt?: string;
  filterValues?: string[];
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterOpt: 'FilterOpt',
      filterValues: 'FilterValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterOpt: 'string',
      filterValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesFilters extends $tea.Model {
  customSLSFilters?: GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters[];
  customSLSGroupByDimensions?: string[];
  customSLSWheres?: string[];
  dimFilters?: GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters[];
  static names(): { [key: string]: string } {
    return {
      customSLSFilters: 'CustomSLSFilters',
      customSLSGroupByDimensions: 'CustomSLSGroupByDimensions',
      customSLSWheres: 'CustomSLSWheres',
      dimFilters: 'DimFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSLSFilters: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
      dimFilters: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBeanAlertRulesLabels extends $tea.Model {
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

export class GetAlertRulesResponseBodyPageBeanAlertRules extends $tea.Model {
  alertCheckType?: string;
  alertGroup?: number;
  alertId?: number;
  alertName?: string;
  alertRuleContent?: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent;
  alertStatus?: string;
  alertType?: string;
  annotations?: GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations[];
  autoAddNewApplication?: boolean;
  clusterId?: string;
  createdTime?: number;
  duration?: string;
  extend?: string;
  filters?: GetAlertRulesResponseBodyPageBeanAlertRulesFilters;
  labels?: GetAlertRulesResponseBodyPageBeanAlertRulesLabels[];
  level?: string;
  message?: string;
  metricsType?: string;
  notifyStrategy?: string;
  pids?: string[];
  promQL?: string;
  regionId?: string;
  updatedTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRuleContent: 'AlertRuleContent',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      annotations: 'Annotations',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      extend: 'Extend',
      filters: 'Filters',
      labels: 'Labels',
      level: 'Level',
      message: 'Message',
      metricsType: 'MetricsType',
      notifyStrategy: 'NotifyStrategy',
      pids: 'Pids',
      promQL: 'PromQL',
      regionId: 'RegionId',
      updatedTime: 'UpdatedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertRuleContent: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent,
      alertStatus: 'string',
      alertType: 'string',
      annotations: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations },
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      filters: GetAlertRulesResponseBodyPageBeanAlertRulesFilters,
      labels: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesLabels },
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      pids: { 'type': 'array', 'itemType': 'string' },
      promQL: 'string',
      regionId: 'string',
      updatedTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBodyPageBean extends $tea.Model {
  alertRules?: GetAlertRulesResponseBodyPageBeanAlertRules[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'AlertRules',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRules },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponseBodyData extends $tea.Model {
  items?: { [key: string]: any }[];
  page?: number;
  pageSize?: number;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      page: 'number',
      pageSize: 'number',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList extends $tea.Model {
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList extends $tea.Model {
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventListTagEntryList },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList extends $tea.Model {
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpans extends $tea.Model {
  duration?: number;
  haveStack?: boolean;
  logEventList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList[];
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  rpcType?: number;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList[];
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      haveStack: 'HaveStack',
      logEventList: 'LogEventList',
      operationName: 'OperationName',
      parentSpanId: 'ParentSpanId',
      resultCode: 'ResultCode',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      haveStack: 'boolean',
      logEventList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList },
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList },
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseBodyMultiCallChainInfos extends $tea.Model {
  spans?: GetMultipleTraceResponseBodyMultiCallChainInfosSpans[];
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      spans: 'Spans',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spans: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpans },
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyStackInfoExtInfo extends $tea.Model {
  info?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyStackInfo extends $tea.Model {
  api?: string;
  duration?: number;
  exception?: string;
  extInfo?: GetStackResponseBodyStackInfoExtInfo;
  line?: string;
  rpcId?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      duration: 'Duration',
      exception: 'Exception',
      extInfo: 'ExtInfo',
      line: 'Line',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      duration: 'number',
      exception: 'string',
      extInfo: GetStackResponseBodyStackInfoExtInfo,
      line: 'string',
      rpcId: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansLogEventListTagEntryList extends $tea.Model {
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

export class GetTraceResponseBodySpansLogEventList extends $tea.Model {
  tagEntryList?: GetTraceResponseBodySpansLogEventListTagEntryList[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventListTagEntryList },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodySpansTagEntryList extends $tea.Model {
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

export class GetTraceResponseBodySpans extends $tea.Model {
  children?: { [key: string]: any }[];
  duration?: number;
  haveStack?: boolean;
  logEventList?: GetTraceResponseBodySpansLogEventList[];
  operationName?: string;
  parentSpanId?: string;
  resultCode?: string;
  rpcId?: string;
  rpcType?: number;
  serviceIp?: string;
  serviceName?: string;
  spanId?: string;
  tagEntryList?: GetTraceResponseBodySpansTagEntryList[];
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      duration: 'Duration',
      haveStack: 'HaveStack',
      logEventList: 'LogEventList',
      operationName: 'OperationName',
      parentSpanId: 'ParentSpanId',
      resultCode: 'ResultCode',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      tagEntryList: 'TagEntryList',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      duration: 'number',
      haveStack: 'boolean',
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventList },
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansTagEntryList },
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseBodyTraceApp extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  labels?: string[];
  pid?: string;
  regionId?: string;
  show?: boolean;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPageAlertsDispatchRules extends $tea.Model {
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPageAlerts extends $tea.Model {
  alertId?: string;
  alertName?: string;
  alertType?: string;
  count?: number;
  createTime?: number;
  dispatchRules?: ListActivatedAlertsResponseBodyPageAlertsDispatchRules[];
  endsAt?: number;
  expandFields?: { [key: string]: any };
  integrationName?: string;
  integrationType?: string;
  involvedObjectKind?: string;
  involvedObjectName?: string;
  message?: string;
  severity?: string;
  startsAt?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertType: 'AlertType',
      count: 'Count',
      createTime: 'CreateTime',
      dispatchRules: 'DispatchRules',
      endsAt: 'EndsAt',
      expandFields: 'ExpandFields',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      involvedObjectKind: 'InvolvedObjectKind',
      involvedObjectName: 'InvolvedObjectName',
      message: 'Message',
      severity: 'Severity',
      startsAt: 'StartsAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      alertName: 'string',
      alertType: 'string',
      count: 'number',
      createTime: 'number',
      dispatchRules: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlertsDispatchRules },
      endsAt: 'number',
      expandFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrationName: 'string',
      integrationType: 'string',
      involvedObjectKind: 'string',
      involvedObjectName: 'string',
      message: 'string',
      severity: 'string',
      startsAt: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPage extends $tea.Model {
  alerts?: ListActivatedAlertsResponseBodyPageAlerts[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alerts: 'Alerts',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alerts: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlerts },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBeanListAlertsActivities extends $tea.Model {
  content?: string;
  description?: string;
  handlerName?: string;
  time?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      handlerName: 'HandlerName',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      handlerName: 'string',
      time: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBeanListAlertsAlertEvents extends $tea.Model {
  alertName?: string;
  annotations?: string;
  description?: string;
  endTime?: string;
  generatorURL?: string;
  integrationName?: string;
  integrationType?: string;
  labels?: string;
  receiveTime?: string;
  severity?: string;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      annotations: 'Annotations',
      description: 'Description',
      endTime: 'EndTime',
      generatorURL: 'GeneratorURL',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      labels: 'Labels',
      receiveTime: 'ReceiveTime',
      severity: 'Severity',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      annotations: 'string',
      description: 'string',
      endTime: 'string',
      generatorURL: 'string',
      integrationName: 'string',
      integrationType: 'string',
      labels: 'string',
      receiveTime: 'string',
      severity: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBeanListAlerts extends $tea.Model {
  activities?: ListAlertsResponseBodyPageBeanListAlertsActivities[];
  alertEvents?: ListAlertsResponseBodyPageBeanListAlertsAlertEvents[];
  alertId?: number;
  alertName?: string;
  createTime?: string;
  dispatchRuleId?: number;
  dispatchRuleName?: string;
  severity?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      activities: 'Activities',
      alertEvents: 'AlertEvents',
      alertId: 'AlertId',
      alertName: 'AlertName',
      createTime: 'CreateTime',
      dispatchRuleId: 'DispatchRuleId',
      dispatchRuleName: 'DispatchRuleName',
      severity: 'Severity',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activities: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlertsActivities },
      alertEvents: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlertsAlertEvents },
      alertId: 'number',
      alertName: 'string',
      createTime: 'string',
      dispatchRuleId: 'number',
      dispatchRuleName: 'string',
      severity: 'string',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyPageBean extends $tea.Model {
  listAlerts?: ListAlertsResponseBodyPageBeanListAlerts[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listAlerts: 'ListAlerts',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listAlerts: { 'type': 'array', 'itemType': ListAlertsResponseBodyPageBeanListAlerts },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponseBodyPromClusterList extends $tea.Model {
  agentStatus?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  controllerId?: string;
  createTime?: number;
  extra?: string;
  id?: number;
  installTime?: number;
  isControllerInstalled?: boolean;
  lastHeartBeatTime?: number;
  nodeNum?: number;
  options?: string;
  pluginsJsonArray?: string;
  regionId?: string;
  stateJson?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      controllerId: 'ControllerId',
      createTime: 'CreateTime',
      extra: 'Extra',
      id: 'Id',
      installTime: 'InstallTime',
      isControllerInstalled: 'IsControllerInstalled',
      lastHeartBeatTime: 'LastHeartBeatTime',
      nodeNum: 'NodeNum',
      options: 'Options',
      pluginsJsonArray: 'PluginsJsonArray',
      regionId: 'RegionId',
      stateJson: 'StateJson',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      controllerId: 'string',
      createTime: 'number',
      extra: 'string',
      id: 'number',
      installTime: 'number',
      isControllerInstalled: 'boolean',
      lastHeartBeatTime: 'number',
      nodeNum: 'number',
      options: 'string',
      pluginsJsonArray: 'string',
      regionId: 'string',
      stateJson: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponseBodyDataProducts extends $tea.Model {
  descr?: string;
  id?: string;
  instance?: string;
  name?: string;
  prod?: string;
  state?: string;
  time?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descr: 'Descr',
      id: 'Id',
      instance: 'Instance',
      name: 'Name',
      prod: 'Prod',
      state: 'State',
      time: 'Time',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descr: 'string',
      id: 'string',
      instance: 'string',
      name: 'string',
      prod: 'string',
      state: 'string',
      time: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponseBodyData extends $tea.Model {
  enableTag?: boolean;
  products?: ListCmsInstancesResponseBodyDataProducts[];
  static names(): { [key: string]: string } {
    return {
      enableTag: 'EnableTag',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTag: 'boolean',
      products: { 'type': 'array', 'itemType': ListCmsInstancesResponseBodyDataProducts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBodyDashboardVosI18nChild extends $tea.Model {
  dashboardType?: string;
  exporter?: string;
  httpUrl?: string;
  httpsUrl?: string;
  id?: string;
  isArmsExporter?: boolean;
  kind?: string;
  language?: string;
  name?: string;
  needUpdate?: boolean;
  tags?: string[];
  time?: string;
  title?: string;
  type?: string;
  uid?: string;
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardType: 'DashboardType',
      exporter: 'Exporter',
      httpUrl: 'HttpUrl',
      httpsUrl: 'HttpsUrl',
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
      language: 'Language',
      name: 'Name',
      needUpdate: 'NeedUpdate',
      tags: 'Tags',
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardType: 'string',
      exporter: 'string',
      httpUrl: 'string',
      httpsUrl: 'string',
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
      language: 'string',
      name: 'string',
      needUpdate: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBodyDashboardVos extends $tea.Model {
  dashboardType?: string;
  exporter?: string;
  httpUrl?: string;
  httpsUrl?: string;
  i18nChild?: ListDashboardsResponseBodyDashboardVosI18nChild;
  id?: string;
  isArmsExporter?: boolean;
  kind?: string;
  language?: string;
  name?: string;
  needUpdate?: boolean;
  tags?: string[];
  time?: string;
  title?: string;
  type?: string;
  uid?: string;
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardType: 'DashboardType',
      exporter: 'Exporter',
      httpUrl: 'HttpUrl',
      httpsUrl: 'HttpsUrl',
      i18nChild: 'I18nChild',
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
      language: 'Language',
      name: 'Name',
      needUpdate: 'NeedUpdate',
      tags: 'Tags',
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardType: 'string',
      exporter: 'string',
      httpUrl: 'string',
      httpsUrl: 'string',
      i18nChild: ListDashboardsResponseBodyDashboardVosI18nChild,
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
      language: 'string',
      name: 'string',
      needUpdate: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponseBodyDispatchRules extends $tea.Model {
  name?: string;
  ruleId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies extends $tea.Model {
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

export class ListEscalationPoliciesResponseBodyPageBean extends $tea.Model {
  escalationPolicies?: ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      escalationPolicies: 'EscalationPolicies',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicies: { 'type': 'array', 'itemType': ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponseBodyPageBean extends $tea.Model {
  eventBridgeIntegrations?: ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventBridgeIntegrations: 'EventBridgeIntegrations',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeIntegrations: { 'type': 'array', 'itemType': ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule extends $tea.Model {
  groupInterval?: number;
  groupWait?: number;
  groupingFields?: string[];
  static names(): { [key: string]: string } {
    return {
      groupInterval: 'GroupInterval',
      groupWait: 'GroupWait',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInterval: 'number',
      groupWait: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules extends $tea.Model {
  matchingConditions?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects extends $tea.Model {
  notifyObjectId?: number;
  notifyObjectName?: string;
  notifyObjectType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyObjectId: 'NotifyObjectId',
      notifyObjectName: 'NotifyObjectName',
      notifyObjectType: 'NotifyObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjectId: 'number',
      notifyObjectName: 'string',
      notifyObjectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule extends $tea.Model {
  notifyChannels?: string[];
  notifyEndTime?: string;
  notifyObjects?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects[];
  notifyStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyEndTime: 'NotifyEndTime',
      notifyObjects: 'NotifyObjects',
      notifyStartTime: 'NotifyStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyEndTime: 'string',
      notifyObjects: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects },
      notifyStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate extends $tea.Model {
  emailContent?: string;
  emailRecoverContent?: string;
  emailRecoverTitle?: string;
  emailTitle?: string;
  robotContent?: string;
  smsContent?: string;
  smsRecoverContent?: string;
  ttsContent?: string;
  ttsRecoverContent?: string;
  static names(): { [key: string]: string } {
    return {
      emailContent: 'EmailContent',
      emailRecoverContent: 'EmailRecoverContent',
      emailRecoverTitle: 'EmailRecoverTitle',
      emailTitle: 'EmailTitle',
      robotContent: 'RobotContent',
      smsContent: 'SmsContent',
      smsRecoverContent: 'SmsRecoverContent',
      ttsContent: 'TtsContent',
      ttsRecoverContent: 'TtsRecoverContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailContent: 'string',
      emailRecoverContent: 'string',
      emailRecoverTitle: 'string',
      emailTitle: 'string',
      robotContent: 'string',
      smsContent: 'string',
      smsRecoverContent: 'string',
      ttsContent: 'string',
      ttsRecoverContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies extends $tea.Model {
  escalationPolicyId?: number;
  groupRule?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule;
  id?: number;
  integrationId?: number;
  matchingRules?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules[];
  name?: string;
  notifyRule?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule;
  notifyTemplate?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate;
  repeat?: boolean;
  repeatInterval?: number;
  sendRecoverMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      escalationPolicyId: 'EscalationPolicyId',
      groupRule: 'GroupRule',
      id: 'Id',
      integrationId: 'IntegrationId',
      matchingRules: 'MatchingRules',
      name: 'Name',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicyId: 'number',
      groupRule: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule,
      id: 'number',
      integrationId: 'number',
      matchingRules: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules },
      name: 'string',
      notifyRule: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule,
      notifyTemplate: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate,
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBean extends $tea.Model {
  notificationPolicies?: ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      notificationPolicies: 'NotificationPolicies',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationPolicies: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponseBodyPageBean extends $tea.Model {
  onCallSchedules?: ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules[];
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      onCallSchedules: 'OnCallSchedules',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onCallSchedules: { 'type': 'array', 'itemType': ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations extends $tea.Model {
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

export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels extends $tea.Model {
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

export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRules extends $tea.Model {
  alertId?: number;
  alertName?: string;
  annotations?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels[];
  message?: string;
  notifyType?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels },
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations extends $tea.Model {
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels extends $tea.Model {
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates extends $tea.Model {
  alertName?: string;
  annotations?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations[];
  description?: string;
  duration?: string;
  expression?: string;
  labels?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels[];
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      annotations: 'Annotations',
      description: 'Description',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations },
      description: 'string',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels },
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBodyRetcodeApps extends $tea.Model {
  appId?: number;
  appName?: string;
  pid?: string;
  retcodeAppType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pid: 'Pid',
      retcodeAppType: 'RetcodeAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      pid: 'string',
      retcodeAppType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseBodyArmsScenarios extends $tea.Model {
  appId?: string;
  createTime?: string;
  extensions?: string;
  id?: number;
  name?: string;
  regionId?: string;
  sign?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      extensions: 'Extensions',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      sign: 'Sign',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      extensions: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      sign: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules extends $tea.Model {
  matchingConditions?: ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBodyPageBeanSilencePolicies extends $tea.Model {
  id?: number;
  matchingRules?: ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchingRules: 'MatchingRules',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      matchingRules: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBodyPageBean extends $tea.Model {
  page?: number;
  silencePolicies?: ListSilencePoliciesResponseBodyPageBeanSilencePolicies[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      silencePolicies: 'SilencePolicies',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      silencePolicies: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePolicies },
      size: 'number',
      total: 'number',
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

export class ListTraceAppsResponseBodyTraceApps extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  labels?: string[];
  pid?: string;
  regionId?: string;
  show?: boolean;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestDimensions extends $tea.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestOptionalDims extends $tea.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestRequiredDims extends $tea.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequestFilters extends $tea.Model {
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

export class QueryMetricByPageResponseBodyData extends $tea.Model {
  items?: { [key: string]: any }[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusResponseBodyData extends $tea.Model {
  isControllerInstalled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isControllerInstalled: 'isControllerInstalled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isControllerInstalled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSourcesFromPrometheusGlobalViewResponseBodyData extends $tea.Model {
  info?: string;
  msg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequestSettings extends $tea.Model {
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

export class SearchAlertContactResponseBodyPageBeanContacts extends $tea.Model {
  contactId?: number;
  contactName?: string;
  content?: string;
  createTime?: number;
  dingRobot?: string;
  email?: string;
  phone?: string;
  systemNoc?: boolean;
  updateTime?: number;
  userId?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      content: 'Content',
      createTime: 'CreateTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      phone: 'Phone',
      systemNoc: 'SystemNoc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      content: 'string',
      createTime: 'number',
      dingRobot: 'string',
      email: 'string',
      phone: 'string',
      systemNoc: 'boolean',
      updateTime: 'number',
      userId: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponseBodyPageBean extends $tea.Model {
  contacts?: SearchAlertContactResponseBodyPageBeanContacts[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': SearchAlertContactResponseBodyPageBeanContacts },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseBodyContactGroupsContacts extends $tea.Model {
  contactId?: number;
  contactName?: string;
  createTime?: number;
  dingRobot?: string;
  email?: string;
  phone?: string;
  systemNoc?: boolean;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      createTime: 'CreateTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      phone: 'Phone',
      systemNoc: 'SystemNoc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      createTime: 'number',
      dingRobot: 'string',
      email: 'string',
      phone: 'string',
      systemNoc: 'boolean',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseBodyContactGroups extends $tea.Model {
  contactGroupId?: number;
  contactGroupName?: string;
  contacts?: SearchAlertContactGroupResponseBodyContactGroupsContacts[];
  createTime?: number;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contacts: 'Contacts',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseBodyContactGroupsContacts },
      createTime: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBodyPageBeanAlarmHistories extends $tea.Model {
  alarmContent?: string;
  alarmResponseCode?: number;
  alarmSources?: string;
  alarmTime?: number;
  alarmType?: number;
  emails?: string;
  id?: number;
  phones?: string;
  strategyId?: string;
  target?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarmResponseCode: 'AlarmResponseCode',
      alarmSources: 'AlarmSources',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      emails: 'Emails',
      id: 'Id',
      phones: 'Phones',
      strategyId: 'StrategyId',
      target: 'Target',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarmResponseCode: 'number',
      alarmSources: 'string',
      alarmTime: 'number',
      alarmType: 'number',
      emails: 'string',
      id: 'number',
      phones: 'string',
      strategyId: 'string',
      target: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBodyPageBean extends $tea.Model {
  alarmHistories?: SearchAlertHistoriesResponseBodyPageBeanAlarmHistories[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmHistories: 'AlarmHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistories: { 'type': 'array', 'itemType': SearchAlertHistoriesResponseBodyPageBeanAlarmHistories },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistorysResponseBodyPageBeanAlertHistory extends $tea.Model {
  alarmContent?: string;
  alarmResponseCode?: string;
  alarmTime?: number;
  alarmType?: number;
  alertId?: number;
  id?: number;
  phones?: string;
  tenant?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarmResponseCode: 'AlarmResponseCode',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      alertId: 'AlertId',
      id: 'Id',
      phones: 'Phones',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarmResponseCode: 'string',
      alarmTime: 'number',
      alarmType: 'number',
      alertId: 'number',
      id: 'number',
      phones: 'string',
      tenant: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistorysResponseBodyPageBean extends $tea.Model {
  alertHistory?: SearchAlertHistorysResponseBodyPageBeanAlertHistory[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertHistory: 'AlertHistory',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertHistory: { 'type': 'array', 'itemType': SearchAlertHistorysResponseBodyPageBeanAlertHistory },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext extends $tea.Model {
  alarmContentSubTitle?: string;
  alarmContentTemplate?: string;
  content?: string;
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContentSubTitle: 'AlarmContentSubTitle',
      alarmContentTemplate: 'AlarmContentTemplate',
      content: 'Content',
      subTitle: 'SubTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContentSubTitle: 'string',
      alarmContentTemplate: 'string',
      content: 'string',
      subTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules extends $tea.Model {
  aggregates?: string;
  alias?: string;
  measure?: string;
  NValue?: number;
  operator?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      alias: 'Alias',
      measure: 'Measure',
      NValue: 'NValue',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: 'string',
      alias: 'string',
      measure: 'string',
      NValue: 'number',
      operator: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule extends $tea.Model {
  operator?: string;
  rules?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      rules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions extends $tea.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam extends $tea.Model {
  appGroupId?: string;
  appId?: string;
  dimensions?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions[];
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      dimensions: 'Dimensions',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appId: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions },
      pid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesNotice extends $tea.Model {
  endTime?: number;
  noticeEndTime?: number;
  noticeStartTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      noticeEndTime: 'NoticeEndTime',
      noticeStartTime: 'NoticeStartTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      noticeEndTime: 'number',
      noticeStartTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRules extends $tea.Model {
  alarmContext?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext;
  alertLevel?: string;
  alertRule?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule;
  alertTitle?: string;
  alertType?: number;
  alertVersion?: number;
  alertWays?: string[];
  config?: string;
  contactGroupIdList?: string;
  contactGroupIds?: string;
  createTime?: number;
  hostByAlertManager?: boolean;
  id?: number;
  metricParam?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam;
  notice?: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice;
  regionId?: string;
  status?: string;
  taskId?: number;
  taskStatus?: string;
  title?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContext: 'AlarmContext',
      alertLevel: 'AlertLevel',
      alertRule: 'AlertRule',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertVersion: 'AlertVersion',
      alertWays: 'AlertWays',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      contactGroupIds: 'ContactGroupIds',
      createTime: 'CreateTime',
      hostByAlertManager: 'HostByAlertManager',
      id: 'Id',
      metricParam: 'MetricParam',
      notice: 'Notice',
      regionId: 'RegionId',
      status: 'Status',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      title: 'Title',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContext: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext,
      alertLevel: 'string',
      alertRule: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule,
      alertTitle: 'string',
      alertType: 'number',
      alertVersion: 'number',
      alertWays: { 'type': 'array', 'itemType': 'string' },
      config: 'string',
      contactGroupIdList: 'string',
      contactGroupIds: 'string',
      createTime: 'number',
      hostByAlertManager: 'boolean',
      id: 'number',
      metricParam: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam,
      notice: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice,
      regionId: 'string',
      status: 'string',
      taskId: 'number',
      taskStatus: 'string',
      title: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBean extends $tea.Model {
  alertRules?: SearchAlertRulesResponseBodyPageBeanAlertRules[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'AlertRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBodyPageBeanEvent extends $tea.Model {
  alertId?: number;
  alertName?: string;
  alertRule?: string;
  alertType?: number;
  eventLevel?: string;
  eventTime?: number;
  id?: number;
  links?: string[];
  message?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRule: 'AlertRule',
      alertType: 'AlertType',
      eventLevel: 'EventLevel',
      eventTime: 'EventTime',
      id: 'Id',
      links: 'Links',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      alertRule: 'string',
      alertType: 'number',
      eventLevel: 'string',
      eventTime: 'number',
      id: 'number',
      links: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBodyPageBean extends $tea.Model {
  event?: SearchEventsResponseBodyPageBeanEvent[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': SearchEventsResponseBodyPageBeanEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  pid?: string;
  regionId?: string;
  retcodeAppType?: string;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      retcodeAppType: 'RetcodeAppType',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      retcodeAppType: 'string',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBodyPageBean extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  retcodeApps?: SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      retcodeApps: 'RetcodeApps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseBodyTraceApps extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  labels?: string[];
  pid?: string;
  regionId?: string;
  show?: boolean;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBodyPageBeanTraceApps extends $tea.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  labels?: string[];
  pid?: string;
  regionId?: string;
  show?: boolean;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBodyPageBean extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  traceApps?: SearchTraceAppByPageResponseBodyPageBeanTraceApps[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByPageResponseBodyPageBeanTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequestExclusionFilters extends $tea.Model {
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

export class SearchTracesRequestTag extends $tea.Model {
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

export class SearchTracesResponseBodyTraceInfos extends $tea.Model {
  duration?: number;
  operationName?: string;
  serviceIp?: string;
  serviceName?: string;
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      operationName: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequestExclusionFilters extends $tea.Model {
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

export class SearchTracesByPageRequestTags extends $tea.Model {
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

export class SearchTracesByPageResponseBodyPageBeanTraceInfos extends $tea.Model {
  duration?: number;
  operationName?: string;
  serviceIp?: string;
  serviceName?: string;
  timestamp?: number;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      operationName: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      timestamp: 'number',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponseBodyPageBean extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  traceInfos?: SearchTracesByPageResponseBodyPageBeanTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesByPageResponseBodyPageBeanTraceInfos },
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

export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $tea.Model {
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

export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels extends $tea.Model {
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

export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule extends $tea.Model {
  alertId?: number;
  alertName?: string;
  annotations?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
  message?: string;
  notifyType?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels },
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
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
      'ap-northeast-2-pop': "arms.aliyuncs.com",
      'cn-beijing-finance-1': "arms.aliyuncs.com",
      'cn-beijing-finance-pop': "arms.aliyuncs.com",
      'cn-beijing-gov-1': "arms.aliyuncs.com",
      'cn-beijing-nu16-b01': "arms.aliyuncs.com",
      'cn-edge-1': "arms.aliyuncs.com",
      'cn-fujian': "arms.aliyuncs.com",
      'cn-haidian-cm12-c01': "arms.aliyuncs.com",
      'cn-hangzhou-bj-b01': "arms.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "arms.aliyuncs.com",
      'cn-hangzhou-test-306': "arms.aliyuncs.com",
      'cn-hongkong-finance-pop': "arms.aliyuncs.com",
      'cn-huhehaote-nebula-1': "arms.aliyuncs.com",
      'cn-qingdao-nebula': "arms.aliyuncs.com",
      'cn-shanghai-et15-b01': "arms.aliyuncs.com",
      'cn-shanghai-et2-b01': "arms.aliyuncs.com",
      'cn-shanghai-inner': "arms.aliyuncs.com",
      'cn-shanghai-internal-test-1': "arms.aliyuncs.com",
      'cn-shenzhen-inner': "arms.aliyuncs.com",
      'cn-shenzhen-st4-d01': "arms.aliyuncs.com",
      'cn-shenzhen-su18-b01': "arms.aliyuncs.com",
      'cn-wuhan': "arms.aliyuncs.com",
      'cn-yushanfang': "arms.aliyuncs.com",
      'cn-zhangbei': "arms.aliyuncs.com",
      'cn-zhangbei-na61-b01': "arms.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "arms.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "arms.aliyuncs.com",
      'eu-west-1-oxs': "arms.aliyuncs.com",
      'me-east-1': "arms.aliyuncs.com",
      'rus-west-1-pop': "arms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("arms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addASMIntegrationWithOptions(request: AddASMIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddASMIntegrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddASMIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddASMIntegrationResponse>(await this.callApi(params, req, runtime), new AddASMIntegrationResponse({}));
  }

  async addASMIntegration(request: AddASMIntegrationRequest): Promise<AddASMIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addASMIntegrationWithOptions(request, runtime);
  }

  async addAliClusterIdsToPrometheusGlobalViewWithOptions(request: AddAliClusterIdsToPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AddAliClusterIdsToPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAliClusterIdsToPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAliClusterIdsToPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new AddAliClusterIdsToPrometheusGlobalViewResponse({}));
  }

  async addAliClusterIdsToPrometheusGlobalView(request: AddAliClusterIdsToPrometheusGlobalViewRequest): Promise<AddAliClusterIdsToPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAliClusterIdsToPrometheusGlobalViewWithOptions(request, runtime);
  }

  async addGrafanaWithOptions(request: AddGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<AddGrafanaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGrafana",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGrafanaResponse>(await this.callApi(params, req, runtime), new AddGrafanaResponse({}));
  }

  async addGrafana(request: AddGrafanaRequest): Promise<AddGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  async addIntegrationWithOptions(request: AddIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddIntegrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIntegrationResponse>(await this.callApi(params, req, runtime), new AddIntegrationResponse({}));
  }

  async addIntegration(request: AddIntegrationRequest): Promise<AddIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIntegrationWithOptions(request, runtime);
  }

  async addPrometheusGlobalViewWithOptions(request: AddPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AddPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusters)) {
      query["Clusters"] = request.clusters;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new AddPrometheusGlobalViewResponse({}));
  }

  async addPrometheusGlobalView(request: AddPrometheusGlobalViewRequest): Promise<AddPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewWithOptions(request, runtime);
  }

  async addPrometheusGlobalViewByAliClusterIdsWithOptions(request: AddPrometheusGlobalViewByAliClusterIdsRequest, runtime: $Util.RuntimeOptions): Promise<AddPrometheusGlobalViewByAliClusterIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPrometheusGlobalViewByAliClusterIds",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPrometheusGlobalViewByAliClusterIdsResponse>(await this.callApi(params, req, runtime), new AddPrometheusGlobalViewByAliClusterIdsResponse({}));
  }

  async addPrometheusGlobalViewByAliClusterIds(request: AddPrometheusGlobalViewByAliClusterIdsRequest): Promise<AddPrometheusGlobalViewByAliClusterIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewByAliClusterIdsWithOptions(request, runtime);
  }

  async addRecordingRuleWithOptions(request: AddRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddRecordingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleYaml)) {
      query["RuleYaml"] = request.ruleYaml;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRecordingRuleResponse>(await this.callApi(params, req, runtime), new AddRecordingRuleResponse({}));
  }

  async addRecordingRule(request: AddRecordingRuleRequest): Promise<AddRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordingRuleWithOptions(request, runtime);
  }

  async appendInstancesToPrometheusGlobalViewWithOptions(request: AppendInstancesToPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AppendInstancesToPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusters)) {
      query["Clusters"] = request.clusters;
    }

    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AppendInstancesToPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppendInstancesToPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new AppendInstancesToPrometheusGlobalViewResponse({}));
  }

  async appendInstancesToPrometheusGlobalView(request: AppendInstancesToPrometheusGlobalViewRequest): Promise<AppendInstancesToPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appendInstancesToPrometheusGlobalViewWithOptions(request, runtime);
  }

  async applyScenarioWithOptions(tmpReq: ApplyScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ApplyScenarioResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyScenarioShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!Util.isUnset(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.snDump)) {
      query["SnDump"] = request.snDump;
    }

    if (!Util.isUnset(request.snForce)) {
      query["SnForce"] = request.snForce;
    }

    if (!Util.isUnset(request.snStat)) {
      query["SnStat"] = request.snStat;
    }

    if (!Util.isUnset(request.snTransfer)) {
      query["SnTransfer"] = request.snTransfer;
    }

    if (!Util.isUnset(request.updateOption)) {
      query["UpdateOption"] = request.updateOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyScenarioResponse>(await this.callApi(params, req, runtime), new ApplyScenarioResponse({}));
  }

  async applyScenario(request: ApplyScenarioRequest): Promise<ApplyScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  async cMonitorAlertEventWithOptions(request: CMonitorAlertEventRequest, runtime: $Util.RuntimeOptions): Promise<CMonitorAlertEventResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CMonitorAlertEvent",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CMonitorAlertEventResponse>(await this.callApi(params, req, runtime), new CMonitorAlertEventResponse({}));
  }

  async cMonitorAlertEvent(request: CMonitorAlertEventRequest): Promise<CMonitorAlertEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cMonitorAlertEventWithOptions(request, runtime);
  }

  async checkServiceStatusWithOptions(request: CheckServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.svcCode)) {
      query["SvcCode"] = request.svcCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceStatusResponse>(await this.callApi(params, req, runtime), new CheckServiceStatusResponse({}));
  }

  async checkServiceStatus(request: CheckServiceStatusRequest): Promise<CheckServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceStatusWithOptions(request, runtime);
  }

  async configAppWithOptions(request: ConfigAppRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigAppResponse>(await this.callApi(params, req, runtime), new ConfigAppResponse({}));
  }

  async configApp(request: ConfigAppRequest): Promise<ConfigAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  async createAlertContactWithOptions(request: CreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlertContactResponse>(await this.callApi(params, req, runtime), new CreateAlertContactResponse({}));
  }

  async createAlertContact(request: CreateAlertContactRequest): Promise<CreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  async createAlertContactGroupWithOptions(request: CreateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new CreateAlertContactGroupResponse({}));
  }

  async createAlertContactGroup(request: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  async createDispatchRuleWithOptions(request: CreateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDispatchRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDispatchRuleResponse>(await this.callApi(params, req, runtime), new CreateDispatchRuleResponse({}));
  }

  async createDispatchRule(request: CreateDispatchRuleRequest): Promise<CreateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDispatchRuleWithOptions(request, runtime);
  }

  async createOrUpdateAlertRuleWithOptions(request: CreateOrUpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateAlertRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertCheckType)) {
      body["AlertCheckType"] = request.alertCheckType;
    }

    if (!Util.isUnset(request.alertGroup)) {
      body["AlertGroup"] = request.alertGroup;
    }

    if (!Util.isUnset(request.alertId)) {
      body["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.alertRuleContent)) {
      body["AlertRuleContent"] = request.alertRuleContent;
    }

    if (!Util.isUnset(request.alertStatus)) {
      body["AlertStatus"] = request.alertStatus;
    }

    if (!Util.isUnset(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.annotations)) {
      body["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.autoAddNewApplication)) {
      body["AutoAddNewApplication"] = request.autoAddNewApplication;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      body["Message"] = request.message;
    }

    if (!Util.isUnset(request.metricsKey)) {
      body["MetricsKey"] = request.metricsKey;
    }

    if (!Util.isUnset(request.metricsType)) {
      body["MetricsType"] = request.metricsType;
    }

    if (!Util.isUnset(request.notifyStrategy)) {
      body["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!Util.isUnset(request.pids)) {
      body["Pids"] = request.pids;
    }

    if (!Util.isUnset(request.promQL)) {
      body["PromQL"] = request.promQL;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateAlertRuleResponse({}));
  }

  async createOrUpdateAlertRule(request: CreateOrUpdateAlertRuleRequest): Promise<CreateOrUpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateAlertRuleWithOptions(request, runtime);
  }

  async createOrUpdateContactWithOptions(request: CreateOrUpdateContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateContactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateContactResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateContactResponse({}));
  }

  async createOrUpdateContact(request: CreateOrUpdateContactRequest): Promise<CreateOrUpdateContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateContactWithOptions(request, runtime);
  }

  async createOrUpdateContactGroupWithOptions(request: CreateOrUpdateContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateContactGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactGroupId)) {
      body["ContactGroupId"] = request.contactGroupId;
    }

    if (!Util.isUnset(request.contactGroupName)) {
      body["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactIds)) {
      body["ContactIds"] = request.contactIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateContactGroupResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateContactGroupResponse({}));
  }

  async createOrUpdateContactGroup(request: CreateOrUpdateContactGroupRequest): Promise<CreateOrUpdateContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateContactGroupWithOptions(request, runtime);
  }

  async createOrUpdateEventBridgeIntegrationWithOptions(request: CreateOrUpdateEventBridgeIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateEventBridgeIntegrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.accessSecret)) {
      body["AccessSecret"] = request.accessSecret;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventBusRegionId)) {
      body["EventBusRegionId"] = request.eventBusRegionId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateEventBridgeIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateEventBridgeIntegrationResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateEventBridgeIntegrationResponse({}));
  }

  async createOrUpdateEventBridgeIntegration(request: CreateOrUpdateEventBridgeIntegrationRequest): Promise<CreateOrUpdateEventBridgeIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateEventBridgeIntegrationWithOptions(request, runtime);
  }

  async createOrUpdateIMRobotWithOptions(request: CreateOrUpdateIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateIMRobotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dailyNoc)) {
      body["DailyNoc"] = request.dailyNoc;
    }

    if (!Util.isUnset(request.dailyNocTime)) {
      body["DailyNocTime"] = request.dailyNocTime;
    }

    if (!Util.isUnset(request.robotAddress)) {
      body["RobotAddress"] = request.robotAddress;
    }

    if (!Util.isUnset(request.robotId)) {
      body["RobotId"] = request.robotId;
    }

    if (!Util.isUnset(request.robotName)) {
      body["RobotName"] = request.robotName;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateIMRobot",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateIMRobotResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateIMRobotResponse({}));
  }

  async createOrUpdateIMRobot(request: CreateOrUpdateIMRobotRequest): Promise<CreateOrUpdateIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateIMRobotWithOptions(request, runtime);
  }

  async createOrUpdateNotificationPolicyWithOptions(request: CreateOrUpdateNotificationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateNotificationPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.escalationPolicyId)) {
      body["EscalationPolicyId"] = request.escalationPolicyId;
    }

    if (!Util.isUnset(request.groupRule)) {
      body["GroupRule"] = request.groupRule;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.integrationId)) {
      body["IntegrationId"] = request.integrationId;
    }

    if (!Util.isUnset(request.matchingRules)) {
      body["MatchingRules"] = request.matchingRules;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.notifyRule)) {
      body["NotifyRule"] = request.notifyRule;
    }

    if (!Util.isUnset(request.notifyTemplate)) {
      body["NotifyTemplate"] = request.notifyTemplate;
    }

    if (!Util.isUnset(request.repeat)) {
      body["Repeat"] = request.repeat;
    }

    if (!Util.isUnset(request.repeatInterval)) {
      body["RepeatInterval"] = request.repeatInterval;
    }

    if (!Util.isUnset(request.sendRecoverMessage)) {
      body["SendRecoverMessage"] = request.sendRecoverMessage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateNotificationPolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateNotificationPolicyResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateNotificationPolicyResponse({}));
  }

  async createOrUpdateNotificationPolicy(request: CreateOrUpdateNotificationPolicyRequest): Promise<CreateOrUpdateNotificationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateNotificationPolicyWithOptions(request, runtime);
  }

  async createOrUpdateSilencePolicyWithOptions(request: CreateOrUpdateSilencePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateSilencePolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.matchingRules)) {
      body["MatchingRules"] = request.matchingRules;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateSilencePolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateSilencePolicyResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateSilencePolicyResponse({}));
  }

  async createOrUpdateSilencePolicy(request: CreateOrUpdateSilencePolicyRequest): Promise<CreateOrUpdateSilencePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateSilencePolicyWithOptions(request, runtime);
  }

  async createOrUpdateWebhookContactWithOptions(request: CreateOrUpdateWebhookContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateWebhookContactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizHeaders)) {
      body["BizHeaders"] = request.bizHeaders;
    }

    if (!Util.isUnset(request.bizParams)) {
      body["BizParams"] = request.bizParams;
    }

    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.method)) {
      body["Method"] = request.method;
    }

    if (!Util.isUnset(request.recoverBody)) {
      body["RecoverBody"] = request.recoverBody;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.webhookId)) {
      body["WebhookId"] = request.webhookId;
    }

    if (!Util.isUnset(request.webhookName)) {
      body["WebhookName"] = request.webhookName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateWebhookContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateWebhookContactResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateWebhookContactResponse({}));
  }

  async createOrUpdateWebhookContact(request: CreateOrUpdateWebhookContactRequest): Promise<CreateOrUpdateWebhookContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateWebhookContactWithOptions(request, runtime);
  }

  async createPrometheusAlertRuleWithOptions(request: CreatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
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
      action: "CreatePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new CreatePrometheusAlertRuleResponse({}));
  }

  async createPrometheusAlertRule(request: CreatePrometheusAlertRuleRequest): Promise<CreatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrometheusAlertRuleWithOptions(request, runtime);
  }

  async createRetcodeAppWithOptions(request: CreateRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateRetcodeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    if (!Util.isUnset(request.retcodeAppType)) {
      query["RetcodeAppType"] = request.retcodeAppType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRetcodeApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRetcodeAppResponse>(await this.callApi(params, req, runtime), new CreateRetcodeAppResponse({}));
  }

  async createRetcodeApp(request: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  async createWebhookWithOptions(request: CreateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebhookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!Util.isUnset(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.recoverBody)) {
      query["RecoverBody"] = request.recoverBody;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebhook",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWebhookResponse>(await this.callApi(params, req, runtime), new CreateWebhookResponse({}));
  }

  async createWebhook(request: CreateWebhookRequest): Promise<CreateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebhookWithOptions(request, runtime);
  }

  async deleteASMIntegrationWithOptions(request: DeleteASMIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteASMIntegrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteASMIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteASMIntegrationResponse>(await this.callApi(params, req, runtime), new DeleteASMIntegrationResponse({}));
  }

  async deleteASMIntegration(request: DeleteASMIntegrationRequest): Promise<DeleteASMIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteASMIntegrationWithOptions(request, runtime);
  }

  async deleteAlertContactWithOptions(request: DeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  async deleteAlertContactGroupWithOptions(request: DeleteAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  async deleteAlertRuleWithOptions(request: DeleteAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertRuleResponse>(await this.callApi(params, req, runtime), new DeleteAlertRuleResponse({}));
  }

  async deleteAlertRule(request: DeleteAlertRuleRequest): Promise<DeleteAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRuleWithOptions(request, runtime);
  }

  async deleteAlertRulesWithOptions(request: DeleteAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertRulesResponse>(await this.callApi(params, req, runtime), new DeleteAlertRulesResponse({}));
  }

  async deleteAlertRules(request: DeleteAlertRulesRequest): Promise<DeleteAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  async deleteCmsExporterWithOptions(request: DeleteCmsExporterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCmsExporterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCmsExporter",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCmsExporterResponse>(await this.callApi(params, req, runtime), new DeleteCmsExporterResponse({}));
  }

  async deleteCmsExporter(request: DeleteCmsExporterRequest): Promise<DeleteCmsExporterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCmsExporterWithOptions(request, runtime);
  }

  async deleteContactWithOptions(request: DeleteContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactResponse>(await this.callApi(params, req, runtime), new DeleteContactResponse({}));
  }

  async deleteContact(request: DeleteContactRequest): Promise<DeleteContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  async deleteContactGroupWithOptions(request: DeleteContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteContactGroupResponse({}));
  }

  async deleteContactGroup(request: DeleteContactGroupRequest): Promise<DeleteContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  async deleteDispatchRuleWithOptions(request: DeleteDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDispatchRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDispatchRuleResponse>(await this.callApi(params, req, runtime), new DeleteDispatchRuleResponse({}));
  }

  async deleteDispatchRule(request: DeleteDispatchRuleRequest): Promise<DeleteDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDispatchRuleWithOptions(request, runtime);
  }

  async deleteEventBridgeIntegrationWithOptions(request: DeleteEventBridgeIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventBridgeIntegrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventBridgeIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventBridgeIntegrationResponse>(await this.callApi(params, req, runtime), new DeleteEventBridgeIntegrationResponse({}));
  }

  async deleteEventBridgeIntegration(request: DeleteEventBridgeIntegrationRequest): Promise<DeleteEventBridgeIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventBridgeIntegrationWithOptions(request, runtime);
  }

  async deleteGrafanaResourceWithOptions(request: DeleteGrafanaResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGrafanaResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGrafanaResource",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGrafanaResourceResponse>(await this.callApi(params, req, runtime), new DeleteGrafanaResourceResponse({}));
  }

  async deleteGrafanaResource(request: DeleteGrafanaResourceRequest): Promise<DeleteGrafanaResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGrafanaResourceWithOptions(request, runtime);
  }

  async deleteIMRobotWithOptions(request: DeleteIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIMRobotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIMRobot",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIMRobotResponse>(await this.callApi(params, req, runtime), new DeleteIMRobotResponse({}));
  }

  async deleteIMRobot(request: DeleteIMRobotRequest): Promise<DeleteIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIMRobotWithOptions(request, runtime);
  }

  async deleteIntegrationWithOptions(request: DeleteIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIntegrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIntegrationResponse>(await this.callApi(params, req, runtime), new DeleteIntegrationResponse({}));
  }

  async deleteIntegration(request: DeleteIntegrationRequest): Promise<DeleteIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIntegrationWithOptions(request, runtime);
  }

  async deleteNotificationPolicyWithOptions(request: DeleteNotificationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNotificationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNotificationPolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNotificationPolicyResponse>(await this.callApi(params, req, runtime), new DeleteNotificationPolicyResponse({}));
  }

  async deleteNotificationPolicy(request: DeleteNotificationPolicyRequest): Promise<DeleteNotificationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationPolicyWithOptions(request, runtime);
  }

  async deletePrometheusAlertRuleWithOptions(request: DeletePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new DeletePrometheusAlertRuleResponse({}));
  }

  async deletePrometheusAlertRule(request: DeletePrometheusAlertRuleRequest): Promise<DeletePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrometheusAlertRuleWithOptions(request, runtime);
  }

  async deletePrometheusGlobalViewWithOptions(request: DeletePrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new DeletePrometheusGlobalViewResponse({}));
  }

  async deletePrometheusGlobalView(request: DeletePrometheusGlobalViewRequest): Promise<DeletePrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrometheusGlobalViewWithOptions(request, runtime);
  }

  async deleteRetcodeAppWithOptions(request: DeleteRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRetcodeAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRetcodeApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRetcodeAppResponse>(await this.callApi(params, req, runtime), new DeleteRetcodeAppResponse({}));
  }

  async deleteRetcodeApp(request: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  async deleteScenarioWithOptions(request: DeleteScenarioRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScenarioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScenarioResponse>(await this.callApi(params, req, runtime), new DeleteScenarioResponse({}));
  }

  async deleteScenario(request: DeleteScenarioRequest): Promise<DeleteScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  async deleteSilencePolicyWithOptions(request: DeleteSilencePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSilencePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSilencePolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSilencePolicyResponse>(await this.callApi(params, req, runtime), new DeleteSilencePolicyResponse({}));
  }

  async deleteSilencePolicy(request: DeleteSilencePolicyRequest): Promise<DeleteSilencePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSilencePolicyWithOptions(request, runtime);
  }

  async deleteTraceAppWithOptions(request: DeleteTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTraceAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
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
      action: "DeleteTraceApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTraceAppResponse>(await this.callApi(params, req, runtime), new DeleteTraceAppResponse({}));
  }

  async deleteTraceApp(request: DeleteTraceAppRequest): Promise<DeleteTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  async deleteWebhookContactWithOptions(request: DeleteWebhookContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebhookContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.webhookId)) {
      query["WebhookId"] = request.webhookId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebhookContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebhookContactResponse>(await this.callApi(params, req, runtime), new DeleteWebhookContactResponse({}));
  }

  async deleteWebhookContact(request: DeleteWebhookContactRequest): Promise<DeleteWebhookContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebhookContactWithOptions(request, runtime);
  }

  async describeContactGroupsWithOptions(request: DescribeContactGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactGroups",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactGroupsResponse>(await this.callApi(params, req, runtime), new DescribeContactGroupsResponse({}));
  }

  async describeContactGroups(request: DescribeContactGroupsRequest): Promise<DescribeContactGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactGroupsWithOptions(request, runtime);
  }

  async describeContactsWithOptions(request: DescribeContactsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContacts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactsResponse>(await this.callApi(params, req, runtime), new DescribeContactsResponse({}));
  }

  async describeContacts(request: DescribeContactsRequest): Promise<DescribeContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactsWithOptions(request, runtime);
  }

  async describeDispatchRuleWithOptions(request: DescribeDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDispatchRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDispatchRuleResponse>(await this.callApi(params, req, runtime), new DescribeDispatchRuleResponse({}));
  }

  async describeDispatchRule(request: DescribeDispatchRuleRequest): Promise<DescribeDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  async describeIMRobotsWithOptions(request: DescribeIMRobotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIMRobotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIMRobots",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIMRobotsResponse>(await this.callApi(params, req, runtime), new DescribeIMRobotsResponse({}));
  }

  async describeIMRobots(request: DescribeIMRobotsRequest): Promise<DescribeIMRobotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIMRobotsWithOptions(request, runtime);
  }

  async describePrometheusAlertRuleWithOptions(request: DescribePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new DescribePrometheusAlertRuleResponse({}));
  }

  async describePrometheusAlertRule(request: DescribePrometheusAlertRuleRequest): Promise<DescribePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrometheusAlertRuleWithOptions(request, runtime);
  }

  async describeTraceLicenseKeyWithOptions(request: DescribeTraceLicenseKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLicenseKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTraceLicenseKey",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTraceLicenseKeyResponse>(await this.callApi(params, req, runtime), new DescribeTraceLicenseKeyResponse({}));
  }

  async describeTraceLicenseKey(request: DescribeTraceLicenseKeyRequest): Promise<DescribeTraceLicenseKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  async describeWebhookContactsWithOptions(request: DescribeWebhookContactsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebhookContactsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebhookContacts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebhookContactsResponse>(await this.callApi(params, req, runtime), new DescribeWebhookContactsResponse({}));
  }

  async describeWebhookContacts(request: DescribeWebhookContactsRequest): Promise<DescribeWebhookContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebhookContactsWithOptions(request, runtime);
  }

  async getASMIntegrationStateWithOptions(request: GetASMIntegrationStateRequest, runtime: $Util.RuntimeOptions): Promise<GetASMIntegrationStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetASMIntegrationState",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetASMIntegrationStateResponse>(await this.callApi(params, req, runtime), new GetASMIntegrationStateResponse({}));
  }

  async getASMIntegrationState(request: GetASMIntegrationStateRequest): Promise<GetASMIntegrationStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getASMIntegrationStateWithOptions(request, runtime);
  }

  async getAgentDownloadUrlWithOptions(request: GetAgentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDownloadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentDownloadUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgentDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetAgentDownloadUrlResponse({}));
  }

  async getAgentDownloadUrl(request: GetAgentDownloadUrlRequest): Promise<GetAgentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  async getAlertRulesWithOptions(request: GetAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.alertNames)) {
      query["AlertNames"] = request.alertNames;
    }

    if (!Util.isUnset(request.alertStatus)) {
      query["AlertStatus"] = request.alertStatus;
    }

    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlertRulesResponse>(await this.callApi(params, req, runtime), new GetAlertRulesResponse({}));
  }

  async getAlertRules(request: GetAlertRulesRequest): Promise<GetAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertRulesWithOptions(request, runtime);
  }

  async getAppApiByPageWithOptions(request: GetAppApiByPageRequest, runtime: $Util.RuntimeOptions): Promise<GetAppApiByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.intervalMills)) {
      query["IntervalMills"] = request.intervalMills;
    }

    if (!Util.isUnset(request.PId)) {
      query["PId"] = request.PId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppApiByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppApiByPageResponse>(await this.callApi(params, req, runtime), new GetAppApiByPageResponse({}));
  }

  async getAppApiByPage(request: GetAppApiByPageRequest): Promise<GetAppApiByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  async getArmsAgentDownLoadUrlWithOptions(request: GetArmsAgentDownLoadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetArmsAgentDownLoadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArmsAgentDownLoadUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArmsAgentDownLoadUrlResponse>(await this.callApi(params, req, runtime), new GetArmsAgentDownLoadUrlResponse({}));
  }

  async getArmsAgentDownLoadUrl(request: GetArmsAgentDownLoadUrlRequest): Promise<GetArmsAgentDownLoadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArmsAgentDownLoadUrlWithOptions(request, runtime);
  }

  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthToken",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthTokenResponse>(await this.callApi(params, req, runtime), new GetAuthTokenResponse({}));
  }

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  async getEstimateFeeInfoWithOptions(request: GetEstimateFeeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetEstimateFeeInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEstimateFeeInfo",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEstimateFeeInfoResponse>(await this.callApi(params, req, runtime), new GetEstimateFeeInfoResponse({}));
  }

  async getEstimateFeeInfo(request: GetEstimateFeeInfoRequest): Promise<GetEstimateFeeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEstimateFeeInfoWithOptions(request, runtime);
  }

  async getExploreUrlWithOptions(request: GetExploreUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetExploreUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
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
      action: "GetExploreUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExploreUrlResponse>(await this.callApi(params, req, runtime), new GetExploreUrlResponse({}));
  }

  async getExploreUrl(request: GetExploreUrlRequest): Promise<GetExploreUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExploreUrlWithOptions(request, runtime);
  }

  async getIntegrationStateWithOptions(request: GetIntegrationStateRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegrationStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIntegrationState",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntegrationStateResponse>(await this.callApi(params, req, runtime), new GetIntegrationStateResponse({}));
  }

  async getIntegrationState(request: GetIntegrationStateRequest): Promise<GetIntegrationStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegrationStateWithOptions(request, runtime);
  }

  async getMultipleTraceWithOptions(request: GetMultipleTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetMultipleTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.traceIDs)) {
      query["TraceIDs"] = request.traceIDs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMultipleTrace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMultipleTraceResponse>(await this.callApi(params, req, runtime), new GetMultipleTraceResponse({}));
  }

  async getMultipleTrace(request: GetMultipleTraceRequest): Promise<GetMultipleTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  async getPrometheusApiTokenWithOptions(request: GetPrometheusApiTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusApiTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrometheusApiToken",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrometheusApiTokenResponse>(await this.callApi(params, req, runtime), new GetPrometheusApiTokenResponse({}));
  }

  async getPrometheusApiToken(request: GetPrometheusApiTokenRequest): Promise<GetPrometheusApiTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  async getPrometheusGlobalViewWithOptions(request: GetPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new GetPrometheusGlobalViewResponse({}));
  }

  async getPrometheusGlobalView(request: GetPrometheusGlobalViewRequest): Promise<GetPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusGlobalViewWithOptions(request, runtime);
  }

  async getRecordingRuleWithOptions(request: GetRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordingRuleResponse>(await this.callApi(params, req, runtime), new GetRecordingRuleResponse({}));
  }

  async getRecordingRule(request: GetRecordingRuleRequest): Promise<GetRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordingRuleWithOptions(request, runtime);
  }

  async getRetcodeShareUrlWithOptions(request: GetRetcodeShareUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetRetcodeShareUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRetcodeShareUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRetcodeShareUrlResponse>(await this.callApi(params, req, runtime), new GetRetcodeShareUrlResponse({}));
  }

  async getRetcodeShareUrl(request: GetRetcodeShareUrlRequest): Promise<GetRetcodeShareUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rpcID)) {
      query["RpcID"] = request.rpcID;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStack",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackResponse>(await this.callApi(params, req, runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTraceResponse>(await this.callApi(params, req, runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async getTraceAppWithOptions(request: GetTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTraceApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTraceAppResponse>(await this.callApi(params, req, runtime), new GetTraceAppResponse({}));
  }

  async getTraceApp(request: GetTraceAppRequest): Promise<GetTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  async getUserCommercialStatusWithOptions(request: GetUserCommercialStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetUserCommercialStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserCommercialStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserCommercialStatusResponse>(await this.callApi(params, req, runtime), new GetUserCommercialStatusResponse({}));
  }

  async getUserCommercialStatus(request: GetUserCommercialStatusRequest): Promise<GetUserCommercialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserCommercialStatusWithOptions(request, runtime);
  }

  async importAppAlertRulesWithOptions(request: ImportAppAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportAppAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!Util.isUnset(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!Util.isUnset(request.pids)) {
      query["Pids"] = request.pids;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    if (!Util.isUnset(request.templateAlertId)) {
      query["TemplateAlertId"] = request.templateAlertId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportAppAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportAppAlertRulesResponse>(await this.callApi(params, req, runtime), new ImportAppAlertRulesResponse({}));
  }

  async importAppAlertRules(request: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  async installCmsExporterWithOptions(request: InstallCmsExporterRequest, runtime: $Util.RuntimeOptions): Promise<InstallCmsExporterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.cmsArgs)) {
      query["CmsArgs"] = request.cmsArgs;
    }

    if (!Util.isUnset(request.enableTag)) {
      query["EnableTag"] = request.enableTag;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallCmsExporter",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallCmsExporterResponse>(await this.callApi(params, req, runtime), new InstallCmsExporterResponse({}));
  }

  async installCmsExporter(request: InstallCmsExporterRequest): Promise<InstallCmsExporterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCmsExporterWithOptions(request, runtime);
  }

  async installManagedPrometheusWithOptions(request: InstallManagedPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<InstallManagedPrometheusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.kubeConfig)) {
      query["KubeConfig"] = request.kubeConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallManagedPrometheus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallManagedPrometheusResponse>(await this.callApi(params, req, runtime), new InstallManagedPrometheusResponse({}));
  }

  async installManagedPrometheus(request: InstallManagedPrometheusRequest): Promise<InstallManagedPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installManagedPrometheusWithOptions(request, runtime);
  }

  async listActivatedAlertsWithOptions(request: ListActivatedAlertsRequest, runtime: $Util.RuntimeOptions): Promise<ListActivatedAlertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActivatedAlerts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActivatedAlertsResponse>(await this.callApi(params, req, runtime), new ListActivatedAlertsResponse({}));
  }

  async listActivatedAlerts(request: ListActivatedAlertsRequest): Promise<ListActivatedAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActivatedAlertsWithOptions(request, runtime);
  }

  async listAlertsWithOptions(request: ListAlertsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.showActivities)) {
      query["ShowActivities"] = request.showActivities;
    }

    if (!Util.isUnset(request.showEvents)) {
      query["ShowEvents"] = request.showEvents;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlerts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlertsResponse>(await this.callApi(params, req, runtime), new ListAlertsResponse({}));
  }

  async listAlerts(request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertsWithOptions(request, runtime);
  }

  async listClusterFromGrafanaWithOptions(request: ListClusterFromGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterFromGrafanaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterFromGrafana",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterFromGrafanaResponse>(await this.callApi(params, req, runtime), new ListClusterFromGrafanaResponse({}));
  }

  async listClusterFromGrafana(request: ListClusterFromGrafanaRequest): Promise<ListClusterFromGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  async listCmsInstancesWithOptions(request: ListCmsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListCmsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCmsInstances",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCmsInstancesResponse>(await this.callApi(params, req, runtime), new ListCmsInstancesResponse({}));
  }

  async listCmsInstances(request: ListCmsInstancesRequest): Promise<ListCmsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCmsInstancesWithOptions(request, runtime);
  }

  async listDashboardsWithOptions(request: ListDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<ListDashboardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.dashboardName)) {
      query["DashboardName"] = request.dashboardName;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboards",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardsResponse>(await this.callApi(params, req, runtime), new ListDashboardsResponse({}));
  }

  async listDashboards(request: ListDashboardsRequest): Promise<ListDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  async listDispatchRuleWithOptions(request: ListDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListDispatchRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.system)) {
      query["System"] = request.system;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDispatchRuleResponse>(await this.callApi(params, req, runtime), new ListDispatchRuleResponse({}));
  }

  async listDispatchRule(request: ListDispatchRuleRequest): Promise<ListDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDispatchRuleWithOptions(request, runtime);
  }

  async listEscalationPoliciesWithOptions(request: ListEscalationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListEscalationPoliciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEscalationPolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEscalationPoliciesResponse>(await this.callApi(params, req, runtime), new ListEscalationPoliciesResponse({}));
  }

  async listEscalationPolicies(request: ListEscalationPoliciesRequest): Promise<ListEscalationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEscalationPoliciesWithOptions(request, runtime);
  }

  async listEventBridgeIntegrationsWithOptions(request: ListEventBridgeIntegrationsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventBridgeIntegrationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventBridgeIntegrations",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventBridgeIntegrationsResponse>(await this.callApi(params, req, runtime), new ListEventBridgeIntegrationsResponse({}));
  }

  async listEventBridgeIntegrations(request: ListEventBridgeIntegrationsRequest): Promise<ListEventBridgeIntegrationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventBridgeIntegrationsWithOptions(request, runtime);
  }

  async listNotificationPoliciesWithOptions(request: ListNotificationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListNotificationPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNotificationPolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNotificationPoliciesResponse>(await this.callApi(params, req, runtime), new ListNotificationPoliciesResponse({}));
  }

  async listNotificationPolicies(request: ListNotificationPoliciesRequest): Promise<ListNotificationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotificationPoliciesWithOptions(request, runtime);
  }

  async listOnCallSchedulesWithOptions(request: ListOnCallSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<ListOnCallSchedulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOnCallSchedules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOnCallSchedulesResponse>(await this.callApi(params, req, runtime), new ListOnCallSchedulesResponse({}));
  }

  async listOnCallSchedules(request: ListOnCallSchedulesRequest): Promise<ListOnCallSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOnCallSchedulesWithOptions(request, runtime);
  }

  async listPrometheusAlertRulesWithOptions(request: ListPrometheusAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrometheusAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrometheusAlertRulesResponse>(await this.callApi(params, req, runtime), new ListPrometheusAlertRulesResponse({}));
  }

  async listPrometheusAlertRules(request: ListPrometheusAlertRulesRequest): Promise<ListPrometheusAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertRulesWithOptions(request, runtime);
  }

  async listPrometheusAlertTemplatesWithOptions(request: ListPrometheusAlertTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrometheusAlertTemplates",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrometheusAlertTemplatesResponse>(await this.callApi(params, req, runtime), new ListPrometheusAlertTemplatesResponse({}));
  }

  async listPrometheusAlertTemplates(request: ListPrometheusAlertTemplatesRequest): Promise<ListPrometheusAlertTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertTemplatesWithOptions(request, runtime);
  }

  async listPrometheusGlobalViewWithOptions(request: ListPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new ListPrometheusGlobalViewResponse({}));
  }

  async listPrometheusGlobalView(request: ListPrometheusGlobalViewRequest): Promise<ListPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusGlobalViewWithOptions(request, runtime);
  }

  async listRetcodeAppsWithOptions(request: ListRetcodeAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListRetcodeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRetcodeApps",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRetcodeAppsResponse>(await this.callApi(params, req, runtime), new ListRetcodeAppsResponse({}));
  }

  async listRetcodeApps(request: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  async listScenarioWithOptions(request: ListScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ListScenarioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!Util.isUnset(request.sign)) {
      query["Sign"] = request.sign;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScenarioResponse>(await this.callApi(params, req, runtime), new ListScenarioResponse({}));
  }

  async listScenario(request: ListScenarioRequest): Promise<ListScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  async listSilencePoliciesWithOptions(request: ListSilencePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSilencePoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSilencePolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSilencePoliciesResponse>(await this.callApi(params, req, runtime), new ListSilencePoliciesResponse({}));
  }

  async listSilencePolicies(request: ListSilencePoliciesRequest): Promise<ListSilencePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSilencePoliciesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      action: "ListTagResources",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
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

  async listTraceAppsWithOptions(request: ListTraceAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListTraceAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTraceApps",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTraceAppsResponse>(await this.callApi(params, req, runtime), new ListTraceAppsResponse({}));
  }

  async listTraceApps(request: ListTraceAppsRequest): Promise<ListTraceAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
  }

  async manageGetRecordingRuleWithOptions(request: ManageGetRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ManageGetRecordingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queryUserId)) {
      query["QueryUserId"] = request.queryUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManageGetRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManageGetRecordingRuleResponse>(await this.callApi(params, req, runtime), new ManageGetRecordingRuleResponse({}));
  }

  async manageGetRecordingRule(request: ManageGetRecordingRuleRequest): Promise<ManageGetRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageGetRecordingRuleWithOptions(request, runtime);
  }

  async manageRecordingRuleWithOptions(request: ManageRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ManageRecordingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queryUserId)) {
      query["QueryUserId"] = request.queryUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleYaml)) {
      query["RuleYaml"] = request.ruleYaml;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManageRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManageRecordingRuleResponse>(await this.callApi(params, req, runtime), new ManageRecordingRuleResponse({}));
  }

  async manageRecordingRule(request: ManageRecordingRuleRequest): Promise<ManageRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageRecordingRuleWithOptions(request, runtime);
  }

  async openArmsDefaultSLRWithOptions(request: OpenArmsDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsDefaultSLRResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenArmsDefaultSLR",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenArmsDefaultSLRResponse>(await this.callApi(params, req, runtime), new OpenArmsDefaultSLRResponse({}));
  }

  async openArmsDefaultSLR(request: OpenArmsDefaultSLRRequest): Promise<OpenArmsDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsDefaultSLRWithOptions(request, runtime);
  }

  async openArmsServiceWithOptions(request: OpenArmsServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenArmsService",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenArmsServiceResponse>(await this.callApi(params, req, runtime), new OpenArmsServiceResponse({}));
  }

  async openArmsService(request: OpenArmsServiceRequest): Promise<OpenArmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceWithOptions(request, runtime);
  }

  async openArmsServiceSecondVersionWithOptions(request: OpenArmsServiceSecondVersionRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceSecondVersionResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "OpenArmsServiceSecondVersion",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenArmsServiceSecondVersionResponse>(await this.callApi(params, req, runtime), new OpenArmsServiceSecondVersionResponse({}));
  }

  async openArmsServiceSecondVersion(request: OpenArmsServiceSecondVersionRequest): Promise<OpenArmsServiceSecondVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceSecondVersionWithOptions(request, runtime);
  }

  async openVClusterWithOptions(request: OpenVClusterRequest, runtime: $Util.RuntimeOptions): Promise<OpenVClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenVCluster",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenVClusterResponse>(await this.callApi(params, req, runtime), new OpenVClusterResponse({}));
  }

  async openVCluster(request: OpenVClusterRequest): Promise<OpenVClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVClusterWithOptions(request, runtime);
  }

  async openXtraceDefaultSLRWithOptions(request: OpenXtraceDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenXtraceDefaultSLRResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenXtraceDefaultSLR",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenXtraceDefaultSLRResponse>(await this.callApi(params, req, runtime), new OpenXtraceDefaultSLRResponse({}));
  }

  async openXtraceDefaultSLR(request: OpenXtraceDefaultSLRRequest): Promise<OpenXtraceDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openXtraceDefaultSLRWithOptions(request, runtime);
  }

  async promVpcExporterManagerWithOptions(request: PromVpcExporterManagerRequest, runtime: $Util.RuntimeOptions): Promise<PromVpcExporterManagerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.exporterConfig)) {
      query["ExporterConfig"] = request.exporterConfig;
    }

    if (!Util.isUnset(request.exporterType)) {
      query["ExporterType"] = request.exporterType;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PromVpcExporterManager",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PromVpcExporterManagerResponse>(await this.callApi(params, req, runtime), new PromVpcExporterManagerResponse({}));
  }

  async promVpcExporterManager(request: PromVpcExporterManagerRequest): Promise<PromVpcExporterManagerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.promVpcExporterManagerWithOptions(request, runtime);
  }

  async queryDatasetWithOptions(request: QueryDatasetRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.dateStr)) {
      query["DateStr"] = request.dateStr;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.hungryMode)) {
      query["HungryMode"] = request.hungryMode;
    }

    if (!Util.isUnset(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!Util.isUnset(request.isDrillDown)) {
      query["IsDrillDown"] = request.isDrillDown;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!Util.isUnset(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!Util.isUnset(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!Util.isUnset(request.optionalDims)) {
      query["OptionalDims"] = request.optionalDims;
    }

    if (!Util.isUnset(request.orderByKey)) {
      query["OrderByKey"] = request.orderByKey;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.reduceTail)) {
      query["ReduceTail"] = request.reduceTail;
    }

    if (!Util.isUnset(request.requiredDims)) {
      query["RequiredDims"] = request.requiredDims;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDataset",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDatasetResponse>(await this.callApi(params, req, runtime), new QueryDatasetResponse({}));
  }

  async queryDataset(request: QueryDatasetRequest): Promise<QueryDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetWithOptions(request, runtime);
  }

  async queryMetricByPageWithOptions(request: QueryMetricByPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!Util.isUnset(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!Util.isUnset(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMetricByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMetricByPageResponse>(await this.callApi(params, req, runtime), new QueryMetricByPageResponse({}));
  }

  async queryMetricByPage(request: QueryMetricByPageRequest): Promise<QueryMetricByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  async queryPromInstallStatusWithOptions(request: QueryPromInstallStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryPromInstallStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPromInstallStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPromInstallStatusResponse>(await this.callApi(params, req, runtime), new QueryPromInstallStatusResponse({}));
  }

  async queryPromInstallStatus(request: QueryPromInstallStatusRequest): Promise<QueryPromInstallStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPromInstallStatusWithOptions(request, runtime);
  }

  async queryReleaseMetricWithOptions(request: QueryReleaseMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryReleaseMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.releaseEndTime)) {
      query["ReleaseEndTime"] = request.releaseEndTime;
    }

    if (!Util.isUnset(request.releaseStartTime)) {
      query["ReleaseStartTime"] = request.releaseStartTime;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryReleaseMetric",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryReleaseMetricResponse>(await this.callApi(params, req, runtime), new QueryReleaseMetricResponse({}));
  }

  async queryReleaseMetric(request: QueryReleaseMetricRequest): Promise<QueryReleaseMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReleaseMetricWithOptions(request, runtime);
  }

  async removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request: RemoveAliClusterIdsFromPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAliClusterIdsFromPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAliClusterIdsFromPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new RemoveAliClusterIdsFromPrometheusGlobalViewResponse({}));
  }

  async removeAliClusterIdsFromPrometheusGlobalView(request: RemoveAliClusterIdsFromPrometheusGlobalViewRequest): Promise<RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  async removeSourcesFromPrometheusGlobalViewWithOptions(request: RemoveSourcesFromPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSourcesFromPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceNames)) {
      query["SourceNames"] = request.sourceNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSourcesFromPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSourcesFromPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new RemoveSourcesFromPrometheusGlobalViewResponse({}));
  }

  async removeSourcesFromPrometheusGlobalView(request: RemoveSourcesFromPrometheusGlobalViewRequest): Promise<RemoveSourcesFromPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSourcesFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  async saveTraceAppConfigWithOptions(request: SaveTraceAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveTraceAppConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.settings)) {
      query["Settings"] = request.settings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTraceAppConfig",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTraceAppConfigResponse>(await this.callApi(params, req, runtime), new SaveTraceAppConfigResponse({}));
  }

  async saveTraceAppConfig(request: SaveTraceAppConfigRequest): Promise<SaveTraceAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  async searchAlertContactWithOptions(request: SearchAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAlertContactResponse>(await this.callApi(params, req, runtime), new SearchAlertContactResponse({}));
  }

  async searchAlertContact(request: SearchAlertContactRequest): Promise<SearchAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  async searchAlertContactGroupWithOptions(request: SearchAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAlertContactGroupResponse>(await this.callApi(params, req, runtime), new SearchAlertContactGroupResponse({}));
  }

  async searchAlertContactGroup(request: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  async searchAlertHistoriesWithOptions(request: SearchAlertHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertHistoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchAlertHistories",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAlertHistoriesResponse>(await this.callApi(params, req, runtime), new SearchAlertHistoriesResponse({}));
  }

  async searchAlertHistories(request: SearchAlertHistoriesRequest): Promise<SearchAlertHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  async searchAlertHistorysWithOptions(request: SearchAlertHistorysRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertHistorysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchAlertHistorys",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAlertHistorysResponse>(await this.callApi(params, req, runtime), new SearchAlertHistorysResponse({}));
  }

  async searchAlertHistorys(request: SearchAlertHistorysRequest): Promise<SearchAlertHistorysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertHistorysWithOptions(request, runtime);
  }

  async searchAlertRulesWithOptions(request: SearchAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.systemRegionId)) {
      query["SystemRegionId"] = request.systemRegionId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAlertRulesResponse>(await this.callApi(params, req, runtime), new SearchAlertRulesResponse({}));
  }

  async searchAlertRules(request: SearchAlertRulesRequest): Promise<SearchAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  async searchEventsWithOptions(request: SearchEventsRequest, runtime: $Util.RuntimeOptions): Promise<SearchEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isTrigger)) {
      query["IsTrigger"] = request.isTrigger;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchEvents",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchEventsResponse>(await this.callApi(params, req, runtime), new SearchEventsResponse({}));
  }

  async searchEvents(request: SearchEventsRequest): Promise<SearchEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  async searchRetcodeAppByPageWithOptions(request: SearchRetcodeAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchRetcodeAppByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchRetcodeAppByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchRetcodeAppByPageResponse>(await this.callApi(params, req, runtime), new SearchRetcodeAppByPageResponse({}));
  }

  async searchRetcodeAppByPage(request: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  async searchTraceAppByNameWithOptions(request: SearchTraceAppByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTraceAppByName",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTraceAppByNameResponse>(await this.callApi(params, req, runtime), new SearchTraceAppByNameResponse({}));
  }

  async searchTraceAppByName(request: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  async searchTraceAppByPageWithOptions(request: SearchTraceAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTraceAppByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTraceAppByPageResponse>(await this.callApi(params, req, runtime), new SearchTraceAppByPageResponse({}));
  }

  async searchTraceAppByPage(request: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!Util.isUnset(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTraces",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTracesResponse>(await this.callApi(params, req, runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  async searchTracesByPageWithOptions(request: SearchTracesByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesByPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!Util.isUnset(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTracesByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTracesByPageResponse>(await this.callApi(params, req, runtime), new SearchTracesByPageResponse({}));
  }

  async searchTracesByPage(request: SearchTracesByPageRequest): Promise<SearchTracesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  async sendTTSVerifyLinkWithOptions(request: SendTTSVerifyLinkRequest, runtime: $Util.RuntimeOptions): Promise<SendTTSVerifyLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendTTSVerifyLink",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendTTSVerifyLinkResponse>(await this.callApi(params, req, runtime), new SendTTSVerifyLinkResponse({}));
  }

  async sendTTSVerifyLink(request: SendTTSVerifyLinkRequest): Promise<SendTTSVerifyLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTTSVerifyLinkWithOptions(request, runtime);
  }

  async setRetcodeShareStatusWithOptions(request: SetRetcodeShareStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetRetcodeShareStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetRetcodeShareStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRetcodeShareStatusResponse>(await this.callApi(params, req, runtime), new SetRetcodeShareStatusResponse({}));
  }

  async setRetcodeShareStatus(request: SetRetcodeShareStatusRequest): Promise<SetRetcodeShareStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  async startAlertWithOptions(request: StartAlertRequest, runtime: $Util.RuntimeOptions): Promise<StartAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAlert",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAlertResponse>(await this.callApi(params, req, runtime), new StartAlertResponse({}));
  }

  async startAlert(request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  async stopAlertWithOptions(request: StopAlertRequest, runtime: $Util.RuntimeOptions): Promise<StopAlertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAlert",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAlertResponse>(await this.callApi(params, req, runtime), new StopAlertResponse({}));
  }

  async stopAlert(request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-08-08",
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

  async turnOnSecondSwitchWithOptions(request: TurnOnSecondSwitchRequest, runtime: $Util.RuntimeOptions): Promise<TurnOnSecondSwitchResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TurnOnSecondSwitch",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TurnOnSecondSwitchResponse>(await this.callApi(params, req, runtime), new TurnOnSecondSwitchResponse({}));
  }

  async turnOnSecondSwitch(request: TurnOnSecondSwitchRequest): Promise<TurnOnSecondSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.turnOnSecondSwitchWithOptions(request, runtime);
  }

  async uninstallManagedPrometheusWithOptions(request: UninstallManagedPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<UninstallManagedPrometheusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallManagedPrometheus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallManagedPrometheusResponse>(await this.callApi(params, req, runtime), new UninstallManagedPrometheusResponse({}));
  }

  async uninstallManagedPrometheus(request: UninstallManagedPrometheusRequest): Promise<UninstallManagedPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallManagedPrometheusWithOptions(request, runtime);
  }

  async uninstallPromClusterWithOptions(request: UninstallPromClusterRequest, runtime: $Util.RuntimeOptions): Promise<UninstallPromClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallPromCluster",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallPromClusterResponse>(await this.callApi(params, req, runtime), new UninstallPromClusterResponse({}));
  }

  async uninstallPromCluster(request: UninstallPromClusterRequest): Promise<UninstallPromClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallPromClusterWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-08-08",
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

  async updateAlertContactWithOptions(request: UpdateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlertContactResponse>(await this.callApi(params, req, runtime), new UpdateAlertContactResponse({}));
  }

  async updateAlertContact(request: UpdateAlertContactRequest): Promise<UpdateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  async updateAlertContactGroupWithOptions(request: UpdateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new UpdateAlertContactGroupResponse({}));
  }

  async updateAlertContactGroup(request: UpdateAlertContactGroupRequest): Promise<UpdateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  async updateAlertRuleWithOptions(request: UpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!Util.isUnset(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new UpdateAlertRuleResponse({}));
  }

  async updateAlertRule(request: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  async updateDispatchRuleWithOptions(request: UpdateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDispatchRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDispatchRuleResponse>(await this.callApi(params, req, runtime), new UpdateDispatchRuleResponse({}));
  }

  async updateDispatchRule(request: UpdateDispatchRuleRequest): Promise<UpdateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDispatchRuleWithOptions(request, runtime);
  }

  async updatePrometheusAlertRuleWithOptions(request: UpdatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
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
      action: "UpdatePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new UpdatePrometheusAlertRuleResponse({}));
  }

  async updatePrometheusAlertRule(request: UpdatePrometheusAlertRuleRequest): Promise<UpdatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrometheusAlertRuleWithOptions(request, runtime);
  }

  async updateWebhookWithOptions(request: UpdateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebhookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!Util.isUnset(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!Util.isUnset(request.method)) {
      query["Method"] = request.method;
    }

    if (!Util.isUnset(request.recoverBody)) {
      query["RecoverBody"] = request.recoverBody;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebhook",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebhookResponse>(await this.callApi(params, req, runtime), new UpdateWebhookResponse({}));
  }

  async updateWebhook(request: UpdateWebhookRequest): Promise<UpdateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

  async uploadWithOptions(request: UploadRequest, runtime: $Util.RuntimeOptions): Promise<UploadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.file)) {
      body["File"] = request.file;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Upload",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadResponse>(await this.callApi(params, req, runtime), new UploadResponse({}));
  }

  async upload(request: UploadRequest): Promise<UploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadWithOptions(request, runtime);
  }

}
