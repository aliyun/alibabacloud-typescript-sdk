// This file is auto-generated, don't edit it
/**
 *
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
  code?: string;
  description?: string;
  configDescription?: string;
  configCode?: string;
  parentCode?: string;
  configKey?: string;
  configValue?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddProblemServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BillingStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  cancelReason?: number;
  cancelReasonDescription?: string;
  clientToken?: string;
  problemId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  webhook?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ConfirmIntegrationConfigResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  escalationPlanDescription?: string;
  escalationPlanName?: string;
  escalationPlanRules?: CreateEscalationPlanRequestEscalationPlanRules[];
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
  data?: CreateEscalationPlanResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  assignUserId?: number;
  channels?: string[];
  clientToken?: string;
  effect?: string;
  incidentDescription?: string;
  incidentLevel?: string;
  incidentTitle?: string;
  relatedServiceId?: number;
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
  data?: CreateIncidentResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  description?: string;
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
  data?: CreateIncidentSubtotalResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIncidentSubtotalResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: CreateIntegrationConfigResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  discoverTime?: string;
  incidentId?: number;
  mainHandlerId?: number;
  preliminaryReason?: string;
  problemLevel?: string;
  problemName?: string;
  problemNotifyType?: string;
  problemStatus?: string;
  progressSummary?: string;
  progressSummaryRichTextId?: number;
  recoveryTime?: string;
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
  data?: CreateProblemResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  description?: string;
  level?: string;
  pictureUrl?: string[];
  problemId?: number;
  serviceId?: number;
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
  data?: CreateProblemEffectionServiceResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  checkStandard?: string;
  checkUserId?: number;
  clientToken?: string;
  content?: string;
  directorId?: number;
  planFinishTime?: string;
  problemId?: number;
  stalkerId?: number;
  status?: string;
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
  data?: CreateProblemMeasureResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  description?: string;
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
  data?: CreateProblemSubtotalResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemSubtotalResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  content?: string;
  keyNode?: string;
  problemId?: number;
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
  data?: CreateProblemTimelineResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  problemId?: number;
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
  data?: CreateProblemTimelinesResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProblemTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  instanceId?: number;
  instanceType?: string;
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
  data?: CreateRichTextResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  assignObjectId?: number;
  assignObjectType?: string;
  childRuleRelation?: string;
  clientToken?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  effection?: string;
  enableStatus?: string;
  incidentLevel?: string;
  matchCount?: number;
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: ProblemLevelGroupValue };
  relatedServiceId?: number;
  routeChildRules?: CreateRouteRuleRequestRouteChildRules[];
  routeType?: string;
  ruleName?: string;
  timeWindow?: number;
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
  data?: CreateRouteRuleResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  escalationPlanId?: number;
  serviceDescription?: string;
  serviceGroupIdList?: number[];
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
  data?: CreateServiceResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  enableWebhook?: string;
  monitorSourceTemplates?: CreateServiceGroupRequestMonitorSourceTemplates[];
  serviceGroupDescription?: string;
  serviceGroupName?: string;
  userIds?: number[];
  webhookLink?: string;
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
  data?: CreateServiceGroupResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  fastScheduling?: CreateServiceGroupSchedulingRequestFastScheduling;
  fineScheduling?: CreateServiceGroupSchedulingRequestFineScheduling;
  schedulingWay?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
  expiredType?: number;
  notifyObjectList?: CreateSubscriptionRequestNotifyObjectList[];
  notifyObjectType?: number;
  notifyStrategyList?: CreateSubscriptionRequestNotifyStrategyList[];
  period?: string;
  scope?: number;
  scopeObjectList?: CreateSubscriptionRequestScopeObjectList[];
  startTime?: string;
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
  data?: CreateSubscriptionResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  channel?: string;
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
  data?: CreateTenantApplicationResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  email?: string;
  phone?: string;
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
  data?: CreateUserResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteIntegrationConfigResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  effectionServiceId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  measureId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  problemId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  newUserId?: number;
  oldUserId?: number;
  removeUser?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceGroupUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  assignUserId?: number;
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeliverIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DisableIntegrationConfigResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableServiceGroupWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class EnableIntegrationConfigResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableServiceGroupWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  incidentFinishReason?: number;
  incidentFinishReasonDescription?: string;
  incidentFinishSolution?: number;
  incidentFinishSolutionDescription?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FinishIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FinishProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  keys?: string[];
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
  data?: GeneratePictureLinkResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GeneratePictureLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  instanceId?: number;
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
  data?: GeneratePictureUploadSignResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GeneratePictureUploadSignResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  keys?: string[];
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
  data?: GenerateProblemPictureLinkResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateProblemPictureLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  fileName?: string;
  fileSize?: number;
  fileType?: string;
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
  data?: GenerateProblemPictureUploadSignResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateProblemPictureUploadSignResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: GetEscalationPlanResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEventResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHomePageGuidanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: GetIncidentResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: GetIncidentListByIdListResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIncidentListByIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: GetIncidentStatisticsResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIncidentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIncidentSubtotalCountResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetIntegrationConfigResponseBody extends $tea.Model {
  data?: GetIntegrationConfigResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  effectionServiceId?: number;
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
  data?: GetProblemEffectionServiceResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: GetProblemImprovementResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProblemImprovementResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  effectServiceIds?: number[];
  incidentId?: number;
  problemId?: number;
  problemLevel?: string;
  problemNotifyType?: string;
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
  data?: GetProblemPreviewResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProblemPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: GetResourceStatisticsResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  instanceId?: number;
  instanceType?: string;
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
  data?: GetRichTextResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
  serviceGroupId?: number;
  startTime?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceGroupPersonSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
  fastScheduling?: GetServiceGroupSchedulingPreviewRequestFastScheduling;
  fineScheduling?: GetServiceGroupSchedulingPreviewRequestFineScheduling;
  schedulingWay?: string;
  serviceGroupId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceGroupSchedulingPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  serviceGroupId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceGroupSpecialPersonSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  createTime?: string;
  events?: string[];
  incidentId?: number;
  incidentTitle?: string;
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
  data?: GetSimilarIncidentStatisticsResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSimilarIncidentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: GetSubscriptionResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: GetTenantApplicationResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTenantApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTenantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: { [key: string]: any };
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserGuideStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  alertLevel?: string;
  alertName?: string;
  alertSourceName?: string;
  endTime?: string;
  monitorSourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  relatedServiceId?: number;
  ruleName?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListByMonitorSourceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
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
  data?: ListChartDataForServiceGroupResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChartDataForServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
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
  data?: ListChartDataForUserResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChartDataForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: { [key: string]: DataValue[] };
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  endTime?: string;
  serviceGroupName?: string;
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
  pageNumber?: number;
  pageSIze?: number;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataReportForServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataReportForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: { [key: string]: DataValue[] };
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDictionariesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: ListEscalationPlanServicesResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEscalationPlanServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  escalationPlanName?: string;
  isGlobal?: boolean;
  pageNumber?: number;
  pageSize?: number;
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
  data?: ListEscalationPlansResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEscalationPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEscalationPlansByNoticeObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: ListIncidentDetailEscalationPlansResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIncidentDetailEscalationPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  idSort?: string;
  incidentId?: number;
  pageNumber?: number;
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
  data?: ListIncidentDetailTimelinesResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIncidentDetailTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: ListIncidentSubtotalsResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIncidentSubtotalsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  pageNumber?: number;
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
  data?: ListIncidentTimelinesResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIncidentTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  createEndTime?: string;
  createStartTime?: string;
  effect?: string;
  incidentLevel?: string;
  incidentStatus?: string;
  me?: number;
  pageNumber?: number;
  pageSize?: number;
  relationServiceId?: number;
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
  data?: ListIncidentsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIncidentsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  integrationConfigId?: number;
  pageNumber?: number;
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
  data?: ListIntegrationConfigTimelinesResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIntegrationConfigTimelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: ListIntegrationConfigsResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIntegrationConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: ListMonitorSourcesResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMonitorSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  createTimeSort?: string;
  pageNumber?: number;
  pageSize?: number;
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
  data?: ListProblemDetailOperationsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProblemDetailOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  pageNumber?: number;
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
  data?: ListProblemOperationsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProblemOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: ListProblemSubtotalsResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProblemSubtotalsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProblemTimeLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  affectServiceId?: number;
  clientToken?: string;
  discoveryEndTime?: string;
  discoveryStartTime?: string;
  mainHandlerId?: number;
  pageNumber?: number;
  pageSize?: number;
  problemLevel?: string;
  problemStatus?: string;
  queryType?: string;
  repeaterId?: number;
  restoreEndTime?: string;
  restoreStartTime?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProblemsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  notFilterRouteRuleDeleted?: boolean;
  pageNumber?: number;
  pageSize?: number;
  routeType?: number;
  ruleName?: Buffer;
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRouteRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRouteRulesByAssignWhoIdResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRouteRulesByServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServiceGroupMonitorSourceTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  isScheduled?: boolean;
  orderByScheduleStatus?: boolean;
  pageNumber?: number;
  pageSize?: number;
  queryName?: string;
  queryType?: string;
  serviceId?: number;
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServiceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServiceGroupsByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  pageNumber?: number;
  pageSize?: number;
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  endTime?: string;
  instanceId?: number;
  instanceType?: string;
  pageNumber?: number;
  pageSize?: number;
  startRowKey?: string;
  startTime?: string;
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
  firstRowKey?: string;
  lastRowKey?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSourceEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSourceEventsForMonitorSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: ListSubscriptionServiceGroupsResponseBodyData[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubscriptionServiceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  notFilterScopeObjectDeleted?: boolean;
  notifyObject?: string;
  notifyObjectType?: string;
  pageNumber?: number;
  pageSize?: number;
  scope?: string;
  scopeObject?: string;
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
  data?: ListSubscriptionsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  endTime?: string;
  instanceId?: number;
  instanceType?: string;
  requestId?: string;
  startTime?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrendForSourceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  data?: ListUserSerivceGroupsResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserSerivceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  pageNumber?: number;
  pageSize?: number;
  phone?: string;
  ramId?: string;
  scene?: number;
  synergyChannel?: string;
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
  data?: ListUsersResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  data?: any;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  problemId?: number;
  problemNotifyType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RecoverProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RefreshIntegrationConfigKeyResponseBody extends $tea.Model {
  data?: RefreshIntegrationConfigKeyResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshIntegrationConfigKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveProblemServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  problemId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplayProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RespondIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  problemId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeProblemRecoveryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  escalationPlanDescription?: string;
  escalationPlanId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEscalationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  effect?: string;
  incidentId?: number;
  incidentLevel?: string;
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
  data?: UpdateIncidentResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIncidentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  accessKey?: string;
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIntegrationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  level?: string;
  mainHandlerId?: number;
  preliminaryReason?: string;
  problemId?: number;
  problemName?: string;
  progressSummary?: string;
  progressSummaryRichTextId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  description?: string;
  effectionServiceId?: number;
  level?: string;
  picUrl?: string[];
  problemId?: number;
  serviceId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemEffectionServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  customProblemReason?: string;
  discoverSource?: number;
  dutyDepartmentId?: number;
  dutyDepartmentName?: string;
  dutyUserId?: number;
  injectionMode?: string;
  monitorSourceName?: string;
  problemId?: number;
  problemReason?: string;
  recentActivity?: string;
  recoveryMode?: string;
  relationChanges?: string;
  remark?: string;
  replayDutyUserId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemImprovementResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  checkStandard?: string;
  checkUserId?: number;
  clientToken?: string;
  content?: string;
  directorId?: number;
  measureId?: number;
  planFinishTime?: string;
  problemId?: number;
  stalkerId?: number;
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemMeasureResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  problemId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  content?: string;
  keyNode?: string;
  problemId?: number;
  problemTimelineId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProblemTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  instanceId?: number;
  instanceType?: string;
  richText?: string;
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
  data?: UpdateRichTextResponseBodyData;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRichTextResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  assignObjectId?: number;
  assignObjectType?: string;
  childRuleRelation?: string;
  clientToken?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  effection?: string;
  incidentLevel?: string;
  matchCount?: number;
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: ProblemLevelGroupValue };
  relatedServiceId?: number;
  routeChildRules?: UpdateRouteRuleRequestRouteChildRules[];
  routeRuleId?: number;
  routeType?: string;
  ruleName?: string;
  timeWindow?: number;
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
  data?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  escalationPlanId?: number;
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  serviceId?: number;
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
  data?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  enableWebhook?: string;
  monitorSourceTemplates?: UpdateServiceGroupRequestMonitorSourceTemplates[];
  serviceGroupDescription?: string;
  serviceGroupId?: number;
  serviceGroupName?: string;
  userIds?: number[];
  webhookLink?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  fastScheduling?: UpdateServiceGroupSchedulingRequestFastScheduling;
  fineScheduling?: UpdateServiceGroupSchedulingRequestFineScheduling;
  schedulingWay?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceGroupSchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  schedulingDate?: string;
  schedulingSpecialDays?: UpdateServiceGroupSpecialDaySchedulingRequestSchedulingSpecialDays[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceGroupSpecialDaySchedulingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  endTime?: string;
  expiredType?: string;
  notifyObjectList?: UpdateSubscriptionRequestNotifyObjectList[];
  notifyObjectType?: string;
  notifyStrategyList?: UpdateSubscriptionRequestNotifyStrategyList[];
  period?: string;
  scope?: string;
  scopeObjectList?: UpdateSubscriptionRequestScopeObjectList[];
  startTime?: string;
  subscriptionId?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
  email?: string;
  phone?: string;
  ramId?: number;
  roleIdList?: number[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  clientToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserGuideStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyRouteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  effection?: string;
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
  enableWebhook?: boolean;
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjects?: number[];
  noticeRoleList?: number[];
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
  escalationPlanConditions?: CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanConditions[];
  escalationPlanStrategies?: CreateEscalationPlanRequestEscalationPlanRulesEscalationPlanStrategies[];
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
  scope?: string;
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
  instanceId?: number;
  instanceType?: number;
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
  key?: string;
  operationSymbol?: string;
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
  childConditionRelation?: number;
  conditions?: CreateRouteRuleRequestRouteChildRulesConditions[];
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
  monitorSourceId?: number;
  monitorSourceName?: string;
  templateContent?: string;
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
  schedulingOrder?: number;
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
  dutyPlan?: string;
  schedulingUsers?: CreateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers[];
  singleDuration?: number;
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
  cycleOrder?: number;
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  shiftName?: string;
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
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  schedulingUserName?: string;
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
  period?: number;
  periodUnit?: string;
  schedulingFineShifts?: CreateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: CreateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts[];
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
  nonWorkday?: string;
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
  action?: string;
  effection?: string;
  level?: string;
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
  channels?: string;
  instanceType?: number;
  periodChannel?: CreateSubscriptionRequestNotifyStrategyListPeriodChannel;
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
  openUrl?: string;
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
  key?: string;
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
  fileName?: string;
  fileSize?: number;
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
  fileName?: string;
  fileSize?: number;
  fileType?: string;
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
  accessKeyId?: string;
  bucketName?: string;
  files?: GeneratePictureUploadSignResponseBodyDataFiles[];
  policy?: string;
  signature?: string;
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
  key?: string;
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
  accessKeyId?: string;
  bucketName?: string;
  key?: string;
  policy?: string;
  signature?: string;
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
  effection?: string;
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
  noticeObjectId?: number;
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
  id?: number;
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
  enableWebhook?: boolean;
  escalationPlanType?: string;
  noticeChannels?: string;
  noticeObjectList?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeObjectList[];
  noticeObjects?: number[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: GetEscalationPlanResponseBodyDataEscalationPlanRulesEscalationPlanStrategiesNoticeRoleObjectList[];
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
  scope?: string;
  scopeObjectDeletedType?: number;
  scopeObjectId?: number;
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
  createTime?: string;
  escalationPlanDescription?: string;
  escalationPlanId?: number;
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
  eventJson?: string;
  eventTime?: string;
  monitorSourceId?: number;
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
  notifySubscriptionStatus?: boolean;
  serviceGroupStatus?: boolean;
  serviceStatus?: boolean;
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
  assignUserId?: number;
  assignUserName?: string;
  assignUserPhone?: string;
  createTime?: string;
  defaultAssignToWho?: number;
  defaultAssignToWhoIsValid?: number;
  defaultAssignToWhoName?: string;
  durationTime?: number;
  effect?: string;
  incidentDescription?: string;
  incidentId?: number;
  incidentLevel?: string;
  incidentNumber?: string;
  incidentStatus?: string;
  incidentTitle?: string;
  isManual?: boolean;
  isUpgrade?: boolean;
  notifyChannels?: string[];
  problemId?: number;
  problemNumber?: string;
  relRouteRuleDeleteType?: number;
  relServiceDeleteType?: number;
  relServiceGroupIsValid?: number;
  relatedServiceDescription?: string;
  relatedServiceGroupId?: number;
  relatedServiceGroupName?: string;
  relatedServiceId?: number;
  relatedServiceName?: string;
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
  assignToWhoIsValid?: number;
  assignUserId?: number;
  assignUserName?: string;
  assignUserPhone?: string;
  createTime?: string;
  defaultAssignToWho?: number;
  defaultAssignToWhoIsValid?: number;
  defaultAssignToWhoName?: string;
  durationTime?: string;
  effect?: string;
  incidentDescription?: string;
  incidentId?: number;
  incidentLevel?: string;
  incidentNumber?: string;
  incidentStatus?: string;
  incidentTitle?: string;
  isManual?: boolean;
  isUpgrade?: boolean;
  notifyChannels?: string[];
  problemId?: number;
  problemNumber?: string;
  relRouteRuleDeleteType?: number;
  relServiceDeleteType?: number;
  relServiceGroupIsValid?: number;
  relatedServiceDescription?: string;
  relatedServiceGroupId?: number;
  relatedServiceGroupName?: string;
  relatedServiceId?: number;
  relatedServiceName?: string;
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
  allFinish?: number;
  allResponse?: number;
  myFinish?: number;
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
  requestId?: string;
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
  accessKey?: string;
  integrationConfigId?: number;
  isReceivedEvent?: boolean;
  monitorSourceId?: number;
  monitorSourceName?: string;
  monitorSourceShortName?: string;
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
  actionName?: string;
  actionTime?: string;
  operator?: string;
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
  serviceGroupId?: number;
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
  description?: string;
  effectionLevel?: number;
  effectionServiceId?: number;
  effectionStatus?: number;
  serviceDeleteType?: number;
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
  actionName?: string;
  actionTime?: string;
  operator?: string;
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
  actionName?: string;
  actionTime?: string;
  operator?: string;
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
  actionName?: string;
  actionTime?: string;
  operator?: string;
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
  actionName?: string;
  actionTime?: string;
  operator?: string;
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
  cancelReason?: number;
  cancelReasonDescription?: string;
  coordinationGroups?: GetProblemResponseBodyDataCoordinationGroups[];
  createTime?: string;
  discoverTime?: string;
  durationTime?: number;
  effectionServices?: GetProblemResponseBodyDataEffectionServices[];
  feedback?: string;
  handingProblemOperateLogs?: GetProblemResponseBodyDataHandingProblemOperateLogs[];
  incidentId?: number;
  incidentNumber?: string;
  isRuleTrigger?: boolean;
  mainHandler?: number;
  mainHandlerId?: number;
  mainHandlerIsValid?: number;
  mainHandlerPhone?: string;
  preliminaryReason?: string;
  problemId?: number;
  problemLevel?: number;
  problemName?: string;
  problemNumber?: string;
  problemStatus?: number;
  progressSummary?: string;
  progressSummaryRichTextId?: number;
  recoveryTime?: string;
  relatedServiceId?: number;
  replayProblemOperateLogs?: GetProblemResponseBodyDataReplayProblemOperateLogs[];
  replayingProblemOperateLogs?: GetProblemResponseBodyDataReplayingProblemOperateLogs[];
  restoredProblemOperateLogs?: GetProblemResponseBodyDataRestoredProblemOperateLogs[];
  serviceDeleteType?: number;
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
  description?: string;
  effectionServiceId?: number;
  level?: number;
  picUrl?: string[];
  serviceId?: number;
  serviceName?: string;
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
  checkUserId?: number;
  checkUserIsValid?: number;
  checkUserName?: string;
  content?: string;
  directorId?: number;
  directorIsValid?: number;
  directorName?: string;
  measureId?: number;
  planFinishTime?: string;
  stalkerId?: number;
  stalkerIsValid?: number;
  stalkerName?: string;
  status?: string;
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
  discoverSource?: string;
  dutyDepartmentId?: string;
  dutyDepartmentName?: string;
  dutyUserId?: number;
  dutyUserIsValid?: number;
  dutyUserName?: string;
  dutyUserPhone?: string;
  injectionMode?: string;
  isManual?: boolean;
  measureList?: GetProblemImprovementResponseBodyDataMeasureList[];
  monitorSourceName?: string;
  problemId?: string;
  problemReason?: string;
  recentActivity?: string;
  recoveryMode?: string;
  relationChanges?: string;
  remark?: string;
  replayDutyUserId?: number;
  replayDutyUserIsValid?: number;
  replayDutyUserName?: string;
  replayDutyUserPhone?: string;
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
  createTime?: string;
  discoverTime?: string;
  effectionServices?: GetProblemPreviewResponseBodyDataProblemEffectionServices[];
  isManual?: boolean;
  isUpgrade?: boolean;
  mainHandlerId?: string;
  mainHandlerName?: string;
  preliminaryReason?: string;
  problemId?: number;
  problemLevel?: string;
  problemName?: string;
  problemStatus?: string;
  progressSummary?: string;
  progressSummaryRichTextId?: number;
  recoveryTime?: string;
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
  problem?: GetProblemPreviewResponseBodyDataProblem;
  sms?: GetProblemPreviewResponseBodyDataSms;
  upAfterData?: string;
  upBeforeData?: string;
  voice?: GetProblemPreviewResponseBodyDataVoice;
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
  alertCount?: number;
  incidentCount?: number;
  integrationCount?: number;
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
  instanceId?: number;
  instanceType?: number;
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
  key?: string;
  operationSymbol?: string;
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
  childConditionRelation?: number;
  childRouteRuleId?: number;
  conditions?: GetRouteRuleResponseBodyDataEventRouteChildRulesConditions[];
  isValidChildRule?: boolean;
  monitorIntegrationConfigId?: number;
  monitorSourceId?: number;
  monitorSourceName?: string;
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
  assignObjectId?: number;
  assignObjectName?: string;
  assignObjectType?: string;
  childRuleRelation?: string;
  convergenceFields?: string[];
  convergenceType?: number;
  coverageProblemLevels?: string[];
  createTime?: string;
  effection?: string;
  enableStatus?: string;
  eventRouteChildRules?: GetRouteRuleResponseBodyDataEventRouteChildRules[];
  incidentLevel?: string;
  matchCount?: number;
  notifyChannelNames?: string[];
  notifyChannels?: string[];
  problemEffectionServices?: number[];
  problemLevelGroup?: { [key: string]: DataProblemLevelGroupValue };
  relServiceDeleteType?: number;
  relatedServiceId?: number;
  relatedServiceName?: string;
  routeRuleId?: number;
  routeType?: string;
  ruleName?: string;
  timeWindow?: number;
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
  escalationPlanId?: number;
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  serviceId?: number;
  serviceName?: string;
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
  phone?: string;
  roleNameList?: string[];
  serviceGroupId?: number;
  userId?: number;
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
  createTime?: string;
  enableWebhook?: string;
  serviceGroupDescription?: string;
  serviceGroupId?: number;
  serviceGroupName?: string;
  updateTime?: string;
  users?: GetServiceGroupResponseBodyDataUsers[];
  webhookLink?: string;
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
  schedulingOrder?: number;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
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
  dutyPlan?: string;
  id?: number;
  schedulingUsers?: GetServiceGroupSchedulingResponseBodyDataFastSchedulingSchedulingUsers[];
  singleDuration?: number;
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
  cycleOrder?: number;
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  schedulingUserName?: string;
  shiftName?: string;
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
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: string;
  schedulingUserIdList?: number[];
  schedulingUserName?: string;
  shiftName?: string;
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
  id?: number;
  period?: number;
  periodUnit?: string;
  schedulingFineShifts?: GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: GetServiceGroupSchedulingResponseBodyDataFineSchedulingSchedulingTemplateFineShifts[];
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
  schedulingWay?: string;
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
  schedulingOrder?: number;
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
  dutyPlan?: string;
  schedulingUsers?: GetServiceGroupSchedulingPreviewRequestFastSchedulingSchedulingUsers[];
  singleDuration?: number;
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
  schedulingEndTime?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
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
  period?: number;
  periodUnit?: string;
  schedulingFineShifts?: GetServiceGroupSchedulingPreviewRequestFineSchedulingSchedulingFineShifts[];
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
  schedulingDate?: string;
  schedulingEndTime?: string;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  serviceGroupId?: number;
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
  assignUserId?: number;
  assignUserName?: string;
  createTime?: string;
  durationTime?: number;
  finishReason?: number;
  finishReasonDescription?: string;
  finishSolutionDescription?: string;
  incidentFinishSolution?: number;
  incidentId?: number;
  incidentNumber?: string;
  incidentTitle?: string;
  relatedRouteRuleId?: number;
  relatedRouteRuleName?: string;
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
  commitment?: number;
  date?: string;
  day?: number;
  month?: number;
  similarIncidents?: GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidentsSimilarIncidents[];
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
  assignUserId?: string;
  assignUserName?: string;
  createTime?: string;
  durationTime?: number;
  finishReason?: number;
  finishReasonDescription?: string;
  finishSolutionDescription?: string;
  incidentFinishSolution?: number;
  incidentId?: number;
  incidentNumber?: string;
  incidentTitle?: string;
  relatedRouteRuleId?: number;
  relatedRouteRuleName?: string;
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
  countInSevenDays?: number;
  countInSixMonths?: number;
  dailySimilarIncidents?: GetSimilarIncidentStatisticsResponseBodyDataDailySimilarIncidents[];
  requestId?: string;
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
  id?: number;
  name?: string;
  notifyObjectId?: number;
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
  action?: string;
  effection?: string;
  level?: string;
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
  nonWorkday?: string;
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
  channels?: string;
  conditions?: GetSubscriptionResponseBodyDataNotifyStrategyListStrategiesConditions[];
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
  id?: number;
  isValid?: number;
  scope?: string;
  scopeObject?: string;
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
  endTime?: string;
  expiredType?: string;
  notifyObjectList?: GetSubscriptionResponseBodyDataNotifyObjectList[];
  notifyObjectType?: string;
  notifyStrategyList?: GetSubscriptionResponseBodyDataNotifyStrategyList[];
  period?: string;
  scope?: string;
  scopeObjectList?: GetSubscriptionResponseBodyDataScopeObjectList[];
  startTime?: string;
  status?: string;
  subscriptionId?: number;
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
  bizId?: string;
  channel?: string;
  corporationId?: string;
  originalCorpId?: string;
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
  name?: string;
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
  accountType?: string;
  createTime?: string;
  email?: string;
  isEditableUser?: boolean;
  isRelated?: string;
  phone?: string;
  ramId?: string;
  roleIdList?: number[];
  roleNameList?: string[];
  serviceGroups?: GetUserResponseBodyDataServiceGroups[];
  userId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'accountType',
      createTime: 'createTime',
      email: 'email',
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
  alertId?: number;
  alertLevel?: string;
  alertNumber?: string;
  alertSourceName?: string;
  createTime?: string;
  firstEventTime?: string;
  monitorSourceName?: string;
  relServiceDeleteType?: number;
  relatedServiceName?: string;
  routeRuleDeleteType?: number;
  routeRuleId?: number;
  routeRuleName?: string;
  sourceEventCount?: number;
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
  effectionLevel?: { [key: string]: any };
  escalationIncidentCount?: number;
  incidentCount?: number;
  meanTimeToAcknowledge?: number;
  meanTimeToRepair?: number;
  time?: string;
  totalMeanTimeToAcknowledge?: number;
  totalMeanTimeToRepair?: number;
  unAcknowledgedEscalationIncidentCount?: number;
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
  effectionLevel?: { [key: string]: any };
  escalationIncidentCount?: number;
  incidentCount?: number;
  meanTimeToAcknowledge?: number;
  meanTimeToRepair?: number;
  time?: string;
  totalMeanTimeToAcknowledge?: number;
  totalMeanTimeToRepair?: number;
  unAcknowledgedEscalationIncidentCount?: number;
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
  escalationIncidentCount?: number;
  finishIncidentCount?: number;
  finishProportion?: string;
  incidentCount?: number;
  meanTimeToAcknowledge?: number;
  meanTimeToRepair?: number;
  serviceGroupId?: number;
  serviceGroupName?: string;
  unAcknowledgedEscalationIncidentCount?: number;
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
  distributionIncidentCount?: number;
  escalationIncidentCount?: number;
  finishIncidentNumber?: number;
  finishProportion?: string;
  meanTimeToAcknowledge?: string;
  meanTimeToRepair?: string;
  unAcknowledgedEscalationIncidentCount?: number;
  unDistributionIncidentCount?: number;
  unFinishEscalationIncidentCount?: number;
  userId?: number;
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
  scope?: string;
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

export class ListEscalationPlansResponseBodyData extends $tea.Model {
  escalationPlanId?: number;
  escalationPlanName?: string;
  escalationPlanScopeObjects?: ListEscalationPlansResponseBodyDataEscalationPlanScopeObjects[];
  isGlobal?: boolean;
  modifyTime?: string;
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
  noticeObjectId?: number;
  noticeObjectName?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlan extends $tea.Model {
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanNoticeObjectList[];
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataConvergenceEscalationPlanServiceGroupList[];
  startTime?: number;
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
  noticeObjectId?: number;
  noticeObjectName?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlan extends $tea.Model {
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeObjectList[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanNoticeRoleObjectList[];
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataNuAcknowledgeEscalationPlanServiceGroupList[];
  startTime?: number;
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
  noticeObjectId?: number;
  noticeObjectName?: string;
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

export class ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlan extends $tea.Model {
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeObjectList[];
  noticeRoleList?: number[];
  noticeRoleObjectList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanNoticeRoleObjectList[];
  noticeTime?: number;
  serviceGroupList?: ListIncidentDetailEscalationPlansResponseBodyDataUnFinishEscalationPlanServiceGroupList[];
  startTime?: number;
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
  escalationPlanId?: number;
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
  createTime?: string;
  createUserId?: number;
  createUserName?: string;
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
  action?: string;
  createTime?: string;
  description?: number;
  incidentId?: number;
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
  assignUserId?: number;
  assignUserName?: string;
  assignUserPhone?: string;
  createTime?: string;
  effect?: string;
  incidentId?: number;
  incidentLevel?: string;
  incidentNumber?: string;
  incidentStatus?: string;
  incidentTitle?: string;
  isManual?: boolean;
  relRouteRuleDeleteType?: number;
  relServiceDeleteType?: number;
  relatedServiceId?: number;
  relatedServiceName?: string;
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
  integrationConfigId?: number;
  isReceivedEvent?: boolean;
  monitorSourceId?: number;
  monitorSourceName?: string;
  monitorSourceShortName?: string;
  monitorSourceType?: number;
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
  monitorSourceId?: number;
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
  action?: string;
  createTime?: string;
  description?: string;
  relatedServiceName?: string;
  remark?: string;
  snapshotData?: string;
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
  action?: string;
  createTime?: string;
  description?: string;
  problemId?: number;
  problemName?: string;
  problemNumber?: string;
  relatedServiceName?: string;
  snapshotData?: string;
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
  createTime?: string;
  createUserId?: number;
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
  userId?: number;
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
  content?: string;
  createTime?: string;
  isKey?: boolean;
  keyNode?: string;
  problemTimelineId?: number;
  time?: string;
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
  serviceDescription?: string;
  serviceId?: number;
  serviceName?: string;
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
  cancelTime?: string;
  createTime?: string;
  discoverTime?: string;
  finishTime?: string;
  incidentId?: number;
  isManual?: boolean;
  isUpgrade?: boolean;
  mainHandlerId?: number;
  mainHandlerIsValid?: number;
  mainHandlerName?: string;
  problemId?: number;
  problemLevel?: string;
  problemName?: string;
  problemNumber?: string;
  problemStatus?: string;
  recoveryTime?: string;
  relatedServiceId?: string;
  replayTime?: string;
  serviceDeletedType?: number;
  serviceName?: string;
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
  assignObjectId?: number;
  assignObjectType?: string;
  createTime?: string;
  effection?: string;
  enableStatus?: string;
  incidentLevel?: string;
  isValid?: number;
  matchCount?: number;
  monitorSourceNames?: string;
  relServiceDeleteType?: number;
  relatedServiceId?: number;
  relatedServiceName?: string;
  routeRuleId?: number;
  routeType?: string;
  ruleName?: string;
  tenantRamId?: number;
  timeWindow?: number;
  timeWindowUnit?: number;
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
  monitorSourceId?: number;
  monitorSourceName?: string;
  templateContent?: string;
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
  email?: string;
  isRelated?: number;
  phone?: string;
  serviceGroupId?: number;
  userId?: number;
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
  enableWebhook?: string;
  isScheduled?: boolean;
  serviceGroupDescription?: string;
  serviceGroupId?: number;
  serviceGroupName?: string;
  updateTime?: string;
  users?: ListServiceGroupsResponseBodyDataUsers[];
  webhookLink?: string;
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
  serviceDescription?: string;
  serviceGroupIdList?: number[];
  serviceId?: number;
  serviceName?: string;
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
  eventJson?: string;
  eventTime?: string;
  instanceId?: number;
  instanceType?: string;
  monitorSourceId?: number;
  monitorSourceName?: string;
  routeRuleId?: number;
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
  eventJson?: string;
  eventTime?: string;
  monitorSourceId?: boolean;
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
  id?: number;
  isValid?: number;
  name?: string;
  notifyObjectId?: number;
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
  id?: number;
  isValid?: number;
  scope?: number;
  scopeObject?: string;
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
  endTime?: string;
  expiredType?: string;
  notifyObjectList?: ListSubscriptionsResponseBodyDataNotifyObjectList[];
  notifyObjectType?: number;
  scope?: number;
  scopeObjectList?: ListSubscriptionsResponseBodyDataScopeObjectList[];
  startTime?: string;
  status?: string;
  subscriptionId?: number;
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
  convergenceRate?: string;
  maxSustainTime?: number;
  skipDay?: boolean;
  sourceEventsStatMap?: { [key: string]: any };
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
  serviceGroupDescription?: string;
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

export class ListUserSerivceGroupsResponseBodyData extends $tea.Model {
  email?: string;
  phone?: string;
  ramId?: number;
  serviceGroups?: ListUserSerivceGroupsResponseBodyDataServiceGroups[];
  userId?: number;
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
  accountType?: number;
  appAccount?: string;
  email?: string;
  isEditableUser?: number;
  isOperation?: number;
  isRam?: number;
  isRelated?: string;
  phone?: string;
  ramId?: number;
  roleIdList?: number[];
  roleNameList?: string[];
  synergyChannel?: string;
  userId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'accountType',
      appAccount: 'appAccount',
      email: 'email',
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
  effection?: string;
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
  enableWebhook?: boolean;
  escalationPlanType?: string;
  noticeChannels?: string[];
  noticeObjects?: number[];
  noticeRoleList?: number[];
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
  escalationPlanType?: string;
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
  id?: number;
  scope?: string;
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
  key?: string;
  operationSymbol?: string;
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
  childConditionRelation?: number;
  childRouteRuleId?: number;
  conditions?: UpdateRouteRuleRequestRouteChildRulesConditions[];
  isValidChildRule?: boolean;
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
  monitorSourceId?: number;
  monitorSourceName?: string;
  templateContent?: string;
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
  schedulingOrder?: number;
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
  dutyPlan?: string;
  id?: number;
  schedulingUsers?: UpdateServiceGroupSchedulingRequestFastSchedulingSchedulingUsers[];
  singleDuration?: number;
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
  cycleOrder?: number;
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  shiftName?: string;
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
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
  schedulingUserId?: number;
  schedulingUserIdList?: number[];
  shiftName?: string;
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
  id?: number;
  period?: number;
  periodUnit?: string;
  schedulingFineShifts?: UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingFineShifts[];
  schedulingTemplateFineShifts?: UpdateServiceGroupSchedulingRequestFineSchedulingSchedulingTemplateFineShifts[];
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
  schedulingEndTime?: string;
  schedulingObjectType?: string;
  schedulingOrder?: number;
  schedulingStartTime?: string;
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
  id?: number;
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
  action?: string;
  effection?: string;
  level?: string;
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
  nonWorkday?: string;
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
  channels?: string;
  conditions?: UpdateSubscriptionRequestNotifyStrategyListStrategiesConditions[];
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
  instanceType?: number;
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
  id?: number;
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
  eventJson?: string;
  eventTime?: string;
  monitorSourceId?: number;
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
  escalationPlanId?: number;
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
  subscriptionId?: number;
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
  isValidRule?: boolean;
  monitorSourceIds?: number[];
  notifySubscriptionNames?: VerifyRouteRuleResponseBodyDataNotifySubscriptionNames[];
  routeRuleFailReason?: string[];
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

  async addProblemServiceGroup(request: AddProblemServiceGroupRequest): Promise<AddProblemServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addProblemServiceGroupWithOptions(request, headers, runtime);
  }

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

  async billingStatistics(): Promise<BillingStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.billingStatisticsWithOptions(headers, runtime);
  }

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

  async cancelProblem(request: CancelProblemRequest): Promise<CancelProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelProblemWithOptions(request, headers, runtime);
  }

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

  async checkWebhook(request: CheckWebhookRequest): Promise<CheckWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkWebhookWithOptions(request, headers, runtime);
  }

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

  async confirmIntegrationConfig(request: ConfirmIntegrationConfigRequest): Promise<ConfirmIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async createEscalationPlan(request: CreateEscalationPlanRequest): Promise<CreateEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async createIncident(request: CreateIncidentRequest): Promise<CreateIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIncidentWithOptions(request, headers, runtime);
  }

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

  async createIncidentSubtotal(request: CreateIncidentSubtotalRequest): Promise<CreateIncidentSubtotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIncidentSubtotalWithOptions(request, headers, runtime);
  }

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

  async createIntegrationConfig(request: CreateIntegrationConfigRequest): Promise<CreateIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async createProblem(request: CreateProblemRequest): Promise<CreateProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemWithOptions(request, headers, runtime);
  }

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

  async createProblemEffectionService(request: CreateProblemEffectionServiceRequest): Promise<CreateProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemEffectionServiceWithOptions(request, headers, runtime);
  }

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

  async createProblemMeasure(request: CreateProblemMeasureRequest): Promise<CreateProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemMeasureWithOptions(request, headers, runtime);
  }

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

  async createProblemSubtotal(request: CreateProblemSubtotalRequest): Promise<CreateProblemSubtotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemSubtotalWithOptions(request, headers, runtime);
  }

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

  async createProblemTimeline(request: CreateProblemTimelineRequest): Promise<CreateProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemTimelineWithOptions(request, headers, runtime);
  }

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

  async createProblemTimelines(request: CreateProblemTimelinesRequest): Promise<CreateProblemTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProblemTimelinesWithOptions(request, headers, runtime);
  }

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

  async createRichText(request: CreateRichTextRequest): Promise<CreateRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRichTextWithOptions(request, headers, runtime);
  }

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

  async createRouteRule(request: CreateRouteRuleRequest): Promise<CreateRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRouteRuleWithOptions(request, headers, runtime);
  }

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

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

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

  async createServiceGroup(request: CreateServiceGroupRequest): Promise<CreateServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceGroupWithOptions(request, headers, runtime);
  }

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

  async createServiceGroupScheduling(request: CreateServiceGroupSchedulingRequest): Promise<CreateServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

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

  async createSubscription(request: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubscriptionWithOptions(request, headers, runtime);
  }

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

  async createTenantApplication(request: CreateTenantApplicationRequest): Promise<CreateTenantApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTenantApplicationWithOptions(request, headers, runtime);
  }

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

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

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

  async deleteEscalationPlan(request: DeleteEscalationPlanRequest): Promise<DeleteEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async deleteIncident(request: DeleteIncidentRequest): Promise<DeleteIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIncidentWithOptions(request, headers, runtime);
  }

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

  async deleteIntegrationConfig(request: DeleteIntegrationConfigRequest): Promise<DeleteIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async deleteProblem(request: DeleteProblemRequest): Promise<DeleteProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemWithOptions(request, headers, runtime);
  }

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

  async deleteProblemEffectionService(request: DeleteProblemEffectionServiceRequest): Promise<DeleteProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemEffectionServiceWithOptions(request, headers, runtime);
  }

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

  async deleteProblemMeasure(request: DeleteProblemMeasureRequest): Promise<DeleteProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemMeasureWithOptions(request, headers, runtime);
  }

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

  async deleteProblemTimeline(request: DeleteProblemTimelineRequest): Promise<DeleteProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProblemTimelineWithOptions(request, headers, runtime);
  }

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

  async deleteRouteRule(request: DeleteRouteRuleRequest): Promise<DeleteRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRouteRuleWithOptions(request, headers, runtime);
  }

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

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(request, headers, runtime);
  }

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

  async deleteServiceGroup(request: DeleteServiceGroupRequest): Promise<DeleteServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupWithOptions(request, headers, runtime);
  }

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

  async deleteServiceGroupScheduling(): Promise<DeleteServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupSchedulingWithOptions(headers, runtime);
  }

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

  async deleteServiceGroupUser(request: DeleteServiceGroupUserRequest): Promise<DeleteServiceGroupUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupUserWithOptions(request, headers, runtime);
  }

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

  async deleteSubscription(request: DeleteSubscriptionRequest): Promise<DeleteSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubscriptionWithOptions(request, headers, runtime);
  }

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

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(request, headers, runtime);
  }

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

  async deliverIncident(request: DeliverIncidentRequest): Promise<DeliverIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deliverIncidentWithOptions(request, headers, runtime);
  }

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

  async disableEscalationPlan(request: DisableEscalationPlanRequest): Promise<DisableEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async disableIntegrationConfig(request: DisableIntegrationConfigRequest): Promise<DisableIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async disableRouteRule(request: DisableRouteRuleRequest): Promise<DisableRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableRouteRuleWithOptions(request, headers, runtime);
  }

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

  async disableServiceGroupWebhook(request: DisableServiceGroupWebhookRequest): Promise<DisableServiceGroupWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableServiceGroupWebhookWithOptions(request, headers, runtime);
  }

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

  async disableSubscription(request: DisableSubscriptionRequest): Promise<DisableSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSubscriptionWithOptions(request, headers, runtime);
  }

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

  async enableEscalationPlan(request: EnableEscalationPlanRequest): Promise<EnableEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async enableIntegrationConfig(request: EnableIntegrationConfigRequest): Promise<EnableIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async enableRouteRule(request: EnableRouteRuleRequest): Promise<EnableRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableRouteRuleWithOptions(request, headers, runtime);
  }

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

  async enableServiceGroupWebhook(request: EnableServiceGroupWebhookRequest): Promise<EnableServiceGroupWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableServiceGroupWebhookWithOptions(request, headers, runtime);
  }

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

  async enableSubscription(request: EnableSubscriptionRequest): Promise<EnableSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSubscriptionWithOptions(request, headers, runtime);
  }

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

  async finishIncident(request: FinishIncidentRequest): Promise<FinishIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishIncidentWithOptions(request, headers, runtime);
  }

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

  async finishProblem(request: FinishProblemRequest): Promise<FinishProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.finishProblemWithOptions(request, headers, runtime);
  }

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

  async generatePictureLink(request: GeneratePictureLinkRequest): Promise<GeneratePictureLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generatePictureLinkWithOptions(request, headers, runtime);
  }

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

  async generatePictureUploadSign(request: GeneratePictureUploadSignRequest): Promise<GeneratePictureUploadSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generatePictureUploadSignWithOptions(request, headers, runtime);
  }

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

  async generateProblemPictureLink(request: GenerateProblemPictureLinkRequest): Promise<GenerateProblemPictureLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateProblemPictureLinkWithOptions(request, headers, runtime);
  }

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

  async generateProblemPictureUploadSign(request: GenerateProblemPictureUploadSignRequest): Promise<GenerateProblemPictureUploadSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateProblemPictureUploadSignWithOptions(request, headers, runtime);
  }

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

  async getEscalationPlan(request: GetEscalationPlanRequest): Promise<GetEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async getEvent(request: GetEventRequest): Promise<GetEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEventWithOptions(request, headers, runtime);
  }

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

  async getHomePageGuidance(request: GetHomePageGuidanceRequest): Promise<GetHomePageGuidanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHomePageGuidanceWithOptions(request, headers, runtime);
  }

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

  async getIncident(request: GetIncidentRequest): Promise<GetIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentWithOptions(request, headers, runtime);
  }

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

  async getIncidentListByIdList(request: GetIncidentListByIdListRequest): Promise<GetIncidentListByIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentListByIdListWithOptions(request, headers, runtime);
  }

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

  async getIncidentStatistics(request: GetIncidentStatisticsRequest): Promise<GetIncidentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentStatisticsWithOptions(request, headers, runtime);
  }

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

  async getIncidentSubtotalCount(request: GetIncidentSubtotalCountRequest): Promise<GetIncidentSubtotalCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIncidentSubtotalCountWithOptions(request, headers, runtime);
  }

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

  async getIntegrationConfig(request: GetIntegrationConfigRequest): Promise<GetIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async getProblem(request: GetProblemRequest): Promise<GetProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemWithOptions(request, headers, runtime);
  }

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

  async getProblemEffectionService(request: GetProblemEffectionServiceRequest): Promise<GetProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemEffectionServiceWithOptions(request, headers, runtime);
  }

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

  async getProblemImprovement(request: GetProblemImprovementRequest): Promise<GetProblemImprovementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemImprovementWithOptions(request, headers, runtime);
  }

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

  async getProblemPreview(request: GetProblemPreviewRequest): Promise<GetProblemPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemPreviewWithOptions(request, headers, runtime);
  }

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

  async getResourceStatistics(request: GetResourceStatisticsRequest): Promise<GetResourceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceStatisticsWithOptions(request, headers, runtime);
  }

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

  async getRichText(request: GetRichTextRequest): Promise<GetRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRichTextWithOptions(request, headers, runtime);
  }

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

  async getRouteRule(request: GetRouteRuleRequest): Promise<GetRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRouteRuleWithOptions(request, headers, runtime);
  }

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

  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(request, headers, runtime);
  }

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

  async getServiceGroup(request: GetServiceGroupRequest): Promise<GetServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupWithOptions(request, headers, runtime);
  }

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

  async getServiceGroupPersonScheduling(request: GetServiceGroupPersonSchedulingRequest): Promise<GetServiceGroupPersonSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupPersonSchedulingWithOptions(request, headers, runtime);
  }

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

  async getServiceGroupScheduling(request: GetServiceGroupSchedulingRequest): Promise<GetServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

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

  async getServiceGroupSchedulingPreview(request: GetServiceGroupSchedulingPreviewRequest): Promise<GetServiceGroupSchedulingPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSchedulingPreviewWithOptions(request, headers, runtime);
  }

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

  async getServiceGroupSpecialPersonScheduling(request: GetServiceGroupSpecialPersonSchedulingRequest): Promise<GetServiceGroupSpecialPersonSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceGroupSpecialPersonSchedulingWithOptions(request, headers, runtime);
  }

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

  async getSimilarIncidentStatistics(request: GetSimilarIncidentStatisticsRequest): Promise<GetSimilarIncidentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarIncidentStatisticsWithOptions(request, headers, runtime);
  }

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

  async getSubscription(request: GetSubscriptionRequest): Promise<GetSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubscriptionWithOptions(request, headers, runtime);
  }

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

  async getTenantApplication(request: GetTenantApplicationRequest): Promise<GetTenantApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantApplicationWithOptions(request, headers, runtime);
  }

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

  async getTenantStatus(request: GetTenantStatusRequest): Promise<GetTenantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantStatusWithOptions(request, headers, runtime);
  }

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

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

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

  async getUserGuideStatus(request: GetUserGuideStatusRequest): Promise<GetUserGuideStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserGuideStatusWithOptions(request, headers, runtime);
  }

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

  async listAlerts(request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertsWithOptions(request, headers, runtime);
  }

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

  async listByMonitorSourceId(request: ListByMonitorSourceIdRequest): Promise<ListByMonitorSourceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listByMonitorSourceIdWithOptions(request, headers, runtime);
  }

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

  async listChartDataForServiceGroup(request: ListChartDataForServiceGroupRequest): Promise<ListChartDataForServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChartDataForServiceGroupWithOptions(request, headers, runtime);
  }

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

  async listChartDataForUser(request: ListChartDataForUserRequest): Promise<ListChartDataForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChartDataForUserWithOptions(request, headers, runtime);
  }

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

  async listConfigs(request: ListConfigsRequest): Promise<ListConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(request, headers, runtime);
  }

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

  async listDataReportForServiceGroup(request: ListDataReportForServiceGroupRequest): Promise<ListDataReportForServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataReportForServiceGroupWithOptions(request, headers, runtime);
  }

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

  async listDataReportForUser(request: ListDataReportForUserRequest): Promise<ListDataReportForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataReportForUserWithOptions(request, headers, runtime);
  }

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

  async listDictionaries(request: ListDictionariesRequest): Promise<ListDictionariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictionariesWithOptions(request, headers, runtime);
  }

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

  async listEscalationPlanServices(request: ListEscalationPlanServicesRequest): Promise<ListEscalationPlanServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlanServicesWithOptions(request, headers, runtime);
  }

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

  async listEscalationPlans(request: ListEscalationPlansRequest): Promise<ListEscalationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlansWithOptions(request, headers, runtime);
  }

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

  async listEscalationPlansByNoticeObject(request: ListEscalationPlansByNoticeObjectRequest): Promise<ListEscalationPlansByNoticeObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEscalationPlansByNoticeObjectWithOptions(request, headers, runtime);
  }

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

  async listIncidentDetailEscalationPlans(request: ListIncidentDetailEscalationPlansRequest): Promise<ListIncidentDetailEscalationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentDetailEscalationPlansWithOptions(request, headers, runtime);
  }

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

  async listIncidentDetailTimelines(request: ListIncidentDetailTimelinesRequest): Promise<ListIncidentDetailTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentDetailTimelinesWithOptions(request, headers, runtime);
  }

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

  async listIncidentSubtotals(request: ListIncidentSubtotalsRequest): Promise<ListIncidentSubtotalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentSubtotalsWithOptions(request, headers, runtime);
  }

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

  async listIncidentTimelines(request: ListIncidentTimelinesRequest): Promise<ListIncidentTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentTimelinesWithOptions(request, headers, runtime);
  }

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

  async listIncidents(request: ListIncidentsRequest): Promise<ListIncidentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIncidentsWithOptions(request, headers, runtime);
  }

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

  async listIntegrationConfigTimelines(request: ListIntegrationConfigTimelinesRequest): Promise<ListIntegrationConfigTimelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationConfigTimelinesWithOptions(request, headers, runtime);
  }

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

  async listIntegrationConfigs(request: ListIntegrationConfigsRequest): Promise<ListIntegrationConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIntegrationConfigsWithOptions(request, headers, runtime);
  }

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

  async listMonitorSources(request: ListMonitorSourcesRequest): Promise<ListMonitorSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMonitorSourcesWithOptions(request, headers, runtime);
  }

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

  async listProblemDetailOperations(request: ListProblemDetailOperationsRequest): Promise<ListProblemDetailOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemDetailOperationsWithOptions(request, headers, runtime);
  }

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

  async listProblemOperations(request: ListProblemOperationsRequest): Promise<ListProblemOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemOperationsWithOptions(request, headers, runtime);
  }

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

  async listProblemSubtotals(request: ListProblemSubtotalsRequest): Promise<ListProblemSubtotalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemSubtotalsWithOptions(request, headers, runtime);
  }

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

  async listProblemTimeLines(request: ListProblemTimeLinesRequest): Promise<ListProblemTimeLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemTimeLinesWithOptions(request, headers, runtime);
  }

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

  async listProblems(request: ListProblemsRequest): Promise<ListProblemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProblemsWithOptions(request, headers, runtime);
  }

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

  async listRouteRules(request: ListRouteRulesRequest): Promise<ListRouteRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesWithOptions(request, headers, runtime);
  }

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

  async listRouteRulesByAssignWhoId(request: ListRouteRulesByAssignWhoIdRequest): Promise<ListRouteRulesByAssignWhoIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesByAssignWhoIdWithOptions(request, headers, runtime);
  }

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

  async listRouteRulesByService(): Promise<ListRouteRulesByServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRouteRulesByServiceWithOptions(headers, runtime);
  }

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

  async listServiceGroupMonitorSourceTemplates(request: ListServiceGroupMonitorSourceTemplatesRequest): Promise<ListServiceGroupMonitorSourceTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupMonitorSourceTemplatesWithOptions(request, headers, runtime);
  }

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

  async listServiceGroups(request: ListServiceGroupsRequest): Promise<ListServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsWithOptions(request, headers, runtime);
  }

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

  async listServiceGroupsByUserId(): Promise<ListServiceGroupsByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsByUserIdWithOptions(headers, runtime);
  }

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

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

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

  async listSourceEvents(request: ListSourceEventsRequest): Promise<ListSourceEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSourceEventsWithOptions(request, headers, runtime);
  }

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

  async listSourceEventsForMonitorSource(request: ListSourceEventsForMonitorSourceRequest): Promise<ListSourceEventsForMonitorSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSourceEventsForMonitorSourceWithOptions(request, headers, runtime);
  }

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

  async listSubscriptionServiceGroups(request: ListSubscriptionServiceGroupsRequest): Promise<ListSubscriptionServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscriptionServiceGroupsWithOptions(request, headers, runtime);
  }

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

  async listSubscriptions(request: ListSubscriptionsRequest): Promise<ListSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubscriptionsWithOptions(request, headers, runtime);
  }

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

  async listTrendForSourceEvent(request: ListTrendForSourceEventRequest): Promise<ListTrendForSourceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrendForSourceEventWithOptions(request, headers, runtime);
  }

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

  async listUserSerivceGroups(request: ListUserSerivceGroupsRequest): Promise<ListUserSerivceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserSerivceGroupsWithOptions(request, headers, runtime);
  }

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

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

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

  async pushMonitor(apiKey: string, request: PushMonitorRequest): Promise<PushMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushMonitorWithOptions(apiKey, request, headers, runtime);
  }

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

  async recoverProblem(request: RecoverProblemRequest): Promise<RecoverProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverProblemWithOptions(request, headers, runtime);
  }

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

  async refreshIntegrationConfigKey(request: RefreshIntegrationConfigKeyRequest): Promise<RefreshIntegrationConfigKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshIntegrationConfigKeyWithOptions(request, headers, runtime);
  }

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

  async removeIntegrationConfig(request: RemoveIntegrationConfigRequest): Promise<RemoveIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async removeProblemServiceGroup(request: RemoveProblemServiceGroupRequest): Promise<RemoveProblemServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeProblemServiceGroupWithOptions(request, headers, runtime);
  }

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

  async replayProblem(request: ReplayProblemRequest): Promise<ReplayProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replayProblemWithOptions(request, headers, runtime);
  }

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

  async respondIncident(request: RespondIncidentRequest): Promise<RespondIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.respondIncidentWithOptions(request, headers, runtime);
  }

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

  async revokeProblemRecovery(request: RevokeProblemRecoveryRequest): Promise<RevokeProblemRecoveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeProblemRecoveryWithOptions(request, headers, runtime);
  }

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

  async unbindUser(): Promise<UnbindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindUserWithOptions(headers, runtime);
  }

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

  async updateEscalationPlan(request: UpdateEscalationPlanRequest): Promise<UpdateEscalationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEscalationPlanWithOptions(request, headers, runtime);
  }

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

  async updateIncident(request: UpdateIncidentRequest): Promise<UpdateIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIncidentWithOptions(request, headers, runtime);
  }

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

  async updateIntegrationConfig(request: UpdateIntegrationConfigRequest): Promise<UpdateIntegrationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIntegrationConfigWithOptions(request, headers, runtime);
  }

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

  async updateProblem(request: UpdateProblemRequest): Promise<UpdateProblemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemWithOptions(request, headers, runtime);
  }

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

  async updateProblemEffectionService(request: UpdateProblemEffectionServiceRequest): Promise<UpdateProblemEffectionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemEffectionServiceWithOptions(request, headers, runtime);
  }

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

  async updateProblemImprovement(request: UpdateProblemImprovementRequest): Promise<UpdateProblemImprovementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemImprovementWithOptions(request, headers, runtime);
  }

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

  async updateProblemMeasure(request: UpdateProblemMeasureRequest): Promise<UpdateProblemMeasureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemMeasureWithOptions(request, headers, runtime);
  }

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

  async updateProblemNotice(request: UpdateProblemNoticeRequest): Promise<UpdateProblemNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemNoticeWithOptions(request, headers, runtime);
  }

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

  async updateProblemTimeline(request: UpdateProblemTimelineRequest): Promise<UpdateProblemTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProblemTimelineWithOptions(request, headers, runtime);
  }

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

  async updateRichText(request: UpdateRichTextRequest): Promise<UpdateRichTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRichTextWithOptions(request, headers, runtime);
  }

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

  async updateRouteRule(request: UpdateRouteRuleRequest): Promise<UpdateRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRouteRuleWithOptions(request, headers, runtime);
  }

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

  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(request, headers, runtime);
  }

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

  async updateServiceGroup(request: UpdateServiceGroupRequest): Promise<UpdateServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupWithOptions(request, headers, runtime);
  }

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

  async updateServiceGroupScheduling(request: UpdateServiceGroupSchedulingRequest): Promise<UpdateServiceGroupSchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupSchedulingWithOptions(request, headers, runtime);
  }

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

  async updateServiceGroupSpecialDayScheduling(request: UpdateServiceGroupSpecialDaySchedulingRequest): Promise<UpdateServiceGroupSpecialDaySchedulingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceGroupSpecialDaySchedulingWithOptions(request, headers, runtime);
  }

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

  async updateSubscription(request: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSubscriptionWithOptions(request, headers, runtime);
  }

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

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

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

  async updateUserGuideStatus(request: UpdateUserGuideStatusRequest): Promise<UpdateUserGuideStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserGuideStatusWithOptions(request, headers, runtime);
  }

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

  async verifyRouteRule(request: VerifyRouteRuleRequest): Promise<VerifyRouteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyRouteRuleWithOptions(request, headers, runtime);
  }

}
