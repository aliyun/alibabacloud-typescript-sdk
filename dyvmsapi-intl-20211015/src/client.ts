// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BackendCallGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The called numbers. You can specify up to 50,000 phone numbers.
   */
  calledNumber?: string[];
  /**
   * @remarks
   * The calling number.
   * 
   * If you do not specify this parameter, the system uses a local random number as the display number. If you use a dedicated number for outbound calls, you must specify the purchased number. You can specify only one number. You can log on to the VMS console and choose Number Management to view the purchased phone numbers.
   * 
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * The ISO2 country code.
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in a receipt message.
   * 
   * The value must be of the STRING type and 1 to 15 bytes in length.
   * 
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times the audio file is played. Valid values: 1 to 3.
   * 
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The delivery type. Valid values: 1 and 2.
   * 
   * 1: The audio file is delivered immediately.
   * 
   * 2: The audio file is delivered at a scheduled time. If you specify SendType as 2, you must specify TimingStart.
   * 
   * @example
   * 2
   */
  sendType?: number;
  /**
   * @remarks
   * The playback speed. Valid values: -500 to 500.
   * 
   * You must specify this parameter when the audio type is text-to-speech (TTS). You do not need to specify this parameter when you use recordings.
   * 
   * @example
   * 0
   */
  speed?: number;
  /**
   * @remarks
   * The task name.
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the audio file is scheduled to be delivered.
   * 
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @remarks
   * The voice template ID of the audio file.
   * 
   * You can log on to the VMS console and choose Voice Call Template > Audio File to view the template ID.
   * 
   * You must specify either TtsCode or VoiceCode. You can specify TtsCode to use the audio file as the call content. Alternatively, you can specify VoiceCode to use preset text as the call content.
   * 
   * @example
   * 100001
   */
  ttsCode?: string;
  /**
   * @remarks
   * The TTS template ID.
   * 
   * You can log on to the VMS console and choose Voice Call Template > TTS Template to view the template ID.
   * 
   * You must specify either TtsCode or VoiceCode. You can specify TtsCode to use the audio file as the call content. Alternatively, you can specify VoiceCode to use preset text as the call content.
   * 
   * @example
   * 200001
   */
  voiceCode?: string;
  /**
   * @remarks
   * The playback volume of the audio file. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
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
      outId: 'string',
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
  /**
   * @remarks
   * The called numbers. You can specify up to 50,000 phone numbers.
   */
  calledNumberShrink?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * If you do not specify this parameter, the system uses a local random number as the display number. If you use a dedicated number for outbound calls, you must specify the purchased number. You can specify only one number. You can log on to the VMS console and choose Number Management to view the purchased phone numbers.
   * 
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * The ISO2 country code.
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in a receipt message.
   * 
   * The value must be of the STRING type and 1 to 15 bytes in length.
   * 
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times the audio file is played. Valid values: 1 to 3.
   * 
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The delivery type. Valid values: 1 and 2.
   * 
   * 1: The audio file is delivered immediately.
   * 
   * 2: The audio file is delivered at a scheduled time. If you specify SendType as 2, you must specify TimingStart.
   * 
   * @example
   * 2
   */
  sendType?: number;
  /**
   * @remarks
   * The playback speed. Valid values: -500 to 500.
   * 
   * You must specify this parameter when the audio type is text-to-speech (TTS). You do not need to specify this parameter when you use recordings.
   * 
   * @example
   * 0
   */
  speed?: number;
  /**
   * @remarks
   * The task name.
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the audio file is scheduled to be delivered.
   * 
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @remarks
   * The voice template ID of the audio file.
   * 
   * You can log on to the VMS console and choose Voice Call Template > Audio File to view the template ID.
   * 
   * You must specify either TtsCode or VoiceCode. You can specify TtsCode to use the audio file as the call content. Alternatively, you can specify VoiceCode to use preset text as the call content.
   * 
   * @example
   * 100001
   */
  ttsCode?: string;
  /**
   * @remarks
   * The TTS template ID.
   * 
   * You can log on to the VMS console and choose Voice Call Template > TTS Template to view the template ID.
   * 
   * You must specify either TtsCode or VoiceCode. You can specify TtsCode to use the audio file as the call content. Alternatively, you can specify VoiceCode to use preset text as the call content.
   * 
   * @example
   * 200001
   */
  voiceCode?: string;
  /**
   * @remarks
   * The playback volume of the audio file. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
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
      outId: 'string',
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
  /**
   * @remarks
   * The response code.
   * 
   * The value OK indicates that the request was successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50FFA85-0B79-4421-A7BD-00B0A271966F
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID. You can use this ID to query the details of the task.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackendCallGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The phone number that receives the voice notification.
   * 
   * You must add the country code to the beginning of the phone number. Example: 85200\\*\\*\\*\\*00.
   * 
   * @example
   * 852****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * If you do not specify this parameter, the system uses a local random number as the display number. If you use a dedicated number for outbound calls, you must specify the purchased number. You can specify only one number. You can log on to the VMS console and choose Number Management to view the purchased phone numbers.
   * 
   * @example
   * 852****0000
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * The ISO2 country code.
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in a receipt message.
   * 
   * The value must be of the STRING type and 1 to 15 bytes in length.
   * 
   * @example
   * 22522****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times the voice notification is played back in a call. Valid values: 1 to 3. Default value: 3.
   * 
   * @example
   * 2
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The playback speed. Valid values: -500 to 500.
   * 
   * @example
   * 0
   */
  speed?: number;
  /**
   * @remarks
   * The ID of the approved voice verification code template.
   * 
   * You can log on to the VMS console and choose Voice Call Template to view the template ID.
   * 
   * @example
   * 1001
   */
  ttsCode?: string;
  /**
   * @remarks
   * The variables in the template, in the JSON format.
   * 
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * The playback volume of the voice notification. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
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
      outId: 'string',
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
  /**
   * @remarks
   * The unique receipt ID for the call. You can use this ID to query the details of a single call.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * The value OK indicates that the request was successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackendCallSignalResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GroupCallRequest extends $tea.Model {
  /**
   * @remarks
   * 被叫号码。上限为5万个。
   */
  calledNumber?: string[];
  /**
   * @remarks
   * 主叫号码。  若您不填该参数，系统将会使用当地随机号码作为外显号码。 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
   * 
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * 国家/地区二字码，ISO2。
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。  字符串类型，长度为1~15个字节。
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 语音文件的播放次数。取值范围：1~3。
   * 
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 发送类型：取值[1,2]。  1： 立即开始发送任务，不等待。  2： 定时开始发送任务。如果传该类型，TimingStart为必选字段。
   * 
   * @example
   * 3
   */
  sendType?: number;
  /**
   * @example
   * s****************D
   */
  signature?: string;
  /**
   * @example
   * l*********y
   */
  signatureNonce?: string;
  /**
   * @remarks
   * 语速控制，取值范围：-500~500。  音频类型为TTS时必传。录音文件可不传。
   * 
   * @example
   * 94
   */
  speed?: number;
  /**
   * @remarks
   * 任务名称。
   * 
   * @example
   * 群呼任务
   */
  taskName?: string;
  /**
   * @example
   * 20**-**-******10Z
   */
  timestamp?: string;
  /**
   * @remarks
   * 2022-05-01T08:00:00+08:00
   * 
   * @example
   * 定时发送的时间。
   */
  timingStart?: string;
  /**
   * @remarks
   * 文本转语音的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"文本转语音模板"，查看模板ID。  此参数与VoiceCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 1****01
   */
  ttsCode?: string;
  /**
   * @remarks
   * 模板中的变量参数，JSON格式。
   * 
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * 语音文件的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"语音文件"，查看模板ID。  此参数与TtsCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 2*****01
   */
  voiceCode?: string;
  /**
   * @remarks
   * 语音文件播放的音量。取值范围：0~100，默认取值100。
   * 
   * @example
   * 11
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: { 'type': 'array', 'itemType': 'string' },
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 被叫号码。上限为5万个。
   */
  calledNumberShrink?: string;
  /**
   * @remarks
   * 主叫号码。  若您不填该参数，系统将会使用当地随机号码作为外显号码。 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
   * 
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * 国家/地区二字码，ISO2。
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。  字符串类型，长度为1~15个字节。
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 语音文件的播放次数。取值范围：1~3。
   * 
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 发送类型：取值[1,2]。  1： 立即开始发送任务，不等待。  2： 定时开始发送任务。如果传该类型，TimingStart为必选字段。
   * 
   * @example
   * 3
   */
  sendType?: number;
  /**
   * @example
   * s****************D
   */
  signature?: string;
  /**
   * @example
   * l*********y
   */
  signatureNonce?: string;
  /**
   * @remarks
   * 语速控制，取值范围：-500~500。  音频类型为TTS时必传。录音文件可不传。
   * 
   * @example
   * 94
   */
  speed?: number;
  /**
   * @remarks
   * 任务名称。
   * 
   * @example
   * 群呼任务
   */
  taskName?: string;
  /**
   * @example
   * 20**-**-******10Z
   */
  timestamp?: string;
  /**
   * @remarks
   * 2022-05-01T08:00:00+08:00
   * 
   * @example
   * 定时发送的时间。
   */
  timingStart?: string;
  /**
   * @remarks
   * 文本转语音的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"文本转语音模板"，查看模板ID。  此参数与VoiceCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 1****01
   */
  ttsCode?: string;
  /**
   * @remarks
   * 模板中的变量参数，JSON格式。
   * 
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * 语音文件的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"语音文件"，查看模板ID。  此参数与TtsCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 2*****01
   */
  voiceCode?: string;
  /**
   * @remarks
   * 语音文件播放的音量。取值范围：0~100，默认取值100。
   * 
   * @example
   * 11
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumberShrink: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码。  返回OK代表请求成功。 其他错误码，请参见API错误码。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回信息描述
   * 
   * @example
   * OK
   */
  message?: string;
  model?: GroupCallResponseBodyModel;
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * E50F****-****-****-****-********966F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: GroupCallResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GroupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GroupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallRequest extends $tea.Model {
  /**
   * @remarks
   * 接收语音通知的手机号码。  号码格式：国际码+号码： 示例：85200****00。
   * 
   * @example
   * 852****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * 主叫号码。  若您不填该参数，系统将会使用当地随机号码作为外显号码。 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
   * 
   * @example
   * 852****0001
   */
  callerIdNumber?: string;
  /**
   * @remarks
   * 国家/地区二字码，ISO2。
   * 
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @remarks
   * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。  字符串类型，长度为1~15个字节。
   * 
   * @example
   * 22522****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 一通电话内语音通知内容的播放次数。取值范围：1~3，默认取值3。
   * 
   * @example
   * 2
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 发送类型：取值[1,2]。  1： 立即开始发送任务，不等待。  2： 定时开始发送任务。如果传该类型，TimingStart为必选字段。
   * 
   * @example
   * 1
   */
  sendType?: number;
  /**
   * @example
   * 9****************D
   */
  signature?: string;
  /**
   * @example
   * l*********y
   */
  signatureNonce?: string;
  /**
   * @remarks
   * 语速控制。取值范围为：-500~500。
   * 
   * @example
   * 0
   */
  speed?: number;
  /**
   * @remarks
   * 任务名称。
   * 
   * @example
   * 单呼任务名
   */
  taskName?: string;
  /**
   * @example
   * 20**-**-**T**%3A25%3A10Z
   */
  timestamp?: string;
  /**
   * @remarks
   * 定时发送的时间。
   * 
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @remarks
   * 文本转语音模板的语音ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"文本转语音模板"，查看模板ID。  此参数与VoiceCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 1001
   */
  ttsCode?: string;
  /**
   * @remarks
   * 模板中的变量参数，JSON格式。
   * 
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * 语音文件的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"语音文件"，查看模板ID。  此参数与TtsCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
   * 
   * @example
   * 1002
   */
  voiceCode?: string;
  /**
   * @remarks
   * 语音通知的播放音量。取值范围：0~100，默认取值100。
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码。  返回OK代表请求成功。 其他错误码，请参见API错误码。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回信息描述。
   * 
   * @example
   * OK
   */
  message?: string;
  model?: SignalCallResponseBodyModel;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * D9CB****-****-****-****-********9D23
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功，成功：true，失败：false。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: SignalCallResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignalCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SignalCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceGroupCallRequest extends $tea.Model {
  calledNumber?: string[];
  /**
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  sendType?: number;
  /**
   * @example
   * 100
   */
  speed?: number;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @example
   * 1****01
   */
  ttsCode?: string;
  /**
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @example
   * 2*****01
   */
  voiceCode?: string;
  /**
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: { 'type': 'array', 'itemType': 'string' },
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceGroupCallShrinkRequest extends $tea.Model {
  calledNumberShrink?: string;
  /**
   * @example
   * 852****1111
   */
  callerIdNumber?: string;
  /**
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  sendType?: number;
  /**
   * @example
   * 100
   */
  speed?: number;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @example
   * 1****01
   */
  ttsCode?: string;
  /**
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @example
   * 2*****01
   */
  voiceCode?: string;
  /**
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumberShrink: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceGroupCallResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * E50F****-****-****-****-********966F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceGroupCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceGroupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VoiceGroupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSingleCallRequest extends $tea.Model {
  /**
   * @example
   * 852****0000
   */
  calledNumber?: string;
  /**
   * @example
   * 852****0001
   */
  callerIdNumber?: string;
  /**
   * @example
   * HK
   */
  countryId?: string;
  /**
   * @example
   * 22522****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 2
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  sendType?: number;
  /**
   * @example
   * 0
   */
  speed?: number;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * 2022-05-01T08:00:00+08:00
   */
  timingStart?: string;
  /**
   * @example
   * 1001
   */
  ttsCode?: string;
  /**
   * @example
   * {"code":"1234"}
   */
  ttsParam?: string;
  /**
   * @example
   * 1002
   */
  voiceCode?: string;
  /**
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSingleCallResponseBody extends $tea.Model {
  /**
   * @example
   * ""
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * D9CB****-****-****-****-********9D23
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSingleCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceSingleCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VoiceSingleCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 任务ID，可以通过此ID查询任务的详情。
   * 
   * @example
   * 550E****-****-****-****-********00A0
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 任务ID，可以通过此ID查询任务的详情。
   * 
   * @example
   * 550E****-****-****-****-********0CA0
   */
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
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

  /**
   * Initiates a voice group call to multiple phone numbers. The content of the group call is that of approved templates. You can log on to the VMS console and choose Voice Call Template to view the template ID. This feature enqueues the phone numbers to be called. The time when the phone numbers are called is uncertain.
   * 
   * @param tmpReq - BackendCallGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackendCallGroupResponse
   */
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

  /**
   * Initiates a voice group call to multiple phone numbers. The content of the group call is that of approved templates. You can log on to the VMS console and choose Voice Call Template to view the template ID. This feature enqueues the phone numbers to be called. The time when the phone numbers are called is uncertain.
   * 
   * @param request - BackendCallGroupRequest
   * @returns BackendCallGroupResponse
   */
  async backendCallGroup(request: BackendCallGroupRequest): Promise<BackendCallGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallGroupWithOptions(request, runtime);
  }

  /**
   * Sends a voice verification code and voice notification with variables to a phone number.
   * 
   * @param request - BackendCallSignalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackendCallSignalResponse
   */
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

  /**
   * Sends a voice verification code and voice notification with variables to a phone number.
   * 
   * @param request - BackendCallSignalRequest
   * @returns BackendCallSignalResponse
   */
  async backendCallSignal(request: BackendCallSignalRequest): Promise<BackendCallSignalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallSignalWithOptions(request, runtime);
  }

  /**
   * 向指定号码发送语音验证码和带参数变量的语音通知，支持语音文件模板或文本转语音模板
   * 
   * @param tmpReq - GroupCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupCallResponse
   */
  async groupCallWithOptions(tmpReq: GroupCallRequest, runtime: $Util.RuntimeOptions): Promise<GroupCallResponse> {
    Util.validateModel(tmpReq);
    let request = new GroupCallShrinkRequest({ });
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureNonce)) {
      query["SignatureNonce"] = request.signatureNonce;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["Timestamp"] = request.timestamp;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
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
      action: "GroupCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GroupCallResponse>(await this.callApi(params, req, runtime), new GroupCallResponse({}));
  }

  /**
   * 向指定号码发送语音验证码和带参数变量的语音通知，支持语音文件模板或文本转语音模板
   * 
   * @param request - GroupCallRequest
   * @returns GroupCallResponse
   */
  async groupCall(request: GroupCallRequest): Promise<GroupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.groupCallWithOptions(request, runtime);
  }

  /**
   * 向指定号码发送语音验证码和带参数变量的语音通知，支持语音文件模板或文本转语音模板
   * 
   * @param request - SignalCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignalCallResponse
   */
  async signalCallWithOptions(request: SignalCallRequest, runtime: $Util.RuntimeOptions): Promise<SignalCallResponse> {
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureNonce)) {
      query["SignatureNonce"] = request.signatureNonce;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["Timestamp"] = request.timestamp;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
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
      action: "SignalCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignalCallResponse>(await this.callApi(params, req, runtime), new SignalCallResponse({}));
  }

  /**
   * 向指定号码发送语音验证码和带参数变量的语音通知，支持语音文件模板或文本转语音模板
   * 
   * @param request - SignalCallRequest
   * @returns SignalCallResponse
   */
  async signalCall(request: SignalCallRequest): Promise<SignalCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signalCallWithOptions(request, runtime);
  }

  /**
   * 国际语音api-语音群呼
   * 
   * @param tmpReq - VoiceGroupCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceGroupCallResponse
   */
  async voiceGroupCallWithOptions(tmpReq: VoiceGroupCallRequest, runtime: $Util.RuntimeOptions): Promise<VoiceGroupCallResponse> {
    Util.validateModel(tmpReq);
    let request = new VoiceGroupCallShrinkRequest({ });
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
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
      action: "VoiceGroupCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VoiceGroupCallResponse>(await this.callApi(params, req, runtime), new VoiceGroupCallResponse({}));
  }

  /**
   * 国际语音api-语音群呼
   * 
   * @param request - VoiceGroupCallRequest
   * @returns VoiceGroupCallResponse
   */
  async voiceGroupCall(request: VoiceGroupCallRequest): Promise<VoiceGroupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceGroupCallWithOptions(request, runtime);
  }

  /**
   * 国际语音api-语音单呼
   * 
   * @param request - VoiceSingleCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceSingleCallResponse
   */
  async voiceSingleCallWithOptions(request: VoiceSingleCallRequest, runtime: $Util.RuntimeOptions): Promise<VoiceSingleCallResponse> {
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

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
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
      action: "VoiceSingleCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VoiceSingleCallResponse>(await this.callApi(params, req, runtime), new VoiceSingleCallResponse({}));
  }

  /**
   * 国际语音api-语音单呼
   * 
   * @param request - VoiceSingleCallRequest
   * @returns VoiceSingleCallResponse
   */
  async voiceSingleCall(request: VoiceSingleCallRequest): Promise<VoiceSingleCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceSingleCallWithOptions(request, runtime);
  }

}
