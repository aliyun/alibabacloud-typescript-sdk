// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class AddCasesRequest extends $tea.Model {
  campaignId?: string;
  caseList?: AddCasesRequestCaseList[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      caseList: 'CaseList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      caseList: { 'type': 'array', 'itemType': AddCasesRequestCaseList },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasesShrinkRequest extends $tea.Model {
  campaignId?: string;
  caseListShrink?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      caseListShrink: 'CaseList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      caseListShrink: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasesResponseBody extends $tea.Model {
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

export class AddCasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNumbersToSkillGroupRequest extends $tea.Model {
  instNumberGroupIdList?: string;
  instanceId?: string;
  numberList?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instNumberGroupIdList: 'InstNumberGroupIdList',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instNumberGroupIdList: 'string',
      instanceId: 'string',
      numberList: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNumbersToSkillGroupResponseBody extends $tea.Model {
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

export class AddNumbersToSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddNumbersToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddNumbersToSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserRequest extends $tea.Model {
  instanceId?: string;
  numberList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPersonalNumbersToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddPersonalNumbersToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberToSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumberToSkillGroupsResponseBody extends $tea.Model {
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

export class AddPhoneNumberToSkillGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPhoneNumberToSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddPhoneNumberToSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  numberGroupId?: string;
  numberList?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      numberGroupId: 'NumberGroupId',
      numberList: 'NumberList',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      numberGroupId: 'string',
      numberList: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupsToUserRequest extends $tea.Model {
  instanceId?: string;
  skillLevelList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillLevelList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupsToUserResponseBody extends $tea.Model {
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

export class AddSkillGroupsToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSkillGroupsToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSkillGroupsToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  userSkillLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userSkillLevelList: 'UserSkillLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userSkillLevelList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToSkillGroupResponseBody extends $tea.Model {
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

export class AddUsersToSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUsersToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUsersToSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBody extends $tea.Model {
  code?: string;
  data?: AnswerCallResponseBodyData;
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
      data: AnswerCallResponseBodyData,
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

export class AnswerCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnswerCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AnswerCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendCasesRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  body?: AppendCasesRequestBody[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      body: { 'type': 'array', 'itemType': AppendCasesRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendCasesShrinkRequest extends $tea.Model {
  campaignId?: string;
  instanceId?: string;
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendCasesResponseBody extends $tea.Model {
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

export class AppendCasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppendCasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AppendCasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersRequest extends $tea.Model {
  instanceId?: string;
  ramIdList?: string;
  roleId?: string;
  skillLevelList?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramIdList: 'RamIdList',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramIdList: 'string',
      roleId: 'string',
      skillLevelList: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallRequest extends $tea.Model {
  bargedUserId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bargedUserId: 'BargedUserId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bargedUserId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBody extends $tea.Model {
  code?: string;
  data?: BargeInCallResponseBodyData;
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
      data: BargeInCallResponseBodyData,
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

export class BargeInCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BargeInCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BargeInCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferRequest extends $tea.Model {
  callPriority?: number;
  contactFlowVariables?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  strategyName?: string;
  strategyParams?: string;
  timeoutSeconds?: number;
  transferee?: string;
  transfereeType?: string;
  transferor?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callPriority: 'CallPriority',
      contactFlowVariables: 'ContactFlowVariables',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      strategyName: 'StrategyName',
      strategyParams: 'StrategyParams',
      timeoutSeconds: 'TimeoutSeconds',
      transferee: 'Transferee',
      transfereeType: 'TransfereeType',
      transferor: 'Transferor',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callPriority: 'number',
      contactFlowVariables: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      strategyName: 'string',
      strategyParams: 'string',
      timeoutSeconds: 'number',
      transferee: 'string',
      transfereeType: 'string',
      transferor: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBody extends $tea.Model {
  code?: string;
  data?: BlindTransferResponseBodyData;
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
      data: BlindTransferResponseBodyData,
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

export class BlindTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BlindTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BlindTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BridgeRtcCallRequest extends $tea.Model {
  callee?: string;
  caller?: string;
  deviceId?: string;
  instanceId?: string;
  serviceProvider?: string;
  tags?: string;
  timeoutSeconds?: number;
  userId?: string;
  videoEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      serviceProvider: 'ServiceProvider',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
      videoEnabled: 'VideoEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      instanceId: 'string',
      serviceProvider: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
      videoEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BridgeRtcCallResponseBody extends $tea.Model {
  code?: string;
  data?: BridgeRtcCallResponseBodyData;
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
      data: BridgeRtcCallResponseBodyData,
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

export class BridgeRtcCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BridgeRtcCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BridgeRtcCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  data?: CancelAttendedTransferResponseBodyData;
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
      data: CancelAttendedTransferResponseBodyData,
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

export class CancelAttendedTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityRequest extends $tea.Model {
  instanceId?: string;
  invisible?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invisible: 'Invisible',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invisible: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityResponseBody extends $tea.Model {
  code?: string;
  data?: ChangeVisibilityResponseBodyData;
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
      data: ChangeVisibilityResponseBodyData,
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

export class ChangeVisibilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeVisibilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeVisibilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  mobile?: string;
  signedSkillGroupIdList?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      mobile: 'string',
      signedSkillGroupIdList: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeResponseBody extends $tea.Model {
  code?: string;
  data?: ChangeWorkModeResponseBodyData;
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
      data: ChangeWorkModeResponseBodyData,
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

export class ChangeWorkModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeWorkModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeWorkModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallRequest extends $tea.Model {
  coachedUserId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      coachedUserId: 'CoachedUserId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coachedUserId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBody extends $tea.Model {
  code?: string;
  data?: CoachCallResponseBodyData;
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
      data: CoachCallResponseBodyData,
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

export class CoachCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CoachCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CoachCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  definition?: string;
  description?: string;
  draftId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContactFlowResponseBody extends $tea.Model {
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

export class CommitContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CommitContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CommitContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  data?: CompleteAttendedTransferResponseBodyData;
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
      data: CompleteAttendedTransferResponseBodyData,
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

export class CompleteAttendedTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompleteAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CompleteAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAudioFileRequest extends $tea.Model {
  audioFileName?: string;
  instanceId?: string;
  name?: string;
  ossFileKey?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAudioFileResponseBody extends $tea.Model {
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

export class CreateAudioFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAudioFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAudioFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTagsRequest extends $tea.Model {
  callTagNameList?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTagsResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCallTagsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': CreateCallTagsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCallTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCallTagsResponseBody,
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

export class CreateCampaignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateContactFlowRequest extends $tea.Model {
  definition?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactFlowResponseBody extends $tea.Model {
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

export class CreateContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCallTaggingRequest extends $tea.Model {
  customNumberList?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customNumberList: 'CustomNumberList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customNumberList: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCallTaggingResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCustomCallTaggingResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': CreateCustomCallTaggingResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  adminRamIdList?: string;
  description?: string;
  domainName?: string;
  name?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      adminRamIdList: 'AdminRamIdList',
      description: 'Description',
      domainName: 'DomainName',
      name: 'Name',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminRamIdList: 'string',
      description: 'string',
      domainName: 'string',
      name: 'string',
      numberList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
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

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  mediaType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSkillGroupResponseBodyData;
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
      data: CreateSkillGroupResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  avatarUrl?: string;
  displayId?: string;
  displayName?: string;
  email?: string;
  instanceId?: string;
  loginName?: string;
  mobile?: string;
  nickname?: string;
  resetPassword?: boolean;
  roleId?: string;
  skillLevelList?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      resetPassword: 'ResetPassword',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      resetPassword: 'boolean',
      roleId: 'string',
      skillLevelList: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  code?: string;
  data?: CreateUserResponseBodyData;
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
      data: CreateUserResponseBodyData,
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

export class DeleteAudioFileRequest extends $tea.Model {
  audioResourceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResourceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAudioFileResponseBody extends $tea.Model {
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

export class DeleteAudioFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAudioFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAudioFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCallTagRequest extends $tea.Model {
  instanceId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCallTagResponseBody extends $tea.Model {
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

export class DeleteCallTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCallTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCallTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactFlowResponseBody extends $tea.Model {
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

export class DeleteContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomCallTaggingRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomCallTaggingResponseBody extends $tea.Model {
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

export class DeleteCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $tea.Model {
  force?: boolean;
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponseBody extends $tea.Model {
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

export class DeleteSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardEditingContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  draftId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      draftId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardEditingContactFlowResponseBody extends $tea.Model {
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

export class DiscardEditingContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DiscardEditingContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DiscardEditingContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceResponseBody extends $tea.Model {
  code?: string;
  data?: EndConferenceResponseBodyData;
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
      data: EndConferenceResponseBodyData,
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

export class EndConferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EndConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EndConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomCallTaggingRequest extends $tea.Model {
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

export class ExportCustomCallTaggingResponseBody extends $tea.Model {
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

export class ExportCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDoNotCallNumbersRequest extends $tea.Model {
  instanceId?: string;
  scope?: string;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scope: 'Scope',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scope: 'string',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDoNotCallNumbersResponseBody extends $tea.Model {
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

export class ExportDoNotCallNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportDoNotCallNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportDoNotCallNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessChannelOfStagingRequest extends $tea.Model {
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessChannelOfStagingResponseBody extends $tea.Model {
  code?: string;
  data?: GetAccessChannelOfStagingResponseBodyData;
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
      data: GetAccessChannelOfStagingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessChannelOfStagingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessChannelOfStagingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccessChannelOfStagingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileRequest extends $tea.Model {
  audioResourceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResourceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileResponseBody extends $tea.Model {
  code?: string;
  data?: GetAudioFileResponseBodyData;
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
      data: GetAudioFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAudioFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAudioFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadUrlRequest extends $tea.Model {
  audioResourceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResourceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileDownloadUrlResponseBody extends $tea.Model {
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

export class GetAudioFileDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAudioFileDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAudioFileDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileUploadParametersRequest extends $tea.Model {
  audioFileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileUploadParametersResponseBody extends $tea.Model {
  code?: string;
  data?: GetAudioFileUploadParametersResponseBodyData;
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
      data: GetAudioFileUploadParametersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileUploadParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAudioFileUploadParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAudioFileUploadParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordRequest extends $tea.Model {
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

export class GetCallDetailRecordResponseBody extends $tea.Model {
  code?: string;
  data?: GetCallDetailRecordResponseBodyData;
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
      data: GetCallDetailRecordResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCallDetailRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCallDetailRecordResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCampaignResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetCaseFileUploadUrlRequest extends $tea.Model {
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaseFileUploadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetCaseFileUploadUrlResponseBodyData;
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
      data: GetCaseFileUploadUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaseFileUploadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCaseFileUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCaseFileUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  draftId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      draftId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactFlowResponseBody extends $tea.Model {
  code?: string;
  data?: GetContactFlowResponseBodyData;
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
      data: GetContactFlowResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailRequest extends $tea.Model {
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

export class GetConversationDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  phrases?: GetConversationDetailResponseBodyPhrases[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phrases: 'Phrases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phrases: { 'type': 'array', 'itemType': GetConversationDetailResponseBodyPhrases },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConversationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConversationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataChannelCredentialsRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataChannelCredentialsResponseBody extends $tea.Model {
  code?: string;
  data?: GetDataChannelCredentialsResponseBodyData;
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
      data: GetDataChannelCredentialsResponseBodyData,
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

export class GetDataChannelCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataChannelCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataChannelCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoNotCallFileUploadParametersRequest extends $tea.Model {
  fileName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoNotCallFileUploadParametersResponseBody extends $tea.Model {
  code?: string;
  data?: GetDoNotCallFileUploadParametersResponseBodyData;
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
      data: GetDoNotCallFileUploadParametersResponseBodyData,
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

export class GetDoNotCallFileUploadParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoNotCallFileUploadParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDoNotCallFileUploadParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEarlyMediaRecordingRequest extends $tea.Model {
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

export class GetEarlyMediaRecordingResponseBody extends $tea.Model {
  code?: string;
  data?: GetEarlyMediaRecordingResponseBodyData;
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
      data: GetEarlyMediaRecordingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEarlyMediaRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEarlyMediaRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEarlyMediaRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportRequest extends $tea.Model {
  callingNumber?: string;
  instanceId?: string;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: 'string',
      instanceId: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetHistoricalCallerReportResponseBodyData;
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
      data: GetHistoricalCallerReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoricalCallerReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHistoricalCallerReportResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoricalCampaignReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetHistoricalInstanceReportRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  mediaType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetHistoricalInstanceReportResponseBodyData;
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
      data: GetHistoricalInstanceReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoricalInstanceReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHistoricalInstanceReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
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

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceResponseBodyData;
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
      data: GetInstanceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  mediaType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceTrendingReportResponseBodyData;
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
      data: GetInstanceTrendingReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceTrendingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceTrendingReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsRequest extends $tea.Model {
  chatDeviceId?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      chatDeviceId: 'ChatDeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatDeviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: GetLoginDetailsResponseBodyData;
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
      data: GetLoginDetailsResponseBodyData,
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

export class GetLoginDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingRequest extends $tea.Model {
  contactId?: string;
  expireSeconds?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      expireSeconds: 'ExpireSeconds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      expireSeconds: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponseBody extends $tea.Model {
  code?: string;
  data?: GetMonoRecordingResponseBodyData;
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
      data: GetMonoRecordingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMonoRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMonoRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingRequest extends $tea.Model {
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

export class GetMultiChannelRecordingResponseBody extends $tea.Model {
  code?: string;
  data?: GetMultiChannelRecordingResponseBodyData;
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
      data: GetMultiChannelRecordingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMultiChannelRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMultiChannelRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationResponseBody extends $tea.Model {
  code?: string;
  data?: GetNumberLocationResponseBodyData;
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
      data: GetNumberLocationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNumberLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNumberLocationResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealtimeCampaignStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetRealtimeInstanceStatesRequest extends $tea.Model {
  instanceId?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponseBody extends $tea.Model {
  code?: string;
  data?: GetRealtimeInstanceStatesResponseBodyData;
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
      data: GetRealtimeInstanceStatesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealtimeInstanceStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRealtimeInstanceStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupResponseBodyData;
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
      data: GetSkillGroupResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnCredentialsRequest extends $tea.Model {
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

export class GetTurnCredentialsResponseBody extends $tea.Model {
  code?: string;
  data?: GetTurnCredentialsResponseBodyData;
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
      data: GetTurnCredentialsResponseBodyData,
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

export class GetTurnCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTurnCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTurnCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnServerListRequest extends $tea.Model {
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

export class GetTurnServerListResponseBody extends $tea.Model {
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

export class GetTurnServerListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTurnServerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTurnServerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAudioDataParamsRequest extends $tea.Model {
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

export class GetUploadAudioDataParamsResponseBody extends $tea.Model {
  code?: string;
  data?: GetUploadAudioDataParamsResponseBodyData;
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
      data: GetUploadAudioDataParamsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAudioDataParamsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadAudioDataParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadAudioDataParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  extension?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: string;
  data?: GetUserResponseBodyData;
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
      data: GetUserResponseBodyData,
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

export class GetVideoRequest extends $tea.Model {
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

export class GetVideoResponseBody extends $tea.Model {
  code?: string;
  data?: GetVideoResponseBodyData;
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
      data: GetVideoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVoicemailRecordingRequest extends $tea.Model {
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

export class GetVoicemailRecordingResponseBody extends $tea.Model {
  code?: string;
  data?: GetVoicemailRecordingResponseBodyData;
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
      data: GetVoicemailRecordingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVoicemailRecordingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVoicemailRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVoicemailRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  music?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      music: 'Music',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      music: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBody extends $tea.Model {
  code?: string;
  data?: HoldCallResponseBodyData;
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
      data: HoldCallResponseBodyData,
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

export class HoldCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HoldCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HoldCallResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportAdminsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ImportCustomCallTaggingRequest extends $tea.Model {
  filePath?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomCallTaggingResponseBody extends $tea.Model {
  code?: string;
  data?: ImportCustomCallTaggingResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ImportCustomCallTaggingResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDoNotCallNumbersRequest extends $tea.Model {
  filePath?: string;
  instanceId?: string;
  numberList?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      instanceId: 'string',
      numberList: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDoNotCallNumbersResponseBody extends $tea.Model {
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

export class ImportDoNotCallNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportDoNotCallNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportDoNotCallNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferRequest extends $tea.Model {
  callPriority?: number;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  strategyName?: string;
  strategyParams?: string;
  timeoutSeconds?: number;
  transferee?: string;
  transferor?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callPriority: 'CallPriority',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      strategyName: 'StrategyName',
      strategyParams: 'StrategyParams',
      timeoutSeconds: 'TimeoutSeconds',
      transferee: 'Transferee',
      transferor: 'Transferor',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callPriority: 'number',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      strategyName: 'string',
      strategyParams: 'string',
      timeoutSeconds: 'number',
      transferee: 'string',
      transferor: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  data?: InitiateAttendedTransferResponseBodyData;
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
      data: InitiateAttendedTransferResponseBodyData,
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

export class InitiateAttendedTransferResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitiateAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitiateAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  interceptedUserId?: string;
  jobId?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      interceptedUserId: 'InterceptedUserId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      interceptedUserId: 'string',
      jobId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBody extends $tea.Model {
  code?: string;
  data?: InterceptCallResponseBodyData;
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
      data: InterceptCallResponseBodyData,
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

export class InterceptCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InterceptCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InterceptCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationRequest extends $tea.Model {
  contactFlowId?: string;
  contactFlowVariables?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      contactFlowVariables: 'ContactFlowVariables',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      contactFlowVariables: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBody extends $tea.Model {
  code?: string;
  data?: LaunchAuthenticationResponseBodyData;
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
      data: LaunchAuthenticationResponseBodyData,
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

export class LaunchAuthenticationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LaunchAuthenticationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LaunchAuthenticationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyRequest extends $tea.Model {
  contactFlowId?: string;
  contactFlowVariables?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  smsMetadataId?: string;
  surveyChannel?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      contactFlowVariables: 'ContactFlowVariables',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      smsMetadataId: 'SmsMetadataId',
      surveyChannel: 'SurveyChannel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      contactFlowVariables: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      smsMetadataId: 'string',
      surveyChannel: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBody extends $tea.Model {
  code?: string;
  data?: LaunchSurveyResponseBodyData;
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
      data: LaunchSurveyResponseBodyData,
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

export class LaunchSurveyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LaunchSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LaunchSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsRequest extends $tea.Model {
  agentId?: string;
  endTime?: number;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAgentStateLogsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAgentStateLogsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentStateLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentStateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesRequest extends $tea.Model {
  agentIds?: string;
  excludeOfflineUsers?: boolean;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      excludeOfflineUsers: 'ExcludeOfflineUsers',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      excludeOfflineUsers: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAgentStatesResponseBodyData;
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
      data: ListAgentStatesResponseBodyData,
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

export class ListAgentStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightRequest extends $tea.Model {
  agentIds?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentSummaryReportsSinceMidnightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentSummaryReportsSinceMidnightResponseBody,
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
  criteria?: string;
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
      criteria: 'Criteria',
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
      criteria: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAttemptsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListAudioFilesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAudioFilesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAudioFilesResponseBodyData;
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
      data: ListAudioFilesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAudioFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAudioFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAudioFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  mediaType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: ListBriefSkillGroupsResponseBodyData;
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
      data: ListBriefSkillGroupsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBriefSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBriefSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsRequest extends $tea.Model {
  agentId?: string;
  calledNumber?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactDispositionList?: string;
  contactId?: string;
  contactType?: string;
  contactTypeList?: string;
  criteria?: string;
  earlyMediaStateList?: string;
  endTime?: number;
  instanceId?: string;
  orderByField?: string;
  pageNumber?: number;
  pageSize?: number;
  satisfactionDescriptionList?: string;
  satisfactionList?: string;
  satisfactionSurveyChannel?: string;
  skillGroupId?: string;
  sortOrder?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactDispositionList: 'ContactDispositionList',
      contactId: 'ContactId',
      contactType: 'ContactType',
      contactTypeList: 'ContactTypeList',
      criteria: 'Criteria',
      earlyMediaStateList: 'EarlyMediaStateList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      satisfactionDescriptionList: 'SatisfactionDescriptionList',
      satisfactionList: 'SatisfactionList',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      skillGroupId: 'SkillGroupId',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactDispositionList: 'string',
      contactId: 'string',
      contactType: 'string',
      contactTypeList: 'string',
      criteria: 'string',
      earlyMediaStateList: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      satisfactionDescriptionList: 'string',
      satisfactionList: 'string',
      satisfactionSurveyChannel: 'string',
      skillGroupId: 'string',
      sortOrder: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCallDetailRecordsResponseBodyData;
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
      data: ListCallDetailRecordsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCallDetailRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallDetailRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTagsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTagsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCallTagsResponseBodyData;
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
      data: ListCallTagsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCallTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallTagsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCampaignTrendingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCampaignsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  state?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      state: 'string',
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
      data: ListCasesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCasesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListConfigItemsRequest extends $tea.Model {
  instanceId?: string;
  objectId?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigItemsResponseBody extends $tea.Model {
  code?: string;
  data?: ListConfigItemsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListConfigItemsResponseBodyData },
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

export class ListConfigItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsRequest extends $tea.Model {
  instanceId?: string;
  orderByField?: string;
  pageNumber?: number;
  pageSize?: number;
  sortOrder?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortOrder: 'SortOrder',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortOrder: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBody extends $tea.Model {
  code?: string;
  data?: ListContactFlowsResponseBodyData;
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
      data: ListContactFlowsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListContactFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListContactFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingRequest extends $tea.Model {
  callTagNameList?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBody extends $tea.Model {
  code?: string;
  data?: ListCustomCallTaggingResponseBodyData;
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
      data: ListCustomCallTaggingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
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

export class ListDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListDevicesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDevicesResponseBodyData },
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

export class ListDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  scope?: string;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scope: 'Scope',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scope: 'string',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: ListDoNotCallNumbersResponseBodyData;
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
      data: ListDoNotCallNumbersResponseBodyData,
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

export class ListDoNotCallNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoNotCallNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDoNotCallNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportRequest extends $tea.Model {
  agentIdList?: string;
  instanceId?: string;
  mediaType?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  startTime?: number;
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListHistoricalAgentReportResponseBodyData;
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
      data: ListHistoricalAgentReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHistoricalAgentReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHistoricalAgentReportResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHistoricalAgentSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListHistoricalSkillGroupReportRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  mediaType?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
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

export class ListHistoricalSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListHistoricalSkillGroupReportResponseBodyData;
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
      data: ListHistoricalSkillGroupReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHistoricalSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHistoricalSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
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

export class ListInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: ListInstancesResponseBodyData;
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
      data: ListInstancesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserRequest extends $tea.Model {
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

export class ListInstancesOfUserResponseBody extends $tea.Model {
  code?: string;
  data?: ListInstancesOfUserResponseBodyData;
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
      data: ListInstancesOfUserResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportRequest extends $tea.Model {
  agentId?: string;
  endTime?: number;
  instanceId?: string;
  interval?: string;
  mediaType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      mediaType: 'MediaType',
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
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListIntervalAgentReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervalAgentReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntervalAgentReportResponseBody,
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
  skillGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervalAgentSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListIntervalInstanceReportRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  interval?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListIntervalInstanceReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalInstanceReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervalInstanceReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntervalInstanceReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  interval?: string;
  mediaType?: string;
  skillGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
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

export class ListIntervalSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  data?: ListIntervalSkillGroupReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalSkillGroupReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervalSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntervalSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsRequest extends $tea.Model {
  contactId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListIvrTrackingDetailsResponseBodyData;
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
      data: ListIvrTrackingDetailsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIvrTrackingDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIvrTrackingDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentEventLogsRequest extends $tea.Model {
  agentId?: string;
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentEventLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLegacyAgentEventLogsResponseBodyData;
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
      data: ListLegacyAgentEventLogsResponseBodyData,
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

export class ListLegacyAgentEventLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLegacyAgentEventLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLegacyAgentEventLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentStatusLogsRequest extends $tea.Model {
  agentId?: string;
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentStatusLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLegacyAgentStatusLogsResponseBodyData;
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
      data: ListLegacyAgentStatusLogsResponseBodyData,
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

export class ListLegacyAgentStatusLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLegacyAgentStatusLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLegacyAgentStatusLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAppraiseLogsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAppraiseLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLegacyAppraiseLogsResponseBodyData;
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
      data: ListLegacyAppraiseLogsResponseBodyData,
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

export class ListLegacyAppraiseLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLegacyAppraiseLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLegacyAppraiseLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyQueueEventLogsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyQueueEventLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLegacyQueueEventLogsResponseBodyData;
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
      data: ListLegacyQueueEventLogsResponseBodyData,
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

export class ListLegacyQueueEventLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLegacyQueueEventLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLegacyQueueEventLogsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMonoRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListMultiChannelRecordingsRequest extends $tea.Model {
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

export class ListMultiChannelRecordingsResponseBody extends $tea.Model {
  code?: string;
  data?: ListMultiChannelRecordingsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListMultiChannelRecordingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiChannelRecordingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMultiChannelRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMultiChannelRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBody extends $tea.Model {
  code?: string;
  data?: ListOutboundNumbersOfUserResponseBodyData;
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
      data: ListOutboundNumbersOfUserResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOutboundNumbersOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOutboundNumbersOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserRequest extends $tea.Model {
  instanceId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonalNumbersOfUserResponseBodyData;
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
      data: ListPersonalNumbersOfUserResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPersonalNumbersOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPersonalNumbersOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersRequest extends $tea.Model {
  active?: boolean;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: ListPhoneNumbersResponseBodyData;
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
      data: ListPhoneNumbersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupRequest extends $tea.Model {
  active?: boolean;
  instanceId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: ListPhoneNumbersOfSkillGroupResponseBodyData;
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
      data: ListPhoneNumbersOfSkillGroupResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPhoneNumbersOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPhoneNumbersOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivilegesOfUserRequest extends $tea.Model {
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

export class ListPrivilegesOfUserResponseBody extends $tea.Model {
  code?: string;
  data?: ListPrivilegesOfUserResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListPrivilegesOfUserResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivilegesOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivilegesOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivilegesOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBody extends $tea.Model {
  code?: string;
  data?: ListRamUsersResponseBodyData;
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
      data: ListRamUsersResponseBodyData,
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

export class ListRamUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRamUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRamUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesRequest extends $tea.Model {
  agentIdList?: string;
  agentName?: string;
  callTypeList?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  skillGroupId?: string;
  stateList?: string;
  workModeList?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      agentName: 'AgentName',
      callTypeList: 'CallTypeList',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      skillGroupId: 'SkillGroupId',
      stateList: 'StateList',
      workModeList: 'WorkModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      agentName: 'string',
      callTypeList: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      skillGroupId: 'string',
      stateList: 'string',
      workModeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRealtimeAgentStatesResponseBodyData;
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
      data: ListRealtimeAgentStatesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRealtimeAgentStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRealtimeAgentStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRealtimeSkillGroupStatesResponseBodyData;
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
      data: ListRealtimeSkillGroupStatesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRealtimeSkillGroupStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRealtimeSkillGroupStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsRequest extends $tea.Model {
  criteria?: string;
  endTime?: number;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBody extends $tea.Model {
  code?: string;
  data?: ListRecentCallDetailRecordsResponseBodyData;
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
      data: ListRecentCallDetailRecordsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecentCallDetailRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecentCallDetailRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
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

export class ListRolesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRolesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupStatesResponseBodyData;
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
      data: ListSkillGroupStatesResponseBodyData,
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

export class ListSkillGroupStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillGroupStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroups?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroups: 'SkillGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroups: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupSummaryReportsSinceMidnightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillGroupSummaryReportsSinceMidnightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  mediaType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupsResponseBodyData;
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
      data: ListSkillGroupsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserRequest extends $tea.Model {
  instanceId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillLevelsOfUserResponseBodyData;
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
      data: ListSkillLevelsOfUserResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillLevelsOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillLevelsOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: ListUnassignedNumbersResponseBodyData;
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
      data: ListUnassignedNumbersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUnassignedNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUnassignedNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  data?: ListUserLevelsOfSkillGroupResponseBodyData;
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
      data: ListUserLevelsOfSkillGroupResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserLevelsOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserLevelsOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  data?: ListUsersResponseBodyData;
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
      data: ListUsersResponseBodyData,
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

export class ListVoicemailsRequest extends $tea.Model {
  caller?: string;
  contactId?: string;
  endTime?: number;
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      contactId: 'ContactId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      contactId: 'string',
      endTime: 'number',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicemailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListVoicemailsResponseBodyData;
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
      data: ListVoicemailsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicemailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVoicemailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoicemailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallRequest extends $tea.Model {
  callee?: string;
  caller?: string;
  deviceId?: string;
  instanceId?: string;
  maskedCallee?: string;
  mediaType?: string;
  tags?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      maskedCallee: 'MaskedCallee',
      mediaType: 'MediaType',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      instanceId: 'string',
      maskedCallee: 'string',
      mediaType: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBody extends $tea.Model {
  code?: string;
  data?: MakeCallResponseBodyData;
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
      data: MakeCallResponseBodyData,
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

export class MakeCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MakeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MakeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAudioFileRequest extends $tea.Model {
  audioFileName?: string;
  audioResourceId?: string;
  instanceId?: string;
  name?: string;
  ossFileKey?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAudioFileResponseBody extends $tea.Model {
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

export class ModifyAudioFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAudioFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAudioFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomCallTaggingRequest extends $tea.Model {
  callTagNameList?: string;
  description?: string;
  instanceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      description: 'Description',
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
      description: 'string',
      instanceId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomCallTaggingResponseBody extends $tea.Model {
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

export class ModifyCustomCallTaggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCustomCallTaggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCustomCallTaggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
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

export class ModifyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  number?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberResponseBody extends $tea.Model {
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

export class ModifyPhoneNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupRequest extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupResponseBody extends $tea.Model {
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

export class ModifySkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillLevelsOfUserRequest extends $tea.Model {
  instanceId?: string;
  skillLevelList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillLevelList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillLevelsOfUserResponseBody extends $tea.Model {
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

export class ModifySkillLevelsOfUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySkillLevelsOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySkillLevelsOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  avatarUrl?: string;
  displayId?: string;
  displayName?: string;
  force?: boolean;
  instanceId?: string;
  mobile?: string;
  nickname?: string;
  roleId?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      force: 'Force',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      nickname: 'Nickname',
      roleId: 'RoleId',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayId: 'string',
      displayName: 'string',
      force: 'boolean',
      instanceId: 'string',
      mobile: 'string',
      nickname: 'string',
      roleId: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $tea.Model {
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

export class ModifyUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserLevelsOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  userLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userLevelList: 'UserLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userLevelList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserLevelsOfSkillGroupResponseBody extends $tea.Model {
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

export class ModifyUserLevelsOfSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserLevelsOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserLevelsOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  monitoredUserId?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      monitoredUserId: 'MonitoredUserId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      monitoredUserId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBody extends $tea.Model {
  code?: string;
  data?: MonitorCallResponseBodyData;
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
      data: MonitorCallResponseBodyData,
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

export class MonitorCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MonitorCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MonitorCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBody extends $tea.Model {
  code?: string;
  data?: MuteCallResponseBodyData;
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
      data: MuteCallResponseBodyData,
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

export class MuteCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MuteCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MuteCallResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class PickOutboundNumbersRequest extends $tea.Model {
  calledNumber?: string;
  count?: number;
  instanceId?: string;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      count: 'Count',
      instanceId: 'InstanceId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      count: 'number',
      instanceId: 'string',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: PickOutboundNumbersResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': PickOutboundNumbersResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PickOutboundNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PickOutboundNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBody extends $tea.Model {
  code?: string;
  data?: PollUserStatusResponseBodyData;
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
      data: PollUserStatusResponseBodyData,
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

export class PollUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PollUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PollUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessAliMeCallbackOfStagingRequest extends $tea.Model {
  data?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessAliMeCallbackOfStagingResponseBody extends $tea.Model {
  code?: string;
  data?: ProcessAliMeCallbackOfStagingResponseBodyData;
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
      data: ProcessAliMeCallbackOfStagingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessAliMeCallbackOfStagingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProcessAliMeCallbackOfStagingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ProcessAliMeCallbackOfStagingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  draftId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      draftId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishContactFlowResponseBody extends $tea.Model {
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

export class PublishContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceResponseBody extends $tea.Model {
  code?: string;
  data?: ReadyForServiceResponseBodyData;
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
      data: ReadyForServiceResponseBodyData,
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

export class ReadyForServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReadyForServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReadyForServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallRequest extends $tea.Model {
  callee?: string;
  caller?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  tags?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallResponseBody extends $tea.Model {
  code?: string;
  data?: RedialCallResponseBodyData;
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
      data: RedialCallResponseBodyData,
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

export class RedialCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RedialCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RedialCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $tea.Model {
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

export class RegisterDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDevicesRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  password?: string;
  userIdListJson?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      password: 'Password',
      userIdListJson: 'UserIdListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      password: 'string',
      userIdListJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDevicesResponseBody extends $tea.Model {
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

export class RegisterDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBody extends $tea.Model {
  code?: string;
  data?: ReleaseCallResponseBodyData;
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
      data: ReleaseCallResponseBodyData,
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

export class ReleaseCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDoNotCallNumbersRequest extends $tea.Model {
  instanceId?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDoNotCallNumbersResponseBody extends $tea.Model {
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

export class RemoveDoNotCallNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDoNotCallNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveDoNotCallNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePersonalNumbersFromUserRequest extends $tea.Model {
  instanceId?: string;
  numberList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePersonalNumbersFromUserResponseBody extends $tea.Model {
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

export class RemovePersonalNumbersFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePersonalNumbersFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePersonalNumbersFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumberFromSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumberFromSkillGroupsResponseBody extends $tea.Model {
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

export class RemovePhoneNumberFromSkillGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePhoneNumberFromSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePhoneNumberFromSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersRequest extends $tea.Model {
  force?: boolean;
  instanceId?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceId: 'string',
      numberList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
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

export class RemovePhoneNumbersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersFromSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  numberList?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersFromSkillGroupResponseBody extends $tea.Model {
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

export class RemovePhoneNumbersFromSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePhoneNumbersFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePhoneNumbersFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupsFromUserRequest extends $tea.Model {
  instanceId?: string;
  skillGroupIdList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupIdList: 'SkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupIdList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupsFromUserResponseBody extends $tea.Model {
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

export class RemoveSkillGroupsFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveSkillGroupsFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSkillGroupsFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $tea.Model {
  filePath?: string;
  force?: boolean;
  instanceId?: string;
  notificationEmail?: string;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      force: 'Force',
      instanceId: 'InstanceId',
      notificationEmail: 'NotificationEmail',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      force: 'boolean',
      instanceId: 'string',
      notificationEmail: 'string',
      userIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $tea.Model {
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

export class RemoveUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      userIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromSkillGroupResponseBody extends $tea.Model {
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

export class RemoveUsersFromSkillGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateResponseBody extends $tea.Model {
  code?: string;
  data?: ResetAgentStateResponseBodyData;
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
      data: ResetAgentStateResponseBodyData,
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

export class ResetAgentStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAgentStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAgentStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $tea.Model {
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

export class ResetUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreArchivedRecordingsRequest extends $tea.Model {
  contactIds?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreArchivedRecordingsResponseBody extends $tea.Model {
  code?: string;
  data?: RestoreArchivedRecordingsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': RestoreArchivedRecordingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreArchivedRecordingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreArchivedRecordingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreArchivedRecordingsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RetrieveCallRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBody extends $tea.Model {
  code?: string;
  data?: RetrieveCallResponseBodyData;
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
      data: RetrieveCallResponseBodyData,
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

export class RetrieveCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetrieveCallResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveRTCStatsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveTerminalLogResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SaveWebRTCStatsRequest extends $tea.Model {
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

export class SaveWebRTCStatsResponseBody extends $tea.Model {
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

export class SaveWebRTCStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveWebRTCStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveWebRTCStatsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveWebRtcInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SendDtmfSignalingRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  dtmf?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      dtmf: 'Dtmf',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      dtmf: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBody extends $tea.Model {
  code?: string;
  data?: SendDtmfSignalingResponseBodyData;
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
      data: SendDtmfSignalingResponseBodyData,
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

export class SendDtmfSignalingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendDtmfSignalingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendDtmfSignalingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupRequest extends $tea.Model {
  additivity?: boolean;
  chatDeviceId?: string;
  deviceId?: string;
  instanceId?: string;
  signedSkillGroupIdList?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      additivity: 'Additivity',
      chatDeviceId: 'ChatDeviceId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additivity: 'boolean',
      chatDeviceId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      signedSkillGroupIdList: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupResponseBody extends $tea.Model {
  code?: string;
  data?: SignInGroupResponseBodyData;
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
      data: SignInGroupResponseBodyData,
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

export class SignInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SignInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupResponseBody extends $tea.Model {
  code?: string;
  data?: SignOutGroupResponseBodyData;
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
      data: SignOutGroupResponseBodyData,
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

export class SignOutGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignOutGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SignOutGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallRequest extends $tea.Model {
  additionalBroker?: string;
  broker?: string;
  callee?: string;
  caller?: string;
  instanceId?: string;
  tags?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      additionalBroker: 'AdditionalBroker',
      broker: 'Broker',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalBroker: 'string',
      broker: 'string',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBody extends $tea.Model {
  code?: string;
  data?: StartBack2BackCallResponseBodyData;
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
      data: StartBack2BackCallResponseBodyData,
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

export class StartBack2BackCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartBack2BackCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartBack2BackCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceRequest extends $tea.Model {
  instanceId?: string;
  participantListJson?: string;
  tags?: string;
  timeoutSeconds?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      participantListJson: 'ParticipantListJson',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      participantListJson: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceResponseBody extends $tea.Model {
  code?: string;
  data?: StartConferenceResponseBodyData;
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
      data: StartConferenceResponseBodyData,
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

export class StartConferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEditContactFlowRequest extends $tea.Model {
  contactFlowId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEditContactFlowResponseBody extends $tea.Model {
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

export class StartEditContactFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEditContactFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartEditContactFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallRequest extends $tea.Model {
  callee?: string;
  caller?: string;
  contactFlowId?: string;
  contactFlowVariables?: string;
  instanceId?: string;
  maskedCallee?: string;
  skillGroupId?: string;
  tags?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      contactFlowId: 'ContactFlowId',
      contactFlowVariables: 'ContactFlowVariables',
      instanceId: 'InstanceId',
      maskedCallee: 'MaskedCallee',
      skillGroupId: 'SkillGroupId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      contactFlowId: 'string',
      contactFlowVariables: 'string',
      instanceId: 'string',
      maskedCallee: 'string',
      skillGroupId: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBody extends $tea.Model {
  code?: string;
  data?: StartPredictiveCallResponseBodyData;
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
      data: StartPredictiveCallResponseBodyData,
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

export class StartPredictiveCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartPredictiveCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartPredictiveCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPrivacyCallRequest extends $tea.Model {
  appId?: string;
  callee?: string;
  caller?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPrivacyCallResponseBody extends $tea.Model {
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

export class StartPrivacyCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartPrivacyCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartPrivacyCallResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SwitchToConferenceRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToConferenceResponseBody extends $tea.Model {
  code?: string;
  data?: SwitchToConferenceResponseBodyData;
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
      data: SwitchToConferenceResponseBodyData,
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

export class SwitchToConferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchToConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchToConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakRequest extends $tea.Model {
  code?: string;
  deviceId?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakResponseBody extends $tea.Model {
  code?: string;
  data?: TakeBreakResponseBodyData;
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
      data: TakeBreakResponseBodyData,
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

export class TakeBreakResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TakeBreakResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TakeBreakResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallRequest extends $tea.Model {
  channelId?: string;
  deviceId?: string;
  instanceId?: string;
  jobId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBody extends $tea.Model {
  code?: string;
  data?: UnmuteCallResponseBodyData;
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
      data: UnmuteCallResponseBodyData,
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

export class UnmuteCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnmuteCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnmuteCallResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnregisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateCampaignRequest extends $tea.Model {
  callableTime?: string;
  campaignId?: string;
  contactFlowId?: string;
  endTime?: string;
  instanceId?: string;
  name?: string;
  startTime?: string;
  strategyParameters?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      campaignId: 'CampaignId',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      name: 'Name',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      campaignId: 'string',
      contactFlowId: 'string',
      endTime: 'string',
      instanceId: 'string',
      name: 'string',
      startTime: 'string',
      strategyParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCampaignResponseBody extends $tea.Model {
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

export class UpdateCampaignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigItemsRequest extends $tea.Model {
  configItems?: string;
  instanceId?: string;
  objectId?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      configItems: 'ConfigItems',
      instanceId: 'InstanceId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItems: 'string',
      instanceId: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigItemsResponseBody extends $tea.Model {
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

export class UpdateConfigItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasesRequestCaseList extends $tea.Model {
  caller?: string;
  customVariables?: string;
  maskedCallee?: string;
  phoneNumber?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      customVariables: 'string',
      maskedCallee: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelId?: string;
  channelState?: string;
  channelVariables?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      channelVariables: 'ChannelVariables',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      channelVariables: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: AnswerCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': AnswerCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyData extends $tea.Model {
  callContext?: AnswerCallResponseBodyDataCallContext;
  contextId?: number;
  userContext?: AnswerCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: AnswerCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: AnswerCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendCasesRequestBody extends $tea.Model {
  agentId?: string;
  caller?: string;
  customVariables?: string;
  maskedCallee?: string;
  phoneNumber?: string;
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      caller: 'string',
      customVariables: 'string',
      maskedCallee: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: BargeInCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': BargeInCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyData extends $tea.Model {
  callContext?: BargeInCallResponseBodyDataCallContext;
  userContext?: BargeInCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: BargeInCallResponseBodyDataCallContext,
      userContext: BargeInCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: BlindTransferResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': BlindTransferResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyData extends $tea.Model {
  callContext?: BlindTransferResponseBodyDataCallContext;
  contextId?: number;
  userContext?: BlindTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: BlindTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: BlindTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BridgeRtcCallResponseBodyData extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  tokenInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      tokenInfo: 'TokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      tokenInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: CancelAttendedTransferResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': CancelAttendedTransferResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyData extends $tea.Model {
  callContext?: CancelAttendedTransferResponseBodyDataCallContext;
  contextId?: number;
  userContext?: CancelAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CancelAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: CancelAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: CoachCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': CoachCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyData extends $tea.Model {
  callContext?: CoachCallResponseBodyDataCallContext;
  userContext?: CoachCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CoachCallResponseBodyDataCallContext,
      userContext: CoachCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: CompleteAttendedTransferResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': CompleteAttendedTransferResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyData extends $tea.Model {
  callContext?: CompleteAttendedTransferResponseBodyDataCallContext;
  contextId?: number;
  userContext?: CompleteAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CompleteAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: CompleteAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTagsResponseBodyData extends $tea.Model {
  item?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      reason: 'string',
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

export class CreateCustomCallTaggingResponseBodyData extends $tea.Model {
  item?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBodyData extends $tea.Model {
  description?: string;
  instanceId?: string;
  mediaType?: string;
  name?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      mediaType: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyData extends $tea.Model {
  avatarUrl?: string;
  displayName?: string;
  email?: string;
  extension?: string;
  loginName?: string;
  mobile?: string;
  nickname?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceResponseBodyDataCallContext extends $tea.Model {
  channelContexts?: EndConferenceResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelContexts: { 'type': 'array', 'itemType': EndConferenceResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndConferenceResponseBodyData extends $tea.Model {
  callContext?: EndConferenceResponseBodyDataCallContext;
  contextId?: number;
  userContext?: EndConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: EndConferenceResponseBodyDataCallContext,
      contextId: 'number',
      userContext: EndConferenceResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessChannelOfStagingResponseBodyData extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileResponseBodyData extends $tea.Model {
  audioFileName?: string;
  audioResourceId?: string;
  createdTime?: string;
  instanceId?: string;
  name?: string;
  ossFileKey?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      createdTime: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileUploadParametersResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  expireTime?: number;
  filePath?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      filePath: 'FilePath',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'number',
      filePath: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAgentEventsEventSequence extends $tea.Model {
  duration?: number;
  event?: string;
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      event: 'string',
      eventTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAgentEvents extends $tea.Model {
  agentId?: string;
  agentName?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataAgentEventsEventSequence[];
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      eventSequence: 'EventSequence',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEventsEventSequence },
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence extends $tea.Model {
  event?: string;
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataCustomerEvents extends $tea.Model {
  customerId?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataIvrEventsEventSequence extends $tea.Model {
  event?: string;
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataIvrEvents extends $tea.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataIvrEventsEventSequence[];
  flowId?: string;
  flowType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      flowType: 'FlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEventsEventSequence },
      flowId: 'string',
      flowType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataQueueEventsEventSequence extends $tea.Model {
  event?: string;
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataQueueEvents extends $tea.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataQueueEventsEventSequence[];
  flowId?: string;
  queueId?: string;
  queueName?: string;
  queueType?: number;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      queueId: 'QueueId',
      queueName: 'QueueName',
      queueType: 'QueueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEventsEventSequence },
      flowId: 'string',
      queueId: 'string',
      queueName: 'string',
      queueType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyData extends $tea.Model {
  agentEvents?: GetCallDetailRecordResponseBodyDataAgentEvents[];
  agentIds?: string;
  agentNames?: string;
  callDuration?: number;
  calledNumber?: string;
  calleeLocation?: string;
  callerLocation?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  customerEvents?: GetCallDetailRecordResponseBodyDataCustomerEvents[];
  earlyMediaState?: string;
  establishedTime?: number;
  instanceId?: string;
  ivrEvents?: GetCallDetailRecordResponseBodyDataIvrEvents[];
  queueEvents?: GetCallDetailRecordResponseBodyDataQueueEvents[];
  recordingReady?: boolean;
  releaseInitiator?: string;
  releaseReason?: string;
  releaseTime?: number;
  satisfaction?: number;
  satisfactionSurveyChannel?: string;
  satisfactionSurveyOffered?: boolean;
  skillGroupIds?: string;
  skillGroupNames?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentEvents: 'AgentEvents',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      customerEvents: 'CustomerEvents',
      earlyMediaState: 'EarlyMediaState',
      establishedTime: 'EstablishedTime',
      instanceId: 'InstanceId',
      ivrEvents: 'IvrEvents',
      queueEvents: 'QueueEvents',
      recordingReady: 'RecordingReady',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      releaseTime: 'ReleaseTime',
      satisfaction: 'Satisfaction',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEvents },
      agentIds: 'string',
      agentNames: 'string',
      callDuration: 'number',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      customerEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEvents },
      earlyMediaState: 'string',
      establishedTime: 'number',
      instanceId: 'string',
      ivrEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEvents },
      queueEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEvents },
      recordingReady: 'boolean',
      releaseInitiator: 'string',
      releaseReason: 'string',
      releaseTime: 'number',
      satisfaction: 'number',
      satisfactionSurveyChannel: 'string',
      satisfactionSurveyOffered: 'boolean',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
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
  casesUncompletedAfterAttempt?: string;
  casesUncompletedAfterAttempted?: number;
  completionRate?: number;
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
      casesUncompletedAfterAttempt: 'CasesUncompletedAfterAttempt',
      casesUncompletedAfterAttempted: 'CasesUncompletedAfterAttempted',
      completionRate: 'CompletionRate',
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
      casesUncompletedAfterAttempt: 'string',
      casesUncompletedAfterAttempted: 'number',
      completionRate: 'number',
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

export class GetCaseFileUploadUrlResponseBodyData extends $tea.Model {
  caseFileKey?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      caseFileKey: 'CaseFileKey',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseFileKey: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactFlowResponseBodyData extends $tea.Model {
  contactFlowId?: string;
  createdTime?: string;
  definition?: string;
  description?: string;
  draftId?: string;
  editor?: string;
  instanceId?: string;
  name?: string;
  published?: boolean;
  type?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      published: 'Published',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailResponseBodyPhrases extends $tea.Model {
  begin?: number;
  end?: number;
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataChannelCredentialsResponseBodyData extends $tea.Model {
  clientId?: string;
  deviceId?: string;
  endpoint?: string;
  expiredTime?: number;
  password?: string;
  topic?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      deviceId: 'DeviceId',
      endpoint: 'Endpoint',
      expiredTime: 'ExpiredTime',
      password: 'Password',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      deviceId: 'string',
      endpoint: 'string',
      expiredTime: 'number',
      password: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoNotCallFileUploadParametersResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  expireTime?: number;
  filePath?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      filePath: 'FilePath',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'number',
      filePath: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEarlyMediaRecordingResponseBodyData extends $tea.Model {
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportResponseBodyData extends $tea.Model {
  lastCallingTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      lastCallingTime: 'LastCallingTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastCallingTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCampaignReportResponseBodyData extends $tea.Model {
  abandonRate?: number;
  abandonedRate?: number;
  answerRate?: number;
  callsAbandoned?: number;
  callsConnected?: number;
  callsDialed?: number;
  connectedRate?: number;
  occupancyRate?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      abandonedRate: 'AbandonedRate',
      answerRate: 'AnswerRate',
      callsAbandoned: 'CallsAbandoned',
      callsConnected: 'CallsConnected',
      callsDialed: 'CallsDialed',
      connectedRate: 'ConnectedRate',
      occupancyRate: 'OccupancyRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      abandonedRate: 'number',
      answerRate: 'number',
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

export class GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList extends $tea.Model {
  accessChannelType?: string;
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataInbound extends $tea.Model {
  abandonRate?: number;
  accessChannelTypeDetailList?: GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList[];
  averageAbandonTime?: number;
  averageAbandonedInIVRTime?: number;
  averageAbandonedInQueueTime?: number;
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsAbandonedInRing?: number;
  callsAbandonedInVoiceNavigator?: number;
  callsAttendedTransferred?: number;
  callsBlindTransferred?: number;
  callsCausedIVRException?: number;
  callsForwardToOutsideNumber?: number;
  callsHandled?: number;
  callsHold?: number;
  callsIVRException?: number;
  callsOffered?: number;
  callsQueued?: number;
  callsQueuingFailed?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  callsRinged?: number;
  callsToVoicemail?: number;
  callsVoicemail?: number;
  handleRate?: number;
  maxAbandonTime?: number;
  maxAbandonedInIVRTime?: number;
  maxAbandonedInQueueTime?: number;
  maxAbandonedInRingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel15?: number;
  serviceLevel20?: number;
  serviceLevel30?: number;
  totalAbandonTime?: number;
  totalAbandonedInIVRTime?: number;
  totalAbandonedInQueueTime?: number;
  totalAbandonedInRingTime?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      accessChannelTypeDetailList: 'AccessChannelTypeDetailList',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInIVRTime: 'AverageAbandonedInIVRTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAbandonedInVoiceNavigator: 'CallsAbandonedInVoiceNavigator',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
      callsCausedIVRException: 'CallsCausedIVRException',
      callsForwardToOutsideNumber: 'CallsForwardToOutsideNumber',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsIVRException: 'CallsIVRException',
      callsOffered: 'CallsOffered',
      callsQueued: 'CallsQueued',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsToVoicemail: 'CallsToVoicemail',
      callsVoicemail: 'CallsVoicemail',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInIVRTime: 'MaxAbandonedInIVRTime',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel15: 'ServiceLevel15',
      serviceLevel20: 'ServiceLevel20',
      serviceLevel30: 'ServiceLevel30',
      totalAbandonTime: 'TotalAbandonTime',
      totalAbandonedInIVRTime: 'TotalAbandonedInIVRTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      accessChannelTypeDetailList: { 'type': 'array', 'itemType': GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList },
      averageAbandonTime: 'number',
      averageAbandonedInIVRTime: 'number',
      averageAbandonedInQueueTime: 'number',
      averageAbandonedInRingTime: 'number',
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAbandonedInVoiceNavigator: 'number',
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
      callsCausedIVRException: 'number',
      callsForwardToOutsideNumber: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsIVRException: 'number',
      callsOffered: 'number',
      callsQueued: 'number',
      callsQueuingFailed: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsToVoicemail: 'number',
      callsVoicemail: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInIVRTime: 'number',
      maxAbandonedInQueueTime: 'number',
      maxAbandonedInRingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel15: 'number',
      serviceLevel20: 'number',
      serviceLevel30: 'number',
      totalAbandonTime: 'number',
      totalAbandonedInIVRTime: 'number',
      totalAbandonedInQueueTime: 'number',
      totalAbandonedInRingTime: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataInternal extends $tea.Model {
  callsAnswered?: number;
  callsDialed?: number;
  static names(): { [key: string]: string } {
    return {
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAnswered: 'number',
      callsDialed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsAttendedTransferred?: number;
  callsBlindTransferred?: number;
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
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
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
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
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

export class GetHistoricalInstanceReportResponseBodyDataOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxBreakTime?: number;
  maxHoldTime?: number;
  maxLoggedInAgents?: number;
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
      maxBreakTime: 'MaxBreakTime',
      maxHoldTime: 'MaxHoldTime',
      maxLoggedInAgents: 'MaxLoggedInAgents',
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
      maxBreakTime: 'number',
      maxHoldTime: 'number',
      maxLoggedInAgents: 'number',
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
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyData extends $tea.Model {
  inbound?: GetHistoricalInstanceReportResponseBodyDataInbound;
  internal?: GetHistoricalInstanceReportResponseBodyDataInternal;
  outbound?: GetHistoricalInstanceReportResponseBodyDataOutbound;
  overall?: GetHistoricalInstanceReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetHistoricalInstanceReportResponseBodyDataInbound,
      internal: GetHistoricalInstanceReportResponseBodyDataInternal,
      outbound: GetHistoricalInstanceReportResponseBodyDataOutbound,
      overall: GetHistoricalInstanceReportResponseBodyDataOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataAdminList extends $tea.Model {
  displayName?: string;
  email?: string;
  extension?: string;
  instanceId?: string;
  loginName?: string;
  mobile?: string;
  roleId?: string;
  roleName?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNumberListSkillGroups extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  name?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNumberList extends $tea.Model {
  active?: boolean;
  city?: string;
  contactFlowId?: string;
  instanceId?: string;
  number?: string;
  province?: string;
  skillGroups?: GetInstanceResponseBodyDataNumberListSkillGroups[];
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
      skillGroups: 'SkillGroups',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberListSkillGroups },
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  adminList?: GetInstanceResponseBodyDataAdminList[];
  aliyunUid?: string;
  consoleUrl?: string;
  description?: string;
  domainName?: string;
  id?: string;
  name?: string;
  numberList?: GetInstanceResponseBodyDataNumberList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      aliyunUid: 'AliyunUid',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      domainName: 'DomainName',
      id: 'Id',
      name: 'Name',
      numberList: 'NumberList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyDataInbound extends $tea.Model {
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsAbandonedInRing?: number;
  callsHandled?: number;
  callsQueued?: number;
  statsTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsHandled: 'CallsHandled',
      callsQueued: 'CallsQueued',
      statsTime: 'StatsTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsHandled: 'number',
      callsQueued: 'number',
      statsTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyDataOutbound extends $tea.Model {
  callsAnswered?: number;
  statsTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      callsAnswered: 'CallsAnswered',
      statsTime: 'StatsTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAnswered: 'number',
      statsTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyDataOverall extends $tea.Model {
  maxLoggedInAgents?: number;
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxLoggedInAgents: 'MaxLoggedInAgents',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxLoggedInAgents: 'number',
      statsTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyData extends $tea.Model {
  inbound?: GetInstanceTrendingReportResponseBodyDataInbound[];
  outbound?: GetInstanceTrendingReportResponseBodyDataOutbound[];
  overall?: GetInstanceTrendingReportResponseBodyDataOverall[];
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataInbound },
      outbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOutbound },
      overall: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOverall },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsResponseBodyData extends $tea.Model {
  agentServerUrl?: string;
  avatarUrl?: string;
  chatAppId?: string;
  chatAppKey?: string;
  chatDeviceId?: string;
  chatLoginToken?: string;
  chatServerUrl?: string;
  chatUserId?: string;
  deviceExt?: string;
  deviceId?: string;
  deviceState?: string;
  displayName?: string;
  extension?: string;
  nickname?: string;
  signature?: string;
  signature2?: string;
  sipServerUrl?: string;
  userId?: string;
  userKey?: string;
  userKey2?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentServerUrl: 'AgentServerUrl',
      avatarUrl: 'AvatarUrl',
      chatAppId: 'ChatAppId',
      chatAppKey: 'ChatAppKey',
      chatDeviceId: 'ChatDeviceId',
      chatLoginToken: 'ChatLoginToken',
      chatServerUrl: 'ChatServerUrl',
      chatUserId: 'ChatUserId',
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayName: 'DisplayName',
      extension: 'Extension',
      nickname: 'Nickname',
      signature: 'Signature',
      signature2: 'Signature2',
      sipServerUrl: 'SipServerUrl',
      userId: 'UserId',
      userKey: 'UserKey',
      userKey2: 'UserKey2',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentServerUrl: 'string',
      avatarUrl: 'string',
      chatAppId: 'string',
      chatAppKey: 'string',
      chatDeviceId: 'string',
      chatLoginToken: 'string',
      chatServerUrl: 'string',
      chatUserId: 'string',
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayName: 'string',
      extension: 'string',
      nickname: 'string',
      signature: 'string',
      signature2: 'string',
      sipServerUrl: 'string',
      userId: 'string',
      userKey: 'string',
      userKey2: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponseBodyData extends $tea.Model {
  duration?: number;
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingResponseBodyData extends $tea.Model {
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationResponseBodyData extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
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

export class GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList extends $tea.Model {
  breakCode?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponseBodyData extends $tea.Model {
  breakCodeDetailList?: GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList[];
  breakingAgents?: number;
  instanceId?: string;
  interactiveCalls?: number;
  loggedInAgents?: number;
  longestWaitingTime?: number;
  readyAgents?: number;
  talkingAgents?: number;
  totalAgents?: number;
  waitingCalls?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakCodeDetailList: 'BreakCodeDetailList',
      breakingAgents: 'BreakingAgents',
      instanceId: 'InstanceId',
      interactiveCalls: 'InteractiveCalls',
      loggedInAgents: 'LoggedInAgents',
      longestWaitingTime: 'LongestWaitingTime',
      readyAgents: 'ReadyAgents',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      waitingCalls: 'WaitingCalls',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCodeDetailList: { 'type': 'array', 'itemType': GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList },
      breakingAgents: 'number',
      instanceId: 'string',
      interactiveCalls: 'number',
      loggedInAgents: 'number',
      longestWaitingTime: 'number',
      readyAgents: 'number',
      talkingAgents: 'number',
      totalAgents: 'number',
      waitingCalls: 'number',
      workingAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupResponseBodyData extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  mediaType?: string;
  name?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnCredentialsResponseBodyData extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadAudioDataParamsResponseBodyData extends $tea.Model {
  paramsStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramsStr: 'ParamsStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  avatarUrl?: string;
  deviceExt?: string;
  deviceId?: string;
  deviceState?: string;
  displayId?: string;
  displayName?: string;
  email?: string;
  extension?: string;
  instanceId?: string;
  loginName?: string;
  mobile?: string;
  nickname?: string;
  roleId?: string;
  roleName?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoResponseBodyData extends $tea.Model {
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVoicemailRecordingResponseBodyData extends $tea.Model {
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: HoldCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': HoldCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyData extends $tea.Model {
  callContext?: HoldCallResponseBodyDataCallContext;
  userContext?: HoldCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: HoldCallResponseBodyDataCallContext,
      userContext: HoldCallResponseBodyDataUserContext,
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

export class ImportCustomCallTaggingResponseBodyData extends $tea.Model {
  item?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: InitiateAttendedTransferResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': InitiateAttendedTransferResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyData extends $tea.Model {
  callContext?: InitiateAttendedTransferResponseBodyDataCallContext;
  contextId?: number;
  userContext?: InitiateAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: InitiateAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: InitiateAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: InterceptCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': InterceptCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyData extends $tea.Model {
  callContext?: InterceptCallResponseBodyDataCallContext;
  userContext?: InterceptCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: InterceptCallResponseBodyDataCallContext,
      userContext: InterceptCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: LaunchAuthenticationResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': LaunchAuthenticationResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyData extends $tea.Model {
  callContext?: LaunchAuthenticationResponseBodyDataCallContext;
  userContext?: LaunchAuthenticationResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: LaunchAuthenticationResponseBodyDataCallContext,
      userContext: LaunchAuthenticationResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: LaunchSurveyResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': LaunchSurveyResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyData extends $tea.Model {
  callContext?: LaunchSurveyResponseBodyDataCallContext;
  contextId?: number;
  userContext?: LaunchSurveyResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: LaunchSurveyResponseBodyDataCallContext,
      contextId: 'number',
      userContext: LaunchSurveyResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBodyData extends $tea.Model {
  breakCode?: string;
  duration?: number;
  outboundScenario?: boolean;
  startTime?: number;
  state?: string;
  stateCode?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      duration: 'Duration',
      outboundScenario: 'OutboundScenario',
      startTime: 'StartTime',
      state: 'State',
      stateCode: 'StateCode',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      duration: 'number',
      outboundScenario: 'boolean',
      startTime: 'number',
      state: 'string',
      stateCode: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBodyDataList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  breakCode?: string;
  dn?: string;
  instanceId?: string;
  loginName?: string;
  outboundScenario?: boolean;
  state?: string;
  stateDuration?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      breakCode: 'BreakCode',
      dn: 'Dn',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outboundScenario: 'OutboundScenario',
      state: 'State',
      stateDuration: 'StateDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      breakCode: 'string',
      dn: 'string',
      instanceId: 'string',
      loginName: 'string',
      outboundScenario: 'boolean',
      state: 'string',
      stateDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStatesResponseBodyData extends $tea.Model {
  list?: ListAgentStatesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListAgentStatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound extends $tea.Model {
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsHandled?: number;
  callsOffered?: number;
  handleRate?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: string;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  oneTransferCalls?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      oneTransferCalls: 'OneTransferCalls',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      oneTransferCalls: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  inbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound;
  instanceId?: string;
  loginName?: string;
  outbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound;
  overall?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall;
  skillGroupIds?: string;
  skillGroupNames?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound,
      overall: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport extends $tea.Model {
  list?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList[];
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
      list: { 'type': 'array', 'itemType': ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListAudioFilesResponseBodyDataList extends $tea.Model {
  audioFileName?: string;
  audioResourceId?: string;
  auditResult?: string;
  createdTime?: string;
  instanceId?: string;
  name?: string;
  ossFileKey?: string;
  status?: string;
  updatedTime?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      auditResult: 'AuditResult',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      auditResult: 'string',
      createdTime: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      status: 'string',
      updatedTime: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAudioFilesResponseBodyData extends $tea.Model {
  list?: ListAudioFilesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListAudioFilesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBodyDataList extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  mediaType?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBodyData extends $tea.Model {
  list?: ListBriefSkillGroupsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListBriefSkillGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyDataList extends $tea.Model {
  additionalBroker?: string;
  agentIds?: string;
  agentNames?: string;
  broker?: string;
  callDuration?: string;
  calledNumber?: string;
  calleeLocation?: string;
  callerLocation?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  dialingTime?: number;
  earlyMediaState?: string;
  establishedTime?: number;
  heldTime?: number;
  instanceId?: string;
  ivrTime?: number;
  queueTime?: number;
  recordingDuration?: number;
  recordingReady?: boolean;
  releaseInitiator?: string;
  releaseReason?: string;
  releaseTime?: number;
  ringTime?: number;
  satisfactionDescription?: string;
  satisfactionIndex?: number;
  satisfactionSurveyChannel?: string;
  satisfactionSurveyOffered?: boolean;
  skillGroupIds?: string;
  skillGroupNames?: string;
  startTime?: number;
  talkTime?: number;
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      additionalBroker: 'AdditionalBroker',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      broker: 'Broker',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      dialingTime: 'DialingTime',
      earlyMediaState: 'EarlyMediaState',
      establishedTime: 'EstablishedTime',
      heldTime: 'HeldTime',
      instanceId: 'InstanceId',
      ivrTime: 'IvrTime',
      queueTime: 'QueueTime',
      recordingDuration: 'RecordingDuration',
      recordingReady: 'RecordingReady',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      releaseTime: 'ReleaseTime',
      ringTime: 'RingTime',
      satisfactionDescription: 'SatisfactionDescription',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
      talkTime: 'TalkTime',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalBroker: 'string',
      agentIds: 'string',
      agentNames: 'string',
      broker: 'string',
      callDuration: 'string',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      dialingTime: 'number',
      earlyMediaState: 'string',
      establishedTime: 'number',
      heldTime: 'number',
      instanceId: 'string',
      ivrTime: 'number',
      queueTime: 'number',
      recordingDuration: 'number',
      recordingReady: 'boolean',
      releaseInitiator: 'string',
      releaseReason: 'string',
      releaseTime: 'number',
      ringTime: 'number',
      satisfactionDescription: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveyChannel: 'string',
      satisfactionSurveyOffered: 'boolean',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
      talkTime: 'number',
      waitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyData extends $tea.Model {
  list?: ListCallDetailRecordsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTagsResponseBodyDataList extends $tea.Model {
  instanceId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTagsResponseBodyData extends $tea.Model {
  list?: ListCallTagsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListCallTagsResponseBodyDataList },
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
  breakingAgents?: number;
  concurrency?: number;
  datetime?: number;
  loggedInAgents?: number;
  outboundScenarioBreakingAgents?: number;
  outboundScenarioReadyAgents?: number;
  outboundScenarioTalkingAgents?: number;
  outboundScenarioWorkingAgents?: number;
  readyAgents?: number;
  statsTime?: number;
  talkAgents?: number;
  talkingAgents?: number;
  workAgents?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakAgents: 'BreakAgents',
      breakingAgents: 'BreakingAgents',
      concurrency: 'Concurrency',
      datetime: 'Datetime',
      loggedInAgents: 'LoggedInAgents',
      outboundScenarioBreakingAgents: 'OutboundScenarioBreakingAgents',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundScenarioTalkingAgents: 'OutboundScenarioTalkingAgents',
      outboundScenarioWorkingAgents: 'OutboundScenarioWorkingAgents',
      readyAgents: 'ReadyAgents',
      statsTime: 'StatsTime',
      talkAgents: 'TalkAgents',
      talkingAgents: 'TalkingAgents',
      workAgents: 'WorkAgents',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakAgents: 'number',
      breakingAgents: 'number',
      concurrency: 'number',
      datetime: 'number',
      loggedInAgents: 'number',
      outboundScenarioBreakingAgents: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundScenarioTalkingAgents: 'number',
      outboundScenarioWorkingAgents: 'number',
      readyAgents: 'number',
      statsTime: 'number',
      talkAgents: 'number',
      talkingAgents: 'number',
      workAgents: 'number',
      workingAgents: 'number',
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
  completionRate?: number;
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
      completionRate: 'CompletionRate',
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
      completionRate: 'number',
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
  abandonPhase?: string;
  abandonType?: string;
  attemptCount?: number;
  caseId?: string;
  customVariables?: string;
  failureReason?: string;
  phoneNumber?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      abandonPhase: 'AbandonPhase',
      abandonType: 'AbandonType',
      attemptCount: 'AttemptCount',
      caseId: 'CaseId',
      customVariables: 'CustomVariables',
      failureReason: 'FailureReason',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonPhase: 'string',
      abandonType: 'string',
      attemptCount: 'number',
      caseId: 'string',
      customVariables: 'string',
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

export class ListConfigItemsResponseBodyData extends $tea.Model {
  instanceId?: string;
  name?: string;
  objectId?: string;
  objectType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyDataList extends $tea.Model {
  contactFlowId?: string;
  createdTime?: string;
  definition?: string;
  description?: string;
  draftId?: string;
  editor?: string;
  instanceId?: string;
  name?: string;
  numberList?: string[];
  published?: boolean;
  type?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      numberList: 'NumberList',
      published: 'Published',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyData extends $tea.Model {
  list?: ListContactFlowsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBodyDataListCallTagList extends $tea.Model {
  instanceId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBodyDataList extends $tea.Model {
  callTagList?: ListCustomCallTaggingResponseBodyDataListCallTagList[];
  creator?: string;
  description?: string;
  instanceId?: string;
  number?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callTagList: 'CallTagList',
      creator: 'Creator',
      description: 'Description',
      instanceId: 'InstanceId',
      number: 'Number',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagList: { 'type': 'array', 'itemType': ListCustomCallTaggingResponseBodyDataListCallTagList },
      creator: 'string',
      description: 'string',
      instanceId: 'string',
      number: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomCallTaggingResponseBodyData extends $tea.Model {
  list?: ListCustomCallTaggingResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListCustomCallTaggingResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $tea.Model {
  callId?: string;
  contact?: string;
  deviceId?: string;
  deviceType?: string;
  expires?: number;
  extension?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      contact: 'Contact',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      expires: 'Expires',
      extension: 'Extension',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      contact: 'string',
      deviceId: 'string',
      deviceType: 'string',
      expires: 'number',
      extension: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersResponseBodyDataList extends $tea.Model {
  createTime?: number;
  createdTime?: number;
  creator?: string;
  number?: string;
  remark?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      number: 'Number',
      remark: 'Remark',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createdTime: 'number',
      creator: 'string',
      number: 'string',
      remark: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersResponseBodyData extends $tea.Model {
  list?: ListDoNotCallNumbersResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListDoNotCallNumbersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListBack2Back extends $tea.Model {
  agentHandleRate?: string;
  answerRate?: string;
  averageCustomerRingTime?: string;
  averageRingTime?: string;
  averageTalkTime?: string;
  callsAgentHandled?: string;
  callsAnswered?: string;
  callsCustomerAnswered?: string;
  callsDialed?: string;
  customerAnswerRate?: string;
  maxCustomerRingTime?: string;
  maxRingTime?: string;
  maxTalkTime?: string;
  totalCustomerRingTime?: string;
  totalRingTime?: string;
  totalTalkTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'string',
      answerRate: 'string',
      averageCustomerRingTime: 'string',
      averageRingTime: 'string',
      averageTalkTime: 'string',
      callsAgentHandled: 'string',
      callsAnswered: 'string',
      callsCustomerAnswered: 'string',
      callsDialed: 'string',
      customerAnswerRate: 'string',
      maxCustomerRingTime: 'string',
      maxRingTime: 'string',
      maxTalkTime: 'string',
      totalCustomerRingTime: 'string',
      totalRingTime: 'string',
      totalTalkTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails extends $tea.Model {
  accessChannelType?: string;
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInbound extends $tea.Model {
  accessChannelTypeDetails?: ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails[];
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
  serviceLevel15?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: string;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelTypeDetails: 'AccessChannelTypeDetails',
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
      serviceLevel15: 'ServiceLevel15',
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails },
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
      serviceLevel15: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'string',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInternal extends $tea.Model {
  averageTalkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsTalked?: number;
  maxTalkTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalked: 'CallsTalked',
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
      callsTalked: 'number',
      maxTalkTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListOutbound extends $tea.Model {
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

export class ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList extends $tea.Model {
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

export class ListHistoricalAgentReportResponseBodyDataListOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList[];
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
  totalOffSiteLoggedInTime?: number;
  totalOffSiteOnlineTime?: number;
  totalOfficePhoneLoggedInTime?: number;
  totalOfficePhoneOnlineTime?: number;
  totalOnSiteLoggedInTime?: number;
  totalOnSiteOnlineTime?: number;
  totalOutboundScenarioLoggedInTime?: number;
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
      totalOffSiteLoggedInTime: 'TotalOffSiteLoggedInTime',
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList },
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
      totalOffSiteLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteLoggedInTime: 'number',
      totalOnSiteOnlineTime: 'number',
      totalOutboundScenarioLoggedInTime: 'number',
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

export class ListHistoricalAgentReportResponseBodyDataList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  back2Back?: ListHistoricalAgentReportResponseBodyDataListBack2Back;
  displayId?: string;
  inbound?: ListHistoricalAgentReportResponseBodyDataListInbound;
  internal?: ListHistoricalAgentReportResponseBodyDataListInternal;
  outbound?: ListHistoricalAgentReportResponseBodyDataListOutbound;
  overall?: ListHistoricalAgentReportResponseBodyDataListOverall;
  skillGroupIds?: string;
  skillGroupNames?: string;
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
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentReportResponseBodyDataListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyData extends $tea.Model {
  list?: ListHistoricalAgentReportResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataList },
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
  agentHandleRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsCustomerHandled?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
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
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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
  callsTalked?: number;
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
      callsTalked: 'CallsTalked',
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
      callsTalked: 'number',
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
  totalOffSiteLggedInTime?: number;
  totalOfficePhoneLoggedInTime?: number;
  totalOnSiteLoggedInTime?: string;
  totalOutboundScenarioLoggedInTime?: number;
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
      totalOffSiteLggedInTime: 'TotalOffSiteLggedInTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
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
      totalOffSiteLggedInTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
      totalOnSiteLoggedInTime: 'string',
      totalOutboundScenarioLoggedInTime: 'number',
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

export class ListHistoricalSkillGroupReportResponseBodyDataListBack2Back extends $tea.Model {
  agentHandleRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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

export class ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails extends $tea.Model {
  accessChannelType?: string;
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListInbound extends $tea.Model {
  abandonRate?: number;
  accessChannelTypeDetails?: ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails[];
  averageAbandonTime?: number;
  averageAbandonedInQueueTime?: number;
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAbandonedInQueue?: number;
  callsAbandonedInRing?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsHandled?: number;
  callsHold?: number;
  callsOffered?: number;
  callsOverflow?: number;
  callsQueued?: number;
  callsQueuingFailed?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  callsRinged?: number;
  callsTimeout?: number;
  handleRate?: number;
  maxAbandonTime?: number;
  maxAbandonedInQueueTime?: number;
  maxAbandonedInRingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel15?: number;
  serviceLevel20?: number;
  serviceLevel30?: number;
  totalAbandonTime?: number;
  totalAbandonedInQueueTime?: number;
  totalAbandonedInRingTime?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      accessChannelTypeDetails: 'AccessChannelTypeDetails',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsOverflow: 'CallsOverflow',
      callsQueued: 'CallsQueued',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsTimeout: 'CallsTimeout',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel15: 'ServiceLevel15',
      serviceLevel20: 'ServiceLevel20',
      serviceLevel30: 'ServiceLevel30',
      totalAbandonTime: 'TotalAbandonTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails },
      averageAbandonTime: 'number',
      averageAbandonedInQueueTime: 'number',
      averageAbandonedInRingTime: 'number',
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsOverflow: 'number',
      callsQueued: 'number',
      callsQueuingFailed: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsTimeout: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInQueueTime: 'number',
      maxAbandonedInRingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel15: 'number',
      serviceLevel20: 'number',
      serviceLevel30: 'number',
      totalAbandonTime: 'number',
      totalAbandonedInQueueTime: 'number',
      totalAbandonedInRingTime: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListOutbound extends $tea.Model {
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

export class ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList extends $tea.Model {
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

export class ListHistoricalSkillGroupReportResponseBodyDataListOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList[];
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList },
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
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataList extends $tea.Model {
  back2Back?: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back;
  inbound?: ListHistoricalSkillGroupReportResponseBodyDataListInbound;
  outbound?: ListHistoricalSkillGroupReportResponseBodyDataListOutbound;
  overall?: ListHistoricalSkillGroupReportResponseBodyDataListOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back,
      inbound: ListHistoricalSkillGroupReportResponseBodyDataListInbound,
      outbound: ListHistoricalSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalSkillGroupReportResponseBodyDataListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyData extends $tea.Model {
  list?: ListHistoricalSkillGroupReportResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListAdminList extends $tea.Model {
  displayName?: string;
  email?: string;
  extension?: string;
  instanceId?: string;
  loginName?: string;
  mobile?: string;
  roleId?: string;
  roleName?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListNumberList extends $tea.Model {
  number?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataList extends $tea.Model {
  adminList?: ListInstancesResponseBodyDataListAdminList[];
  aliyunUid?: string;
  consoleUrl?: string;
  createTime?: number;
  description?: string;
  domainName?: string;
  id?: string;
  name?: string;
  numberList?: ListInstancesResponseBodyDataListNumberList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      aliyunUid: 'AliyunUid',
      consoleUrl: 'ConsoleUrl',
      createTime: 'CreateTime',
      description: 'Description',
      domainName: 'DomainName',
      id: 'Id',
      name: 'Name',
      numberList: 'NumberList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      createTime: 'number',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListNumberList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  list?: ListInstancesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListAdminList extends $tea.Model {
  displayName?: string;
  email?: string;
  extension?: string;
  instanceId?: string;
  loginName?: string;
  mobile?: string;
  roleId?: string;
  roleName?: string;
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListNumberListSkillGroups extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  name?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListNumberList extends $tea.Model {
  active?: boolean;
  city?: string;
  contactFlowId?: string;
  instanceId?: string;
  number?: string;
  province?: string;
  skillGroups?: ListInstancesOfUserResponseBodyDataListNumberListSkillGroups[];
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
      skillGroups: 'SkillGroups',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberListSkillGroups },
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataList extends $tea.Model {
  adminList?: ListInstancesOfUserResponseBodyDataListAdminList[];
  aliyunUid?: string;
  consoleUrl?: string;
  description?: string;
  domainName?: string;
  id?: string;
  name?: string;
  numberList?: ListInstancesOfUserResponseBodyDataListNumberList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      aliyunUid: 'AliyunUid',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      domainName: 'DomainName',
      id: 'Id',
      name: 'Name',
      numberList: 'NumberList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyData extends $tea.Model {
  list?: ListInstancesOfUserResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataBack2Back extends $tea.Model {
  agentHandleRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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

export class ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails extends $tea.Model {
  accessChannelType?: string;
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataInbound extends $tea.Model {
  accessChannelTypeDetails?: ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails[];
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
  serviceLevel15?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelTypeDetails: 'AccessChannelTypeDetails',
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
      serviceLevel15: 'ServiceLevel15',
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails },
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
      serviceLevel15: 'number',
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

export class ListIntervalAgentReportResponseBodyDataInternal extends $tea.Model {
  averageTalkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsTalked?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalked: 'CallsTalked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsTalked: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataOutbound extends $tea.Model {
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

export class ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList extends $tea.Model {
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

export class ListIntervalAgentReportResponseBodyDataOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList[];
  firstCheckInTime?: number;
  lastCheckOutTime?: number;
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
  totalOffSiteLoggedInTime?: number;
  totalOffSiteOnlineTime?: number;
  totalOfficePhoneLoggedInTime?: number;
  totalOfficePhoneOnlineTime?: number;
  totalOnSiteLoggedInTime?: number;
  totalOnSiteOnlineTime?: number;
  totalOutboundScenarioLoggedInTime?: number;
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
      totalOffSiteLoggedInTime: 'TotalOffSiteLoggedInTime',
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckOutTime: 'number',
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
      totalOffSiteLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteLoggedInTime: 'number',
      totalOnSiteOnlineTime: 'number',
      totalOutboundScenarioLoggedInTime: 'number',
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

export class ListIntervalAgentReportResponseBodyData extends $tea.Model {
  back2Back?: ListIntervalAgentReportResponseBodyDataBack2Back;
  inbound?: ListIntervalAgentReportResponseBodyDataInbound;
  internal?: ListIntervalAgentReportResponseBodyDataInternal;
  outbound?: ListIntervalAgentReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentReportResponseBodyDataOverall;
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
      back2Back: ListIntervalAgentReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentReportResponseBodyDataInbound,
      internal: ListIntervalAgentReportResponseBodyDataInternal,
      outbound: ListIntervalAgentReportResponseBodyDataOutbound,
      overall: ListIntervalAgentReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back extends $tea.Model {
  agentAnswerRate?: number;
  agentHandleRate?: number;
  answerRate?: number;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsCustomerHandled?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
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
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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
  callsTalked?: number;
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
      callsTalked: 'CallsTalked',
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
      callsTalked: 'number',
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
  lastCheckOutTime?: number;
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
  totalOffSiteLoggedInTime?: string;
  totalOfficePhoneLoggedInTime?: string;
  totalOnSiteLoggedInTime?: string;
  totalOutboundScenarioLoggedInTime?: number;
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
      totalOffSiteLoggedInTime: 'TotalOffSiteLoggedInTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
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
      lastCheckOutTime: 'number',
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
      totalOffSiteLoggedInTime: 'string',
      totalOfficePhoneLoggedInTime: 'string',
      totalOnSiteLoggedInTime: 'string',
      totalOutboundScenarioLoggedInTime: 'number',
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

export class ListIntervalInstanceReportResponseBodyDataInbound extends $tea.Model {
  abandonRate?: number;
  abandonedRate?: number;
  averageAbandonTime?: number;
  averageAbandonedInIVRTime?: number;
  averageAbandonedInQueueTime?: number;
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  callsAbandonedInRing?: number;
  callsAbandonedInVoiceNavigator?: number;
  callsAttendedTransferred?: number;
  callsBlindTransferred?: number;
  callsCausedIVRException?: number;
  callsForwardToOutsideNumber?: number;
  callsHandled?: number;
  callsHold?: number;
  callsIVRException?: number;
  callsOffered?: number;
  callsQueued?: number;
  callsQueuingFailed?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  callsRinged?: number;
  callsToVoicemail?: number;
  callsVoicemail?: number;
  handleRate?: number;
  maxAbandonTime?: number;
  maxAbandonedInIVRTime?: number;
  maxAbandonedInQueueTime?: number;
  maxAbandonedInRingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalAbandonTime?: number;
  totalAbandonedInIVRTime?: number;
  totalAbandonedInQueueTime?: number;
  totalAbandonedInRingTime?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      abandonedRate: 'AbandonedRate',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInIVRTime: 'AverageAbandonedInIVRTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAbandonedInVoiceNavigator: 'CallsAbandonedInVoiceNavigator',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
      callsCausedIVRException: 'CallsCausedIVRException',
      callsForwardToOutsideNumber: 'CallsForwardToOutsideNumber',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsIVRException: 'CallsIVRException',
      callsOffered: 'CallsOffered',
      callsQueued: 'CallsQueued',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsToVoicemail: 'CallsToVoicemail',
      callsVoicemail: 'CallsVoicemail',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInIVRTime: 'MaxAbandonedInIVRTime',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalAbandonTime: 'TotalAbandonTime',
      totalAbandonedInIVRTime: 'TotalAbandonedInIVRTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      abandonedRate: 'number',
      averageAbandonTime: 'number',
      averageAbandonedInIVRTime: 'number',
      averageAbandonedInQueueTime: 'number',
      averageAbandonedInRingTime: 'number',
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAbandonedInVoiceNavigator: 'number',
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
      callsCausedIVRException: 'number',
      callsForwardToOutsideNumber: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsIVRException: 'number',
      callsOffered: 'number',
      callsQueued: 'number',
      callsQueuingFailed: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsToVoicemail: 'number',
      callsVoicemail: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInIVRTime: 'number',
      maxAbandonedInQueueTime: 'number',
      maxAbandonedInRingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalAbandonTime: 'number',
      totalAbandonedInIVRTime: 'number',
      totalAbandonedInQueueTime: 'number',
      totalAbandonedInRingTime: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyDataOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageHoldTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsAttendedTransferred?: number;
  callsBlindTransferred?: number;
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
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
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
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
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

export class ListIntervalInstanceReportResponseBodyDataOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
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
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyData extends $tea.Model {
  inbound?: ListIntervalInstanceReportResponseBodyDataInbound;
  outbound?: ListIntervalInstanceReportResponseBodyDataOutbound;
  overall?: ListIntervalInstanceReportResponseBodyDataOverall;
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListIntervalInstanceReportResponseBodyDataInbound,
      outbound: ListIntervalInstanceReportResponseBodyDataOutbound,
      overall: ListIntervalInstanceReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataBack2Back extends $tea.Model {
  agentHandleRate?: number;
  answerRate?: string;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: string;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'string',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'string',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      totalCustomerRingTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataInbound extends $tea.Model {
  abandonRate?: number;
  averageAbandonTime?: number;
  averageAbandonedInQueueTime?: number;
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  averageHoldTime?: number;
  averageResponseTime?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAbandonedInQueue?: number;
  callsAbandonedInRing?: number;
  callsAttendedTransferIn?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferIn?: number;
  callsBlindTransferOut?: number;
  callsHandled?: number;
  callsHold?: number;
  callsOffered?: number;
  callsOverflow?: number;
  callsQueued?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  callsRinged?: number;
  callsTimeout?: number;
  handleRate?: number;
  maxAbandonTime?: number;
  maxAbandonedInQueueTime?: number;
  maxAbandonedInRingTime?: number;
  maxHoldTime?: number;
  maxRingTime?: number;
  maxTalkTime?: number;
  maxWaitTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalAbandonTime?: number;
  totalAbandonedInQueueTime?: number;
  totalAbandonedInRingTime?: number;
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWaitTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsOverflow: 'CallsOverflow',
      callsQueued: 'CallsQueued',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsTimeout: 'CallsTimeout',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalAbandonTime: 'TotalAbandonTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      averageAbandonTime: 'number',
      averageAbandonedInQueueTime: 'number',
      averageAbandonedInRingTime: 'number',
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsOverflow: 'number',
      callsQueued: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsTimeout: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInQueueTime: 'number',
      maxAbandonedInRingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalAbandonTime: 'number',
      totalAbandonedInQueueTime: 'number',
      totalAbandonedInRingTime: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataOutbound extends $tea.Model {
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

export class ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList extends $tea.Model {
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

export class ListIntervalSkillGroupReportResponseBodyDataOverall extends $tea.Model {
  averageBreakTime?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList },
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
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyData extends $tea.Model {
  back2Back?: ListIntervalSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalSkillGroupReportResponseBodyDataInbound;
  outbound?: ListIntervalSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalSkillGroupReportResponseBodyDataOverall;
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalSkillGroupReportResponseBodyDataInbound,
      outbound: ListIntervalSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalSkillGroupReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBodyDataList extends $tea.Model {
  callee?: string;
  caller?: string;
  channelId?: string;
  channelVariables?: string;
  contactId?: string;
  enterTime?: number;
  flowId?: string;
  flowName?: string;
  instance?: string;
  leaveTime?: number;
  nodeExitCode?: string;
  nodeId?: string;
  nodeName?: string;
  nodeProperties?: { [key: string]: any };
  nodeType?: string;
  nodeVariables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      channelId: 'ChannelId',
      channelVariables: 'ChannelVariables',
      contactId: 'ContactId',
      enterTime: 'EnterTime',
      flowId: 'FlowId',
      flowName: 'FlowName',
      instance: 'Instance',
      leaveTime: 'LeaveTime',
      nodeExitCode: 'NodeExitCode',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeProperties: 'NodeProperties',
      nodeType: 'NodeType',
      nodeVariables: 'NodeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      channelId: 'string',
      channelVariables: 'string',
      contactId: 'string',
      enterTime: 'number',
      flowId: 'string',
      flowName: 'string',
      instance: 'string',
      leaveTime: 'number',
      nodeExitCode: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeType: 'string',
      nodeVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBodyData extends $tea.Model {
  list?: ListIvrTrackingDetailsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListIvrTrackingDetailsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentEventLogsResponseBodyDataList extends $tea.Model {
  agentDropCall?: string;
  agentNo?: string;
  callDir?: string;
  callId?: string;
  callMode?: string;
  callType?: string;
  calleeId?: string;
  callerId?: string;
  connId?: string;
  event?: string;
  groupNo?: string;
  outboundScenario?: boolean;
  phoneNo?: string;
  statisticDate?: string;
  targetRequest?: string;
  targetSelect?: string;
  tenantId?: string;
  transferNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentDropCall: 'AgentDropCall',
      agentNo: 'AgentNo',
      callDir: 'CallDir',
      callId: 'CallId',
      callMode: 'CallMode',
      callType: 'CallType',
      calleeId: 'CalleeId',
      callerId: 'CallerId',
      connId: 'ConnId',
      event: 'Event',
      groupNo: 'GroupNo',
      outboundScenario: 'OutboundScenario',
      phoneNo: 'PhoneNo',
      statisticDate: 'StatisticDate',
      targetRequest: 'TargetRequest',
      targetSelect: 'TargetSelect',
      tenantId: 'TenantId',
      transferNumber: 'TransferNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDropCall: 'string',
      agentNo: 'string',
      callDir: 'string',
      callId: 'string',
      callMode: 'string',
      callType: 'string',
      calleeId: 'string',
      callerId: 'string',
      connId: 'string',
      event: 'string',
      groupNo: 'string',
      outboundScenario: 'boolean',
      phoneNo: 'string',
      statisticDate: 'string',
      targetRequest: 'string',
      targetSelect: 'string',
      tenantId: 'string',
      transferNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentEventLogsResponseBodyData extends $tea.Model {
  list?: ListLegacyAgentEventLogsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListLegacyAgentEventLogsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentStatusLogsResponseBodyDataList extends $tea.Model {
  agentDropCall?: string;
  agentNo?: string;
  aliHangupCause?: string;
  callDir?: string;
  callId?: string;
  callType?: string;
  calleeId?: string;
  callerId?: string;
  connId?: string;
  extend1?: string;
  extend2?: string;
  extend3?: string;
  extend4?: string;
  groupNo?: string;
  monitedAgentNo?: string;
  monitedAgentPhoneNo?: string;
  outboundScenario?: boolean;
  phoneNo?: string;
  statisticDate?: string;
  statisticTime?: number;
  status?: string;
  targetRequest?: string;
  targetSelect?: string;
  tenantId?: string;
  transferNo?: string;
  transferNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentDropCall: 'AgentDropCall',
      agentNo: 'AgentNo',
      aliHangupCause: 'AliHangupCause',
      callDir: 'CallDir',
      callId: 'CallId',
      callType: 'CallType',
      calleeId: 'CalleeId',
      callerId: 'CallerId',
      connId: 'ConnId',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      extend4: 'Extend4',
      groupNo: 'GroupNo',
      monitedAgentNo: 'MonitedAgentNo',
      monitedAgentPhoneNo: 'MonitedAgentPhoneNo',
      outboundScenario: 'OutboundScenario',
      phoneNo: 'PhoneNo',
      statisticDate: 'StatisticDate',
      statisticTime: 'StatisticTime',
      status: 'Status',
      targetRequest: 'TargetRequest',
      targetSelect: 'TargetSelect',
      tenantId: 'TenantId',
      transferNo: 'TransferNo',
      transferNumber: 'TransferNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDropCall: 'string',
      agentNo: 'string',
      aliHangupCause: 'string',
      callDir: 'string',
      callId: 'string',
      callType: 'string',
      calleeId: 'string',
      callerId: 'string',
      connId: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      extend4: 'string',
      groupNo: 'string',
      monitedAgentNo: 'string',
      monitedAgentPhoneNo: 'string',
      outboundScenario: 'boolean',
      phoneNo: 'string',
      statisticDate: 'string',
      statisticTime: 'number',
      status: 'string',
      targetRequest: 'string',
      targetSelect: 'string',
      tenantId: 'string',
      transferNo: 'string',
      transferNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAgentStatusLogsResponseBodyData extends $tea.Model {
  list?: ListLegacyAgentStatusLogsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListLegacyAgentStatusLogsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAppraiseLogsResponseBodyDataList extends $tea.Model {
  acid?: string;
  contactType?: string;
  id?: number;
  instanceId?: string;
  keyMarkRelation?: string;
  note?: string;
  parentNote?: string;
  pressKey?: string;
  ramId?: string;
  skillGroupId?: string;
  statisticDate?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      contactType: 'ContactType',
      id: 'Id',
      instanceId: 'InstanceId',
      keyMarkRelation: 'KeyMarkRelation',
      note: 'Note',
      parentNote: 'ParentNote',
      pressKey: 'PressKey',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      statisticDate: 'StatisticDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      contactType: 'string',
      id: 'number',
      instanceId: 'string',
      keyMarkRelation: 'string',
      note: 'string',
      parentNote: 'string',
      pressKey: 'string',
      ramId: 'string',
      skillGroupId: 'string',
      statisticDate: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyAppraiseLogsResponseBodyData extends $tea.Model {
  list?: ListLegacyAppraiseLogsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListLegacyAppraiseLogsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyQueueEventLogsResponseBodyDataList extends $tea.Model {
  acid?: string;
  ani?: string;
  answerPhone?: string;
  answerTime?: number;
  cause?: string;
  dnis?: string;
  id?: number;
  queueTime?: number;
  statisticDate?: string;
  tenantId?: string;
  vq?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ani: 'Ani',
      answerPhone: 'AnswerPhone',
      answerTime: 'AnswerTime',
      cause: 'Cause',
      dnis: 'Dnis',
      id: 'Id',
      queueTime: 'QueueTime',
      statisticDate: 'StatisticDate',
      tenantId: 'TenantId',
      vq: 'Vq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ani: 'string',
      answerPhone: 'string',
      answerTime: 'number',
      cause: 'string',
      dnis: 'string',
      id: 'number',
      queueTime: 'number',
      statisticDate: 'string',
      tenantId: 'string',
      vq: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyQueueEventLogsResponseBodyData extends $tea.Model {
  list?: ListLegacyQueueEventLogsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListLegacyQueueEventLogsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiChannelRecordingsResponseBodyData extends $tea.Model {
  agentChannelId?: string;
  agentId?: string;
  agentName?: string;
  contactId?: string;
  duration?: string;
  fileName?: string;
  fileUrl?: string;
  holdTimeSegments?: ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments[];
  ramId?: string;
  skillGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentChannelId: 'AgentChannelId',
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      holdTimeSegments: 'HoldTimeSegments',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentChannelId: 'string',
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      duration: 'string',
      fileName: 'string',
      fileUrl: 'string',
      holdTimeSegments: { 'type': 'array', 'itemType': ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments },
      ramId: 'string',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBodyDataList extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBodyData extends $tea.Model {
  list?: ListOutboundNumbersOfUserResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListOutboundNumbersOfUserResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBodyDataList extends $tea.Model {
  active?: boolean;
  city?: string;
  contactFlowId?: string;
  instanceId?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBodyData extends $tea.Model {
  list?: ListPersonalNumbersOfUserResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListPersonalNumbersOfUserResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyDataListSkillGroups extends $tea.Model {
  displayName?: string;
  instanceId?: string;
  name?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyDataList extends $tea.Model {
  active?: boolean;
  city?: string;
  contactFlowId?: string;
  contactFlowName?: string;
  createTime?: string;
  instanceId?: string;
  number?: string;
  provider?: string;
  province?: string;
  skillGroups?: ListPhoneNumbersResponseBodyDataListSkillGroups[];
  tags?: string;
  usage?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      contactFlowName: 'ContactFlowName',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      number: 'Number',
      provider: 'Provider',
      province: 'Province',
      skillGroups: 'SkillGroups',
      tags: 'Tags',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      createTime: 'string',
      instanceId: 'string',
      number: 'string',
      provider: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataListSkillGroups },
      tags: 'string',
      usage: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyData extends $tea.Model {
  list?: ListPhoneNumbersResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponseBodyDataList extends $tea.Model {
  active?: boolean;
  city?: string;
  contactFlowId?: string;
  instanceId?: string;
  number?: string;
  province?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponseBodyData extends $tea.Model {
  list?: ListPhoneNumbersOfSkillGroupResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListPhoneNumbersOfSkillGroupResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivilegesOfUserResponseBodyData extends $tea.Model {
  instanceId?: string;
  name?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBodyDataList extends $tea.Model {
  aliyunUid?: number;
  displayName?: string;
  email?: string;
  loginName?: string;
  mobile?: string;
  primary?: boolean;
  ramId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      mobile: 'Mobile',
      primary: 'Primary',
      ramId: 'RamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      mobile: 'string',
      primary: 'boolean',
      ramId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBodyData extends $tea.Model {
  list?: ListRamUsersResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListRamUsersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBodyDataList extends $tea.Model {
  agentId?: string;
  agentName?: string;
  callType?: string;
  counterParty?: string;
  duration?: number;
  extension?: string;
  instanceId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  skillGroupIdList?: string[];
  skillGroupNameList?: string[];
  state?: string;
  stateCode?: string;
  stateTime?: number;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      callType: 'CallType',
      counterParty: 'CounterParty',
      duration: 'Duration',
      extension: 'Extension',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      skillGroupIdList: 'SkillGroupIdList',
      skillGroupNameList: 'SkillGroupNameList',
      state: 'State',
      stateCode: 'StateCode',
      stateTime: 'StateTime',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      callType: 'string',
      counterParty: 'string',
      duration: 'number',
      extension: 'string',
      instanceId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      stateCode: 'string',
      stateTime: 'number',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBodyData extends $tea.Model {
  list?: ListRealtimeAgentStatesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListRealtimeAgentStatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList extends $tea.Model {
  breakCode?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBodyDataList extends $tea.Model {
  breakCodeDetailList?: ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList[];
  breakingAgents?: number;
  instanceId?: string;
  loggedInAgents?: number;
  longestWaitingTime?: number;
  outboundScenarioReadyAgents?: number;
  readyAgents?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  talkingAgents?: number;
  totalAgents?: number;
  waitingCalls?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      breakCodeDetailList: 'BreakCodeDetailList',
      breakingAgents: 'BreakingAgents',
      instanceId: 'InstanceId',
      loggedInAgents: 'LoggedInAgents',
      longestWaitingTime: 'LongestWaitingTime',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      readyAgents: 'ReadyAgents',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      talkingAgents: 'TalkingAgents',
      totalAgents: 'TotalAgents',
      waitingCalls: 'WaitingCalls',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCodeDetailList: { 'type': 'array', 'itemType': ListRealtimeSkillGroupStatesResponseBodyDataListBreakCodeDetailList },
      breakingAgents: 'number',
      instanceId: 'string',
      loggedInAgents: 'number',
      longestWaitingTime: 'number',
      outboundScenarioReadyAgents: 'number',
      readyAgents: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      talkingAgents: 'number',
      totalAgents: 'number',
      waitingCalls: 'number',
      workingAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBodyData extends $tea.Model {
  list?: ListRealtimeSkillGroupStatesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListRealtimeSkillGroupStatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBodyDataList extends $tea.Model {
  agentIds?: string;
  callDuration?: string;
  calledNumber?: string;
  callingNumber?: string;
  contactDisposition?: string;
  contactId?: string;
  contactType?: string;
  duration?: number;
  instanceId?: string;
  skillGroupIds?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      callDuration: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      instanceId: 'string',
      skillGroupIds: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBodyData extends $tea.Model {
  list?: ListRecentCallDetailRecordsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListRecentCallDetailRecordsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  name?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBodyDataList extends $tea.Model {
  averageWaitingTime?: number;
  breakingAgents?: number;
  inboundTalkingAgents?: number;
  instanceId?: string;
  loggedInAgents?: number;
  longestCall?: number;
  outboundScenarioReadyAgents?: number;
  outboundTalkingAgents?: number;
  readyAgents?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  talkingAgents?: number;
  waitingCalls?: number;
  waitingCallsLevel10?: number;
  waitingCallsLevel20?: number;
  waitingCallsLevel30?: number;
  workingAgents?: number;
  static names(): { [key: string]: string } {
    return {
      averageWaitingTime: 'AverageWaitingTime',
      breakingAgents: 'BreakingAgents',
      inboundTalkingAgents: 'InboundTalkingAgents',
      instanceId: 'InstanceId',
      loggedInAgents: 'LoggedInAgents',
      longestCall: 'LongestCall',
      outboundScenarioReadyAgents: 'OutboundScenarioReadyAgents',
      outboundTalkingAgents: 'OutboundTalkingAgents',
      readyAgents: 'ReadyAgents',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      talkingAgents: 'TalkingAgents',
      waitingCalls: 'WaitingCalls',
      waitingCallsLevel10: 'WaitingCallsLevel10',
      waitingCallsLevel20: 'WaitingCallsLevel20',
      waitingCallsLevel30: 'WaitingCallsLevel30',
      workingAgents: 'WorkingAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageWaitingTime: 'number',
      breakingAgents: 'number',
      inboundTalkingAgents: 'number',
      instanceId: 'string',
      loggedInAgents: 'number',
      longestCall: 'number',
      outboundScenarioReadyAgents: 'number',
      outboundTalkingAgents: 'number',
      readyAgents: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      talkingAgents: 'number',
      waitingCalls: 'number',
      waitingCallsLevel10: 'number',
      waitingCallsLevel20: 'number',
      waitingCallsLevel30: 'number',
      workingAgents: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupStatesResponseBodyData extends $tea.Model {
  list?: ListSkillGroupStatesResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListSkillGroupStatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound extends $tea.Model {
  abandonedInQueueOfQueueCount?: number;
  answeredByAgentOfQueueCount?: number;
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  answeredByAgentOfQueueWaitTimeDuration?: number;
  averageRingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAttendedTransferOut?: number;
  callsBlindTransferOut?: number;
  callsHandled?: number;
  callsOffered?: number;
  callsServiceLevel10?: number;
  callsServiceLevel20?: number;
  callsServiceLevel30?: number;
  giveUpByAgentOfQueueCount?: number;
  handleRate?: number;
  inComingQueueOfQueueCount?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  maxWorkTime?: number;
  overFlowInQueueOfQueueCount?: number;
  queueMaxWaitTimeDuration?: number;
  queueWaitTimeDuration?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  serviceLevel20?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsServiceLevel10: 'CallsServiceLevel10',
      callsServiceLevel20: 'CallsServiceLevel20',
      callsServiceLevel30: 'CallsServiceLevel30',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsServiceLevel10: 'number',
      callsServiceLevel20: 'number',
      callsServiceLevel30: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound extends $tea.Model {
  answerRate?: number;
  averageDialingTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  callsAnswered?: number;
  callsDialed?: number;
  callsServiceLevel30?: string;
  maxDialingTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalDialingTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsServiceLevel30: 'CallsServiceLevel30',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsServiceLevel30: 'string',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall extends $tea.Model {
  averageReadyTime?: number;
  averageTalkTime?: number;
  averageWorkTime?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  maxWorkTime?: number;
  occupancyRate?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  totalBreakTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalReadyTime?: number;
  totalTalkTime?: number;
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList extends $tea.Model {
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound;
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound;
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall;
  skillGroupId?: string;
  skillGroupName?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound,
      overall: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport extends $tea.Model {
  list?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList[];
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
      list: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodyDataList extends $tea.Model {
  description?: string;
  displayName?: string;
  instanceId?: string;
  mediaType?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodyData extends $tea.Model {
  list?: ListSkillGroupsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListSkillGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBodyDataList extends $tea.Model {
  mediaType?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  skillLevel?: string;
  static names(): { [key: string]: string } {
    return {
      mediaType: 'MediaType',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaType: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBodyData extends $tea.Model {
  list?: ListSkillLevelsOfUserResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListSkillLevelsOfUserResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBodyDataList extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBodyData extends $tea.Model {
  list?: ListUnassignedNumbersResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListUnassignedNumbersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBodyDataList extends $tea.Model {
  displayName?: string;
  loginName?: string;
  ramId?: string;
  roleId?: string;
  roleName?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  skillLevel?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loginName: 'LoginName',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loginName: 'string',
      ramId: 'string',
      roleId: 'string',
      roleName: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBodyData extends $tea.Model {
  list?: ListUserLevelsOfSkillGroupResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListUserLevelsOfSkillGroupResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataListPersonalOutboundNumberList extends $tea.Model {
  active?: boolean;
  city?: string;
  number?: string;
  province?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      number: 'Number',
      province: 'Province',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      number: 'string',
      province: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataListSkillLevelList extends $tea.Model {
  skillGroupId?: string;
  skillGroupName?: string;
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataList extends $tea.Model {
  deviceExt?: string;
  deviceId?: string;
  deviceState?: string;
  displayId?: string;
  displayName?: string;
  email?: string;
  extension?: string;
  loginName?: string;
  mobile?: string;
  personalOutboundNumberList?: ListUsersResponseBodyDataListPersonalOutboundNumberList[];
  primary?: boolean;
  primaryAccount?: boolean;
  ramId?: number;
  roleId?: string;
  roleName?: string;
  skillLevelList?: ListUsersResponseBodyDataListSkillLevelList[];
  userId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      mobile: 'Mobile',
      personalOutboundNumberList: 'PersonalOutboundNumberList',
      primary: 'Primary',
      primaryAccount: 'PrimaryAccount',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      mobile: 'string',
      personalOutboundNumberList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListPersonalOutboundNumberList },
      primary: 'boolean',
      primaryAccount: 'boolean',
      ramId: 'number',
      roleId: 'string',
      roleName: 'string',
      skillLevelList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListSkillLevelList },
      userId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  list?: ListUsersResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListUsersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicemailsResponseBodyDataList extends $tea.Model {
  callee?: string;
  caller?: string;
  cdrStartTime?: number;
  contactId?: string;
  duration?: number;
  instanceId?: string;
  name?: string;
  recordingDuration?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      cdrStartTime: 'CdrStartTime',
      contactId: 'ContactId',
      duration: 'Duration',
      instanceId: 'InstanceId',
      name: 'Name',
      recordingDuration: 'RecordingDuration',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      cdrStartTime: 'number',
      contactId: 'string',
      duration: 'number',
      instanceId: 'string',
      name: 'string',
      recordingDuration: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicemailsResponseBodyData extends $tea.Model {
  list?: ListVoicemailsResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListVoicemailsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  mediaType?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      mediaType: 'MediaType',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      mediaType: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: MakeCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': MakeCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyData extends $tea.Model {
  callContext?: MakeCallResponseBodyDataCallContext;
  contextId?: number;
  userContext?: MakeCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MakeCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: MakeCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: MonitorCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': MonitorCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyData extends $tea.Model {
  callContext?: MonitorCallResponseBodyDataCallContext;
  userContext?: MonitorCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MonitorCallResponseBodyDataCallContext,
      userContext: MonitorCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: MuteCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': MuteCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyData extends $tea.Model {
  callContext?: MuteCallResponseBodyDataCallContext;
  userContext?: MuteCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MuteCallResponseBodyDataCallContext,
      userContext: MuteCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDataCallee extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDataCaller extends $tea.Model {
  city?: string;
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyData extends $tea.Model {
  callee?: PickOutboundNumbersResponseBodyDataCallee;
  caller?: PickOutboundNumbersResponseBodyDataCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickOutboundNumbersResponseBodyDataCallee,
      caller: PickOutboundNumbersResponseBodyDataCaller,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  channelVariables?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      channelVariables: 'ChannelVariables',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      channelVariables: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  callVariables?: string;
  channelContexts?: PollUserStatusResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      callVariables: 'CallVariables',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      callVariables: 'string',
      channelContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataChatContextsMembers extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  status?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      status: 'Status',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      status: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataChatContexts extends $tea.Model {
  callVariables?: string;
  chatType?: string;
  instanceId?: string;
  jobId?: string;
  members?: PollUserStatusResponseBodyDataChatContextsMembers[];
  static names(): { [key: string]: string } {
    return {
      callVariables: 'CallVariables',
      chatType: 'ChatType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callVariables: 'string',
      chatType: 'string',
      instanceId: 'string',
      jobId: 'string',
      members: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContextsMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataUserContextParallelJobList extends $tea.Model {
  jobId?: string;
  status?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      status: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  parallelJobList?: PollUserStatusResponseBodyDataUserContextParallelJobList[];
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      parallelJobList: 'ParallelJobList',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      parallelJobList: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataUserContextParallelJobList },
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyData extends $tea.Model {
  callContext?: PollUserStatusResponseBodyDataCallContext;
  chatContexts?: PollUserStatusResponseBodyDataChatContexts[];
  contextId?: number;
  userContext?: PollUserStatusResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      chatContexts: 'ChatContexts',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: PollUserStatusResponseBodyDataCallContext,
      chatContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContexts },
      contextId: 'number',
      userContext: PollUserStatusResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessAliMeCallbackOfStagingResponseBodyData extends $tea.Model {
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: RedialCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': RedialCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedialCallResponseBodyData extends $tea.Model {
  callContext?: RedialCallResponseBodyDataCallContext;
  contextId?: number;
  userContext?: RedialCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: RedialCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: RedialCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelId?: string;
  channelState?: string;
  channelVariables?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      channelVariables: 'ChannelVariables',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      channelVariables: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyDataCallContext extends $tea.Model {
  channelContexts?: ReleaseCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelContexts: { 'type': 'array', 'itemType': ReleaseCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyData extends $tea.Model {
  callContext?: ReleaseCallResponseBodyDataCallContext;
  contextId?: number;
  userContext?: ReleaseCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: ReleaseCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: ReleaseCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreArchivedRecordingsResponseBodyData extends $tea.Model {
  contactId?: string;
  exists?: string;
  status?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      exists: 'Exists',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      exists: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: RetrieveCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': RetrieveCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyData extends $tea.Model {
  callContext?: RetrieveCallResponseBodyDataCallContext;
  userContext?: RetrieveCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: RetrieveCallResponseBodyDataCallContext,
      userContext: RetrieveCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: SendDtmfSignalingResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': SendDtmfSignalingResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyData extends $tea.Model {
  callContext?: SendDtmfSignalingResponseBodyDataCallContext;
  userContext?: SendDtmfSignalingResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: SendDtmfSignalingResponseBodyDataCallContext,
      userContext: SendDtmfSignalingResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupResponseBodyData extends $tea.Model {
  breakCode?: string;
  chatDeviceId?: string;
  deviceId?: string;
  extension?: string;
  instanceId?: string;
  jobId?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      chatDeviceId: 'ChatDeviceId',
      deviceId: 'DeviceId',
      extension: 'Extension',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      chatDeviceId: 'string',
      deviceId: 'string',
      extension: 'string',
      instanceId: 'string',
      jobId: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: StartBack2BackCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartBack2BackCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyData extends $tea.Model {
  callContext?: StartBack2BackCallResponseBodyDataCallContext;
  userContext?: StartBack2BackCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: StartBack2BackCallResponseBodyDataCallContext,
      userContext: StartBack2BackCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: StartConferenceResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartConferenceResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConferenceResponseBodyData extends $tea.Model {
  callContext?: StartConferenceResponseBodyDataCallContext;
  userContext?: StartConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: StartConferenceResponseBodyDataCallContext,
      userContext: StartConferenceResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: StartPredictiveCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartPredictiveCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyData extends $tea.Model {
  callContext?: StartPredictiveCallResponseBodyDataCallContext;
  userContext?: StartPredictiveCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: StartPredictiveCallResponseBodyDataCallContext,
      userContext: StartPredictiveCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToConferenceResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToConferenceResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: SwitchToConferenceResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': SwitchToConferenceResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToConferenceResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  deviceState?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      deviceState: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToConferenceResponseBodyData extends $tea.Model {
  callContext?: SwitchToConferenceResponseBodyDataCallContext;
  userContext?: SwitchToConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: SwitchToConferenceResponseBodyDataCallContext,
      userContext: SwitchToConferenceResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakResponseBodyData extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  reserved?: number;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      reserved: 'Reserved',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      reserved: 'number',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  callType?: string;
  channelFlags?: string;
  channelId?: string;
  channelState?: string;
  destination?: string;
  index?: number;
  jobId?: string;
  originator?: string;
  releaseInitiator?: string;
  releaseReason?: string;
  skillGroupId?: string;
  timestamp?: number;
  userExtension?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelFlags: 'ChannelFlags',
      channelId: 'ChannelId',
      channelState: 'ChannelState',
      destination: 'Destination',
      index: 'Index',
      jobId: 'JobId',
      originator: 'Originator',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      userExtension: 'UserExtension',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelFlags: 'string',
      channelId: 'string',
      channelState: 'string',
      destination: 'string',
      index: 'number',
      jobId: 'string',
      originator: 'string',
      releaseInitiator: 'string',
      releaseReason: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      userExtension: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  channelContexts?: UnmuteCallResponseBodyDataCallContextChannelContexts[];
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      channelContexts: 'ChannelContexts',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      channelContexts: { 'type': 'array', 'itemType': UnmuteCallResponseBodyDataCallContextChannelContexts },
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataUserContext extends $tea.Model {
  breakCode?: string;
  deviceId?: string;
  extension?: string;
  heartbeat?: number;
  instanceId?: string;
  jobId?: string;
  mobile?: string;
  outboundScenario?: boolean;
  signedSkillGroupIdList?: string[];
  userId?: string;
  userState?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      deviceId: 'DeviceId',
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      mobile: 'Mobile',
      outboundScenario: 'OutboundScenario',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      userState: 'UserState',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      deviceId: 'string',
      extension: 'string',
      heartbeat: 'number',
      instanceId: 'string',
      jobId: 'string',
      mobile: 'string',
      outboundScenario: 'boolean',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userState: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyData extends $tea.Model {
  callContext?: UnmuteCallResponseBodyDataCallContext;
  userContext?: UnmuteCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: UnmuteCallResponseBodyDataCallContext,
      userContext: UnmuteCallResponseBodyDataUserContext,
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
      'ap-northeast-1': "ccc.aliyuncs.com",
      'ap-south-1': "ccc.aliyuncs.com",
      'ap-southeast-1': "ccc.aliyuncs.com",
      'ap-southeast-2': "ccc.aliyuncs.com",
      'ap-southeast-3': "ccc.aliyuncs.com",
      'ap-southeast-5': "ccc.aliyuncs.com",
      'cn-beijing': "ccc.aliyuncs.com",
      'cn-chengdu': "ccc.aliyuncs.com",
      'cn-hongkong': "ccc.aliyuncs.com",
      'cn-huhehaote': "ccc.aliyuncs.com",
      'cn-qingdao': "ccc.aliyuncs.com",
      'cn-shenzhen': "ccc.aliyuncs.com",
      'cn-zhangjiakou': "ccc.aliyuncs.com",
      'eu-central-1': "ccc.aliyuncs.com",
      'eu-west-1': "ccc.aliyuncs.com",
      'me-east-1': "ccc.aliyuncs.com",
      'us-east-1': "ccc.aliyuncs.com",
      'us-west-1': "ccc.aliyuncs.com",
      'cn-hangzhou-finance': "ccc.aliyuncs.com",
      'cn-shenzhen-finance-1': "ccc.aliyuncs.com",
      'cn-shanghai-finance-1': "ccc.aliyuncs.com",
      'cn-north-2-gov-1': "ccc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ccc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCasesWithOptions(tmpReq: AddCasesRequest, runtime: $Util.RuntimeOptions): Promise<AddCasesResponse> {
    Util.validateModel(tmpReq);
    let request = new AddCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.caseList)) {
      request.caseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseList, "CaseList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.caseListShrink)) {
      query["CaseList"] = request.caseListShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCasesResponse>(await this.callApi(params, req, runtime), new AddCasesResponse({}));
  }

  async addCases(request: AddCasesRequest): Promise<AddCasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasesWithOptions(request, runtime);
  }

  async addNumbersToSkillGroupWithOptions(request: AddNumbersToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddNumbersToSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instNumberGroupIdList)) {
      query["InstNumberGroupIdList"] = request.instNumberGroupIdList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddNumbersToSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddNumbersToSkillGroupResponse>(await this.callApi(params, req, runtime), new AddNumbersToSkillGroupResponse({}));
  }

  async addNumbersToSkillGroup(request: AddNumbersToSkillGroupRequest): Promise<AddNumbersToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNumbersToSkillGroupWithOptions(request, runtime);
  }

  async addPersonalNumbersToUserWithOptions(request: AddPersonalNumbersToUserRequest, runtime: $Util.RuntimeOptions): Promise<AddPersonalNumbersToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPersonalNumbersToUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPersonalNumbersToUserResponse>(await this.callApi(params, req, runtime), new AddPersonalNumbersToUserResponse({}));
  }

  async addPersonalNumbersToUser(request: AddPersonalNumbersToUserRequest): Promise<AddPersonalNumbersToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPersonalNumbersToUserWithOptions(request, runtime);
  }

  async addPhoneNumberToSkillGroupsWithOptions(request: AddPhoneNumberToSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneNumberToSkillGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPhoneNumberToSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPhoneNumberToSkillGroupsResponse>(await this.callApi(params, req, runtime), new AddPhoneNumberToSkillGroupsResponse({}));
  }

  async addPhoneNumberToSkillGroups(request: AddPhoneNumberToSkillGroupsRequest): Promise<AddPhoneNumberToSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneNumberToSkillGroupsWithOptions(request, runtime);
  }

  async addPhoneNumbersWithOptions(request: AddPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberGroupId)) {
      query["NumberGroupId"] = request.numberGroupId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPhoneNumbersResponse>(await this.callApi(params, req, runtime), new AddPhoneNumbersResponse({}));
  }

  async addPhoneNumbers(request: AddPhoneNumbersRequest): Promise<AddPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneNumbersWithOptions(request, runtime);
  }

  async addSkillGroupsToUserWithOptions(request: AddSkillGroupsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AddSkillGroupsToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSkillGroupsToUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSkillGroupsToUserResponse>(await this.callApi(params, req, runtime), new AddSkillGroupsToUserResponse({}));
  }

  async addSkillGroupsToUser(request: AddSkillGroupsToUserRequest): Promise<AddSkillGroupsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSkillGroupsToUserWithOptions(request, runtime);
  }

  async addUsersToSkillGroupWithOptions(request: AddUsersToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersToSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.userSkillLevelList)) {
      query["UserSkillLevelList"] = request.userSkillLevelList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUsersToSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUsersToSkillGroupResponse>(await this.callApi(params, req, runtime), new AddUsersToSkillGroupResponse({}));
  }

  async addUsersToSkillGroup(request: AddUsersToSkillGroupRequest): Promise<AddUsersToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToSkillGroupWithOptions(request, runtime);
  }

  async answerCallWithOptions(request: AnswerCallRequest, runtime: $Util.RuntimeOptions): Promise<AnswerCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AnswerCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AnswerCallResponse>(await this.callApi(params, req, runtime), new AnswerCallResponse({}));
  }

  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  async appendCasesWithOptions(tmpReq: AppendCasesRequest, runtime: $Util.RuntimeOptions): Promise<AppendCasesResponse> {
    Util.validateModel(tmpReq);
    let request = new AppendCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppendCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppendCasesResponse>(await this.callApi(params, req, runtime), new AppendCasesResponse({}));
  }

  async appendCases(request: AppendCasesRequest): Promise<AppendCasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appendCasesWithOptions(request, runtime);
  }

  /**
    * @deprecated : AssignUsers is deprecated, please use CCC::2020-07-01::ImportRamUsers instead.
    *
    * @param request AssignUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssignUsersResponse
   */
  // Deprecated
  async assignUsersWithOptions(request: AssignUsersRequest, runtime: $Util.RuntimeOptions): Promise<AssignUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!Util.isUnset(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignUsersResponse>(await this.callApi(params, req, runtime), new AssignUsersResponse({}));
  }

  /**
    * @deprecated : AssignUsers is deprecated, please use CCC::2020-07-01::ImportRamUsers instead.
    *
    * @param request AssignUsersRequest
    * @return AssignUsersResponse
   */
  // Deprecated
  async assignUsers(request: AssignUsersRequest): Promise<AssignUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignUsersWithOptions(request, runtime);
  }

  async bargeInCallWithOptions(request: BargeInCallRequest, runtime: $Util.RuntimeOptions): Promise<BargeInCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bargedUserId)) {
      query["BargedUserId"] = request.bargedUserId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BargeInCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BargeInCallResponse>(await this.callApi(params, req, runtime), new BargeInCallResponse({}));
  }

  async bargeInCall(request: BargeInCallRequest): Promise<BargeInCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bargeInCallWithOptions(request, runtime);
  }

  async blindTransferWithOptions(request: BlindTransferRequest, runtime: $Util.RuntimeOptions): Promise<BlindTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callPriority)) {
      query["CallPriority"] = request.callPriority;
    }

    if (!Util.isUnset(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    if (!Util.isUnset(request.strategyParams)) {
      query["StrategyParams"] = request.strategyParams;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.transferee)) {
      query["Transferee"] = request.transferee;
    }

    if (!Util.isUnset(request.transfereeType)) {
      query["TransfereeType"] = request.transfereeType;
    }

    if (!Util.isUnset(request.transferor)) {
      query["Transferor"] = request.transferor;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BlindTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BlindTransferResponse>(await this.callApi(params, req, runtime), new BlindTransferResponse({}));
  }

  async blindTransfer(request: BlindTransferRequest): Promise<BlindTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.blindTransferWithOptions(request, runtime);
  }

  async bridgeRtcCallWithOptions(request: BridgeRtcCallRequest, runtime: $Util.RuntimeOptions): Promise<BridgeRtcCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.serviceProvider)) {
      query["ServiceProvider"] = request.serviceProvider;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.videoEnabled)) {
      query["VideoEnabled"] = request.videoEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BridgeRtcCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BridgeRtcCallResponse>(await this.callApi(params, req, runtime), new BridgeRtcCallResponse({}));
  }

  async bridgeRtcCall(request: BridgeRtcCallRequest): Promise<BridgeRtcCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bridgeRtcCallWithOptions(request, runtime);
  }

  async cancelAttendedTransferWithOptions(request: CancelAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<CancelAttendedTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelAttendedTransferResponse>(await this.callApi(params, req, runtime), new CancelAttendedTransferResponse({}));
  }

  async cancelAttendedTransfer(request: CancelAttendedTransferRequest): Promise<CancelAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAttendedTransferWithOptions(request, runtime);
  }

  async changeVisibilityWithOptions(request: ChangeVisibilityRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVisibilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.invisible)) {
      query["Invisible"] = request.invisible;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeVisibility",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeVisibilityResponse>(await this.callApi(params, req, runtime), new ChangeVisibilityResponse({}));
  }

  async changeVisibility(request: ChangeVisibilityRequest): Promise<ChangeVisibilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVisibilityWithOptions(request, runtime);
  }

  async changeWorkModeWithOptions(request: ChangeWorkModeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeWorkModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.signedSkillGroupIdList)) {
      query["SignedSkillGroupIdList"] = request.signedSkillGroupIdList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeWorkMode",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeWorkModeResponse>(await this.callApi(params, req, runtime), new ChangeWorkModeResponse({}));
  }

  async changeWorkMode(request: ChangeWorkModeRequest): Promise<ChangeWorkModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeWorkModeWithOptions(request, runtime);
  }

  async coachCallWithOptions(request: CoachCallRequest, runtime: $Util.RuntimeOptions): Promise<CoachCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coachedUserId)) {
      query["CoachedUserId"] = request.coachedUserId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CoachCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CoachCallResponse>(await this.callApi(params, req, runtime), new CoachCallResponse({}));
  }

  async coachCall(request: CoachCallRequest): Promise<CoachCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.coachCallWithOptions(request, runtime);
  }

  async commitContactFlowWithOptions(request: CommitContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<CommitContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommitContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitContactFlowResponse>(await this.callApi(params, req, runtime), new CommitContactFlowResponse({}));
  }

  async commitContactFlow(request: CommitContactFlowRequest): Promise<CommitContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitContactFlowWithOptions(request, runtime);
  }

  async completeAttendedTransferWithOptions(request: CompleteAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<CompleteAttendedTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompleteAttendedTransferResponse>(await this.callApi(params, req, runtime), new CompleteAttendedTransferResponse({}));
  }

  async completeAttendedTransfer(request: CompleteAttendedTransferRequest): Promise<CompleteAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeAttendedTransferWithOptions(request, runtime);
  }

  async createAudioFileWithOptions(request: CreateAudioFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateAudioFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossFileKey)) {
      query["OssFileKey"] = request.ossFileKey;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAudioFileResponse>(await this.callApi(params, req, runtime), new CreateAudioFileResponse({}));
  }

  async createAudioFile(request: CreateAudioFileRequest): Promise<CreateAudioFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAudioFileWithOptions(request, runtime);
  }

  async createCallTagsWithOptions(request: CreateCallTagsRequest, runtime: $Util.RuntimeOptions): Promise<CreateCallTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCallTags",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCallTagsResponse>(await this.callApi(params, req, runtime), new CreateCallTagsResponse({}));
  }

  async createCallTags(request: CreateCallTagsRequest): Promise<CreateCallTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCallTagsWithOptions(request, runtime);
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

  async createContactFlowWithOptions(request: CreateContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateContactFlowResponse>(await this.callApi(params, req, runtime), new CreateContactFlowResponse({}));
  }

  async createContactFlow(request: CreateContactFlowRequest): Promise<CreateContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContactFlowWithOptions(request, runtime);
  }

  async createCustomCallTaggingWithOptions(request: CreateCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customNumberList)) {
      query["CustomNumberList"] = request.customNumberList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new CreateCustomCallTaggingResponse({}));
  }

  async createCustomCallTagging(request: CreateCustomCallTaggingRequest): Promise<CreateCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomCallTaggingWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminRamIdList)) {
      query["AdminRamIdList"] = request.adminRamIdList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.avatarUrl)) {
      query["AvatarUrl"] = request.avatarUrl;
    }

    if (!Util.isUnset(request.displayId)) {
      query["DisplayId"] = request.displayId;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.loginName)) {
      query["LoginName"] = request.loginName;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!Util.isUnset(request.resetPassword)) {
      query["ResetPassword"] = request.resetPassword;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!Util.isUnset(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async deleteAudioFileWithOptions(request: DeleteAudioFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAudioFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAudioFileResponse>(await this.callApi(params, req, runtime), new DeleteAudioFileResponse({}));
  }

  async deleteAudioFile(request: DeleteAudioFileRequest): Promise<DeleteAudioFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAudioFileWithOptions(request, runtime);
  }

  async deleteCallTagWithOptions(request: DeleteCallTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCallTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCallTag",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCallTagResponse>(await this.callApi(params, req, runtime), new DeleteCallTagResponse({}));
  }

  async deleteCallTag(request: DeleteCallTagRequest): Promise<DeleteCallTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCallTagWithOptions(request, runtime);
  }

  async deleteContactFlowWithOptions(request: DeleteContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactFlowResponse>(await this.callApi(params, req, runtime), new DeleteContactFlowResponse({}));
  }

  async deleteContactFlow(request: DeleteContactFlowRequest): Promise<DeleteContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactFlowWithOptions(request, runtime);
  }

  async deleteCustomCallTaggingWithOptions(request: DeleteCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new DeleteCustomCallTaggingResponse({}));
  }

  async deleteCustomCallTagging(request: DeleteCustomCallTaggingRequest): Promise<DeleteCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomCallTaggingWithOptions(request, runtime);
  }

  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSkillGroupResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupResponse({}));
  }

  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  async discardEditingContactFlowWithOptions(request: DiscardEditingContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<DiscardEditingContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DiscardEditingContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DiscardEditingContactFlowResponse>(await this.callApi(params, req, runtime), new DiscardEditingContactFlowResponse({}));
  }

  async discardEditingContactFlow(request: DiscardEditingContactFlowRequest): Promise<DiscardEditingContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.discardEditingContactFlowWithOptions(request, runtime);
  }

  async endConferenceWithOptions(request: EndConferenceRequest, runtime: $Util.RuntimeOptions): Promise<EndConferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EndConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndConferenceResponse>(await this.callApi(params, req, runtime), new EndConferenceResponse({}));
  }

  async endConference(request: EndConferenceRequest): Promise<EndConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endConferenceWithOptions(request, runtime);
  }

  /**
    * @deprecated : ExportCustomCallTagging is deprecated, please use CCC::2020-07-01::ExportCustomCallTaggings instead.
    *
    * @param request ExportCustomCallTaggingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportCustomCallTaggingResponse
   */
  // Deprecated
  async exportCustomCallTaggingWithOptions(request: ExportCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<ExportCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new ExportCustomCallTaggingResponse({}));
  }

  /**
    * @deprecated : ExportCustomCallTagging is deprecated, please use CCC::2020-07-01::ExportCustomCallTaggings instead.
    *
    * @param request ExportCustomCallTaggingRequest
    * @return ExportCustomCallTaggingResponse
   */
  // Deprecated
  async exportCustomCallTagging(request: ExportCustomCallTaggingRequest): Promise<ExportCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportCustomCallTaggingWithOptions(request, runtime);
  }

  async exportDoNotCallNumbersWithOptions(request: ExportDoNotCallNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ExportDoNotCallNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new ExportDoNotCallNumbersResponse({}));
  }

  async exportDoNotCallNumbers(request: ExportDoNotCallNumbersRequest): Promise<ExportDoNotCallNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDoNotCallNumbersWithOptions(request, runtime);
  }

  async getAccessChannelOfStagingWithOptions(request: GetAccessChannelOfStagingRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessChannelOfStagingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessChannelOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessChannelOfStagingResponse>(await this.callApi(params, req, runtime), new GetAccessChannelOfStagingResponse({}));
  }

  async getAccessChannelOfStaging(request: GetAccessChannelOfStagingRequest): Promise<GetAccessChannelOfStagingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessChannelOfStagingWithOptions(request, runtime);
  }

  async getAudioFileWithOptions(request: GetAudioFileRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAudioFileResponse>(await this.callApi(params, req, runtime), new GetAudioFileResponse({}));
  }

  async getAudioFile(request: GetAudioFileRequest): Promise<GetAudioFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioFileWithOptions(request, runtime);
  }

  async getAudioFileDownloadUrlWithOptions(request: GetAudioFileDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioFileDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAudioFileDownloadUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAudioFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetAudioFileDownloadUrlResponse({}));
  }

  async getAudioFileDownloadUrl(request: GetAudioFileDownloadUrlRequest): Promise<GetAudioFileDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioFileDownloadUrlWithOptions(request, runtime);
  }

  async getAudioFileUploadParametersWithOptions(request: GetAudioFileUploadParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioFileUploadParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAudioFileUploadParameters",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAudioFileUploadParametersResponse>(await this.callApi(params, req, runtime), new GetAudioFileUploadParametersResponse({}));
  }

  async getAudioFileUploadParameters(request: GetAudioFileUploadParametersRequest): Promise<GetAudioFileUploadParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioFileUploadParametersWithOptions(request, runtime);
  }

  async getCallDetailRecordWithOptions(request: GetCallDetailRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetCallDetailRecordResponse> {
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
      action: "GetCallDetailRecord",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCallDetailRecordResponse>(await this.callApi(params, req, runtime), new GetCallDetailRecordResponse({}));
  }

  async getCallDetailRecord(request: GetCallDetailRecordRequest): Promise<GetCallDetailRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
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

  async getCaseFileUploadUrlWithOptions(request: GetCaseFileUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetCaseFileUploadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCaseFileUploadUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCaseFileUploadUrlResponse>(await this.callApi(params, req, runtime), new GetCaseFileUploadUrlResponse({}));
  }

  async getCaseFileUploadUrl(request: GetCaseFileUploadUrlRequest): Promise<GetCaseFileUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCaseFileUploadUrlWithOptions(request, runtime);
  }

  async getContactFlowWithOptions(request: GetContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetContactFlowResponse>(await this.callApi(params, req, runtime), new GetContactFlowResponse({}));
  }

  async getContactFlow(request: GetContactFlowRequest): Promise<GetContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContactFlowWithOptions(request, runtime);
  }

  async getConversationDetailWithOptions(request: GetConversationDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetConversationDetailResponse> {
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
      action: "GetConversationDetail",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConversationDetailResponse>(await this.callApi(params, req, runtime), new GetConversationDetailResponse({}));
  }

  async getConversationDetail(request: GetConversationDetailRequest): Promise<GetConversationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationDetailWithOptions(request, runtime);
  }

  async getDataChannelCredentialsWithOptions(request: GetDataChannelCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetDataChannelCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataChannelCredentials",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataChannelCredentialsResponse>(await this.callApi(params, req, runtime), new GetDataChannelCredentialsResponse({}));
  }

  async getDataChannelCredentials(request: GetDataChannelCredentialsRequest): Promise<GetDataChannelCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataChannelCredentialsWithOptions(request, runtime);
  }

  async getDoNotCallFileUploadParametersWithOptions(request: GetDoNotCallFileUploadParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetDoNotCallFileUploadParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoNotCallFileUploadParameters",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoNotCallFileUploadParametersResponse>(await this.callApi(params, req, runtime), new GetDoNotCallFileUploadParametersResponse({}));
  }

  async getDoNotCallFileUploadParameters(request: GetDoNotCallFileUploadParametersRequest): Promise<GetDoNotCallFileUploadParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoNotCallFileUploadParametersWithOptions(request, runtime);
  }

  async getEarlyMediaRecordingWithOptions(request: GetEarlyMediaRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetEarlyMediaRecordingResponse> {
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
      action: "GetEarlyMediaRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEarlyMediaRecordingResponse>(await this.callApi(params, req, runtime), new GetEarlyMediaRecordingResponse({}));
  }

  async getEarlyMediaRecording(request: GetEarlyMediaRecordingRequest): Promise<GetEarlyMediaRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEarlyMediaRecordingWithOptions(request, runtime);
  }

  async getHistoricalCallerReportWithOptions(request: GetHistoricalCallerReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoricalCallerReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["StopTime"] = request.stopTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoricalCallerReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoricalCallerReportResponse>(await this.callApi(params, req, runtime), new GetHistoricalCallerReportResponse({}));
  }

  async getHistoricalCallerReport(request: GetHistoricalCallerReportRequest): Promise<GetHistoricalCallerReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoricalCallerReportWithOptions(request, runtime);
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

  async getHistoricalInstanceReportWithOptions(request: GetHistoricalInstanceReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoricalInstanceReportResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoricalInstanceReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoricalInstanceReportResponse>(await this.callApi(params, req, runtime), new GetHistoricalInstanceReportResponse({}));
  }

  async getHistoricalInstanceReport(request: GetHistoricalInstanceReportRequest): Promise<GetHistoricalInstanceReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoricalInstanceReportWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getInstanceTrendingReportWithOptions(request: GetInstanceTrendingReportRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceTrendingReportResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceTrendingReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceTrendingReportResponse>(await this.callApi(params, req, runtime), new GetInstanceTrendingReportResponse({}));
  }

  async getInstanceTrendingReport(request: GetInstanceTrendingReportRequest): Promise<GetInstanceTrendingReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceTrendingReportWithOptions(request, runtime);
  }

  async getLoginDetailsWithOptions(request: GetLoginDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chatDeviceId)) {
      query["ChatDeviceId"] = request.chatDeviceId;
    }

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
      action: "GetLoginDetails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginDetailsResponse>(await this.callApi(params, req, runtime), new GetLoginDetailsResponse({}));
  }

  async getLoginDetails(request: GetLoginDetailsRequest): Promise<GetLoginDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginDetailsWithOptions(request, runtime);
  }

  async getMonoRecordingWithOptions(request: GetMonoRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetMonoRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMonoRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMonoRecordingResponse>(await this.callApi(params, req, runtime), new GetMonoRecordingResponse({}));
  }

  async getMonoRecording(request: GetMonoRecordingRequest): Promise<GetMonoRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonoRecordingWithOptions(request, runtime);
  }

  async getMultiChannelRecordingWithOptions(request: GetMultiChannelRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetMultiChannelRecordingResponse> {
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
      action: "GetMultiChannelRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMultiChannelRecordingResponse>(await this.callApi(params, req, runtime), new GetMultiChannelRecordingResponse({}));
  }

  async getMultiChannelRecording(request: GetMultiChannelRecordingRequest): Promise<GetMultiChannelRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultiChannelRecordingWithOptions(request, runtime);
  }

  async getNumberLocationWithOptions(request: GetNumberLocationRequest, runtime: $Util.RuntimeOptions): Promise<GetNumberLocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNumberLocation",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNumberLocationResponse>(await this.callApi(params, req, runtime), new GetNumberLocationResponse({}));
  }

  async getNumberLocation(request: GetNumberLocationRequest): Promise<GetNumberLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumberLocationWithOptions(request, runtime);
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

  async getRealtimeInstanceStatesWithOptions(request: GetRealtimeInstanceStatesRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeInstanceStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealtimeInstanceStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealtimeInstanceStatesResponse>(await this.callApi(params, req, runtime), new GetRealtimeInstanceStatesResponse({}));
  }

  async getRealtimeInstanceStates(request: GetRealtimeInstanceStatesRequest): Promise<GetRealtimeInstanceStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeInstanceStatesWithOptions(request, runtime);
  }

  async getSkillGroupWithOptions(request: GetSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupResponse>(await this.callApi(params, req, runtime), new GetSkillGroupResponse({}));
  }

  async getSkillGroup(request: GetSkillGroupRequest): Promise<GetSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupWithOptions(request, runtime);
  }

  async getTurnCredentialsWithOptions(request: GetTurnCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetTurnCredentialsResponse> {
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
      action: "GetTurnCredentials",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTurnCredentialsResponse>(await this.callApi(params, req, runtime), new GetTurnCredentialsResponse({}));
  }

  async getTurnCredentials(request: GetTurnCredentialsRequest): Promise<GetTurnCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTurnCredentialsWithOptions(request, runtime);
  }

  async getTurnServerListWithOptions(request: GetTurnServerListRequest, runtime: $Util.RuntimeOptions): Promise<GetTurnServerListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTurnServerList",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTurnServerListResponse>(await this.callApi(params, req, runtime), new GetTurnServerListResponse({}));
  }

  async getTurnServerList(request: GetTurnServerListRequest): Promise<GetTurnServerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTurnServerListWithOptions(request, runtime);
  }

  async getUploadAudioDataParamsWithOptions(request: GetUploadAudioDataParamsRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadAudioDataParamsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadAudioDataParams",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadAudioDataParamsResponse>(await this.callApi(params, req, runtime), new GetUploadAudioDataParamsResponse({}));
  }

  async getUploadAudioDataParams(request: GetUploadAudioDataParamsRequest): Promise<GetUploadAudioDataParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadAudioDataParamsWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extension)) {
      query["Extension"] = request.extension;
    }

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
      action: "GetUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getVideoWithOptions(request: GetVideoRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoResponse>(await this.callApi(params, req, runtime), new GetVideoResponse({}));
  }

  async getVideo(request: GetVideoRequest): Promise<GetVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoWithOptions(request, runtime);
  }

  async getVoicemailRecordingWithOptions(request: GetVoicemailRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetVoicemailRecordingResponse> {
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
      action: "GetVoicemailRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVoicemailRecordingResponse>(await this.callApi(params, req, runtime), new GetVoicemailRecordingResponse({}));
  }

  async getVoicemailRecording(request: GetVoicemailRecordingRequest): Promise<GetVoicemailRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVoicemailRecordingWithOptions(request, runtime);
  }

  async holdCallWithOptions(request: HoldCallRequest, runtime: $Util.RuntimeOptions): Promise<HoldCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.music)) {
      query["Music"] = request.music;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HoldCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HoldCallResponse>(await this.callApi(params, req, runtime), new HoldCallResponse({}));
  }

  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
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

  /**
    * @deprecated : ImportCustomCallTagging is deprecated, please use CCC::2020-07-01::ImportCustomCallTaggings instead.
    *
    * @param request ImportCustomCallTaggingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ImportCustomCallTaggingResponse
   */
  // Deprecated
  async importCustomCallTaggingWithOptions(request: ImportCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<ImportCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new ImportCustomCallTaggingResponse({}));
  }

  /**
    * @deprecated : ImportCustomCallTagging is deprecated, please use CCC::2020-07-01::ImportCustomCallTaggings instead.
    *
    * @param request ImportCustomCallTaggingRequest
    * @return ImportCustomCallTaggingResponse
   */
  // Deprecated
  async importCustomCallTagging(request: ImportCustomCallTaggingRequest): Promise<ImportCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCustomCallTaggingWithOptions(request, runtime);
  }

  async importDoNotCallNumbersWithOptions(request: ImportDoNotCallNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ImportDoNotCallNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new ImportDoNotCallNumbersResponse({}));
  }

  async importDoNotCallNumbers(request: ImportDoNotCallNumbersRequest): Promise<ImportDoNotCallNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDoNotCallNumbersWithOptions(request, runtime);
  }

  async initiateAttendedTransferWithOptions(request: InitiateAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<InitiateAttendedTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callPriority)) {
      query["CallPriority"] = request.callPriority;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    if (!Util.isUnset(request.strategyParams)) {
      query["StrategyParams"] = request.strategyParams;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.transferee)) {
      query["Transferee"] = request.transferee;
    }

    if (!Util.isUnset(request.transferor)) {
      query["Transferor"] = request.transferor;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitiateAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitiateAttendedTransferResponse>(await this.callApi(params, req, runtime), new InitiateAttendedTransferResponse({}));
  }

  async initiateAttendedTransfer(request: InitiateAttendedTransferRequest): Promise<InitiateAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initiateAttendedTransferWithOptions(request, runtime);
  }

  async interceptCallWithOptions(request: InterceptCallRequest, runtime: $Util.RuntimeOptions): Promise<InterceptCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interceptedUserId)) {
      query["InterceptedUserId"] = request.interceptedUserId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InterceptCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InterceptCallResponse>(await this.callApi(params, req, runtime), new InterceptCallResponse({}));
  }

  async interceptCall(request: InterceptCallRequest): Promise<InterceptCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.interceptCallWithOptions(request, runtime);
  }

  async launchAuthenticationWithOptions(request: LaunchAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<LaunchAuthenticationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LaunchAuthentication",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LaunchAuthenticationResponse>(await this.callApi(params, req, runtime), new LaunchAuthenticationResponse({}));
  }

  async launchAuthentication(request: LaunchAuthenticationRequest): Promise<LaunchAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchAuthenticationWithOptions(request, runtime);
  }

  async launchSurveyWithOptions(request: LaunchSurveyRequest, runtime: $Util.RuntimeOptions): Promise<LaunchSurveyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.smsMetadataId)) {
      query["SmsMetadataId"] = request.smsMetadataId;
    }

    if (!Util.isUnset(request.surveyChannel)) {
      query["SurveyChannel"] = request.surveyChannel;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LaunchSurvey",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LaunchSurveyResponse>(await this.callApi(params, req, runtime), new LaunchSurveyResponse({}));
  }

  async launchSurvey(request: LaunchSurveyRequest): Promise<LaunchSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchSurveyWithOptions(request, runtime);
  }

  async listAgentStateLogsWithOptions(request: ListAgentStateLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentStateLogsResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAgentStateLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAgentStateLogsResponse>(await this.callApi(params, req, runtime), new ListAgentStateLogsResponse({}));
  }

  async listAgentStateLogs(request: ListAgentStateLogsRequest): Promise<ListAgentStateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentStateLogsWithOptions(request, runtime);
  }

  /**
    * @deprecated : ListAgentStates is deprecated, please use CCC::2020-07-01::ListRealtimeAgentStates instead.
    *
    * @param request ListAgentStatesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAgentStatesResponse
   */
  // Deprecated
  async listAgentStatesWithOptions(request: ListAgentStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentIds)) {
      query["AgentIds"] = request.agentIds;
    }

    if (!Util.isUnset(request.excludeOfflineUsers)) {
      query["ExcludeOfflineUsers"] = request.excludeOfflineUsers;
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

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAgentStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAgentStatesResponse>(await this.callApi(params, req, runtime), new ListAgentStatesResponse({}));
  }

  /**
    * @deprecated : ListAgentStates is deprecated, please use CCC::2020-07-01::ListRealtimeAgentStates instead.
    *
    * @param request ListAgentStatesRequest
    * @return ListAgentStatesResponse
   */
  // Deprecated
  async listAgentStates(request: ListAgentStatesRequest): Promise<ListAgentStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentStatesWithOptions(request, runtime);
  }

  /**
    * @deprecated : ListAgentSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalAgentReport instead.
    *
    * @param request ListAgentSummaryReportsSinceMidnightRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAgentSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listAgentSummaryReportsSinceMidnightWithOptions(request: ListAgentSummaryReportsSinceMidnightRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentSummaryReportsSinceMidnightResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAgentSummaryReportsSinceMidnight",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAgentSummaryReportsSinceMidnightResponse>(await this.callApi(params, req, runtime), new ListAgentSummaryReportsSinceMidnightResponse({}));
  }

  /**
    * @deprecated : ListAgentSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalAgentReport instead.
    *
    * @param request ListAgentSummaryReportsSinceMidnightRequest
    * @return ListAgentSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listAgentSummaryReportsSinceMidnight(request: ListAgentSummaryReportsSinceMidnightRequest): Promise<ListAgentSummaryReportsSinceMidnightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentSummaryReportsSinceMidnightWithOptions(request, runtime);
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

  async listAudioFilesWithOptions(request: ListAudioFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListAudioFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAudioFiles",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAudioFilesResponse>(await this.callApi(params, req, runtime), new ListAudioFilesResponse({}));
  }

  async listAudioFiles(request: ListAudioFilesRequest): Promise<ListAudioFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAudioFilesWithOptions(request, runtime);
  }

  async listBriefSkillGroupsWithOptions(request: ListBriefSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListBriefSkillGroupsResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBriefSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBriefSkillGroupsResponse>(await this.callApi(params, req, runtime), new ListBriefSkillGroupsResponse({}));
  }

  async listBriefSkillGroups(request: ListBriefSkillGroupsRequest): Promise<ListBriefSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBriefSkillGroupsWithOptions(request, runtime);
  }

  async listCallDetailRecordsWithOptions(request: ListCallDetailRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListCallDetailRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.contactDisposition)) {
      query["ContactDisposition"] = request.contactDisposition;
    }

    if (!Util.isUnset(request.contactDispositionList)) {
      query["ContactDispositionList"] = request.contactDispositionList;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!Util.isUnset(request.contactTypeList)) {
      query["ContactTypeList"] = request.contactTypeList;
    }

    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.earlyMediaStateList)) {
      query["EarlyMediaStateList"] = request.earlyMediaStateList;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.satisfactionDescriptionList)) {
      query["SatisfactionDescriptionList"] = request.satisfactionDescriptionList;
    }

    if (!Util.isUnset(request.satisfactionList)) {
      query["SatisfactionList"] = request.satisfactionList;
    }

    if (!Util.isUnset(request.satisfactionSurveyChannel)) {
      query["SatisfactionSurveyChannel"] = request.satisfactionSurveyChannel;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCallDetailRecords",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCallDetailRecordsResponse>(await this.callApi(params, req, runtime), new ListCallDetailRecordsResponse({}));
  }

  async listCallDetailRecords(request: ListCallDetailRecordsRequest): Promise<ListCallDetailRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallDetailRecordsWithOptions(request, runtime);
  }

  async listCallTagsWithOptions(request: ListCallTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListCallTags",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCallTagsResponse>(await this.callApi(params, req, runtime), new ListCallTagsResponse({}));
  }

  async listCallTags(request: ListCallTagsRequest): Promise<ListCallTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTagsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
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

  async listConfigItemsWithOptions(request: ListConfigItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigItems",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigItemsResponse>(await this.callApi(params, req, runtime), new ListConfigItemsResponse({}));
  }

  async listConfigItems(request: ListConfigItemsRequest): Promise<ListConfigItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigItemsWithOptions(request, runtime);
  }

  async listContactFlowsWithOptions(request: ListContactFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListContactFlowsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContactFlows",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContactFlowsResponse>(await this.callApi(params, req, runtime), new ListContactFlowsResponse({}));
  }

  async listContactFlows(request: ListContactFlowsRequest): Promise<ListContactFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactFlowsWithOptions(request, runtime);
  }

  /**
    * @deprecated : ListCustomCallTagging is deprecated, please use CCC::2020-07-01::ListCustomCallTaggings instead.
    *
    * @param request ListCustomCallTaggingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCustomCallTaggingResponse
   */
  // Deprecated
  async listCustomCallTaggingWithOptions(request: ListCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
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

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new ListCustomCallTaggingResponse({}));
  }

  /**
    * @deprecated : ListCustomCallTagging is deprecated, please use CCC::2020-07-01::ListCustomCallTaggings instead.
    *
    * @param request ListCustomCallTaggingRequest
    * @return ListCustomCallTaggingResponse
   */
  // Deprecated
  async listCustomCallTagging(request: ListCustomCallTaggingRequest): Promise<ListCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomCallTaggingWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
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
      action: "ListDevices",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicesResponse>(await this.callApi(params, req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async listDoNotCallNumbersWithOptions(request: ListDoNotCallNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListDoNotCallNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new ListDoNotCallNumbersResponse({}));
  }

  async listDoNotCallNumbers(request: ListDoNotCallNumbersRequest): Promise<ListDoNotCallNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoNotCallNumbersWithOptions(request, runtime);
  }

  async listHistoricalAgentReportWithOptions(request: ListHistoricalAgentReportRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoricalAgentReportResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["StopTime"] = request.stopTime;
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
      action: "ListHistoricalAgentReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHistoricalAgentReportResponse>(await this.callApi(params, req, runtime), new ListHistoricalAgentReportResponse({}));
  }

  async listHistoricalAgentReport(request: ListHistoricalAgentReportRequest): Promise<ListHistoricalAgentReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoricalAgentReportWithOptions(request, runtime);
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

  async listHistoricalSkillGroupReportWithOptions(request: ListHistoricalSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoricalSkillGroupReportResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHistoricalSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHistoricalSkillGroupReportResponse>(await this.callApi(params, req, runtime), new ListHistoricalSkillGroupReportResponse({}));
  }

  async listHistoricalSkillGroupReport(request: ListHistoricalSkillGroupReportRequest): Promise<ListHistoricalSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoricalSkillGroupReportWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
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
      action: "ListInstances",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listInstancesOfUserWithOptions(request: ListInstancesOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesOfUserResponse> {
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
      action: "ListInstancesOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesOfUserResponse>(await this.callApi(params, req, runtime), new ListInstancesOfUserResponse({}));
  }

  async listInstancesOfUser(request: ListInstancesOfUserRequest): Promise<ListInstancesOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesOfUserWithOptions(request, runtime);
  }

  async listIntervalAgentReportWithOptions(request: ListIntervalAgentReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalAgentReportResponse> {
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervalAgentReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervalAgentReportResponse>(await this.callApi(params, req, runtime), new ListIntervalAgentReportResponse({}));
  }

  async listIntervalAgentReport(request: ListIntervalAgentReportRequest): Promise<ListIntervalAgentReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalAgentReportWithOptions(request, runtime);
  }

  async listIntervalAgentSkillGroupReportWithOptions(request: ListIntervalAgentSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalAgentSkillGroupReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
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

  async listIntervalInstanceReportWithOptions(request: ListIntervalInstanceReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalInstanceReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervalInstanceReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervalInstanceReportResponse>(await this.callApi(params, req, runtime), new ListIntervalInstanceReportResponse({}));
  }

  async listIntervalInstanceReport(request: ListIntervalInstanceReportRequest): Promise<ListIntervalInstanceReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalInstanceReportWithOptions(request, runtime);
  }

  async listIntervalSkillGroupReportWithOptions(request: ListIntervalSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalSkillGroupReportResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "ListIntervalSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervalSkillGroupReportResponse>(await this.callApi(params, req, runtime), new ListIntervalSkillGroupReportResponse({}));
  }

  async listIntervalSkillGroupReport(request: ListIntervalSkillGroupReportRequest): Promise<ListIntervalSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalSkillGroupReportWithOptions(request, runtime);
  }

  async listIvrTrackingDetailsWithOptions(request: ListIvrTrackingDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListIvrTrackingDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIvrTrackingDetails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIvrTrackingDetailsResponse>(await this.callApi(params, req, runtime), new ListIvrTrackingDetailsResponse({}));
  }

  async listIvrTrackingDetails(request: ListIvrTrackingDetailsRequest): Promise<ListIvrTrackingDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIvrTrackingDetailsWithOptions(request, runtime);
  }

  async listLegacyAgentEventLogsWithOptions(request: ListLegacyAgentEventLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListLegacyAgentEventLogsResponse> {
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

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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
      action: "ListLegacyAgentEventLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLegacyAgentEventLogsResponse>(await this.callApi(params, req, runtime), new ListLegacyAgentEventLogsResponse({}));
  }

  async listLegacyAgentEventLogs(request: ListLegacyAgentEventLogsRequest): Promise<ListLegacyAgentEventLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLegacyAgentEventLogsWithOptions(request, runtime);
  }

  async listLegacyAgentStatusLogsWithOptions(request: ListLegacyAgentStatusLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListLegacyAgentStatusLogsResponse> {
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

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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
      action: "ListLegacyAgentStatusLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLegacyAgentStatusLogsResponse>(await this.callApi(params, req, runtime), new ListLegacyAgentStatusLogsResponse({}));
  }

  async listLegacyAgentStatusLogs(request: ListLegacyAgentStatusLogsRequest): Promise<ListLegacyAgentStatusLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLegacyAgentStatusLogsWithOptions(request, runtime);
  }

  async listLegacyAppraiseLogsWithOptions(request: ListLegacyAppraiseLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListLegacyAppraiseLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLegacyAppraiseLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLegacyAppraiseLogsResponse>(await this.callApi(params, req, runtime), new ListLegacyAppraiseLogsResponse({}));
  }

  async listLegacyAppraiseLogs(request: ListLegacyAppraiseLogsRequest): Promise<ListLegacyAppraiseLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLegacyAppraiseLogsWithOptions(request, runtime);
  }

  async listLegacyQueueEventLogsWithOptions(request: ListLegacyQueueEventLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListLegacyQueueEventLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      action: "ListLegacyQueueEventLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLegacyQueueEventLogsResponse>(await this.callApi(params, req, runtime), new ListLegacyQueueEventLogsResponse({}));
  }

  async listLegacyQueueEventLogs(request: ListLegacyQueueEventLogsRequest): Promise<ListLegacyQueueEventLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLegacyQueueEventLogsWithOptions(request, runtime);
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

  async listMultiChannelRecordingsWithOptions(request: ListMultiChannelRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<ListMultiChannelRecordingsResponse> {
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
      action: "ListMultiChannelRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMultiChannelRecordingsResponse>(await this.callApi(params, req, runtime), new ListMultiChannelRecordingsResponse({}));
  }

  async listMultiChannelRecordings(request: ListMultiChannelRecordingsRequest): Promise<ListMultiChannelRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMultiChannelRecordingsWithOptions(request, runtime);
  }

  async listOutboundNumbersOfUserWithOptions(request: ListOutboundNumbersOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundNumbersOfUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOutboundNumbersOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOutboundNumbersOfUserResponse>(await this.callApi(params, req, runtime), new ListOutboundNumbersOfUserResponse({}));
  }

  async listOutboundNumbersOfUser(request: ListOutboundNumbersOfUserRequest): Promise<ListOutboundNumbersOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundNumbersOfUserWithOptions(request, runtime);
  }

  async listPersonalNumbersOfUserWithOptions(request: ListPersonalNumbersOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonalNumbersOfUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonalNumbersOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonalNumbersOfUserResponse>(await this.callApi(params, req, runtime), new ListPersonalNumbersOfUserResponse({}));
  }

  async listPersonalNumbersOfUser(request: ListPersonalNumbersOfUserRequest): Promise<ListPersonalNumbersOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonalNumbersOfUserWithOptions(request, runtime);
  }

  async listPhoneNumbersWithOptions(request: ListPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.active)) {
      query["Active"] = request.active;
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

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPhoneNumbersResponse>(await this.callApi(params, req, runtime), new ListPhoneNumbersResponse({}));
  }

  async listPhoneNumbers(request: ListPhoneNumbersRequest): Promise<ListPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneNumbersWithOptions(request, runtime);
  }

  async listPhoneNumbersOfSkillGroupWithOptions(request: ListPhoneNumbersOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneNumbersOfSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.active)) {
      query["Active"] = request.active;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPhoneNumbersOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPhoneNumbersOfSkillGroupResponse>(await this.callApi(params, req, runtime), new ListPhoneNumbersOfSkillGroupResponse({}));
  }

  async listPhoneNumbersOfSkillGroup(request: ListPhoneNumbersOfSkillGroupRequest): Promise<ListPhoneNumbersOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneNumbersOfSkillGroupWithOptions(request, runtime);
  }

  async listPrivilegesOfUserWithOptions(request: ListPrivilegesOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivilegesOfUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivilegesOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivilegesOfUserResponse>(await this.callApi(params, req, runtime), new ListPrivilegesOfUserResponse({}));
  }

  async listPrivilegesOfUser(request: ListPrivilegesOfUserRequest): Promise<ListPrivilegesOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivilegesOfUserWithOptions(request, runtime);
  }

  async listRamUsersWithOptions(request: ListRamUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListRamUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRamUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRamUsersResponse>(await this.callApi(params, req, runtime), new ListRamUsersResponse({}));
  }

  async listRamUsers(request: ListRamUsersRequest): Promise<ListRamUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRamUsersWithOptions(request, runtime);
  }

  async listRealtimeAgentStatesWithOptions(request: ListRealtimeAgentStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeAgentStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!Util.isUnset(request.callTypeList)) {
      query["CallTypeList"] = request.callTypeList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundScenario)) {
      query["OutboundScenario"] = request.outboundScenario;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.workModeList)) {
      query["WorkModeList"] = request.workModeList;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    if (!Util.isUnset(request.stateList)) {
      body["StateList"] = request.stateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRealtimeAgentStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRealtimeAgentStatesResponse>(await this.callApi(params, req, runtime), new ListRealtimeAgentStatesResponse({}));
  }

  async listRealtimeAgentStates(request: ListRealtimeAgentStatesRequest): Promise<ListRealtimeAgentStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeAgentStatesWithOptions(request, runtime);
  }

  async listRealtimeSkillGroupStatesWithOptions(request: ListRealtimeSkillGroupStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeSkillGroupStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRealtimeSkillGroupStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRealtimeSkillGroupStatesResponse>(await this.callApi(params, req, runtime), new ListRealtimeSkillGroupStatesResponse({}));
  }

  async listRealtimeSkillGroupStates(request: ListRealtimeSkillGroupStatesRequest): Promise<ListRealtimeSkillGroupStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeSkillGroupStatesWithOptions(request, runtime);
  }

  async listRecentCallDetailRecordsWithOptions(request: ListRecentCallDetailRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecentCallDetailRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRecentCallDetailRecords",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRecentCallDetailRecordsResponse>(await this.callApi(params, req, runtime), new ListRecentCallDetailRecordsResponse({}));
  }

  async listRecentCallDetailRecords(request: ListRecentCallDetailRecordsRequest): Promise<ListRecentCallDetailRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentCallDetailRecordsWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
    * @deprecated : ListSkillGroupStates is deprecated, please use CCC::2020-07-01::ListRealtimeSkillGroupStates instead.
    *
    * @param request ListSkillGroupStatesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSkillGroupStatesResponse
   */
  // Deprecated
  async listSkillGroupStatesWithOptions(request: ListSkillGroupStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupStatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroupStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupStatesResponse>(await this.callApi(params, req, runtime), new ListSkillGroupStatesResponse({}));
  }

  /**
    * @deprecated : ListSkillGroupStates is deprecated, please use CCC::2020-07-01::ListRealtimeSkillGroupStates instead.
    *
    * @param request ListSkillGroupStatesRequest
    * @return ListSkillGroupStatesResponse
   */
  // Deprecated
  async listSkillGroupStates(request: ListSkillGroupStatesRequest): Promise<ListSkillGroupStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupStatesWithOptions(request, runtime);
  }

  /**
    * @deprecated : ListSkillGroupSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalSkillGroupReport instead.
    *
    * @param request ListSkillGroupSummaryReportsSinceMidnightRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSkillGroupSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listSkillGroupSummaryReportsSinceMidnightWithOptions(request: ListSkillGroupSummaryReportsSinceMidnightRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupSummaryReportsSinceMidnightResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroupSummaryReportsSinceMidnight",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupSummaryReportsSinceMidnightResponse>(await this.callApi(params, req, runtime), new ListSkillGroupSummaryReportsSinceMidnightResponse({}));
  }

  /**
    * @deprecated : ListSkillGroupSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalSkillGroupReport instead.
    *
    * @param request ListSkillGroupSummaryReportsSinceMidnightRequest
    * @return ListSkillGroupSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listSkillGroupSummaryReportsSinceMidnight(request: ListSkillGroupSummaryReportsSinceMidnightRequest): Promise<ListSkillGroupSummaryReportsSinceMidnightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupSummaryReportsSinceMidnightWithOptions(request, runtime);
  }

  async listSkillGroupsWithOptions(request: ListSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupsResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupsResponse>(await this.callApi(params, req, runtime), new ListSkillGroupsResponse({}));
  }

  async listSkillGroups(request: ListSkillGroupsRequest): Promise<ListSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupsWithOptions(request, runtime);
  }

  async listSkillLevelsOfUserWithOptions(request: ListSkillLevelsOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillLevelsOfUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillLevelsOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillLevelsOfUserResponse>(await this.callApi(params, req, runtime), new ListSkillLevelsOfUserResponse({}));
  }

  async listSkillLevelsOfUser(request: ListSkillLevelsOfUserRequest): Promise<ListSkillLevelsOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillLevelsOfUserWithOptions(request, runtime);
  }

  async listUnassignedNumbersWithOptions(request: ListUnassignedNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListUnassignedNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUnassignedNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUnassignedNumbersResponse>(await this.callApi(params, req, runtime), new ListUnassignedNumbersResponse({}));
  }

  async listUnassignedNumbers(request: ListUnassignedNumbersRequest): Promise<ListUnassignedNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUnassignedNumbersWithOptions(request, runtime);
  }

  async listUserLevelsOfSkillGroupWithOptions(request: ListUserLevelsOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUserLevelsOfSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserLevelsOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserLevelsOfSkillGroupResponse>(await this.callApi(params, req, runtime), new ListUserLevelsOfSkillGroupResponse({}));
  }

  async listUserLevelsOfSkillGroup(request: ListUserLevelsOfSkillGroupRequest): Promise<ListUserLevelsOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listVoicemailsWithOptions(request: ListVoicemailsRequest, runtime: $Util.RuntimeOptions): Promise<ListVoicemailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVoicemails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoicemailsResponse>(await this.callApi(params, req, runtime), new ListVoicemailsResponse({}));
  }

  async listVoicemails(request: ListVoicemailsRequest): Promise<ListVoicemailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoicemailsWithOptions(request, runtime);
  }

  async makeCallWithOptions(request: MakeCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maskedCallee)) {
      query["MaskedCallee"] = request.maskedCallee;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MakeCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MakeCallResponse>(await this.callApi(params, req, runtime), new MakeCallResponse({}));
  }

  async makeCall(request: MakeCallRequest): Promise<MakeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  async modifyAudioFileWithOptions(request: ModifyAudioFileRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAudioFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!Util.isUnset(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossFileKey)) {
      query["OssFileKey"] = request.ossFileKey;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAudioFileResponse>(await this.callApi(params, req, runtime), new ModifyAudioFileResponse({}));
  }

  async modifyAudioFile(request: ModifyAudioFileRequest): Promise<ModifyAudioFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAudioFileWithOptions(request, runtime);
  }

  async modifyCustomCallTaggingWithOptions(request: ModifyCustomCallTaggingRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCustomCallTaggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new ModifyCustomCallTaggingResponse({}));
  }

  async modifyCustomCallTagging(request: ModifyCustomCallTaggingRequest): Promise<ModifyCustomCallTaggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCustomCallTaggingWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async modifyPhoneNumberWithOptions(request: ModifyPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhoneNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPhoneNumber",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPhoneNumberResponse>(await this.callApi(params, req, runtime), new ModifyPhoneNumberResponse({}));
  }

  async modifyPhoneNumber(request: ModifyPhoneNumberRequest): Promise<ModifyPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneNumberWithOptions(request, runtime);
  }

  async modifySkillGroupWithOptions(request: ModifySkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySkillGroupResponse>(await this.callApi(params, req, runtime), new ModifySkillGroupResponse({}));
  }

  async modifySkillGroup(request: ModifySkillGroupRequest): Promise<ModifySkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillGroupWithOptions(request, runtime);
  }

  async modifySkillLevelsOfUserWithOptions(request: ModifySkillLevelsOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillLevelsOfUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySkillLevelsOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySkillLevelsOfUserResponse>(await this.callApi(params, req, runtime), new ModifySkillLevelsOfUserResponse({}));
  }

  async modifySkillLevelsOfUser(request: ModifySkillLevelsOfUserRequest): Promise<ModifySkillLevelsOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillLevelsOfUserWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.avatarUrl)) {
      query["AvatarUrl"] = request.avatarUrl;
    }

    if (!Util.isUnset(request.displayId)) {
      query["DisplayId"] = request.displayId;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserResponse>(await this.callApi(params, req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async modifyUserLevelsOfSkillGroupWithOptions(request: ModifyUserLevelsOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserLevelsOfSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.userLevelList)) {
      query["UserLevelList"] = request.userLevelList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserLevelsOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserLevelsOfSkillGroupResponse>(await this.callApi(params, req, runtime), new ModifyUserLevelsOfSkillGroupResponse({}));
  }

  async modifyUserLevelsOfSkillGroup(request: ModifyUserLevelsOfSkillGroupRequest): Promise<ModifyUserLevelsOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  async monitorCallWithOptions(request: MonitorCallRequest, runtime: $Util.RuntimeOptions): Promise<MonitorCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.monitoredUserId)) {
      query["MonitoredUserId"] = request.monitoredUserId;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MonitorCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MonitorCallResponse>(await this.callApi(params, req, runtime), new MonitorCallResponse({}));
  }

  async monitorCall(request: MonitorCallRequest): Promise<MonitorCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.monitorCallWithOptions(request, runtime);
  }

  async muteCallWithOptions(request: MuteCallRequest, runtime: $Util.RuntimeOptions): Promise<MuteCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MuteCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MuteCallResponse>(await this.callApi(params, req, runtime), new MuteCallResponse({}));
  }

  async muteCall(request: MuteCallRequest): Promise<MuteCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.muteCallWithOptions(request, runtime);
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

  async pickOutboundNumbersWithOptions(request: PickOutboundNumbersRequest, runtime: $Util.RuntimeOptions): Promise<PickOutboundNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PickOutboundNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PickOutboundNumbersResponse>(await this.callApi(params, req, runtime), new PickOutboundNumbersResponse({}));
  }

  async pickOutboundNumbers(request: PickOutboundNumbersRequest): Promise<PickOutboundNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pickOutboundNumbersWithOptions(request, runtime);
  }

  async pollUserStatusWithOptions(request: PollUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<PollUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

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
      action: "PollUserStatus",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PollUserStatusResponse>(await this.callApi(params, req, runtime), new PollUserStatusResponse({}));
  }

  async pollUserStatus(request: PollUserStatusRequest): Promise<PollUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollUserStatusWithOptions(request, runtime);
  }

  async processAliMeCallbackOfStagingWithOptions(request: ProcessAliMeCallbackOfStagingRequest, runtime: $Util.RuntimeOptions): Promise<ProcessAliMeCallbackOfStagingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProcessAliMeCallbackOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProcessAliMeCallbackOfStagingResponse>(await this.callApi(params, req, runtime), new ProcessAliMeCallbackOfStagingResponse({}));
  }

  async processAliMeCallbackOfStaging(request: ProcessAliMeCallbackOfStagingRequest): Promise<ProcessAliMeCallbackOfStagingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processAliMeCallbackOfStagingWithOptions(request, runtime);
  }

  async publishContactFlowWithOptions(request: PublishContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<PublishContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishContactFlowResponse>(await this.callApi(params, req, runtime), new PublishContactFlowResponse({}));
  }

  async publishContactFlow(request: PublishContactFlowRequest): Promise<PublishContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishContactFlowWithOptions(request, runtime);
  }

  async readyForServiceWithOptions(request: ReadyForServiceRequest, runtime: $Util.RuntimeOptions): Promise<ReadyForServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundScenario)) {
      query["OutboundScenario"] = request.outboundScenario;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReadyForService",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReadyForServiceResponse>(await this.callApi(params, req, runtime), new ReadyForServiceResponse({}));
  }

  async readyForService(request: ReadyForServiceRequest): Promise<ReadyForServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.readyForServiceWithOptions(request, runtime);
  }

  async redialCallWithOptions(request: RedialCallRequest, runtime: $Util.RuntimeOptions): Promise<RedialCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RedialCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RedialCallResponse>(await this.callApi(params, req, runtime), new RedialCallResponse({}));
  }

  async redialCall(request: RedialCallRequest): Promise<RedialCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.redialCallWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDevice",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDeviceResponse>(await this.callApi(params, req, runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async registerDevicesWithOptions(request: RegisterDevicesRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.userIdListJson)) {
      query["UserIdListJson"] = request.userIdListJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDevices",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDevicesResponse>(await this.callApi(params, req, runtime), new RegisterDevicesResponse({}));
  }

  async registerDevices(request: RegisterDevicesRequest): Promise<RegisterDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDevicesWithOptions(request, runtime);
  }

  async releaseCallWithOptions(request: ReleaseCallRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseCallResponse>(await this.callApi(params, req, runtime), new ReleaseCallResponse({}));
  }

  async releaseCall(request: ReleaseCallRequest): Promise<ReleaseCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCallWithOptions(request, runtime);
  }

  async removeDoNotCallNumbersWithOptions(request: RemoveDoNotCallNumbersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDoNotCallNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new RemoveDoNotCallNumbersResponse({}));
  }

  async removeDoNotCallNumbers(request: RemoveDoNotCallNumbersRequest): Promise<RemoveDoNotCallNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDoNotCallNumbersWithOptions(request, runtime);
  }

  async removePersonalNumbersFromUserWithOptions(request: RemovePersonalNumbersFromUserRequest, runtime: $Util.RuntimeOptions): Promise<RemovePersonalNumbersFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePersonalNumbersFromUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePersonalNumbersFromUserResponse>(await this.callApi(params, req, runtime), new RemovePersonalNumbersFromUserResponse({}));
  }

  async removePersonalNumbersFromUser(request: RemovePersonalNumbersFromUserRequest): Promise<RemovePersonalNumbersFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePersonalNumbersFromUserWithOptions(request, runtime);
  }

  async removePhoneNumberFromSkillGroupsWithOptions(request: RemovePhoneNumberFromSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumberFromSkillGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePhoneNumberFromSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePhoneNumberFromSkillGroupsResponse>(await this.callApi(params, req, runtime), new RemovePhoneNumberFromSkillGroupsResponse({}));
  }

  async removePhoneNumberFromSkillGroups(request: RemovePhoneNumberFromSkillGroupsRequest): Promise<RemovePhoneNumberFromSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumberFromSkillGroupsWithOptions(request, runtime);
  }

  async removePhoneNumbersWithOptions(request: RemovePhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePhoneNumbersResponse>(await this.callApi(params, req, runtime), new RemovePhoneNumbersResponse({}));
  }

  async removePhoneNumbers(request: RemovePhoneNumbersRequest): Promise<RemovePhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumbersWithOptions(request, runtime);
  }

  async removePhoneNumbersFromSkillGroupWithOptions(request: RemovePhoneNumbersFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumbersFromSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePhoneNumbersFromSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePhoneNumbersFromSkillGroupResponse>(await this.callApi(params, req, runtime), new RemovePhoneNumbersFromSkillGroupResponse({}));
  }

  async removePhoneNumbersFromSkillGroup(request: RemovePhoneNumbersFromSkillGroupRequest): Promise<RemovePhoneNumbersFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumbersFromSkillGroupWithOptions(request, runtime);
  }

  async removeSkillGroupsFromUserWithOptions(request: RemoveSkillGroupsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSkillGroupsFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSkillGroupsFromUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSkillGroupsFromUserResponse>(await this.callApi(params, req, runtime), new RemoveSkillGroupsFromUserResponse({}));
  }

  async removeSkillGroupsFromUser(request: RemoveSkillGroupsFromUserRequest): Promise<RemoveSkillGroupsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSkillGroupsFromUserWithOptions(request, runtime);
  }

  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.notificationEmail)) {
      query["NotificationEmail"] = request.notificationEmail;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUsersResponse>(await this.callApi(params, req, runtime), new RemoveUsersResponse({}));
  }

  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  async removeUsersFromSkillGroupWithOptions(request: RemoveUsersFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromSkillGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUsersFromSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUsersFromSkillGroupResponse>(await this.callApi(params, req, runtime), new RemoveUsersFromSkillGroupResponse({}));
  }

  async removeUsersFromSkillGroup(request: RemoveUsersFromSkillGroupRequest): Promise<RemoveUsersFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromSkillGroupWithOptions(request, runtime);
  }

  async resetAgentStateWithOptions(request: ResetAgentStateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAgentStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

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
      action: "ResetAgentState",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAgentStateResponse>(await this.callApi(params, req, runtime), new ResetAgentStateResponse({}));
  }

  async resetAgentState(request: ResetAgentStateRequest): Promise<ResetAgentStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAgentStateWithOptions(request, runtime);
  }

  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetUserPassword",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetUserPasswordResponse({}));
  }

  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  async restoreArchivedRecordingsWithOptions(request: RestoreArchivedRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<RestoreArchivedRecordingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreArchivedRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreArchivedRecordingsResponse>(await this.callApi(params, req, runtime), new RestoreArchivedRecordingsResponse({}));
  }

  async restoreArchivedRecordings(request: RestoreArchivedRecordingsRequest): Promise<RestoreArchivedRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreArchivedRecordingsWithOptions(request, runtime);
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

  async retrieveCallWithOptions(request: RetrieveCallRequest, runtime: $Util.RuntimeOptions): Promise<RetrieveCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetrieveCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetrieveCallResponse>(await this.callApi(params, req, runtime), new RetrieveCallResponse({}));
  }

  async retrieveCall(request: RetrieveCallRequest): Promise<RetrieveCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retrieveCallWithOptions(request, runtime);
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

  async saveWebRTCStatsWithOptions(request: SaveWebRTCStatsRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebRTCStatsResponse> {
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
      action: "SaveWebRTCStats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveWebRTCStatsResponse>(await this.callApi(params, req, runtime), new SaveWebRTCStatsResponse({}));
  }

  async saveWebRTCStats(request: SaveWebRTCStatsRequest): Promise<SaveWebRTCStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebRTCStatsWithOptions(request, runtime);
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

  async sendDtmfSignalingWithOptions(request: SendDtmfSignalingRequest, runtime: $Util.RuntimeOptions): Promise<SendDtmfSignalingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.dtmf)) {
      query["Dtmf"] = request.dtmf;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendDtmfSignaling",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendDtmfSignalingResponse>(await this.callApi(params, req, runtime), new SendDtmfSignalingResponse({}));
  }

  async sendDtmfSignaling(request: SendDtmfSignalingRequest): Promise<SendDtmfSignalingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendDtmfSignalingWithOptions(request, runtime);
  }

  async signInGroupWithOptions(request: SignInGroupRequest, runtime: $Util.RuntimeOptions): Promise<SignInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additivity)) {
      query["Additivity"] = request.additivity;
    }

    if (!Util.isUnset(request.chatDeviceId)) {
      query["ChatDeviceId"] = request.chatDeviceId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.signedSkillGroupIdList)) {
      query["SignedSkillGroupIdList"] = request.signedSkillGroupIdList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SignInGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignInGroupResponse>(await this.callApi(params, req, runtime), new SignInGroupResponse({}));
  }

  async signInGroup(request: SignInGroupRequest): Promise<SignInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signInGroupWithOptions(request, runtime);
  }

  async signOutGroupWithOptions(request: SignOutGroupRequest, runtime: $Util.RuntimeOptions): Promise<SignOutGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

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
      action: "SignOutGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignOutGroupResponse>(await this.callApi(params, req, runtime), new SignOutGroupResponse({}));
  }

  async signOutGroup(request: SignOutGroupRequest): Promise<SignOutGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signOutGroupWithOptions(request, runtime);
  }

  async startBack2BackCallWithOptions(request: StartBack2BackCallRequest, runtime: $Util.RuntimeOptions): Promise<StartBack2BackCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.additionalBroker)) {
      query["AdditionalBroker"] = request.additionalBroker;
    }

    if (!Util.isUnset(request.broker)) {
      query["Broker"] = request.broker;
    }

    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartBack2BackCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartBack2BackCallResponse>(await this.callApi(params, req, runtime), new StartBack2BackCallResponse({}));
  }

  async startBack2BackCall(request: StartBack2BackCallRequest): Promise<StartBack2BackCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBack2BackCallWithOptions(request, runtime);
  }

  async startConferenceWithOptions(request: StartConferenceRequest, runtime: $Util.RuntimeOptions): Promise<StartConferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.participantListJson)) {
      query["ParticipantListJson"] = request.participantListJson;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartConferenceResponse>(await this.callApi(params, req, runtime), new StartConferenceResponse({}));
  }

  async startConference(request: StartConferenceRequest): Promise<StartConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConferenceWithOptions(request, runtime);
  }

  async startEditContactFlowWithOptions(request: StartEditContactFlowRequest, runtime: $Util.RuntimeOptions): Promise<StartEditContactFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartEditContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartEditContactFlowResponse>(await this.callApi(params, req, runtime), new StartEditContactFlowResponse({}));
  }

  async startEditContactFlow(request: StartEditContactFlowRequest): Promise<StartEditContactFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEditContactFlowWithOptions(request, runtime);
  }

  async startPredictiveCallWithOptions(request: StartPredictiveCallRequest, runtime: $Util.RuntimeOptions): Promise<StartPredictiveCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maskedCallee)) {
      query["MaskedCallee"] = request.maskedCallee;
    }

    if (!Util.isUnset(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartPredictiveCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartPredictiveCallResponse>(await this.callApi(params, req, runtime), new StartPredictiveCallResponse({}));
  }

  async startPredictiveCall(request: StartPredictiveCallRequest): Promise<StartPredictiveCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPredictiveCallWithOptions(request, runtime);
  }

  async startPrivacyCallWithOptions(request: StartPrivacyCallRequest, runtime: $Util.RuntimeOptions): Promise<StartPrivacyCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartPrivacyCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartPrivacyCallResponse>(await this.callApi(params, req, runtime), new StartPrivacyCallResponse({}));
  }

  async startPrivacyCall(request: StartPrivacyCallRequest): Promise<StartPrivacyCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPrivacyCallWithOptions(request, runtime);
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

  async switchToConferenceWithOptions(request: SwitchToConferenceRequest, runtime: $Util.RuntimeOptions): Promise<SwitchToConferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchToConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchToConferenceResponse>(await this.callApi(params, req, runtime), new SwitchToConferenceResponse({}));
  }

  async switchToConference(request: SwitchToConferenceRequest): Promise<SwitchToConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchToConferenceWithOptions(request, runtime);
  }

  async takeBreakWithOptions(request: TakeBreakRequest, runtime: $Util.RuntimeOptions): Promise<TakeBreakResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

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
      action: "TakeBreak",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TakeBreakResponse>(await this.callApi(params, req, runtime), new TakeBreakResponse({}));
  }

  async takeBreak(request: TakeBreakRequest): Promise<TakeBreakResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.takeBreakWithOptions(request, runtime);
  }

  async unmuteCallWithOptions(request: UnmuteCallRequest, runtime: $Util.RuntimeOptions): Promise<UnmuteCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnmuteCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnmuteCallResponse>(await this.callApi(params, req, runtime), new UnmuteCallResponse({}));
  }

  async unmuteCall(request: UnmuteCallRequest): Promise<UnmuteCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unmuteCallWithOptions(request, runtime);
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

  async updateCampaignWithOptions(request: UpdateCampaignRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCampaignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.strategyParameters)) {
      query["StrategyParameters"] = request.strategyParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCampaignResponse>(await this.callApi(params, req, runtime), new UpdateCampaignResponse({}));
  }

  async updateCampaign(request: UpdateCampaignRequest): Promise<UpdateCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCampaignWithOptions(request, runtime);
  }

  async updateConfigItemsWithOptions(request: UpdateConfigItemsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configItems)) {
      query["ConfigItems"] = request.configItems;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigItems",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigItemsResponse>(await this.callApi(params, req, runtime), new UpdateConfigItemsResponse({}));
  }

  async updateConfigItems(request: UpdateConfigItemsRequest): Promise<UpdateConfigItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigItemsWithOptions(request, runtime);
  }

}
