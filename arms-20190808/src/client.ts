// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddASMIntegrationRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
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

export class AddASMIntegrationResponse extends $tea.Model {
  requestId: string;
  state: boolean;
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

export class AddAliClusterIdsToPrometheusGlobalViewRequest extends $tea.Model {
  clusterIds: string;
  globalViewClusterId: string;
  groupName: string;
  regionId: string;
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

export class AddAliClusterIdsToPrometheusGlobalViewResponse extends $tea.Model {
  requestId: string;
  data: AddAliClusterIdsToPrometheusGlobalViewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddAliClusterIdsToPrometheusGlobalViewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaRequest extends $tea.Model {
  clusterId: string;
  integration: string;
  regionId: string;
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

export class AddGrafanaResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class AddIntegrationRequest extends $tea.Model {
  clusterId: string;
  integration: string;
  regionId: string;
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

export class AddIntegrationResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class AddPrometheusGlobalViewRequest extends $tea.Model {
  clusters: string;
  groupName: string;
  regionId: string;
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

export class AddPrometheusGlobalViewResponse extends $tea.Model {
  requestId: string;
  data: AddPrometheusGlobalViewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddPrometheusGlobalViewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsRequest extends $tea.Model {
  clusterIds: string;
  groupName: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsResponse extends $tea.Model {
  requestId: string;
  data: AddPrometheusGlobalViewByAliClusterIdsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddPrometheusGlobalViewByAliClusterIdsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordingRuleRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
  ruleYaml: string;
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

export class AddRecordingRuleResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class AppendInstancesToPrometheusGlobalViewRequest extends $tea.Model {
  clusters: string;
  globalViewClusterId: string;
  groupName: string;
  regionId: string;
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

export class AppendInstancesToPrometheusGlobalViewResponse extends $tea.Model {
  requestId: string;
  data: AppendInstancesToPrometheusGlobalViewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AppendInstancesToPrometheusGlobalViewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioRequest extends $tea.Model {
  appId: string;
  config: { [key: string]: any };
  name: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  snDump?: boolean;
  snForce?: boolean;
  snStat?: boolean;
  snTransfer?: boolean;
  updateOption: boolean;
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
  appId: string;
  configShrink: string;
  name: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  snDump?: boolean;
  snForce?: boolean;
  snStat?: boolean;
  snTransfer?: boolean;
  updateOption: boolean;
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

export class ApplyScenarioResponse extends $tea.Model {
  requestId: string;
  result: string;
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

export class BatchDeleteAlertContactRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteAlertContactResponse extends $tea.Model {
  requestId: string;
  result: BatchDeleteAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchDeleteAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchVerifyLinkRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchVerifyLinkResponse extends $tea.Model {
  requestId: string;
  result: BatchVerifyLinkResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchVerifyLinkResponseResult,
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

export class CMonitorAlertEventResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class CheckServiceStatusRequest extends $tea.Model {
  regionId?: string;
  svcCode: string;
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

export class CheckServiceStatusResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class ConfigAppRequest extends $tea.Model {
  appIds: string;
  enable?: string;
  regionId: string;
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

export class ConfigAppResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class CreateAlertContactRequest extends $tea.Model {
  contactName?: string;
  dingRobotWebhookUrl?: string;
  email?: string;
  phoneNum?: string;
  regionId: string;
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

export class CreateAlertContactResponse extends $tea.Model {
  contactId: string;
  requestId: string;
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

export class CreateAlertContactGroupRequest extends $tea.Model {
  contactGroupName: string;
  contactIds?: string;
  regionId: string;
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

export class CreateAlertContactGroupResponse extends $tea.Model {
  contactGroupId: string;
  requestId: string;
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

export class CreateContactScheduleRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactScheduleResponse extends $tea.Model {
  requestId: string;
  result: CreateContactScheduleResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateContactScheduleResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleRequest extends $tea.Model {
  dispatchRule: string;
  regionId: string;
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

export class CreateDispatchRuleResponse extends $tea.Model {
  dispatchRuleId: number;
  requestId: string;
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

export class CreateEscalationRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationResponse extends $tea.Model {
  requestId: string;
  result: CreateEscalationResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateEscalationResponseResult,
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
  alertName: string;
  alertRuleContent?: string;
  alertStatus?: string;
  alertType: string;
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
  regionId: string;
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

export class CreateOrUpdateAlertRuleResponse extends $tea.Model {
  requestId: string;
  alertRule: CreateOrUpdateAlertRuleResponseAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertRule: 'AlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertRule: CreateOrUpdateAlertRuleResponseAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactRequest extends $tea.Model {
  contactId?: number;
  contactName: string;
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

export class CreateOrUpdateContactResponse extends $tea.Model {
  requestId: string;
  alertContact: CreateOrUpdateContactResponseAlertContact;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertContact: 'AlertContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertContact: CreateOrUpdateContactResponseAlertContact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupRequest extends $tea.Model {
  contactGroupId?: number;
  contactGroupName: string;
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

export class CreateOrUpdateContactGroupResponse extends $tea.Model {
  requestId: string;
  alertContactGroup: CreateOrUpdateContactGroupResponseAlertContactGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertContactGroup: 'AlertContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertContactGroup: CreateOrUpdateContactGroupResponseAlertContactGroup,
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

export class CreateOrUpdateEventBridgeIntegrationResponse extends $tea.Model {
  requestId: string;
  eventBridgeIntegration: CreateOrUpdateEventBridgeIntegrationResponseEventBridgeIntegration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventBridgeIntegration: 'EventBridgeIntegration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventBridgeIntegration: CreateOrUpdateEventBridgeIntegrationResponseEventBridgeIntegration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotRequest extends $tea.Model {
  dailyNoc?: boolean;
  dailyNocTime?: string;
  robotAddress: string;
  robotId?: number;
  robotName: string;
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

export class CreateOrUpdateIMRobotResponse extends $tea.Model {
  requestId: string;
  alertRobot: CreateOrUpdateIMRobotResponseAlertRobot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertRobot: 'AlertRobot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertRobot: CreateOrUpdateIMRobotResponseAlertRobot,
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
  name: string;
  notifyRule: string;
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

export class CreateOrUpdateNotificationPolicyResponse extends $tea.Model {
  requestId: string;
  notificationPolicy: CreateOrUpdateNotificationPolicyResponseNotificationPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      notificationPolicy: 'NotificationPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      notificationPolicy: CreateOrUpdateNotificationPolicyResponseNotificationPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyRequest extends $tea.Model {
  id?: number;
  matchingRules?: string;
  name: string;
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

export class CreateOrUpdateSilencePolicyResponse extends $tea.Model {
  requestId: string;
  silencePolicy: CreateOrUpdateSilencePolicyResponseSilencePolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      silencePolicy: 'SilencePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      silencePolicy: CreateOrUpdateSilencePolicyResponseSilencePolicy,
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
  method: string;
  recoverBody?: string;
  url: string;
  webhookId?: number;
  webhookName: string;
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

export class CreateOrUpdateWebhookContactResponse extends $tea.Model {
  requestId: string;
  webhookContact: CreateOrUpdateWebhookContactResponseWebhookContact;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webhookContact: 'WebhookContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webhookContact: CreateOrUpdateWebhookContactResponseWebhookContact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleRequest extends $tea.Model {
  alertName: string;
  annotations?: string;
  clusterId: string;
  dispatchRuleId?: number;
  duration: string;
  expression: string;
  labels?: string;
  message: string;
  notifyType?: string;
  regionId: string;
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

export class CreatePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: CreatePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: CreatePrometheusAlertRuleResponsePrometheusAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppRequest extends $tea.Model {
  regionId: string;
  retcodeAppName: string;
  retcodeAppType: string;
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

export class CreateRetcodeAppResponse extends $tea.Model {
  requestId: string;
  retcodeAppDataBean: CreateRetcodeAppResponseRetcodeAppDataBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeAppDataBean: 'RetcodeAppDataBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeAppDataBean: CreateRetcodeAppResponseRetcodeAppDataBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookRequest extends $tea.Model {
  body: string;
  contactName: string;
  httpHeaders?: string;
  httpParams?: string;
  method: string;
  recoverBody?: string;
  regionId: string;
  url: string;
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

export class CreateWebhookResponse extends $tea.Model {
  contactId: string;
  requestId: string;
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

export class DeleteAlertContactRequest extends $tea.Model {
  contactId: number;
  regionId: string;
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

export class DeleteAlertContactResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteAlertContactGroupRequest extends $tea.Model {
  contactGroupId: number;
  regionId: string;
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

export class DeleteAlertContactGroupResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteAlertRuleRequest extends $tea.Model {
  alertId: number;
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

export class DeleteAlertRuleResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteAlertRulesRequest extends $tea.Model {
  alertIds: string;
  regionId: string;
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

export class DeleteAlertRulesResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteCmsExporterRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
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

export class DeleteCmsExporterResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class DeleteContactRequest extends $tea.Model {
  contactId: number;
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

export class DeleteContactResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteContactGroupRequest extends $tea.Model {
  contactGroupId: number;
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

export class DeleteContactGroupResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteContactGroupInContactRequest extends $tea.Model {
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

export class DeleteContactGroupInContactResponse extends $tea.Model {
  requestId: string;
  result: DeleteContactGroupInContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteContactGroupInContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactScheduleRequest extends $tea.Model {
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

export class DeleteContactScheduleResponse extends $tea.Model {
  requestId: string;
  result: DeleteContactScheduleResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteContactScheduleResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDispatchRuleRequest extends $tea.Model {
  id: string;
  regionId: string;
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

export class DeleteDispatchRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
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

export class DeleteEscalationRequest extends $tea.Model {
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

export class DeleteEscalationResponse extends $tea.Model {
  requestId: string;
  result: DeleteEscalationResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteEscalationResponseResult,
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

export class DeleteEventBridgeIntegrationResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteIMRobotRequest extends $tea.Model {
  robotId: number;
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

export class DeleteIMRobotResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteIntegrationRequest extends $tea.Model {
  clusterId: string;
  integration: string;
  regionId: string;
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

export class DeleteIntegrationResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class DeleteNotificationPolicyRequest extends $tea.Model {
  id: number;
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

export class DeleteNotificationPolicyResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeletePrometheusAlertRuleRequest extends $tea.Model {
  alertId: number;
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

export class DeletePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
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

export class DeletePrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId: string;
  regionId: string;
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

export class DeletePrometheusGlobalViewResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class DeleteRetcodeAppRequest extends $tea.Model {
  appId: string;
  regionId: string;
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

export class DeleteRetcodeAppResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class DeleteScenarioRequest extends $tea.Model {
  regionId?: string;
  scenarioId: number;
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

export class DeleteScenarioResponse extends $tea.Model {
  requestId: string;
  result: boolean;
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

export class DeleteSilencePolicyRequest extends $tea.Model {
  id: number;
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

export class DeleteSilencePolicyResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DeleteTraceAppRequest extends $tea.Model {
  appId?: string;
  pid: string;
  regionId: string;
  type: string;
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

export class DeleteTraceAppResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class DeleteWebhookContactRequest extends $tea.Model {
  webhookId: number;
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

export class DeleteWebhookContactResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class DescribeContactGroupsRequest extends $tea.Model {
  contactGroupName?: string;
  isDetail?: boolean;
  page: number;
  size: number;
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

export class DescribeContactGroupsResponse extends $tea.Model {
  requestId: string;
  pageBean: DescribeContactGroupsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: DescribeContactGroupsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsRequest extends $tea.Model {
  contactName?: string;
  email?: string;
  page: number;
  phone?: string;
  size: number;
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

export class DescribeContactsResponse extends $tea.Model {
  requestId: string;
  pageBean: DescribeContactsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: DescribeContactsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleRequest extends $tea.Model {
  id: string;
  regionId: string;
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

export class DescribeDispatchRuleResponse extends $tea.Model {
  requestId: string;
  dispatchRule: DescribeDispatchRuleResponseDispatchRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRule: 'DispatchRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRule: DescribeDispatchRuleResponseDispatchRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsRequest extends $tea.Model {
  page: number;
  robotName?: string;
  size: number;
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

export class DescribeIMRobotsResponse extends $tea.Model {
  requestId: string;
  pageBean: DescribeIMRobotsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: DescribeIMRobotsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleRequest extends $tea.Model {
  alertId: number;
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

export class DescribePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: DescribePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: DescribePrometheusAlertRuleResponsePrometheusAlertRule,
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

export class DescribeTraceLicenseKeyResponse extends $tea.Model {
  licenseKey: string;
  requestId: string;
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

export class DescribeWebhookContactsRequest extends $tea.Model {
  page: number;
  size: number;
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

export class DescribeWebhookContactsResponse extends $tea.Model {
  requestId: string;
  pageBean: DescribeWebhookContactsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: DescribeWebhookContactsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExploreTraceRequest extends $tea.Model {
  attributes?: ExploreTraceRequestAttributes[];
  endTime?: number;
  kind?: string;
  maxDuration?: number;
  minDuration?: number;
  page?: number;
  pageSize?: number;
  regionId?: string;
  selectedField?: string;
  serviceIp?: string;
  serviceName?: string;
  spanName?: string;
  startTime?: number;
  statusCode?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      endTime: 'EndTime',
      kind: 'Kind',
      maxDuration: 'MaxDuration',
      minDuration: 'MinDuration',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      selectedField: 'SelectedField',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanName: 'SpanName',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ExploreTraceRequestAttributes },
      endTime: 'number',
      kind: 'string',
      maxDuration: 'number',
      minDuration: 'number',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      selectedField: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      spanName: 'string',
      startTime: 'number',
      statusCode: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExploreTraceResponse extends $tea.Model {
  requestId: string;
  spanVOs: ExploreTraceResponseSpanVOs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spanVOs: 'SpanVOs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spanVOs: { 'type': 'array', 'itemType': ExploreTraceResponseSpanVOs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDownloadUrlRequest extends $tea.Model {
  regionId: string;
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

export class GetAgentDownloadUrlResponse extends $tea.Model {
  armsAgentDownloadUrl: string;
  requestId: string;
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

export class GetAlertRulesRequest extends $tea.Model {
  alertIds?: string;
  alertNames?: string;
  alertStatus?: string;
  alertType: string;
  page: number;
  regionId: string;
  size: number;
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

export class GetAlertRulesResponse extends $tea.Model {
  requestId: string;
  pageBean: GetAlertRulesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: GetAlertRulesResponsePageBean,
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
  PId: string;
  pageSize?: number;
  regionId: string;
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

export class GetAppApiByPageResponse extends $tea.Model {
  code: number;
  message: string;
  requestId: string;
  success: boolean;
  data: GetAppApiByPageResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: GetAppApiByPageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
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

export class GetAuthTokenResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class GetClusterInfoRequest extends $tea.Model {
  clusterId: string;
  queryUserId: string;
  regionId: string;
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

export class GetClusterInfoResponse extends $tea.Model {
  requestId: string;
  data: GetClusterInfoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetClusterInfoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterStateRequest extends $tea.Model {
  clusterId?: string;
  puserId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      puserId: 'PuserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      puserId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterStateResponse extends $tea.Model {
  requestId: string;
  result: GetClusterStateResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClusterStateResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactScheduleDetailRequest extends $tea.Model {
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

export class GetContactScheduleDetailResponse extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailRequest extends $tea.Model {
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

export class GetEscalationDetailResponse extends $tea.Model {
  requestId: string;
  result: GetEscalationDetailResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetEscalationDetailResponseResult,
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

export class GetEstimateFeeInfoResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class GetExploreUrlRequest extends $tea.Model {
  clusterId: string;
  expression?: string;
  regionId?: string;
  type: string;
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

export class GetExploreUrlResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class GetIntegrationStateRequest extends $tea.Model {
  clusterId: string;
  integration: string;
  regionId: string;
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

export class GetIntegrationStateResponse extends $tea.Model {
  requestId: string;
  state: boolean;
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

export class GetMultipleTraceRequest extends $tea.Model {
  regionId: string;
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

export class GetMultipleTraceResponse extends $tea.Model {
  requestId: string;
  multiCallChainInfos: GetMultipleTraceResponseMultiCallChainInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      multiCallChainInfos: 'MultiCallChainInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      multiCallChainInfos: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusApiTokenRequest extends $tea.Model {
  regionId: string;
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

export class GetPrometheusApiTokenResponse extends $tea.Model {
  requestId: string;
  token: string;
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

export class GetPrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId: string;
  regionId: string;
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

export class GetPrometheusGlobalViewResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class GetRecordingRuleRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
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

export class GetRecordingRuleResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class GetRetcodeShareUrlRequest extends $tea.Model {
  pid: string;
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

export class GetRetcodeShareUrlResponse extends $tea.Model {
  requestId: string;
  url: string;
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

export class GetStackRequest extends $tea.Model {
  pid?: string;
  regionId: string;
  rpcID: string;
  traceID: string;
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

export class GetStackResponse extends $tea.Model {
  requestId: string;
  stackInfo: GetStackResponseStackInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: { 'type': 'array', 'itemType': GetStackResponseStackInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  endTime?: number;
  regionId: string;
  startTime?: number;
  traceID: string;
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

export class GetTraceResponse extends $tea.Model {
  requestId: string;
  spans: GetTraceResponseSpans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spans: { 'type': 'array', 'itemType': GetTraceResponseSpans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppRequest extends $tea.Model {
  pid: string;
  regionId: string;
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

export class GetTraceAppResponse extends $tea.Model {
  requestId: string;
  traceApp: GetTraceAppResponseTraceApp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApp: 'TraceApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApp: GetTraceAppResponseTraceApp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCommercialStatusRequest extends $tea.Model {
  parentId?: string;
  targetUserId?: string;
  userId: string;
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

export class GetUserCommercialStatusResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class ImportAppAlertRulesRequest extends $tea.Model {
  contactGroupIds?: string;
  isAutoStart?: boolean;
  pids: string;
  regionId: string;
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

export class ImportAppAlertRulesResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class InnerAddAlertContactReturIdRequest extends $tea.Model {
  contactName?: string;
  dailyNoc?: boolean;
  dailyNocTime?: string;
  dingRobot?: string;
  email?: string;
  isVerify?: boolean;
  phone?: string;
  proxyUserId?: string;
  systemNoc?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      isVerify: 'IsVerify',
      phone: 'Phone',
      proxyUserId: 'ProxyUserId',
      systemNoc: 'SystemNoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingRobot: 'string',
      email: 'string',
      isVerify: 'boolean',
      phone: 'string',
      proxyUserId: 'string',
      systemNoc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerAddAlertContactReturIdResponse extends $tea.Model {
  requestId: string;
  alertContact: InnerAddAlertContactReturIdResponseAlertContact;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertContact: 'AlertContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertContact: InnerAddAlertContactReturIdResponseAlertContact,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertContactRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertContactResponse extends $tea.Model {
  requestId: string;
  result: InnerCreateAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerCreateAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertWebhookRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertWebhookResponse extends $tea.Model {
  requestId: string;
  result: InnerCreateAlertWebhookResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerCreateAlertWebhookResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateContactGroupRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateContactGroupResponse extends $tea.Model {
  requestId: string;
  result: InnerCreateContactGroupResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerCreateContactGroupResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateEscalationReturnIdRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateEscalationReturnIdResponse extends $tea.Model {
  requestId: string;
  result: InnerCreateEscalationReturnIdResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerCreateEscalationReturnIdResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateIMRobotRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateIMRobotResponse extends $tea.Model {
  requestId: string;
  result: InnerCreateIMRobotResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerCreateIMRobotResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteAlertContactRequest extends $tea.Model {
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

export class InnerDeleteAlertContactResponse extends $tea.Model {
  requestId: string;
  result: InnerDeleteAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerDeleteAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteContactGroupRequest extends $tea.Model {
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

export class InnerDeleteContactGroupResponse extends $tea.Model {
  requestId: string;
  result: InnerDeleteContactGroupResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerDeleteContactGroupResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteIMRobotRequest extends $tea.Model {
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

export class InnerDeleteIMRobotResponse extends $tea.Model {
  requestId: string;
  result: InnerDeleteIMRobotResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerDeleteIMRobotResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFetchContactRequest extends $tea.Model {
  contactId?: number;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFetchContactResponse extends $tea.Model {
  requestId: string;
  result: InnerFetchContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerFetchContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFindContactIdRequest extends $tea.Model {
  email?: string;
  name?: string;
  phone?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      phone: 'Phone',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      phone: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFindContactIdResponse extends $tea.Model {
  requestId: string;
  result: InnerFindContactIdResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerFindContactIdResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSendNocMessageRequest extends $tea.Model {
  bodyStr?: string;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSendNocMessageResponse extends $tea.Model {
  requestId: string;
  result: InnerSendNocMessageResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerSendNocMessageResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertContactRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertContactResponse extends $tea.Model {
  requestId: string;
  result: InnerUpdateAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerUpdateAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertWebhookRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertWebhookResponse extends $tea.Model {
  requestId: string;
  result: InnerUpdateAlertWebhookResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerUpdateAlertWebhookResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateContactGroupRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateContactGroupResponse extends $tea.Model {
  requestId: string;
  result: InnerUpdateContactGroupResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerUpdateContactGroupResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateIMRobotRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateIMRobotResponse extends $tea.Model {
  requestId: string;
  result: InnerUpdateIMRobotResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerUpdateIMRobotResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerVerifyContactRequest extends $tea.Model {
  contactId?: number;
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerVerifyContactResponse extends $tea.Model {
  requestId: string;
  result: InnerVerifyContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InnerVerifyContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCmsExporterRequest extends $tea.Model {
  clusterId: string;
  cmsArgs: string;
  enableTag?: boolean;
  regionId: string;
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

export class InstallCmsExporterResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class InstallManagedPrometheusResponse extends $tea.Model {
  code: number;
  data: string;
  message: string;
  requestId: string;
  success: boolean;
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

export class ListActivatedAlertsRequest extends $tea.Model {
  currentPage: number;
  filter?: string;
  pageSize: number;
  regionId: string;
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

export class ListActivatedAlertsResponse extends $tea.Model {
  requestId: string;
  page: ListActivatedAlertsResponsePage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      page: ListActivatedAlertsResponsePage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactRequest extends $tea.Model {
  page: number;
  queryParam?: string;
  queryType: string;
  size: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      queryParam: 'QueryParam',
      queryType: 'QueryType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      queryParam: 'string',
      queryType: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactResponse extends $tea.Model {
  requestId: string;
  result: ListAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactGroupRequest extends $tea.Model {
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

export class ListAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  result: ListAlertContactGroupResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListAlertContactGroupResponseResult,
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
  page: number;
  severity?: string;
  showActivities?: boolean;
  showEvents?: boolean;
  size: number;
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

export class ListAlertsResponse extends $tea.Model {
  requestId: string;
  pageBean: ListAlertsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListAlertsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAlertContactRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAlertContactResponse extends $tea.Model {
  requestId: string;
  result: ListAllAlertContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListAllAlertContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllIMRobotRequest extends $tea.Model {
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

export class ListAllIMRobotResponse extends $tea.Model {
  requestId: string;
  result: ListAllIMRobotResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListAllIMRobotResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaRequest extends $tea.Model {
  regionId: string;
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

export class ListClusterFromGrafanaResponse extends $tea.Model {
  requestId: string;
  promClusterList: ListClusterFromGrafanaResponsePromClusterList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promClusterList: 'PromClusterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promClusterList: { 'type': 'array', 'itemType': ListClusterFromGrafanaResponsePromClusterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesRequest extends $tea.Model {
  clusterId: string;
  regionId: string;
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

export class ListCmsInstancesResponse extends $tea.Model {
  requestId: string;
  data: ListCmsInstancesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListCmsInstancesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactGroupInContactRequest extends $tea.Model {
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

export class ListContactGroupInContactResponse extends $tea.Model {
  requestId: string;
  result: ListContactGroupInContactResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListContactGroupInContactResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactScheduleRequest extends $tea.Model {
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

export class ListContactScheduleResponse extends $tea.Model {
  requestId: string;
  result: ListContactScheduleResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListContactScheduleResponseResult,
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
  product?: string;
  recreateSwitch?: boolean;
  regionId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      dashboardName: 'DashboardName',
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

export class ListDashboardsResponse extends $tea.Model {
  requestId: string;
  dashboardVos: ListDashboardsResponseDashboardVos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboardVos: 'DashboardVos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboardVos: { 'type': 'array', 'itemType': ListDashboardsResponseDashboardVos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleRequest extends $tea.Model {
  name?: string;
  regionId: string;
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

export class ListDispatchRuleResponse extends $tea.Model {
  requestId: string;
  dispatchRules: ListDispatchRuleResponseDispatchRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRules: 'DispatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRules: { 'type': 'array', 'itemType': ListDispatchRuleResponseDispatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationRequest extends $tea.Model {
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

export class ListEscalationResponse extends $tea.Model {
  requestId: string;
  result: ListEscalationResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListEscalationResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesRequest extends $tea.Model {
  name?: string;
  page: number;
  size: number;
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

export class ListEscalationPoliciesResponse extends $tea.Model {
  requestId: string;
  pageBean: ListEscalationPoliciesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListEscalationPoliciesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsRequest extends $tea.Model {
  name?: string;
  page: number;
  size: number;
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

export class ListEventBridgeIntegrationsResponse extends $tea.Model {
  requestId: string;
  pageBean: ListEventBridgeIntegrationsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListEventBridgeIntegrationsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIMRobotRequest extends $tea.Model {
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

export class ListIMRobotResponse extends $tea.Model {
  requestId: string;
  result: ListIMRobotResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListIMRobotResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesRequest extends $tea.Model {
  isDetail?: boolean;
  name?: string;
  page: number;
  size: number;
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

export class ListNotificationPoliciesResponse extends $tea.Model {
  requestId: string;
  pageBean: ListNotificationPoliciesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListNotificationPoliciesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesRequest extends $tea.Model {
  name?: string;
  page: number;
  size: number;
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

export class ListOnCallSchedulesResponse extends $tea.Model {
  requestId: string;
  pageBean: ListOnCallSchedulesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListOnCallSchedulesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesRequest extends $tea.Model {
  clusterId: string;
  matchExpressions?: string;
  name?: string;
  regionId: string;
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

export class ListPrometheusAlertRulesResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRules: ListPrometheusAlertRulesResponsePrometheusAlertRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRules: 'PrometheusAlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRules: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesRequest extends $tea.Model {
  clusterId?: string;
  regionId: string;
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

export class ListPrometheusAlertTemplatesResponse extends $tea.Model {
  requestId: string;
  prometheusAlertTemplates: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertTemplates: 'PrometheusAlertTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertTemplates: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusGlobalViewRequest extends $tea.Model {
  regionId: string;
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

export class ListPrometheusGlobalViewResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class ListRetcodeAppsRequest extends $tea.Model {
  regionId: string;
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

export class ListRetcodeAppsResponse extends $tea.Model {
  requestId: string;
  retcodeApps: ListRetcodeAppsResponseRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApps: { 'type': 'array', 'itemType': ListRetcodeAppsResponseRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioRequest extends $tea.Model {
  appId: string;
  name: string;
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

export class ListScenarioResponse extends $tea.Model {
  requestId: string;
  armsScenarios: ListScenarioResponseArmsScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      armsScenarios: 'ArmsScenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      armsScenarios: { 'type': 'array', 'itemType': ListScenarioResponseArmsScenarios },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesRequest extends $tea.Model {
  isDetail?: boolean;
  name?: string;
  page: number;
  size: number;
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

export class ListSilencePoliciesResponse extends $tea.Model {
  requestId: string;
  pageBean: ListSilencePoliciesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: ListSilencePoliciesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  resourceId: string[];
  resourceType: string;
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

export class ListTagResourcesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  tagResources: ListTagResourcesResponseTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsRequest extends $tea.Model {
  regionId: string;
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

export class ListTraceAppsResponse extends $tea.Model {
  code: number;
  message: string;
  requestId: string;
  success: boolean;
  traceApps: ListTraceAppsResponseTraceApps[];
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
      traceApps: { 'type': 'array', 'itemType': ListTraceAppsResponseTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageGetRecordingRuleRequest extends $tea.Model {
  clusterId: string;
  queryUserId: string;
  regionId: string;
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

export class ManageGetRecordingRuleResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class ManageRecordingRuleRequest extends $tea.Model {
  clusterId: string;
  queryUserId: string;
  regionId: string;
  ruleYaml: string;
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

export class ManageRecordingRuleResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class OpenArmsDefaultSLRRequest extends $tea.Model {
  regionId: string;
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

export class OpenArmsDefaultSLRResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class OpenArmsServiceRequest extends $tea.Model {
  ownerId?: number;
  type: string;
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

export class OpenArmsServiceResponse extends $tea.Model {
  orderId: string;
  requestId: string;
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

export class OpenArmsServiceSecondVersionRequest extends $tea.Model {
  regionId: string;
  type: string;
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

export class OpenArmsServiceSecondVersionResponse extends $tea.Model {
  orderId: string;
  requestId: string;
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

export class OpenVClusterRequest extends $tea.Model {
  clusterType: string;
  length?: number;
  product?: string;
  recreateSwitch?: boolean;
  regionId: string;
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

export class OpenVClusterResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class OpenXtraceDefaultSLRRequest extends $tea.Model {
  regionId: string;
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

export class OpenXtraceDefaultSLRResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class QueryDatasetRequest extends $tea.Model {
  datasetId: number;
  dateStr?: string;
  dimensions?: QueryDatasetRequestDimensions[];
  hungryMode?: boolean;
  intervalInSec: number;
  isDrillDown?: boolean;
  limit?: number;
  maxTime: number;
  measures?: string[];
  minTime: number;
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

export class QueryDatasetResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class QueryMetricRequest extends $tea.Model {
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  dimensions?: string[];
  endTime: number;
  filters?: QueryMetricRequestFilters[];
  intervalInSec?: number;
  limit?: number;
  measures: string[];
  metric: string;
  order?: string;
  orderBy?: string;
  proxyUserId?: string;
  startTime: number;
  zeroStrategy?: string;
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
      zeroStrategy: 'ZeroStrategy',
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
      zeroStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class QueryMetricByPageRequest extends $tea.Model {
  currentPage?: number;
  customFilters?: string[];
  dimensions?: string[];
  endTime: number;
  filters?: QueryMetricByPageRequestFilters[];
  intervalInSec?: number;
  measures?: string[];
  metric: string;
  order?: string;
  orderBy?: string;
  pageSize?: number;
  startTime: number;
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

export class QueryMetricByPageResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  data: QueryMetricByPageResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: QueryMetricByPageResponseData,
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

export class QueryPromInstallStatusResponse extends $tea.Model {
  requestId: string;
  data: QueryPromInstallStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryPromInstallStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReleaseMetricRequest extends $tea.Model {
  changeOrderId: string;
  createTime?: number;
  metricType?: string;
  pid: string;
  proxyUserId?: string;
  releaseEndTime: number;
  releaseStartTime: number;
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

export class QueryReleaseMetricResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class QueryTracesRequest extends $tea.Model {
  endTime?: number;
  regionId?: string;
  startTime?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      startTime: 'number',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracesResponse extends $tea.Model {
  requestId: string;
  traceLists: QueryTracesResponseTraceLists[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceLists: 'TraceLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceLists: { 'type': 'array', 'itemType': QueryTracesResponseTraceLists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewRequest extends $tea.Model {
  clusterIds: string;
  globalViewClusterId: string;
  groupName: string;
  regionId: string;
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

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponse extends $tea.Model {
  requestId: string;
  data: RemoveAliClusterIdsFromPrometheusGlobalViewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RemoveAliClusterIdsFromPrometheusGlobalViewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSourcesFromPrometheusGlobalViewRequest extends $tea.Model {
  globalViewClusterId: string;
  groupName: string;
  regionId: string;
  sourceNames: string;
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

export class RemoveSourcesFromPrometheusGlobalViewResponse extends $tea.Model {
  requestId: string;
  data: RemoveSourcesFromPrometheusGlobalViewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RemoveSourcesFromPrometheusGlobalViewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequest extends $tea.Model {
  pid: string;
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

export class SaveTraceAppConfigResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class SearchAlertContactRequest extends $tea.Model {
  contactIds?: string;
  contactName?: string;
  currentPage?: string;
  email?: string;
  pageSize?: string;
  phone?: string;
  regionId: string;
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

export class SearchAlertContactResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertContactResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertContactResponsePageBean,
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
  regionId: string;
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

export class SearchAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  contactGroups: SearchAlertContactGroupResponseContactGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactGroups: 'ContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactGroups: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseContactGroups },
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
  regionId: string;
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

export class SearchAlertHistoriesResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertHistoriesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertHistoriesResponsePageBean,
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
  regionId: string;
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

export class SearchAlertRulesResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertRulesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertRulesResponsePageBean,
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
  regionId: string;
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

export class SearchEventsResponse extends $tea.Model {
  isTrigger: number;
  requestId: string;
  pageBean: SearchEventsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      isTrigger: 'IsTrigger',
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTrigger: 'number',
      requestId: 'string',
      pageBean: SearchEventsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
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

export class SearchRetcodeAppByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchRetcodeAppByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchRetcodeAppByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTagNamesRequest extends $tea.Model {
  endTime?: number;
  pid?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pid: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTagNamesResponse extends $tea.Model {
  requestId: string;
  tags: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTagValuesRequest extends $tea.Model {
  endTime?: number;
  pid?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pid: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTagValuesResponse extends $tea.Model {
  requestId: string;
  values: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameRequest extends $tea.Model {
  regionId: string;
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

export class SearchTraceAppByNameResponse extends $tea.Model {
  requestId: string;
  traceApps: SearchTraceAppByNameResponseTraceApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
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

export class SearchTraceAppByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchTraceAppByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchTraceAppByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  endTime: number;
  exclusionFilters?: SearchTracesRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
  pid?: string;
  regionId: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime: number;
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

export class SearchTracesResponse extends $tea.Model {
  requestId: string;
  traceInfos: SearchTracesResponseTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesResponseTraceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequest extends $tea.Model {
  endTime: number;
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
  pageNumber?: number;
  pageSize?: number;
  pid?: string;
  regionId: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  startTime: number;
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

export class SearchTracesByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchTracesByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchTracesByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTTSVerifyLinkRequest extends $tea.Model {
  contactId: number;
  phone: string;
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

export class SendTTSVerifyLinkResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class SetRetcodeShareStatusRequest extends $tea.Model {
  pid: string;
  status: boolean;
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

export class SetRetcodeShareStatusResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class StartAlertRequest extends $tea.Model {
  alertId: string;
  regionId: string;
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

export class StartAlertResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class StopAlertRequest extends $tea.Model {
  alertId: string;
  regionId: string;
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

export class StopAlertResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class TagResourcesRequest extends $tea.Model {
  resourceId: string[];
  resourceType: string;
  tag: TagResourcesRequestTag[];
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

export class TagResourcesResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class TurnOnSecondSwitchRequest extends $tea.Model {
  pid: string;
  proxyUserId?: string;
  releaseStartTime: number;
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

export class TurnOnSecondSwitchResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class UninstallManagedPrometheusResponse extends $tea.Model {
  code: number;
  data: string;
  message: string;
  requestId: string;
  success: boolean;
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

export class UninstallPromClusterResponse extends $tea.Model {
  data: boolean;
  requestId: string;
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId: string[];
  resourceType: string;
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

export class UntagResourcesResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class UpdateAlertContactRequest extends $tea.Model {
  contactId: number;
  contactName?: string;
  dingRobotWebhookUrl?: string;
  email?: string;
  phoneNum?: string;
  regionId: string;
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

export class UpdateAlertContactResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class UpdateAlertContactGroupRequest extends $tea.Model {
  contactGroupId: number;
  contactGroupName: string;
  contactIds?: string;
  regionId: string;
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

export class UpdateAlertContactGroupResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class UpdateAlertRuleRequest extends $tea.Model {
  alertId: number;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  regionId: string;
  templageAlertConfig: string;
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

export class UpdateAlertRuleResponse extends $tea.Model {
  alertId: number;
  data: string;
  requestId: string;
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

export class UpdateContactScheduleRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactScheduleResponse extends $tea.Model {
  requestId: string;
  result: UpdateContactScheduleResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateContactScheduleResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleRequest extends $tea.Model {
  dispatchRule: string;
  regionId: string;
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

export class UpdateDispatchRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
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

export class UpdateEscalationRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationResponse extends $tea.Model {
  requestId: string;
  result: UpdateEscalationResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateEscalationResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleRequest extends $tea.Model {
  alertId: number;
  alertName: string;
  annotations?: string;
  clusterId: string;
  dispatchRuleId?: number;
  duration: string;
  expression: string;
  labels?: string;
  message: string;
  notifyType?: string;
  regionId: string;
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

export class UpdatePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: UpdatePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: UpdatePrometheusAlertRuleResponsePrometheusAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookRequest extends $tea.Model {
  body: string;
  contactId: number;
  contactName: string;
  httpHeaders?: string;
  httpParams?: string;
  method: string;
  recoverBody?: string;
  regionId: string;
  url: string;
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

export class UpdateWebhookResponse extends $tea.Model {
  isSuccess: boolean;
  requestId: string;
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

export class UploadRequest extends $tea.Model {
  file: string;
  fileName: string;
  pid: string;
  regionId: string;
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

export class UploadResponse extends $tea.Model {
  fid: string;
  fileName: string;
  requestId: string;
  uploadTime: string;
  version: string;
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

export class VerifyLinkRequest extends $tea.Model {
  bodyStr?: string;
  static names(): { [key: string]: string } {
    return {
      bodyStr: 'BodyStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLinkResponse extends $tea.Model {
  requestId: string;
  result: VerifyLinkResponseResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: VerifyLinkResponseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAliClusterIdsToPrometheusGlobalViewResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class AddPrometheusGlobalViewResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class AddPrometheusGlobalViewByAliClusterIdsResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class AppendInstancesToPrometheusGlobalViewResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class BatchDeleteAlertContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchVerifyLinkResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactScheduleResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class CreateOrUpdateAlertRuleResponseAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContentAlertRuleItems extends $tea.Model {
  aggregate: string;
  metricKey: string;
  n: number;
  operator: string;
  value: string;
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

export class CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContent extends $tea.Model {
  condition: string;
  alertRuleItems: CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContentAlertRuleItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      alertRuleItems: 'AlertRuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      alertRuleItems: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContentAlertRuleItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseAlertRuleFiltersCustomSLSFilters extends $tea.Model {
  key: string;
  opt: string;
  show: boolean;
  t: string;
  value: string;
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

export class CreateOrUpdateAlertRuleResponseAlertRuleFiltersDimFilters extends $tea.Model {
  filterKey: string;
  filterOpt: string;
  filterValues: string[];
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

export class CreateOrUpdateAlertRuleResponseAlertRuleFilters extends $tea.Model {
  customSLSFilters: CreateOrUpdateAlertRuleResponseAlertRuleFiltersCustomSLSFilters[];
  dimFilters: CreateOrUpdateAlertRuleResponseAlertRuleFiltersDimFilters[];
  customSLSGroupByDimensions: string[];
  customSLSWheres: string[];
  static names(): { [key: string]: string } {
    return {
      customSLSFilters: 'CustomSLSFilters',
      dimFilters: 'DimFilters',
      customSLSGroupByDimensions: 'CustomSLSGroupByDimensions',
      customSLSWheres: 'CustomSLSWheres',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSLSFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseAlertRuleFiltersCustomSLSFilters },
      dimFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseAlertRuleFiltersDimFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseAlertRule extends $tea.Model {
  alertCheckType: string;
  alertGroup: number;
  alertId: number;
  alertName: string;
  alertStatus: string;
  alertType: string;
  autoAddNewApplication: boolean;
  clusterId: string;
  createdTime: number;
  duration: string;
  extend: string;
  level: string;
  message: string;
  metricsType: string;
  notifyStrategy: string;
  promQL: string;
  regionId: string;
  updatedTime: number;
  userId: string;
  annotations: CreateOrUpdateAlertRuleResponseAlertRuleAnnotations[];
  labels: CreateOrUpdateAlertRuleResponseAlertRuleLabels[];
  alertRuleContent: CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContent;
  filters: CreateOrUpdateAlertRuleResponseAlertRuleFilters;
  pids: string[];
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      extend: 'Extend',
      level: 'Level',
      message: 'Message',
      metricsType: 'MetricsType',
      notifyStrategy: 'NotifyStrategy',
      promQL: 'PromQL',
      regionId: 'RegionId',
      updatedTime: 'UpdatedTime',
      userId: 'UserId',
      annotations: 'Annotations',
      labels: 'Labels',
      alertRuleContent: 'AlertRuleContent',
      filters: 'Filters',
      pids: 'Pids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertStatus: 'string',
      alertType: 'string',
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      promQL: 'string',
      regionId: 'string',
      updatedTime: 'number',
      userId: 'string',
      annotations: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseAlertRuleAnnotations },
      labels: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseAlertRuleLabels },
      alertRuleContent: CreateOrUpdateAlertRuleResponseAlertRuleAlertRuleContent,
      filters: CreateOrUpdateAlertRuleResponseAlertRuleFilters,
      pids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactResponseAlertContact extends $tea.Model {
  contactId: number;
  contactName: string;
  email: string;
  isVerify: boolean;
  phone: string;
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

export class CreateOrUpdateContactGroupResponseAlertContactGroup extends $tea.Model {
  contactGroupId: number;
  contactGroupName: string;
  contactIds: string;
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

export class CreateOrUpdateEventBridgeIntegrationResponseEventBridgeIntegration extends $tea.Model {
  accessKey: string;
  accessSecret: string;
  description: string;
  endpoint: string;
  eventBusName: string;
  eventBusRegionId: string;
  id: number;
  name: string;
  source: string;
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

export class CreateOrUpdateIMRobotResponseAlertRobot extends $tea.Model {
  dailyNoc: boolean;
  dailyNocTime: string;
  robotAddress: string;
  robotId: number;
  robotName: string;
  type: string;
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

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRulesMatchingConditions extends $tea.Model {
  key: string;
  operator: string;
  value: string;
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

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRules extends $tea.Model {
  matchingConditions: CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyGroupRule extends $tea.Model {
  groupInterval: number;
  groupWait: number;
  groupingFields: string[];
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

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRuleNotifyObjects extends $tea.Model {
  notifyObjectId: number;
  notifyObjectName: string;
  notifyObjectType: string;
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

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRule extends $tea.Model {
  notifyEndTime: string;
  notifyStartTime: string;
  notifyObjects: CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRuleNotifyObjects[];
  notifyChannels: string[];
  static names(): { [key: string]: string } {
    return {
      notifyEndTime: 'NotifyEndTime',
      notifyStartTime: 'NotifyStartTime',
      notifyObjects: 'NotifyObjects',
      notifyChannels: 'NotifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyEndTime: 'string',
      notifyStartTime: 'string',
      notifyObjects: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRuleNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyTemplate extends $tea.Model {
  emailContent: string;
  emailRecoverContent: string;
  emailRecoverTitle: string;
  emailTitle: string;
  robotContent: string;
  smsContent: string;
  smsRecoverContent: string;
  ttsContent: string;
  ttsRecoverContent: string;
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

export class CreateOrUpdateNotificationPolicyResponseNotificationPolicy extends $tea.Model {
  escalationPolicyId: number;
  id: number;
  integrationId: number;
  name: string;
  repeat: boolean;
  repeatInterval: number;
  sendRecoverMessage: boolean;
  matchingRules: CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRules[];
  groupRule: CreateOrUpdateNotificationPolicyResponseNotificationPolicyGroupRule;
  notifyRule: CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRule;
  notifyTemplate: CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyTemplate;
  static names(): { [key: string]: string } {
    return {
      escalationPolicyId: 'EscalationPolicyId',
      id: 'Id',
      integrationId: 'IntegrationId',
      name: 'Name',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
      matchingRules: 'MatchingRules',
      groupRule: 'GroupRule',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicyId: 'number',
      id: 'number',
      integrationId: 'number',
      name: 'string',
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseNotificationPolicyMatchingRules },
      groupRule: CreateOrUpdateNotificationPolicyResponseNotificationPolicyGroupRule,
      notifyRule: CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyRule,
      notifyTemplate: CreateOrUpdateNotificationPolicyResponseNotificationPolicyNotifyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRulesMatchingConditions extends $tea.Model {
  key: string;
  operator: string;
  value: string;
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

export class CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRules extends $tea.Model {
  matchingConditions: CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseSilencePolicy extends $tea.Model {
  id: number;
  name: string;
  matchingRules: CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRules[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      matchingRules: 'MatchingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseSilencePolicyMatchingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseWebhookContactWebhook extends $tea.Model {
  bizHeaders: string;
  bizParams: string;
  body: string;
  method: string;
  recoverBody: string;
  url: string;
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

export class CreateOrUpdateWebhookContactResponseWebhookContact extends $tea.Model {
  webhookId: number;
  webhookName: string;
  webhook: CreateOrUpdateWebhookContactResponseWebhookContactWebhook;
  static names(): { [key: string]: string } {
    return {
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookId: 'number',
      webhookName: 'string',
      webhook: CreateOrUpdateWebhookContactResponseWebhookContactWebhook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class CreatePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  clusterId: string;
  dispatchRuleId: number;
  duration: string;
  expression: string;
  message: string;
  notifyType: string;
  status: number;
  type: string;
  annotations: CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  labels: CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
      annotations: 'Annotations',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
      annotations: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
      labels: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponseRetcodeAppDataBean extends $tea.Model {
  appId: number;
  pid: string;
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

export class DeleteContactGroupInContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactScheduleResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEscalationResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponsePageBeanAlertContactGroupsContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  email: string;
  phone: string;
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

export class DescribeContactGroupsResponsePageBeanAlertContactGroups extends $tea.Model {
  contactGroupId: number;
  contactGroupName: string;
  contacts: DescribeContactGroupsResponsePageBeanAlertContactGroupsContacts[];
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
      contacts: { 'type': 'array', 'itemType': DescribeContactGroupsResponsePageBeanAlertContactGroupsContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  alertContactGroups: DescribeContactGroupsResponsePageBeanAlertContactGroups[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      alertContactGroups: 'AlertContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      alertContactGroups: { 'type': 'array', 'itemType': DescribeContactGroupsResponsePageBeanAlertContactGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactsResponsePageBeanAlertContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  email: string;
  isVerify: boolean;
  phone: string;
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

export class DescribeContactsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  alertContacts: DescribeContactsResponsePageBeanAlertContacts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      alertContacts: 'AlertContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      alertContacts: { 'type': 'array', 'itemType': DescribeContactsResponsePageBeanAlertContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleGroupRules extends $tea.Model {
  groupId: number;
  groupInterval: number;
  groupWaitTime: number;
  repeatInterval: number;
  groupingFields: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
      repeatInterval: 'RepeatInterval',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
      repeatInterval: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects extends $tea.Model {
  name: string;
  notifyObjectId: string;
  notifyType: string;
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

export class DescribeDispatchRuleResponseDispatchRuleNotifyRules extends $tea.Model {
  notifyObjects: DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects[];
  notifyChannels: string[];
  static names(): { [key: string]: string } {
    return {
      notifyObjects: 'NotifyObjects',
      notifyChannels: 'NotifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjects: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key: string;
  operator: string;
  value: string;
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

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRule extends $tea.Model {
  dispatchType: string;
  isRecover: boolean;
  name: string;
  ruleId: number;
  state: string;
  groupRules: DescribeDispatchRuleResponseDispatchRuleGroupRules[];
  notifyRules: DescribeDispatchRuleResponseDispatchRuleNotifyRules[];
  labelMatchExpressionGrid: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid;
  static names(): { [key: string]: string } {
    return {
      dispatchType: 'DispatchType',
      isRecover: 'IsRecover',
      name: 'Name',
      ruleId: 'RuleId',
      state: 'State',
      groupRules: 'GroupRules',
      notifyRules: 'NotifyRules',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchType: 'string',
      isRecover: 'boolean',
      name: 'string',
      ruleId: 'number',
      state: 'string',
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleGroupRules },
      notifyRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleNotifyRules },
      labelMatchExpressionGrid: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIMRobotsResponsePageBeanAlertIMRobots extends $tea.Model {
  dailyNoc: boolean;
  dailyNocTime: string;
  robotAddr: string;
  robotId: number;
  robotName: string;
  type: string;
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

export class DescribeIMRobotsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  alertIMRobots: DescribeIMRobotsResponsePageBeanAlertIMRobots[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      alertIMRobots: 'AlertIMRobots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      alertIMRobots: { 'type': 'array', 'itemType': DescribeIMRobotsResponsePageBeanAlertIMRobots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class DescribePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  clusterId: string;
  dispatchRuleId: number;
  duration: string;
  expression: string;
  message: string;
  notifyType: string;
  status: number;
  type: string;
  annotations: DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  labels: DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
      annotations: 'Annotations',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
      annotations: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
      labels: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponsePageBeanWebhookContactsWebhook extends $tea.Model {
  bizHeaders: string;
  bizParams: string;
  body: string;
  method: string;
  recoverBody: string;
  url: string;
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

export class DescribeWebhookContactsResponsePageBeanWebhookContacts extends $tea.Model {
  webhookId: number;
  webhookName: string;
  webhook: DescribeWebhookContactsResponsePageBeanWebhookContactsWebhook;
  static names(): { [key: string]: string } {
    return {
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookId: 'number',
      webhookName: 'string',
      webhook: DescribeWebhookContactsResponsePageBeanWebhookContactsWebhook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  webhookContacts: DescribeWebhookContactsResponsePageBeanWebhookContacts[];
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
      webhookContacts: { 'type': 'array', 'itemType': DescribeWebhookContactsResponsePageBeanWebhookContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExploreTraceRequestAttributes extends $tea.Model {
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

export class ExploreTraceResponseSpanVOs extends $tea.Model {
  attributes: { [key: string]: any };
  duration: number;
  events: string;
  hiddenAttributes: { [key: string]: any };
  hostname: string;
  ip: string;
  kind: string;
  links: string;
  meta: { [key: string]: any };
  parentSpanId: string;
  pid: string;
  resource: { [key: string]: any };
  sampleIds: string;
  serviceName: string;
  spanId: string;
  spanName: string;
  startTime: number;
  statusCode: number;
  statusMessage: string;
  traceId: string;
  children: string[];
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      duration: 'Duration',
      events: 'Events',
      hiddenAttributes: 'HiddenAttributes',
      hostname: 'Hostname',
      ip: 'Ip',
      kind: 'Kind',
      links: 'Links',
      meta: 'Meta',
      parentSpanId: 'ParentSpanId',
      pid: 'Pid',
      resource: 'Resource',
      sampleIds: 'SampleIds',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      spanName: 'SpanName',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      statusMessage: 'StatusMessage',
      traceId: 'TraceId',
      children: 'Children',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      duration: 'number',
      events: 'string',
      hiddenAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hostname: 'string',
      ip: 'string',
      kind: 'string',
      links: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentSpanId: 'string',
      pid: 'string',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sampleIds: 'string',
      serviceName: 'string',
      spanId: 'string',
      spanName: 'string',
      startTime: 'number',
      statusCode: 'number',
      statusMessage: 'string',
      traceId: 'string',
      children: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponsePageBeanAlertRulesAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class GetAlertRulesResponsePageBeanAlertRulesLabels extends $tea.Model {
  name: string;
  value: string;
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

export class GetAlertRulesResponsePageBeanAlertRulesAlertRuleContentAlertRuleItems extends $tea.Model {
  aggregate: string;
  metricKey: string;
  n: number;
  operator: string;
  value: string;
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

export class GetAlertRulesResponsePageBeanAlertRulesAlertRuleContent extends $tea.Model {
  condition: string;
  alertRuleItems: GetAlertRulesResponsePageBeanAlertRulesAlertRuleContentAlertRuleItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      alertRuleItems: 'AlertRuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      alertRuleItems: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRulesAlertRuleContentAlertRuleItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponsePageBeanAlertRulesFiltersCustomSLSFilters extends $tea.Model {
  key: string;
  opt: string;
  show: boolean;
  t: string;
  value: string;
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

export class GetAlertRulesResponsePageBeanAlertRulesFiltersDimFilters extends $tea.Model {
  filterKey: string;
  filterOpt: string;
  filterValues: string[];
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

export class GetAlertRulesResponsePageBeanAlertRulesFilters extends $tea.Model {
  customSLSFilters: GetAlertRulesResponsePageBeanAlertRulesFiltersCustomSLSFilters[];
  dimFilters: GetAlertRulesResponsePageBeanAlertRulesFiltersDimFilters[];
  customSLSGroupByDimensions: string[];
  customSLSWheres: string[];
  static names(): { [key: string]: string } {
    return {
      customSLSFilters: 'CustomSLSFilters',
      dimFilters: 'DimFilters',
      customSLSGroupByDimensions: 'CustomSLSGroupByDimensions',
      customSLSWheres: 'CustomSLSWheres',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSLSFilters: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRulesFiltersCustomSLSFilters },
      dimFilters: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRulesFiltersDimFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponsePageBeanAlertRules extends $tea.Model {
  alertCheckType: string;
  alertGroup: number;
  alertId: number;
  alertName: string;
  alertStatus: string;
  alertType: string;
  autoAddNewApplication: boolean;
  clusterId: string;
  createdTime: number;
  duration: string;
  extend: string;
  level: string;
  message: string;
  metricsType: string;
  notifyStrategy: string;
  promQL: string;
  regionId: string;
  updatedTime: number;
  userId: string;
  annotations: GetAlertRulesResponsePageBeanAlertRulesAnnotations[];
  labels: GetAlertRulesResponsePageBeanAlertRulesLabels[];
  alertRuleContent: GetAlertRulesResponsePageBeanAlertRulesAlertRuleContent;
  filters: GetAlertRulesResponsePageBeanAlertRulesFilters;
  pids: string[];
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      extend: 'Extend',
      level: 'Level',
      message: 'Message',
      metricsType: 'MetricsType',
      notifyStrategy: 'NotifyStrategy',
      promQL: 'PromQL',
      regionId: 'RegionId',
      updatedTime: 'UpdatedTime',
      userId: 'UserId',
      annotations: 'Annotations',
      labels: 'Labels',
      alertRuleContent: 'AlertRuleContent',
      filters: 'Filters',
      pids: 'Pids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertStatus: 'string',
      alertType: 'string',
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      promQL: 'string',
      regionId: 'string',
      updatedTime: 'number',
      userId: 'string',
      annotations: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRulesAnnotations },
      labels: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRulesLabels },
      alertRuleContent: GetAlertRulesResponsePageBeanAlertRulesAlertRuleContent,
      filters: GetAlertRulesResponsePageBeanAlertRulesFilters,
      pids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  alertRules: GetAlertRulesResponsePageBeanAlertRules[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      alertRules: 'AlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      alertRules: { 'type': 'array', 'itemType': GetAlertRulesResponsePageBeanAlertRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponseData extends $tea.Model {
  page: number;
  pageSize: number;
  total: string;
  items: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'string',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterInfoResponseData extends $tea.Model {
  ackNotRunning: boolean;
  agentHelmNotExist: boolean;
  agentServiceNotExist: boolean;
  armsDBNotExist: boolean;
  checkType: string;
  getClusterInfo: string;
  haveAgentNodeIsNotReady: boolean;
  isFlink: boolean;
  needIntervention: boolean;
  needRetry: boolean;
  nodeSizeIsZero: boolean;
  podIsNotRestart: boolean;
  static names(): { [key: string]: string } {
    return {
      ackNotRunning: 'AckNotRunning',
      agentHelmNotExist: 'AgentHelmNotExist',
      agentServiceNotExist: 'AgentServiceNotExist',
      armsDBNotExist: 'ArmsDBNotExist',
      checkType: 'CheckType',
      getClusterInfo: 'GetClusterInfo',
      haveAgentNodeIsNotReady: 'HaveAgentNodeIsNotReady',
      isFlink: 'IsFlink',
      needIntervention: 'NeedIntervention',
      needRetry: 'NeedRetry',
      nodeSizeIsZero: 'NodeSizeIsZero',
      podIsNotRestart: 'PodIsNotRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackNotRunning: 'boolean',
      agentHelmNotExist: 'boolean',
      agentServiceNotExist: 'boolean',
      armsDBNotExist: 'boolean',
      checkType: 'string',
      getClusterInfo: 'string',
      haveAgentNodeIsNotReady: 'boolean',
      isFlink: 'boolean',
      needIntervention: 'boolean',
      needRetry: 'boolean',
      nodeSizeIsZero: 'boolean',
      podIsNotRestart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterStateResponseResult extends $tea.Model {
  agentState: boolean;
  clusterState: string;
  isFlink: boolean;
  static names(): { [key: string]: string } {
    return {
      agentState: 'agentState',
      clusterState: 'clusterState',
      isFlink: 'isFlink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentState: 'boolean',
      clusterState: 'string',
      isFlink: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailResponseResultDataRuleVosNotifyRuleNotifyObjects extends $tea.Model {
  name: string;
  notifyObjectId: number;
  notifyType: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      notifyObjectId: 'notifyObjectId',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyObjectId: 'number',
      notifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailResponseResultDataRuleVosNotifyRule extends $tea.Model {
  notifyEndTime: string;
  notifyRuleType: string;
  notifyStartTime: string;
  repeatDingRobot: boolean;
  repeatNotify: boolean;
  notifyObjects: GetEscalationDetailResponseResultDataRuleVosNotifyRuleNotifyObjects[];
  notifyChannels: string[];
  static names(): { [key: string]: string } {
    return {
      notifyEndTime: 'notifyEndTime',
      notifyRuleType: 'notifyRuleType',
      notifyStartTime: 'notifyStartTime',
      repeatDingRobot: 'repeatDingRobot',
      repeatNotify: 'repeatNotify',
      notifyObjects: 'notifyObjects',
      notifyChannels: 'notifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyEndTime: 'string',
      notifyRuleType: 'string',
      notifyStartTime: 'string',
      repeatDingRobot: 'boolean',
      repeatNotify: 'boolean',
      notifyObjects: { 'type': 'array', 'itemType': GetEscalationDetailResponseResultDataRuleVosNotifyRuleNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailResponseResultDataRuleVos extends $tea.Model {
  id: number;
  maxCount: number;
  targetState: number;
  triggerDelay: number;
  notifyRule: GetEscalationDetailResponseResultDataRuleVosNotifyRule;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      maxCount: 'maxCount',
      targetState: 'targetState',
      triggerDelay: 'triggerDelay',
      notifyRule: 'notifyRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      maxCount: 'number',
      targetState: 'number',
      triggerDelay: 'number',
      notifyRule: GetEscalationDetailResponseResultDataRuleVosNotifyRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailResponseResultData extends $tea.Model {
  id: number;
  name: string;
  ruleVos: GetEscalationDetailResponseResultDataRuleVos[];
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      ruleVos: 'ruleVos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      ruleVos: { 'type': 'array', 'itemType': GetEscalationDetailResponseResultDataRuleVos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationDetailResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: GetEscalationDetailResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: GetEscalationDetailResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList extends $tea.Model {
  timestamp: number;
  tagEntryList: GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList[];
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      tagEntryList: 'TagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetMultipleTraceResponseMultiCallChainInfosSpans extends $tea.Model {
  duration: number;
  haveStack: boolean;
  operationName: string;
  parentSpanId: string;
  resultCode: string;
  rpcId: string;
  rpcType: number;
  serviceIp: string;
  serviceName: string;
  spanId: string;
  timestamp: number;
  traceID: string;
  logEventList: GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList[];
  tagEntryList: GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      haveStack: 'HaveStack',
      operationName: 'OperationName',
      parentSpanId: 'ParentSpanId',
      resultCode: 'ResultCode',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
      logEventList: 'LogEventList',
      tagEntryList: 'TagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      haveStack: 'boolean',
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      timestamp: 'number',
      traceID: 'string',
      logEventList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList },
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfos extends $tea.Model {
  traceID: string;
  spans: GetMultipleTraceResponseMultiCallChainInfosSpans[];
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      spans: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseStackInfoExtInfo extends $tea.Model {
  info: string;
  type: string;
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

export class GetStackResponseStackInfo extends $tea.Model {
  api: string;
  duration: number;
  exception: string;
  line: string;
  rpcId: string;
  serviceName: string;
  startTime: number;
  extInfo: GetStackResponseStackInfoExtInfo;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      duration: 'Duration',
      exception: 'Exception',
      line: 'Line',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      duration: 'number',
      exception: 'string',
      line: 'string',
      rpcId: 'string',
      serviceName: 'string',
      startTime: 'number',
      extInfo: GetStackResponseStackInfoExtInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseSpansLogEventListTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetTraceResponseSpansLogEventList extends $tea.Model {
  timestamp: number;
  tagEntryList: GetTraceResponseSpansLogEventListTagEntryList[];
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      tagEntryList: 'TagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseSpansLogEventListTagEntryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseSpansTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetTraceResponseSpans extends $tea.Model {
  duration: number;
  haveStack: boolean;
  operationName: string;
  parentSpanId: string;
  resultCode: string;
  rpcId: string;
  rpcType: number;
  serviceIp: string;
  serviceName: string;
  spanId: string;
  timestamp: number;
  traceID: string;
  logEventList: GetTraceResponseSpansLogEventList[];
  tagEntryList: GetTraceResponseSpansTagEntryList[];
  children: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      haveStack: 'HaveStack',
      operationName: 'OperationName',
      parentSpanId: 'ParentSpanId',
      resultCode: 'ResultCode',
      rpcId: 'RpcId',
      rpcType: 'RpcType',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      timestamp: 'Timestamp',
      traceID: 'TraceID',
      logEventList: 'LogEventList',
      tagEntryList: 'TagEntryList',
      children: 'Children',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      haveStack: 'boolean',
      operationName: 'string',
      parentSpanId: 'string',
      resultCode: 'string',
      rpcId: 'string',
      rpcType: 'number',
      serviceIp: 'string',
      serviceName: 'string',
      spanId: 'string',
      timestamp: 'number',
      traceID: 'string',
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseSpansLogEventList },
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseSpansTagEntryList },
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseTraceApp extends $tea.Model {
  appId: number;
  appName: string;
  createTime: number;
  pid: string;
  regionId: string;
  show: boolean;
  type: string;
  updateTime: number;
  userId: string;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerAddAlertContactReturIdResponseAlertContact extends $tea.Model {
  contactId: number;
  contactName: string;
  dingRobot: string;
  email: string;
  isVerify: boolean;
  phone: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      dingRobot: 'DingRobot',
      email: 'Email',
      isVerify: 'IsVerify',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      dingRobot: 'string',
      email: 'string',
      isVerify: 'boolean',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateAlertWebhookResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: string;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateContactGroupResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateEscalationReturnIdResponseResultData extends $tea.Model {
  id: number;
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

export class InnerCreateEscalationReturnIdResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: InnerCreateEscalationReturnIdResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorCodeParams: 'ErrorCodeParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: InnerCreateEscalationReturnIdResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerCreateIMRobotResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteAlertContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteContactGroupResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerDeleteIMRobotResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFetchContactResponseResultData extends $tea.Model {
  armsContactId: number;
  createTime: string;
  dailyNoc: boolean;
  dailyNocTime: string;
  dingRobot: string;
  email: string;
  fromSource: string;
  id: number;
  isVerify: boolean;
  name: string;
  phone: string;
  systemNoc: boolean;
  updateTime: string;
  userId: string;
  webhook: string;
  static names(): { [key: string]: string } {
    return {
      armsContactId: 'armsContactId',
      createTime: 'createTime',
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingRobot: 'dingRobot',
      email: 'email',
      fromSource: 'fromSource',
      id: 'id',
      isVerify: 'isVerify',
      name: 'name',
      phone: 'phone',
      systemNoc: 'systemNoc',
      updateTime: 'updateTime',
      userId: 'userId',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsContactId: 'number',
      createTime: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingRobot: 'string',
      email: 'string',
      fromSource: 'string',
      id: 'number',
      isVerify: 'boolean',
      name: 'string',
      phone: 'string',
      systemNoc: 'boolean',
      updateTime: 'string',
      userId: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFetchContactResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: InnerFetchContactResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorCodeParams: 'ErrorCodeParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: InnerFetchContactResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerFindContactIdResponseResult extends $tea.Model {
  code: number;
  data: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorCodeParams: 'ErrorCodeParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSendNocMessageResponseResultData extends $tea.Model {
  code: number;
  msg: string;
  notifyMsg: string;
  requestId: number;
  timestamp: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      notifyMsg: 'notifyMsg',
      requestId: 'requestId',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      notifyMsg: 'string',
      requestId: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerSendNocMessageResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: InnerSendNocMessageResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorCodeParams: 'ErrorCodeParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: InnerSendNocMessageResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateAlertWebhookResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateContactGroupResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerUpdateIMRobotResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InnerVerifyContactResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorCodeParams: 'ErrorCodeParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponsePageAlertsDispatchRules extends $tea.Model {
  ruleId: number;
  ruleName: string;
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

export class ListActivatedAlertsResponsePageAlerts extends $tea.Model {
  alertId: string;
  alertName: string;
  alertType: string;
  count: number;
  createTime: number;
  endsAt: number;
  expandFields: { [key: string]: any };
  integrationName: string;
  integrationType: string;
  involvedObjectKind: string;
  involvedObjectName: string;
  message: string;
  severity: string;
  startsAt: number;
  status: string;
  dispatchRules: ListActivatedAlertsResponsePageAlertsDispatchRules[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertType: 'AlertType',
      count: 'Count',
      createTime: 'CreateTime',
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
      dispatchRules: 'DispatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      alertName: 'string',
      alertType: 'string',
      count: 'number',
      createTime: 'number',
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
      dispatchRules: { 'type': 'array', 'itemType': ListActivatedAlertsResponsePageAlertsDispatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponsePage extends $tea.Model {
  page: number;
  pageSize: number;
  total: number;
  alerts: ListActivatedAlertsResponsePageAlerts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      alerts: 'Alerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
      alerts: { 'type': 'array', 'itemType': ListActivatedAlertsResponsePageAlerts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactResponseResultDataList extends $tea.Model {
  dailyNoc: boolean;
  dailyNocTime: string;
  dingRobot: string;
  dingUser: boolean;
  email: string;
  fromSource: string;
  groupName: string;
  id: number;
  isVerify: boolean;
  name: string;
  phone: string;
  systemNoc: boolean;
  webhook: string;
  wechatUser: boolean;
  static names(): { [key: string]: string } {
    return {
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingRobot: 'dingRobot',
      dingUser: 'dingUser',
      email: 'email',
      fromSource: 'fromSource',
      groupName: 'groupName',
      id: 'id',
      isVerify: 'isVerify',
      name: 'name',
      phone: 'phone',
      systemNoc: 'systemNoc',
      webhook: 'webhook',
      wechatUser: 'wechatUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingRobot: 'string',
      dingUser: 'boolean',
      email: 'string',
      fromSource: 'string',
      groupName: 'string',
      id: 'number',
      isVerify: 'boolean',
      name: 'string',
      phone: 'string',
      systemNoc: 'boolean',
      webhook: 'string',
      wechatUser: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactResponseResultData extends $tea.Model {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
  list: ListAlertContactResponseResultDataList[];
  navigatepageNums: number[];
  static names(): { [key: string]: string } {
    return {
      endRow: 'endRow',
      firstPage: 'firstPage',
      hasNextPage: 'hasNextPage',
      hasPreviousPage: 'hasPreviousPage',
      isFirstPage: 'isFirstPage',
      isLastPage: 'isLastPage',
      lastPage: 'lastPage',
      navigateFirstPage: 'navigateFirstPage',
      navigateLastPage: 'navigateLastPage',
      navigatePages: 'navigatePages',
      nextPage: 'nextPage',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      pages: 'pages',
      prePage: 'prePage',
      size: 'size',
      startRow: 'startRow',
      total: 'total',
      list: 'list',
      navigatepageNums: 'navigatepageNums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'number',
      firstPage: 'number',
      hasNextPage: 'boolean',
      hasPreviousPage: 'boolean',
      isFirstPage: 'boolean',
      isLastPage: 'boolean',
      lastPage: 'number',
      navigateFirstPage: 'number',
      navigateLastPage: 'number',
      navigatePages: 'number',
      nextPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      prePage: 'number',
      size: 'number',
      startRow: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': ListAlertContactResponseResultDataList },
      navigatepageNums: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListAlertContactResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: ListAlertContactResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactGroupResponseResultData extends $tea.Model {
  id: number;
  name: string;
  source: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertContactGroupResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListAlertContactGroupResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: { 'type': 'array', 'itemType': ListAlertContactGroupResponseResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponsePageBeanListAlertsActivities extends $tea.Model {
  content: string;
  description: string;
  handlerName: string;
  time: string;
  type: number;
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

export class ListAlertsResponsePageBeanListAlertsAlertEvents extends $tea.Model {
  alertName: string;
  annotations: string;
  description: string;
  endTime: string;
  generatorURL: string;
  integrationName: string;
  integrationType: string;
  labels: string;
  receiveTime: string;
  severity: string;
  startTime: string;
  state: string;
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

export class ListAlertsResponsePageBeanListAlerts extends $tea.Model {
  alertId: number;
  alertName: string;
  createTime: string;
  dispatchRuleId: number;
  dispatchRuleName: string;
  severity: string;
  state: number;
  activities: ListAlertsResponsePageBeanListAlertsActivities[];
  alertEvents: ListAlertsResponsePageBeanListAlertsAlertEvents[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      createTime: 'CreateTime',
      dispatchRuleId: 'DispatchRuleId',
      dispatchRuleName: 'DispatchRuleName',
      severity: 'Severity',
      state: 'State',
      activities: 'Activities',
      alertEvents: 'AlertEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      createTime: 'string',
      dispatchRuleId: 'number',
      dispatchRuleName: 'string',
      severity: 'string',
      state: 'number',
      activities: { 'type': 'array', 'itemType': ListAlertsResponsePageBeanListAlertsActivities },
      alertEvents: { 'type': 'array', 'itemType': ListAlertsResponsePageBeanListAlertsAlertEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  listAlerts: ListAlertsResponsePageBeanListAlerts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      listAlerts: 'ListAlerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      listAlerts: { 'type': 'array', 'itemType': ListAlertsResponsePageBeanListAlerts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAlertContactResponseResultData extends $tea.Model {
  dingUser: boolean;
  id: number;
  name: string;
  systemNoc: boolean;
  wechatUser: boolean;
  static names(): { [key: string]: string } {
    return {
      dingUser: 'dingUser',
      id: 'id',
      name: 'name',
      systemNoc: 'systemNoc',
      wechatUser: 'wechatUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingUser: 'boolean',
      id: 'number',
      name: 'string',
      systemNoc: 'boolean',
      wechatUser: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllAlertContactResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListAllAlertContactResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: { 'type': 'array', 'itemType': ListAllAlertContactResponseResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllIMRobotResponseResultData extends $tea.Model {
  createTime: string;
  dailyNoc: boolean;
  dailyNocTime: string;
  dingSignKey: string;
  dispatchRules: string;
  id: number;
  name: string;
  robotAddr: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingSignKey: 'dingSignKey',
      dispatchRules: 'dispatchRules',
      id: 'id',
      name: 'name',
      robotAddr: 'robotAddr',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingSignKey: 'string',
      dispatchRules: 'string',
      id: 'number',
      name: 'string',
      robotAddr: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllIMRobotResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListAllIMRobotResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: { 'type': 'array', 'itemType': ListAllIMRobotResponseResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponsePromClusterList extends $tea.Model {
  agentStatus: string;
  clusterId: string;
  clusterName: string;
  clusterType: string;
  controllerId: string;
  createTime: number;
  extra: string;
  id: number;
  installTime: number;
  isControllerInstalled: boolean;
  lastHeartBeatTime: number;
  nodeNum: number;
  options: string;
  pluginsJsonArray: string;
  regionId: string;
  stateJson: string;
  updateTime: number;
  userId: string;
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

export class ListCmsInstancesResponseDataProducts extends $tea.Model {
  descr: string;
  id: string;
  instance: string;
  name: string;
  prod: string;
  state: string;
  time: string;
  type: string;
  url: string;
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

export class ListCmsInstancesResponseData extends $tea.Model {
  enableTag: boolean;
  products: ListCmsInstancesResponseDataProducts[];
  static names(): { [key: string]: string } {
    return {
      enableTag: 'EnableTag',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTag: 'boolean',
      products: { 'type': 'array', 'itemType': ListCmsInstancesResponseDataProducts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactGroupInContactResponseResultData extends $tea.Model {
  email: string;
  id: number;
  mid: number;
  name: string;
  phone: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      id: 'id',
      mid: 'mid',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'number',
      mid: 'number',
      name: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactGroupInContactResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListContactGroupInContactResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: { 'type': 'array', 'itemType': ListContactGroupInContactResponseResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactScheduleResponseResultData extends $tea.Model {
  createTime: string;
  description: string;
  id: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactScheduleResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListContactScheduleResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: { 'type': 'array', 'itemType': ListContactScheduleResponseResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseDashboardVosI18nChild extends $tea.Model {
  dashboardType: string;
  exporter: string;
  httpUrl: string;
  httpsUrl: string;
  id: string;
  isArmsExporter: boolean;
  kind: string;
  language: string;
  name: string;
  needUpdate: boolean;
  time: string;
  title: string;
  type: string;
  uid: string;
  url: string;
  version: string;
  tags: string[];
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
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
      tags: 'Tags',
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
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseDashboardVos extends $tea.Model {
  dashboardType: string;
  exporter: string;
  httpUrl: string;
  httpsUrl: string;
  id: string;
  isArmsExporter: boolean;
  kind: string;
  language: string;
  name: string;
  needUpdate: boolean;
  time: string;
  title: string;
  type: string;
  uid: string;
  url: string;
  version: string;
  i18nChild: ListDashboardsResponseDashboardVosI18nChild;
  tags: string[];
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
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
      i18nChild: 'I18nChild',
      tags: 'Tags',
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
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
      i18nChild: ListDashboardsResponseDashboardVosI18nChild,
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponseDispatchRules extends $tea.Model {
  name: string;
  ruleId: number;
  state: string;
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

export class ListEscalationResponseResultDataList extends $tea.Model {
  id: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
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

export class ListEscalationResponseResultData extends $tea.Model {
  endRow: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  navigateFirstPage: number;
  navigateLastPage: number;
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
  list: ListEscalationResponseResultDataList[];
  navigatepageNums: number[];
  static names(): { [key: string]: string } {
    return {
      endRow: 'endRow',
      hasNextPage: 'hasNextPage',
      hasPreviousPage: 'hasPreviousPage',
      isFirstPage: 'isFirstPage',
      isLastPage: 'isLastPage',
      navigateFirstPage: 'navigateFirstPage',
      navigateLastPage: 'navigateLastPage',
      nextPage: 'nextPage',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      pages: 'pages',
      prePage: 'prePage',
      size: 'size',
      startRow: 'startRow',
      total: 'total',
      list: 'list',
      navigatepageNums: 'navigatepageNums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'number',
      hasNextPage: 'boolean',
      hasPreviousPage: 'boolean',
      isFirstPage: 'boolean',
      isLastPage: 'boolean',
      navigateFirstPage: 'number',
      navigateLastPage: 'number',
      nextPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      prePage: 'number',
      size: 'number',
      startRow: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': ListEscalationResponseResultDataList },
      navigatepageNums: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListEscalationResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: ListEscalationResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponsePageBeanEscalationPolicies extends $tea.Model {
  id: number;
  name: string;
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

export class ListEscalationPoliciesResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  escalationPolicies: ListEscalationPoliciesResponsePageBeanEscalationPolicies[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      escalationPolicies: 'EscalationPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      escalationPolicies: { 'type': 'array', 'itemType': ListEscalationPoliciesResponsePageBeanEscalationPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponsePageBeanEventBridgeIntegrations extends $tea.Model {
  description: string;
  id: number;
  name: string;
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

export class ListEventBridgeIntegrationsResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  eventBridgeIntegrations: ListEventBridgeIntegrationsResponsePageBeanEventBridgeIntegrations[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      eventBridgeIntegrations: 'EventBridgeIntegrations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      eventBridgeIntegrations: { 'type': 'array', 'itemType': ListEventBridgeIntegrationsResponsePageBeanEventBridgeIntegrations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIMRobotResponseResultDataList extends $tea.Model {
  createTime: string;
  dailyNoc: boolean;
  dailyNocTime: string;
  dingSignKey: string;
  dispatchRules: string;
  id: number;
  name: string;
  robotAddr: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingSignKey: 'dingSignKey',
      dispatchRules: 'dispatchRules',
      id: 'id',
      name: 'name',
      robotAddr: 'robotAddr',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingSignKey: 'string',
      dispatchRules: 'string',
      id: 'number',
      name: 'string',
      robotAddr: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIMRobotResponseResultData extends $tea.Model {
  endRow: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
  list: ListIMRobotResponseResultDataList[];
  navigatepageNums: number[];
  static names(): { [key: string]: string } {
    return {
      endRow: 'endRow',
      hasNextPage: 'hasNextPage',
      hasPreviousPage: 'hasPreviousPage',
      isFirstPage: 'isFirstPage',
      isLastPage: 'isLastPage',
      navigateFirstPage: 'navigateFirstPage',
      navigateLastPage: 'navigateLastPage',
      navigatePages: 'navigatePages',
      nextPage: 'nextPage',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      pages: 'pages',
      prePage: 'prePage',
      size: 'size',
      startRow: 'startRow',
      total: 'total',
      list: 'list',
      navigatepageNums: 'navigatepageNums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'number',
      hasNextPage: 'boolean',
      hasPreviousPage: 'boolean',
      isFirstPage: 'boolean',
      isLastPage: 'boolean',
      navigateFirstPage: 'number',
      navigateLastPage: 'number',
      navigatePages: 'number',
      nextPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      prePage: 'number',
      size: 'number',
      startRow: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': ListIMRobotResponseResultDataList },
      navigatepageNums: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIMRobotResponseResult extends $tea.Model {
  code: number;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  data: ListIMRobotResponseResultData;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
      data: ListIMRobotResponseResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRulesMatchingConditions extends $tea.Model {
  key: string;
  operator: string;
  value: string;
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

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRules extends $tea.Model {
  matchingConditions: ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesGroupRule extends $tea.Model {
  groupInterval: number;
  groupWait: number;
  groupingFields: string[];
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

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRuleNotifyObjects extends $tea.Model {
  notifyObjectId: number;
  notifyObjectName: string;
  notifyObjectType: string;
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

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRule extends $tea.Model {
  notifyEndTime: string;
  notifyStartTime: string;
  notifyObjects: ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRuleNotifyObjects[];
  notifyChannels: string[];
  static names(): { [key: string]: string } {
    return {
      notifyEndTime: 'NotifyEndTime',
      notifyStartTime: 'NotifyStartTime',
      notifyObjects: 'NotifyObjects',
      notifyChannels: 'NotifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyEndTime: 'string',
      notifyStartTime: 'string',
      notifyObjects: { 'type': 'array', 'itemType': ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRuleNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyTemplate extends $tea.Model {
  emailContent: string;
  emailRecoverContent: string;
  emailRecoverTitle: string;
  emailTitle: string;
  robotContent: string;
  smsContent: string;
  smsRecoverContent: string;
  ttsContent: string;
  ttsRecoverContent: string;
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

export class ListNotificationPoliciesResponsePageBeanNotificationPolicies extends $tea.Model {
  escalationPolicyId: number;
  id: number;
  integrationId: number;
  name: string;
  repeat: boolean;
  repeatInterval: number;
  sendRecoverMessage: boolean;
  matchingRules: ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRules[];
  groupRule: ListNotificationPoliciesResponsePageBeanNotificationPoliciesGroupRule;
  notifyRule: ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRule;
  notifyTemplate: ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyTemplate;
  static names(): { [key: string]: string } {
    return {
      escalationPolicyId: 'EscalationPolicyId',
      id: 'Id',
      integrationId: 'IntegrationId',
      name: 'Name',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
      matchingRules: 'MatchingRules',
      groupRule: 'GroupRule',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicyId: 'number',
      id: 'number',
      integrationId: 'number',
      name: 'string',
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
      matchingRules: { 'type': 'array', 'itemType': ListNotificationPoliciesResponsePageBeanNotificationPoliciesMatchingRules },
      groupRule: ListNotificationPoliciesResponsePageBeanNotificationPoliciesGroupRule,
      notifyRule: ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyRule,
      notifyTemplate: ListNotificationPoliciesResponsePageBeanNotificationPoliciesNotifyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  notificationPolicies: ListNotificationPoliciesResponsePageBeanNotificationPolicies[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      notificationPolicies: 'NotificationPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      notificationPolicies: { 'type': 'array', 'itemType': ListNotificationPoliciesResponsePageBeanNotificationPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponsePageBeanOnCallSchedules extends $tea.Model {
  description: string;
  id: number;
  name: string;
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

export class ListOnCallSchedulesResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  onCallSchedules: ListOnCallSchedulesResponsePageBeanOnCallSchedules[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      onCallSchedules: 'OnCallSchedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      onCallSchedules: { 'type': 'array', 'itemType': ListOnCallSchedulesResponsePageBeanOnCallSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertRulesResponsePrometheusAlertRules extends $tea.Model {
  alertId: number;
  alertName: string;
  clusterId: string;
  dispatchRuleId: number;
  duration: string;
  expression: string;
  message: string;
  notifyType: string;
  status: number;
  type: string;
  annotations: ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations[];
  labels: ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
      annotations: 'Annotations',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations },
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates extends $tea.Model {
  alertName: string;
  description: string;
  duration: string;
  expression: string;
  type: string;
  version: string;
  annotations: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations[];
  labels: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      description: 'Description',
      duration: 'Duration',
      expression: 'Expression',
      type: 'Type',
      version: 'Version',
      annotations: 'Annotations',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      description: 'string',
      duration: 'string',
      expression: 'string',
      type: 'string',
      version: 'string',
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations },
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseRetcodeApps extends $tea.Model {
  appId: number;
  appName: string;
  pid: string;
  retcodeAppType: string;
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

export class ListScenarioResponseArmsScenarios extends $tea.Model {
  appId: string;
  createTime: string;
  extensions: string;
  id: number;
  name: string;
  regionId: string;
  sign: string;
  updateTime: string;
  userId: string;
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

export class ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRulesMatchingConditions extends $tea.Model {
  key: string;
  operator: string;
  value: string;
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

export class ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRules extends $tea.Model {
  matchingConditions: ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRulesMatchingConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponsePageBeanSilencePolicies extends $tea.Model {
  id: number;
  name: string;
  matchingRules: ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRules[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      matchingRules: 'MatchingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      matchingRules: { 'type': 'array', 'itemType': ListSilencePoliciesResponsePageBeanSilencePoliciesMatchingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponsePageBean extends $tea.Model {
  page: number;
  size: number;
  total: number;
  silencePolicies: ListSilencePoliciesResponsePageBeanSilencePolicies[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      silencePolicies: 'SilencePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      silencePolicies: { 'type': 'array', 'itemType': ListSilencePoliciesResponsePageBeanSilencePolicies },
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

export class ListTagResourcesResponseTagResources extends $tea.Model {
  resourceId: string;
  resourceType: string;
  tagKey: string;
  tagValue: string;
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

export class ListTraceAppsResponseTraceApps extends $tea.Model {
  appId: number;
  appName: string;
  createTime: number;
  pid: string;
  regionId: string;
  show: boolean;
  type: string;
  updateTime: number;
  userId: string;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
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

export class QueryMetricByPageResponseData extends $tea.Model {
  page: number;
  pageSize: number;
  total: number;
  items: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusResponseData extends $tea.Model {
  isControllerInstalled: boolean;
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

export class QueryTracesResponseTraceLists extends $tea.Model {
  attributes: { [key: string]: any };
  duration: number;
  events: string;
  hiddenAttributes: { [key: string]: any };
  hostname: string;
  ip: string;
  kind: string;
  links: string;
  parentSpanId: string;
  pid: string;
  resources: { [key: string]: any };
  sampleIds: string;
  serviceName: number;
  spanId: string;
  spanName: string;
  startTime: number;
  statusCode: number;
  statusMessage: string;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      duration: 'Duration',
      events: 'Events',
      hiddenAttributes: 'HiddenAttributes',
      hostname: 'Hostname',
      ip: 'Ip',
      kind: 'Kind',
      links: 'Links',
      parentSpanId: 'ParentSpanId',
      pid: 'Pid',
      resources: 'Resources',
      sampleIds: 'SampleIds',
      serviceName: 'ServiceName',
      spanId: 'SpanId',
      spanName: 'SpanName',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      statusMessage: 'StatusMessage',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      duration: 'number',
      events: 'string',
      hiddenAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hostname: 'string',
      ip: 'string',
      kind: 'string',
      links: 'string',
      parentSpanId: 'string',
      pid: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sampleIds: 'string',
      serviceName: 'number',
      spanId: 'string',
      spanName: 'string',
      startTime: 'number',
      statusCode: 'number',
      statusMessage: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class RemoveSourcesFromPrometheusGlobalViewResponseData extends $tea.Model {
  info: string;
  msg: string;
  success: boolean;
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

export class SearchAlertContactResponsePageBeanContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  content: string;
  createTime: number;
  dingRobot: string;
  email: string;
  phone: string;
  systemNoc: boolean;
  updateTime: number;
  userId: string;
  webhook: string;
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

export class SearchAlertContactResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  contacts: SearchAlertContactResponsePageBeanContacts[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactResponsePageBeanContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseContactGroupsContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  createTime: number;
  dingRobot: string;
  email: string;
  phone: string;
  systemNoc: boolean;
  updateTime: number;
  userId: string;
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

export class SearchAlertContactGroupResponseContactGroups extends $tea.Model {
  contactGroupId: number;
  contactGroupName: string;
  createTime: number;
  updateTime: number;
  userId: string;
  contacts: SearchAlertContactGroupResponseContactGroupsContacts[];
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      createTime: 'number',
      updateTime: 'number',
      userId: 'string',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseContactGroupsContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponsePageBeanAlarmHistories extends $tea.Model {
  alarmContent: string;
  alarmResponseCode: number;
  alarmSources: string;
  alarmTime: number;
  alarmType: number;
  emails: string;
  id: number;
  phones: string;
  strategyId: string;
  target: string;
  userId: string;
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

export class SearchAlertHistoriesResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  alarmHistories: SearchAlertHistoriesResponsePageBeanAlarmHistories[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      alarmHistories: 'AlarmHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      alarmHistories: { 'type': 'array', 'itemType': SearchAlertHistoriesResponsePageBeanAlarmHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesAlarmContext extends $tea.Model {
  alarmContentSubTitle: string;
  alarmContentTemplate: string;
  content: string;
  subTitle: string;
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

export class SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules extends $tea.Model {
  aggregates: string;
  alias: string;
  measure: string;
  NValue: number;
  operator: string;
  value: number;
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

export class SearchAlertRulesResponsePageBeanAlertRulesAlertRule extends $tea.Model {
  operator: string;
  rules: SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      rules: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions extends $tea.Model {
  key: string;
  type: string;
  value: string;
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

export class SearchAlertRulesResponsePageBeanAlertRulesMetricParam extends $tea.Model {
  appGroupId: string;
  appId: string;
  pid: string;
  type: string;
  dimensions: SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions[];
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      pid: 'Pid',
      type: 'Type',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appId: 'string',
      pid: 'string',
      type: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesNotice extends $tea.Model {
  endTime: number;
  noticeEndTime: number;
  noticeStartTime: number;
  startTime: number;
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

export class SearchAlertRulesResponsePageBeanAlertRules extends $tea.Model {
  alertLevel: string;
  alertTitle: string;
  alertType: number;
  alertVersion: number;
  config: string;
  contactGroupIdList: string;
  contactGroupIds: string;
  createTime: number;
  hostByAlertManager: boolean;
  id: number;
  regionId: string;
  status: string;
  taskId: number;
  taskStatus: string;
  title: string;
  updateTime: number;
  userId: string;
  alarmContext: SearchAlertRulesResponsePageBeanAlertRulesAlarmContext;
  alertRule: SearchAlertRulesResponsePageBeanAlertRulesAlertRule;
  metricParam: SearchAlertRulesResponsePageBeanAlertRulesMetricParam;
  notice: SearchAlertRulesResponsePageBeanAlertRulesNotice;
  alertWays: string[];
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertVersion: 'AlertVersion',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      contactGroupIds: 'ContactGroupIds',
      createTime: 'CreateTime',
      hostByAlertManager: 'HostByAlertManager',
      id: 'Id',
      regionId: 'RegionId',
      status: 'Status',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      title: 'Title',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      alarmContext: 'AlarmContext',
      alertRule: 'AlertRule',
      metricParam: 'MetricParam',
      notice: 'Notice',
      alertWays: 'AlertWays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'string',
      alertTitle: 'string',
      alertType: 'number',
      alertVersion: 'number',
      config: 'string',
      contactGroupIdList: 'string',
      contactGroupIds: 'string',
      createTime: 'number',
      hostByAlertManager: 'boolean',
      id: 'number',
      regionId: 'string',
      status: 'string',
      taskId: 'number',
      taskStatus: 'string',
      title: 'string',
      updateTime: 'number',
      userId: 'string',
      alarmContext: SearchAlertRulesResponsePageBeanAlertRulesAlarmContext,
      alertRule: SearchAlertRulesResponsePageBeanAlertRulesAlertRule,
      metricParam: SearchAlertRulesResponsePageBeanAlertRulesMetricParam,
      notice: SearchAlertRulesResponsePageBeanAlertRulesNotice,
      alertWays: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  alertRules: SearchAlertRulesResponsePageBeanAlertRules[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      alertRules: 'AlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      alertRules: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponsePageBeanEvent extends $tea.Model {
  alertId: number;
  alertName: string;
  alertRule: string;
  alertType: number;
  eventLevel: string;
  eventTime: number;
  id: number;
  message: string;
  links: string[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRule: 'AlertRule',
      alertType: 'AlertType',
      eventLevel: 'EventLevel',
      eventTime: 'EventTime',
      id: 'Id',
      message: 'Message',
      links: 'Links',
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
      message: 'string',
      links: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  event: SearchEventsResponsePageBeanEvent[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      event: 'Event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      event: { 'type': 'array', 'itemType': SearchEventsResponsePageBeanEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponsePageBeanRetcodeApps extends $tea.Model {
  appId: number;
  appName: string;
  createTime: number;
  pid: string;
  regionId: string;
  retcodeAppType: string;
  type: string;
  updateTime: number;
  userId: string;
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

export class SearchRetcodeAppByPageResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  retcodeApps: SearchRetcodeAppByPageResponsePageBeanRetcodeApps[];
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
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponsePageBeanRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseTraceApps extends $tea.Model {
  appId: number;
  appName: string;
  createTime: number;
  pid: string;
  regionId: string;
  show: boolean;
  type: string;
  updateTime: number;
  userId: string;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponsePageBeanTraceApps extends $tea.Model {
  appId: number;
  appName: string;
  createTime: number;
  pid: string;
  regionId: string;
  show: boolean;
  type: string;
  updateTime: number;
  userId: string;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      show: 'Show',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      show: 'boolean',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  traceApps: SearchTraceAppByPageResponsePageBeanTraceApps[];
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
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByPageResponsePageBeanTraceApps },
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

export class SearchTracesResponseTraceInfos extends $tea.Model {
  duration: number;
  operationName: string;
  serviceIp: string;
  serviceName: string;
  timestamp: number;
  traceID: string;
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

export class SearchTracesByPageResponsePageBeanTraceInfos extends $tea.Model {
  duration: number;
  operationName: string;
  serviceIp: string;
  serviceName: string;
  timestamp: number;
  traceID: string;
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

export class SearchTracesByPageResponsePageBean extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  total: number;
  traceInfos: SearchTracesByPageResponsePageBeanTraceInfos[];
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
      traceInfos: { 'type': 'array', 'itemType': SearchTracesByPageResponsePageBeanTraceInfos },
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

export class UpdateContactScheduleResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  clusterId: string;
  dispatchRuleId: number;
  duration: string;
  expression: string;
  message: string;
  notifyType: string;
  status: number;
  type: string;
  annotations: UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  labels: UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      message: 'Message',
      notifyType: 'NotifyType',
      status: 'Status',
      type: 'Type',
      annotations: 'Annotations',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
      annotations: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
      labels: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLinkResponseResult extends $tea.Model {
  code: number;
  data: boolean;
  dynamicMessage: string;
  errorCode: number;
  errorCodeParams: string;
  httpStatusCode: number;
  message: string;
  requestId: string;
  success: boolean;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicMessage: 'dynamicMessage',
      errorCode: 'errorCode',
      errorCodeParams: 'errorCodeParams',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicMessage: 'string',
      errorCode: 'number',
      errorCodeParams: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
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


  async addASMIntegrationWithOptions(request: AddASMIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddASMIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<AddASMIntegrationResponse>(await this.doRequest("AddASMIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddASMIntegrationResponse({}));
  }

  async addASMIntegration(request: AddASMIntegrationRequest): Promise<AddASMIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addASMIntegrationWithOptions(request, runtime);
  }

  async addAliClusterIdsToPrometheusGlobalViewWithOptions(request: AddAliClusterIdsToPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AddAliClusterIdsToPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<AddAliClusterIdsToPrometheusGlobalViewResponse>(await this.doRequest("AddAliClusterIdsToPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddAliClusterIdsToPrometheusGlobalViewResponse({}));
  }

  async addAliClusterIdsToPrometheusGlobalView(request: AddAliClusterIdsToPrometheusGlobalViewRequest): Promise<AddAliClusterIdsToPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAliClusterIdsToPrometheusGlobalViewWithOptions(request, runtime);
  }

  async addGrafanaWithOptions(request: AddGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<AddGrafanaResponse> {
    Util.validateModel(request);
    return $tea.cast<AddGrafanaResponse>(await this.doRequest("AddGrafana", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddGrafanaResponse({}));
  }

  async addGrafana(request: AddGrafanaRequest): Promise<AddGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  async addIntegrationWithOptions(request: AddIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<AddIntegrationResponse>(await this.doRequest("AddIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddIntegrationResponse({}));
  }

  async addIntegration(request: AddIntegrationRequest): Promise<AddIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIntegrationWithOptions(request, runtime);
  }

  async addPrometheusGlobalViewWithOptions(request: AddPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AddPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<AddPrometheusGlobalViewResponse>(await this.doRequest("AddPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddPrometheusGlobalViewResponse({}));
  }

  async addPrometheusGlobalView(request: AddPrometheusGlobalViewRequest): Promise<AddPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewWithOptions(request, runtime);
  }

  async addPrometheusGlobalViewByAliClusterIdsWithOptions(request: AddPrometheusGlobalViewByAliClusterIdsRequest, runtime: $Util.RuntimeOptions): Promise<AddPrometheusGlobalViewByAliClusterIdsResponse> {
    Util.validateModel(request);
    return $tea.cast<AddPrometheusGlobalViewByAliClusterIdsResponse>(await this.doRequest("AddPrometheusGlobalViewByAliClusterIds", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddPrometheusGlobalViewByAliClusterIdsResponse({}));
  }

  async addPrometheusGlobalViewByAliClusterIds(request: AddPrometheusGlobalViewByAliClusterIdsRequest): Promise<AddPrometheusGlobalViewByAliClusterIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewByAliClusterIdsWithOptions(request, runtime);
  }

  async addRecordingRuleWithOptions(request: AddRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddRecordingRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<AddRecordingRuleResponse>(await this.doRequest("AddRecordingRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddRecordingRuleResponse({}));
  }

  async addRecordingRule(request: AddRecordingRuleRequest): Promise<AddRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordingRuleWithOptions(request, runtime);
  }

  async appendInstancesToPrometheusGlobalViewWithOptions(request: AppendInstancesToPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<AppendInstancesToPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<AppendInstancesToPrometheusGlobalViewResponse>(await this.doRequest("AppendInstancesToPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AppendInstancesToPrometheusGlobalViewResponse({}));
  }

  async appendInstancesToPrometheusGlobalView(request: AppendInstancesToPrometheusGlobalViewRequest): Promise<AppendInstancesToPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appendInstancesToPrometheusGlobalViewWithOptions(request, runtime);
  }

  async applyScenarioWithOptions(tmp: ApplyScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ApplyScenarioResponse> {
    Util.validateModel(tmp);
    let request = new ApplyScenarioShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.config)) {
      request.configShrink = Util.toJSONString(tmp.config);
    }

    return $tea.cast<ApplyScenarioResponse>(await this.doRequest("ApplyScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ApplyScenarioResponse({}));
  }

  async applyScenario(request: ApplyScenarioRequest): Promise<ApplyScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  async batchDeleteAlertContactWithOptions(request: BatchDeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchDeleteAlertContactResponse>(await this.doRequest("BatchDeleteAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new BatchDeleteAlertContactResponse({}));
  }

  async batchDeleteAlertContact(request: BatchDeleteAlertContactRequest): Promise<BatchDeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteAlertContactWithOptions(request, runtime);
  }

  async batchVerifyLinkWithOptions(request: BatchVerifyLinkRequest, runtime: $Util.RuntimeOptions): Promise<BatchVerifyLinkResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchVerifyLinkResponse>(await this.doRequest("BatchVerifyLink", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new BatchVerifyLinkResponse({}));
  }

  async batchVerifyLink(request: BatchVerifyLinkRequest): Promise<BatchVerifyLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchVerifyLinkWithOptions(request, runtime);
  }

  async CMonitorAlertEventWithOptions(request: CMonitorAlertEventRequest, runtime: $Util.RuntimeOptions): Promise<CMonitorAlertEventResponse> {
    Util.validateModel(request);
    return $tea.cast<CMonitorAlertEventResponse>(await this.doRequest("CMonitorAlertEvent", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new CMonitorAlertEventResponse({}));
  }

  async CMonitorAlertEvent(request: CMonitorAlertEventRequest): Promise<CMonitorAlertEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.CMonitorAlertEventWithOptions(request, runtime);
  }

  async checkServiceStatusWithOptions(request: CheckServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckServiceStatusResponse>(await this.doRequest("CheckServiceStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CheckServiceStatusResponse({}));
  }

  async checkServiceStatus(request: CheckServiceStatusRequest): Promise<CheckServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceStatusWithOptions(request, runtime);
  }

  async configAppWithOptions(request: ConfigAppRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAppResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigAppResponse>(await this.doRequest("ConfigApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ConfigAppResponse({}));
  }

  async configApp(request: ConfigAppRequest): Promise<ConfigAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  async createAlertContactWithOptions(request: CreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAlertContactResponse>(await this.doRequest("CreateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateAlertContactResponse({}));
  }

  async createAlertContact(request: CreateAlertContactRequest): Promise<CreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  async createAlertContactGroupWithOptions(request: CreateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAlertContactGroupResponse>(await this.doRequest("CreateAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateAlertContactGroupResponse({}));
  }

  async createAlertContactGroup(request: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  async createContactScheduleWithOptions(request: CreateContactScheduleRequest, runtime: $Util.RuntimeOptions): Promise<CreateContactScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateContactScheduleResponse>(await this.doRequest("CreateContactSchedule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateContactScheduleResponse({}));
  }

  async createContactSchedule(request: CreateContactScheduleRequest): Promise<CreateContactScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContactScheduleWithOptions(request, runtime);
  }

  async createDispatchRuleWithOptions(request: CreateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDispatchRuleResponse>(await this.doRequest("CreateDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateDispatchRuleResponse({}));
  }

  async createDispatchRule(request: CreateDispatchRuleRequest): Promise<CreateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDispatchRuleWithOptions(request, runtime);
  }

  async createEscalationWithOptions(request: CreateEscalationRequest, runtime: $Util.RuntimeOptions): Promise<CreateEscalationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEscalationResponse>(await this.doRequest("CreateEscalation", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateEscalationResponse({}));
  }

  async createEscalation(request: CreateEscalationRequest): Promise<CreateEscalationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEscalationWithOptions(request, runtime);
  }

  async createOrUpdateAlertRuleWithOptions(request: CreateOrUpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateAlertRuleResponse>(await this.doRequest("CreateOrUpdateAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateAlertRuleResponse({}));
  }

  async createOrUpdateAlertRule(request: CreateOrUpdateAlertRuleRequest): Promise<CreateOrUpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateAlertRuleWithOptions(request, runtime);
  }

  async createOrUpdateContactWithOptions(request: CreateOrUpdateContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateContactResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateContactResponse>(await this.doRequest("CreateOrUpdateContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateContactResponse({}));
  }

  async createOrUpdateContact(request: CreateOrUpdateContactRequest): Promise<CreateOrUpdateContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateContactWithOptions(request, runtime);
  }

  async createOrUpdateContactGroupWithOptions(request: CreateOrUpdateContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateContactGroupResponse>(await this.doRequest("CreateOrUpdateContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateContactGroupResponse({}));
  }

  async createOrUpdateContactGroup(request: CreateOrUpdateContactGroupRequest): Promise<CreateOrUpdateContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateContactGroupWithOptions(request, runtime);
  }

  async createOrUpdateEventBridgeIntegrationWithOptions(request: CreateOrUpdateEventBridgeIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateEventBridgeIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateEventBridgeIntegrationResponse>(await this.doRequest("CreateOrUpdateEventBridgeIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateEventBridgeIntegrationResponse({}));
  }

  async createOrUpdateEventBridgeIntegration(request: CreateOrUpdateEventBridgeIntegrationRequest): Promise<CreateOrUpdateEventBridgeIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateEventBridgeIntegrationWithOptions(request, runtime);
  }

  async createOrUpdateIMRobotWithOptions(request: CreateOrUpdateIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateIMRobotResponse>(await this.doRequest("CreateOrUpdateIMRobot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateIMRobotResponse({}));
  }

  async createOrUpdateIMRobot(request: CreateOrUpdateIMRobotRequest): Promise<CreateOrUpdateIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateIMRobotWithOptions(request, runtime);
  }

  async createOrUpdateNotificationPolicyWithOptions(request: CreateOrUpdateNotificationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateNotificationPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateNotificationPolicyResponse>(await this.doRequest("CreateOrUpdateNotificationPolicy", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateNotificationPolicyResponse({}));
  }

  async createOrUpdateNotificationPolicy(request: CreateOrUpdateNotificationPolicyRequest): Promise<CreateOrUpdateNotificationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateNotificationPolicyWithOptions(request, runtime);
  }

  async createOrUpdateSilencePolicyWithOptions(request: CreateOrUpdateSilencePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateSilencePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateSilencePolicyResponse>(await this.doRequest("CreateOrUpdateSilencePolicy", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateSilencePolicyResponse({}));
  }

  async createOrUpdateSilencePolicy(request: CreateOrUpdateSilencePolicyRequest): Promise<CreateOrUpdateSilencePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateSilencePolicyWithOptions(request, runtime);
  }

  async createOrUpdateWebhookContactWithOptions(request: CreateOrUpdateWebhookContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateWebhookContactResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOrUpdateWebhookContactResponse>(await this.doRequest("CreateOrUpdateWebhookContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateOrUpdateWebhookContactResponse({}));
  }

  async createOrUpdateWebhookContact(request: CreateOrUpdateWebhookContactRequest): Promise<CreateOrUpdateWebhookContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateWebhookContactWithOptions(request, runtime);
  }

  async createPrometheusAlertRuleWithOptions(request: CreatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePrometheusAlertRuleResponse>(await this.doRequest("CreatePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreatePrometheusAlertRuleResponse({}));
  }

  async createPrometheusAlertRule(request: CreatePrometheusAlertRuleRequest): Promise<CreatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrometheusAlertRuleWithOptions(request, runtime);
  }

  async createRetcodeAppWithOptions(request: CreateRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateRetcodeAppResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRetcodeAppResponse>(await this.doRequest("CreateRetcodeApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateRetcodeAppResponse({}));
  }

  async createRetcodeApp(request: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  async createWebhookWithOptions(request: CreateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWebhookResponse>(await this.doRequest("CreateWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateWebhookResponse({}));
  }

  async createWebhook(request: CreateWebhookRequest): Promise<CreateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebhookWithOptions(request, runtime);
  }

  async deleteAlertContactWithOptions(request: DeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertContactResponse>(await this.doRequest("DeleteAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  async deleteAlertContactGroupWithOptions(request: DeleteAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.doRequest("DeleteAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  async deleteAlertRuleWithOptions(request: DeleteAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertRuleResponse>(await this.doRequest("DeleteAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertRuleResponse({}));
  }

  async deleteAlertRule(request: DeleteAlertRuleRequest): Promise<DeleteAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRuleWithOptions(request, runtime);
  }

  async deleteAlertRulesWithOptions(request: DeleteAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertRulesResponse>(await this.doRequest("DeleteAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertRulesResponse({}));
  }

  async deleteAlertRules(request: DeleteAlertRulesRequest): Promise<DeleteAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  async deleteCmsExporterWithOptions(request: DeleteCmsExporterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCmsExporterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCmsExporterResponse>(await this.doRequest("DeleteCmsExporter", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteCmsExporterResponse({}));
  }

  async deleteCmsExporter(request: DeleteCmsExporterRequest): Promise<DeleteCmsExporterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCmsExporterWithOptions(request, runtime);
  }

  async deleteContactWithOptions(request: DeleteContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteContactResponse>(await this.doRequest("DeleteContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteContactResponse({}));
  }

  async deleteContact(request: DeleteContactRequest): Promise<DeleteContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  async deleteContactGroupWithOptions(request: DeleteContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteContactGroupResponse>(await this.doRequest("DeleteContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteContactGroupResponse({}));
  }

  async deleteContactGroup(request: DeleteContactGroupRequest): Promise<DeleteContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  async deleteContactGroupInContactWithOptions(request: DeleteContactGroupInContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactGroupInContactResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteContactGroupInContactResponse>(await this.doRequest("DeleteContactGroupInContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteContactGroupInContactResponse({}));
  }

  async deleteContactGroupInContact(request: DeleteContactGroupInContactRequest): Promise<DeleteContactGroupInContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactGroupInContactWithOptions(request, runtime);
  }

  async deleteContactScheduleWithOptions(request: DeleteContactScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteContactScheduleResponse>(await this.doRequest("DeleteContactSchedule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteContactScheduleResponse({}));
  }

  async deleteContactSchedule(request: DeleteContactScheduleRequest): Promise<DeleteContactScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactScheduleWithOptions(request, runtime);
  }

  async deleteDispatchRuleWithOptions(request: DeleteDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDispatchRuleResponse>(await this.doRequest("DeleteDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteDispatchRuleResponse({}));
  }

  async deleteDispatchRule(request: DeleteDispatchRuleRequest): Promise<DeleteDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDispatchRuleWithOptions(request, runtime);
  }

  async deleteEscalationWithOptions(request: DeleteEscalationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEscalationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEscalationResponse>(await this.doRequest("DeleteEscalation", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteEscalationResponse({}));
  }

  async deleteEscalation(request: DeleteEscalationRequest): Promise<DeleteEscalationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEscalationWithOptions(request, runtime);
  }

  async deleteEventBridgeIntegrationWithOptions(request: DeleteEventBridgeIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventBridgeIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEventBridgeIntegrationResponse>(await this.doRequest("DeleteEventBridgeIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteEventBridgeIntegrationResponse({}));
  }

  async deleteEventBridgeIntegration(request: DeleteEventBridgeIntegrationRequest): Promise<DeleteEventBridgeIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventBridgeIntegrationWithOptions(request, runtime);
  }

  async deleteIMRobotWithOptions(request: DeleteIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteIMRobotResponse>(await this.doRequest("DeleteIMRobot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteIMRobotResponse({}));
  }

  async deleteIMRobot(request: DeleteIMRobotRequest): Promise<DeleteIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIMRobotWithOptions(request, runtime);
  }

  async deleteIntegrationWithOptions(request: DeleteIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteIntegrationResponse>(await this.doRequest("DeleteIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteIntegrationResponse({}));
  }

  async deleteIntegration(request: DeleteIntegrationRequest): Promise<DeleteIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIntegrationWithOptions(request, runtime);
  }

  async deleteNotificationPolicyWithOptions(request: DeleteNotificationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNotificationPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteNotificationPolicyResponse>(await this.doRequest("DeleteNotificationPolicy", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteNotificationPolicyResponse({}));
  }

  async deleteNotificationPolicy(request: DeleteNotificationPolicyRequest): Promise<DeleteNotificationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationPolicyWithOptions(request, runtime);
  }

  async deletePrometheusAlertRuleWithOptions(request: DeletePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePrometheusAlertRuleResponse>(await this.doRequest("DeletePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeletePrometheusAlertRuleResponse({}));
  }

  async deletePrometheusAlertRule(request: DeletePrometheusAlertRuleRequest): Promise<DeletePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrometheusAlertRuleWithOptions(request, runtime);
  }

  async deletePrometheusGlobalViewWithOptions(request: DeletePrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePrometheusGlobalViewResponse>(await this.doRequest("DeletePrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeletePrometheusGlobalViewResponse({}));
  }

  async deletePrometheusGlobalView(request: DeletePrometheusGlobalViewRequest): Promise<DeletePrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrometheusGlobalViewWithOptions(request, runtime);
  }

  async deleteRetcodeAppWithOptions(request: DeleteRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRetcodeAppResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRetcodeAppResponse>(await this.doRequest("DeleteRetcodeApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteRetcodeAppResponse({}));
  }

  async deleteRetcodeApp(request: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  async deleteScenarioWithOptions(request: DeleteScenarioRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScenarioResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteScenarioResponse>(await this.doRequest("DeleteScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteScenarioResponse({}));
  }

  async deleteScenario(request: DeleteScenarioRequest): Promise<DeleteScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  async deleteSilencePolicyWithOptions(request: DeleteSilencePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSilencePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSilencePolicyResponse>(await this.doRequest("DeleteSilencePolicy", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteSilencePolicyResponse({}));
  }

  async deleteSilencePolicy(request: DeleteSilencePolicyRequest): Promise<DeleteSilencePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSilencePolicyWithOptions(request, runtime);
  }

  async deleteTraceAppWithOptions(request: DeleteTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTraceAppResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTraceAppResponse>(await this.doRequest("DeleteTraceApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteTraceAppResponse({}));
  }

  async deleteTraceApp(request: DeleteTraceAppRequest): Promise<DeleteTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  async deleteWebhookContactWithOptions(request: DeleteWebhookContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWebhookContactResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteWebhookContactResponse>(await this.doRequest("DeleteWebhookContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteWebhookContactResponse({}));
  }

  async deleteWebhookContact(request: DeleteWebhookContactRequest): Promise<DeleteWebhookContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWebhookContactWithOptions(request, runtime);
  }

  async describeContactGroupsWithOptions(request: DescribeContactGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeContactGroupsResponse>(await this.doRequest("DescribeContactGroups", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeContactGroupsResponse({}));
  }

  async describeContactGroups(request: DescribeContactGroupsRequest): Promise<DescribeContactGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactGroupsWithOptions(request, runtime);
  }

  async describeContactsWithOptions(request: DescribeContactsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeContactsResponse>(await this.doRequest("DescribeContacts", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeContactsResponse({}));
  }

  async describeContacts(request: DescribeContactsRequest): Promise<DescribeContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactsWithOptions(request, runtime);
  }

  async describeDispatchRuleWithOptions(request: DescribeDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDispatchRuleResponse>(await this.doRequest("DescribeDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeDispatchRuleResponse({}));
  }

  async describeDispatchRule(request: DescribeDispatchRuleRequest): Promise<DescribeDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  async describeIMRobotsWithOptions(request: DescribeIMRobotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIMRobotsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeIMRobotsResponse>(await this.doRequest("DescribeIMRobots", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeIMRobotsResponse({}));
  }

  async describeIMRobots(request: DescribeIMRobotsRequest): Promise<DescribeIMRobotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIMRobotsWithOptions(request, runtime);
  }

  async describePrometheusAlertRuleWithOptions(request: DescribePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePrometheusAlertRuleResponse>(await this.doRequest("DescribePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribePrometheusAlertRuleResponse({}));
  }

  async describePrometheusAlertRule(request: DescribePrometheusAlertRuleRequest): Promise<DescribePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrometheusAlertRuleWithOptions(request, runtime);
  }

  async describeTraceLicenseKeyWithOptions(request: DescribeTraceLicenseKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLicenseKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTraceLicenseKeyResponse>(await this.doRequest("DescribeTraceLicenseKey", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeTraceLicenseKeyResponse({}));
  }

  async describeTraceLicenseKey(request: DescribeTraceLicenseKeyRequest): Promise<DescribeTraceLicenseKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  async describeWebhookContactsWithOptions(request: DescribeWebhookContactsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebhookContactsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeWebhookContactsResponse>(await this.doRequest("DescribeWebhookContacts", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new DescribeWebhookContactsResponse({}));
  }

  async describeWebhookContacts(request: DescribeWebhookContactsRequest): Promise<DescribeWebhookContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebhookContactsWithOptions(request, runtime);
  }

  async exploreTraceWithOptions(request: ExploreTraceRequest, runtime: $Util.RuntimeOptions): Promise<ExploreTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<ExploreTraceResponse>(await this.doRequest("ExploreTrace", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ExploreTraceResponse({}));
  }

  async exploreTrace(request: ExploreTraceRequest): Promise<ExploreTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exploreTraceWithOptions(request, runtime);
  }

  async getAgentDownloadUrlWithOptions(request: GetAgentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDownloadUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAgentDownloadUrlResponse>(await this.doRequest("GetAgentDownloadUrl", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetAgentDownloadUrlResponse({}));
  }

  async getAgentDownloadUrl(request: GetAgentDownloadUrlRequest): Promise<GetAgentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  async getAlertRulesWithOptions(request: GetAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAlertRulesResponse>(await this.doRequest("GetAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetAlertRulesResponse({}));
  }

  async getAlertRules(request: GetAlertRulesRequest): Promise<GetAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertRulesWithOptions(request, runtime);
  }

  async getAppApiByPageWithOptions(request: GetAppApiByPageRequest, runtime: $Util.RuntimeOptions): Promise<GetAppApiByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAppApiByPageResponse>(await this.doRequest("GetAppApiByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetAppApiByPageResponse({}));
  }

  async getAppApiByPage(request: GetAppApiByPageRequest): Promise<GetAppApiByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAuthTokenResponse>(await this.doRequest("GetAuthToken", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetAuthTokenResponse({}));
  }

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  async getClusterInfoWithOptions(request: GetClusterInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetClusterInfoResponse>(await this.doRequest("GetClusterInfo", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetClusterInfoResponse({}));
  }

  async getClusterInfo(request: GetClusterInfoRequest): Promise<GetClusterInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterInfoWithOptions(request, runtime);
  }

  async getClusterStateWithOptions(request: GetClusterStateRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterStateResponse> {
    Util.validateModel(request);
    return $tea.cast<GetClusterStateResponse>(await this.doRequest("GetClusterState", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetClusterStateResponse({}));
  }

  async getClusterState(request: GetClusterStateRequest): Promise<GetClusterStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterStateWithOptions(request, runtime);
  }

  async getContactScheduleDetailWithOptions(request: GetContactScheduleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetContactScheduleDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetContactScheduleDetailResponse>(await this.doRequest("GetContactScheduleDetail", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetContactScheduleDetailResponse({}));
  }

  async getContactScheduleDetail(request: GetContactScheduleDetailRequest): Promise<GetContactScheduleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContactScheduleDetailWithOptions(request, runtime);
  }

  async getEscalationDetailWithOptions(request: GetEscalationDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetEscalationDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEscalationDetailResponse>(await this.doRequest("GetEscalationDetail", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetEscalationDetailResponse({}));
  }

  async getEscalationDetail(request: GetEscalationDetailRequest): Promise<GetEscalationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEscalationDetailWithOptions(request, runtime);
  }

  async getEstimateFeeInfoWithOptions(request: GetEstimateFeeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetEstimateFeeInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEstimateFeeInfoResponse>(await this.doRequest("GetEstimateFeeInfo", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetEstimateFeeInfoResponse({}));
  }

  async getEstimateFeeInfo(request: GetEstimateFeeInfoRequest): Promise<GetEstimateFeeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEstimateFeeInfoWithOptions(request, runtime);
  }

  async getExploreUrlWithOptions(request: GetExploreUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetExploreUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetExploreUrlResponse>(await this.doRequest("GetExploreUrl", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetExploreUrlResponse({}));
  }

  async getExploreUrl(request: GetExploreUrlRequest): Promise<GetExploreUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExploreUrlWithOptions(request, runtime);
  }

  async getIntegrationStateWithOptions(request: GetIntegrationStateRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegrationStateResponse> {
    Util.validateModel(request);
    return $tea.cast<GetIntegrationStateResponse>(await this.doRequest("GetIntegrationState", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetIntegrationStateResponse({}));
  }

  async getIntegrationState(request: GetIntegrationStateRequest): Promise<GetIntegrationStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegrationStateWithOptions(request, runtime);
  }

  async getMultipleTraceWithOptions(request: GetMultipleTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetMultipleTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMultipleTraceResponse>(await this.doRequest("GetMultipleTrace", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetMultipleTraceResponse({}));
  }

  async getMultipleTrace(request: GetMultipleTraceRequest): Promise<GetMultipleTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  async getPrometheusApiTokenWithOptions(request: GetPrometheusApiTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusApiTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPrometheusApiTokenResponse>(await this.doRequest("GetPrometheusApiToken", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetPrometheusApiTokenResponse({}));
  }

  async getPrometheusApiToken(request: GetPrometheusApiTokenRequest): Promise<GetPrometheusApiTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  async getPrometheusGlobalViewWithOptions(request: GetPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPrometheusGlobalViewResponse>(await this.doRequest("GetPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetPrometheusGlobalViewResponse({}));
  }

  async getPrometheusGlobalView(request: GetPrometheusGlobalViewRequest): Promise<GetPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusGlobalViewWithOptions(request, runtime);
  }

  async getRecordingRuleWithOptions(request: GetRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordingRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRecordingRuleResponse>(await this.doRequest("GetRecordingRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetRecordingRuleResponse({}));
  }

  async getRecordingRule(request: GetRecordingRuleRequest): Promise<GetRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordingRuleWithOptions(request, runtime);
  }

  async getRetcodeShareUrlWithOptions(request: GetRetcodeShareUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetRetcodeShareUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRetcodeShareUrlResponse>(await this.doRequest("GetRetcodeShareUrl", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetRetcodeShareUrlResponse({}));
  }

  async getRetcodeShareUrl(request: GetRetcodeShareUrlRequest): Promise<GetRetcodeShareUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    return $tea.cast<GetStackResponse>(await this.doRequest("GetStack", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTraceResponse>(await this.doRequest("GetTrace", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async getTraceAppWithOptions(request: GetTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceAppResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTraceAppResponse>(await this.doRequest("GetTraceApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetTraceAppResponse({}));
  }

  async getTraceApp(request: GetTraceAppRequest): Promise<GetTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  async getUserCommercialStatusWithOptions(request: GetUserCommercialStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetUserCommercialStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetUserCommercialStatusResponse>(await this.doRequest("GetUserCommercialStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetUserCommercialStatusResponse({}));
  }

  async getUserCommercialStatus(request: GetUserCommercialStatusRequest): Promise<GetUserCommercialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserCommercialStatusWithOptions(request, runtime);
  }

  async importAppAlertRulesWithOptions(request: ImportAppAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportAppAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportAppAlertRulesResponse>(await this.doRequest("ImportAppAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ImportAppAlertRulesResponse({}));
  }

  async importAppAlertRules(request: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  async innerAddAlertContactReturIdWithOptions(request: InnerAddAlertContactReturIdRequest, runtime: $Util.RuntimeOptions): Promise<InnerAddAlertContactReturIdResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerAddAlertContactReturIdResponse>(await this.doRequest("InnerAddAlertContactReturId", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerAddAlertContactReturIdResponse({}));
  }

  async innerAddAlertContactReturId(request: InnerAddAlertContactReturIdRequest): Promise<InnerAddAlertContactReturIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerAddAlertContactReturIdWithOptions(request, runtime);
  }

  async innerCreateAlertContactWithOptions(request: InnerCreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<InnerCreateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerCreateAlertContactResponse>(await this.doRequest("InnerCreateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerCreateAlertContactResponse({}));
  }

  async innerCreateAlertContact(request: InnerCreateAlertContactRequest): Promise<InnerCreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerCreateAlertContactWithOptions(request, runtime);
  }

  async innerCreateAlertWebhookWithOptions(request: InnerCreateAlertWebhookRequest, runtime: $Util.RuntimeOptions): Promise<InnerCreateAlertWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerCreateAlertWebhookResponse>(await this.doRequest("InnerCreateAlertWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerCreateAlertWebhookResponse({}));
  }

  async innerCreateAlertWebhook(request: InnerCreateAlertWebhookRequest): Promise<InnerCreateAlertWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerCreateAlertWebhookWithOptions(request, runtime);
  }

  async innerCreateContactGroupWithOptions(request: InnerCreateContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<InnerCreateContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerCreateContactGroupResponse>(await this.doRequest("InnerCreateContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerCreateContactGroupResponse({}));
  }

  async innerCreateContactGroup(request: InnerCreateContactGroupRequest): Promise<InnerCreateContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerCreateContactGroupWithOptions(request, runtime);
  }

  async innerCreateEscalationReturnIdWithOptions(request: InnerCreateEscalationReturnIdRequest, runtime: $Util.RuntimeOptions): Promise<InnerCreateEscalationReturnIdResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerCreateEscalationReturnIdResponse>(await this.doRequest("InnerCreateEscalationReturnId", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerCreateEscalationReturnIdResponse({}));
  }

  async innerCreateEscalationReturnId(request: InnerCreateEscalationReturnIdRequest): Promise<InnerCreateEscalationReturnIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerCreateEscalationReturnIdWithOptions(request, runtime);
  }

  async innerCreateIMRobotWithOptions(request: InnerCreateIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<InnerCreateIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerCreateIMRobotResponse>(await this.doRequest("InnerCreateIMRobot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerCreateIMRobotResponse({}));
  }

  async innerCreateIMRobot(request: InnerCreateIMRobotRequest): Promise<InnerCreateIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerCreateIMRobotWithOptions(request, runtime);
  }

  async innerDeleteAlertContactWithOptions(request: InnerDeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<InnerDeleteAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerDeleteAlertContactResponse>(await this.doRequest("InnerDeleteAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerDeleteAlertContactResponse({}));
  }

  async innerDeleteAlertContact(request: InnerDeleteAlertContactRequest): Promise<InnerDeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerDeleteAlertContactWithOptions(request, runtime);
  }

  async innerDeleteContactGroupWithOptions(request: InnerDeleteContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<InnerDeleteContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerDeleteContactGroupResponse>(await this.doRequest("InnerDeleteContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerDeleteContactGroupResponse({}));
  }

  async innerDeleteContactGroup(request: InnerDeleteContactGroupRequest): Promise<InnerDeleteContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerDeleteContactGroupWithOptions(request, runtime);
  }

  async innerDeleteIMRobotWithOptions(request: InnerDeleteIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<InnerDeleteIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerDeleteIMRobotResponse>(await this.doRequest("InnerDeleteIMRobot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerDeleteIMRobotResponse({}));
  }

  async innerDeleteIMRobot(request: InnerDeleteIMRobotRequest): Promise<InnerDeleteIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerDeleteIMRobotWithOptions(request, runtime);
  }

  async innerFetchContactWithOptions(request: InnerFetchContactRequest, runtime: $Util.RuntimeOptions): Promise<InnerFetchContactResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerFetchContactResponse>(await this.doRequest("InnerFetchContact", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new InnerFetchContactResponse({}));
  }

  async innerFetchContact(request: InnerFetchContactRequest): Promise<InnerFetchContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerFetchContactWithOptions(request, runtime);
  }

  async innerFindContactIdWithOptions(request: InnerFindContactIdRequest, runtime: $Util.RuntimeOptions): Promise<InnerFindContactIdResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerFindContactIdResponse>(await this.doRequest("InnerFindContactId", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new InnerFindContactIdResponse({}));
  }

  async innerFindContactId(request: InnerFindContactIdRequest): Promise<InnerFindContactIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerFindContactIdWithOptions(request, runtime);
  }

  async innerSendNocMessageWithOptions(request: InnerSendNocMessageRequest, runtime: $Util.RuntimeOptions): Promise<InnerSendNocMessageResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerSendNocMessageResponse>(await this.doRequest("InnerSendNocMessage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerSendNocMessageResponse({}));
  }

  async innerSendNocMessage(request: InnerSendNocMessageRequest): Promise<InnerSendNocMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerSendNocMessageWithOptions(request, runtime);
  }

  async innerUpdateAlertContactWithOptions(request: InnerUpdateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<InnerUpdateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerUpdateAlertContactResponse>(await this.doRequest("InnerUpdateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerUpdateAlertContactResponse({}));
  }

  async innerUpdateAlertContact(request: InnerUpdateAlertContactRequest): Promise<InnerUpdateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerUpdateAlertContactWithOptions(request, runtime);
  }

  async innerUpdateAlertWebhookWithOptions(request: InnerUpdateAlertWebhookRequest, runtime: $Util.RuntimeOptions): Promise<InnerUpdateAlertWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerUpdateAlertWebhookResponse>(await this.doRequest("InnerUpdateAlertWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerUpdateAlertWebhookResponse({}));
  }

  async innerUpdateAlertWebhook(request: InnerUpdateAlertWebhookRequest): Promise<InnerUpdateAlertWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerUpdateAlertWebhookWithOptions(request, runtime);
  }

  async innerUpdateContactGroupWithOptions(request: InnerUpdateContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<InnerUpdateContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerUpdateContactGroupResponse>(await this.doRequest("InnerUpdateContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerUpdateContactGroupResponse({}));
  }

  async innerUpdateContactGroup(request: InnerUpdateContactGroupRequest): Promise<InnerUpdateContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerUpdateContactGroupWithOptions(request, runtime);
  }

  async innerUpdateIMRobotWithOptions(request: InnerUpdateIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<InnerUpdateIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerUpdateIMRobotResponse>(await this.doRequest("InnerUpdateIMRobot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InnerUpdateIMRobotResponse({}));
  }

  async innerUpdateIMRobot(request: InnerUpdateIMRobotRequest): Promise<InnerUpdateIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerUpdateIMRobotWithOptions(request, runtime);
  }

  async innerVerifyContactWithOptions(request: InnerVerifyContactRequest, runtime: $Util.RuntimeOptions): Promise<InnerVerifyContactResponse> {
    Util.validateModel(request);
    return $tea.cast<InnerVerifyContactResponse>(await this.doRequest("InnerVerifyContact", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new InnerVerifyContactResponse({}));
  }

  async innerVerifyContact(request: InnerVerifyContactRequest): Promise<InnerVerifyContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.innerVerifyContactWithOptions(request, runtime);
  }

  async installCmsExporterWithOptions(request: InstallCmsExporterRequest, runtime: $Util.RuntimeOptions): Promise<InstallCmsExporterResponse> {
    Util.validateModel(request);
    return $tea.cast<InstallCmsExporterResponse>(await this.doRequest("InstallCmsExporter", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InstallCmsExporterResponse({}));
  }

  async installCmsExporter(request: InstallCmsExporterRequest): Promise<InstallCmsExporterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCmsExporterWithOptions(request, runtime);
  }

  async installManagedPrometheusWithOptions(request: InstallManagedPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<InstallManagedPrometheusResponse> {
    Util.validateModel(request);
    return $tea.cast<InstallManagedPrometheusResponse>(await this.doRequest("InstallManagedPrometheus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new InstallManagedPrometheusResponse({}));
  }

  async installManagedPrometheus(request: InstallManagedPrometheusRequest): Promise<InstallManagedPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installManagedPrometheusWithOptions(request, runtime);
  }

  async listActivatedAlertsWithOptions(request: ListActivatedAlertsRequest, runtime: $Util.RuntimeOptions): Promise<ListActivatedAlertsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListActivatedAlertsResponse>(await this.doRequest("ListActivatedAlerts", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListActivatedAlertsResponse({}));
  }

  async listActivatedAlerts(request: ListActivatedAlertsRequest): Promise<ListActivatedAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActivatedAlertsWithOptions(request, runtime);
  }

  async listAlertContactWithOptions(request: ListAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAlertContactResponse>(await this.doRequest("ListAlertContact", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListAlertContactResponse({}));
  }

  async listAlertContact(request: ListAlertContactRequest): Promise<ListAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertContactWithOptions(request, runtime);
  }

  async listAlertContactGroupWithOptions(request: ListAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAlertContactGroupResponse>(await this.doRequest("ListAlertContactGroup", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListAlertContactGroupResponse({}));
  }

  async listAlertContactGroup(request: ListAlertContactGroupRequest): Promise<ListAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertContactGroupWithOptions(request, runtime);
  }

  async listAlertsWithOptions(request: ListAlertsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAlertsResponse>(await this.doRequest("ListAlerts", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListAlertsResponse({}));
  }

  async listAlerts(request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertsWithOptions(request, runtime);
  }

  async listAllAlertContactWithOptions(request: ListAllAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<ListAllAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAllAlertContactResponse>(await this.doRequest("ListAllAlertContact", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListAllAlertContactResponse({}));
  }

  async listAllAlertContact(request: ListAllAlertContactRequest): Promise<ListAllAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllAlertContactWithOptions(request, runtime);
  }

  async listAllIMRobotWithOptions(request: ListAllIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<ListAllIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAllIMRobotResponse>(await this.doRequest("ListAllIMRobot", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListAllIMRobotResponse({}));
  }

  async listAllIMRobot(request: ListAllIMRobotRequest): Promise<ListAllIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllIMRobotWithOptions(request, runtime);
  }

  async listClusterFromGrafanaWithOptions(request: ListClusterFromGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterFromGrafanaResponse> {
    Util.validateModel(request);
    return $tea.cast<ListClusterFromGrafanaResponse>(await this.doRequest("ListClusterFromGrafana", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListClusterFromGrafanaResponse({}));
  }

  async listClusterFromGrafana(request: ListClusterFromGrafanaRequest): Promise<ListClusterFromGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  async listCmsInstancesWithOptions(request: ListCmsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListCmsInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCmsInstancesResponse>(await this.doRequest("ListCmsInstances", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListCmsInstancesResponse({}));
  }

  async listCmsInstances(request: ListCmsInstancesRequest): Promise<ListCmsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCmsInstancesWithOptions(request, runtime);
  }

  async listContactGroupInContactWithOptions(request: ListContactGroupInContactRequest, runtime: $Util.RuntimeOptions): Promise<ListContactGroupInContactResponse> {
    Util.validateModel(request);
    return $tea.cast<ListContactGroupInContactResponse>(await this.doRequest("ListContactGroupInContact", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListContactGroupInContactResponse({}));
  }

  async listContactGroupInContact(request: ListContactGroupInContactRequest): Promise<ListContactGroupInContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactGroupInContactWithOptions(request, runtime);
  }

  async listContactScheduleWithOptions(request: ListContactScheduleRequest, runtime: $Util.RuntimeOptions): Promise<ListContactScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<ListContactScheduleResponse>(await this.doRequest("ListContactSchedule", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListContactScheduleResponse({}));
  }

  async listContactSchedule(request: ListContactScheduleRequest): Promise<ListContactScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactScheduleWithOptions(request, runtime);
  }

  async listDashboardsWithOptions(request: ListDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<ListDashboardsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDashboardsResponse>(await this.doRequest("ListDashboards", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListDashboardsResponse({}));
  }

  async listDashboards(request: ListDashboardsRequest): Promise<ListDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  async listDispatchRuleWithOptions(request: ListDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDispatchRuleResponse>(await this.doRequest("ListDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListDispatchRuleResponse({}));
  }

  async listDispatchRule(request: ListDispatchRuleRequest): Promise<ListDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDispatchRuleWithOptions(request, runtime);
  }

  async listEscalationWithOptions(request: ListEscalationRequest, runtime: $Util.RuntimeOptions): Promise<ListEscalationResponse> {
    Util.validateModel(request);
    return $tea.cast<ListEscalationResponse>(await this.doRequest("ListEscalation", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListEscalationResponse({}));
  }

  async listEscalation(request: ListEscalationRequest): Promise<ListEscalationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEscalationWithOptions(request, runtime);
  }

  async listEscalationPoliciesWithOptions(request: ListEscalationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListEscalationPoliciesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListEscalationPoliciesResponse>(await this.doRequest("ListEscalationPolicies", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListEscalationPoliciesResponse({}));
  }

  async listEscalationPolicies(request: ListEscalationPoliciesRequest): Promise<ListEscalationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEscalationPoliciesWithOptions(request, runtime);
  }

  async listEventBridgeIntegrationsWithOptions(request: ListEventBridgeIntegrationsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventBridgeIntegrationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListEventBridgeIntegrationsResponse>(await this.doRequest("ListEventBridgeIntegrations", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListEventBridgeIntegrationsResponse({}));
  }

  async listEventBridgeIntegrations(request: ListEventBridgeIntegrationsRequest): Promise<ListEventBridgeIntegrationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventBridgeIntegrationsWithOptions(request, runtime);
  }

  async listIMRobotWithOptions(request: ListIMRobotRequest, runtime: $Util.RuntimeOptions): Promise<ListIMRobotResponse> {
    Util.validateModel(request);
    return $tea.cast<ListIMRobotResponse>(await this.doRequest("ListIMRobot", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListIMRobotResponse({}));
  }

  async listIMRobot(request: ListIMRobotRequest): Promise<ListIMRobotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIMRobotWithOptions(request, runtime);
  }

  async listNotificationPoliciesWithOptions(request: ListNotificationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListNotificationPoliciesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListNotificationPoliciesResponse>(await this.doRequest("ListNotificationPolicies", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListNotificationPoliciesResponse({}));
  }

  async listNotificationPolicies(request: ListNotificationPoliciesRequest): Promise<ListNotificationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotificationPoliciesWithOptions(request, runtime);
  }

  async listOnCallSchedulesWithOptions(request: ListOnCallSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<ListOnCallSchedulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOnCallSchedulesResponse>(await this.doRequest("ListOnCallSchedules", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new ListOnCallSchedulesResponse({}));
  }

  async listOnCallSchedules(request: ListOnCallSchedulesRequest): Promise<ListOnCallSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOnCallSchedulesWithOptions(request, runtime);
  }

  async listPrometheusAlertRulesWithOptions(request: ListPrometheusAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPrometheusAlertRulesResponse>(await this.doRequest("ListPrometheusAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPrometheusAlertRulesResponse({}));
  }

  async listPrometheusAlertRules(request: ListPrometheusAlertRulesRequest): Promise<ListPrometheusAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertRulesWithOptions(request, runtime);
  }

  async listPrometheusAlertTemplatesWithOptions(request: ListPrometheusAlertTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertTemplatesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPrometheusAlertTemplatesResponse>(await this.doRequest("ListPrometheusAlertTemplates", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPrometheusAlertTemplatesResponse({}));
  }

  async listPrometheusAlertTemplates(request: ListPrometheusAlertTemplatesRequest): Promise<ListPrometheusAlertTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertTemplatesWithOptions(request, runtime);
  }

  async listPrometheusGlobalViewWithOptions(request: ListPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPrometheusGlobalViewResponse>(await this.doRequest("ListPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPrometheusGlobalViewResponse({}));
  }

  async listPrometheusGlobalView(request: ListPrometheusGlobalViewRequest): Promise<ListPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusGlobalViewWithOptions(request, runtime);
  }

  async listRetcodeAppsWithOptions(request: ListRetcodeAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListRetcodeAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRetcodeAppsResponse>(await this.doRequest("ListRetcodeApps", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListRetcodeAppsResponse({}));
  }

  async listRetcodeApps(request: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  async listScenarioWithOptions(request: ListScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ListScenarioResponse> {
    Util.validateModel(request);
    return $tea.cast<ListScenarioResponse>(await this.doRequest("ListScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListScenarioResponse({}));
  }

  async listScenario(request: ListScenarioRequest): Promise<ListScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  async listSilencePoliciesWithOptions(request: ListSilencePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSilencePoliciesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSilencePoliciesResponse>(await this.doRequest("ListSilencePolicies", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListSilencePoliciesResponse({}));
  }

  async listSilencePolicies(request: ListSilencePoliciesRequest): Promise<ListSilencePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSilencePoliciesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTraceAppsWithOptions(request: ListTraceAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListTraceAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTraceAppsResponse>(await this.doRequest("ListTraceApps", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListTraceAppsResponse({}));
  }

  async listTraceApps(request: ListTraceAppsRequest): Promise<ListTraceAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
  }

  async manageGetRecordingRuleWithOptions(request: ManageGetRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ManageGetRecordingRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ManageGetRecordingRuleResponse>(await this.doRequest("ManageGetRecordingRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ManageGetRecordingRuleResponse({}));
  }

  async manageGetRecordingRule(request: ManageGetRecordingRuleRequest): Promise<ManageGetRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageGetRecordingRuleWithOptions(request, runtime);
  }

  async manageRecordingRuleWithOptions(request: ManageRecordingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ManageRecordingRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ManageRecordingRuleResponse>(await this.doRequest("ManageRecordingRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ManageRecordingRuleResponse({}));
  }

  async manageRecordingRule(request: ManageRecordingRuleRequest): Promise<ManageRecordingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageRecordingRuleWithOptions(request, runtime);
  }

  async openArmsDefaultSLRWithOptions(request: OpenArmsDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsDefaultSLRResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsDefaultSLRResponse>(await this.doRequest("OpenArmsDefaultSLR", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenArmsDefaultSLRResponse({}));
  }

  async openArmsDefaultSLR(request: OpenArmsDefaultSLRRequest): Promise<OpenArmsDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsDefaultSLRWithOptions(request, runtime);
  }

  async openArmsServiceWithOptions(request: OpenArmsServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsServiceResponse>(await this.doRequest("OpenArmsService", "HTTPS", "POST", "2019-08-08", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new OpenArmsServiceResponse({}));
  }

  async openArmsService(request: OpenArmsServiceRequest): Promise<OpenArmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceWithOptions(request, runtime);
  }

  async openArmsServiceSecondVersionWithOptions(request: OpenArmsServiceSecondVersionRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceSecondVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsServiceSecondVersionResponse>(await this.doRequest("OpenArmsServiceSecondVersion", "HTTPS", "POST", "2019-08-08", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new OpenArmsServiceSecondVersionResponse({}));
  }

  async openArmsServiceSecondVersion(request: OpenArmsServiceSecondVersionRequest): Promise<OpenArmsServiceSecondVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceSecondVersionWithOptions(request, runtime);
  }

  async openVClusterWithOptions(request: OpenVClusterRequest, runtime: $Util.RuntimeOptions): Promise<OpenVClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenVClusterResponse>(await this.doRequest("OpenVCluster", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenVClusterResponse({}));
  }

  async openVCluster(request: OpenVClusterRequest): Promise<OpenVClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVClusterWithOptions(request, runtime);
  }

  async openXtraceDefaultSLRWithOptions(request: OpenXtraceDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenXtraceDefaultSLRResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenXtraceDefaultSLRResponse>(await this.doRequest("OpenXtraceDefaultSLR", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenXtraceDefaultSLRResponse({}));
  }

  async openXtraceDefaultSLR(request: OpenXtraceDefaultSLRRequest): Promise<OpenXtraceDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openXtraceDefaultSLRWithOptions(request, runtime);
  }

  async queryDatasetWithOptions(request: QueryDatasetRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDatasetResponse>(await this.doRequest("QueryDataset", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryDatasetResponse({}));
  }

  async queryDataset(request: QueryDatasetRequest): Promise<QueryDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetWithOptions(request, runtime);
  }

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMetricResponse>(await this.doRequest("QueryMetric", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  async queryMetricByPageWithOptions(request: QueryMetricByPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMetricByPageResponse>(await this.doRequest("QueryMetricByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryMetricByPageResponse({}));
  }

  async queryMetricByPage(request: QueryMetricByPageRequest): Promise<QueryMetricByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  async queryPromInstallStatusWithOptions(request: QueryPromInstallStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryPromInstallStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryPromInstallStatusResponse>(await this.doRequest("QueryPromInstallStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryPromInstallStatusResponse({}));
  }

  async queryPromInstallStatus(request: QueryPromInstallStatusRequest): Promise<QueryPromInstallStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPromInstallStatusWithOptions(request, runtime);
  }

  async queryReleaseMetricWithOptions(request: QueryReleaseMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryReleaseMetricResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryReleaseMetricResponse>(await this.doRequest("QueryReleaseMetric", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryReleaseMetricResponse({}));
  }

  async queryReleaseMetric(request: QueryReleaseMetricRequest): Promise<QueryReleaseMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReleaseMetricWithOptions(request, runtime);
  }

  async queryTracesWithOptions(request: QueryTracesRequest, runtime: $Util.RuntimeOptions): Promise<QueryTracesResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryTracesResponse>(await this.doRequest("QueryTraces", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryTracesResponse({}));
  }

  async queryTraces(request: QueryTracesRequest): Promise<QueryTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTracesWithOptions(request, runtime);
  }

  async removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request: RemoveAliClusterIdsFromPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveAliClusterIdsFromPrometheusGlobalViewResponse>(await this.doRequest("RemoveAliClusterIdsFromPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new RemoveAliClusterIdsFromPrometheusGlobalViewResponse({}));
  }

  async removeAliClusterIdsFromPrometheusGlobalView(request: RemoveAliClusterIdsFromPrometheusGlobalViewRequest): Promise<RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  async removeSourcesFromPrometheusGlobalViewWithOptions(request: RemoveSourcesFromPrometheusGlobalViewRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSourcesFromPrometheusGlobalViewResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveSourcesFromPrometheusGlobalViewResponse>(await this.doRequest("RemoveSourcesFromPrometheusGlobalView", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new RemoveSourcesFromPrometheusGlobalViewResponse({}));
  }

  async removeSourcesFromPrometheusGlobalView(request: RemoveSourcesFromPrometheusGlobalViewRequest): Promise<RemoveSourcesFromPrometheusGlobalViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSourcesFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  async saveTraceAppConfigWithOptions(request: SaveTraceAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveTraceAppConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveTraceAppConfigResponse>(await this.doRequest("SaveTraceAppConfig", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SaveTraceAppConfigResponse({}));
  }

  async saveTraceAppConfig(request: SaveTraceAppConfigRequest): Promise<SaveTraceAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  async searchAlertContactWithOptions(request: SearchAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertContactResponse>(await this.doRequest("SearchAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertContactResponse({}));
  }

  async searchAlertContact(request: SearchAlertContactRequest): Promise<SearchAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  async searchAlertContactGroupWithOptions(request: SearchAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertContactGroupResponse>(await this.doRequest("SearchAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertContactGroupResponse({}));
  }

  async searchAlertContactGroup(request: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  async searchAlertHistoriesWithOptions(request: SearchAlertHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertHistoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertHistoriesResponse>(await this.doRequest("SearchAlertHistories", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertHistoriesResponse({}));
  }

  async searchAlertHistories(request: SearchAlertHistoriesRequest): Promise<SearchAlertHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  async searchAlertRulesWithOptions(request: SearchAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertRulesResponse>(await this.doRequest("SearchAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertRulesResponse({}));
  }

  async searchAlertRules(request: SearchAlertRulesRequest): Promise<SearchAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  async searchEventsWithOptions(request: SearchEventsRequest, runtime: $Util.RuntimeOptions): Promise<SearchEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchEventsResponse>(await this.doRequest("SearchEvents", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchEventsResponse({}));
  }

  async searchEvents(request: SearchEventsRequest): Promise<SearchEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  async searchRetcodeAppByPageWithOptions(request: SearchRetcodeAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchRetcodeAppByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchRetcodeAppByPageResponse>(await this.doRequest("SearchRetcodeAppByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchRetcodeAppByPageResponse({}));
  }

  async searchRetcodeAppByPage(request: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  async searchTagNamesWithOptions(request: SearchTagNamesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTagNamesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTagNamesResponse>(await this.doRequest("SearchTagNames", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTagNamesResponse({}));
  }

  async searchTagNames(request: SearchTagNamesRequest): Promise<SearchTagNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTagNamesWithOptions(request, runtime);
  }

  async searchTagValuesWithOptions(request: SearchTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTagValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTagValuesResponse>(await this.doRequest("SearchTagValues", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTagValuesResponse({}));
  }

  async searchTagValues(request: SearchTagValuesRequest): Promise<SearchTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTagValuesWithOptions(request, runtime);
  }

  async searchTraceAppByNameWithOptions(request: SearchTraceAppByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByNameResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTraceAppByNameResponse>(await this.doRequest("SearchTraceAppByName", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTraceAppByNameResponse({}));
  }

  async searchTraceAppByName(request: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  async searchTraceAppByPageWithOptions(request: SearchTraceAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTraceAppByPageResponse>(await this.doRequest("SearchTraceAppByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTraceAppByPageResponse({}));
  }

  async searchTraceAppByPage(request: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTracesResponse>(await this.doRequest("SearchTraces", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  async searchTracesByPageWithOptions(request: SearchTracesByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTracesByPageResponse>(await this.doRequest("SearchTracesByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTracesByPageResponse({}));
  }

  async searchTracesByPage(request: SearchTracesByPageRequest): Promise<SearchTracesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  async sendTTSVerifyLinkWithOptions(request: SendTTSVerifyLinkRequest, runtime: $Util.RuntimeOptions): Promise<SendTTSVerifyLinkResponse> {
    Util.validateModel(request);
    return $tea.cast<SendTTSVerifyLinkResponse>(await this.doRequest("SendTTSVerifyLink", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SendTTSVerifyLinkResponse({}));
  }

  async sendTTSVerifyLink(request: SendTTSVerifyLinkRequest): Promise<SendTTSVerifyLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTTSVerifyLinkWithOptions(request, runtime);
  }

  async setRetcodeShareStatusWithOptions(request: SetRetcodeShareStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetRetcodeShareStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<SetRetcodeShareStatusResponse>(await this.doRequest("SetRetcodeShareStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SetRetcodeShareStatusResponse({}));
  }

  async setRetcodeShareStatus(request: SetRetcodeShareStatusRequest): Promise<SetRetcodeShareStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  async startAlertWithOptions(request: StartAlertRequest, runtime: $Util.RuntimeOptions): Promise<StartAlertResponse> {
    Util.validateModel(request);
    return $tea.cast<StartAlertResponse>(await this.doRequest("StartAlert", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new StartAlertResponse({}));
  }

  async startAlert(request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  async stopAlertWithOptions(request: StopAlertRequest, runtime: $Util.RuntimeOptions): Promise<StopAlertResponse> {
    Util.validateModel(request);
    return $tea.cast<StopAlertResponse>(await this.doRequest("StopAlert", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new StopAlertResponse({}));
  }

  async stopAlert(request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async turnOnSecondSwitchWithOptions(request: TurnOnSecondSwitchRequest, runtime: $Util.RuntimeOptions): Promise<TurnOnSecondSwitchResponse> {
    Util.validateModel(request);
    return $tea.cast<TurnOnSecondSwitchResponse>(await this.doRequest("TurnOnSecondSwitch", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new TurnOnSecondSwitchResponse({}));
  }

  async turnOnSecondSwitch(request: TurnOnSecondSwitchRequest): Promise<TurnOnSecondSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.turnOnSecondSwitchWithOptions(request, runtime);
  }

  async uninstallManagedPrometheusWithOptions(request: UninstallManagedPrometheusRequest, runtime: $Util.RuntimeOptions): Promise<UninstallManagedPrometheusResponse> {
    Util.validateModel(request);
    return $tea.cast<UninstallManagedPrometheusResponse>(await this.doRequest("UninstallManagedPrometheus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UninstallManagedPrometheusResponse({}));
  }

  async uninstallManagedPrometheus(request: UninstallManagedPrometheusRequest): Promise<UninstallManagedPrometheusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallManagedPrometheusWithOptions(request, runtime);
  }

  async uninstallPromClusterWithOptions(request: UninstallPromClusterRequest, runtime: $Util.RuntimeOptions): Promise<UninstallPromClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<UninstallPromClusterResponse>(await this.doRequest("UninstallPromCluster", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UninstallPromClusterResponse({}));
  }

  async uninstallPromCluster(request: UninstallPromClusterRequest): Promise<UninstallPromClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallPromClusterWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAlertContactWithOptions(request: UpdateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertContactResponse>(await this.doRequest("UpdateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertContactResponse({}));
  }

  async updateAlertContact(request: UpdateAlertContactRequest): Promise<UpdateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  async updateAlertContactGroupWithOptions(request: UpdateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertContactGroupResponse>(await this.doRequest("UpdateAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertContactGroupResponse({}));
  }

  async updateAlertContactGroup(request: UpdateAlertContactGroupRequest): Promise<UpdateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  async updateAlertRuleWithOptions(request: UpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertRuleResponse>(await this.doRequest("UpdateAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertRuleResponse({}));
  }

  async updateAlertRule(request: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  async updateContactScheduleWithOptions(request: UpdateContactScheduleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateContactScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateContactScheduleResponse>(await this.doRequest("UpdateContactSchedule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateContactScheduleResponse({}));
  }

  async updateContactSchedule(request: UpdateContactScheduleRequest): Promise<UpdateContactScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateContactScheduleWithOptions(request, runtime);
  }

  async updateDispatchRuleWithOptions(request: UpdateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDispatchRuleResponse>(await this.doRequest("UpdateDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateDispatchRuleResponse({}));
  }

  async updateDispatchRule(request: UpdateDispatchRuleRequest): Promise<UpdateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDispatchRuleWithOptions(request, runtime);
  }

  async updateEscalationWithOptions(request: UpdateEscalationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEscalationResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateEscalationResponse>(await this.doRequest("UpdateEscalation", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateEscalationResponse({}));
  }

  async updateEscalation(request: UpdateEscalationRequest): Promise<UpdateEscalationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEscalationWithOptions(request, runtime);
  }

  async updatePrometheusAlertRuleWithOptions(request: UpdatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdatePrometheusAlertRuleResponse>(await this.doRequest("UpdatePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdatePrometheusAlertRuleResponse({}));
  }

  async updatePrometheusAlertRule(request: UpdatePrometheusAlertRuleRequest): Promise<UpdatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrometheusAlertRuleWithOptions(request, runtime);
  }

  async updateWebhookWithOptions(request: UpdateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateWebhookResponse>(await this.doRequest("UpdateWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateWebhookResponse({}));
  }

  async updateWebhook(request: UpdateWebhookRequest): Promise<UpdateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

  async uploadWithOptions(request: UploadRequest, runtime: $Util.RuntimeOptions): Promise<UploadResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadResponse>(await this.doRequest("Upload", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UploadResponse({}));
  }

  async upload(request: UploadRequest): Promise<UploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadWithOptions(request, runtime);
  }

  async verifyLinkWithOptions(request: VerifyLinkRequest, runtime: $Util.RuntimeOptions): Promise<VerifyLinkResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyLinkResponse>(await this.doRequest("VerifyLink", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new VerifyLinkResponse({}));
  }

  async verifyLink(request: VerifyLinkRequest): Promise<VerifyLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyLinkWithOptions(request, runtime);
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

}
