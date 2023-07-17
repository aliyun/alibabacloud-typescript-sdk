// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class CheckDataConsistencyRequest extends $tea.Model {
  appType?: string;
  currentTimestamp?: number;
  pid?: string;
  proxyUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentTimestamp: 'CurrentTimestamp',
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      currentTimestamp: 'number',
      pid: 'string',
      proxyUserId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataConsistencyResponseBody extends $tea.Model {
  isDataConsistency?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isDataConsistency: 'IsDataConsistency',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDataConsistency: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataConsistencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDataConsistencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDataConsistencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  deletionTaskId?: string;
  regionId?: string;
  roleArn?: string;
  SPIRegionId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      SPIRegionId: 'SPIRegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
      regionId: 'string',
      roleArn: 'string',
      SPIRegionId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $tea.Model {
  deletable?: boolean;
  requestId?: string;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      requestId: 'RequestId',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      requestId: 'string',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckServiceLinkedRoleForDeletingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckServiceLinkedRoleForDeletingResponseBody,
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

export class CreateAlertTemplateRequest extends $tea.Model {
  annotations?: string;
  labels?: string;
  matchExpressions?: string;
  message?: string;
  name?: string;
  parentId?: string;
  regionId?: string;
  rule?: string;
  templateProvider?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      labels: 'Labels',
      matchExpressions: 'MatchExpressions',
      message: 'Message',
      name: 'Name',
      parentId: 'ParentId',
      regionId: 'RegionId',
      rule: 'Rule',
      templateProvider: 'TemplateProvider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      labels: 'string',
      matchExpressions: 'string',
      message: 'string',
      name: 'string',
      parentId: 'string',
      regionId: 'string',
      rule: 'string',
      templateProvider: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseBody extends $tea.Model {
  alertTemplate?: CreateAlertTemplateResponseBodyAlertTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplate: 'AlertTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplate: CreateAlertTemplateResponseBodyAlertTemplate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlertTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlertTemplateResponseBody,
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

export class CreateWehookRequest extends $tea.Model {
  body?: string;
  contactName?: string;
  httpHeaders?: string;
  httpParams?: string;
  method?: string;
  regionId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contactName: 'ContactName',
      httpHeaders: 'HttpHeaders',
      httpParams: 'HttpParams',
      method: 'Method',
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
      regionId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookResponseBody extends $tea.Model {
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

export class CreateWehookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWehookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWehookResponseBody,
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

export class DeleteAlertTemplateRequest extends $tea.Model {
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertTemplateResponseBody extends $tea.Model {
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

export class DeleteAlertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAlertTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAlertTemplateResponseBody,
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

export class DeleteGrafanaResourceRequest extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      userId: 'string',
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

export class DescribeTraceLocationRequest extends $tea.Model {
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

export class DescribeTraceLocationResponseBody extends $tea.Model {
  regionConfigs?: DescribeTraceLocationResponseBodyRegionConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionConfigs: 'RegionConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionConfigs: { 'type': 'array', 'itemType': DescribeTraceLocationResponseBodyRegionConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTraceLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTraceLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlertTemplateRequest extends $tea.Model {
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlertTemplateResponseBody extends $tea.Model {
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

export class DisableAlertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAlertTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableAlertTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlertTemplateRequest extends $tea.Model {
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlertTemplateResponseBody extends $tea.Model {
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

export class EnableAlertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableAlertTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableAlertTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  nameSpace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      nameSpace: 'NameSpace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      nameSpace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesResponseBody extends $tea.Model {
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

export class ExportPrometheusRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportPrometheusRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportPrometheusRulesResponseBody,
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

export class GetConsistencySnapshotRequest extends $tea.Model {
  appType?: string;
  currentTimestamp?: number;
  pid?: string;
  proxyUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentTimestamp: 'CurrentTimestamp',
      pid: 'Pid',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      currentTimestamp: 'number',
      pid: 'string',
      proxyUserId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotResponseBody extends $tea.Model {
  consistencyResultJsonStr?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      consistencyResultJsonStr: 'ConsistencyResultJsonStr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistencyResultJsonStr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConsistencySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsistencySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationTokenRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationTokenResponseBody extends $tea.Model {
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

export class GetIntegrationTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIntegrationTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIntegrationTokenResponseBody,
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
  pid?: string;
  regionId?: string;
  rpcID?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
      rpcID: 'RpcID',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      regionId: 'string',
      rpcID: 'string',
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
  regionId?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class ImportCustomAlertRulesRequest extends $tea.Model {
  contactGroupIds?: string;
  isAutoStart?: boolean;
  regionId?: string;
  templageAlertConfig?: string;
  templateAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
      templateAlertConfig: 'TemplateAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      regionId: 'string',
      templageAlertConfig: 'string',
      templateAlertConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesResponseBody extends $tea.Model {
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

export class ImportCustomAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportCustomAlertRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportCustomAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesRequest extends $tea.Model {
  clusterId?: string;
  content?: string;
  name?: string;
  nameSpace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      content: 'Content',
      name: 'Name',
      nameSpace: 'NameSpace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      content: 'string',
      name: 'string',
      nameSpace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesResponseBody extends $tea.Model {
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

export class ImportPrometheusRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportPrometheusRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportPrometheusRulesResponseBody,
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

export class ListAlertTemplatesRequest extends $tea.Model {
  alertProvider?: string;
  labels?: string;
  name?: string;
  regionId?: string;
  status?: boolean;
  templateProvider?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertProvider: 'AlertProvider',
      labels: 'Labels',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertProvider: 'string',
      labels: 'string',
      name: 'string',
      regionId: 'string',
      status: 'boolean',
      templateProvider: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBody extends $tea.Model {
  alertTemplates?: ListAlertTemplatesResponseBodyAlertTemplates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlertTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlertTemplatesResponseBody,
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

export class ListDashboardsRequest extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  product?: string;
  recreateSwitch?: boolean;
  regionId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
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

export class ListPromClustersRequest extends $tea.Model {
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

export class ListPromClustersResponseBody extends $tea.Model {
  promClusterList?: ListPromClustersResponseBodyPromClusterList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promClusterList: 'PromClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promClusterList: { 'type': 'array', 'itemType': ListPromClustersResponseBodyPromClusterList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPromClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPromClustersResponseBody,
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

export class ListServerlessTopNAppsRequest extends $tea.Model {
  endTime?: number;
  limit?: number;
  orderBy?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      limit: 'number',
      orderBy: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsResponseBody extends $tea.Model {
  data?: ListServerlessTopNAppsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServerlessTopNAppsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServerlessTopNAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServerlessTopNAppsResponseBody,
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

export class QueryMetricRequest extends $tea.Model {
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  dimensions?: string[];
  endTime?: number;
  filters?: QueryMetricRequestFilters[];
  intervalInSec?: number;
  limit?: number;
  measures?: string[];
  metric?: string;
  order?: string;
  orderBy?: string;
  proxyUserId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      consistencyDataKey: 'ConsistencyDataKey',
      consistencyQueryStrategy: 'ConsistencyQueryStrategy',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      filters: 'Filters',
      intervalInSec: 'IntervalInSec',
      limit: 'Limit',
      measures: 'Measures',
      metric: 'Metric',
      order: 'Order',
      orderBy: 'OrderBy',
      proxyUserId: 'ProxyUserId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistencyDataKey: 'string',
      consistencyQueryStrategy: 'string',
      dimensions: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      intervalInSec: 'number',
      limit: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      order: 'string',
      orderBy: 'string',
      proxyUserId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponseBody extends $tea.Model {
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

export class QueryMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMetricResponseBody,
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

export class SearchAlertRulesRequest extends $tea.Model {
  appType?: string;
  currentPage?: number;
  pageSize?: number;
  pid?: string;
  regionId?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
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
  regionId?: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
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
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
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

export class SendCustomIncidentsRequest extends $tea.Model {
  incidents?: string;
  productType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      productType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomIncidentsResponseBody extends $tea.Model {
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

export class SendCustomIncidentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendCustomIncidentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCustomIncidentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMseIncidentRequest extends $tea.Model {
  incidents?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMseIncidentResponseBody extends $tea.Model {
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

export class SendMseIncidentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendMseIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMseIncidentResponseBody,
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

export class UpdateAlertTemplateRequest extends $tea.Model {
  annotations?: string;
  id?: number;
  labels?: string;
  matchExpressions?: string;
  message?: string;
  name?: string;
  regionId?: string;
  rule?: string;
  status?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      id: 'Id',
      labels: 'Labels',
      matchExpressions: 'MatchExpressions',
      message: 'Message',
      name: 'Name',
      regionId: 'RegionId',
      rule: 'Rule',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      id: 'number',
      labels: 'string',
      matchExpressions: 'string',
      message: 'string',
      name: 'string',
      regionId: 'string',
      rule: 'string',
      status: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertTemplateResponseBody extends $tea.Model {
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

export class UpdateAlertTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlertTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlertTemplateResponseBody,
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

export class CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages extends $tea.Model {
  region?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
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

export class CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions?: CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups?: CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseBodyAlertTemplate extends $tea.Model {
  alertProvider?: string;
  annotations?: { [key: string]: any };
  id?: number;
  labelMatchExpressionGrid?: CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGrid;
  labels?: { [key: string]: any };
  message?: string;
  name?: string;
  parentId?: number;
  public?: boolean;
  rule?: string;
  status?: boolean;
  templateProvider?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertProvider: 'AlertProvider',
      annotations: 'Annotations',
      id: 'Id',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      labels: 'Labels',
      message: 'Message',
      name: 'Name',
      parentId: 'ParentId',
      public: 'Public',
      rule: 'Rule',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertProvider: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      labelMatchExpressionGrid: CreateAlertTemplateResponseBodyAlertTemplateLabelMatchExpressionGrid,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      parentId: 'number',
      public: 'boolean',
      rule: 'string',
      status: 'boolean',
      templateProvider: 'string',
      type: 'string',
      userId: 'string',
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

export class DescribeDispatchRuleResponseBodyDispatchRuleGroupRules extends $tea.Model {
  groupId?: number;
  groupInterval?: number;
  groupWaitTime?: number;
  groupingFields?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
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
  groupRules?: DescribeDispatchRuleResponseBodyDispatchRuleGroupRules[];
  labelMatchExpressionGrid?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid;
  name?: string;
  notifyRules?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules[];
  ruleId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      groupRules: 'GroupRules',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      name: 'Name',
      notifyRules: 'NotifyRules',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleGroupRules },
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

export class DescribeTraceLocationResponseBodyRegionConfigs extends $tea.Model {
  regionNo?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      url: 'string',
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

export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
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

export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseBodyAlertTemplates extends $tea.Model {
  alertProvider?: string;
  annotations?: { [key: string]: any };
  id?: number;
  labelMatchExpressionGrid?: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid;
  labels?: { [key: string]: any };
  message?: string;
  name?: string;
  parentId?: number;
  public?: boolean;
  rule?: string;
  status?: boolean;
  templateProvider?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertProvider: 'AlertProvider',
      annotations: 'Annotations',
      id: 'Id',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      labels: 'Labels',
      message: 'Message',
      name: 'Name',
      parentId: 'ParentId',
      public: 'Public',
      rule: 'Rule',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertProvider: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      labelMatchExpressionGrid: ListAlertTemplatesResponseBodyAlertTemplatesLabelMatchExpressionGrid,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      parentId: 'number',
      public: 'boolean',
      rule: 'string',
      status: 'boolean',
      templateProvider: 'string',
      type: 'string',
      userId: 'string',
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

export class ListDashboardsResponseBodyDashboardVos extends $tea.Model {
  dashboardType?: string;
  exporter?: string;
  id?: string;
  isArmsExporter?: boolean;
  kind?: string;
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
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
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
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
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

export class ListPromClustersResponseBodyPromClusterList extends $tea.Model {
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      pid: 'string',
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

export class ListServerlessTopNAppsResponseBodyData extends $tea.Model {
  count?: number;
  error?: number;
  name?: string;
  pid?: string;
  region?: string;
  rt?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      error: 'Error',
      name: 'Name',
      pid: 'Pid',
      region: 'Region',
      rt: 'Rt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      error: 'number',
      name: 'string',
      pid: 'string',
      region: 'string',
      rt: 'number',
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

export class QueryMetricRequestFilters extends $tea.Model {
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
  alertWay?: string[];
  alertWays?: string[];
  config?: string;
  contactGroupIdList?: string;
  contactGroupIds?: string;
  createTime?: number;
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
      alertWay: 'AlertWay',
      alertWays: 'AlertWays',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      contactGroupIds: 'ContactGroupIds',
      createTime: 'CreateTime',
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
      alertWay: { 'type': 'array', 'itemType': 'string' },
      alertWays: { 'type': 'array', 'itemType': 'string' },
      config: 'string',
      contactGroupIdList: 'string',
      contactGroupIds: 'string',
      createTime: 'number',
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async checkDataConsistencyWithOptions(request: CheckDataConsistencyRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataConsistencyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.currentTimestamp)) {
      query["CurrentTimestamp"] = request.currentTimestamp;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDataConsistency",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDataConsistencyResponse>(await this.callApi(params, req, runtime), new CheckDataConsistencyResponse({}));
  }

  async checkDataConsistency(request: CheckDataConsistencyRequest): Promise<CheckDataConsistencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataConsistencyWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.SPIRegionId)) {
      query["SPIRegionId"] = request.SPIRegionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceLinkedRoleForDeleting",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.callApi(params, req, runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async createAlertTemplateWithOptions(request: CreateAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.templateProvider)) {
      query["TemplateProvider"] = request.templateProvider;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlertTemplateResponse>(await this.callApi(params, req, runtime), new CreateAlertTemplateResponse({}));
  }

  async createAlertTemplate(request: CreateAlertTemplateRequest): Promise<CreateAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertTemplateWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async createWehookWithOptions(request: CreateWehookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWehookResponse> {
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
      action: "CreateWehook",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWehookResponse>(await this.callApi(params, req, runtime), new CreateWehookResponse({}));
  }

  async createWehook(request: CreateWehookRequest): Promise<CreateWehookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWehookWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async deleteAlertTemplateWithOptions(request: DeleteAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertTemplateResponse> {
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
      action: "DeleteAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAlertTemplateResponse({}));
  }

  async deleteAlertTemplate(request: DeleteAlertTemplateRequest): Promise<DeleteAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertTemplateWithOptions(request, runtime);
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
      version: "2021-04-22",
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

  async deleteGrafanaResourceWithOptions(request: DeleteGrafanaResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGrafanaResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGrafanaResource",
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async describeTraceLocationWithOptions(request: DescribeTraceLocationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTraceLocation",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTraceLocationResponse>(await this.callApi(params, req, runtime), new DescribeTraceLocationResponse({}));
  }

  async describeTraceLocation(request: DescribeTraceLocationRequest): Promise<DescribeTraceLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLocationWithOptions(request, runtime);
  }

  async disableAlertTemplateWithOptions(request: DisableAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DisableAlertTemplateResponse> {
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
      action: "DisableAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAlertTemplateResponse>(await this.callApi(params, req, runtime), new DisableAlertTemplateResponse({}));
  }

  async disableAlertTemplate(request: DisableAlertTemplateRequest): Promise<DisableAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAlertTemplateWithOptions(request, runtime);
  }

  async enableAlertTemplateWithOptions(request: EnableAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<EnableAlertTemplateResponse> {
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
      action: "EnableAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAlertTemplateResponse>(await this.callApi(params, req, runtime), new EnableAlertTemplateResponse({}));
  }

  async enableAlertTemplate(request: EnableAlertTemplateRequest): Promise<EnableAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAlertTemplateWithOptions(request, runtime);
  }

  async exportPrometheusRulesWithOptions(request: ExportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ExportPrometheusRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nameSpace)) {
      query["NameSpace"] = request.nameSpace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportPrometheusRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportPrometheusRulesResponse>(await this.callApi(params, req, runtime), new ExportPrometheusRulesResponse({}));
  }

  async exportPrometheusRules(request: ExportPrometheusRulesRequest): Promise<ExportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportPrometheusRulesWithOptions(request, runtime);
  }

  async getAgentDownloadUrlWithOptions(request: GetAgentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDownloadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgentDownloadUrl",
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async getConsistencySnapshotWithOptions(request: GetConsistencySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<GetConsistencySnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.currentTimestamp)) {
      query["CurrentTimestamp"] = request.currentTimestamp;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConsistencySnapshot",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConsistencySnapshotResponse>(await this.callApi(params, req, runtime), new GetConsistencySnapshotResponse({}));
  }

  async getConsistencySnapshot(request: GetConsistencySnapshotRequest): Promise<GetConsistencySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsistencySnapshotWithOptions(request, runtime);
  }

  async getIntegrationTokenWithOptions(request: GetIntegrationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegrationTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIntegrationToken",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntegrationTokenResponse>(await this.callApi(params, req, runtime), new GetIntegrationTokenResponse({}));
  }

  async getIntegrationToken(request: GetIntegrationTokenRequest): Promise<GetIntegrationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegrationTokenWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rpcID)) {
      query["RpcID"] = request.rpcID;
    }

    if (!Util.isUnset(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStack",
      version: "2021-04-22",
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
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrace",
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async importCustomAlertRulesWithOptions(request: ImportCustomAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportCustomAlertRulesResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.templateAlertConfig)) {
      query["TemplateAlertConfig"] = request.templateAlertConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportCustomAlertRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportCustomAlertRulesResponse>(await this.callApi(params, req, runtime), new ImportCustomAlertRulesResponse({}));
  }

  async importCustomAlertRules(request: ImportCustomAlertRulesRequest): Promise<ImportCustomAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCustomAlertRulesWithOptions(request, runtime);
  }

  async importPrometheusRulesWithOptions(request: ImportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportPrometheusRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nameSpace)) {
      query["NameSpace"] = request.nameSpace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportPrometheusRules",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportPrometheusRulesResponse>(await this.callApi(params, req, runtime), new ImportPrometheusRulesResponse({}));
  }

  async importPrometheusRules(request: ImportPrometheusRulesRequest): Promise<ImportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importPrometheusRulesWithOptions(request, runtime);
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
      version: "2021-04-22",
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

  async listAlertTemplatesWithOptions(request: ListAlertTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertProvider)) {
      query["AlertProvider"] = request.alertProvider;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
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

    if (!Util.isUnset(request.templateProvider)) {
      query["TemplateProvider"] = request.templateProvider;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlertTemplates",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlertTemplatesResponse>(await this.callApi(params, req, runtime), new ListAlertTemplatesResponse({}));
  }

  async listAlertTemplates(request: ListAlertTemplatesRequest): Promise<ListAlertTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertTemplatesWithOptions(request, runtime);
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
      version: "2021-04-22",
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

  async listDashboardsWithOptions(request: ListDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<ListDashboardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async listPromClustersWithOptions(request: ListPromClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListPromClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPromClusters",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPromClustersResponse>(await this.callApi(params, req, runtime), new ListPromClustersResponse({}));
  }

  async listPromClusters(request: ListPromClustersRequest): Promise<ListPromClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPromClustersWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async listServerlessTopNAppsWithOptions(request: ListServerlessTopNAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListServerlessTopNAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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
      action: "ListServerlessTopNApps",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerlessTopNAppsResponse>(await this.callApi(params, req, runtime), new ListServerlessTopNAppsResponse({}));
  }

  async listServerlessTopNApps(request: ListServerlessTopNAppsRequest): Promise<ListServerlessTopNAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerlessTopNAppsWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consistencyDataKey)) {
      query["ConsistencyDataKey"] = request.consistencyDataKey;
    }

    if (!Util.isUnset(request.consistencyQueryStrategy)) {
      query["ConsistencyQueryStrategy"] = request.consistencyQueryStrategy;
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

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!Util.isUnset(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMetric",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMetricResponse>(await this.callApi(params, req, runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTracesByPage",
      version: "2021-04-22",
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

  async sendCustomIncidentsWithOptions(request: SendCustomIncidentsRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomIncidentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.incidents)) {
      query["Incidents"] = request.incidents;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendCustomIncidents",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCustomIncidentsResponse>(await this.callApi(params, req, runtime), new SendCustomIncidentsResponse({}));
  }

  async sendCustomIncidents(request: SendCustomIncidentsRequest): Promise<SendCustomIncidentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomIncidentsWithOptions(request, runtime);
  }

  async sendMseIncidentWithOptions(request: SendMseIncidentRequest, runtime: $Util.RuntimeOptions): Promise<SendMseIncidentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.incidents)) {
      query["Incidents"] = request.incidents;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMseIncident",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMseIncidentResponse>(await this.callApi(params, req, runtime), new SendMseIncidentResponse({}));
  }

  async sendMseIncident(request: SendMseIncidentRequest): Promise<SendMseIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMseIncidentWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

  async updateAlertTemplateWithOptions(request: UpdateAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
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
      action: "UpdateAlertTemplate",
      version: "2021-04-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlertTemplateResponse>(await this.callApi(params, req, runtime), new UpdateAlertTemplateResponse({}));
  }

  async updateAlertTemplate(request: UpdateAlertTemplateRequest): Promise<UpdateAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertTemplateWithOptions(request, runtime);
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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
      version: "2021-04-22",
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

}
