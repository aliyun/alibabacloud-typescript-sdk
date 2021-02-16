// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddTagsRequest extends $tea.Model {
  tag?: AddTagsRequestTag[];
  groupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
      groupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateRequest extends $tea.Model {
  silenceTime?: number;
  groupId?: number;
  templateIds?: string;
  enableStartTime?: number;
  enableEndTime?: number;
  notifyLevel?: number;
  applyMode?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      groupId: 'GroupId',
      templateIds: 'TemplateIds',
      enableStartTime: 'EnableStartTime',
      enableEndTime: 'EnableEndTime',
      notifyLevel: 'NotifyLevel',
      applyMode: 'ApplyMode',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'number',
      groupId: 'number',
      templateIds: 'string',
      enableStartTime: 'number',
      enableEndTime: 'number',
      notifyLevel: 'number',
      applyMode: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resource?: ApplyMetricRuleTemplateResponseBodyResource;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resource: ApplyMetricRuleTemplateResponseBodyResource,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyMetricRuleTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  autoRenewPeriod?: number;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  phoneCount?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoRenewPeriod: 'number',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      phoneCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderResponseBody extends $tea.Model {
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

export class CreateCmsCallNumOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCmsCallNumOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCmsCallNumOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  autoRenewPeriod?: number;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  payType?: string;
  suggestType?: string;
  apiCount?: string;
  siteOperatorNum?: string;
  eventStoreTime?: string;
  logMonitorStream?: string;
  siteTaskNum?: string;
  eventStoreNum?: string;
  siteEcsNum?: string;
  customTimeSeries?: string;
  smsCount?: string;
  phoneCount?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      payType: 'PayType',
      suggestType: 'SuggestType',
      apiCount: 'ApiCount',
      siteOperatorNum: 'SiteOperatorNum',
      eventStoreTime: 'EventStoreTime',
      logMonitorStream: 'LogMonitorStream',
      siteTaskNum: 'SiteTaskNum',
      eventStoreNum: 'EventStoreNum',
      siteEcsNum: 'SiteEcsNum',
      customTimeSeries: 'CustomTimeSeries',
      smsCount: 'SmsCount',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoRenewPeriod: 'number',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      payType: 'string',
      suggestType: 'string',
      apiCount: 'string',
      siteOperatorNum: 'string',
      eventStoreTime: 'string',
      logMonitorStream: 'string',
      siteTaskNum: 'string',
      eventStoreNum: 'string',
      siteEcsNum: 'string',
      customTimeSeries: 'string',
      smsCount: 'string',
      phoneCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderResponseBody extends $tea.Model {
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

export class CreateCmsOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCmsOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCmsOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  autoRenewPeriod?: number;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  smsCount?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      smsCount: 'SmsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoRenewPeriod: 'number',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      smsCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderResponseBody extends $tea.Model {
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

export class CreateCmsSmspackageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCmsSmspackageOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCmsSmspackageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupRequest extends $tea.Model {
  tagKey?: string;
  enableSubscribeEvent?: boolean;
  enableInstallAgent?: boolean;
  matchExpressFilterRelation?: string;
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  contactGroupList?: string[];
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      enableInstallAgent: 'EnableInstallAgent',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      matchExpress: 'MatchExpress',
      contactGroupList: 'ContactGroupList',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      enableSubscribeEvent: 'boolean',
      enableInstallAgent: 'boolean',
      matchExpressFilterRelation: 'string',
      matchExpress: { 'type': 'array', 'itemType': CreateDynamicTagGroupRequestMatchExpress },
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDynamicTagGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDynamicTagGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequest extends $tea.Model {
  groupId?: number;
  groupMetricRules?: CreateGroupMetricRulesRequestGroupMetricRules[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMetricRules: 'GroupMetricRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupMetricRules: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resources?: CreateGroupMetricRulesResponseBodyResources;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resources: CreateGroupMetricRulesResponseBodyResources,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupMetricRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequest extends $tea.Model {
  groupId?: string;
  processName?: string;
  matchExpressFilterRelation?: string;
  matchExpress?: CreateGroupMonitoringAgentProcessRequestMatchExpress[];
  alertConfig?: CreateGroupMonitoringAgentProcessRequestAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      processName: 'ProcessName',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      matchExpress: 'MatchExpress',
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      processName: 'string',
      matchExpressFilterRelation: 'string',
      matchExpress: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestMatchExpress },
      alertConfig: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequest extends $tea.Model {
  taskOption?: CreateHostAvailabilityRequestTaskOption;
  alertConfig?: CreateHostAvailabilityRequestAlertConfig;
  groupId?: number;
  taskName?: string;
  taskScope?: string;
  taskType?: string;
  alertConfigEscalationList?: CreateHostAvailabilityRequestAlertConfigEscalationList[];
  instanceList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskOption: 'TaskOption',
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOption: CreateHostAvailabilityRequestTaskOption,
      alertConfig: CreateHostAvailabilityRequestAlertConfig,
      groupId: 'number',
      taskName: 'string',
      taskScope: 'string',
      taskType: 'string',
      alertConfigEscalationList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigEscalationList },
      instanceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityResponseBody extends $tea.Model {
  taskId?: number;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesRequest extends $tea.Model {
  ruleId?: string;
  overwrite?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      overwrite: 'Overwrite',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      overwrite: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMetricRuleResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequest extends $tea.Model {
  name?: string;
  description?: string;
  alertTemplates?: CreateMetricRuleTemplateRequestAlertTemplates[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      alertTemplates: 'AlertTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      alertTemplates: { 'type': 'array', 'itemType': CreateMetricRuleTemplateRequestAlertTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  id?: number;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      id: 'Id',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      id: 'number',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMetricRuleTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessRequest extends $tea.Model {
  processName?: string;
  instanceId?: string;
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      processName: 'ProcessName',
      instanceId: 'InstanceId',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processName: 'string',
      instanceId: 'string',
      processUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  id?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      id: 'Id',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      id: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupRequest extends $tea.Model {
  type?: string;
  groupName?: string;
  serviceId?: number;
  bindUrl?: string;
  contactGroups?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      groupName: 'GroupName',
      serviceId: 'ServiceId',
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      groupName: 'string',
      serviceId: 'number',
      bindUrl: 'string',
      contactGroups: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdRequest extends $tea.Model {
  enableSubscribeEvent?: boolean;
  enableInstallAgent?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  contactGroupList?: string[];
  static names(): { [key: string]: string } {
    return {
      enableSubscribeEvent: 'EnableSubscribeEvent',
      enableInstallAgent: 'EnableInstallAgent',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      contactGroupList: 'ContactGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSubscribeEvent: 'boolean',
      enableInstallAgent: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorGroupByResourceGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorGroupByResourceGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequest extends $tea.Model {
  groupId?: string;
  instances?: CreateMonitorGroupInstancesRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': CreateMonitorGroupInstancesRequestInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateMonitorGroupInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorGroupInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyRequest extends $tea.Model {
  policyType?: string;
  groupId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      groupId: 'GroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      groupId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorGroupNotifyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorGroupNotifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessRequest extends $tea.Model {
  processName?: string;
  instanceId?: string;
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      processName: 'ProcessName',
      instanceId: 'InstanceId',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processName: 'string',
      instanceId: 'string',
      processUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  id?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      id: 'Id',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      id: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorRequest extends $tea.Model {
  address?: string;
  taskType?: string;
  taskName?: string;
  interval?: string;
  ispCities?: string;
  optionsJson?: string;
  alertIds?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      taskType: 'TaskType',
      taskName: 'TaskName',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      alertIds: 'AlertIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      taskType: 'string',
      taskName: 'string',
      interval: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      alertIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateSiteMonitorResponseBodyData;
  code?: string;
  createResultList?: CreateSiteMonitorResponseBodyCreateResultList;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      createResultList: 'CreateResultList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateSiteMonitorResponseBodyData,
      code: 'string',
      createResultList: CreateSiteMonitorResponseBodyCreateResultList,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSiteMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactRequest extends $tea.Model {
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricRequest extends $tea.Model {
  groupId?: string;
  metricName?: string;
  md5?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      metricName: 'MetricName',
      md5: 'Md5',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      metricName: 'string',
      md5: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricResponseBody extends $tea.Model {
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

export class DeleteCustomMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupRequest extends $tea.Model {
  dynamicTagRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDynamicTagGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDynamicTagGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesRequest extends $tea.Model {
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsRequest extends $tea.Model {
  ruleName?: string;
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventRuleTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputRequest extends $tea.Model {
  destName?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExporterOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExporterOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleRequest extends $tea.Model {
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExporterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExporterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessRequest extends $tea.Model {
  groupId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorRequest extends $tea.Model {
  logId?: number;
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesRequest extends $tea.Model {
  ruleId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMetricRuleResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesRequest extends $tea.Model {
  id?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMetricRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsRequest extends $tea.Model {
  ruleId?: string;
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  failIds?: DeleteMetricRuleTargetsResponseBodyFailIds;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      failIds: 'FailIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      failIds: DeleteMetricRuleTargetsResponseBodyFailIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMetricRuleTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateRequest extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resource?: DeleteMetricRuleTemplateResponseBodyResource;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resource: DeleteMetricRuleTemplateResponseBodyResource,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMetricRuleTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupRequest extends $tea.Model {
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

export class DeleteMonitorGroupResponseBody extends $tea.Model {
  group?: DeleteMonitorGroupResponseBodyGroup;
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: DeleteMonitorGroupResponseBodyGroup,
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

export class DeleteMonitorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMonitorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleRequest extends $tea.Model {
  groupId?: number;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteMonitorGroupDynamicRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMonitorGroupDynamicRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMonitorGroupDynamicRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesRequest extends $tea.Model {
  groupId?: number;
  instanceIdList?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceIdList: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteMonitorGroupInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMonitorGroupInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyRequest extends $tea.Model {
  policyType?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMonitorGroupNotifyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMonitorGroupNotifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessRequest extends $tea.Model {
  instanceId?: string;
  processName?: string;
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsRequest extends $tea.Model {
  taskIds?: string;
  isDeleteAlarms?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      isDeleteAlarms: 'IsDeleteAlarms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: 'string',
      isDeleteAlarms: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteSiteMonitorsResponseBodyData;
  code?: string;
  success?: string;
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
      data: DeleteSiteMonitorsResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSiteMonitorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListRequest extends $tea.Model {
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  alertList?: DescribeActiveMetricRuleListResponseBodyAlertList;
  datapoints?: DescribeActiveMetricRuleListResponseBodyDatapoints;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      alertList: 'AlertList',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      alertList: DescribeActiveMetricRuleListResponseBodyAlertList,
      datapoints: DescribeActiveMetricRuleListResponseBodyDatapoints,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActiveMetricRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveMetricRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListRequest extends $tea.Model {
  ruleId?: string;
  ruleName?: string;
  namespace?: string;
  metricName?: string;
  groupId?: string;
  status?: string;
  state?: string;
  ascending?: boolean;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      namespace: 'Namespace',
      metricName: 'MetricName',
      groupId: 'GroupId',
      status: 'Status',
      state: 'State',
      ascending: 'Ascending',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
      namespace: 'string',
      metricName: 'string',
      groupId: 'string',
      status: 'string',
      state: 'string',
      ascending: 'boolean',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBody extends $tea.Model {
  alarmHistoryList?: DescribeAlertHistoryListResponseBodyAlarmHistoryList;
  message?: string;
  requestId?: string;
  total?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: DescribeAlertHistoryListResponseBodyAlarmHistoryList,
      message: 'string',
      requestId: 'string',
      total: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlertHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlertHistoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  namespace?: string;
  groupId?: string;
  product?: string;
  level?: string;
  sendStatus?: string;
  contactGroup?: string;
  ruleName?: string;
  metricName?: string;
  lastMin?: string;
  groupBy?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      namespace: 'Namespace',
      groupId: 'GroupId',
      product: 'Product',
      level: 'Level',
      sendStatus: 'SendStatus',
      contactGroup: 'ContactGroup',
      ruleName: 'RuleName',
      metricName: 'MetricName',
      lastMin: 'LastMin',
      groupBy: 'GroupBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      namespace: 'string',
      groupId: 'string',
      product: 'string',
      level: 'string',
      sendStatus: 'string',
      contactGroup: 'string',
      ruleName: 'string',
      metricName: 'string',
      lastMin: 'string',
      groupBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  alertLogCount?: DescribeAlertLogCountResponseBodyAlertLogCount[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      alertLogCount: 'AlertLogCount',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      alertLogCount: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCount },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlertLogCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlertLogCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  groupId?: string;
  product?: string;
  namespace?: string;
  level?: string;
  sendStatus?: string;
  contactGroup?: string;
  ruleName?: string;
  metricName?: string;
  lastMin?: string;
  groupBy?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      groupId: 'GroupId',
      product: 'Product',
      namespace: 'Namespace',
      level: 'Level',
      sendStatus: 'SendStatus',
      contactGroup: 'ContactGroup',
      ruleName: 'RuleName',
      metricName: 'MetricName',
      lastMin: 'LastMin',
      groupBy: 'GroupBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      groupId: 'string',
      product: 'string',
      namespace: 'string',
      level: 'string',
      sendStatus: 'string',
      contactGroup: 'string',
      ruleName: 'string',
      metricName: 'string',
      lastMin: 'string',
      groupBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  alertLogHistogramList?: DescribeAlertLogHistogramResponseBodyAlertLogHistogramList[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      alertLogHistogramList: 'AlertLogHistogramList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      alertLogHistogramList: { 'type': 'array', 'itemType': DescribeAlertLogHistogramResponseBodyAlertLogHistogramList },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlertLogHistogramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlertLogHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  groupId?: string;
  namespace?: string;
  product?: string;
  level?: string;
  sendStatus?: string;
  contactGroup?: string;
  ruleName?: string;
  metricName?: string;
  lastMin?: string;
  groupBy?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      groupId: 'GroupId',
      namespace: 'Namespace',
      product: 'Product',
      level: 'Level',
      sendStatus: 'SendStatus',
      contactGroup: 'ContactGroup',
      ruleName: 'RuleName',
      metricName: 'MetricName',
      lastMin: 'LastMin',
      groupBy: 'GroupBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      groupId: 'string',
      namespace: 'string',
      product: 'string',
      level: 'string',
      sendStatus: 'string',
      contactGroup: 'string',
      ruleName: 'string',
      metricName: 'string',
      lastMin: 'string',
      groupBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBody extends $tea.Model {
  alertLogList?: DescribeAlertLogListResponseBodyAlertLogList[];
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogList: 'AlertLogList',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogList },
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlertLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlertLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBody extends $tea.Model {
  contactGroupList?: DescribeContactGroupListResponseBodyContactGroupList;
  contactGroups?: DescribeContactGroupListResponseBodyContactGroups;
  message?: string;
  requestId?: string;
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      contactGroups: 'ContactGroups',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: DescribeContactGroupListResponseBodyContactGroupList,
      contactGroups: DescribeContactGroupListResponseBodyContactGroups,
      message: 'string',
      requestId: 'string',
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContactGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContactGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  contactName?: string;
  chanelType?: string;
  chanelValue?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      contactName: 'ContactName',
      chanelType: 'ChanelType',
      chanelValue: 'ChanelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      contactName: 'string',
      chanelType: 'string',
      chanelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  contacts?: DescribeContactListResponseBodyContacts;
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      contacts: 'Contacts',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      contacts: DescribeContactListResponseBodyContacts,
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContactListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContactListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  contacts?: DescribeContactListByContactGroupResponseBodyContacts;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      contacts: 'Contacts',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      contacts: DescribeContactListByContactGroupResponseBodyContacts,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContactListByContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContactListByContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeRequest extends $tea.Model {
  name?: string;
  eventId?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      eventId: 'EventId',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      eventId: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBody extends $tea.Model {
  customEvents?: DescribeCustomEventAttributeResponseBodyCustomEvents;
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      customEvents: 'CustomEvents',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEvents: DescribeCustomEventAttributeResponseBodyCustomEvents,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomEventAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomEventAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountRequest extends $tea.Model {
  name?: string;
  eventId?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      eventId: 'EventId',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      eventId: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBody extends $tea.Model {
  customEventCounts?: DescribeCustomEventCountResponseBodyCustomEventCounts;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      customEventCounts: 'CustomEventCounts',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEventCounts: DescribeCustomEventCountResponseBodyCustomEventCounts,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomEventCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomEventCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramRequest extends $tea.Model {
  name?: string;
  level?: string;
  eventId?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      level: 'Level',
      eventId: 'EventId',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      level: 'string',
      eventId: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  eventHistograms?: DescribeCustomEventHistogramResponseBodyEventHistograms;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      eventHistograms: 'EventHistograms',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      eventHistograms: DescribeCustomEventHistogramResponseBodyEventHistograms,
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomEventHistogramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomEventHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListRequest extends $tea.Model {
  groupId?: string;
  metricName?: string;
  dimension?: string;
  md5?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      metricName: 'MetricName',
      dimension: 'Dimension',
      md5: 'Md5',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      metricName: 'string',
      dimension: 'string',
      md5: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
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
      code: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomMetricListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListRequest extends $tea.Model {
  tagKey?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNumber?: string;
  total?: number;
  tagGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupList;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      tagGroupList: 'TagGroupList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      total: 'number',
      tagGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupList,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDynamicTagRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDynamicTagRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeRequest extends $tea.Model {
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  result?: DescribeEventRuleAttributeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      result: DescribeEventRuleAttributeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListRequest extends $tea.Model {
  namePrefix?: string;
  pageNumber?: string;
  pageSize?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      namePrefix: 'NamePrefix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namePrefix: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  total?: number;
  eventRules?: DescribeEventRuleListResponseBodyEventRules;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      eventRules: 'EventRules',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      total: 'number',
      eventRules: DescribeEventRuleListResponseBodyEventRules,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListRequest extends $tea.Model {
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  contactParameters?: DescribeEventRuleTargetListResponseBodyContactParameters;
  slsParameters?: DescribeEventRuleTargetListResponseBodySlsParameters;
  webhookParameters?: DescribeEventRuleTargetListResponseBodyWebhookParameters;
  fcParameters?: DescribeEventRuleTargetListResponseBodyFcParameters;
  code?: string;
  mnsParameters?: DescribeEventRuleTargetListResponseBodyMnsParameters;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      contactParameters: 'ContactParameters',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
      fcParameters: 'FcParameters',
      code: 'Code',
      mnsParameters: 'MnsParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      contactParameters: DescribeEventRuleTargetListResponseBodyContactParameters,
      slsParameters: DescribeEventRuleTargetListResponseBodySlsParameters,
      webhookParameters: DescribeEventRuleTargetListResponseBodyWebhookParameters,
      fcParameters: DescribeEventRuleTargetListResponseBodyFcParameters,
      code: 'string',
      mnsParameters: DescribeEventRuleTargetListResponseBodyMnsParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventRuleTargetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventRuleTargetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageNumber?: number;
  total?: number;
  datapoints?: DescribeExporterOutputListResponseBodyDatapoints;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageNumber: 'PageNumber',
      total: 'Total',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageNumber: 'number',
      total: 'number',
      datapoints: DescribeExporterOutputListResponseBodyDatapoints,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExporterOutputListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExporterOutputListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageNumber?: number;
  total?: number;
  datapoints?: DescribeExporterRuleListResponseBodyDatapoints;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageNumber: 'PageNumber',
      total: 'Total',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageNumber: 'number',
      total: 'number',
      datapoints: DescribeExporterRuleListResponseBodyDatapoints,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExporterRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExporterRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessRequest extends $tea.Model {
  groupId?: string;
  processName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      processName: 'ProcessName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      processName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNumber?: string;
  total?: string;
  processes?: DescribeGroupMonitoringAgentProcessResponseBodyProcesses;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      processes: 'Processes',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      total: 'string',
      processes: DescribeGroupMonitoringAgentProcessResponseBodyProcesses,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListRequest extends $tea.Model {
  id?: number;
  taskName?: string;
  pageNumber?: number;
  pageSize?: number;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      taskName: 'TaskName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      taskName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  total?: number;
  taskList?: DescribeHostAvailabilityListResponseBodyTaskList;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      taskList: 'TaskList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      total: 'number',
      taskList: DescribeHostAvailabilityListResponseBodyTaskList,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostAvailabilityListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostAvailabilityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeRequest extends $tea.Model {
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  logMonitor?: DescribeLogMonitorAttributeResponseBodyLogMonitor;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      logMonitor: 'LogMonitor',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      logMonitor: DescribeLogMonitorAttributeResponseBodyLogMonitor,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogMonitorAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogMonitorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchValue: 'SearchValue',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchValue: 'string',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  logMonitorList?: DescribeLogMonitorListResponseBodyLogMonitorList[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      logMonitorList: 'LogMonitorList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      logMonitorList: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorList },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataRequest extends $tea.Model {
  namespace?: string;
  metricName?: string;
  period?: string;
  startTime?: string;
  endTime?: string;
  dimensions?: string;
  express?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      metricName: 'MetricName',
      period: 'Period',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dimensions: 'Dimensions',
      express: 'Express',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      metricName: 'string',
      period: 'string',
      startTime: 'string',
      endTime: 'string',
      dimensions: 'string',
      express: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  period?: string;
  datapoints?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      period: 'Period',
      datapoints: 'Datapoints',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      period: 'string',
      datapoints: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastRequest extends $tea.Model {
  namespace?: string;
  metricName?: string;
  period?: string;
  startTime?: string;
  endTime?: string;
  dimensions?: string;
  nextToken?: string;
  length?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      metricName: 'MetricName',
      period: 'Period',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dimensions: 'Dimensions',
      nextToken: 'NextToken',
      length: 'Length',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      metricName: 'string',
      period: 'string',
      startTime: 'string',
      endTime: 'string',
      dimensions: 'string',
      nextToken: 'string',
      length: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  message?: string;
  period?: string;
  datapoints?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      message: 'Message',
      period: 'Period',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      message: 'string',
      period: 'string',
      datapoints: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricLastResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricLastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListRequest extends $tea.Model {
  namespace?: string;
  metricName?: string;
  period?: string;
  startTime?: string;
  endTime?: string;
  dimensions?: string;
  nextToken?: string;
  length?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      metricName: 'MetricName',
      period: 'Period',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dimensions: 'Dimensions',
      nextToken: 'NextToken',
      length: 'Length',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      metricName: 'string',
      period: 'string',
      startTime: 'string',
      endTime: 'string',
      dimensions: 'string',
      nextToken: 'string',
      length: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  message?: string;
  period?: string;
  datapoints?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      message: 'Message',
      period: 'Period',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      message: 'string',
      period: 'string',
      datapoints: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListRequest extends $tea.Model {
  namespace?: string;
  labels?: string;
  metricName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      labels: 'Labels',
      metricName: 'MetricName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      labels: 'string',
      metricName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBody extends $tea.Model {
  totalCount?: string;
  message?: string;
  requestId?: string;
  resources?: DescribeMetricMetaListResponseBodyResources;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      message: 'string',
      requestId: 'string',
      resources: DescribeMetricMetaListResponseBodyResources,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountRequest extends $tea.Model {
  namespace?: string;
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      metricName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBody extends $tea.Model {
  metricRuleCount?: DescribeMetricRuleCountResponseBodyMetricRuleCount;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricRuleCount: 'MetricRuleCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRuleCount: DescribeMetricRuleCountResponseBodyMetricRuleCount,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricRuleCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricRuleCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListRequest extends $tea.Model {
  metricName?: string;
  enableState?: boolean;
  namespace?: string;
  page?: number;
  pageSize?: number;
  alertState?: string;
  dimensions?: string;
  ruleName?: string;
  groupId?: string;
  ruleIds?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      enableState: 'EnableState',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      alertState: 'AlertState',
      dimensions: 'Dimensions',
      ruleName: 'RuleName',
      groupId: 'GroupId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      enableState: 'boolean',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      alertState: 'string',
      dimensions: 'string',
      ruleName: 'string',
      groupId: 'string',
      ruleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  total?: string;
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      alarms: 'Alarms',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      total: 'string',
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsRequest extends $tea.Model {
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  targets?: DescribeMetricRuleTargetsResponseBodyTargets;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      targets: 'Targets',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      targets: DescribeMetricRuleTargetsResponseBodyTargets,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricRuleTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeRequest extends $tea.Model {
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resource?: DescribeMetricRuleTemplateAttributeResponseBodyResource;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resource: DescribeMetricRuleTemplateAttributeResponseBodyResource,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricRuleTemplateAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricRuleTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListRequest extends $tea.Model {
  name?: string;
  keyword?: string;
  templateId?: number;
  pageNumber?: number;
  pageSize?: number;
  history?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      keyword: 'Keyword',
      templateId: 'TemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      history: 'History',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      keyword: 'string',
      templateId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      history: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  total?: number;
  templates?: DescribeMetricRuleTemplateListResponseBodyTemplates;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      templates: 'Templates',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      total: 'number',
      templates: DescribeMetricRuleTemplateListResponseBodyTemplates,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricRuleTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricRuleTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopRequest extends $tea.Model {
  period?: string;
  namespace?: string;
  metricName?: string;
  startTime?: string;
  endTime?: string;
  dimensions?: string;
  orderby?: string;
  orderDesc?: string;
  length?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      namespace: 'Namespace',
      metricName: 'MetricName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dimensions: 'Dimensions',
      orderby: 'Orderby',
      orderDesc: 'OrderDesc',
      length: 'Length',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      namespace: 'string',
      metricName: 'string',
      startTime: 'string',
      endTime: 'string',
      dimensions: 'string',
      orderby: 'string',
      orderDesc: 'string',
      length: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  period?: string;
  datapoints?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      period: 'Period',
      datapoints: 'Datapoints',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      period: 'string',
      datapoints: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricTopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesRequest extends $tea.Model {
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

export class DescribeMonitorGroupCategoriesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  monitorGroupCategories?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      monitorGroupCategories: 'MonitorGroupCategories',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      monitorGroupCategories: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesRequest extends $tea.Model {
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

export class DescribeMonitorGroupDynamicRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResource;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resource: DescribeMonitorGroupDynamicRulesResponseBodyResource,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupDynamicRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupDynamicRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeRequest extends $tea.Model {
  groupId?: number;
  pageNumber?: number;
  pageSize?: number;
  total?: boolean;
  category?: string;
  keyword?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      category: 'Category',
      keyword: 'Keyword',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'boolean',
      category: 'string',
      keyword: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  resources?: DescribeMonitorGroupInstanceAttributeResponseBodyResources;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      resources: DescribeMonitorGroupInstanceAttributeResponseBodyResources,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  groupId?: number;
  category?: string;
  keyword?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      groupId: 'GroupId',
      category: 'Category',
      keyword: 'Keyword',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      groupId: 'number',
      category: 'string',
      keyword: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  resources?: DescribeMonitorGroupInstancesResponseBodyResources;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      resources: DescribeMonitorGroupInstancesResponseBodyResources,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListRequest extends $tea.Model {
  policyType?: string;
  pageNumber?: number;
  pageSize?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBody extends $tea.Model {
  notifyPolicyList?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList;
  message?: string;
  requestId?: string;
  total?: number;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPolicyList: 'NotifyPolicyList',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPolicyList: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList,
      message: 'string',
      requestId: 'string',
      total: 'number',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupNotifyPolicyListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupNotifyPolicyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsRequest extends $tea.Model {
  selectContactGroups?: boolean;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  instanceId?: string;
  groupName?: string;
  includeTemplateHistory?: boolean;
  type?: string;
  dynamicTagRuleId?: string;
  groupId?: string;
  serviceId?: string;
  resourceGroupId?: string;
  tag?: DescribeMonitorGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      selectContactGroups: 'SelectContactGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      instanceId: 'InstanceId',
      groupName: 'GroupName',
      includeTemplateHistory: 'IncludeTemplateHistory',
      type: 'Type',
      dynamicTagRuleId: 'DynamicTagRuleId',
      groupId: 'GroupId',
      serviceId: 'ServiceId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectContactGroups: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      instanceId: 'string',
      groupName: 'string',
      includeTemplateHistory: 'boolean',
      type: 'string',
      dynamicTagRuleId: 'string',
      groupId: 'string',
      serviceId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  resources?: DescribeMonitorGroupsResponseBodyResources;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      resources: DescribeMonitorGroupsResponseBodyResources,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentAccessKeyResponseBody extends $tea.Model {
  secretKey?: string;
  requestId?: string;
  message?: string;
  accessKey?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      secretKey: 'SecretKey',
      requestId: 'RequestId',
      message: 'Message',
      accessKey: 'AccessKey',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretKey: 'string',
      requestId: 'string',
      message: 'string',
      accessKey: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentAccessKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringAgentAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringAgentAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentConfigResponseBody extends $tea.Model {
  enableActiveAlert?: string;
  autoInstall?: boolean;
  enableInstallAgentNewECS?: boolean;
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableActiveAlert: 'EnableActiveAlert',
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableActiveAlert: 'string',
      autoInstall: 'boolean',
      enableInstallAgentNewECS: 'boolean',
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringAgentConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringAgentConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsRequest extends $tea.Model {
  keyWord?: string;
  hostName?: string;
  instanceIds?: string;
  serialNumbers?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceRegionId?: string;
  aliyunHost?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      hostName: 'HostName',
      instanceIds: 'InstanceIds',
      serialNumbers: 'SerialNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceRegionId: 'InstanceRegionId',
      aliyunHost: 'AliyunHost',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      hostName: 'string',
      instanceIds: 'string',
      serialNumbers: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceRegionId: 'string',
      aliyunHost: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBody extends $tea.Model {
  hosts?: DescribeMonitoringAgentHostsResponseBodyHosts;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  pageTotal?: number;
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      pageTotal: 'PageTotal',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: DescribeMonitoringAgentHostsResponseBodyHosts,
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      pageTotal: 'number',
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringAgentHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringAgentHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesRequest extends $tea.Model {
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

export class DescribeMonitoringAgentProcessesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  nodeProcesses?: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      nodeProcesses: 'NodeProcesses',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      nodeProcesses: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringAgentProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringAgentProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesRequest extends $tea.Model {
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  nodeStatusList?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      nodeStatusList: 'NodeStatusList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      nodeStatusList: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringAgentStatusesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringAgentStatusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringConfigResponseBody extends $tea.Model {
  autoInstall?: boolean;
  enableInstallAgentNewECS?: boolean;
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      enableInstallAgentNewECS: 'boolean',
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitoringConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitoringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeRequest extends $tea.Model {
  showUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      showUsed: 'ShowUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showUsed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  resourceQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      resourceQuota: 'ResourceQuota',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resourceQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorResourceQuotaAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorResourceQuotaAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListRequest extends $tea.Model {
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponseBody extends $tea.Model {
  message?: string;
  nextToken?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  tagKeys?: DescribeProductResourceTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      tagKeys: DescribeProductResourceTagKeyListResponseBodyTagKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProductResourceTagKeyListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProductResourceTagKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  allProductInitMetricRuleList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList;
  datapoints?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      allProductInitMetricRuleList: 'AllProductInitMetricRuleList',
      datapoints: 'Datapoints',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      allProductInitMetricRuleList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList,
      datapoints: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProductsOfActiveMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProductsOfActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaRequest extends $tea.Model {
  labels?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNumber?: string;
  total?: string;
  resources?: DescribeProjectMetaResponseBodyResources;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      resources: 'Resources',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      total: 'string',
      resources: DescribeProjectMetaResponseBodyResources,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeRequest extends $tea.Model {
  taskId?: string;
  includeAlert?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      includeAlert: 'IncludeAlert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      includeAlert: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBody extends $tea.Model {
  metricRules?: DescribeSiteMonitorAttributeResponseBodyMetricRules;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  siteMonitors?: DescribeSiteMonitorAttributeResponseBodySiteMonitors;
  static names(): { [key: string]: string } {
    return {
      metricRules: 'MetricRules',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      siteMonitors: 'SiteMonitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRules: DescribeSiteMonitorAttributeResponseBodyMetricRules,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      siteMonitors: DescribeSiteMonitorAttributeResponseBodySiteMonitors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataRequest extends $tea.Model {
  taskId?: string;
  type?: string;
  metricName?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  nextToken?: string;
  length?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      type: 'Type',
      metricName: 'MetricName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      nextToken: 'NextToken',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      type: 'string',
      metricName: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      nextToken: 'string',
      length: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  message?: string;
  data?: string;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      message: 'Message',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      message: 'string',
      data: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListRequest extends $tea.Model {
  taskId?: string;
  taskType?: string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskType: 'TaskType',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskType: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  code?: string;
  success?: string;
  siteMonitors?: DescribeSiteMonitorListResponseBodySiteMonitors;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      code: 'Code',
      success: 'Success',
      siteMonitors: 'SiteMonitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      code: 'string',
      success: 'string',
      siteMonitors: DescribeSiteMonitorListResponseBodySiteMonitors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DescribeSiteMonitorQuotaResponseBodyData;
  code?: string;
  success?: string;
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
      data: DescribeSiteMonitorQuotaResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsRequest extends $tea.Model {
  taskId?: string;
  timeRange?: string;
  startTime?: string;
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      timeRange: 'TimeRange',
      startTime: 'StartTime',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      timeRange: 'string',
      startTime: 'string',
      metricName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: string;
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
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeRequest extends $tea.Model {
  product?: string;
  eventType?: string;
  name?: string;
  level?: string;
  status?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      eventType: 'EventType',
      name: 'Name',
      level: 'Level',
      status: 'Status',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      eventType: 'string',
      name: 'string',
      level: 'string',
      status: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBody extends $tea.Model {
  systemEvents?: DescribeSystemEventAttributeResponseBodySystemEvents;
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      systemEvents: 'SystemEvents',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEvents: DescribeSystemEventAttributeResponseBodySystemEvents,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSystemEventAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSystemEventAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountRequest extends $tea.Model {
  product?: string;
  eventType?: string;
  name?: string;
  level?: string;
  status?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      eventType: 'EventType',
      name: 'Name',
      level: 'Level',
      status: 'Status',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      eventType: 'string',
      name: 'string',
      level: 'string',
      status: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  systemEventCounts?: DescribeSystemEventCountResponseBodySystemEventCounts;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      systemEventCounts: 'SystemEventCounts',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      systemEventCounts: DescribeSystemEventCountResponseBodySystemEventCounts,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSystemEventCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSystemEventCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramRequest extends $tea.Model {
  product?: string;
  eventType?: string;
  name?: string;
  level?: string;
  status?: string;
  groupId?: string;
  searchKeywords?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      eventType: 'EventType',
      name: 'Name',
      level: 'Level',
      status: 'Status',
      groupId: 'GroupId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      eventType: 'string',
      name: 'string',
      level: 'string',
      status: 'string',
      groupId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  systemEventHistograms?: DescribeSystemEventHistogramResponseBodySystemEventHistograms;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      systemEventHistograms: 'SystemEventHistograms',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      systemEventHistograms: DescribeSystemEventHistogramResponseBodySystemEventHistograms,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSystemEventHistogramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSystemEventHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  tagKeys?: DescribeTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      tagKeys: DescribeTagKeyListResponseBodyTagKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagKeyListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  tagValues?: DescribeTagValueListResponseBodyTagValues;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      tagValues: DescribeTagValueListResponseBodyTagValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagValueListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagValueListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  unhealthyList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      unhealthyList: 'UnhealthyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      unhealthyList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUnhealthyHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUnhealthyHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleRequest extends $tea.Model {
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableActiveMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesRequest extends $tea.Model {
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableEventRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesRequest extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableMetricRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsRequest extends $tea.Model {
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DisableSiteMonitorsResponseBodyData;
  code?: string;
  success?: string;
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
      data: DisableSiteMonitorsResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSiteMonitorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleRequest extends $tea.Model {
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableActiveMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesRequest extends $tea.Model {
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableEventRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesRequest extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableMetricRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsRequest extends $tea.Model {
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EnableSiteMonitorsResponseBodyData;
  code?: string;
  success?: string;
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
      data: EnableSiteMonitorsResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSiteMonitorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentRequest extends $tea.Model {
  force?: boolean;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallMonitoringAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallMonitoringAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequest extends $tea.Model {
  id?: string;
  groupId?: string;
  matchExpressFilterRelation?: string;
  alertConfig?: ModifyGroupMonitoringAgentProcessRequestAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      groupId: 'GroupId',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      groupId: 'string',
      matchExpressFilterRelation: 'string',
      alertConfig: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyGroupMonitoringAgentProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequest extends $tea.Model {
  taskOption?: ModifyHostAvailabilityRequestTaskOption;
  alertConfig?: ModifyHostAvailabilityRequestAlertConfig;
  groupId?: number;
  id?: number;
  taskName?: string;
  taskScope?: string;
  alertConfigEscalationList?: ModifyHostAvailabilityRequestAlertConfigEscalationList[];
  instanceList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskOption: 'TaskOption',
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOption: ModifyHostAvailabilityRequestTaskOption,
      alertConfig: ModifyHostAvailabilityRequestAlertConfig,
      groupId: 'number',
      id: 'number',
      taskName: 'string',
      taskScope: 'string',
      alertConfigEscalationList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigEscalationList },
      instanceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHostAvailabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoRequest extends $tea.Model {
  instanceId?: string;
  hostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      hostName: 'HostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      hostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHostInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHostInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequest extends $tea.Model {
  templateId?: number;
  name?: string;
  description?: string;
  restVersion?: number;
  alertTemplates?: ModifyMetricRuleTemplateRequestAlertTemplates[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      name: 'Name',
      description: 'Description',
      restVersion: 'RestVersion',
      alertTemplates: 'AlertTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      name: 'string',
      description: 'string',
      restVersion: 'number',
      alertTemplates: { 'type': 'array', 'itemType': ModifyMetricRuleTemplateRequestAlertTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyMetricRuleTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMetricRuleTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupRequest extends $tea.Model {
  bindUrls?: string;
  serviceId?: number;
  groupId?: string;
  groupName?: string;
  contactGroups?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrls: 'BindUrls',
      serviceId: 'ServiceId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      contactGroups: 'ContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrls: 'string',
      serviceId: 'number',
      groupId: 'string',
      groupName: 'string',
      contactGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyMonitorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMonitorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesRequest extends $tea.Model {
  groupId?: number;
  instances?: ModifyMonitorGroupInstancesRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instances: { 'type': 'array', 'itemType': ModifyMonitorGroupInstancesRequestInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyMonitorGroupInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMonitorGroupInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorRequest extends $tea.Model {
  address?: string;
  taskId?: string;
  taskName?: string;
  interval?: string;
  ispCities?: string;
  optionsJson?: string;
  alertIds?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      taskId: 'TaskId',
      taskName: 'TaskName',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      alertIds: 'AlertIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      taskId: 'string',
      taskName: 'string',
      interval: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      alertIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ModifySiteMonitorResponseBodyData;
  code?: string;
  success?: string;
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
      data: ModifySiteMonitorResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySiteMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCmsServiceResponseBody extends $tea.Model {
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

export class OpenCmsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenCmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenCmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactRequest extends $tea.Model {
  channels?: PutContactRequestChannels;
  contactName?: string;
  describe?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      contactName: 'ContactName',
      describe: 'Describe',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: PutContactRequestChannels,
      contactName: 'string',
      describe: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  describe?: string;
  enableSubscribed?: boolean;
  contactNames?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
      contactNames: 'ContactNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      describe: 'string',
      enableSubscribed: 'boolean',
      contactNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutContactGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequest extends $tea.Model {
  eventInfo?: PutCustomEventRequestEventInfo[];
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': PutCustomEventRequestEventInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventResponseBody extends $tea.Model {
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

export class PutCustomEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutCustomEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutCustomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleRequest extends $tea.Model {
  groupId?: string;
  ruleId?: string;
  ruleName?: string;
  eventName?: string;
  contactGroups?: string;
  webhook?: string;
  effectiveInterval?: string;
  period?: string;
  emailSubject?: string;
  threshold?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      eventName: 'EventName',
      contactGroups: 'ContactGroups',
      webhook: 'Webhook',
      effectiveInterval: 'EffectiveInterval',
      period: 'Period',
      emailSubject: 'EmailSubject',
      threshold: 'Threshold',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      eventName: 'string',
      contactGroups: 'string',
      webhook: 'string',
      effectiveInterval: 'string',
      period: 'string',
      emailSubject: 'string',
      threshold: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutCustomEventRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutCustomEventRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequest extends $tea.Model {
  metricList?: PutCustomMetricRequestMetricList[];
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutCustomMetricRequestMetricList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricResponseBody extends $tea.Model {
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

export class PutCustomMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutCustomMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutCustomMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleRequest extends $tea.Model {
  groupId?: string;
  ruleId?: string;
  ruleName?: string;
  metricName?: string;
  resources?: string;
  contactGroups?: string;
  webhook?: string;
  effectiveInterval?: string;
  silenceTime?: number;
  period?: string;
  emailSubject?: string;
  threshold?: string;
  level?: string;
  evaluationCount?: number;
  statistics?: string;
  comparisonOperator?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      metricName: 'MetricName',
      resources: 'Resources',
      contactGroups: 'ContactGroups',
      webhook: 'Webhook',
      effectiveInterval: 'EffectiveInterval',
      silenceTime: 'SilenceTime',
      period: 'Period',
      emailSubject: 'EmailSubject',
      threshold: 'Threshold',
      level: 'Level',
      evaluationCount: 'EvaluationCount',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      metricName: 'string',
      resources: 'string',
      contactGroups: 'string',
      webhook: 'string',
      effectiveInterval: 'string',
      silenceTime: 'number',
      period: 'string',
      emailSubject: 'string',
      threshold: 'string',
      level: 'string',
      evaluationCount: 'number',
      statistics: 'string',
      comparisonOperator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutCustomMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutCustomMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleRequest extends $tea.Model {
  ruleName?: string;
  groupId?: string;
  eventType?: string;
  description?: string;
  state?: string;
  eventPattern?: PutEventRuleRequestEventPattern[];
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      groupId: 'GroupId',
      eventType: 'EventType',
      description: 'Description',
      state: 'State',
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      groupId: 'string',
      eventType: 'string',
      description: 'string',
      state: 'string',
      eventPattern: { 'type': 'array', 'itemType': PutEventRuleRequestEventPattern },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutEventRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutEventRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequest extends $tea.Model {
  ruleName?: string;
  fcParameters?: PutEventRuleTargetsRequestFcParameters[];
  contactParameters?: PutEventRuleTargetsRequestContactParameters[];
  mnsParameters?: PutEventRuleTargetsRequestMnsParameters[];
  webhookParameters?: PutEventRuleTargetsRequestWebhookParameters[];
  slsParameters?: PutEventRuleTargetsRequestSlsParameters[];
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      fcParameters: 'FcParameters',
      contactParameters: 'ContactParameters',
      mnsParameters: 'MnsParameters',
      webhookParameters: 'WebhookParameters',
      slsParameters: 'SlsParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      fcParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestFcParameters },
      contactParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestContactParameters },
      mnsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestMnsParameters },
      webhookParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestWebhookParameters },
      slsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestSlsParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  failedMnsParameters?: PutEventRuleTargetsResponseBodyFailedMnsParameters;
  failedFcParameters?: PutEventRuleTargetsResponseBodyFailedFcParameters;
  failedParameterCount?: string;
  failedContactParameters?: PutEventRuleTargetsResponseBodyFailedContactParameters;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      failedMnsParameters: 'FailedMnsParameters',
      failedFcParameters: 'FailedFcParameters',
      failedParameterCount: 'FailedParameterCount',
      failedContactParameters: 'FailedContactParameters',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      failedMnsParameters: PutEventRuleTargetsResponseBodyFailedMnsParameters,
      failedFcParameters: PutEventRuleTargetsResponseBodyFailedFcParameters,
      failedParameterCount: 'string',
      failedContactParameters: PutEventRuleTargetsResponseBodyFailedContactParameters,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutEventRuleTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutEventRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputRequest extends $tea.Model {
  destName?: string;
  configJson?: string;
  desc?: string;
  destType?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      configJson: 'ConfigJson',
      desc: 'Desc',
      destType: 'DestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      configJson: 'string',
      desc: 'string',
      destType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutExporterOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutExporterOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleRequest extends $tea.Model {
  ruleName?: string;
  namespace?: string;
  metricName?: string;
  targetWindows?: string;
  describe?: string;
  dstNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      namespace: 'Namespace',
      metricName: 'MetricName',
      targetWindows: 'TargetWindows',
      describe: 'Describe',
      dstNames: 'DstNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      namespace: 'string',
      metricName: 'string',
      targetWindows: 'string',
      describe: 'string',
      dstNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutExporterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutExporterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequest extends $tea.Model {
  escalations?: PutGroupMetricRuleRequestEscalations;
  groupId?: string;
  ruleId?: string;
  category?: string;
  ruleName?: string;
  namespace?: string;
  metricName?: string;
  dimensions?: string;
  effectiveInterval?: string;
  noEffectiveInterval?: string;
  silenceTime?: number;
  period?: string;
  interval?: string;
  webhook?: string;
  emailSubject?: string;
  contactGroups?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      groupId: 'GroupId',
      ruleId: 'RuleId',
      category: 'Category',
      ruleName: 'RuleName',
      namespace: 'Namespace',
      metricName: 'MetricName',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      period: 'Period',
      interval: 'Interval',
      webhook: 'Webhook',
      emailSubject: 'EmailSubject',
      contactGroups: 'ContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutGroupMetricRuleRequestEscalations,
      groupId: 'string',
      ruleId: 'string',
      category: 'string',
      ruleName: 'string',
      namespace: 'string',
      metricName: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'number',
      period: 'string',
      interval: 'string',
      webhook: 'string',
      emailSubject: 'string',
      contactGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutGroupMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutGroupMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequest extends $tea.Model {
  logId?: string;
  slsRegionId?: string;
  slsProject?: string;
  slsLogstore?: string;
  metricName?: string;
  metricExpress?: string;
  groupId?: string;
  valueFilterRelation?: string;
  tumblingwindows?: string;
  unit?: string;
  aggregates?: PutLogMonitorRequestAggregates[];
  groupbys?: PutLogMonitorRequestGroupbys[];
  valueFilter?: PutLogMonitorRequestValueFilter[];
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
      slsRegionId: 'SlsRegionId',
      slsProject: 'SlsProject',
      slsLogstore: 'SlsLogstore',
      metricName: 'MetricName',
      metricExpress: 'MetricExpress',
      groupId: 'GroupId',
      valueFilterRelation: 'ValueFilterRelation',
      tumblingwindows: 'Tumblingwindows',
      unit: 'Unit',
      aggregates: 'Aggregates',
      groupbys: 'Groupbys',
      valueFilter: 'ValueFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'string',
      slsRegionId: 'string',
      slsProject: 'string',
      slsLogstore: 'string',
      metricName: 'string',
      metricExpress: 'string',
      groupId: 'string',
      valueFilterRelation: 'string',
      tumblingwindows: 'string',
      unit: 'string',
      aggregates: { 'type': 'array', 'itemType': PutLogMonitorRequestAggregates },
      groupbys: { 'type': 'array', 'itemType': PutLogMonitorRequestGroupbys },
      valueFilter: { 'type': 'array', 'itemType': PutLogMonitorRequestValueFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  logId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      logId: 'LogId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      logId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutLogMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutLogMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsRequest extends $tea.Model {
  ruleId?: string;
  targets?: PutMetricRuleTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      targets: { 'type': 'array', 'itemType': PutMetricRuleTargetsRequestTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  failData?: PutMetricRuleTargetsResponseBodyFailData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      failData: 'FailData',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      failData: PutMetricRuleTargetsResponseBodyFailData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutMetricRuleTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequest extends $tea.Model {
  groupId?: number;
  groupRules?: PutMonitorGroupDynamicRuleRequestGroupRules[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupRules: 'GroupRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupRules: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class PutMonitorGroupDynamicRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutMonitorGroupDynamicRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutMonitorGroupDynamicRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigRequest extends $tea.Model {
  autoInstall?: boolean;
  enableInstallAgentNewECS?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      enableInstallAgentNewECS: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class PutMonitoringConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutMonitoringConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutMonitoringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequest extends $tea.Model {
  escalations?: PutResourceMetricRuleRequestEscalations;
  ruleId?: string;
  ruleName?: string;
  namespace?: string;
  metricName?: string;
  resources?: string;
  contactGroups?: string;
  webhook?: string;
  effectiveInterval?: string;
  noEffectiveInterval?: string;
  silenceTime?: number;
  period?: string;
  interval?: string;
  emailSubject?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      namespace: 'Namespace',
      metricName: 'MetricName',
      resources: 'Resources',
      contactGroups: 'ContactGroups',
      webhook: 'Webhook',
      effectiveInterval: 'EffectiveInterval',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      period: 'Period',
      interval: 'Interval',
      emailSubject: 'EmailSubject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleRequestEscalations,
      ruleId: 'string',
      ruleName: 'string',
      namespace: 'string',
      metricName: 'string',
      resources: 'string',
      contactGroups: 'string',
      webhook: 'string',
      effectiveInterval: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'number',
      period: 'string',
      interval: 'string',
      emailSubject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutResourceMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutResourceMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequest extends $tea.Model {
  rules?: PutResourceMetricRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': PutResourceMetricRulesRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  failedListResult?: PutResourceMetricRulesResponseBodyFailedListResult;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      failedListResult: 'FailedListResult',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      failedListResult: PutResourceMetricRulesResponseBodyFailedListResult,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutResourceMetricRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutResourceMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $tea.Model {
  tag?: RemoveTagsRequestTag[];
  groupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
      groupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  tag?: RemoveTagsResponseBodyTag;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      tag: 'Tag',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      tag: RemoveTagsResponseBodyTag,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventRequest extends $tea.Model {
  product?: string;
  eventName?: string;
  groupId?: string;
  eventContent?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      eventName: 'EventName',
      groupId: 'GroupId',
      eventContent: 'EventContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      eventName: 'string',
      groupId: 'string',
      eventContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendDryRunSystemEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendDryRunSystemEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentRequest extends $tea.Model {
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

export class UninstallMonitoringAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallMonitoringAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallMonitoringAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequestTag extends $tea.Model {
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

export class ApplyMetricRuleTemplateResponseBodyResourceAlertResults extends $tea.Model {
  groupId?: number;
  success?: boolean;
  code?: string;
  message?: string;
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      success: 'boolean',
      code: 'string',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBodyResource extends $tea.Model {
  alertResults?: ApplyMetricRuleTemplateResponseBodyResourceAlertResults[];
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      alertResults: 'AlertResults',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResults: { 'type': 'array', 'itemType': ApplyMetricRuleTemplateResponseBodyResourceAlertResults },
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupRequestMatchExpress extends $tea.Model {
  tagValueMatchFunction?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValueMatchFunction: 'TagValueMatchFunction',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueMatchFunction: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo extends $tea.Model {
  threshold?: string;
  times?: number;
  statistics?: string;
  comparisonOperator?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      times: 'Times',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      times: 'number',
      statistics: 'string',
      comparisonOperator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn extends $tea.Model {
  threshold?: string;
  comparisonOperator?: string;
  times?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      comparisonOperator: 'string',
      times: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $tea.Model {
  times?: number;
  threshold?: string;
  statistics?: string;
  comparisonOperator?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: 'number',
      threshold: 'string',
      statistics: 'string',
      comparisonOperator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalations extends $tea.Model {
  info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo;
  warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn;
  critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      warn: 'Warn',
      critical: 'Critical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo,
      warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn,
      critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRules extends $tea.Model {
  escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations;
  metricName?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  ruleId?: string;
  dimensions?: string;
  silenceTime?: number;
  webhook?: string;
  namespace?: string;
  emailSubject?: string;
  period?: string;
  ruleName?: string;
  interval?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      metricName: 'MetricName',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      ruleId: 'RuleId',
      dimensions: 'Dimensions',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
      namespace: 'Namespace',
      emailSubject: 'EmailSubject',
      period: 'Period',
      ruleName: 'RuleName',
      interval: 'Interval',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations,
      metricName: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      ruleId: 'string',
      dimensions: 'string',
      silenceTime: 'number',
      webhook: 'string',
      namespace: 'string',
      emailSubject: 'string',
      period: 'string',
      ruleName: 'string',
      interval: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBodyResourcesAlertResult extends $tea.Model {
  success?: boolean;
  code?: number;
  message?: string;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      code: 'Code',
      message: 'Message',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      code: 'number',
      message: 'string',
      ruleName: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBodyResources extends $tea.Model {
  alertResult?: CreateGroupMetricRulesResponseBodyResourcesAlertResult[];
  static names(): { [key: string]: string } {
    return {
      alertResult: 'AlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResult: { 'type': 'array', 'itemType': CreateGroupMetricRulesResponseBodyResourcesAlertResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestMatchExpress extends $tea.Model {
  value?: string;
  function?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      function: 'Function',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      function: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestAlertConfig extends $tea.Model {
  silenceTime?: string;
  comparisonOperator?: string;
  webhook?: string;
  times?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      comparisonOperator: 'ComparisonOperator',
      webhook: 'Webhook',
      times: 'Times',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'string',
      comparisonOperator: 'string',
      webhook: 'string',
      times: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestTaskOption extends $tea.Model {
  httpURI?: string;
  telnetOrPingHost?: string;
  httpResponseCharset?: string;
  httpPostContent?: string;
  httpResponseMatchContent?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpURI: 'HttpURI',
      telnetOrPingHost: 'TelnetOrPingHost',
      httpResponseCharset: 'HttpResponseCharset',
      httpPostContent: 'HttpPostContent',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpURI: 'string',
      telnetOrPingHost: 'string',
      httpResponseCharset: 'string',
      httpPostContent: 'string',
      httpResponseMatchContent: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfig extends $tea.Model {
  notifyType?: number;
  startTime?: number;
  endTime?: number;
  silenceTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      silenceTime: 'SilenceTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'number',
      startTime: 'number',
      endTime: 'number',
      silenceTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  value?: string;
  metricName?: string;
  times?: number;
  operator?: string;
  aggregate?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      metricName: 'MetricName',
      times: 'Times',
      operator: 'Operator',
      aggregate: 'Aggregate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      metricName: 'string',
      times: 'number',
      operator: 'string',
      aggregate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  threshold?: string;
  statistics?: string;
  comparisonOperator?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      statistics: 'string',
      comparisonOperator: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  threshold?: string;
  times?: number;
  comparisonOperator?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      times: 'Times',
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      times: 'number',
      comparisonOperator: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  times?: number;
  threshold?: string;
  comparisonOperator?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: 'number',
      threshold: 'string',
      comparisonOperator: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      warn: 'Warn',
      critical: 'Critical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
      critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations;
  metricName?: string;
  webhook?: string;
  namespace?: string;
  ruleName?: string;
  period?: number;
  selector?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      metricName: 'MetricName',
      webhook: 'Webhook',
      namespace: 'Namespace',
      ruleName: 'RuleName',
      period: 'Period',
      selector: 'Selector',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations,
      metricName: 'string',
      webhook: 'string',
      namespace: 'string',
      ruleName: 'string',
      period: 'number',
      selector: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequestInstances extends $tea.Model {
  instanceName?: string;
  category?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      category: 'Category',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      category: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResultContact extends $tea.Model {
  requestId?: string;
  success?: string;
  code?: string;
  message?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
      code: 'string',
      message: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResult extends $tea.Model {
  contact?: CreateSiteMonitorResponseBodyDataAttachAlertResultContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyDataAttachAlertResultContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyData extends $tea.Model {
  attachAlertResult?: CreateSiteMonitorResponseBodyDataAttachAlertResult;
  static names(): { [key: string]: string } {
    return {
      attachAlertResult: 'AttachAlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachAlertResult: CreateSiteMonitorResponseBodyDataAttachAlertResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultListCreateResultList extends $tea.Model {
  taskName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultList extends $tea.Model {
  createResultList?: CreateSiteMonitorResponseBodyCreateResultListCreateResultList[];
  static names(): { [key: string]: string } {
    return {
      createResultList: 'CreateResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResultList: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyCreateResultListCreateResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds extends $tea.Model {
  targetId?: string[];
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBodyFailIds extends $tea.Model {
  targetIds?: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds;
  static names(): { [key: string]: string } {
    return {
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIds: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponseBodyResource extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup extends $tea.Model {
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

export class DeleteMonitorGroupResponseBodyGroupContactGroups extends $tea.Model {
  contactGroup?: DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroup extends $tea.Model {
  groupName?: string;
  contactGroups?: DeleteMonitorGroupResponseBodyGroupContactGroups;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      contactGroups: 'ContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      contactGroups: DeleteMonitorGroupResponseBodyGroupContactGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  times?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  times?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  times?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations extends $tea.Model {
  critical?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical;
  info?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo;
  warn?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical,
      info: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo,
      warn: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlert extends $tea.Model {
  silenceTime?: string;
  metricName?: string;
  webhook?: string;
  escalations?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations;
  contactGroups?: string;
  namespace?: string;
  mailSubject?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  ruleName?: string;
  alertState?: string;
  period?: string;
  ruleId?: string;
  dimensions?: string;
  enableState?: boolean;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      metricName: 'MetricName',
      webhook: 'Webhook',
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      namespace: 'Namespace',
      mailSubject: 'MailSubject',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      ruleName: 'RuleName',
      alertState: 'AlertState',
      period: 'Period',
      ruleId: 'RuleId',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'string',
      metricName: 'string',
      webhook: 'string',
      escalations: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations,
      contactGroups: 'string',
      namespace: 'string',
      mailSubject: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      ruleName: 'string',
      alertState: 'string',
      period: 'string',
      ruleId: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertList extends $tea.Model {
  alert?: DescribeActiveMetricRuleListResponseBodyAlertListAlert[];
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyAlertListAlert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapointsAlarm extends $tea.Model {
  silenceTime?: string;
  metricName?: string;
  evaluationCount?: string;
  webhook?: string;
  state?: string;
  contactGroups?: string;
  namespace?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  endTime?: string;
  comparisonOperator?: string;
  startTime?: string;
  threshold?: string;
  statistics?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      webhook: 'Webhook',
      state: 'State',
      contactGroups: 'ContactGroups',
      namespace: 'Namespace',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      endTime: 'EndTime',
      comparisonOperator: 'ComparisonOperator',
      startTime: 'StartTime',
      threshold: 'Threshold',
      statistics: 'Statistics',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'string',
      metricName: 'string',
      evaluationCount: 'string',
      webhook: 'string',
      state: 'string',
      contactGroups: 'string',
      namespace: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      endTime: 'string',
      comparisonOperator: 'string',
      startTime: 'string',
      threshold: 'string',
      statistics: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapoints extends $tea.Model {
  alarm?: DescribeActiveMetricRuleListResponseBodyDatapointsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyDatapointsAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts extends $tea.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses extends $tea.Model {
  contactSms?: string[];
  static names(): { [key: string]: string } {
    return {
      contactSms: 'ContactSms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactSms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs extends $tea.Model {
  contactALIIM?: string[];
  static names(): { [key: string]: string } {
    return {
      contactALIIM: 'ContactALIIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactALIIM: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails extends $tea.Model {
  contactMail?: string[];
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory extends $tea.Model {
  status?: number;
  metricName?: string;
  contacts?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts;
  evaluationCount?: number;
  state?: string;
  contactGroups?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups;
  namespace?: string;
  webhooks?: string;
  ruleId?: string;
  ruleName?: string;
  lastTime?: number;
  value?: string;
  expression?: string;
  groupId?: string;
  alertTime?: number;
  instanceName?: string;
  contactSmses?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses;
  dimensions?: string;
  contactALIIMs?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs;
  level?: string;
  contactMails?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      metricName: 'MetricName',
      contacts: 'Contacts',
      evaluationCount: 'EvaluationCount',
      state: 'State',
      contactGroups: 'ContactGroups',
      namespace: 'Namespace',
      webhooks: 'Webhooks',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      lastTime: 'LastTime',
      value: 'Value',
      expression: 'Expression',
      groupId: 'GroupId',
      alertTime: 'AlertTime',
      instanceName: 'InstanceName',
      contactSmses: 'ContactSmses',
      dimensions: 'Dimensions',
      contactALIIMs: 'ContactALIIMs',
      level: 'Level',
      contactMails: 'ContactMails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      metricName: 'string',
      contacts: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts,
      evaluationCount: 'number',
      state: 'string',
      contactGroups: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups,
      namespace: 'string',
      webhooks: 'string',
      ruleId: 'string',
      ruleName: 'string',
      lastTime: 'number',
      value: 'string',
      expression: 'string',
      groupId: 'string',
      alertTime: 'number',
      instanceName: 'string',
      contactSmses: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses,
      dimensions: 'string',
      contactALIIMs: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs,
      level: 'string',
      contactMails: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryList extends $tea.Model {
  alarmHistory?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory[];
  static names(): { [key: string]: string } {
    return {
      alarmHistory: 'AlarmHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistory: { 'type': 'array', 'itemType': DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBodyAlertLogCountLogs extends $tea.Model {
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

export class DescribeAlertLogCountResponseBodyAlertLogCount extends $tea.Model {
  logs?: DescribeAlertLogCountResponseBodyAlertLogCountLogs[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCountLogs },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBodyAlertLogHistogramList extends $tea.Model {
  from?: number;
  to?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListExtendedInfo extends $tea.Model {
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

export class DescribeAlertLogListResponseBodyAlertLogListDimensions extends $tea.Model {
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

export class DescribeAlertLogListResponseBodyAlertLogListEscalation extends $tea.Model {
  expression?: string;
  times?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      times: 'Times',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      times: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogList extends $tea.Model {
  metricName?: string;
  eventName?: string;
  contactALIIWWList?: string[];
  message?: string;
  levelChange?: string;
  ruleId?: string;
  extendedInfo?: DescribeAlertLogListResponseBodyAlertLogListExtendedInfo[];
  dingdingWebhookList?: string[];
  instanceName?: string;
  contactMailList?: string[];
  dimensions?: DescribeAlertLogListResponseBodyAlertLogListDimensions[];
  contactSMSList?: string[];
  sendStatus?: string;
  contactOnCallList?: string[];
  product?: string;
  contactGroups?: string[];
  namespace?: string;
  escalation?: DescribeAlertLogListResponseBodyAlertLogListEscalation;
  instanceId?: string;
  contactDingList?: string[];
  ruleName?: string;
  webhookList?: string[];
  groupId?: string;
  groupName?: string;
  alertTime?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      eventName: 'EventName',
      contactALIIWWList: 'ContactALIIWWList',
      message: 'Message',
      levelChange: 'LevelChange',
      ruleId: 'RuleId',
      extendedInfo: 'ExtendedInfo',
      dingdingWebhookList: 'DingdingWebhookList',
      instanceName: 'InstanceName',
      contactMailList: 'ContactMailList',
      dimensions: 'Dimensions',
      contactSMSList: 'ContactSMSList',
      sendStatus: 'SendStatus',
      contactOnCallList: 'ContactOnCallList',
      product: 'Product',
      contactGroups: 'ContactGroups',
      namespace: 'Namespace',
      escalation: 'Escalation',
      instanceId: 'InstanceId',
      contactDingList: 'ContactDingList',
      ruleName: 'RuleName',
      webhookList: 'WebhookList',
      groupId: 'GroupId',
      groupName: 'GroupName',
      alertTime: 'AlertTime',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      eventName: 'string',
      contactALIIWWList: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      levelChange: 'string',
      ruleId: 'string',
      extendedInfo: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListExtendedInfo },
      dingdingWebhookList: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      contactMailList: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListDimensions },
      contactSMSList: { 'type': 'array', 'itemType': 'string' },
      sendStatus: 'string',
      contactOnCallList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      escalation: DescribeAlertLogListResponseBodyAlertLogListEscalation,
      instanceId: 'string',
      contactDingList: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      webhookList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      groupName: 'string',
      alertTime: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts extends $tea.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupListContactGroup extends $tea.Model {
  describe?: string;
  updateTime?: number;
  contacts?: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts;
  createTime?: number;
  enabledWeeklyReport?: boolean;
  name?: string;
  enableSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      describe: 'Describe',
      updateTime: 'UpdateTime',
      contacts: 'Contacts',
      createTime: 'CreateTime',
      enabledWeeklyReport: 'EnabledWeeklyReport',
      name: 'Name',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describe: 'string',
      updateTime: 'number',
      contacts: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts,
      createTime: 'number',
      enabledWeeklyReport: 'boolean',
      name: 'string',
      enableSubscribed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupList extends $tea.Model {
  contactGroup?: DescribeContactGroupListResponseBodyContactGroupListContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeContactGroupListResponseBodyContactGroupListContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannelsState extends $tea.Model {
  dingWebHook?: string;
  SMS?: string;
  mail?: string;
  aliIM?: string;
  static names(): { [key: string]: string } {
    return {
      dingWebHook: 'DingWebHook',
      SMS: 'SMS',
      mail: 'Mail',
      aliIM: 'AliIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingWebHook: 'string',
      SMS: 'string',
      mail: 'string',
      aliIM: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannels extends $tea.Model {
  dingWebHook?: string;
  SMS?: string;
  mail?: string;
  aliIM?: string;
  static names(): { [key: string]: string } {
    return {
      dingWebHook: 'DingWebHook',
      SMS: 'SMS',
      mail: 'Mail',
      aliIM: 'AliIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingWebHook: 'string',
      SMS: 'string',
      mail: 'string',
      aliIM: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContact extends $tea.Model {
  updateTime?: number;
  channelsState?: DescribeContactListResponseBodyContactsContactChannelsState;
  createTime?: number;
  lang?: string;
  contactGroups?: DescribeContactListResponseBodyContactsContactContactGroups;
  channels?: DescribeContactListResponseBodyContactsContactChannels;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      channelsState: 'ChannelsState',
      createTime: 'CreateTime',
      lang: 'Lang',
      contactGroups: 'ContactGroups',
      channels: 'Channels',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      channelsState: DescribeContactListResponseBodyContactsContactChannelsState,
      createTime: 'number',
      lang: 'string',
      contactGroups: DescribeContactListResponseBodyContactsContactContactGroups,
      channels: DescribeContactListResponseBodyContactsContactChannels,
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContacts extends $tea.Model {
  contact?: DescribeContactListResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListResponseBodyContactsContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContactsContactChannels extends $tea.Model {
  dingWebHook?: string;
  SMS?: string;
  mail?: string;
  aliIM?: string;
  static names(): { [key: string]: string } {
    return {
      dingWebHook: 'DingWebHook',
      SMS: 'SMS',
      mail: 'Mail',
      aliIM: 'AliIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingWebHook: 'string',
      SMS: 'string',
      mail: 'string',
      aliIM: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContactsContact extends $tea.Model {
  updateTime?: number;
  createTime?: number;
  channels?: DescribeContactListByContactGroupResponseBodyContactsContactChannels;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      channels: 'Channels',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      createTime: 'number',
      channels: DescribeContactListByContactGroupResponseBodyContactsContactChannels,
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContacts extends $tea.Model {
  contact?: DescribeContactListByContactGroupResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListByContactGroupResponseBodyContactsContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent extends $tea.Model {
  time?: string;
  groupId?: string;
  name?: string;
  content?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      groupId: 'GroupId',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      groupId: 'string',
      name: 'string',
      content: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEvents extends $tea.Model {
  customEvent?: DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent[];
  static names(): { [key: string]: string } {
    return {
      customEvent: 'CustomEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEvent: { 'type': 'array', 'itemType': DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount extends $tea.Model {
  time?: number;
  num?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      num: 'Num',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      num: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBodyCustomEventCounts extends $tea.Model {
  customEventCount?: DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount[];
  static names(): { [key: string]: string } {
    return {
      customEventCount: 'CustomEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEventCount: { 'type': 'array', 'itemType': DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram extends $tea.Model {
  endTime?: number;
  startTime?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBodyEventHistograms extends $tea.Model {
  eventHistogram?: DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      eventHistogram: 'EventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventHistogram: { 'type': 'array', 'itemType': DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress extends $tea.Model {
  tagValueMatchFunction?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValueMatchFunction: 'TagValueMatchFunction',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueMatchFunction: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress extends $tea.Model {
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList extends $tea.Model {
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup extends $tea.Model {
  status?: string;
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress;
  templateIdList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList;
  dynamicTagRuleId?: string;
  matchExpressFilterRelation?: string;
  regionId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      matchExpress: 'MatchExpress',
      templateIdList: 'TemplateIdList',
      dynamicTagRuleId: 'DynamicTagRuleId',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      matchExpress: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress,
      templateIdList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList,
      dynamicTagRuleId: 'string',
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupList extends $tea.Model {
  tagGroup?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup[];
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList extends $tea.Model {
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList extends $tea.Model {
  levelList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternNameList extends $tea.Model {
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPattern extends $tea.Model {
  statusList?: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList;
  product?: string;
  levelList?: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList;
  nameList?: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList;
  static names(): { [key: string]: string } {
    return {
      statusList: 'StatusList',
      product: 'Product',
      levelList: 'LevelList',
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusList: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList,
      product: 'string',
      levelList: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList,
      nameList: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResult extends $tea.Model {
  eventType?: string;
  groupId?: string;
  description?: string;
  state?: string;
  name?: string;
  eventPattern?: DescribeEventRuleAttributeResponseBodyResultEventPattern;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      groupId: 'GroupId',
      description: 'Description',
      state: 'State',
      name: 'Name',
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      groupId: 'string',
      description: 'string',
      state: 'string',
      name: 'string',
      eventPattern: DescribeEventRuleAttributeResponseBodyResultEventPattern,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList extends $tea.Model {
  eventTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList extends $tea.Model {
  levelList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList extends $tea.Model {
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern extends $tea.Model {
  eventTypeList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList;
  product?: string;
  levelList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList;
  nameList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      product: 'Product',
      levelList: 'LevelList',
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList,
      product: 'string',
      levelList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList,
      nameList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern extends $tea.Model {
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern[];
  static names(): { [key: string]: string } {
    return {
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPattern: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRule extends $tea.Model {
  eventType?: string;
  description?: string;
  groupId?: string;
  state?: string;
  name?: string;
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      description: 'Description',
      groupId: 'GroupId',
      state: 'State',
      name: 'Name',
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      description: 'string',
      groupId: 'string',
      state: 'string',
      name: 'string',
      eventPattern: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRules extends $tea.Model {
  eventRule?: DescribeEventRuleListResponseBodyEventRulesEventRule[];
  static names(): { [key: string]: string } {
    return {
      eventRule: 'EventRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRule: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyContactParametersContactParameter extends $tea.Model {
  contactGroupName?: string;
  level?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      level: 'Level',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      level: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyContactParameters extends $tea.Model {
  contactParameter?: DescribeEventRuleTargetListResponseBodyContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyContactParametersContactParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter extends $tea.Model {
  logStore?: string;
  region?: string;
  project?: string;
  arn?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      region: 'Region',
      project: 'Project',
      arn: 'Arn',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      region: 'string',
      project: 'string',
      arn: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParameters extends $tea.Model {
  slsParameter?: DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter[];
  static names(): { [key: string]: string } {
    return {
      slsParameter: 'SlsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter extends $tea.Model {
  protocol?: string;
  url?: string;
  method?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      url: 'Url',
      method: 'Method',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      url: 'string',
      method: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyWebhookParameters extends $tea.Model {
  webhookParameter?: DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter[];
  static names(): { [key: string]: string } {
    return {
      webhookParameter: 'WebhookParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyFcParametersFCParameter extends $tea.Model {
  functionName?: string;
  region?: string;
  serviceName?: string;
  arn?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      region: 'Region',
      serviceName: 'ServiceName',
      arn: 'Arn',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      region: 'string',
      serviceName: 'string',
      arn: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyFcParameters extends $tea.Model {
  FCParameter?: DescribeEventRuleTargetListResponseBodyFcParametersFCParameter[];
  static names(): { [key: string]: string } {
    return {
      FCParameter: 'FCParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyFcParametersFCParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter extends $tea.Model {
  region?: string;
  queue?: string;
  arn?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      queue: 'Queue',
      arn: 'Arn',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      queue: 'string',
      arn: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyMnsParameters extends $tea.Model {
  mnsParameter?: DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson extends $tea.Model {
  as?: string;
  ak?: string;
  endpoint?: string;
  project?: string;
  logstore?: string;
  static names(): { [key: string]: string } {
    return {
      as: 'as',
      ak: 'ak',
      endpoint: 'endpoint',
      project: 'project',
      logstore: 'logstore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      as: 'string',
      ak: 'string',
      endpoint: 'string',
      project: 'string',
      logstore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapoint extends $tea.Model {
  createTime?: number;
  configJson?: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson;
  destName?: string;
  destType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      configJson: 'ConfigJson',
      destName: 'DestName',
      destType: 'DestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      configJson: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson,
      destName: 'string',
      destType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapoints extends $tea.Model {
  datapoint?: DescribeExporterOutputListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterOutputListResponseBodyDatapointsDatapoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapointsDatapointDstName extends $tea.Model {
  dstName?: string[];
  static names(): { [key: string]: string } {
    return {
      dstName: 'DstName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapointsDatapoint extends $tea.Model {
  metricName?: string;
  describe?: string;
  targetWindows?: string;
  createTime?: number;
  enabled?: boolean;
  dstName?: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName;
  dimension?: string;
  namespace?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      describe: 'Describe',
      targetWindows: 'TargetWindows',
      createTime: 'CreateTime',
      enabled: 'Enabled',
      dstName: 'DstName',
      dimension: 'Dimension',
      namespace: 'Namespace',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      describe: 'string',
      targetWindows: 'string',
      createTime: 'number',
      enabled: 'boolean',
      dstName: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName,
      dimension: 'string',
      namespace: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapoints extends $tea.Model {
  datapoint?: DescribeExporterRuleListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterRuleListResponseBodyDatapointsDatapoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress extends $tea.Model {
  value?: string;
  name?: string;
  function?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
      function: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress extends $tea.Model {
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  silenceTime?: string;
  webhook?: string;
  times?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
      times: 'Times',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      silenceTime: 'string',
      webhook: 'string',
      times: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig extends $tea.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess extends $tea.Model {
  processName?: string;
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress;
  groupId?: string;
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig;
  matchExpressFilterRelation?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      processName: 'ProcessName',
      matchExpress: 'MatchExpress',
      groupId: 'GroupId',
      alertConfig: 'AlertConfig',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processName: 'string',
      matchExpress: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress,
      groupId: 'string',
      alertConfig: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig,
      matchExpressFilterRelation: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcesses extends $tea.Model {
  process?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption extends $tea.Model {
  httpMethod?: string;
  httpURI?: string;
  telnetOrPingHost?: string;
  httpResponseCharset?: string;
  httpPostContent?: string;
  httpNegative?: boolean;
  httpKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      httpMethod: 'HttpMethod',
      httpURI: 'HttpURI',
      telnetOrPingHost: 'TelnetOrPingHost',
      httpResponseCharset: 'HttpResponseCharset',
      httpPostContent: 'HttpPostContent',
      httpNegative: 'HttpNegative',
      httpKeyword: 'HttpKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpMethod: 'string',
      httpURI: 'string',
      telnetOrPingHost: 'string',
      httpResponseCharset: 'string',
      httpPostContent: 'string',
      httpNegative: 'boolean',
      httpKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList extends $tea.Model {
  value?: string;
  metricName?: string;
  times?: string;
  operator?: string;
  aggregate?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      metricName: 'MetricName',
      times: 'Times',
      operator: 'Operator',
      aggregate: 'Aggregate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      metricName: 'string',
      times: 'string',
      operator: 'string',
      aggregate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList extends $tea.Model {
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList[];
  static names(): { [key: string]: string } {
    return {
      escalationList: 'escalationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationList: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig extends $tea.Model {
  silenceTime?: number;
  endTime?: number;
  startTime?: number;
  notifyType?: number;
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      notifyType: 'NotifyType',
      escalationList: 'EscalationList',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'number',
      endTime: 'number',
      startTime: 'number',
      notifyType: 'number',
      escalationList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList,
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances extends $tea.Model {
  instance?: string[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig extends $tea.Model {
  taskType?: string;
  groupName?: string;
  groupId?: number;
  taskOption?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption;
  taskName?: string;
  disabled?: boolean;
  alertConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig;
  taskScope?: string;
  instances?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      groupName: 'GroupName',
      groupId: 'GroupId',
      taskOption: 'TaskOption',
      taskName: 'TaskName',
      disabled: 'Disabled',
      alertConfig: 'AlertConfig',
      taskScope: 'TaskScope',
      instances: 'Instances',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      groupName: 'string',
      groupId: 'number',
      taskOption: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption,
      taskName: 'string',
      disabled: 'boolean',
      alertConfig: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig,
      taskScope: 'string',
      instances: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances,
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskList extends $tea.Model {
  nodeTaskConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskConfig: 'NodeTaskConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskConfig: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter extends $tea.Model {
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

export class DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates extends $tea.Model {
  max?: string;
  fieldName?: string;
  min?: string;
  function?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      fieldName: 'FieldName',
      min: 'Min',
      function: 'Function',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      fieldName: 'string',
      min: 'string',
      function: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitor extends $tea.Model {
  valueFilterRelation?: string;
  metricName?: string;
  valueFilter?: DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter[];
  slsRegionId?: string;
  slsLogstore?: string;
  aggregates?: DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates[];
  tumblingwindows?: string[];
  groupId?: number;
  groupbys?: string[];
  logId?: number;
  metricExpress?: string;
  gmtCreate?: number;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      valueFilterRelation: 'ValueFilterRelation',
      metricName: 'MetricName',
      valueFilter: 'ValueFilter',
      slsRegionId: 'SlsRegionId',
      slsLogstore: 'SlsLogstore',
      aggregates: 'Aggregates',
      tumblingwindows: 'Tumblingwindows',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      gmtCreate: 'GmtCreate',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueFilterRelation: 'string',
      metricName: 'string',
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter },
      slsRegionId: 'string',
      slsLogstore: 'string',
      aggregates: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates },
      tumblingwindows: { 'type': 'array', 'itemType': 'string' },
      groupId: 'number',
      groupbys: { 'type': 'array', 'itemType': 'string' },
      logId: 'number',
      metricExpress: 'string',
      gmtCreate: 'number',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBodyLogMonitorListValueFilter extends $tea.Model {
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

export class DescribeLogMonitorListResponseBodyLogMonitorList extends $tea.Model {
  valueFilterRelation?: string;
  slsLogstore?: string;
  metricName?: string;
  valueFilter?: DescribeLogMonitorListResponseBodyLogMonitorListValueFilter[];
  groupId?: number;
  logId?: number;
  slsRegionId?: string;
  gmtCreate?: number;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      valueFilterRelation: 'ValueFilterRelation',
      slsLogstore: 'SlsLogstore',
      metricName: 'MetricName',
      valueFilter: 'ValueFilter',
      groupId: 'GroupId',
      logId: 'LogId',
      slsRegionId: 'SlsRegionId',
      gmtCreate: 'GmtCreate',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueFilterRelation: 'string',
      slsLogstore: 'string',
      metricName: 'string',
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorListValueFilter },
      groupId: 'number',
      logId: 'number',
      slsRegionId: 'string',
      gmtCreate: 'number',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResourcesResource extends $tea.Model {
  metricName?: string;
  description?: string;
  labels?: string;
  unit?: string;
  dimensions?: string;
  namespace?: string;
  periods?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      description: 'Description',
      labels: 'Labels',
      unit: 'Unit',
      dimensions: 'Dimensions',
      namespace: 'Namespace',
      periods: 'Periods',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      description: 'string',
      labels: 'string',
      unit: 'string',
      dimensions: 'string',
      namespace: 'string',
      periods: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResources extends $tea.Model {
  resource?: DescribeMetricMetaListResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMetricMetaListResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBodyMetricRuleCount extends $tea.Model {
  ok?: number;
  nodata?: number;
  disable?: number;
  total?: number;
  alarm?: number;
  static names(): { [key: string]: string } {
    return {
      ok: 'Ok',
      nodata: 'Nodata',
      disable: 'Disable',
      total: 'Total',
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ok: 'number',
      nodata: 'number',
      disable: 'number',
      total: 'number',
      alarm: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations extends $tea.Model {
  critical?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical;
  info?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo;
  warn?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical,
      info: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo,
      warn: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $tea.Model {
  silenceTime?: number;
  metricName?: string;
  webhook?: string;
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  contactGroups?: string;
  sourceType?: string;
  namespace?: string;
  effectiveInterval?: string;
  noEffectiveInterval?: string;
  mailSubject?: string;
  ruleName?: string;
  alertState?: string;
  ruleId?: string;
  period?: string;
  groupName?: string;
  groupId?: string;
  dimensions?: string;
  enableState?: boolean;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      metricName: 'MetricName',
      webhook: 'Webhook',
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      sourceType: 'SourceType',
      namespace: 'Namespace',
      effectiveInterval: 'EffectiveInterval',
      noEffectiveInterval: 'NoEffectiveInterval',
      mailSubject: 'MailSubject',
      ruleName: 'RuleName',
      alertState: 'AlertState',
      ruleId: 'RuleId',
      period: 'Period',
      groupName: 'GroupName',
      groupId: 'GroupId',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'number',
      metricName: 'string',
      webhook: 'string',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      contactGroups: 'string',
      sourceType: 'string',
      namespace: 'string',
      effectiveInterval: 'string',
      noEffectiveInterval: 'string',
      mailSubject: 'string',
      ruleName: 'string',
      alertState: 'string',
      ruleId: 'string',
      period: 'string',
      groupName: 'string',
      groupId: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarms extends $tea.Model {
  alarm?: DescribeMetricRuleListResponseBodyAlarmsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBodyTargetsTarget extends $tea.Model {
  id?: string;
  arn?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      arn: 'Arn',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      arn: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBodyTargets extends $tea.Model {
  target?: DescribeMetricRuleTargetsResponseBodyTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeMetricRuleTargetsResponseBodyTargetsTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  times?: number;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      times: 'number',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations extends $tea.Model {
  critical?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical;
  info?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo;
  warn?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical,
      info: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo,
      warn: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate extends $tea.Model {
  metricName?: string;
  selector?: string;
  webhook?: string;
  escalations?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations;
  namespace?: string;
  category?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      selector: 'Selector',
      webhook: 'Webhook',
      escalations: 'Escalations',
      namespace: 'Namespace',
      category: 'Category',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      selector: 'string',
      webhook: 'string',
      escalations: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations,
      namespace: 'string',
      category: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates extends $tea.Model {
  alertTemplate?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate[];
  static names(): { [key: string]: string } {
    return {
      alertTemplate: 'AlertTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplate: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResource extends $tea.Model {
  description?: string;
  alertTemplates?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates;
  name?: string;
  restVersion?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      alertTemplates: 'AlertTemplates',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      alertTemplates: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates,
      name: 'string',
      restVersion: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory extends $tea.Model {
  groupId?: number;
  groupName?: string;
  applyTime?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      applyTime: 'ApplyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
      applyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories extends $tea.Model {
  applyHistory?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory[];
  static names(): { [key: string]: string } {
    return {
      applyHistory: 'ApplyHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistory: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate extends $tea.Model {
  applyHistories?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories;
  description?: string;
  gmtCreate?: number;
  name?: string;
  restVersion?: number;
  gmtModified?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      applyHistories: 'ApplyHistories',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      restVersion: 'RestVersion',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistories: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories,
      description: 'string',
      gmtCreate: 'number',
      name: 'string',
      restVersion: 'number',
      gmtModified: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplates extends $tea.Model {
  template?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem extends $tea.Model {
  category?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory extends $tea.Model {
  categoryItem?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem[];
  static names(): { [key: string]: string } {
    return {
      categoryItem: 'CategoryItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryItem: { 'type': 'array', 'itemType': DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories extends $tea.Model {
  groupId?: number;
  monitorGroupCategory?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      monitorGroupCategory: 'MonitorGroupCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      monitorGroupCategory: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter extends $tea.Model {
  value?: string;
  function?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      function: 'Function',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      function: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters extends $tea.Model {
  filter?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResource extends $tea.Model {
  filterRelation?: string;
  filters?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      filterRelation: 'FilterRelation',
      filters: 'Filters',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRelation: 'string',
      filters: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters,
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResource extends $tea.Model {
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion extends $tea.Model {
  availabilityZone?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc extends $tea.Model {
  vswitchInstanceId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchInstanceId: 'VswitchInstanceId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchInstanceId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag extends $tea.Model {
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

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags extends $tea.Model {
  tag?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource extends $tea.Model {
  instanceName?: string;
  region?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion;
  vpc?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc;
  dimension?: string;
  tags?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags;
  category?: string;
  instanceId?: string;
  networkType?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      region: 'Region',
      vpc: 'Vpc',
      dimension: 'Dimension',
      tags: 'Tags',
      category: 'Category',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      region: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion,
      vpc: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc,
      dimension: 'string',
      tags: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags,
      category: 'string',
      instanceId: 'string',
      networkType: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBodyResourcesResource extends $tea.Model {
  instanceName?: string;
  category?: string;
  instanceId?: string;
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      category: 'Category',
      instanceId: 'InstanceId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      category: 'string',
      instanceId: 'string',
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupInstancesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstancesResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy extends $tea.Model {
  endTime?: number;
  type?: string;
  startTime?: number;
  groupId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
      startTime: 'StartTime',
      groupId: 'GroupId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      type: 'string',
      startTime: 'number',
      groupId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList extends $tea.Model {
  notifyPolicy?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy[];
  static names(): { [key: string]: string } {
    return {
      notifyPolicy: 'NotifyPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPolicy: { 'type': 'array', 'itemType': DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsRequestTag extends $tea.Model {
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

export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup extends $tea.Model {
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

export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups extends $tea.Model {
  contactGroup?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag extends $tea.Model {
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

export class DescribeMonitorGroupsResponseBodyResourcesResourceTags extends $tea.Model {
  tag?: DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds extends $tea.Model {
  templateId?: string[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResource extends $tea.Model {
  type?: string;
  bindUrl?: string;
  serviceId?: string;
  contactGroups?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups;
  tags?: DescribeMonitorGroupsResponseBodyResourcesResourceTags;
  groupFounderTagKey?: string;
  templateIds?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds;
  gmtModified?: number;
  groupFounderTagValue?: string;
  groupName?: string;
  groupId?: number;
  dynamicTagRuleId?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bindUrl: 'BindUrl',
      serviceId: 'ServiceId',
      contactGroups: 'ContactGroups',
      tags: 'Tags',
      groupFounderTagKey: 'GroupFounderTagKey',
      templateIds: 'TemplateIds',
      gmtModified: 'GmtModified',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupName: 'GroupName',
      groupId: 'GroupId',
      dynamicTagRuleId: 'DynamicTagRuleId',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      bindUrl: 'string',
      serviceId: 'string',
      contactGroups: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups,
      tags: DescribeMonitorGroupsResponseBodyResourcesResourceTags,
      groupFounderTagKey: 'string',
      templateIds: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds,
      gmtModified: 'number',
      groupFounderTagValue: 'string',
      groupName: 'string',
      groupId: 'number',
      dynamicTagRuleId: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupsResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHostsHost extends $tea.Model {
  serialNumber?: string;
  natIp?: string;
  aliUid?: number;
  hostName?: string;
  instanceId?: string;
  networkType?: string;
  isAliyunHost?: boolean;
  eipAddress?: string;
  agentVersion?: string;
  eipId?: string;
  ipGroup?: string;
  region?: string;
  instanceTypeFamily?: string;
  operatingSystem?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      natIp: 'NatIp',
      aliUid: 'AliUid',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      isAliyunHost: 'isAliyunHost',
      eipAddress: 'EipAddress',
      agentVersion: 'AgentVersion',
      eipId: 'EipId',
      ipGroup: 'IpGroup',
      region: 'Region',
      instanceTypeFamily: 'InstanceTypeFamily',
      operatingSystem: 'OperatingSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      natIp: 'string',
      aliUid: 'number',
      hostName: 'string',
      instanceId: 'string',
      networkType: 'string',
      isAliyunHost: 'boolean',
      eipAddress: 'string',
      agentVersion: 'string',
      eipId: 'string',
      ipGroup: 'string',
      region: 'string',
      instanceTypeFamily: 'string',
      operatingSystem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHosts extends $tea.Model {
  host?: DescribeMonitoringAgentHostsResponseBodyHostsHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': DescribeMonitoringAgentHostsResponseBodyHostsHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess extends $tea.Model {
  processName?: string;
  processId?: number;
  groupId?: string;
  command?: string;
  processUser?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      processName: 'ProcessName',
      processId: 'ProcessId',
      groupId: 'GroupId',
      command: 'Command',
      processUser: 'ProcessUser',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processName: 'string',
      processId: 'number',
      groupId: 'string',
      command: 'string',
      processUser: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBodyNodeProcesses extends $tea.Model {
  nodeProcess?: DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess[];
  static names(): { [key: string]: string } {
    return {
      nodeProcess: 'NodeProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeProcess: { 'type': 'array', 'itemType': DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus extends $tea.Model {
  status?: string;
  autoInstall?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      autoInstall: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusList extends $tea.Model {
  nodeStatus?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus[];
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: { 'type': 'array', 'itemType': DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota extends $tea.Model {
  api?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi;
  expireTime?: string;
  customMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor;
  eventMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor;
  instanceId?: string;
  siteMonitorTask?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask;
  phone?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone;
  suitInfo?: string;
  SMS?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS;
  logMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor;
  siteMonitorOperatorProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe;
  siteMonitorEcsProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      expireTime: 'ExpireTime',
      customMonitor: 'CustomMonitor',
      eventMonitor: 'EventMonitor',
      instanceId: 'InstanceId',
      siteMonitorTask: 'SiteMonitorTask',
      phone: 'Phone',
      suitInfo: 'SuitInfo',
      SMS: 'SMS',
      logMonitor: 'LogMonitor',
      siteMonitorOperatorProbe: 'SiteMonitorOperatorProbe',
      siteMonitorEcsProbe: 'SiteMonitorEcsProbe',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi,
      expireTime: 'string',
      customMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor,
      eventMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor,
      instanceId: 'string',
      siteMonitorTask: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask,
      phone: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone,
      suitInfo: 'string',
      SMS: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS,
      logMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor,
      siteMonitorOperatorProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe,
      siteMonitorEcsProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponseBodyTagKeys extends $tea.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig extends $tea.Model {
  metricName?: string;
  evaluationCount?: string;
  namespace?: string;
  threshold?: string;
  statistics?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      namespace: 'Namespace',
      threshold: 'Threshold',
      statistics: 'Statistics',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      evaluationCount: 'string',
      namespace: 'string',
      threshold: 'string',
      statistics: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList extends $tea.Model {
  alertInitConfig?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig[];
  static names(): { [key: string]: string } {
    return {
      alertInitConfig: 'AlertInitConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfig: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule extends $tea.Model {
  product?: string;
  alertInitConfigList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      alertInitConfigList: 'AlertInitConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      alertInitConfigList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList extends $tea.Model {
  allProductInitMetricRule?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule[];
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRule: 'AllProductInitMetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRule: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBodyResourcesResource extends $tea.Model {
  description?: string;
  labels?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBodyResources extends $tea.Model {
  resource?: DescribeProjectMetaResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeProjectMetaResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule extends $tea.Model {
  metricName?: string;
  evaluationCount?: string;
  namespace?: string;
  okActions?: string;
  alarmActions?: string;
  period?: string;
  ruleName?: string;
  ruleId?: string;
  comparisonOperator?: string;
  expression?: string;
  dimensions?: string;
  stateValue?: string;
  actionEnable?: string;
  level?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      namespace: 'Namespace',
      okActions: 'OkActions',
      alarmActions: 'AlarmActions',
      period: 'Period',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
      comparisonOperator: 'ComparisonOperator',
      expression: 'Expression',
      dimensions: 'Dimensions',
      stateValue: 'StateValue',
      actionEnable: 'ActionEnable',
      level: 'Level',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      evaluationCount: 'string',
      namespace: 'string',
      okActions: 'string',
      alarmActions: 'string',
      period: 'string',
      ruleName: 'string',
      ruleId: 'string',
      comparisonOperator: 'string',
      expression: 'string',
      dimensions: 'string',
      stateValue: 'string',
      actionEnable: 'string',
      level: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodyMetricRules extends $tea.Model {
  metricRule?: DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule[];
  static names(): { [key: string]: string } {
    return {
      metricRule: 'MetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRule: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson extends $tea.Model {
  password?: string;
  requestFormat?: string;
  expectValue?: string;
  responseContent?: string;
  timeOut?: number;
  failureRate?: number;
  header?: string;
  cookie?: string;
  pingNum?: number;
  port?: number;
  authentication?: number;
  httpMethod?: string;
  matchRule?: number;
  requestContent?: string;
  username?: string;
  traceroute?: number;
  responseFormat?: string;
  dnsType?: string;
  dnsServer?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      requestFormat: 'request_format',
      expectValue: 'expect_value',
      responseContent: 'response_content',
      timeOut: 'time_out',
      failureRate: 'failure_rate',
      header: 'header',
      cookie: 'cookie',
      pingNum: 'ping_num',
      port: 'port',
      authentication: 'authentication',
      httpMethod: 'http_method',
      matchRule: 'match_rule',
      requestContent: 'request_content',
      username: 'username',
      traceroute: 'traceroute',
      responseFormat: 'response_format',
      dnsType: 'dns_type',
      dnsServer: 'dns_server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      requestFormat: 'string',
      expectValue: 'string',
      responseContent: 'string',
      timeOut: 'number',
      failureRate: 'number',
      header: 'string',
      cookie: 'string',
      pingNum: 'number',
      port: 'number',
      authentication: 'number',
      httpMethod: 'string',
      matchRule: 'number',
      requestContent: 'string',
      username: 'string',
      traceroute: 'number',
      responseFormat: 'string',
      dnsType: 'string',
      dnsServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity extends $tea.Model {
  cityName?: string;
  city?: string;
  ispName?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      cityName: 'CityName',
      city: 'City',
      ispName: 'IspName',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityName: 'string',
      city: 'string',
      ispName: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities extends $tea.Model {
  ispCity?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity[];
  static names(): { [key: string]: string } {
    return {
      ispCity: 'IspCity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCity: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitors extends $tea.Model {
  taskType?: string;
  optionJson?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson;
  interval?: string;
  taskState?: string;
  taskName?: string;
  address?: string;
  ispCities?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      optionJson: 'OptionJson',
      interval: 'Interval',
      taskState: 'TaskState',
      taskName: 'TaskName',
      address: 'Address',
      ispCities: 'IspCities',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      optionJson: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson,
      interval: 'string',
      taskState: 'string',
      taskName: 'string',
      address: 'string',
      ispCities: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson extends $tea.Model {
  password?: string;
  requestFormat?: string;
  expectValue?: string;
  responseContent?: string;
  timeOut?: number;
  failureRate?: number;
  header?: string;
  cookie?: string;
  pingNum?: number;
  port?: number;
  authentication?: number;
  httpMethod?: string;
  matchRule?: number;
  requestContent?: string;
  username?: string;
  traceroute?: number;
  responseFormat?: string;
  dnsType?: string;
  dnsServer?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      requestFormat: 'request_format',
      expectValue: 'expect_value',
      responseContent: 'response_content',
      timeOut: 'time_out',
      failureRate: 'failure_rate',
      header: 'header',
      cookie: 'cookie',
      pingNum: 'ping_num',
      port: 'port',
      authentication: 'authentication',
      httpMethod: 'http_method',
      matchRule: 'match_rule',
      requestContent: 'request_content',
      username: 'username',
      traceroute: 'traceroute',
      responseFormat: 'response_format',
      dnsType: 'dns_type',
      dnsServer: 'dns_server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      requestFormat: 'string',
      expectValue: 'string',
      responseContent: 'string',
      timeOut: 'number',
      failureRate: 'number',
      header: 'string',
      cookie: 'string',
      pingNum: 'number',
      port: 'number',
      authentication: 'number',
      httpMethod: 'string',
      matchRule: 'number',
      requestContent: 'string',
      username: 'string',
      traceroute: 'number',
      responseFormat: 'string',
      dnsType: 'string',
      dnsServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor extends $tea.Model {
  taskType?: string;
  updateTime?: string;
  interval?: string;
  taskState?: string;
  optionsJson?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson;
  createTime?: string;
  taskName?: string;
  address?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      interval: 'Interval',
      taskState: 'TaskState',
      optionsJson: 'OptionsJson',
      createTime: 'CreateTime',
      taskName: 'TaskName',
      address: 'Address',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      updateTime: 'string',
      interval: 'string',
      taskState: 'string',
      optionsJson: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson,
      createTime: 'string',
      taskName: 'string',
      address: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitors extends $tea.Model {
  siteMonitor?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor[];
  static names(): { [key: string]: string } {
    return {
      siteMonitor: 'SiteMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteMonitor: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponseBodyData extends $tea.Model {
  siteMonitorOperatorQuotaQuota?: number;
  secondMonitor?: boolean;
  siteMonitorQuotaTaskUsed?: number;
  siteMonitorTaskQuota?: number;
  siteMonitorVersion?: string;
  siteMonitorIdcQuota?: number;
  static names(): { [key: string]: string } {
    return {
      siteMonitorOperatorQuotaQuota: 'SiteMonitorOperatorQuotaQuota',
      secondMonitor: 'SecondMonitor',
      siteMonitorQuotaTaskUsed: 'SiteMonitorQuotaTaskUsed',
      siteMonitorTaskQuota: 'SiteMonitorTaskQuota',
      siteMonitorVersion: 'SiteMonitorVersion',
      siteMonitorIdcQuota: 'SiteMonitorIdcQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteMonitorOperatorQuotaQuota: 'number',
      secondMonitor: 'boolean',
      siteMonitorQuotaTaskUsed: 'number',
      siteMonitorTaskQuota: 'number',
      siteMonitorVersion: 'string',
      siteMonitorIdcQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent extends $tea.Model {
  status?: string;
  time?: number;
  groupId?: string;
  product?: string;
  instanceName?: string;
  resourceId?: string;
  name?: string;
  content?: string;
  level?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      time: 'Time',
      groupId: 'GroupId',
      product: 'Product',
      instanceName: 'InstanceName',
      resourceId: 'ResourceId',
      name: 'Name',
      content: 'Content',
      level: 'Level',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      time: 'number',
      groupId: 'string',
      product: 'string',
      instanceName: 'string',
      resourceId: 'string',
      name: 'string',
      content: 'string',
      level: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBodySystemEvents extends $tea.Model {
  systemEvent?: DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent[];
  static names(): { [key: string]: string } {
    return {
      systemEvent: 'SystemEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEvent: { 'type': 'array', 'itemType': DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount extends $tea.Model {
  status?: string;
  time?: number;
  groupId?: string;
  product?: string;
  instanceName?: string;
  num?: number;
  resourceId?: string;
  name?: string;
  content?: string;
  level?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      time: 'Time',
      groupId: 'GroupId',
      product: 'Product',
      instanceName: 'InstanceName',
      num: 'Num',
      resourceId: 'ResourceId',
      name: 'Name',
      content: 'Content',
      level: 'Level',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      time: 'number',
      groupId: 'string',
      product: 'string',
      instanceName: 'string',
      num: 'number',
      resourceId: 'string',
      name: 'string',
      content: 'string',
      level: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBodySystemEventCounts extends $tea.Model {
  systemEventCount?: DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount[];
  static names(): { [key: string]: string } {
    return {
      systemEventCount: 'SystemEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventCount: { 'type': 'array', 'itemType': DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram extends $tea.Model {
  endTime?: number;
  startTime?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBodySystemEventHistograms extends $tea.Model {
  systemEventHistogram?: DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      systemEventHistogram: 'SystemEventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventHistogram: { 'type': 'array', 'itemType': DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBodyTagKeys extends $tea.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBodyTagValues extends $tea.Model {
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance extends $tea.Model {
  instanceList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList,
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList extends $tea.Model {
  nodeTaskInstance?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskInstance: 'NodeTaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskInstance: { 'type': 'array', 'itemType': DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequestAlertConfig extends $tea.Model {
  silenceTime?: string;
  comparisonOperator?: string;
  webhook?: string;
  times?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  threshold?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      silenceTime: 'SilenceTime',
      comparisonOperator: 'ComparisonOperator',
      webhook: 'Webhook',
      times: 'Times',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceTime: 'string',
      comparisonOperator: 'string',
      webhook: 'string',
      times: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      threshold: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestTaskOption extends $tea.Model {
  httpURI?: string;
  telnetOrPingHost?: string;
  httpResponseCharset?: string;
  httpPostContent?: string;
  httpResponseMatchContent?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpURI: 'HttpURI',
      telnetOrPingHost: 'TelnetOrPingHost',
      httpResponseCharset: 'HttpResponseCharset',
      httpPostContent: 'HttpPostContent',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpURI: 'string',
      telnetOrPingHost: 'string',
      httpResponseCharset: 'string',
      httpPostContent: 'string',
      httpResponseMatchContent: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfig extends $tea.Model {
  notifyType?: number;
  startTime?: number;
  endTime?: number;
  silenceTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      silenceTime: 'SilenceTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'number',
      startTime: 'number',
      endTime: 'number',
      silenceTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  value?: string;
  metricName?: string;
  times?: number;
  operator?: string;
  aggregate?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      metricName: 'MetricName',
      times: 'Times',
      operator: 'Operator',
      aggregate: 'Aggregate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      metricName: 'string',
      times: 'number',
      operator: 'string',
      aggregate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  threshold?: string;
  statistics?: string;
  comparisonOperator?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      statistics: 'string',
      comparisonOperator: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  threshold?: string;
  times?: number;
  comparisonOperator?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      times: 'Times',
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      times: 'number',
      comparisonOperator: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  times?: number;
  threshold?: string;
  comparisonOperator?: string;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: 'number',
      threshold: 'string',
      comparisonOperator: 'string',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      warn: 'Warn',
      critical: 'Critical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
      critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations;
  metricName?: string;
  webhook?: string;
  namespace?: string;
  ruleName?: string;
  period?: number;
  selector?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      metricName: 'MetricName',
      webhook: 'Webhook',
      namespace: 'Namespace',
      ruleName: 'RuleName',
      period: 'Period',
      selector: 'Selector',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations,
      metricName: 'string',
      webhook: 'string',
      namespace: 'string',
      ruleName: 'string',
      period: 'number',
      selector: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesRequestInstances extends $tea.Model {
  instanceName?: string;
  category?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      category: 'Category',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      category: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactRequestChannels extends $tea.Model {
  SMS?: string;
  mail?: string;
  aliIM?: string;
  dingWebHook?: string;
  static names(): { [key: string]: string } {
    return {
      SMS: 'SMS',
      mail: 'Mail',
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SMS: 'string',
      mail: 'string',
      aliIM: 'string',
      dingWebHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequestEventInfo extends $tea.Model {
  time?: string;
  eventName?: string;
  groupId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      eventName: 'EventName',
      groupId: 'GroupId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      eventName: 'string',
      groupId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequestMetricList extends $tea.Model {
  type?: string;
  metricName?: string;
  time?: string;
  groupId?: string;
  values?: string;
  dimensions?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      metricName: 'MetricName',
      time: 'Time',
      groupId: 'GroupId',
      values: 'Values',
      dimensions: 'Dimensions',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      metricName: 'string',
      time: 'string',
      groupId: 'string',
      values: 'string',
      dimensions: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleRequestEventPattern extends $tea.Model {
  eventTypeList?: string[];
  statusList?: string[];
  product?: string;
  levelList?: string[];
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      statusList: 'StatusList',
      product: 'Product',
      levelList: 'LevelList',
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      levelList: { 'type': 'array', 'itemType': 'string' },
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestFcParameters extends $tea.Model {
  functionName?: string;
  region?: string;
  serviceName?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      region: 'Region',
      serviceName: 'ServiceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      region: 'string',
      serviceName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestContactParameters extends $tea.Model {
  contactGroupName?: string;
  level?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      level: 'Level',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      level: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestMnsParameters extends $tea.Model {
  region?: string;
  queue?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      queue: 'Queue',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      queue: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestWebhookParameters extends $tea.Model {
  protocol?: string;
  method?: string;
  url?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      method: 'Method',
      url: 'Url',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      method: 'string',
      url: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestSlsParameters extends $tea.Model {
  logStore?: string;
  region?: string;
  project?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      region: 'Region',
      project: 'Project',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      region: 'string',
      project: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter extends $tea.Model {
  region?: string;
  queue?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      queue: 'Queue',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      queue: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParameters extends $tea.Model {
  mnsParameter?: PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter extends $tea.Model {
  functionName?: string;
  region?: string;
  serviceName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      region: 'Region',
      serviceName: 'ServiceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      region: 'string',
      serviceName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParameters extends $tea.Model {
  fcParameter?: PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter[];
  static names(): { [key: string]: string } {
    return {
      fcParameter: 'FcParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter extends $tea.Model {
  contactGroupName?: string;
  id?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedContactParameters extends $tea.Model {
  contactParameter?: PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsCritical extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsWarn extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsInfo extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalations extends $tea.Model {
  critical: PutGroupMetricRuleRequestEscalationsCritical;
  warn: PutGroupMetricRuleRequestEscalationsWarn;
  info: PutGroupMetricRuleRequestEscalationsInfo;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      warn: 'Warn',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutGroupMetricRuleRequestEscalationsCritical,
      warn: PutGroupMetricRuleRequestEscalationsWarn,
      info: PutGroupMetricRuleRequestEscalationsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestAggregates extends $tea.Model {
  fieldName?: string;
  function?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      function: 'Function',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      function: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestGroupbys extends $tea.Model {
  fieldName?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestValueFilter extends $tea.Model {
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

export class PutMetricRuleTargetsRequestTargets extends $tea.Model {
  arn?: string;
  level?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      level: 'Level',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      level: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargetsTarget extends $tea.Model {
  id?: string;
  arn?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      arn: 'Arn',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      arn: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargets extends $tea.Model {
  target?: PutMetricRuleTargetsResponseBodyFailDataTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutMetricRuleTargetsResponseBodyFailDataTargetsTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailData extends $tea.Model {
  targets?: PutMetricRuleTargetsResponseBodyFailDataTargets;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: PutMetricRuleTargetsResponseBodyFailDataTargets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRulesFilters extends $tea.Model {
  value?: string;
  function?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      function: 'Function',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      function: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRules extends $tea.Model {
  filterRelation?: string;
  filters?: PutMonitorGroupDynamicRuleRequestGroupRulesFilters[];
  category?: string;
  static names(): { [key: string]: string } {
    return {
      filterRelation: 'FilterRelation',
      filters: 'Filters',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRelation: 'string',
      filters: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRulesFilters },
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsCritical extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsWarn extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsInfo extends $tea.Model {
  statistics?: string;
  comparisonOperator?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'string',
      comparisonOperator: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalations extends $tea.Model {
  critical: PutResourceMetricRuleRequestEscalationsCritical;
  warn: PutResourceMetricRuleRequestEscalationsWarn;
  info: PutResourceMetricRuleRequestEscalationsInfo;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      warn: 'Warn',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleRequestEscalationsCritical,
      warn: PutResourceMetricRuleRequestEscalationsWarn,
      info: PutResourceMetricRuleRequestEscalationsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsInfo extends $tea.Model {
  threshold?: string;
  times?: number;
  statistics?: string;
  comparisonOperator?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      times: 'Times',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      times: 'number',
      statistics: 'string',
      comparisonOperator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsWarn extends $tea.Model {
  threshold?: string;
  comparisonOperator?: string;
  times?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      times: 'Times',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'string',
      comparisonOperator: 'string',
      times: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $tea.Model {
  times?: number;
  threshold?: string;
  statistics?: string;
  comparisonOperator?: string;
  static names(): { [key: string]: string } {
    return {
      times: 'Times',
      threshold: 'Threshold',
      statistics: 'Statistics',
      comparisonOperator: 'ComparisonOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      times: 'number',
      threshold: 'string',
      statistics: 'string',
      comparisonOperator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalations extends $tea.Model {
  info: PutResourceMetricRulesRequestRulesEscalationsInfo;
  warn: PutResourceMetricRulesRequestRulesEscalationsWarn;
  critical: PutResourceMetricRulesRequestRulesEscalationsCritical;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      warn: 'Warn',
      critical: 'Critical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: PutResourceMetricRulesRequestRulesEscalationsInfo,
      warn: PutResourceMetricRulesRequestRulesEscalationsWarn,
      critical: PutResourceMetricRulesRequestRulesEscalationsCritical,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRules extends $tea.Model {
  escalations: PutResourceMetricRulesRequestRulesEscalations;
  metricName?: string;
  noEffectiveInterval?: string;
  effectiveInterval?: string;
  ruleId?: string;
  resources?: string;
  silenceTime?: number;
  webhook?: string;
  contactGroups?: string;
  namespace?: string;
  emailSubject?: string;
  period?: string;
  ruleName?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      metricName: 'MetricName',
      noEffectiveInterval: 'NoEffectiveInterval',
      effectiveInterval: 'EffectiveInterval',
      ruleId: 'RuleId',
      resources: 'Resources',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
      contactGroups: 'ContactGroups',
      namespace: 'Namespace',
      emailSubject: 'EmailSubject',
      period: 'Period',
      ruleName: 'RuleName',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRulesRequestRulesEscalations,
      metricName: 'string',
      noEffectiveInterval: 'string',
      effectiveInterval: 'string',
      ruleId: 'string',
      resources: 'string',
      silenceTime: 'number',
      webhook: 'string',
      contactGroups: 'string',
      namespace: 'string',
      emailSubject: 'string',
      period: 'string',
      ruleName: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTargetResult extends $tea.Model {
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTarget extends $tea.Model {
  result?: PutResourceMetricRulesResponseBodyFailedListResultTargetResult;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: PutResourceMetricRulesResponseBodyFailedListResultTargetResult,
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResult extends $tea.Model {
  target?: PutResourceMetricRulesResponseBodyFailedListResultTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutResourceMetricRulesResponseBodyFailedListResultTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequestTag extends $tea.Model {
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

export class RemoveTagsResponseBodyTag extends $tea.Model {
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTagsResponse>(await this.doRPCRequest("AddTags", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async applyMetricRuleTemplateWithOptions(request: ApplyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApplyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyMetricRuleTemplateResponse>(await this.doRPCRequest("ApplyMetricRuleTemplate", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyMetricRuleTemplateResponse({}));
  }

  async applyMetricRuleTemplate(request: ApplyMetricRuleTemplateRequest): Promise<ApplyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyMetricRuleTemplateWithOptions(request, runtime);
  }

  async createCmsCallNumOrderWithOptions(request: CreateCmsCallNumOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsCallNumOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCmsCallNumOrderResponse>(await this.doRPCRequest("CreateCmsCallNumOrder", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCmsCallNumOrderResponse({}));
  }

  async createCmsCallNumOrder(request: CreateCmsCallNumOrderRequest): Promise<CreateCmsCallNumOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsCallNumOrderWithOptions(request, runtime);
  }

  async createCmsOrderWithOptions(request: CreateCmsOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCmsOrderResponse>(await this.doRPCRequest("CreateCmsOrder", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCmsOrderResponse({}));
  }

  async createCmsOrder(request: CreateCmsOrderRequest): Promise<CreateCmsOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsOrderWithOptions(request, runtime);
  }

  async createCmsSmspackageOrderWithOptions(request: CreateCmsSmspackageOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsSmspackageOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCmsSmspackageOrderResponse>(await this.doRPCRequest("CreateCmsSmspackageOrder", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCmsSmspackageOrderResponse({}));
  }

  async createCmsSmspackageOrder(request: CreateCmsSmspackageOrderRequest): Promise<CreateCmsSmspackageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsSmspackageOrderWithOptions(request, runtime);
  }

  async createDynamicTagGroupWithOptions(request: CreateDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDynamicTagGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDynamicTagGroupResponse>(await this.doRPCRequest("CreateDynamicTagGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDynamicTagGroupResponse({}));
  }

  async createDynamicTagGroup(request: CreateDynamicTagGroupRequest): Promise<CreateDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDynamicTagGroupWithOptions(request, runtime);
  }

  async createGroupMetricRulesWithOptions(request: CreateGroupMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMetricRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupMetricRulesResponse>(await this.doRPCRequest("CreateGroupMetricRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupMetricRulesResponse({}));
  }

  async createGroupMetricRules(request: CreateGroupMetricRulesRequest): Promise<CreateGroupMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMetricRulesWithOptions(request, runtime);
  }

  async createGroupMonitoringAgentProcessWithOptions(request: CreateGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupMonitoringAgentProcessResponse>(await this.doRPCRequest("CreateGroupMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupMonitoringAgentProcessResponse({}));
  }

  async createGroupMonitoringAgentProcess(request: CreateGroupMonitoringAgentProcessRequest): Promise<CreateGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async createHostAvailabilityWithOptions(request: CreateHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHostAvailabilityResponse>(await this.doRPCRequest("CreateHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHostAvailabilityResponse({}));
  }

  async createHostAvailability(request: CreateHostAvailabilityRequest): Promise<CreateHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostAvailabilityWithOptions(request, runtime);
  }

  async createMetricRuleResourcesWithOptions(request: CreateMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMetricRuleResourcesResponse>(await this.doRPCRequest("CreateMetricRuleResources", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMetricRuleResourcesResponse({}));
  }

  async createMetricRuleResources(request: CreateMetricRuleResourcesRequest): Promise<CreateMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleResourcesWithOptions(request, runtime);
  }

  async createMetricRuleTemplateWithOptions(request: CreateMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMetricRuleTemplateResponse>(await this.doRPCRequest("CreateMetricRuleTemplate", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMetricRuleTemplateResponse({}));
  }

  async createMetricRuleTemplate(request: CreateMetricRuleTemplateRequest): Promise<CreateMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleTemplateWithOptions(request, runtime);
  }

  async createMonitorAgentProcessWithOptions(request: CreateMonitorAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorAgentProcessResponse>(await this.doRPCRequest("CreateMonitorAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorAgentProcessResponse({}));
  }

  async createMonitorAgentProcess(request: CreateMonitorAgentProcessRequest): Promise<CreateMonitorAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorAgentProcessWithOptions(request, runtime);
  }

  async createMonitorGroupWithOptions(request: CreateMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorGroupResponse>(await this.doRPCRequest("CreateMonitorGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorGroupResponse({}));
  }

  async createMonitorGroup(request: CreateMonitorGroupRequest): Promise<CreateMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  async createMonitorGroupByResourceGroupIdWithOptions(request: CreateMonitorGroupByResourceGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorGroupByResourceGroupIdResponse>(await this.doRPCRequest("CreateMonitorGroupByResourceGroupId", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorGroupByResourceGroupIdResponse({}));
  }

  async createMonitorGroupByResourceGroupId(request: CreateMonitorGroupByResourceGroupIdRequest): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupByResourceGroupIdWithOptions(request, runtime);
  }

  async createMonitorGroupInstancesWithOptions(request: CreateMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorGroupInstancesResponse>(await this.doRPCRequest("CreateMonitorGroupInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorGroupInstancesResponse({}));
  }

  async createMonitorGroupInstances(request: CreateMonitorGroupInstancesRequest): Promise<CreateMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupInstancesWithOptions(request, runtime);
  }

  async createMonitorGroupNotifyPolicyWithOptions(request: CreateMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorGroupNotifyPolicyResponse>(await this.doRPCRequest("CreateMonitorGroupNotifyPolicy", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorGroupNotifyPolicyResponse({}));
  }

  async createMonitorGroupNotifyPolicy(request: CreateMonitorGroupNotifyPolicyRequest): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async createMonitoringAgentProcessWithOptions(request: CreateMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitoringAgentProcessResponse>(await this.doRPCRequest("CreateMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitoringAgentProcessResponse({}));
  }

  async createMonitoringAgentProcess(request: CreateMonitoringAgentProcessRequest): Promise<CreateMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitoringAgentProcessWithOptions(request, runtime);
  }

  async createSiteMonitorWithOptions(request: CreateSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSiteMonitorResponse>(await this.doRPCRequest("CreateSiteMonitor", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSiteMonitorResponse({}));
  }

  async createSiteMonitor(request: CreateSiteMonitorRequest): Promise<CreateSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteMonitorWithOptions(request, runtime);
  }

  async deleteContactWithOptions(request: DeleteContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteContactResponse>(await this.doRPCRequest("DeleteContact", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteContactResponse({}));
  }

  async deleteContact(request: DeleteContactRequest): Promise<DeleteContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  async deleteContactGroupWithOptions(request: DeleteContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteContactGroupResponse>(await this.doRPCRequest("DeleteContactGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteContactGroupResponse({}));
  }

  async deleteContactGroup(request: DeleteContactGroupRequest): Promise<DeleteContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  async deleteCustomMetricWithOptions(request: DeleteCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomMetricResponse>(await this.doRPCRequest("DeleteCustomMetric", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomMetricResponse({}));
  }

  async deleteCustomMetric(request: DeleteCustomMetricRequest): Promise<DeleteCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomMetricWithOptions(request, runtime);
  }

  async deleteDynamicTagGroupWithOptions(request: DeleteDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicTagGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDynamicTagGroupResponse>(await this.doRPCRequest("DeleteDynamicTagGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDynamicTagGroupResponse({}));
  }

  async deleteDynamicTagGroup(request: DeleteDynamicTagGroupRequest): Promise<DeleteDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicTagGroupWithOptions(request, runtime);
  }

  async deleteEventRulesWithOptions(request: DeleteEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventRulesResponse>(await this.doRPCRequest("DeleteEventRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventRulesResponse({}));
  }

  async deleteEventRules(request: DeleteEventRulesRequest): Promise<DeleteEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRulesWithOptions(request, runtime);
  }

  async deleteEventRuleTargetsWithOptions(request: DeleteEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRuleTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventRuleTargetsResponse>(await this.doRPCRequest("DeleteEventRuleTargets", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventRuleTargetsResponse({}));
  }

  async deleteEventRuleTargets(request: DeleteEventRuleTargetsRequest): Promise<DeleteEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRuleTargetsWithOptions(request, runtime);
  }

  async deleteExporterOutputWithOptions(request: DeleteExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExporterOutputResponse>(await this.doRPCRequest("DeleteExporterOutput", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExporterOutputResponse({}));
  }

  async deleteExporterOutput(request: DeleteExporterOutputRequest): Promise<DeleteExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterOutputWithOptions(request, runtime);
  }

  async deleteExporterRuleWithOptions(request: DeleteExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExporterRuleResponse>(await this.doRPCRequest("DeleteExporterRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExporterRuleResponse({}));
  }

  async deleteExporterRule(request: DeleteExporterRuleRequest): Promise<DeleteExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterRuleWithOptions(request, runtime);
  }

  async deleteGroupMonitoringAgentProcessWithOptions(request: DeleteGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupMonitoringAgentProcessResponse>(await this.doRPCRequest("DeleteGroupMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupMonitoringAgentProcessResponse({}));
  }

  async deleteGroupMonitoringAgentProcess(request: DeleteGroupMonitoringAgentProcessRequest): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteHostAvailabilityWithOptions(request: DeleteHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHostAvailabilityResponse>(await this.doRPCRequest("DeleteHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHostAvailabilityResponse({}));
  }

  async deleteHostAvailability(request: DeleteHostAvailabilityRequest): Promise<DeleteHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAvailabilityWithOptions(request, runtime);
  }

  async deleteLogMonitorWithOptions(request: DeleteLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLogMonitorResponse>(await this.doRPCRequest("DeleteLogMonitor", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLogMonitorResponse({}));
  }

  async deleteLogMonitor(request: DeleteLogMonitorRequest): Promise<DeleteLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogMonitorWithOptions(request, runtime);
  }

  async deleteMetricRuleResourcesWithOptions(request: DeleteMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMetricRuleResourcesResponse>(await this.doRPCRequest("DeleteMetricRuleResources", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMetricRuleResourcesResponse({}));
  }

  async deleteMetricRuleResources(request: DeleteMetricRuleResourcesRequest): Promise<DeleteMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleResourcesWithOptions(request, runtime);
  }

  async deleteMetricRulesWithOptions(request: DeleteMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMetricRulesResponse>(await this.doRPCRequest("DeleteMetricRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMetricRulesResponse({}));
  }

  async deleteMetricRules(request: DeleteMetricRulesRequest): Promise<DeleteMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRulesWithOptions(request, runtime);
  }

  async deleteMetricRuleTargetsWithOptions(request: DeleteMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMetricRuleTargetsResponse>(await this.doRPCRequest("DeleteMetricRuleTargets", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMetricRuleTargetsResponse({}));
  }

  async deleteMetricRuleTargets(request: DeleteMetricRuleTargetsRequest): Promise<DeleteMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTargetsWithOptions(request, runtime);
  }

  async deleteMetricRuleTemplateWithOptions(request: DeleteMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMetricRuleTemplateResponse>(await this.doRPCRequest("DeleteMetricRuleTemplate", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMetricRuleTemplateResponse({}));
  }

  async deleteMetricRuleTemplate(request: DeleteMetricRuleTemplateRequest): Promise<DeleteMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTemplateWithOptions(request, runtime);
  }

  async deleteMonitorGroupWithOptions(request: DeleteMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMonitorGroupResponse>(await this.doRPCRequest("DeleteMonitorGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMonitorGroupResponse({}));
  }

  async deleteMonitorGroup(request: DeleteMonitorGroupRequest): Promise<DeleteMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  async deleteMonitorGroupDynamicRuleWithOptions(request: DeleteMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMonitorGroupDynamicRuleResponse>(await this.doRPCRequest("DeleteMonitorGroupDynamicRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMonitorGroupDynamicRuleResponse({}));
  }

  async deleteMonitorGroupDynamicRule(request: DeleteMonitorGroupDynamicRuleRequest): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async deleteMonitorGroupInstancesWithOptions(request: DeleteMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMonitorGroupInstancesResponse>(await this.doRPCRequest("DeleteMonitorGroupInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMonitorGroupInstancesResponse({}));
  }

  async deleteMonitorGroupInstances(request: DeleteMonitorGroupInstancesRequest): Promise<DeleteMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupInstancesWithOptions(request, runtime);
  }

  async deleteMonitorGroupNotifyPolicyWithOptions(request: DeleteMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMonitorGroupNotifyPolicyResponse>(await this.doRPCRequest("DeleteMonitorGroupNotifyPolicy", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMonitorGroupNotifyPolicyResponse({}));
  }

  async deleteMonitorGroupNotifyPolicy(request: DeleteMonitorGroupNotifyPolicyRequest): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async deleteMonitoringAgentProcessWithOptions(request: DeleteMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMonitoringAgentProcessResponse>(await this.doRPCRequest("DeleteMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMonitoringAgentProcessResponse({}));
  }

  async deleteMonitoringAgentProcess(request: DeleteMonitoringAgentProcessRequest): Promise<DeleteMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteSiteMonitorsWithOptions(request: DeleteSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSiteMonitorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSiteMonitorsResponse>(await this.doRPCRequest("DeleteSiteMonitors", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSiteMonitorsResponse({}));
  }

  async deleteSiteMonitors(request: DeleteSiteMonitorsRequest): Promise<DeleteSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSiteMonitorsWithOptions(request, runtime);
  }

  async describeActiveMetricRuleListWithOptions(request: DescribeActiveMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveMetricRuleListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeActiveMetricRuleListResponse>(await this.doRPCRequest("DescribeActiveMetricRuleList", "2019-01-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeActiveMetricRuleListResponse({}));
  }

  async describeActiveMetricRuleList(request: DescribeActiveMetricRuleListRequest): Promise<DescribeActiveMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveMetricRuleListWithOptions(request, runtime);
  }

  async describeAlertHistoryListWithOptions(request: DescribeAlertHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertHistoryListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlertHistoryListResponse>(await this.doRPCRequest("DescribeAlertHistoryList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlertHistoryListResponse({}));
  }

  async describeAlertHistoryList(request: DescribeAlertHistoryListRequest): Promise<DescribeAlertHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertHistoryListWithOptions(request, runtime);
  }

  async describeAlertLogCountWithOptions(request: DescribeAlertLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlertLogCountResponse>(await this.doRPCRequest("DescribeAlertLogCount", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlertLogCountResponse({}));
  }

  async describeAlertLogCount(request: DescribeAlertLogCountRequest): Promise<DescribeAlertLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogCountWithOptions(request, runtime);
  }

  async describeAlertLogHistogramWithOptions(request: DescribeAlertLogHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogHistogramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlertLogHistogramResponse>(await this.doRPCRequest("DescribeAlertLogHistogram", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlertLogHistogramResponse({}));
  }

  async describeAlertLogHistogram(request: DescribeAlertLogHistogramRequest): Promise<DescribeAlertLogHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogHistogramWithOptions(request, runtime);
  }

  async describeAlertLogListWithOptions(request: DescribeAlertLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlertLogListResponse>(await this.doRPCRequest("DescribeAlertLogList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlertLogListResponse({}));
  }

  async describeAlertLogList(request: DescribeAlertLogListRequest): Promise<DescribeAlertLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogListWithOptions(request, runtime);
  }

  async describeContactGroupListWithOptions(request: DescribeContactGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContactGroupListResponse>(await this.doRPCRequest("DescribeContactGroupList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContactGroupListResponse({}));
  }

  async describeContactGroupList(request: DescribeContactGroupListRequest): Promise<DescribeContactGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactGroupListWithOptions(request, runtime);
  }

  async describeContactListWithOptions(request: DescribeContactListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContactListResponse>(await this.doRPCRequest("DescribeContactList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContactListResponse({}));
  }

  async describeContactList(request: DescribeContactListRequest): Promise<DescribeContactListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListWithOptions(request, runtime);
  }

  async describeContactListByContactGroupWithOptions(request: DescribeContactListByContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListByContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContactListByContactGroupResponse>(await this.doRPCRequest("DescribeContactListByContactGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContactListByContactGroupResponse({}));
  }

  async describeContactListByContactGroup(request: DescribeContactListByContactGroupRequest): Promise<DescribeContactListByContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListByContactGroupWithOptions(request, runtime);
  }

  async describeCustomEventAttributeWithOptions(request: DescribeCustomEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomEventAttributeResponse>(await this.doRPCRequest("DescribeCustomEventAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomEventAttributeResponse({}));
  }

  async describeCustomEventAttribute(request: DescribeCustomEventAttributeRequest): Promise<DescribeCustomEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventAttributeWithOptions(request, runtime);
  }

  async describeCustomEventCountWithOptions(request: DescribeCustomEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomEventCountResponse>(await this.doRPCRequest("DescribeCustomEventCount", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomEventCountResponse({}));
  }

  async describeCustomEventCount(request: DescribeCustomEventCountRequest): Promise<DescribeCustomEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventCountWithOptions(request, runtime);
  }

  async describeCustomEventHistogramWithOptions(request: DescribeCustomEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventHistogramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomEventHistogramResponse>(await this.doRPCRequest("DescribeCustomEventHistogram", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomEventHistogramResponse({}));
  }

  async describeCustomEventHistogram(request: DescribeCustomEventHistogramRequest): Promise<DescribeCustomEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventHistogramWithOptions(request, runtime);
  }

  async describeCustomMetricListWithOptions(request: DescribeCustomMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomMetricListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomMetricListResponse>(await this.doRPCRequest("DescribeCustomMetricList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomMetricListResponse({}));
  }

  async describeCustomMetricList(request: DescribeCustomMetricListRequest): Promise<DescribeCustomMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomMetricListWithOptions(request, runtime);
  }

  async describeDynamicTagRuleListWithOptions(request: DescribeDynamicTagRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDynamicTagRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDynamicTagRuleListResponse>(await this.doRPCRequest("DescribeDynamicTagRuleList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDynamicTagRuleListResponse({}));
  }

  async describeDynamicTagRuleList(request: DescribeDynamicTagRuleListRequest): Promise<DescribeDynamicTagRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDynamicTagRuleListWithOptions(request, runtime);
  }

  async describeEventRuleAttributeWithOptions(request: DescribeEventRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventRuleAttributeResponse>(await this.doRPCRequest("DescribeEventRuleAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventRuleAttributeResponse({}));
  }

  async describeEventRuleAttribute(request: DescribeEventRuleAttributeRequest): Promise<DescribeEventRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleAttributeWithOptions(request, runtime);
  }

  async describeEventRuleListWithOptions(request: DescribeEventRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventRuleListResponse>(await this.doRPCRequest("DescribeEventRuleList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventRuleListResponse({}));
  }

  async describeEventRuleList(request: DescribeEventRuleListRequest): Promise<DescribeEventRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleListWithOptions(request, runtime);
  }

  async describeEventRuleTargetListWithOptions(request: DescribeEventRuleTargetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleTargetListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventRuleTargetListResponse>(await this.doRPCRequest("DescribeEventRuleTargetList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventRuleTargetListResponse({}));
  }

  async describeEventRuleTargetList(request: DescribeEventRuleTargetListRequest): Promise<DescribeEventRuleTargetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleTargetListWithOptions(request, runtime);
  }

  async describeExporterOutputListWithOptions(request: DescribeExporterOutputListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterOutputListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExporterOutputListResponse>(await this.doRPCRequest("DescribeExporterOutputList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExporterOutputListResponse({}));
  }

  async describeExporterOutputList(request: DescribeExporterOutputListRequest): Promise<DescribeExporterOutputListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterOutputListWithOptions(request, runtime);
  }

  async describeExporterRuleListWithOptions(request: DescribeExporterRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExporterRuleListResponse>(await this.doRPCRequest("DescribeExporterRuleList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExporterRuleListResponse({}));
  }

  async describeExporterRuleList(request: DescribeExporterRuleListRequest): Promise<DescribeExporterRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterRuleListWithOptions(request, runtime);
  }

  async describeGroupMonitoringAgentProcessWithOptions(request: DescribeGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupMonitoringAgentProcessResponse>(await this.doRPCRequest("DescribeGroupMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupMonitoringAgentProcessResponse({}));
  }

  async describeGroupMonitoringAgentProcess(request: DescribeGroupMonitoringAgentProcessRequest): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async describeHostAvailabilityListWithOptions(request: DescribeHostAvailabilityListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostAvailabilityListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostAvailabilityListResponse>(await this.doRPCRequest("DescribeHostAvailabilityList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostAvailabilityListResponse({}));
  }

  async describeHostAvailabilityList(request: DescribeHostAvailabilityListRequest): Promise<DescribeHostAvailabilityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostAvailabilityListWithOptions(request, runtime);
  }

  async describeLogMonitorAttributeWithOptions(request: DescribeLogMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLogMonitorAttributeResponse>(await this.doRPCRequest("DescribeLogMonitorAttribute", "2019-01-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLogMonitorAttributeResponse({}));
  }

  async describeLogMonitorAttribute(request: DescribeLogMonitorAttributeRequest): Promise<DescribeLogMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorAttributeWithOptions(request, runtime);
  }

  async describeLogMonitorListWithOptions(request: DescribeLogMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogMonitorListResponse>(await this.doRPCRequest("DescribeLogMonitorList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogMonitorListResponse({}));
  }

  async describeLogMonitorList(request: DescribeLogMonitorListRequest): Promise<DescribeLogMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorListWithOptions(request, runtime);
  }

  async describeMetricDataWithOptions(request: DescribeMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricDataResponse>(await this.doRPCRequest("DescribeMetricData", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricDataResponse({}));
  }

  async describeMetricData(request: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  async describeMetricLastWithOptions(request: DescribeMetricLastRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricLastResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricLastResponse>(await this.doRPCRequest("DescribeMetricLast", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricLastResponse({}));
  }

  async describeMetricLast(request: DescribeMetricLastRequest): Promise<DescribeMetricLastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricLastWithOptions(request, runtime);
  }

  async describeMetricListWithOptions(request: DescribeMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricListResponse>(await this.doRPCRequest("DescribeMetricList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricListResponse({}));
  }

  async describeMetricList(request: DescribeMetricListRequest): Promise<DescribeMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  async describeMetricMetaListWithOptions(request: DescribeMetricMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricMetaListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricMetaListResponse>(await this.doRPCRequest("DescribeMetricMetaList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricMetaListResponse({}));
  }

  async describeMetricMetaList(request: DescribeMetricMetaListRequest): Promise<DescribeMetricMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricMetaListWithOptions(request, runtime);
  }

  async describeMetricRuleCountWithOptions(request: DescribeMetricRuleCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeMetricRuleCountResponse>(await this.doRPCRequest("DescribeMetricRuleCount", "2019-01-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeMetricRuleCountResponse({}));
  }

  async describeMetricRuleCount(request: DescribeMetricRuleCountRequest): Promise<DescribeMetricRuleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleCountWithOptions(request, runtime);
  }

  async describeMetricRuleListWithOptions(request: DescribeMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricRuleListResponse>(await this.doRPCRequest("DescribeMetricRuleList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricRuleListResponse({}));
  }

  async describeMetricRuleList(request: DescribeMetricRuleListRequest): Promise<DescribeMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleListWithOptions(request, runtime);
  }

  async describeMetricRuleTargetsWithOptions(request: DescribeMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricRuleTargetsResponse>(await this.doRPCRequest("DescribeMetricRuleTargets", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricRuleTargetsResponse({}));
  }

  async describeMetricRuleTargets(request: DescribeMetricRuleTargetsRequest): Promise<DescribeMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTargetsWithOptions(request, runtime);
  }

  async describeMetricRuleTemplateAttributeWithOptions(request: DescribeMetricRuleTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricRuleTemplateAttributeResponse>(await this.doRPCRequest("DescribeMetricRuleTemplateAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricRuleTemplateAttributeResponse({}));
  }

  async describeMetricRuleTemplateAttribute(request: DescribeMetricRuleTemplateAttributeRequest): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateAttributeWithOptions(request, runtime);
  }

  async describeMetricRuleTemplateListWithOptions(request: DescribeMetricRuleTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricRuleTemplateListResponse>(await this.doRPCRequest("DescribeMetricRuleTemplateList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricRuleTemplateListResponse({}));
  }

  async describeMetricRuleTemplateList(request: DescribeMetricRuleTemplateListRequest): Promise<DescribeMetricRuleTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateListWithOptions(request, runtime);
  }

  async describeMetricTopWithOptions(request: DescribeMetricTopRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricTopResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricTopResponse>(await this.doRPCRequest("DescribeMetricTop", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricTopResponse({}));
  }

  async describeMetricTop(request: DescribeMetricTopRequest): Promise<DescribeMetricTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricTopWithOptions(request, runtime);
  }

  async describeMonitorGroupCategoriesWithOptions(request: DescribeMonitorGroupCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupCategoriesResponse>(await this.doRPCRequest("DescribeMonitorGroupCategories", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupCategoriesResponse({}));
  }

  async describeMonitorGroupCategories(request: DescribeMonitorGroupCategoriesRequest): Promise<DescribeMonitorGroupCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupCategoriesWithOptions(request, runtime);
  }

  async describeMonitorGroupDynamicRulesWithOptions(request: DescribeMonitorGroupDynamicRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupDynamicRulesResponse>(await this.doRPCRequest("DescribeMonitorGroupDynamicRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupDynamicRulesResponse({}));
  }

  async describeMonitorGroupDynamicRules(request: DescribeMonitorGroupDynamicRulesRequest): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupDynamicRulesWithOptions(request, runtime);
  }

  async describeMonitorGroupInstanceAttributeWithOptions(request: DescribeMonitorGroupInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupInstanceAttributeResponse>(await this.doRPCRequest("DescribeMonitorGroupInstanceAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupInstanceAttributeResponse({}));
  }

  async describeMonitorGroupInstanceAttribute(request: DescribeMonitorGroupInstanceAttributeRequest): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstanceAttributeWithOptions(request, runtime);
  }

  async describeMonitorGroupInstancesWithOptions(request: DescribeMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupInstancesResponse>(await this.doRPCRequest("DescribeMonitorGroupInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupInstancesResponse({}));
  }

  async describeMonitorGroupInstances(request: DescribeMonitorGroupInstancesRequest): Promise<DescribeMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstancesWithOptions(request, runtime);
  }

  async describeMonitorGroupNotifyPolicyListWithOptions(request: DescribeMonitorGroupNotifyPolicyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupNotifyPolicyListResponse>(await this.doRPCRequest("DescribeMonitorGroupNotifyPolicyList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupNotifyPolicyListResponse({}));
  }

  async describeMonitorGroupNotifyPolicyList(request: DescribeMonitorGroupNotifyPolicyListRequest): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupNotifyPolicyListWithOptions(request, runtime);
  }

  async describeMonitorGroupsWithOptions(request: DescribeMonitorGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorGroupsResponse>(await this.doRPCRequest("DescribeMonitorGroups", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorGroupsResponse({}));
  }

  async describeMonitorGroups(request: DescribeMonitorGroupsRequest): Promise<DescribeMonitorGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupsWithOptions(request, runtime);
  }

  async describeMonitoringAgentAccessKeyWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeMonitoringAgentAccessKeyResponse>(await this.doRPCRequest("DescribeMonitoringAgentAccessKey", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringAgentAccessKeyResponse({}));
  }

  async describeMonitoringAgentAccessKey(): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentAccessKeyWithOptions(runtime);
  }

  async describeMonitoringAgentConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeMonitoringAgentConfigResponse>(await this.doRPCRequest("DescribeMonitoringAgentConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringAgentConfigResponse({}));
  }

  async describeMonitoringAgentConfig(): Promise<DescribeMonitoringAgentConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentConfigWithOptions(runtime);
  }

  async describeMonitoringAgentHostsWithOptions(request: DescribeMonitoringAgentHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitoringAgentHostsResponse>(await this.doRPCRequest("DescribeMonitoringAgentHosts", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringAgentHostsResponse({}));
  }

  async describeMonitoringAgentHosts(request: DescribeMonitoringAgentHostsRequest): Promise<DescribeMonitoringAgentHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentHostsWithOptions(request, runtime);
  }

  async describeMonitoringAgentProcessesWithOptions(request: DescribeMonitoringAgentProcessesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentProcessesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitoringAgentProcessesResponse>(await this.doRPCRequest("DescribeMonitoringAgentProcesses", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringAgentProcessesResponse({}));
  }

  async describeMonitoringAgentProcesses(request: DescribeMonitoringAgentProcessesRequest): Promise<DescribeMonitoringAgentProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentProcessesWithOptions(request, runtime);
  }

  async describeMonitoringAgentStatusesWithOptions(request: DescribeMonitoringAgentStatusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentStatusesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitoringAgentStatusesResponse>(await this.doRPCRequest("DescribeMonitoringAgentStatuses", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringAgentStatusesResponse({}));
  }

  async describeMonitoringAgentStatuses(request: DescribeMonitoringAgentStatusesRequest): Promise<DescribeMonitoringAgentStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentStatusesWithOptions(request, runtime);
  }

  async describeMonitoringConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeMonitoringConfigResponse>(await this.doRPCRequest("DescribeMonitoringConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitoringConfigResponse({}));
  }

  async describeMonitoringConfig(): Promise<DescribeMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringConfigWithOptions(runtime);
  }

  async describeMonitorResourceQuotaAttributeWithOptions(request: DescribeMonitorResourceQuotaAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorResourceQuotaAttributeResponse>(await this.doRPCRequest("DescribeMonitorResourceQuotaAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorResourceQuotaAttributeResponse({}));
  }

  async describeMonitorResourceQuotaAttribute(request: DescribeMonitorResourceQuotaAttributeRequest): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorResourceQuotaAttributeWithOptions(request, runtime);
  }

  async describeProductResourceTagKeyListWithOptions(request: DescribeProductResourceTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductResourceTagKeyListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProductResourceTagKeyListResponse>(await this.doRPCRequest("DescribeProductResourceTagKeyList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProductResourceTagKeyListResponse({}));
  }

  async describeProductResourceTagKeyList(request: DescribeProductResourceTagKeyListRequest): Promise<DescribeProductResourceTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductResourceTagKeyListWithOptions(request, runtime);
  }

  async describeProductsOfActiveMetricRuleWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeProductsOfActiveMetricRuleResponse>(await this.doRPCRequest("DescribeProductsOfActiveMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProductsOfActiveMetricRuleResponse({}));
  }

  async describeProductsOfActiveMetricRule(): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductsOfActiveMetricRuleWithOptions(runtime);
  }

  async describeProjectMetaWithOptions(request: DescribeProjectMetaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectMetaResponse>(await this.doRPCRequest("DescribeProjectMeta", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectMetaResponse({}));
  }

  async describeProjectMeta(request: DescribeProjectMetaRequest): Promise<DescribeProjectMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectMetaWithOptions(request, runtime);
  }

  async describeSiteMonitorAttributeWithOptions(request: DescribeSiteMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSiteMonitorAttributeResponse>(await this.doRPCRequest("DescribeSiteMonitorAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSiteMonitorAttributeResponse({}));
  }

  async describeSiteMonitorAttribute(request: DescribeSiteMonitorAttributeRequest): Promise<DescribeSiteMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorAttributeWithOptions(request, runtime);
  }

  async describeSiteMonitorDataWithOptions(request: DescribeSiteMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSiteMonitorDataResponse>(await this.doRPCRequest("DescribeSiteMonitorData", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSiteMonitorDataResponse({}));
  }

  async describeSiteMonitorData(request: DescribeSiteMonitorDataRequest): Promise<DescribeSiteMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorDataWithOptions(request, runtime);
  }

  async describeSiteMonitorListWithOptions(request: DescribeSiteMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSiteMonitorListResponse>(await this.doRPCRequest("DescribeSiteMonitorList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSiteMonitorListResponse({}));
  }

  async describeSiteMonitorList(request: DescribeSiteMonitorListRequest): Promise<DescribeSiteMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorListWithOptions(request, runtime);
  }

  async describeSiteMonitorQuotaWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeSiteMonitorQuotaResponse>(await this.doRPCRequest("DescribeSiteMonitorQuota", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSiteMonitorQuotaResponse({}));
  }

  async describeSiteMonitorQuota(): Promise<DescribeSiteMonitorQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorQuotaWithOptions(runtime);
  }

  async describeSiteMonitorStatisticsWithOptions(request: DescribeSiteMonitorStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSiteMonitorStatisticsResponse>(await this.doRPCRequest("DescribeSiteMonitorStatistics", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSiteMonitorStatisticsResponse({}));
  }

  async describeSiteMonitorStatistics(request: DescribeSiteMonitorStatisticsRequest): Promise<DescribeSiteMonitorStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorStatisticsWithOptions(request, runtime);
  }

  async describeSystemEventAttributeWithOptions(request: DescribeSystemEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSystemEventAttributeResponse>(await this.doRPCRequest("DescribeSystemEventAttribute", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSystemEventAttributeResponse({}));
  }

  async describeSystemEventAttribute(request: DescribeSystemEventAttributeRequest): Promise<DescribeSystemEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventAttributeWithOptions(request, runtime);
  }

  async describeSystemEventCountWithOptions(request: DescribeSystemEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSystemEventCountResponse>(await this.doRPCRequest("DescribeSystemEventCount", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSystemEventCountResponse({}));
  }

  async describeSystemEventCount(request: DescribeSystemEventCountRequest): Promise<DescribeSystemEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventCountWithOptions(request, runtime);
  }

  async describeSystemEventHistogramWithOptions(request: DescribeSystemEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventHistogramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSystemEventHistogramResponse>(await this.doRPCRequest("DescribeSystemEventHistogram", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSystemEventHistogramResponse({}));
  }

  async describeSystemEventHistogram(request: DescribeSystemEventHistogramRequest): Promise<DescribeSystemEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventHistogramWithOptions(request, runtime);
  }

  async describeTagKeyListWithOptions(request: DescribeTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeyListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagKeyListResponse>(await this.doRPCRequest("DescribeTagKeyList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagKeyListResponse({}));
  }

  async describeTagKeyList(request: DescribeTagKeyListRequest): Promise<DescribeTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeyListWithOptions(request, runtime);
  }

  async describeTagValueListWithOptions(request: DescribeTagValueListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagValueListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagValueListResponse>(await this.doRPCRequest("DescribeTagValueList", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagValueListResponse({}));
  }

  async describeTagValueList(request: DescribeTagValueListRequest): Promise<DescribeTagValueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagValueListWithOptions(request, runtime);
  }

  async describeUnhealthyHostAvailabilityWithOptions(request: DescribeUnhealthyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUnhealthyHostAvailabilityResponse>(await this.doRPCRequest("DescribeUnhealthyHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUnhealthyHostAvailabilityResponse({}));
  }

  async describeUnhealthyHostAvailability(request: DescribeUnhealthyHostAvailabilityRequest): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnhealthyHostAvailabilityWithOptions(request, runtime);
  }

  async disableActiveMetricRuleWithOptions(request: DisableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableActiveMetricRuleResponse>(await this.doRPCRequest("DisableActiveMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableActiveMetricRuleResponse({}));
  }

  async disableActiveMetricRule(request: DisableActiveMetricRuleRequest): Promise<DisableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableActiveMetricRuleWithOptions(request, runtime);
  }

  async disableEventRulesWithOptions(request: DisableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableEventRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableEventRulesResponse>(await this.doRPCRequest("DisableEventRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableEventRulesResponse({}));
  }

  async disableEventRules(request: DisableEventRulesRequest): Promise<DisableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableEventRulesWithOptions(request, runtime);
  }

  async disableHostAvailabilityWithOptions(request: DisableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DisableHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableHostAvailabilityResponse>(await this.doRPCRequest("DisableHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableHostAvailabilityResponse({}));
  }

  async disableHostAvailability(request: DisableHostAvailabilityRequest): Promise<DisableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableHostAvailabilityWithOptions(request, runtime);
  }

  async disableMetricRulesWithOptions(request: DisableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableMetricRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableMetricRulesResponse>(await this.doRPCRequest("DisableMetricRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableMetricRulesResponse({}));
  }

  async disableMetricRules(request: DisableMetricRulesRequest): Promise<DisableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMetricRulesWithOptions(request, runtime);
  }

  async disableSiteMonitorsWithOptions(request: DisableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DisableSiteMonitorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSiteMonitorsResponse>(await this.doRPCRequest("DisableSiteMonitors", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSiteMonitorsResponse({}));
  }

  async disableSiteMonitors(request: DisableSiteMonitorsRequest): Promise<DisableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSiteMonitorsWithOptions(request, runtime);
  }

  async enableActiveMetricRuleWithOptions(request: EnableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableActiveMetricRuleResponse>(await this.doRPCRequest("EnableActiveMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableActiveMetricRuleResponse({}));
  }

  async enableActiveMetricRule(request: EnableActiveMetricRuleRequest): Promise<EnableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableActiveMetricRuleWithOptions(request, runtime);
  }

  async enableEventRulesWithOptions(request: EnableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableEventRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableEventRulesResponse>(await this.doRPCRequest("EnableEventRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableEventRulesResponse({}));
  }

  async enableEventRules(request: EnableEventRulesRequest): Promise<EnableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableEventRulesWithOptions(request, runtime);
  }

  async enableHostAvailabilityWithOptions(request: EnableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<EnableHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableHostAvailabilityResponse>(await this.doRPCRequest("EnableHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableHostAvailabilityResponse({}));
  }

  async enableHostAvailability(request: EnableHostAvailabilityRequest): Promise<EnableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHostAvailabilityWithOptions(request, runtime);
  }

  async enableMetricRulesWithOptions(request: EnableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableMetricRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableMetricRulesResponse>(await this.doRPCRequest("EnableMetricRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableMetricRulesResponse({}));
  }

  async enableMetricRules(request: EnableMetricRulesRequest): Promise<EnableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMetricRulesWithOptions(request, runtime);
  }

  async enableSiteMonitorsWithOptions(request: EnableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<EnableSiteMonitorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSiteMonitorsResponse>(await this.doRPCRequest("EnableSiteMonitors", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSiteMonitorsResponse({}));
  }

  async enableSiteMonitors(request: EnableSiteMonitorsRequest): Promise<EnableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSiteMonitorsWithOptions(request, runtime);
  }

  async installMonitoringAgentWithOptions(request: InstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<InstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallMonitoringAgentResponse>(await this.doRPCRequest("InstallMonitoringAgent", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new InstallMonitoringAgentResponse({}));
  }

  async installMonitoringAgent(request: InstallMonitoringAgentRequest): Promise<InstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installMonitoringAgentWithOptions(request, runtime);
  }

  async modifyGroupMonitoringAgentProcessWithOptions(request: ModifyGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGroupMonitoringAgentProcessResponse>(await this.doRPCRequest("ModifyGroupMonitoringAgentProcess", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGroupMonitoringAgentProcessResponse({}));
  }

  async modifyGroupMonitoringAgentProcess(request: ModifyGroupMonitoringAgentProcessRequest): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async modifyHostAvailabilityWithOptions(request: ModifyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostAvailabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostAvailabilityResponse>(await this.doRPCRequest("ModifyHostAvailability", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostAvailabilityResponse({}));
  }

  async modifyHostAvailability(request: ModifyHostAvailabilityRequest): Promise<ModifyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostAvailabilityWithOptions(request, runtime);
  }

  async modifyHostInfoWithOptions(request: ModifyHostInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostInfoResponse>(await this.doRPCRequest("ModifyHostInfo", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostInfoResponse({}));
  }

  async modifyHostInfo(request: ModifyHostInfoRequest): Promise<ModifyHostInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostInfoWithOptions(request, runtime);
  }

  async modifyMetricRuleTemplateWithOptions(request: ModifyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMetricRuleTemplateResponse>(await this.doRPCRequest("ModifyMetricRuleTemplate", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMetricRuleTemplateResponse({}));
  }

  async modifyMetricRuleTemplate(request: ModifyMetricRuleTemplateRequest): Promise<ModifyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMetricRuleTemplateWithOptions(request, runtime);
  }

  async modifyMonitorGroupWithOptions(request: ModifyMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMonitorGroupResponse>(await this.doRPCRequest("ModifyMonitorGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMonitorGroupResponse({}));
  }

  async modifyMonitorGroup(request: ModifyMonitorGroupRequest): Promise<ModifyMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupWithOptions(request, runtime);
  }

  async modifyMonitorGroupInstancesWithOptions(request: ModifyMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMonitorGroupInstancesResponse>(await this.doRPCRequest("ModifyMonitorGroupInstances", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMonitorGroupInstancesResponse({}));
  }

  async modifyMonitorGroupInstances(request: ModifyMonitorGroupInstancesRequest): Promise<ModifyMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupInstancesWithOptions(request, runtime);
  }

  async modifySiteMonitorWithOptions(request: ModifySiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifySiteMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySiteMonitorResponse>(await this.doRPCRequest("ModifySiteMonitor", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySiteMonitorResponse({}));
  }

  async modifySiteMonitor(request: ModifySiteMonitorRequest): Promise<ModifySiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySiteMonitorWithOptions(request, runtime);
  }

  async openCmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenCmsServiceResponse>(await this.doRPCRequest("OpenCmsService", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new OpenCmsServiceResponse({}));
  }

  async openCmsService(): Promise<OpenCmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCmsServiceWithOptions(runtime);
  }

  async putContactWithOptions(request: PutContactRequest, runtime: $Util.RuntimeOptions): Promise<PutContactResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutContactResponse>(await this.doRPCRequest("PutContact", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutContactResponse({}));
  }

  async putContact(request: PutContactRequest): Promise<PutContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactWithOptions(request, runtime);
  }

  async putContactGroupWithOptions(request: PutContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<PutContactGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutContactGroupResponse>(await this.doRPCRequest("PutContactGroup", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutContactGroupResponse({}));
  }

  async putContactGroup(request: PutContactGroupRequest): Promise<PutContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactGroupWithOptions(request, runtime);
  }

  async putCustomEventWithOptions(request: PutCustomEventRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutCustomEventResponse>(await this.doRPCRequest("PutCustomEvent", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutCustomEventResponse({}));
  }

  async putCustomEvent(request: PutCustomEventRequest): Promise<PutCustomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventWithOptions(request, runtime);
  }

  async putCustomEventRuleWithOptions(request: PutCustomEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutCustomEventRuleResponse>(await this.doRPCRequest("PutCustomEventRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutCustomEventRuleResponse({}));
  }

  async putCustomEventRule(request: PutCustomEventRuleRequest): Promise<PutCustomEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventRuleWithOptions(request, runtime);
  }

  async putCustomMetricWithOptions(request: PutCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutCustomMetricResponse>(await this.doRPCRequest("PutCustomMetric", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutCustomMetricResponse({}));
  }

  async putCustomMetric(request: PutCustomMetricRequest): Promise<PutCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricWithOptions(request, runtime);
  }

  async putCustomMetricRuleWithOptions(request: PutCustomMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutCustomMetricRuleResponse>(await this.doRPCRequest("PutCustomMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutCustomMetricRuleResponse({}));
  }

  async putCustomMetricRule(request: PutCustomMetricRuleRequest): Promise<PutCustomMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricRuleWithOptions(request, runtime);
  }

  async putEventRuleWithOptions(request: PutEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutEventRuleResponse>(await this.doRPCRequest("PutEventRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutEventRuleResponse({}));
  }

  async putEventRule(request: PutEventRuleRequest): Promise<PutEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleWithOptions(request, runtime);
  }

  async putEventRuleTargetsWithOptions(request: PutEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutEventRuleTargetsResponse>(await this.doRPCRequest("PutEventRuleTargets", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutEventRuleTargetsResponse({}));
  }

  async putEventRuleTargets(request: PutEventRuleTargetsRequest): Promise<PutEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleTargetsWithOptions(request, runtime);
  }

  async putExporterOutputWithOptions(request: PutExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterOutputResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutExporterOutputResponse>(await this.doRPCRequest("PutExporterOutput", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutExporterOutputResponse({}));
  }

  async putExporterOutput(request: PutExporterOutputRequest): Promise<PutExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterOutputWithOptions(request, runtime);
  }

  async putExporterRuleWithOptions(request: PutExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutExporterRuleResponse>(await this.doRPCRequest("PutExporterRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutExporterRuleResponse({}));
  }

  async putExporterRule(request: PutExporterRuleRequest): Promise<PutExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterRuleWithOptions(request, runtime);
  }

  async putGroupMetricRuleWithOptions(request: PutGroupMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutGroupMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutGroupMetricRuleResponse>(await this.doRPCRequest("PutGroupMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutGroupMetricRuleResponse({}));
  }

  async putGroupMetricRule(request: PutGroupMetricRuleRequest): Promise<PutGroupMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putGroupMetricRuleWithOptions(request, runtime);
  }

  async putLogMonitorWithOptions(request: PutLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<PutLogMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutLogMonitorResponse>(await this.doRPCRequest("PutLogMonitor", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutLogMonitorResponse({}));
  }

  async putLogMonitor(request: PutLogMonitorRequest): Promise<PutLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putLogMonitorWithOptions(request, runtime);
  }

  async putMetricRuleTargetsWithOptions(request: PutMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutMetricRuleTargetsResponse>(await this.doRPCRequest("PutMetricRuleTargets", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutMetricRuleTargetsResponse({}));
  }

  async putMetricRuleTargets(request: PutMetricRuleTargetsRequest): Promise<PutMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMetricRuleTargetsWithOptions(request, runtime);
  }

  async putMonitorGroupDynamicRuleWithOptions(request: PutMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutMonitorGroupDynamicRuleResponse>(await this.doRPCRequest("PutMonitorGroupDynamicRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutMonitorGroupDynamicRuleResponse({}));
  }

  async putMonitorGroupDynamicRule(request: PutMonitorGroupDynamicRuleRequest): Promise<PutMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async putMonitoringConfigWithOptions(request: PutMonitoringConfigRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitoringConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutMonitoringConfigResponse>(await this.doRPCRequest("PutMonitoringConfig", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutMonitoringConfigResponse({}));
  }

  async putMonitoringConfig(request: PutMonitoringConfigRequest): Promise<PutMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitoringConfigWithOptions(request, runtime);
  }

  async putResourceMetricRuleWithOptions(request: PutResourceMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutResourceMetricRuleResponse>(await this.doRPCRequest("PutResourceMetricRule", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutResourceMetricRuleResponse({}));
  }

  async putResourceMetricRule(request: PutResourceMetricRuleRequest): Promise<PutResourceMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRuleWithOptions(request, runtime);
  }

  async putResourceMetricRulesWithOptions(request: PutResourceMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutResourceMetricRulesResponse>(await this.doRPCRequest("PutResourceMetricRules", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new PutResourceMetricRulesResponse({}));
  }

  async putResourceMetricRules(request: PutResourceMetricRulesRequest): Promise<PutResourceMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRulesWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTagsResponse>(await this.doRPCRequest("RemoveTags", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async sendDryRunSystemEventWithOptions(request: SendDryRunSystemEventRequest, runtime: $Util.RuntimeOptions): Promise<SendDryRunSystemEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendDryRunSystemEventResponse>(await this.doRPCRequest("SendDryRunSystemEvent", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendDryRunSystemEventResponse({}));
  }

  async sendDryRunSystemEvent(request: SendDryRunSystemEventRequest): Promise<SendDryRunSystemEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendDryRunSystemEventWithOptions(request, runtime);
  }

  async uninstallMonitoringAgentWithOptions(request: UninstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<UninstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UninstallMonitoringAgentResponse>(await this.doRPCRequest("UninstallMonitoringAgent", "2019-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UninstallMonitoringAgentResponse({}));
  }

  async uninstallMonitoringAgent(request: UninstallMonitoringAgentRequest): Promise<UninstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallMonitoringAgentWithOptions(request, runtime);
  }

}
