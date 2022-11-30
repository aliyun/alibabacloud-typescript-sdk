// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BackendCallGroupRequest extends $tea.Model {
  calledNumber?: string[];
  callerIdNumber?: string;
  countryId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  speed?: number;
  taskName?: string;
  timingStart?: string;
  ttsCode?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: { 'type': 'array', 'itemType': 'string' },
      callerIdNumber: 'string',
      countryId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupShrinkRequest extends $tea.Model {
  calledNumberShrink?: string;
  callerIdNumber?: string;
  countryId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  speed?: number;
  taskName?: string;
  timingStart?: string;
  ttsCode?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumberShrink: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BackendCallGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BackendCallGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalRequest extends $tea.Model {
  calledNumber?: string;
  callerIdNumber?: string;
  countryId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  speed?: number;
  ttsCode?: string;
  ttsParam?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      ttsCode: 'string',
      ttsParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BackendCallSignalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BackendCallSignalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancleGroupCallRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancleGroupCallResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancleGroupCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancleGroupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancleGroupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplyNumberRecordRequest extends $tea.Model {
  applyId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplyNumberRecordResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplyNumberRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApplyNumberRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplyNumberRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualificationRequest extends $tea.Model {
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualificationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  qualificationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      qualificationId: 'QualificationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      qualificationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQualificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQualificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSipTrunkApplyRequest extends $tea.Model {
  applyId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSipTrunkApplyResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSipTrunkApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSipTrunkApplyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSipTrunkApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceFileRequest extends $tea.Model {
  fileId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceFileResponseBody extends $tea.Model {
  code?: string;
  fileId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileId: 'FileId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVoiceFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVoiceFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceTtsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceTtsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVoiceTtsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVoiceTtsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVoiceTtsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadTemplateFileRequest extends $tea.Model {
  fileType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadTemplateFileResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadTemplateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DownloadTemplateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlVoiceOpenStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlVoiceOpenStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  openStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      openStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlVoiceOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIntlVoiceOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIntlVoiceOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoForUploadFileRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoForUploadFileResponseBody extends $tea.Model {
  accessKeyId?: string;
  expireTime?: string;
  host?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  startWith?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      startWith: 'StartWith',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      startWith: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoForUploadFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOssInfoForUploadFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssInfoForUploadFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeStartRequest extends $tea.Model {
  businessType?: number;
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      endTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeStartResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  model?: HomeStartResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      model: HomeStartResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeStartResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HomeStartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HomeStartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyNumberRecordRequest extends $tea.Model {
  countryId?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyNumberRecordResponseBody extends $tea.Model {
  code?: string;
  list?: ListApplyNumberRecordResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListApplyNumberRecordResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyNumberRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplyNumberRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplyNumberRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNumberRequest extends $tea.Model {
  applyId?: string;
  countryId?: string;
  number?: string;
  numberName?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  phoneType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      countryId: 'CountryId',
      number: 'Number',
      numberName: 'NumberName',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneType: 'PhoneType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      countryId: 'string',
      number: 'string',
      numberName: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      phoneType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNumberResponseBody extends $tea.Model {
  code?: string;
  list?: ListNumberResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListNumberResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualificationRequest extends $tea.Model {
  companyName?: string;
  contactPhone?: string;
  countryId?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      contactPhone: 'ContactPhone',
      countryId: 'CountryId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      contactPhone: 'string',
      countryId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualificationResponseBody extends $tea.Model {
  code?: string;
  list?: ListQualificationResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListQualificationResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQualificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQualificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceiptRequest extends $tea.Model {
  businessType?: number;
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      endTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceiptResponseBody extends $tea.Model {
  code?: string;
  list?: ListReceiptResponseBodyList[];
  message?: string;
  receiptUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      receiptUrl: 'ReceiptUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListReceiptResponseBodyList },
      message: 'string',
      receiptUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceiptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListReceiptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkResponseBody extends $tea.Model {
  code?: string;
  list?: ListSipTrunkResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListSipTrunkResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSipTrunkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSipTrunkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkDetailRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  countryId?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      countryId: 'CountryId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      countryId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkDetailResponseBody extends $tea.Model {
  code?: string;
  list?: ListSipTrunkDetailResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListSipTrunkDetailResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSipTrunkDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSipTrunkDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkStatRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkStatResponseBody extends $tea.Model {
  code?: string;
  list?: ListSipTrunkStatResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListSipTrunkStatResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSipTrunkStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSipTrunkStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallRequest extends $tea.Model {
  businessType?: number;
  callingNumber?: string;
  countryId?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  startTime?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      callingNumber: 'CallingNumber',
      countryId: 'CountryId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      callingNumber: 'string',
      countryId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      startTime: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallResponseBody extends $tea.Model {
  code?: string;
  list?: ListVoiceCallResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListVoiceCallResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVoiceCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallDetailRequest extends $tea.Model {
  businessType?: number;
  calledNumber?: string;
  callingNumber?: string;
  countryId?: string;
  endTime?: string;
  hangupType?: number;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      countryId: 'CountryId',
      endTime: 'EndTime',
      hangupType: 'HangupType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      countryId: 'string',
      endTime: 'string',
      hangupType: 'number',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallDetailResponseBody extends $tea.Model {
  code?: string;
  list?: ListVoiceCallDetailResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListVoiceCallDetailResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVoiceCallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceCallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallStatRequest extends $tea.Model {
  businessType?: number;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallStatResponseBody extends $tea.Model {
  code?: string;
  list?: ListVoiceCallStatResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListVoiceCallStatResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVoiceCallStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceCallStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceFileRequest extends $tea.Model {
  countryId?: string;
  fileName?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      fileName: 'FileName',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      fileName: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceFileResponseBody extends $tea.Model {
  code?: string;
  list?: ListVoiceFileResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListVoiceFileResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVoiceFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceTtsRequest extends $tea.Model {
  countryId?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceTtsResponseBody extends $tea.Model {
  code?: string;
  list?: ListVoiceTtsResponseBodyList[];
  message?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListVoiceTtsResponseBodyList },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceTtsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVoiceTtsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceTtsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NumberEnableRequest extends $tea.Model {
  enable?: boolean;
  number?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      number: 'Number',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      number: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NumberEnableResponseBody extends $tea.Model {
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

export class NumberEnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: NumberEnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: NumberEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIntlVoiceServiceRequest extends $tea.Model {
  env?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIntlVoiceServiceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIntlVoiceServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenIntlVoiceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenIntlVoiceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OswTest1Request extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OswTest1ResponseBody extends $tea.Model {
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

export class OswTest1Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OswTest1ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OswTest1ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFileOssUrlRequest extends $tea.Model {
  bizType?: string;
  fileKey?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      fileKey: 'FileKey',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      fileKey: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFileOssUrlResponseBody extends $tea.Model {
  accessKeyId?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFileOssUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFileOssUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFileOssUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHomeStatRequest extends $tea.Model {
  businessType?: number;
  endTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      endTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHomeStatResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  model?: QueryHomeStatResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      model: QueryHomeStatResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHomeStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHomeStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHomeStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingEnableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingEnableResponseBody extends $tea.Model {
  code?: string;
  enable?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enable: 'Enable',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enable: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingEnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordingEnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordingEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceEnableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceEnableResponseBody extends $tea.Model {
  code?: string;
  enable?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enable: 'Enable',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enable: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceEnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryServiceEnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryServiceEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordingEnableRequest extends $tea.Model {
  enable?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordingEnableResponseBody extends $tea.Model {
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

export class RecordingEnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecordingEnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecordingEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReceiptUrlRequest extends $tea.Model {
  cdrDrUrl?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cdrDrUrl: 'CdrDrUrl',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrDrUrl: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetReceiptUrlResponseBody extends $tea.Model {
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

export class SetReceiptUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetReceiptUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetReceiptUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SipTrunkDetailRequest extends $tea.Model {
  calledNumber?: string;
  callingNumber?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SipTrunkDetailResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  model?: SipTrunkDetailResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      model: SipTrunkDetailResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SipTrunkDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SipTrunkDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SipTrunkDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGroupCallRequest extends $tea.Model {
  bizType?: string;
  callerIdNumber?: string;
  countryId?: string;
  fileKey?: string;
  fileName?: string;
  groupCallType?: number;
  ownerId?: number;
  productCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  taskName?: string;
  templateId?: string;
  timingStart?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      fileKey: 'FileKey',
      fileName: 'FileName',
      groupCallType: 'GroupCallType',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      timingStart: 'TimingStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      fileKey: 'string',
      fileName: 'string',
      groupCallType: 'number',
      ownerId: 'number',
      productCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      taskName: 'string',
      templateId: 'string',
      timingStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGroupCallResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGroupCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitGroupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitGroupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitNumberRequest extends $tea.Model {
  applyNote?: string;
  countryId?: string;
  numberList?: SubmitNumberRequestNumberList[];
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      applyNote: 'ApplyNote',
      countryId: 'CountryId',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNote: 'string',
      countryId: 'string',
      numberList: { 'type': 'array', 'itemType': SubmitNumberRequestNumberList },
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitNumberShrinkRequest extends $tea.Model {
  applyNote?: string;
  countryId?: string;
  numberListShrink?: string;
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      applyNote: 'ApplyNote',
      countryId: 'CountryId',
      numberListShrink: 'NumberList',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNote: 'string',
      countryId: 'string',
      numberListShrink: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitNumberResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualificationRequest extends $tea.Model {
  address?: string;
  businessLicenseFileKey?: string;
  companyName?: string;
  contactEmail?: string;
  contactName?: string;
  contactPhone?: string;
  countryId?: string;
  legalId?: string;
  legalLicenseFileKey?: string;
  legalName?: string;
  networkAccessFileKey?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  unifiedCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      businessLicenseFileKey: 'BusinessLicenseFileKey',
      companyName: 'CompanyName',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      countryId: 'CountryId',
      legalId: 'LegalId',
      legalLicenseFileKey: 'LegalLicenseFileKey',
      legalName: 'LegalName',
      networkAccessFileKey: 'NetworkAccessFileKey',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      unifiedCode: 'UnifiedCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessLicenseFileKey: 'string',
      companyName: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      countryId: 'string',
      legalId: 'string',
      legalLicenseFileKey: 'string',
      legalName: 'string',
      networkAccessFileKey: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      unifiedCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualificationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  qualificationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      qualificationId: 'QualificationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      qualificationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitQualificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitQualificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSipTrunkRequest extends $tea.Model {
  applyNote?: string;
  countryId?: string;
  inboundIpPorts?: string;
  outboundIps?: string;
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      applyNote: 'ApplyNote',
      countryId: 'CountryId',
      inboundIpPorts: 'InboundIpPorts',
      outboundIps: 'OutboundIps',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNote: 'string',
      countryId: 'string',
      inboundIpPorts: 'string',
      outboundIps: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSipTrunkResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSipTrunkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSipTrunkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSipTrunkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceFileRequest extends $tea.Model {
  countryId?: string;
  fileKey?: string;
  fileName?: string;
  fileUrl?: string;
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      fileKey: 'FileKey',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      fileKey: 'string',
      fileName: 'string',
      fileUrl: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceFileResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitVoiceFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitVoiceFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceTtsRequest extends $tea.Model {
  countryId?: string;
  language?: string;
  ownerId?: number;
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  speed?: number;
  status?: number;
  templateId?: string;
  templateName?: string;
  templateText?: string;
  static names(): { [key: string]: string } {
    return {
      countryId: 'CountryId',
      language: 'Language',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateText: 'TemplateText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryId: 'string',
      language: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      status: 'number',
      templateId: 'string',
      templateName: 'string',
      templateText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceTtsResponseBody extends $tea.Model {
  applyId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVoiceTtsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitVoiceTtsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitVoiceTtsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNumberRequest extends $tea.Model {
  note?: string;
  number?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      number: 'Number',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      number: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNumberResponseBody extends $tea.Model {
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

export class UpdateNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Test02Request extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Test02ResponseBody extends $tea.Model {
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

export class Test02Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Test02ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Test02ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeStartResponseBodyModelList extends $tea.Model {
  callFailed?: number;
  callSuccess?: number;
  callTotal?: number;
  date?: string;
  successRate?: number;
  static names(): { [key: string]: string } {
    return {
      callFailed: 'CallFailed',
      callSuccess: 'CallSuccess',
      callTotal: 'CallTotal',
      date: 'Date',
      successRate: 'SuccessRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFailed: 'number',
      callSuccess: 'number',
      callTotal: 'number',
      date: 'string',
      successRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeStartResponseBodyModel extends $tea.Model {
  cdrDrUrl?: string;
  list?: HomeStartResponseBodyModelList[];
  static names(): { [key: string]: string } {
    return {
      cdrDrUrl: 'CdrDrUrl',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrDrUrl: 'string',
      list: { 'type': 'array', 'itemType': HomeStartResponseBodyModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyNumberRecordResponseBodyList extends $tea.Model {
  amount?: string;
  applyId?: string;
  applyNote?: string;
  auditNote?: string;
  auditTs?: string;
  batchIndex?: number;
  commitTs?: string;
  countryId?: string;
  inboundConcurrency?: number;
  outboundConcurrency?: number;
  phoneType?: number;
  qualificationId?: string;
  scene?: string;
  status?: number;
  support?: number;
  updateTs?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      applyId: 'ApplyId',
      applyNote: 'ApplyNote',
      auditNote: 'AuditNote',
      auditTs: 'AuditTs',
      batchIndex: 'BatchIndex',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      inboundConcurrency: 'InboundConcurrency',
      outboundConcurrency: 'OutboundConcurrency',
      phoneType: 'PhoneType',
      qualificationId: 'QualificationId',
      scene: 'Scene',
      status: 'Status',
      support: 'Support',
      updateTs: 'UpdateTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      applyId: 'string',
      applyNote: 'string',
      auditNote: 'string',
      auditTs: 'string',
      batchIndex: 'number',
      commitTs: 'string',
      countryId: 'string',
      inboundConcurrency: 'number',
      outboundConcurrency: 'number',
      phoneType: 'number',
      qualificationId: 'string',
      scene: 'string',
      status: 'number',
      support: 'number',
      updateTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNumberResponseBodyList extends $tea.Model {
  applyId?: string;
  countryId?: string;
  disableTs?: string;
  inboundConcurrency?: number;
  number?: string;
  numberName?: string;
  outboundConcurrency?: number;
  phoneType?: number;
  qualificationId?: string;
  resourceId?: string;
  status?: number;
  supplierId?: string;
  support?: number;
  updateTs?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      countryId: 'CountryId',
      disableTs: 'DisableTs',
      inboundConcurrency: 'InboundConcurrency',
      number: 'Number',
      numberName: 'NumberName',
      outboundConcurrency: 'OutboundConcurrency',
      phoneType: 'PhoneType',
      qualificationId: 'QualificationId',
      resourceId: 'ResourceId',
      status: 'Status',
      supplierId: 'SupplierId',
      support: 'Support',
      updateTs: 'UpdateTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      countryId: 'string',
      disableTs: 'string',
      inboundConcurrency: 'number',
      number: 'string',
      numberName: 'string',
      outboundConcurrency: 'number',
      phoneType: 'number',
      qualificationId: 'string',
      resourceId: 'string',
      status: 'number',
      supplierId: 'string',
      support: 'number',
      updateTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualificationResponseBodyList extends $tea.Model {
  address?: string;
  auditRemark?: string;
  auditTs?: string;
  businessLicenseFileKey?: string;
  commitTs?: string;
  companyName?: string;
  contactEmail?: string;
  contactName?: string;
  contactPhone?: string;
  countryId?: string;
  legalId?: string;
  legalLicenseFileKey?: string;
  legalName?: string;
  networkAccessFileKey?: string;
  qualificationId?: string;
  status?: number;
  unifiedCode?: string;
  updateTs?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      auditRemark: 'AuditRemark',
      auditTs: 'AuditTs',
      businessLicenseFileKey: 'BusinessLicenseFileKey',
      commitTs: 'CommitTs',
      companyName: 'CompanyName',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      countryId: 'CountryId',
      legalId: 'LegalId',
      legalLicenseFileKey: 'LegalLicenseFileKey',
      legalName: 'LegalName',
      networkAccessFileKey: 'NetworkAccessFileKey',
      qualificationId: 'QualificationId',
      status: 'Status',
      unifiedCode: 'UnifiedCode',
      updateTs: 'UpdateTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      auditRemark: 'string',
      auditTs: 'string',
      businessLicenseFileKey: 'string',
      commitTs: 'string',
      companyName: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      countryId: 'string',
      legalId: 'string',
      legalLicenseFileKey: 'string',
      legalName: 'string',
      networkAccessFileKey: 'string',
      qualificationId: 'string',
      status: 'number',
      unifiedCode: 'string',
      updateTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceiptResponseBodyList extends $tea.Model {
  callFailedCount?: number;
  callSuccessCount?: number;
  callTotalCount?: number;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      callFailedCount: 'CallFailedCount',
      callSuccessCount: 'CallSuccessCount',
      callTotalCount: 'CallTotalCount',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFailedCount: 'number',
      callSuccessCount: 'number',
      callTotalCount: 'number',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkResponseBodyList extends $tea.Model {
  applyId?: string;
  applyNote?: string;
  auditNote?: string;
  auditTs?: string;
  commitTs?: string;
  countryId?: string;
  inboundIpPorts?: string;
  outboundIps?: string;
  qualificationId?: string;
  scene?: string;
  status?: string;
  updateTs?: string;
  userUuid?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      applyNote: 'ApplyNote',
      auditNote: 'AuditNote',
      auditTs: 'AuditTs',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      inboundIpPorts: 'InboundIpPorts',
      outboundIps: 'OutboundIps',
      qualificationId: 'QualificationId',
      scene: 'Scene',
      status: 'Status',
      updateTs: 'UpdateTs',
      userUuid: 'UserUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      applyNote: 'string',
      auditNote: 'string',
      auditTs: 'string',
      commitTs: 'string',
      countryId: 'string',
      inboundIpPorts: 'string',
      outboundIps: 'string',
      qualificationId: 'string',
      scene: 'string',
      status: 'string',
      updateTs: 'string',
      userUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkDetailResponseBodyList extends $tea.Model {
  answerTime?: string;
  answered?: number;
  busiType?: string;
  callEndTime?: string;
  callType?: string;
  calledIp?: string;
  calledNum?: string;
  calledNumRegion?: string;
  calledNumType?: string;
  callerDisplay?: string;
  callerIp?: string;
  callerNum?: string;
  callerNumRegion?: string;
  callerNumType?: string;
  duration?: number;
  hangup?: number;
  hangupType?: number;
  ivnCliType?: string;
  recordUrl?: string;
  startTime?: string;
  userUuid?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      answerTime: 'AnswerTime',
      answered: 'Answered',
      busiType: 'BusiType',
      callEndTime: 'CallEndTime',
      callType: 'CallType',
      calledIp: 'CalledIp',
      calledNum: 'CalledNum',
      calledNumRegion: 'CalledNumRegion',
      calledNumType: 'CalledNumType',
      callerDisplay: 'CallerDisplay',
      callerIp: 'CallerIp',
      callerNum: 'CallerNum',
      callerNumRegion: 'CallerNumRegion',
      callerNumType: 'CallerNumType',
      duration: 'Duration',
      hangup: 'Hangup',
      hangupType: 'HangupType',
      ivnCliType: 'IvnCliType',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      userUuid: 'UserUuid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerTime: 'string',
      answered: 'number',
      busiType: 'string',
      callEndTime: 'string',
      callType: 'string',
      calledIp: 'string',
      calledNum: 'string',
      calledNumRegion: 'string',
      calledNumType: 'string',
      callerDisplay: 'string',
      callerIp: 'string',
      callerNum: 'string',
      callerNumRegion: 'string',
      callerNumType: 'string',
      duration: 'number',
      hangup: 'number',
      hangupType: 'number',
      ivnCliType: 'string',
      recordUrl: 'string',
      startTime: 'string',
      userUuid: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunkStatResponseBodyList extends $tea.Model {
  answeredCalls?: number;
  answeredRate?: number;
  averageDuration?: number;
  billing?: number;
  calledNumber?: string;
  callingNumber?: string;
  failedCalls?: number;
  totalCalls?: number;
  totalDuration?: number;
  static names(): { [key: string]: string } {
    return {
      answeredCalls: 'AnsweredCalls',
      answeredRate: 'AnsweredRate',
      averageDuration: 'AverageDuration',
      billing: 'Billing',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      failedCalls: 'FailedCalls',
      totalCalls: 'TotalCalls',
      totalDuration: 'TotalDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answeredCalls: 'number',
      answeredRate: 'number',
      averageDuration: 'number',
      billing: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      failedCalls: 'number',
      totalCalls: 'number',
      totalDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallResponseBodyList extends $tea.Model {
  answeredCalls?: number;
  businessType?: number;
  calledCalls?: number;
  callingNumber?: string;
  commitTs?: string;
  countryId?: string;
  failedCalls?: number;
  groupCallType?: number;
  requestId?: string;
  sendType?: number;
  status?: string;
  taskId?: string;
  taskName?: string;
  templateContent?: string;
  templateId?: string;
  tickerTs?: string;
  totalCalls?: number;
  totalDuration?: number;
  userUuid?: string;
  static names(): { [key: string]: string } {
    return {
      answeredCalls: 'AnsweredCalls',
      businessType: 'BusinessType',
      calledCalls: 'CalledCalls',
      callingNumber: 'CallingNumber',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      failedCalls: 'FailedCalls',
      groupCallType: 'GroupCallType',
      requestId: 'RequestId',
      sendType: 'SendType',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateContent: 'TemplateContent',
      templateId: 'TemplateId',
      tickerTs: 'TickerTs',
      totalCalls: 'TotalCalls',
      totalDuration: 'TotalDuration',
      userUuid: 'UserUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answeredCalls: 'number',
      businessType: 'number',
      calledCalls: 'number',
      callingNumber: 'string',
      commitTs: 'string',
      countryId: 'string',
      failedCalls: 'number',
      groupCallType: 'number',
      requestId: 'string',
      sendType: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      templateContent: 'string',
      templateId: 'string',
      tickerTs: 'string',
      totalCalls: 'number',
      totalDuration: 'number',
      userUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallDetailResponseBodyList extends $tea.Model {
  billing?: number;
  businessType?: number;
  calledNumber?: string;
  callingNumber?: string;
  commitTs?: string;
  countryId?: string;
  duration?: number;
  endTs?: string;
  hangupType?: number;
  sendType?: number;
  startTs?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      billing: 'Billing',
      businessType: 'BusinessType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      duration: 'Duration',
      endTs: 'EndTs',
      hangupType: 'HangupType',
      sendType: 'SendType',
      startTs: 'StartTs',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billing: 'number',
      businessType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      commitTs: 'string',
      countryId: 'string',
      duration: 'number',
      endTs: 'string',
      hangupType: 'number',
      sendType: 'number',
      startTs: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceCallStatResponseBodyList extends $tea.Model {
  answeredCalls?: number;
  answeredRate?: number;
  averageDuration?: number;
  billing?: number;
  businessType?: number;
  failedCalls?: number;
  totalCalls?: number;
  totalDuration?: number;
  static names(): { [key: string]: string } {
    return {
      answeredCalls: 'AnsweredCalls',
      answeredRate: 'AnsweredRate',
      averageDuration: 'AverageDuration',
      billing: 'Billing',
      businessType: 'BusinessType',
      failedCalls: 'FailedCalls',
      totalCalls: 'TotalCalls',
      totalDuration: 'TotalDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answeredCalls: 'number',
      answeredRate: 'number',
      averageDuration: 'number',
      billing: 'number',
      businessType: 'number',
      failedCalls: 'number',
      totalCalls: 'number',
      totalDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceFileResponseBodyList extends $tea.Model {
  auditRemark?: string;
  commitTs?: string;
  countryId?: string;
  fileId?: string;
  fileKey?: string;
  fileName?: string;
  fileUrl?: string;
  qualificationId?: string;
  status?: number;
  updateTs?: string;
  static names(): { [key: string]: string } {
    return {
      auditRemark: 'AuditRemark',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      fileId: 'FileId',
      fileKey: 'FileKey',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      qualificationId: 'QualificationId',
      status: 'Status',
      updateTs: 'UpdateTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRemark: 'string',
      commitTs: 'string',
      countryId: 'string',
      fileId: 'string',
      fileKey: 'string',
      fileName: 'string',
      fileUrl: 'string',
      qualificationId: 'string',
      status: 'number',
      updateTs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceTtsResponseBodyList extends $tea.Model {
  auditBy?: string;
  auditRemark?: string;
  auditTs?: string;
  commitTs?: string;
  countryId?: string;
  language?: string;
  qualificationId?: string;
  speed?: number;
  status?: number;
  templateId?: string;
  templateName?: string;
  templateText?: string;
  updateTs?: string;
  userUuid?: string;
  static names(): { [key: string]: string } {
    return {
      auditBy: 'AuditBy',
      auditRemark: 'AuditRemark',
      auditTs: 'AuditTs',
      commitTs: 'CommitTs',
      countryId: 'CountryId',
      language: 'Language',
      qualificationId: 'QualificationId',
      speed: 'Speed',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateText: 'TemplateText',
      updateTs: 'UpdateTs',
      userUuid: 'UserUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditBy: 'string',
      auditRemark: 'string',
      auditTs: 'string',
      commitTs: 'string',
      countryId: 'string',
      language: 'string',
      qualificationId: 'string',
      speed: 'number',
      status: 'number',
      templateId: 'string',
      templateName: 'string',
      templateText: 'string',
      updateTs: 'string',
      userUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHomeStatResponseBodyModelList extends $tea.Model {
  callFailed?: number;
  callSuccess?: number;
  callTotal?: number;
  date?: string;
  successRate?: number;
  static names(): { [key: string]: string } {
    return {
      callFailed: 'CallFailed',
      callSuccess: 'CallSuccess',
      callTotal: 'CallTotal',
      date: 'Date',
      successRate: 'SuccessRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFailed: 'number',
      callSuccess: 'number',
      callTotal: 'number',
      date: 'string',
      successRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHomeStatResponseBodyModel extends $tea.Model {
  cdrDrUrl?: string;
  list?: QueryHomeStatResponseBodyModelList[];
  static names(): { [key: string]: string } {
    return {
      cdrDrUrl: 'CdrDrUrl',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrDrUrl: 'string',
      list: { 'type': 'array', 'itemType': QueryHomeStatResponseBodyModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SipTrunkDetailResponseBodyModelList extends $tea.Model {
  answerTime?: string;
  answered?: number;
  busiType?: string;
  callEndTime?: string;
  callType?: string;
  calledIp?: string;
  calledNum?: string;
  calledNumRegion?: string;
  calledNumType?: string;
  callerDisplay?: string;
  callerIp?: string;
  callerNum?: string;
  callerNumRegion?: string;
  callerNumType?: string;
  duration?: number;
  hangup?: number;
  hangupType?: number;
  lvnCliType?: string;
  recordUrl?: string;
  startTime?: string;
  userUuid?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      answerTime: 'AnswerTime',
      answered: 'Answered',
      busiType: 'BusiType',
      callEndTime: 'CallEndTime',
      callType: 'CallType',
      calledIp: 'CalledIp',
      calledNum: 'CalledNum',
      calledNumRegion: 'CalledNumRegion',
      calledNumType: 'CalledNumType',
      callerDisplay: 'CallerDisplay',
      callerIp: 'CallerIp',
      callerNum: 'CallerNum',
      callerNumRegion: 'CallerNumRegion',
      callerNumType: 'CallerNumType',
      duration: 'Duration',
      hangup: 'Hangup',
      hangupType: 'HangupType',
      lvnCliType: 'LvnCliType',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      userUuid: 'UserUuid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerTime: 'string',
      answered: 'number',
      busiType: 'string',
      callEndTime: 'string',
      callType: 'string',
      calledIp: 'string',
      calledNum: 'string',
      calledNumRegion: 'string',
      calledNumType: 'string',
      callerDisplay: 'string',
      callerIp: 'string',
      callerNum: 'string',
      callerNumRegion: 'string',
      callerNumType: 'string',
      duration: 'number',
      hangup: 'number',
      hangupType: 'number',
      lvnCliType: 'string',
      recordUrl: 'string',
      startTime: 'string',
      userUuid: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SipTrunkDetailResponseBodyModel extends $tea.Model {
  list?: SipTrunkDetailResponseBodyModelList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SipTrunkDetailResponseBodyModelList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitNumberRequestNumberList extends $tea.Model {
  amount?: number;
  inboundConcurrency?: number;
  outboundConcurrency?: number;
  phoneType?: number;
  support?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      inboundConcurrency: 'InboundConcurrency',
      outboundConcurrency: 'OutboundConcurrency',
      phoneType: 'PhoneType',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      inboundConcurrency: 'number',
      outboundConcurrency: 'number',
      phoneType: 'number',
      support: 'number',
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
    this._endpoint = this.getEndpoint("dyvmsapi-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async backendCallGroupWithOptions(tmpReq: BackendCallGroupRequest, runtime: $Util.RuntimeOptions): Promise<BackendCallGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new BackendCallGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.calledNumber)) {
      request.calledNumberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.calledNumber, "CalledNumber", "json");
    }

    let query = { };
    if (!Util.isUnset(request.calledNumberShrink)) {
      query["CalledNumber"] = request.calledNumberShrink;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BackendCallGroup",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BackendCallGroupResponse>(await this.callApi(params, req, runtime), new BackendCallGroupResponse({}));
  }

  async backendCallGroup(request: BackendCallGroupRequest): Promise<BackendCallGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallGroupWithOptions(request, runtime);
  }

  async backendCallSignalWithOptions(request: BackendCallSignalRequest, runtime: $Util.RuntimeOptions): Promise<BackendCallSignalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BackendCallSignal",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BackendCallSignalResponse>(await this.callApi(params, req, runtime), new BackendCallSignalResponse({}));
  }

  async backendCallSignal(request: BackendCallSignalRequest): Promise<BackendCallSignalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallSignalWithOptions(request, runtime);
  }

  async cancleGroupCallWithOptions(request: CancleGroupCallRequest, runtime: $Util.RuntimeOptions): Promise<CancleGroupCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancleGroupCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancleGroupCallResponse>(await this.callApi(params, req, runtime), new CancleGroupCallResponse({}));
  }

  async cancleGroupCall(request: CancleGroupCallRequest): Promise<CancleGroupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancleGroupCallWithOptions(request, runtime);
  }

  async deleteApplyNumberRecordWithOptions(request: DeleteApplyNumberRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplyNumberRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplyNumberRecord",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplyNumberRecordResponse>(await this.callApi(params, req, runtime), new DeleteApplyNumberRecordResponse({}));
  }

  async deleteApplyNumberRecord(request: DeleteApplyNumberRecordRequest): Promise<DeleteApplyNumberRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplyNumberRecordWithOptions(request, runtime);
  }

  async deleteQualificationWithOptions(request: DeleteQualificationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQualification",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQualificationResponse>(await this.callApi(params, req, runtime), new DeleteQualificationResponse({}));
  }

  async deleteQualification(request: DeleteQualificationRequest): Promise<DeleteQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualificationWithOptions(request, runtime);
  }

  async deleteSipTrunkApplyWithOptions(request: DeleteSipTrunkApplyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSipTrunkApplyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyId)) {
      query["ApplyId"] = request.applyId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSipTrunkApply",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSipTrunkApplyResponse>(await this.callApi(params, req, runtime), new DeleteSipTrunkApplyResponse({}));
  }

  async deleteSipTrunkApply(request: DeleteSipTrunkApplyRequest): Promise<DeleteSipTrunkApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSipTrunkApplyWithOptions(request, runtime);
  }

  async deleteVoiceFileWithOptions(request: DeleteVoiceFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVoiceFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVoiceFile",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVoiceFileResponse>(await this.callApi(params, req, runtime), new DeleteVoiceFileResponse({}));
  }

  async deleteVoiceFile(request: DeleteVoiceFileRequest): Promise<DeleteVoiceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVoiceFileWithOptions(request, runtime);
  }

  async deleteVoiceTtsWithOptions(request: DeleteVoiceTtsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVoiceTtsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVoiceTts",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVoiceTtsResponse>(await this.callApi(params, req, runtime), new DeleteVoiceTtsResponse({}));
  }

  async deleteVoiceTts(request: DeleteVoiceTtsRequest): Promise<DeleteVoiceTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVoiceTtsWithOptions(request, runtime);
  }

  async downloadTemplateFileWithOptions(request: DownloadTemplateFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadTemplateFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadTemplateFile",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadTemplateFileResponse>(await this.callApi(params, req, runtime), new DownloadTemplateFileResponse({}));
  }

  async downloadTemplateFile(request: DownloadTemplateFileRequest): Promise<DownloadTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadTemplateFileWithOptions(request, runtime);
  }

  async getIntlVoiceOpenStatusWithOptions(request: GetIntlVoiceOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetIntlVoiceOpenStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIntlVoiceOpenStatus",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntlVoiceOpenStatusResponse>(await this.callApi(params, req, runtime), new GetIntlVoiceOpenStatusResponse({}));
  }

  async getIntlVoiceOpenStatus(request: GetIntlVoiceOpenStatusRequest): Promise<GetIntlVoiceOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntlVoiceOpenStatusWithOptions(request, runtime);
  }

  async getOssInfoForUploadFileWithOptions(request: GetOssInfoForUploadFileRequest, runtime: $Util.RuntimeOptions): Promise<GetOssInfoForUploadFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssInfoForUploadFile",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssInfoForUploadFileResponse>(await this.callApi(params, req, runtime), new GetOssInfoForUploadFileResponse({}));
  }

  async getOssInfoForUploadFile(request: GetOssInfoForUploadFileRequest): Promise<GetOssInfoForUploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssInfoForUploadFileWithOptions(request, runtime);
  }

  async homeStartWithOptions(request: HomeStartRequest, runtime: $Util.RuntimeOptions): Promise<HomeStartResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HomeStart",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HomeStartResponse>(await this.callApi(params, req, runtime), new HomeStartResponse({}));
  }

  async homeStart(request: HomeStartRequest): Promise<HomeStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.homeStartWithOptions(request, runtime);
  }

  async listApplyNumberRecordWithOptions(request: ListApplyNumberRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListApplyNumberRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplyNumberRecord",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplyNumberRecordResponse>(await this.callApi(params, req, runtime), new ListApplyNumberRecordResponse({}));
  }

  async listApplyNumberRecord(request: ListApplyNumberRecordRequest): Promise<ListApplyNumberRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplyNumberRecordWithOptions(request, runtime);
  }

  async listNumberWithOptions(request: ListNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyId)) {
      query["ApplyId"] = request.applyId;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.numberName)) {
      query["NumberName"] = request.numberName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneType)) {
      query["PhoneType"] = request.phoneType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNumber",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNumberResponse>(await this.callApi(params, req, runtime), new ListNumberResponse({}));
  }

  async listNumber(request: ListNumberRequest): Promise<ListNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNumberWithOptions(request, runtime);
  }

  async listQualificationWithOptions(request: ListQualificationRequest, runtime: $Util.RuntimeOptions): Promise<ListQualificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!Util.isUnset(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "ListQualification",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQualificationResponse>(await this.callApi(params, req, runtime), new ListQualificationResponse({}));
  }

  async listQualification(request: ListQualificationRequest): Promise<ListQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualificationWithOptions(request, runtime);
  }

  async listReceiptWithOptions(request: ListReceiptRequest, runtime: $Util.RuntimeOptions): Promise<ListReceiptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListReceipt",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListReceiptResponse>(await this.callApi(params, req, runtime), new ListReceiptResponse({}));
  }

  async listReceipt(request: ListReceiptRequest): Promise<ListReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listReceiptWithOptions(request, runtime);
  }

  async listSipTrunkWithOptions(request: ListSipTrunkRequest, runtime: $Util.RuntimeOptions): Promise<ListSipTrunkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "ListSipTrunk",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSipTrunkResponse>(await this.callApi(params, req, runtime), new ListSipTrunkResponse({}));
  }

  async listSipTrunk(request: ListSipTrunkRequest): Promise<ListSipTrunkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSipTrunkWithOptions(request, runtime);
  }

  async listSipTrunkDetailWithOptions(request: ListSipTrunkDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListSipTrunkDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSipTrunkDetail",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSipTrunkDetailResponse>(await this.callApi(params, req, runtime), new ListSipTrunkDetailResponse({}));
  }

  async listSipTrunkDetail(request: ListSipTrunkDetailRequest): Promise<ListSipTrunkDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSipTrunkDetailWithOptions(request, runtime);
  }

  async listSipTrunkStatWithOptions(request: ListSipTrunkStatRequest, runtime: $Util.RuntimeOptions): Promise<ListSipTrunkStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSipTrunkStat",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSipTrunkStatResponse>(await this.callApi(params, req, runtime), new ListSipTrunkStatResponse({}));
  }

  async listSipTrunkStat(request: ListSipTrunkStatRequest): Promise<ListSipTrunkStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSipTrunkStatWithOptions(request, runtime);
  }

  async listVoiceCallWithOptions(request: ListVoiceCallRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
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
      action: "ListVoiceCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceCallResponse>(await this.callApi(params, req, runtime), new ListVoiceCallResponse({}));
  }

  async listVoiceCall(request: ListVoiceCallRequest): Promise<ListVoiceCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceCallWithOptions(request, runtime);
  }

  async listVoiceCallDetailWithOptions(request: ListVoiceCallDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceCallDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.hangupType)) {
      query["HangupType"] = request.hangupType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
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
      action: "ListVoiceCallDetail",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceCallDetailResponse>(await this.callApi(params, req, runtime), new ListVoiceCallDetailResponse({}));
  }

  async listVoiceCallDetail(request: ListVoiceCallDetailRequest): Promise<ListVoiceCallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceCallDetailWithOptions(request, runtime);
  }

  async listVoiceCallStatWithOptions(request: ListVoiceCallStatRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceCallStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVoiceCallStat",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceCallStatResponse>(await this.callApi(params, req, runtime), new ListVoiceCallStatResponse({}));
  }

  async listVoiceCallStat(request: ListVoiceCallStatRequest): Promise<ListVoiceCallStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceCallStatWithOptions(request, runtime);
  }

  async listVoiceFileWithOptions(request: ListVoiceFileRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVoiceFile",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceFileResponse>(await this.callApi(params, req, runtime), new ListVoiceFileResponse({}));
  }

  async listVoiceFile(request: ListVoiceFileRequest): Promise<ListVoiceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceFileWithOptions(request, runtime);
  }

  async listVoiceTtsWithOptions(request: ListVoiceTtsRequest, runtime: $Util.RuntimeOptions): Promise<ListVoiceTtsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVoiceTts",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceTtsResponse>(await this.callApi(params, req, runtime), new ListVoiceTtsResponse({}));
  }

  async listVoiceTts(request: ListVoiceTtsRequest): Promise<ListVoiceTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVoiceTtsWithOptions(request, runtime);
  }

  async numberEnableWithOptions(request: NumberEnableRequest, runtime: $Util.RuntimeOptions): Promise<NumberEnableResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NumberEnable",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NumberEnableResponse>(await this.callApi(params, req, runtime), new NumberEnableResponse({}));
  }

  async numberEnable(request: NumberEnableRequest): Promise<NumberEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.numberEnableWithOptions(request, runtime);
  }

  async openIntlVoiceServiceWithOptions(request: OpenIntlVoiceServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenIntlVoiceServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenIntlVoiceService",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenIntlVoiceServiceResponse>(await this.callApi(params, req, runtime), new OpenIntlVoiceServiceResponse({}));
  }

  async openIntlVoiceService(request: OpenIntlVoiceServiceRequest): Promise<OpenIntlVoiceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openIntlVoiceServiceWithOptions(request, runtime);
  }

  async oswTest1WithOptions(request: OswTest1Request, runtime: $Util.RuntimeOptions): Promise<OswTest1Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OswTest1",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OswTest1Response>(await this.callApi(params, req, runtime), new OswTest1Response({}));
  }

  async oswTest1(request: OswTest1Request): Promise<OswTest1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.oswTest1WithOptions(request, runtime);
  }

  async queryFileOssUrlWithOptions(request: QueryFileOssUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryFileOssUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.fileKey)) {
      query["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFileOssUrl",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFileOssUrlResponse>(await this.callApi(params, req, runtime), new QueryFileOssUrlResponse({}));
  }

  async queryFileOssUrl(request: QueryFileOssUrlRequest): Promise<QueryFileOssUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFileOssUrlWithOptions(request, runtime);
  }

  async queryHomeStatWithOptions(request: QueryHomeStatRequest, runtime: $Util.RuntimeOptions): Promise<QueryHomeStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHomeStat",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHomeStatResponse>(await this.callApi(params, req, runtime), new QueryHomeStatResponse({}));
  }

  async queryHomeStat(request: QueryHomeStatRequest): Promise<QueryHomeStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHomeStatWithOptions(request, runtime);
  }

  async queryRecordingEnableWithOptions(request: QueryRecordingEnableRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordingEnableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordingEnable",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordingEnableResponse>(await this.callApi(params, req, runtime), new QueryRecordingEnableResponse({}));
  }

  async queryRecordingEnable(request: QueryRecordingEnableRequest): Promise<QueryRecordingEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordingEnableWithOptions(request, runtime);
  }

  async queryServiceEnableWithOptions(request: QueryServiceEnableRequest, runtime: $Util.RuntimeOptions): Promise<QueryServiceEnableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryServiceEnable",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryServiceEnableResponse>(await this.callApi(params, req, runtime), new QueryServiceEnableResponse({}));
  }

  async queryServiceEnable(request: QueryServiceEnableRequest): Promise<QueryServiceEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServiceEnableWithOptions(request, runtime);
  }

  async recordingEnableWithOptions(request: RecordingEnableRequest, runtime: $Util.RuntimeOptions): Promise<RecordingEnableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordingEnable",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordingEnableResponse>(await this.callApi(params, req, runtime), new RecordingEnableResponse({}));
  }

  async recordingEnable(request: RecordingEnableRequest): Promise<RecordingEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordingEnableWithOptions(request, runtime);
  }

  async setReceiptUrlWithOptions(request: SetReceiptUrlRequest, runtime: $Util.RuntimeOptions): Promise<SetReceiptUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdrDrUrl)) {
      query["CdrDrUrl"] = request.cdrDrUrl;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetReceiptUrl",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetReceiptUrlResponse>(await this.callApi(params, req, runtime), new SetReceiptUrlResponse({}));
  }

  async setReceiptUrl(request: SetReceiptUrlRequest): Promise<SetReceiptUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setReceiptUrlWithOptions(request, runtime);
  }

  async sipTrunkDetailWithOptions(request: SipTrunkDetailRequest, runtime: $Util.RuntimeOptions): Promise<SipTrunkDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SipTrunkDetail",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SipTrunkDetailResponse>(await this.callApi(params, req, runtime), new SipTrunkDetailResponse({}));
  }

  async sipTrunkDetail(request: SipTrunkDetailRequest): Promise<SipTrunkDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sipTrunkDetailWithOptions(request, runtime);
  }

  async submitGroupCallWithOptions(request: SubmitGroupCallRequest, runtime: $Util.RuntimeOptions): Promise<SubmitGroupCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.fileKey)) {
      query["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.groupCallType)) {
      query["GroupCallType"] = request.groupCallType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitGroupCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitGroupCallResponse>(await this.callApi(params, req, runtime), new SubmitGroupCallResponse({}));
  }

  async submitGroupCall(request: SubmitGroupCallRequest): Promise<SubmitGroupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitGroupCallWithOptions(request, runtime);
  }

  async submitNumberWithOptions(tmpReq: SubmitNumberRequest, runtime: $Util.RuntimeOptions): Promise<SubmitNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numberList)) {
      request.numberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numberList, "NumberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.applyNote)) {
      query["ApplyNote"] = request.applyNote;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.numberListShrink)) {
      query["NumberList"] = request.numberListShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitNumber",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitNumberResponse>(await this.callApi(params, req, runtime), new SubmitNumberResponse({}));
  }

  async submitNumber(request: SubmitNumberRequest): Promise<SubmitNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitNumberWithOptions(request, runtime);
  }

  async submitQualificationWithOptions(request: SubmitQualificationRequest, runtime: $Util.RuntimeOptions): Promise<SubmitQualificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.businessLicenseFileKey)) {
      query["BusinessLicenseFileKey"] = request.businessLicenseFileKey;
    }

    if (!Util.isUnset(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!Util.isUnset(request.contactEmail)) {
      query["ContactEmail"] = request.contactEmail;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.legalId)) {
      query["LegalId"] = request.legalId;
    }

    if (!Util.isUnset(request.legalLicenseFileKey)) {
      query["LegalLicenseFileKey"] = request.legalLicenseFileKey;
    }

    if (!Util.isUnset(request.legalName)) {
      query["LegalName"] = request.legalName;
    }

    if (!Util.isUnset(request.networkAccessFileKey)) {
      query["NetworkAccessFileKey"] = request.networkAccessFileKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.unifiedCode)) {
      query["UnifiedCode"] = request.unifiedCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitQualification",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitQualificationResponse>(await this.callApi(params, req, runtime), new SubmitQualificationResponse({}));
  }

  async submitQualification(request: SubmitQualificationRequest): Promise<SubmitQualificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitQualificationWithOptions(request, runtime);
  }

  async submitSipTrunkWithOptions(request: SubmitSipTrunkRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSipTrunkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyNote)) {
      query["ApplyNote"] = request.applyNote;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.inboundIpPorts)) {
      query["InboundIpPorts"] = request.inboundIpPorts;
    }

    if (!Util.isUnset(request.outboundIps)) {
      query["OutboundIps"] = request.outboundIps;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSipTrunk",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSipTrunkResponse>(await this.callApi(params, req, runtime), new SubmitSipTrunkResponse({}));
  }

  async submitSipTrunk(request: SubmitSipTrunkRequest): Promise<SubmitSipTrunkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSipTrunkWithOptions(request, runtime);
  }

  async submitVoiceFileWithOptions(request: SubmitVoiceFileRequest, runtime: $Util.RuntimeOptions): Promise<SubmitVoiceFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.fileKey)) {
      query["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitVoiceFile",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitVoiceFileResponse>(await this.callApi(params, req, runtime), new SubmitVoiceFileResponse({}));
  }

  async submitVoiceFile(request: SubmitVoiceFileRequest): Promise<SubmitVoiceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitVoiceFileWithOptions(request, runtime);
  }

  async submitVoiceTtsWithOptions(request: SubmitVoiceTtsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitVoiceTtsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateText)) {
      query["TemplateText"] = request.templateText;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitVoiceTts",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitVoiceTtsResponse>(await this.callApi(params, req, runtime), new SubmitVoiceTtsResponse({}));
  }

  async submitVoiceTts(request: SubmitVoiceTtsRequest): Promise<SubmitVoiceTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitVoiceTtsWithOptions(request, runtime);
  }

  async updateNumberWithOptions(request: UpdateNumberRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNumber",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNumberResponse>(await this.callApi(params, req, runtime), new UpdateNumberResponse({}));
  }

  async updateNumber(request: UpdateNumberRequest): Promise<UpdateNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNumberWithOptions(request, runtime);
  }

  async test02WithOptions(request: Test02Request, runtime: $Util.RuntimeOptions): Promise<Test02Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "test02",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<Test02Response>(await this.callApi(params, req, runtime), new Test02Response({}));
  }

  async test02(request: Test02Request): Promise<Test02Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.test02WithOptions(request, runtime);
  }

}
