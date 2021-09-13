// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddSkillGroupsToUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  skillLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      skillLevelList: 'SkillLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      skillLevelList: 'string',
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
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupsToUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSkillGroupsToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSkillGroupsToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsRequest extends $tea.Model {
  instanceId?: string;
  callId?: string;
  generalInfo?: string;
  senderReport?: string;
  receiverReport?: string;
  googAddress?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      generalInfo: 'GeneralInfo',
      senderReport: 'SenderReport',
      receiverReport: 'ReceiverReport',
      googAddress: 'GoogAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      generalInfo: 'string',
      senderReport: 'string',
      receiverReport: 'string',
      googAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  timeStamp?: number;
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      timeStamp: 'TimeStamp',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      timeStamp: 'number',
      rowCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRTCStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWebRTCStatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWebRTCStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingRequest extends $tea.Model {
  instanceId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetMonoRecordingResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetMonoRecordingResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMonoRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMonoRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  instanceId?: string;
  searchPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchPattern: 'SearchPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListUsersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ListUsersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsRequest extends $tea.Model {
  startTime?: number;
  endTime?: number;
  agentId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      agentId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListAgentStateLogsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListAgentStateLogsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentStateLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentStateLogsResponseBody,
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
  headers: { [key: string]: string };
  body: RemovePhoneNumberFromSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePhoneNumberFromSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersRequest extends $tea.Model {
  instanceId?: string;
  searchPattern?: string;
  usage?: string;
  active?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchPattern: 'SearchPattern',
      usage: 'Usage',
      active: 'Active',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchPattern: 'string',
      usage: 'string',
      active: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  data?: ListPhoneNumbersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      data: ListPhoneNumbersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNumbersToSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      numberList: 'string',
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
  headers: { [key: string]: string };
  body: AddNumbersToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddNumbersToSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ResetAgentStateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ResetAgentStateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAgentStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAgentStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ChangeWorkModeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ChangeWorkModeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeWorkModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeWorkModeResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: GetTurnCredentialsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: GetTurnCredentialsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTurnCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTurnCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersRequest extends $tea.Model {
  instanceId?: string;
  contactFlowId?: string;
  usage?: string;
  numberList?: string;
  numberGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
      usage: 'Usage',
      numberList: 'NumberList',
      numberGroupId: 'NumberGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactFlowId: 'string',
      usage: 'string',
      numberList: 'string',
      numberGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPhoneNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddPhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoRequest extends $tea.Model {
  instanceId?: string;
  callId?: string;
  jobId?: string;
  contentType?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      jobId: 'JobId',
      contentType: 'ContentType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      jobId: 'string',
      contentType: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  timeStamp?: number;
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      timeStamp: 'TimeStamp',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      timeStamp: 'number',
      rowCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveWebRtcInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveWebRtcInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveWebRtcInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportRequest extends $tea.Model {
  skillGroupId?: string;
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListIntervalSkillGroupReportResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListIntervalSkillGroupReportResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIntervalSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIntervalSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  monitoredUserId?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      monitoredUserId: 'MonitoredUserId',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      monitoredUserId: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: MonitorCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: MonitorCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MonitorCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MonitorCallResponseBody,
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
  headers: { [key: string]: string };
  body: RemoveUsersFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUsersFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      force: 'boolean',
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
  headers: { [key: string]: string };
  body: DeleteSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  transferor?: string;
  transferee?: string;
  timeoutSeconds?: number;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      transferor: 'Transferor',
      transferee: 'Transferee',
      timeoutSeconds: 'TimeoutSeconds',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      transferor: 'string',
      transferee: 'string',
      timeoutSeconds: 'number',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: BlindTransferResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: BlindTransferResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BlindTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BlindTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListSkillLevelsOfUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListSkillLevelsOfUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillLevelsOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillLevelsOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersRequest extends $tea.Model {
  searchPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      searchPattern: 'SearchPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListUnassignedNumbersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListUnassignedNumbersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUnassignedNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUnassignedNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportRequest extends $tea.Model {
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetInstanceTrendingReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetInstanceTrendingReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceTrendingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceTrendingReportResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListInstancesOfUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ListInstancesOfUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: LaunchSurveyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: LaunchSurveyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LaunchSurveyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LaunchSurveyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  contactId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      contactId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListIvrTrackingDetailsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListIvrTrackingDetailsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIvrTrackingDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIvrTrackingDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  searchPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchPattern: 'SearchPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListBriefSkillGroupsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListBriefSkillGroupsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBriefSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBriefSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: UnmuteCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: UnmuteCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnmuteCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnmuteCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillLevelsOfUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  skillLevelList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      skillLevelList: 'SkillLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      skillLevelList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillLevelsOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillLevelsOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySkillLevelsOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySkillLevelsOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersRequest extends $tea.Model {
  instanceId?: string;
  roleId?: string;
  skillLevelList?: string;
  ramIdList?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      ramIdList: 'RamIdList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      roleId: 'string',
      skillLevelList: 'string',
      ramIdList: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponseBody extends $tea.Model {
  httpStatusCode?: number;
  data?: string;
  requestId?: string;
  sync?: string;
  code?: string;
  workflowId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
      sync: 'Sync',
      code: 'Code',
      workflowId: 'WorkflowId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      data: 'string',
      requestId: 'string',
      sync: 'string',
      code: 'string',
      workflowId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssignUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssignUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  isMember?: boolean;
  pageNumber?: number;
  pageSize?: number;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListUserLevelsOfSkillGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListUserLevelsOfSkillGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserLevelsOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserLevelsOfSkillGroupResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListRolesResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigItemsRequest extends $tea.Model {
  instanceId?: string;
  objectId?: string;
  objectType?: string;
  configItems?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      configItems: 'ConfigItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      objectId: 'string',
      objectType: 'string',
      configItems: 'string',
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
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigItemsResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetCallDetailRecordResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetCallDetailRecordResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallDetailRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallDetailRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhoneNumberRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  usage?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      usage: 'string',
      contactFlowId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  coachedUserId?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      coachedUserId: 'CoachedUserId',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      coachedUserId: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: CoachCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: CoachCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CoachCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CoachCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  instanceId?: string;
  loginName?: string;
  displayName?: string;
  mobile?: string;
  email?: string;
  workMode?: string;
  roleId?: string;
  skillLevelList?: string;
  resetPassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      displayName: 'DisplayName',
      mobile: 'Mobile',
      email: 'Email',
      workMode: 'WorkMode',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      resetPassword: 'ResetPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      loginName: 'string',
      displayName: 'string',
      mobile: 'string',
      email: 'string',
      workMode: 'string',
      roleId: 'string',
      skillLevelList: 'string',
      resetPassword: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: CreateUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: CreateUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListPrivilegesOfUserResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListPrivilegesOfUserResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivilegesOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPrivilegesOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPrivilegesOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      numberList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonalNumbersToUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddPersonalNumbersToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPersonalNumbersToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  agentIdList?: string;
  startTime?: number;
  stopTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      agentIdList: 'AgentIdList',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      agentIdList: 'string',
      startTime: 'number',
      stopTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListHistoricalAgentReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListHistoricalAgentReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHistoricalAgentReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHistoricalAgentReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  interceptedUserId?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      interceptedUserId: 'InterceptedUserId',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      interceptedUserId: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: InterceptCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: InterceptCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InterceptCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InterceptCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListContactFlowsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListContactFlowsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContactFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContactFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  isMember?: boolean;
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isMember: 'IsMember',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      isMember: 'boolean',
      searchPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListPersonalNumbersOfUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListPersonalNumbersOfUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonalNumbersOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonalNumbersOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallRequest extends $tea.Model {
  instanceId?: string;
  caller?: string;
  callee?: string;
  timeoutSeconds?: number;
  contactFlowId?: string;
  tags?: string;
  contactFlowVariables?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      caller: 'Caller',
      callee: 'Callee',
      timeoutSeconds: 'TimeoutSeconds',
      contactFlowId: 'ContactFlowId',
      tags: 'Tags',
      contactFlowVariables: 'ContactFlowVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      caller: 'string',
      callee: 'string',
      timeoutSeconds: 'number',
      contactFlowId: 'string',
      tags: 'string',
      contactFlowVariables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: StartPredictiveCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: StartPredictiveCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartPredictiveCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartPredictiveCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportRequest extends $tea.Model {
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListIntervalInstanceReportResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListIntervalInstanceReportResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIntervalInstanceReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIntervalInstanceReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  name?: string;
  description?: string;
  domainName?: string;
  numberList?: string;
  adminRamIdList?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      domainName: 'DomainName',
      numberList: 'NumberList',
      adminRamIdList: 'AdminRamIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      domainName: 'string',
      numberList: 'string',
      adminRamIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupsFromUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupsFromUserResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupsFromUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSkillGroupsFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSkillGroupsFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesRequest extends $tea.Model {
  skillGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  agentIdList?: string;
  stateList?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      agentIdList: 'AgentIdList',
      stateList: 'StateList',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      agentIdList: 'string',
      stateList: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListRealtimeAgentStatesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListRealtimeAgentStatesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRealtimeAgentStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRealtimeAgentStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  contactFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      contactFlowId: 'ContactFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      contactFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: LaunchAuthenticationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: LaunchAuthenticationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LaunchAuthenticationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LaunchAuthenticationResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ListInstancesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportRequest extends $tea.Model {
  instanceId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetHistoricalInstanceReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetHistoricalInstanceReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHistoricalInstanceReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHistoricalInstanceReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $tea.Model {
  instanceId?: string;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallRequest extends $tea.Model {
  instanceId?: string;
  caller?: string;
  callee?: string;
  timeoutSeconds?: number;
  broker?: string;
  additionalBroker?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      caller: 'Caller',
      callee: 'Callee',
      timeoutSeconds: 'TimeoutSeconds',
      broker: 'Broker',
      additionalBroker: 'AdditionalBroker',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      caller: 'string',
      callee: 'string',
      timeoutSeconds: 'number',
      broker: 'string',
      additionalBroker: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: StartBack2BackCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: StartBack2BackCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartBack2BackCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartBack2BackCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  extension?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      extension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: GetUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: GetUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResponseBody,
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
  headers: { [key: string]: string };
  body: RemovePhoneNumbersFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePhoneNumbersFromSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: CompleteAttendedTransferResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: CompleteAttendedTransferResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompleteAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompleteAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      password: 'string',
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
  headers: { [key: string]: string };
  body: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetUserPasswordResponseBody,
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
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnServerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTurnServerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTurnServerListResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetNumberLocationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetNumberLocationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNumberLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNumberLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersRequest extends $tea.Model {
  instanceId?: string;
  searchPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchPattern: 'SearchPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListRamUsersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ListRamUsersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRamUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRamUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: MuteCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: MuteCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MuteCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MuteCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: AnswerCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: AnswerCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AnswerCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AnswerCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportRequest extends $tea.Model {
  agentId?: string;
  startTime?: number;
  endTime?: number;
  instanceId?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      startTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListIntervalAgentReportResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIntervalAgentReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIntervalAgentReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  contactType?: string;
  contactDisposition?: string;
  contactId?: string;
  agentId?: string;
  skillGroupId?: string;
  sortOrder?: string;
  instanceId?: string;
  orderByField?: string;
  criteria?: string;
  callingNumber?: string;
  calledNumber?: string;
  satisfactionList?: string;
  satisfactionSurveyChannel?: string;
  satisfactionDescriptionList?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      contactType: 'ContactType',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      agentId: 'AgentId',
      skillGroupId: 'SkillGroupId',
      sortOrder: 'SortOrder',
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      criteria: 'Criteria',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      satisfactionList: 'SatisfactionList',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionDescriptionList: 'SatisfactionDescriptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      contactType: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      agentId: 'string',
      skillGroupId: 'string',
      sortOrder: 'string',
      instanceId: 'string',
      orderByField: 'string',
      criteria: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      satisfactionList: 'string',
      satisfactionSurveyChannel: 'string',
      satisfactionDescriptionList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListCallDetailRecordsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListCallDetailRecordsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCallDetailRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCallDetailRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersRequest extends $tea.Model {
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

export class RemovePhoneNumbersResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  failureList?: string[];
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      failureList: 'FailureList',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      failureList: { 'type': 'array', 'itemType': 'string' },
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePhoneNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemovePhoneNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePhoneNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: CancelAttendedTransferResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: CancelAttendedTransferResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: TakeBreakResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: TakeBreakResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TakeBreakResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TakeBreakResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  startTime?: number;
  endTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
      startTime: 'number',
      endTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListHistoricalSkillGroupReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListHistoricalSkillGroupReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHistoricalSkillGroupReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHistoricalSkillGroupReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  dtmf?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
      dtmf: 'Dtmf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
      dtmf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: SendDtmfSignalingResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: SendDtmfSignalingResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendDtmfSignalingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendDtmfSignalingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  instanceId?: string;
  criteria?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      criteria: 'Criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      criteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListRecentCallDetailRecordsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListRecentCallDetailRecordsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecentCallDetailRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecentCallDetailRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  transferor?: string;
  transferee?: string;
  timeoutSeconds?: number;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      transferor: 'Transferor',
      transferee: 'Transferee',
      timeoutSeconds: 'TimeoutSeconds',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      transferor: 'string',
      transferee: 'string',
      timeoutSeconds: 'number',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: InitiateAttendedTransferResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: InitiateAttendedTransferResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitiateAttendedTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitiateAttendedTransferResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  caller?: string;
  callee?: string;
  timeoutSeconds?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      caller: 'Caller',
      callee: 'Callee',
      timeoutSeconds: 'TimeoutSeconds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      caller: 'string',
      callee: 'string',
      timeoutSeconds: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: MakeCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: MakeCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeCallResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: GetInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: GetInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceResponseBody,
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
  headers: { [key: string]: string };
  body: AddUsersToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUsersToSkillGroupResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListConfigItemsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: { 'type': 'array', 'itemType': ListConfigItemsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  signedSkillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      signedSkillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: SignInGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: SignInGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SignInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SignInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesRequest extends $tea.Model {
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

export class GetRealtimeInstanceStatesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetRealtimeInstanceStatesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetRealtimeInstanceStatesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRealtimeInstanceStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRealtimeInstanceStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  displayName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      displayName: 'DisplayName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      displayName: 'string',
      description: 'string',
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
  headers: { [key: string]: string };
  body: ModifySkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  mobile?: string;
  workMode?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      mobile: 'Mobile',
      workMode: 'WorkMode',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      mobile: 'string',
      workMode: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserResponseBody,
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
  headers: { [key: string]: string };
  body: AddPhoneNumberToSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPhoneNumberToSkillGroupsResponseBody,
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
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ListDevicesResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: { 'type': 'array', 'itemType': ListDevicesResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: RetrieveCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: RetrieveCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetrieveCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetrieveCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  searchPattern?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      searchPattern: 'SearchPattern',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      searchPattern: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListSkillGroupsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListSkillGroupsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  music?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
      music: 'Music',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
      music: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: HoldCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: HoldCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HoldCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HoldCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      password: 'string',
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
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePersonalNumbersFromUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      numberList: 'string',
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
  headers: { [key: string]: string };
  body: RemovePersonalNumbersFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePersonalNumbersFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  instanceId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  params?: string[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListOutboundNumbersOfUserResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListOutboundNumbersOfUserResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOutboundNumbersOfUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOutboundNumbersOfUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: PollUserStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: PollUserStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PollUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PollUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  outboundScenario?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      outboundScenario: 'OutboundScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      outboundScenario: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ReadyForServiceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ReadyForServiceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReadyForServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReadyForServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingRequest extends $tea.Model {
  instanceId?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetMultiChannelRecordingResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetMultiChannelRecordingResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMultiChannelRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMultiChannelRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  bargedUserId?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      bargedUserId: 'BargedUserId',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      bargedUserId: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: BargeInCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: BargeInCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BargeInCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BargeInCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  isMember?: boolean;
  searchPattern?: string;
  active?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isMember: 'IsMember',
      searchPattern: 'SearchPattern',
      active: 'Active',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      isMember: 'boolean',
      searchPattern: 'string',
      active: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListPhoneNumbersOfSkillGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListPhoneNumbersOfSkillGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhoneNumbersOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhoneNumbersOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: SignOutGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: SignOutGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SignOutGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SignOutGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2Request extends $tea.Model {
  instanceId?: string;
  callId?: string;
  generalInfo?: string;
  senderReport?: string;
  receiverReport?: string;
  googAddress?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      generalInfo: 'GeneralInfo',
      senderReport: 'SenderReport',
      receiverReport: 'ReceiverReport',
      googAddress: 'GoogAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      generalInfo: 'string',
      senderReport: 'string',
      receiverReport: 'string',
      googAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2ResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  timeStamp?: number;
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      timeStamp: 'TimeStamp',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      timeStamp: 'number',
      rowCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveRTCStatsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveRTCStatsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveRTCStatsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportRequest extends $tea.Model {
  instanceId?: string;
  callingNumber?: string;
  stopTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callingNumber: 'CallingNumber',
      stopTime: 'StopTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callingNumber: 'string',
      stopTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: GetHistoricalCallerReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: GetHistoricalCallerReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalCallerReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHistoricalCallerReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHistoricalCallerReportResponseBody,
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
  httpStatusCode?: number;
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserLevelsOfSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserLevelsOfSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserLevelsOfSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogRequest extends $tea.Model {
  instanceId?: string;
  callId?: string;
  jobId?: string;
  appName?: string;
  dataType?: number;
  content?: string;
  status?: string;
  uniqueRequestId?: string;
  methodName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      callId: 'CallId',
      jobId: 'JobId',
      appName: 'AppName',
      dataType: 'DataType',
      content: 'Content',
      status: 'Status',
      uniqueRequestId: 'UniqueRequestId',
      methodName: 'MethodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      callId: 'string',
      jobId: 'string',
      appName: 'string',
      dataType: 'number',
      content: 'string',
      status: 'string',
      uniqueRequestId: 'string',
      methodName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTerminalLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveTerminalLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveTerminalLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesRequest extends $tea.Model {
  skillGroupIdList?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupIdList: 'SkillGroupIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupIdList: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: ListRealtimeSkillGroupStatesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: ListRealtimeSkillGroupStatesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRealtimeSkillGroupStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRealtimeSkillGroupStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  displayName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      displayName: 'DisplayName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      displayName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: CreateSkillGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: CreateSkillGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersRequest extends $tea.Model {
  instanceId?: string;
  calledNumber?: string;
  count?: number;
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      calledNumber: 'CalledNumber',
      count: 'Count',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      calledNumber: 'string',
      count: 'number',
      skillGroupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  data?: PickOutboundNumbersResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': PickOutboundNumbersResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PickOutboundNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PickOutboundNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  deviceId?: string;
  jobId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      deviceId: 'string',
      jobId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: ReleaseCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: ReleaseCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsRequest extends $tea.Model {
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

export class GetLoginDetailsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  params?: string[];
  data?: GetLoginDetailsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      params: 'Params',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      data: GetLoginDetailsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoginDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoginDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonoRecordingResponseBodyData extends $tea.Model {
  fileUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataListPersonalOutboundNumberList extends $tea.Model {
  number?: string;
  active?: boolean;
  city?: string;
  usage?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      active: 'Active',
      city: 'City',
      usage: 'Usage',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      active: 'boolean',
      city: 'string',
      usage: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataListSkillLevelList extends $tea.Model {
  skillLevel?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataList extends $tea.Model {
  displayName?: string;
  loginName?: string;
  email?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  roleName?: string;
  roleId?: string;
  primaryAccount?: boolean;
  personalOutboundNumberList?: ListUsersResponseBodyDataListPersonalOutboundNumberList[];
  skillLevelList?: ListUsersResponseBodyDataListSkillLevelList[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loginName: 'LoginName',
      email: 'Email',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
      roleName: 'RoleName',
      roleId: 'RoleId',
      primaryAccount: 'PrimaryAccount',
      personalOutboundNumberList: 'PersonalOutboundNumberList',
      skillLevelList: 'SkillLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loginName: 'string',
      email: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
      roleName: 'string',
      roleId: 'string',
      primaryAccount: 'boolean',
      personalOutboundNumberList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListPersonalOutboundNumberList },
      skillLevelList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListSkillLevelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListUsersResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListUsersResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBodyData extends $tea.Model {
  startTime?: number;
  stateCode?: string;
  duration?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      stateCode: 'StateCode',
      duration: 'Duration',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      stateCode: 'string',
      duration: 'number',
      state: 'string',
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
  createTime?: string;
  userId?: string;
  tags?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  contactFlowName?: string;
  provider?: string;
  number?: string;
  contactFlowId?: string;
  province?: string;
  skillGroups?: ListPhoneNumbersResponseBodyDataListSkillGroups[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      userId: 'UserId',
      tags: 'Tags',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      contactFlowName: 'ContactFlowName',
      provider: 'Provider',
      number: 'Number',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
      skillGroups: 'SkillGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      userId: 'string',
      tags: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      contactFlowName: 'string',
      provider: 'string',
      number: 'string',
      contactFlowId: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataListSkillGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListPhoneNumbersResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAgentStateResponseBodyData extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeWorkModeResponseBodyData extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTurnCredentialsResponseBodyData extends $tea.Model {
  userName?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataInbound extends $tea.Model {
  averageRingTime?: number;
  callsOverflow?: number;
  callsAbandonedInRing?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  totalAbandonedInRingTime?: number;
  maxWorkTime?: number;
  callsAttendedTransferOut?: number;
  averageWaitTime?: number;
  totalHoldTime?: number;
  maxAbandonTime?: number;
  averageWorkTime?: number;
  callsQueued?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  averageAbandonedInRingTime?: number;
  averageAbandonTime?: number;
  callsRinged?: number;
  callsBlindTransferOut?: number;
  callsAttendedTransferIn?: number;
  callsAbandoned?: number;
  maxAbandonedInQueueTime?: number;
  totalWaitTime?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  abandonRate?: number;
  totalTalkTime?: number;
  totalAbandonTime?: number;
  callsOffered?: number;
  maxAbandonedInRingTime?: number;
  maxWaitTime?: number;
  averageAbandonedInQueueTime?: number;
  serviceLevel20?: number;
  maxHoldTime?: number;
  satisfactionRate?: number;
  averageTalkTime?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  callsTimeout?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  totalAbandonedInQueueTime?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsOverflow: 'CallsOverflow',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      maxWorkTime: 'MaxWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      averageWaitTime: 'AverageWaitTime',
      totalHoldTime: 'TotalHoldTime',
      maxAbandonTime: 'MaxAbandonTime',
      averageWorkTime: 'AverageWorkTime',
      callsQueued: 'CallsQueued',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageAbandonTime: 'AverageAbandonTime',
      callsRinged: 'CallsRinged',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAbandoned: 'CallsAbandoned',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      totalWaitTime: 'TotalWaitTime',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      abandonRate: 'AbandonRate',
      totalTalkTime: 'TotalTalkTime',
      totalAbandonTime: 'TotalAbandonTime',
      callsOffered: 'CallsOffered',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxWaitTime: 'MaxWaitTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      serviceLevel20: 'ServiceLevel20',
      maxHoldTime: 'MaxHoldTime',
      satisfactionRate: 'SatisfactionRate',
      averageTalkTime: 'AverageTalkTime',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      callsTimeout: 'CallsTimeout',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsOverflow: 'number',
      callsAbandonedInRing: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      totalAbandonedInRingTime: 'number',
      maxWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      averageWaitTime: 'number',
      totalHoldTime: 'number',
      maxAbandonTime: 'number',
      averageWorkTime: 'number',
      callsQueued: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      averageAbandonedInRingTime: 'number',
      averageAbandonTime: 'number',
      callsRinged: 'number',
      callsBlindTransferOut: 'number',
      callsAttendedTransferIn: 'number',
      callsAbandoned: 'number',
      maxAbandonedInQueueTime: 'number',
      totalWaitTime: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      abandonRate: 'number',
      totalTalkTime: 'number',
      totalAbandonTime: 'number',
      callsOffered: 'number',
      maxAbandonedInRingTime: 'number',
      maxWaitTime: 'number',
      averageAbandonedInQueueTime: 'number',
      serviceLevel20: 'number',
      maxHoldTime: 'number',
      satisfactionRate: 'number',
      averageTalkTime: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      callsTimeout: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      totalAbandonedInQueueTime: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxHoldTime?: number;
  maxWorkTime?: number;
  averageBreakTime?: number;
  totalHoldTime?: number;
  satisfactionRate?: number;
  maxBreakTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  averageHoldTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxWorkTime: 'MaxWorkTime',
      averageBreakTime: 'AverageBreakTime',
      totalHoldTime: 'TotalHoldTime',
      satisfactionRate: 'SatisfactionRate',
      maxBreakTime: 'MaxBreakTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      averageHoldTime: 'AverageHoldTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxHoldTime: 'number',
      maxWorkTime: 'number',
      averageBreakTime: 'number',
      totalHoldTime: 'number',
      satisfactionRate: 'number',
      maxBreakTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      averageHoldTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyData extends $tea.Model {
  statsTime?: number;
  inbound?: ListIntervalSkillGroupReportResponseBodyDataInbound;
  outbound?: ListIntervalSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalSkillGroupReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      statsTime: 'StatsTime',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsTime: 'number',
      inbound: ListIntervalSkillGroupReportResponseBodyDataInbound,
      outbound: ListIntervalSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalSkillGroupReportResponseBodyDataOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: MonitorCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': MonitorCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class BlindTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: BlindTransferResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': BlindTransferResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlindTransferResponseBodyData extends $tea.Model {
  callContext?: BlindTransferResponseBodyDataCallContext;
  userContext?: BlindTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: BlindTransferResponseBodyDataCallContext,
      userContext: BlindTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBodyDataList extends $tea.Model {
  skillLevel?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      skillLevel: 'SkillLevel',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillLevel: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillLevelsOfUserResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListSkillLevelsOfUserResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListSkillLevelsOfUserResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBodyDataList extends $tea.Model {
  number?: string;
  active?: boolean;
  city?: string;
  usage?: boolean;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      active: 'Active',
      city: 'City',
      usage: 'Usage',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      active: 'boolean',
      city: 'string',
      usage: 'boolean',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnassignedNumbersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListUnassignedNumbersResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListUnassignedNumbersResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyDataInbound extends $tea.Model {
  statsTime?: number;
  callsQueued?: number;
  callsAbandonedInRing?: number;
  callsHandled?: number;
  totalCalls?: number;
  callsAbandonedInIVR?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      statsTime: 'StatsTime',
      callsQueued: 'CallsQueued',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsHandled: 'CallsHandled',
      totalCalls: 'TotalCalls',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsTime: 'number',
      callsQueued: 'number',
      callsAbandonedInRing: 'number',
      callsHandled: 'number',
      totalCalls: 'number',
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyDataOutbound extends $tea.Model {
  statsTime?: number;
  callsAnswered?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      statsTime: 'StatsTime',
      callsAnswered: 'CallsAnswered',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsTime: 'number',
      callsAnswered: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBodyData extends $tea.Model {
  inbound?: GetInstanceTrendingReportResponseBodyDataInbound[];
  outbound?: GetInstanceTrendingReportResponseBodyDataOutbound[];
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataInbound },
      outbound: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyDataOutbound },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListAdminList extends $tea.Model {
  displayName?: string;
  extension?: string;
  loginName?: string;
  email?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  roleName?: string;
  instanceId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      loginName: 'LoginName',
      email: 'Email',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      loginName: 'string',
      email: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
      roleName: 'string',
      instanceId: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListNumberListSkillGroups extends $tea.Model {
  displayName?: string;
  description?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  userCount?: number;
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      userCount: 'number',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListNumberList extends $tea.Model {
  active?: boolean;
  userId?: string;
  number?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  contactFlowId?: string;
  province?: string;
  skillGroups?: ListInstancesOfUserResponseBodyDataListNumberListSkillGroups[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      userId: 'UserId',
      number: 'Number',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
      skillGroups: 'SkillGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      userId: 'string',
      number: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      contactFlowId: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberListSkillGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataList extends $tea.Model {
  status?: string;
  consoleUrl?: string;
  description?: string;
  aliyunUid?: string;
  name?: string;
  domainName?: string;
  id?: string;
  adminList?: ListInstancesOfUserResponseBodyDataListAdminList[];
  numberList?: ListInstancesOfUserResponseBodyDataListNumberList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      aliyunUid: 'AliyunUid',
      name: 'Name',
      domainName: 'DomainName',
      id: 'Id',
      adminList: 'AdminList',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      consoleUrl: 'string',
      description: 'string',
      aliyunUid: 'string',
      name: 'string',
      domainName: 'string',
      id: 'string',
      adminList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListAdminList },
      numberList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListInstancesOfUserResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: LaunchSurveyResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': LaunchSurveyResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchSurveyResponseBodyData extends $tea.Model {
  callContext?: LaunchSurveyResponseBodyDataCallContext;
  userContext?: LaunchSurveyResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: LaunchSurveyResponseBodyDataCallContext,
      userContext: LaunchSurveyResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBodyDataList extends $tea.Model {
  instance?: string;
  callee?: string;
  enterTime?: number;
  nodeVariables?: { [key: string]: any };
  nodeExitCode?: string;
  flowName?: string;
  flowId?: string;
  nodeProperties?: { [key: string]: any };
  nodeType?: string;
  caller?: string;
  nodeName?: string;
  contactId?: string;
  leaveTime?: number;
  channelVariables?: string;
  channelId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      callee: 'Callee',
      enterTime: 'EnterTime',
      nodeVariables: 'NodeVariables',
      nodeExitCode: 'NodeExitCode',
      flowName: 'FlowName',
      flowId: 'FlowId',
      nodeProperties: 'NodeProperties',
      nodeType: 'NodeType',
      caller: 'Caller',
      nodeName: 'NodeName',
      contactId: 'ContactId',
      leaveTime: 'LeaveTime',
      channelVariables: 'ChannelVariables',
      channelId: 'ChannelId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      callee: 'string',
      enterTime: 'number',
      nodeVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeExitCode: 'string',
      flowName: 'string',
      flowId: 'string',
      nodeProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeType: 'string',
      caller: 'string',
      nodeName: 'string',
      contactId: 'string',
      leaveTime: 'number',
      channelVariables: 'string',
      channelId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListIvrTrackingDetailsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListIvrTrackingDetailsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBodyDataList extends $tea.Model {
  displayName?: string;
  description?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBriefSkillGroupsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListBriefSkillGroupsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListBriefSkillGroupsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: UnmuteCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': UnmuteCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteCallResponseBodyDataUserContext extends $tea.Model {
  heartbeat?: number;
  extension?: string;
  workMode?: string;
  mobile?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      heartbeat: 'Heartbeat',
      extension: 'Extension',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heartbeat: 'number',
      extension: 'string',
      workMode: 'string',
      mobile: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListUserLevelsOfSkillGroupResponseBodyDataList extends $tea.Model {
  displayName?: string;
  skillLevel?: number;
  loginName?: string;
  userId?: string;
  skillGroupId?: string;
  skillGroupName?: string;
  roleName?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      skillLevel: 'SkillLevel',
      loginName: 'LoginName',
      userId: 'UserId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      roleName: 'RoleName',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      skillLevel: 'number',
      loginName: 'string',
      userId: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      roleName: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListUserLevelsOfSkillGroupResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListUserLevelsOfSkillGroupResponseBodyDataList },
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

export class GetCallDetailRecordResponseBodyDataAgentEventsEventSequence extends $tea.Model {
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

export class GetCallDetailRecordResponseBodyDataAgentEvents extends $tea.Model {
  agentName?: string;
  agentId?: string;
  skillGroupId?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataAgentEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      agentId: 'AgentId',
      skillGroupId: 'SkillGroupId',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      agentId: 'string',
      skillGroupId: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEventsEventSequence },
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
  flowId?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataIvrEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEventsEventSequence },
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
  queueId?: string;
  queueName?: string;
  flowId?: string;
  queueType?: number;
  eventSequence?: GetCallDetailRecordResponseBodyDataQueueEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      queueId: 'QueueId',
      queueName: 'QueueName',
      flowId: 'FlowId',
      queueType: 'QueueType',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueId: 'string',
      queueName: 'string',
      flowId: 'string',
      queueType: 'number',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEventsEventSequence },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyData extends $tea.Model {
  releaseInitiator?: string;
  contactDisposition?: string;
  contactType?: string;
  agentIds?: string;
  callDuration?: number;
  recordingReady?: boolean;
  establishedTime?: number;
  instanceId?: string;
  satisfactionSurveyOffered?: boolean;
  calledNumber?: string;
  agentNames?: string;
  satisfaction?: number;
  startTime?: number;
  contactId?: string;
  satisfactionSurveyChannel?: string;
  releaseTime?: number;
  callingNumber?: string;
  skillGroupNames?: string;
  skillGroupIds?: string;
  agentEvents?: GetCallDetailRecordResponseBodyDataAgentEvents[];
  ivrEvents?: GetCallDetailRecordResponseBodyDataIvrEvents[];
  queueEvents?: GetCallDetailRecordResponseBodyDataQueueEvents[];
  callerLocation?: string;
  calleeLocation?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      contactDisposition: 'ContactDisposition',
      contactType: 'ContactType',
      agentIds: 'AgentIds',
      callDuration: 'CallDuration',
      recordingReady: 'RecordingReady',
      establishedTime: 'EstablishedTime',
      instanceId: 'InstanceId',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      calledNumber: 'CalledNumber',
      agentNames: 'AgentNames',
      satisfaction: 'Satisfaction',
      startTime: 'StartTime',
      contactId: 'ContactId',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      releaseTime: 'ReleaseTime',
      callingNumber: 'CallingNumber',
      skillGroupNames: 'SkillGroupNames',
      skillGroupIds: 'SkillGroupIds',
      agentEvents: 'AgentEvents',
      ivrEvents: 'IvrEvents',
      queueEvents: 'QueueEvents',
      callerLocation: 'CallerLocation',
      calleeLocation: 'CalleeLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      contactDisposition: 'string',
      contactType: 'string',
      agentIds: 'string',
      callDuration: 'number',
      recordingReady: 'boolean',
      establishedTime: 'number',
      instanceId: 'string',
      satisfactionSurveyOffered: 'boolean',
      calledNumber: 'string',
      agentNames: 'string',
      satisfaction: 'number',
      startTime: 'number',
      contactId: 'string',
      satisfactionSurveyChannel: 'string',
      releaseTime: 'number',
      callingNumber: 'string',
      skillGroupNames: 'string',
      skillGroupIds: 'string',
      agentEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEvents },
      ivrEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEvents },
      queueEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEvents },
      callerLocation: 'string',
      calleeLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: CoachCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': CoachCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CoachCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  uri?: string;
  deviceState?: string;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      uri: 'Uri',
      deviceState: 'DeviceState',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      uri: 'string',
      deviceState: 'string',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class CreateUserResponseBodyData extends $tea.Model {
  displayName?: string;
  extension?: string;
  email?: string;
  loginName?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      email: 'Email',
      loginName: 'LoginName',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      email: 'string',
      loginName: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivilegesOfUserResponseBodyData extends $tea.Model {
  instanceId?: string;
  scope?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scope: 'Scope',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scope: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInbound extends $tea.Model {
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsOffered?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsOffered: 'CallsOffered',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsOffered: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxHoldTime?: number;
  maxWorkTime?: number;
  averageBreakTime?: number;
  totalHoldTime?: number;
  satisfactionRate?: number;
  maxBreakTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  averageHoldTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxWorkTime: 'MaxWorkTime',
      averageBreakTime: 'AverageBreakTime',
      totalHoldTime: 'TotalHoldTime',
      satisfactionRate: 'SatisfactionRate',
      maxBreakTime: 'MaxBreakTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      averageHoldTime: 'AverageHoldTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxHoldTime: 'number',
      maxWorkTime: 'number',
      averageBreakTime: 'number',
      totalHoldTime: 'number',
      satisfactionRate: 'number',
      maxBreakTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      averageHoldTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataList extends $tea.Model {
  agentName?: string;
  agentId?: string;
  inbound?: ListHistoricalAgentReportResponseBodyDataListInbound;
  outbound?: ListHistoricalAgentReportResponseBodyDataListOutbound;
  overall?: ListHistoricalAgentReportResponseBodyDataListOverall;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      agentId: 'AgentId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      agentId: 'string',
      inbound: ListHistoricalAgentReportResponseBodyDataListInbound,
      outbound: ListHistoricalAgentReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentReportResponseBodyDataListOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListHistoricalAgentReportResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: InterceptCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': InterceptCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterceptCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListContactFlowsResponseBodyDataList extends $tea.Model {
  type?: string;
  definition?: string;
  draftId?: string;
  description?: string;
  updatedTime?: string;
  editor?: string;
  published?: boolean;
  instanceId?: string;
  name?: string;
  contactFlowId?: string;
  createdTime?: string;
  numberList?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      definition: 'Definition',
      draftId: 'DraftId',
      description: 'Description',
      updatedTime: 'UpdatedTime',
      editor: 'Editor',
      published: 'Published',
      instanceId: 'InstanceId',
      name: 'Name',
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      definition: 'string',
      draftId: 'string',
      description: 'string',
      updatedTime: 'string',
      editor: 'string',
      published: 'boolean',
      instanceId: 'string',
      name: 'string',
      contactFlowId: 'string',
      createdTime: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListContactFlowsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBodyDataList extends $tea.Model {
  active?: boolean;
  number?: string;
  city?: string;
  instanceId?: string;
  contactFlowId?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      number: 'Number',
      city: 'City',
      instanceId: 'InstanceId',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      number: 'string',
      city: 'string',
      instanceId: 'string',
      contactFlowId: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonalNumbersOfUserResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListPersonalNumbersOfUserResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListPersonalNumbersOfUserResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: StartPredictiveCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartPredictiveCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPredictiveCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  deviceState?: string;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      deviceState: 'DeviceState',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      deviceState: 'string',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListIntervalInstanceReportResponseBodyDataInbound extends $tea.Model {
  averageRingTime?: number;
  callsVoicemail?: number;
  maxAbandonedInIVRTime?: number;
  callsHandled?: number;
  callsIVRException?: number;
  callsAbandonedInIVR?: number;
  maxWorkTime?: number;
  totalHoldTime?: number;
  maxAbandonTime?: number;
  averageAbandonTime?: number;
  abandonedRate?: number;
  callsRinged?: number;
  callsQueuingFailed?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  maxAbandonedInRingTime?: number;
  callsBlindTransferred?: number;
  averageAbandonedInIVRTime?: number;
  averageAbandonedInQueueTime?: number;
  maxWaitTime?: number;
  averageTalkTime?: number;
  callsAttendedTransferred?: number;
  totalAbandonedInIVRTime?: number;
  callsQueuingOverflow?: number;
  callsAbandonedInRing?: number;
  totalAbandonedInRingTime?: number;
  totalWorkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsQueued?: number;
  averageAbandonedInRingTime?: number;
  satisfactionIndex?: number;
  callsAbandoned?: number;
  maxAbandonedInQueueTime?: number;
  callsAbandonedInVoiceNavigator?: number;
  totalWaitTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalAbandonTime?: number;
  callsOffered?: number;
  callsQueuingTimeout?: number;
  serviceLevel20?: number;
  maxHoldTime?: number;
  callsForwardToOutsideNumber?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  callsAbandonedInQueue?: number;
  totalAbandonedInQueueTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsVoicemail: 'CallsVoicemail',
      maxAbandonedInIVRTime: 'MaxAbandonedInIVRTime',
      callsHandled: 'CallsHandled',
      callsIVRException: 'CallsIVRException',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      maxWorkTime: 'MaxWorkTime',
      totalHoldTime: 'TotalHoldTime',
      maxAbandonTime: 'MaxAbandonTime',
      averageAbandonTime: 'AverageAbandonTime',
      abandonedRate: 'AbandonedRate',
      callsRinged: 'CallsRinged',
      callsQueuingFailed: 'CallsQueuingFailed',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      callsBlindTransferred: 'CallsBlindTransferred',
      averageAbandonedInIVRTime: 'AverageAbandonedInIVRTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      maxWaitTime: 'MaxWaitTime',
      averageTalkTime: 'AverageTalkTime',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      totalAbandonedInIVRTime: 'TotalAbandonedInIVRTime',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalWorkTime: 'TotalWorkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsQueued: 'CallsQueued',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      satisfactionIndex: 'SatisfactionIndex',
      callsAbandoned: 'CallsAbandoned',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      callsAbandonedInVoiceNavigator: 'CallsAbandonedInVoiceNavigator',
      totalWaitTime: 'TotalWaitTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalAbandonTime: 'TotalAbandonTime',
      callsOffered: 'CallsOffered',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      serviceLevel20: 'ServiceLevel20',
      maxHoldTime: 'MaxHoldTime',
      callsForwardToOutsideNumber: 'CallsForwardToOutsideNumber',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsVoicemail: 'number',
      maxAbandonedInIVRTime: 'number',
      callsHandled: 'number',
      callsIVRException: 'number',
      callsAbandonedInIVR: 'number',
      maxWorkTime: 'number',
      totalHoldTime: 'number',
      maxAbandonTime: 'number',
      averageAbandonTime: 'number',
      abandonedRate: 'number',
      callsRinged: 'number',
      callsQueuingFailed: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      maxAbandonedInRingTime: 'number',
      callsBlindTransferred: 'number',
      averageAbandonedInIVRTime: 'number',
      averageAbandonedInQueueTime: 'number',
      maxWaitTime: 'number',
      averageTalkTime: 'number',
      callsAttendedTransferred: 'number',
      totalAbandonedInIVRTime: 'number',
      callsQueuingOverflow: 'number',
      callsAbandonedInRing: 'number',
      totalAbandonedInRingTime: 'number',
      totalWorkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsQueued: 'number',
      averageAbandonedInRingTime: 'number',
      satisfactionIndex: 'number',
      callsAbandoned: 'number',
      maxAbandonedInQueueTime: 'number',
      callsAbandonedInVoiceNavigator: 'number',
      totalWaitTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalAbandonTime: 'number',
      callsOffered: 'number',
      callsQueuingTimeout: 'number',
      serviceLevel20: 'number',
      maxHoldTime: 'number',
      callsForwardToOutsideNumber: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      callsAbandonedInQueue: 'number',
      totalAbandonedInQueueTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyDataOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsBlindTransferred?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsAttendedTransferred?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsBlindTransferred: 'CallsBlindTransferred',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsBlindTransferred: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsAttendedTransferred: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyDataOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxHoldTime?: number;
  maxWorkTime?: number;
  averageBreakTime?: number;
  totalHoldTime?: number;
  satisfactionRate?: number;
  maxBreakTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  averageHoldTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxWorkTime: 'MaxWorkTime',
      averageBreakTime: 'AverageBreakTime',
      totalHoldTime: 'TotalHoldTime',
      satisfactionRate: 'SatisfactionRate',
      maxBreakTime: 'MaxBreakTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      averageHoldTime: 'AverageHoldTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxHoldTime: 'number',
      maxWorkTime: 'number',
      averageBreakTime: 'number',
      totalHoldTime: 'number',
      satisfactionRate: 'number',
      maxBreakTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      averageHoldTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyData extends $tea.Model {
  statsTime?: number;
  inbound?: ListIntervalInstanceReportResponseBodyDataInbound;
  outbound?: ListIntervalInstanceReportResponseBodyDataOutbound;
  overall?: ListIntervalInstanceReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      statsTime: 'StatsTime',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsTime: 'number',
      inbound: ListIntervalInstanceReportResponseBodyDataInbound,
      outbound: ListIntervalInstanceReportResponseBodyDataOutbound,
      overall: ListIntervalInstanceReportResponseBodyDataOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBodyDataList extends $tea.Model {
  extension?: string;
  stateCode?: string;
  state?: string;
  agentId?: string;
  stateTime?: number;
  agentName?: string;
  instanceId?: string;
  counterParty?: string;
  skillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      stateCode: 'StateCode',
      state: 'State',
      agentId: 'AgentId',
      stateTime: 'StateTime',
      agentName: 'AgentName',
      instanceId: 'InstanceId',
      counterParty: 'CounterParty',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      stateCode: 'string',
      state: 'string',
      agentId: 'string',
      stateTime: 'number',
      agentName: 'string',
      instanceId: 'string',
      counterParty: 'string',
      skillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeAgentStatesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListRealtimeAgentStatesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListRealtimeAgentStatesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: LaunchAuthenticationResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': LaunchAuthenticationResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchAuthenticationResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListInstancesResponseBodyDataListAdminList extends $tea.Model {
  displayName?: string;
  extension?: string;
  loginName?: string;
  email?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  roleName?: string;
  instanceId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      loginName: 'LoginName',
      email: 'Email',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      loginName: 'string',
      email: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
      roleName: 'string',
      instanceId: 'string',
      roleId: 'string',
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
  status?: string;
  consoleUrl?: string;
  description?: string;
  createTime?: number;
  aliyunUid?: string;
  name?: string;
  domainName?: string;
  id?: string;
  adminList?: ListInstancesResponseBodyDataListAdminList[];
  numberList?: ListInstancesResponseBodyDataListNumberList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      createTime: 'CreateTime',
      aliyunUid: 'AliyunUid',
      name: 'Name',
      domainName: 'DomainName',
      id: 'Id',
      adminList: 'AdminList',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      consoleUrl: 'string',
      description: 'string',
      createTime: 'number',
      aliyunUid: 'string',
      name: 'string',
      domainName: 'string',
      id: 'string',
      adminList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListAdminList },
      numberList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListNumberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListInstancesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataInbound extends $tea.Model {
  averageRingTime?: number;
  callsVoicemail?: number;
  maxAbandonedInIVRTime?: number;
  callsHandled?: number;
  callsIVRException?: number;
  callsAbandonedInIVR?: number;
  maxWorkTime?: number;
  totalHoldTime?: number;
  maxAbandonTime?: number;
  averageAbandonTime?: number;
  callsRinged?: number;
  callsQueuingFailed?: number;
  totalRingTime?: number;
  abandonRate?: number;
  totalTalkTime?: number;
  maxAbandonedInRingTime?: number;
  callsBlindTransferred?: number;
  averageAbandonedInIVRTime?: number;
  averageAbandonedInQueueTime?: number;
  maxWaitTime?: number;
  averageTalkTime?: number;
  callsAttendedTransferred?: number;
  totalAbandonedInIVRTime?: number;
  callsQueuingOverflow?: number;
  callsAbandonedInRing?: number;
  totalAbandonedInRingTime?: number;
  totalWorkTime?: number;
  averageWaitTime?: number;
  averageWorkTime?: number;
  callsQueued?: number;
  averageAbandonedInRingTime?: number;
  satisfactionIndex?: number;
  callsAbandoned?: number;
  maxAbandonedInQueueTime?: number;
  callsAbandonedInVoiceNavigator?: number;
  totalWaitTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalAbandonTime?: number;
  callsOffered?: number;
  callsQueuingTimeout?: number;
  serviceLevel20?: number;
  maxHoldTime?: number;
  callsForwardToOutsideNumber?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  callsAbandonedInQueue?: number;
  totalAbandonedInQueueTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsVoicemail: 'CallsVoicemail',
      maxAbandonedInIVRTime: 'MaxAbandonedInIVRTime',
      callsHandled: 'CallsHandled',
      callsIVRException: 'CallsIVRException',
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      maxWorkTime: 'MaxWorkTime',
      totalHoldTime: 'TotalHoldTime',
      maxAbandonTime: 'MaxAbandonTime',
      averageAbandonTime: 'AverageAbandonTime',
      callsRinged: 'CallsRinged',
      callsQueuingFailed: 'CallsQueuingFailed',
      totalRingTime: 'TotalRingTime',
      abandonRate: 'AbandonRate',
      totalTalkTime: 'TotalTalkTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      callsBlindTransferred: 'CallsBlindTransferred',
      averageAbandonedInIVRTime: 'AverageAbandonedInIVRTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      maxWaitTime: 'MaxWaitTime',
      averageTalkTime: 'AverageTalkTime',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      totalAbandonedInIVRTime: 'TotalAbandonedInIVRTime',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalWorkTime: 'TotalWorkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsQueued: 'CallsQueued',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      satisfactionIndex: 'SatisfactionIndex',
      callsAbandoned: 'CallsAbandoned',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      callsAbandonedInVoiceNavigator: 'CallsAbandonedInVoiceNavigator',
      totalWaitTime: 'TotalWaitTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalAbandonTime: 'TotalAbandonTime',
      callsOffered: 'CallsOffered',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      serviceLevel20: 'ServiceLevel20',
      maxHoldTime: 'MaxHoldTime',
      callsForwardToOutsideNumber: 'CallsForwardToOutsideNumber',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsVoicemail: 'number',
      maxAbandonedInIVRTime: 'number',
      callsHandled: 'number',
      callsIVRException: 'number',
      callsAbandonedInIVR: 'number',
      maxWorkTime: 'number',
      totalHoldTime: 'number',
      maxAbandonTime: 'number',
      averageAbandonTime: 'number',
      callsRinged: 'number',
      callsQueuingFailed: 'number',
      totalRingTime: 'number',
      abandonRate: 'number',
      totalTalkTime: 'number',
      maxAbandonedInRingTime: 'number',
      callsBlindTransferred: 'number',
      averageAbandonedInIVRTime: 'number',
      averageAbandonedInQueueTime: 'number',
      maxWaitTime: 'number',
      averageTalkTime: 'number',
      callsAttendedTransferred: 'number',
      totalAbandonedInIVRTime: 'number',
      callsQueuingOverflow: 'number',
      callsAbandonedInRing: 'number',
      totalAbandonedInRingTime: 'number',
      totalWorkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsQueued: 'number',
      averageAbandonedInRingTime: 'number',
      satisfactionIndex: 'number',
      callsAbandoned: 'number',
      maxAbandonedInQueueTime: 'number',
      callsAbandonedInVoiceNavigator: 'number',
      totalWaitTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalAbandonTime: 'number',
      callsOffered: 'number',
      callsQueuingTimeout: 'number',
      serviceLevel20: 'number',
      maxHoldTime: 'number',
      callsForwardToOutsideNumber: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      callsAbandonedInQueue: 'number',
      totalAbandonedInQueueTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  callsBlindTransferred?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsAttendedTransferred?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      callsBlindTransferred: 'CallsBlindTransferred',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      callsBlindTransferred: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsAttendedTransferred: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxHoldTime?: number;
  maxWorkTime?: number;
  averageBreakTime?: number;
  totalHoldTime?: number;
  satisfactionRate?: number;
  maxBreakTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  averageHoldTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxWorkTime: 'MaxWorkTime',
      averageBreakTime: 'AverageBreakTime',
      totalHoldTime: 'TotalHoldTime',
      satisfactionRate: 'SatisfactionRate',
      maxBreakTime: 'MaxBreakTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      averageHoldTime: 'AverageHoldTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxHoldTime: 'number',
      maxWorkTime: 'number',
      averageBreakTime: 'number',
      totalHoldTime: 'number',
      satisfactionRate: 'number',
      maxBreakTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      averageHoldTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyData extends $tea.Model {
  inbound?: GetHistoricalInstanceReportResponseBodyDataInbound;
  outbound?: GetHistoricalInstanceReportResponseBodyDataOutbound;
  overall?: GetHistoricalInstanceReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetHistoricalInstanceReportResponseBodyDataInbound,
      outbound: GetHistoricalInstanceReportResponseBodyDataOutbound,
      overall: GetHistoricalInstanceReportResponseBodyDataOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: StartBack2BackCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': StartBack2BackCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBack2BackCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  uri?: string;
  deviceState?: string;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      uri: 'Uri',
      deviceState: 'DeviceState',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      uri: 'string',
      deviceState: 'string',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class GetUserResponseBodyData extends $tea.Model {
  displayName?: string;
  extension?: string;
  loginName?: string;
  email?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  roleName?: string;
  instanceId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      loginName: 'LoginName',
      email: 'Email',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      loginName: 'string',
      email: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
      roleName: 'string',
      instanceId: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: CompleteAttendedTransferResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': CompleteAttendedTransferResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAttendedTransferResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: CompleteAttendedTransferResponseBodyDataCallContext;
  userContext?: CompleteAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: CompleteAttendedTransferResponseBodyDataCallContext,
      userContext: CompleteAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberLocationResponseBodyData extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBodyDataList extends $tea.Model {
  displayName?: string;
  email?: string;
  loginName?: string;
  mobile?: string;
  aliyunUid?: number;
  primary?: boolean;
  ramId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      mobile: 'Mobile',
      aliyunUid: 'AliyunUid',
      primary: 'Primary',
      ramId: 'RamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      mobile: 'string',
      aliyunUid: 'number',
      primary: 'boolean',
      ramId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRamUsersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListRamUsersResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListRamUsersResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: MuteCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': MuteCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class AnswerCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyDataCallContext extends $tea.Model {
  jobId?: string;
  instanceId?: string;
  channelContexts?: AnswerCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      instanceId: 'InstanceId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      instanceId: 'string',
      channelContexts: { 'type': 'array', 'itemType': AnswerCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: AnswerCallResponseBodyDataCallContext;
  userContext?: AnswerCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: AnswerCallResponseBodyDataCallContext,
      userContext: AnswerCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataInbound extends $tea.Model {
  averageRingTime?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  callsOffered?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      callsOffered: 'CallsOffered',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      callsOffered: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataOverall extends $tea.Model {
  occupancyRate?: number;
  totalWorkTime?: number;
  maxWorkTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  maxBreakTime?: number;
  satisfactionIndex?: number;
  maxReadyTime?: number;
  maxTalkTime?: number;
  totalReadyTime?: number;
  lastCheckoutTime?: number;
  totalCalls?: number;
  totalLoggedInTime?: number;
  totalTalkTime?: number;
  maxHoldTime?: number;
  averageBreakTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  satisfactionSurveysOffered?: number;
  firstCheckInTime?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageReadyTime?: number;
  totalBreakTime?: number;
  static names(): { [key: string]: string } {
    return {
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxWorkTime: 'MaxWorkTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      maxBreakTime: 'MaxBreakTime',
      satisfactionIndex: 'SatisfactionIndex',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      totalReadyTime: 'TotalReadyTime',
      lastCheckoutTime: 'LastCheckoutTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalTalkTime: 'TotalTalkTime',
      maxHoldTime: 'MaxHoldTime',
      averageBreakTime: 'AverageBreakTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      firstCheckInTime: 'FirstCheckInTime',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageReadyTime: 'AverageReadyTime',
      totalBreakTime: 'TotalBreakTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxWorkTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      maxBreakTime: 'number',
      satisfactionIndex: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      totalReadyTime: 'number',
      lastCheckoutTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalTalkTime: 'number',
      maxHoldTime: 'number',
      averageBreakTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      firstCheckInTime: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageReadyTime: 'number',
      totalBreakTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyData extends $tea.Model {
  statsTime?: number;
  inbound?: ListIntervalAgentReportResponseBodyDataInbound;
  outbound?: ListIntervalAgentReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      statsTime: 'StatsTime',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsTime: 'number',
      inbound: ListIntervalAgentReportResponseBodyDataInbound,
      outbound: ListIntervalAgentReportResponseBodyDataOutbound,
      overall: ListIntervalAgentReportResponseBodyDataOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyDataList extends $tea.Model {
  contactDisposition?: string;
  contactType?: string;
  establishedTime?: number;
  calledNumber?: string;
  additionalBroker?: string;
  satisfactionIndex?: number;
  satisfactionSurveyChannel?: string;
  releaseTime?: number;
  waitTime?: number;
  skillGroupNames?: string;
  ivrTime?: number;
  satisfactionDescription?: string;
  releaseInitiator?: string;
  agentIds?: string;
  callDuration?: string;
  recordingReady?: boolean;
  instanceId?: string;
  ringTime?: number;
  satisfactionSurveyOffered?: boolean;
  agentNames?: string;
  startTime?: number;
  contactId?: string;
  recordingDuration?: number;
  callingNumber?: string;
  queueTime?: number;
  broker?: string;
  skillGroupIds?: string;
  callerLocation?: string;
  calleeLocation?: string;
  static names(): { [key: string]: string } {
    return {
      contactDisposition: 'ContactDisposition',
      contactType: 'ContactType',
      establishedTime: 'EstablishedTime',
      calledNumber: 'CalledNumber',
      additionalBroker: 'AdditionalBroker',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      releaseTime: 'ReleaseTime',
      waitTime: 'WaitTime',
      skillGroupNames: 'SkillGroupNames',
      ivrTime: 'IvrTime',
      satisfactionDescription: 'SatisfactionDescription',
      releaseInitiator: 'ReleaseInitiator',
      agentIds: 'AgentIds',
      callDuration: 'CallDuration',
      recordingReady: 'RecordingReady',
      instanceId: 'InstanceId',
      ringTime: 'RingTime',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      agentNames: 'AgentNames',
      startTime: 'StartTime',
      contactId: 'ContactId',
      recordingDuration: 'RecordingDuration',
      callingNumber: 'CallingNumber',
      queueTime: 'QueueTime',
      broker: 'Broker',
      skillGroupIds: 'SkillGroupIds',
      callerLocation: 'CallerLocation',
      calleeLocation: 'CalleeLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDisposition: 'string',
      contactType: 'string',
      establishedTime: 'number',
      calledNumber: 'string',
      additionalBroker: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveyChannel: 'string',
      releaseTime: 'number',
      waitTime: 'number',
      skillGroupNames: 'string',
      ivrTime: 'number',
      satisfactionDescription: 'string',
      releaseInitiator: 'string',
      agentIds: 'string',
      callDuration: 'string',
      recordingReady: 'boolean',
      instanceId: 'string',
      ringTime: 'number',
      satisfactionSurveyOffered: 'boolean',
      agentNames: 'string',
      startTime: 'number',
      contactId: 'string',
      recordingDuration: 'number',
      callingNumber: 'string',
      queueTime: 'number',
      broker: 'string',
      skillGroupIds: 'string',
      callerLocation: 'string',
      calleeLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListCallDetailRecordsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: CancelAttendedTransferResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': CancelAttendedTransferResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAttendedTransferResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: CancelAttendedTransferResponseBodyDataCallContext;
  userContext?: CancelAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: CancelAttendedTransferResponseBodyDataCallContext,
      userContext: CancelAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeBreakResponseBodyData extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListInbound extends $tea.Model {
  averageRingTime?: number;
  callsOverflow?: number;
  callsAbandonedInRing?: number;
  callsHandled?: number;
  totalWorkTime?: number;
  totalAbandonedInRingTime?: number;
  maxWorkTime?: number;
  callsAttendedTransferOut?: number;
  averageWaitTime?: number;
  totalHoldTime?: number;
  maxAbandonTime?: number;
  averageWorkTime?: number;
  callsQueued?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  averageAbandonedInRingTime?: number;
  averageAbandonTime?: number;
  callsRinged?: number;
  callsBlindTransferOut?: number;
  callsAttendedTransferIn?: number;
  callsAbandoned?: number;
  maxAbandonedInQueueTime?: number;
  totalWaitTime?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  abandonRate?: number;
  totalTalkTime?: number;
  totalAbandonTime?: number;
  callsOffered?: number;
  maxAbandonedInRingTime?: number;
  maxWaitTime?: number;
  averageAbandonedInQueueTime?: number;
  serviceLevel20?: number;
  maxHoldTime?: number;
  satisfactionRate?: number;
  averageTalkTime?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  handleRate?: number;
  callsTimeout?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  totalAbandonedInQueueTime?: number;
  callsAbandonedInQueue?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsOverflow: 'CallsOverflow',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsHandled: 'CallsHandled',
      totalWorkTime: 'TotalWorkTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      maxWorkTime: 'MaxWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      averageWaitTime: 'AverageWaitTime',
      totalHoldTime: 'TotalHoldTime',
      maxAbandonTime: 'MaxAbandonTime',
      averageWorkTime: 'AverageWorkTime',
      callsQueued: 'CallsQueued',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageAbandonTime: 'AverageAbandonTime',
      callsRinged: 'CallsRinged',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAbandoned: 'CallsAbandoned',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      totalWaitTime: 'TotalWaitTime',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      abandonRate: 'AbandonRate',
      totalTalkTime: 'TotalTalkTime',
      totalAbandonTime: 'TotalAbandonTime',
      callsOffered: 'CallsOffered',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxWaitTime: 'MaxWaitTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      serviceLevel20: 'ServiceLevel20',
      maxHoldTime: 'MaxHoldTime',
      satisfactionRate: 'SatisfactionRate',
      averageTalkTime: 'AverageTalkTime',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      handleRate: 'HandleRate',
      callsTimeout: 'CallsTimeout',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsOverflow: 'number',
      callsAbandonedInRing: 'number',
      callsHandled: 'number',
      totalWorkTime: 'number',
      totalAbandonedInRingTime: 'number',
      maxWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      averageWaitTime: 'number',
      totalHoldTime: 'number',
      maxAbandonTime: 'number',
      averageWorkTime: 'number',
      callsQueued: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      averageAbandonedInRingTime: 'number',
      averageAbandonTime: 'number',
      callsRinged: 'number',
      callsBlindTransferOut: 'number',
      callsAttendedTransferIn: 'number',
      callsAbandoned: 'number',
      maxAbandonedInQueueTime: 'number',
      totalWaitTime: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      abandonRate: 'number',
      totalTalkTime: 'number',
      totalAbandonTime: 'number',
      callsOffered: 'number',
      maxAbandonedInRingTime: 'number',
      maxWaitTime: 'number',
      averageAbandonedInQueueTime: 'number',
      serviceLevel20: 'number',
      maxHoldTime: 'number',
      satisfactionRate: 'number',
      averageTalkTime: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      handleRate: 'number',
      callsTimeout: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      totalAbandonedInQueueTime: 'number',
      callsAbandonedInQueue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListOutbound extends $tea.Model {
  averageRingTime?: number;
  callsDialed?: number;
  callsAnswered?: number;
  totalWorkTime?: number;
  callsAttendedTransferOut?: number;
  maxWorkTime?: number;
  totalDialingTime?: number;
  totalHoldTime?: number;
  averageWorkTime?: number;
  callsBlindTransferIn?: number;
  satisfactionIndex?: number;
  callsRinged?: number;
  callsAttendedTransferIn?: number;
  callsBlindTransferOut?: number;
  totalRingTime?: number;
  maxTalkTime?: number;
  maxRingTime?: number;
  totalTalkTime?: number;
  maxDialingTime?: number;
  answerRate?: number;
  maxHoldTime?: number;
  averageTalkTime?: number;
  satisfactionRate?: number;
  callsHold?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  averageHoldTime?: number;
  averageDialingTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      callsDialed: 'CallsDialed',
      callsAnswered: 'CallsAnswered',
      totalWorkTime: 'TotalWorkTime',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      maxWorkTime: 'MaxWorkTime',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      averageWorkTime: 'AverageWorkTime',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      satisfactionIndex: 'SatisfactionIndex',
      callsRinged: 'CallsRinged',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      totalRingTime: 'TotalRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxRingTime: 'MaxRingTime',
      totalTalkTime: 'TotalTalkTime',
      maxDialingTime: 'MaxDialingTime',
      answerRate: 'AnswerRate',
      maxHoldTime: 'MaxHoldTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionRate: 'SatisfactionRate',
      callsHold: 'CallsHold',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      averageHoldTime: 'AverageHoldTime',
      averageDialingTime: 'AverageDialingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageRingTime: 'number',
      callsDialed: 'number',
      callsAnswered: 'number',
      totalWorkTime: 'number',
      callsAttendedTransferOut: 'number',
      maxWorkTime: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
      averageWorkTime: 'number',
      callsBlindTransferIn: 'number',
      satisfactionIndex: 'number',
      callsRinged: 'number',
      callsAttendedTransferIn: 'number',
      callsBlindTransferOut: 'number',
      totalRingTime: 'number',
      maxTalkTime: 'number',
      maxRingTime: 'number',
      totalTalkTime: 'number',
      maxDialingTime: 'number',
      answerRate: 'number',
      maxHoldTime: 'number',
      averageTalkTime: 'number',
      satisfactionRate: 'number',
      callsHold: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      averageHoldTime: 'number',
      averageDialingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListOverall extends $tea.Model {
  totalTalkTime?: number;
  totalLoggedInTime?: number;
  occupancyRate?: number;
  totalWorkTime?: number;
  maxHoldTime?: number;
  maxWorkTime?: number;
  averageBreakTime?: number;
  totalHoldTime?: number;
  satisfactionRate?: number;
  maxBreakTime?: number;
  averageWorkTime?: number;
  averageTalkTime?: number;
  satisfactionIndex?: number;
  satisfactionSurveysOffered?: number;
  satisfactionSurveysResponded?: number;
  maxReadyTime?: number;
  averageReadyTime?: number;
  averageHoldTime?: number;
  totalReadyTime?: number;
  totalBreakTime?: number;
  maxTalkTime?: number;
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      totalTalkTime: 'TotalTalkTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      occupancyRate: 'OccupancyRate',
      totalWorkTime: 'TotalWorkTime',
      maxHoldTime: 'MaxHoldTime',
      maxWorkTime: 'MaxWorkTime',
      averageBreakTime: 'AverageBreakTime',
      totalHoldTime: 'TotalHoldTime',
      satisfactionRate: 'SatisfactionRate',
      maxBreakTime: 'MaxBreakTime',
      averageWorkTime: 'AverageWorkTime',
      averageTalkTime: 'AverageTalkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      maxReadyTime: 'MaxReadyTime',
      averageReadyTime: 'AverageReadyTime',
      averageHoldTime: 'AverageHoldTime',
      totalReadyTime: 'TotalReadyTime',
      totalBreakTime: 'TotalBreakTime',
      maxTalkTime: 'MaxTalkTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTalkTime: 'number',
      totalLoggedInTime: 'number',
      occupancyRate: 'number',
      totalWorkTime: 'number',
      maxHoldTime: 'number',
      maxWorkTime: 'number',
      averageBreakTime: 'number',
      totalHoldTime: 'number',
      satisfactionRate: 'number',
      maxBreakTime: 'number',
      averageWorkTime: 'number',
      averageTalkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      maxReadyTime: 'number',
      averageReadyTime: 'number',
      averageHoldTime: 'number',
      totalReadyTime: 'number',
      totalBreakTime: 'number',
      maxTalkTime: 'number',
      totalCalls: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataList extends $tea.Model {
  skillGroupName?: string;
  skillGroupId?: string;
  inbound?: ListHistoricalSkillGroupReportResponseBodyDataListInbound;
  outbound?: ListHistoricalSkillGroupReportResponseBodyDataListOutbound;
  overall?: ListHistoricalSkillGroupReportResponseBodyDataListOverall;
  static names(): { [key: string]: string } {
    return {
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupName: 'string',
      skillGroupId: 'string',
      inbound: ListHistoricalSkillGroupReportResponseBodyDataListInbound,
      outbound: ListHistoricalSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalSkillGroupReportResponseBodyDataListOverall,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListHistoricalSkillGroupReportResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: SendDtmfSignalingResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': SendDtmfSignalingResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDtmfSignalingResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListRecentCallDetailRecordsResponseBodyDataList extends $tea.Model {
  startTime?: number;
  contactDisposition?: string;
  contactType?: string;
  agentIds?: string;
  contactId?: string;
  callDuration?: string;
  callingNumber?: string;
  duration?: number;
  instanceId?: string;
  calledNumber?: string;
  skillGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      contactDisposition: 'ContactDisposition',
      contactType: 'ContactType',
      agentIds: 'AgentIds',
      contactId: 'ContactId',
      callDuration: 'CallDuration',
      callingNumber: 'CallingNumber',
      duration: 'Duration',
      instanceId: 'InstanceId',
      calledNumber: 'CalledNumber',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      contactDisposition: 'string',
      contactType: 'string',
      agentIds: 'string',
      contactId: 'string',
      callDuration: 'string',
      callingNumber: 'string',
      duration: 'number',
      instanceId: 'string',
      calledNumber: 'string',
      skillGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListRecentCallDetailRecordsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListRecentCallDetailRecordsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: InitiateAttendedTransferResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': InitiateAttendedTransferResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiateAttendedTransferResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: InitiateAttendedTransferResponseBodyDataCallContext;
  userContext?: InitiateAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: InitiateAttendedTransferResponseBodyDataCallContext,
      userContext: InitiateAttendedTransferResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: MakeCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': MakeCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: MakeCallResponseBodyDataCallContext;
  userContext?: MakeCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: MakeCallResponseBodyDataCallContext,
      userContext: MakeCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataAdminList extends $tea.Model {
  displayName?: string;
  extension?: string;
  loginName?: string;
  email?: string;
  workMode?: string;
  mobile?: string;
  userId?: string;
  roleName?: string;
  instanceId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      loginName: 'LoginName',
      email: 'Email',
      workMode: 'WorkMode',
      mobile: 'Mobile',
      userId: 'UserId',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      loginName: 'string',
      email: 'string',
      workMode: 'string',
      mobile: 'string',
      userId: 'string',
      roleName: 'string',
      instanceId: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNumberListSkillGroups extends $tea.Model {
  displayName?: string;
  description?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  userCount?: number;
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      userCount: 'number',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNumberList extends $tea.Model {
  active?: boolean;
  userId?: string;
  number?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  contactFlowId?: string;
  province?: string;
  skillGroups?: GetInstanceResponseBodyDataNumberListSkillGroups[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      userId: 'UserId',
      number: 'Number',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
      skillGroups: 'SkillGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      userId: 'string',
      number: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      contactFlowId: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberListSkillGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  status?: string;
  consoleUrl?: string;
  description?: string;
  aliyunUid?: string;
  name?: string;
  domainName?: string;
  id?: string;
  adminList?: GetInstanceResponseBodyDataAdminList[];
  numberList?: GetInstanceResponseBodyDataNumberList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      consoleUrl: 'ConsoleUrl',
      description: 'Description',
      aliyunUid: 'AliyunUid',
      name: 'Name',
      domainName: 'DomainName',
      id: 'Id',
      adminList: 'AdminList',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      consoleUrl: 'string',
      description: 'string',
      aliyunUid: 'string',
      name: 'string',
      domainName: 'string',
      id: 'string',
      adminList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataAdminList },
      numberList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigItemsResponseBodyData extends $tea.Model {
  objectId?: string;
  value?: string;
  objectType?: string;
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      value: 'Value',
      objectType: 'ObjectType',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      value: 'string',
      objectType: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignInGroupResponseBodyData extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatesResponseBodyData extends $tea.Model {
  workingAgents?: number;
  longestWaitingTime?: number;
  loggedInAgents?: number;
  totalAgents?: number;
  waitingCalls?: number;
  breakingAgents?: number;
  talkingAgents?: number;
  interactiveCalls?: number;
  readyAgents?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      workingAgents: 'WorkingAgents',
      longestWaitingTime: 'LongestWaitingTime',
      loggedInAgents: 'LoggedInAgents',
      totalAgents: 'TotalAgents',
      waitingCalls: 'WaitingCalls',
      breakingAgents: 'BreakingAgents',
      talkingAgents: 'TalkingAgents',
      interactiveCalls: 'InteractiveCalls',
      readyAgents: 'ReadyAgents',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workingAgents: 'number',
      longestWaitingTime: 'number',
      loggedInAgents: 'number',
      totalAgents: 'number',
      waitingCalls: 'number',
      breakingAgents: 'number',
      talkingAgents: 'number',
      interactiveCalls: 'number',
      readyAgents: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $tea.Model {
  extension?: string;
  expires?: number;
  contact?: string;
  deviceId?: string;
  userId?: string;
  callId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      expires: 'Expires',
      contact: 'Contact',
      deviceId: 'DeviceId',
      userId: 'UserId',
      callId: 'CallId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      expires: 'number',
      contact: 'string',
      deviceId: 'string',
      userId: 'string',
      callId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: RetrieveCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': RetrieveCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListSkillGroupsResponseBodyDataList extends $tea.Model {
  displayName?: string;
  description?: string;
  phoneNumberCount?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  userCount?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListSkillGroupsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListSkillGroupsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: HoldCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': HoldCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListOutboundNumbersOfUserResponseBodyDataList extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListOutboundNumbersOfUserResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListOutboundNumbersOfUserResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  channelVariables?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      channelVariables: 'ChannelVariables',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      channelVariables: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: PollUserStatusResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PollUserStatusResponseBodyData extends $tea.Model {
  contextId?: number;
  callContext?: PollUserStatusResponseBodyDataCallContext;
  userContext?: PollUserStatusResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'number',
      callContext: PollUserStatusResponseBodyDataCallContext,
      userContext: PollUserStatusResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadyForServiceResponseBodyData extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiChannelRecordingResponseBodyData extends $tea.Model {
  fileUrl?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  index?: number;
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  channelFlags?: string;
  skillGroupId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  userExtension?: string;
  originator?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      channelFlags: 'ChannelFlags',
      skillGroupId: 'SkillGroupId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      userExtension: 'UserExtension',
      originator: 'Originator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      channelFlags: 'string',
      skillGroupId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      userExtension: 'string',
      originator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataCallContext extends $tea.Model {
  callType?: string;
  instanceId?: string;
  jobId?: string;
  channelContexts?: BargeInCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      instanceId: 'string',
      jobId: 'string',
      channelContexts: { 'type': 'array', 'itemType': BargeInCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BargeInCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListPhoneNumbersOfSkillGroupResponseBodyDataList extends $tea.Model {
  active?: boolean;
  number?: string;
  city?: string;
  instanceId?: string;
  usage?: string;
  contactFlowId?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      number: 'Number',
      city: 'City',
      instanceId: 'InstanceId',
      usage: 'Usage',
      contactFlowId: 'ContactFlowId',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      number: 'string',
      city: 'string',
      instanceId: 'string',
      usage: 'string',
      contactFlowId: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhoneNumbersOfSkillGroupResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListPhoneNumbersOfSkillGroupResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListPhoneNumbersOfSkillGroupResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignOutGroupResponseBodyData extends $tea.Model {
  extension?: string;
  heartbeat?: number;
  workMode?: string;
  deviceId?: string;
  userId?: string;
  reserved?: number;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  mobile?: string;
  jobId?: string;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      heartbeat: 'Heartbeat',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      userId: 'UserId',
      reserved: 'Reserved',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      mobile: 'Mobile',
      jobId: 'JobId',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      heartbeat: 'number',
      workMode: 'string',
      deviceId: 'string',
      userId: 'string',
      reserved: 'number',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      mobile: 'string',
      jobId: 'string',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
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

export class ListRealtimeSkillGroupStatesResponseBodyDataList extends $tea.Model {
  workingAgents?: number;
  longestWaitingTime?: number;
  loggedInAgents?: number;
  waitingCalls?: number;
  breakingAgents?: number;
  talkingAgents?: number;
  skillGroupName?: string;
  skillGroupId?: string;
  readyAgents?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      workingAgents: 'WorkingAgents',
      longestWaitingTime: 'LongestWaitingTime',
      loggedInAgents: 'LoggedInAgents',
      waitingCalls: 'WaitingCalls',
      breakingAgents: 'BreakingAgents',
      talkingAgents: 'TalkingAgents',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
      readyAgents: 'ReadyAgents',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workingAgents: 'number',
      longestWaitingTime: 'number',
      loggedInAgents: 'number',
      waitingCalls: 'number',
      breakingAgents: 'number',
      talkingAgents: 'number',
      skillGroupName: 'string',
      skillGroupId: 'string',
      readyAgents: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeSkillGroupStatesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  list?: ListRealtimeSkillGroupStatesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      list: { 'type': 'array', 'itemType': ListRealtimeSkillGroupStatesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBodyData extends $tea.Model {
  instanceId?: string;
  description?: string;
  name?: string;
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      description: 'Description',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      description: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDataCallee extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PickOutboundNumbersResponseBodyDataCaller extends $tea.Model {
  number?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      city: 'string',
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

export class ReleaseCallResponseBodyDataCallContextChannelContexts extends $tea.Model {
  releaseInitiator?: string;
  channelState?: string;
  destination?: string;
  userId?: string;
  timestamp?: number;
  associatedData?: { [key: string]: any };
  releaseReason?: string;
  callType?: string;
  jobId?: string;
  channelId?: string;
  originator?: string;
  userExtension?: string;
  static names(): { [key: string]: string } {
    return {
      releaseInitiator: 'ReleaseInitiator',
      channelState: 'ChannelState',
      destination: 'Destination',
      userId: 'UserId',
      timestamp: 'Timestamp',
      associatedData: 'AssociatedData',
      releaseReason: 'ReleaseReason',
      callType: 'CallType',
      jobId: 'JobId',
      channelId: 'ChannelId',
      originator: 'Originator',
      userExtension: 'UserExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseInitiator: 'string',
      channelState: 'string',
      destination: 'string',
      userId: 'string',
      timestamp: 'number',
      associatedData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseReason: 'string',
      callType: 'string',
      jobId: 'string',
      channelId: 'string',
      originator: 'string',
      userExtension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyDataCallContext extends $tea.Model {
  jobId?: string;
  instanceId?: string;
  channelContexts?: ReleaseCallResponseBodyDataCallContextChannelContexts[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      instanceId: 'InstanceId',
      channelContexts: 'ChannelContexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      instanceId: 'string',
      channelContexts: { 'type': 'array', 'itemType': ReleaseCallResponseBodyDataCallContextChannelContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyDataUserContext extends $tea.Model {
  extension?: string;
  workMode?: string;
  deviceId?: string;
  jobId?: string;
  userId?: string;
  breakCode?: string;
  instanceId?: string;
  outboundScenario?: boolean;
  userState?: string;
  signedSkillGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      workMode: 'WorkMode',
      deviceId: 'DeviceId',
      jobId: 'JobId',
      userId: 'UserId',
      breakCode: 'BreakCode',
      instanceId: 'InstanceId',
      outboundScenario: 'OutboundScenario',
      userState: 'UserState',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      workMode: 'string',
      deviceId: 'string',
      jobId: 'string',
      userId: 'string',
      breakCode: 'string',
      instanceId: 'string',
      outboundScenario: 'boolean',
      userState: 'string',
      signedSkillGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCallResponseBodyData extends $tea.Model {
  callContext?: ReleaseCallResponseBodyDataCallContext;
  userContext?: ReleaseCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: ReleaseCallResponseBodyDataCallContext,
      userContext: ReleaseCallResponseBodyDataUserContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginDetailsResponseBodyData extends $tea.Model {
  displayName?: string;
  extension?: string;
  signature?: string;
  sipServerUrl?: string;
  deviceId?: string;
  agentServerUrl?: string;
  userId?: string;
  userKey?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      extension: 'Extension',
      signature: 'Signature',
      sipServerUrl: 'SipServerUrl',
      deviceId: 'DeviceId',
      agentServerUrl: 'AgentServerUrl',
      userId: 'UserId',
      userKey: 'UserKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      extension: 'string',
      signature: 'string',
      sipServerUrl: 'string',
      deviceId: 'string',
      agentServerUrl: 'string',
      userId: 'string',
      userKey: 'string',
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

  async addSkillGroupsToUserWithOptions(request: AddSkillGroupsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AddSkillGroupsToUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSkillGroupsToUserResponse>(await this.doRPCRequest("AddSkillGroupsToUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddSkillGroupsToUserResponse({}));
  }

  async addSkillGroupsToUser(request: AddSkillGroupsToUserRequest): Promise<AddSkillGroupsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSkillGroupsToUserWithOptions(request, runtime);
  }

  async saveWebRTCStatsWithOptions(request: SaveWebRTCStatsRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebRTCStatsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveWebRTCStatsResponse>(await this.doRPCRequest("SaveWebRTCStats", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveWebRTCStatsResponse({}));
  }

  async saveWebRTCStats(request: SaveWebRTCStatsRequest): Promise<SaveWebRTCStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebRTCStatsWithOptions(request, runtime);
  }

  async getMonoRecordingWithOptions(request: GetMonoRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetMonoRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMonoRecordingResponse>(await this.doRPCRequest("GetMonoRecording", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMonoRecordingResponse({}));
  }

  async getMonoRecording(request: GetMonoRecordingRequest): Promise<GetMonoRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonoRecordingWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listAgentStateLogsWithOptions(request: ListAgentStateLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentStateLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAgentStateLogsResponse>(await this.doRPCRequest("ListAgentStateLogs", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListAgentStateLogsResponse({}));
  }

  async listAgentStateLogs(request: ListAgentStateLogsRequest): Promise<ListAgentStateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentStateLogsWithOptions(request, runtime);
  }

  async removePhoneNumberFromSkillGroupsWithOptions(request: RemovePhoneNumberFromSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumberFromSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePhoneNumberFromSkillGroupsResponse>(await this.doRPCRequest("RemovePhoneNumberFromSkillGroups", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePhoneNumberFromSkillGroupsResponse({}));
  }

  async removePhoneNumberFromSkillGroups(request: RemovePhoneNumberFromSkillGroupsRequest): Promise<RemovePhoneNumberFromSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumberFromSkillGroupsWithOptions(request, runtime);
  }

  async listPhoneNumbersWithOptions(request: ListPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhoneNumbersResponse>(await this.doRPCRequest("ListPhoneNumbers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhoneNumbersResponse({}));
  }

  async listPhoneNumbers(request: ListPhoneNumbersRequest): Promise<ListPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneNumbersWithOptions(request, runtime);
  }

  async addNumbersToSkillGroupWithOptions(request: AddNumbersToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddNumbersToSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddNumbersToSkillGroupResponse>(await this.doRPCRequest("AddNumbersToSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddNumbersToSkillGroupResponse({}));
  }

  async addNumbersToSkillGroup(request: AddNumbersToSkillGroupRequest): Promise<AddNumbersToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNumbersToSkillGroupWithOptions(request, runtime);
  }

  async resetAgentStateWithOptions(request: ResetAgentStateRequest, runtime: $Util.RuntimeOptions): Promise<ResetAgentStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAgentStateResponse>(await this.doRPCRequest("ResetAgentState", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAgentStateResponse({}));
  }

  async resetAgentState(request: ResetAgentStateRequest): Promise<ResetAgentStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAgentStateWithOptions(request, runtime);
  }

  async changeWorkModeWithOptions(request: ChangeWorkModeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeWorkModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeWorkModeResponse>(await this.doRPCRequest("ChangeWorkMode", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeWorkModeResponse({}));
  }

  async changeWorkMode(request: ChangeWorkModeRequest): Promise<ChangeWorkModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeWorkModeWithOptions(request, runtime);
  }

  async getTurnCredentialsWithOptions(request: GetTurnCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetTurnCredentialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTurnCredentialsResponse>(await this.doRPCRequest("GetTurnCredentials", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetTurnCredentialsResponse({}));
  }

  async getTurnCredentials(request: GetTurnCredentialsRequest): Promise<GetTurnCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTurnCredentialsWithOptions(request, runtime);
  }

  async addPhoneNumbersWithOptions(request: AddPhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddPhoneNumbersResponse>(await this.doRPCRequest("AddPhoneNumbers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddPhoneNumbersResponse({}));
  }

  async addPhoneNumbers(request: AddPhoneNumbersRequest): Promise<AddPhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneNumbersWithOptions(request, runtime);
  }

  async saveWebRtcInfoWithOptions(request: SaveWebRtcInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveWebRtcInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveWebRtcInfoResponse>(await this.doRPCRequest("SaveWebRtcInfo", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveWebRtcInfoResponse({}));
  }

  async saveWebRtcInfo(request: SaveWebRtcInfoRequest): Promise<SaveWebRtcInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveWebRtcInfoWithOptions(request, runtime);
  }

  async listIntervalSkillGroupReportWithOptions(request: ListIntervalSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalSkillGroupReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIntervalSkillGroupReportResponse>(await this.doRPCRequest("ListIntervalSkillGroupReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIntervalSkillGroupReportResponse({}));
  }

  async listIntervalSkillGroupReport(request: ListIntervalSkillGroupReportRequest): Promise<ListIntervalSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalSkillGroupReportWithOptions(request, runtime);
  }

  async monitorCallWithOptions(request: MonitorCallRequest, runtime: $Util.RuntimeOptions): Promise<MonitorCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MonitorCallResponse>(await this.doRPCRequest("MonitorCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new MonitorCallResponse({}));
  }

  async monitorCall(request: MonitorCallRequest): Promise<MonitorCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.monitorCallWithOptions(request, runtime);
  }

  async removeUsersFromSkillGroupWithOptions(request: RemoveUsersFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUsersFromSkillGroupResponse>(await this.doRPCRequest("RemoveUsersFromSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUsersFromSkillGroupResponse({}));
  }

  async removeUsersFromSkillGroup(request: RemoveUsersFromSkillGroupRequest): Promise<RemoveUsersFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromSkillGroupWithOptions(request, runtime);
  }

  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSkillGroupResponse>(await this.doRPCRequest("DeleteSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSkillGroupResponse({}));
  }

  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  async blindTransferWithOptions(request: BlindTransferRequest, runtime: $Util.RuntimeOptions): Promise<BlindTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BlindTransferResponse>(await this.doRPCRequest("BlindTransfer", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new BlindTransferResponse({}));
  }

  async blindTransfer(request: BlindTransferRequest): Promise<BlindTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.blindTransferWithOptions(request, runtime);
  }

  async listSkillLevelsOfUserWithOptions(request: ListSkillLevelsOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillLevelsOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillLevelsOfUserResponse>(await this.doRPCRequest("ListSkillLevelsOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillLevelsOfUserResponse({}));
  }

  async listSkillLevelsOfUser(request: ListSkillLevelsOfUserRequest): Promise<ListSkillLevelsOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillLevelsOfUserWithOptions(request, runtime);
  }

  async listUnassignedNumbersWithOptions(request: ListUnassignedNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListUnassignedNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUnassignedNumbersResponse>(await this.doRPCRequest("ListUnassignedNumbers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUnassignedNumbersResponse({}));
  }

  async listUnassignedNumbers(request: ListUnassignedNumbersRequest): Promise<ListUnassignedNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUnassignedNumbersWithOptions(request, runtime);
  }

  async getInstanceTrendingReportWithOptions(request: GetInstanceTrendingReportRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceTrendingReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceTrendingReportResponse>(await this.doRPCRequest("GetInstanceTrendingReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceTrendingReportResponse({}));
  }

  async getInstanceTrendingReport(request: GetInstanceTrendingReportRequest): Promise<GetInstanceTrendingReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceTrendingReportWithOptions(request, runtime);
  }

  async listInstancesOfUserWithOptions(request: ListInstancesOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstancesOfUserResponse>(await this.doRPCRequest("ListInstancesOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstancesOfUserResponse({}));
  }

  async listInstancesOfUser(request: ListInstancesOfUserRequest): Promise<ListInstancesOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesOfUserWithOptions(request, runtime);
  }

  async launchSurveyWithOptions(request: LaunchSurveyRequest, runtime: $Util.RuntimeOptions): Promise<LaunchSurveyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LaunchSurveyResponse>(await this.doRPCRequest("LaunchSurvey", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new LaunchSurveyResponse({}));
  }

  async launchSurvey(request: LaunchSurveyRequest): Promise<LaunchSurveyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchSurveyWithOptions(request, runtime);
  }

  async listIvrTrackingDetailsWithOptions(request: ListIvrTrackingDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListIvrTrackingDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIvrTrackingDetailsResponse>(await this.doRPCRequest("ListIvrTrackingDetails", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIvrTrackingDetailsResponse({}));
  }

  async listIvrTrackingDetails(request: ListIvrTrackingDetailsRequest): Promise<ListIvrTrackingDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIvrTrackingDetailsWithOptions(request, runtime);
  }

  async listBriefSkillGroupsWithOptions(request: ListBriefSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListBriefSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBriefSkillGroupsResponse>(await this.doRPCRequest("ListBriefSkillGroups", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListBriefSkillGroupsResponse({}));
  }

  async listBriefSkillGroups(request: ListBriefSkillGroupsRequest): Promise<ListBriefSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBriefSkillGroupsWithOptions(request, runtime);
  }

  async unmuteCallWithOptions(request: UnmuteCallRequest, runtime: $Util.RuntimeOptions): Promise<UnmuteCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnmuteCallResponse>(await this.doRPCRequest("UnmuteCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnmuteCallResponse({}));
  }

  async unmuteCall(request: UnmuteCallRequest): Promise<UnmuteCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unmuteCallWithOptions(request, runtime);
  }

  async modifySkillLevelsOfUserWithOptions(request: ModifySkillLevelsOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillLevelsOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySkillLevelsOfUserResponse>(await this.doRPCRequest("ModifySkillLevelsOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySkillLevelsOfUserResponse({}));
  }

  async modifySkillLevelsOfUser(request: ModifySkillLevelsOfUserRequest): Promise<ModifySkillLevelsOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillLevelsOfUserWithOptions(request, runtime);
  }

  async assignUsersWithOptions(request: AssignUsersRequest, runtime: $Util.RuntimeOptions): Promise<AssignUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssignUsersResponse>(await this.doRPCRequest("AssignUsers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AssignUsersResponse({}));
  }

  async assignUsers(request: AssignUsersRequest): Promise<AssignUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignUsersWithOptions(request, runtime);
  }

  async listUserLevelsOfSkillGroupWithOptions(request: ListUserLevelsOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUserLevelsOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserLevelsOfSkillGroupResponse>(await this.doRPCRequest("ListUserLevelsOfSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserLevelsOfSkillGroupResponse({}));
  }

  async listUserLevelsOfSkillGroup(request: ListUserLevelsOfSkillGroupRequest): Promise<ListUserLevelsOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async updateConfigItemsWithOptions(request: UpdateConfigItemsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConfigItemsResponse>(await this.doRPCRequest("UpdateConfigItems", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConfigItemsResponse({}));
  }

  async updateConfigItems(request: UpdateConfigItemsRequest): Promise<UpdateConfigItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigItemsWithOptions(request, runtime);
  }

  async getCallDetailRecordWithOptions(request: GetCallDetailRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetCallDetailRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCallDetailRecordResponse>(await this.doRPCRequest("GetCallDetailRecord", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCallDetailRecordResponse({}));
  }

  async getCallDetailRecord(request: GetCallDetailRecordRequest): Promise<GetCallDetailRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
  }

  async modifyPhoneNumberWithOptions(request: ModifyPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhoneNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPhoneNumberResponse>(await this.doRPCRequest("ModifyPhoneNumber", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPhoneNumberResponse({}));
  }

  async modifyPhoneNumber(request: ModifyPhoneNumberRequest): Promise<ModifyPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhoneNumberWithOptions(request, runtime);
  }

  async coachCallWithOptions(request: CoachCallRequest, runtime: $Util.RuntimeOptions): Promise<CoachCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CoachCallResponse>(await this.doRPCRequest("CoachCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CoachCallResponse({}));
  }

  async coachCall(request: CoachCallRequest): Promise<CoachCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.coachCallWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async listPrivilegesOfUserWithOptions(request: ListPrivilegesOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivilegesOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPrivilegesOfUserResponse>(await this.doRPCRequest("ListPrivilegesOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPrivilegesOfUserResponse({}));
  }

  async listPrivilegesOfUser(request: ListPrivilegesOfUserRequest): Promise<ListPrivilegesOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivilegesOfUserWithOptions(request, runtime);
  }

  async addPersonalNumbersToUserWithOptions(request: AddPersonalNumbersToUserRequest, runtime: $Util.RuntimeOptions): Promise<AddPersonalNumbersToUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddPersonalNumbersToUserResponse>(await this.doRPCRequest("AddPersonalNumbersToUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddPersonalNumbersToUserResponse({}));
  }

  async addPersonalNumbersToUser(request: AddPersonalNumbersToUserRequest): Promise<AddPersonalNumbersToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPersonalNumbersToUserWithOptions(request, runtime);
  }

  async listHistoricalAgentReportWithOptions(request: ListHistoricalAgentReportRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoricalAgentReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHistoricalAgentReportResponse>(await this.doRPCRequest("ListHistoricalAgentReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHistoricalAgentReportResponse({}));
  }

  async listHistoricalAgentReport(request: ListHistoricalAgentReportRequest): Promise<ListHistoricalAgentReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoricalAgentReportWithOptions(request, runtime);
  }

  async interceptCallWithOptions(request: InterceptCallRequest, runtime: $Util.RuntimeOptions): Promise<InterceptCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InterceptCallResponse>(await this.doRPCRequest("InterceptCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new InterceptCallResponse({}));
  }

  async interceptCall(request: InterceptCallRequest): Promise<InterceptCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.interceptCallWithOptions(request, runtime);
  }

  async listContactFlowsWithOptions(request: ListContactFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListContactFlowsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListContactFlowsResponse>(await this.doRPCRequest("ListContactFlows", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListContactFlowsResponse({}));
  }

  async listContactFlows(request: ListContactFlowsRequest): Promise<ListContactFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactFlowsWithOptions(request, runtime);
  }

  async listPersonalNumbersOfUserWithOptions(request: ListPersonalNumbersOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonalNumbersOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonalNumbersOfUserResponse>(await this.doRPCRequest("ListPersonalNumbersOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonalNumbersOfUserResponse({}));
  }

  async listPersonalNumbersOfUser(request: ListPersonalNumbersOfUserRequest): Promise<ListPersonalNumbersOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonalNumbersOfUserWithOptions(request, runtime);
  }

  async startPredictiveCallWithOptions(request: StartPredictiveCallRequest, runtime: $Util.RuntimeOptions): Promise<StartPredictiveCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartPredictiveCallResponse>(await this.doRPCRequest("StartPredictiveCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartPredictiveCallResponse({}));
  }

  async startPredictiveCall(request: StartPredictiveCallRequest): Promise<StartPredictiveCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPredictiveCallWithOptions(request, runtime);
  }

  async listIntervalInstanceReportWithOptions(request: ListIntervalInstanceReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalInstanceReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIntervalInstanceReportResponse>(await this.doRPCRequest("ListIntervalInstanceReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIntervalInstanceReportResponse({}));
  }

  async listIntervalInstanceReport(request: ListIntervalInstanceReportRequest): Promise<ListIntervalInstanceReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalInstanceReportWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async removeSkillGroupsFromUserWithOptions(request: RemoveSkillGroupsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSkillGroupsFromUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSkillGroupsFromUserResponse>(await this.doRPCRequest("RemoveSkillGroupsFromUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSkillGroupsFromUserResponse({}));
  }

  async removeSkillGroupsFromUser(request: RemoveSkillGroupsFromUserRequest): Promise<RemoveSkillGroupsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSkillGroupsFromUserWithOptions(request, runtime);
  }

  async listRealtimeAgentStatesWithOptions(request: ListRealtimeAgentStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeAgentStatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRealtimeAgentStatesResponse>(await this.doRPCRequest("ListRealtimeAgentStates", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRealtimeAgentStatesResponse({}));
  }

  async listRealtimeAgentStates(request: ListRealtimeAgentStatesRequest): Promise<ListRealtimeAgentStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeAgentStatesWithOptions(request, runtime);
  }

  async launchAuthenticationWithOptions(request: LaunchAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<LaunchAuthenticationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LaunchAuthenticationResponse>(await this.doRPCRequest("LaunchAuthentication", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new LaunchAuthenticationResponse({}));
  }

  async launchAuthentication(request: LaunchAuthenticationRequest): Promise<LaunchAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchAuthenticationWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async getHistoricalInstanceReportWithOptions(request: GetHistoricalInstanceReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoricalInstanceReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHistoricalInstanceReportResponse>(await this.doRPCRequest("GetHistoricalInstanceReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHistoricalInstanceReportResponse({}));
  }

  async getHistoricalInstanceReport(request: GetHistoricalInstanceReportRequest): Promise<GetHistoricalInstanceReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoricalInstanceReportWithOptions(request, runtime);
  }

  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUsersResponse>(await this.doRPCRequest("RemoveUsers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUsersResponse({}));
  }

  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  async startBack2BackCallWithOptions(request: StartBack2BackCallRequest, runtime: $Util.RuntimeOptions): Promise<StartBack2BackCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartBack2BackCallResponse>(await this.doRPCRequest("StartBack2BackCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartBack2BackCallResponse({}));
  }

  async startBack2BackCall(request: StartBack2BackCallRequest): Promise<StartBack2BackCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBack2BackCallWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async removePhoneNumbersFromSkillGroupWithOptions(request: RemovePhoneNumbersFromSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumbersFromSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePhoneNumbersFromSkillGroupResponse>(await this.doRPCRequest("RemovePhoneNumbersFromSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePhoneNumbersFromSkillGroupResponse({}));
  }

  async removePhoneNumbersFromSkillGroup(request: RemovePhoneNumbersFromSkillGroupRequest): Promise<RemovePhoneNumbersFromSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumbersFromSkillGroupWithOptions(request, runtime);
  }

  async completeAttendedTransferWithOptions(request: CompleteAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<CompleteAttendedTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteAttendedTransferResponse>(await this.doRPCRequest("CompleteAttendedTransfer", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteAttendedTransferResponse({}));
  }

  async completeAttendedTransfer(request: CompleteAttendedTransferRequest): Promise<CompleteAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeAttendedTransferWithOptions(request, runtime);
  }

  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.doRPCRequest("ResetUserPassword", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetUserPasswordResponse({}));
  }

  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  async getTurnServerListWithOptions(request: GetTurnServerListRequest, runtime: $Util.RuntimeOptions): Promise<GetTurnServerListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTurnServerListResponse>(await this.doRPCRequest("GetTurnServerList", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetTurnServerListResponse({}));
  }

  async getTurnServerList(request: GetTurnServerListRequest): Promise<GetTurnServerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTurnServerListWithOptions(request, runtime);
  }

  async getNumberLocationWithOptions(request: GetNumberLocationRequest, runtime: $Util.RuntimeOptions): Promise<GetNumberLocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNumberLocationResponse>(await this.doRPCRequest("GetNumberLocation", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNumberLocationResponse({}));
  }

  async getNumberLocation(request: GetNumberLocationRequest): Promise<GetNumberLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumberLocationWithOptions(request, runtime);
  }

  async listRamUsersWithOptions(request: ListRamUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListRamUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRamUsersResponse>(await this.doRPCRequest("ListRamUsers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRamUsersResponse({}));
  }

  async listRamUsers(request: ListRamUsersRequest): Promise<ListRamUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRamUsersWithOptions(request, runtime);
  }

  async muteCallWithOptions(request: MuteCallRequest, runtime: $Util.RuntimeOptions): Promise<MuteCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MuteCallResponse>(await this.doRPCRequest("MuteCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new MuteCallResponse({}));
  }

  async muteCall(request: MuteCallRequest): Promise<MuteCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.muteCallWithOptions(request, runtime);
  }

  async answerCallWithOptions(request: AnswerCallRequest, runtime: $Util.RuntimeOptions): Promise<AnswerCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AnswerCallResponse>(await this.doRPCRequest("AnswerCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AnswerCallResponse({}));
  }

  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  async listIntervalAgentReportWithOptions(request: ListIntervalAgentReportRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervalAgentReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIntervalAgentReportResponse>(await this.doRPCRequest("ListIntervalAgentReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListIntervalAgentReportResponse({}));
  }

  async listIntervalAgentReport(request: ListIntervalAgentReportRequest): Promise<ListIntervalAgentReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervalAgentReportWithOptions(request, runtime);
  }

  async listCallDetailRecordsWithOptions(request: ListCallDetailRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListCallDetailRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCallDetailRecordsResponse>(await this.doRPCRequest("ListCallDetailRecords", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCallDetailRecordsResponse({}));
  }

  async listCallDetailRecords(request: ListCallDetailRecordsRequest): Promise<ListCallDetailRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallDetailRecordsWithOptions(request, runtime);
  }

  async removePhoneNumbersWithOptions(request: RemovePhoneNumbersRequest, runtime: $Util.RuntimeOptions): Promise<RemovePhoneNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePhoneNumbersResponse>(await this.doRPCRequest("RemovePhoneNumbers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePhoneNumbersResponse({}));
  }

  async removePhoneNumbers(request: RemovePhoneNumbersRequest): Promise<RemovePhoneNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePhoneNumbersWithOptions(request, runtime);
  }

  async cancelAttendedTransferWithOptions(request: CancelAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<CancelAttendedTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelAttendedTransferResponse>(await this.doRPCRequest("CancelAttendedTransfer", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CancelAttendedTransferResponse({}));
  }

  async cancelAttendedTransfer(request: CancelAttendedTransferRequest): Promise<CancelAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAttendedTransferWithOptions(request, runtime);
  }

  async takeBreakWithOptions(request: TakeBreakRequest, runtime: $Util.RuntimeOptions): Promise<TakeBreakResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TakeBreakResponse>(await this.doRPCRequest("TakeBreak", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new TakeBreakResponse({}));
  }

  async takeBreak(request: TakeBreakRequest): Promise<TakeBreakResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.takeBreakWithOptions(request, runtime);
  }

  async listHistoricalSkillGroupReportWithOptions(request: ListHistoricalSkillGroupReportRequest, runtime: $Util.RuntimeOptions): Promise<ListHistoricalSkillGroupReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHistoricalSkillGroupReportResponse>(await this.doRPCRequest("ListHistoricalSkillGroupReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHistoricalSkillGroupReportResponse({}));
  }

  async listHistoricalSkillGroupReport(request: ListHistoricalSkillGroupReportRequest): Promise<ListHistoricalSkillGroupReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHistoricalSkillGroupReportWithOptions(request, runtime);
  }

  async sendDtmfSignalingWithOptions(request: SendDtmfSignalingRequest, runtime: $Util.RuntimeOptions): Promise<SendDtmfSignalingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendDtmfSignalingResponse>(await this.doRPCRequest("SendDtmfSignaling", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendDtmfSignalingResponse({}));
  }

  async sendDtmfSignaling(request: SendDtmfSignalingRequest): Promise<SendDtmfSignalingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendDtmfSignalingWithOptions(request, runtime);
  }

  async listRecentCallDetailRecordsWithOptions(request: ListRecentCallDetailRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecentCallDetailRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRecentCallDetailRecordsResponse>(await this.doRPCRequest("ListRecentCallDetailRecords", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRecentCallDetailRecordsResponse({}));
  }

  async listRecentCallDetailRecords(request: ListRecentCallDetailRecordsRequest): Promise<ListRecentCallDetailRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentCallDetailRecordsWithOptions(request, runtime);
  }

  async initiateAttendedTransferWithOptions(request: InitiateAttendedTransferRequest, runtime: $Util.RuntimeOptions): Promise<InitiateAttendedTransferResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitiateAttendedTransferResponse>(await this.doRPCRequest("InitiateAttendedTransfer", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new InitiateAttendedTransferResponse({}));
  }

  async initiateAttendedTransfer(request: InitiateAttendedTransferRequest): Promise<InitiateAttendedTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initiateAttendedTransferWithOptions(request, runtime);
  }

  async makeCallWithOptions(request: MakeCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MakeCallResponse>(await this.doRPCRequest("MakeCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new MakeCallResponse({}));
  }

  async makeCall(request: MakeCallRequest): Promise<MakeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceResponse>(await this.doRPCRequest("GetInstance", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async addUsersToSkillGroupWithOptions(request: AddUsersToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersToSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUsersToSkillGroupResponse>(await this.doRPCRequest("AddUsersToSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddUsersToSkillGroupResponse({}));
  }

  async addUsersToSkillGroup(request: AddUsersToSkillGroupRequest): Promise<AddUsersToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToSkillGroupWithOptions(request, runtime);
  }

  async listConfigItemsWithOptions(request: ListConfigItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConfigItemsResponse>(await this.doRPCRequest("ListConfigItems", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListConfigItemsResponse({}));
  }

  async listConfigItems(request: ListConfigItemsRequest): Promise<ListConfigItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigItemsWithOptions(request, runtime);
  }

  async signInGroupWithOptions(request: SignInGroupRequest, runtime: $Util.RuntimeOptions): Promise<SignInGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SignInGroupResponse>(await this.doRPCRequest("SignInGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SignInGroupResponse({}));
  }

  async signInGroup(request: SignInGroupRequest): Promise<SignInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signInGroupWithOptions(request, runtime);
  }

  async getRealtimeInstanceStatesWithOptions(request: GetRealtimeInstanceStatesRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeInstanceStatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRealtimeInstanceStatesResponse>(await this.doRPCRequest("GetRealtimeInstanceStates", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRealtimeInstanceStatesResponse({}));
  }

  async getRealtimeInstanceStates(request: GetRealtimeInstanceStatesRequest): Promise<GetRealtimeInstanceStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeInstanceStatesWithOptions(request, runtime);
  }

  async modifySkillGroupWithOptions(request: ModifySkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifySkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySkillGroupResponse>(await this.doRPCRequest("ModifySkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySkillGroupResponse({}));
  }

  async modifySkillGroup(request: ModifySkillGroupRequest): Promise<ModifySkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySkillGroupWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserResponse>(await this.doRPCRequest("ModifyUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async addPhoneNumberToSkillGroupsWithOptions(request: AddPhoneNumberToSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AddPhoneNumberToSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddPhoneNumberToSkillGroupsResponse>(await this.doRPCRequest("AddPhoneNumberToSkillGroups", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddPhoneNumberToSkillGroupsResponse({}));
  }

  async addPhoneNumberToSkillGroups(request: AddPhoneNumberToSkillGroupsRequest): Promise<AddPhoneNumberToSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPhoneNumberToSkillGroupsWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevicesResponse>(await this.doRPCRequest("ListDevices", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async retrieveCallWithOptions(request: RetrieveCallRequest, runtime: $Util.RuntimeOptions): Promise<RetrieveCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetrieveCallResponse>(await this.doRPCRequest("RetrieveCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RetrieveCallResponse({}));
  }

  async retrieveCall(request: RetrieveCallRequest): Promise<RetrieveCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retrieveCallWithOptions(request, runtime);
  }

  async listSkillGroupsWithOptions(request: ListSkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupsResponse>(await this.doRPCRequest("ListSkillGroups", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupsResponse({}));
  }

  async listSkillGroups(request: ListSkillGroupsRequest): Promise<ListSkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupsWithOptions(request, runtime);
  }

  async holdCallWithOptions(request: HoldCallRequest, runtime: $Util.RuntimeOptions): Promise<HoldCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HoldCallResponse>(await this.doRPCRequest("HoldCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new HoldCallResponse({}));
  }

  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterDeviceResponse>(await this.doRPCRequest("RegisterDevice", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async removePersonalNumbersFromUserWithOptions(request: RemovePersonalNumbersFromUserRequest, runtime: $Util.RuntimeOptions): Promise<RemovePersonalNumbersFromUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePersonalNumbersFromUserResponse>(await this.doRPCRequest("RemovePersonalNumbersFromUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePersonalNumbersFromUserResponse({}));
  }

  async removePersonalNumbersFromUser(request: RemovePersonalNumbersFromUserRequest): Promise<RemovePersonalNumbersFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePersonalNumbersFromUserWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceResponse>(await this.doRPCRequest("ModifyInstance", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async listOutboundNumbersOfUserWithOptions(request: ListOutboundNumbersOfUserRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundNumbersOfUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOutboundNumbersOfUserResponse>(await this.doRPCRequest("ListOutboundNumbersOfUser", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListOutboundNumbersOfUserResponse({}));
  }

  async listOutboundNumbersOfUser(request: ListOutboundNumbersOfUserRequest): Promise<ListOutboundNumbersOfUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundNumbersOfUserWithOptions(request, runtime);
  }

  async pollUserStatusWithOptions(request: PollUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<PollUserStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PollUserStatusResponse>(await this.doRPCRequest("PollUserStatus", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new PollUserStatusResponse({}));
  }

  async pollUserStatus(request: PollUserStatusRequest): Promise<PollUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pollUserStatusWithOptions(request, runtime);
  }

  async readyForServiceWithOptions(request: ReadyForServiceRequest, runtime: $Util.RuntimeOptions): Promise<ReadyForServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReadyForServiceResponse>(await this.doRPCRequest("ReadyForService", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReadyForServiceResponse({}));
  }

  async readyForService(request: ReadyForServiceRequest): Promise<ReadyForServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.readyForServiceWithOptions(request, runtime);
  }

  async getMultiChannelRecordingWithOptions(request: GetMultiChannelRecordingRequest, runtime: $Util.RuntimeOptions): Promise<GetMultiChannelRecordingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMultiChannelRecordingResponse>(await this.doRPCRequest("GetMultiChannelRecording", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMultiChannelRecordingResponse({}));
  }

  async getMultiChannelRecording(request: GetMultiChannelRecordingRequest): Promise<GetMultiChannelRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultiChannelRecordingWithOptions(request, runtime);
  }

  async bargeInCallWithOptions(request: BargeInCallRequest, runtime: $Util.RuntimeOptions): Promise<BargeInCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BargeInCallResponse>(await this.doRPCRequest("BargeInCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new BargeInCallResponse({}));
  }

  async bargeInCall(request: BargeInCallRequest): Promise<BargeInCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bargeInCallWithOptions(request, runtime);
  }

  async listPhoneNumbersOfSkillGroupWithOptions(request: ListPhoneNumbersOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListPhoneNumbersOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhoneNumbersOfSkillGroupResponse>(await this.doRPCRequest("ListPhoneNumbersOfSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhoneNumbersOfSkillGroupResponse({}));
  }

  async listPhoneNumbersOfSkillGroup(request: ListPhoneNumbersOfSkillGroupRequest): Promise<ListPhoneNumbersOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhoneNumbersOfSkillGroupWithOptions(request, runtime);
  }

  async signOutGroupWithOptions(request: SignOutGroupRequest, runtime: $Util.RuntimeOptions): Promise<SignOutGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SignOutGroupResponse>(await this.doRPCRequest("SignOutGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SignOutGroupResponse({}));
  }

  async signOutGroup(request: SignOutGroupRequest): Promise<SignOutGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signOutGroupWithOptions(request, runtime);
  }

  async saveRTCStatsV2WithOptions(request: SaveRTCStatsV2Request, runtime: $Util.RuntimeOptions): Promise<SaveRTCStatsV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveRTCStatsV2Response>(await this.doRPCRequest("SaveRTCStatsV2", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveRTCStatsV2Response({}));
  }

  async saveRTCStatsV2(request: SaveRTCStatsV2Request): Promise<SaveRTCStatsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveRTCStatsV2WithOptions(request, runtime);
  }

  async getHistoricalCallerReportWithOptions(request: GetHistoricalCallerReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoricalCallerReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHistoricalCallerReportResponse>(await this.doRPCRequest("GetHistoricalCallerReport", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetHistoricalCallerReportResponse({}));
  }

  async getHistoricalCallerReport(request: GetHistoricalCallerReportRequest): Promise<GetHistoricalCallerReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoricalCallerReportWithOptions(request, runtime);
  }

  async modifyUserLevelsOfSkillGroupWithOptions(request: ModifyUserLevelsOfSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserLevelsOfSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserLevelsOfSkillGroupResponse>(await this.doRPCRequest("ModifyUserLevelsOfSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserLevelsOfSkillGroupResponse({}));
  }

  async modifyUserLevelsOfSkillGroup(request: ModifyUserLevelsOfSkillGroupRequest): Promise<ModifyUserLevelsOfSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  async saveTerminalLogWithOptions(request: SaveTerminalLogRequest, runtime: $Util.RuntimeOptions): Promise<SaveTerminalLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveTerminalLogResponse>(await this.doRPCRequest("SaveTerminalLog", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new SaveTerminalLogResponse({}));
  }

  async saveTerminalLog(request: SaveTerminalLogRequest): Promise<SaveTerminalLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTerminalLogWithOptions(request, runtime);
  }

  async listRealtimeSkillGroupStatesWithOptions(request: ListRealtimeSkillGroupStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRealtimeSkillGroupStatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRealtimeSkillGroupStatesResponse>(await this.doRPCRequest("ListRealtimeSkillGroupStates", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRealtimeSkillGroupStatesResponse({}));
  }

  async listRealtimeSkillGroupStates(request: ListRealtimeSkillGroupStatesRequest): Promise<ListRealtimeSkillGroupStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRealtimeSkillGroupStatesWithOptions(request, runtime);
  }

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.doRPCRequest("CreateSkillGroup", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async pickOutboundNumbersWithOptions(request: PickOutboundNumbersRequest, runtime: $Util.RuntimeOptions): Promise<PickOutboundNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PickOutboundNumbersResponse>(await this.doRPCRequest("PickOutboundNumbers", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new PickOutboundNumbersResponse({}));
  }

  async pickOutboundNumbers(request: PickOutboundNumbersRequest): Promise<PickOutboundNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pickOutboundNumbersWithOptions(request, runtime);
  }

  async releaseCallWithOptions(request: ReleaseCallRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseCallResponse>(await this.doRPCRequest("ReleaseCall", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseCallResponse({}));
  }

  async releaseCall(request: ReleaseCallRequest): Promise<ReleaseCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCallWithOptions(request, runtime);
  }

  async getLoginDetailsWithOptions(request: GetLoginDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoginDetailsResponse>(await this.doRPCRequest("GetLoginDetails", "2020-07-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginDetailsResponse({}));
  }

  async getLoginDetails(request: GetLoginDetailsRequest): Promise<GetLoginDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginDetailsWithOptions(request, runtime);
  }

}
