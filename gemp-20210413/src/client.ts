// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ProblemLevelGroupValue extends $tea.Model {
  childRuleRelation?: number;
  matchCount?: number;
  timeWindow?: number;
  timeWindowUnit?: string;
  enableUpgrade?: boolean;
  upgradeTimeWindow?: number;
  upgradeTimeWindowUnit?: string;
  static names(): { [key: string]: string } {
    return {
      childRuleRelation: 'childRuleRelation',
      matchCount: 'matchCount',
      timeWindow: 'timeWindow',
      timeWindowUnit: 'timeWindowUnit',
      enableUpgrade: 'enableUpgrade',
      upgradeTimeWindow: 'upgradeTimeWindow',
      upgradeTimeWindowUnit: 'upgradeTimeWindowUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childRuleRelation: 'number',
      matchCount: 'number',
      timeWindow: 'number',
      timeWindowUnit: 'string',
      enableUpgrade: 'boolean',
      upgradeTimeWindow: 'number',
      upgradeTimeWindowUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataProblemLevelGroupValue extends $tea.Model {
  childRuleRelation?: number;
  matchCount?: number;
  timeWindow?: number;
  timeWindowUnit?: string;
  enableUpgrade?: boolean;
  upgradeTimeWindow?: number;
  upgradeTimeWindowUnit?: string;
  static names(): { [key: string]: string } {
    return {
      childRuleRelation: 'childRuleRelation',
      matchCount: 'matchCount',
      timeWindow: 'timeWindow',
      timeWindowUnit: 'timeWindowUnit',
      enableUpgrade: 'enableUpgrade',
      upgradeTimeWindow: 'upgradeTimeWindow',
      upgradeTimeWindowUnit: 'upgradeTimeWindowUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childRuleRelation: 'number',
      matchCount: 'number',
      timeWindow: 'number',
      timeWindowUnit: 'string',
      enableUpgrade: 'boolean',
      upgradeTimeWindow: 'number',
      upgradeTimeWindowUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataValue extends $tea.Model {
  /**
   * @example
   * SMS
   */
  code?: string;
  description?: string;
  configDescription?: string;
  /**
   * @example
   * PROBLEM_REASON_DISASTER
   */
  configCode?: string;
  /**
   * @example
   * PROBLEM_REASON
   */
  parentCode?: string;
  /**
   * @example
   * 2
   */
  configKey?: string;
  configValue?: string;
  /**
   * @example
   * true
   */
  requirement?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      configDescription: 'configDescription',
      configCode: 'configCode',
      parentCode: 'parentCode',
      configKey: 'configKey',
      configValue: 'configValue',
      requirement: 'requirement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      configDescription: 'string',
      configCode: 'string',
      parentCode: 'string',
      configKey: 'string',
      configValue: 'string',
      requirement: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProblemServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  problemId?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      problemId: 'problemId',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemId: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProblemServiceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5AD6E6BC-2582-4E0E-832D-52CB1B922253
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class AddProblemServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddProblemServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddProblemServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  data?: BillingStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BillingStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BillingStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BillingStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProblemRequest extends $tea.Model {
  /**
   * @example
   * 取消原因
   */
  cancelReason?: number;
  /**
   * @example
   * 原因描述
   */
  cancelReasonDescription?: string;
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 312
   */
  problemId?: number;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: number;
  static names(): { [key: string]: string } {
    return {
      cancelReason: 'cancelReason',
      cancelReasonDescription: 'cancelReasonDescription',
      clientToken: 'clientToken',
      problemId: 'problemId',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelReason: 'number',
      cancelReasonDescription: 'string',
      clientToken: 'string',
      problemId: 'number',
      problemNotifyType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B81E84B5-8FD1-45F3-969A-B5067AADCFFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class CancelProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckWebhookRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=XXX
   */
  webhook?: string;
  /**
   * @example
   * DING_GROUP
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      webhook: 'webhook',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      webhook: 'string',
      webhookType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckWebhookResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class CheckWebhookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 101
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class ConfirmIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * 6b404f14-77d1-4b53-a1a1-30a58bREQUEST
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc2322424
   */
  escalationPlanDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name123
   */
  escalationPlanName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  escalationPlanRules?: CreateEscalationPlanRequestEscalationPlanRules[];
  /**
   * @remarks
   * This parameter is required.
   */
  escalationPlanScopeObjects?: CreateEscalationPlanRequestEscalationPlanScopeObjects[];
  isGlobal?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanDescription: 'escalationPlanDescription',
      escalationPlanName: 'escalationPlanName',
      escalationPlanRules: 'escalationPlanRules',
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      isGlobal: 'isGlobal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanDescription: 'string',
      escalationPlanName: 'string',
      escalationPlanRules: { 'type': 'array', 'itemType': CreateEscalationPlanRequestEscalationPlanRules },
      escalationPlanScopeObjects: { 'type': 'array', 'itemType': CreateEscalationPlanRequestEscalationPlanScopeObjects },
      isGlobal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateEscalationPlanResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC21925D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateEscalationPlanResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentRequest extends $tea.Model {
  /**
   * @example
   * 12312
   */
  assignUserId?: number;
  channels?: string[];
  /**
   * @example
   * 2b63cdef-7ac3-4892-a76d-0f3389ef729f
   */
  clientToken?: string;
  /**
   * @example
   * LOW
   */
  effect?: string;
  incidentDescription?: string;
  /**
   * @example
   * P1
   */
  incidentLevel?: string;
  incidentTitle?: string;
  /**
   * @example
   * 12312
   */
  relatedServiceId?: number;
  /**
   * @remarks
   * 12000
   * 
   * @example
   * 12312
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      assignUserId: 'assignUserId',
      channels: 'channels',
      clientToken: 'clientToken',
      effect: 'effect',
      incidentDescription: 'incidentDescription',
      incidentLevel: 'incidentLevel',
      incidentTitle: 'incidentTitle',
      relatedServiceId: 'relatedServiceId',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignUserId: 'number',
      channels: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      effect: 'string',
      incidentDescription: 'string',
      incidentLevel: 'string',
      incidentTitle: 'string',
      relatedServiceId: 'number',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   */
  data?: CreateIncidentResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateIncidentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentSubtotalRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12312
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentSubtotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateIncidentSubtotalResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateIncidentSubtotalResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentSubtotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIncidentSubtotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIncidentSubtotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  monitorSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      monitorSourceId: 'monitorSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      monitorSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateIntegrationConfigResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateIntegrationConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemRequest extends $tea.Model {
  affectServiceIds?: number[];
  /**
   * @example
   * E789D869-DB13-4913-BAA8-A1F56F94B94D
   */
  clientToken?: string;
  /**
   * @example
   * 2020-10-02 00:00:00
   */
  discoverTime?: string;
  /**
   * @example
   * 123221
   */
  incidentId?: number;
  /**
   * @example
   * 32121
   */
  mainHandlerId?: number;
  /**
   * @example
   * 初步原因
   */
  preliminaryReason?: string;
  /**
   * @example
   * P2
   */
  problemLevel?: string;
  /**
   * @example
   * 故障A
   */
  problemName?: string;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: string;
  /**
   * @example
   * HANDLING
   */
  problemStatus?: string;
  /**
   * @example
   * 进展摘要
   */
  progressSummary?: string;
  /**
   * @example
   * 343
   */
  progressSummaryRichTextId?: number;
  /**
   * @example
   * 2020-10-02 00:00:00
   */
  recoveryTime?: string;
  /**
   * @example
   * 123122
   */
  relatedServiceId?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      affectServiceIds: 'affectServiceIds',
      clientToken: 'clientToken',
      discoverTime: 'discoverTime',
      incidentId: 'incidentId',
      mainHandlerId: 'mainHandlerId',
      preliminaryReason: 'preliminaryReason',
      problemLevel: 'problemLevel',
      problemName: 'problemName',
      problemNotifyType: 'problemNotifyType',
      problemStatus: 'problemStatus',
      progressSummary: 'progressSummary',
      progressSummaryRichTextId: 'progressSummaryRichTextId',
      recoveryTime: 'recoveryTime',
      relatedServiceId: 'relatedServiceId',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectServiceIds: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      discoverTime: 'string',
      incidentId: 'number',
      mainHandlerId: 'number',
      preliminaryReason: 'string',
      problemLevel: 'string',
      problemName: 'string',
      problemNotifyType: 'string',
      problemStatus: 'string',
      progressSummary: 'string',
      progressSummaryRichTextId: 'number',
      recoveryTime: 'string',
      relatedServiceId: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateProblemResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E789D869-DB13-4933-BAA8-A1F56F94B94D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemEffectionServiceRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * e0b6735e-1a04-4d6b-a625-d2350612492c
   */
  clientToken?: string;
  /**
   * @example
   * erdwcdc
   */
  description?: string;
  /**
   * @example
   * P2
   */
  level?: string;
  pictureUrl?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 150000000
   */
  problemId?: number;
  /**
   * @example
   * 170000000
   */
  serviceId?: number;
  /**
   * @example
   * UN_RECOVERED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      level: 'level',
      pictureUrl: 'pictureUrl',
      problemId: 'problemId',
      serviceId: 'serviceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      level: 'string',
      pictureUrl: { 'type': 'array', 'itemType': 'string' },
      problemId: 'number',
      serviceId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemEffectionServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateProblemEffectionServiceResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemEffectionServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemEffectionServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemEffectionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemMeasureRequest extends $tea.Model {
  /**
   * @example
   * 标准
   */
  checkStandard?: string;
  /**
   * @example
   * 123
   */
  checkUserId?: number;
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 措施内容
   */
  content?: string;
  /**
   * @example
   * 123
   */
  directorId?: number;
  /**
   * @example
   * 2020-01-23 00:00:00
   */
  planFinishTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23
   */
  problemId?: number;
  /**
   * @example
   * 123
   */
  stalkerId?: number;
  /**
   * @example
   * IMPROVED
   */
  status?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkStandard: 'checkStandard',
      checkUserId: 'checkUserId',
      clientToken: 'clientToken',
      content: 'content',
      directorId: 'directorId',
      planFinishTime: 'planFinishTime',
      problemId: 'problemId',
      stalkerId: 'stalkerId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStandard: 'string',
      checkUserId: 'number',
      clientToken: 'string',
      content: 'string',
      directorId: 'number',
      planFinishTime: 'string',
      problemId: 'number',
      stalkerId: 'number',
      status: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemMeasureResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateProblemMeasureResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemMeasureResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemMeasureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemMeasureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemSubtotalRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3814
   */
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1231
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemSubtotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * object
   */
  data?: CreateProblemSubtotalResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd381A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemSubtotalResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemSubtotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemSubtotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemSubtotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelineRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378FTOKENA11
   */
  clientToken?: string;
  /**
   * @example
   * test123
   */
  content?: string;
  /**
   * @example
   * NodeTest
   */
  keyNode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102
   */
  problemId?: number;
  /**
   * @example
   * 2021-06-06 12:11:22
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      content: 'content',
      keyNode: 'keyNode',
      problemId: 'problemId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      keyNode: 'string',
      problemId: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelineResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateProblemTimelineResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemTimelineResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelinesRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * e0b6735e-1a04-4d6b-a625-d2350612492c
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 423
   */
  problemId?: number;
  /**
   * @example
   * 2018-01-01 18:01，谁做了什么事情\n2018-01-01 18:01，谁做了什么事情\n2018-01-01 18:01，谁做了什么事情
   */
  timelineNodes?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
      timelineNodes: 'timelineNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
      timelineNodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateProblemTimelinesResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProblemTimelinesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProblemTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProblemTimelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRichTextRequest extends $tea.Model {
  /**
   * @example
   * 12221
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT 事件 ALERT告警 PROBLEM故障
   */
  instanceType?: string;
  /**
   * @example
   * 这是一个富文本
   */
  richText?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      richText: 'richText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceType: 'string',
      richText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRichTextResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateRichTextResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateRichTextResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRichTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRichTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 65
   */
  assignObjectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICEGROUP
   */
  assignObjectType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AND
   */
  childRuleRelation?: string;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @example
   * false
   */
  enableStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P1
   */
  incidentLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  matchCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: ProblemLevelGroupValue };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  relatedServiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  routeChildRules?: CreateRouteRuleRequestRouteChildRules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCIDENT
   */
  routeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是一个规则
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeWindow?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MINUTE
   */
  timeWindowUnit?: string;
  static names(): { [key: string]: string } {
    return {
      assignObjectId: 'assignObjectId',
      assignObjectType: 'assignObjectType',
      childRuleRelation: 'childRuleRelation',
      clientToken: 'clientToken',
      convergenceFields: 'convergenceFields',
      convergenceType: 'convergenceType',
      coverageProblemLevels: 'coverageProblemLevels',
      effection: 'effection',
      enableStatus: 'enableStatus',
      incidentLevel: 'incidentLevel',
      matchCount: 'matchCount',
      notifyChannels: 'notifyChannels',
      problemEffectionServices: 'problemEffectionServices',
      problemLevelGroup: 'problemLevelGroup',
      relatedServiceId: 'relatedServiceId',
      routeChildRules: 'routeChildRules',
      routeType: 'routeType',
      ruleName: 'ruleName',
      timeWindow: 'timeWindow',
      timeWindowUnit: 'timeWindowUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignObjectId: 'number',
      assignObjectType: 'string',
      childRuleRelation: 'string',
      clientToken: 'string',
      convergenceFields: { 'type': 'array', 'itemType': 'string' },
      convergenceType: 'number',
      coverageProblemLevels: { 'type': 'array', 'itemType': 'string' },
      effection: 'string',
      enableStatus: 'string',
      incidentLevel: 'string',
      matchCount: 'number',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      problemEffectionServices: { 'type': 'array', 'itemType': 'number' },
      problemLevelGroup: { 'type': 'map', 'keyType': 'string', 'valueType': ProblemLevelGroupValue },
      relatedServiceId: 'number',
      routeChildRules: { 'type': 'array', 'itemType': CreateRouteRuleRequestRouteChildRules },
      routeType: 'string',
      ruleName: 'string',
      timeWindow: 'number',
      timeWindowUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 65
   */
  data?: CreateRouteRuleResponseBodyData;
  /**
   * @example
   * 请求ID
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateRouteRuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  escalationPlanId?: number;
  /**
   * @example
   * 服务描述
   */
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 服务名称
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
      serviceDescription: 'serviceDescription',
      serviceGroupIdList: 'serviceGroupIdList',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
      serviceDescription: 'string',
      serviceGroupIdList: { 'type': 'array', 'itemType': 'number' },
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  data?: CreateServiceResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ENABLE
   */
  enableWebhook?: string;
  monitorSourceTemplates?: CreateServiceGroupRequestMonitorSourceTemplates[];
  /**
   * @example
   * 服务描述
   */
  serviceGroupDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 冲上云霄
   */
  serviceGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userIds?: number[];
  /**
   * @remarks
   * webhooklink
   * 
   * This parameter is required.
   * 
   * @example
   * WWWWWWW
   */
  webhookLink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WEIXIN_GROUP
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      enableWebhook: 'enableWebhook',
      monitorSourceTemplates: 'monitorSourceTemplates',
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupName: 'serviceGroupName',
      userIds: 'userIds',
      webhookLink: 'webhookLink',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableWebhook: 'string',
      monitorSourceTemplates: { 'type': 'array', 'itemType': CreateServiceGroupRequestMonitorSourceTemplates },
      serviceGroupDescription: 'string',
      serviceGroupName: 'string',
      userIds: { 'type': 'array', 'itemType': 'number' },
      webhookLink: 'string',
      webhookType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  data?: CreateServiceGroupResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateServiceGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 12
   */
  fastScheduling?: CreateServiceGroupSchedulingRequestFastScheduling;
  fineScheduling?: CreateServiceGroupSchedulingRequestFineScheduling;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FAST
   */
  schedulingWay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      fastScheduling: 'fastScheduling',
      fineScheduling: 'fineScheduling',
      schedulingWay: 'schedulingWay',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fastScheduling: CreateServiceGroupSchedulingRequestFastScheduling,
      fineScheduling: CreateServiceGroupSchedulingRequestFineScheduling,
      schedulingWay: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class CreateServiceGroupSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceGroupSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378FTOKENA11
   */
  clientToken?: string;
  /**
   * @example
   * 2021-11-03 10:10:10
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LONG_TERM
   */
  expiredType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyObjectList?: CreateSubscriptionRequestNotifyObjectList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  notifyObjectType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyList?: CreateSubscriptionRequestNotifyStrategyList[];
  /**
   * @example
   * 1个月
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICE
   */
  scope?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeObjectList?: CreateSubscriptionRequestScopeObjectList[];
  /**
   * @example
   * 2021-02-03 10:10:10
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSubscription
   */
  subscriptionTitle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      expiredType: 'expiredType',
      notifyObjectList: 'notifyObjectList',
      notifyObjectType: 'notifyObjectType',
      notifyStrategyList: 'notifyStrategyList',
      period: 'period',
      scope: 'scope',
      scopeObjectList: 'scopeObjectList',
      startTime: 'startTime',
      subscriptionTitle: 'subscriptionTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      expiredType: 'number',
      notifyObjectList: { 'type': 'array', 'itemType': CreateSubscriptionRequestNotifyObjectList },
      notifyObjectType: 'number',
      notifyStrategyList: { 'type': 'array', 'itemType': CreateSubscriptionRequestNotifyStrategyList },
      period: 'string',
      scope: 'number',
      scopeObjectList: { 'type': 'array', 'itemType': CreateSubscriptionRequestScopeObjectList },
      startTime: 'string',
      subscriptionTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateSubscriptionResponseBodyData;
  /**
   * @remarks
   * request id
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSubscriptionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DINGDING
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7C56D225-7C34-40BB-9624-C8BA449260E6
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateTenantApplicationResponseBodyData;
  /**
   * @remarks
   * id of the req
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTenantApplicationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTenantApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  /**
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @example
   * 5678@qq.com
   */
  email?: string;
  /**
   * @example
   * 188898989892
   */
  phone?: string;
  /**
   * @example
   * 4787654378343
   */
  ramId?: number;
  roleIdList?: number[];
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      email: 'email',
      phone: 'phone',
      ramId: 'ramId',
      roleIdList: 'roleIdList',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      email: 'string',
      phone: 'string',
      ramId: 'number',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: CreateUserResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEscalationPlanRequest extends $tea.Model {
  /**
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234534
   */
  escalationPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC21925D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIncidentRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 12321
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 100
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 1231
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemEffectionServiceRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * e0b6735e-1a04-4d6b-a625-d2350612492c
   */
  clientToken?: string;
  /**
   * @example
   * 567
   */
  effectionServiceId?: number;
  /**
   * @example
   * 876
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      effectionServiceId: 'effectionServiceId',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effectionServiceId: 'number',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemEffectionServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * e0b6735e-1a04-4d6b-a625-d2350612492c
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteProblemEffectionServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProblemEffectionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemMeasureRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 1213
   */
  measureId?: number;
  /**
   * @example
   * 2131
   */
  problemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      measureId: 'measureId',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      measureId: 'number',
      problemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemMeasureResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteProblemMeasureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProblemMeasureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemTimelineRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378FTOKENA11
   */
  clientToken?: string;
  /**
   * @example
   * 102
   */
  problemId?: number;
  /**
   * @example
   * 11
   */
  problemTimelineId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
      problemTimelineId: 'problemTimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
      problemTimelineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProblemTimelineResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteProblemTimelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProblemTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteRuleRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  routeRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      routeRuleId: 'routeRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      routeRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteRuleResponseBody extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 10002000
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 1000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteServiceGroupSchedulingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteServiceGroupSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceGroupSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupUserRequest extends $tea.Model {
  /**
   * @example
   * xxxxxx
   */
  clientToken?: string;
  /**
   * @example
   * 88888
   */
  newUserId?: number;
  /**
   * @example
   * 777777
   */
  oldUserId?: number;
  /**
   * @example
   * true
   */
  removeUser?: boolean;
  /**
   * @example
   * 66666
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      newUserId: 'newUserId',
      oldUserId: 'oldUserId',
      removeUser: 'removeUser',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newUserId: 'number',
      oldUserId: 'number',
      removeUser: 'boolean',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceGroupUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteServiceGroupUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceGroupUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceGroupUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  subscriptionId?: number;
  static names(): { [key: string]: string } {
    return {
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  /**
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverIncidentRequest extends $tea.Model {
  /**
   * @example
   * 212321
   */
  assignUserId?: number;
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61CS9A221
   */
  clientToken?: string;
  /**
   * @example
   * 1223212
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      assignUserId: 'assignUserId',
      clientToken: 'clientToken',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignUserId: 'number',
      clientToken: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2FS
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DeliverIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeliverIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeliverIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEscalationPlanRequest extends $tea.Model {
  /**
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234534
   */
  escalationPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC21925D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DisableEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 12345703
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DisableIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRouteRuleRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  routeRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      routeRuleId: 'routeRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      routeRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRouteRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   * 
   * @example
   * null
   */
  data?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableServiceGroupWebhookRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableServiceGroupWebhookResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DisableServiceGroupWebhookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableServiceGroupWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableServiceGroupWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSubscriptionRequest extends $tea.Model {
  /**
   * @example
   * 89
   */
  subscriptionId?: number;
  static names(): { [key: string]: string } {
    return {
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DisableSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEscalationPlanRequest extends $tea.Model {
  /**
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234534
   */
  escalationPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC21925D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class EnableEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 101
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class EnableIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRouteRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  routeRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      routeRuleId: 'routeRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      routeRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRouteRuleResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  data?: number;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceGroupWebhookRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceGroupWebhookResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class EnableServiceGroupWebhookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableServiceGroupWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableServiceGroupWebhookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSubscriptionRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  subscriptionId?: number;
  static names(): { [key: string]: string } {
    return {
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class EnableSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishIncidentRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2DC
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  incidentFinishReason?: number;
  /**
   * @example
   * 原因描述
   */
  incidentFinishReasonDescription?: string;
  /**
   * @example
   * 3
   */
  incidentFinishSolution?: number;
  /**
   * @example
   * 解决方案描述
   */
  incidentFinishSolutionDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  incidentIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentFinishReason: 'incidentFinishReason',
      incidentFinishReasonDescription: 'incidentFinishReasonDescription',
      incidentFinishSolution: 'incidentFinishSolution',
      incidentFinishSolutionDescription: 'incidentFinishSolutionDescription',
      incidentIds: 'incidentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentFinishReason: 'number',
      incidentFinishReasonDescription: 'string',
      incidentFinishSolution: 'number',
      incidentFinishSolutionDescription: 'string',
      incidentIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class FinishIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FinishIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishProblemRequest extends $tea.Model {
  /**
   * @example
   * 6338F42D-ED0B-442C-932C-657300AFB4BB
   */
  clientToken?: string;
  /**
   * @example
   * 3123
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6338F42D-ED0B-442C-932C-657300AFB4BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class FinishProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FinishProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureLinkRequest extends $tea.Model {
  /**
   * @remarks
   * keys
   */
  keys?: string[];
  /**
   * @example
   * 50002020
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureLinkResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GeneratePictureLinkResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GeneratePictureLinkResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GeneratePictureLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GeneratePictureLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignRequest extends $tea.Model {
  files?: GeneratePictureUploadSignRequestFiles[];
  /**
   * @example
   * 123123
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT 事件 ALERT告警 PROBLEM故障
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'files',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': GeneratePictureUploadSignRequestFiles },
      instanceId: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GeneratePictureUploadSignResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * e2d4306a-bf4d-4345-9ae6-158223c85dbd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GeneratePictureUploadSignResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GeneratePictureUploadSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GeneratePictureUploadSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureLinkRequest extends $tea.Model {
  /**
   * @remarks
   * oss key
   */
  keys?: string[];
  /**
   * @example
   * 50002021
   */
  problemId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      problemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureLinkResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GenerateProblemPictureLinkResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * c26f36de-1ec8-496a-a828-88067879ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateProblemPictureLinkResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateProblemPictureLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateProblemPictureLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureUploadSignRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  fileName?: string;
  /**
   * @example
   * 1000
   */
  fileSize?: number;
  /**
   * @example
   * png
   */
  fileType?: string;
  /**
   * @example
   * 67876
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureUploadSignResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GenerateProblemPictureUploadSignResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * e2d4306a-bf4d-4345-9ae6-158223c85dbd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateProblemPictureUploadSignResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureUploadSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateProblemPictureUploadSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateProblemPictureUploadSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanRequest extends $tea.Model {
  /**
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 345
   */
  escalationPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetEscalationPlanResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetEscalationPlanResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      monitorSourceId: 'monitorSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventResponseBody extends $tea.Model {
  data?: GetEventResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * XXXXXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetEventResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHomePageGuidanceRequest extends $tea.Model {
  /**
   * @example
   * xxxxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHomePageGuidanceResponseBody extends $tea.Model {
  data?: GetHomePageGuidanceResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetHomePageGuidanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHomePageGuidanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHomePageGuidanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHomePageGuidanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentRequest extends $tea.Model {
  /**
   * @example
   * 2b63cdef-7ac3-4892-a76d-0f3389ef729f
   */
  clientToken?: string;
  /**
   * @example
   * 32113
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetIncidentResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2b63cdef-7ac3-4892-a76d-0f3389ef7291
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIncidentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentListByIdListRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  incidentIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentIdList: 'incidentIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentListByIdListResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetIncidentListByIdListResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetIncidentListByIdListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentListByIdListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIncidentListByIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIncidentListByIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentStatisticsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetIncidentStatisticsResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIncidentStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIncidentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIncidentStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentSubtotalCountRequest extends $tea.Model {
  /**
   * @example
   * 7C56D225-7C34-40BB-9624-C8BA449260E6
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  incidentIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentIds: 'incidentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentSubtotalCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetIncidentSubtotalCountResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIncidentSubtotalCountResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentSubtotalCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIncidentSubtotalCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIncidentSubtotalCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationConfigRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 68
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetIntegrationConfigResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIntegrationConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBody extends $tea.Model {
  data?: GetProblemResponseBodyData;
  /**
   * @example
   * C4BE3837-1A13-41VB-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProblemResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemEffectionServiceRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * e2d4306a-bf4d-4345-9ae6-158223c85dbd
   */
  clientToken?: string;
  /**
   * @example
   * 9
   */
  effectionServiceId?: number;
  /**
   * @example
   * 46
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      effectionServiceId: 'effectionServiceId',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effectionServiceId: 'number',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemEffectionServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetProblemEffectionServiceResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * e2d4306a-bf4d-4345-9ae6-158223c85dbd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProblemEffectionServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemEffectionServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProblemEffectionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemImprovementRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 312312
   */
  problemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemImprovementResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetProblemImprovementResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3811
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProblemImprovementResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemImprovementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProblemImprovementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProblemImprovementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840f13812
   */
  clientToken?: string;
  effectServiceIds?: number[];
  /**
   * @example
   * 213123
   */
  incidentId?: number;
  /**
   * @example
   * 12312
   */
  problemId?: number;
  /**
   * @example
   * P2
   */
  problemLevel?: string;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: string;
  /**
   * @example
   * 21312
   */
  relatedServiceId?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      effectServiceIds: 'effectServiceIds',
      incidentId: 'incidentId',
      problemId: 'problemId',
      problemLevel: 'problemLevel',
      problemNotifyType: 'problemNotifyType',
      relatedServiceId: 'relatedServiceId',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effectServiceIds: { 'type': 'array', 'itemType': 'number' },
      incidentId: 'number',
      problemId: 'number',
      problemLevel: 'string',
      problemNotifyType: 'string',
      relatedServiceId: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetProblemPreviewResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c2840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProblemPreviewResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProblemPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProblemPreviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceStatisticsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetResourceStatisticsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetResourceStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRichTextRequest extends $tea.Model {
  /**
   * @example
   * INCIDENT 事件 ALERT告警 PROBLEM故障
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT
   */
  instanceType?: string;
  /**
   * @example
   * 12221才
   */
  richTextId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      richTextId: 'richTextId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceType: 'string',
      richTextId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRichTextResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetRichTextResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRichTextResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRichTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRichTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  routeRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      routeRuleId: 'routeRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      routeRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleResponseBody extends $tea.Model {
  data?: GetRouteRuleResponseBodyData;
  /**
   * @example
   * 6B9347ED-FD93-42B4-B9A4-7282962F5D6A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRouteRuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  data?: GetServiceResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 2323232
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupResponseBody extends $tea.Model {
  data?: GetServiceGroupResponseBodyData;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceGroupResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupPersonSchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 2020-09-31 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 77777
   */
  serviceGroupId?: number;
  /**
   * @example
   * 2020-09-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 66666
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      serviceGroupId: 'serviceGroupId',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      serviceGroupId: 'number',
      startTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupPersonSchedulingResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupPersonSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceGroupPersonSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceGroupPersonSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9999
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBody extends $tea.Model {
  data?: GetServiceGroupSchedulingResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceGroupSchedulingResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceGroupSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 2021-09-01 00:00:00
   */
  endTime?: string;
  fastScheduling?: GetServiceGroupSchedulingPreviewRequestFastScheduling;
  fineScheduling?: GetServiceGroupSchedulingPreviewRequestFineScheduling;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FAST
   */
  schedulingWay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 55555
   */
  serviceGroupId?: number;
  /**
   * @example
   * 2021-11-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      fastScheduling: 'fastScheduling',
      fineScheduling: 'fineScheduling',
      schedulingWay: 'schedulingWay',
      serviceGroupId: 'serviceGroupId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      fastScheduling: GetServiceGroupSchedulingPreviewRequestFastScheduling,
      fineScheduling: GetServiceGroupSchedulingPreviewRequestFineScheduling,
      schedulingWay: 'string',
      serviceGroupId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewResponseBody extends $tea.Model {
  data?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceGroupSchedulingPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceGroupSchedulingPreviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSpecialPersonSchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 77777
   */
  serviceGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 66666
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceGroupId: 'serviceGroupId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceGroupId: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSpecialPersonSchedulingResponseBody extends $tea.Model {
  data?: GetServiceGroupSpecialPersonSchedulingResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetServiceGroupSpecialPersonSchedulingResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSpecialPersonSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceGroupSpecialPersonSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceGroupSpecialPersonSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsRequest extends $tea.Model {
  /**
   * @example
   * 7C56D225-7C34-40BB-9624-C8BA449260E6
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-09 09:09:09
   */
  createTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  events?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32
   */
  incidentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx事件
   */
  incidentTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23
   */
  relatedServiceId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      createTime: 'createTime',
      events: 'events',
      incidentId: 'incidentId',
      incidentTitle: 'incidentTitle',
      relatedServiceId: 'relatedServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      incidentId: 'number',
      incidentTitle: 'string',
      relatedServiceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetSimilarIncidentStatisticsResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 7C56D225-7C34-40BB-9624-C8BA449260E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSimilarIncidentStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSimilarIncidentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSimilarIncidentStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionRequest extends $tea.Model {
  notFilterScopeObjectDeleted?: boolean;
  /**
   * @example
   * 10
   */
  subscriptionId?: number;
  static names(): { [key: string]: string } {
    return {
      notFilterScopeObjectDeleted: 'notFilterScopeObjectDeleted',
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notFilterScopeObjectDeleted: 'boolean',
      subscriptionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * Object
   */
  data?: GetSubscriptionResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSubscriptionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7C56D225-7C34-40BB-9624-C8BA449260E6
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: GetTenantApplicationResponseBodyData;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTenantApplicationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTenantApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTenantApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tenantRamId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantRamId: 'tenantRamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantRamId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantStatusResponseBody extends $tea.Model {
  data?: GetTenantStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTenantStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTenantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTenantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  /**
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  data?: GetUserResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGuideStatusRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGuideStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * map
   * 
   * @example
   * {   "data": {     "monitorGuide": false,     "userRamId": 1344371,     "serviceGuide": false,     "noticeGuide": false,     "userGuide": true,     "serviceGroupGuide": false,     "routeRuleGuide": false,     "incidentGuide": true   }
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGuideStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGuideStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserGuideStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsRequest extends $tea.Model {
  /**
   * @example
   * P1
   */
  alertLevel?: string;
  /**
   * @example
   * 报警
   */
  alertName?: string;
  /**
   * @example
   * 流转规则A
   */
  alertSourceName?: string;
  /**
   * @remarks
   * 2020-09-10 21:00:00
   * 
   * @example
   * 2020-10-01 23:59:59
   */
  endTime?: string;
  monitorSourceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  relatedServiceId?: number;
  /**
   * @example
   * zabbix
   */
  ruleName?: string;
  /**
   * @remarks
   * 2020-09-10 13:00:00
   * 
   * @example
   * 2020-10-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'alertLevel',
      alertName: 'alertName',
      alertSourceName: 'alertSourceName',
      endTime: 'endTime',
      monitorSourceId: 'monitorSourceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      relatedServiceId: 'relatedServiceId',
      ruleName: 'ruleName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'string',
      alertName: 'string',
      alertSourceName: 'string',
      endTime: 'string',
      monitorSourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      relatedServiceId: 'number',
      ruleName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $tea.Model {
  data?: ListAlertsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlertsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListByMonitorSourceIdRequest extends $tea.Model {
  monitorSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorSourceId: 'monitorSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByMonitorSourceIdResponseBody extends $tea.Model {
  data?: ListByMonitorSourceIdResponseBodyData[];
  /**
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListByMonitorSourceIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByMonitorSourceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListByMonitorSourceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListByMonitorSourceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForServiceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * 23es23s32xas23
   */
  clientToken?: string;
  /**
   * @example
   * 2021-10-09
   */
  endTime?: string;
  /**
   * @example
   * 2021-09-09
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForServiceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListChartDataForServiceGroupResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1231212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListChartDataForServiceGroupResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChartDataForServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChartDataForServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForUserRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * 3232dsd32sd32gr
   */
  clientToken?: string;
  /**
   * @example
   * 2021-10-09
   */
  endTime?: string;
  /**
   * @example
   * 2021-09-09
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListChartDataForUserResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1231212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListChartDataForUserResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChartDataForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChartDataForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-CDE61E59A2E9
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: { [key: string]: DataValue[] };
  /**
   * @remarks
   * requestId
   * 
   * @example
   * uuid
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataValue } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * 2021-09-30
   */
  endTime?: string;
  /**
   * @example
   * A服务组
   */
  serviceGroupName?: string;
  /**
   * @example
   * 2021-09-09
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      serviceGroupName: 'serviceGroupName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      serviceGroupName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForServiceGroupResponseBody extends $tea.Model {
  data?: ListDataReportForServiceGroupResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSIze?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSIze: 'pageSIze',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataReportForServiceGroupResponseBodyData },
      pageNumber: 'number',
      pageSIze: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataReportForServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataReportForServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForUserRequest extends $tea.Model {
  /**
   * @example
   * 2021-09-30
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 2021-09-01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForUserResponseBody extends $tea.Model {
  data?: ListDataReportForUserResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataReportForUserResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataReportForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataReportForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictionariesRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictionariesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: { [key: string]: DataValue[] };
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataValue } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictionariesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDictionariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDictionariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlanServicesRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlanServicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListEscalationPlanServicesResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEscalationPlanServicesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlanServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEscalationPlanServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEscalationPlanServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansRequest extends $tea.Model {
  /**
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  clientToken?: string;
  /**
   * @example
   * xxx
   */
  escalationPlanName?: string;
  isGlobal?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ssxx
   */
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanName: 'escalationPlanName',
      isGlobal: 'isGlobal',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceName: 'serviceName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanName: 'string',
      isGlobal: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListEscalationPlansResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  requestId?: string;
  /**
   * @example
   * 878
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEscalationPlansResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEscalationPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEscalationPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansByNoticeObjectRequest extends $tea.Model {
  noticeObjectId?: number;
  noticeObjectType?: number;
  static names(): { [key: string]: string } {
    return {
      noticeObjectId: 'noticeObjectId',
      noticeObjectType: 'noticeObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeObjectId: 'number',
      noticeObjectType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansByNoticeObjectResponseBody extends $tea.Model {
  data?: ListEscalationPlansByNoticeObjectResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEscalationPlansByNoticeObjectResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansByNoticeObjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEscalationPlansByNoticeObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEscalationPlansByNoticeObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 2311
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIncidentDetailEscalationPlansResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIncidentDetailEscalationPlansResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIncidentDetailEscalationPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIncidentDetailEscalationPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailTimelinesRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  idSort?: string;
  /**
   * @example
   * 123
   */
  incidentId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      idSort: 'idSort',
      incidentId: 'incidentId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      idSort: 'string',
      incidentId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailTimelinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIncidentDetailTimelinesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIncidentDetailTimelinesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailTimelinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIncidentDetailTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIncidentDetailTimelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentSubtotalsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE62E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 3123
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentSubtotalsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIncidentSubtotalsResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIncidentSubtotalsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentSubtotalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIncidentSubtotalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIncidentSubtotalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentTimelinesRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentTimelinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIncidentTimelinesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  /**
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIncidentTimelinesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentTimelinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIncidentTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIncidentTimelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E1
   */
  clientToken?: string;
  /**
   * @example
   * 2021-11-10 00:00:00
   */
  createEndTime?: string;
  /**
   * @example
   * 2021-11-01 00:00:00
   */
  createStartTime?: string;
  /**
   * @example
   * LOW
   */
  effect?: string;
  /**
   * @example
   * P1
   */
  incidentLevel?: string;
  /**
   * @example
   * ASSIGNED
   */
  incidentStatus?: string;
  /**
   * @example
   * true
   */
  me?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12312
   */
  relationServiceId?: number;
  /**
   * @example
   * sa
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      effect: 'effect',
      incidentLevel: 'incidentLevel',
      incidentStatus: 'incidentStatus',
      me: 'me',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      relationServiceId: 'relationServiceId',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createEndTime: 'string',
      createStartTime: 'string',
      effect: 'string',
      incidentLevel: 'string',
      incidentStatus: 'string',
      me: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      relationServiceId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIncidentsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  /**
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIncidentsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIncidentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIncidentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigTimelinesRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 101
   */
  integrationConfigId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigTimelinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIntegrationConfigTimelinesResponseBodyData[];
  /**
   * @remarks
   * pageNumber
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * pageSize
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  /**
   * @remarks
   * totalCount
   * 
   * @example
   * 103
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIntegrationConfigTimelinesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigTimelinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntegrationConfigTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntegrationConfigTimelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigsRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      monitorSourceName: 'monitorSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      monitorSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListIntegrationConfigsResponseBodyData[];
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIntegrationConfigsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntegrationConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntegrationConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorSourcesRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378FTOKENA11
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorSourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListMonitorSourcesResponseBodyData[];
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMonitorSourcesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMonitorSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMonitorSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemDetailOperationsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * desc,asc
   */
  createTimeSort?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      createTimeSort: 'createTimeSort',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTimeSort: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemDetailOperationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListProblemDetailOperationsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  /**
   * @example
   * 210
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProblemDetailOperationsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemDetailOperationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProblemDetailOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProblemDetailOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemOperationsRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemOperationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListProblemOperationsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  /**
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProblemOperationsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemOperationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProblemOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProblemOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemSubtotalsRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fdB812
   */
  clientToken?: string;
  /**
   * @example
   * 1231
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemSubtotalsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListProblemSubtotalsResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0S4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProblemSubtotalsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemSubtotalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProblemSubtotalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProblemSubtotalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemTimeLinesRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 10002010
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemTimeLinesResponseBody extends $tea.Model {
  data?: ListProblemTimeLinesResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProblemTimeLinesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemTimeLinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProblemTimeLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProblemTimeLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  affectServiceId?: number;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * 2020-03-05 15:50:59
   */
  discoveryEndTime?: string;
  /**
   * @example
   * 2020-03-05 15:50:59
   */
  discoveryStartTime?: string;
  /**
   * @example
   * 1
   */
  mainHandlerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * P2
   */
  problemLevel?: string;
  /**
   * @example
   * HANDLING
   */
  problemStatus?: string;
  /**
   * @example
   * RESPONSIBLE
   */
  queryType?: string;
  /**
   * @example
   * 1
   */
  repeaterId?: number;
  /**
   * @example
   * 2020-03-05 15:50:59
   */
  restoreEndTime?: string;
  /**
   * @example
   * 2020-03-05 15:50:59
   */
  restoreStartTime?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      affectServiceId: 'affectServiceId',
      clientToken: 'clientToken',
      discoveryEndTime: 'discoveryEndTime',
      discoveryStartTime: 'discoveryStartTime',
      mainHandlerId: 'mainHandlerId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      problemLevel: 'problemLevel',
      problemStatus: 'problemStatus',
      queryType: 'queryType',
      repeaterId: 'repeaterId',
      restoreEndTime: 'restoreEndTime',
      restoreStartTime: 'restoreStartTime',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectServiceId: 'number',
      clientToken: 'string',
      discoveryEndTime: 'string',
      discoveryStartTime: 'string',
      mainHandlerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      problemLevel: 'string',
      problemStatus: 'string',
      queryType: 'string',
      repeaterId: 'number',
      restoreEndTime: 'string',
      restoreStartTime: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemsResponseBody extends $tea.Model {
  data?: ListProblemsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProblemsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProblemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProblemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  notFilterRouteRuleDeleted?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  routeType?: number;
  /**
   * @example
   * 规则名字
   */
  ruleName?: Buffer;
  /**
   * @example
   * 冲上云霄
   */
  serviceName?: Buffer;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      notFilterRouteRuleDeleted: 'notFilterRouteRuleDeleted',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      routeType: 'routeType',
      ruleName: 'ruleName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      notFilterRouteRuleDeleted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      routeType: 'number',
      ruleName: 'Buffer',
      serviceName: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesResponseBody extends $tea.Model {
  data?: ListRouteRulesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C4BE3837-1A13B-A225-2C88188E8A43
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRouteRulesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRouteRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByAssignWhoIdRequest extends $tea.Model {
  assignWhoId?: number;
  assignWhoType?: number;
  static names(): { [key: string]: string } {
    return {
      assignWhoId: 'assignWhoId',
      assignWhoType: 'assignWhoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignWhoId: 'number',
      assignWhoType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByAssignWhoIdResponseBody extends $tea.Model {
  data?: ListRouteRulesByAssignWhoIdResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRouteRulesByAssignWhoIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByAssignWhoIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRouteRulesByAssignWhoIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRouteRulesByAssignWhoIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByServiceResponseBody extends $tea.Model {
  data?: ListRouteRulesByServiceResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRouteRulesByServiceResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRouteRulesByServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRouteRulesByServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupMonitorSourceTemplatesRequest extends $tea.Model {
  /**
   * @example
   * xxxx
   */
  clientToken?: string;
  /**
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      requestId: 'requestId',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      requestId: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupMonitorSourceTemplatesResponseBody extends $tea.Model {
  data?: ListServiceGroupMonitorSourceTemplatesResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServiceGroupMonitorSourceTemplatesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupMonitorSourceTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceGroupMonitorSourceTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceGroupMonitorSourceTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  isScheduled?: boolean;
  /**
   * @example
   * false
   */
  orderByScheduleStatus?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 王宇
   */
  queryName?: string;
  /**
   * @example
   * USER
   */
  queryType?: string;
  serviceId?: number;
  /**
   * @example
   * 100000
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      isScheduled: 'isScheduled',
      orderByScheduleStatus: 'orderByScheduleStatus',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      queryName: 'queryName',
      queryType: 'queryType',
      serviceId: 'serviceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      isScheduled: 'boolean',
      orderByScheduleStatus: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryName: 'string',
      queryType: 'string',
      serviceId: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBody extends $tea.Model {
  data?: ListServiceGroupsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * sssss
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServiceGroupsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListServiceGroupsByUserIdResponseBody extends $tea.Model {
  data?: ListServiceGroupsByUserIdResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListServiceGroupsByUserIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsByUserIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceGroupsByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceGroupsByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 冲上云霄
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  data?: ListServicesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServicesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * 2020-09-18 13:00:00
   * 
   * @example
   * 2020-10-01 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCIDENT
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 9223370410626682599-1344383-78954515-1-0a6e01a1701447fd9ef18b079edd2c6d
   */
  startRowKey?: string;
  /**
   * @remarks
   * 2020-09-10 13:00:00
   * 
   * @example
   * 2020-10-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 9223370410626682599-1344383-78954515-1-0a6e01a1701447fd9ef18b079edd2c6d
   */
  stopRowKey?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startRowKey: 'startRowKey',
      startTime: 'startTime',
      stopRowKey: 'stopRowKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      instanceId: 'number',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startRowKey: 'string',
      startTime: 'string',
      stopRowKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsResponseBody extends $tea.Model {
  data?: ListSourceEventsResponseBodyData[];
  /**
   * @remarks
   * firstRowKey
   * 
   * @example
   * 9223370412331485032-1344383-9967-1-08be8b08ef30441390072f3bfba71c94
   */
  firstRowKey?: string;
  /**
   * @remarks
   * lastRowKey
   * 
   * @example
   * 9223370412331485036-1344383-9967-1-8d729a1b176f493ca3be643b391d5ced
   */
  lastRowKey?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      firstRowKey: 'firstRowKey',
      lastRowKey: 'lastRowKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSourceEventsResponseBodyData },
      firstRowKey: 'string',
      lastRowKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSourceEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSourceEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsForMonitorSourceRequest extends $tea.Model {
  /**
   * @example
   * 1000
   */
  monitorSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      monitorSourceId: 'monitorSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsForMonitorSourceResponseBody extends $tea.Model {
  data?: ListSourceEventsForMonitorSourceResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSourceEventsForMonitorSourceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsForMonitorSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSourceEventsForMonitorSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSourceEventsForMonitorSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionServiceGroupsRequest extends $tea.Model {
  /**
   * @example
   * 89f51d2e-5527-4f6c-a6c6-4411b5496e9f
   */
  clientToken?: string;
  serviceIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionServiceGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListSubscriptionServiceGroupsResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 89f51d2e-5527-4f6c-a6c6-4411b5496e9f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubscriptionServiceGroupsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionServiceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubscriptionServiceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubscriptionServiceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378FTOKENA11
   */
  clientToken?: string;
  notFilterScopeObjectDeleted?: boolean;
  /**
   * @example
   * test
   */
  notifyObject?: string;
  /**
   * @example
   * SERVICE
   */
  notifyObjectType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @example
   * TestName
   */
  scopeObject?: string;
  /**
   * @example
   * newTitle
   */
  subscriptionTitle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      notFilterScopeObjectDeleted: 'notFilterScopeObjectDeleted',
      notifyObject: 'notifyObject',
      notifyObjectType: 'notifyObjectType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scope: 'scope',
      scopeObject: 'scopeObject',
      subscriptionTitle: 'subscriptionTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      notFilterScopeObjectDeleted: 'boolean',
      notifyObject: 'string',
      notifyObjectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scope: 'string',
      scopeObject: 'string',
      subscriptionTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListSubscriptionsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubscriptionsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrendForSourceEventRequest extends $tea.Model {
  /**
   * @example
   * 2020-10-10 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 1000
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT
   */
  instanceType?: string;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * 2020-10-10 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 1000
   */
  timeUnit?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      requestId: 'requestId',
      startTime: 'startTime',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'number',
      instanceType: 'string',
      requestId: 'string',
      startTime: 'string',
      timeUnit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrendForSourceEventResponseBody extends $tea.Model {
  data?: ListTrendForSourceEventResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTrendForSourceEventResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrendForSourceEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrendForSourceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrendForSourceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSerivceGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * 2b63cdef-7ac3-4892-a76d-0f3389ef729f
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSerivceGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListUserSerivceGroupsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2b63cdef-7ac3-4892-a76d-0f3389ef7291
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUserSerivceGroupsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSerivceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserSerivceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserSerivceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1887879****
   */
  phone?: string;
  /**
   * @example
   * 1344383
   */
  ramId?: string;
  /**
   * @example
   * USER_LIST
   */
  scene?: number;
  /**
   * @example
   * DINGDING
   */
  synergyChannel?: string;
  /**
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      phone: 'phone',
      ramId: 'ramId',
      scene: 'scene',
      synergyChannel: 'synergyChannel',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phone: 'string',
      ramId: 'string',
      scene: 'number',
      synergyChannel: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: ListUsersResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUsersResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMonitorRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMonitorResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  data?: any;
  /**
   * @example
   * 5A30D240-1821-0246-B580-AB1468657AD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverProblemRequest extends $tea.Model {
  /**
   * @example
   * 123
   */
  problemId?: number;
  /**
   * @example
   * PROBLEM_UPDATE
   */
  problemNotifyType?: string;
  /**
   * @example
   * 2020-02-01 00:00:00
   */
  recoveryTime?: string;
  static names(): { [key: string]: string } {
    return {
      problemId: 'problemId',
      problemNotifyType: 'problemNotifyType',
      recoveryTime: 'recoveryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemId: 'number',
      problemNotifyType: 'string',
      recoveryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBC39DEF-C95B-46F8-9AE3-204F0B0A706D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class RecoverProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecoverProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshIntegrationConfigKeyRequest extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  clientToken?: string;
  /**
   * @example
   * 102
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshIntegrationConfigKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: RefreshIntegrationConfigKeyResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RefreshIntegrationConfigKeyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshIntegrationConfigKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshIntegrationConfigKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshIntegrationConfigKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIntegrationConfigRequest extends $tea.Model {
  clientToken?: string;
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIntegrationConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class RemoveIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProblemServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * 13123
   */
  problemId?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      problemId: 'problemId',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemId: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProblemServiceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5AD6E6BC-2582-4E0E-832D-52CB1B922253
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class RemoveProblemServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveProblemServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveProblemServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplayProblemRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3212
   */
  clientToken?: string;
  /**
   * @example
   * 123
   */
  problemId?: number;
  /**
   * @example
   * 3123
   */
  replayDutyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
      replayDutyUserId: 'replayDutyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
      replayDutyUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplayProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B81E84B5-8FD1-45F3-969A-B5067AADCFFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class ReplayProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplayProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReplayProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RespondIncidentRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A221
   */
  clientToken?: string;
  /**
   * @remarks
   * 影响程度
   */
  incidentIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      incidentIds: 'incidentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      incidentIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RespondIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 062E6568-E505-49D6-8DD0-8F11283EB0AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class RespondIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RespondIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RespondIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeProblemRecoveryRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2EF
   */
  clientToken?: string;
  /**
   * @example
   * 1231
   */
  problemId?: number;
  /**
   * @example
   * PROBLEM_UPGRADE
   */
  problemNotifyType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
      problemNotifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeProblemRecoveryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class RevokeProblemRecoveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeProblemRecoveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeProblemRecoveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UnbindUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * 6b404f14-77d1-4b53-a1a1-30a58bbcfc57
   */
  clientToken?: string;
  /**
   * @example
   * xxxx
   */
  escalationPlanDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 433
   */
  escalationPlanId?: number;
  /**
   * @example
   * xxx
   */
  escalationPlanName?: string;
  escalationPlanRules?: UpdateEscalationPlanRequestEscalationPlanRules[];
  escalationPlanScopeObjects?: UpdateEscalationPlanRequestEscalationPlanScopeObjects[];
  isGlobal?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanDescription: 'escalationPlanDescription',
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      escalationPlanRules: 'escalationPlanRules',
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      isGlobal: 'isGlobal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanDescription: 'string',
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      escalationPlanRules: { 'type': 'array', 'itemType': UpdateEscalationPlanRequestEscalationPlanRules },
      escalationPlanScopeObjects: { 'type': 'array', 'itemType': UpdateEscalationPlanRequestEscalationPlanScopeObjects },
      isGlobal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateEscalationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEscalationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIncidentRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A123
   */
  clientToken?: string;
  /**
   * @example
   * LOW
   */
  effect?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12312
   */
  incidentId?: number;
  /**
   * @example
   * P1
   */
  incidentLevel?: string;
  /**
   * @example
   * 事件标题
   */
  incidentTitle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      effect: 'effect',
      incidentId: 'incidentId',
      incidentLevel: 'incidentLevel',
      incidentTitle: 'incidentTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effect: 'string',
      incidentId: 'number',
      incidentLevel: 'string',
      incidentTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIncidentResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: UpdateIncidentResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateIncidentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIncidentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIncidentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntegrationConfigRequest extends $tea.Model {
  /**
   * @remarks
   * accessKey
   * 
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  accessKey?: string;
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F987A6A98
   */
  clientToken?: string;
  /**
   * @example
   * 103
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      clientToken: 'clientToken',
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      clientToken: 'string',
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntegrationConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10REQUES-AC5C-4B59-BE11-378F117A6A88
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateIntegrationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIntegrationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemRequest extends $tea.Model {
  feedback?: string;
  /**
   * @example
   * P1
   */
  level?: string;
  /**
   * @example
   * 678
   */
  mainHandlerId?: number;
  preliminaryReason?: string;
  /**
   * @example
   * 213432
   */
  problemId?: number;
  problemName?: string;
  progressSummary?: string;
  /**
   * @example
   * 23232
   */
  progressSummaryRichTextId?: number;
  /**
   * @example
   * 123
   */
  relatedServiceId?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      feedback: 'feedback',
      level: 'level',
      mainHandlerId: 'mainHandlerId',
      preliminaryReason: 'preliminaryReason',
      problemId: 'problemId',
      problemName: 'problemName',
      progressSummary: 'progressSummary',
      progressSummaryRichTextId: 'progressSummaryRichTextId',
      relatedServiceId: 'relatedServiceId',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      level: 'string',
      mainHandlerId: 'number',
      preliminaryReason: 'string',
      problemId: 'number',
      problemName: 'string',
      progressSummary: 'string',
      progressSummaryRichTextId: 'number',
      relatedServiceId: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemEffectionServiceRequest extends $tea.Model {
  /**
   * @remarks
   * clientToken
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @example
   * 乐嘉国际大厦
   */
  description?: string;
  /**
   * @example
   * 103
   */
  effectionServiceId?: number;
  /**
   * @example
   * P1
   */
  level?: string;
  picUrl?: string[];
  /**
   * @example
   * 190000000
   */
  problemId?: number;
  /**
   * @example
   * 33
   */
  serviceId?: number;
  /**
   * @example
   * UN_RECOVERED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      effectionServiceId: 'effectionServiceId',
      level: 'level',
      picUrl: 'picUrl',
      problemId: 'problemId',
      serviceId: 'serviceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      effectionServiceId: 'number',
      level: 'string',
      picUrl: { 'type': 'array', 'itemType': 'string' },
      problemId: 'number',
      serviceId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemEffectionServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * ffbf594-e093-46ad-bdcd-df4d7097125a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemEffectionServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemEffectionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemImprovementRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3813
   */
  clientToken?: string;
  customProblemReason?: string;
  /**
   * @example
   * 1
   */
  discoverSource?: number;
  /**
   * @example
   * 123123
   */
  dutyDepartmentId?: number;
  dutyDepartmentName?: string;
  /**
   * @example
   * 1231
   */
  dutyUserId?: number;
  /**
   * @example
   * 1
   */
  injectionMode?: string;
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * 12312
   */
  problemId?: number;
  problemReason?: string;
  /**
   * @example
   * 2
   */
  recentActivity?: string;
  /**
   * @example
   * 2
   */
  recoveryMode?: string;
  relationChanges?: string;
  remark?: string;
  /**
   * @example
   * 1213
   */
  replayDutyUserId?: number;
  /**
   * @example
   * 10
   */
  userReport?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      customProblemReason: 'customProblemReason',
      discoverSource: 'discoverSource',
      dutyDepartmentId: 'dutyDepartmentId',
      dutyDepartmentName: 'dutyDepartmentName',
      dutyUserId: 'dutyUserId',
      injectionMode: 'injectionMode',
      monitorSourceName: 'monitorSourceName',
      problemId: 'problemId',
      problemReason: 'problemReason',
      recentActivity: 'recentActivity',
      recoveryMode: 'recoveryMode',
      relationChanges: 'relationChanges',
      remark: 'remark',
      replayDutyUserId: 'replayDutyUserId',
      userReport: 'userReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      customProblemReason: 'string',
      discoverSource: 'number',
      dutyDepartmentId: 'number',
      dutyDepartmentName: 'string',
      dutyUserId: 'number',
      injectionMode: 'string',
      monitorSourceName: 'string',
      problemId: 'number',
      problemReason: 'string',
      recentActivity: 'string',
      recoveryMode: 'string',
      relationChanges: 'string',
      remark: 'string',
      replayDutyUserId: 'number',
      userReport: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemImprovementResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemImprovementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemImprovementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemImprovementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemMeasureRequest extends $tea.Model {
  /**
   * @example
   * 2
   */
  checkStandard?: string;
  /**
   * @example
   * 123
   */
  checkUserId?: number;
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  content?: string;
  /**
   * @example
   * 123
   */
  directorId?: number;
  /**
   * @example
   * 1231
   */
  measureId?: number;
  /**
   * @example
   * 2021-01-21 00:00:00
   */
  planFinishTime?: string;
  /**
   * @example
   * 1233
   */
  problemId?: number;
  /**
   * @example
   * 123
   */
  stalkerId?: number;
  /**
   * @example
   * UNIMPROVED
   */
  status?: string;
  /**
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkStandard: 'checkStandard',
      checkUserId: 'checkUserId',
      clientToken: 'clientToken',
      content: 'content',
      directorId: 'directorId',
      measureId: 'measureId',
      planFinishTime: 'planFinishTime',
      problemId: 'problemId',
      stalkerId: 'stalkerId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStandard: 'string',
      checkUserId: 'number',
      clientToken: 'string',
      content: 'string',
      directorId: 'number',
      measureId: 'number',
      planFinishTime: 'string',
      problemId: 'number',
      stalkerId: 'number',
      status: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemMeasureResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemMeasureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemMeasureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemNoticeRequest extends $tea.Model {
  /**
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  clientToken?: string;
  /**
   * @example
   * 1312
   */
  problemId?: number;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      problemId: 'problemId',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      problemId: 'number',
      problemNotifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemNoticeResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4361a0e1-6747-4834-96ce-0c4840fd3812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemNoticeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemTimelineRequest extends $tea.Model {
  /**
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  content?: string;
  /**
   * @example
   * NodeTest
   */
  keyNode?: string;
  /**
   * @example
   * 234
   */
  problemId?: number;
  /**
   * @example
   * 3940
   */
  problemTimelineId?: number;
  /**
   * @example
   * 2021-01-08 10:10:10
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      content: 'content',
      keyNode: 'keyNode',
      problemId: 'problemId',
      problemTimelineId: 'problemTimelineId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      keyNode: 'string',
      problemId: 'number',
      problemTimelineId: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProblemTimelineResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateProblemTimelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProblemTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRichTextRequest extends $tea.Model {
  /**
   * @example
   * 123123
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT 事件 ALERT告警 PROBLEM故障
   */
  instanceType?: string;
  /**
   * @example
   * 这是一个富文本
   */
  richText?: string;
  /**
   * @example
   * 123112313
   */
  richTextId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      richText: 'richText',
      richTextId: 'richTextId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceType: 'string',
      richText: 'string',
      richTextId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRichTextResponseBody extends $tea.Model {
  /**
   * @remarks
   * data
   */
  data?: UpdateRichTextResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateRichTextResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRichTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRichTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  assignObjectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICEGROUP
   */
  assignObjectType?: string;
  /**
   * @example
   * AND
   */
  childRuleRelation?: string;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P1
   */
  incidentLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  matchCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: ProblemLevelGroupValue };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  relatedServiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  routeChildRules?: UpdateRouteRuleRequestRouteChildRules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  routeRuleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALERT
   */
  routeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 规则1
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  timeWindow?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MINUTE
   */
  timeWindowUnit?: string;
  static names(): { [key: string]: string } {
    return {
      assignObjectId: 'assignObjectId',
      assignObjectType: 'assignObjectType',
      childRuleRelation: 'childRuleRelation',
      clientToken: 'clientToken',
      convergenceFields: 'convergenceFields',
      convergenceType: 'convergenceType',
      coverageProblemLevels: 'coverageProblemLevels',
      effection: 'effection',
      incidentLevel: 'incidentLevel',
      matchCount: 'matchCount',
      notifyChannels: 'notifyChannels',
      problemEffectionServices: 'problemEffectionServices',
      problemLevelGroup: 'problemLevelGroup',
      relatedServiceId: 'relatedServiceId',
      routeChildRules: 'routeChildRules',
      routeRuleId: 'routeRuleId',
      routeType: 'routeType',
      ruleName: 'ruleName',
      timeWindow: 'timeWindow',
      timeWindowUnit: 'timeWindowUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignObjectId: 'number',
      assignObjectType: 'string',
      childRuleRelation: 'string',
      clientToken: 'string',
      convergenceFields: { 'type': 'array', 'itemType': 'string' },
      convergenceType: 'number',
      coverageProblemLevels: { 'type': 'array', 'itemType': 'string' },
      effection: 'string',
      incidentLevel: 'string',
      matchCount: 'number',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      problemEffectionServices: { 'type': 'array', 'itemType': 'number' },
      problemLevelGroup: { 'type': 'map', 'keyType': 'string', 'valueType': ProblemLevelGroupValue },
      relatedServiceId: 'number',
      routeChildRules: { 'type': 'array', 'itemType': UpdateRouteRuleRequestRouteChildRules },
      routeRuleId: 'number',
      routeType: 'string',
      ruleName: 'string',
      timeWindow: 'number',
      timeWindowUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteRuleResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  data?: number;
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  escalationPlanId?: number;
  /**
   * @example
   * 服务描述
   */
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  /**
   * @example
   * 10002000
   */
  serviceId?: number;
  /**
   * @example
   * 服务名字
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      escalationPlanId: 'escalationPlanId',
      serviceDescription: 'serviceDescription',
      serviceGroupIdList: 'serviceGroupIdList',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      escalationPlanId: 'number',
      serviceDescription: 'string',
      serviceGroupIdList: { 'type': 'array', 'itemType': 'number' },
      serviceId: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  data?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ENABLE
   */
  enableWebhook?: string;
  monitorSourceTemplates?: UpdateServiceGroupRequestMonitorSourceTemplates[];
  /**
   * @example
   * 飞车
   */
  serviceGroupDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 冲上云霄
   */
  serviceGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wwwwwww
   */
  webhookLink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WEIXINGROUP
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      enableWebhook: 'enableWebhook',
      monitorSourceTemplates: 'monitorSourceTemplates',
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
      userIds: 'userIds',
      webhookLink: 'webhookLink',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableWebhook: 'string',
      monitorSourceTemplates: { 'type': 'array', 'itemType': UpdateServiceGroupRequestMonitorSourceTemplates },
      serviceGroupDescription: 'string',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
      userIds: { 'type': 'array', 'itemType': 'number' },
      webhookLink: 'string',
      webhookType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateServiceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @example
   * HOUR
   */
  fastScheduling?: UpdateServiceGroupSchedulingRequestFastScheduling;
  fineScheduling?: UpdateServiceGroupSchedulingRequestFineScheduling;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FAST
   */
  schedulingWay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      fastScheduling: 'fastScheduling',
      fineScheduling: 'fineScheduling',
      schedulingWay: 'schedulingWay',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fastScheduling: UpdateServiceGroupSchedulingRequestFastScheduling,
      fineScheduling: UpdateServiceGroupSchedulingRequestFineScheduling,
      schedulingWay: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateServiceGroupSchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceGroupSchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSpecialDaySchedulingRequest extends $tea.Model {
  /**
   * @example
   * C4BE3837-1A13-413B-A225-2C88188E8A43
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-08-19
   */
  schedulingDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedulingSpecialDays?: UpdateServiceGroupSpecialDaySchedulingRequestSchedulingSpecialDays[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6666
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      schedulingDate: 'schedulingDate',
      schedulingSpecialDays: 'schedulingSpecialDays',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      schedulingDate: 'string',
      schedulingSpecialDays: { 'type': 'array', 'itemType': UpdateServiceGroupSpecialDaySchedulingRequestSchedulingSpecialDays },
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSpecialDaySchedulingResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateServiceGroupSpecialDaySchedulingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceGroupSpecialDaySchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceGroupSpecialDaySchedulingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequest extends $tea.Model {
  /**
   * @example
   * 2022-05-09 10:10:23
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LONG_TERM
   */
  expiredType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyObjectList?: UpdateSubscriptionRequestNotifyObjectList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  notifyObjectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyList?: UpdateSubscriptionRequestNotifyStrategyList[];
  /**
   * @example
   * 1个月
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeObjectList?: UpdateSubscriptionRequestScopeObjectList[];
  /**
   * @example
   * 2021-04-04 10:10:11
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80002020
   */
  subscriptionId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * newSubs244
   */
  subscriptionTitle?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      expiredType: 'expiredType',
      notifyObjectList: 'notifyObjectList',
      notifyObjectType: 'notifyObjectType',
      notifyStrategyList: 'notifyStrategyList',
      period: 'period',
      scope: 'scope',
      scopeObjectList: 'scopeObjectList',
      startTime: 'startTime',
      subscriptionId: 'subscriptionId',
      subscriptionTitle: 'subscriptionTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      expiredType: 'string',
      notifyObjectList: { 'type': 'array', 'itemType': UpdateSubscriptionRequestNotifyObjectList },
      notifyObjectType: 'string',
      notifyStrategyList: { 'type': 'array', 'itemType': UpdateSubscriptionRequestNotifyStrategyList },
      period: 'string',
      scope: 'string',
      scopeObjectList: { 'type': 'array', 'itemType': UpdateSubscriptionRequestScopeObjectList },
      startTime: 'string',
      subscriptionId: 'number',
      subscriptionTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  /**
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  clientToken?: string;
  /**
   * @example
   * 78799****@qq.com
   */
  email?: string;
  /**
   * @example
   * 18887878****
   */
  phone?: string;
  /**
   * @example
   * 2243564
   */
  ramId?: number;
  roleIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  userId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      email: 'email',
      phone: 'phone',
      ramId: 'ramId',
      roleIdList: 'roleIdList',
      userId: 'userId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      email: 'string',
      phone: 'string',
      ramId: 'number',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * c26f36de-1ec8-496a-a828-880676c5ef81
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGuideStatusRequest extends $tea.Model {
  /**
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  clientToken?: string;
  /**
   * @example
   * SERVICE_GROUP_GUIDE
   */
  guideAction?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      guideAction: 'guideAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      guideAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGuideStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD200FAE-E98F-496E-BFE6-4CE61E59A2E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateUserGuideStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGuideStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserGuideStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleRequest extends $tea.Model {
  /**
   * @example
   * 1111
   */
  routeRuleId?: number;
  testSourceEvents?: VerifyRouteRuleRequestTestSourceEvents[];
  static names(): { [key: string]: string } {
    return {
      routeRuleId: 'routeRuleId',
      testSourceEvents: 'testSourceEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeRuleId: 'number',
      testSourceEvents: { 'type': 'array', 'itemType': VerifyRouteRuleRequestTestSourceEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleResponseBody extends $tea.Model {
  data?: VerifyRouteRuleResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyRouteRuleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyRouteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingStatisticsResponseBodyData extends $tea.Model {
  appUserCount?: number;
  appUserCountFree?: number;
  emailSend?: number;
  emailSendFree?: number;
  escalationPlanCount?: number;
  escalationPlanCountFree?: number;
  eventReportApi?: number;
  eventReportApiFree?: number;
  hasScheduleServiceGroupCount?: number;
  hasScheduleServiceGroupCountFree?: number;
  imMsgSend?: number;
  imMsgSendFree?: number;
  ruleCount?: number;
  ruleCountFree?: number;
  smsSend?: number;
  smsSendFree?: number;
  subscriptionNotifyCount?: number;
  subscriptionNotifyCountFree?: number;
  type?: boolean;
  voiceSend?: number;
  voiceSendFree?: number;
  static names(): { [key: string]: string } {
    return {
      appUserCount: 'appUserCount',
      appUserCountFree: 'appUserCountFree',
      emailSend: 'emailSend',
      emailSendFree: 'emailSendFree',
      escalationPlanCount: 'escalationPlanCount',
      escalationPlanCountFree: 'escalationPlanCountFree',
      eventReportApi: 'eventReportApi',
      eventReportApiFree: 'eventReportApiFree',
      hasScheduleServiceGroupCount: 'hasScheduleServiceGroupCount',
      hasScheduleServiceGroupCountFree: 'hasScheduleServiceGroupCountFree',
      imMsgSend: 'imMsgSend',
      imMsgSendFree: 'imMsgSendFree',
      ruleCount: 'ruleCount',
      ruleCountFree: 'ruleCountFree',
      smsSend: 'smsSend',
      smsSendFree: 'smsSendFree',
      subscriptionNotifyCount: 'subscriptionNotifyCount',
      subscriptionNotifyCountFree: 'subscriptionNotifyCountFree',
      type: 'type',
      voiceSend: 'voiceSend',
      voiceSendFree: 'voiceSendFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUserCount: 'number',
      appUserCountFree: 'number',
      emailSend: 'number',
      emailSendFree: 'number',
      escalationPlanCount: 'number',
      escalationPlanCountFree: 'number',
      eventReportApi: 'number',
      eventReportApiFree: 'number',
      hasScheduleServiceGroupCount: 'number',
      hasScheduleServiceGroupCountFree: 'number',
      imMsgSend: 'number',
      imMsgSendFree: 'number',
      ruleCount: 'number',
      ruleCountFree: 'number',
      smsSend: 'number',
      smsSendFree: 'number',
      subscriptionNotifyCount: 'number',
      subscriptionNotifyCountFree: 'number',
      type: 'boolean',
      voiceSend: 'number',
      voiceSendFree: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P1
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      effection: 'effection',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effection: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableWebhook?: boolean;
  escalationPlanType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  noticeChannels?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  noticeObjects?: number[];
  noticeRoleList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  noticeTime?: string;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      enableWebhook: 'enableWebhook',
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjects: 'noticeObjects',
      noticeRoleList: 'noticeRoleList',
      noticeTime: 'noticeTime',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWebhook: 'boolean',
      escalationPlanType: 'string',
      noticeChannels: { 'type': 'array', 'itemType': 'string' },
      noticeObjects: { 'type': 'array', 'itemType': 'number' },
      noticeRoleList: { 'type': 'array', 'itemType': 'number' },
      noticeTime: 'string',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanRequestEscalationPlanRules extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  escalationPlanConditions?: CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions[];
  /**
   * @remarks
   * This parameter is required.
   */
  escalationPlanStrategies?: CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies[];
  /**
   * @example
   * UN_FINISH
   */
  escalationPlanType?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanConditions: 'escalationPlanConditions',
      escalationPlanStrategies: 'escalationPlanStrategies',
      escalationPlanType: 'escalationPlanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanConditions: { 'type': 'array', 'itemType': CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions },
      escalationPlanStrategies: { 'type': 'array', 'itemType': CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies },
      escalationPlanType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanRequestEscalationPlanScopeObjects extends $tea.Model {
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23433
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEscalationPlanResponseBodyData extends $tea.Model {
  /**
   * @example
   * 234532
   */
  escalationPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentResponseBodyData extends $tea.Model {
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIncidentSubtotalResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123
   */
  subtotalId?: number;
  static names(): { [key: string]: string } {
    return {
      subtotalId: 'subtotalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtotalId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationConfigResponseBodyData extends $tea.Model {
  /**
   * @example
   * 101
   */
  integrationConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      integrationConfigId: 'integrationConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemResponseBodyData extends $tea.Model {
  /**
   * @example
   * 321331
   */
  problemId?: number;
  static names(): { [key: string]: string } {
    return {
      problemId: 'problemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemEffectionServiceResponseBodyData extends $tea.Model {
  /**
   * @example
   * 6442430
   */
  effectionServiceId?: number;
  static names(): { [key: string]: string } {
    return {
      effectionServiceId: 'effectionServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectionServiceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemMeasureResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1231
   */
  measureId?: number;
  static names(): { [key: string]: string } {
    return {
      measureId: 'measureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measureId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemSubtotalResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123
   */
  subtotalId?: number;
  static names(): { [key: string]: string } {
    return {
      subtotalId: 'subtotalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtotalId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelineResponseBodyData extends $tea.Model {
  /**
   * @example
   * 102
   */
  problemTimelineId?: number;
  static names(): { [key: string]: string } {
    return {
      problemTimelineId: 'problemTimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemTimelineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProblemTimelinesResponseBodyData extends $tea.Model {
  problemTimelineIds?: number[];
  static names(): { [key: string]: string } {
    return {
      problemTimelineIds: 'problemTimelineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemTimelineIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRichTextResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1231
   */
  instanceId?: number;
  /**
   * @example
   * 0 事件 1告警 2 故障
   */
  instanceType?: number;
  /**
   * @example
   * 这是一个富文本
   */
  richText?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      richText: 'richText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceType: 'number',
      richText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleRequestRouteChildRulesConditions extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * payload.summary
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * equals
   */
  operationSymbol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operationSymbol: 'operationSymbol',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operationSymbol: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleRequestRouteChildRules extends $tea.Model {
  /**
   * @example
   * 0
   */
  childConditionRelation?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  conditions?: CreateRouteRuleRequestRouteChildRulesConditions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorSourceId?: number;
  problemLevel?: string;
  static names(): { [key: string]: string } {
    return {
      childConditionRelation: 'childConditionRelation',
      conditions: 'conditions',
      monitorSourceId: 'monitorSourceId',
      problemLevel: 'problemLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childConditionRelation: 'number',
      conditions: { 'type': 'array', 'itemType': CreateRouteRuleRequestRouteChildRulesConditions },
      monitorSourceId: 'number',
      problemLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteRuleResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1000
   */
  routeRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      routeRuleId: 'routeRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupRequestMonitorSourceTemplates extends $tea.Model {
  /**
   * @example
   * 111
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * xx
   */
  templateContent?: string;
  /**
   * @example
   * 111
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      templateContent: 'templateContent',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      templateContent: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers extends $tea.Model {
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 6666
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequestFastScheduling extends $tea.Model {
  /**
   * @example
   * FAST_CHOICE
   */
  dutyPlan?: string;
  schedulingUsers?: CreateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers[];
  /**
   * @example
   * 12
   */
  singleDuration?: number;
  /**
   * @example
   * DAY
   */
  singleDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dutyPlan: 'dutyPlan',
      schedulingUsers: 'schedulingUsers',
      singleDuration: 'singleDuration',
      singleDurationUnit: 'singleDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dutyPlan: 'string',
      schedulingUsers: { 'type': 'array', 'itemType': CreateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers },
      singleDuration: 'number',
      singleDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts extends $tea.Model {
  /**
   * @example
   * 1
   */
  cycleOrder?: number;
  /**
   * @example
   * 2020-10-13
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2020-08-13
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 11
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  /**
   * @example
   * 早班
   */
  shiftName?: string;
  /**
   * @example
   * fasle
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      cycleOrder: 'cycleOrder',
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      shiftName: 'shiftName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleOrder: 'number',
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      shiftName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts extends $tea.Model {
  /**
   * @example
   * 2021-10-01 08:00:00
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2021-09-01 08:00:00
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 1
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  schedulingUserName?: string;
  /**
   * @example
   * false
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      schedulingUserName: 'schedulingUserName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      schedulingUserName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceGroupSchedulingRequestFineScheduling extends $tea.Model {
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * DAY
   */
  periodUnit?: string;
  schedulingFineShifts?: CreateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: CreateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts[];
  /**
   * @example
   * MORNING_NIGHT
   */
  shiftType?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'period',
      periodUnit: 'periodUnit',
      schedulingFineShifts: 'schedulingFineShifts',
      schedulingTemplateFineShifts: 'schedulingTemplateFineShifts',
      shiftType: 'shiftType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      schedulingFineShifts: { 'type': 'array', 'itemType': CreateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts },
      schedulingTemplateFineShifts: { 'type': 'array', 'itemType': CreateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts },
      shiftType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestNotifyObjectList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  notifyObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      notifyObjectId: 'notifyObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestNotifyStrategyListPeriodChannel extends $tea.Model {
  /**
   * @example
   * SMS,PHONE
   */
  nonWorkday?: string;
  /**
   * @example
   * SMS,PHONE
   */
  workday?: string;
  static names(): { [key: string]: string } {
    return {
      nonWorkday: 'nonWorkday',
      workday: 'workday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonWorkday: 'string',
      workday: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestNotifyStrategyListStrategiesConditions extends $tea.Model {
  /**
   * @example
   * INCIDENT_TRIGGER
   */
  action?: string;
  /**
   * @example
   * HIGH
   */
  effection?: string;
  /**
   * @example
   * P1
   */
  level?: string;
  /**
   * @example
   * PROBLEM_UPDATE
   */
  problemNotifyType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      effection: 'effection',
      level: 'level',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      effection: 'string',
      level: 'string',
      problemNotifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestNotifyStrategyListStrategies extends $tea.Model {
  conditions?: CreateSubscriptionRequestNotifyStrategyListStrategiesConditions[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateSubscriptionRequestNotifyStrategyListStrategiesConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestNotifyStrategyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SMS,PHONE
   */
  channels?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCIDENT
   */
  instanceType?: number;
  periodChannel?: CreateSubscriptionRequestNotifyStrategyListPeriodChannel;
  /**
   * @remarks
   * This parameter is required.
   */
  strategies?: CreateSubscriptionRequestNotifyStrategyListStrategies[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      instanceType: 'instanceType',
      periodChannel: 'periodChannel',
      strategies: 'strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'string',
      instanceType: 'number',
      periodChannel: CreateSubscriptionRequestNotifyStrategyListPeriodChannel,
      strategies: { 'type': 'array', 'itemType': CreateSubscriptionRequestNotifyStrategyListStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionRequestScopeObjectList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 101
   */
  subscriptionId?: number;
  static names(): { [key: string]: string } {
    return {
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantApplicationResponseBodyData extends $tea.Model {
  /**
   * @example
   * http://xxxx
   */
  openUrl?: string;
  /**
   * @example
   * OPENED 已开通 OPENING 开通中
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      openUrl: 'openUrl',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openUrl: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureLinkResponseBodyDataLinks extends $tea.Model {
  /**
   * @remarks
   * oss key
   * 
   * @example
   * problem/38b2a36d-484d-4242-b9cf-d243e53a82c6
   */
  key?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * http://gam-objects-bucket.oss-cn-shanghai.aliyuncs.com/problem/38b2a36d-484d-4242-b9cf-d243e53a82c6?Expires=1625662477&OSSAccessKeyId=LTAI5tEoRVPw8GMy1iLRCno7&Signature=1NFnt%2BnudD%2F%2BHVc31b6v5%2FFxoqg%3D
   */
  link?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      link: 'link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      link: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureLinkResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * array
   */
  links?: GeneratePictureLinkResponseBodyDataLinks[];
  static names(): { [key: string]: string } {
    return {
      links: 'links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      links: { 'type': 'array', 'itemType': GeneratePictureLinkResponseBodyDataLinks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignRequestFiles extends $tea.Model {
  /**
   * @example
   * 文件A
   */
  fileName?: string;
  /**
   * @example
   * 100
   */
  fileSize?: number;
  /**
   * @example
   * JPG
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignResponseBodyDataFiles extends $tea.Model {
  /**
   * @example
   * 文件A
   */
  fileName?: string;
  /**
   * @example
   * 100
   */
  fileSize?: number;
  /**
   * @example
   * JPG
   */
  fileType?: string;
  /**
   * @remarks
   * oss key
   * 
   * @example
   * problem/25a2316c-b08d-41a5-9f41-b3185d529277
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileSize: 'fileSize',
      fileType: 'fileType',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneratePictureUploadSignResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * accessKeyId
   * 
   * @example
   * LTAI1tEoRVPw8GMy1iLRCno7
   */
  accessKeyId?: string;
  /**
   * @remarks
   * oss bucket name
   * 
   * @example
   * gam-objects-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * files
   */
  files?: GeneratePictureUploadSignResponseBodyDataFiles[];
  /**
   * @remarks
   * policy
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMS0wNy0xM1QwNDowOTo0NS4yODJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInByb2JsZW0iXV19
   */
  policy?: string;
  /**
   * @remarks
   * signature
   * 
   * @example
   * SHqvIkwUNQd8Hervklir2K8U+ts=
   */
  signature?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://gam-objects-bucket.oss-cn-shanghai.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      bucketName: 'bucketName',
      files: 'files',
      policy: 'policy',
      signature: 'signature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      files: { 'type': 'array', 'itemType': GeneratePictureUploadSignResponseBodyDataFiles },
      policy: 'string',
      signature: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureLinkResponseBodyDataLinks extends $tea.Model {
  /**
   * @remarks
   * oss key
   * 
   * @example
   * problem/xxxxxxxxxx-484d-4242-b9cf-xxxxxxxxxx
   */
  key?: string;
  /**
   * @example
   * http://xxxx-xxxx-bucket.oss-cn-xxxx.aliyuncs.com/pxxxx/38xxxxd-4789-4242-b9cfxxxxxxxxc6?Expires=1xxxxxxxxxx7&OSSAccessKeyId=xxxxxxxxxxxxxx7&Signature=xxxxxxxxxxxxxxxxxxxxxx
   */
  link?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      link: 'link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      link: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureLinkResponseBodyData extends $tea.Model {
  links?: GenerateProblemPictureLinkResponseBodyDataLinks[];
  static names(): { [key: string]: string } {
    return {
      links: 'links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      links: { 'type': 'array', 'itemType': GenerateProblemPictureLinkResponseBodyDataLinks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProblemPictureUploadSignResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * ossaccessKeyId
   * 
   * @example
   * XXXXXXXH8GMy1iLRCno7
   */
  accessKeyId?: string;
  /**
   * @remarks
   * oss bucket name
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  bucketName?: string;
  /**
   * @remarks
   * oss key
   * 
   * @example
   * problem/xxxxxxxxxxxxxxxx1-b3185d529277
   */
  key?: string;
  /**
   * @remarks
   * policy
   * 
   * @example
   * eyJleHBpcmF0a0p0IjoiMjAyMS0wNy0xM1QwNDowOTo0NS4yODJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInByb2JsZW0iXV19
   */
  policy?: string;
  /**
   * @remarks
   * signature
   * 
   * @example
   * SHqvIkwUNQd0o0rvklir2K8U+ts=
   */
  signature?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://xxx-xxx-bucket.oss-cn-shanghai.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      bucketName: 'bucketName',
      key: 'key',
      policy: 'policy',
      signature: 'signature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanConditions extends $tea.Model {
  /**
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @example
   * P1
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      effection: 'effection',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effection: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeObjectList extends $tea.Model {
  /**
   * @example
   * 234
   */
  noticeObjectId?: number;
  /**
   * @example
   * 张老三
   */
  noticeObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      noticeObjectId: 'noticeObjectId',
      noticeObjectName: 'noticeObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeObjectId: 'number',
      noticeObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeRoleObjectList extends $tea.Model {
  id?: number;
  name?: string;
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

export class GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesServiceGroups extends $tea.Model {
  /**
   * @example
   * 343
   */
  id?: number;
  /**
   * @example
   * VCD是
   */
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategies extends $tea.Model {
  /**
   * @example
   * true
   */
  enableWebhook?: boolean;
  /**
   * @example
   * UN_ACKNOWLEDGE
   */
  escalationPlanType?: string;
  /**
   * @example
   * SMS
   */
  noticeChannels?: string;
  noticeObjectList?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeObjectList[];
  noticeObjects?: number[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeRoleObjectList[];
  /**
   * @example
   * 40
   */
  noticeTime?: number;
  serviceGroups?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesServiceGroups[];
  static names(): { [key: string]: string } {
    return {
      enableWebhook: 'enableWebhook',
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjectList: 'noticeObjectList',
      noticeObjects: 'noticeObjects',
      noticeRoleList: 'noticeRoleList',
      noticeRoleObjectList: 'noticeRoleObjectList',
      noticeTime: 'noticeTime',
      serviceGroups: 'serviceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWebhook: 'boolean',
      escalationPlanType: 'string',
      noticeChannels: 'string',
      noticeObjectList: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeObjectList },
      noticeObjects: { 'type': 'array', 'itemType': 'number' },
      noticeRoleList: { 'type': 'array', 'itemType': 'number' },
      noticeRoleObjectList: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeRoleObjectList },
      noticeTime: 'number',
      serviceGroups: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesServiceGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanRules extends $tea.Model {
  escalationPlanConditions?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanConditions[];
  /**
   * @example
   * 345
   */
  escalationPlanRuleId?: number;
  escalationPlanStrategies?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategies[];
  static names(): { [key: string]: string } {
    return {
      escalationPlanConditions: 'escalationPlanConditions',
      escalationPlanRuleId: 'escalationPlanRuleId',
      escalationPlanStrategies: 'escalationPlanStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanConditions: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanConditions },
      escalationPlanRuleId: 'number',
      escalationPlanStrategies: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyDataEscalationPlanScopeObjects extends $tea.Model {
  escalationPlanScopeObjects?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  scopeObjectDeletedType?: number;
  /**
   * @example
   * 234
   */
  scopeObjectId?: number;
  /**
   * @example
   * xx服务
   */
  scopeObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      scope: 'scope',
      scopeObjectDeletedType: 'scopeObjectDeletedType',
      scopeObjectId: 'scopeObjectId',
      scopeObjectName: 'scopeObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanScopeObjects: 'number',
      scope: 'string',
      scopeObjectDeletedType: 'number',
      scopeObjectId: 'number',
      scopeObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEscalationPlanResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-09-09 09:09:09
   */
  createTime?: string;
  /**
   * @example
   * 描述1234
   */
  escalationPlanDescription?: string;
  /**
   * @example
   * 2345
   */
  escalationPlanId?: number;
  /**
   * @example
   * 升级计划234
   */
  escalationPlanName?: string;
  escalationPlanRules?: GetEscalationPlanResponseBodyDataEscalationPlanRules[];
  escalationPlanScopeObjects?: GetEscalationPlanResponseBodyDataEscalationPlanScopeObjects[];
  isGlobal?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      escalationPlanDescription: 'escalationPlanDescription',
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      escalationPlanRules: 'escalationPlanRules',
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      isGlobal: 'isGlobal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      escalationPlanDescription: 'string',
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      escalationPlanRules: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanRules },
      escalationPlanScopeObjects: { 'type': 'array', 'itemType': GetEscalationPlanResponseBodyDataEscalationPlanScopeObjects },
      isGlobal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventResponseBodyData extends $tea.Model {
  /**
   * @example
   * “”
   */
  eventJson?: string;
  /**
   * @example
   * 2002-09-08 15:30:35
   */
  eventTime?: string;
  /**
   * @example
   * 1
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventJson: 'eventJson',
      eventTime: 'eventTime',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventJson: 'string',
      eventTime: 'string',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHomePageGuidanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * true
   */
  notifySubscriptionStatus?: boolean;
  /**
   * @example
   * true
   */
  serviceGroupStatus?: boolean;
  /**
   * @example
   * true
   */
  serviceStatus?: boolean;
  /**
   * @example
   * true
   */
  usersStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      notifySubscriptionStatus: 'notifySubscriptionStatus',
      serviceGroupStatus: 'serviceGroupStatus',
      serviceStatus: 'serviceStatus',
      usersStatus: 'usersStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifySubscriptionStatus: 'boolean',
      serviceGroupStatus: 'boolean',
      serviceStatus: 'boolean',
      usersStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentResponseBodyData extends $tea.Model {
  assignToWhoIsValid?: number;
  /**
   * @example
   * 12312
   */
  assignUserId?: number;
  /**
   * @example
   * 小明
   */
  assignUserName?: string;
  /**
   * @example
   * 1390000****
   */
  assignUserPhone?: string;
  /**
   * @example
   * 2020-01-10 00:00:00
   */
  createTime?: string;
  defaultAssignToWho?: number;
  defaultAssignToWhoIsValid?: number;
  defaultAssignToWhoName?: string;
  /**
   * @example
   * 3000000
   */
  durationTime?: number;
  /**
   * @example
   * LOW
   */
  effect?: string;
  /**
   * @example
   * 事件描述
   */
  incidentDescription?: string;
  /**
   * @example
   * 3213
   */
  incidentId?: number;
  /**
   * @example
   * P4
   */
  incidentLevel?: string;
  /**
   * @example
   * I3443831000000016247759753663894
   */
  incidentNumber?: string;
  /**
   * @example
   * FINISHE
   */
  incidentStatus?: string;
  /**
   * @example
   * 事件标题
   */
  incidentTitle?: string;
  /**
   * @example
   * true
   */
  isManual?: boolean;
  /**
   * @example
   * true
   */
  isUpgrade?: boolean;
  /**
   * @example
   * 1 短信  2  邮件  3  电话  4 企微群 5 钉钉群 6飞书 7 群通知 8 slack
   */
  notifyChannels?: string[];
  /**
   * @example
   * 232113
   */
  problemId?: number;
  /**
   * @example
   * 3332113231453321
   */
  problemNumber?: string;
  relRouteRuleDeleteType?: number;
  relServiceDeleteType?: number;
  relServiceGroupIsValid?: number;
  /**
   * @example
   * 关联服务描述
   */
  relatedServiceDescription?: string;
  /**
   * @example
   * 13000
   */
  relatedServiceGroupId?: number;
  /**
   * @example
   * 服务组A
   */
  relatedServiceGroupName?: string;
  /**
   * @example
   * 312312
   */
  relatedServiceId?: number;
  /**
   * @example
   * 服务A
   */
  relatedServiceName?: string;
  /**
   * @example
   * 3123
   */
  routeRuleId?: number;
  /**
   * @example
   * 流转规则A
   */
  routeRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      assignToWhoIsValid: 'assignToWhoIsValid',
      assignUserId: 'assignUserId',
      assignUserName: 'assignUserName',
      assignUserPhone: 'assignUserPhone',
      createTime: 'createTime',
      defaultAssignToWho: 'defaultAssignToWho',
      defaultAssignToWhoIsValid: 'defaultAssignToWhoIsValid',
      defaultAssignToWhoName: 'defaultAssignToWhoName',
      durationTime: 'durationTime',
      effect: 'effect',
      incidentDescription: 'incidentDescription',
      incidentId: 'incidentId',
      incidentLevel: 'incidentLevel',
      incidentNumber: 'incidentNumber',
      incidentStatus: 'incidentStatus',
      incidentTitle: 'incidentTitle',
      isManual: 'isManual',
      isUpgrade: 'isUpgrade',
      notifyChannels: 'notifyChannels',
      problemId: 'problemId',
      problemNumber: 'problemNumber',
      relRouteRuleDeleteType: 'relRouteRuleDeleteType',
      relServiceDeleteType: 'relServiceDeleteType',
      relServiceGroupIsValid: 'relServiceGroupIsValid',
      relatedServiceDescription: 'relatedServiceDescription',
      relatedServiceGroupId: 'relatedServiceGroupId',
      relatedServiceGroupName: 'relatedServiceGroupName',
      relatedServiceId: 'relatedServiceId',
      relatedServiceName: 'relatedServiceName',
      routeRuleId: 'routeRuleId',
      routeRuleName: 'routeRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignToWhoIsValid: 'number',
      assignUserId: 'number',
      assignUserName: 'string',
      assignUserPhone: 'string',
      createTime: 'string',
      defaultAssignToWho: 'number',
      defaultAssignToWhoIsValid: 'number',
      defaultAssignToWhoName: 'string',
      durationTime: 'number',
      effect: 'string',
      incidentDescription: 'string',
      incidentId: 'number',
      incidentLevel: 'string',
      incidentNumber: 'string',
      incidentStatus: 'string',
      incidentTitle: 'string',
      isManual: 'boolean',
      isUpgrade: 'boolean',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      problemId: 'number',
      problemNumber: 'string',
      relRouteRuleDeleteType: 'number',
      relServiceDeleteType: 'number',
      relServiceGroupIsValid: 'number',
      relatedServiceDescription: 'string',
      relatedServiceGroupId: 'number',
      relatedServiceGroupName: 'string',
      relatedServiceId: 'number',
      relatedServiceName: 'string',
      routeRuleId: 'number',
      routeRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentListByIdListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  assignToWhoIsValid?: number;
  /**
   * @example
   * 12312
   */
  assignUserId?: number;
  assignUserName?: string;
  /**
   * @example
   * 139****1111
   */
  assignUserPhone?: string;
  /**
   * @example
   * 2010-03-09 15:53:45
   */
  createTime?: string;
  /**
   * @example
   * 1212
   */
  defaultAssignToWho?: number;
  /**
   * @example
   * 1
   */
  defaultAssignToWhoIsValid?: number;
  defaultAssignToWhoName?: string;
  /**
   * @example
   * 3000000
   */
  durationTime?: string;
  /**
   * @example
   * LOW
   */
  effect?: string;
  incidentDescription?: string;
  /**
   * @example
   * 3213
   */
  incidentId?: number;
  /**
   * @example
   * P4
   */
  incidentLevel?: string;
  /**
   * @example
   * I13002001
   */
  incidentNumber?: string;
  /**
   * @example
   * FINISHE
   */
  incidentStatus?: string;
  incidentTitle?: string;
  /**
   * @example
   * true
   */
  isManual?: boolean;
  /**
   * @example
   * true
   */
  isUpgrade?: boolean;
  notifyChannels?: string[];
  /**
   * @example
   * 12312
   */
  problemId?: number;
  /**
   * @example
   * P1231231
   */
  problemNumber?: string;
  /**
   * @example
   * 1
   */
  relRouteRuleDeleteType?: number;
  /**
   * @example
   * 1
   */
  relServiceDeleteType?: number;
  /**
   * @example
   * 1
   */
  relServiceGroupIsValid?: number;
  relatedServiceDescription?: string;
  /**
   * @example
   * 13000
   */
  relatedServiceGroupId?: number;
  relatedServiceGroupName?: string;
  /**
   * @example
   * 213123
   */
  relatedServiceId?: number;
  relatedServiceName?: string;
  /**
   * @example
   * 10000
   */
  routeRuleId?: number;
  routeRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      assignToWhoIsValid: 'assignToWhoIsValid',
      assignUserId: 'assignUserId',
      assignUserName: 'assignUserName',
      assignUserPhone: 'assignUserPhone',
      createTime: 'createTime',
      defaultAssignToWho: 'defaultAssignToWho',
      defaultAssignToWhoIsValid: 'defaultAssignToWhoIsValid',
      defaultAssignToWhoName: 'defaultAssignToWhoName',
      durationTime: 'durationTime',
      effect: 'effect',
      incidentDescription: 'incidentDescription',
      incidentId: 'incidentId',
      incidentLevel: 'incidentLevel',
      incidentNumber: 'incidentNumber',
      incidentStatus: 'incidentStatus',
      incidentTitle: 'incidentTitle',
      isManual: 'isManual',
      isUpgrade: 'isUpgrade',
      notifyChannels: 'notifyChannels',
      problemId: 'problemId',
      problemNumber: 'problemNumber',
      relRouteRuleDeleteType: 'relRouteRuleDeleteType',
      relServiceDeleteType: 'relServiceDeleteType',
      relServiceGroupIsValid: 'relServiceGroupIsValid',
      relatedServiceDescription: 'relatedServiceDescription',
      relatedServiceGroupId: 'relatedServiceGroupId',
      relatedServiceGroupName: 'relatedServiceGroupName',
      relatedServiceId: 'relatedServiceId',
      relatedServiceName: 'relatedServiceName',
      routeRuleId: 'routeRuleId',
      routeRuleName: 'routeRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignToWhoIsValid: 'number',
      assignUserId: 'number',
      assignUserName: 'string',
      assignUserPhone: 'string',
      createTime: 'string',
      defaultAssignToWho: 'number',
      defaultAssignToWhoIsValid: 'number',
      defaultAssignToWhoName: 'string',
      durationTime: 'string',
      effect: 'string',
      incidentDescription: 'string',
      incidentId: 'number',
      incidentLevel: 'string',
      incidentNumber: 'string',
      incidentStatus: 'string',
      incidentTitle: 'string',
      isManual: 'boolean',
      isUpgrade: 'boolean',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      problemId: 'number',
      problemNumber: 'string',
      relRouteRuleDeleteType: 'number',
      relServiceDeleteType: 'number',
      relServiceGroupIsValid: 'number',
      relatedServiceDescription: 'string',
      relatedServiceGroupId: 'number',
      relatedServiceGroupName: 'string',
      relatedServiceId: 'number',
      relatedServiceName: 'string',
      routeRuleId: 'number',
      routeRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentStatisticsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 113
   */
  allFinish?: number;
  /**
   * @example
   * 12
   */
  allResponse?: number;
  /**
   * @example
   * 11
   */
  myFinish?: number;
  /**
   * @example
   * 1
   */
  myResponse?: number;
  static names(): { [key: string]: string } {
    return {
      allFinish: 'allFinish',
      allResponse: 'allResponse',
      myFinish: 'myFinish',
      myResponse: 'myResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFinish: 'number',
      allResponse: 'number',
      myFinish: 'number',
      myResponse: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentSubtotalCountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * 24343424234
   */
  requestId?: string;
  /**
   * @remarks
   * map
   * 
   * @example
   * {12:12}
   */
  subtotalCount?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      subtotalCount: 'subtotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subtotalCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationConfigResponseBodyData extends $tea.Model {
  /**
   * @example
   * 601FA6A2-AC5C-4B59-BE11-378F887A6A11
   */
  accessKey?: string;
  /**
   * @example
   * 101
   */
  integrationConfigId?: number;
  /**
   * @example
   * True
   */
  isReceivedEvent?: boolean;
  /**
   * @example
   * 65
   */
  monitorSourceId?: number;
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * Zabbix
   */
  monitorSourceShortName?: string;
  /**
   * @example
   * INTEGRATED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      integrationConfigId: 'integrationConfigId',
      isReceivedEvent: 'isReceivedEvent',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      monitorSourceShortName: 'monitorSourceShortName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      integrationConfigId: 'number',
      isReceivedEvent: 'boolean',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      monitorSourceShortName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataCancelProblemOperateLogs extends $tea.Model {
  /**
   * @example
   * 取消故障
   */
  actionName?: string;
  /**
   * @example
   * 2020-09-08 15:38:38
   */
  actionTime?: string;
  /**
   * @example
   * 王宇
   */
  operator?: string;
  /**
   * @example
   * 66666
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionTime: 'actionTime',
      operator: 'operator',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionTime: 'string',
      operator: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataCoordinationGroups extends $tea.Model {
  isValid?: number;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 清扫大队
   */
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isValid: 'isValid',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'number',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataEffectionServices extends $tea.Model {
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * P1
   */
  effectionLevel?: number;
  /**
   * @example
   * 1
   */
  effectionServiceId?: number;
  /**
   * @example
   * RESTORED
   */
  effectionStatus?: number;
  serviceDeleteType?: number;
  /**
   * @example
   * 购物车
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectionLevel: 'effectionLevel',
      effectionServiceId: 'effectionServiceId',
      effectionStatus: 'effectionStatus',
      serviceDeleteType: 'serviceDeleteType',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectionLevel: 'number',
      effectionServiceId: 'number',
      effectionStatus: 'number',
      serviceDeleteType: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataHandingProblemOperateLogs extends $tea.Model {
  /**
   * @example
   * 取消故障
   */
  actionName?: string;
  /**
   * @example
   * 2010-03-09 15:53:45
   */
  actionTime?: string;
  /**
   * @example
   * 王宇
   */
  operator?: string;
  /**
   * @example
   * 233
   */
  userId?: number;
  userIsValid?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionTime: 'actionTime',
      operator: 'operator',
      userId: 'userId',
      userIsValid: 'userIsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionTime: 'string',
      operator: 'string',
      userId: 'number',
      userIsValid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataReplayProblemOperateLogs extends $tea.Model {
  /**
   * @example
   * 复盘故障
   */
  actionName?: string;
  /**
   * @example
   * 2020-08-08 15:39:39
   */
  actionTime?: string;
  /**
   * @example
   * 周宇凡
   */
  operator?: string;
  /**
   * @example
   * 2323
   */
  userId?: number;
  userIsValid?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionTime: 'actionTime',
      operator: 'operator',
      userId: 'userId',
      userIsValid: 'userIsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionTime: 'string',
      operator: 'string',
      userId: 'number',
      userIsValid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataReplayingProblemOperateLogs extends $tea.Model {
  /**
   * @example
   * 复盘故障
   */
  actionName?: string;
  /**
   * @example
   * 2020-08-08 15:39:39
   */
  actionTime?: string;
  /**
   * @example
   * 刘杰
   */
  operator?: string;
  /**
   * @example
   * 用户id
   */
  userId?: number;
  userIsValid?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionTime: 'actionTime',
      operator: 'operator',
      userId: 'userId',
      userIsValid: 'userIsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionTime: 'string',
      operator: 'string',
      userId: 'number',
      userIsValid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataRestoredProblemOperateLogs extends $tea.Model {
  /**
   * @example
   * 恢复故障
   */
  actionName?: string;
  /**
   * @example
   * 2020-08-08 15:39:39
   */
  actionTime?: string;
  /**
   * @example
   * 王宇
   */
  operator?: string;
  /**
   * @example
   * 3232
   */
  userId?: number;
  userIsValid?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionTime: 'actionTime',
      operator: 'operator',
      userId: 'userId',
      userIsValid: 'userIsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionTime: 'string',
      operator: 'string',
      userId: 'number',
      userIsValid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyDataTimelines extends $tea.Model {
  /**
   * @example
   * 1,2,3,4,5,7,6,8,9,10
   */
  keyNode?: string;
  static names(): { [key: string]: string } {
    return {
      keyNode: 'keyNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyNode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemResponseBodyData extends $tea.Model {
  cancelProblemOperateLogs?: GetProblemResponseBodyDataCancelProblemOperateLogs[];
  /**
   * @example
   * 取消理由
   */
  cancelReason?: number;
  /**
   * @example
   * 理由
   */
  cancelReasonDescription?: string;
  coordinationGroups?: GetProblemResponseBodyDataCoordinationGroups[];
  /**
   * @example
   * 2010-03-09 15:53:45
   */
  createTime?: string;
  /**
   * @example
   * 2010-03-09 15:53:45
   */
  discoverTime?: string;
  /**
   * @example
   * 300000
   */
  durationTime?: number;
  effectionServices?: GetProblemResponseBodyDataEffectionServices[];
  /**
   * @example
   * feedback
   */
  feedback?: string;
  handingProblemOperateLogs?: GetProblemResponseBodyDataHandingProblemOperateLogs[];
  /**
   * @example
   * 130000032
   */
  incidentId?: number;
  /**
   * @example
   * I3443835000012016260833157948165
   */
  incidentNumber?: string;
  isRuleTrigger?: boolean;
  /**
   * @example
   * 王宇
   */
  mainHandler?: number;
  /**
   * @example
   * 2000
   */
  mainHandlerId?: number;
  mainHandlerIsValid?: number;
  /**
   * @example
   * 1308987****
   */
  mainHandlerPhone?: string;
  /**
   * @example
   * 原因
   */
  preliminaryReason?: string;
  /**
   * @remarks
   * ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  problemId?: number;
  /**
   * @example
   * P1
   */
  problemLevel?: number;
  /**
   * @example
   * 故障
   */
  problemName?: string;
  /**
   * @example
   * P34438300010030116260833538987481
   */
  problemNumber?: string;
  /**
   * @example
   * HANDLING
   */
  problemStatus?: number;
  /**
   * @example
   * 摘要
   */
  progressSummary?: string;
  /**
   * @example
   * 1231231
   */
  progressSummaryRichTextId?: number;
  /**
   * @example
   * 2010-03-09 15:53:45
   */
  recoveryTime?: string;
  /**
   * @example
   * 1
   */
  relatedServiceId?: number;
  replayProblemOperateLogs?: GetProblemResponseBodyDataReplayProblemOperateLogs[];
  replayingProblemOperateLogs?: GetProblemResponseBodyDataReplayingProblemOperateLogs[];
  restoredProblemOperateLogs?: GetProblemResponseBodyDataRestoredProblemOperateLogs[];
  /**
   * @remarks
   * serviceDeleteType
   */
  serviceDeleteType?: number;
  /**
   * @example
   * 服务
   */
  serviceName?: string;
  timelines?: GetProblemResponseBodyDataTimelines[];
  static names(): { [key: string]: string } {
    return {
      cancelProblemOperateLogs: 'cancelProblemOperateLogs',
      cancelReason: 'cancelReason',
      cancelReasonDescription: 'cancelReasonDescription',
      coordinationGroups: 'coordinationGroups',
      createTime: 'createTime',
      discoverTime: 'discoverTime',
      durationTime: 'durationTime',
      effectionServices: 'effectionServices',
      feedback: 'feedback',
      handingProblemOperateLogs: 'handingProblemOperateLogs',
      incidentId: 'incidentId',
      incidentNumber: 'incidentNumber',
      isRuleTrigger: 'isRuleTrigger',
      mainHandler: 'mainHandler',
      mainHandlerId: 'mainHandlerId',
      mainHandlerIsValid: 'mainHandlerIsValid',
      mainHandlerPhone: 'mainHandlerPhone',
      preliminaryReason: 'preliminaryReason',
      problemId: 'problemId',
      problemLevel: 'problemLevel',
      problemName: 'problemName',
      problemNumber: 'problemNumber',
      problemStatus: 'problemStatus',
      progressSummary: 'progressSummary',
      progressSummaryRichTextId: 'progressSummaryRichTextId',
      recoveryTime: 'recoveryTime',
      relatedServiceId: 'relatedServiceId',
      replayProblemOperateLogs: 'replayProblemOperateLogs',
      replayingProblemOperateLogs: 'replayingProblemOperateLogs',
      restoredProblemOperateLogs: 'restoredProblemOperateLogs',
      serviceDeleteType: 'serviceDeleteType',
      serviceName: 'serviceName',
      timelines: 'timelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelProblemOperateLogs: { 'type': 'array', 'itemType': GetProblemResponseBodyDataCancelProblemOperateLogs },
      cancelReason: 'number',
      cancelReasonDescription: 'string',
      coordinationGroups: { 'type': 'array', 'itemType': GetProblemResponseBodyDataCoordinationGroups },
      createTime: 'string',
      discoverTime: 'string',
      durationTime: 'number',
      effectionServices: { 'type': 'array', 'itemType': GetProblemResponseBodyDataEffectionServices },
      feedback: 'string',
      handingProblemOperateLogs: { 'type': 'array', 'itemType': GetProblemResponseBodyDataHandingProblemOperateLogs },
      incidentId: 'number',
      incidentNumber: 'string',
      isRuleTrigger: 'boolean',
      mainHandler: 'number',
      mainHandlerId: 'number',
      mainHandlerIsValid: 'number',
      mainHandlerPhone: 'string',
      preliminaryReason: 'string',
      problemId: 'number',
      problemLevel: 'number',
      problemName: 'string',
      problemNumber: 'string',
      problemStatus: 'number',
      progressSummary: 'string',
      progressSummaryRichTextId: 'number',
      recoveryTime: 'string',
      relatedServiceId: 'number',
      replayProblemOperateLogs: { 'type': 'array', 'itemType': GetProblemResponseBodyDataReplayProblemOperateLogs },
      replayingProblemOperateLogs: { 'type': 'array', 'itemType': GetProblemResponseBodyDataReplayingProblemOperateLogs },
      restoredProblemOperateLogs: { 'type': 'array', 'itemType': GetProblemResponseBodyDataRestoredProblemOperateLogs },
      serviceDeleteType: 'number',
      serviceName: 'string',
      timelines: { 'type': 'array', 'itemType': GetProblemResponseBodyDataTimelines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemEffectionServiceResponseBodyData extends $tea.Model {
  /**
   * @example
   * ew
   */
  description?: string;
  /**
   * @example
   * 6442430
   */
  effectionServiceId?: number;
  /**
   * @example
   * P2
   */
  level?: number;
  picUrl?: string[];
  /**
   * @example
   * 170000000
   */
  serviceId?: number;
  /**
   * @example
   * 哈哈
   */
  serviceName?: string;
  /**
   * @example
   * UN_RECOVERED
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectionServiceId: 'effectionServiceId',
      level: 'level',
      picUrl: 'picUrl',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectionServiceId: 'number',
      level: 'number',
      picUrl: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'number',
      serviceName: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemImprovementResponseBodyDataMeasureList extends $tea.Model {
  checkStandard?: string;
  /**
   * @example
   * 12
   */
  checkUserId?: number;
  checkUserIsValid?: number;
  checkUserName?: string;
  content?: string;
  /**
   * @example
   * 212
   */
  directorId?: number;
  directorIsValid?: number;
  directorName?: string;
  /**
   * @example
   * 12312
   */
  measureId?: number;
  /**
   * @example
   * 2021-05-01 00:00:00
   */
  planFinishTime?: string;
  /**
   * @example
   * 3121
   */
  stalkerId?: number;
  stalkerIsValid?: number;
  stalkerName?: string;
  /**
   * @example
   * UNIMPROVED
   */
  status?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkStandard: 'checkStandard',
      checkUserId: 'checkUserId',
      checkUserIsValid: 'checkUserIsValid',
      checkUserName: 'checkUserName',
      content: 'content',
      directorId: 'directorId',
      directorIsValid: 'directorIsValid',
      directorName: 'directorName',
      measureId: 'measureId',
      planFinishTime: 'planFinishTime',
      stalkerId: 'stalkerId',
      stalkerIsValid: 'stalkerIsValid',
      stalkerName: 'stalkerName',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStandard: 'string',
      checkUserId: 'number',
      checkUserIsValid: 'number',
      checkUserName: 'string',
      content: 'string',
      directorId: 'number',
      directorIsValid: 'number',
      directorName: 'string',
      measureId: 'number',
      planFinishTime: 'string',
      stalkerId: 'number',
      stalkerIsValid: 'number',
      stalkerName: 'string',
      status: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemImprovementResponseBodyData extends $tea.Model {
  customProblemReason?: string;
  /**
   * @example
   * 1
   */
  discoverSource?: string;
  /**
   * @example
   * 12312
   */
  dutyDepartmentId?: string;
  dutyDepartmentName?: string;
  /**
   * @example
   * 231
   */
  dutyUserId?: number;
  dutyUserIsValid?: number;
  dutyUserName?: string;
  /**
   * @example
   * 13098898****
   */
  dutyUserPhone?: string;
  /**
   * @example
   * 3
   */
  injectionMode?: string;
  /**
   * @example
   * true
   */
  isManual?: boolean;
  measureList?: GetProblemImprovementResponseBodyDataMeasureList[];
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * 231231
   */
  problemId?: string;
  problemReason?: string;
  /**
   * @example
   * 2
   */
  recentActivity?: string;
  /**
   * @example
   * 2
   */
  recoveryMode?: string;
  relationChanges?: string;
  remark?: string;
  /**
   * @example
   * 23123
   */
  replayDutyUserId?: number;
  replayDutyUserIsValid?: number;
  replayDutyUserName?: string;
  /**
   * @example
   * 1308787****
   */
  replayDutyUserPhone?: string;
  /**
   * @example
   * 1
   */
  userReport?: number;
  static names(): { [key: string]: string } {
    return {
      customProblemReason: 'customProblemReason',
      discoverSource: 'discoverSource',
      dutyDepartmentId: 'dutyDepartmentId',
      dutyDepartmentName: 'dutyDepartmentName',
      dutyUserId: 'dutyUserId',
      dutyUserIsValid: 'dutyUserIsValid',
      dutyUserName: 'dutyUserName',
      dutyUserPhone: 'dutyUserPhone',
      injectionMode: 'injectionMode',
      isManual: 'isManual',
      measureList: 'measureList',
      monitorSourceName: 'monitorSourceName',
      problemId: 'problemId',
      problemReason: 'problemReason',
      recentActivity: 'recentActivity',
      recoveryMode: 'recoveryMode',
      relationChanges: 'relationChanges',
      remark: 'remark',
      replayDutyUserId: 'replayDutyUserId',
      replayDutyUserIsValid: 'replayDutyUserIsValid',
      replayDutyUserName: 'replayDutyUserName',
      replayDutyUserPhone: 'replayDutyUserPhone',
      userReport: 'userReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProblemReason: 'string',
      discoverSource: 'string',
      dutyDepartmentId: 'string',
      dutyDepartmentName: 'string',
      dutyUserId: 'number',
      dutyUserIsValid: 'number',
      dutyUserName: 'string',
      dutyUserPhone: 'string',
      injectionMode: 'string',
      isManual: 'boolean',
      measureList: { 'type': 'array', 'itemType': GetProblemImprovementResponseBodyDataMeasureList },
      monitorSourceName: 'string',
      problemId: 'string',
      problemReason: 'string',
      recentActivity: 'string',
      recoveryMode: 'string',
      relationChanges: 'string',
      remark: 'string',
      replayDutyUserId: 'number',
      replayDutyUserIsValid: 'number',
      replayDutyUserName: 'string',
      replayDutyUserPhone: 'string',
      userReport: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataMailUsers extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataMail extends $tea.Model {
  /**
   * @example
   * 123
   */
  count?: number;
  users?: GetProblemPreviewResponseBodyDataMailUsers[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      users: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataMailUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataProblemCoordinationGroups extends $tea.Model {
  serviceGroupDescription?: string;
  /**
   * @example
   * 1231
   */
  serviceGroupId?: number;
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupDescription: 'string',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataProblemEffectionServices extends $tea.Model {
  /**
   * @example
   * 1231
   */
  serviceId?: number;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'serviceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataProblem extends $tea.Model {
  coordinationGroups?: GetProblemPreviewResponseBodyDataProblemCoordinationGroups[];
  /**
   * @example
   * 2021-02-21 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 2021-02-21 00:00:00
   */
  discoverTime?: string;
  effectionServices?: GetProblemPreviewResponseBodyDataProblemEffectionServices[];
  /**
   * @example
   * true
   */
  isManual?: boolean;
  /**
   * @example
   * true
   */
  isUpgrade?: boolean;
  /**
   * @example
   * 231
   */
  mainHandlerId?: string;
  mainHandlerName?: string;
  preliminaryReason?: string;
  /**
   * @example
   * 123123
   */
  problemId?: number;
  /**
   * @example
   * P2
   */
  problemLevel?: string;
  problemName?: string;
  /**
   * @example
   * HANDLING
   */
  problemStatus?: string;
  progressSummary?: string;
  /**
   * @example
   * 12312
   */
  progressSummaryRichTextId?: number;
  /**
   * @example
   * 2021-02-21 00:00:00
   */
  recoveryTime?: string;
  /**
   * @example
   * 213123
   */
  relatedServiceId?: number;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationGroups: 'coordinationGroups',
      createTime: 'createTime',
      discoverTime: 'discoverTime',
      effectionServices: 'effectionServices',
      isManual: 'isManual',
      isUpgrade: 'isUpgrade',
      mainHandlerId: 'mainHandlerId',
      mainHandlerName: 'mainHandlerName',
      preliminaryReason: 'preliminaryReason',
      problemId: 'problemId',
      problemLevel: 'problemLevel',
      problemName: 'problemName',
      problemStatus: 'problemStatus',
      progressSummary: 'progressSummary',
      progressSummaryRichTextId: 'progressSummaryRichTextId',
      recoveryTime: 'recoveryTime',
      relatedServiceId: 'relatedServiceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationGroups: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataProblemCoordinationGroups },
      createTime: 'string',
      discoverTime: 'string',
      effectionServices: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataProblemEffectionServices },
      isManual: 'boolean',
      isUpgrade: 'boolean',
      mainHandlerId: 'string',
      mainHandlerName: 'string',
      preliminaryReason: 'string',
      problemId: 'number',
      problemLevel: 'string',
      problemName: 'string',
      problemStatus: 'string',
      progressSummary: 'string',
      progressSummaryRichTextId: 'number',
      recoveryTime: 'string',
      relatedServiceId: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataSmsUsers extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataSms extends $tea.Model {
  /**
   * @example
   * 12
   */
  count?: number;
  users?: GetProblemPreviewResponseBodyDataSmsUsers[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      users: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataSmsUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataVoiceUsers extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataVoice extends $tea.Model {
  /**
   * @example
   * 12
   */
  count?: number;
  users?: GetProblemPreviewResponseBodyDataVoiceUsers[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      users: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataVoiceUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataWebhookServiceGroups extends $tea.Model {
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyDataWebhook extends $tea.Model {
  /**
   * @example
   * 32
   */
  count?: number;
  serviceGroups?: GetProblemPreviewResponseBodyDataWebhookServiceGroups[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      serviceGroups: 'serviceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      serviceGroups: { 'type': 'array', 'itemType': GetProblemPreviewResponseBodyDataWebhookServiceGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPreviewResponseBodyData extends $tea.Model {
  deAfterData?: string;
  deBeforeData?: string;
  mail?: GetProblemPreviewResponseBodyDataMail;
  /**
   * @remarks
   * object
   */
  problem?: GetProblemPreviewResponseBodyDataProblem;
  sms?: GetProblemPreviewResponseBodyDataSms;
  upAfterData?: string;
  upBeforeData?: string;
  voice?: GetProblemPreviewResponseBodyDataVoice;
  /**
   * @remarks
   * webhook
   */
  webhook?: GetProblemPreviewResponseBodyDataWebhook;
  static names(): { [key: string]: string } {
    return {
      deAfterData: 'deAfterData',
      deBeforeData: 'deBeforeData',
      mail: 'mail',
      problem: 'problem',
      sms: 'sms',
      upAfterData: 'upAfterData',
      upBeforeData: 'upBeforeData',
      voice: 'voice',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deAfterData: 'string',
      deBeforeData: 'string',
      mail: GetProblemPreviewResponseBodyDataMail,
      problem: GetProblemPreviewResponseBodyDataProblem,
      sms: GetProblemPreviewResponseBodyDataSms,
      upAfterData: 'string',
      upBeforeData: 'string',
      voice: GetProblemPreviewResponseBodyDataVoice,
      webhook: GetProblemPreviewResponseBodyDataWebhook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceStatisticsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123
   */
  alertCount?: number;
  /**
   * @example
   * 1331
   */
  incidentCount?: number;
  /**
   * @example
   * 2211
   */
  integrationCount?: number;
  /**
   * @example
   * 221
   */
  problemCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertCount: 'alertCount',
      incidentCount: 'incidentCount',
      integrationCount: 'integrationCount',
      problemCount: 'problemCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCount: 'number',
      incidentCount: 'number',
      integrationCount: 'number',
      problemCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRichTextResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123123
   */
  instanceId?: number;
  /**
   * @example
   * 0 事件 1告警 2 故障
   */
  instanceType?: number;
  /**
   * @example
   * 这是一个富文本
   */
  richText?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      richText: 'richText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      instanceType: 'number',
      richText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleResponseBodyDataEventRouteChildRulesConditions extends $tea.Model {
  /**
   * @example
   * alarmName
   */
  key?: string;
  /**
   * @example
   * contain
   */
  operationSymbol?: string;
  /**
   * @example
   * Zabbix server
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operationSymbol: 'operationSymbol',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operationSymbol: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleResponseBodyDataEventRouteChildRules extends $tea.Model {
  /**
   * @example
   * 1
   */
  childConditionRelation?: number;
  /**
   * @example
   * 1000
   */
  childRouteRuleId?: number;
  conditions?: GetRouteRuleResponseBodyDataEventRouteChildRulesConditions[];
  /**
   * @example
   * false
   */
  isValidChildRule?: boolean;
  /**
   * @example
   * 1
   */
  monitorIntegrationConfigId?: number;
  /**
   * @example
   * 1
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * 1800
   */
  parentRuleId?: number;
  problemLevel?: string;
  static names(): { [key: string]: string } {
    return {
      childConditionRelation: 'childConditionRelation',
      childRouteRuleId: 'childRouteRuleId',
      conditions: 'conditions',
      isValidChildRule: 'isValidChildRule',
      monitorIntegrationConfigId: 'monitorIntegrationConfigId',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      parentRuleId: 'parentRuleId',
      problemLevel: 'problemLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childConditionRelation: 'number',
      childRouteRuleId: 'number',
      conditions: { 'type': 'array', 'itemType': GetRouteRuleResponseBodyDataEventRouteChildRulesConditions },
      isValidChildRule: 'boolean',
      monitorIntegrationConfigId: 'number',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      parentRuleId: 'number',
      problemLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteRuleResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1000
   */
  assignObjectId?: number;
  /**
   * @example
   * 刘德华
   */
  assignObjectName?: string;
  /**
   * @example
   * SERVICEGROUP
   */
  assignObjectType?: string;
  /**
   * @example
   * AND、OR
   */
  childRuleRelation?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  /**
   * @example
   * 2020-09-08 15:30:30
   */
  createTime?: string;
  /**
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @example
   * DISABLE
   */
  enableStatus?: string;
  eventRouteChildRules?: GetRouteRuleResponseBodyDataEventRouteChildRules[];
  /**
   * @example
   * P1
   */
  incidentLevel?: string;
  /**
   * @example
   * 3
   */
  matchCount?: number;
  notifyChannelNames?: string[];
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: DataProblemLevelGroupValue };
  relServiceDeleteType?: number;
  /**
   * @example
   * 1000
   */
  relatedServiceId?: number;
  /**
   * @example
   * 冲上云霄
   */
  relatedServiceName?: string;
  /**
   * @example
   * 180000000
   */
  routeRuleId?: number;
  /**
   * @example
   * INCIDENT
   */
  routeType?: string;
  /**
   * @example
   * 规则1
   */
  ruleName?: string;
  /**
   * @example
   * 3
   */
  timeWindow?: number;
  /**
   * @example
   * 2020-09-08 15:30:30
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      assignObjectId: 'assignObjectId',
      assignObjectName: 'assignObjectName',
      assignObjectType: 'assignObjectType',
      childRuleRelation: 'childRuleRelation',
      convergenceFields: 'convergenceFields',
      convergenceType: 'convergenceType',
      coverageProblemLevels: 'coverageProblemLevels',
      createTime: 'createTime',
      effection: 'effection',
      enableStatus: 'enableStatus',
      eventRouteChildRules: 'eventRouteChildRules',
      incidentLevel: 'incidentLevel',
      matchCount: 'matchCount',
      notifyChannelNames: 'notifyChannelNames',
      notifyChannels: 'notifyChannels',
      problemEffectionServices: 'problemEffectionServices',
      problemLevelGroup: 'problemLevelGroup',
      relServiceDeleteType: 'relServiceDeleteType',
      relatedServiceId: 'relatedServiceId',
      relatedServiceName: 'relatedServiceName',
      routeRuleId: 'routeRuleId',
      routeType: 'routeType',
      ruleName: 'ruleName',
      timeWindow: 'timeWindow',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignObjectId: 'number',
      assignObjectName: 'string',
      assignObjectType: 'string',
      childRuleRelation: 'string',
      convergenceFields: { 'type': 'array', 'itemType': 'string' },
      convergenceType: 'number',
      coverageProblemLevels: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      effection: 'string',
      enableStatus: 'string',
      eventRouteChildRules: { 'type': 'array', 'itemType': GetRouteRuleResponseBodyDataEventRouteChildRules },
      incidentLevel: 'string',
      matchCount: 'number',
      notifyChannelNames: { 'type': 'array', 'itemType': 'string' },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      problemEffectionServices: { 'type': 'array', 'itemType': 'number' },
      problemLevelGroup: { 'type': 'map', 'keyType': 'string', 'valueType': DataProblemLevelGroupValue },
      relServiceDeleteType: 'number',
      relatedServiceId: 'number',
      relatedServiceName: 'string',
      routeRuleId: 'number',
      routeType: 'string',
      ruleName: 'string',
      timeWindow: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  escalationPlanId?: number;
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  /**
   * @example
   * 1
   */
  serviceId?: number;
  serviceName?: string;
  /**
   * @example
   * 2020-03-08 12:53:53
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
      serviceDescription: 'serviceDescription',
      serviceGroupIdList: 'serviceGroupIdList',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
      serviceDescription: 'string',
      serviceGroupIdList: { 'type': 'array', 'itemType': 'number' },
      serviceId: 'number',
      serviceName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupResponseBodyDataUsers extends $tea.Model {
  /**
   * @example
   * 1390000****
   */
  phone?: string;
  roleNameList?: string[];
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 10
   */
  userId?: number;
  /**
   * @example
   * jack
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      phone: 'phone',
      roleNameList: 'roleNameList',
      serviceGroupId: 'serviceGroupId',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phone: 'string',
      roleNameList: { 'type': 'array', 'itemType': 'string' },
      serviceGroupId: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2020-08-08 10:00:00
   */
  createTime?: string;
  /**
   * @example
   * ENABLE
   */
  enableWebhook?: string;
  /**
   * @example
   * 服务描述
   */
  serviceGroupDescription?: string;
  /**
   * @example
   * 1000
   */
  serviceGroupId?: number;
  /**
   * @example
   * 冲上云霄
   */
  serviceGroupName?: string;
  /**
   * @example
   * 2020-05-03 15:39:39
   */
  updateTime?: string;
  users?: GetServiceGroupResponseBodyDataUsers[];
  /**
   * @example
   * wwwwwww
   */
  webhookLink?: string;
  /**
   * @example
   * WEIXIN_GROUP
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      enableWebhook: 'enableWebhook',
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
      updateTime: 'updateTime',
      users: 'users',
      webhookLink: 'webhookLink',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enableWebhook: 'string',
      serviceGroupDescription: 'string',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
      updateTime: 'string',
      users: { 'type': 'array', 'itemType': GetServiceGroupResponseBodyDataUsers },
      webhookLink: 'string',
      webhookType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataFastSchedulingSchedulingUsers extends $tea.Model {
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 66666
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  /**
   * @example
   * 张杰
   */
  schedulingUserName?: string;
  static names(): { [key: string]: string } {
    return {
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      schedulingUserName: 'schedulingUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      schedulingUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataFastScheduling extends $tea.Model {
  /**
   * @example
   * FAST_CHOICE
   */
  dutyPlan?: string;
  /**
   * @example
   * 2222
   */
  id?: number;
  schedulingUsers?: GetServiceGroupSchedulingResponseBodyDataFastSchedulingSchedulingUsers[];
  /**
   * @example
   * 12
   */
  singleDuration?: number;
  /**
   * @example
   * DAY
   */
  singleDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dutyPlan: 'dutyPlan',
      id: 'id',
      schedulingUsers: 'schedulingUsers',
      singleDuration: 'singleDuration',
      singleDurationUnit: 'singleDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dutyPlan: 'string',
      id: 'number',
      schedulingUsers: { 'type': 'array', 'itemType': GetServiceGroupSchedulingResponseBodyDataFastSchedulingSchedulingUsers },
      singleDuration: 'number',
      singleDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingFineShifts extends $tea.Model {
  /**
   * @example
   * 1
   */
  cycleOrder?: number;
  /**
   * @example
   * 2020-10-13
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2020-08-13
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 1111
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  /**
   * @example
   * 刘德华
   */
  schedulingUserName?: string;
  /**
   * @example
   * 早班
   */
  shiftName?: string;
  /**
   * @example
   * false
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      cycleOrder: 'cycleOrder',
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      schedulingUserName: 'schedulingUserName',
      shiftName: 'shiftName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleOrder: 'number',
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      schedulingUserName: 'string',
      shiftName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingTemplateFineShifts extends $tea.Model {
  /**
   * @example
   * 2021-10-01 00:00:00
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2021-09-01 00:00:00
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 1
   */
  schedulingUserId?: string;
  schedulingUserIdList?: number[];
  schedulingUserName?: string;
  shiftName?: string;
  /**
   * @example
   * true
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      schedulingUserName: 'schedulingUserName',
      shiftName: 'shiftName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'string',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      schedulingUserName: 'string',
      shiftName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataFineScheduling extends $tea.Model {
  /**
   * @remarks
   * 1
   * 
   * @example
   * 精细排班ID
   */
  id?: number;
  /**
   * @remarks
   * 1
   * 
   * @example
   * 循环周期
   */
  period?: number;
  /**
   * @example
   * DAY
   */
  periodUnit?: string;
  schedulingFineShifts?: GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingTemplateFineShifts[];
  /**
   * @example
   * MORNING_NIGHT
   */
  shiftType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      period: 'period',
      periodUnit: 'periodUnit',
      schedulingFineShifts: 'schedulingFineShifts',
      schedulingTemplateFineShifts: 'schedulingTemplateFineShifts',
      shiftType: 'shiftType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      period: 'number',
      periodUnit: 'string',
      schedulingFineShifts: { 'type': 'array', 'itemType': GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingFineShifts },
      schedulingTemplateFineShifts: { 'type': 'array', 'itemType': GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingTemplateFineShifts },
      shiftType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyDataUsers extends $tea.Model {
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingResponseBodyData extends $tea.Model {
  fastScheduling?: GetServiceGroupSchedulingResponseBodyDataFastScheduling;
  fineScheduling?: GetServiceGroupSchedulingResponseBodyDataFineScheduling;
  /**
   * @example
   * FINE
   */
  schedulingWay?: string;
  /**
   * @example
   * 99999
   */
  serviceGroupId?: number;
  users?: GetServiceGroupSchedulingResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      fastScheduling: 'fastScheduling',
      fineScheduling: 'fineScheduling',
      schedulingWay: 'schedulingWay',
      serviceGroupId: 'serviceGroupId',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastScheduling: GetServiceGroupSchedulingResponseBodyDataFastScheduling,
      fineScheduling: GetServiceGroupSchedulingResponseBodyDataFineScheduling,
      schedulingWay: 'string',
      serviceGroupId: 'number',
      users: { 'type': 'array', 'itemType': GetServiceGroupSchedulingResponseBodyDataUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewRequestFastSchedulingSchedulingUsers extends $tea.Model {
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 122222
   */
  schedulingUserId?: number;
  static names(): { [key: string]: string } {
    return {
      schedulingOrder: 'schedulingOrder',
      schedulingUserId: 'schedulingUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingOrder: 'number',
      schedulingUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewRequestFastScheduling extends $tea.Model {
  /**
   * @remarks
   * FAST_CHOICE
   * 
   * @example
   * FAST_CHOICE
   */
  dutyPlan?: string;
  schedulingUsers?: GetServiceGroupSchedulingPreviewRequestFastSchedulingSchedulingUsers[];
  /**
   * @example
   * 12
   */
  singleDuration?: number;
  /**
   * @remarks
   * DAY
   * 
   * @example
   * DAY
   */
  singleDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dutyPlan: 'dutyPlan',
      schedulingUsers: 'schedulingUsers',
      singleDuration: 'singleDuration',
      singleDurationUnit: 'singleDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dutyPlan: 'string',
      schedulingUsers: { 'type': 'array', 'itemType': GetServiceGroupSchedulingPreviewRequestFastSchedulingSchedulingUsers },
      singleDuration: 'number',
      singleDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewRequestFineSchedulingSchedulingFineShifts extends $tea.Model {
  /**
   * @example
   * 2020-10-13
   */
  schedulingEndTime?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2020-08-13
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 早班
   */
  shiftName?: string;
  static names(): { [key: string]: string } {
    return {
      schedulingEndTime: 'schedulingEndTime',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      shiftName: 'shiftName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingEndTime: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      shiftName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSchedulingPreviewRequestFineScheduling extends $tea.Model {
  /**
   * @example
   * 2
   */
  period?: number;
  /**
   * @example
   * DAY
   */
  periodUnit?: string;
  schedulingFineShifts?: GetServiceGroupSchedulingPreviewRequestFineSchedulingSchedulingFineShifts[];
  /**
   * @example
   * MORNING_NIGHT
   */
  shiftType?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'period',
      periodUnit: 'periodUnit',
      schedulingFineShifts: 'schedulingFineShifts',
      shiftType: 'shiftType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      schedulingFineShifts: { 'type': 'array', 'itemType': GetServiceGroupSchedulingPreviewRequestFineSchedulingSchedulingFineShifts },
      shiftType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceGroupSpecialPersonSchedulingResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-08-17
   */
  schedulingDate?: string;
  /**
   * @example
   * 2021-08-17  12:00:00
   */
  schedulingEndTime?: string;
  /**
   * @example
   * 2021-08-17  00:00:00
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 111111
   */
  schedulingUserId?: number;
  /**
   * @example
   * 8888
   */
  serviceGroupId?: number;
  /**
   * @example
   * 刘德华
   */
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      schedulingDate: 'schedulingDate',
      schedulingEndTime: 'schedulingEndTime',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingDate: 'string',
      schedulingEndTime: 'string',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidentsSimilarIncidents extends $tea.Model {
  /**
   * @example
   * 433
   */
  assignUserId?: number;
  /**
   * @example
   * 张老三
   */
  assignUserName?: string;
  /**
   * @example
   * 2021-09-09 09:09:09
   */
  createTime?: string;
  /**
   * @example
   * 6789765678
   */
  durationTime?: number;
  /**
   * @example
   * 1
   */
  finishReason?: number;
  /**
   * @example
   * xx原因
   */
  finishReasonDescription?: string;
  /**
   * @example
   * xxx方案
   */
  finishSolutionDescription?: string;
  /**
   * @example
   * 5
   */
  incidentFinishSolution?: number;
  /**
   * @example
   * 5435
   */
  incidentId?: number;
  /**
   * @example
   * I234432
   */
  incidentNumber?: string;
  /**
   * @example
   * 线性代数发多少
   */
  incidentTitle?: string;
  /**
   * @example
   * 334
   */
  relatedRouteRuleId?: number;
  /**
   * @example
   * xxx规则
   */
  relatedRouteRuleName?: string;
  /**
   * @example
   * 1003.567
   */
  similarScore?: string;
  static names(): { [key: string]: string } {
    return {
      assignUserId: 'assignUserId',
      assignUserName: 'assignUserName',
      createTime: 'createTime',
      durationTime: 'durationTime',
      finishReason: 'finishReason',
      finishReasonDescription: 'finishReasonDescription',
      finishSolutionDescription: 'finishSolutionDescription',
      incidentFinishSolution: 'incidentFinishSolution',
      incidentId: 'incidentId',
      incidentNumber: 'incidentNumber',
      incidentTitle: 'incidentTitle',
      relatedRouteRuleId: 'relatedRouteRuleId',
      relatedRouteRuleName: 'relatedRouteRuleName',
      similarScore: 'similarScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignUserId: 'number',
      assignUserName: 'string',
      createTime: 'string',
      durationTime: 'number',
      finishReason: 'number',
      finishReasonDescription: 'string',
      finishSolutionDescription: 'string',
      incidentFinishSolution: 'number',
      incidentId: 'number',
      incidentNumber: 'string',
      incidentTitle: 'string',
      relatedRouteRuleId: 'number',
      relatedRouteRuleName: 'string',
      similarScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidents extends $tea.Model {
  /**
   * @example
   * 0
   */
  commitment?: number;
  /**
   * @example
   * 2021-03-07
   */
  date?: string;
  /**
   * @example
   * 1
   */
  day?: number;
  /**
   * @example
   * 2
   */
  month?: number;
  similarIncidents?: GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidentsSimilarIncidents[];
  /**
   * @example
   * 1
   */
  week?: string;
  static names(): { [key: string]: string } {
    return {
      commitment: 'commitment',
      date: 'date',
      day: 'day',
      month: 'month',
      similarIncidents: 'similarIncidents',
      week: 'week',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitment: 'number',
      date: 'string',
      day: 'number',
      month: 'number',
      similarIncidents: { 'type': 'array', 'itemType': GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidentsSimilarIncidents },
      week: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponseBodyDataTopFiveIncidents extends $tea.Model {
  /**
   * @example
   * 43
   */
  assignUserId?: string;
  /**
   * @example
   * 张老三
   */
  assignUserName?: string;
  /**
   * @example
   * 2021-09-09 09:09:09
   */
  createTime?: string;
  /**
   * @example
   * 6787678767
   */
  durationTime?: number;
  /**
   * @example
   * 2
   */
  finishReason?: number;
  /**
   * @example
   * xxxx原因
   */
  finishReasonDescription?: string;
  /**
   * @example
   * xxx方案
   */
  finishSolutionDescription?: string;
  /**
   * @example
   * 5
   */
  incidentFinishSolution?: number;
  /**
   * @example
   * 32
   */
  incidentId?: number;
  /**
   * @example
   * I34324
   */
  incidentNumber?: string;
  /**
   * @example
   * xxx事件
   */
  incidentTitle?: string;
  /**
   * @example
   * 4343
   */
  relatedRouteRuleId?: number;
  /**
   * @example
   * xxx
   */
  relatedRouteRuleName?: string;
  /**
   * @example
   * 1992.21
   */
  similarScore?: string;
  static names(): { [key: string]: string } {
    return {
      assignUserId: 'assignUserId',
      assignUserName: 'assignUserName',
      createTime: 'createTime',
      durationTime: 'durationTime',
      finishReason: 'finishReason',
      finishReasonDescription: 'finishReasonDescription',
      finishSolutionDescription: 'finishSolutionDescription',
      incidentFinishSolution: 'incidentFinishSolution',
      incidentId: 'incidentId',
      incidentNumber: 'incidentNumber',
      incidentTitle: 'incidentTitle',
      relatedRouteRuleId: 'relatedRouteRuleId',
      relatedRouteRuleName: 'relatedRouteRuleName',
      similarScore: 'similarScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignUserId: 'string',
      assignUserName: 'string',
      createTime: 'string',
      durationTime: 'number',
      finishReason: 'number',
      finishReasonDescription: 'string',
      finishSolutionDescription: 'string',
      incidentFinishSolution: 'number',
      incidentId: 'number',
      incidentNumber: 'string',
      incidentTitle: 'string',
      relatedRouteRuleId: 'number',
      relatedRouteRuleName: 'string',
      similarScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarIncidentStatisticsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 8
   */
  countInSevenDays?: number;
  /**
   * @example
   * 43
   */
  countInSixMonths?: number;
  /**
   * @example
   * {}
   */
  dailySimilarIncidents?: GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidents[];
  /**
   * @remarks
   * id of the request
   * 
   * @example
   * uyihg6789
   */
  requestId?: string;
  /**
   * @remarks
   * topFiveIncidents
   */
  topFiveIncidents?: GetSimilarIncidentStatisticsResponseBodyDataTopFiveIncidents[];
  static names(): { [key: string]: string } {
    return {
      countInSevenDays: 'countInSevenDays',
      countInSixMonths: 'countInSixMonths',
      dailySimilarIncidents: 'dailySimilarIncidents',
      requestId: 'requestId',
      topFiveIncidents: 'topFiveIncidents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countInSevenDays: 'number',
      countInSixMonths: 'number',
      dailySimilarIncidents: { 'type': 'array', 'itemType': GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidents },
      requestId: 'string',
      topFiveIncidents: { 'type': 'array', 'itemType': GetSimilarIncidentStatisticsResponseBodyDataTopFiveIncidents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataNotifyObjectList extends $tea.Model {
  /**
   * @example
   * 23
   */
  id?: number;
  /**
   * @example
   * TestName
   */
  name?: string;
  /**
   * @example
   * 19
   */
  notifyObjectId?: number;
  /**
   * @example
   * USER
   */
  notifyObjectType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      notifyObjectId: 'notifyObjectId',
      notifyObjectType: 'notifyObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      notifyObjectId: 'number',
      notifyObjectType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesConditions extends $tea.Model {
  /**
   * @example
   * INCIDENT_TRIGGER
   */
  action?: string;
  /**
   * @example
   * HIGH
   */
  effection?: string;
  /**
   * @example
   * P1
   */
  level?: string;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      effection: 'effection',
      level: 'level',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      effection: 'string',
      level: 'string',
      problemNotifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesPeriodChannel extends $tea.Model {
  /**
   * @example
   * DINGDING
   */
  nonWorkday?: string;
  /**
   * @example
   * DINGDING
   */
  workday?: string;
  static names(): { [key: string]: string } {
    return {
      nonWorkday: 'nonWorkday',
      workday: 'workday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonWorkday: 'string',
      workday: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataNotifyStrategyListStrategies extends $tea.Model {
  /**
   * @example
   * SMS
   */
  channels?: string;
  conditions?: GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesConditions[];
  /**
   * @example
   * 12
   */
  id?: number;
  periodChannel?: GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesPeriodChannel;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      conditions: 'conditions',
      id: 'id',
      periodChannel: 'periodChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'string',
      conditions: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesConditions },
      id: 'number',
      periodChannel: GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesPeriodChannel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataNotifyStrategyList extends $tea.Model {
  /**
   * @example
   * INCIDENT
   */
  instanceType?: number;
  strategies?: GetSubscriptionResponseBodyDataNotifyStrategyListStrategies[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instanceType',
      strategies: 'strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'number',
      strategies: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataNotifyStrategyListStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyDataScopeObjectList extends $tea.Model {
  /**
   * @example
   * 10
   */
  id?: number;
  isValid?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  scopeObject?: string;
  /**
   * @example
   * 10
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isValid: 'isValid',
      scope: 'scope',
      scopeObject: 'scopeObject',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isValid: 'number',
      scope: 'string',
      scopeObject: 'string',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-08-9 10:10:10
   */
  endTime?: string;
  /**
   * @example
   * LONG_TERM
   */
  expiredType?: string;
  notifyObjectList?: GetSubscriptionResponseBodyDataNotifyObjectList[];
  /**
   * @example
   * USER
   */
  notifyObjectType?: string;
  notifyStrategyList?: GetSubscriptionResponseBodyDataNotifyStrategyList[];
  /**
   * @example
   * 1个月
   */
  period?: string;
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @remarks
   * Array
   */
  scopeObjectList?: GetSubscriptionResponseBodyDataScopeObjectList[];
  /**
   * @example
   * 2020-05-9 10:10:10
   */
  startTime?: string;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @example
   * 68
   */
  subscriptionId?: number;
  /**
   * @example
   * newTitle
   */
  subscriptionTitle?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      expiredType: 'expiredType',
      notifyObjectList: 'notifyObjectList',
      notifyObjectType: 'notifyObjectType',
      notifyStrategyList: 'notifyStrategyList',
      period: 'period',
      scope: 'scope',
      scopeObjectList: 'scopeObjectList',
      startTime: 'startTime',
      status: 'status',
      subscriptionId: 'subscriptionId',
      subscriptionTitle: 'subscriptionTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      expiredType: 'string',
      notifyObjectList: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataNotifyObjectList },
      notifyObjectType: 'string',
      notifyStrategyList: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataNotifyStrategyList },
      period: 'string',
      scope: 'string',
      scopeObjectList: { 'type': 'array', 'itemType': GetSubscriptionResponseBodyDataScopeObjectList },
      startTime: 'string',
      status: 'string',
      subscriptionId: 'number',
      subscriptionTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantApplicationResponseBodyData extends $tea.Model {
  /**
   * @example
   * 7356
   */
  bizId?: string;
  /**
   * @example
   * DINGDING
   */
  channel?: string;
  /**
   * @example
   * ding81913c*
   */
  corporationId?: string;
  originalCorpId?: string;
  /**
   * @example
   * NOT_OPEN
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      channel: 'channel',
      corporationId: 'corporationId',
      originalCorpId: 'originalCorpId',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      corporationId: 'string',
      originalCorpId: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantStatusResponseBodyData extends $tea.Model {
  tenantStatus?: number;
  static names(): { [key: string]: string } {
    return {
      tenantStatus: 'tenantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyDataServiceGroups extends $tea.Model {
  /**
   * @example
   * 山口组
   */
  name?: string;
  /**
   * @example
   * 10000
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      serviceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  /**
   * @example
   * SUB
   */
  accountType?: string;
  /**
   * @example
   * 2021-09-09 09:09:09
   */
  createTime?: string;
  /**
   * @remarks
   * email
   * 
   * @example
   * 5678***@qq.com
   */
  email?: string;
  isActive?: number;
  /**
   * @example
   * true
   */
  isEditableUser?: boolean;
  /**
   * @example
   * RELATE
   */
  isRelated?: string;
  /**
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * ramId
   * 
   * @example
   * 1344383
   */
  ramId?: string;
  roleIdList?: number[];
  roleNameList?: string[];
  serviceGroups?: GetUserResponseBodyDataServiceGroups[];
  /**
   * @example
   * 63
   */
  userId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'accountType',
      createTime: 'createTime',
      email: 'email',
      isActive: 'isActive',
      isEditableUser: 'isEditableUser',
      isRelated: 'isRelated',
      phone: 'phone',
      ramId: 'ramId',
      roleIdList: 'roleIdList',
      roleNameList: 'roleNameList',
      serviceGroups: 'serviceGroups',
      userId: 'userId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      createTime: 'string',
      email: 'string',
      isActive: 'number',
      isEditableUser: 'boolean',
      isRelated: 'string',
      phone: 'string',
      ramId: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      roleNameList: { 'type': 'array', 'itemType': 'string' },
      serviceGroups: { 'type': 'array', 'itemType': GetUserResponseBodyDataServiceGroups },
      userId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 20000
   */
  alertId?: number;
  /**
   * @example
   * P1
   */
  alertLevel?: string;
  /**
   * @example
   * A123123123
   */
  alertNumber?: string;
  /**
   * @example
   * zabbix
   */
  alertSourceName?: string;
  /**
   * @example
   * 2020-03-05 15:53:55
   */
  createTime?: string;
  /**
   * @example
   * 2021-09-08 18:30:00
   */
  firstEventTime?: string;
  monitorSourceName?: string;
  relServiceDeleteType?: number;
  /**
   * @example
   * 服务A
   */
  relatedServiceName?: string;
  routeRuleDeleteType?: number;
  /**
   * @example
   * 10000
   */
  routeRuleId?: number;
  /**
   * @example
   * 流转规则
   */
  routeRuleName?: string;
  /**
   * @example
   * 10
   */
  sourceEventCount?: number;
  /**
   * @example
   * 报警
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'alertId',
      alertLevel: 'alertLevel',
      alertNumber: 'alertNumber',
      alertSourceName: 'alertSourceName',
      createTime: 'createTime',
      firstEventTime: 'firstEventTime',
      monitorSourceName: 'monitorSourceName',
      relServiceDeleteType: 'relServiceDeleteType',
      relatedServiceName: 'relatedServiceName',
      routeRuleDeleteType: 'routeRuleDeleteType',
      routeRuleId: 'routeRuleId',
      routeRuleName: 'routeRuleName',
      sourceEventCount: 'sourceEventCount',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertLevel: 'string',
      alertNumber: 'string',
      alertSourceName: 'string',
      createTime: 'string',
      firstEventTime: 'string',
      monitorSourceName: 'string',
      relServiceDeleteType: 'number',
      relatedServiceName: 'string',
      routeRuleDeleteType: 'number',
      routeRuleId: 'number',
      routeRuleName: 'string',
      sourceEventCount: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByMonitorSourceIdResponseBodyData extends $tea.Model {
  id?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForServiceGroupResponseBodyData extends $tea.Model {
  /**
   * @example
   * {"P1HIGH":32}
   */
  effectionLevel?: { [key: string]: any };
  /**
   * @example
   * 43
   */
  escalationIncidentCount?: number;
  /**
   * @example
   * 32
   */
  incidentCount?: number;
  /**
   * @example
   * 323
   */
  meanTimeToAcknowledge?: number;
  /**
   * @example
   * 4343
   */
  meanTimeToRepair?: number;
  /**
   * @example
   * 2021-09-09
   */
  time?: string;
  /**
   * @example
   * 3334
   */
  totalMeanTimeToAcknowledge?: number;
  /**
   * @example
   * 4343
   */
  totalMeanTimeToRepair?: number;
  /**
   * @example
   * 23
   */
  unAcknowledgedEscalationIncidentCount?: number;
  /**
   * @example
   * 23
   */
  unFinishEscalationIncidentCount?: number;
  static names(): { [key: string]: string } {
    return {
      effectionLevel: 'effectionLevel',
      escalationIncidentCount: 'escalationIncidentCount',
      incidentCount: 'incidentCount',
      meanTimeToAcknowledge: 'meanTimeToAcknowledge',
      meanTimeToRepair: 'meanTimeToRepair',
      time: 'time',
      totalMeanTimeToAcknowledge: 'totalMeanTimeToAcknowledge',
      totalMeanTimeToRepair: 'totalMeanTimeToRepair',
      unAcknowledgedEscalationIncidentCount: 'unAcknowledgedEscalationIncidentCount',
      unFinishEscalationIncidentCount: 'unFinishEscalationIncidentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectionLevel: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      escalationIncidentCount: 'number',
      incidentCount: 'number',
      meanTimeToAcknowledge: 'number',
      meanTimeToRepair: 'number',
      time: 'string',
      totalMeanTimeToAcknowledge: 'number',
      totalMeanTimeToRepair: 'number',
      unAcknowledgedEscalationIncidentCount: 'number',
      unFinishEscalationIncidentCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartDataForUserResponseBodyData extends $tea.Model {
  /**
   * @example
   * {"P1HIGH":32}
   */
  effectionLevel?: { [key: string]: any };
  /**
   * @example
   * 43
   */
  escalationIncidentCount?: number;
  /**
   * @example
   * 32
   */
  incidentCount?: number;
  /**
   * @example
   * 323
   */
  meanTimeToAcknowledge?: number;
  /**
   * @example
   * 4343
   */
  meanTimeToRepair?: number;
  /**
   * @example
   * 2021-09-09
   */
  time?: string;
  /**
   * @example
   * 3334
   */
  totalMeanTimeToAcknowledge?: number;
  /**
   * @example
   * 4343
   */
  totalMeanTimeToRepair?: number;
  /**
   * @example
   * 23
   */
  unAcknowledgedEscalationIncidentCount?: number;
  /**
   * @example
   * 23
   */
  unFinishEscalationIncidentCount?: number;
  static names(): { [key: string]: string } {
    return {
      effectionLevel: 'effectionLevel',
      escalationIncidentCount: 'escalationIncidentCount',
      incidentCount: 'incidentCount',
      meanTimeToAcknowledge: 'meanTimeToAcknowledge',
      meanTimeToRepair: 'meanTimeToRepair',
      time: 'time',
      totalMeanTimeToAcknowledge: 'totalMeanTimeToAcknowledge',
      totalMeanTimeToRepair: 'totalMeanTimeToRepair',
      unAcknowledgedEscalationIncidentCount: 'unAcknowledgedEscalationIncidentCount',
      unFinishEscalationIncidentCount: 'unFinishEscalationIncidentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectionLevel: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      escalationIncidentCount: 'number',
      incidentCount: 'number',
      meanTimeToAcknowledge: 'number',
      meanTimeToRepair: 'number',
      time: 'string',
      totalMeanTimeToAcknowledge: 'number',
      totalMeanTimeToRepair: 'number',
      unAcknowledgedEscalationIncidentCount: 'number',
      unFinishEscalationIncidentCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForServiceGroupResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  escalationIncidentCount?: number;
  /**
   * @example
   * 111
   */
  finishIncidentCount?: number;
  /**
   * @example
   * 19%
   */
  finishProportion?: string;
  /**
   * @example
   * 1
   */
  incidentCount?: number;
  /**
   * @remarks
   * MRRA
   * 
   * @example
   * 3分19秒
   */
  meanTimeToAcknowledge?: number;
  /**
   * @remarks
   * MTTR
   * 
   * @example
   * 3分19秒
   */
  meanTimeToRepair?: number;
  /**
   * @example
   * 100
   */
  serviceGroupId?: number;
  /**
   * @example
   * 服务组
   */
  serviceGroupName?: string;
  /**
   * @example
   * 200
   */
  unAcknowledgedEscalationIncidentCount?: number;
  /**
   * @example
   * 200
   */
  unFinishEscalationIncidentCount?: number;
  static names(): { [key: string]: string } {
    return {
      escalationIncidentCount: 'escalationIncidentCount',
      finishIncidentCount: 'finishIncidentCount',
      finishProportion: 'finishProportion',
      incidentCount: 'incidentCount',
      meanTimeToAcknowledge: 'meanTimeToAcknowledge',
      meanTimeToRepair: 'meanTimeToRepair',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
      unAcknowledgedEscalationIncidentCount: 'unAcknowledgedEscalationIncidentCount',
      unFinishEscalationIncidentCount: 'unFinishEscalationIncidentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationIncidentCount: 'number',
      finishIncidentCount: 'number',
      finishProportion: 'string',
      incidentCount: 'number',
      meanTimeToAcknowledge: 'number',
      meanTimeToRepair: 'number',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
      unAcknowledgedEscalationIncidentCount: 'number',
      unFinishEscalationIncidentCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReportForUserResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  distributionIncidentCount?: number;
  /**
   * @example
   * 100
   */
  escalationIncidentCount?: number;
  /**
   * @example
   * 100
   */
  finishIncidentNumber?: number;
  /**
   * @example
   * 20%
   */
  finishProportion?: string;
  /**
   * @remarks
   * MRRA
   * 
   * @example
   * 3分50秒
   */
  meanTimeToAcknowledge?: string;
  /**
   * @remarks
   * MTTA
   * 
   * @example
   * 3分50秒
   */
  meanTimeToRepair?: string;
  /**
   * @example
   * 100
   */
  unAcknowledgedEscalationIncidentCount?: number;
  /**
   * @example
   * 100
   */
  unDistributionIncidentCount?: number;
  /**
   * @example
   * 100
   */
  unFinishEscalationIncidentCount?: number;
  /**
   * @example
   * 1111
   */
  userId?: number;
  /**
   * @example
   * wy
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      distributionIncidentCount: 'distributionIncidentCount',
      escalationIncidentCount: 'escalationIncidentCount',
      finishIncidentNumber: 'finishIncidentNumber',
      finishProportion: 'finishProportion',
      meanTimeToAcknowledge: 'meanTimeToAcknowledge',
      meanTimeToRepair: 'meanTimeToRepair',
      unAcknowledgedEscalationIncidentCount: 'unAcknowledgedEscalationIncidentCount',
      unDistributionIncidentCount: 'unDistributionIncidentCount',
      unFinishEscalationIncidentCount: 'unFinishEscalationIncidentCount',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionIncidentCount: 'number',
      escalationIncidentCount: 'number',
      finishIncidentNumber: 'number',
      finishProportion: 'string',
      meanTimeToAcknowledge: 'string',
      meanTimeToRepair: 'string',
      unAcknowledgedEscalationIncidentCount: 'number',
      unDistributionIncidentCount: 'number',
      unFinishEscalationIncidentCount: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlanServicesResponseBodyData extends $tea.Model {
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @example
   * 23
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansResponseBodyDataEscalationPlanScopeObjects extends $tea.Model {
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  scopeObjectDeletedType?: number;
  /**
   * @example
   * 23
   */
  scopeObjectId?: number;
  /**
   * @example
   * 某服务1
   */
  scopeObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scopeObjectDeletedType: 'scopeObjectDeletedType',
      scopeObjectId: 'scopeObjectId',
      scopeObjectName: 'scopeObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeObjectDeletedType: 'number',
      scopeObjectId: 'number',
      scopeObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansResponseBodyData extends $tea.Model {
  /**
   * @example
   * 43
   */
  escalationPlanId?: number;
  /**
   * @example
   * 升级计划2345
   */
  escalationPlanName?: string;
  escalationPlanScopeObjects?: ListEscalationPlansResponseBodyDataEscalationPlanScopeObjects[];
  isGlobal?: boolean;
  /**
   * @example
   * 2021-09-09 09:09:09
   */
  modifyTime?: string;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      isGlobal: 'isGlobal',
      modifyTime: 'modifyTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      escalationPlanScopeObjects: { 'type': 'array', 'itemType': ListEscalationPlansResponseBodyDataEscalationPlanScopeObjects },
      isGlobal: 'boolean',
      modifyTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansByNoticeObjectResponseBodyDataEscalationPlanScopeObjects extends $tea.Model {
  scope?: string;
  scopeObjectDeletedType?: number;
  scopeObjectId?: number;
  scopeObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scopeObjectDeletedType: 'scopeObjectDeletedType',
      scopeObjectId: 'scopeObjectId',
      scopeObjectName: 'scopeObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scopeObjectDeletedType: 'number',
      scopeObjectId: 'number',
      scopeObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPlansByNoticeObjectResponseBodyData extends $tea.Model {
  escalationPlanId?: number;
  escalationPlanName?: string;
  escalationPlanScopeObjects?: ListEscalationPlansByNoticeObjectResponseBodyDataEscalationPlanScopeObjects[];
  modifyTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      escalationPlanScopeObjects: 'escalationPlanScopeObjects',
      modifyTime: 'modifyTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      escalationPlanScopeObjects: { 'type': 'array', 'itemType': ListEscalationPlansByNoticeObjectResponseBodyDataEscalationPlanScopeObjects },
      modifyTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanNoticeObjectList extends $tea.Model {
  /**
   * @example
   * 31231
   */
  noticeObjectId?: number;
  /**
   * @example
   * 小华
   */
  noticeObjectName?: string;
  /**
   * @example
   * 130xxxxxxxxx
   */
  noticeObjectPhone?: string;
  roleNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      noticeObjectId: 'noticeObjectId',
      noticeObjectName: 'noticeObjectName',
      noticeObjectPhone: 'noticeObjectPhone',
      roleNameList: 'roleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeObjectId: 'number',
      noticeObjectName: 'string',
      noticeObjectPhone: 'string',
      roleNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanServiceGroupList extends $tea.Model {
  /**
   * @example
   * 1231
   */
  id?: number;
  /**
   * @example
   * 服务组A
   */
  name?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlan extends $tea.Model {
  /**
   * @example
   * UN_ACKNOWLEDGE
   */
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanNoticeObjectList[];
  /**
   * @example
   * 10
   */
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanServiceGroupList[];
  /**
   * @example
   * 1629872386027
   */
  startTime?: number;
  /**
   * @example
   * UPGRADE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjectList: 'noticeObjectList',
      noticeTime: 'noticeTime',
      serviceGroupList: 'serviceGroupList',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanType: 'string',
      noticeChannels: { 'type': 'array', 'itemType': 'string' },
      noticeObjectList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanNoticeObjectList },
      noticeTime: 'number',
      serviceGroupList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanServiceGroupList },
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeObjectList extends $tea.Model {
  /**
   * @example
   * 31231
   */
  noticeObjectId?: number;
  /**
   * @example
   * 小华
   */
  noticeObjectName?: string;
  /**
   * @example
   * 130xxxxxxxxx
   */
  noticeObjectPhone?: string;
  roleNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      noticeObjectId: 'noticeObjectId',
      noticeObjectName: 'noticeObjectName',
      noticeObjectPhone: 'noticeObjectPhone',
      roleNameList: 'roleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeObjectId: 'number',
      noticeObjectName: 'string',
      noticeObjectPhone: 'string',
      roleNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeRoleObjectList extends $tea.Model {
  id?: number;
  name?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanServiceGroupList extends $tea.Model {
  /**
   * @example
   * 1231
   */
  id?: number;
  /**
   * @example
   * 服务组A
   */
  name?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlan extends $tea.Model {
  /**
   * @example
   * UN_ACKNOWLEDGE
   */
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeObjectList[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeRoleObjectList[];
  /**
   * @example
   * 10
   */
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanServiceGroupList[];
  /**
   * @example
   * 1629872386027
   */
  startTime?: number;
  /**
   * @example
   * UPGRADE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjectList: 'noticeObjectList',
      noticeRoleList: 'noticeRoleList',
      noticeRoleObjectList: 'noticeRoleObjectList',
      noticeTime: 'noticeTime',
      serviceGroupList: 'serviceGroupList',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanType: 'string',
      noticeChannels: { 'type': 'array', 'itemType': 'string' },
      noticeObjectList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeObjectList },
      noticeRoleList: { 'type': 'array', 'itemType': 'number' },
      noticeRoleObjectList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeRoleObjectList },
      noticeTime: 'number',
      serviceGroupList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanServiceGroupList },
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeObjectList extends $tea.Model {
  /**
   * @example
   * 2311
   */
  noticeObjectId?: number;
  /**
   * @example
   * 小明
   */
  noticeObjectName?: string;
  /**
   * @example
   * 130xxxxxxxx
   */
  noticeObjectPhone?: string;
  roleNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      noticeObjectId: 'noticeObjectId',
      noticeObjectName: 'noticeObjectName',
      noticeObjectPhone: 'noticeObjectPhone',
      roleNameList: 'roleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeObjectId: 'number',
      noticeObjectName: 'string',
      noticeObjectPhone: 'string',
      roleNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeRoleObjectList extends $tea.Model {
  id?: number;
  name?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanServiceGroupList extends $tea.Model {
  /**
   * @example
   * 123132
   */
  id?: number;
  /**
   * @example
   * 服务组A
   */
  name?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlan extends $tea.Model {
  /**
   * @example
   * UN_FINISH
   */
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeObjectList[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeRoleObjectList[];
  /**
   * @example
   * 10
   */
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanServiceGroupList[];
  /**
   * @example
   * 1629872386027
   */
  startTime?: number;
  /**
   * @example
   * UPGRADE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjectList: 'noticeObjectList',
      noticeRoleList: 'noticeRoleList',
      noticeRoleObjectList: 'noticeRoleObjectList',
      noticeTime: 'noticeTime',
      serviceGroupList: 'serviceGroupList',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanType: 'string',
      noticeChannels: { 'type': 'array', 'itemType': 'string' },
      noticeObjectList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeObjectList },
      noticeRoleList: { 'type': 'array', 'itemType': 'number' },
      noticeRoleObjectList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeRoleObjectList },
      noticeTime: 'number',
      serviceGroupList: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanServiceGroupList },
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailEscalationPlansResponseBodyData extends $tea.Model {
  convergenceEscalationPlan?: ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlan[];
  /**
   * @example
   * 312123
   */
  escalationPlanId?: number;
  /**
   * @example
   * 升级策略A
   */
  escalationPlanName?: string;
  nuAcknowledgeEscalationPlan?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlan[];
  unFinishEscalationPlan?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlan[];
  static names(): { [key: string]: string } {
    return {
      convergenceEscalationPlan: 'convergenceEscalationPlan',
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      nuAcknowledgeEscalationPlan: 'nuAcknowledgeEscalationPlan',
      unFinishEscalationPlan: 'unFinishEscalationPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convergenceEscalationPlan: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlan },
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      nuAcknowledgeEscalationPlan: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlan },
      unFinishEscalationPlan: { 'type': 'array', 'itemType': ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentDetailTimelinesResponseBodyData extends $tea.Model {
  /**
   * @example
   * INCIDENT_ADD
   */
  action?: string;
  createTime?: string;
  description?: string;
  incidentId?: number;
  relRouteRuleDeleteType?: number;
  relatedServiceName?: string;
  remark?: string;
  snapshotData?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      description: 'description',
      incidentId: 'incidentId',
      relRouteRuleDeleteType: 'relRouteRuleDeleteType',
      relatedServiceName: 'relatedServiceName',
      remark: 'remark',
      snapshotData: 'snapshotData',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      incidentId: 'number',
      relRouteRuleDeleteType: 'number',
      relatedServiceName: 'string',
      remark: 'string',
      snapshotData: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentSubtotalsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-06-23 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 12312
   */
  createUserId?: number;
  createUserName?: string;
  /**
   * @example
   * 130****1111
   */
  createUserPhone?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      createUserId: 'createUserId',
      createUserName: 'createUserName',
      createUserPhone: 'createUserPhone',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      createUserPhone: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentTimelinesResponseBodyData extends $tea.Model {
  /**
   * @example
   * INCIDENT_ADD
   */
  action?: string;
  /**
   * @example
   * 2021-06-23 00:00:00
   */
  createTime?: string;
  description?: number;
  /**
   * @example
   * 3321
   */
  incidentId?: number;
  /**
   * @example
   * I13002001
   */
  incidentNumber?: string;
  incidentTitle?: string;
  relRouteRuleDeleteType?: number;
  relatedServiceName?: string;
  remark?: string;
  snapshotData?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      description: 'description',
      incidentId: 'incidentId',
      incidentNumber: 'incidentNumber',
      incidentTitle: 'incidentTitle',
      relRouteRuleDeleteType: 'relRouteRuleDeleteType',
      relatedServiceName: 'relatedServiceName',
      remark: 'remark',
      snapshotData: 'snapshotData',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'number',
      incidentId: 'number',
      incidentNumber: 'string',
      incidentTitle: 'string',
      relRouteRuleDeleteType: 'number',
      relatedServiceName: 'string',
      remark: 'string',
      snapshotData: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIncidentsResponseBodyData extends $tea.Model {
  assignToWhoIsValid?: number;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 21312
   */
  assignUserId?: number;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   */
  assignUserName?: string;
  /**
   * @example
   * 1390000****
   */
  assignUserPhone?: string;
  /**
   * @remarks
   * 事件级别
   * 
   * @example
   * 2020-10-1 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 时间指派人ID
   * 
   * @example
   * HIGH
   */
  effect?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 12321
   */
  incidentId?: number;
  /**
   * @remarks
   * 影响程度
   * 
   * @example
   * P4
   */
  incidentLevel?: string;
  /**
   * @example
   * I3000021
   */
  incidentNumber?: string;
  /**
   * @remarks
   * 关联流转规则ID
   * 
   * @example
   * RESPONDED
   */
  incidentStatus?: string;
  /**
   * @remarks
   * 事件内容
   */
  incidentTitle?: string;
  /**
   * @example
   * true
   */
  isManual?: boolean;
  relRouteRuleDeleteType?: number;
  relServiceDeleteType?: number;
  /**
   * @remarks
   * 事件状态
   * 
   * @example
   * 213123
   */
  relatedServiceId?: number;
  relatedServiceName?: string;
  /**
   * @remarks
   * 关联的服务ID
   * 
   * @example
   * 123
   */
  routeRuleId?: number;
  routeRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      assignToWhoIsValid: 'assignToWhoIsValid',
      assignUserId: 'assignUserId',
      assignUserName: 'assignUserName',
      assignUserPhone: 'assignUserPhone',
      createTime: 'createTime',
      effect: 'effect',
      incidentId: 'incidentId',
      incidentLevel: 'incidentLevel',
      incidentNumber: 'incidentNumber',
      incidentStatus: 'incidentStatus',
      incidentTitle: 'incidentTitle',
      isManual: 'isManual',
      relRouteRuleDeleteType: 'relRouteRuleDeleteType',
      relServiceDeleteType: 'relServiceDeleteType',
      relatedServiceId: 'relatedServiceId',
      relatedServiceName: 'relatedServiceName',
      routeRuleId: 'routeRuleId',
      routeRuleName: 'routeRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignToWhoIsValid: 'number',
      assignUserId: 'number',
      assignUserName: 'string',
      assignUserPhone: 'string',
      createTime: 'string',
      effect: 'string',
      incidentId: 'number',
      incidentLevel: 'string',
      incidentNumber: 'string',
      incidentStatus: 'string',
      incidentTitle: 'string',
      isManual: 'boolean',
      relRouteRuleDeleteType: 'number',
      relServiceDeleteType: 'number',
      relatedServiceId: 'number',
      relatedServiceName: 'string',
      routeRuleId: 'number',
      routeRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigTimelinesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-04-05 10:10:10
   */
  createTime?: string;
  description?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationConfigsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1023
   */
  integrationConfigId?: number;
  /**
   * @example
   * false
   */
  isReceivedEvent?: boolean;
  /**
   * @example
   * 87
   */
  monitorSourceId?: number;
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * Zabbix
   */
  monitorSourceShortName?: string;
  monitorSourceType?: number;
  /**
   * @example
   * NOT_INTEGRATED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      integrationConfigId: 'integrationConfigId',
      isReceivedEvent: 'isReceivedEvent',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      monitorSourceShortName: 'monitorSourceShortName',
      monitorSourceType: 'monitorSourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationConfigId: 'number',
      isReceivedEvent: 'boolean',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      monitorSourceShortName: 'string',
      monitorSourceType: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorSourcesResponseBodyData extends $tea.Model {
  fieldKeys?: string[];
  /**
   * @example
   * 12
   */
  monitorSourceId?: number;
  /**
   * @example
   * Zabbix
   */
  monitorSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKeys: 'fieldKeys',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKeys: { 'type': 'array', 'itemType': 'string' },
      monitorSourceId: 'number',
      monitorSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemDetailOperationsResponseBodyData extends $tea.Model {
  /**
   * @example
   * PROBLEM_CANCEL
   */
  action?: string;
  /**
   * @example
   * 2021-01-23 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * 服务A
   */
  relatedServiceName?: string;
  /**
   * @example
   * 备注
   */
  remark?: string;
  /**
   * @example
   * {“userName”:"小明"}
   */
  snapshotData?: string;
  /**
   * @example
   * 动态标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      description: 'description',
      relatedServiceName: 'relatedServiceName',
      remark: 'remark',
      snapshotData: 'snapshotData',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      relatedServiceName: 'string',
      remark: 'string',
      snapshotData: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemOperationsResponseBodyData extends $tea.Model {
  /**
   * @example
   * PROBLEM_CANCEL
   */
  action?: string;
  /**
   * @example
   * 2021-01-23 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * 12312
   */
  problemId?: number;
  /**
   * @example
   * 这是一个故障
   */
  problemName?: string;
  /**
   * @example
   * P1231231
   */
  problemNumber?: string;
  /**
   * @example
   * 服务名称
   */
  relatedServiceName?: string;
  /**
   * @example
   * {“userName”:"小明"}
   */
  snapshotData?: string;
  /**
   * @example
   * 动态标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      description: 'description',
      problemId: 'problemId',
      problemName: 'problemName',
      problemNumber: 'problemNumber',
      relatedServiceName: 'relatedServiceName',
      snapshotData: 'snapshotData',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      problemId: 'number',
      problemName: 'string',
      problemNumber: 'string',
      relatedServiceName: 'string',
      snapshotData: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemSubtotalsResponseBodyData extends $tea.Model {
  createRamName?: string;
  /**
   * @example
   * 2020-10-02 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 123123
   */
  createUserId?: number;
  /**
   * @example
   * 130****11111
   */
  createUserPhone?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      createRamName: 'createRamName',
      createTime: 'createTime',
      createUserId: 'createUserId',
      createUserPhone: 'createUserPhone',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRamName: 'string',
      createTime: 'string',
      createUserId: 'number',
      createUserPhone: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemTimeLinesResponseBodyDataUsersInContent extends $tea.Model {
  isValid?: number;
  /**
   * @example
   * 232
   */
  userId?: number;
  /**
   * @example
   * 张老萨
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      isValid: 'isValid',
      userId: 'userId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'number',
      userId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemTimeLinesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 2020-08-08 15:38:38
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  isKey?: boolean;
  /**
   * @example
   * PROBLEM_INJECTION,PROBLEM_HAPPEN
   */
  keyNode?: string;
  /**
   * @example
   * 10000
   */
  problemTimelineId?: number;
  /**
   * @example
   * 2020-08-08 15:38:38
   */
  time?: string;
  /**
   * @example
   * 2020-08-08 15:38:38
   */
  updateTime?: string;
  usersInContent?: ListProblemTimeLinesResponseBodyDataUsersInContent[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      isKey: 'isKey',
      keyNode: 'keyNode',
      problemTimelineId: 'problemTimelineId',
      time: 'time',
      updateTime: 'updateTime',
      usersInContent: 'usersInContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      isKey: 'boolean',
      keyNode: 'string',
      problemTimelineId: 'number',
      time: 'string',
      updateTime: 'string',
      usersInContent: { 'type': 'array', 'itemType': ListProblemTimeLinesResponseBodyDataUsersInContent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemsResponseBodyDataAffectServices extends $tea.Model {
  /**
   * @example
   * 服务描述
   */
  serviceDescription?: string;
  /**
   * @example
   * 100
   */
  serviceId?: number;
  /**
   * @example
   * 冲上云霄
   */
  serviceName?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      serviceDescription: 'serviceDescription',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDescription: 'string',
      serviceId: 'number',
      serviceName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProblemsResponseBodyData extends $tea.Model {
  affectServices?: ListProblemsResponseBodyDataAffectServices[];
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  cancelTime?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  createTime?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  discoverTime?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  finishTime?: string;
  /**
   * @example
   * 10000
   */
  incidentId?: number;
  /**
   * @example
   * true
   */
  isManual?: boolean;
  /**
   * @example
   * true
   */
  isUpgrade?: boolean;
  /**
   * @example
   * 100
   */
  mainHandlerId?: number;
  mainHandlerIsValid?: number;
  /**
   * @example
   * 王宇
   */
  mainHandlerName?: string;
  /**
   * @example
   * 1
   */
  problemId?: number;
  /**
   * @example
   * P1
   */
  problemLevel?: string;
  /**
   * @example
   * 故障
   */
  problemName?: string;
  /**
   * @example
   * P34438300000001116258132229577472
   */
  problemNumber?: string;
  /**
   * @example
   * HANDLING
   */
  problemStatus?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  recoveryTime?: string;
  /**
   * @example
   * 1
   */
  relatedServiceId?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  replayTime?: string;
  serviceDeletedType?: number;
  /**
   * @example
   * 服务1
   */
  serviceName?: string;
  /**
   * @example
   * 2020-09-08 15:59:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      affectServices: 'affectServices',
      cancelTime: 'cancelTime',
      createTime: 'createTime',
      discoverTime: 'discoverTime',
      finishTime: 'finishTime',
      incidentId: 'incidentId',
      isManual: 'isManual',
      isUpgrade: 'isUpgrade',
      mainHandlerId: 'mainHandlerId',
      mainHandlerIsValid: 'mainHandlerIsValid',
      mainHandlerName: 'mainHandlerName',
      problemId: 'problemId',
      problemLevel: 'problemLevel',
      problemName: 'problemName',
      problemNumber: 'problemNumber',
      problemStatus: 'problemStatus',
      recoveryTime: 'recoveryTime',
      relatedServiceId: 'relatedServiceId',
      replayTime: 'replayTime',
      serviceDeletedType: 'serviceDeletedType',
      serviceName: 'serviceName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectServices: { 'type': 'array', 'itemType': ListProblemsResponseBodyDataAffectServices },
      cancelTime: 'string',
      createTime: 'string',
      discoverTime: 'string',
      finishTime: 'string',
      incidentId: 'number',
      isManual: 'boolean',
      isUpgrade: 'boolean',
      mainHandlerId: 'number',
      mainHandlerIsValid: 'number',
      mainHandlerName: 'string',
      problemId: 'number',
      problemLevel: 'string',
      problemName: 'string',
      problemNumber: 'string',
      problemStatus: 'string',
      recoveryTime: 'string',
      relatedServiceId: 'string',
      replayTime: 'string',
      serviceDeletedType: 'number',
      serviceName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  assignObjectId?: number;
  /**
   * @example
   * SERVICEGROUP
   */
  assignObjectType?: string;
  /**
   * @example
   * 2020-03-05 15:53:55
   */
  createTime?: string;
  /**
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @example
   * DISABLE
   */
  enableStatus?: string;
  /**
   * @example
   * P1
   */
  incidentLevel?: string;
  isValid?: number;
  /**
   * @example
   * 10
   */
  matchCount?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceNames?: string;
  relServiceDeleteType?: number;
  /**
   * @example
   * 1
   */
  relatedServiceId?: number;
  /**
   * @example
   * 关联服务名字
   */
  relatedServiceName?: string;
  /**
   * @example
   * 10000
   */
  routeRuleId?: number;
  /**
   * @example
   * INCIDENT
   */
  routeType?: string;
  /**
   * @example
   * 规则名字
   */
  ruleName?: string;
  /**
   * @example
   * 1344383
   */
  tenantRamId?: number;
  /**
   * @example
   * 时间窗口
   */
  timeWindow?: number;
  /**
   * @example
   * MINUTE
   */
  timeWindowUnit?: number;
  /**
   * @example
   * 2020-03-05 15:53:55
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      assignObjectId: 'assignObjectId',
      assignObjectType: 'assignObjectType',
      createTime: 'createTime',
      effection: 'effection',
      enableStatus: 'enableStatus',
      incidentLevel: 'incidentLevel',
      isValid: 'isValid',
      matchCount: 'matchCount',
      monitorSourceNames: 'monitorSourceNames',
      relServiceDeleteType: 'relServiceDeleteType',
      relatedServiceId: 'relatedServiceId',
      relatedServiceName: 'relatedServiceName',
      routeRuleId: 'routeRuleId',
      routeType: 'routeType',
      ruleName: 'ruleName',
      tenantRamId: 'tenantRamId',
      timeWindow: 'timeWindow',
      timeWindowUnit: 'timeWindowUnit',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignObjectId: 'number',
      assignObjectType: 'string',
      createTime: 'string',
      effection: 'string',
      enableStatus: 'string',
      incidentLevel: 'string',
      isValid: 'number',
      matchCount: 'number',
      monitorSourceNames: 'string',
      relServiceDeleteType: 'number',
      relatedServiceId: 'number',
      relatedServiceName: 'string',
      routeRuleId: 'number',
      routeType: 'string',
      ruleName: 'string',
      tenantRamId: 'number',
      timeWindow: 'number',
      timeWindowUnit: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByAssignWhoIdResponseBodyData extends $tea.Model {
  id?: number;
  ruleName?: string;
  tenantRamId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      ruleName: 'ruleName',
      tenantRamId: 'tenantRamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleName: 'string',
      tenantRamId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRulesByServiceResponseBodyData extends $tea.Model {
  id?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupMonitorSourceTemplatesResponseBodyData extends $tea.Model {
  fields?: string[];
  /**
   * @example
   * 1000
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * ""
   */
  templateContent?: string;
  /**
   * @example
   * 1000
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      templateContent: 'templateContent',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      templateContent: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBodyDataUsers extends $tea.Model {
  /**
   * @example
   * wy930***@163.com
   */
  email?: string;
  isRelated?: number;
  /**
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 10
   */
  userId?: number;
  /**
   * @example
   * jack
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      isRelated: 'isRelated',
      phone: 'phone',
      serviceGroupId: 'serviceGroupId',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      isRelated: 'number',
      phone: 'string',
      serviceGroupId: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsResponseBodyData extends $tea.Model {
  /**
   * @example
   * ENABLE
   */
  enableWebhook?: string;
  /**
   * @example
   * true
   */
  isScheduled?: boolean;
  /**
   * @example
   * 服务描述
   */
  serviceGroupDescription?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 服务组
   */
  serviceGroupName?: string;
  /**
   * @example
   * 2020-08-09 15:50:30
   */
  updateTime?: string;
  users?: ListServiceGroupsResponseBodyDataUsers[];
  /**
   * @example
   * wwwwwwwwww
   */
  webhookLink?: string;
  /**
   * @example
   * WEIXIN_GROUP
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      enableWebhook: 'enableWebhook',
      isScheduled: 'isScheduled',
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
      updateTime: 'updateTime',
      users: 'users',
      webhookLink: 'webhookLink',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWebhook: 'string',
      isScheduled: 'boolean',
      serviceGroupDescription: 'string',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
      updateTime: 'string',
      users: { 'type': 'array', 'itemType': ListServiceGroupsResponseBodyDataUsers },
      webhookLink: 'string',
      webhookType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceGroupsByUserIdResponseBodyData extends $tea.Model {
  isScheduled?: boolean;
  serviceGroupId?: number;
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isScheduled: 'isScheduled',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isScheduled: 'boolean',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyData extends $tea.Model {
  escalationPlanId?: number;
  escalationPlanName?: string;
  isValid?: number;
  /**
   * @example
   * 服务描述
   */
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  /**
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * 冲上云霄
   */
  serviceName?: string;
  /**
   * @example
   * 2020-09-08 14:30:30
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
      isValid: 'isValid',
      serviceDescription: 'serviceDescription',
      serviceGroupIdList: 'serviceGroupIdList',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
      escalationPlanName: 'string',
      isValid: 'number',
      serviceDescription: 'string',
      serviceGroupIdList: { 'type': 'array', 'itemType': 'number' },
      serviceId: 'number',
      serviceName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsResponseBodyData extends $tea.Model {
  /**
   * @example
   * ""
   */
  eventJson?: string;
  /**
   * @example
   * 2020-09-08 15:53:34
   */
  eventTime?: string;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * INCIDENT
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * 1
   */
  routeRuleId?: number;
  /**
   * @example
   * 1
   */
  tenantRamId?: number;
  static names(): { [key: string]: string } {
    return {
      eventJson: 'eventJson',
      eventTime: 'eventTime',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      routeRuleId: 'routeRuleId',
      tenantRamId: 'tenantRamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventJson: 'string',
      eventTime: 'string',
      instanceId: 'number',
      instanceType: 'string',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      routeRuleId: 'number',
      tenantRamId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceEventsForMonitorSourceResponseBodyData extends $tea.Model {
  /**
   * @example
   * {}
   */
  eventJson?: string;
  /**
   * @example
   * 2020-01-01 18:30:00
   */
  eventTime?: string;
  /**
   * @example
   * 1000
   */
  monitorSourceId?: boolean;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventJson: 'eventJson',
      eventTime: 'eventTime',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventJson: 'string',
      eventTime: 'string',
      monitorSourceId: 'boolean',
      monitorSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionServiceGroupsResponseBodyData extends $tea.Model {
  serviceGroupDescription?: string;
  /**
   * @example
   * 123113
   */
  serviceId?: number;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceGroupDescription: 'serviceGroupDescription',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupDescription: 'string',
      serviceId: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBodyDataNotifyObjectList extends $tea.Model {
  /**
   * @example
   * 10
   */
  id?: number;
  isValid?: number;
  /**
   * @example
   * 张珊
   */
  name?: string;
  /**
   * @example
   * 10
   */
  notifyObjectId?: number;
  /**
   * @example
   * USER
   */
  notifyObjectType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isValid: 'isValid',
      name: 'name',
      notifyObjectId: 'notifyObjectId',
      notifyObjectType: 'notifyObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isValid: 'number',
      name: 'string',
      notifyObjectId: 'number',
      notifyObjectType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBodyDataScopeObjectList extends $tea.Model {
  /**
   * @example
   * 10
   */
  id?: number;
  isValid?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: number;
  /**
   * @example
   * 阿里云服务
   */
  scopeObject?: string;
  /**
   * @example
   * 10
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isValid: 'isValid',
      scope: 'scope',
      scopeObject: 'scopeObject',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isValid: 'number',
      scope: 'number',
      scopeObject: 'string',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-05-09 10:10:10
   */
  endTime?: string;
  /**
   * @example
   * LONG_TERM
   */
  expiredType?: string;
  notifyObjectList?: ListSubscriptionsResponseBodyDataNotifyObjectList[];
  /**
   * @example
   * USER
   */
  notifyObjectType?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: number;
  scopeObjectList?: ListSubscriptionsResponseBodyDataScopeObjectList[];
  /**
   * @example
   * 2020-05-09 10:10:10
   */
  startTime?: string;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @example
   * 10
   */
  subscriptionId?: number;
  /**
   * @example
   * test
   */
  subscriptionTitle?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      expiredType: 'expiredType',
      notifyObjectList: 'notifyObjectList',
      notifyObjectType: 'notifyObjectType',
      scope: 'scope',
      scopeObjectList: 'scopeObjectList',
      startTime: 'startTime',
      status: 'status',
      subscriptionId: 'subscriptionId',
      subscriptionTitle: 'subscriptionTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      expiredType: 'string',
      notifyObjectList: { 'type': 'array', 'itemType': ListSubscriptionsResponseBodyDataNotifyObjectList },
      notifyObjectType: 'number',
      scope: 'number',
      scopeObjectList: { 'type': 'array', 'itemType': ListSubscriptionsResponseBodyDataScopeObjectList },
      startTime: 'string',
      status: 'string',
      subscriptionId: 'number',
      subscriptionTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrendForSourceEventResponseBodyData extends $tea.Model {
  /**
   * @example
   * 90.90%
   */
  convergenceRate?: string;
  /**
   * @example
   * 10920312312312
   */
  maxSustainTime?: number;
  /**
   * @example
   * true
   */
  skipDay?: boolean;
  /**
   * @example
   * {             "Grafana": [                 {                     "evenTime": "2021-11-15 14:29:59",                     "eventCount": 4,                     "monitorSourceName": "Grafana",                     "monitorSourceCounts": null,                     "sustainTime": 15646                 },                 {                     "evenTime": "2021-11-15 14:30:36",                     "eventCount": 7,                     "monitorSourceName": "Grafana",                     "monitorSourceCounts": null,                     "sustainTime": 52638                 }             ]         }
   */
  sourceEventsStatMap?: { [key: string]: any };
  /**
   * @example
   * 1000
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      convergenceRate: 'convergenceRate',
      maxSustainTime: 'maxSustainTime',
      skipDay: 'skipDay',
      sourceEventsStatMap: 'sourceEventsStatMap',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convergenceRate: 'string',
      maxSustainTime: 'number',
      skipDay: 'boolean',
      sourceEventsStatMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSerivceGroupsResponseBodyDataServiceGroups extends $tea.Model {
  /**
   * @example
   * 描述
   */
  serviceGroupDescription?: string;
  /**
   * @example
   * 123
   */
  serviceGroupId?: number;
  /**
   * @example
   * 服务组A
   */
  serviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceGroupDescription: 'serviceGroupDescription',
      serviceGroupId: 'serviceGroupId',
      serviceGroupName: 'serviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupDescription: 'string',
      serviceGroupId: 'number',
      serviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSerivceGroupsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 12121****@163.com
   */
  email?: string;
  /**
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @example
   * 321
   */
  ramId?: number;
  serviceGroups?: ListUserSerivceGroupsResponseBodyDataServiceGroups[];
  /**
   * @example
   * 321
   */
  userId?: number;
  /**
   * @example
   * 小明
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      phone: 'phone',
      ramId: 'ramId',
      serviceGroups: 'serviceGroups',
      userId: 'userId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      phone: 'string',
      ramId: 'number',
      serviceGroups: { 'type': 'array', 'itemType': ListUserSerivceGroupsResponseBodyDataServiceGroups },
      userId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  /**
   * @example
   * SUB
   */
  accountType?: number;
  /**
   * @example
   * 23456tre
   */
  appAccount?: string;
  /**
   * @example
   * 2345****@qq.com
   */
  email?: string;
  gmtActive?: string;
  gmtCreate?: string;
  isActive?: number;
  /**
   * @example
   * true
   */
  isEditableUser?: number;
  isOperation?: number;
  isRam?: number;
  /**
   * @example
   * RELATED关联  NOT_RELATED 未关联
   */
  isRelated?: string;
  /**
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @example
   * 53624523
   */
  ramId?: number;
  roleIdList?: number[];
  roleNameList?: string[];
  /**
   * @example
   * DINGDING
   */
  synergyChannel?: string;
  /**
   * @example
   * 1234
   */
  userId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'accountType',
      appAccount: 'appAccount',
      email: 'email',
      gmtActive: 'gmtActive',
      gmtCreate: 'gmtCreate',
      isActive: 'isActive',
      isEditableUser: 'isEditableUser',
      isOperation: 'isOperation',
      isRam: 'isRam',
      isRelated: 'isRelated',
      phone: 'phone',
      ramId: 'ramId',
      roleIdList: 'roleIdList',
      roleNameList: 'roleNameList',
      synergyChannel: 'synergyChannel',
      userId: 'userId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'number',
      appAccount: 'string',
      email: 'string',
      gmtActive: 'string',
      gmtCreate: 'string',
      isActive: 'number',
      isEditableUser: 'number',
      isOperation: 'number',
      isRam: 'number',
      isRelated: 'string',
      phone: 'string',
      ramId: 'number',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      roleNameList: { 'type': 'array', 'itemType': 'string' },
      synergyChannel: 'string',
      userId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshIntegrationConfigKeyResponseBodyData extends $tea.Model {
  /**
   * @example
   * 859FA6A2-AC5C-4B09-BE23-986F887H6A232
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions extends $tea.Model {
  /**
   * @remarks
   * LOW HIGH
   * 
   * @example
   * LOW
   */
  effection?: string;
  /**
   * @remarks
   * P1 P2 P3 P4
   * 
   * @example
   * P1
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      effection: 'effection',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effection: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies extends $tea.Model {
  /**
   * @example
   * true
   */
  enableWebhook?: boolean;
  /**
   * @example
   * UN_ACKNOWLEDGE
   */
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjects?: number[];
  noticeRoleList?: number[];
  /**
   * @example
   * 30
   */
  noticeTime?: number;
  serviceGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      enableWebhook: 'enableWebhook',
      escalationPlanType: 'escalationPlanType',
      noticeChannels: 'noticeChannels',
      noticeObjects: 'noticeObjects',
      noticeRoleList: 'noticeRoleList',
      noticeTime: 'noticeTime',
      serviceGroupIds: 'serviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWebhook: 'boolean',
      escalationPlanType: 'string',
      noticeChannels: { 'type': 'array', 'itemType': 'string' },
      noticeObjects: { 'type': 'array', 'itemType': 'number' },
      noticeRoleList: { 'type': 'array', 'itemType': 'number' },
      noticeTime: 'number',
      serviceGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanRequestEscalationPlanRules extends $tea.Model {
  escalationPlanConditions?: UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions[];
  escalationPlanStrategies?: UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies[];
  /**
   * @example
   * UN_ACKNOWLEDGE
   */
  escalationPlanType?: string;
  /**
   * @example
   * 872
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      escalationPlanConditions: 'escalationPlanConditions',
      escalationPlanStrategies: 'escalationPlanStrategies',
      escalationPlanType: 'escalationPlanType',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanConditions: { 'type': 'array', 'itemType': UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions },
      escalationPlanStrategies: { 'type': 'array', 'itemType': UpdateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies },
      escalationPlanType: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEscalationPlanRequestEscalationPlanScopeObjects extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 87
   */
  id?: number;
  /**
   * @example
   * SERVICE
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      scope: 'scope',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      scope: 'string',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIncidentResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2312
   */
  incidentId?: number;
  static names(): { [key: string]: string } {
    return {
      incidentId: 'incidentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRichTextResponseBodyData extends $tea.Model {
  /**
   * @example
   * 12
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
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

export class UpdateRouteRuleRequestRouteChildRulesConditions extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * payload.summary
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * equals
   */
  operationSymbol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operationSymbol: 'operationSymbol',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operationSymbol: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteRuleRequestRouteChildRules extends $tea.Model {
  /**
   * @example
   * 1
   */
  childConditionRelation?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  childRouteRuleId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  conditions?: UpdateRouteRuleRequestRouteChildRulesConditions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isValidChildRule?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorSourceId?: number;
  problemLevel?: string;
  static names(): { [key: string]: string } {
    return {
      childConditionRelation: 'childConditionRelation',
      childRouteRuleId: 'childRouteRuleId',
      conditions: 'conditions',
      isValidChildRule: 'isValidChildRule',
      monitorSourceId: 'monitorSourceId',
      problemLevel: 'problemLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childConditionRelation: 'number',
      childRouteRuleId: 'number',
      conditions: { 'type': 'array', 'itemType': UpdateRouteRuleRequestRouteChildRulesConditions },
      isValidChildRule: 'boolean',
      monitorSourceId: 'number',
      problemLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupRequestMonitorSourceTemplates extends $tea.Model {
  /**
   * @example
   * 11111
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  /**
   * @example
   * xxxx
   */
  templateContent?: string;
  /**
   * @example
   * 1111
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
      templateContent: 'templateContent',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSourceId: 'number',
      monitorSourceName: 'string',
      templateContent: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers extends $tea.Model {
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 6666
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequestFastScheduling extends $tea.Model {
  /**
   * @example
   * FAST_CHOICE
   */
  dutyPlan?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  schedulingUsers?: UpdateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers[];
  /**
   * @example
   * 12
   */
  singleDuration?: number;
  /**
   * @example
   * DAY
   */
  singleDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dutyPlan: 'dutyPlan',
      id: 'id',
      schedulingUsers: 'schedulingUsers',
      singleDuration: 'singleDuration',
      singleDurationUnit: 'singleDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dutyPlan: 'string',
      id: 'number',
      schedulingUsers: { 'type': 'array', 'itemType': UpdateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers },
      singleDuration: 'number',
      singleDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts extends $tea.Model {
  /**
   * @example
   * 123
   */
  cycleOrder?: number;
  /**
   * @example
   * 2020-10-13
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2020-08-13
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 32
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  /**
   * @example
   * 早班
   */
  shiftName?: string;
  /**
   * @example
   * true
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      cycleOrder: 'cycleOrder',
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      shiftName: 'shiftName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleOrder: 'number',
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      shiftName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts extends $tea.Model {
  /**
   * @example
   * 2021-11-01 00:00：00
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @example
   * 2021-10-01 00:00：00
   */
  schedulingStartTime?: string;
  /**
   * @example
   * 1
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  shiftName?: string;
  /**
   * @example
   * false
   */
  skipOneDay?: boolean;
  static names(): { [key: string]: string } {
    return {
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
      shiftName: 'shiftName',
      skipOneDay: 'skipOneDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
      shiftName: 'string',
      skipOneDay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSchedulingRequestFineScheduling extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * DAY
   */
  periodUnit?: string;
  schedulingFineShifts?: UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts[];
  /**
   * @example
   * MORNING_NIGHT
   */
  shiftType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      period: 'period',
      periodUnit: 'periodUnit',
      schedulingFineShifts: 'schedulingFineShifts',
      schedulingTemplateFineShifts: 'schedulingTemplateFineShifts',
      shiftType: 'shiftType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      period: 'number',
      periodUnit: 'string',
      schedulingFineShifts: { 'type': 'array', 'itemType': UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts },
      schedulingTemplateFineShifts: { 'type': 'array', 'itemType': UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts },
      shiftType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceGroupSpecialDaySchedulingRequestSchedulingSpecialDays extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-08-19 12:00:00
   */
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  /**
   * @example
   * 1
   */
  schedulingOrder?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-08-19 08:00:00
   */
  schedulingStartTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 64
   */
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schedulingEndTime: 'schedulingEndTime',
      schedulingObjectType: 'schedulingObjectType',
      schedulingOrder: 'schedulingOrder',
      schedulingStartTime: 'schedulingStartTime',
      schedulingUserId: 'schedulingUserId',
      schedulingUserIdList: 'schedulingUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulingEndTime: 'string',
      schedulingObjectType: 'string',
      schedulingOrder: 'number',
      schedulingStartTime: 'string',
      schedulingUserId: 'number',
      schedulingUserIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestNotifyObjectList extends $tea.Model {
  /**
   * @example
   * 10
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19
   */
  notifyObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      notifyObjectId: 'notifyObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      notifyObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestNotifyStrategyListStrategiesConditions extends $tea.Model {
  /**
   * @example
   * INCIDENT_TRIGGER
   */
  action?: string;
  /**
   * @example
   * HIGH
   */
  effection?: string;
  /**
   * @example
   * P1
   */
  level?: string;
  /**
   * @example
   * PROBLEM_NOTIFY
   */
  problemNotifyType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      effection: 'effection',
      level: 'level',
      problemNotifyType: 'problemNotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      effection: 'string',
      level: 'string',
      problemNotifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestNotifyStrategyListStrategiesPeriodChannel extends $tea.Model {
  /**
   * @example
   * SMS,WEIXIN_GROUP
   */
  nonWorkday?: string;
  /**
   * @example
   * SMS,WEIXIN_GROUP
   */
  workday?: string;
  static names(): { [key: string]: string } {
    return {
      nonWorkday: 'nonWorkday',
      workday: 'workday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonWorkday: 'string',
      workday: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestNotifyStrategyListStrategies extends $tea.Model {
  /**
   * @example
   * SMS,WEIXIN_GROUP
   */
  channels?: string;
  conditions?: UpdateSubscriptionRequestNotifyStrategyListStrategiesConditions[];
  /**
   * @example
   * 10
   */
  id?: string;
  periodChannel?: UpdateSubscriptionRequestNotifyStrategyListStrategiesPeriodChannel;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      conditions: 'conditions',
      id: 'id',
      periodChannel: 'periodChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'string',
      conditions: { 'type': 'array', 'itemType': UpdateSubscriptionRequestNotifyStrategyListStrategiesConditions },
      id: 'string',
      periodChannel: UpdateSubscriptionRequestNotifyStrategyListStrategiesPeriodChannel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestNotifyStrategyList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INCIDENT
   */
  instanceType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  strategies?: UpdateSubscriptionRequestNotifyStrategyListStrategies[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instanceType',
      strategies: 'strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'number',
      strategies: { 'type': 'array', 'itemType': UpdateSubscriptionRequestNotifyStrategyListStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequestScopeObjectList extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scopeObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      scopeObjectId: 'scopeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      scopeObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleRequestTestSourceEvents extends $tea.Model {
  /**
   * @example
   * {}
   */
  eventJson?: string;
  /**
   * @example
   * 2021-09-08 13:00:00
   */
  eventTime?: string;
  /**
   * @example
   * 1
   */
  monitorSourceId?: number;
  /**
   * @example
   * zabbix
   */
  monitorSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventJson: 'eventJson',
      eventTime: 'eventTime',
      monitorSourceId: 'monitorSourceId',
      monitorSourceName: 'monitorSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventJson: 'string',
      eventTime: 'string',
      monitorSourceId: 'number',
      monitorSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleResponseBodyDataEscalationPlans extends $tea.Model {
  /**
   * @example
   * 111111
   */
  escalationPlanId?: number;
  /**
   * @example
   * 升级计划1
   */
  escalationPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlanId: 'escalationPlanId',
      escalationPlanName: 'escalationPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlanId: 'number',
      escalationPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleResponseBodyDataNotifySubscriptionNames extends $tea.Model {
  /**
   * @example
   * 111111
   */
  subscriptionId?: number;
  /**
   * @example
   * 订阅名称
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionId: 'subscriptionId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRouteRuleResponseBodyData extends $tea.Model {
  escalationPlans?: VerifyRouteRuleResponseBodyDataEscalationPlans[];
  /**
   * @example
   * true
   */
  isValidRule?: boolean;
  monitorSourceIds?: number[];
  notifySubscriptionNames?: VerifyRouteRuleResponseBodyDataNotifySubscriptionNames[];
  routeRuleFailReason?: string[];
  /**
   * @example
   * INCIDENT、ALERT
   */
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      escalationPlans: 'escalationPlans',
      isValidRule: 'isValidRule',
      monitorSourceIds: 'monitorSourceIds',
      notifySubscriptionNames: 'notifySubscriptionNames',
      routeRuleFailReason: 'routeRuleFailReason',
      routeType: 'routeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPlans: { 'type': 'array', 'itemType': VerifyRouteRuleResponseBodyDataEscalationPlans },
      isValidRule: 'boolean',
      monitorSourceIds: { 'type': 'array', 'itemType': 'number' },
      notifySubscriptionNames: { 'type': 'array', 'itemType': VerifyRouteRuleResponseBodyDataNotifySubscriptionNames },
      routeRuleFailReason: { 'type': 'array', 'itemType': 'string' },
      routeType: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gemp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 添加故障协同组
   * 
   * @param request - AddProblemServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddProblemServiceGroupResponse
   */
  async addProblemServiceGroupWithOptions(request: AddProblemServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddProblemServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.serviceGroupIds)) {
      body["serviceGroupIds"] = request.serviceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddProblemServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/addServiceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddProblemServiceGroupResponse>(await this.callApi(params, req, runtime), new AddProblemServiceGroupResponse({}));
  }

  /**
   * 添加故障协同组
   * 
   * @param request - AddProblemServiceGroupRequest
   * @returns AddProblemServiceGroupResponse
   */
  async addProblemServiceGroup(request: AddProblemServiceGroupRequest): Promise<AddProblemServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addProblemServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 计费展示
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BillingStatisticsResponse
   */
  async billingStatisticsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BillingStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "BillingStatistics",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/charging/details`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BillingStatisticsResponse>(await this.callApi(params, req, runtime), new BillingStatisticsResponse({}));
  }

  /**
   * 计费展示
   * @returns BillingStatisticsResponse
   */
  async billingStatistics(): Promise<BillingStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.billingStatisticsWithOptions(headers, runtime);
  }

  /**
   * 故障取消
   * 
   * @param request - CancelProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelProblemResponse
   */
  async cancelProblemWithOptions(request: CancelProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cancelReason)) {
      body["cancelReason"] = request.cancelReason;
    }

    if (!Util.isUnset(request.cancelReasonDescription)) {
      body["cancelReasonDescription"] = request.cancelReasonDescription;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelProblemResponse>(await this.callApi(params, req, runtime), new CancelProblemResponse({}));
  }

  /**
   * 故障取消
   * 
   * @param request - CancelProblemRequest
   * @returns CancelProblemResponse
   */
  async cancelProblem(request: CancelProblemRequest): Promise<CancelProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelProblemWithOptions(request, headers, runtime);
  }

  /**
   * 校验webhook地址
   * 
   * @param request - CheckWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckWebhookResponse
   */
  async checkWebhookWithOptions(request: CheckWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckWebhookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.webhook)) {
      body["webhook"] = request.webhook;
    }

    if (!Util.isUnset(request.webhookType)) {
      body["webhookType"] = request.webhookType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckWebhook",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/check/webhook`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckWebhookResponse>(await this.callApi(params, req, runtime), new CheckWebhookResponse({}));
  }

  /**
   * 校验webhook地址
   * 
   * @param request - CheckWebhookRequest
   * @returns CheckWebhookResponse
   */
  async checkWebhook(request: CheckWebhookRequest): Promise<CheckWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 确认集成配置
   * 
   * @param request - ConfirmIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmIntegrationConfigResponse
   */
  async confirmIntegrationConfigWithOptions(request: ConfirmIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConfirmIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConfirmIntegrationConfigResponse>(await this.callApi(params, req, runtime), new ConfirmIntegrationConfigResponse({}));
  }

  /**
   * 确认集成配置
   * 
   * @param request - ConfirmIntegrationConfigRequest
   * @returns ConfirmIntegrationConfigResponse
   */
  async confirmIntegrationConfig(request: ConfirmIntegrationConfigRequest): Promise<ConfirmIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 创建升级计划
   * 
   * @param request - CreateEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEscalationPlanResponse
   */
  async createEscalationPlanWithOptions(request: CreateEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanDescription)) {
      body["escalationPlanDescription"] = request.escalationPlanDescription;
    }

    if (!Util.isUnset(request.escalationPlanName)) {
      body["escalationPlanName"] = request.escalationPlanName;
    }

    if (!Util.isUnset(request.escalationPlanRules)) {
      body["escalationPlanRules"] = request.escalationPlanRules;
    }

    if (!Util.isUnset(request.escalationPlanScopeObjects)) {
      body["escalationPlanScopeObjects"] = request.escalationPlanScopeObjects;
    }

    if (!Util.isUnset(request.isGlobal)) {
      body["isGlobal"] = request.isGlobal;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEscalationPlanResponse>(await this.callApi(params, req, runtime), new CreateEscalationPlanResponse({}));
  }

  /**
   * 创建升级计划
   * 
   * @param request - CreateEscalationPlanRequest
   * @returns CreateEscalationPlanResponse
   */
  async createEscalationPlan(request: CreateEscalationPlanRequest): Promise<CreateEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 手动创建事件
   * 
   * @param request - CreateIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIncidentResponse
   */
  async createIncidentWithOptions(request: CreateIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assignUserId)) {
      body["assignUserId"] = request.assignUserId;
    }

    if (!Util.isUnset(request.channels)) {
      body["channels"] = request.channels;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.effect)) {
      body["effect"] = request.effect;
    }

    if (!Util.isUnset(request.incidentDescription)) {
      body["incidentDescription"] = request.incidentDescription;
    }

    if (!Util.isUnset(request.incidentLevel)) {
      body["incidentLevel"] = request.incidentLevel;
    }

    if (!Util.isUnset(request.incidentTitle)) {
      body["incidentTitle"] = request.incidentTitle;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/manualSave`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIncidentResponse>(await this.callApi(params, req, runtime), new CreateIncidentResponse({}));
  }

  /**
   * 手动创建事件
   * 
   * @param request - CreateIncidentRequest
   * @returns CreateIncidentResponse
   */
  async createIncident(request: CreateIncidentRequest): Promise<CreateIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 新增事件小计
   * 
   * @param request - CreateIncidentSubtotalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIncidentSubtotalResponse
   */
  async createIncidentSubtotalWithOptions(request: CreateIncidentSubtotalRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIncidentSubtotalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIncidentSubtotal",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/save/subtotal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIncidentSubtotalResponse>(await this.callApi(params, req, runtime), new CreateIncidentSubtotalResponse({}));
  }

  /**
   * 新增事件小计
   * 
   * @param request - CreateIncidentSubtotalRequest
   * @returns CreateIncidentSubtotalResponse
   */
  async createIncidentSubtotal(request: CreateIncidentSubtotalRequest): Promise<CreateIncidentSubtotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIncidentSubtotalWithOptions(request, headers, runtime);
  }

  /**
   * 创建集成配置
   * 
   * @param request - CreateIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntegrationConfigResponse
   */
  async createIntegrationConfigWithOptions(request: CreateIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.monitorSourceId)) {
      body["monitorSourceId"] = request.monitorSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIntegrationConfigResponse>(await this.callApi(params, req, runtime), new CreateIntegrationConfigResponse({}));
  }

  /**
   * 创建集成配置
   * 
   * @param request - CreateIntegrationConfigRequest
   * @returns CreateIntegrationConfigResponse
   */
  async createIntegrationConfig(request: CreateIntegrationConfigRequest): Promise<CreateIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 故障升级
   * 
   * @param request - CreateProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemResponse
   */
  async createProblemWithOptions(request: CreateProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.affectServiceIds)) {
      body["affectServiceIds"] = request.affectServiceIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.discoverTime)) {
      body["discoverTime"] = request.discoverTime;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    if (!Util.isUnset(request.mainHandlerId)) {
      body["mainHandlerId"] = request.mainHandlerId;
    }

    if (!Util.isUnset(request.preliminaryReason)) {
      body["preliminaryReason"] = request.preliminaryReason;
    }

    if (!Util.isUnset(request.problemLevel)) {
      body["problemLevel"] = request.problemLevel;
    }

    if (!Util.isUnset(request.problemName)) {
      body["problemName"] = request.problemName;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    if (!Util.isUnset(request.problemStatus)) {
      body["problemStatus"] = request.problemStatus;
    }

    if (!Util.isUnset(request.progressSummary)) {
      body["progressSummary"] = request.progressSummary;
    }

    if (!Util.isUnset(request.progressSummaryRichTextId)) {
      body["progressSummaryRichTextId"] = request.progressSummaryRichTextId;
    }

    if (!Util.isUnset(request.recoveryTime)) {
      body["recoveryTime"] = request.recoveryTime;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.serviceGroupIds)) {
      body["serviceGroupIds"] = request.serviceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemResponse>(await this.callApi(params, req, runtime), new CreateProblemResponse({}));
  }

  /**
   * 故障升级
   * 
   * @param request - CreateProblemRequest
   * @returns CreateProblemResponse
   */
  async createProblem(request: CreateProblemRequest): Promise<CreateProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemWithOptions(request, headers, runtime);
  }

  /**
   * 创建影响服务
   * 
   * @param request - CreateProblemEffectionServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemEffectionServiceResponse
   */
  async createProblemEffectionServiceWithOptions(request: CreateProblemEffectionServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemEffectionServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.level)) {
      body["level"] = request.level;
    }

    if (!Util.isUnset(request.pictureUrl)) {
      body["pictureUrl"] = request.pictureUrl;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblemEffectionService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/effectionService/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemEffectionServiceResponse>(await this.callApi(params, req, runtime), new CreateProblemEffectionServiceResponse({}));
  }

  /**
   * 创建影响服务
   * 
   * @param request - CreateProblemEffectionServiceRequest
   * @returns CreateProblemEffectionServiceResponse
   */
  async createProblemEffectionService(request: CreateProblemEffectionServiceRequest): Promise<CreateProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemEffectionServiceWithOptions(request, headers, runtime);
  }

  /**
   * 改进措施新增
   * 
   * @param request - CreateProblemMeasureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemMeasureResponse
   */
  async createProblemMeasureWithOptions(request: CreateProblemMeasureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemMeasureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkStandard)) {
      body["checkStandard"] = request.checkStandard;
    }

    if (!Util.isUnset(request.checkUserId)) {
      body["checkUserId"] = request.checkUserId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.directorId)) {
      body["directorId"] = request.directorId;
    }

    if (!Util.isUnset(request.planFinishTime)) {
      body["planFinishTime"] = request.planFinishTime;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.stalkerId)) {
      body["stalkerId"] = request.stalkerId;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblemMeasure",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/improvement/measure/save`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemMeasureResponse>(await this.callApi(params, req, runtime), new CreateProblemMeasureResponse({}));
  }

  /**
   * 改进措施新增
   * 
   * @param request - CreateProblemMeasureRequest
   * @returns CreateProblemMeasureResponse
   */
  async createProblemMeasure(request: CreateProblemMeasureRequest): Promise<CreateProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemMeasureWithOptions(request, headers, runtime);
  }

  /**
   * 故障新增备注小计
   * 
   * @param request - CreateProblemSubtotalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemSubtotalResponse
   */
  async createProblemSubtotalWithOptions(request: CreateProblemSubtotalRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemSubtotalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblemSubtotal",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/save/subtotal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemSubtotalResponse>(await this.callApi(params, req, runtime), new CreateProblemSubtotalResponse({}));
  }

  /**
   * 故障新增备注小计
   * 
   * @param request - CreateProblemSubtotalRequest
   * @returns CreateProblemSubtotalResponse
   */
  async createProblemSubtotal(request: CreateProblemSubtotalRequest): Promise<CreateProblemSubtotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemSubtotalWithOptions(request, headers, runtime);
  }

  /**
   * 创建故障时间线节点
   * 
   * @param request - CreateProblemTimelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemTimelineResponse
   */
  async createProblemTimelineWithOptions(request: CreateProblemTimelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemTimelineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.keyNode)) {
      body["keyNode"] = request.keyNode;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.time)) {
      body["time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblemTimeline",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/timeline/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemTimelineResponse>(await this.callApi(params, req, runtime), new CreateProblemTimelineResponse({}));
  }

  /**
   * 创建故障时间线节点
   * 
   * @param request - CreateProblemTimelineRequest
   * @returns CreateProblemTimelineResponse
   */
  async createProblemTimeline(request: CreateProblemTimelineRequest): Promise<CreateProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemTimelineWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建故障时间线节点
   * 
   * @param request - CreateProblemTimelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProblemTimelinesResponse
   */
  async createProblemTimelinesWithOptions(request: CreateProblemTimelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProblemTimelinesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.timelineNodes)) {
      body["timelineNodes"] = request.timelineNodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProblemTimelines",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/timeline/batchCreate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProblemTimelinesResponse>(await this.callApi(params, req, runtime), new CreateProblemTimelinesResponse({}));
  }

  /**
   * 批量创建故障时间线节点
   * 
   * @param request - CreateProblemTimelinesRequest
   * @returns CreateProblemTimelinesResponse
   */
  async createProblemTimelines(request: CreateProblemTimelinesRequest): Promise<CreateProblemTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemTimelinesWithOptions(request, headers, runtime);
  }

  /**
   * 创建富文本
   * 
   * @param request - CreateRichTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRichTextResponse
   */
  async createRichTextWithOptions(request: CreateRichTextRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRichTextResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.richText)) {
      body["richText"] = request.richText;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRichText",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/rich/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRichTextResponse>(await this.callApi(params, req, runtime), new CreateRichTextResponse({}));
  }

  /**
   * 创建富文本
   * 
   * @param request - CreateRichTextRequest
   * @returns CreateRichTextResponse
   */
  async createRichText(request: CreateRichTextRequest): Promise<CreateRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRichTextWithOptions(request, headers, runtime);
  }

  /**
   * 创建流转规则
   * 
   * @param request - CreateRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteRuleResponse
   */
  async createRouteRuleWithOptions(request: CreateRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assignObjectId)) {
      body["assignObjectId"] = request.assignObjectId;
    }

    if (!Util.isUnset(request.assignObjectType)) {
      body["assignObjectType"] = request.assignObjectType;
    }

    if (!Util.isUnset(request.childRuleRelation)) {
      body["childRuleRelation"] = request.childRuleRelation;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.convergenceFields)) {
      body["convergenceFields"] = request.convergenceFields;
    }

    if (!Util.isUnset(request.convergenceType)) {
      body["convergenceType"] = request.convergenceType;
    }

    if (!Util.isUnset(request.coverageProblemLevels)) {
      body["coverageProblemLevels"] = request.coverageProblemLevels;
    }

    if (!Util.isUnset(request.effection)) {
      body["effection"] = request.effection;
    }

    if (!Util.isUnset(request.enableStatus)) {
      body["enableStatus"] = request.enableStatus;
    }

    if (!Util.isUnset(request.incidentLevel)) {
      body["incidentLevel"] = request.incidentLevel;
    }

    if (!Util.isUnset(request.matchCount)) {
      body["matchCount"] = request.matchCount;
    }

    if (!Util.isUnset(request.notifyChannels)) {
      body["notifyChannels"] = request.notifyChannels;
    }

    if (!Util.isUnset(request.problemEffectionServices)) {
      body["problemEffectionServices"] = request.problemEffectionServices;
    }

    if (!Util.isUnset(request.problemLevelGroup)) {
      body["problemLevelGroup"] = request.problemLevelGroup;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.routeChildRules)) {
      body["routeChildRules"] = request.routeChildRules;
    }

    if (!Util.isUnset(request.routeType)) {
      body["routeType"] = request.routeType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.timeWindow)) {
      body["timeWindow"] = request.timeWindow;
    }

    if (!Util.isUnset(request.timeWindowUnit)) {
      body["timeWindowUnit"] = request.timeWindowUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/save`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRouteRuleResponse>(await this.callApi(params, req, runtime), new CreateRouteRuleResponse({}));
  }

  /**
   * 创建流转规则
   * 
   * @param request - CreateRouteRuleRequest
   * @returns CreateRouteRuleResponse
   */
  async createRouteRule(request: CreateRouteRuleRequest): Promise<CreateRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      body["serviceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceGroupIdList)) {
      body["serviceGroupIdList"] = request.serviceGroupIdList;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/save`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  /**
   * 创建服务
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * 创建服务组
   * 
   * @param request - CreateServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceGroupResponse
   */
  async createServiceGroupWithOptions(request: CreateServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enableWebhook)) {
      body["enableWebhook"] = request.enableWebhook;
    }

    if (!Util.isUnset(request.monitorSourceTemplates)) {
      body["monitorSourceTemplates"] = request.monitorSourceTemplates;
    }

    if (!Util.isUnset(request.serviceGroupDescription)) {
      body["serviceGroupDescription"] = request.serviceGroupDescription;
    }

    if (!Util.isUnset(request.serviceGroupName)) {
      body["serviceGroupName"] = request.serviceGroupName;
    }

    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    if (!Util.isUnset(request.webhookLink)) {
      body["webhookLink"] = request.webhookLink;
    }

    if (!Util.isUnset(request.webhookType)) {
      body["webhookType"] = request.webhookType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/insert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceGroupResponse>(await this.callApi(params, req, runtime), new CreateServiceGroupResponse({}));
  }

  /**
   * 创建服务组
   * 
   * @param request - CreateServiceGroupRequest
   * @returns CreateServiceGroupResponse
   */
  async createServiceGroup(request: CreateServiceGroupRequest): Promise<CreateServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 新增服务组排班
   * 
   * @param request - CreateServiceGroupSchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceGroupSchedulingResponse
   */
  async createServiceGroupSchedulingWithOptions(request: CreateServiceGroupSchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceGroupSchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.fastScheduling)) {
      body["fastScheduling"] = request.fastScheduling;
    }

    if (!Util.isUnset(request.fineScheduling)) {
      body["fineScheduling"] = request.fineScheduling;
    }

    if (!Util.isUnset(request.schedulingWay)) {
      body["schedulingWay"] = request.schedulingWay;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceGroupScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/save`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceGroupSchedulingResponse>(await this.callApi(params, req, runtime), new CreateServiceGroupSchedulingResponse({}));
  }

  /**
   * 新增服务组排班
   * 
   * @param request - CreateServiceGroupSchedulingRequest
   * @returns CreateServiceGroupSchedulingResponse
   */
  async createServiceGroupScheduling(request: CreateServiceGroupSchedulingRequest): Promise<CreateServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 创建通知订阅
   * 
   * @param request - CreateSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscriptionResponse
   */
  async createSubscriptionWithOptions(request: CreateSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.expiredType)) {
      body["expiredType"] = request.expiredType;
    }

    if (!Util.isUnset(request.notifyObjectList)) {
      body["notifyObjectList"] = request.notifyObjectList;
    }

    if (!Util.isUnset(request.notifyObjectType)) {
      body["notifyObjectType"] = request.notifyObjectType;
    }

    if (!Util.isUnset(request.notifyStrategyList)) {
      body["notifyStrategyList"] = request.notifyStrategyList;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.scopeObjectList)) {
      body["scopeObjectList"] = request.scopeObjectList;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subscriptionTitle)) {
      body["subscriptionTitle"] = request.subscriptionTitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSubscriptionResponse>(await this.callApi(params, req, runtime), new CreateSubscriptionResponse({}));
  }

  /**
   * 创建通知订阅
   * 
   * @param request - CreateSubscriptionRequest
   * @returns CreateSubscriptionResponse
   */
  async createSubscription(request: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 云钉协同创建移动应用
   * 
   * @param request - CreateTenantApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantApplicationResponse
   */
  async createTenantApplicationWithOptions(request: CreateTenantApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTenantApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantApplication",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/mobileApp/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantApplicationResponse>(await this.callApi(params, req, runtime), new CreateTenantApplicationResponse({}));
  }

  /**
   * 云钉协同创建移动应用
   * 
   * @param request - CreateTenantApplicationRequest
   * @returns CreateTenantApplicationResponse
   */
  async createTenantApplication(request: CreateTenantApplicationRequest): Promise<CreateTenantApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTenantApplicationWithOptions(request, headers, runtime);
  }

  /**
   * 创建用户
   * 
   * @param request - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.ramId)) {
      body["ramId"] = request.ramId;
    }

    if (!Util.isUnset(request.roleIdList)) {
      body["roleIdList"] = request.roleIdList;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * 创建用户
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

  /**
   * 删除升级计划
   * 
   * @param request - DeleteEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEscalationPlanResponse
   */
  async deleteEscalationPlanWithOptions(request: DeleteEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEscalationPlanResponse>(await this.callApi(params, req, runtime), new DeleteEscalationPlanResponse({}));
  }

  /**
   * 删除升级计划
   * 
   * @param request - DeleteEscalationPlanRequest
   * @returns DeleteEscalationPlanResponse
   */
  async deleteEscalationPlan(request: DeleteEscalationPlanRequest): Promise<DeleteEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 事件删除
   * 
   * @param request - DeleteIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIncidentResponse
   */
  async deleteIncidentWithOptions(request: DeleteIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIncidentResponse>(await this.callApi(params, req, runtime), new DeleteIncidentResponse({}));
  }

  /**
   * 事件删除
   * 
   * @param request - DeleteIncidentRequest
   * @returns DeleteIncidentResponse
   */
  async deleteIncident(request: DeleteIncidentRequest): Promise<DeleteIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 删除集成配置
   * 
   * @param request - DeleteIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntegrationConfigResponse
   */
  async deleteIntegrationConfigWithOptions(request: DeleteIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIntegrationConfigResponse>(await this.callApi(params, req, runtime), new DeleteIntegrationConfigResponse({}));
  }

  /**
   * 删除集成配置
   * 
   * @param request - DeleteIntegrationConfigRequest
   * @returns DeleteIntegrationConfigResponse
   */
  async deleteIntegrationConfig(request: DeleteIntegrationConfigRequest): Promise<DeleteIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 故障刪除
   * 
   * @param request - DeleteProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProblemResponse
   */
  async deleteProblemWithOptions(request: DeleteProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProblemResponse>(await this.callApi(params, req, runtime), new DeleteProblemResponse({}));
  }

  /**
   * 故障刪除
   * 
   * @param request - DeleteProblemRequest
   * @returns DeleteProblemResponse
   */
  async deleteProblem(request: DeleteProblemRequest): Promise<DeleteProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemWithOptions(request, headers, runtime);
  }

  /**
   * 删除故障影响服务
   * 
   * @param request - DeleteProblemEffectionServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProblemEffectionServiceResponse
   */
  async deleteProblemEffectionServiceWithOptions(request: DeleteProblemEffectionServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProblemEffectionServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.effectionServiceId)) {
      body["effectionServiceId"] = request.effectionServiceId;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProblemEffectionService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/effectionService/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProblemEffectionServiceResponse>(await this.callApi(params, req, runtime), new DeleteProblemEffectionServiceResponse({}));
  }

  /**
   * 删除故障影响服务
   * 
   * @param request - DeleteProblemEffectionServiceRequest
   * @returns DeleteProblemEffectionServiceResponse
   */
  async deleteProblemEffectionService(request: DeleteProblemEffectionServiceRequest): Promise<DeleteProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemEffectionServiceWithOptions(request, headers, runtime);
  }

  /**
   * 改进措施删除
   * 
   * @param request - DeleteProblemMeasureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProblemMeasureResponse
   */
  async deleteProblemMeasureWithOptions(request: DeleteProblemMeasureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProblemMeasureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.measureId)) {
      body["measureId"] = request.measureId;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProblemMeasure",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/improvement/measure/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProblemMeasureResponse>(await this.callApi(params, req, runtime), new DeleteProblemMeasureResponse({}));
  }

  /**
   * 改进措施删除
   * 
   * @param request - DeleteProblemMeasureRequest
   * @returns DeleteProblemMeasureResponse
   */
  async deleteProblemMeasure(request: DeleteProblemMeasureRequest): Promise<DeleteProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemMeasureWithOptions(request, headers, runtime);
  }

  /**
   * 删除影响服务
   * 
   * @param request - DeleteProblemTimelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProblemTimelineResponse
   */
  async deleteProblemTimelineWithOptions(request: DeleteProblemTimelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProblemTimelineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemTimelineId)) {
      body["problemTimelineId"] = request.problemTimelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProblemTimeline",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/timeline/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProblemTimelineResponse>(await this.callApi(params, req, runtime), new DeleteProblemTimelineResponse({}));
  }

  /**
   * 删除影响服务
   * 
   * @param request - DeleteProblemTimelineRequest
   * @returns DeleteProblemTimelineResponse
   */
  async deleteProblemTimeline(request: DeleteProblemTimelineRequest): Promise<DeleteProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemTimelineWithOptions(request, headers, runtime);
  }

  /**
   * 删除流转规则
   * 
   * @param request - DeleteRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteRuleResponse
   */
  async deleteRouteRuleWithOptions(request: DeleteRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRouteRuleResponse({}));
  }

  /**
   * 删除流转规则
   * 
   * @param request - DeleteRouteRuleRequest
   * @returns DeleteRouteRuleResponse
   */
  async deleteRouteRule(request: DeleteRouteRuleRequest): Promise<DeleteRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 删除服务
   * 
   * @param request - DeleteServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(request: DeleteServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  /**
   * 删除服务
   * 
   * @param request - DeleteServiceRequest
   * @returns DeleteServiceResponse
   */
  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(request, headers, runtime);
  }

  /**
   * 删除服务组
   * 
   * @param request - DeleteServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceGroupResponse
   */
  async deleteServiceGroupWithOptions(request: DeleteServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceGroupResponse>(await this.callApi(params, req, runtime), new DeleteServiceGroupResponse({}));
  }

  /**
   * 删除服务组
   * 
   * @param request - DeleteServiceGroupRequest
   * @returns DeleteServiceGroupResponse
   */
  async deleteServiceGroup(request: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 删除排班
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceGroupSchedulingResponse
   */
  async deleteServiceGroupSchedulingWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceGroupSchedulingResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceGroupScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceGroupSchedulingResponse>(await this.callApi(params, req, runtime), new DeleteServiceGroupSchedulingResponse({}));
  }

  /**
   * 删除排班
   * @returns DeleteServiceGroupSchedulingResponse
   */
  async deleteServiceGroupScheduling(): Promise<DeleteServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupSchedulingWithOptions(headers, runtime);
  }

  /**
   * 删除服务组成员
   * 
   * @param request - DeleteServiceGroupUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceGroupUserResponse
   */
  async deleteServiceGroupUserWithOptions(request: DeleteServiceGroupUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceGroupUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.newUserId)) {
      body["newUserId"] = request.newUserId;
    }

    if (!Util.isUnset(request.oldUserId)) {
      body["oldUserId"] = request.oldUserId;
    }

    if (!Util.isUnset(request.removeUser)) {
      body["removeUser"] = request.removeUser;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceGroupUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/deleteServiceGroupUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceGroupUserResponse>(await this.callApi(params, req, runtime), new DeleteServiceGroupUserResponse({}));
  }

  /**
   * 删除服务组成员
   * 
   * @param request - DeleteServiceGroupUserRequest
   * @returns DeleteServiceGroupUserResponse
   */
  async deleteServiceGroupUser(request: DeleteServiceGroupUserRequest): Promise<DeleteServiceGroupUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupUserWithOptions(request, headers, runtime);
  }

  /**
   * 删除通知订阅
   * 
   * @param request - DeleteSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubscriptionResponse
   */
  async deleteSubscriptionWithOptions(request: DeleteSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subscriptionId)) {
      body["subscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubscriptionResponse>(await this.callApi(params, req, runtime), new DeleteSubscriptionResponse({}));
  }

  /**
   * 删除通知订阅
   * 
   * @param request - DeleteSubscriptionRequest
   * @returns DeleteSubscriptionResponse
   */
  async deleteSubscription(request: DeleteSubscriptionRequest): Promise<DeleteSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 删除用户
   * 
   * @param request - DeleteUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * 删除用户
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(request, headers, runtime);
  }

  /**
   * 转交事件
   * 
   * @param request - DeliverIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeliverIncidentResponse
   */
  async deliverIncidentWithOptions(request: DeliverIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeliverIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assignUserId)) {
      body["assignUserId"] = request.assignUserId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeliverIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/deliver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeliverIncidentResponse>(await this.callApi(params, req, runtime), new DeliverIncidentResponse({}));
  }

  /**
   * 转交事件
   * 
   * @param request - DeliverIncidentRequest
   * @returns DeliverIncidentResponse
   */
  async deliverIncident(request: DeliverIncidentRequest): Promise<DeliverIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deliverIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 禁用升级计划
   * 
   * @param request - DisableEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableEscalationPlanResponse
   */
  async disableEscalationPlanWithOptions(request: DisableEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableEscalationPlanResponse>(await this.callApi(params, req, runtime), new DisableEscalationPlanResponse({}));
  }

  /**
   * 禁用升级计划
   * 
   * @param request - DisableEscalationPlanRequest
   * @returns DisableEscalationPlanResponse
   */
  async disableEscalationPlan(request: DisableEscalationPlanRequest): Promise<DisableEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 禁用集成配置
   * 
   * @param request - DisableIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIntegrationConfigResponse
   */
  async disableIntegrationConfigWithOptions(request: DisableIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableIntegrationConfigResponse>(await this.callApi(params, req, runtime), new DisableIntegrationConfigResponse({}));
  }

  /**
   * 禁用集成配置
   * 
   * @param request - DisableIntegrationConfigRequest
   * @returns DisableIntegrationConfigResponse
   */
  async disableIntegrationConfig(request: DisableIntegrationConfigRequest): Promise<DisableIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 禁用规则
   * 
   * @param request - DisableRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableRouteRuleResponse
   */
  async disableRouteRuleWithOptions(request: DisableRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableRouteRuleResponse>(await this.callApi(params, req, runtime), new DisableRouteRuleResponse({}));
  }

  /**
   * 禁用规则
   * 
   * @param request - DisableRouteRuleRequest
   * @returns DisableRouteRuleResponse
   */
  async disableRouteRule(request: DisableRouteRuleRequest): Promise<DisableRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 禁用服务组的webhook
   * 
   * @param request - DisableServiceGroupWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableServiceGroupWebhookResponse
   */
  async disableServiceGroupWebhookWithOptions(request: DisableServiceGroupWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableServiceGroupWebhookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableServiceGroupWebhook",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/disableWebhook`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableServiceGroupWebhookResponse>(await this.callApi(params, req, runtime), new DisableServiceGroupWebhookResponse({}));
  }

  /**
   * 禁用服务组的webhook
   * 
   * @param request - DisableServiceGroupWebhookRequest
   * @returns DisableServiceGroupWebhookResponse
   */
  async disableServiceGroupWebhook(request: DisableServiceGroupWebhookRequest): Promise<DisableServiceGroupWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableServiceGroupWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 禁用集成配置
   * 
   * @param request - DisableSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSubscriptionResponse
   */
  async disableSubscriptionWithOptions(request: DisableSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subscriptionId)) {
      body["subscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/doDisable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableSubscriptionResponse>(await this.callApi(params, req, runtime), new DisableSubscriptionResponse({}));
  }

  /**
   * 禁用集成配置
   * 
   * @param request - DisableSubscriptionRequest
   * @returns DisableSubscriptionResponse
   */
  async disableSubscription(request: DisableSubscriptionRequest): Promise<DisableSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 启用升级计划
   * 
   * @param request - EnableEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableEscalationPlanResponse
   */
  async enableEscalationPlanWithOptions(request: EnableEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableEscalationPlanResponse>(await this.callApi(params, req, runtime), new EnableEscalationPlanResponse({}));
  }

  /**
   * 启用升级计划
   * 
   * @param request - EnableEscalationPlanRequest
   * @returns EnableEscalationPlanResponse
   */
  async enableEscalationPlan(request: EnableEscalationPlanRequest): Promise<EnableEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 启用集成配置
   * 
   * @param request - EnableIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIntegrationConfigResponse
   */
  async enableIntegrationConfigWithOptions(request: EnableIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableIntegrationConfigResponse>(await this.callApi(params, req, runtime), new EnableIntegrationConfigResponse({}));
  }

  /**
   * 启用集成配置
   * 
   * @param request - EnableIntegrationConfigRequest
   * @returns EnableIntegrationConfigResponse
   */
  async enableIntegrationConfig(request: EnableIntegrationConfigRequest): Promise<EnableIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 启用规则
   * 
   * @param request - EnableRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRouteRuleResponse
   */
  async enableRouteRuleWithOptions(request: EnableRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableRouteRuleResponse>(await this.callApi(params, req, runtime), new EnableRouteRuleResponse({}));
  }

  /**
   * 启用规则
   * 
   * @param request - EnableRouteRuleRequest
   * @returns EnableRouteRuleResponse
   */
  async enableRouteRule(request: EnableRouteRuleRequest): Promise<EnableRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 启用服务组的webhook
   * 
   * @param request - EnableServiceGroupWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceGroupWebhookResponse
   */
  async enableServiceGroupWebhookWithOptions(request: EnableServiceGroupWebhookRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableServiceGroupWebhookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableServiceGroupWebhook",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/enableWebhook`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableServiceGroupWebhookResponse>(await this.callApi(params, req, runtime), new EnableServiceGroupWebhookResponse({}));
  }

  /**
   * 启用服务组的webhook
   * 
   * @param request - EnableServiceGroupWebhookRequest
   * @returns EnableServiceGroupWebhookResponse
   */
  async enableServiceGroupWebhook(request: EnableServiceGroupWebhookRequest): Promise<EnableServiceGroupWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableServiceGroupWebhookWithOptions(request, headers, runtime);
  }

  /**
   * 启用通知订阅
   * 
   * @param request - EnableSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSubscriptionResponse
   */
  async enableSubscriptionWithOptions(request: EnableSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.subscriptionId)) {
      body["subscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableSubscriptionResponse>(await this.callApi(params, req, runtime), new EnableSubscriptionResponse({}));
  }

  /**
   * 启用通知订阅
   * 
   * @param request - EnableSubscriptionRequest
   * @returns EnableSubscriptionResponse
   */
  async enableSubscription(request: EnableSubscriptionRequest): Promise<EnableSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 完结事件
   * 
   * @param request - FinishIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishIncidentResponse
   */
  async finishIncidentWithOptions(request: FinishIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FinishIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentFinishReason)) {
      body["incidentFinishReason"] = request.incidentFinishReason;
    }

    if (!Util.isUnset(request.incidentFinishReasonDescription)) {
      body["incidentFinishReasonDescription"] = request.incidentFinishReasonDescription;
    }

    if (!Util.isUnset(request.incidentFinishSolution)) {
      body["incidentFinishSolution"] = request.incidentFinishSolution;
    }

    if (!Util.isUnset(request.incidentFinishSolutionDescription)) {
      body["incidentFinishSolutionDescription"] = request.incidentFinishSolutionDescription;
    }

    if (!Util.isUnset(request.incidentIds)) {
      body["incidentIds"] = request.incidentIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FinishIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/finish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FinishIncidentResponse>(await this.callApi(params, req, runtime), new FinishIncidentResponse({}));
  }

  /**
   * 完结事件
   * 
   * @param request - FinishIncidentRequest
   * @returns FinishIncidentResponse
   */
  async finishIncident(request: FinishIncidentRequest): Promise<FinishIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 故障完结
   * 
   * @param request - FinishProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishProblemResponse
   */
  async finishProblemWithOptions(request: FinishProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FinishProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FinishProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/finish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FinishProblemResponse>(await this.callApi(params, req, runtime), new FinishProblemResponse({}));
  }

  /**
   * 故障完结
   * 
   * @param request - FinishProblemRequest
   * @returns FinishProblemResponse
   */
  async finishProblem(request: FinishProblemRequest): Promise<FinishProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishProblemWithOptions(request, headers, runtime);
  }

  /**
   * 图片连接获取
   * 
   * @param request - GeneratePictureLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeneratePictureLinkResponse
   */
  async generatePictureLinkWithOptions(request: GeneratePictureLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GeneratePictureLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keys)) {
      body["keys"] = request.keys;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GeneratePictureLink",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/rich/oss/getPictureLink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GeneratePictureLinkResponse>(await this.callApi(params, req, runtime), new GeneratePictureLinkResponse({}));
  }

  /**
   * 图片连接获取
   * 
   * @param request - GeneratePictureLinkRequest
   * @returns GeneratePictureLinkResponse
   */
  async generatePictureLink(request: GeneratePictureLinkRequest): Promise<GeneratePictureLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generatePictureLinkWithOptions(request, headers, runtime);
  }

  /**
   * 图片批量上传
   * 
   * @param request - GeneratePictureUploadSignRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeneratePictureUploadSignResponse
   */
  async generatePictureUploadSignWithOptions(request: GeneratePictureUploadSignRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GeneratePictureUploadSignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GeneratePictureUploadSign",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/rich/oss/generatePostPolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GeneratePictureUploadSignResponse>(await this.callApi(params, req, runtime), new GeneratePictureUploadSignResponse({}));
  }

  /**
   * 图片批量上传
   * 
   * @param request - GeneratePictureUploadSignRequest
   * @returns GeneratePictureUploadSignResponse
   */
  async generatePictureUploadSign(request: GeneratePictureUploadSignRequest): Promise<GeneratePictureUploadSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generatePictureUploadSignWithOptions(request, headers, runtime);
  }

  /**
   * 获取图片下载url
   * 
   * @param request - GenerateProblemPictureLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateProblemPictureLinkResponse
   */
  async generateProblemPictureLinkWithOptions(request: GenerateProblemPictureLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateProblemPictureLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keys)) {
      body["keys"] = request.keys;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateProblemPictureLink",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/oss/getPresignedLink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateProblemPictureLinkResponse>(await this.callApi(params, req, runtime), new GenerateProblemPictureLinkResponse({}));
  }

  /**
   * 获取图片下载url
   * 
   * @param request - GenerateProblemPictureLinkRequest
   * @returns GenerateProblemPictureLinkResponse
   */
  async generateProblemPictureLink(request: GenerateProblemPictureLinkRequest): Promise<GenerateProblemPictureLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateProblemPictureLinkWithOptions(request, headers, runtime);
  }

  /**
   * 图片上传验签
   * 
   * @param request - GenerateProblemPictureUploadSignRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateProblemPictureUploadSignResponse
   */
  async generateProblemPictureUploadSignWithOptions(request: GenerateProblemPictureUploadSignRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateProblemPictureUploadSignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileSize)) {
      body["fileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.fileType)) {
      body["fileType"] = request.fileType;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateProblemPictureUploadSign",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/oss/generatePostPolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateProblemPictureUploadSignResponse>(await this.callApi(params, req, runtime), new GenerateProblemPictureUploadSignResponse({}));
  }

  /**
   * 图片上传验签
   * 
   * @param request - GenerateProblemPictureUploadSignRequest
   * @returns GenerateProblemPictureUploadSignResponse
   */
  async generateProblemPictureUploadSign(request: GenerateProblemPictureUploadSignRequest): Promise<GenerateProblemPictureUploadSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateProblemPictureUploadSignWithOptions(request, headers, runtime);
  }

  /**
   * 升级计划详情
   * 
   * @param request - GetEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEscalationPlanResponse
   */
  async getEscalationPlanWithOptions(request: GetEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEscalationPlanResponse>(await this.callApi(params, req, runtime), new GetEscalationPlanResponse({}));
  }

  /**
   * 升级计划详情
   * 
   * @param request - GetEscalationPlanRequest
   * @returns GetEscalationPlanResponse
   */
  async getEscalationPlan(request: GetEscalationPlanRequest): Promise<GetEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 查询最近一次告警
   * 
   * @param request - GetEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventResponse
   */
  async getEventWithOptions(request: GetEventRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.monitorSourceId)) {
      body["monitorSourceId"] = request.monitorSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEvent",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/events/getLastTimeEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEventResponse>(await this.callApi(params, req, runtime), new GetEventResponse({}));
  }

  /**
   * 查询最近一次告警
   * 
   * @param request - GetEventRequest
   * @returns GetEventResponse
   */
  async getEvent(request: GetEventRequest): Promise<GetEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEventWithOptions(request, headers, runtime);
  }

  /**
   * 查询首页引导信息
   * 
   * @param request - GetHomePageGuidanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHomePageGuidanceResponse
   */
  async getHomePageGuidanceWithOptions(request: GetHomePageGuidanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHomePageGuidanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHomePageGuidance",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/guidance/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHomePageGuidanceResponse>(await this.callApi(params, req, runtime), new GetHomePageGuidanceResponse({}));
  }

  /**
   * 查询首页引导信息
   * 
   * @param request - GetHomePageGuidanceRequest
   * @returns GetHomePageGuidanceResponse
   */
  async getHomePageGuidance(request: GetHomePageGuidanceRequest): Promise<GetHomePageGuidanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHomePageGuidanceWithOptions(request, headers, runtime);
  }

  /**
   * 事件详情
   * 
   * @param request - GetIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncidentResponse
   */
  async getIncidentWithOptions(request: GetIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIncidentResponse>(await this.callApi(params, req, runtime), new GetIncidentResponse({}));
  }

  /**
   * 事件详情
   * 
   * @param request - GetIncidentRequest
   * @returns GetIncidentResponse
   */
  async getIncident(request: GetIncidentRequest): Promise<GetIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 根据事件ID批量查询事件详情
   * 
   * @param request - GetIncidentListByIdListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncidentListByIdListResponse
   */
  async getIncidentListByIdListWithOptions(request: GetIncidentListByIdListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIncidentListByIdListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentIdList)) {
      body["incidentIdList"] = request.incidentIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIncidentListByIdList",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/getIncidentListByIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIncidentListByIdListResponse>(await this.callApi(params, req, runtime), new GetIncidentListByIdListResponse({}));
  }

  /**
   * 根据事件ID批量查询事件详情
   * 
   * @param request - GetIncidentListByIdListRequest
   * @returns GetIncidentListByIdListResponse
   */
  async getIncidentListByIdList(request: GetIncidentListByIdListRequest): Promise<GetIncidentListByIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentListByIdListWithOptions(request, headers, runtime);
  }

  /**
   * 事件统计
   * 
   * @param request - GetIncidentStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncidentStatisticsResponse
   */
  async getIncidentStatisticsWithOptions(request: GetIncidentStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIncidentStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIncidentStatistics",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/count`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIncidentStatisticsResponse>(await this.callApi(params, req, runtime), new GetIncidentStatisticsResponse({}));
  }

  /**
   * 事件统计
   * 
   * @param request - GetIncidentStatisticsRequest
   * @returns GetIncidentStatisticsResponse
   */
  async getIncidentStatistics(request: GetIncidentStatisticsRequest): Promise<GetIncidentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * 查询事件对应的小计数量
   * 
   * @param request - GetIncidentSubtotalCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncidentSubtotalCountResponse
   */
  async getIncidentSubtotalCountWithOptions(request: GetIncidentSubtotalCountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIncidentSubtotalCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentIds)) {
      body["incidentIds"] = request.incidentIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIncidentSubtotalCount",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/subtotal/count`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIncidentSubtotalCountResponse>(await this.callApi(params, req, runtime), new GetIncidentSubtotalCountResponse({}));
  }

  /**
   * 查询事件对应的小计数量
   * 
   * @param request - GetIncidentSubtotalCountRequest
   * @returns GetIncidentSubtotalCountResponse
   */
  async getIncidentSubtotalCount(request: GetIncidentSubtotalCountRequest): Promise<GetIncidentSubtotalCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentSubtotalCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取集成配置详情
   * 
   * @param request - GetIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationConfigResponse
   */
  async getIntegrationConfigWithOptions(request: GetIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIntegrationConfigResponse>(await this.callApi(params, req, runtime), new GetIntegrationConfigResponse({}));
  }

  /**
   * 获取集成配置详情
   * 
   * @param request - GetIntegrationConfigRequest
   * @returns GetIntegrationConfigResponse
   */
  async getIntegrationConfig(request: GetIntegrationConfigRequest): Promise<GetIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 查询故障详情
   * 
   * @param request - GetProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemResponse
   */
  async getProblemWithOptions(request: GetProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProblemResponse>(await this.callApi(params, req, runtime), new GetProblemResponse({}));
  }

  /**
   * 查询故障详情
   * 
   * @param request - GetProblemRequest
   * @returns GetProblemResponse
   */
  async getProblem(request: GetProblemRequest): Promise<GetProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemWithOptions(request, headers, runtime);
  }

  /**
   * 查询故障影响服务
   * 
   * @param request - GetProblemEffectionServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemEffectionServiceResponse
   */
  async getProblemEffectionServiceWithOptions(request: GetProblemEffectionServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProblemEffectionServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.effectionServiceId)) {
      body["effectionServiceId"] = request.effectionServiceId;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProblemEffectionService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/effectionService/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProblemEffectionServiceResponse>(await this.callApi(params, req, runtime), new GetProblemEffectionServiceResponse({}));
  }

  /**
   * 查询故障影响服务
   * 
   * @param request - GetProblemEffectionServiceRequest
   * @returns GetProblemEffectionServiceResponse
   */
  async getProblemEffectionService(request: GetProblemEffectionServiceRequest): Promise<GetProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemEffectionServiceWithOptions(request, headers, runtime);
  }

  /**
   * 改进分析详情
   * 
   * @param request - GetProblemImprovementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemImprovementResponse
   */
  async getProblemImprovementWithOptions(request: GetProblemImprovementRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProblemImprovementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProblemImprovement",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/improvement/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProblemImprovementResponse>(await this.callApi(params, req, runtime), new GetProblemImprovementResponse({}));
  }

  /**
   * 改进分析详情
   * 
   * @param request - GetProblemImprovementRequest
   * @returns GetProblemImprovementResponse
   */
  async getProblemImprovement(request: GetProblemImprovementRequest): Promise<GetProblemImprovementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemImprovementWithOptions(request, headers, runtime);
  }

  /**
   * 通告预览
   * 
   * @param request - GetProblemPreviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemPreviewResponse
   */
  async getProblemPreviewWithOptions(request: GetProblemPreviewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProblemPreviewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.effectServiceIds)) {
      body["effectServiceIds"] = request.effectServiceIds;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemLevel)) {
      body["problemLevel"] = request.problemLevel;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.serviceGroupIds)) {
      body["serviceGroupIds"] = request.serviceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProblemPreview",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/preview`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProblemPreviewResponse>(await this.callApi(params, req, runtime), new GetProblemPreviewResponse({}));
  }

  /**
   * 通告预览
   * 
   * @param request - GetProblemPreviewRequest
   * @returns GetProblemPreviewResponse
   */
  async getProblemPreview(request: GetProblemPreviewRequest): Promise<GetProblemPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemPreviewWithOptions(request, headers, runtime);
  }

  /**
   * 概览数据统计
   * 
   * @param request - GetResourceStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceStatisticsResponse
   */
  async getResourceStatisticsWithOptions(request: GetResourceStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceStatistics",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/config/resource/count`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceStatisticsResponse>(await this.callApi(params, req, runtime), new GetResourceStatisticsResponse({}));
  }

  /**
   * 概览数据统计
   * 
   * @param request - GetResourceStatisticsRequest
   * @returns GetResourceStatisticsResponse
   */
  async getResourceStatistics(request: GetResourceStatisticsRequest): Promise<GetResourceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * 查询富文本
   * 
   * @param request - GetRichTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRichTextResponse
   */
  async getRichTextWithOptions(request: GetRichTextRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRichTextResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.richTextId)) {
      body["richTextId"] = request.richTextId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRichText",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/rich/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRichTextResponse>(await this.callApi(params, req, runtime), new GetRichTextResponse({}));
  }

  /**
   * 查询富文本
   * 
   * @param request - GetRichTextRequest
   * @returns GetRichTextResponse
   */
  async getRichText(request: GetRichTextRequest): Promise<GetRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRichTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询流转规则详情
   * 
   * @param request - GetRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRouteRuleResponse
   */
  async getRouteRuleWithOptions(request: GetRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRouteRuleResponse>(await this.callApi(params, req, runtime), new GetRouteRuleResponse({}));
  }

  /**
   * 查询流转规则详情
   * 
   * @param request - GetRouteRuleRequest
   * @returns GetRouteRuleResponse
   */
  async getRouteRule(request: GetRouteRuleRequest): Promise<GetRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 服务详情
   * 
   * @param request - GetServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: GetServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  /**
   * 服务详情
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务组详情
   * 
   * @param request - GetServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceGroupResponse
   */
  async getServiceGroupWithOptions(request: GetServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceGroupResponse>(await this.callApi(params, req, runtime), new GetServiceGroupResponse({}));
  }

  /**
   * 查询服务组详情
   * 
   * @param request - GetServiceGroupRequest
   * @returns GetServiceGroupResponse
   */
  async getServiceGroup(request: GetServiceGroupRequest): Promise<GetServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户某个服务组的排班
   * 
   * @param request - GetServiceGroupPersonSchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceGroupPersonSchedulingResponse
   */
  async getServiceGroupPersonSchedulingWithOptions(request: GetServiceGroupPersonSchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceGroupPersonSchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceGroupPersonScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/user/getScheduling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceGroupPersonSchedulingResponse>(await this.callApi(params, req, runtime), new GetServiceGroupPersonSchedulingResponse({}));
  }

  /**
   * 查询用户某个服务组的排班
   * 
   * @param request - GetServiceGroupPersonSchedulingRequest
   * @returns GetServiceGroupPersonSchedulingResponse
   */
  async getServiceGroupPersonScheduling(request: GetServiceGroupPersonSchedulingRequest): Promise<GetServiceGroupPersonSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupPersonSchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务组排班详情
   * 
   * @param request - GetServiceGroupSchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceGroupSchedulingResponse
   */
  async getServiceGroupSchedulingWithOptions(request: GetServiceGroupSchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceGroupSchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceGroupScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceGroupSchedulingResponse>(await this.callApi(params, req, runtime), new GetServiceGroupSchedulingResponse({}));
  }

  /**
   * 查询服务组排班详情
   * 
   * @param request - GetServiceGroupSchedulingRequest
   * @returns GetServiceGroupSchedulingResponse
   */
  async getServiceGroupScheduling(request: GetServiceGroupSchedulingRequest): Promise<GetServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 预览服务组排班
   * 
   * @param request - GetServiceGroupSchedulingPreviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceGroupSchedulingPreviewResponse
   */
  async getServiceGroupSchedulingPreviewWithOptions(request: GetServiceGroupSchedulingPreviewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceGroupSchedulingPreviewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fastScheduling)) {
      body["fastScheduling"] = request.fastScheduling;
    }

    if (!Util.isUnset(request.fineScheduling)) {
      body["fineScheduling"] = request.fineScheduling;
    }

    if (!Util.isUnset(request.schedulingWay)) {
      body["schedulingWay"] = request.schedulingWay;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceGroupSchedulingPreview",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/preview`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceGroupSchedulingPreviewResponse>(await this.callApi(params, req, runtime), new GetServiceGroupSchedulingPreviewResponse({}));
  }

  /**
   * 预览服务组排班
   * 
   * @param request - GetServiceGroupSchedulingPreviewRequest
   * @returns GetServiceGroupSchedulingPreviewResponse
   */
  async getServiceGroupSchedulingPreview(request: GetServiceGroupSchedulingPreviewRequest): Promise<GetServiceGroupSchedulingPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSchedulingPreviewWithOptions(request, headers, runtime);
  }

  /**
   * 查询指定人员的服务组排班
   * 
   * @param request - GetServiceGroupSpecialPersonSchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceGroupSpecialPersonSchedulingResponse
   */
  async getServiceGroupSpecialPersonSchedulingWithOptions(request: GetServiceGroupSpecialPersonSchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceGroupSpecialPersonSchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceGroupSpecialPersonScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/getUserScheduling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceGroupSpecialPersonSchedulingResponse>(await this.callApi(params, req, runtime), new GetServiceGroupSpecialPersonSchedulingResponse({}));
  }

  /**
   * 查询指定人员的服务组排班
   * 
   * @param request - GetServiceGroupSpecialPersonSchedulingRequest
   * @returns GetServiceGroupSpecialPersonSchedulingResponse
   */
  async getServiceGroupSpecialPersonScheduling(request: GetServiceGroupSpecialPersonSchedulingRequest): Promise<GetServiceGroupSpecialPersonSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSpecialPersonSchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 相似事件统计信息
   * 
   * @param request - GetSimilarIncidentStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSimilarIncidentStatisticsResponse
   */
  async getSimilarIncidentStatisticsWithOptions(request: GetSimilarIncidentStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSimilarIncidentStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createTime)) {
      body["createTime"] = request.createTime;
    }

    if (!Util.isUnset(request.events)) {
      body["events"] = request.events;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    if (!Util.isUnset(request.incidentTitle)) {
      body["incidentTitle"] = request.incidentTitle;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSimilarIncidentStatistics",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/similarIncident/statistics`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSimilarIncidentStatisticsResponse>(await this.callApi(params, req, runtime), new GetSimilarIncidentStatisticsResponse({}));
  }

  /**
   * 相似事件统计信息
   * 
   * @param request - GetSimilarIncidentStatisticsRequest
   * @returns GetSimilarIncidentStatisticsResponse
   */
  async getSimilarIncidentStatistics(request: GetSimilarIncidentStatisticsRequest): Promise<GetSimilarIncidentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarIncidentStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * 通知订阅详情
   * 
   * @param request - GetSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionResponse
   */
  async getSubscriptionWithOptions(request: GetSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.notFilterScopeObjectDeleted)) {
      body["notFilterScopeObjectDeleted"] = request.notFilterScopeObjectDeleted;
    }

    if (!Util.isUnset(request.subscriptionId)) {
      body["subscriptionId"] = request.subscriptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSubscriptionResponse>(await this.callApi(params, req, runtime), new GetSubscriptionResponse({}));
  }

  /**
   * 通知订阅详情
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: GetSubscriptionRequest): Promise<GetSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 云钉协同移动应用详情
   * 
   * @param request - GetTenantApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTenantApplicationResponse
   */
  async getTenantApplicationWithOptions(request: GetTenantApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTenantApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTenantApplication",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/mobileApp/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTenantApplicationResponse>(await this.callApi(params, req, runtime), new GetTenantApplicationResponse({}));
  }

  /**
   * 云钉协同移动应用详情
   * 
   * @param request - GetTenantApplicationRequest
   * @returns GetTenantApplicationResponse
   */
  async getTenantApplication(request: GetTenantApplicationRequest): Promise<GetTenantApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantApplicationWithOptions(request, headers, runtime);
  }

  /**
   * 查询租户开通运维事件中心的状态
   * 
   * @param request - GetTenantStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTenantStatusResponse
   */
  async getTenantStatusWithOptions(request: GetTenantStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTenantStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantRamId)) {
      body["tenantRamId"] = request.tenantRamId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTenantStatus",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/tenant/getTenantStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTenantStatusResponse>(await this.callApi(params, req, runtime), new GetTenantStatusResponse({}));
  }

  /**
   * 查询租户开通运维事件中心的状态
   * 
   * @param request - GetTenantStatusRequest
   * @returns GetTenantStatusResponse
   */
  async getTenantStatus(request: GetTenantStatusRequest): Promise<GetTenantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户详情
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/getUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * 获取用户详情
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户新手引导状态
   * 
   * @param request - GetUserGuideStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGuideStatusResponse
   */
  async getUserGuideStatusWithOptions(request: GetUserGuideStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserGuideStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserGuideStatus",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/guide/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserGuideStatusResponse>(await this.callApi(params, req, runtime), new GetUserGuideStatusResponse({}));
  }

  /**
   * 查询用户新手引导状态
   * 
   * @param request - GetUserGuideStatusRequest
   * @returns GetUserGuideStatusResponse
   */
  async getUserGuideStatus(request: GetUserGuideStatusRequest): Promise<GetUserGuideStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserGuideStatusWithOptions(request, headers, runtime);
  }

  /**
   * 报警列表查询
   * 
   * @param request - ListAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertsResponse
   */
  async listAlertsWithOptions(request: ListAlertsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlertsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertLevel)) {
      body["alertLevel"] = request.alertLevel;
    }

    if (!Util.isUnset(request.alertName)) {
      body["alertName"] = request.alertName;
    }

    if (!Util.isUnset(request.alertSourceName)) {
      body["alertSourceName"] = request.alertSourceName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.monitorSourceId)) {
      body["monitorSourceId"] = request.monitorSourceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlerts",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/alerts/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlertsResponse>(await this.callApi(params, req, runtime), new ListAlertsResponse({}));
  }

  /**
   * 报警列表查询
   * 
   * @param request - ListAlertsRequest
   * @returns ListAlertsResponse
   */
  async listAlerts(request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertsWithOptions(request, headers, runtime);
  }

  /**
   * 监控关联规则列表
   * 
   * @param request - ListByMonitorSourceIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListByMonitorSourceIdResponse
   */
  async listByMonitorSourceIdWithOptions(request: ListByMonitorSourceIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListByMonitorSourceIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.monitorSourceId)) {
      body["monitorSourceId"] = request.monitorSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListByMonitorSourceId",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/listByMonitorSourceId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListByMonitorSourceIdResponse>(await this.callApi(params, req, runtime), new ListByMonitorSourceIdResponse({}));
  }

  /**
   * 监控关联规则列表
   * 
   * @param request - ListByMonitorSourceIdRequest
   * @returns ListByMonitorSourceIdResponse
   */
  async listByMonitorSourceId(request: ListByMonitorSourceIdRequest): Promise<ListByMonitorSourceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listByMonitorSourceIdWithOptions(request, headers, runtime);
  }

  /**
   * 统计图表数据-个人
   * 
   * @param request - ListChartDataForServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartDataForServiceGroupResponse
   */
  async listChartDataForServiceGroupWithOptions(request: ListChartDataForServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChartDataForServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListChartDataForServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/statistics/chartDataForServiceGroup/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChartDataForServiceGroupResponse>(await this.callApi(params, req, runtime), new ListChartDataForServiceGroupResponse({}));
  }

  /**
   * 统计图表数据-个人
   * 
   * @param request - ListChartDataForServiceGroupRequest
   * @returns ListChartDataForServiceGroupResponse
   */
  async listChartDataForServiceGroup(request: ListChartDataForServiceGroupRequest): Promise<ListChartDataForServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChartDataForServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 统计图表数据-个人
   * 
   * @param request - ListChartDataForUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartDataForUserResponse
   */
  async listChartDataForUserWithOptions(request: ListChartDataForUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChartDataForUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListChartDataForUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/statistics/chartDataForUser/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChartDataForUserResponse>(await this.callApi(params, req, runtime), new ListChartDataForUserResponse({}));
  }

  /**
   * 统计图表数据-个人
   * 
   * @param request - ListChartDataForUserRequest
   * @returns ListChartDataForUserResponse
   */
  async listChartDataForUser(request: ListChartDataForUserRequest): Promise<ListChartDataForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChartDataForUserWithOptions(request, headers, runtime);
  }

  /**
   * 全局码表配置
   * 
   * @param request - ListConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigsResponse
   */
  async listConfigsWithOptions(request: ListConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigs",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/config/all`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConfigsResponse>(await this.callApi(params, req, runtime), new ListConfigsResponse({}));
  }

  /**
   * 全局码表配置
   * 
   * @param request - ListConfigsRequest
   * @returns ListConfigsResponse
   */
  async listConfigs(request: ListConfigsRequest): Promise<ListConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务组事件统计报表
   * 
   * @param request - ListDataReportForServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataReportForServiceGroupResponse
   */
  async listDataReportForServiceGroupWithOptions(request: ListDataReportForServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataReportForServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.serviceGroupName)) {
      body["serviceGroupName"] = request.serviceGroupName;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataReportForServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/statistics/listDataReportForServiceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataReportForServiceGroupResponse>(await this.callApi(params, req, runtime), new ListDataReportForServiceGroupResponse({}));
  }

  /**
   * 查询服务组事件统计报表
   * 
   * @param request - ListDataReportForServiceGroupRequest
   * @returns ListDataReportForServiceGroupResponse
   */
  async listDataReportForServiceGroup(request: ListDataReportForServiceGroupRequest): Promise<ListDataReportForServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataReportForServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户事件统计报表
   * 
   * @param request - ListDataReportForUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataReportForUserResponse
   */
  async listDataReportForUserWithOptions(request: ListDataReportForUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataReportForUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataReportForUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/statistics/listDataReportForUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataReportForUserResponse>(await this.callApi(params, req, runtime), new ListDataReportForUserResponse({}));
  }

  /**
   * 查询用户事件统计报表
   * 
   * @param request - ListDataReportForUserRequest
   * @returns ListDataReportForUserResponse
   */
  async listDataReportForUser(request: ListDataReportForUserRequest): Promise<ListDataReportForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataReportForUserWithOptions(request, headers, runtime);
  }

  /**
   * 字典列表
   * 
   * @param request - ListDictionariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictionariesResponse
   */
  async listDictionariesWithOptions(request: ListDictionariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDictionariesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDictionaries",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/dict/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDictionariesResponse>(await this.callApi(params, req, runtime), new ListDictionariesResponse({}));
  }

  /**
   * 字典列表
   * 
   * @param request - ListDictionariesRequest
   * @returns ListDictionariesResponse
   */
  async listDictionaries(request: ListDictionariesRequest): Promise<ListDictionariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictionariesWithOptions(request, headers, runtime);
  }

  /**
   * 获取已选中的服务对象
   * 
   * @param request - ListEscalationPlanServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEscalationPlanServicesResponse
   */
  async listEscalationPlanServicesWithOptions(request: ListEscalationPlanServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEscalationPlanServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEscalationPlanServices",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEscalationPlanServicesResponse>(await this.callApi(params, req, runtime), new ListEscalationPlanServicesResponse({}));
  }

  /**
   * 获取已选中的服务对象
   * 
   * @param request - ListEscalationPlanServicesRequest
   * @returns ListEscalationPlanServicesResponse
   */
  async listEscalationPlanServices(request: ListEscalationPlanServicesRequest): Promise<ListEscalationPlanServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlanServicesWithOptions(request, headers, runtime);
  }

  /**
   * 升级计划列表添加服务删除字段
   * 
   * @param request - ListEscalationPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEscalationPlansResponse
   */
  async listEscalationPlansWithOptions(request: ListEscalationPlansRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEscalationPlansResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanName)) {
      body["escalationPlanName"] = request.escalationPlanName;
    }

    if (!Util.isUnset(request.isGlobal)) {
      body["isGlobal"] = request.isGlobal;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEscalationPlans",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEscalationPlansResponse>(await this.callApi(params, req, runtime), new ListEscalationPlansResponse({}));
  }

  /**
   * 升级计划列表添加服务删除字段
   * 
   * @param request - ListEscalationPlansRequest
   * @returns ListEscalationPlansResponse
   */
  async listEscalationPlans(request: ListEscalationPlansRequest): Promise<ListEscalationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlansWithOptions(request, headers, runtime);
  }

  /**
   * 根据推送对象查询升级策略
   * 
   * @param request - ListEscalationPlansByNoticeObjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEscalationPlansByNoticeObjectResponse
   */
  async listEscalationPlansByNoticeObjectWithOptions(request: ListEscalationPlansByNoticeObjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEscalationPlansByNoticeObjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.noticeObjectId)) {
      body["noticeObjectId"] = request.noticeObjectId;
    }

    if (!Util.isUnset(request.noticeObjectType)) {
      body["noticeObjectType"] = request.noticeObjectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEscalationPlansByNoticeObject",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/listByNoticeObject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEscalationPlansByNoticeObjectResponse>(await this.callApi(params, req, runtime), new ListEscalationPlansByNoticeObjectResponse({}));
  }

  /**
   * 根据推送对象查询升级策略
   * 
   * @param request - ListEscalationPlansByNoticeObjectRequest
   * @returns ListEscalationPlansByNoticeObjectResponse
   */
  async listEscalationPlansByNoticeObject(request: ListEscalationPlansByNoticeObjectRequest): Promise<ListEscalationPlansByNoticeObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlansByNoticeObjectWithOptions(request, headers, runtime);
  }

  /**
   * 事件详情升级策略
   * 
   * @param request - ListIncidentDetailEscalationPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentDetailEscalationPlansResponse
   */
  async listIncidentDetailEscalationPlansWithOptions(request: ListIncidentDetailEscalationPlansRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIncidentDetailEscalationPlansResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIncidentDetailEscalationPlans",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/detail/escalation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIncidentDetailEscalationPlansResponse>(await this.callApi(params, req, runtime), new ListIncidentDetailEscalationPlansResponse({}));
  }

  /**
   * 事件详情升级策略
   * 
   * @param request - ListIncidentDetailEscalationPlansRequest
   * @returns ListIncidentDetailEscalationPlansResponse
   */
  async listIncidentDetailEscalationPlans(request: ListIncidentDetailEscalationPlansRequest): Promise<ListIncidentDetailEscalationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentDetailEscalationPlansWithOptions(request, headers, runtime);
  }

  /**
   * 查询事件详情动态
   * 
   * @param request - ListIncidentDetailTimelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentDetailTimelinesResponse
   */
  async listIncidentDetailTimelinesWithOptions(request: ListIncidentDetailTimelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIncidentDetailTimelinesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.idSort)) {
      body["idSort"] = request.idSort;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIncidentDetailTimelines",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/detail/timeline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIncidentDetailTimelinesResponse>(await this.callApi(params, req, runtime), new ListIncidentDetailTimelinesResponse({}));
  }

  /**
   * 查询事件详情动态
   * 
   * @param request - ListIncidentDetailTimelinesRequest
   * @returns ListIncidentDetailTimelinesResponse
   */
  async listIncidentDetailTimelines(request: ListIncidentDetailTimelinesRequest): Promise<ListIncidentDetailTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentDetailTimelinesWithOptions(request, headers, runtime);
  }

  /**
   * 查询事件小计
   * 
   * @param request - ListIncidentSubtotalsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentSubtotalsResponse
   */
  async listIncidentSubtotalsWithOptions(request: ListIncidentSubtotalsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIncidentSubtotalsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIncidentSubtotals",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/list/subtotal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIncidentSubtotalsResponse>(await this.callApi(params, req, runtime), new ListIncidentSubtotalsResponse({}));
  }

  /**
   * 查询事件小计
   * 
   * @param request - ListIncidentSubtotalsRequest
   * @returns ListIncidentSubtotalsResponse
   */
  async listIncidentSubtotals(request: ListIncidentSubtotalsRequest): Promise<ListIncidentSubtotalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentSubtotalsWithOptions(request, headers, runtime);
  }

  /**
   * 事件动态
   * 
   * @param request - ListIncidentTimelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentTimelinesResponse
   */
  async listIncidentTimelinesWithOptions(request: ListIncidentTimelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIncidentTimelinesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIncidentTimelines",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/timeline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIncidentTimelinesResponse>(await this.callApi(params, req, runtime), new ListIncidentTimelinesResponse({}));
  }

  /**
   * 事件动态
   * 
   * @param request - ListIncidentTimelinesRequest
   * @returns ListIncidentTimelinesResponse
   */
  async listIncidentTimelines(request: ListIncidentTimelinesRequest): Promise<ListIncidentTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentTimelinesWithOptions(request, headers, runtime);
  }

  /**
   * 获取事件列表
   * 
   * @param request - ListIncidentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentsResponse
   */
  async listIncidentsWithOptions(request: ListIncidentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIncidentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createEndTime)) {
      body["createEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.createStartTime)) {
      body["createStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.effect)) {
      body["effect"] = request.effect;
    }

    if (!Util.isUnset(request.incidentLevel)) {
      body["incidentLevel"] = request.incidentLevel;
    }

    if (!Util.isUnset(request.incidentStatus)) {
      body["incidentStatus"] = request.incidentStatus;
    }

    if (!Util.isUnset(request.me)) {
      body["me"] = request.me;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.relationServiceId)) {
      body["relationServiceId"] = request.relationServiceId;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIncidents",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIncidentsResponse>(await this.callApi(params, req, runtime), new ListIncidentsResponse({}));
  }

  /**
   * 获取事件列表
   * 
   * @param request - ListIncidentsRequest
   * @returns ListIncidentsResponse
   */
  async listIncidents(request: ListIncidentsRequest): Promise<ListIncidentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取集成配置动态
   * 
   * @param request - ListIntegrationConfigTimelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationConfigTimelinesResponse
   */
  async listIntegrationConfigTimelinesWithOptions(request: ListIntegrationConfigTimelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIntegrationConfigTimelinesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIntegrationConfigTimelines",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/timeline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIntegrationConfigTimelinesResponse>(await this.callApi(params, req, runtime), new ListIntegrationConfigTimelinesResponse({}));
  }

  /**
   * 获取集成配置动态
   * 
   * @param request - ListIntegrationConfigTimelinesRequest
   * @returns ListIntegrationConfigTimelinesResponse
   */
  async listIntegrationConfigTimelines(request: ListIntegrationConfigTimelinesRequest): Promise<ListIntegrationConfigTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationConfigTimelinesWithOptions(request, headers, runtime);
  }

  /**
   * 获取集成配置列表
   * 
   * @param request - ListIntegrationConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationConfigsResponse
   */
  async listIntegrationConfigsWithOptions(request: ListIntegrationConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIntegrationConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.monitorSourceName)) {
      body["monitorSourceName"] = request.monitorSourceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIntegrationConfigs",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIntegrationConfigsResponse>(await this.callApi(params, req, runtime), new ListIntegrationConfigsResponse({}));
  }

  /**
   * 获取集成配置列表
   * 
   * @param request - ListIntegrationConfigsRequest
   * @returns ListIntegrationConfigsResponse
   */
  async listIntegrationConfigs(request: ListIntegrationConfigsRequest): Promise<ListIntegrationConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationConfigsWithOptions(request, headers, runtime);
  }

  /**
   * ListMonitorSources
   * 
   * @param request - ListMonitorSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonitorSourcesResponse
   */
  async listMonitorSourcesWithOptions(request: ListMonitorSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMonitorSourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMonitorSources",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/monitorSource/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMonitorSourcesResponse>(await this.callApi(params, req, runtime), new ListMonitorSourcesResponse({}));
  }

  /**
   * ListMonitorSources
   * 
   * @param request - ListMonitorSourcesRequest
   * @returns ListMonitorSourcesResponse
   */
  async listMonitorSources(request: ListMonitorSourcesRequest): Promise<ListMonitorSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorSourcesWithOptions(request, headers, runtime);
  }

  /**
   * 故障详情动态
   * 
   * @param request - ListProblemDetailOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProblemDetailOperationsResponse
   */
  async listProblemDetailOperationsWithOptions(request: ListProblemDetailOperationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProblemDetailOperationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createTimeSort)) {
      body["createTimeSort"] = request.createTimeSort;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProblemDetailOperations",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/detail/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProblemDetailOperationsResponse>(await this.callApi(params, req, runtime), new ListProblemDetailOperationsResponse({}));
  }

  /**
   * 故障详情动态
   * 
   * @param request - ListProblemDetailOperationsRequest
   * @returns ListProblemDetailOperationsResponse
   */
  async listProblemDetailOperations(request: ListProblemDetailOperationsRequest): Promise<ListProblemDetailOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemDetailOperationsWithOptions(request, headers, runtime);
  }

  /**
   * 查询故障7天内动态
   * 
   * @param request - ListProblemOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProblemOperationsResponse
   */
  async listProblemOperationsWithOptions(request: ListProblemOperationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProblemOperationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProblemOperations",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProblemOperationsResponse>(await this.callApi(params, req, runtime), new ListProblemOperationsResponse({}));
  }

  /**
   * 查询故障7天内动态
   * 
   * @param request - ListProblemOperationsRequest
   * @returns ListProblemOperationsResponse
   */
  async listProblemOperations(request: ListProblemOperationsRequest): Promise<ListProblemOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemOperationsWithOptions(request, headers, runtime);
  }

  /**
   * 查询故障小计
   * 
   * @param request - ListProblemSubtotalsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProblemSubtotalsResponse
   */
  async listProblemSubtotalsWithOptions(request: ListProblemSubtotalsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProblemSubtotalsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProblemSubtotals",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/list/subtotal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProblemSubtotalsResponse>(await this.callApi(params, req, runtime), new ListProblemSubtotalsResponse({}));
  }

  /**
   * 查询故障小计
   * 
   * @param request - ListProblemSubtotalsRequest
   * @returns ListProblemSubtotalsResponse
   */
  async listProblemSubtotals(request: ListProblemSubtotalsRequest): Promise<ListProblemSubtotalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemSubtotalsWithOptions(request, headers, runtime);
  }

  /**
   * 查询故障操作时间线列表
   * 
   * @param request - ListProblemTimeLinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProblemTimeLinesResponse
   */
  async listProblemTimeLinesWithOptions(request: ListProblemTimeLinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProblemTimeLinesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProblemTimeLines",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/detail/timeLines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProblemTimeLinesResponse>(await this.callApi(params, req, runtime), new ListProblemTimeLinesResponse({}));
  }

  /**
   * 查询故障操作时间线列表
   * 
   * @param request - ListProblemTimeLinesRequest
   * @returns ListProblemTimeLinesResponse
   */
  async listProblemTimeLines(request: ListProblemTimeLinesRequest): Promise<ListProblemTimeLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemTimeLinesWithOptions(request, headers, runtime);
  }

  /**
   * 故障列表查询接口
   * 
   * @param request - ListProblemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProblemsResponse
   */
  async listProblemsWithOptions(request: ListProblemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProblemsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.affectServiceId)) {
      body["affectServiceId"] = request.affectServiceId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.discoveryEndTime)) {
      body["discoveryEndTime"] = request.discoveryEndTime;
    }

    if (!Util.isUnset(request.discoveryStartTime)) {
      body["discoveryStartTime"] = request.discoveryStartTime;
    }

    if (!Util.isUnset(request.mainHandlerId)) {
      body["mainHandlerId"] = request.mainHandlerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.problemLevel)) {
      body["problemLevel"] = request.problemLevel;
    }

    if (!Util.isUnset(request.problemStatus)) {
      body["problemStatus"] = request.problemStatus;
    }

    if (!Util.isUnset(request.queryType)) {
      body["queryType"] = request.queryType;
    }

    if (!Util.isUnset(request.repeaterId)) {
      body["repeaterId"] = request.repeaterId;
    }

    if (!Util.isUnset(request.restoreEndTime)) {
      body["restoreEndTime"] = request.restoreEndTime;
    }

    if (!Util.isUnset(request.restoreStartTime)) {
      body["restoreStartTime"] = request.restoreStartTime;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProblems",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/listProblems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProblemsResponse>(await this.callApi(params, req, runtime), new ListProblemsResponse({}));
  }

  /**
   * 故障列表查询接口
   * 
   * @param request - ListProblemsRequest
   * @returns ListProblemsResponse
   */
  async listProblems(request: ListProblemsRequest): Promise<ListProblemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemsWithOptions(request, headers, runtime);
  }

  /**
   * 查询流转规则列表
   * 
   * @param request - ListRouteRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRouteRulesResponse
   */
  async listRouteRulesWithOptions(request: ListRouteRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRouteRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.notFilterRouteRuleDeleted)) {
      body["notFilterRouteRuleDeleted"] = request.notFilterRouteRuleDeleted;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.routeType)) {
      body["routeType"] = request.routeType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRouteRules",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRouteRulesResponse>(await this.callApi(params, req, runtime), new ListRouteRulesResponse({}));
  }

  /**
   * 查询流转规则列表
   * 
   * @param request - ListRouteRulesRequest
   * @returns ListRouteRulesResponse
   */
  async listRouteRules(request: ListRouteRulesRequest): Promise<ListRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定分配对象的流转规则
   * 
   * @param request - ListRouteRulesByAssignWhoIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRouteRulesByAssignWhoIdResponse
   */
  async listRouteRulesByAssignWhoIdWithOptions(request: ListRouteRulesByAssignWhoIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRouteRulesByAssignWhoIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assignWhoId)) {
      body["assignWhoId"] = request.assignWhoId;
    }

    if (!Util.isUnset(request.assignWhoType)) {
      body["assignWhoType"] = request.assignWhoType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRouteRulesByAssignWhoId",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/listByAssignWhoId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRouteRulesByAssignWhoIdResponse>(await this.callApi(params, req, runtime), new ListRouteRulesByAssignWhoIdResponse({}));
  }

  /**
   * 获取指定分配对象的流转规则
   * 
   * @param request - ListRouteRulesByAssignWhoIdRequest
   * @returns ListRouteRulesByAssignWhoIdResponse
   */
  async listRouteRulesByAssignWhoId(request: ListRouteRulesByAssignWhoIdRequest): Promise<ListRouteRulesByAssignWhoIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesByAssignWhoIdWithOptions(request, headers, runtime);
  }

  /**
   * 根据服务id查询流转规则
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRouteRulesByServiceResponse
   */
  async listRouteRulesByServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRouteRulesByServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRouteRulesByService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/listByService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRouteRulesByServiceResponse>(await this.callApi(params, req, runtime), new ListRouteRulesByServiceResponse({}));
  }

  /**
   * 根据服务id查询流转规则
   * @returns ListRouteRulesByServiceResponse
   */
  async listRouteRulesByService(): Promise<ListRouteRulesByServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesByServiceWithOptions(headers, runtime);
  }

  /**
   * 查询服务组监控源模版列表
   * 
   * @param request - ListServiceGroupMonitorSourceTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceGroupMonitorSourceTemplatesResponse
   */
  async listServiceGroupMonitorSourceTemplatesWithOptions(request: ListServiceGroupMonitorSourceTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceGroupMonitorSourceTemplatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceGroupMonitorSourceTemplates",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/listServiceGroupMonitorSourceTemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceGroupMonitorSourceTemplatesResponse>(await this.callApi(params, req, runtime), new ListServiceGroupMonitorSourceTemplatesResponse({}));
  }

  /**
   * 查询服务组监控源模版列表
   * 
   * @param request - ListServiceGroupMonitorSourceTemplatesRequest
   * @returns ListServiceGroupMonitorSourceTemplatesResponse
   */
  async listServiceGroupMonitorSourceTemplates(request: ListServiceGroupMonitorSourceTemplatesRequest): Promise<ListServiceGroupMonitorSourceTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupMonitorSourceTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务组列表
   * 
   * @param request - ListServiceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceGroupsResponse
   */
  async listServiceGroupsWithOptions(request: ListServiceGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.isScheduled)) {
      body["isScheduled"] = request.isScheduled;
    }

    if (!Util.isUnset(request.orderByScheduleStatus)) {
      body["orderByScheduleStatus"] = request.orderByScheduleStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryName)) {
      body["queryName"] = request.queryName;
    }

    if (!Util.isUnset(request.queryType)) {
      body["queryType"] = request.queryType;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceGroups",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceGroupsResponse>(await this.callApi(params, req, runtime), new ListServiceGroupsResponse({}));
  }

  /**
   * 查询服务组列表
   * 
   * @param request - ListServiceGroupsRequest
   * @returns ListServiceGroupsResponse
   */
  async listServiceGroups(request: ListServiceGroupsRequest): Promise<ListServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 根据成员id查服务组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceGroupsByUserIdResponse
   */
  async listServiceGroupsByUserIdWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceGroupsByUserIdResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListServiceGroupsByUserId",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/listByUserId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceGroupsByUserIdResponse>(await this.callApi(params, req, runtime), new ListServiceGroupsByUserIdResponse({}));
  }

  /**
   * 根据成员id查服务组
   * @returns ListServiceGroupsByUserIdResponse
   */
  async listServiceGroupsByUserId(): Promise<ListServiceGroupsByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsByUserIdWithOptions(headers, runtime);
  }

  /**
   * 查询服务组列表
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  /**
   * 查询服务组列表
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * 原始告警列表查询
   * 
   * @param request - ListSourceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSourceEventsResponse
   */
  async listSourceEventsWithOptions(request: ListSourceEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSourceEventsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startRowKey)) {
      body["startRowKey"] = request.startRowKey;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopRowKey)) {
      body["stopRowKey"] = request.stopRowKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSourceEvents",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/events/listOriginalEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSourceEventsResponse>(await this.callApi(params, req, runtime), new ListSourceEventsResponse({}));
  }

  /**
   * 原始告警列表查询
   * 
   * @param request - ListSourceEventsRequest
   * @returns ListSourceEventsResponse
   */
  async listSourceEvents(request: ListSourceEventsRequest): Promise<ListSourceEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSourceEventsWithOptions(request, headers, runtime);
  }

  /**
   * 查询监控员最近10次告警
   * 
   * @param request - ListSourceEventsForMonitorSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSourceEventsForMonitorSourceResponse
   */
  async listSourceEventsForMonitorSourceWithOptions(request: ListSourceEventsForMonitorSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSourceEventsForMonitorSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.monitorSourceId)) {
      body["monitorSourceId"] = request.monitorSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSourceEventsForMonitorSource",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/events/queryLastestEvents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSourceEventsForMonitorSourceResponse>(await this.callApi(params, req, runtime), new ListSourceEventsForMonitorSourceResponse({}));
  }

  /**
   * 查询监控员最近10次告警
   * 
   * @param request - ListSourceEventsForMonitorSourceRequest
   * @returns ListSourceEventsForMonitorSourceResponse
   */
  async listSourceEventsForMonitorSource(request: ListSourceEventsForMonitorSourceRequest): Promise<ListSourceEventsForMonitorSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSourceEventsForMonitorSourceWithOptions(request, headers, runtime);
  }

  /**
   * 订阅通知服务组查询
   * 
   * @param request - ListSubscriptionServiceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionServiceGroupsResponse
   */
  async listSubscriptionServiceGroupsWithOptions(request: ListSubscriptionServiceGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubscriptionServiceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.serviceIds)) {
      body["serviceIds"] = request.serviceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscriptionServiceGroups",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/serviceGroup/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubscriptionServiceGroupsResponse>(await this.callApi(params, req, runtime), new ListSubscriptionServiceGroupsResponse({}));
  }

  /**
   * 订阅通知服务组查询
   * 
   * @param request - ListSubscriptionServiceGroupsRequest
   * @returns ListSubscriptionServiceGroupsResponse
   */
  async listSubscriptionServiceGroups(request: ListSubscriptionServiceGroupsRequest): Promise<ListSubscriptionServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscriptionServiceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 通知订阅列表
   * 
   * @param request - ListSubscriptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionsResponse
   */
  async listSubscriptionsWithOptions(request: ListSubscriptionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubscriptionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.notFilterScopeObjectDeleted)) {
      body["notFilterScopeObjectDeleted"] = request.notFilterScopeObjectDeleted;
    }

    if (!Util.isUnset(request.notifyObject)) {
      body["notifyObject"] = request.notifyObject;
    }

    if (!Util.isUnset(request.notifyObjectType)) {
      body["notifyObjectType"] = request.notifyObjectType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.scopeObject)) {
      body["scopeObject"] = request.scopeObject;
    }

    if (!Util.isUnset(request.subscriptionTitle)) {
      body["subscriptionTitle"] = request.subscriptionTitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscriptions",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubscriptionsResponse>(await this.callApi(params, req, runtime), new ListSubscriptionsResponse({}));
  }

  /**
   * 通知订阅列表
   * 
   * @param request - ListSubscriptionsRequest
   * @returns ListSubscriptionsResponse
   */
  async listSubscriptions(request: ListSubscriptionsRequest): Promise<ListSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscriptionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询原始告警趋势
   * 
   * @param request - ListTrendForSourceEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrendForSourceEventResponse
   */
  async listTrendForSourceEventWithOptions(request: ListTrendForSourceEventRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrendForSourceEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeUnit)) {
      body["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTrendForSourceEvent",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/events/querySourceEventTrend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrendForSourceEventResponse>(await this.callApi(params, req, runtime), new ListTrendForSourceEventResponse({}));
  }

  /**
   * 查询原始告警趋势
   * 
   * @param request - ListTrendForSourceEventRequest
   * @returns ListTrendForSourceEventResponse
   */
  async listTrendForSourceEvent(request: ListTrendForSourceEventRequest): Promise<ListTrendForSourceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrendForSourceEventWithOptions(request, headers, runtime);
  }

  /**
   * 用户预览
   * 
   * @param request - ListUserSerivceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSerivceGroupsResponse
   */
  async listUserSerivceGroupsWithOptions(request: ListUserSerivceGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserSerivceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserSerivceGroups",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/preview/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserSerivceGroupsResponse>(await this.callApi(params, req, runtime), new ListUserSerivceGroupsResponse({}));
  }

  /**
   * 用户预览
   * 
   * @param request - ListUserSerivceGroupsRequest
   * @returns ListUserSerivceGroupsResponse
   */
  async listUserSerivceGroups(request: ListUserSerivceGroupsRequest): Promise<ListUserSerivceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserSerivceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 人员列表
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.ramId)) {
      body["ramId"] = request.ramId;
    }

    if (!Util.isUnset(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!Util.isUnset(request.synergyChannel)) {
      body["synergyChannel"] = request.synergyChannel;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * 人员列表
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * 监控数据接入API
   * 
   * @param request - PushMonitorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMonitorResponse
   */
  async pushMonitorWithOptions(apiKey: string, request: PushMonitorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "PushMonitor",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/api/monitor/push/${OpenApiUtil.getEncodeParam(apiKey)}`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushMonitorResponse>(await this.callApi(params, req, runtime), new PushMonitorResponse({}));
  }

  /**
   * 监控数据接入API
   * 
   * @param request - PushMonitorRequest
   * @returns PushMonitorResponse
   */
  async pushMonitor(apiKey: string, request: PushMonitorRequest): Promise<PushMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushMonitorWithOptions(apiKey, request, headers, runtime);
  }

  /**
   * 故障恢复
   * 
   * @param request - RecoverProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverProblemResponse
   */
  async recoverProblemWithOptions(request: RecoverProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecoverProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    if (!Util.isUnset(request.recoveryTime)) {
      body["recoveryTime"] = request.recoveryTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecoverProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/recovery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecoverProblemResponse>(await this.callApi(params, req, runtime), new RecoverProblemResponse({}));
  }

  /**
   * 故障恢复
   * 
   * @param request - RecoverProblemRequest
   * @returns RecoverProblemResponse
   */
  async recoverProblem(request: RecoverProblemRequest): Promise<RecoverProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverProblemWithOptions(request, headers, runtime);
  }

  /**
   * 刷新集成配置key
   * 
   * @param request - RefreshIntegrationConfigKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshIntegrationConfigKeyResponse
   */
  async refreshIntegrationConfigKeyWithOptions(request: RefreshIntegrationConfigKeyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefreshIntegrationConfigKeyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefreshIntegrationConfigKey",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/refreshKey`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshIntegrationConfigKeyResponse>(await this.callApi(params, req, runtime), new RefreshIntegrationConfigKeyResponse({}));
  }

  /**
   * 刷新集成配置key
   * 
   * @param request - RefreshIntegrationConfigKeyRequest
   * @returns RefreshIntegrationConfigKeyResponse
   */
  async refreshIntegrationConfigKey(request: RefreshIntegrationConfigKeyRequest): Promise<RefreshIntegrationConfigKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshIntegrationConfigKeyWithOptions(request, headers, runtime);
  }

  /**
   * 解除集成配置
   * 
   * @param request - RemoveIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveIntegrationConfigResponse
   */
  async removeIntegrationConfigWithOptions(request: RemoveIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveIntegrationConfigResponse>(await this.callApi(params, req, runtime), new RemoveIntegrationConfigResponse({}));
  }

  /**
   * 解除集成配置
   * 
   * @param request - RemoveIntegrationConfigRequest
   * @returns RemoveIntegrationConfigResponse
   */
  async removeIntegrationConfig(request: RemoveIntegrationConfigRequest): Promise<RemoveIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 删除故障协同组
   * 
   * @param request - RemoveProblemServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveProblemServiceGroupResponse
   */
  async removeProblemServiceGroupWithOptions(request: RemoveProblemServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveProblemServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.serviceGroupIds)) {
      body["serviceGroupIds"] = request.serviceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveProblemServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/removeServiceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveProblemServiceGroupResponse>(await this.callApi(params, req, runtime), new RemoveProblemServiceGroupResponse({}));
  }

  /**
   * 删除故障协同组
   * 
   * @param request - RemoveProblemServiceGroupRequest
   * @returns RemoveProblemServiceGroupResponse
   */
  async removeProblemServiceGroup(request: RemoveProblemServiceGroupRequest): Promise<RemoveProblemServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeProblemServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 故障复盘
   * 
   * @param request - ReplayProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplayProblemResponse
   */
  async replayProblemWithOptions(request: ReplayProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReplayProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.replayDutyUserId)) {
      body["replayDutyUserId"] = request.replayDutyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReplayProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/replay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReplayProblemResponse>(await this.callApi(params, req, runtime), new ReplayProblemResponse({}));
  }

  /**
   * 故障复盘
   * 
   * @param request - ReplayProblemRequest
   * @returns ReplayProblemResponse
   */
  async replayProblem(request: ReplayProblemRequest): Promise<ReplayProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replayProblemWithOptions(request, headers, runtime);
  }

  /**
   * 事件响应
   * 
   * @param request - RespondIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RespondIncidentResponse
   */
  async respondIncidentWithOptions(request: RespondIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RespondIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.incidentIds)) {
      body["incidentIds"] = request.incidentIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RespondIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RespondIncidentResponse>(await this.callApi(params, req, runtime), new RespondIncidentResponse({}));
  }

  /**
   * 事件响应
   * 
   * @param request - RespondIncidentRequest
   * @returns RespondIncidentResponse
   */
  async respondIncident(request: RespondIncidentRequest): Promise<RespondIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.respondIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 故障撤销恢复
   * 
   * @param request - RevokeProblemRecoveryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeProblemRecoveryResponse
   */
  async revokeProblemRecoveryWithOptions(request: RevokeProblemRecoveryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokeProblemRecoveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeProblemRecovery",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeProblemRecoveryResponse>(await this.callApi(params, req, runtime), new RevokeProblemRecoveryResponse({}));
  }

  /**
   * 故障撤销恢复
   * 
   * @param request - RevokeProblemRecoveryRequest
   * @returns RevokeProblemRecoveryResponse
   */
  async revokeProblemRecovery(request: RevokeProblemRecoveryRequest): Promise<RevokeProblemRecoveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeProblemRecoveryWithOptions(request, headers, runtime);
  }

  /**
   * 解绑用户
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindUserResponse
   */
  async unbindUserWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindUserResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UnbindUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/unbind`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindUserResponse>(await this.callApi(params, req, runtime), new UnbindUserResponse({}));
  }

  /**
   * 解绑用户
   * @returns UnbindUserResponse
   */
  async unbindUser(): Promise<UnbindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindUserWithOptions(headers, runtime);
  }

  /**
   * 更新升级计划
   * 
   * @param request - UpdateEscalationPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEscalationPlanResponse
   */
  async updateEscalationPlanWithOptions(request: UpdateEscalationPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEscalationPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanDescription)) {
      body["escalationPlanDescription"] = request.escalationPlanDescription;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    if (!Util.isUnset(request.escalationPlanName)) {
      body["escalationPlanName"] = request.escalationPlanName;
    }

    if (!Util.isUnset(request.escalationPlanRules)) {
      body["escalationPlanRules"] = request.escalationPlanRules;
    }

    if (!Util.isUnset(request.escalationPlanScopeObjects)) {
      body["escalationPlanScopeObjects"] = request.escalationPlanScopeObjects;
    }

    if (!Util.isUnset(request.isGlobal)) {
      body["isGlobal"] = request.isGlobal;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEscalationPlan",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/escalationPlan/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEscalationPlanResponse>(await this.callApi(params, req, runtime), new UpdateEscalationPlanResponse({}));
  }

  /**
   * 更新升级计划
   * 
   * @param request - UpdateEscalationPlanRequest
   * @returns UpdateEscalationPlanResponse
   */
  async updateEscalationPlan(request: UpdateEscalationPlanRequest): Promise<UpdateEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEscalationPlanWithOptions(request, headers, runtime);
  }

  /**
   * 更新事件详情
   * 
   * @param request - UpdateIncidentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIncidentResponse
   */
  async updateIncidentWithOptions(request: UpdateIncidentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIncidentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.effect)) {
      body["effect"] = request.effect;
    }

    if (!Util.isUnset(request.incidentId)) {
      body["incidentId"] = request.incidentId;
    }

    if (!Util.isUnset(request.incidentLevel)) {
      body["incidentLevel"] = request.incidentLevel;
    }

    if (!Util.isUnset(request.incidentTitle)) {
      body["incidentTitle"] = request.incidentTitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIncident",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/incident/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateIncidentResponse>(await this.callApi(params, req, runtime), new UpdateIncidentResponse({}));
  }

  /**
   * 更新事件详情
   * 
   * @param request - UpdateIncidentRequest
   * @returns UpdateIncidentResponse
   */
  async updateIncident(request: UpdateIncidentRequest): Promise<UpdateIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIncidentWithOptions(request, headers, runtime);
  }

  /**
   * 更新集成配置
   * 
   * @param request - UpdateIntegrationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntegrationConfigResponse
   */
  async updateIntegrationConfigWithOptions(request: UpdateIntegrationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIntegrationConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKey)) {
      body["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.integrationConfigId)) {
      body["integrationConfigId"] = request.integrationConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIntegrationConfig",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/integrationConfig/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateIntegrationConfigResponse>(await this.callApi(params, req, runtime), new UpdateIntegrationConfigResponse({}));
  }

  /**
   * 更新集成配置
   * 
   * @param request - UpdateIntegrationConfigRequest
   * @returns UpdateIntegrationConfigResponse
   */
  async updateIntegrationConfig(request: UpdateIntegrationConfigRequest): Promise<UpdateIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIntegrationConfigWithOptions(request, headers, runtime);
  }

  /**
   * 更新故障
   * 
   * @param request - UpdateProblemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemResponse
   */
  async updateProblemWithOptions(request: UpdateProblemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feedback)) {
      body["feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.level)) {
      body["level"] = request.level;
    }

    if (!Util.isUnset(request.mainHandlerId)) {
      body["mainHandlerId"] = request.mainHandlerId;
    }

    if (!Util.isUnset(request.preliminaryReason)) {
      body["preliminaryReason"] = request.preliminaryReason;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemName)) {
      body["problemName"] = request.problemName;
    }

    if (!Util.isUnset(request.progressSummary)) {
      body["progressSummary"] = request.progressSummary;
    }

    if (!Util.isUnset(request.progressSummaryRichTextId)) {
      body["progressSummaryRichTextId"] = request.progressSummaryRichTextId;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.serviceGroupIds)) {
      body["serviceGroupIds"] = request.serviceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblem",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemResponse>(await this.callApi(params, req, runtime), new UpdateProblemResponse({}));
  }

  /**
   * 更新故障
   * 
   * @param request - UpdateProblemRequest
   * @returns UpdateProblemResponse
   */
  async updateProblem(request: UpdateProblemRequest): Promise<UpdateProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemWithOptions(request, headers, runtime);
  }

  /**
   * 更新故障影响服务
   * 
   * @param request - UpdateProblemEffectionServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemEffectionServiceResponse
   */
  async updateProblemEffectionServiceWithOptions(request: UpdateProblemEffectionServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemEffectionServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.effectionServiceId)) {
      body["effectionServiceId"] = request.effectionServiceId;
    }

    if (!Util.isUnset(request.level)) {
      body["level"] = request.level;
    }

    if (!Util.isUnset(request.picUrl)) {
      body["picUrl"] = request.picUrl;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblemEffectionService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/effectionService/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemEffectionServiceResponse>(await this.callApi(params, req, runtime), new UpdateProblemEffectionServiceResponse({}));
  }

  /**
   * 更新故障影响服务
   * 
   * @param request - UpdateProblemEffectionServiceRequest
   * @returns UpdateProblemEffectionServiceResponse
   */
  async updateProblemEffectionService(request: UpdateProblemEffectionServiceRequest): Promise<UpdateProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemEffectionServiceWithOptions(request, headers, runtime);
  }

  /**
   * 改进分析更新
   * 
   * @param request - UpdateProblemImprovementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemImprovementResponse
   */
  async updateProblemImprovementWithOptions(request: UpdateProblemImprovementRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemImprovementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.customProblemReason)) {
      body["customProblemReason"] = request.customProblemReason;
    }

    if (!Util.isUnset(request.discoverSource)) {
      body["discoverSource"] = request.discoverSource;
    }

    if (!Util.isUnset(request.dutyDepartmentId)) {
      body["dutyDepartmentId"] = request.dutyDepartmentId;
    }

    if (!Util.isUnset(request.dutyDepartmentName)) {
      body["dutyDepartmentName"] = request.dutyDepartmentName;
    }

    if (!Util.isUnset(request.dutyUserId)) {
      body["dutyUserId"] = request.dutyUserId;
    }

    if (!Util.isUnset(request.injectionMode)) {
      body["injectionMode"] = request.injectionMode;
    }

    if (!Util.isUnset(request.monitorSourceName)) {
      body["monitorSourceName"] = request.monitorSourceName;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemReason)) {
      body["problemReason"] = request.problemReason;
    }

    if (!Util.isUnset(request.recentActivity)) {
      body["recentActivity"] = request.recentActivity;
    }

    if (!Util.isUnset(request.recoveryMode)) {
      body["recoveryMode"] = request.recoveryMode;
    }

    if (!Util.isUnset(request.relationChanges)) {
      body["relationChanges"] = request.relationChanges;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.replayDutyUserId)) {
      body["replayDutyUserId"] = request.replayDutyUserId;
    }

    if (!Util.isUnset(request.userReport)) {
      body["userReport"] = request.userReport;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblemImprovement",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/improvement/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemImprovementResponse>(await this.callApi(params, req, runtime), new UpdateProblemImprovementResponse({}));
  }

  /**
   * 改进分析更新
   * 
   * @param request - UpdateProblemImprovementRequest
   * @returns UpdateProblemImprovementResponse
   */
  async updateProblemImprovement(request: UpdateProblemImprovementRequest): Promise<UpdateProblemImprovementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemImprovementWithOptions(request, headers, runtime);
  }

  /**
   * 改进措施更新
   * 
   * @param request - UpdateProblemMeasureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemMeasureResponse
   */
  async updateProblemMeasureWithOptions(request: UpdateProblemMeasureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemMeasureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkStandard)) {
      body["checkStandard"] = request.checkStandard;
    }

    if (!Util.isUnset(request.checkUserId)) {
      body["checkUserId"] = request.checkUserId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.directorId)) {
      body["directorId"] = request.directorId;
    }

    if (!Util.isUnset(request.measureId)) {
      body["measureId"] = request.measureId;
    }

    if (!Util.isUnset(request.planFinishTime)) {
      body["planFinishTime"] = request.planFinishTime;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.stalkerId)) {
      body["stalkerId"] = request.stalkerId;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblemMeasure",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/improvement/measure/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemMeasureResponse>(await this.callApi(params, req, runtime), new UpdateProblemMeasureResponse({}));
  }

  /**
   * 改进措施更新
   * 
   * @param request - UpdateProblemMeasureRequest
   * @returns UpdateProblemMeasureResponse
   */
  async updateProblemMeasure(request: UpdateProblemMeasureRequest): Promise<UpdateProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemMeasureWithOptions(request, headers, runtime);
  }

  /**
   * 更新故障通知
   * 
   * @param request - UpdateProblemNoticeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemNoticeResponse
   */
  async updateProblemNoticeWithOptions(request: UpdateProblemNoticeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemNoticeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemNotifyType)) {
      body["problemNotifyType"] = request.problemNotifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblemNotice",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/notify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemNoticeResponse>(await this.callApi(params, req, runtime), new UpdateProblemNoticeResponse({}));
  }

  /**
   * 更新故障通知
   * 
   * @param request - UpdateProblemNoticeRequest
   * @returns UpdateProblemNoticeResponse
   */
  async updateProblemNotice(request: UpdateProblemNoticeRequest): Promise<UpdateProblemNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemNoticeWithOptions(request, headers, runtime);
  }

  /**
   * 更新故障时间线节点
   * 
   * @param request - UpdateProblemTimelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProblemTimelineResponse
   */
  async updateProblemTimelineWithOptions(request: UpdateProblemTimelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProblemTimelineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.keyNode)) {
      body["keyNode"] = request.keyNode;
    }

    if (!Util.isUnset(request.problemId)) {
      body["problemId"] = request.problemId;
    }

    if (!Util.isUnset(request.problemTimelineId)) {
      body["problemTimelineId"] = request.problemTimelineId;
    }

    if (!Util.isUnset(request.time)) {
      body["time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProblemTimeline",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/problem/process/timeline/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProblemTimelineResponse>(await this.callApi(params, req, runtime), new UpdateProblemTimelineResponse({}));
  }

  /**
   * 更新故障时间线节点
   * 
   * @param request - UpdateProblemTimelineRequest
   * @returns UpdateProblemTimelineResponse
   */
  async updateProblemTimeline(request: UpdateProblemTimelineRequest): Promise<UpdateProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemTimelineWithOptions(request, headers, runtime);
  }

  /**
   * 更新富文本
   * 
   * @param request - UpdateRichTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRichTextResponse
   */
  async updateRichTextWithOptions(request: UpdateRichTextRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRichTextResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.richText)) {
      body["richText"] = request.richText;
    }

    if (!Util.isUnset(request.richTextId)) {
      body["richTextId"] = request.richTextId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRichText",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/rich/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRichTextResponse>(await this.callApi(params, req, runtime), new UpdateRichTextResponse({}));
  }

  /**
   * 更新富文本
   * 
   * @param request - UpdateRichTextRequest
   * @returns UpdateRichTextResponse
   */
  async updateRichText(request: UpdateRichTextRequest): Promise<UpdateRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRichTextWithOptions(request, headers, runtime);
  }

  /**
   * 更新流转规则
   * 
   * @param request - UpdateRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRouteRuleResponse
   */
  async updateRouteRuleWithOptions(request: UpdateRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assignObjectId)) {
      body["assignObjectId"] = request.assignObjectId;
    }

    if (!Util.isUnset(request.assignObjectType)) {
      body["assignObjectType"] = request.assignObjectType;
    }

    if (!Util.isUnset(request.childRuleRelation)) {
      body["childRuleRelation"] = request.childRuleRelation;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.convergenceFields)) {
      body["convergenceFields"] = request.convergenceFields;
    }

    if (!Util.isUnset(request.convergenceType)) {
      body["convergenceType"] = request.convergenceType;
    }

    if (!Util.isUnset(request.coverageProblemLevels)) {
      body["coverageProblemLevels"] = request.coverageProblemLevels;
    }

    if (!Util.isUnset(request.effection)) {
      body["effection"] = request.effection;
    }

    if (!Util.isUnset(request.incidentLevel)) {
      body["incidentLevel"] = request.incidentLevel;
    }

    if (!Util.isUnset(request.matchCount)) {
      body["matchCount"] = request.matchCount;
    }

    if (!Util.isUnset(request.notifyChannels)) {
      body["notifyChannels"] = request.notifyChannels;
    }

    if (!Util.isUnset(request.problemEffectionServices)) {
      body["problemEffectionServices"] = request.problemEffectionServices;
    }

    if (!Util.isUnset(request.problemLevelGroup)) {
      body["problemLevelGroup"] = request.problemLevelGroup;
    }

    if (!Util.isUnset(request.relatedServiceId)) {
      body["relatedServiceId"] = request.relatedServiceId;
    }

    if (!Util.isUnset(request.routeChildRules)) {
      body["routeChildRules"] = request.routeChildRules;
    }

    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    if (!Util.isUnset(request.routeType)) {
      body["routeType"] = request.routeType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.timeWindow)) {
      body["timeWindow"] = request.timeWindow;
    }

    if (!Util.isUnset(request.timeWindowUnit)) {
      body["timeWindowUnit"] = request.timeWindowUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/edit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRouteRuleResponse>(await this.callApi(params, req, runtime), new UpdateRouteRuleResponse({}));
  }

  /**
   * 更新流转规则
   * 
   * @param request - UpdateRouteRuleRequest
   * @returns UpdateRouteRuleResponse
   */
  async updateRouteRule(request: UpdateRouteRuleRequest): Promise<UpdateRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRouteRuleWithOptions(request, headers, runtime);
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(request: UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.escalationPlanId)) {
      body["escalationPlanId"] = request.escalationPlanId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      body["serviceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceGroupIdList)) {
      body["serviceGroupIdList"] = request.serviceGroupIdList;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(request, headers, runtime);
  }

  /**
   * 更新服务组
   * 
   * @param request - UpdateServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceGroupResponse
   */
  async updateServiceGroupWithOptions(request: UpdateServiceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enableWebhook)) {
      body["enableWebhook"] = request.enableWebhook;
    }

    if (!Util.isUnset(request.monitorSourceTemplates)) {
      body["monitorSourceTemplates"] = request.monitorSourceTemplates;
    }

    if (!Util.isUnset(request.serviceGroupDescription)) {
      body["serviceGroupDescription"] = request.serviceGroupDescription;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    if (!Util.isUnset(request.serviceGroupName)) {
      body["serviceGroupName"] = request.serviceGroupName;
    }

    if (!Util.isUnset(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    if (!Util.isUnset(request.webhookLink)) {
      body["webhookLink"] = request.webhookLink;
    }

    if (!Util.isUnset(request.webhookType)) {
      body["webhookType"] = request.webhookType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceGroup",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/modify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceGroupResponse>(await this.callApi(params, req, runtime), new UpdateServiceGroupResponse({}));
  }

  /**
   * 更新服务组
   * 
   * @param request - UpdateServiceGroupRequest
   * @returns UpdateServiceGroupResponse
   */
  async updateServiceGroup(request: UpdateServiceGroupRequest): Promise<UpdateServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 修改服务组排班
   * 
   * @param request - UpdateServiceGroupSchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceGroupSchedulingResponse
   */
  async updateServiceGroupSchedulingWithOptions(request: UpdateServiceGroupSchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceGroupSchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.fastScheduling)) {
      body["fastScheduling"] = request.fastScheduling;
    }

    if (!Util.isUnset(request.fineScheduling)) {
      body["fineScheduling"] = request.fineScheduling;
    }

    if (!Util.isUnset(request.schedulingWay)) {
      body["schedulingWay"] = request.schedulingWay;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceGroupScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceGroupSchedulingResponse>(await this.callApi(params, req, runtime), new UpdateServiceGroupSchedulingResponse({}));
  }

  /**
   * 修改服务组排班
   * 
   * @param request - UpdateServiceGroupSchedulingRequest
   * @returns UpdateServiceGroupSchedulingResponse
   */
  async updateServiceGroupScheduling(request: UpdateServiceGroupSchedulingRequest): Promise<UpdateServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 修改指定日期的服务组排班
   * 
   * @param request - UpdateServiceGroupSpecialDaySchedulingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceGroupSpecialDaySchedulingResponse
   */
  async updateServiceGroupSpecialDaySchedulingWithOptions(request: UpdateServiceGroupSpecialDaySchedulingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceGroupSpecialDaySchedulingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.schedulingDate)) {
      body["schedulingDate"] = request.schedulingDate;
    }

    if (!Util.isUnset(request.schedulingSpecialDays)) {
      body["schedulingSpecialDays"] = request.schedulingSpecialDays;
    }

    if (!Util.isUnset(request.serviceGroupId)) {
      body["serviceGroupId"] = request.serviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceGroupSpecialDayScheduling",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/services/group/scheduling/updateSpecialDayScheduling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceGroupSpecialDaySchedulingResponse>(await this.callApi(params, req, runtime), new UpdateServiceGroupSpecialDaySchedulingResponse({}));
  }

  /**
   * 修改指定日期的服务组排班
   * 
   * @param request - UpdateServiceGroupSpecialDaySchedulingRequest
   * @returns UpdateServiceGroupSpecialDaySchedulingResponse
   */
  async updateServiceGroupSpecialDayScheduling(request: UpdateServiceGroupSpecialDaySchedulingRequest): Promise<UpdateServiceGroupSpecialDaySchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupSpecialDaySchedulingWithOptions(request, headers, runtime);
  }

  /**
   * 更新通知订阅
   * 
   * @param request - UpdateSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(request: UpdateSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.expiredType)) {
      body["expiredType"] = request.expiredType;
    }

    if (!Util.isUnset(request.notifyObjectList)) {
      body["notifyObjectList"] = request.notifyObjectList;
    }

    if (!Util.isUnset(request.notifyObjectType)) {
      body["notifyObjectType"] = request.notifyObjectType;
    }

    if (!Util.isUnset(request.notifyStrategyList)) {
      body["notifyStrategyList"] = request.notifyStrategyList;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.scopeObjectList)) {
      body["scopeObjectList"] = request.scopeObjectList;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subscriptionId)) {
      body["subscriptionId"] = request.subscriptionId;
    }

    if (!Util.isUnset(request.subscriptionTitle)) {
      body["subscriptionTitle"] = request.subscriptionTitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubscription",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/notify/subscription/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new UpdateSubscriptionResponse({}));
  }

  /**
   * 更新通知订阅
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSubscriptionWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户
   * 
   * @param request - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.ramId)) {
      body["ramId"] = request.ramId;
    }

    if (!Util.isUnset(request.roleIdList)) {
      body["roleIdList"] = request.roleIdList;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * 更新用户
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户新手引导状态
   * 
   * @param request - UpdateUserGuideStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGuideStatusResponse
   */
  async updateUserGuideStatusWithOptions(request: UpdateUserGuideStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserGuideStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.guideAction)) {
      body["guideAction"] = request.guideAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserGuideStatus",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/user/update/guide/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserGuideStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserGuideStatusResponse({}));
  }

  /**
   * 更新用户新手引导状态
   * 
   * @param request - UpdateUserGuideStatusRequest
   * @returns UpdateUserGuideStatusResponse
   */
  async updateUserGuideStatus(request: UpdateUserGuideStatusRequest): Promise<UpdateUserGuideStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserGuideStatusWithOptions(request, headers, runtime);
  }

  /**
   * 验证流转规则
   * 
   * @param request - VerifyRouteRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyRouteRuleResponse
   */
  async verifyRouteRuleWithOptions(request: VerifyRouteRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VerifyRouteRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.routeRuleId)) {
      body["routeRuleId"] = request.routeRuleId;
    }

    if (!Util.isUnset(request.testSourceEvents)) {
      body["testSourceEvents"] = request.testSourceEvents;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyRouteRule",
      version: "2021-04-13",
      protocol: "HTTPS",
      pathname: `/routeRule/verify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VerifyRouteRuleResponse>(await this.callApi(params, req, runtime), new VerifyRouteRuleResponse({}));
  }

  /**
   * 验证流转规则
   * 
   * @param request - VerifyRouteRuleRequest
   * @returns VerifyRouteRuleResponse
   */
  async verifyRouteRule(request: VerifyRouteRuleRequest): Promise<VerifyRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyRouteRuleWithOptions(request, headers, runtime);
  }

}
