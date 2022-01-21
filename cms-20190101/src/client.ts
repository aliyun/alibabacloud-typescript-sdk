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
  groupIds?: string[];
  regionId?: string;
  tag?: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  applyMode?: string;
  enableEndTime?: number;
  enableStartTime?: number;
  groupId?: number;
  notifyLevel?: number;
  silenceTime?: number;
  templateIds?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      applyMode: 'ApplyMode',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      groupId: 'GroupId',
      notifyLevel: 'NotifyLevel',
      silenceTime: 'SilenceTime',
      templateIds: 'TemplateIds',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyMode: 'string',
      enableEndTime: 'number',
      enableStartTime: 'number',
      groupId: 'number',
      notifyLevel: 'number',
      silenceTime: 'number',
      templateIds: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: ApplyMetricRuleTemplateResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: ApplyMetricRuleTemplateResponseBodyResource,
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
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  period?: number;
  periodUnit?: string;
  phoneCount?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderResponseBody extends $tea.Model {
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
  apiCount?: string;
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  customTimeSeries?: string;
  eventStoreNum?: string;
  eventStoreTime?: string;
  logMonitorStream?: string;
  payType?: string;
  period?: number;
  periodUnit?: string;
  phoneCount?: string;
  siteEcsNum?: string;
  siteOperatorNum?: string;
  siteTaskNum?: string;
  smsCount?: string;
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      customTimeSeries: 'CustomTimeSeries',
      eventStoreNum: 'EventStoreNum',
      eventStoreTime: 'EventStoreTime',
      logMonitorStream: 'LogMonitorStream',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      siteEcsNum: 'SiteEcsNum',
      siteOperatorNum: 'SiteOperatorNum',
      siteTaskNum: 'SiteTaskNum',
      smsCount: 'SmsCount',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'string',
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      customTimeSeries: 'string',
      eventStoreNum: 'string',
      eventStoreTime: 'string',
      logMonitorStream: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'string',
      siteEcsNum: 'string',
      siteOperatorNum: 'string',
      siteTaskNum: 'string',
      smsCount: 'string',
      suggestType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderResponseBody extends $tea.Model {
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
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  period?: number;
  periodUnit?: string;
  smsCount?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      smsCount: 'SmsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      period: 'number',
      periodUnit: 'string',
      smsCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderResponseBody extends $tea.Model {
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
  contactGroupList?: string[];
  enableInstallAgent?: boolean;
  enableSubscribeEvent?: boolean;
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  matchExpressFilterRelation?: string;
  regionId?: string;
  tagKey?: string;
  tagRegionId?: string;
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      matchExpress: { 'type': 'array', 'itemType': CreateDynamicTagGroupRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupResponseBody extends $tea.Model {
  code?: string;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMetricRules: 'GroupMetricRules',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupMetricRules: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRules },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resources?: CreateGroupMetricRulesResponseBodyResources;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: CreateGroupMetricRulesResponseBodyResources,
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
  alertConfig?: CreateGroupMonitoringAgentProcessRequestAlertConfig[];
  groupId?: string;
  matchExpress?: CreateGroupMonitoringAgentProcessRequestMatchExpress[];
  matchExpressFilterRelation?: string;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      matchExpress: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  alertConfig?: CreateHostAvailabilityRequestAlertConfig;
  taskOption?: CreateHostAvailabilityRequestTaskOption;
  alertConfigEscalationList?: CreateHostAvailabilityRequestAlertConfigEscalationList[];
  groupId?: number;
  instanceList?: string[];
  regionId?: string;
  taskName?: string;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      groupId: 'GroupId',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: CreateHostAvailabilityRequestAlertConfig,
      taskOption: CreateHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigEscalationList },
      groupId: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
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

export class CreateInstantSiteMonitorRequest extends $tea.Model {
  address?: string;
  ispCities?: string;
  optionsJson?: string;
  randomIspCity?: number;
  regionId?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      randomIspCity: 'RandomIspCity',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      randomIspCity: 'number',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  createResultList?: CreateInstantSiteMonitorResponseBodyCreateResultList[];
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: { 'type': 'array', 'itemType': CreateInstantSiteMonitorResponseBodyCreateResultList },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstantSiteMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstantSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesRequest extends $tea.Model {
  overwrite?: string;
  resources?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'string',
      resources: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  alertTemplates?: CreateMetricRuleTemplateRequestAlertTemplates[];
  description?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': CreateMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
      message: 'string',
      requestId: 'string',
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
  instanceId?: string;
  processName?: string;
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
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
  contactGroups?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  groupId?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      groupId: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  contactGroupList?: string[];
  enableInstallAgent?: boolean;
  enableSubscribeEvent?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': CreateMonitorGroupInstancesRequestInstances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  endTime?: number;
  groupId?: string;
  policyType?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      policyType: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'number',
      success: 'string',
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
  instanceId?: string;
  processName?: string;
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
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
  alertIds?: string;
  interval?: string;
  ispCities?: string;
  optionsJson?: string;
  regionId?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      interval: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  createResultList?: CreateSiteMonitorResponseBodyCreateResultList;
  data?: CreateSiteMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: CreateSiteMonitorResponseBodyCreateResultList,
      data: CreateSiteMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  md5?: string;
  metricName?: string;
  regionId?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      regionId: 'RegionId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      regionId: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricResponseBody extends $tea.Model {
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteEventRuleTargetsRequest extends $tea.Model {
  ids?: string[];
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteExporterOutputRequest extends $tea.Model {
  destName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  resources?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteMetricRuleTargetsRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string;
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failIds?: DeleteMetricRuleTargetsResponseBodyFailIds;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIds: 'FailIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failIds: DeleteMetricRuleTargetsResponseBodyFailIds,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DeleteMetricRuleTemplateResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DeleteMetricRuleTemplateResponseBodyResource,
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

export class DeleteMetricRulesRequest extends $tea.Model {
  id?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteMonitorGroupRequest extends $tea.Model {
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  group?: DeleteMonitorGroupResponseBodyGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      group: 'Group',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      group: DeleteMonitorGroupResponseBodyGroup,
      message: 'string',
      requestId: 'string',
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
  category?: string;
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  category?: string;
  groupId?: number;
  instanceIdList?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIdList: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  groupId?: string;
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      policyType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'number',
      success: 'string',
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
  processId?: string;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processId: 'string',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  isDeleteAlarms?: boolean;
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleteAlarms: 'IsDeleteAlarms',
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleteAlarms: 'boolean',
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: DeleteSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  alertList?: DescribeActiveMetricRuleListResponseBodyAlertList;
  code?: string;
  datapoints?: DescribeActiveMetricRuleListResponseBodyDatapoints;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertList: 'AlertList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertList: DescribeActiveMetricRuleListResponseBodyAlertList,
      code: 'string',
      datapoints: DescribeActiveMetricRuleListResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
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
  ascending?: boolean;
  endTime?: string;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  startTime?: string;
  state?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ascending: 'Ascending',
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascending: 'boolean',
      endTime: 'string',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      state: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBody extends $tea.Model {
  alarmHistoryList?: DescribeAlertHistoryListResponseBodyAlarmHistoryList;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: DescribeAlertHistoryListResponseBodyAlarmHistoryList,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
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
  contactGroup?: string;
  endTime?: number;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBody extends $tea.Model {
  alertLogCount?: DescribeAlertLogCountResponseBodyAlertLogCount[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogCount: 'AlertLogCount',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogCount: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCount },
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  contactGroup?: string;
  endTime?: number;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBody extends $tea.Model {
  alertLogHistogramList?: DescribeAlertLogHistogramResponseBodyAlertLogHistogramList[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogHistogramList: 'AlertLogHistogramList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogHistogramList: { 'type': 'array', 'itemType': DescribeAlertLogHistogramResponseBodyAlertLogHistogramList },
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  contactGroup?: string;
  endTime?: number;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBody extends $tea.Model {
  alertLogList?: DescribeAlertLogListResponseBodyAlertLogList[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogList: 'AlertLogList',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogList },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class DescribeAlertingMetricRuleResourcesRequest extends $tea.Model {
  dimensions?: string;
  groupId?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      groupId: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resources?: DescribeAlertingMetricRuleResourcesResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: DescribeAlertingMetricRuleResourcesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlertingMetricRuleResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlertingMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBody extends $tea.Model {
  code?: string;
  contactGroupList?: DescribeContactGroupListResponseBodyContactGroupList;
  contactGroups?: DescribeContactGroupListResponseBodyContactGroups;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactGroupList: 'ContactGroupList',
      contactGroups: 'ContactGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactGroupList: DescribeContactGroupListResponseBodyContactGroupList,
      contactGroups: DescribeContactGroupListResponseBodyContactGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  chanelType?: string;
  chanelValue?: string;
  contactName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chanelType: 'ChanelType',
      chanelValue: 'ChanelValue',
      contactName: 'ContactName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chanelType: 'string',
      chanelValue: 'string',
      contactName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBody extends $tea.Model {
  code?: string;
  contacts?: DescribeContactListResponseBodyContacts;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBody extends $tea.Model {
  code?: string;
  contacts?: DescribeContactListByContactGroupResponseBodyContacts;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListByContactGroupResponseBodyContacts,
      message: 'string',
      requestId: 'string',
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
  endTime?: string;
  eventId?: string;
  groupId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBody extends $tea.Model {
  code?: string;
  customEvents?: DescribeCustomEventAttributeResponseBodyCustomEvents;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEvents: 'CustomEvents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEvents: DescribeCustomEventAttributeResponseBodyCustomEvents,
      message: 'string',
      requestId: 'string',
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
  endTime?: string;
  eventId?: string;
  groupId?: string;
  name?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBody extends $tea.Model {
  code?: string;
  customEventCounts?: DescribeCustomEventCountResponseBodyCustomEventCounts;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEventCounts: 'CustomEventCounts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEventCounts: DescribeCustomEventCountResponseBodyCustomEventCounts,
      message: 'string',
      requestId: 'string',
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
  endTime?: string;
  eventId?: string;
  groupId?: string;
  level?: string;
  name?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBody extends $tea.Model {
  code?: string;
  eventHistograms?: DescribeCustomEventHistogramResponseBodyEventHistograms;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventHistograms: 'EventHistograms',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventHistograms: DescribeCustomEventHistogramResponseBodyEventHistograms,
      message: 'string',
      requestId: 'string',
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
  dimension?: string;
  groupId?: string;
  md5?: string;
  metricName?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListResponseBody extends $tea.Model {
  code?: string;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  pageNumber?: string;
  pageSize?: string;
  tagKey?: string;
  tagRegionId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: boolean;
  tagGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tagGroupList: 'TagGroupList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupList,
      total: 'number',
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
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: DescribeEventRuleAttributeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeEventRuleAttributeResponseBodyResult,
      success: 'boolean',
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
  groupId?: string;
  namePrefix?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namePrefix: 'NamePrefix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namePrefix: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBody extends $tea.Model {
  code?: string;
  eventRules?: DescribeEventRuleListResponseBodyEventRules;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventRules: 'EventRules',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventRules: DescribeEventRuleListResponseBodyEventRules,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBody extends $tea.Model {
  code?: string;
  contactParameters?: DescribeEventRuleTargetListResponseBodyContactParameters;
  fcParameters?: DescribeEventRuleTargetListResponseBodyFcParameters;
  message?: string;
  mnsParameters?: DescribeEventRuleTargetListResponseBodyMnsParameters;
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParameters;
  requestId?: string;
  slsParameters?: DescribeEventRuleTargetListResponseBodySlsParameters;
  webhookParameters?: DescribeEventRuleTargetListResponseBodyWebhookParameters;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      message: 'Message',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      requestId: 'RequestId',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactParameters: DescribeEventRuleTargetListResponseBodyContactParameters,
      fcParameters: DescribeEventRuleTargetListResponseBodyFcParameters,
      message: 'string',
      mnsParameters: DescribeEventRuleTargetListResponseBodyMnsParameters,
      openApiParameters: DescribeEventRuleTargetListResponseBodyOpenApiParameters,
      requestId: 'string',
      slsParameters: DescribeEventRuleTargetListResponseBodySlsParameters,
      webhookParameters: DescribeEventRuleTargetListResponseBodyWebhookParameters,
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: DescribeExporterOutputListResponseBodyDatapoints;
  message?: string;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterOutputListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: DescribeExporterRuleListResponseBodyDatapoints;
  message?: string;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterRuleListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  pageNumber?: number;
  pageSize?: number;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  processes?: DescribeGroupMonitoringAgentProcessResponseBodyProcesses;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processes: 'Processes',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      processes: DescribeGroupMonitoringAgentProcessResponseBodyProcesses,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
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
  groupId?: number;
  id?: number;
  ids?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      ids: 'Ids',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      id: 'number',
      ids: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskList?: DescribeHostAvailabilityListResponseBodyTaskList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskList: DescribeHostAvailabilityListResponseBodyTaskList,
      total: 'number',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBody extends $tea.Model {
  code?: string;
  logMonitor?: DescribeLogMonitorAttributeResponseBodyLogMonitor;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitor: 'LogMonitor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitor: DescribeLogMonitorAttributeResponseBodyLogMonitor,
      message: 'string',
      requestId: 'string',
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
  groupId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBody extends $tea.Model {
  code?: string;
  logMonitorList?: DescribeLogMonitorListResponseBodyLogMonitorList[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitorList: 'LogMonitorList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitorList: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
      requestId: 'string',
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
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
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
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
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
  labels?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resources?: DescribeMetricMetaListResponseBodyResources;
  success?: boolean;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resources: DescribeMetricMetaListResponseBodyResources,
      success: 'boolean',
      totalCount: 'string',
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
  metricName?: string;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  metricRuleCount?: DescribeMetricRuleCountResponseBodyMetricRuleCount;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      metricRuleCount: 'MetricRuleCount',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRuleCount: DescribeMetricRuleCountResponseBodyMetricRuleCount,
      requestId: 'string',
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
  alertState?: string;
  dimensions?: string;
  enableState?: boolean;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleIds?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleIds: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBody extends $tea.Model {
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
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
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  targets?: DescribeMetricRuleTargetsResponseBodyTargets;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      targets: DescribeMetricRuleTargetsResponseBodyTargets,
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
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DescribeMetricRuleTemplateAttributeResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMetricRuleTemplateAttributeResponseBodyResource,
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
  history?: boolean;
  keyword?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      history: 'History',
      keyword: 'Keyword',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: 'boolean',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  templates?: DescribeMetricRuleTemplateListResponseBodyTemplates;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templates: 'Templates',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templates: DescribeMetricRuleTemplateListResponseBodyTemplates,
      total: 'number',
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
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  orderDesc?: string;
  orderby?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      orderDesc: 'OrderDesc',
      orderby: 'Orderby',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      orderDesc: 'string',
      orderby: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  monitorGroupCategories?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      monitorGroupCategories: 'MonitorGroupCategories',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      monitorGroupCategories: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories,
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMonitorGroupDynamicRulesResponseBodyResource,
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
  category?: string;
  groupId?: number;
  instanceIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  total?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      total: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupInstanceAttributeResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstanceAttributeResponseBodyResources,
      success: 'boolean',
      total: 'number',
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
  category?: string;
  groupId?: number;
  instanceIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupInstancesResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstancesResponseBodyResources,
      success: 'boolean',
      total: 'number',
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
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  notifyPolicyList?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList;
  requestId?: string;
  success?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      notifyPolicyList: 'NotifyPolicyList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      notifyPolicyList: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList,
      requestId: 'string',
      success: 'string',
      total: 'number',
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
  dynamicTagRuleId?: string;
  groupFounderTagKey?: string;
  groupFounderTagValue?: string;
  groupId?: string;
  groupName?: string;
  includeTemplateHistory?: boolean;
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  selectContactGroups?: boolean;
  tag?: DescribeMonitorGroupsRequestTag[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      includeTemplateHistory: 'IncludeTemplateHistory',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      selectContactGroups: 'SelectContactGroups',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'string',
      groupName: 'string',
      includeTemplateHistory: 'boolean',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      selectContactGroups: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsRequestTag },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupsResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupsResponseBodyResources,
      success: 'boolean',
      total: 'number',
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

export class DescribeMonitorResourceQuotaAttributeRequest extends $tea.Model {
  regionId?: string;
  showUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showUsed: 'ShowUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showUsed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resourceQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceQuota: 'ResourceQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resourceQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota,
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

export class DescribeMonitoringAgentAccessKeyRequest extends $tea.Model {
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

export class DescribeMonitoringAgentAccessKeyResponseBody extends $tea.Model {
  accessKey?: string;
  code?: number;
  message?: string;
  requestId?: string;
  secretKey?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretKey: 'SecretKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      secretKey: 'string',
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

export class DescribeMonitoringAgentConfigRequest extends $tea.Model {
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

export class DescribeMonitoringAgentConfigResponseBody extends $tea.Model {
  autoInstall?: boolean;
  code?: string;
  enableActiveAlert?: string;
  enableInstallAgentNewECS?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      code: 'Code',
      enableActiveAlert: 'EnableActiveAlert',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      code: 'string',
      enableActiveAlert: 'string',
      enableInstallAgentNewECS: 'boolean',
      message: 'string',
      requestId: 'string',
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
  aliyunHost?: boolean;
  hostName?: string;
  instanceIds?: string;
  instanceRegionId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  serialNumbers?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunHost: 'AliyunHost',
      hostName: 'HostName',
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      serialNumbers: 'SerialNumbers',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunHost: 'boolean',
      hostName: 'string',
      instanceIds: 'string',
      instanceRegionId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      serialNumbers: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBody extends $tea.Model {
  code?: string;
  hosts?: DescribeMonitoringAgentHostsResponseBodyHosts;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  pageTotal?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hosts: 'Hosts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hosts: DescribeMonitoringAgentHostsResponseBodyHosts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nodeProcesses?: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeProcesses: 'NodeProcesses',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeProcesses: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses,
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nodeStatusList?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeStatusList: 'NodeStatusList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeStatusList: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList,
      requestId: 'string',
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

export class DescribeMonitoringConfigRequest extends $tea.Model {
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

export class DescribeMonitoringConfigResponseBody extends $tea.Model {
  autoInstall?: boolean;
  code?: string;
  enableInstallAgentNewECS?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      code: 'Code',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      code: 'string',
      enableInstallAgentNewECS: 'boolean',
      message: 'string',
      requestId: 'string',
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

export class DescribeProductResourceTagKeyListRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagKeys?: DescribeProductResourceTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
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

export class DescribeProductsOfActiveMetricRuleRequest extends $tea.Model {
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

export class DescribeProductsOfActiveMetricRuleResponseBody extends $tea.Model {
  allProductInitMetricRuleList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList;
  code?: number;
  datapoints?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRuleList: 'AllProductInitMetricRuleList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRuleList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList,
      code: 'number',
      datapoints: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  resources?: DescribeProjectMetaResponseBodyResources;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      resources: DescribeProjectMetaResponseBodyResources,
      success: 'boolean',
      total: 'string',
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

export class DescribeSiteInstantMonitorLogRequest extends $tea.Model {
  endTime?: string;
  filter?: string;
  length?: number;
  metricName?: string;
  nextToken?: string;
  regionId?: string;
  startTime?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filter: 'Filter',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      filter: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteInstantMonitorLogResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteInstantMonitorLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteInstantMonitorLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteInstantMonitorLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeRequest extends $tea.Model {
  includeAlert?: boolean;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      includeAlert: 'IncludeAlert',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeAlert: 'boolean',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  metricRules?: DescribeSiteMonitorAttributeResponseBodyMetricRules;
  requestId?: string;
  siteMonitors?: DescribeSiteMonitorAttributeResponseBodySiteMonitors;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      metricRules: 'MetricRules',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRules: DescribeSiteMonitorAttributeResponseBodyMetricRules,
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorAttributeResponseBodySiteMonitors,
      success: 'boolean',
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
  endTime?: string;
  length?: number;
  metricName?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
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
  keyword?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  siteMonitors?: DescribeSiteMonitorListResponseBodySiteMonitors;
  success?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorListResponseBodySiteMonitors,
      success: 'string',
      totalCount: 'number',
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

export class DescribeSiteMonitorLogRequest extends $tea.Model {
  city?: string;
  endTime?: string;
  filter?: string;
  isp?: string;
  length?: number;
  metricName?: string;
  nextToken?: string;
  regionId?: string;
  startTime?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      endTime: 'EndTime',
      filter: 'Filter',
      isp: 'Isp',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      endTime: 'string',
      filter: 'string',
      isp: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorLogResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSiteMonitorLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSiteMonitorLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaRequest extends $tea.Model {
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

export class DescribeSiteMonitorQuotaResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSiteMonitorQuotaResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: DescribeSiteMonitorQuotaResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  metricName?: string;
  regionId?: string;
  startTime?: string;
  taskId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
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
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEvents?: DescribeSystemEventAttributeResponseBodySystemEvents;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEvents: 'SystemEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEvents: DescribeSystemEventAttributeResponseBodySystemEvents,
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
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEventCounts?: DescribeSystemEventCountResponseBodySystemEventCounts;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventCounts: 'SystemEventCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventCounts: DescribeSystemEventCountResponseBodySystemEventCounts,
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
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEventHistograms?: DescribeSystemEventHistogramResponseBodySystemEventHistograms;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventHistograms: 'SystemEventHistograms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventHistograms: DescribeSystemEventHistogramResponseBodySystemEventHistograms,
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagKeys?: DescribeTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagValues?: DescribeTagValueListResponseBodyTagValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  unhealthyList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      unhealthyList: 'UnhealthyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: DisableSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: DisableSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: EnableSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: EnableSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  installCommand?: string;
  instanceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      installCommand: 'InstallCommand',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      installCommand: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  alertConfig?: ModifyGroupMonitoringAgentProcessRequestAlertConfig[];
  groupId?: string;
  id?: string;
  matchExpressFilterRelation?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      id: 'string',
      matchExpressFilterRelation: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  alertConfig?: ModifyHostAvailabilityRequestAlertConfig;
  taskOption?: ModifyHostAvailabilityRequestTaskOption;
  alertConfigEscalationList?: ModifyHostAvailabilityRequestAlertConfigEscalationList[];
  groupId?: number;
  id?: number;
  instanceList?: string[];
  regionId?: string;
  taskName?: string;
  taskScope?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      groupId: 'GroupId',
      id: 'Id',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: ModifyHostAvailabilityRequestAlertConfig,
      taskOption: ModifyHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigEscalationList },
      groupId: 'number',
      id: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  hostName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  alertTemplates?: ModifyMetricRuleTemplateRequestAlertTemplates[];
  description?: string;
  name?: string;
  regionId?: string;
  restVersion?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ModifyMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
      restVersion: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  contactGroups?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instances: { 'type': 'array', 'itemType': ModifyMonitorGroupInstancesRequestInstances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  alertIds?: string;
  interval?: string;
  intervalUnit?: string;
  ispCities?: string;
  optionsJson?: string;
  regionId?: string;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      interval: 'string',
      intervalUnit: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: ModifySiteMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: ModifySiteMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  contactNames?: string[];
  describe?: string;
  enableSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactNames: 'ContactNames',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactNames: { 'type': 'array', 'itemType': 'string' },
      describe: 'string',
      enableSubscribed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': PutCustomEventRequestEventInfo },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventResponseBody extends $tea.Model {
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
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  eventName?: string;
  groupId?: string;
  level?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      eventName: 'EventName',
      groupId: 'GroupId',
      level: 'Level',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      eventName: 'string',
      groupId: 'string',
      level: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutCustomMetricRequestMetricList },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricResponseBody extends $tea.Model {
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
  comparisonOperator?: string;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  evaluationCount?: number;
  groupId?: string;
  level?: string;
  metricName?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  statistics?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      level: 'Level',
      metricName: 'MetricName',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      evaluationCount: 'number',
      groupId: 'string',
      level: 'string',
      metricName: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  description?: string;
  eventPattern?: PutEventRuleRequestEventPattern[];
  eventType?: string;
  groupId?: string;
  regionId?: string;
  ruleName?: string;
  silenceTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: { 'type': 'array', 'itemType': PutEventRuleRequestEventPattern },
      eventType: 'string',
      groupId: 'string',
      regionId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleResponseBody extends $tea.Model {
  code?: string;
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
      code: 'string',
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
  contactParameters?: PutEventRuleTargetsRequestContactParameters[];
  fcParameters?: PutEventRuleTargetsRequestFcParameters[];
  mnsParameters?: PutEventRuleTargetsRequestMnsParameters[];
  openApiParameters?: PutEventRuleTargetsRequestOpenApiParameters[];
  regionId?: string;
  ruleName?: string;
  slsParameters?: PutEventRuleTargetsRequestSlsParameters[];
  webhookParameters?: PutEventRuleTargetsRequestWebhookParameters[];
  static names(): { [key: string]: string } {
    return {
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestContactParameters },
      fcParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestFcParameters },
      mnsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestMnsParameters },
      openApiParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestOpenApiParameters },
      regionId: 'string',
      ruleName: 'string',
      slsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestSlsParameters },
      webhookParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestWebhookParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failedContactParameters?: PutEventRuleTargetsResponseBodyFailedContactParameters;
  failedFcParameters?: PutEventRuleTargetsResponseBodyFailedFcParameters;
  failedMnsParameters?: PutEventRuleTargetsResponseBodyFailedMnsParameters;
  failedParameterCount?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedContactParameters: 'FailedContactParameters',
      failedFcParameters: 'FailedFcParameters',
      failedMnsParameters: 'FailedMnsParameters',
      failedParameterCount: 'FailedParameterCount',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedContactParameters: PutEventRuleTargetsResponseBodyFailedContactParameters,
      failedFcParameters: PutEventRuleTargetsResponseBodyFailedFcParameters,
      failedMnsParameters: PutEventRuleTargetsResponseBodyFailedMnsParameters,
      failedParameterCount: 'string',
      message: 'string',
      requestId: 'string',
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
  configJson?: string;
  desc?: string;
  destName?: string;
  destType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      desc: 'Desc',
      destName: 'DestName',
      destType: 'DestType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: 'string',
      desc: 'string',
      destName: 'string',
      destType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  describe?: string;
  dstNames?: string[];
  metricName?: string;
  namespace?: string;
  regionId?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      describe: 'Describe',
      dstNames: 'DstNames',
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describe: 'string',
      dstNames: { 'type': 'array', 'itemType': 'string' },
      metricName: 'string',
      namespace: 'string',
      regionId: 'string',
      ruleName: 'string',
      targetWindows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  category?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  extraDimensionJson?: string;
  groupId?: string;
  interval?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      extraDimensionJson: 'ExtraDimensionJson',
      groupId: 'GroupId',
      interval: 'Interval',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutGroupMetricRuleRequestEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      extraDimensionJson: 'string',
      groupId: 'string',
      interval: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: PutGroupMetricRuleResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: PutGroupMetricRuleResponseBodyResult,
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

export class PutHybridMonitorMetricDataRequest extends $tea.Model {
  metricList?: PutHybridMonitorMetricDataRequestMetricList[];
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricList },
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponseBody extends $tea.Model {
  code?: string;
  errorDetail?: PutHybridMonitorMetricDataResponseBodyErrorDetail[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorDetail: 'ErrorDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorDetail: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataResponseBodyErrorDetail },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutHybridMonitorMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutHybridMonitorMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequest extends $tea.Model {
  aggregates?: PutLogMonitorRequestAggregates[];
  groupId?: string;
  groupbys?: PutLogMonitorRequestGroupbys[];
  logId?: string;
  metricExpress?: string;
  metricName?: string;
  regionId?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  tumblingwindows?: string;
  unit?: string;
  valueFilter?: PutLogMonitorRequestValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      regionId: 'RegionId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      unit: 'Unit',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': PutLogMonitorRequestAggregates },
      groupId: 'string',
      groupbys: { 'type': 'array', 'itemType': PutLogMonitorRequestGroupbys },
      logId: 'string',
      metricExpress: 'string',
      metricName: 'string',
      regionId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: 'string',
      unit: 'string',
      valueFilter: { 'type': 'array', 'itemType': PutLogMonitorRequestValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorResponseBody extends $tea.Model {
  code?: string;
  logId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logId: 'LogId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logId: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  ruleId?: string;
  targets?: PutMetricRuleTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targets: { 'type': 'array', 'itemType': PutMetricRuleTargetsRequestTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failData?: PutMetricRuleTargetsResponseBodyFailData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failData: 'FailData',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failData: PutMetricRuleTargetsResponseBodyFailData,
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupRules: 'GroupRules',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupRules: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRules },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      enableInstallAgentNewECS: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
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
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  labels?: PutResourceMetricRuleRequestLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleRequestEscalations,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  failedListResult?: PutResourceMetricRulesResponseBodyFailedListResult;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedListResult: 'FailedListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedListResult: PutResourceMetricRulesResponseBodyFailedListResult,
      message: 'string',
      requestId: 'string',
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
  groupIds?: string[];
  regionId?: string;
  tag?: RemoveTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tag?: RemoveTagsResponseBodyTag;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tag: RemoveTagsResponseBodyTag,
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
  eventContent?: string;
  eventName?: string;
  groupId?: string;
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventContent: 'EventContent',
      eventName: 'EventName',
      groupId: 'GroupId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventContent: 'string',
      eventName: 'string',
      groupId: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  ruleId?: string;
  ruleName?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
      success: 'boolean',
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
  tagValue?: string;
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagValueMatchFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalations extends $tea.Model {
  critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical;
  info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo;
  warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical,
      info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo,
      warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRules extends $tea.Model {
  escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations;
  category?: string;
  dimensions?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations,
      category: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBodyResourcesAlertResult extends $tea.Model {
  code?: number;
  message?: string;
  ruleId?: string;
  ruleName?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
      success: 'boolean',
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

export class CreateGroupMonitoringAgentProcessRequestAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestMatchExpress extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfig extends $tea.Model {
  endTime?: number;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestTaskOption extends $tea.Model {
  httpHeader?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpResponseMatchContent?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpHeader: 'HttpHeader',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeader: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpResponseMatchContent: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponseBodyCreateResultList extends $tea.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations;
  category?: string;
  metricName?: string;
  namespace?: string;
  period?: number;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequestInstances extends $tea.Model {
  category?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultListCreateResultList extends $tea.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
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

export class CreateSiteMonitorResponseBodyDataAttachAlertResultContact extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  ruleId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      ruleId: 'string',
      success: 'string',
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
  contactGroups?: DeleteMonitorGroupResponseBodyGroupContactGroups;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: DeleteMonitorGroupResponseBodyGroupContactGroups,
      groupName: 'string',
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
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
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
  alertState?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      webhook: 'string',
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
  comparisonOperator?: string;
  contactGroups?: string;
  enable?: string;
  endTime?: string;
  evaluationCount?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  startTime?: string;
  state?: string;
  statistics?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      enable: 'Enable',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      enable: 'string',
      endTime: 'string',
      evaluationCount: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      startTime: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
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

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory extends $tea.Model {
  alertTime?: number;
  contactALIIMs?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs;
  contactGroups?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups;
  contactMails?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails;
  contactSmses?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses;
  contacts?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts;
  dimensions?: string;
  evaluationCount?: number;
  expression?: string;
  groupId?: string;
  instanceName?: string;
  lastTime?: number;
  level?: string;
  metricName?: string;
  namespace?: string;
  ruleId?: string;
  ruleName?: string;
  state?: string;
  status?: number;
  value?: string;
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      contactALIIMs: 'ContactALIIMs',
      contactGroups: 'ContactGroups',
      contactMails: 'ContactMails',
      contactSmses: 'ContactSmses',
      contacts: 'Contacts',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      lastTime: 'LastTime',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      state: 'State',
      status: 'Status',
      value: 'Value',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      contactALIIMs: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs,
      contactGroups: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups,
      contactMails: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails,
      contactSmses: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses,
      contacts: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts,
      dimensions: 'string',
      evaluationCount: 'number',
      expression: 'string',
      groupId: 'string',
      instanceName: 'string',
      lastTime: 'number',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      ruleId: 'string',
      ruleName: 'string',
      state: 'string',
      status: 'number',
      value: 'string',
      webhooks: 'string',
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

export class DescribeAlertLogCountResponseBodyAlertLogCount extends $tea.Model {
  count?: number;
  logs?: DescribeAlertLogCountResponseBodyAlertLogCountLogs[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logs: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCountLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBodyAlertLogHistogramList extends $tea.Model {
  count?: number;
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
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
  level?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      level: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListExtendedInfo extends $tea.Model {
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

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList extends $tea.Model {
  code?: string;
  detail?: string;
  requestId?: string;
  success?: boolean;
  notifyTargetList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      requestId: 'RequestId',
      success: 'Success',
      notifyTargetList: 'notifyTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: 'string',
      requestId: 'string',
      success: 'boolean',
      notifyTargetList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList extends $tea.Model {
  channel?: string;
  resultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      resultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetail extends $tea.Model {
  channelResultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList[];
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelResultList: 'ChannelResultList',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList },
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendResultList extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListWebhookList extends $tea.Model {
  code?: string;
  message?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogList extends $tea.Model {
  alertTime?: string;
  blackListDetail?: string;
  blackListName?: string;
  blackListUUID?: string;
  contactALIIWWList?: string[];
  contactDingList?: string[];
  contactGroups?: string[];
  contactMailList?: string[];
  contactOnCallList?: string[];
  contactSMSList?: string[];
  dimensions?: DescribeAlertLogListResponseBodyAlertLogListDimensions[];
  dingdingWebhookList?: string[];
  escalation?: DescribeAlertLogListResponseBodyAlertLogListEscalation;
  eventName?: string;
  extendedInfo?: DescribeAlertLogListResponseBodyAlertLogListExtendedInfo[];
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  instanceName?: string;
  level?: string;
  levelChange?: string;
  message?: string;
  metricName?: string;
  namespace?: string;
  product?: string;
  ruleId?: string;
  ruleName?: string;
  sendDetail?: DescribeAlertLogListResponseBodyAlertLogListSendDetail;
  sendResultList?: DescribeAlertLogListResponseBodyAlertLogListSendResultList[];
  sendStatus?: string;
  webhookList?: DescribeAlertLogListResponseBodyAlertLogListWebhookList[];
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      blackListDetail: 'BlackListDetail',
      blackListName: 'BlackListName',
      blackListUUID: 'BlackListUUID',
      contactALIIWWList: 'ContactALIIWWList',
      contactDingList: 'ContactDingList',
      contactGroups: 'ContactGroups',
      contactMailList: 'ContactMailList',
      contactOnCallList: 'ContactOnCallList',
      contactSMSList: 'ContactSMSList',
      dimensions: 'Dimensions',
      dingdingWebhookList: 'DingdingWebhookList',
      escalation: 'Escalation',
      eventName: 'EventName',
      extendedInfo: 'ExtendedInfo',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      level: 'Level',
      levelChange: 'LevelChange',
      message: 'Message',
      metricName: 'MetricName',
      namespace: 'Namespace',
      product: 'Product',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sendDetail: 'SendDetail',
      sendResultList: 'SendResultList',
      sendStatus: 'SendStatus',
      webhookList: 'WebhookList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'string',
      blackListDetail: 'string',
      blackListName: 'string',
      blackListUUID: 'string',
      contactALIIWWList: { 'type': 'array', 'itemType': 'string' },
      contactDingList: { 'type': 'array', 'itemType': 'string' },
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      contactMailList: { 'type': 'array', 'itemType': 'string' },
      contactOnCallList: { 'type': 'array', 'itemType': 'string' },
      contactSMSList: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListDimensions },
      dingdingWebhookList: { 'type': 'array', 'itemType': 'string' },
      escalation: DescribeAlertLogListResponseBodyAlertLogListEscalation,
      eventName: 'string',
      extendedInfo: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListExtendedInfo },
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      level: 'string',
      levelChange: 'string',
      message: 'string',
      metricName: 'string',
      namespace: 'string',
      product: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendDetail: DescribeAlertLogListResponseBodyAlertLogListSendDetail,
      sendResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendResultList },
      sendStatus: 'string',
      webhookList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListWebhookList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource extends $tea.Model {
  comparisonOperator?: string;
  expression?: string;
  level?: number;
  preCondition?: string;
  tag?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      expression: 'Expression',
      level: 'Level',
      preCondition: 'PreCondition',
      tag: 'Tag',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      expression: 'string',
      level: 'number',
      preCondition: 'string',
      tag: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation extends $tea.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource extends $tea.Model {
  dimensions?: string;
  enable?: string;
  escalation?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation;
  groupId?: string;
  lastAlertTime?: string;
  lastModifyTime?: string;
  level?: number;
  metricName?: string;
  metricValues?: string;
  namespace?: string;
  productCategory?: string;
  resource?: string;
  retryTimes?: string;
  ruleId?: string;
  ruleName?: string;
  startTime?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      enable: 'Enable',
      escalation: 'Escalation',
      groupId: 'GroupId',
      lastAlertTime: 'LastAlertTime',
      lastModifyTime: 'LastModifyTime',
      level: 'Level',
      metricName: 'MetricName',
      metricValues: 'MetricValues',
      namespace: 'Namespace',
      productCategory: 'ProductCategory',
      resource: 'Resource',
      retryTimes: 'RetryTimes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      enable: 'string',
      escalation: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation,
      groupId: 'string',
      lastAlertTime: 'string',
      lastModifyTime: 'string',
      level: 'number',
      metricName: 'string',
      metricValues: 'string',
      namespace: 'string',
      productCategory: 'string',
      resource: 'string',
      retryTimes: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResources extends $tea.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource },
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
  contacts?: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts;
  createTime?: number;
  describe?: string;
  enableSubscribed?: boolean;
  enabledWeeklyReport?: boolean;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      createTime: 'CreateTime',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
      enabledWeeklyReport: 'EnabledWeeklyReport',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts,
      createTime: 'number',
      describe: 'string',
      enableSubscribed: 'boolean',
      enabledWeeklyReport: 'boolean',
      name: 'string',
      updateTime: 'number',
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

export class DescribeContactListResponseBodyContactsContactChannels extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannelsState extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
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

export class DescribeContactListResponseBodyContactsContact extends $tea.Model {
  channels?: DescribeContactListResponseBodyContactsContactChannels;
  channelsState?: DescribeContactListResponseBodyContactsContactChannelsState;
  contactGroups?: DescribeContactListResponseBodyContactsContactContactGroups;
  createTime?: number;
  desc?: string;
  lang?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      channelsState: 'ChannelsState',
      contactGroups: 'ContactGroups',
      createTime: 'CreateTime',
      desc: 'Desc',
      lang: 'Lang',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListResponseBodyContactsContactChannels,
      channelsState: DescribeContactListResponseBodyContactsContactChannelsState,
      contactGroups: DescribeContactListResponseBodyContactsContactContactGroups,
      createTime: 'number',
      desc: 'string',
      lang: 'string',
      name: 'string',
      updateTime: 'number',
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
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContactsContact extends $tea.Model {
  channels?: DescribeContactListByContactGroupResponseBodyContactsContactChannels;
  createTime?: number;
  desc?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      createTime: 'CreateTime',
      desc: 'Desc',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListByContactGroupResponseBodyContactsContactChannels,
      createTime: 'number',
      desc: 'string',
      name: 'string',
      updateTime: 'number',
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
  content?: string;
  groupId?: string;
  id?: string;
  name?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      time: 'string',
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
  name?: string;
  num?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      time: 'number',
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
  count?: number;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endTime: 'number',
      startTime: 'number',
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

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList extends $tea.Model {
  contactGroupList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress extends $tea.Model {
  tagValue?: string;
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagValueMatchFunction: 'string',
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
  contactGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList;
  dynamicTagRuleId?: string;
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress;
  matchExpressFilterRelation?: string;
  regionId?: string;
  status?: string;
  tagKey?: string;
  templateIdList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      dynamicTagRuleId: 'DynamicTagRuleId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      status: 'Status',
      tagKey: 'TagKey',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList,
      dynamicTagRuleId: 'string',
      matchExpress: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress,
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      status: 'string',
      tagKey: 'string',
      templateIdList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList,
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

export class DescribeEventRuleAttributeResponseBodyResultEventPattern extends $tea.Model {
  levelList?: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList;
  nameList?: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList;
  product?: string;
  statusList?: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList;
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList,
      nameList: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList,
      product: 'string',
      statusList: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResult extends $tea.Model {
  description?: string;
  eventPattern?: DescribeEventRuleAttributeResponseBodyResultEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleAttributeResponseBodyResultEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      state: 'string',
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

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords extends $tea.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter extends $tea.Model {
  keywords?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords,
      relation: 'string',
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
  customFilters?: string;
  eventTypeList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList;
  keywordFilter?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter;
  levelList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList;
  nameList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      keywordFilter: 'KeywordFilter',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList,
      keywordFilter: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter,
      levelList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList,
      nameList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList,
      product: 'string',
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
  description?: string;
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  silenceTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      silenceTime: 'number',
      state: 'string',
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
  id?: string;
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
      id: 'string',
      level: 'string',
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

export class DescribeEventRuleTargetListResponseBodyFcParametersFCParameter extends $tea.Model {
  arn?: string;
  functionName?: string;
  id?: string;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      functionName: 'string',
      id: 'string',
      region: 'string',
      serviceName: 'string',
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
  arn?: string;
  id?: string;
  queue?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      queue: 'string',
      region: 'string',
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

export class DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters extends $tea.Model {
  action?: string;
  arn?: string;
  id?: string;
  product?: string;
  region?: string;
  role?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
      product: 'Product',
      region: 'Region',
      role: 'Role',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      arn: 'string',
      id: 'string',
      product: 'string',
      region: 'string',
      role: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyOpenApiParameters extends $tea.Model {
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters[];
  static names(): { [key: string]: string } {
    return {
      openApiParameters: 'OpenApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiParameters: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter extends $tea.Model {
  arn?: string;
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
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
  id?: string;
  method?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
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

export class DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson extends $tea.Model {
  ak?: string;
  endpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      endpoint: 'endpoint',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      endpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapoint extends $tea.Model {
  configJson?: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson;
  createTime?: number;
  destName?: string;
  destType?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      createTime: 'CreateTime',
      destName: 'DestName',
      destType: 'DestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson,
      createTime: 'number',
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
  createTime?: number;
  describe?: string;
  dimension?: string;
  dstName?: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName;
  enabled?: boolean;
  metricName?: string;
  namespace?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      describe: 'Describe',
      dimension: 'Dimension',
      dstName: 'DstName',
      enabled: 'Enabled',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      describe: 'string',
      dimension: 'string',
      dstName: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName,
      enabled: 'boolean',
      metricName: 'string',
      namespace: 'string',
      ruleName: 'string',
      targetWindows: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
      webhook: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess extends $tea.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig;
  groupId?: string;
  id?: string;
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress;
  matchExpressFilterRelation?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig,
      groupId: 'string',
      id: 'string',
      matchExpress: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress,
      matchExpressFilterRelation: 'string',
      processName: 'string',
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

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'string',
      value: 'string',
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
  endTime?: number;
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      escalationList: 'EscalationList',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      escalationList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList,
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
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

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption extends $tea.Model {
  httpKeyword?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpKeyword: 'HttpKeyword',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpKeyword: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig extends $tea.Model {
  alertConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig;
  disabled?: boolean;
  groupId?: number;
  groupName?: string;
  id?: number;
  instances?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances;
  taskName?: string;
  taskOption?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      disabled: 'Disabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      instances: 'Instances',
      taskName: 'TaskName',
      taskOption: 'TaskOption',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig,
      disabled: 'boolean',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      instances: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances,
      taskName: 'string',
      taskOption: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption,
      taskScope: 'string',
      taskType: 'string',
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

export class DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates extends $tea.Model {
  alias?: string;
  fieldName?: string;
  function?: string;
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter extends $tea.Model {
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

export class DescribeLogMonitorAttributeResponseBodyLogMonitor extends $tea.Model {
  aggregates?: DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates[];
  gmtCreate?: number;
  groupId?: number;
  groupbys?: string[];
  logId?: number;
  metricExpress?: string;
  metricName?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  tumblingwindows?: string[];
  valueFilter?: DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates },
      gmtCreate: 'number',
      groupId: 'number',
      groupbys: { 'type': 'array', 'itemType': 'string' },
      logId: 'number',
      metricExpress: 'string',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: { 'type': 'array', 'itemType': 'string' },
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBodyLogMonitorListValueFilter extends $tea.Model {
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

export class DescribeLogMonitorListResponseBodyLogMonitorList extends $tea.Model {
  gmtCreate?: number;
  groupId?: number;
  logId?: number;
  metricName?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  valueFilter?: DescribeLogMonitorListResponseBodyLogMonitorListValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      logId: 'LogId',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      groupId: 'number',
      logId: 'number',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorListValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResourcesResource extends $tea.Model {
  description?: string;
  dimensions?: string;
  labels?: string;
  metricName?: string;
  namespace?: string;
  periods?: string;
  statistics?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimensions: 'Dimensions',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      periods: 'Periods',
      statistics: 'Statistics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimensions: 'string',
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      periods: 'string',
      statistics: 'string',
      unit: 'string',
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
  alarm?: number;
  disable?: number;
  nodata?: number;
  ok?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
      disable: 'Disable',
      nodata: 'Nodata',
      ok: 'Ok',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: 'number',
      disable: 'number',
      nodata: 'number',
      ok: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels extends $tea.Model {
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabels extends $tea.Model {
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $tea.Model {
  alertState?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  groupId?: string;
  groupName?: string;
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  sourceType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      groupId: 'GroupId',
      groupName: 'GroupName',
      labels: 'Labels',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      sourceType: 'SourceType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      groupId: 'string',
      groupName: 'string',
      labels: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      sourceType: 'string',
      webhook: 'string',
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
  arn?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
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
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
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
  category?: string;
  escalations?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      escalations: 'Escalations',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      escalations: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations,
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
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
  alertTemplates?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates;
  description?: string;
  name?: string;
  restVersion?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates,
      description: 'string',
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
  applyTime?: number;
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      groupId: 'number',
      groupName: 'string',
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
  gmtModified?: number;
  name?: string;
  restVersion?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      applyHistories: 'ApplyHistories',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistories: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories,
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      restVersion: 'number',
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
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
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
  category?: string;
  filterRelation?: string;
  filters?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters,
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

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc extends $tea.Model {
  vpcInstanceId?: string;
  vswitchInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcInstanceId: 'VpcInstanceId',
      vswitchInstanceId: 'VswitchInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInstanceId: 'string',
      vswitchInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource extends $tea.Model {
  category?: string;
  desc?: string;
  dimension?: string;
  instanceId?: string;
  instanceName?: string;
  networkType?: string;
  region?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion;
  tags?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags;
  vpc?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      desc: 'Desc',
      dimension: 'Dimension',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      region: 'Region',
      tags: 'Tags',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      desc: 'string',
      dimension: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkType: 'string',
      region: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion,
      tags: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags,
      vpc: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc,
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
  category?: string;
  id?: number;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
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
  groupId?: string;
  id?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      id: 'Id',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      id: 'string',
      startTime: 'number',
      type: 'string',
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
  bindUrl?: string;
  contactGroups?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups;
  dynamicTagRuleId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupFounderTagKey?: string;
  groupFounderTagValue?: string;
  groupId?: number;
  groupName?: string;
  serviceId?: string;
  tags?: DescribeMonitorGroupsResponseBodyResourcesResourceTags;
  templateIds?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      dynamicTagRuleId: 'DynamicTagRuleId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      serviceId: 'ServiceId',
      tags: 'Tags',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      contactGroups: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups,
      dynamicTagRuleId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'number',
      groupName: 'string',
      serviceId: 'string',
      tags: DescribeMonitorGroupsResponseBodyResourcesResourceTags,
      templateIds: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds,
      type: 'string',
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

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota extends $tea.Model {
  instanceId?: string;
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      suitInfo: 'string',
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

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota extends $tea.Model {
  api?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi;
  customMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor;
  enterpriseQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota;
  eventMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor;
  expireTime?: string;
  instanceId?: string;
  logMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor;
  phone?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone;
  SMS?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS;
  siteMonitorEcsProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe;
  siteMonitorOperatorProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe;
  siteMonitorTask?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask;
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      customMonitor: 'CustomMonitor',
      enterpriseQuota: 'EnterpriseQuota',
      eventMonitor: 'EventMonitor',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      logMonitor: 'LogMonitor',
      phone: 'Phone',
      SMS: 'SMS',
      siteMonitorEcsProbe: 'SiteMonitorEcsProbe',
      siteMonitorOperatorProbe: 'SiteMonitorOperatorProbe',
      siteMonitorTask: 'SiteMonitorTask',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi,
      customMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor,
      enterpriseQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota,
      eventMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor,
      expireTime: 'string',
      instanceId: 'string',
      logMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor,
      phone: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone,
      SMS: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS,
      siteMonitorEcsProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe,
      siteMonitorOperatorProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe,
      siteMonitorTask: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask,
      suitInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHostsHost extends $tea.Model {
  agentVersion?: string;
  aliUid?: number;
  eipAddress?: string;
  eipId?: string;
  hostName?: string;
  instanceId?: string;
  instanceTypeFamily?: string;
  ipGroup?: string;
  natIp?: string;
  networkType?: string;
  operatingSystem?: string;
  region?: string;
  serialNumber?: string;
  isAliyunHost?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      aliUid: 'AliUid',
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceTypeFamily: 'InstanceTypeFamily',
      ipGroup: 'IpGroup',
      natIp: 'NatIp',
      networkType: 'NetworkType',
      operatingSystem: 'OperatingSystem',
      region: 'Region',
      serialNumber: 'SerialNumber',
      isAliyunHost: 'isAliyunHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      aliUid: 'number',
      eipAddress: 'string',
      eipId: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceTypeFamily: 'string',
      ipGroup: 'string',
      natIp: 'string',
      networkType: 'string',
      operatingSystem: 'string',
      region: 'string',
      serialNumber: 'string',
      isAliyunHost: 'boolean',
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
  command?: string;
  groupId?: string;
  instanceId?: string;
  processId?: number;
  processName?: string;
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      groupId: 'string',
      instanceId: 'string',
      processId: 'number',
      processName: 'string',
      processUser: 'string',
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
  autoInstall?: boolean;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      instanceId: 'string',
      status: 'string',
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
  evaluationCount?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationCount: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
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
  alertInitConfigList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      alertInitConfigList: 'AlertInitConfigList',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfigList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList,
      product: 'string',
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
  actionEnable?: string;
  alarmActions?: string;
  comparisonOperator?: string;
  dimensions?: string;
  evaluationCount?: string;
  expression?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  okActions?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  stateValue?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      actionEnable: 'ActionEnable',
      alarmActions: 'AlarmActions',
      comparisonOperator: 'ComparisonOperator',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      okActions: 'OkActions',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      stateValue: 'StateValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionEnable: 'string',
      alarmActions: 'string',
      comparisonOperator: 'string',
      dimensions: 'string',
      evaluationCount: 'string',
      expression: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      okActions: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      stateValue: 'string',
      statistics: 'string',
      threshold: 'string',
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

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity extends $tea.Model {
  city?: string;
  cityName?: string;
  isp?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      cityName: 'CityName',
      isp: 'Isp',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      cityName: 'string',
      isp: 'string',
      ispName: 'string',
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

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson extends $tea.Model {
  attempts?: number;
  authentication?: number;
  cookie?: string;
  dnsMatchRule?: string;
  dnsServer?: string;
  dnsType?: string;
  expectValue?: string;
  failureRate?: number;
  header?: string;
  httpMethod?: string;
  matchRule?: number;
  password?: string;
  pingNum?: number;
  port?: number;
  protocol?: string;
  requestContent?: string;
  requestFormat?: string;
  responseContent?: string;
  responseFormat?: string;
  timeOut?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      attempts: 'attempts',
      authentication: 'authentication',
      cookie: 'cookie',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      expectValue: 'expect_value',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      matchRule: 'match_rule',
      password: 'password',
      pingNum: 'ping_num',
      port: 'port',
      protocol: 'protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      timeOut: 'time_out',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      authentication: 'number',
      cookie: 'string',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      expectValue: 'string',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      matchRule: 'number',
      password: 'string',
      pingNum: 'number',
      port: 'number',
      protocol: 'string',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      timeOut: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitors extends $tea.Model {
  address?: string;
  interval?: string;
  ispCities?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities;
  optionJson?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson;
  taskId?: string;
  taskName?: string;
  taskState?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionJson: 'OptionJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      interval: 'string',
      ispCities: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities,
      optionJson: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson extends $tea.Model {
  attempts?: number;
  authentication?: number;
  cookie?: string;
  dnsMatchRule?: string;
  dnsServer?: string;
  dnsType?: string;
  failureRate?: number;
  header?: string;
  httpMethod?: string;
  matchRule?: number;
  password?: string;
  pingNum?: number;
  port?: number;
  protocol?: string;
  requestContent?: string;
  requestFormat?: string;
  responseContent?: string;
  responseFormat?: string;
  timeOut?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      attempts: 'attempts',
      authentication: 'authentication',
      cookie: 'cookie',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      matchRule: 'match_rule',
      password: 'password',
      pingNum: 'ping_num',
      port: 'port',
      protocol: 'protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      timeOut: 'time_out',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      authentication: 'number',
      cookie: 'string',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      matchRule: 'number',
      password: 'string',
      pingNum: 'number',
      port: 'number',
      protocol: 'string',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      timeOut: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor extends $tea.Model {
  address?: string;
  createTime?: string;
  interval?: string;
  optionsJson?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson;
  taskId?: string;
  taskName?: string;
  taskState?: string;
  taskType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTime: 'CreateTime',
      interval: 'Interval',
      optionsJson: 'OptionsJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      createTime: 'string',
      interval: 'string',
      optionsJson: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
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
  secondMonitor?: boolean;
  siteMonitorIdcQuota?: number;
  siteMonitorOperatorQuotaQuota?: number;
  siteMonitorQuotaTaskUsed?: number;
  siteMonitorTaskQuota?: number;
  siteMonitorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      secondMonitor: 'SecondMonitor',
      siteMonitorIdcQuota: 'SiteMonitorIdcQuota',
      siteMonitorOperatorQuotaQuota: 'SiteMonitorOperatorQuotaQuota',
      siteMonitorQuotaTaskUsed: 'SiteMonitorQuotaTaskUsed',
      siteMonitorTaskQuota: 'SiteMonitorTaskQuota',
      siteMonitorVersion: 'SiteMonitorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondMonitor: 'boolean',
      siteMonitorIdcQuota: 'number',
      siteMonitorOperatorQuotaQuota: 'number',
      siteMonitorQuotaTaskUsed: 'number',
      siteMonitorTaskQuota: 'number',
      siteMonitorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent extends $tea.Model {
  content?: string;
  groupId?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      status: 'string',
      time: 'number',
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
  content?: string;
  groupId?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  num?: number;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
      num: 'Num',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
      num: 'number',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      status: 'string',
      time: 'number',
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
  count?: number;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endTime: 'number',
      startTime: 'number',
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
  id?: number;
  instanceList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList,
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
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfig extends $tea.Model {
  endTime?: number;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestTaskOption extends $tea.Model {
  httpHeader?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpResponseMatchContent?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpHeader: 'HttpHeader',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeader: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpResponseMatchContent: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations;
  category?: string;
  metricName?: string;
  namespace?: string;
  period?: number;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesRequestInstances extends $tea.Model {
  category?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
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
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequestEventInfo extends $tea.Model {
  content?: string;
  eventName?: string;
  groupId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventName: 'EventName',
      groupId: 'GroupId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventName: 'string',
      groupId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequestMetricList extends $tea.Model {
  dimensions?: string;
  groupId?: string;
  metricName?: string;
  period?: string;
  time?: string;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      metricName: 'MetricName',
      period: 'Period',
      time: 'Time',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      groupId: 'string',
      metricName: 'string',
      period: 'string',
      time: 'string',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleRequestEventPattern extends $tea.Model {
  customFilters?: string;
  eventTypeList?: string[];
  levelList?: string[];
  nameList?: string[];
  product?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
      levelList: { 'type': 'array', 'itemType': 'string' },
      nameList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestContactParameters extends $tea.Model {
  contactGroupName?: string;
  id?: string;
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
      id: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestFcParameters extends $tea.Model {
  functionName?: string;
  id?: string;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'string',
      region: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestMnsParameters extends $tea.Model {
  id?: string;
  queue?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      queue: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestOpenApiParameters extends $tea.Model {
  action?: string;
  arn?: string;
  id?: string;
  product?: string;
  region?: string;
  role?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
      product: 'Product',
      region: 'Region',
      role: 'Role',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      arn: 'string',
      id: 'string',
      product: 'string',
      region: 'string',
      role: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestSlsParameters extends $tea.Model {
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestWebhookParameters extends $tea.Model {
  id?: string;
  method?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
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

export class PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter extends $tea.Model {
  functionName?: string;
  id?: number;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'number',
      region: 'string',
      serviceName: 'string',
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

export class PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter extends $tea.Model {
  id?: number;
  queue?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      queue: 'string',
      region: 'string',
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

export class PutGroupMetricRuleRequestEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
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
  info: PutGroupMetricRuleRequestEscalationsInfo;
  warn: PutGroupMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutGroupMetricRuleRequestEscalationsCritical,
      info: PutGroupMetricRuleRequestEscalationsInfo,
      warn: PutGroupMetricRuleRequestEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponseBodyResult extends $tea.Model {
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

export class PutHybridMonitorMetricDataRequestMetricListLabels extends $tea.Model {
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

export class PutHybridMonitorMetricDataRequestMetricList extends $tea.Model {
  labels?: PutHybridMonitorMetricDataRequestMetricListLabels[];
  name?: string;
  TS?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      TS: 'TS',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricListLabels },
      name: 'string',
      TS: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponseBodyErrorDetail extends $tea.Model {
  errorMessage?: string;
  index?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      index: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestAggregates extends $tea.Model {
  alias?: string;
  fieldName?: string;
  function?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestGroupbys extends $tea.Model {
  alias?: string;
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestValueFilter extends $tea.Model {
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

export class PutMetricRuleTargetsRequestTargets extends $tea.Model {
  arn?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargetsTarget extends $tea.Model {
  arn?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
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
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRules extends $tea.Model {
  category?: string;
  filterRelation?: string;
  filters?: PutMonitorGroupDynamicRuleRequestGroupRulesFilters[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRulesFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
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
  info: PutResourceMetricRuleRequestEscalationsInfo;
  warn: PutResourceMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleRequestEscalationsCritical,
      info: PutResourceMetricRuleRequestEscalationsInfo,
      warn: PutResourceMetricRuleRequestEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestLabels extends $tea.Model {
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

export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalations extends $tea.Model {
  critical: PutResourceMetricRulesRequestRulesEscalationsCritical;
  info: PutResourceMetricRulesRequestRulesEscalationsInfo;
  warn: PutResourceMetricRulesRequestRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRulesRequestRulesEscalationsCritical,
      info: PutResourceMetricRulesRequestRulesEscalationsInfo,
      warn: PutResourceMetricRulesRequestRulesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRules extends $tea.Model {
  escalations: PutResourceMetricRulesRequestRulesEscalations;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRulesRequestRulesEscalations,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTargetResult extends $tea.Model {
  code?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
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
    let query = { };
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsResponse>(await this.callApi(params, req, runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async applyMetricRuleTemplateWithOptions(request: ApplyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApplyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyMode)) {
      query["ApplyMode"] = request.applyMode;
    }

    if (!Util.isUnset(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!Util.isUnset(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.notifyLevel)) {
      query["NotifyLevel"] = request.notifyLevel;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new ApplyMetricRuleTemplateResponse({}));
  }

  async applyMetricRuleTemplate(request: ApplyMetricRuleTemplateRequest): Promise<ApplyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyMetricRuleTemplateWithOptions(request, runtime);
  }

  async createCmsCallNumOrderWithOptions(request: CreateCmsCallNumOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsCallNumOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsCallNumOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsCallNumOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsCallNumOrderResponse({}));
  }

  async createCmsCallNumOrder(request: CreateCmsCallNumOrderRequest): Promise<CreateCmsCallNumOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsCallNumOrderWithOptions(request, runtime);
  }

  async createCmsOrderWithOptions(request: CreateCmsOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiCount)) {
      query["ApiCount"] = request.apiCount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.customTimeSeries)) {
      query["CustomTimeSeries"] = request.customTimeSeries;
    }

    if (!Util.isUnset(request.eventStoreNum)) {
      query["EventStoreNum"] = request.eventStoreNum;
    }

    if (!Util.isUnset(request.eventStoreTime)) {
      query["EventStoreTime"] = request.eventStoreTime;
    }

    if (!Util.isUnset(request.logMonitorStream)) {
      query["LogMonitorStream"] = request.logMonitorStream;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    if (!Util.isUnset(request.siteEcsNum)) {
      query["SiteEcsNum"] = request.siteEcsNum;
    }

    if (!Util.isUnset(request.siteOperatorNum)) {
      query["SiteOperatorNum"] = request.siteOperatorNum;
    }

    if (!Util.isUnset(request.siteTaskNum)) {
      query["SiteTaskNum"] = request.siteTaskNum;
    }

    if (!Util.isUnset(request.smsCount)) {
      query["SmsCount"] = request.smsCount;
    }

    if (!Util.isUnset(request.suggestType)) {
      query["SuggestType"] = request.suggestType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsOrderResponse({}));
  }

  async createCmsOrder(request: CreateCmsOrderRequest): Promise<CreateCmsOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsOrderWithOptions(request, runtime);
  }

  async createCmsSmspackageOrderWithOptions(request: CreateCmsSmspackageOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsSmspackageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.smsCount)) {
      query["SmsCount"] = request.smsCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsSmspackageOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsSmspackageOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsSmspackageOrderResponse({}));
  }

  async createCmsSmspackageOrder(request: CreateCmsSmspackageOrderRequest): Promise<CreateCmsSmspackageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsSmspackageOrderWithOptions(request, runtime);
  }

  async createDynamicTagGroupWithOptions(request: CreateDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDynamicTagGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!Util.isUnset(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!Util.isUnset(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!Util.isUnset(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!Util.isUnset(request.templateIdList)) {
      query["TemplateIdList"] = request.templateIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new CreateDynamicTagGroupResponse({}));
  }

  async createDynamicTagGroup(request: CreateDynamicTagGroupRequest): Promise<CreateDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDynamicTagGroupWithOptions(request, runtime);
  }

  async createGroupMetricRulesWithOptions(request: CreateGroupMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupMetricRules)) {
      query["GroupMetricRules"] = request.groupMetricRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupMetricRulesResponse>(await this.callApi(params, req, runtime), new CreateGroupMetricRulesResponse({}));
  }

  async createGroupMetricRules(request: CreateGroupMetricRulesRequest): Promise<CreateGroupMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMetricRulesWithOptions(request, runtime);
  }

  async createGroupMonitoringAgentProcessWithOptions(request: CreateGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateGroupMonitoringAgentProcessResponse({}));
  }

  async createGroupMonitoringAgentProcess(request: CreateGroupMonitoringAgentProcessRequest): Promise<CreateGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async createHostAvailabilityWithOptions(request: CreateHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset($tea.toMap(request.alertConfig))) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset($tea.toMap(request.taskOption))) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHostAvailabilityResponse>(await this.callApi(params, req, runtime), new CreateHostAvailabilityResponse({}));
  }

  async createHostAvailability(request: CreateHostAvailabilityRequest): Promise<CreateHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostAvailabilityWithOptions(request, runtime);
  }

  async createInstantSiteMonitorWithOptions(request: CreateInstantSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstantSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.randomIspCity)) {
      query["RandomIspCity"] = request.randomIspCity;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstantSiteMonitorResponse>(await this.callApi(params, req, runtime), new CreateInstantSiteMonitorResponse({}));
  }

  async createInstantSiteMonitor(request: CreateInstantSiteMonitorRequest): Promise<CreateInstantSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstantSiteMonitorWithOptions(request, runtime);
  }

  async createMetricRuleResourcesWithOptions(request: CreateMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new CreateMetricRuleResourcesResponse({}));
  }

  async createMetricRuleResources(request: CreateMetricRuleResourcesRequest): Promise<CreateMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleResourcesWithOptions(request, runtime);
  }

  async createMetricRuleTemplateWithOptions(request: CreateMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new CreateMetricRuleTemplateResponse({}));
  }

  async createMetricRuleTemplate(request: CreateMetricRuleTemplateRequest): Promise<CreateMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleTemplateWithOptions(request, runtime);
  }

  async createMonitorAgentProcessWithOptions(request: CreateMonitorAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    if (!Util.isUnset(request.processUser)) {
      query["ProcessUser"] = request.processUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateMonitorAgentProcessResponse({}));
  }

  async createMonitorAgentProcess(request: CreateMonitorAgentProcessRequest): Promise<CreateMonitorAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorAgentProcessWithOptions(request, runtime);
  }

  async createMonitorGroupWithOptions(request: CreateMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupResponse({}));
  }

  async createMonitorGroup(request: CreateMonitorGroupRequest): Promise<CreateMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  async createMonitorGroupByResourceGroupIdWithOptions(request: CreateMonitorGroupByResourceGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!Util.isUnset(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!Util.isUnset(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupByResourceGroupId",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupByResourceGroupIdResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupByResourceGroupIdResponse({}));
  }

  async createMonitorGroupByResourceGroupId(request: CreateMonitorGroupByResourceGroupIdRequest): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupByResourceGroupIdWithOptions(request, runtime);
  }

  async createMonitorGroupInstancesWithOptions(request: CreateMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupInstancesResponse({}));
  }

  async createMonitorGroupInstances(request: CreateMonitorGroupInstancesRequest): Promise<CreateMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupInstancesWithOptions(request, runtime);
  }

  async createMonitorGroupNotifyPolicyWithOptions(request: CreateMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupNotifyPolicyResponse({}));
  }

  async createMonitorGroupNotifyPolicy(request: CreateMonitorGroupNotifyPolicyRequest): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async createMonitoringAgentProcessWithOptions(request: CreateMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    if (!Util.isUnset(request.processUser)) {
      query["ProcessUser"] = request.processUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateMonitoringAgentProcessResponse({}));
  }

  async createMonitoringAgentProcess(request: CreateMonitoringAgentProcessRequest): Promise<CreateMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitoringAgentProcessWithOptions(request, runtime);
  }

  async createSiteMonitorWithOptions(request: CreateSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSiteMonitorResponse>(await this.callApi(params, req, runtime), new CreateSiteMonitorResponse({}));
  }

  async createSiteMonitor(request: CreateSiteMonitorRequest): Promise<CreateSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteMonitorWithOptions(request, runtime);
  }

  async deleteContactWithOptions(request: DeleteContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContact",
      version: "2019-01-01",
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
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactGroup",
      version: "2019-01-01",
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

  async deleteCustomMetricWithOptions(request: DeleteCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.UUID)) {
      query["UUID"] = request.UUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomMetric",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomMetricResponse>(await this.callApi(params, req, runtime), new DeleteCustomMetricResponse({}));
  }

  async deleteCustomMetric(request: DeleteCustomMetricRequest): Promise<DeleteCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomMetricWithOptions(request, runtime);
  }

  async deleteDynamicTagGroupWithOptions(request: DeleteDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicTagGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new DeleteDynamicTagGroupResponse({}));
  }

  async deleteDynamicTagGroup(request: DeleteDynamicTagGroupRequest): Promise<DeleteDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicTagGroupWithOptions(request, runtime);
  }

  async deleteEventRuleTargetsWithOptions(request: DeleteEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new DeleteEventRuleTargetsResponse({}));
  }

  async deleteEventRuleTargets(request: DeleteEventRuleTargetsRequest): Promise<DeleteEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRuleTargetsWithOptions(request, runtime);
  }

  async deleteEventRulesWithOptions(request: DeleteEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRulesResponse>(await this.callApi(params, req, runtime), new DeleteEventRulesResponse({}));
  }

  async deleteEventRules(request: DeleteEventRulesRequest): Promise<DeleteEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRulesWithOptions(request, runtime);
  }

  async deleteExporterOutputWithOptions(request: DeleteExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destName)) {
      query["DestName"] = request.destName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExporterOutputResponse>(await this.callApi(params, req, runtime), new DeleteExporterOutputResponse({}));
  }

  async deleteExporterOutput(request: DeleteExporterOutputRequest): Promise<DeleteExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterOutputWithOptions(request, runtime);
  }

  async deleteExporterRuleWithOptions(request: DeleteExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExporterRuleResponse>(await this.callApi(params, req, runtime), new DeleteExporterRuleResponse({}));
  }

  async deleteExporterRule(request: DeleteExporterRuleRequest): Promise<DeleteExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterRuleWithOptions(request, runtime);
  }

  async deleteGroupMonitoringAgentProcessWithOptions(request: DeleteGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DeleteGroupMonitoringAgentProcessResponse({}));
  }

  async deleteGroupMonitoringAgentProcess(request: DeleteGroupMonitoringAgentProcessRequest): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteHostAvailabilityWithOptions(request: DeleteHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DeleteHostAvailabilityResponse({}));
  }

  async deleteHostAvailability(request: DeleteHostAvailabilityRequest): Promise<DeleteHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAvailabilityWithOptions(request, runtime);
  }

  async deleteLogMonitorWithOptions(request: DeleteLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logId)) {
      query["LogId"] = request.logId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogMonitorResponse>(await this.callApi(params, req, runtime), new DeleteLogMonitorResponse({}));
  }

  async deleteLogMonitor(request: DeleteLogMonitorRequest): Promise<DeleteLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogMonitorWithOptions(request, runtime);
  }

  async deleteMetricRuleResourcesWithOptions(request: DeleteMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleResourcesResponse({}));
  }

  async deleteMetricRuleResources(request: DeleteMetricRuleResourcesRequest): Promise<DeleteMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleResourcesWithOptions(request, runtime);
  }

  async deleteMetricRuleTargetsWithOptions(request: DeleteMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleTargetsResponse({}));
  }

  async deleteMetricRuleTargets(request: DeleteMetricRuleTargetsRequest): Promise<DeleteMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTargetsWithOptions(request, runtime);
  }

  async deleteMetricRuleTemplateWithOptions(request: DeleteMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleTemplateResponse({}));
  }

  async deleteMetricRuleTemplate(request: DeleteMetricRuleTemplateRequest): Promise<DeleteMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTemplateWithOptions(request, runtime);
  }

  async deleteMetricRulesWithOptions(request: DeleteMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRulesResponse>(await this.callApi(params, req, runtime), new DeleteMetricRulesResponse({}));
  }

  async deleteMetricRules(request: DeleteMetricRulesRequest): Promise<DeleteMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRulesWithOptions(request, runtime);
  }

  async deleteMonitorGroupWithOptions(request: DeleteMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupResponse({}));
  }

  async deleteMonitorGroup(request: DeleteMonitorGroupRequest): Promise<DeleteMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  async deleteMonitorGroupDynamicRuleWithOptions(request: DeleteMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupDynamicRuleResponse({}));
  }

  async deleteMonitorGroupDynamicRule(request: DeleteMonitorGroupDynamicRuleRequest): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async deleteMonitorGroupInstancesWithOptions(request: DeleteMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupInstancesResponse({}));
  }

  async deleteMonitorGroupInstances(request: DeleteMonitorGroupInstancesRequest): Promise<DeleteMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupInstancesWithOptions(request, runtime);
  }

  async deleteMonitorGroupNotifyPolicyWithOptions(request: DeleteMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupNotifyPolicyResponse({}));
  }

  async deleteMonitorGroupNotifyPolicy(request: DeleteMonitorGroupNotifyPolicyRequest): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async deleteMonitoringAgentProcessWithOptions(request: DeleteMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DeleteMonitoringAgentProcessResponse({}));
  }

  async deleteMonitoringAgentProcess(request: DeleteMonitoringAgentProcessRequest): Promise<DeleteMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteSiteMonitorsWithOptions(request: DeleteSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isDeleteAlarms)) {
      query["IsDeleteAlarms"] = request.isDeleteAlarms;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSiteMonitorsResponse>(await this.callApi(params, req, runtime), new DeleteSiteMonitorsResponse({}));
  }

  async deleteSiteMonitors(request: DeleteSiteMonitorsRequest): Promise<DeleteSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSiteMonitorsWithOptions(request, runtime);
  }

  async describeActiveMetricRuleListWithOptions(request: DescribeActiveMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveMetricRuleListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveMetricRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveMetricRuleListResponse>(await this.callApi(params, req, runtime), new DescribeActiveMetricRuleListResponse({}));
  }

  async describeActiveMetricRuleList(request: DescribeActiveMetricRuleListRequest): Promise<DescribeActiveMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveMetricRuleListWithOptions(request, runtime);
  }

  async describeAlertHistoryListWithOptions(request: DescribeAlertHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertHistoryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ascending)) {
      query["Ascending"] = request.ascending;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertHistoryList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertHistoryListResponse>(await this.callApi(params, req, runtime), new DescribeAlertHistoryListResponse({}));
  }

  async describeAlertHistoryList(request: DescribeAlertHistoryListRequest): Promise<DescribeAlertHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertHistoryListWithOptions(request, runtime);
  }

  async describeAlertLogCountWithOptions(request: DescribeAlertLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogCountResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogCountResponse({}));
  }

  async describeAlertLogCount(request: DescribeAlertLogCountRequest): Promise<DescribeAlertLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogCountWithOptions(request, runtime);
  }

  async describeAlertLogHistogramWithOptions(request: DescribeAlertLogHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogHistogramResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogHistogramResponse({}));
  }

  async describeAlertLogHistogram(request: DescribeAlertLogHistogramRequest): Promise<DescribeAlertLogHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogHistogramWithOptions(request, runtime);
  }

  async describeAlertLogListWithOptions(request: DescribeAlertLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogListResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogListResponse({}));
  }

  async describeAlertLogList(request: DescribeAlertLogListRequest): Promise<DescribeAlertLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogListWithOptions(request, runtime);
  }

  async describeAlertingMetricRuleResourcesWithOptions(request: DescribeAlertingMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertingMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertingMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertingMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new DescribeAlertingMetricRuleResourcesResponse({}));
  }

  async describeAlertingMetricRuleResources(request: DescribeAlertingMetricRuleResourcesRequest): Promise<DescribeAlertingMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertingMetricRuleResourcesWithOptions(request, runtime);
  }

  async describeContactGroupListWithOptions(request: DescribeContactGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactGroupList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactGroupListResponse>(await this.callApi(params, req, runtime), new DescribeContactGroupListResponse({}));
  }

  async describeContactGroupList(request: DescribeContactGroupListRequest): Promise<DescribeContactGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactGroupListWithOptions(request, runtime);
  }

  async describeContactListWithOptions(request: DescribeContactListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chanelType)) {
      query["ChanelType"] = request.chanelType;
    }

    if (!Util.isUnset(request.chanelValue)) {
      query["ChanelValue"] = request.chanelValue;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactListResponse>(await this.callApi(params, req, runtime), new DescribeContactListResponse({}));
  }

  async describeContactList(request: DescribeContactListRequest): Promise<DescribeContactListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListWithOptions(request, runtime);
  }

  async describeContactListByContactGroupWithOptions(request: DescribeContactListByContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListByContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactListByContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactListByContactGroupResponse>(await this.callApi(params, req, runtime), new DescribeContactListByContactGroupResponse({}));
  }

  async describeContactListByContactGroup(request: DescribeContactListByContactGroupRequest): Promise<DescribeContactListByContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListByContactGroupWithOptions(request, runtime);
  }

  async describeCustomEventAttributeWithOptions(request: DescribeCustomEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
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

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventAttributeResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventAttributeResponse({}));
  }

  async describeCustomEventAttribute(request: DescribeCustomEventAttributeRequest): Promise<DescribeCustomEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventAttributeWithOptions(request, runtime);
  }

  async describeCustomEventCountWithOptions(request: DescribeCustomEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventCountResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventCountResponse({}));
  }

  async describeCustomEventCount(request: DescribeCustomEventCountRequest): Promise<DescribeCustomEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventCountWithOptions(request, runtime);
  }

  async describeCustomEventHistogramWithOptions(request: DescribeCustomEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventHistogramResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventHistogramResponse({}));
  }

  async describeCustomEventHistogram(request: DescribeCustomEventHistogramRequest): Promise<DescribeCustomEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventHistogramWithOptions(request, runtime);
  }

  async describeCustomMetricListWithOptions(request: DescribeCustomMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomMetricListResponse>(await this.callApi(params, req, runtime), new DescribeCustomMetricListResponse({}));
  }

  async describeCustomMetricList(request: DescribeCustomMetricListRequest): Promise<DescribeCustomMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomMetricListWithOptions(request, runtime);
  }

  async describeDynamicTagRuleListWithOptions(request: DescribeDynamicTagRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDynamicTagRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!Util.isUnset(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDynamicTagRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDynamicTagRuleListResponse>(await this.callApi(params, req, runtime), new DescribeDynamicTagRuleListResponse({}));
  }

  async describeDynamicTagRuleList(request: DescribeDynamicTagRuleListRequest): Promise<DescribeDynamicTagRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDynamicTagRuleListWithOptions(request, runtime);
  }

  async describeEventRuleAttributeWithOptions(request: DescribeEventRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleAttributeResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleAttributeResponse({}));
  }

  async describeEventRuleAttribute(request: DescribeEventRuleAttributeRequest): Promise<DescribeEventRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleAttributeWithOptions(request, runtime);
  }

  async describeEventRuleListWithOptions(request: DescribeEventRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleListResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleListResponse({}));
  }

  async describeEventRuleList(request: DescribeEventRuleListRequest): Promise<DescribeEventRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleListWithOptions(request, runtime);
  }

  async describeEventRuleTargetListWithOptions(request: DescribeEventRuleTargetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleTargetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleTargetList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleTargetListResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleTargetListResponse({}));
  }

  async describeEventRuleTargetList(request: DescribeEventRuleTargetListRequest): Promise<DescribeEventRuleTargetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleTargetListWithOptions(request, runtime);
  }

  async describeExporterOutputListWithOptions(request: DescribeExporterOutputListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterOutputListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExporterOutputList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExporterOutputListResponse>(await this.callApi(params, req, runtime), new DescribeExporterOutputListResponse({}));
  }

  async describeExporterOutputList(request: DescribeExporterOutputListRequest): Promise<DescribeExporterOutputListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterOutputListWithOptions(request, runtime);
  }

  async describeExporterRuleListWithOptions(request: DescribeExporterRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExporterRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExporterRuleListResponse>(await this.callApi(params, req, runtime), new DescribeExporterRuleListResponse({}));
  }

  async describeExporterRuleList(request: DescribeExporterRuleListRequest): Promise<DescribeExporterRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterRuleListWithOptions(request, runtime);
  }

  async describeGroupMonitoringAgentProcessWithOptions(request: DescribeGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DescribeGroupMonitoringAgentProcessResponse({}));
  }

  async describeGroupMonitoringAgentProcess(request: DescribeGroupMonitoringAgentProcessRequest): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async describeHostAvailabilityListWithOptions(request: DescribeHostAvailabilityListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostAvailabilityListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHostAvailabilityList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHostAvailabilityListResponse>(await this.callApi(params, req, runtime), new DescribeHostAvailabilityListResponse({}));
  }

  async describeHostAvailabilityList(request: DescribeHostAvailabilityListRequest): Promise<DescribeHostAvailabilityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostAvailabilityListWithOptions(request, runtime);
  }

  async describeLogMonitorAttributeWithOptions(request: DescribeLogMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogMonitorAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLogMonitorAttributeResponse({}));
  }

  async describeLogMonitorAttribute(request: DescribeLogMonitorAttributeRequest): Promise<DescribeLogMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorAttributeWithOptions(request, runtime);
  }

  async describeLogMonitorListWithOptions(request: DescribeLogMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogMonitorListResponse>(await this.callApi(params, req, runtime), new DescribeLogMonitorListResponse({}));
  }

  async describeLogMonitorList(request: DescribeLogMonitorListRequest): Promise<DescribeLogMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorListWithOptions(request, runtime);
  }

  async describeMetricDataWithOptions(request: DescribeMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeMetricDataResponse({}));
  }

  async describeMetricData(request: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  async describeMetricLastWithOptions(request: DescribeMetricLastRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricLastResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricLast",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricLastResponse>(await this.callApi(params, req, runtime), new DescribeMetricLastResponse({}));
  }

  async describeMetricLast(request: DescribeMetricLastRequest): Promise<DescribeMetricLastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricLastWithOptions(request, runtime);
  }

  async describeMetricListWithOptions(request: DescribeMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricListResponse>(await this.callApi(params, req, runtime), new DescribeMetricListResponse({}));
  }

  async describeMetricList(request: DescribeMetricListRequest): Promise<DescribeMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  async describeMetricMetaListWithOptions(request: DescribeMetricMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricMetaListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricMetaList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricMetaListResponse>(await this.callApi(params, req, runtime), new DescribeMetricMetaListResponse({}));
  }

  async describeMetricMetaList(request: DescribeMetricMetaListRequest): Promise<DescribeMetricMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricMetaListWithOptions(request, runtime);
  }

  async describeMetricRuleCountWithOptions(request: DescribeMetricRuleCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleCountResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleCountResponse({}));
  }

  async describeMetricRuleCount(request: DescribeMetricRuleCountRequest): Promise<DescribeMetricRuleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleCountWithOptions(request, runtime);
  }

  async describeMetricRuleListWithOptions(request: DescribeMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertState)) {
      query["AlertState"] = request.alertState;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.enableState)) {
      query["EnableState"] = request.enableState;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleListResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleListResponse({}));
  }

  async describeMetricRuleList(request: DescribeMetricRuleListRequest): Promise<DescribeMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleListWithOptions(request, runtime);
  }

  async describeMetricRuleTargetsWithOptions(request: DescribeMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTargetsResponse({}));
  }

  async describeMetricRuleTargets(request: DescribeMetricRuleTargetsRequest): Promise<DescribeMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTargetsWithOptions(request, runtime);
  }

  async describeMetricRuleTemplateAttributeWithOptions(request: DescribeMetricRuleTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTemplateAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTemplateAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTemplateAttributeResponse({}));
  }

  async describeMetricRuleTemplateAttribute(request: DescribeMetricRuleTemplateAttributeRequest): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateAttributeWithOptions(request, runtime);
  }

  async describeMetricRuleTemplateListWithOptions(request: DescribeMetricRuleTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.history)) {
      query["History"] = request.history;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTemplateList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTemplateListResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTemplateListResponse({}));
  }

  async describeMetricRuleTemplateList(request: DescribeMetricRuleTemplateListRequest): Promise<DescribeMetricRuleTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateListWithOptions(request, runtime);
  }

  async describeMetricTopWithOptions(request: DescribeMetricTopRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricTopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.orderDesc)) {
      query["OrderDesc"] = request.orderDesc;
    }

    if (!Util.isUnset(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricTop",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricTopResponse>(await this.callApi(params, req, runtime), new DescribeMetricTopResponse({}));
  }

  async describeMetricTop(request: DescribeMetricTopRequest): Promise<DescribeMetricTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricTopWithOptions(request, runtime);
  }

  async describeMonitorGroupCategoriesWithOptions(request: DescribeMonitorGroupCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupCategoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupCategories",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupCategoriesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupCategoriesResponse({}));
  }

  async describeMonitorGroupCategories(request: DescribeMonitorGroupCategoriesRequest): Promise<DescribeMonitorGroupCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupCategoriesWithOptions(request, runtime);
  }

  async describeMonitorGroupDynamicRulesWithOptions(request: DescribeMonitorGroupDynamicRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupDynamicRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupDynamicRulesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupDynamicRulesResponse({}));
  }

  async describeMonitorGroupDynamicRules(request: DescribeMonitorGroupDynamicRulesRequest): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupDynamicRulesWithOptions(request, runtime);
  }

  async describeMonitorGroupInstanceAttributeWithOptions(request: DescribeMonitorGroupInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupInstanceAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupInstanceAttributeResponse({}));
  }

  async describeMonitorGroupInstanceAttribute(request: DescribeMonitorGroupInstanceAttributeRequest): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstanceAttributeWithOptions(request, runtime);
  }

  async describeMonitorGroupInstancesWithOptions(request: DescribeMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupInstancesResponse({}));
  }

  async describeMonitorGroupInstances(request: DescribeMonitorGroupInstancesRequest): Promise<DescribeMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstancesWithOptions(request, runtime);
  }

  async describeMonitorGroupNotifyPolicyListWithOptions(request: DescribeMonitorGroupNotifyPolicyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupNotifyPolicyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupNotifyPolicyListResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupNotifyPolicyListResponse({}));
  }

  async describeMonitorGroupNotifyPolicyList(request: DescribeMonitorGroupNotifyPolicyListRequest): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupNotifyPolicyListWithOptions(request, runtime);
  }

  async describeMonitorGroupsWithOptions(request: DescribeMonitorGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    if (!Util.isUnset(request.groupFounderTagKey)) {
      query["GroupFounderTagKey"] = request.groupFounderTagKey;
    }

    if (!Util.isUnset(request.groupFounderTagValue)) {
      query["GroupFounderTagValue"] = request.groupFounderTagValue;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.includeTemplateHistory)) {
      query["IncludeTemplateHistory"] = request.includeTemplateHistory;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.selectContactGroups)) {
      query["SelectContactGroups"] = request.selectContactGroups;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupsResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupsResponse({}));
  }

  async describeMonitorGroups(request: DescribeMonitorGroupsRequest): Promise<DescribeMonitorGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupsWithOptions(request, runtime);
  }

  async describeMonitorResourceQuotaAttributeWithOptions(request: DescribeMonitorResourceQuotaAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.showUsed)) {
      query["ShowUsed"] = request.showUsed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorResourceQuotaAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorResourceQuotaAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMonitorResourceQuotaAttributeResponse({}));
  }

  async describeMonitorResourceQuotaAttribute(request: DescribeMonitorResourceQuotaAttributeRequest): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorResourceQuotaAttributeWithOptions(request, runtime);
  }

  async describeMonitoringAgentAccessKeyWithOptions(request: DescribeMonitoringAgentAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentAccessKey",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentAccessKeyResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentAccessKeyResponse({}));
  }

  async describeMonitoringAgentAccessKey(request: DescribeMonitoringAgentAccessKeyRequest): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentAccessKeyWithOptions(request, runtime);
  }

  async describeMonitoringAgentConfigWithOptions(request: DescribeMonitoringAgentConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentConfigResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentConfigResponse({}));
  }

  async describeMonitoringAgentConfig(request: DescribeMonitoringAgentConfigRequest): Promise<DescribeMonitoringAgentConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentConfigWithOptions(request, runtime);
  }

  async describeMonitoringAgentHostsWithOptions(request: DescribeMonitoringAgentHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunHost)) {
      query["AliyunHost"] = request.aliyunHost;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentHosts",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentHostsResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentHostsResponse({}));
  }

  async describeMonitoringAgentHosts(request: DescribeMonitoringAgentHostsRequest): Promise<DescribeMonitoringAgentHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentHostsWithOptions(request, runtime);
  }

  async describeMonitoringAgentProcessesWithOptions(request: DescribeMonitoringAgentProcessesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentProcessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentProcesses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentProcessesResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentProcessesResponse({}));
  }

  async describeMonitoringAgentProcesses(request: DescribeMonitoringAgentProcessesRequest): Promise<DescribeMonitoringAgentProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentProcessesWithOptions(request, runtime);
  }

  async describeMonitoringAgentStatusesWithOptions(request: DescribeMonitoringAgentStatusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentStatusesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentStatuses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentStatusesResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentStatusesResponse({}));
  }

  async describeMonitoringAgentStatuses(request: DescribeMonitoringAgentStatusesRequest): Promise<DescribeMonitoringAgentStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentStatusesWithOptions(request, runtime);
  }

  async describeMonitoringConfigWithOptions(request: DescribeMonitoringConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringConfigResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringConfigResponse({}));
  }

  async describeMonitoringConfig(request: DescribeMonitoringConfigRequest): Promise<DescribeMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringConfigWithOptions(request, runtime);
  }

  async describeProductResourceTagKeyListWithOptions(request: DescribeProductResourceTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductResourceTagKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductResourceTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductResourceTagKeyListResponse>(await this.callApi(params, req, runtime), new DescribeProductResourceTagKeyListResponse({}));
  }

  async describeProductResourceTagKeyList(request: DescribeProductResourceTagKeyListRequest): Promise<DescribeProductResourceTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductResourceTagKeyListWithOptions(request, runtime);
  }

  async describeProductsOfActiveMetricRuleWithOptions(request: DescribeProductsOfActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeProductsOfActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductsOfActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new DescribeProductsOfActiveMetricRuleResponse({}));
  }

  async describeProductsOfActiveMetricRule(request: DescribeProductsOfActiveMetricRuleRequest): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductsOfActiveMetricRuleWithOptions(request, runtime);
  }

  async describeProjectMetaWithOptions(request: DescribeProjectMetaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectMeta",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectMetaResponse>(await this.callApi(params, req, runtime), new DescribeProjectMetaResponse({}));
  }

  async describeProjectMeta(request: DescribeProjectMetaRequest): Promise<DescribeProjectMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectMetaWithOptions(request, runtime);
  }

  async describeSiteInstantMonitorLogWithOptions(request: DescribeSiteInstantMonitorLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteInstantMonitorLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteInstantMonitorLog",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteInstantMonitorLogResponse>(await this.callApi(params, req, runtime), new DescribeSiteInstantMonitorLogResponse({}));
  }

  async describeSiteInstantMonitorLog(request: DescribeSiteInstantMonitorLogRequest): Promise<DescribeSiteInstantMonitorLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteInstantMonitorLogWithOptions(request, runtime);
  }

  async describeSiteMonitorAttributeWithOptions(request: DescribeSiteMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeAlert)) {
      query["IncludeAlert"] = request.includeAlert;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorAttributeResponse({}));
  }

  async describeSiteMonitorAttribute(request: DescribeSiteMonitorAttributeRequest): Promise<DescribeSiteMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorAttributeWithOptions(request, runtime);
  }

  async describeSiteMonitorDataWithOptions(request: DescribeSiteMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorDataResponse({}));
  }

  async describeSiteMonitorData(request: DescribeSiteMonitorDataRequest): Promise<DescribeSiteMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorDataWithOptions(request, runtime);
  }

  async describeSiteMonitorListWithOptions(request: DescribeSiteMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorListResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorListResponse({}));
  }

  async describeSiteMonitorList(request: DescribeSiteMonitorListRequest): Promise<DescribeSiteMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorListWithOptions(request, runtime);
  }

  async describeSiteMonitorLogWithOptions(request: DescribeSiteMonitorLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorLog",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorLogResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorLogResponse({}));
  }

  async describeSiteMonitorLog(request: DescribeSiteMonitorLogRequest): Promise<DescribeSiteMonitorLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorLogWithOptions(request, runtime);
  }

  async describeSiteMonitorQuotaWithOptions(request: DescribeSiteMonitorQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorQuota",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorQuotaResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorQuotaResponse({}));
  }

  async describeSiteMonitorQuota(request: DescribeSiteMonitorQuotaRequest): Promise<DescribeSiteMonitorQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorQuotaWithOptions(request, runtime);
  }

  async describeSiteMonitorStatisticsWithOptions(request: DescribeSiteMonitorStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorStatistics",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorStatisticsResponse({}));
  }

  async describeSiteMonitorStatistics(request: DescribeSiteMonitorStatisticsRequest): Promise<DescribeSiteMonitorStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorStatisticsWithOptions(request, runtime);
  }

  async describeSystemEventAttributeWithOptions(request: DescribeSystemEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
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

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventAttributeResponse({}));
  }

  async describeSystemEventAttribute(request: DescribeSystemEventAttributeRequest): Promise<DescribeSystemEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventAttributeWithOptions(request, runtime);
  }

  async describeSystemEventCountWithOptions(request: DescribeSystemEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventCountResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventCountResponse({}));
  }

  async describeSystemEventCount(request: DescribeSystemEventCountRequest): Promise<DescribeSystemEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventCountWithOptions(request, runtime);
  }

  async describeSystemEventHistogramWithOptions(request: DescribeSystemEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventHistogramResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventHistogramResponse({}));
  }

  async describeSystemEventHistogram(request: DescribeSystemEventHistogramRequest): Promise<DescribeSystemEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventHistogramWithOptions(request, runtime);
  }

  async describeTagKeyListWithOptions(request: DescribeTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagKeyListResponse>(await this.callApi(params, req, runtime), new DescribeTagKeyListResponse({}));
  }

  async describeTagKeyList(request: DescribeTagKeyListRequest): Promise<DescribeTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeyListWithOptions(request, runtime);
  }

  async describeTagValueListWithOptions(request: DescribeTagValueListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagValueListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagValueList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagValueListResponse>(await this.callApi(params, req, runtime), new DescribeTagValueListResponse({}));
  }

  async describeTagValueList(request: DescribeTagValueListRequest): Promise<DescribeTagValueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagValueListWithOptions(request, runtime);
  }

  async describeUnhealthyHostAvailabilityWithOptions(request: DescribeUnhealthyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnhealthyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnhealthyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DescribeUnhealthyHostAvailabilityResponse({}));
  }

  async describeUnhealthyHostAvailability(request: DescribeUnhealthyHostAvailabilityRequest): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnhealthyHostAvailabilityWithOptions(request, runtime);
  }

  async disableActiveMetricRuleWithOptions(request: DisableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new DisableActiveMetricRuleResponse({}));
  }

  async disableActiveMetricRule(request: DisableActiveMetricRuleRequest): Promise<DisableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableActiveMetricRuleWithOptions(request, runtime);
  }

  async disableEventRulesWithOptions(request: DisableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableEventRulesResponse>(await this.callApi(params, req, runtime), new DisableEventRulesResponse({}));
  }

  async disableEventRules(request: DisableEventRulesRequest): Promise<DisableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableEventRulesWithOptions(request, runtime);
  }

  async disableHostAvailabilityWithOptions(request: DisableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DisableHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DisableHostAvailabilityResponse({}));
  }

  async disableHostAvailability(request: DisableHostAvailabilityRequest): Promise<DisableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableHostAvailabilityWithOptions(request, runtime);
  }

  async disableMetricRulesWithOptions(request: DisableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableMetricRulesResponse>(await this.callApi(params, req, runtime), new DisableMetricRulesResponse({}));
  }

  async disableMetricRules(request: DisableMetricRulesRequest): Promise<DisableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMetricRulesWithOptions(request, runtime);
  }

  async disableSiteMonitorsWithOptions(request: DisableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DisableSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new DisableSiteMonitorsResponse({}));
  }

  async disableSiteMonitors(request: DisableSiteMonitorsRequest): Promise<DisableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSiteMonitorsWithOptions(request, runtime);
  }

  async enableActiveMetricRuleWithOptions(request: EnableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new EnableActiveMetricRuleResponse({}));
  }

  async enableActiveMetricRule(request: EnableActiveMetricRuleRequest): Promise<EnableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableActiveMetricRuleWithOptions(request, runtime);
  }

  async enableEventRulesWithOptions(request: EnableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableEventRulesResponse>(await this.callApi(params, req, runtime), new EnableEventRulesResponse({}));
  }

  async enableEventRules(request: EnableEventRulesRequest): Promise<EnableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableEventRulesWithOptions(request, runtime);
  }

  async enableHostAvailabilityWithOptions(request: EnableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<EnableHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new EnableHostAvailabilityResponse({}));
  }

  async enableHostAvailability(request: EnableHostAvailabilityRequest): Promise<EnableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHostAvailabilityWithOptions(request, runtime);
  }

  async enableMetricRulesWithOptions(request: EnableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableMetricRulesResponse>(await this.callApi(params, req, runtime), new EnableMetricRulesResponse({}));
  }

  async enableMetricRules(request: EnableMetricRulesRequest): Promise<EnableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMetricRulesWithOptions(request, runtime);
  }

  async enableSiteMonitorsWithOptions(request: EnableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<EnableSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new EnableSiteMonitorsResponse({}));
  }

  async enableSiteMonitors(request: EnableSiteMonitorsRequest): Promise<EnableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSiteMonitorsWithOptions(request, runtime);
  }

  async installMonitoringAgentWithOptions(request: InstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<InstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.installCommand)) {
      query["InstallCommand"] = request.installCommand;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new InstallMonitoringAgentResponse({}));
  }

  async installMonitoringAgent(request: InstallMonitoringAgentRequest): Promise<InstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installMonitoringAgentWithOptions(request, runtime);
  }

  async modifyGroupMonitoringAgentProcessWithOptions(request: ModifyGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new ModifyGroupMonitoringAgentProcessResponse({}));
  }

  async modifyGroupMonitoringAgentProcess(request: ModifyGroupMonitoringAgentProcessRequest): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async modifyHostAvailabilityWithOptions(request: ModifyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!Util.isUnset($tea.toMap(request.alertConfig))) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset($tea.toMap(request.taskOption))) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new ModifyHostAvailabilityResponse({}));
  }

  async modifyHostAvailability(request: ModifyHostAvailabilityRequest): Promise<ModifyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostAvailabilityWithOptions(request, runtime);
  }

  async modifyHostInfoWithOptions(request: ModifyHostInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHostInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHostInfoResponse>(await this.callApi(params, req, runtime), new ModifyHostInfoResponse({}));
  }

  async modifyHostInfo(request: ModifyHostInfoRequest): Promise<ModifyHostInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostInfoWithOptions(request, runtime);
  }

  async modifyMetricRuleTemplateWithOptions(request: ModifyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.restVersion)) {
      query["RestVersion"] = request.restVersion;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new ModifyMetricRuleTemplateResponse({}));
  }

  async modifyMetricRuleTemplate(request: ModifyMetricRuleTemplateRequest): Promise<ModifyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMetricRuleTemplateWithOptions(request, runtime);
  }

  async modifyMonitorGroupWithOptions(request: ModifyMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMonitorGroupResponse>(await this.callApi(params, req, runtime), new ModifyMonitorGroupResponse({}));
  }

  async modifyMonitorGroup(request: ModifyMonitorGroupRequest): Promise<ModifyMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupWithOptions(request, runtime);
  }

  async modifyMonitorGroupInstancesWithOptions(request: ModifyMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new ModifyMonitorGroupInstancesResponse({}));
  }

  async modifyMonitorGroupInstances(request: ModifyMonitorGroupInstancesRequest): Promise<ModifyMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupInstancesWithOptions(request, runtime);
  }

  async modifySiteMonitorWithOptions(request: ModifySiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifySiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.intervalUnit)) {
      query["IntervalUnit"] = request.intervalUnit;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySiteMonitorResponse>(await this.callApi(params, req, runtime), new ModifySiteMonitorResponse({}));
  }

  async modifySiteMonitor(request: ModifySiteMonitorRequest): Promise<ModifySiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySiteMonitorWithOptions(request, runtime);
  }

  async openCmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenCmsService",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCmsServiceResponse>(await this.callApi(params, req, runtime), new OpenCmsServiceResponse({}));
  }

  async openCmsService(): Promise<OpenCmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCmsServiceWithOptions(runtime);
  }

  async putContactWithOptions(request: PutContactRequest, runtime: $Util.RuntimeOptions): Promise<PutContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset($tea.toMap(request.channels))) {
      query["Channels"] = request.channels;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutContact",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutContactResponse>(await this.callApi(params, req, runtime), new PutContactResponse({}));
  }

  async putContact(request: PutContactRequest): Promise<PutContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactWithOptions(request, runtime);
  }

  async putContactGroupWithOptions(request: PutContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<PutContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactNames)) {
      query["ContactNames"] = request.contactNames;
    }

    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.enableSubscribed)) {
      query["EnableSubscribed"] = request.enableSubscribed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutContactGroupResponse>(await this.callApi(params, req, runtime), new PutContactGroupResponse({}));
  }

  async putContactGroup(request: PutContactGroupRequest): Promise<PutContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactGroupWithOptions(request, runtime);
  }

  async putCustomEventWithOptions(request: PutCustomEventRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventInfo)) {
      query["EventInfo"] = request.eventInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomEventResponse>(await this.callApi(params, req, runtime), new PutCustomEventResponse({}));
  }

  async putCustomEvent(request: PutCustomEventRequest): Promise<PutCustomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventWithOptions(request, runtime);
  }

  async putCustomEventRuleWithOptions(request: PutCustomEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomEventRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomEventRuleResponse>(await this.callApi(params, req, runtime), new PutCustomEventRuleResponse({}));
  }

  async putCustomEventRule(request: PutCustomEventRuleRequest): Promise<PutCustomEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventRuleWithOptions(request, runtime);
  }

  async putCustomMetricWithOptions(request: PutCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomMetric",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomMetricResponse>(await this.callApi(params, req, runtime), new PutCustomMetricResponse({}));
  }

  async putCustomMetric(request: PutCustomMetricRequest): Promise<PutCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricWithOptions(request, runtime);
  }

  async putCustomMetricRuleWithOptions(request: PutCustomMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomMetricRuleResponse>(await this.callApi(params, req, runtime), new PutCustomMetricRuleResponse({}));
  }

  async putCustomMetricRule(request: PutCustomMetricRuleRequest): Promise<PutCustomMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricRuleWithOptions(request, runtime);
  }

  async putEventRuleWithOptions(request: PutEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventPattern)) {
      query["EventPattern"] = request.eventPattern;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEventRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEventRuleResponse>(await this.callApi(params, req, runtime), new PutEventRuleResponse({}));
  }

  async putEventRule(request: PutEventRuleRequest): Promise<PutEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleWithOptions(request, runtime);
  }

  async putEventRuleTargetsWithOptions(request: PutEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactParameters)) {
      query["ContactParameters"] = request.contactParameters;
    }

    if (!Util.isUnset(request.fcParameters)) {
      query["FcParameters"] = request.fcParameters;
    }

    if (!Util.isUnset(request.mnsParameters)) {
      query["MnsParameters"] = request.mnsParameters;
    }

    if (!Util.isUnset(request.openApiParameters)) {
      query["OpenApiParameters"] = request.openApiParameters;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.slsParameters)) {
      query["SlsParameters"] = request.slsParameters;
    }

    if (!Util.isUnset(request.webhookParameters)) {
      query["WebhookParameters"] = request.webhookParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new PutEventRuleTargetsResponse({}));
  }

  async putEventRuleTargets(request: PutEventRuleTargetsRequest): Promise<PutEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleTargetsWithOptions(request, runtime);
  }

  async putExporterOutputWithOptions(request: PutExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configJson)) {
      query["ConfigJson"] = request.configJson;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.destName)) {
      query["DestName"] = request.destName;
    }

    if (!Util.isUnset(request.destType)) {
      query["DestType"] = request.destType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutExporterOutputResponse>(await this.callApi(params, req, runtime), new PutExporterOutputResponse({}));
  }

  async putExporterOutput(request: PutExporterOutputRequest): Promise<PutExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterOutputWithOptions(request, runtime);
  }

  async putExporterRuleWithOptions(request: PutExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.dstNames)) {
      query["DstNames"] = request.dstNames;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.targetWindows)) {
      query["TargetWindows"] = request.targetWindows;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutExporterRuleResponse>(await this.callApi(params, req, runtime), new PutExporterRuleResponse({}));
  }

  async putExporterRule(request: PutExporterRuleRequest): Promise<PutExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterRuleWithOptions(request, runtime);
  }

  async putGroupMetricRuleWithOptions(request: PutGroupMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutGroupMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.extraDimensionJson)) {
      query["ExtraDimensionJson"] = request.extraDimensionJson;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!Util.isUnset(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    if (!Util.isUnset($tea.toMap(request.escalations))) {
      query["Escalations"] = request.escalations;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutGroupMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutGroupMetricRuleResponse>(await this.callApi(params, req, runtime), new PutGroupMetricRuleResponse({}));
  }

  async putGroupMetricRule(request: PutGroupMetricRuleRequest): Promise<PutGroupMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putGroupMetricRuleWithOptions(request, runtime);
  }

  async putHybridMonitorMetricDataWithOptions(request: PutHybridMonitorMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<PutHybridMonitorMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutHybridMonitorMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutHybridMonitorMetricDataResponse>(await this.callApi(params, req, runtime), new PutHybridMonitorMetricDataResponse({}));
  }

  async putHybridMonitorMetricData(request: PutHybridMonitorMetricDataRequest): Promise<PutHybridMonitorMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putHybridMonitorMetricDataWithOptions(request, runtime);
  }

  async putLogMonitorWithOptions(request: PutLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<PutLogMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregates)) {
      query["Aggregates"] = request.aggregates;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupbys)) {
      query["Groupbys"] = request.groupbys;
    }

    if (!Util.isUnset(request.logId)) {
      query["LogId"] = request.logId;
    }

    if (!Util.isUnset(request.metricExpress)) {
      query["MetricExpress"] = request.metricExpress;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.slsLogstore)) {
      query["SlsLogstore"] = request.slsLogstore;
    }

    if (!Util.isUnset(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    if (!Util.isUnset(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    if (!Util.isUnset(request.tumblingwindows)) {
      query["Tumblingwindows"] = request.tumblingwindows;
    }

    if (!Util.isUnset(request.unit)) {
      query["Unit"] = request.unit;
    }

    if (!Util.isUnset(request.valueFilter)) {
      query["ValueFilter"] = request.valueFilter;
    }

    if (!Util.isUnset(request.valueFilterRelation)) {
      query["ValueFilterRelation"] = request.valueFilterRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutLogMonitorResponse>(await this.callApi(params, req, runtime), new PutLogMonitorResponse({}));
  }

  async putLogMonitor(request: PutLogMonitorRequest): Promise<PutLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putLogMonitorWithOptions(request, runtime);
  }

  async putMetricRuleTargetsWithOptions(request: PutMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new PutMetricRuleTargetsResponse({}));
  }

  async putMetricRuleTargets(request: PutMetricRuleTargetsRequest): Promise<PutMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMetricRuleTargetsWithOptions(request, runtime);
  }

  async putMonitorGroupDynamicRuleWithOptions(request: PutMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupRules)) {
      query["GroupRules"] = request.groupRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new PutMonitorGroupDynamicRuleResponse({}));
  }

  async putMonitorGroupDynamicRule(request: PutMonitorGroupDynamicRuleRequest): Promise<PutMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async putMonitoringConfigWithOptions(request: PutMonitoringConfigRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitoringConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoInstall)) {
      query["AutoInstall"] = request.autoInstall;
    }

    if (!Util.isUnset(request.enableInstallAgentNewECS)) {
      query["EnableInstallAgentNewECS"] = request.enableInstallAgentNewECS;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMonitoringConfigResponse>(await this.callApi(params, req, runtime), new PutMonitoringConfigResponse({}));
  }

  async putMonitoringConfig(request: PutMonitoringConfigRequest): Promise<PutMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitoringConfigWithOptions(request, runtime);
  }

  async putResourceMetricRuleWithOptions(request: PutResourceMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!Util.isUnset(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    if (!Util.isUnset($tea.toMap(request.escalations))) {
      query["Escalations"] = request.escalations;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutResourceMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutResourceMetricRuleResponse>(await this.callApi(params, req, runtime), new PutResourceMetricRuleResponse({}));
  }

  async putResourceMetricRule(request: PutResourceMetricRuleRequest): Promise<PutResourceMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRuleWithOptions(request, runtime);
  }

  async putResourceMetricRulesWithOptions(request: PutResourceMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutResourceMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutResourceMetricRulesResponse>(await this.callApi(params, req, runtime), new PutResourceMetricRulesResponse({}));
  }

  async putResourceMetricRules(request: PutResourceMetricRulesRequest): Promise<PutResourceMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRulesWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagsResponse>(await this.callApi(params, req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async sendDryRunSystemEventWithOptions(request: SendDryRunSystemEventRequest, runtime: $Util.RuntimeOptions): Promise<SendDryRunSystemEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventContent)) {
      query["EventContent"] = request.eventContent;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendDryRunSystemEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendDryRunSystemEventResponse>(await this.callApi(params, req, runtime), new SendDryRunSystemEventResponse({}));
  }

  async sendDryRunSystemEvent(request: SendDryRunSystemEventRequest): Promise<SendDryRunSystemEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendDryRunSystemEventWithOptions(request, runtime);
  }

  async uninstallMonitoringAgentWithOptions(request: UninstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<UninstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new UninstallMonitoringAgentResponse({}));
  }

  async uninstallMonitoringAgent(request: UninstallMonitoringAgentRequest): Promise<UninstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallMonitoringAgentWithOptions(request, runtime);
  }

}
