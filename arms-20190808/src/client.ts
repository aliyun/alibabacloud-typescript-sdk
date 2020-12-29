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
  regionId?: string;
  clusterId?: string;
  integration?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      integration: 'Integration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      integration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGrafanaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  integration?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      integration: 'Integration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      integration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIntegrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIntegrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name?: string;
  appId?: string;
  sign?: string;
  config?: { [key: string]: any };
  snTransfer?: boolean;
  snStat?: boolean;
  snDump?: boolean;
  snForce?: boolean;
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
      config: 'Config',
      snTransfer: 'SnTransfer',
      snStat: 'SnStat',
      snDump: 'SnDump',
      snForce: 'SnForce',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      snTransfer: 'boolean',
      snStat: 'boolean',
      snDump: 'boolean',
      snForce: 'boolean',
      updateOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioShrinkRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name?: string;
  appId?: string;
  sign?: string;
  configShrink?: string;
  snTransfer?: boolean;
  snStat?: boolean;
  snDump?: boolean;
  snForce?: boolean;
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
      configShrink: 'Config',
      snTransfer: 'SnTransfer',
      snStat: 'SnStat',
      snDump: 'SnDump',
      snForce: 'SnForce',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
      configShrink: 'string',
      snTransfer: 'boolean',
      snStat: 'boolean',
      snDump: 'boolean',
      snForce: 'boolean',
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
  body: ApplyScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataConsistencyRequest extends $tea.Model {
  currentTimestamp?: number;
  regionId?: string;
  proxyUserId?: string;
  pid?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      currentTimestamp: 'CurrentTimestamp',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTimestamp: 'number',
      regionId: 'string',
      proxyUserId: 'string',
      pid: 'string',
      appType: 'string',
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
  body: CheckDataConsistencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDataConsistencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  roleArn?: string;
  serviceName?: string;
  SPIRegionId?: string;
  deletionTaskId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      SPIRegionId: 'SPIRegionId',
      deletionTaskId: 'DeletionTaskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      serviceName: 'string',
      SPIRegionId: 'string',
      deletionTaskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $tea.Model {
  requestId?: string;
  deletable?: boolean;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletable: 'Deletable',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletable: 'boolean',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckServiceLinkedRoleForDeletingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckServiceLinkedRoleForDeletingResponseBody,
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
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactRequest extends $tea.Model {
  contactName?: string;
  phoneNum?: string;
  email?: string;
  dingRobotWebhookUrl?: string;
  systemNoc?: boolean;
  regionId?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phoneNum: 'PhoneNum',
      email: 'Email',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      systemNoc: 'SystemNoc',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phoneNum: 'string',
      email: 'string',
      dingRobotWebhookUrl: 'string',
      systemNoc: 'boolean',
      regionId: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponseBody extends $tea.Model {
  requestId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlertContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
      proxyUserId: 'string',
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
  body: CreateAlertContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppRequest extends $tea.Model {
  retcodeAppName?: string;
  retcodeAppType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      retcodeAppName: 'RetcodeAppName',
      retcodeAppType: 'RetcodeAppType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retcodeAppName: 'string',
      retcodeAppType: 'string',
      regionId: 'string',
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
  body: CreateRetcodeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRetcodeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookRequest extends $tea.Model {
  contactName?: string;
  method?: string;
  url?: string;
  httpParams?: string;
  httpHeaders?: string;
  regionId?: string;
  proxyUserId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      method: 'Method',
      url: 'Url',
      httpParams: 'HttpParams',
      httpHeaders: 'HttpHeaders',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      method: 'string',
      url: 'string',
      httpParams: 'string',
      httpHeaders: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookResponseBody extends $tea.Model {
  requestId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWehookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWehookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactRequest extends $tea.Model {
  regionId?: string;
  proxyUserId?: string;
  contactId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      proxyUserId: 'string',
      contactId: 'number',
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
  body: DeleteAlertContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
  regionId?: string;
  proxyUserId?: string;
  contactGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      proxyUserId: 'string',
      contactGroupId: 'number',
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
  body: DeleteAlertContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesRequest extends $tea.Model {
  alertIds?: string;
  proxyUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
      proxyUserId: 'string',
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
  body: DeleteAlertRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlertRulesResponseBody,
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
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRetcodeAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRetcodeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRetcodeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioRequest extends $tea.Model {
  scenarioId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioId: 'ScenarioId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioId: 'number',
      regionId: 'string',
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
  body: DeleteScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppRequest extends $tea.Model {
  appId?: string;
  regionId?: string;
  type?: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
      type: 'Type',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
      type: 'string',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTraceAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBody extends $tea.Model {
  requestId?: string;
  dispatchRule?: DescribeDispatchRuleResponseBodyDispatchRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRule: 'DispatchRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRule: DescribeDispatchRuleResponseBodyDispatchRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDispatchRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDispatchRuleResponseBody,
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
  requestId?: string;
  licenseKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      licenseKey: 'LicenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      licenseKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLicenseKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTraceLicenseKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  regionConfigs?: DescribeTraceLocationResponseBodyRegionConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionConfigs: 'RegionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionConfigs: { 'type': 'array', 'itemType': DescribeTraceLocationResponseBodyRegionConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTraceLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTraceLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  nameSpace?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      nameSpace: 'NameSpace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      nameSpace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportPrometheusRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetAgentDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageRequest extends $tea.Model {
  regionId?: string;
  startTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  intervalMills?: number;
  PId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      intervalMills: 'IntervalMills',
      PId: 'PId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      intervalMills: 'number',
      PId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAppApiByPageResponseBodyData;
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
      data: GetAppApiByPageResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppApiByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppApiByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotRequest extends $tea.Model {
  currentTimestamp?: number;
  regionId?: string;
  proxyUserId?: string;
  pid?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      currentTimestamp: 'CurrentTimestamp',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTimestamp: 'number',
      regionId: 'string',
      proxyUserId: 'string',
      pid: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  consistencyResultJsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      consistencyResultJsonStr: 'ConsistencyResultJsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      consistencyResultJsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConsistencySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      proxyUserId: 'string',
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
  body: GetIntegrationTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  multiCallChainInfos?: GetMultipleTraceResponseBodyMultiCallChainInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      multiCallChainInfos: 'MultiCallChainInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      multiCallChainInfos: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMultipleTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetPrometheusApiTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetRetcodeShareUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRetcodeShareUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  traceID?: string;
  regionId?: string;
  rpcID?: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      regionId: 'RegionId',
      rpcID: 'RpcID',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      regionId: 'string',
      rpcID: 'string',
      pid: 'string',
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
  body: GetStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  traceID?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      regionId: 'string',
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
  body: GetTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTraceAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTraceAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesRequest extends $tea.Model {
  templateAlertId?: string;
  pids?: string;
  regionId?: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templageAlertConfig?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      templateAlertId: 'TemplateAlertId',
      pids: 'Pids',
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templageAlertConfig: 'TemplageAlertConfig',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateAlertId: 'string',
      pids: 'string',
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templageAlertConfig: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportAppAlertRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportAppAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesRequest extends $tea.Model {
  regionId?: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templateAlertConfig?: string;
  proxyUserId?: string;
  templageAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templateAlertConfig: 'TemplateAlertConfig',
      proxyUserId: 'ProxyUserId',
      templageAlertConfig: 'TemplageAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templateAlertConfig: 'string',
      proxyUserId: 'string',
      templageAlertConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportCustomAlertRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportCustomAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  nameSpace?: string;
  name?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      nameSpace: 'NameSpace',
      name: 'Name',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      nameSpace: 'string',
      name: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportPrometheusRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportPrometheusRulesResponseBody,
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
  requestId?: string;
  promClusterList?: ListClusterFromGrafanaResponseBodyPromClusterList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promClusterList: 'PromClusterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promClusterList: { 'type': 'array', 'itemType': ListClusterFromGrafanaResponseBodyPromClusterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterFromGrafanaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterFromGrafanaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  clusterType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      clusterType: 'string',
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
  body: ListDashboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDashboardsResponseBody,
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
  requestId?: string;
  promClusterList?: ListPromClustersResponseBodyPromClusterList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promClusterList: 'PromClusterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promClusterList: { 'type': 'array', 'itemType': ListPromClustersResponseBodyPromClusterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPromClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPromClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsRequest extends $tea.Model {
  securityToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      regionId: 'string',
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
  body: ListRetcodeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRetcodeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name?: string;
  appId?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseBody extends $tea.Model {
  requestId?: string;
  armsScenarios?: ListScenarioResponseBodyArmsScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      armsScenarios: 'ArmsScenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      armsScenarios: { 'type': 'array', 'itemType': ListScenarioResponseBodyArmsScenarios },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScenarioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScenarioResponseBody,
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
  traceApps?: ListTraceAppsResponseBodyTraceApps[];
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      traceApps: 'TraceApps',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceApps: { 'type': 'array', 'itemType': ListTraceAppsResponseBodyTraceApps },
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTraceAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTraceAppsResponseBody,
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
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenArmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenArmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequest extends $tea.Model {
  datasetId?: number;
  intervalInSec?: number;
  dateStr?: string;
  minTime?: number;
  maxTime?: number;
  isDrillDown?: boolean;
  orderByKey?: string;
  limit?: number;
  reduceTail?: boolean;
  hungryMode?: boolean;
  proxyUserId?: string;
  measures?: string[];
  dimensions?: QueryDatasetRequestDimensions[];
  requiredDims?: QueryDatasetRequestRequiredDims[];
  optionalDims?: QueryDatasetRequestOptionalDims[];
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      intervalInSec: 'IntervalInSec',
      dateStr: 'DateStr',
      minTime: 'MinTime',
      maxTime: 'MaxTime',
      isDrillDown: 'IsDrillDown',
      orderByKey: 'OrderByKey',
      limit: 'Limit',
      reduceTail: 'ReduceTail',
      hungryMode: 'HungryMode',
      proxyUserId: 'ProxyUserId',
      measures: 'Measures',
      dimensions: 'Dimensions',
      requiredDims: 'RequiredDims',
      optionalDims: 'OptionalDims',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      intervalInSec: 'number',
      dateStr: 'string',
      minTime: 'number',
      maxTime: 'number',
      isDrillDown: 'boolean',
      orderByKey: 'string',
      limit: 'number',
      reduceTail: 'boolean',
      hungryMode: 'boolean',
      proxyUserId: 'string',
      measures: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': QueryDatasetRequestDimensions },
      requiredDims: { 'type': 'array', 'itemType': QueryDatasetRequestRequiredDims },
      optionalDims: { 'type': 'array', 'itemType': QueryDatasetRequestOptionalDims },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequest extends $tea.Model {
  intervalInSec?: number;
  startTime?: number;
  endTime?: number;
  orderBy?: string;
  limit?: number;
  metric?: string;
  order?: string;
  proxyUserId?: string;
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  filters?: QueryMetricRequestFilters[];
  dimensions?: string[];
  measures?: string[];
  static names(): { [key: string]: string } {
    return {
      intervalInSec: 'IntervalInSec',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      limit: 'Limit',
      metric: 'Metric',
      order: 'Order',
      proxyUserId: 'ProxyUserId',
      consistencyDataKey: 'ConsistencyDataKey',
      consistencyQueryStrategy: 'ConsistencyQueryStrategy',
      filters: 'Filters',
      dimensions: 'Dimensions',
      measures: 'Measures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalInSec: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      limit: 'number',
      metric: 'string',
      order: 'string',
      proxyUserId: 'string',
      consistencyDataKey: 'string',
      consistencyQueryStrategy: 'string',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      measures: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequest extends $tea.Model {
  intervalInSec?: number;
  startTime?: number;
  endTime?: number;
  orderBy?: string;
  metric?: string;
  order?: string;
  proxyUserId?: string;
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  currentPage?: number;
  pageSize?: number;
  filters?: QueryMetricByPageRequestFilters[];
  dimensions?: string[];
  measures?: string[];
  static names(): { [key: string]: string } {
    return {
      intervalInSec: 'IntervalInSec',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      metric: 'Metric',
      order: 'Order',
      proxyUserId: 'ProxyUserId',
      consistencyDataKey: 'ConsistencyDataKey',
      consistencyQueryStrategy: 'ConsistencyQueryStrategy',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      filters: 'Filters',
      dimensions: 'Dimensions',
      measures: 'Measures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalInSec: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      metric: 'string',
      order: 'string',
      proxyUserId: 'string',
      consistencyDataKey: 'string',
      consistencyQueryStrategy: 'string',
      currentPage: 'number',
      pageSize: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricByPageRequestFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      measures: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryMetricByPageResponseBodyData;
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
      data: QueryMetricByPageResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMetricByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveTraceAppConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTraceAppConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactRequest extends $tea.Model {
  contactName?: string;
  phone?: string;
  email?: string;
  currentPage?: string;
  pageSize?: string;
  regionId?: string;
  proxyUserId?: string;
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phone: 'Phone',
      email: 'Email',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phone: 'string',
      email: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      contactIds: 'string',
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
  body: SearchAlertContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  regionId?: string;
  proxyUserId?: string;
  contactName?: string;
  contactId?: number;
  contactGroupIds?: string;
  isDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactName: 'ContactName',
      contactId: 'ContactId',
      contactGroupIds: 'ContactGroupIds',
      isDetail: 'IsDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      contactName: 'string',
      contactId: 'number',
      contactGroupIds: 'string',
      isDetail: 'boolean',
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
  body: SearchAlertContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesRequest extends $tea.Model {
  proxyUserId?: string;
  alertId?: number;
  alertType?: number;
  currentPage?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      proxyUserId: 'ProxyUserId',
      alertId: 'AlertId',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyUserId: 'string',
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
      endTime: 'number',
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
  body: SearchAlertHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchAlertHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesRequest extends $tea.Model {
  proxyUserId?: string;
  title?: string;
  type?: string;
  currentPage?: number;
  pageSize?: number;
  regionId?: string;
  pid?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyUserId: 'ProxyUserId',
      title: 'Title',
      type: 'Type',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyUserId: 'string',
      title: 'string',
      type: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      pid: 'string',
      appType: 'string',
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
  body: SearchAlertRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchAlertRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsRequest extends $tea.Model {
  proxyUserId?: string;
  alertId?: number;
  pid?: string;
  currentPage?: number;
  pageSize?: number;
  regionId?: string;
  appType?: string;
  alertType?: number;
  isTrigger?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      proxyUserId: 'ProxyUserId',
      alertId: 'AlertId',
      pid: 'Pid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      appType: 'AppType',
      alertType: 'AlertType',
      isTrigger: 'IsTrigger',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyUserId: 'string',
      alertId: 'number',
      pid: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      appType: 'string',
      alertType: 'number',
      isTrigger: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBody extends $tea.Model {
  pageBean?: SearchEventsResponseBodyPageBean;
  requestId?: string;
  isTrigger?: number;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
      isTrigger: 'IsTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchEventsResponseBodyPageBean,
      requestId: 'string',
      isTrigger: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageRequest extends $tea.Model {
  retcodeAppName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      retcodeAppName: 'RetcodeAppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retcodeAppName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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
  body: SearchRetcodeAppByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchRetcodeAppByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameRequest extends $tea.Model {
  traceAppName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      traceAppName: 'TraceAppName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceAppName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseBody extends $tea.Model {
  traceApps?: SearchTraceAppByNameResponseBodyTraceApps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      traceApps: 'TraceApps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseBodyTraceApps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTraceAppByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTraceAppByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageRequest extends $tea.Model {
  traceAppName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      traceAppName: 'TraceAppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceAppName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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
  body: SearchTraceAppByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTraceAppByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  operationName?: string;
  minDuration?: number;
  reverse?: boolean;
  serviceIp?: string;
  tag?: SearchTracesRequestTag[];
  exclusionFilters?: SearchTracesRequestExclusionFilters[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      operationName: 'OperationName',
      minDuration: 'MinDuration',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      tag: 'Tag',
      exclusionFilters: 'ExclusionFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      operationName: 'string',
      minDuration: 'number',
      reverse: 'boolean',
      serviceIp: 'string',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesRequestExclusionFilters },
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
  body: SearchTracesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTracesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  regionId?: string;
  serviceName?: string;
  operationName?: string;
  minDuration?: number;
  reverse?: boolean;
  serviceIp?: string;
  pageNumber?: number;
  pageSize?: number;
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      operationName: 'OperationName',
      minDuration: 'MinDuration',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      exclusionFilters: 'ExclusionFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      operationName: 'string',
      minDuration: 'number',
      reverse: 'boolean',
      serviceIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesByPageRequestExclusionFilters },
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
  body: SearchTracesByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTracesByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomIncidentsRequest extends $tea.Model {
  incidents?: string;
  regionId?: string;
  proxyUserId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      productType: 'string',
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
  body: SendCustomIncidentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      regionId: 'string',
      proxyUserId: 'string',
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
  body: SendMseIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetRetcodeShareStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRetcodeShareStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertRequest extends $tea.Model {
  alertId?: string;
  proxyUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      proxyUserId: 'string',
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
  body: StartAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertRequest extends $tea.Model {
  alertId?: string;
  proxyUserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      proxyUserId: 'ProxyUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      proxyUserId: 'string',
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
  body: StopAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactRequest extends $tea.Model {
  contactName?: string;
  phoneNum?: string;
  email?: string;
  dingRobotWebhookUrl?: string;
  systemNoc?: boolean;
  regionId?: string;
  proxyUserId?: string;
  contactId?: number;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phoneNum: 'PhoneNum',
      email: 'Email',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      systemNoc: 'SystemNoc',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phoneNum: 'string',
      email: 'string',
      dingRobotWebhookUrl: 'string',
      systemNoc: 'boolean',
      regionId: 'string',
      proxyUserId: 'string',
      contactId: 'number',
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
  body: UpdateAlertContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  contactIds?: string;
  regionId?: string;
  proxyUserId?: string;
  contactGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      contactGroupId: 'number',
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
  body: UpdateAlertContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleRequest extends $tea.Model {
  regionId?: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templageAlertConfig?: string;
  proxyUserId?: string;
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templageAlertConfig: 'TemplageAlertConfig',
      proxyUserId: 'ProxyUserId',
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templageAlertConfig: 'string',
      proxyUserId: 'string',
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleResponseBody extends $tea.Model {
  alertId?: number;
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAlertRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAlertRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookRequest extends $tea.Model {
  contactName?: string;
  method?: string;
  url?: string;
  httpParams?: string;
  httpHeaders?: string;
  regionId?: string;
  proxyUserId?: string;
  contactId?: number;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      method: 'Method',
      url: 'Url',
      httpParams: 'HttpParams',
      httpHeaders: 'HttpHeaders',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      contactId: 'ContactId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      method: 'string',
      url: 'string',
      httpParams: 'string',
      httpHeaders: 'string',
      regionId: 'string',
      proxyUserId: 'string',
      contactId: 'number',
      body: 'string',
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
  body: UpdateWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class CreateRetcodeAppResponseBodyRetcodeAppDataBean extends $tea.Model {
  pid?: string;
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key?: string;
  value?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      operator: 'string',
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

export class DescribeDispatchRuleResponseBodyDispatchRuleGroupRules extends $tea.Model {
  groupingFields?: string[];
  groupId?: number;
  groupInterval?: number;
  groupWaitTime?: number;
  static names(): { [key: string]: string } {
    return {
      groupingFields: 'GroupingFields',
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupingFields: { 'type': 'array', 'itemType': 'string' },
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects extends $tea.Model {
  notifyObjectId?: string;
  notifyType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      notifyObjectId: 'NotifyObjectId',
      notifyType: 'NotifyType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjectId: 'string',
      notifyType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules extends $tea.Model {
  notifyObjects?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects[];
  notifyChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      notifyObjects: 'NotifyObjects',
      notifyChannels: 'NotifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjects: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRule extends $tea.Model {
  state?: string;
  labelMatchExpressionGrid?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid;
  name?: string;
  groupRules?: DescribeDispatchRuleResponseBodyDispatchRuleGroupRules[];
  ruleId?: number;
  notifyRules?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules[];
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      name: 'Name',
      groupRules: 'GroupRules',
      ruleId: 'RuleId',
      notifyRules: 'NotifyRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      labelMatchExpressionGrid: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid,
      name: 'string',
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleGroupRules },
      ruleId: 'number',
      notifyRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules },
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
  pageSize?: number;
  total?: string;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      total: 'string',
      page: 'number',
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

export class GetMultipleTraceResponseBodyMultiCallChainInfosSpans extends $tea.Model {
  operationName?: string;
  resultCode?: string;
  timestamp?: number;
  rpcType?: number;
  tagEntryList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList[];
  logEventList?: GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList[];
  haveStack?: boolean;
  serviceIp?: string;
  duration?: number;
  rpcId?: string;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      operationName: 'OperationName',
      resultCode: 'ResultCode',
      timestamp: 'Timestamp',
      rpcType: 'RpcType',
      tagEntryList: 'TagEntryList',
      logEventList: 'LogEventList',
      haveStack: 'HaveStack',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationName: 'string',
      resultCode: 'string',
      timestamp: 'number',
      rpcType: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansTagEntryList },
      logEventList: { 'type': 'array', 'itemType': GetMultipleTraceResponseBodyMultiCallChainInfosSpansLogEventList },
      haveStack: 'boolean',
      serviceIp: 'string',
      duration: 'number',
      rpcId: 'string',
      serviceName: 'string',
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
  type?: string;
  info?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      info: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyStackInfo extends $tea.Model {
  startTime?: number;
  exception?: string;
  api?: string;
  line?: string;
  duration?: number;
  rpcId?: string;
  serviceName?: string;
  extInfo?: GetStackResponseBodyStackInfoExtInfo;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      exception: 'Exception',
      api: 'Api',
      line: 'Line',
      duration: 'Duration',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      exception: 'string',
      api: 'string',
      line: 'string',
      duration: 'number',
      rpcId: 'string',
      serviceName: 'string',
      extInfo: GetStackResponseBodyStackInfoExtInfo,
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

export class GetTraceResponseBodySpans extends $tea.Model {
  operationName?: string;
  resultCode?: string;
  timestamp?: number;
  rpcType?: number;
  tagEntryList?: GetTraceResponseBodySpansTagEntryList[];
  logEventList?: GetTraceResponseBodySpansLogEventList[];
  haveStack?: boolean;
  serviceIp?: string;
  duration?: number;
  rpcId?: string;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      operationName: 'OperationName',
      resultCode: 'ResultCode',
      timestamp: 'Timestamp',
      rpcType: 'RpcType',
      tagEntryList: 'TagEntryList',
      logEventList: 'LogEventList',
      haveStack: 'HaveStack',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationName: 'string',
      resultCode: 'string',
      timestamp: 'number',
      rpcType: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansTagEntryList },
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseBodySpansLogEventList },
      haveStack: 'boolean',
      serviceIp: 'string',
      duration: 'number',
      rpcId: 'string',
      serviceName: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseBodyTraceApp extends $tea.Model {
  type?: string;
  appName?: string;
  updateTime?: number;
  labels?: string[];
  show?: boolean;
  createTime?: number;
  pid?: string;
  appId?: number;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      labels: 'Labels',
      show: 'Show',
      createTime: 'CreateTime',
      pid: 'Pid',
      appId: 'AppId',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      updateTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      show: 'boolean',
      createTime: 'number',
      pid: 'string',
      appId: 'number',
      userId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponseBodyPromClusterList extends $tea.Model {
  updateTime?: number;
  createTime?: number;
  userId?: string;
  options?: string;
  isControllerInstalled?: boolean;
  agentStatus?: string;
  extra?: string;
  controllerId?: string;
  regionId?: string;
  installTime?: number;
  pluginsJsonArray?: string;
  clusterType?: string;
  clusterName?: string;
  stateJson?: string;
  lastHeartBeatTime?: number;
  nodeNum?: number;
  id?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      userId: 'UserId',
      options: 'Options',
      isControllerInstalled: 'IsControllerInstalled',
      agentStatus: 'AgentStatus',
      extra: 'Extra',
      controllerId: 'ControllerId',
      regionId: 'RegionId',
      installTime: 'InstallTime',
      pluginsJsonArray: 'PluginsJsonArray',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      stateJson: 'StateJson',
      lastHeartBeatTime: 'LastHeartBeatTime',
      nodeNum: 'NodeNum',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      createTime: 'number',
      userId: 'string',
      options: 'string',
      isControllerInstalled: 'boolean',
      agentStatus: 'string',
      extra: 'string',
      controllerId: 'string',
      regionId: 'string',
      installTime: 'number',
      pluginsJsonArray: 'string',
      clusterType: 'string',
      clusterName: 'string',
      stateJson: 'string',
      lastHeartBeatTime: 'number',
      nodeNum: 'number',
      id: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBodyDashboardVos extends $tea.Model {
  type?: string;
  time?: string;
  exporter?: string;
  isArmsExporter?: boolean;
  url?: string;
  tags?: string[];
  title?: string;
  id?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      time: 'Time',
      exporter: 'Exporter',
      isArmsExporter: 'IsArmsExporter',
      url: 'Url',
      tags: 'Tags',
      title: 'Title',
      id: 'Id',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      time: 'string',
      exporter: 'string',
      isArmsExporter: 'boolean',
      url: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      id: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromClustersResponseBodyPromClusterList extends $tea.Model {
  updateTime?: number;
  createTime?: number;
  userId?: string;
  options?: string;
  isControllerInstalled?: boolean;
  agentStatus?: string;
  extra?: string;
  controllerId?: string;
  regionId?: string;
  installTime?: number;
  pluginsJsonArray?: string;
  clusterType?: string;
  clusterName?: string;
  stateJson?: string;
  lastHeartBeatTime?: number;
  nodeNum?: number;
  id?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      userId: 'UserId',
      options: 'Options',
      isControllerInstalled: 'IsControllerInstalled',
      agentStatus: 'AgentStatus',
      extra: 'Extra',
      controllerId: 'ControllerId',
      regionId: 'RegionId',
      installTime: 'InstallTime',
      pluginsJsonArray: 'PluginsJsonArray',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      stateJson: 'StateJson',
      lastHeartBeatTime: 'LastHeartBeatTime',
      nodeNum: 'NodeNum',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      createTime: 'number',
      userId: 'string',
      options: 'string',
      isControllerInstalled: 'boolean',
      agentStatus: 'string',
      extra: 'string',
      controllerId: 'string',
      regionId: 'string',
      installTime: 'number',
      pluginsJsonArray: 'string',
      clusterType: 'string',
      clusterName: 'string',
      stateJson: 'string',
      lastHeartBeatTime: 'number',
      nodeNum: 'number',
      id: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBodyRetcodeApps extends $tea.Model {
  appName?: string;
  appId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appId: 'AppId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appId: 'number',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseBodyArmsScenarios extends $tea.Model {
  updateTime?: string;
  appId?: string;
  sign?: string;
  createTime?: string;
  userId?: string;
  extensions?: string;
  name?: string;
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      appId: 'AppId',
      sign: 'Sign',
      createTime: 'CreateTime',
      userId: 'UserId',
      extensions: 'Extensions',
      name: 'Name',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      appId: 'string',
      sign: 'string',
      createTime: 'string',
      userId: 'string',
      extensions: 'string',
      name: 'string',
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponseBodyTraceApps extends $tea.Model {
  type?: string;
  appName?: string;
  updateTime?: number;
  labels?: string[];
  show?: boolean;
  createTime?: number;
  pid?: string;
  appId?: number;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      labels: 'Labels',
      show: 'Show',
      createTime: 'CreateTime',
      pid: 'Pid',
      appId: 'AppId',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      updateTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      show: 'boolean',
      createTime: 'number',
      pid: 'string',
      appId: 'number',
      userId: 'string',
      regionId: 'string',
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
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      total: 'number',
      page: 'number',
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
  updateTime?: number;
  dingRobot?: string;
  webhook?: string;
  email?: string;
  contactId?: number;
  createTime?: number;
  userId?: string;
  contactName?: string;
  systemNoc?: boolean;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      dingRobot: 'DingRobot',
      webhook: 'Webhook',
      email: 'Email',
      contactId: 'ContactId',
      createTime: 'CreateTime',
      userId: 'UserId',
      contactName: 'ContactName',
      systemNoc: 'SystemNoc',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      dingRobot: 'string',
      webhook: 'string',
      email: 'string',
      contactId: 'number',
      createTime: 'number',
      userId: 'string',
      contactName: 'string',
      systemNoc: 'boolean',
      phone: 'string',
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
  updateTime?: number;
  dingRobot?: string;
  email?: string;
  contactId?: number;
  createTime?: number;
  userId?: string;
  contactName?: string;
  systemNoc?: boolean;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      contactId: 'ContactId',
      createTime: 'CreateTime',
      userId: 'UserId',
      contactName: 'ContactName',
      systemNoc: 'SystemNoc',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      dingRobot: 'string',
      email: 'string',
      contactId: 'number',
      createTime: 'number',
      userId: 'string',
      contactName: 'string',
      systemNoc: 'boolean',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseBodyContactGroups extends $tea.Model {
  updateTime?: number;
  contactGroupName?: string;
  contacts?: SearchAlertContactGroupResponseBodyContactGroupsContacts[];
  contactGroupId?: number;
  createTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      contactGroupName: 'ContactGroupName',
      contacts: 'Contacts',
      contactGroupId: 'ContactGroupId',
      createTime: 'CreateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      contactGroupName: 'string',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseBodyContactGroupsContacts },
      contactGroupId: 'number',
      createTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBodyPageBeanAlarmHistories extends $tea.Model {
  alarmTime?: number;
  strategyId?: string;
  alarmResponseCode?: number;
  emails?: string;
  userId?: string;
  alarmSources?: string;
  alarmContent?: string;
  phones?: string;
  alarmType?: number;
  target?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      alarmTime: 'AlarmTime',
      strategyId: 'StrategyId',
      alarmResponseCode: 'AlarmResponseCode',
      emails: 'Emails',
      userId: 'UserId',
      alarmSources: 'AlarmSources',
      alarmContent: 'AlarmContent',
      phones: 'Phones',
      alarmType: 'AlarmType',
      target: 'Target',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTime: 'number',
      strategyId: 'string',
      alarmResponseCode: 'number',
      emails: 'string',
      userId: 'string',
      alarmSources: 'string',
      alarmContent: 'string',
      phones: 'string',
      alarmType: 'number',
      target: 'string',
      id: 'number',
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
  subTitle?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContentSubTitle: 'AlarmContentSubTitle',
      alarmContentTemplate: 'AlarmContentTemplate',
      subTitle: 'SubTitle',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContentSubTitle: 'string',
      alarmContentTemplate: 'string',
      subTitle: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesNotice extends $tea.Model {
  endTime?: number;
  noticeEndTime?: number;
  startTime?: number;
  noticeStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      noticeEndTime: 'NoticeEndTime',
      startTime: 'StartTime',
      noticeStartTime: 'NoticeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      noticeEndTime: 'number',
      startTime: 'number',
      noticeStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules extends $tea.Model {
  measure?: string;
  value?: number;
  aggregates?: string;
  NValue?: number;
  operator?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      measure: 'Measure',
      value: 'Value',
      aggregates: 'Aggregates',
      NValue: 'NValue',
      operator: 'Operator',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measure: 'string',
      value: 'number',
      aggregates: 'string',
      NValue: 'number',
      operator: 'string',
      alias: 'string',
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
  type?: string;
  appGroupId?: string;
  appId?: string;
  pid?: string;
  dimensions?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      pid: 'Pid',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appGroupId: 'string',
      appId: 'string',
      pid: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRules extends $tea.Model {
  status?: string;
  alarmContext?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext;
  updateTime?: number;
  contactGroupIdList?: string;
  notice?: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice;
  createTime?: number;
  alertTitle?: string;
  userId?: string;
  alertVersion?: number;
  alertRule?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule;
  metricParam?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam;
  alertType?: number;
  contactGroupIds?: string;
  config?: string;
  regionId?: string;
  alertLevel?: string;
  alertWay?: string[];
  taskStatus?: string;
  title?: string;
  taskId?: number;
  id?: number;
  alertWays?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      alarmContext: 'AlarmContext',
      updateTime: 'UpdateTime',
      contactGroupIdList: 'ContactGroupIdList',
      notice: 'Notice',
      createTime: 'CreateTime',
      alertTitle: 'AlertTitle',
      userId: 'UserId',
      alertVersion: 'AlertVersion',
      alertRule: 'AlertRule',
      metricParam: 'MetricParam',
      alertType: 'AlertType',
      contactGroupIds: 'ContactGroupIds',
      config: 'Config',
      regionId: 'RegionId',
      alertLevel: 'AlertLevel',
      alertWay: 'AlertWay',
      taskStatus: 'TaskStatus',
      title: 'Title',
      taskId: 'TaskId',
      id: 'Id',
      alertWays: 'AlertWays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      alarmContext: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext,
      updateTime: 'number',
      contactGroupIdList: 'string',
      notice: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice,
      createTime: 'number',
      alertTitle: 'string',
      userId: 'string',
      alertVersion: 'number',
      alertRule: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule,
      metricParam: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam,
      alertType: 'number',
      contactGroupIds: 'string',
      config: 'string',
      regionId: 'string',
      alertLevel: 'string',
      alertWay: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
      title: 'string',
      taskId: 'number',
      id: 'number',
      alertWays: { 'type': 'array', 'itemType': 'string' },
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
  eventTime?: number;
  links?: string[];
  eventLevel?: string;
  alertRule?: string;
  message?: string;
  alertType?: number;
  alertName?: string;
  id?: number;
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      links: 'Links',
      eventLevel: 'EventLevel',
      alertRule: 'AlertRule',
      message: 'Message',
      alertType: 'AlertType',
      alertName: 'AlertName',
      id: 'Id',
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'number',
      links: { 'type': 'array', 'itemType': 'string' },
      eventLevel: 'string',
      alertRule: 'string',
      message: 'string',
      alertType: 'number',
      alertName: 'string',
      id: 'number',
      alertId: 'number',
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
  type?: string;
  appName?: string;
  updateTime?: number;
  createTime?: number;
  appId?: number;
  pid?: string;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      appId: 'AppId',
      pid: 'Pid',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      updateTime: 'number',
      createTime: 'number',
      appId: 'number',
      pid: 'string',
      userId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBodyPageBean extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  retcodeApps?: SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseBodyTraceApps extends $tea.Model {
  type?: string;
  appName?: string;
  updateTime?: number;
  labels?: string[];
  show?: boolean;
  createTime?: number;
  pid?: string;
  appId?: number;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      labels: 'Labels',
      show: 'Show',
      createTime: 'CreateTime',
      pid: 'Pid',
      appId: 'AppId',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      updateTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      show: 'boolean',
      createTime: 'number',
      pid: 'string',
      appId: 'number',
      userId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBodyPageBeanTraceApps extends $tea.Model {
  type?: string;
  appName?: string;
  updateTime?: number;
  labels?: string[];
  show?: boolean;
  createTime?: number;
  pid?: string;
  appId?: number;
  userId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appName: 'AppName',
      updateTime: 'UpdateTime',
      labels: 'Labels',
      show: 'Show',
      createTime: 'CreateTime',
      pid: 'Pid',
      appId: 'AppId',
      userId: 'UserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appName: 'string',
      updateTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      show: 'boolean',
      createTime: 'number',
      pid: 'string',
      appId: 'number',
      userId: 'string',
      regionId: 'string',
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

export class SearchTracesResponseBodyTraceInfos extends $tea.Model {
  operationName?: string;
  serviceIp?: string;
  duration?: number;
  timestamp?: number;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      timestamp: 'Timestamp',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationName: 'string',
      serviceIp: 'string',
      duration: 'number',
      timestamp: 'number',
      serviceName: 'string',
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
  operationName?: string;
  serviceIp?: string;
  duration?: number;
  timestamp?: number;
  serviceName?: string;
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      operationName: 'OperationName',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      timestamp: 'Timestamp',
      serviceName: 'ServiceName',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationName: 'string',
      serviceIp: 'string',
      duration: 'number',
      timestamp: 'number',
      serviceName: 'string',
      traceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponseBodyPageBean extends $tea.Model {
  traceInfos?: SearchTracesByPageResponseBodyPageBeanTraceInfos[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      traceInfos: 'TraceInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceInfos: { 'type': 'array', 'itemType': SearchTracesByPageResponseBodyPageBeanTraceInfos },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
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
      'ap-northeast-1': "arms.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "arms.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "arms.aliyuncs.com",
      'cn-huhehaote': "arms.aliyuncs.com",
      'eu-central-1': "arms.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "arms.ap-southeast-1.aliyuncs.com",
      'me-east-1': "arms.ap-southeast-1.aliyuncs.com",
      'us-east-1': "arms.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "arms.aliyuncs.com",
      'cn-shenzhen-finance-1': "arms.aliyuncs.com",
      'cn-shanghai-finance-1': "arms.aliyuncs.com",
      'cn-north-2-gov-1': "arms.aliyuncs.com",
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGrafanaResponse>(await this.doRPCRequest("AddGrafana", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new AddGrafanaResponse({}));
  }

  async addGrafana(request: AddGrafanaRequest): Promise<AddGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  async addIntegrationWithOptions(request: AddIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddIntegrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddIntegrationResponse>(await this.doRPCRequest("AddIntegration", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new AddIntegrationResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyScenarioResponse>(await this.doRPCRequest("ApplyScenario", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyScenarioResponse({}));
  }

  async applyScenario(request: ApplyScenarioRequest): Promise<ApplyScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  async checkDataConsistencyWithOptions(request: CheckDataConsistencyRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataConsistencyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDataConsistencyResponse>(await this.doRPCRequest("CheckDataConsistency", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDataConsistencyResponse({}));
  }

  async checkDataConsistency(request: CheckDataConsistencyRequest): Promise<CheckDataConsistencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataConsistencyWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.doRPCRequest("CheckServiceLinkedRoleForDeleting", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

  async configAppWithOptions(request: ConfigAppRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigAppResponse>(await this.doRPCRequest("ConfigApp", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigAppResponse({}));
  }

  async configApp(request: ConfigAppRequest): Promise<ConfigAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  async createAlertContactWithOptions(request: CreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlertContactResponse>(await this.doRPCRequest("CreateAlertContact", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlertContactResponse({}));
  }

  async createAlertContact(request: CreateAlertContactRequest): Promise<CreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  async createAlertContactGroupWithOptions(request: CreateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlertContactGroupResponse>(await this.doRPCRequest("CreateAlertContactGroup", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlertContactGroupResponse({}));
  }

  async createAlertContactGroup(request: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  async createRetcodeAppWithOptions(request: CreateRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateRetcodeAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRetcodeAppResponse>(await this.doRPCRequest("CreateRetcodeApp", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRetcodeAppResponse({}));
  }

  async createRetcodeApp(request: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  async createWehookWithOptions(request: CreateWehookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWehookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWehookResponse>(await this.doRPCRequest("CreateWehook", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWehookResponse({}));
  }

  async createWehook(request: CreateWehookRequest): Promise<CreateWehookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWehookWithOptions(request, runtime);
  }

  async deleteAlertContactWithOptions(request: DeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlertContactResponse>(await this.doRPCRequest("DeleteAlertContact", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  async deleteAlertContactGroupWithOptions(request: DeleteAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.doRPCRequest("DeleteAlertContactGroup", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  async deleteAlertRulesWithOptions(request: DeleteAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlertRulesResponse>(await this.doRPCRequest("DeleteAlertRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlertRulesResponse({}));
  }

  async deleteAlertRules(request: DeleteAlertRulesRequest): Promise<DeleteAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  async deleteRetcodeAppWithOptions(request: DeleteRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRetcodeAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRetcodeAppResponse>(await this.doRPCRequest("DeleteRetcodeApp", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRetcodeAppResponse({}));
  }

  async deleteRetcodeApp(request: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  async deleteScenarioWithOptions(request: DeleteScenarioRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScenarioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScenarioResponse>(await this.doRPCRequest("DeleteScenario", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScenarioResponse({}));
  }

  async deleteScenario(request: DeleteScenarioRequest): Promise<DeleteScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  async deleteTraceAppWithOptions(request: DeleteTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTraceAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTraceAppResponse>(await this.doRPCRequest("DeleteTraceApp", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTraceAppResponse({}));
  }

  async deleteTraceApp(request: DeleteTraceAppRequest): Promise<DeleteTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  async describeDispatchRuleWithOptions(request: DescribeDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDispatchRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDispatchRuleResponse>(await this.doRPCRequest("DescribeDispatchRule", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDispatchRuleResponse({}));
  }

  async describeDispatchRule(request: DescribeDispatchRuleRequest): Promise<DescribeDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  async describeTraceLicenseKeyWithOptions(request: DescribeTraceLicenseKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLicenseKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTraceLicenseKeyResponse>(await this.doRPCRequest("DescribeTraceLicenseKey", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTraceLicenseKeyResponse({}));
  }

  async describeTraceLicenseKey(request: DescribeTraceLicenseKeyRequest): Promise<DescribeTraceLicenseKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  async describeTraceLocationWithOptions(request: DescribeTraceLocationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTraceLocationResponse>(await this.doRPCRequest("DescribeTraceLocation", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTraceLocationResponse({}));
  }

  async describeTraceLocation(request: DescribeTraceLocationRequest): Promise<DescribeTraceLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLocationWithOptions(request, runtime);
  }

  async exportPrometheusRulesWithOptions(request: ExportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ExportPrometheusRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportPrometheusRulesResponse>(await this.doRPCRequest("ExportPrometheusRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ExportPrometheusRulesResponse({}));
  }

  async exportPrometheusRules(request: ExportPrometheusRulesRequest): Promise<ExportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportPrometheusRulesWithOptions(request, runtime);
  }

  async getAgentDownloadUrlWithOptions(request: GetAgentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDownloadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentDownloadUrlResponse>(await this.doRPCRequest("GetAgentDownloadUrl", "2019-08-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentDownloadUrlResponse({}));
  }

  async getAgentDownloadUrl(request: GetAgentDownloadUrlRequest): Promise<GetAgentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  async getAppApiByPageWithOptions(request: GetAppApiByPageRequest, runtime: $Util.RuntimeOptions): Promise<GetAppApiByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppApiByPageResponse>(await this.doRPCRequest("GetAppApiByPage", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppApiByPageResponse({}));
  }

  async getAppApiByPage(request: GetAppApiByPageRequest): Promise<GetAppApiByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  async getConsistencySnapshotWithOptions(request: GetConsistencySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<GetConsistencySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConsistencySnapshotResponse>(await this.doRPCRequest("GetConsistencySnapshot", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetConsistencySnapshotResponse({}));
  }

  async getConsistencySnapshot(request: GetConsistencySnapshotRequest): Promise<GetConsistencySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsistencySnapshotWithOptions(request, runtime);
  }

  async getIntegrationTokenWithOptions(request: GetIntegrationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegrationTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIntegrationTokenResponse>(await this.doRPCRequest("GetIntegrationToken", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetIntegrationTokenResponse({}));
  }

  async getIntegrationToken(request: GetIntegrationTokenRequest): Promise<GetIntegrationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegrationTokenWithOptions(request, runtime);
  }

  async getMultipleTraceWithOptions(request: GetMultipleTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetMultipleTraceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMultipleTraceResponse>(await this.doRPCRequest("GetMultipleTrace", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetMultipleTraceResponse({}));
  }

  async getMultipleTrace(request: GetMultipleTraceRequest): Promise<GetMultipleTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  async getPrometheusApiTokenWithOptions(request: GetPrometheusApiTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusApiTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPrometheusApiTokenResponse>(await this.doRPCRequest("GetPrometheusApiToken", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetPrometheusApiTokenResponse({}));
  }

  async getPrometheusApiToken(request: GetPrometheusApiTokenRequest): Promise<GetPrometheusApiTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  async getRetcodeShareUrlWithOptions(request: GetRetcodeShareUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetRetcodeShareUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRetcodeShareUrlResponse>(await this.doRPCRequest("GetRetcodeShareUrl", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetRetcodeShareUrlResponse({}));
  }

  async getRetcodeShareUrl(request: GetRetcodeShareUrlRequest): Promise<GetRetcodeShareUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackResponse>(await this.doRPCRequest("GetStack", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTraceResponse>(await this.doRPCRequest("GetTrace", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async getTraceAppWithOptions(request: GetTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTraceAppResponse>(await this.doRPCRequest("GetTraceApp", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetTraceAppResponse({}));
  }

  async getTraceApp(request: GetTraceAppRequest): Promise<GetTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  async importAppAlertRulesWithOptions(request: ImportAppAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportAppAlertRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportAppAlertRulesResponse>(await this.doRPCRequest("ImportAppAlertRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ImportAppAlertRulesResponse({}));
  }

  async importAppAlertRules(request: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  async importCustomAlertRulesWithOptions(request: ImportCustomAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportCustomAlertRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportCustomAlertRulesResponse>(await this.doRPCRequest("ImportCustomAlertRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ImportCustomAlertRulesResponse({}));
  }

  async importCustomAlertRules(request: ImportCustomAlertRulesRequest): Promise<ImportCustomAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCustomAlertRulesWithOptions(request, runtime);
  }

  async importPrometheusRulesWithOptions(request: ImportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportPrometheusRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportPrometheusRulesResponse>(await this.doRPCRequest("ImportPrometheusRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ImportPrometheusRulesResponse({}));
  }

  async importPrometheusRules(request: ImportPrometheusRulesRequest): Promise<ImportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importPrometheusRulesWithOptions(request, runtime);
  }

  async listClusterFromGrafanaWithOptions(request: ListClusterFromGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterFromGrafanaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterFromGrafanaResponse>(await this.doRPCRequest("ListClusterFromGrafana", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterFromGrafanaResponse({}));
  }

  async listClusterFromGrafana(request: ListClusterFromGrafanaRequest): Promise<ListClusterFromGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  async listDashboardsWithOptions(request: ListDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<ListDashboardsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDashboardsResponse>(await this.doRPCRequest("ListDashboards", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListDashboardsResponse({}));
  }

  async listDashboards(request: ListDashboardsRequest): Promise<ListDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  async listPromClustersWithOptions(request: ListPromClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListPromClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPromClustersResponse>(await this.doRPCRequest("ListPromClusters", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListPromClustersResponse({}));
  }

  async listPromClusters(request: ListPromClustersRequest): Promise<ListPromClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPromClustersWithOptions(request, runtime);
  }

  async listRetcodeAppsWithOptions(request: ListRetcodeAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListRetcodeAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRetcodeAppsResponse>(await this.doRPCRequest("ListRetcodeApps", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListRetcodeAppsResponse({}));
  }

  async listRetcodeApps(request: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  async listScenarioWithOptions(request: ListScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ListScenarioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScenarioResponse>(await this.doRPCRequest("ListScenario", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListScenarioResponse({}));
  }

  async listScenario(request: ListScenarioRequest): Promise<ListScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  async listTraceAppsWithOptions(request: ListTraceAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListTraceAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTraceAppsResponse>(await this.doRPCRequest("ListTraceApps", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListTraceAppsResponse({}));
  }

  async listTraceApps(request: ListTraceAppsRequest): Promise<ListTraceAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
  }

  async openArmsServiceWithOptions(request: OpenArmsServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenArmsServiceResponse>(await this.doRPCRequest("OpenArmsService", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new OpenArmsServiceResponse({}));
  }

  async openArmsService(request: OpenArmsServiceRequest): Promise<OpenArmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceWithOptions(request, runtime);
  }

  async queryDatasetWithOptions(request: QueryDatasetRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDatasetResponse>(await this.doRPCRequest("QueryDataset", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDatasetResponse({}));
  }

  async queryDataset(request: QueryDatasetRequest): Promise<QueryDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetWithOptions(request, runtime);
  }

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMetricResponse>(await this.doRPCRequest("QueryMetric", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  async queryMetricByPageWithOptions(request: QueryMetricByPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMetricByPageResponse>(await this.doRPCRequest("QueryMetricByPage", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMetricByPageResponse({}));
  }

  async queryMetricByPage(request: QueryMetricByPageRequest): Promise<QueryMetricByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  async saveTraceAppConfigWithOptions(request: SaveTraceAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveTraceAppConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTraceAppConfigResponse>(await this.doRPCRequest("SaveTraceAppConfig", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTraceAppConfigResponse({}));
  }

  async saveTraceAppConfig(request: SaveTraceAppConfigRequest): Promise<SaveTraceAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  async searchAlertContactWithOptions(request: SearchAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchAlertContactResponse>(await this.doRPCRequest("SearchAlertContact", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchAlertContactResponse({}));
  }

  async searchAlertContact(request: SearchAlertContactRequest): Promise<SearchAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  async searchAlertContactGroupWithOptions(request: SearchAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchAlertContactGroupResponse>(await this.doRPCRequest("SearchAlertContactGroup", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchAlertContactGroupResponse({}));
  }

  async searchAlertContactGroup(request: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  async searchAlertHistoriesWithOptions(request: SearchAlertHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchAlertHistoriesResponse>(await this.doRPCRequest("SearchAlertHistories", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchAlertHistoriesResponse({}));
  }

  async searchAlertHistories(request: SearchAlertHistoriesRequest): Promise<SearchAlertHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  async searchAlertRulesWithOptions(request: SearchAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchAlertRulesResponse>(await this.doRPCRequest("SearchAlertRules", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchAlertRulesResponse({}));
  }

  async searchAlertRules(request: SearchAlertRulesRequest): Promise<SearchAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  async searchEventsWithOptions(request: SearchEventsRequest, runtime: $Util.RuntimeOptions): Promise<SearchEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchEventsResponse>(await this.doRPCRequest("SearchEvents", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchEventsResponse({}));
  }

  async searchEvents(request: SearchEventsRequest): Promise<SearchEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  async searchRetcodeAppByPageWithOptions(request: SearchRetcodeAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchRetcodeAppByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchRetcodeAppByPageResponse>(await this.doRPCRequest("SearchRetcodeAppByPage", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchRetcodeAppByPageResponse({}));
  }

  async searchRetcodeAppByPage(request: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  async searchTraceAppByNameWithOptions(request: SearchTraceAppByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTraceAppByNameResponse>(await this.doRPCRequest("SearchTraceAppByName", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTraceAppByNameResponse({}));
  }

  async searchTraceAppByName(request: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  async searchTraceAppByPageWithOptions(request: SearchTraceAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTraceAppByPageResponse>(await this.doRPCRequest("SearchTraceAppByPage", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTraceAppByPageResponse({}));
  }

  async searchTraceAppByPage(request: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTracesResponse>(await this.doRPCRequest("SearchTraces", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  async searchTracesByPageWithOptions(request: SearchTracesByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTracesByPageResponse>(await this.doRPCRequest("SearchTracesByPage", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTracesByPageResponse({}));
  }

  async searchTracesByPage(request: SearchTracesByPageRequest): Promise<SearchTracesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  async sendCustomIncidentsWithOptions(request: SendCustomIncidentsRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomIncidentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCustomIncidentsResponse>(await this.doRPCRequest("SendCustomIncidents", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SendCustomIncidentsResponse({}));
  }

  async sendCustomIncidents(request: SendCustomIncidentsRequest): Promise<SendCustomIncidentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomIncidentsWithOptions(request, runtime);
  }

  async sendMseIncidentWithOptions(request: SendMseIncidentRequest, runtime: $Util.RuntimeOptions): Promise<SendMseIncidentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendMseIncidentResponse>(await this.doRPCRequest("SendMseIncident", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SendMseIncidentResponse({}));
  }

  async sendMseIncident(request: SendMseIncidentRequest): Promise<SendMseIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMseIncidentWithOptions(request, runtime);
  }

  async setRetcodeShareStatusWithOptions(request: SetRetcodeShareStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetRetcodeShareStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRetcodeShareStatusResponse>(await this.doRPCRequest("SetRetcodeShareStatus", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new SetRetcodeShareStatusResponse({}));
  }

  async setRetcodeShareStatus(request: SetRetcodeShareStatusRequest): Promise<SetRetcodeShareStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  async startAlertWithOptions(request: StartAlertRequest, runtime: $Util.RuntimeOptions): Promise<StartAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartAlertResponse>(await this.doRPCRequest("StartAlert", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new StartAlertResponse({}));
  }

  async startAlert(request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  async stopAlertWithOptions(request: StopAlertRequest, runtime: $Util.RuntimeOptions): Promise<StopAlertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopAlertResponse>(await this.doRPCRequest("StopAlert", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new StopAlertResponse({}));
  }

  async stopAlert(request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  async updateAlertContactWithOptions(request: UpdateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAlertContactResponse>(await this.doRPCRequest("UpdateAlertContact", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAlertContactResponse({}));
  }

  async updateAlertContact(request: UpdateAlertContactRequest): Promise<UpdateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  async updateAlertContactGroupWithOptions(request: UpdateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAlertContactGroupResponse>(await this.doRPCRequest("UpdateAlertContactGroup", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAlertContactGroupResponse({}));
  }

  async updateAlertContactGroup(request: UpdateAlertContactGroupRequest): Promise<UpdateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  async updateAlertRuleWithOptions(request: UpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAlertRuleResponse>(await this.doRPCRequest("UpdateAlertRule", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAlertRuleResponse({}));
  }

  async updateAlertRule(request: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  async updateWebhookWithOptions(request: UpdateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebhookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateWebhookResponse>(await this.doRPCRequest("UpdateWebhook", "2019-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateWebhookResponse({}));
  }

  async updateWebhook(request: UpdateWebhookRequest): Promise<UpdateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

}
