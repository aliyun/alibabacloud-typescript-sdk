// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CampaignDetail extends $tea.Model {
  actualEndTime?: number;
  actualStartTime?: number;
  casesAborted?: number;
  casesConnected?: number;
  casesUncompleted?: number;
  completedRate?: number;
  createTime?: number;
  id?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  planedEndTime?: number;
  planedStartTime?: number;
  queueName?: string;
  state?: string;
  totalCases?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      completedRate: 'CompletedRate',
      createTime: 'CreateTime',
      id: 'Id',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      planedEndTime: 'PlanedEndTime',
      planedStartTime: 'PlanedStartTime',
      queueName: 'QueueName',
      state: 'State',
      totalCases: 'TotalCases',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'number',
      actualStartTime: 'number',
      casesAborted: 'number',
      casesConnected: 'number',
      casesUncompleted: 'number',
      completedRate: 'number',
      createTime: 'number',
      id: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      planedEndTime: 'number',
      planedStartTime: 'number',
      queueName: 'string',
      state: 'string',
      totalCases: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCampaignRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCampaignResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AbortCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbortCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCasesRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  phoneNumberList?: string[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      phoneNumberList: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      phoneNumberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCasesShrinkRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  phoneNumberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      phoneNumberListShrink: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      phoneNumberListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCasesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortCasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AbortCasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbortCasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDemoInstanceExistsResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDemoInstanceExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDemoInstanceExistsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDemoInstanceExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMQRoleAssumptionAuthorityResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMQRoleAssumptionAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckMQRoleAssumptionAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckMQRoleAssumptionAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignRequest extends $tea.Model {
  callableTime?: string;
  caseFileKey?: string;
  caseList?: CreateCampaignRequestCaseList[];
  contactFlowId?: string;
  endTime?: string;
  executingUntilTimeout?: boolean;
  instanceId?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  queueId?: string;
  simulation?: boolean;
  simulationParameters?: string;
  startTime?: string;
  strategyParameters?: string;
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      caseList: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      queueId: 'QueueId',
      simulation: 'Simulation',
      simulationParameters: 'SimulationParameters',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      caseFileKey: 'string',
      caseList: { 'type': 'array', 'itemType': CreateCampaignRequestCaseList },
      contactFlowId: 'string',
      endTime: 'string',
      executingUntilTimeout: 'boolean',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      queueId: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      startTime: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignShrinkRequest extends $tea.Model {
  callableTime?: string;
  caseFileKey?: string;
  caseListShrink?: string;
  contactFlowId?: string;
  endTime?: string;
  executingUntilTimeout?: boolean;
  instanceId?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  queueId?: string;
  simulation?: boolean;
  simulationParameters?: string;
  startTime?: string;
  strategyParameters?: string;
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      caseListShrink: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      queueId: 'QueueId',
      simulation: 'Simulation',
      simulationParameters: 'SimulationParameters',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      caseFileKey: 'string',
      caseListShrink: 'string',
      contactFlowId: 'string',
      endTime: 'string',
      executingUntilTimeout: 'boolean',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      queueId: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      startTime: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignResponseBody extends $tea.Model {
  campaignId?: string;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpNumberGroupRequest extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpNumberGroupResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCorpNumberGroupResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCorpNumberGroupResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpNumberGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCorpNumberGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCorpNumberGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDemoInstanceRequest extends $tea.Model {
  outboundCallWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      outboundCallWhitelist: 'OutboundCallWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundCallWhitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDemoInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDemoInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDemoInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDemoInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponseBody extends $tea.Model {
  code?: string;
  data?: GetCampaignResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCampaignResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetHistoricalCampaignReportResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHistoricalCampaignReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHistoricalCampaignReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHistoricalCampaignReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdsByAliyunUidV2Request extends $tea.Model {
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdsByAliyunUidV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instanceIds?: string[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIdsByAliyunUidV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceIdsByAliyunUidV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceIdsByAliyunUidV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeCampaignStatsRequest extends $tea.Model {
  instanceId?: string;
  queueId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueId: 'QueueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeCampaignStatsResponseBody extends $tea.Model {
  code?: string;
  data?: GetRealtimeCampaignStatsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRealtimeCampaignStatsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeCampaignStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRealtimeCampaignStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRealtimeCampaignStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAdminsRequest extends $tea.Model {
  instanceId?: string;
  ramIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAdminsResponseBody extends $tea.Model {
  code?: string;
  data?: ImportAdminsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ImportAdminsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAdminsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportAdminsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportAdminsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueSoftphoneCommandRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueSoftphoneCommandResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueSoftphoneCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IssueSoftphoneCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IssueSoftphoneCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsRequest extends $tea.Model {
  agentId?: string;
  attemptId?: string;
  callee?: string;
  caller?: string;
  campaignId?: string;
  caseId?: string;
  contactId?: string;
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  queueId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      attemptId: 'AttemptId',
      callee: 'Callee',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseId: 'CaseId',
      contactId: 'ContactId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queueId: 'QueueId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      attemptId: 'string',
      callee: 'string',
      caller: 'string',
      campaignId: 'string',
      caseId: 'string',
      contactId: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queueId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAttemptsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAttemptsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAttemptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAttemptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignTrendingReportRequest extends $tea.Model {
  campaignId?: string;
  endTime?: number;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignTrendingReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListCampaignTrendingReportResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCampaignTrendingReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignTrendingReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCampaignTrendingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCampaignTrendingReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsRequest extends $tea.Model {
  actualStartTimeFrom?: string;
  actualStartTimeTo?: string;
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  planedStartTimeFrom?: string;
  planedStartTimeTo?: string;
  queueId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      actualStartTimeFrom: 'ActualStartTimeFrom',
      actualStartTimeTo: 'ActualStartTimeTo',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planedStartTimeFrom: 'PlanedStartTimeFrom',
      planedStartTimeTo: 'PlanedStartTimeTo',
      queueId: 'QueueId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartTimeFrom: 'string',
      actualStartTimeTo: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planedStartTimeFrom: 'string',
      planedStartTimeTo: 'string',
      queueId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCampaignsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCampaignsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCampaignsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCampaignsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponseBody extends $tea.Model {
  code?: string;
  data?: ListCasesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCasesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportRequest extends $tea.Model {
  agentIdList?: string;
  endTime?: number;
  instanceId?: string;
  mediaType?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListHistoricalAgentSkillGroupReportResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHistoricalAgentSkillGroupReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListHistoricalAgentSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHistoricalAgentSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportRequest extends $tea.Model {
  agentId?: string;
  endTime?: number;
  instanceId?: string;
  interval?: string;
  mediaType?: string;
  skillGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      mediaType: 'MediaType',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      mediaType: 'string',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListIntervalAgentSkillGroupReportResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListIntervalAgentSkillGroupReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIntervalAgentSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntervalAgentSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonoRecordingsRequest extends $tea.Model {
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonoRecordingsResponseBody extends $tea.Model {
  code?: string;
  data?: ListMonoRecordingsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMonoRecordingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonoRecordingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMonoRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMonoRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseCampaignRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseCampaignResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PauseCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PauseCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceMigrationAvailableNumbersRequest extends $tea.Model {
  instanceId?: string;
  operatorName?: string;
  operatorUid?: number;
  v1Numbers?: string;
  v2Numbers?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operatorName: 'OperatorName',
      operatorUid: 'OperatorUid',
      v1Numbers: 'V1Numbers',
      v2Numbers: 'V2Numbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operatorName: 'string',
      operatorUid: 'number',
      v1Numbers: 'string',
      v2Numbers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceMigrationAvailableNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceMigrationAvailableNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplaceMigrationAvailableNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReplaceMigrationAvailableNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCampaignRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCampaignResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2Request extends $tea.Model {
  callId?: string;
  generalInfo?: string;
  googAddress?: string;
  instanceId?: string;
  receiverReport?: string;
  senderReport?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      generalInfo: 'GeneralInfo',
      googAddress: 'GoogAddress',
      instanceId: 'InstanceId',
      receiverReport: 'ReceiverReport',
      senderReport: 'SenderReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      generalInfo: 'string',
      googAddress: 'string',
      instanceId: 'string',
      receiverReport: 'string',
      senderReport: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2ResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  rowCount?: number;
  success?: boolean;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      rowCount: 'RowCount',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      rowCount: 'number',
      success: 'boolean',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveRTCStatsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveRTCStatsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogRequest extends $tea.Model {
  appName?: string;
  callId?: string;
  content?: string;
  dataType?: number;
  instanceId?: string;
  jobId?: string;
  methodName?: string;
  status?: string;
  uniqueRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callId: 'CallId',
      content: 'Content',
      dataType: 'DataType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      methodName: 'MethodName',
      status: 'Status',
      uniqueRequestId: 'UniqueRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callId: 'string',
      content: 'string',
      dataType: 'number',
      instanceId: 'string',
      jobId: 'string',
      methodName: 'string',
      status: 'string',
      uniqueRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveTerminalLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveTerminalLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoRequest extends $tea.Model {
  callId?: string;
  content?: string;
  contentType?: string;
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      content: 'Content',
      contentType: 'ContentType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      content: 'string',
      contentType: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  rowCount?: number;
  success?: boolean;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      rowCount: 'RowCount',
      success: 'Success',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      rowCount: 'number',
      success: 'boolean',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveWebRtcInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveWebRtcInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCampaignRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCampaignResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterDeviceRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterDeviceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnregisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnregisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignRequestCaseList extends $tea.Model {
  customVariables?: string;
  phoneNumber?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpNumberGroupResponseBodyData extends $tea.Model {
  aliyunUid?: string;
  description?: string;
  numberCount?: string;
  numberGroupId?: string;
  numberGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      description: 'Description',
      numberCount: 'NumberCount',
      numberGroupId: 'NumberGroupId',
      numberGroupName: 'NumberGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      description: 'string',
      numberCount: 'string',
      numberGroupId: 'string',
      numberGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponseBodyData extends $tea.Model {
  actualEndTime?: number;
  actualStartTime?: number;
  campaignId?: string;
  casesAborted?: number;
  casesConnected?: number;
  casesUncompleted?: number;
  completedRate?: number;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  planedEndTime?: number;
  planedStartTime?: number;
  queueId?: string;
  queueName?: string;
  simulation?: boolean;
  simulationParameters?: string;
  state?: string;
  strategyParameters?: string;
  strategyType?: string;
  totalCases?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      campaignId: 'CampaignId',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      completedRate: 'CompletedRate',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      planedEndTime: 'PlanedEndTime',
      planedStartTime: 'PlanedStartTime',
      queueId: 'QueueId',
      queueName: 'QueueName',
      simulation: 'Simulation',
      simulationParameters: 'SimulationParameters',
      state: 'State',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
      totalCases: 'TotalCases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'number',
      actualStartTime: 'number',
      campaignId: 'string',
      casesAborted: 'number',
      casesConnected: 'number',
      casesUncompleted: 'number',
      completedRate: 'number',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      planedEndTime: 'number',
      planedStartTime: 'number',
      queueId: 'string',
      queueName: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      state: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
      totalCases: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportResponseBodyData extends $tea.Model {
  abandonedRate?: number;
  callsAbandoned?: number;
  callsConnected?: number;
  callsDialed?: number;
  connectedRate?: number;
  occupancyRate?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedRate: 'AbandonedRate',
      callsAbandoned: 'CallsAbandoned',
      callsConnected: 'CallsConnected',
      callsDialed: 'CallsDialed',
      connectedRate: 'ConnectedRate',
      occupancyRate: 'OccupancyRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedRate: 'number',
      callsAbandoned: 'number',
      callsConnected: 'number',
      callsDialed: 'number',
      connectedRate: 'number',
      occupancyRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeCampaignStatsResponseBodyData extends $tea.Model {
  breakingAgents?: number;
  caps?: number;
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: number;
  outboundScenarioReadyAgents?: number;
  outboundScenarioTalkingAgents?: number;
  outboundScenarioWorkingAgents?: number;
  readyAgents?: number;
  talkingAgents?: number;
  totalAgents?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakingAgents: 'BreakingAgents',
      caps: 'Caps',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakingAgents: 'number',
      caps: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundScenarioTalkingAgents: 'number',
      outboundScenarioWorkingAgents: 'number',
      readyAgents: 'number',
      talkingAgents: 'number',
      totalAgents: 'number',
      workingAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAdminsResponseBodyData extends $tea.Model {
  extension?: string;
  instanceId?: string;
  ramId?: string;
  roleId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      instanceId: 'string',
      ramId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponseBodyDataList extends $tea.Model {
  agentEstablishedTime?: number;
  agentId?: string;
  agentRingDuration?: number;
  assignAgentTime?: number;
  attemptId?: string;
  callee?: string;
  caller?: string;
  campaignId?: string;
  caseId?: string;
  contactId?: string;
  customerEstablishedTime?: number;
  customerReleasedTime?: number;
  dialDuration?: number;
  dialTime?: number;
  enqueueTime?: number;
  enterIvrTime?: number;
  instanceId?: string;
  ivrDuration?: number;
  queueDuration?: number;
  queueId?: string;
  static names(): { [key: string]: string } {
    return {
      agentEstablishedTime: 'AgentEstablishedTime',
      agentId: 'AgentId',
      agentRingDuration: 'AgentRingDuration',
      assignAgentTime: 'AssignAgentTime',
      attemptId: 'AttemptId',
      callee: 'Callee',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseId: 'CaseId',
      contactId: 'ContactId',
      customerEstablishedTime: 'CustomerEstablishedTime',
      customerReleasedTime: 'CustomerReleasedTime',
      dialDuration: 'DialDuration',
      dialTime: 'DialTime',
      enqueueTime: 'EnqueueTime',
      enterIvrTime: 'EnterIvrTime',
      instanceId: 'InstanceId',
      ivrDuration: 'IvrDuration',
      queueDuration: 'QueueDuration',
      queueId: 'QueueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEstablishedTime: 'number',
      agentId: 'string',
      agentRingDuration: 'number',
      assignAgentTime: 'number',
      attemptId: 'string',
      callee: 'string',
      caller: 'string',
      campaignId: 'string',
      caseId: 'string',
      contactId: 'string',
      customerEstablishedTime: 'number',
      customerReleasedTime: 'number',
      dialDuration: 'number',
      dialTime: 'number',
      enqueueTime: 'number',
      enterIvrTime: 'number',
      instanceId: 'string',
      ivrDuration: 'number',
      queueDuration: 'number',
      queueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponseBodyData extends $tea.Model {
  list?: ListAttemptsResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAttemptsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignTrendingReportResponseBodyData extends $tea.Model {
  breakAgents?: number;
  concurrency?: number;
  datetime?: number;
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: string;
  outboundScenarioReadyAgents?: string;
  outboundScenarioTalkingAgents?: string;
  outboundScenarioWorkingAgents?: string;
  readyAgents?: number;
  talkAgents?: number;
  workAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakAgents: 'BreakAgents',
      concurrency: 'Concurrency',
      datetime: 'Datetime',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      talkAgents: 'TalkAgents',
      workAgents: 'WorkAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakAgents: 'number',
      concurrency: 'number',
      datetime: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'string',
      outboundScenarioReadyAgents: 'string',
      outboundScenarioTalkingAgents: 'string',
      outboundScenarioWorkingAgents: 'string',
      readyAgents: 'number',
      talkAgents: 'number',
      workAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBodyDataList extends $tea.Model {
  actualEndTime?: number;
  actualStartTime?: number;
  campaignId?: string;
  casesAborted?: number;
  casesConnected?: number;
  casesUncompleted?: number;
  completedRate?: number;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  planedEndTime?: number;
  planedStartTime?: number;
  queueId?: string;
  queueName?: string;
  simulation?: boolean;
  state?: string;
  strategyParameters?: string;
  strategyType?: string;
  totalCases?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      campaignId: 'CampaignId',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      completedRate: 'CompletedRate',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      planedEndTime: 'PlanedEndTime',
      planedStartTime: 'PlanedStartTime',
      queueId: 'QueueId',
      queueName: 'QueueName',
      simulation: 'Simulation',
      state: 'State',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
      totalCases: 'TotalCases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'number',
      actualStartTime: 'number',
      campaignId: 'string',
      casesAborted: 'number',
      casesConnected: 'number',
      casesUncompleted: 'number',
      completedRate: 'number',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      planedEndTime: 'number',
      planedStartTime: 'number',
      queueId: 'string',
      queueName: 'string',
      simulation: 'boolean',
      state: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
      totalCases: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBodyData extends $tea.Model {
  list?: ListCampaignsResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCampaignsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponseBodyDataList extends $tea.Model {
  abandonType?: string;
  attemptCount?: number;
  caseId?: string;
  customVariables?: string;
  expandInfo?: string;
  failureReason?: string;
  phoneNumber?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      abandonType: 'AbandonType',
      attemptCount: 'AttemptCount',
      caseId: 'CaseId',
      customVariables: 'CustomVariables',
      expandInfo: 'ExpandInfo',
      failureReason: 'FailureReason',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonType: 'string',
      attemptCount: 'number',
      caseId: 'string',
      customVariables: 'string',
      expandInfo: 'string',
      failureReason: 'string',
      phoneNumber: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponseBodyData extends $tea.Model {
  list?: ListCasesResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCasesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back extends $tea.Model {
  agentAnswerRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAnswered?: number;
  callsCustomerHandled?: number;
  callsDialed?: number;
  customerHandleRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentAnswerRate: 'AgentAnswerRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerHandleRate: 'CustomerHandleRate',
      maxCustomerRingTime: 'MaxCustomerRingTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      totalCustomerRingTime: 'TotalCustomerRingTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerHandleRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      totalCustomerRingTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound extends $tea.Model {
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsHandled?: number;
  callsHold?: number;
  callsOffered?: number;
  callsRinged?: number;
  handleRate?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsRinged: 'CallsRinged',
      handleRate: 'HandleRate',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsRinged: 'number',
      handleRate: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal extends $tea.Model {
  averageTalkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsTalk?: number;
  maxTalkTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalk: 'CallsTalk',
      maxTalkTime: 'MaxTalkTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsTalk: 'number',
      maxTalkTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsDialed?: number;
  callsHold?: number;
  callsRinged?: number;
  maxDialingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsDialed: 'CallsDialed',
      callsHold: 'CallsHold',
      callsRinged: 'CallsRinged',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsDialed: 'number',
      callsHold: 'number',
      callsRinged: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList extends $tea.Model {
  breakCode?: string;
  count?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList[];
  firstCheckInTime?: number;
  lastCheckOutTime?: number;
  maxBreakTime?: number;
  maxHoldTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalHoldTime?: number;
  totalLoggedInTime?: number;
  totalOffSiteOnlineTime?: number;
  totalOfficePhoneOnlineTime?: number;
  totalOnSiteOnlineTime?: number;
  totalOutboundScenarioReadyTime?: number;
  totalOutboundScenarioTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageBreakTime: 'AverageBreakTime',
      averageHoldTime: 'AverageHoldTime',
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      breakCodeDetailList: 'BreakCodeDetailList',
      firstCheckInTime: 'FirstCheckInTime',
      lastCheckOutTime: 'LastCheckOutTime',
      maxBreakTime: 'MaxBreakTime',
      maxHoldTime: 'MaxHoldTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
      totalOutboundScenarioReadyTime: 'TotalOutboundScenarioReadyTime',
      totalOutboundScenarioTime: 'TotalOutboundScenarioTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageBreakTime: 'number',
      averageHoldTime: 'number',
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckOutTime: 'number',
      maxBreakTime: 'number',
      maxHoldTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteOnlineTime: 'number',
      totalOutboundScenarioReadyTime: 'number',
      totalOutboundScenarioTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyDataList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  back2Back?: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back;
  displayId?: string;
  inbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound;
  internal?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal;
  outbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound;
  overall?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      back2Back: 'Back2Back',
      displayId: 'DisplayId',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentSkillGroupReportResponseBodyData extends $tea.Model {
  list?: ListHistoricalAgentSkillGroupReportResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListHistoricalAgentSkillGroupReportResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back extends $tea.Model {
  agentAnswerRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAnswered?: number;
  callsCustomerHandled?: number;
  callsDialed?: number;
  customerHandleRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentAnswerRate: 'AgentAnswerRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerHandleRate: 'CustomerHandleRate',
      maxCustomerRingTime: 'MaxCustomerRingTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      totalCustomerRingTime: 'TotalCustomerRingTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerHandleRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      totalCustomerRingTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataInbound extends $tea.Model {
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsHandled?: number;
  callsHold?: number;
  callsOffered?: number;
  callsRinged?: number;
  handleRate?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsRinged: 'CallsRinged',
      handleRate: 'HandleRate',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsRinged: 'number',
      handleRate: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataInternal extends $tea.Model {
  averageTalkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsTalk?: number;
  maxTalkTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalk: 'CallsTalk',
      maxTalkTime: 'MaxTalkTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsTalk: 'number',
      maxTalkTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsDialed?: number;
  callsHold?: number;
  callsRinged?: number;
  maxDialingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsDialed: 'CallsDialed',
      callsHold: 'CallsHold',
      callsRinged: 'CallsRinged',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsDialed: 'number',
      callsHold: 'number',
      callsRinged: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList extends $tea.Model {
  breakCode?: string;
  count?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  firstCheckInTime?: number;
  lastCheckoutTime?: number;
  maxBreakTime?: number;
  maxHoldTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalHoldTime?: number;
  totalLoggedInTime?: number;
  totalOffSiteOnlineTime?: number;
  totalOfficePhoneOnlineTime?: number;
  totalOnSiteOnlineTime?: number;
  totalOutboundScenarioReadyTime?: number;
  totalOutboundScenarioTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageBreakTime: 'AverageBreakTime',
      averageHoldTime: 'AverageHoldTime',
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      breakCodeDetailList: 'BreakCodeDetailList',
      firstCheckInTime: 'FirstCheckInTime',
      lastCheckoutTime: 'LastCheckoutTime',
      maxBreakTime: 'MaxBreakTime',
      maxHoldTime: 'MaxHoldTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
      totalOutboundScenarioReadyTime: 'TotalOutboundScenarioReadyTime',
      totalOutboundScenarioTime: 'TotalOutboundScenarioTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageBreakTime: 'number',
      averageHoldTime: 'number',
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckoutTime: 'number',
      maxBreakTime: 'number',
      maxHoldTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteOnlineTime: 'number',
      totalOutboundScenarioReadyTime: 'number',
      totalOutboundScenarioTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyData extends $tea.Model {
  back2Back?: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalAgentSkillGroupReportResponseBodyDataInbound;
  internal?: ListIntervalAgentSkillGroupReportResponseBodyDataInternal;
  outbound?: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentSkillGroupReportResponseBodyDataOverall;
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentSkillGroupReportResponseBodyDataInbound,
      internal: ListIntervalAgentSkillGroupReportResponseBodyDataInternal,
      outbound: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalAgentSkillGroupReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonoRecordingsResponseBodyData extends $tea.Model {
  agentId?: string;
  agentName?: string;
  contactId?: string;
  duration?: string;
  fileName?: string;
  fileUrl?: string;
  ramId?: string;
  skillGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      duration: 'string',
      fileName: 'string',
      fileUrl: 'string',
      ramId: 'string',
      skillGroupId: 'string',
      startTime: 'string',
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
    this._endpoint = this.getEndpoint("cloudcallcenter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abortCampaignWithOptions(request: AbortCampaignRequest, runtime: $Util.RuntimeOptions): Promise<AbortCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbortCampaignResponse>(await this.callApi(params, req, runtime), new AbortCampaignResponse({}));
  }

  async abortCampaign(request: AbortCampaignRequest): Promise<AbortCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortCampaignWithOptions(request, runtime);
  }

  async abortCasesWithOptions(tmpReq: AbortCasesRequest, runtime: $Util.RuntimeOptions): Promise<AbortCasesResponse> {
    Util.validateModel(tmpReq);
    let request = new AbortCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phoneNumberList)) {
      request.phoneNumberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumberList, "PhoneNumberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.phoneNumberListShrink)) {
      query["PhoneNumberList"] = request.phoneNumberListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbortCasesResponse>(await this.callApi(params, req, runtime), new AbortCasesResponse({}));
  }

  async abortCases(request: AbortCasesRequest): Promise<AbortCasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abortCasesWithOptions(request, runtime);
  }

  async checkDemoInstanceExistsWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckDemoInstanceExistsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CheckDemoInstanceExists",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDemoInstanceExistsResponse>(await this.callApi(params, req, runtime), new CheckDemoInstanceExistsResponse({}));
  }

  async checkDemoInstanceExists(): Promise<CheckDemoInstanceExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDemoInstanceExistsWithOptions(runtime);
  }

  async checkMQRoleAssumptionAuthorityWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckMQRoleAssumptionAuthorityResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CheckMQRoleAssumptionAuthority",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMQRoleAssumptionAuthorityResponse>(await this.callApi(params, req, runtime), new CheckMQRoleAssumptionAuthorityResponse({}));
  }

  async checkMQRoleAssumptionAuthority(): Promise<CheckMQRoleAssumptionAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMQRoleAssumptionAuthorityWithOptions(runtime);
  }

  async createCampaignWithOptions(tmpReq: CreateCampaignRequest, runtime: $Util.RuntimeOptions): Promise<CreateCampaignResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCampaignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.caseList)) {
      request.caseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseList, "CaseList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!Util.isUnset(request.caseFileKey)) {
      query["CaseFileKey"] = request.caseFileKey;
    }

    if (!Util.isUnset(request.caseListShrink)) {
      query["CaseList"] = request.caseListShrink;
    }

    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executingUntilTimeout)) {
      query["ExecutingUntilTimeout"] = request.executingUntilTimeout;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxAttemptCount)) {
      query["MaxAttemptCount"] = request.maxAttemptCount;
    }

    if (!Util.isUnset(request.minAttemptInterval)) {
      query["MinAttemptInterval"] = request.minAttemptInterval;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!Util.isUnset(request.simulation)) {
      query["Simulation"] = request.simulation;
    }

    if (!Util.isUnset(request.simulationParameters)) {
      query["SimulationParameters"] = request.simulationParameters;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.strategyParameters)) {
      query["StrategyParameters"] = request.strategyParameters;
    }

    if (!Util.isUnset(request.strategyType)) {
      query["StrategyType"] = request.strategyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCampaignResponse>(await this.callApi(params, req, runtime), new CreateCampaignResponse({}));
  }

  async createCampaign(request: CreateCampaignRequest): Promise<CreateCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCampaignWithOptions(request, runtime);
  }

  async createCorpNumberGroupWithOptions(request: CreateCorpNumberGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateCorpNumberGroupResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "CreateCorpNumberGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCorpNumberGroupResponse>(await this.callApi(params, req, runtime), new CreateCorpNumberGroupResponse({}));
  }

  async createCorpNumberGroup(request: CreateCorpNumberGroupRequest): Promise<CreateCorpNumberGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCorpNumberGroupWithOptions(request, runtime);
  }

  async createDemoInstanceWithOptions(request: CreateDemoInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDemoInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outboundCallWhitelist)) {
      query["OutboundCallWhitelist"] = request.outboundCallWhitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDemoInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDemoInstanceResponse>(await this.callApi(params, req, runtime), new CreateDemoInstanceResponse({}));
  }

  async createDemoInstance(request: CreateDemoInstanceRequest): Promise<CreateDemoInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDemoInstanceWithOptions(request, runtime);
  }

  async getCampaignWithOptions(request: GetCampaignRequest, runtime: $Util.RuntimeOptions): Promise<GetCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCampaignResponse>(await this.callApi(params, req, runtime), new GetCampaignResponse({}));
  }

  async getCampaign(request: GetCampaignRequest): Promise<GetCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCampaignWithOptions(request, runtime);
  }

  async getHistoricalCampaignReportWithOptions(request: GetHistoricalCampaignReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoricalCampaignReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoricalCampaignReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoricalCampaignReportResponse>(await this.callApi(params, req, runtime), new GetHistoricalCampaignReportResponse({}));
  }

  async getHistoricalCampaignReport(request: GetHistoricalCampaignReportRequest): Promise<GetHistoricalCampaignReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoricalCampaignReportWithOptions(request, runtime);
  }

  async getInstanceIdsByAliyunUidV2WithOptions(request: GetInstanceIdsByAliyunUidV2Request, runtime: $Util.RuntimeOptions): Promise<GetInstanceIdsByAliyunUidV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceIdsByAliyunUidV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceIdsByAliyunUidV2Response>(await this.callApi(params, req, runtime), new GetInstanceIdsByAliyunUidV2Response({}));
  }

  async getInstanceIdsByAliyunUidV2(request: GetInstanceIdsByAliyunUidV2Request): Promise<GetInstanceIdsByAliyunUidV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceIdsByAliyunUidV2WithOptions(request, runtime);
  }

  async getRealtimeCampaignStatsWithOptions(request: GetRealtimeCampaignStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeCampaignStatsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealtimeCampaignStats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealtimeCampaignStatsResponse>(await this.callApi(params, req, runtime), new GetRealtimeCampaignStatsResponse({}));
  }

  async getRealtimeCampaignStats(request: GetRealtimeCampaignStatsRequest): Promise<GetRealtimeCampaignStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeCampaignStatsWithOptions(request, runtime);
  }

  async importAdminsWithOptions(request: ImportAdminsRequest, runtime: $Util.RuntimeOptions): Promise<ImportAdminsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportAdmins",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportAdminsResponse>(await this.callApi(params, req, runtime), new ImportAdminsResponse({}));
  }

  async importAdmins(request: ImportAdminsRequest): Promise<ImportAdminsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAdminsWithOptions(request, runtime);
  }

  async issueSoftphoneCommandWithOptions(request: IssueSoftphoneCommandRequest, runtime: $Util.RuntimeOptions): Promise<IssueSoftphoneCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IssueSoftphoneCommand",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IssueSoftphoneCommandResponse>(await this.callApi(params, req, runtime), new IssueSoftphoneCommandResponse({}));
  }

  async issueSoftphoneCommand(request: IssueSoftphoneCommandRequest): Promise<IssueSoftphoneCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.issueSoftphoneCommandWithOptions(request, runtime);
  }

  async listAttemptsWithOptions(request: ListAttemptsRequest, runtime: $Util.RuntimeOptions): Promise<ListAttemptsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAttempts",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAttemptsResponse>(await this.callApi(params, req, runtime), new ListAttemptsResponse({}));
  }

  async listAttempts(request: ListAttemptsRequest): Promise<ListAttemptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAttemptsWithOptions(request, runtime);
  }

  async listCampaignTrendingReportWithOptions(request: ListCampaignTrendingReportRequest, runtime: $Util.RuntimeOptions): Promise<ListCampaignTrendingReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCampaignTrendingReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCampaignTrendingReportResponse>(await this.callApi(params, req, runtime), new ListCampaignTrendingReportResponse({}));
  }

  async listCampaignTrendingReport(request: ListCampaignTrendingReportRequest): Promise<ListCampaignTrendingReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCampaignTrendingReportWithOptions(request, runtime);
  }

  async listCampaignsWithOptions(request: ListCampaignsRequest, runtime: $Util.RuntimeOptions): Promise<ListCampaignsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actualStartTimeFrom)) {
      query["ActualStartTimeFrom"] = request.actualStartTimeFrom;
    }

    if (!Util.isUnset(request.actualStartTimeTo)) {
      query["ActualStartTimeTo"] = request.actualStartTimeTo;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!Util.isUnset(request.planedStartTimeFrom)) {
      query["PlanedStartTimeFrom"] = request.planedStartTimeFrom;
    }

    if (!Util.isUnset(request.planedStartTimeTo)) {
      query["PlanedStartTimeTo"] = request.planedStartTimeTo;
    }

    if (!Util.isUnset(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCampaigns",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCampaignsResponse>(await this.callApi(params, req, runtime), new ListCampaignsResponse({}));
  }

  async listCampaigns(request: ListCampaignsRequest): Promise<ListCampaignsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCampaignsWithOptions(request, runtime);
  }

  async listCasesWithOptions(request: ListCasesRequest, runtime: $Util.RuntimeOptions): Promise<ListCasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCasesResponse>(await this.callApi(params, req, runtime), new ListCasesResponse({}));
  }

  async listCases(request: ListCasesRequest): Promise<ListCasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCasesWithOptions(request, runtime);
  }

  async listHistoricalAgentSkillGroupReportWithOptions(request: ListHistoricalAgentSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoricalAgentSkillGroupReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHistoricalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHistoricalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new ListHistoricalAgentSkillGroupReportResponse({}));
  }

  async listHistoricalAgentSkillGroupReport(request: ListHistoricalAgentSkillGroupReportRequest): Promise<ListHistoricalAgentSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoricalAgentSkillGroupReportWithOptions(request, runtime);
  }

  async listIntervalAgentSkillGroupReportWithOptions(request: ListIntervalAgentSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalAgentSkillGroupReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new ListIntervalAgentSkillGroupReportResponse({}));
  }

  async listIntervalAgentSkillGroupReport(request: ListIntervalAgentSkillGroupReportRequest): Promise<ListIntervalAgentSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalAgentSkillGroupReportWithOptions(request, runtime);
  }

  async listMonoRecordingsWithOptions(request: ListMonoRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<ListMonoRecordingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMonoRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMonoRecordingsResponse>(await this.callApi(params, req, runtime), new ListMonoRecordingsResponse({}));
  }

  async listMonoRecordings(request: ListMonoRecordingsRequest): Promise<ListMonoRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMonoRecordingsWithOptions(request, runtime);
  }

  async pauseCampaignWithOptions(request: PauseCampaignRequest, runtime: $Util.RuntimeOptions): Promise<PauseCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseCampaignResponse>(await this.callApi(params, req, runtime), new PauseCampaignResponse({}));
  }

  async pauseCampaign(request: PauseCampaignRequest): Promise<PauseCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseCampaignWithOptions(request, runtime);
  }

  async replaceMigrationAvailableNumbersWithOptions(request: ReplaceMigrationAvailableNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceMigrationAvailableNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operatorName)) {
      query["OperatorName"] = request.operatorName;
    }

    if (!Util.isUnset(request.operatorUid)) {
      query["OperatorUid"] = request.operatorUid;
    }

    if (!Util.isUnset(request.v1Numbers)) {
      query["V1Numbers"] = request.v1Numbers;
    }

    if (!Util.isUnset(request.v2Numbers)) {
      query["V2Numbers"] = request.v2Numbers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceMigrationAvailableNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceMigrationAvailableNumbersResponse>(await this.callApi(params, req, runtime), new ReplaceMigrationAvailableNumbersResponse({}));
  }

  async replaceMigrationAvailableNumbers(request: ReplaceMigrationAvailableNumbersRequest): Promise<ReplaceMigrationAvailableNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceMigrationAvailableNumbersWithOptions(request, runtime);
  }

  async resumeCampaignWithOptions(request: ResumeCampaignRequest, runtime: $Util.RuntimeOptions): Promise<ResumeCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeCampaignResponse>(await this.callApi(params, req, runtime), new ResumeCampaignResponse({}));
  }

  async resumeCampaign(request: ResumeCampaignRequest): Promise<ResumeCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeCampaignWithOptions(request, runtime);
  }

  async saveRTCStatsV2WithOptions(request: SaveRTCStatsV2Request, runtime: $Util.RuntimeOptions): Promise<SaveRTCStatsV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.generalInfo)) {
      query["GeneralInfo"] = request.generalInfo;
    }

    if (!Util.isUnset(request.googAddress)) {
      query["GoogAddress"] = request.googAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.receiverReport)) {
      query["ReceiverReport"] = request.receiverReport;
    }

    if (!Util.isUnset(request.senderReport)) {
      query["SenderReport"] = request.senderReport;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveRTCStatsV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveRTCStatsV2Response>(await this.callApi(params, req, runtime), new SaveRTCStatsV2Response({}));
  }

  async saveRTCStatsV2(request: SaveRTCStatsV2Request): Promise<SaveRTCStatsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRTCStatsV2WithOptions(request, runtime);
  }

  async saveTerminalLogWithOptions(request: SaveTerminalLogRequest, runtime: $Util.RuntimeOptions): Promise<SaveTerminalLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uniqueRequestId)) {
      query["UniqueRequestId"] = request.uniqueRequestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveTerminalLog",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveTerminalLogResponse>(await this.callApi(params, req, runtime), new SaveTerminalLogResponse({}));
  }

  async saveTerminalLog(request: SaveTerminalLogRequest): Promise<SaveTerminalLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTerminalLogWithOptions(request, runtime);
  }

  async saveWebRtcInfoWithOptions(request: SaveWebRtcInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebRtcInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveWebRtcInfo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveWebRtcInfoResponse>(await this.callApi(params, req, runtime), new SaveWebRtcInfoResponse({}));
  }

  async saveWebRtcInfo(request: SaveWebRtcInfoRequest): Promise<SaveWebRtcInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebRtcInfoWithOptions(request, runtime);
  }

  async submitCampaignWithOptions(request: SubmitCampaignRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitCampaignResponse>(await this.callApi(params, req, runtime), new SubmitCampaignResponse({}));
  }

  async submitCampaign(request: SubmitCampaignRequest): Promise<SubmitCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCampaignWithOptions(request, runtime);
  }

  async unregisterDeviceWithOptions(request: UnregisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnregisterDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnregisterDevice",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnregisterDeviceResponse>(await this.callApi(params, req, runtime), new UnregisterDeviceResponse({}));
  }

  async unregisterDevice(request: UnregisterDeviceRequest): Promise<UnregisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterDeviceWithOptions(request, runtime);
  }

}
