// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActiveDeviceRequest extends $tea.Model {
  activeCode?: string;
  deviceVersion?: string;
  IP?: string;
  mac?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      activeCode: 'ActiveCode',
      deviceVersion: 'DeviceVersion',
      IP: 'IP',
      mac: 'Mac',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCode: 'string',
      deviceVersion: 'string',
      IP: 'string',
      mac: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveMeetingRequest extends $tea.Model {
  meetingCode?: string;
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: ActiveMeetingResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: ActiveMeetingResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDeviceRequest extends $tea.Model {
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDeviceResponseBody extends $tea.Model {
  devices?: BatchCreateDeviceResponseBodyDevices[];
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': BatchCreateDeviceResponseBodyDevices },
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchCreateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchCreateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingRequest extends $tea.Model {
  meetingCode?: string;
  password?: string;
  rtcEngine?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      password: 'Password',
      rtcEngine: 'RtcEngine',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      password: 'string',
      rtcEngine: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: BatchJoinMeetingResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: BatchJoinMeetingResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchJoinMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchJoinMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalRequest extends $tea.Model {
  meetingCode?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: BatchJoinMeetingInternationalResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: BatchJoinMeetingInternationalResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchJoinMeetingInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchJoinMeetingInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallDeviceRequest extends $tea.Model {
  inviteName?: string;
  joinMeetingFlag?: boolean;
  meetingCode?: string;
  operateUserId?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      inviteName: 'InviteName',
      joinMeetingFlag: 'JoinMeetingFlag',
      meetingCode: 'MeetingCode',
      operateUserId: 'OperateUserId',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteName: 'string',
      joinMeetingFlag: 'boolean',
      meetingCode: 'string',
      operateUserId: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallDeviceResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  messageId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      messageId: 'MessageId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      messageId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CallDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CallDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CallDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConferenceToLiveRequest extends $tea.Model {
  liveName?: string;
  meetingUUID?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveName: 'LiveName',
      meetingUUID: 'MeetingUUID',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveName: 'string',
      meetingUUID: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConferenceToLiveResponseBody extends $tea.Model {
  errorCode?: number;
  liveInfo?: ConferenceToLiveResponseBodyLiveInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      liveInfo: 'LiveInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      liveInfo: ConferenceToLiveResponseBodyLiveInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConferenceToLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConferenceToLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConferenceToLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceMeetingRequest extends $tea.Model {
  meetingName?: string;
  openPasswordtag?: boolean;
  password?: string;
  SN?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      meetingName: 'MeetingName',
      openPasswordtag: 'OpenPasswordtag',
      password: 'Password',
      SN: 'SN',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingName: 'string',
      openPasswordtag: 'boolean',
      password: 'string',
      SN: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceMeetingResponseBody extends $tea.Model {
  devices?: CreateDeviceMeetingResponseBodyDevices;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: CreateDeviceMeetingResponseBodyDevices,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluationRequest extends $tea.Model {
  createTime?: number;
  description?: string;
  evaluation?: string;
  meetingUUID?: string;
  memberUUID?: string;
  memo?: string;
  score?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      evaluation: 'Evaluation',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      memo: 'Memo',
      score: 'Score',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      evaluation: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      memo: 'string',
      score: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluationResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEvaluationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRequest extends $tea.Model {
  liveName?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveName: 'LiveName',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveName: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBody extends $tea.Model {
  errorCode?: number;
  liveInfo?: CreateLiveResponseBodyLiveInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      liveInfo: 'LiveInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      liveInfo: CreateLiveResponseBodyLiveInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingRequest extends $tea.Model {
  masterEnableFlag?: boolean;
  meetingMode?: string;
  meetingName?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      masterEnableFlag: 'MasterEnableFlag',
      meetingMode: 'MeetingMode',
      meetingName: 'MeetingName',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterEnableFlag: 'boolean',
      meetingMode: 'string',
      meetingName: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: CreateMeetingResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: CreateMeetingResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingInternationalRequest extends $tea.Model {
  meetingName?: string;
  openPasswordFlag?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingName: 'MeetingName',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingName: 'string',
      openPasswordFlag: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: CreateMeetingInternationalResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: CreateMeetingInternationalResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMeetingInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMeetingInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  count?: number;
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      userInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'string',
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

export class CreateUserInternationalRequest extends $tea.Model {
  count?: number;
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      userInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomGonggeLayoutRequest extends $tea.Model {
  layoutSolution?: string;
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      layoutSolution: 'LayoutSolution',
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutSolution: 'string',
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomGonggeLayoutResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomGonggeLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CustomGonggeLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CustomGonggeLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomLayoutRequest extends $tea.Model {
  layoutInfo?: string;
  liveUUID?: string;
  static names(): { [key: string]: string } {
    return {
      layoutInfo: 'LayoutInfo',
      liveUUID: 'LiveUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutInfo: 'string',
      liveUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomLayoutResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CustomLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CustomLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  groupId?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRequest extends $tea.Model {
  liveUUID?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMeetingRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  count?: number;
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      userInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveSpeakerRequest extends $tea.Model {
  enableSpeakerFlag?: boolean;
  liveUUID?: string;
  static names(): { [key: string]: string } {
    return {
      enableSpeakerFlag: 'EnableSpeakerFlag',
      liveUUID: 'LiveUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSpeakerFlag: 'boolean',
      liveUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveSpeakerResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveSpeakerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLiveSpeakerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLiveSpeakerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDeviceMeetingRequest extends $tea.Model {
  meetingUUID?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDeviceMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndDeviceMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EndDeviceMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EndDeviceMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndLiveRequest extends $tea.Model {
  liveUUID?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndLiveResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EndLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EndLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $tea.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetAccountInfoResponseBodyAccountInfo,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceConcurrencyStatisticsResponseBody extends $tea.Model {
  data?: GetConferenceConcurrencyStatisticsResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetConferenceConcurrencyStatisticsResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceConcurrencyStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConferenceConcurrencyStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConferenceConcurrencyStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceActiveCodeRequest extends $tea.Model {
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceActiveCodeResponseBody extends $tea.Model {
  devices?: GetDeviceActiveCodeResponseBodyDevices[];
  errorCode?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      errorCode: 'ErrorCode',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': GetDeviceActiveCodeResponseBodyDevices },
      errorCode: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceActiveCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceActiveCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceActiveCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoRequest extends $tea.Model {
  castScreenCode?: string;
  groupId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      castScreenCode: 'CastScreenCode',
      groupId: 'GroupId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castScreenCode: 'string',
      groupId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBody extends $tea.Model {
  device?: GetDeviceInfoResponseBodyDevice;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetDeviceInfoResponseBodyDevice,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListRequest extends $tea.Model {
  castScreenCode?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      castScreenCode: 'CastScreenCode',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castScreenCode: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBody extends $tea.Model {
  data?: GetDeviceListResponseBodyData[];
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDeviceListResponseBodyData },
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTokenRequest extends $tea.Model {
  SN?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      SN: 'SN',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SN: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTokenResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrtnTokenResponseBody extends $tea.Model {
  errorCode?: number;
  grtnInfo?: GetGrtnTokenResponseBodyGrtnInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      grtnInfo: 'GrtnInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      grtnInfo: GetGrtnTokenResponseBodyGrtnInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrtnTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGrtnTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGrtnTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: GetMeetingResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: GetMeetingResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingConcurrencyRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingConcurrencyResponseBody extends $tea.Model {
  data?: GetMeetingConcurrencyResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMeetingConcurrencyResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingConcurrencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMeetingConcurrencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMeetingConcurrencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingInternationalRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: GetMeetingInternationalResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: GetMeetingInternationalResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMeetingInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMeetingInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingMemberRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingMemberResponseBody extends $tea.Model {
  errorCode?: number;
  members?: { [key: string]: any };
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      members: 'Members',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      members: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMeetingMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMeetingMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberStatusRequest extends $tea.Model {
  meetingUUID?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberStatusResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMemberStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMemberStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScreenVerificationCodeRequest extends $tea.Model {
  castScreenCode?: string;
  static names(): { [key: string]: string } {
    return {
      castScreenCode: 'CastScreenCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castScreenCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScreenVerificationCodeResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  screenVerificationCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      screenVerificationCode: 'ScreenVerificationCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      screenVerificationCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScreenVerificationCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScreenVerificationCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScreenVerificationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticRequest extends $tea.Model {
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

export class GetStatisticResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  statisticInfo?: GetStatisticResponseBodyStatisticInfo;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      statisticInfo: 'StatisticInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      statisticInfo: GetStatisticResponseBodyStatisticInfo,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  userInfo?: GetUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userInfo: GetUserResponseBodyUserInfo,
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

export class GetWebSocketTokenRequest extends $tea.Model {
  oldToken?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      oldToken: 'OldToken',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldToken: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSocketTokenResponseBody extends $tea.Model {
  data?: GetWebSocketTokenResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWebSocketTokenResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSocketTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebSocketTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebSocketTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUserRequest extends $tea.Model {
  meetingUUID?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUserResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InviteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InviteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinDeviceMeetingRequest extends $tea.Model {
  meetingCode?: string;
  password?: string;
  SN?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      password: 'Password',
      SN: 'SN',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      password: 'string',
      SN: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinDeviceMeetingResponseBody extends $tea.Model {
  device?: JoinDeviceMeetingResponseBodyDevice;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: JoinDeviceMeetingResponseBodyDevice,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinDeviceMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinDeviceMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinDeviceMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveRequest extends $tea.Model {
  liveUUID?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: JoinLiveResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: JoinLiveResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingRequest extends $tea.Model {
  meetingCode?: string;
  password?: string;
  rtcEngine?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      password: 'Password',
      rtcEngine: 'RtcEngine',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      password: 'string',
      rtcEngine: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: JoinMeetingResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: JoinMeetingResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinMeetingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinMeetingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingInternationalRequest extends $tea.Model {
  meetingCode?: string;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: JoinMeetingInternationalResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: JoinMeetingInternationalResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinMeetingInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinMeetingInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceDevicesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceDevicesResponseBody extends $tea.Model {
  conferencesDatas?: ListConferenceDevicesResponseBodyConferencesDatas;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      conferencesDatas: 'ConferencesDatas',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferencesDatas: ListConferenceDevicesResponseBodyConferencesDatas,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConferenceDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConferenceDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIpRequest extends $tea.Model {
  groupId?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIpResponseBody extends $tea.Model {
  devices?: ListDeviceIpResponseBodyDevices[];
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListDeviceIpResponseBodyDevices },
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  castScreenCode?: string;
  pageNumber?: number;
  pageSize?: number;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      castScreenCode: 'CastScreenCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castScreenCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  data?: ListDevicesResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDevicesResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ListEvaluationsResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  userEvaluation?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userEvaluation: 'UserEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userEvaluation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEvaluationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEvaluationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvStatisticsRequest extends $tea.Model {
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

export class ListIsvStatisticsResponseBody extends $tea.Model {
  data?: ListIsvStatisticsResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIsvStatisticsResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIsvStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIsvStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $tea.Model {
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $tea.Model {
  errorCode?: number;
  meetingInfo?: ListMembersResponseBodyMeetingInfo;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      meetingInfo: 'MeetingInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      meetingInfo: ListMembersResponseBodyMeetingInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
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

export class ListUsersResponseBody extends $tea.Model {
  data?: ListUsersResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUsersResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ModifyDeviceBackgroundRequest extends $tea.Model {
  picture?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      picture: 'Picture',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picture: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceBackgroundResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceBackgroundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceBackgroundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceBackgroundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordRequest extends $tea.Model {
  meetingUUID?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMeetingPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMeetingPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordInternationalRequest extends $tea.Model {
  meetingUUID?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordInternationalResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMeetingPasswordInternationalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMeetingPasswordInternationalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMeetingPasswordInternationalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingMemberActionRequest extends $tea.Model {
  endTime?: number;
  meetingUUID?: string;
  meetingUnitKey?: string;
  memberUUID?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      meetingUUID: 'MeetingUUID',
      meetingUnitKey: 'MeetingUnitKey',
      memberUUID: 'MemberUUID',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      meetingUUID: 'string',
      meetingUnitKey: 'string',
      memberUUID: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingMemberActionResponseBody extends $tea.Model {
  audioStatus?: number;
  errorCode?: number;
  errorCodeCount?: number;
  errorCodeList?: QueryMeetingMemberActionResponseBodyErrorCodeList[];
  meetingStatus?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  videoStatus?: number;
  static names(): { [key: string]: string } {
    return {
      audioStatus: 'AudioStatus',
      errorCode: 'ErrorCode',
      errorCodeCount: 'ErrorCodeCount',
      errorCodeList: 'ErrorCodeList',
      meetingStatus: 'MeetingStatus',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      videoStatus: 'VideoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStatus: 'number',
      errorCode: 'number',
      errorCodeCount: 'number',
      errorCodeList: { 'type': 'array', 'itemType': QueryMeetingMemberActionResponseBodyErrorCodeList },
      meetingStatus: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      videoStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingMemberActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMeetingMemberActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMeetingMemberActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceScreenCodeRequest extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceScreenCodeResponseBody extends $tea.Model {
  data?: RefreshDeviceScreenCodeResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RefreshDeviceScreenCodeResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceScreenCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshDeviceScreenCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshDeviceScreenCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  deviceVersion?: string;
  IP?: string;
  mac?: string;
  SN?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      deviceVersion: 'DeviceVersion',
      IP: 'IP',
      mac: 'Mac',
      SN: 'SN',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceVersion: 'string',
      IP: 'string',
      mac: 'string',
      SN: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $tea.Model {
  deviceInfo?: RegisterDeviceResponseBodyDeviceInfo;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: RegisterDeviceResponseBodyDeviceInfo,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class RegisterUemDeviceRequest extends $tea.Model {
  deviceId?: string;
  deviceVersion?: string;
  groupId?: string;
  groupName?: string;
  IP?: string;
  mac?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceVersion: 'DeviceVersion',
      groupId: 'GroupId',
      groupName: 'GroupName',
      IP: 'IP',
      mac: 'Mac',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceVersion: 'string',
      groupId: 'string',
      groupName: 'string',
      IP: 'string',
      mac: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponseBody extends $tea.Model {
  deviceInfo?: RegisterUemDeviceResponseBodyDeviceInfo;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: RegisterUemDeviceResponseBodyDeviceInfo,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterUemDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterUemDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMeetingCommandRequest extends $tea.Model {
  command?: string;
  meetingUUID?: string;
  memberUUID?: string;
  operatorMemberUUID?: string;
  sendType?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      operatorMemberUUID: 'OperatorMemberUUID',
      sendType: 'SendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      operatorMemberUUID: 'string',
      sendType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMeetingCommandResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMeetingCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMeetingCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMeetingCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartRequest extends $tea.Model {
  castScreenCode?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      castScreenCode: 'CastScreenCode',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castScreenCode: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBody extends $tea.Model {
  data?: SendScreenStartResponseBodyData;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SendScreenStartResponseBodyData,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendScreenStartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendScreenStartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveRequest extends $tea.Model {
  layoutInfo?: string;
  liveUUID?: string;
  pushInfo?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutInfo: 'LayoutInfo',
      liveUUID: 'LiveUUID',
      pushInfo: 'PushInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutInfo: 'string',
      liveUUID: 'string',
      pushInfo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartLiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartLiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceHeartBeatRequest extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceHeartBeatResponseBody extends $tea.Model {
  deviceInfo?: UpdateDeviceHeartBeatResponseBodyDeviceInfo;
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UpdateDeviceHeartBeatResponseBodyDeviceInfo,
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceHeartBeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceHeartBeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceHeartBeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceStartupPictureRequest extends $tea.Model {
  picture?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      picture: 'Picture',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picture: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceStartupPictureResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceStartupPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceStartupPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceStartupPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGonggeLayoutRequest extends $tea.Model {
  meetingUUID?: string;
  value?: string;
  videoCount?: string;
  static names(): { [key: string]: string } {
    return {
      meetingUUID: 'MeetingUUID',
      value: 'Value',
      videoCount: 'VideoCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingUUID: 'string',
      value: 'string',
      videoCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGonggeLayoutResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGonggeLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGonggeLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGonggeLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLivePasswordRequest extends $tea.Model {
  liveUUID?: string;
  openPasswordFlag?: boolean;
  password?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
      openPasswordFlag: 'OpenPasswordFlag',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
      openPasswordFlag: 'boolean',
      password: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLivePasswordResponseBody extends $tea.Model {
  errorCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLivePasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLivePasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLivePasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveMeetingResponseBodyMeetingInfo extends $tea.Model {
  meetingCode?: string;
  validTime?: number;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      validTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateDeviceResponseBodyDevices extends $tea.Model {
  activeCode?: string;
  deviceErrorCode?: number;
  deviceMessage?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      activeCode: 'ActiveCode',
      deviceErrorCode: 'DeviceErrorCode',
      deviceMessage: 'DeviceMessage',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCode: 'string',
      deviceErrorCode: 'number',
      deviceMessage: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingResponseBodyMeetingInfoMemberList extends $tea.Model {
  meetingToken?: string;
  memberUUID?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingToken: 'MeetingToken',
      memberUUID: 'MemberUUID',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingToken: 'string',
      memberUUID: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingResponseBodyMeetingInfoSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingResponseBodyMeetingInfo extends $tea.Model {
  clientAppId?: string;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingUUID?: string;
  memberList?: BatchJoinMeetingResponseBodyMeetingInfoMemberList[];
  slsInfo?: BatchJoinMeetingResponseBodyMeetingInfoSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingUUID: 'MeetingUUID',
      memberList: 'MemberList',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingUUID: 'string',
      memberList: { 'type': 'array', 'itemType': BatchJoinMeetingResponseBodyMeetingInfoMemberList },
      slsInfo: BatchJoinMeetingResponseBodyMeetingInfoSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalResponseBodyMeetingInfoMemberList extends $tea.Model {
  meetingToken?: string;
  memberUUID?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      meetingToken: 'MeetingToken',
      memberUUID: 'MemberUUID',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingToken: 'string',
      memberUUID: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalResponseBodyMeetingInfoSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJoinMeetingInternationalResponseBodyMeetingInfo extends $tea.Model {
  clientAppId?: string;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingToken?: string;
  meetingUUID?: string;
  memberList?: BatchJoinMeetingInternationalResponseBodyMeetingInfoMemberList[];
  slsInfo?: BatchJoinMeetingInternationalResponseBodyMeetingInfoSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingToken: 'MeetingToken',
      meetingUUID: 'MeetingUUID',
      memberList: 'MemberList',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingToken: 'string',
      meetingUUID: 'string',
      memberList: { 'type': 'array', 'itemType': BatchJoinMeetingInternationalResponseBodyMeetingInfoMemberList },
      slsInfo: BatchJoinMeetingInternationalResponseBodyMeetingInfoSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConferenceToLiveResponseBodyLiveInfo extends $tea.Model {
  liveUUID?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceMeetingResponseBodyDevices extends $tea.Model {
  meetingCode?: string;
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveResponseBodyLiveInfo extends $tea.Model {
  liveUUID?: string;
  streamUUID?: string;
  static names(): { [key: string]: string } {
    return {
      liveUUID: 'LiveUUID',
      streamUUID: 'StreamUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveUUID: 'string',
      streamUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingResponseBodyMeetingInfo extends $tea.Model {
  meetingCode?: string;
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingInternationalResponseBodyMeetingInfo extends $tea.Model {
  meetingCode?: string;
  meetingUUID?: string;
  static names(): { [key: string]: string } {
    return {
      meetingCode: 'MeetingCode',
      meetingUUID: 'MeetingUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingCode: 'string',
      meetingUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyAccountInfo extends $tea.Model {
  accountApplicationMax?: number;
  accountApplicationNumber?: number;
  accountConcurrentMax?: number;
  static names(): { [key: string]: string } {
    return {
      accountApplicationMax: 'AccountApplicationMax',
      accountApplicationNumber: 'AccountApplicationNumber',
      accountConcurrentMax: 'AccountConcurrentMax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountApplicationMax: 'number',
      accountApplicationNumber: 'number',
      accountConcurrentMax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConferenceConcurrencyStatisticsResponseBodyData extends $tea.Model {
  buyConcurrency?: number;
  currentMeeting?: number;
  useConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      buyConcurrency: 'BuyConcurrency',
      currentMeeting: 'CurrentMeeting',
      useConcurrency: 'UseConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyConcurrency: 'number',
      currentMeeting: 'number',
      useConcurrency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceActiveCodeResponseBodyDevices extends $tea.Model {
  activeCode?: string;
  deviceErrorCode?: number;
  deviceMessage?: string;
  SN?: string;
  static names(): { [key: string]: string } {
    return {
      activeCode: 'ActiveCode',
      deviceErrorCode: 'DeviceErrorCode',
      deviceMessage: 'DeviceMessage',
      SN: 'SN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCode: 'string',
      deviceErrorCode: 'number',
      deviceMessage: 'string',
      SN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyDevice extends $tea.Model {
  activationCode?: string;
  castScreenCode?: string;
  IP?: string;
  mac?: string;
  port?: string;
  sn?: string;
  ssid?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      activationCode: 'ActivationCode',
      castScreenCode: 'CastScreenCode',
      IP: 'IP',
      mac: 'Mac',
      port: 'Port',
      sn: 'Sn',
      ssid: 'Ssid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCode: 'string',
      castScreenCode: 'string',
      IP: 'string',
      mac: 'string',
      port: 'string',
      sn: 'string',
      ssid: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyData extends $tea.Model {
  activationCode?: string;
  castScreenCode?: string;
  IP?: string;
  mac?: string;
  port?: string;
  SN?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      activationCode: 'ActivationCode',
      castScreenCode: 'CastScreenCode',
      IP: 'IP',
      mac: 'Mac',
      port: 'Port',
      SN: 'SN',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCode: 'string',
      castScreenCode: 'string',
      IP: 'string',
      mac: 'string',
      port: 'string',
      SN: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrtnTokenResponseBodyGrtnInfo extends $tea.Model {
  agent?: string;
  appId?: string;
  channelId?: string;
  gslb?: string;
  nonce?: string;
  timestamp?: number;
  token?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      appId: 'AppId',
      channelId: 'ChannelId',
      gslb: 'Gslb',
      nonce: 'Nonce',
      timestamp: 'Timestamp',
      token: 'Token',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      appId: 'string',
      channelId: 'string',
      gslb: 'string',
      nonce: 'string',
      timestamp: 'number',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingResponseBodyMeetingInfoMemberList extends $tea.Model {
  memberUUID?: string;
  status?: string;
  userAvatarUrl?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      memberUUID: 'MemberUUID',
      status: 'Status',
      userAvatarUrl: 'UserAvatarUrl',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUUID: 'string',
      status: 'string',
      userAvatarUrl: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingResponseBodyMeetingInfo extends $tea.Model {
  createTime?: number;
  meetingCode?: string;
  meetingName?: string;
  meetingUUID?: string;
  memberList?: GetMeetingResponseBodyMeetingInfoMemberList[];
  password?: string;
  userId?: string;
  validTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      meetingCode: 'MeetingCode',
      meetingName: 'MeetingName',
      meetingUUID: 'MeetingUUID',
      memberList: 'MemberList',
      password: 'Password',
      userId: 'UserId',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      meetingCode: 'string',
      meetingName: 'string',
      meetingUUID: 'string',
      memberList: { 'type': 'array', 'itemType': GetMeetingResponseBodyMeetingInfoMemberList },
      password: 'string',
      userId: 'string',
      validTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingConcurrencyResponseBodyData extends $tea.Model {
  offlineCount?: number;
  onlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      offlineCount: 'OfflineCount',
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineCount: 'number',
      onlineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingInternationalResponseBodyMeetingInfoMemberList extends $tea.Model {
  memberUUID?: string;
  status?: string;
  userAvatarUrl?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      memberUUID: 'MemberUUID',
      status: 'Status',
      userAvatarUrl: 'UserAvatarUrl',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUUID: 'string',
      status: 'string',
      userAvatarUrl: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingInternationalResponseBodyMeetingInfo extends $tea.Model {
  createTime?: number;
  meetingCode?: string;
  meetingName?: string;
  meetingUUID?: string;
  memberList?: GetMeetingInternationalResponseBodyMeetingInfoMemberList[];
  password?: string;
  userId?: string;
  validTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      meetingCode: 'MeetingCode',
      meetingName: 'MeetingName',
      meetingUUID: 'MeetingUUID',
      memberList: 'MemberList',
      password: 'Password',
      userId: 'UserId',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      meetingCode: 'string',
      meetingName: 'string',
      meetingUUID: 'string',
      memberList: { 'type': 'array', 'itemType': GetMeetingInternationalResponseBodyMeetingInfoMemberList },
      password: 'string',
      userId: 'string',
      validTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticResponseBodyStatisticInfo extends $tea.Model {
  maxConcurrency?: number;
  meetingDuration?: number;
  meetingNumber?: number;
  memberNumber?: number;
  static names(): { [key: string]: string } {
    return {
      maxConcurrency: 'MaxConcurrency',
      meetingDuration: 'MeetingDuration',
      meetingNumber: 'MeetingNumber',
      memberNumber: 'MemberNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxConcurrency: 'number',
      meetingDuration: 'number',
      meetingNumber: 'number',
      memberNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserInfo extends $tea.Model {
  createTime?: number;
  departId?: string;
  departName?: string;
  groupId?: string;
  groupName?: string;
  jobName?: string;
  userAvatarUrl?: string;
  userEmail?: string;
  userId?: string;
  userMobile?: string;
  userName?: string;
  userTel?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      departId: 'DepartId',
      departName: 'DepartName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      jobName: 'JobName',
      userAvatarUrl: 'UserAvatarUrl',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userMobile: 'UserMobile',
      userName: 'UserName',
      userTel: 'UserTel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      departId: 'string',
      departName: 'string',
      groupId: 'string',
      groupName: 'string',
      jobName: 'string',
      userAvatarUrl: 'string',
      userEmail: 'string',
      userId: 'string',
      userMobile: 'string',
      userName: 'string',
      userTel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSocketTokenResponseBodyData extends $tea.Model {
  authWsUrl?: string;
  token?: string;
  wsOuterReConnTime?: string;
  static names(): { [key: string]: string } {
    return {
      authWsUrl: 'AuthWsUrl',
      token: 'Token',
      wsOuterReConnTime: 'WsOuterReConnTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsUrl: 'string',
      token: 'string',
      wsOuterReConnTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinDeviceMeetingResponseBodyDeviceSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinDeviceMeetingResponseBodyDevice extends $tea.Model {
  clientAppId?: string;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingToken?: string;
  meetingUUID?: string;
  memberUUID?: string;
  slsInfo?: JoinDeviceMeetingResponseBodyDeviceSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingToken: 'MeetingToken',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingToken: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      slsInfo: JoinDeviceMeetingResponseBodyDeviceSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBodyMeetingInfoSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinLiveResponseBodyMeetingInfo extends $tea.Model {
  clientAppId?: string;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingToken?: string;
  meetingUUID?: string;
  memberUUID?: string;
  slsInfo?: JoinLiveResponseBodyMeetingInfoSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingToken: 'MeetingToken',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingToken: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      slsInfo: JoinLiveResponseBodyMeetingInfoSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingResponseBodyMeetingInfoGrtnInfo extends $tea.Model {
  agent?: string;
  appId?: string;
  channelId?: number;
  gslb?: string[];
  nonce?: string;
  timestamp?: number;
  token?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      appId: 'AppId',
      channelId: 'ChannelId',
      gslb: 'Gslb',
      nonce: 'Nonce',
      timestamp: 'Timestamp',
      token: 'Token',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      appId: 'string',
      channelId: 'number',
      gslb: { 'type': 'array', 'itemType': 'string' },
      nonce: 'string',
      timestamp: 'number',
      token: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingResponseBodyMeetingInfoSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingResponseBodyMeetingInfo extends $tea.Model {
  clientAppId?: string;
  grtnInfo?: JoinMeetingResponseBodyMeetingInfoGrtnInfo;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingToken?: string;
  meetingUUID?: string;
  memberUUID?: string;
  slsInfo?: JoinMeetingResponseBodyMeetingInfoSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      grtnInfo: 'GrtnInfo',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingToken: 'MeetingToken',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      grtnInfo: JoinMeetingResponseBodyMeetingInfoGrtnInfo,
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingToken: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      slsInfo: JoinMeetingResponseBodyMeetingInfoSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingInternationalResponseBodyMeetingInfoSlsInfo extends $tea.Model {
  logServiceEndpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logstore: 'Logstore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinMeetingInternationalResponseBodyMeetingInfo extends $tea.Model {
  clientAppId?: string;
  meetingAppId?: string;
  meetingCode?: string;
  meetingDomain?: string;
  meetingToken?: string;
  meetingUUID?: string;
  memberUUID?: string;
  slsInfo?: JoinMeetingInternationalResponseBodyMeetingInfoSlsInfo;
  static names(): { [key: string]: string } {
    return {
      clientAppId: 'ClientAppId',
      meetingAppId: 'MeetingAppId',
      meetingCode: 'MeetingCode',
      meetingDomain: 'MeetingDomain',
      meetingToken: 'MeetingToken',
      meetingUUID: 'MeetingUUID',
      memberUUID: 'MemberUUID',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAppId: 'string',
      meetingAppId: 'string',
      meetingCode: 'string',
      meetingDomain: 'string',
      meetingToken: 'string',
      meetingUUID: 'string',
      memberUUID: 'string',
      slsInfo: JoinMeetingInternationalResponseBodyMeetingInfoSlsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceDevicesResponseBodyConferencesDatasConferences extends $tea.Model {
  activationCode?: string;
  castScreenCode?: string;
  conferenceCode?: string;
  conferenceName?: string;
  createTime?: string;
  deviceModel?: string;
  manufacturer?: string;
  pictureUrl?: string;
  SN?: string;
  startUpPictureUrl?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activationCode: 'ActivationCode',
      castScreenCode: 'CastScreenCode',
      conferenceCode: 'ConferenceCode',
      conferenceName: 'ConferenceName',
      createTime: 'CreateTime',
      deviceModel: 'DeviceModel',
      manufacturer: 'Manufacturer',
      pictureUrl: 'PictureUrl',
      SN: 'SN',
      startUpPictureUrl: 'StartUpPictureUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCode: 'string',
      castScreenCode: 'string',
      conferenceCode: 'string',
      conferenceName: 'string',
      createTime: 'string',
      deviceModel: 'string',
      manufacturer: 'string',
      pictureUrl: 'string',
      SN: 'string',
      startUpPictureUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConferenceDevicesResponseBodyConferencesDatas extends $tea.Model {
  conferences?: ListConferenceDevicesResponseBodyConferencesDatasConferences[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      conferences: 'Conferences',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferences: { 'type': 'array', 'itemType': ListConferenceDevicesResponseBodyConferencesDatasConferences },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceIpResponseBodyDevices extends $tea.Model {
  ip?: string;
  mac?: string;
  port?: string;
  screenCode?: string;
  ssId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      mac: 'Mac',
      port: 'Port',
      screenCode: 'ScreenCode',
      ssId: 'SsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      mac: 'string',
      port: 'string',
      screenCode: 'string',
      ssId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataDevices extends $tea.Model {
  activationCode?: string;
  castScreenCode?: string;
  conferenceCode?: string;
  conferenceName?: string;
  createTime?: string;
  pictureUrl?: string;
  SN?: string;
  startUpPictureUrl?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activationCode: 'ActivationCode',
      castScreenCode: 'CastScreenCode',
      conferenceCode: 'ConferenceCode',
      conferenceName: 'ConferenceName',
      createTime: 'CreateTime',
      pictureUrl: 'PictureUrl',
      SN: 'SN',
      startUpPictureUrl: 'StartUpPictureUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationCode: 'string',
      castScreenCode: 'string',
      conferenceCode: 'string',
      conferenceName: 'string',
      createTime: 'string',
      pictureUrl: 'string',
      SN: 'string',
      startUpPictureUrl: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $tea.Model {
  devices?: ListDevicesResponseBodyDataDevices[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataDevices },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvStatisticsResponseBodyDataStatistics extends $tea.Model {
  day?: string;
  meetingLength?: string;
  meetingNumber?: string;
  memberNumber?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      meetingLength: 'MeetingLength',
      meetingNumber: 'MeetingNumber',
      memberNumber: 'MemberNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      meetingLength: 'string',
      meetingNumber: 'string',
      memberNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvStatisticsResponseBodyDataTotal extends $tea.Model {
  meetingLength?: number;
  meetingNumber?: number;
  memberNumber?: number;
  static names(): { [key: string]: string } {
    return {
      meetingLength: 'MeetingLength',
      meetingNumber: 'MeetingNumber',
      memberNumber: 'MemberNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingLength: 'number',
      meetingNumber: 'number',
      memberNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIsvStatisticsResponseBodyData extends $tea.Model {
  statistics?: ListIsvStatisticsResponseBodyDataStatistics[];
  total?: ListIsvStatisticsResponseBodyDataTotal;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': ListIsvStatisticsResponseBodyDataStatistics },
      total: ListIsvStatisticsResponseBodyDataTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMeetingInfoMemberInfos extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  memberUUID?: string;
  status?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      memberUUID: 'MemberUUID',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      memberUUID: 'string',
      status: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMeetingInfo extends $tea.Model {
  createTime?: number;
  meetingCode?: string;
  meetingName?: string;
  meetingUUID?: string;
  memberInfos?: ListMembersResponseBodyMeetingInfoMemberInfos[];
  memo?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      meetingCode: 'MeetingCode',
      meetingName: 'MeetingName',
      meetingUUID: 'MeetingUUID',
      memberInfos: 'MemberInfos',
      memo: 'Memo',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      meetingCode: 'string',
      meetingName: 'string',
      meetingUUID: 'string',
      memberInfos: { 'type': 'array', 'itemType': ListMembersResponseBodyMeetingInfoMemberInfos },
      memo: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUserInfos extends $tea.Model {
  createTime?: number;
  departId?: string;
  departName?: string;
  groupId?: string;
  groupName?: string;
  jobName?: string;
  userAvatarUrl?: string;
  userEmail?: string;
  userId?: string;
  userMobile?: string;
  userName?: string;
  userTel?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      departId: 'DepartId',
      departName: 'DepartName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      jobName: 'JobName',
      userAvatarUrl: 'UserAvatarUrl',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userMobile: 'UserMobile',
      userName: 'UserName',
      userTel: 'UserTel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      departId: 'string',
      departName: 'string',
      groupId: 'string',
      groupName: 'string',
      jobName: 'string',
      userAvatarUrl: 'string',
      userEmail: 'string',
      userId: 'string',
      userMobile: 'string',
      userName: 'string',
      userTel: 'string',
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
  userInfos?: ListUsersResponseBodyDataUserInfos[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      userInfos: 'UserInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      userInfos: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUserInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingMemberActionResponseBodyErrorCodeList extends $tea.Model {
  errorCodeCount?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      errorCodeCount: 'ErrorCodeCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeCount: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceScreenCodeResponseBodyData extends $tea.Model {
  screenCode?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      screenCode: 'ScreenCode',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenCode: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyDeviceInfoAuthWsChannelConfig extends $tea.Model {
  authWsUrl?: string;
  token?: string;
  wsOuterReconnTime?: number;
  static names(): { [key: string]: string } {
    return {
      authWsUrl: 'AuthWsUrl',
      token: 'Token',
      wsOuterReconnTime: 'WsOuterReconnTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsUrl: 'string',
      token: 'string',
      wsOuterReconnTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyDeviceInfoMqttParam extends $tea.Model {
  cleanSession?: string;
  clientId?: string;
  groupId?: string;
  host?: string;
  password?: string;
  port?: string;
  reconnectTimeout?: string;
  SDKClientPort?: string;
  TLSPort?: string;
  topic?: string;
  useTLS?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cleanSession: 'CleanSession',
      clientId: 'ClientId',
      groupId: 'GroupId',
      host: 'Host',
      password: 'Password',
      port: 'Port',
      reconnectTimeout: 'ReconnectTimeout',
      SDKClientPort: 'SDKClientPort',
      TLSPort: 'TLSPort',
      topic: 'Topic',
      useTLS: 'UseTLS',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanSession: 'string',
      clientId: 'string',
      groupId: 'string',
      host: 'string',
      password: 'string',
      port: 'string',
      reconnectTimeout: 'string',
      SDKClientPort: 'string',
      TLSPort: 'string',
      topic: 'string',
      useTLS: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyDeviceInfoSlsConfig extends $tea.Model {
  logServiceEndpoint?: string;
  logStore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logStore: 'LogStore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logStore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyDeviceInfo extends $tea.Model {
  authWsChannelConfig?: RegisterDeviceResponseBodyDeviceInfoAuthWsChannelConfig;
  channelType?: string;
  deviceName?: string;
  deviceSessionId?: string;
  messageKey?: string;
  mqttParam?: RegisterDeviceResponseBodyDeviceInfoMqttParam;
  registerTime?: number;
  screenCode?: string;
  slsConfig?: RegisterDeviceResponseBodyDeviceInfoSlsConfig;
  static names(): { [key: string]: string } {
    return {
      authWsChannelConfig: 'AuthWsChannelConfig',
      channelType: 'ChannelType',
      deviceName: 'DeviceName',
      deviceSessionId: 'DeviceSessionId',
      messageKey: 'MessageKey',
      mqttParam: 'MqttParam',
      registerTime: 'RegisterTime',
      screenCode: 'ScreenCode',
      slsConfig: 'SlsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsChannelConfig: RegisterDeviceResponseBodyDeviceInfoAuthWsChannelConfig,
      channelType: 'string',
      deviceName: 'string',
      deviceSessionId: 'string',
      messageKey: 'string',
      mqttParam: RegisterDeviceResponseBodyDeviceInfoMqttParam,
      registerTime: 'number',
      screenCode: 'string',
      slsConfig: RegisterDeviceResponseBodyDeviceInfoSlsConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponseBodyDeviceInfoAuthWsChannelConfig extends $tea.Model {
  authWsUrl?: string;
  token?: string;
  wsOuterReconnTime?: number;
  static names(): { [key: string]: string } {
    return {
      authWsUrl: 'AuthWsUrl',
      token: 'Token',
      wsOuterReconnTime: 'WsOuterReconnTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsUrl: 'string',
      token: 'string',
      wsOuterReconnTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponseBodyDeviceInfoMqttParam extends $tea.Model {
  cleanSession?: string;
  clientId?: string;
  groupId?: string;
  host?: string;
  password?: string;
  port?: string;
  reconnectTimeout?: string;
  SDKClientPort?: string;
  TLSPort?: string;
  topic?: string;
  useTLS?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cleanSession: 'CleanSession',
      clientId: 'ClientId',
      groupId: 'GroupId',
      host: 'Host',
      password: 'Password',
      port: 'Port',
      reconnectTimeout: 'ReconnectTimeout',
      SDKClientPort: 'SDKClientPort',
      TLSPort: 'TLSPort',
      topic: 'Topic',
      useTLS: 'UseTLS',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanSession: 'string',
      clientId: 'string',
      groupId: 'string',
      host: 'string',
      password: 'string',
      port: 'string',
      reconnectTimeout: 'string',
      SDKClientPort: 'string',
      TLSPort: 'string',
      topic: 'string',
      useTLS: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponseBodyDeviceInfoSlsConfig extends $tea.Model {
  logServiceEndpoint?: string;
  logStore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logServiceEndpoint: 'LogServiceEndpoint',
      logStore: 'LogStore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logServiceEndpoint: 'string',
      logStore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUemDeviceResponseBodyDeviceInfo extends $tea.Model {
  authWsChannelConfig?: RegisterUemDeviceResponseBodyDeviceInfoAuthWsChannelConfig;
  channelType?: string;
  deviceName?: string;
  deviceSessionId?: string;
  messageKey?: string;
  mqttParam?: RegisterUemDeviceResponseBodyDeviceInfoMqttParam;
  registerTime?: number;
  screenCode?: string;
  slsConfig?: RegisterUemDeviceResponseBodyDeviceInfoSlsConfig;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      authWsChannelConfig: 'AuthWsChannelConfig',
      channelType: 'ChannelType',
      deviceName: 'DeviceName',
      deviceSessionId: 'DeviceSessionId',
      messageKey: 'MessageKey',
      mqttParam: 'MqttParam',
      registerTime: 'RegisterTime',
      screenCode: 'ScreenCode',
      slsConfig: 'SlsConfig',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsChannelConfig: RegisterUemDeviceResponseBodyDeviceInfoAuthWsChannelConfig,
      channelType: 'string',
      deviceName: 'string',
      deviceSessionId: 'string',
      messageKey: 'string',
      mqttParam: RegisterUemDeviceResponseBodyDeviceInfoMqttParam,
      registerTime: 'number',
      screenCode: 'string',
      slsConfig: RegisterUemDeviceResponseBodyDeviceInfoSlsConfig,
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBodyDataAuthWsChannelConfig extends $tea.Model {
  authWsUrl?: string;
  token?: string;
  wsOuterReConnTime?: number;
  static names(): { [key: string]: string } {
    return {
      authWsUrl: 'AuthWsUrl',
      token: 'Token',
      wsOuterReConnTime: 'WsOuterReConnTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsUrl: 'string',
      token: 'string',
      wsOuterReConnTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBodyDataIceServers extends $tea.Model {
  credential?: string;
  url?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'Credential',
      url: 'Url',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      url: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBodyDataShareConfig extends $tea.Model {
  maxMultiScreenShareBitrate?: number;
  maxScreenShareBitrate?: number;
  shareConfigMaxFrameRate?: number;
  shareConfigMinFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      maxMultiScreenShareBitrate: 'MaxMultiScreenShareBitrate',
      maxScreenShareBitrate: 'MaxScreenShareBitrate',
      shareConfigMaxFrameRate: 'ShareConfigMaxFrameRate',
      shareConfigMinFrameRate: 'ShareConfigMinFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxMultiScreenShareBitrate: 'number',
      maxScreenShareBitrate: 'number',
      shareConfigMaxFrameRate: 'number',
      shareConfigMinFrameRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBodyDataSignallingServerConfig extends $tea.Model {
  clientHeartBeatUrl?: string;
  getMessageUrl?: string;
  getReceiverInfoUrl?: string;
  sendMessageUrl?: string;
  shareScreenMeetingRobUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientHeartBeatUrl: 'ClientHeartBeatUrl',
      getMessageUrl: 'GetMessageUrl',
      getReceiverInfoUrl: 'GetReceiverInfoUrl',
      sendMessageUrl: 'SendMessageUrl',
      shareScreenMeetingRobUrl: 'ShareScreenMeetingRobUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHeartBeatUrl: 'string',
      getMessageUrl: 'string',
      getReceiverInfoUrl: 'string',
      sendMessageUrl: 'string',
      shareScreenMeetingRobUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendScreenStartResponseBodyData extends $tea.Model {
  authWsChannelConfig?: SendScreenStartResponseBodyDataAuthWsChannelConfig;
  iceServers?: SendScreenStartResponseBodyDataIceServers[];
  receiverInfo?: { [key: string]: any };
  sessionId?: string;
  shareConfig?: SendScreenStartResponseBodyDataShareConfig;
  signallingServerConfig?: SendScreenStartResponseBodyDataSignallingServerConfig;
  static names(): { [key: string]: string } {
    return {
      authWsChannelConfig: 'AuthWsChannelConfig',
      iceServers: 'IceServers',
      receiverInfo: 'ReceiverInfo',
      sessionId: 'SessionId',
      shareConfig: 'ShareConfig',
      signallingServerConfig: 'SignallingServerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authWsChannelConfig: SendScreenStartResponseBodyDataAuthWsChannelConfig,
      iceServers: { 'type': 'array', 'itemType': SendScreenStartResponseBodyDataIceServers },
      receiverInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sessionId: 'string',
      shareConfig: SendScreenStartResponseBodyDataShareConfig,
      signallingServerConfig: SendScreenStartResponseBodyDataSignallingServerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceHeartBeatResponseBodyDeviceInfo extends $tea.Model {
  channelType?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aliyuncvc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activeDeviceWithOptions(request: ActiveDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ActiveDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activeCode)) {
      body["ActiveCode"] = request.activeCode;
    }

    if (!Util.isUnset(request.deviceVersion)) {
      body["DeviceVersion"] = request.deviceVersion;
    }

    if (!Util.isUnset(request.IP)) {
      body["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActiveDevice",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveDeviceResponse>(await this.callApi(params, req, runtime), new ActiveDeviceResponse({}));
  }

  async activeDevice(request: ActiveDeviceRequest): Promise<ActiveDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeDeviceWithOptions(request, runtime);
  }

  async activeMeetingWithOptions(request: ActiveMeetingRequest, runtime: $Util.RuntimeOptions): Promise<ActiveMeetingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingCode)) {
      query["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveMeetingResponse>(await this.callApi(params, req, runtime), new ActiveMeetingResponse({}));
  }

  async activeMeeting(request: ActiveMeetingRequest): Promise<ActiveMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeMeetingWithOptions(request, runtime);
  }

  async batchCreateDeviceWithOptions(request: BatchCreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateDevice",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateDeviceResponse>(await this.callApi(params, req, runtime), new BatchCreateDeviceResponse({}));
  }

  async batchCreateDevice(request: BatchCreateDeviceRequest): Promise<BatchCreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateDeviceWithOptions(request, runtime);
  }

  async batchJoinMeetingWithOptions(request: BatchJoinMeetingRequest, runtime: $Util.RuntimeOptions): Promise<BatchJoinMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.rtcEngine)) {
      body["RtcEngine"] = request.rtcEngine;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchJoinMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJoinMeetingResponse>(await this.callApi(params, req, runtime), new BatchJoinMeetingResponse({}));
  }

  async batchJoinMeeting(request: BatchJoinMeetingRequest): Promise<BatchJoinMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJoinMeetingWithOptions(request, runtime);
  }

  async batchJoinMeetingInternationalWithOptions(request: BatchJoinMeetingInternationalRequest, runtime: $Util.RuntimeOptions): Promise<BatchJoinMeetingInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchJoinMeetingInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJoinMeetingInternationalResponse>(await this.callApi(params, req, runtime), new BatchJoinMeetingInternationalResponse({}));
  }

  async batchJoinMeetingInternational(request: BatchJoinMeetingInternationalRequest): Promise<BatchJoinMeetingInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJoinMeetingInternationalWithOptions(request, runtime);
  }

  async callDeviceWithOptions(request: CallDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CallDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.joinMeetingFlag)) {
      query["JoinMeetingFlag"] = request.joinMeetingFlag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inviteName)) {
      body["InviteName"] = request.inviteName;
    }

    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.operateUserId)) {
      body["OperateUserId"] = request.operateUserId;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CallDevice",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CallDeviceResponse>(await this.callApi(params, req, runtime), new CallDeviceResponse({}));
  }

  async callDevice(request: CallDeviceRequest): Promise<CallDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.callDeviceWithOptions(request, runtime);
  }

  async conferenceToLiveWithOptions(request: ConferenceToLiveRequest, runtime: $Util.RuntimeOptions): Promise<ConferenceToLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveName)) {
      body["LiveName"] = request.liveName;
    }

    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConferenceToLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConferenceToLiveResponse>(await this.callApi(params, req, runtime), new ConferenceToLiveResponse({}));
  }

  async conferenceToLive(request: ConferenceToLiveRequest): Promise<ConferenceToLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.conferenceToLiveWithOptions(request, runtime);
  }

  async createDeviceMeetingWithOptions(request: CreateDeviceMeetingRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingName)) {
      body["MeetingName"] = request.meetingName;
    }

    if (!Util.isUnset(request.openPasswordtag)) {
      body["OpenPasswordtag"] = request.openPasswordtag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeviceMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeviceMeetingResponse>(await this.callApi(params, req, runtime), new CreateDeviceMeetingResponse({}));
  }

  async createDeviceMeeting(request: CreateDeviceMeetingRequest): Promise<CreateDeviceMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceMeetingWithOptions(request, runtime);
  }

  async createEvaluationWithOptions(request: CreateEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<CreateEvaluationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.evaluation)) {
      query["Evaluation"] = request.evaluation;
    }

    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.memberUUID)) {
      query["MemberUUID"] = request.memberUUID;
    }

    if (!Util.isUnset(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.score)) {
      query["Score"] = request.score;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEvaluation",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEvaluationResponse>(await this.callApi(params, req, runtime), new CreateEvaluationResponse({}));
  }

  async createEvaluation(request: CreateEvaluationRequest): Promise<CreateEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEvaluationWithOptions(request, runtime);
  }

  async createLiveWithOptions(request: CreateLiveRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveName)) {
      body["LiveName"] = request.liveName;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLiveResponse>(await this.callApi(params, req, runtime), new CreateLiveResponse({}));
  }

  async createLive(request: CreateLiveRequest): Promise<CreateLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveWithOptions(request, runtime);
  }

  async createMeetingWithOptions(request: CreateMeetingRequest, runtime: $Util.RuntimeOptions): Promise<CreateMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.masterEnableFlag)) {
      body["MasterEnableFlag"] = request.masterEnableFlag;
    }

    if (!Util.isUnset(request.meetingMode)) {
      body["MeetingMode"] = request.meetingMode;
    }

    if (!Util.isUnset(request.meetingName)) {
      body["MeetingName"] = request.meetingName;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMeetingResponse>(await this.callApi(params, req, runtime), new CreateMeetingResponse({}));
  }

  async createMeeting(request: CreateMeetingRequest): Promise<CreateMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMeetingWithOptions(request, runtime);
  }

  async createMeetingInternationalWithOptions(request: CreateMeetingInternationalRequest, runtime: $Util.RuntimeOptions): Promise<CreateMeetingInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingName)) {
      body["MeetingName"] = request.meetingName;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMeetingInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMeetingInternationalResponse>(await this.callApi(params, req, runtime), new CreateMeetingInternationalResponse({}));
  }

  async createMeetingInternational(request: CreateMeetingInternationalRequest): Promise<CreateMeetingInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMeetingInternationalWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      body["Count"] = request.count;
    }

    if (!Util.isUnset(request.userInfo)) {
      body["UserInfo"] = request.userInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2019-10-30",
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

  async createUserInternationalWithOptions(request: CreateUserInternationalRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      body["Count"] = request.count;
    }

    if (!Util.isUnset(request.userInfo)) {
      body["UserInfo"] = request.userInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserInternationalResponse>(await this.callApi(params, req, runtime), new CreateUserInternationalResponse({}));
  }

  async createUserInternational(request: CreateUserInternationalRequest): Promise<CreateUserInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserInternationalWithOptions(request, runtime);
  }

  async customGonggeLayoutWithOptions(request: CustomGonggeLayoutRequest, runtime: $Util.RuntimeOptions): Promise<CustomGonggeLayoutResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.layoutSolution)) {
      body["LayoutSolution"] = request.layoutSolution;
    }

    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CustomGonggeLayout",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomGonggeLayoutResponse>(await this.callApi(params, req, runtime), new CustomGonggeLayoutResponse({}));
  }

  async customGonggeLayout(request: CustomGonggeLayoutRequest): Promise<CustomGonggeLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customGonggeLayoutWithOptions(request, runtime);
  }

  async customLayoutWithOptions(request: CustomLayoutRequest, runtime: $Util.RuntimeOptions): Promise<CustomLayoutResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.layoutInfo)) {
      body["LayoutInfo"] = request.layoutInfo;
    }

    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CustomLayout",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomLayoutResponse>(await this.callApi(params, req, runtime), new CustomLayoutResponse({}));
  }

  async customLayout(request: CustomLayoutRequest): Promise<CustomLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customLayoutWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDevice",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceResponse>(await this.callApi(params, req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteLiveWithOptions(request: DeleteLiveRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLiveResponse>(await this.callApi(params, req, runtime), new DeleteLiveResponse({}));
  }

  async deleteLive(request: DeleteLiveRequest): Promise<DeleteLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveWithOptions(request, runtime);
  }

  async deleteMeetingWithOptions(request: DeleteMeetingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMeetingResponse>(await this.callApi(params, req, runtime), new DeleteMeetingResponse({}));
  }

  async deleteMeeting(request: DeleteMeetingRequest): Promise<DeleteMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMeetingWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      body["Count"] = request.count;
    }

    if (!Util.isUnset(request.userInfo)) {
      body["UserInfo"] = request.userInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async enableLiveSpeakerWithOptions(request: EnableLiveSpeakerRequest, runtime: $Util.RuntimeOptions): Promise<EnableLiveSpeakerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableSpeakerFlag)) {
      body["EnableSpeakerFlag"] = request.enableSpeakerFlag;
    }

    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableLiveSpeaker",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableLiveSpeakerResponse>(await this.callApi(params, req, runtime), new EnableLiveSpeakerResponse({}));
  }

  async enableLiveSpeaker(request: EnableLiveSpeakerRequest): Promise<EnableLiveSpeakerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLiveSpeakerWithOptions(request, runtime);
  }

  async endDeviceMeetingWithOptions(request: EndDeviceMeetingRequest, runtime: $Util.RuntimeOptions): Promise<EndDeviceMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EndDeviceMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndDeviceMeetingResponse>(await this.callApi(params, req, runtime), new EndDeviceMeetingResponse({}));
  }

  async endDeviceMeeting(request: EndDeviceMeetingRequest): Promise<EndDeviceMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endDeviceMeetingWithOptions(request, runtime);
  }

  async endLiveWithOptions(request: EndLiveRequest, runtime: $Util.RuntimeOptions): Promise<EndLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EndLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndLiveResponse>(await this.callApi(params, req, runtime), new EndLiveResponse({}));
  }

  async endLive(request: EndLiveRequest): Promise<EndLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endLiveWithOptions(request, runtime);
  }

  async getAccountInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountInfo",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountInfoResponse>(await this.callApi(params, req, runtime), new GetAccountInfoResponse({}));
  }

  async getAccountInfo(): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  async getConferenceConcurrencyStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConferenceConcurrencyStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetConferenceConcurrencyStatistics",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConferenceConcurrencyStatisticsResponse>(await this.callApi(params, req, runtime), new GetConferenceConcurrencyStatisticsResponse({}));
  }

  async getConferenceConcurrencyStatistics(): Promise<GetConferenceConcurrencyStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConferenceConcurrencyStatisticsWithOptions(runtime);
  }

  async getDeviceActiveCodeWithOptions(request: GetDeviceActiveCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceActiveCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceActiveCode",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceActiveCodeResponse>(await this.callApi(params, req, runtime), new GetDeviceActiveCodeResponse({}));
  }

  async getDeviceActiveCode(request: GetDeviceActiveCodeRequest): Promise<GetDeviceActiveCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceActiveCodeWithOptions(request, runtime);
  }

  async getDeviceInfoWithOptions(request: GetDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.castScreenCode)) {
      query["CastScreenCode"] = request.castScreenCode;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceInfo",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceInfoResponse>(await this.callApi(params, req, runtime), new GetDeviceInfoResponse({}));
  }

  async getDeviceInfo(request: GetDeviceInfoRequest): Promise<GetDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceInfoWithOptions(request, runtime);
  }

  async getDeviceListWithOptions(request: GetDeviceListRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.castScreenCode)) {
      query["CastScreenCode"] = request.castScreenCode;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceList",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceListResponse>(await this.callApi(params, req, runtime), new GetDeviceListResponse({}));
  }

  async getDeviceList(request: GetDeviceListRequest): Promise<GetDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceListWithOptions(request, runtime);
  }

  async getDeviceTokenWithOptions(request: GetDeviceTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SN)) {
      query["SN"] = request.SN;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceToken",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceTokenResponse>(await this.callApi(params, req, runtime), new GetDeviceTokenResponse({}));
  }

  async getDeviceToken(request: GetDeviceTokenRequest): Promise<GetDeviceTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceTokenWithOptions(request, runtime);
  }

  async getGrtnTokenWithOptions(runtime: $Util.RuntimeOptions): Promise<GetGrtnTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetGrtnToken",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGrtnTokenResponse>(await this.callApi(params, req, runtime), new GetGrtnTokenResponse({}));
  }

  async getGrtnToken(): Promise<GetGrtnTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGrtnTokenWithOptions(runtime);
  }

  async getMeetingWithOptions(request: GetMeetingRequest, runtime: $Util.RuntimeOptions): Promise<GetMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMeetingResponse>(await this.callApi(params, req, runtime), new GetMeetingResponse({}));
  }

  async getMeeting(request: GetMeetingRequest): Promise<GetMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMeetingWithOptions(request, runtime);
  }

  async getMeetingConcurrencyWithOptions(request: GetMeetingConcurrencyRequest, runtime: $Util.RuntimeOptions): Promise<GetMeetingConcurrencyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMeetingConcurrency",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMeetingConcurrencyResponse>(await this.callApi(params, req, runtime), new GetMeetingConcurrencyResponse({}));
  }

  async getMeetingConcurrency(request: GetMeetingConcurrencyRequest): Promise<GetMeetingConcurrencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMeetingConcurrencyWithOptions(request, runtime);
  }

  async getMeetingInternationalWithOptions(request: GetMeetingInternationalRequest, runtime: $Util.RuntimeOptions): Promise<GetMeetingInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMeetingInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMeetingInternationalResponse>(await this.callApi(params, req, runtime), new GetMeetingInternationalResponse({}));
  }

  async getMeetingInternational(request: GetMeetingInternationalRequest): Promise<GetMeetingInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMeetingInternationalWithOptions(request, runtime);
  }

  async getMeetingMemberWithOptions(request: GetMeetingMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetMeetingMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMeetingMember",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMeetingMemberResponse>(await this.callApi(params, req, runtime), new GetMeetingMemberResponse({}));
  }

  async getMeetingMember(request: GetMeetingMemberRequest): Promise<GetMeetingMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMeetingMemberWithOptions(request, runtime);
  }

  async getMemberStatusWithOptions(request: GetMemberStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMemberStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMemberStatus",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMemberStatusResponse>(await this.callApi(params, req, runtime), new GetMemberStatusResponse({}));
  }

  async getMemberStatus(request: GetMemberStatusRequest): Promise<GetMemberStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMemberStatusWithOptions(request, runtime);
  }

  async getScreenVerificationCodeWithOptions(request: GetScreenVerificationCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetScreenVerificationCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.castScreenCode)) {
      body["CastScreenCode"] = request.castScreenCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetScreenVerificationCode",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScreenVerificationCodeResponse>(await this.callApi(params, req, runtime), new GetScreenVerificationCodeResponse({}));
  }

  async getScreenVerificationCode(request: GetScreenVerificationCodeRequest): Promise<GetScreenVerificationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScreenVerificationCodeWithOptions(request, runtime);
  }

  async getStatisticWithOptions(request: GetStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetStatisticResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStatistic",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStatisticResponse>(await this.callApi(params, req, runtime), new GetStatisticResponse({}));
  }

  async getStatistic(request: GetStatisticRequest): Promise<GetStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStatisticWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2019-10-30",
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

  async getWebSocketTokenWithOptions(request: GetWebSocketTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetWebSocketTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.oldToken)) {
      query["OldToken"] = request.oldToken;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWebSocketToken",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWebSocketTokenResponse>(await this.callApi(params, req, runtime), new GetWebSocketTokenResponse({}));
  }

  async getWebSocketToken(request: GetWebSocketTokenRequest): Promise<GetWebSocketTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebSocketTokenWithOptions(request, runtime);
  }

  async inviteUserWithOptions(request: InviteUserRequest, runtime: $Util.RuntimeOptions): Promise<InviteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InviteUser",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InviteUserResponse>(await this.callApi(params, req, runtime), new InviteUserResponse({}));
  }

  async inviteUser(request: InviteUserRequest): Promise<InviteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteUserWithOptions(request, runtime);
  }

  async joinDeviceMeetingWithOptions(request: JoinDeviceMeetingRequest, runtime: $Util.RuntimeOptions): Promise<JoinDeviceMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinDeviceMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinDeviceMeetingResponse>(await this.callApi(params, req, runtime), new JoinDeviceMeetingResponse({}));
  }

  async joinDeviceMeeting(request: JoinDeviceMeetingRequest): Promise<JoinDeviceMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinDeviceMeetingWithOptions(request, runtime);
  }

  async joinLiveWithOptions(request: JoinLiveRequest, runtime: $Util.RuntimeOptions): Promise<JoinLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinLiveResponse>(await this.callApi(params, req, runtime), new JoinLiveResponse({}));
  }

  async joinLive(request: JoinLiveRequest): Promise<JoinLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinLiveWithOptions(request, runtime);
  }

  async joinMeetingWithOptions(request: JoinMeetingRequest, runtime: $Util.RuntimeOptions): Promise<JoinMeetingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.rtcEngine)) {
      body["RtcEngine"] = request.rtcEngine;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinMeeting",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinMeetingResponse>(await this.callApi(params, req, runtime), new JoinMeetingResponse({}));
  }

  async joinMeeting(request: JoinMeetingRequest): Promise<JoinMeetingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinMeetingWithOptions(request, runtime);
  }

  async joinMeetingInternationalWithOptions(request: JoinMeetingInternationalRequest, runtime: $Util.RuntimeOptions): Promise<JoinMeetingInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingCode)) {
      body["MeetingCode"] = request.meetingCode;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "JoinMeetingInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinMeetingInternationalResponse>(await this.callApi(params, req, runtime), new JoinMeetingInternationalResponse({}));
  }

  async joinMeetingInternational(request: JoinMeetingInternationalRequest): Promise<JoinMeetingInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinMeetingInternationalWithOptions(request, runtime);
  }

  async listConferenceDevicesWithOptions(request: ListConferenceDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListConferenceDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConferenceDevices",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConferenceDevicesResponse>(await this.callApi(params, req, runtime), new ListConferenceDevicesResponse({}));
  }

  async listConferenceDevices(request: ListConferenceDevicesRequest): Promise<ListConferenceDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConferenceDevicesWithOptions(request, runtime);
  }

  async listDeviceIpWithOptions(request: ListDeviceIpRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceIpResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.SN)) {
      body["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceIp",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceIpResponse>(await this.callApi(params, req, runtime), new ListDeviceIpResponse({}));
  }

  async listDeviceIp(request: ListDeviceIpRequest): Promise<ListDeviceIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceIpWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.castScreenCode)) {
      query["CastScreenCode"] = request.castScreenCode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SN)) {
      query["SN"] = request.SN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDevices",
      version: "2019-10-30",
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

  async listEvaluationsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListEvaluationsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListEvaluations",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEvaluationsResponse>(await this.callApi(params, req, runtime), new ListEvaluationsResponse({}));
  }

  async listEvaluations(): Promise<ListEvaluationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEvaluationsWithOptions(runtime);
  }

  async listIsvStatisticsWithOptions(request: ListIsvStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListIsvStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIsvStatistics",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIsvStatisticsResponse>(await this.callApi(params, req, runtime), new ListIsvStatisticsResponse({}));
  }

  async listIsvStatistics(request: ListIsvStatisticsRequest): Promise<ListIsvStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIsvStatisticsWithOptions(request, runtime);
  }

  async listMembersWithOptions(request: ListMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMembers",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
  }

  async listMembers(request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMembersWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
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
      action: "ListUsers",
      version: "2019-10-30",
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

  async modifyDeviceBackgroundWithOptions(request: ModifyDeviceBackgroundRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceBackgroundResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picture)) {
      body["Picture"] = request.picture;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDeviceBackground",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDeviceBackgroundResponse>(await this.callApi(params, req, runtime), new ModifyDeviceBackgroundResponse({}));
  }

  async modifyDeviceBackground(request: ModifyDeviceBackgroundRequest): Promise<ModifyDeviceBackgroundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceBackgroundWithOptions(request, runtime);
  }

  async modifyMeetingPasswordWithOptions(request: ModifyMeetingPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMeetingPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMeetingPassword",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMeetingPasswordResponse>(await this.callApi(params, req, runtime), new ModifyMeetingPasswordResponse({}));
  }

  async modifyMeetingPassword(request: ModifyMeetingPasswordRequest): Promise<ModifyMeetingPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMeetingPasswordWithOptions(request, runtime);
  }

  async modifyMeetingPasswordInternationalWithOptions(request: ModifyMeetingPasswordInternationalRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMeetingPasswordInternationalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMeetingPasswordInternational",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMeetingPasswordInternationalResponse>(await this.callApi(params, req, runtime), new ModifyMeetingPasswordInternationalResponse({}));
  }

  async modifyMeetingPasswordInternational(request: ModifyMeetingPasswordInternationalRequest): Promise<ModifyMeetingPasswordInternationalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMeetingPasswordInternationalWithOptions(request, runtime);
  }

  async queryMeetingMemberActionWithOptions(request: QueryMeetingMemberActionRequest, runtime: $Util.RuntimeOptions): Promise<QueryMeetingMemberActionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.meetingUnitKey)) {
      body["MeetingUnitKey"] = request.meetingUnitKey;
    }

    if (!Util.isUnset(request.memberUUID)) {
      body["MemberUUID"] = request.memberUUID;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMeetingMemberAction",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMeetingMemberActionResponse>(await this.callApi(params, req, runtime), new QueryMeetingMemberActionResponse({}));
  }

  async queryMeetingMemberAction(request: QueryMeetingMemberActionRequest): Promise<QueryMeetingMemberActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMeetingMemberActionWithOptions(request, runtime);
  }

  async refreshDeviceScreenCodeWithOptions(request: RefreshDeviceScreenCodeRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDeviceScreenCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDeviceScreenCode",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDeviceScreenCodeResponse>(await this.callApi(params, req, runtime), new RefreshDeviceScreenCodeResponse({}));
  }

  async refreshDeviceScreenCode(request: RefreshDeviceScreenCodeRequest): Promise<RefreshDeviceScreenCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDeviceScreenCodeWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceVersion)) {
      query["DeviceVersion"] = request.deviceVersion;
    }

    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.SN)) {
      query["SN"] = request.SN;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDevice",
      version: "2019-10-30",
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

  async registerUemDeviceWithOptions(request: RegisterUemDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterUemDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.deviceVersion)) {
      query["DeviceVersion"] = request.deviceVersion;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterUemDevice",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterUemDeviceResponse>(await this.callApi(params, req, runtime), new RegisterUemDeviceResponse({}));
  }

  async registerUemDevice(request: RegisterUemDeviceRequest): Promise<RegisterUemDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerUemDeviceWithOptions(request, runtime);
  }

  async sendMeetingCommandWithOptions(request: SendMeetingCommandRequest, runtime: $Util.RuntimeOptions): Promise<SendMeetingCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.meetingUUID)) {
      query["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.memberUUID)) {
      query["MemberUUID"] = request.memberUUID;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.command)) {
      body["Command"] = request.command;
    }

    if (!Util.isUnset(request.operatorMemberUUID)) {
      body["OperatorMemberUUID"] = request.operatorMemberUUID;
    }

    if (!Util.isUnset(request.sendType)) {
      body["SendType"] = request.sendType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMeetingCommand",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMeetingCommandResponse>(await this.callApi(params, req, runtime), new SendMeetingCommandResponse({}));
  }

  async sendMeetingCommand(request: SendMeetingCommandRequest): Promise<SendMeetingCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMeetingCommandWithOptions(request, runtime);
  }

  async sendScreenStartWithOptions(request: SendScreenStartRequest, runtime: $Util.RuntimeOptions): Promise<SendScreenStartResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.castScreenCode)) {
      body["CastScreenCode"] = request.castScreenCode;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendScreenStart",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendScreenStartResponse>(await this.callApi(params, req, runtime), new SendScreenStartResponse({}));
  }

  async sendScreenStart(request: SendScreenStartRequest): Promise<SendScreenStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendScreenStartWithOptions(request, runtime);
  }

  async startLiveWithOptions(request: StartLiveRequest, runtime: $Util.RuntimeOptions): Promise<StartLiveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.layoutInfo)) {
      body["LayoutInfo"] = request.layoutInfo;
    }

    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    if (!Util.isUnset(request.pushInfo)) {
      body["PushInfo"] = request.pushInfo;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartLive",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartLiveResponse>(await this.callApi(params, req, runtime), new StartLiveResponse({}));
  }

  async startLive(request: StartLiveRequest): Promise<StartLiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLiveWithOptions(request, runtime);
  }

  async updateDeviceHeartBeatWithOptions(request: UpdateDeviceHeartBeatRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceHeartBeatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceHeartBeat",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceHeartBeatResponse>(await this.callApi(params, req, runtime), new UpdateDeviceHeartBeatResponse({}));
  }

  async updateDeviceHeartBeat(request: UpdateDeviceHeartBeatRequest): Promise<UpdateDeviceHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceHeartBeatWithOptions(request, runtime);
  }

  async updateDeviceStartupPictureWithOptions(request: UpdateDeviceStartupPictureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceStartupPictureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.picture)) {
      body["Picture"] = request.picture;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceStartupPicture",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceStartupPictureResponse>(await this.callApi(params, req, runtime), new UpdateDeviceStartupPictureResponse({}));
  }

  async updateDeviceStartupPicture(request: UpdateDeviceStartupPictureRequest): Promise<UpdateDeviceStartupPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceStartupPictureWithOptions(request, runtime);
  }

  async updateGonggeLayoutWithOptions(request: UpdateGonggeLayoutRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGonggeLayoutResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingUUID)) {
      body["MeetingUUID"] = request.meetingUUID;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    if (!Util.isUnset(request.videoCount)) {
      body["VideoCount"] = request.videoCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGonggeLayout",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGonggeLayoutResponse>(await this.callApi(params, req, runtime), new UpdateGonggeLayoutResponse({}));
  }

  async updateGonggeLayout(request: UpdateGonggeLayoutRequest): Promise<UpdateGonggeLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGonggeLayoutWithOptions(request, runtime);
  }

  async updateLivePasswordWithOptions(request: UpdateLivePasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLivePasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.liveUUID)) {
      body["LiveUUID"] = request.liveUUID;
    }

    if (!Util.isUnset(request.openPasswordFlag)) {
      body["OpenPasswordFlag"] = request.openPasswordFlag;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLivePassword",
      version: "2019-10-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLivePasswordResponse>(await this.callApi(params, req, runtime), new UpdateLivePasswordResponse({}));
  }

  async updateLivePassword(request: UpdateLivePasswordRequest): Promise<UpdateLivePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLivePasswordWithOptions(request, runtime);
  }

}
