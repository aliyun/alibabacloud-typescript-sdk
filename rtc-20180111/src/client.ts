// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRecordTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  name?: string;
  taskProfile?: string;
  mediaEncode?: number;
  backgroundColor?: number;
  ossBucket?: string;
  ossFilePrefix?: string;
  fileSplitInterval?: number;
  delayStopTime?: number;
  mnsQueue?: string;
  httpCallbackUrl?: string;
  layoutIds?: number[];
  formats?: string[];
  backgrounds?: AddRecordTemplateRequestBackgrounds[];
  watermarks?: AddRecordTemplateRequestWatermarks[];
  clockWidgets?: AddRecordTemplateRequestClockWidgets[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      name: 'Name',
      taskProfile: 'TaskProfile',
      mediaEncode: 'MediaEncode',
      backgroundColor: 'BackgroundColor',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      delayStopTime: 'DelayStopTime',
      mnsQueue: 'MnsQueue',
      httpCallbackUrl: 'HttpCallbackUrl',
      layoutIds: 'LayoutIds',
      formats: 'Formats',
      backgrounds: 'Backgrounds',
      watermarks: 'Watermarks',
      clockWidgets: 'ClockWidgets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      name: 'string',
      taskProfile: 'string',
      mediaEncode: 'number',
      backgroundColor: 'number',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      fileSplitInterval: 'number',
      delayStopTime: 'number',
      mnsQueue: 'string',
      httpCallbackUrl: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      formats: { 'type': 'array', 'itemType': 'string' },
      backgrounds: { 'type': 'array', 'itemType': AddRecordTemplateRequestBackgrounds },
      watermarks: { 'type': 'array', 'itemType': AddRecordTemplateRequestWatermarks },
      clockWidgets: { 'type': 'array', 'itemType': AddRecordTemplateRequestClockWidgets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  playDomain?: string;
  ruleName?: string;
  callBack?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      playDomain: 'PlayDomain',
      ruleName: 'RuleName',
      callBack: 'CallBack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      playDomain: 'string',
      ruleName: 'string',
      callBack: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChannelRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChannelResponseBody extends $tea.Model {
  nonce?: string;
  requestId?: string;
  channelKey?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      nonce: 'Nonce',
      requestId: 'RequestId',
      channelKey: 'ChannelKey',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonce: 'string',
      requestId: 'string',
      channelKey: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceName?: string;
  clientToken?: string;
  startTime?: string;
  type?: string;
  remindNotice?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceName: 'ConferenceName',
      clientToken: 'ClientToken',
      startTime: 'StartTime',
      type: 'Type',
      remindNotice: 'RemindNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceName: 'string',
      clientToken: 'string',
      startTime: 'string',
      type: 'string',
      remindNotice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceResponseBody extends $tea.Model {
  authInfo?: CreateConferenceResponseBodyAuthInfo;
  requestId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'AuthInfo',
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: CreateConferenceResponseBodyAuthInfo,
      requestId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  callbackUrl?: string;
  clientToken?: string;
  users?: string[];
  events?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      users: 'Users',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      callbackUrl: 'string',
      clientToken: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      events: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeResponseBody extends $tea.Model {
  subscribeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeId: 'SubscribeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEventSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  name?: string;
  audioMixCount?: number;
  panes?: CreateMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      name: 'Name',
      audioMixCount: 'AudioMixCount',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      name: 'string',
      audioMixCount: 'number',
      panes: { 'type': 'array', 'itemType': CreateMPULayoutRequestPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutResponseBody extends $tea.Model {
  requestId?: string;
  layoutId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layoutId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMPULayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPURuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelPrefix?: string;
  mediaEncode?: number;
  backgroundColor?: number;
  cropMode?: number;
  taskProfile?: string;
  playDomain?: string;
  callBack?: string;
  layoutIds?: number[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelPrefix: 'ChannelPrefix',
      mediaEncode: 'MediaEncode',
      backgroundColor: 'BackgroundColor',
      cropMode: 'CropMode',
      taskProfile: 'TaskProfile',
      playDomain: 'PlayDomain',
      callBack: 'CallBack',
      layoutIds: 'LayoutIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelPrefix: 'string',
      mediaEncode: 'number',
      backgroundColor: 'number',
      cropMode: 'number',
      taskProfile: 'string',
      playDomain: 'string',
      callBack: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPURuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPURuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMPURuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMPURuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForRtcRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForRtcResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class CreateServiceLinkedRoleForRtcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleForRtcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleForRtcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  callbackUrl?: string;
  clientToken?: string;
  users?: string[];
  events?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      users: 'Users',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      callbackUrl: 'string',
      clientToken: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      events: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeResponseBody extends $tea.Model {
  subscribeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeId: 'SubscribeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoLiveStreamRuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoLiveStreamRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConferenceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConferenceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSubscribeRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      subscribeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteEventSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPULayoutRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  layoutId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      layoutId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPULayoutResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteMPULayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMPULayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPURuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPURuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteMPURuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMPURuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMPURuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      subscribeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  status?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      status: 'Status',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      status: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  appList?: DescribeAppsResponseBodyAppList;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      appList: DescribeAppsResponseBodyAppList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeAutoLiveStreamRuleResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeAutoLiveStreamRuleResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  timestamp?: number;
  userList?: DescribeChannelParticipantsResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      timestamp: 'number',
      userList: DescribeChannelParticipantsResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelParticipantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelParticipantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersResponseBody extends $tea.Model {
  requestId?: string;
  interactiveUserList?: string[];
  liveUserNum?: number;
  channelProfile?: number;
  interactiveUserNum?: number;
  isChannelExist?: boolean;
  timestamp?: number;
  userList?: string[];
  liveUserList?: string[];
  commTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      interactiveUserList: 'InteractiveUserList',
      liveUserNum: 'LiveUserNum',
      channelProfile: 'ChannelProfile',
      interactiveUserNum: 'InteractiveUserNum',
      isChannelExist: 'IsChannelExist',
      timestamp: 'Timestamp',
      userList: 'UserList',
      liveUserList: 'LiveUserList',
      commTotalNum: 'CommTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      interactiveUserList: { 'type': 'array', 'itemType': 'string' },
      liveUserNum: 'number',
      channelProfile: 'number',
      interactiveUserNum: 'number',
      isChannelExist: 'boolean',
      timestamp: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
      liveUserList: { 'type': 'array', 'itemType': 'string' },
      commTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConferenceAuthInfoRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConferenceAuthInfoResponseBody extends $tea.Model {
  authInfo?: DescribeConferenceAuthInfoResponseBodyAuthInfo;
  requestId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'AuthInfo',
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: DescribeConferenceAuthInfoResponseBodyAuthInfo,
      requestId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConferenceAuthInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConferenceAuthInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConferenceAuthInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  layoutId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      layoutId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoResponseBody extends $tea.Model {
  requestId?: string;
  layout?: DescribeMPULayoutInfoResponseBodyLayout;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layout: DescribeMPULayoutInfoResponseBodyLayout,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMPULayoutInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMPULayoutInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  layoutId?: number;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      layoutId: 'LayoutId',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      layoutId: 'number',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  layouts?: DescribeMPULayoutInfoListResponseBodyLayouts;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      layouts: 'Layouts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      layouts: DescribeMPULayoutInfoListResponseBodyLayouts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMPULayoutInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMPULayoutInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutListResponseBody extends $tea.Model {
  requestId?: string;
  layoutIds?: DescribeMPULayoutListResponseBodyLayoutIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layoutIds: 'LayoutIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layoutIds: DescribeMPULayoutListResponseBodyLayoutIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMPULayoutListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMPULayoutListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPURuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPURuleResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeMPURuleResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeMPURuleResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPURuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMPURuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMPURuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  pageSize?: number;
  pageNum?: number;
  startTime?: string;
  endTime?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      startTime: 'StartTime',
      endTime: 'EndTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      startTime: 'string',
      endTime: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  recordFiles?: DescribeRecordFilesResponseBodyRecordFiles[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      recordFiles: 'RecordFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      recordFiles: { 'type': 'array', 'itemType': DescribeRecordFilesResponseBodyRecordFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTasksRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNum?: number;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      status: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNum: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTasksResponseBody extends $tea.Model {
  recordTasks?: DescribeRecordTasksResponseBodyRecordTasks[];
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordTasks: 'RecordTasks',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTasks: { 'type': 'array', 'itemType': DescribeRecordTasksResponseBodyRecordTasks },
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  pageSize?: number;
  pageNum?: number;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      pageSize: 'number',
      pageNum: 'number',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  templates?: DescribeRecordTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTCAppKeyRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTCAppKeyResponseBody extends $tea.Model {
  requestId?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTCAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRTCAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRTCAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelCntDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  serviceArea?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      serviceArea: 'ServiceArea',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      serviceArea: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelCntDataResponseBody extends $tea.Model {
  requestId?: string;
  channelCntDataPerInterval?: DescribeRtcChannelCntDataResponseBodyChannelCntDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      channelCntDataPerInterval: 'ChannelCntDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      channelCntDataPerInterval: DescribeRtcChannelCntDataResponseBodyChannelCntDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelCntDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  startTime?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailResponseBody extends $tea.Model {
  totalCnt?: number;
  pageSize?: number;
  requestId?: string;
  pageNo?: number;
  channelInfo?: DescribeRtcChannelDetailResponseBodyChannelInfo[];
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCnt: 'TotalCnt',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNo: 'PageNo',
      channelInfo: 'ChannelInfo',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCnt: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNo: 'number',
      channelInfo: { 'type': 'array', 'itemType': DescribeRtcChannelDetailResponseBodyChannelInfo },
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  timePoint?: string;
  sortType?: string;
  serviceArea?: string;
  userId?: string;
  channelId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      timePoint: 'TimePoint',
      sortType: 'SortType',
      serviceArea: 'ServiceArea',
      userId: 'UserId',
      channelId: 'ChannelId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      timePoint: 'string',
      sortType: 'string',
      serviceArea: 'string',
      userId: 'string',
      channelId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBody extends $tea.Model {
  totalCnt?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  channelList?: DescribeRtcChannelListResponseBodyChannelList;
  static names(): { [key: string]: string } {
    return {
      totalCnt: 'TotalCnt',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCnt: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      channelList: DescribeRtcChannelListResponseBodyChannelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  timePoint?: string;
  appId?: string;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      timePoint: 'TimePoint',
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      timePoint: 'string',
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBody extends $tea.Model {
  requestId?: string;
  channelMetricInfo?: DescribeRtcChannelMetricResponseBodyChannelMetricInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      channelMetricInfo: 'ChannelMetricInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      channelMetricInfo: DescribeRtcChannelMetricResponseBodyChannelMetricInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  pubUid?: string;
  subUid?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      pubUid: 'PubUid',
      subUid: 'SubUid',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      pubUid: 'string',
      subUid: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricsResponseBody extends $tea.Model {
  metrics?: DescribeRtcChannelMetricsResponseBodyMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeRtcChannelMetricsResponseBodyMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  startTime?: string;
  endTime?: string;
  channelId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      channelId: 'ChannelId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      startTime: 'string',
      endTime: 'string',
      channelId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelsResponseBody extends $tea.Model {
  totalCnt?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  channels?: DescribeRtcChannelsResponseBodyChannels[];
  static names(): { [key: string]: string } {
    return {
      totalCnt: 'TotalCnt',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCnt: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      channels: { 'type': 'array', 'itemType': DescribeRtcChannelsResponseBodyChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUserListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  pageNo?: number;
  pageSize?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUserListResponseBody extends $tea.Model {
  totalCnt?: number;
  requestId?: string;
  pageSize?: number;
  pageNo?: number;
  userList?: DescribeRtcChannelUserListResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      totalCnt: 'TotalCnt',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCnt: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNo: 'number',
      userList: DescribeRtcChannelUserListResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  serviceArea?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      serviceArea: 'ServiceArea',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      serviceArea: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBody extends $tea.Model {
  requestId?: string;
  durationDataPerInterval?: DescribeRtcDurationDataResponseBodyDurationDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      durationDataPerInterval: 'DurationDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      durationDataPerInterval: DescribeRtcDurationDataResponseBodyDurationDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcDurationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcDurationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  serviceArea?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      serviceArea: 'ServiceArea',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      serviceArea: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBody extends $tea.Model {
  peakChannelCntDataPerInterval?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      peakChannelCntDataPerInterval: 'PeakChannelCntDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntDataPerInterval: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcPeakChannelCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcPeakChannelCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakUserCntDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  serviceArea?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      serviceArea: 'ServiceArea',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      serviceArea: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakUserCntDataResponseBody extends $tea.Model {
  peakUserCntDataPerInterval?: DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerInterval;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      peakUserCntDataPerInterval: 'PeakUserCntDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakUserCntDataPerInterval: DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerInterval,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakUserCntDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcPeakUserCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcPeakUserCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleResponseBody extends $tea.Model {
  requestId?: string;
  scale?: DescribeRtcScaleResponseBodyScale[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scale: 'Scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scale: { 'type': 'array', 'itemType': DescribeRtcScaleResponseBodyScale },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcScaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcScaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleDetailRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleDetailResponseBody extends $tea.Model {
  requestId?: string;
  scale?: DescribeRtcScaleDetailResponseBodyScale[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scale: 'Scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scale: { 'type': 'array', 'itemType': DescribeRtcScaleDetailResponseBodyScale },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcScaleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcScaleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  serviceArea?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      serviceArea: 'ServiceArea',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      serviceArea: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBody extends $tea.Model {
  requestId?: string;
  userCntDataPerInterval?: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userCntDataPerInterval: 'UserCntDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userCntDataPerInterval: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcUserCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcUserCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  uid?: string;
  channelId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      uid: 'Uid',
      channelId: 'ChannelId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      uid: 'string',
      channelId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventsResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeRtcUserEventsResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeRtcUserEventsResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcUserEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcUserEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  appId?: string;
  channelId?: string;
  pubUser?: string;
  subUser?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      appId: 'AppId',
      channelId: 'ChannelId',
      pubUser: 'PubUser',
      subUser: 'SubUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      appId: 'string',
      channelId: 'string',
      pubUser: 'string',
      subUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserListResponseBody extends $tea.Model {
  requestId?: string;
  userList?: DescribeRtcUserListResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userList: DescribeRtcUserListResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBody extends $tea.Model {
  requestId?: string;
  isInChannel?: boolean;
  timestamp?: number;
  isChannelExist?: boolean;
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isInChannel: 'IsInChannel',
      timestamp: 'Timestamp',
      isChannelExist: 'IsChannelExist',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isInChannel: 'boolean',
      timestamp: 'number',
      isChannelExist: 'boolean',
      property: { 'type': 'array', 'itemType': DescribeUserInfoInChannelResponseBodyProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserInfoInChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserInfoInChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMPURuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMPURuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DisableMPURuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableMPURuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableMPURuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMPURuleRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMPURuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class EnableMPURuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableMPURuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableMPURuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMPUTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMPUTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class ModifyAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConferenceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  conferenceName?: string;
  startTime?: string;
  type?: string;
  remindNotice?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      conferenceName: 'ConferenceName',
      startTime: 'StartTime',
      type: 'Type',
      remindNotice: 'RemindNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      conferenceName: 'string',
      startTime: 'string',
      type: 'string',
      remindNotice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConferenceResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyConferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyConferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyConferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  name?: string;
  layoutId?: number;
  audioMixCount?: number;
  panes?: ModifyMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      name: 'Name',
      layoutId: 'LayoutId',
      audioMixCount: 'AudioMixCount',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      name: 'string',
      layoutId: 'number',
      audioMixCount: 'number',
      panes: { 'type': 'array', 'itemType': ModifyMPULayoutRequestPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class ModifyMPULayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMPULayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  participantIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      participantIds: 'ParticipantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  participants?: MuteAudioResponseBodyParticipants;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
      participants: 'Participants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
      participants: MuteAudioResponseBodyParticipants,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MuteAudioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MuteAudioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioAllRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  participantId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      participantId: 'ParticipantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      participantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioAllResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  participants?: MuteAudioAllResponseBodyParticipants;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
      participants: 'Participants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
      participants: MuteAudioAllResponseBodyParticipants,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MuteAudioAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MuteAudioAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReceiveNotifyRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  traceId?: string;
  bizId?: string;
  event?: string;
  contentType?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      traceId: 'TraceId',
      bizId: 'BizId',
      event: 'Event',
      contentType: 'ContentType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      traceId: 'string',
      bizId: 'string',
      event: 'string',
      contentType: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReceiveNotifyResponseBody extends $tea.Model {
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReceiveNotifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReceiveNotifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReceiveNotifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveParticipantsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  participantIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      participantIds: 'ParticipantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveParticipantsResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  participants?: RemoveParticipantsResponseBodyParticipants;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
      participants: 'Participants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
      participants: RemoveParticipantsResponseBodyParticipants,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveParticipantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveParticipantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveParticipantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  terminalIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      terminalIds: 'TerminalIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      terminalIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBody extends $tea.Model {
  requestId?: string;
  terminals?: RemoveTerminalsResponseBodyTerminals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      terminals: 'Terminals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      terminals: RemoveTerminalsResponseBodyTerminals,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTerminalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTerminalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetChannelPropertyRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  maxUserNum?: number;
  startTime?: number;
  duration?: number;
  priority?: string;
  topics?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      maxUserNum: 'MaxUserNum',
      startTime: 'StartTime',
      duration: 'Duration',
      priority: 'Priority',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      maxUserNum: 'number',
      startTime: 'number',
      duration: 'number',
      priority: 'string',
      topics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetChannelPropertyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class SetChannelPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetChannelPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetChannelPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  taskId?: string;
  taskProfile?: string;
  taskMode?: number;
  mixMode?: number;
  cropMode?: number;
  mediaEncode?: number;
  sourceType?: string;
  streamType?: number;
  backgroundColor?: number;
  streamURL?: string;
  payloadType?: number;
  reportVad?: number;
  rtpExtInfo?: number;
  timeStampRef?: number;
  vadInterval?: number;
  subSpecUsers?: string[];
  subSpecAudioUsers?: string[];
  layoutIds?: number[];
  userPanes?: StartMPUTaskRequestUserPanes[];
  backgrounds?: StartMPUTaskRequestBackgrounds[];
  watermarks?: StartMPUTaskRequestWatermarks[];
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      taskMode: 'TaskMode',
      mixMode: 'MixMode',
      cropMode: 'CropMode',
      mediaEncode: 'MediaEncode',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      backgroundColor: 'BackgroundColor',
      streamURL: 'StreamURL',
      payloadType: 'PayloadType',
      reportVad: 'ReportVad',
      rtpExtInfo: 'RtpExtInfo',
      timeStampRef: 'TimeStampRef',
      vadInterval: 'VadInterval',
      subSpecUsers: 'SubSpecUsers',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      layoutIds: 'LayoutIds',
      userPanes: 'UserPanes',
      backgrounds: 'Backgrounds',
      watermarks: 'Watermarks',
      clockWidgets: 'ClockWidgets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      taskProfile: 'string',
      taskMode: 'number',
      mixMode: 'number',
      cropMode: 'number',
      mediaEncode: 'number',
      sourceType: 'string',
      streamType: 'number',
      backgroundColor: 'number',
      streamURL: 'string',
      payloadType: 'number',
      reportVad: 'number',
      rtpExtInfo: 'number',
      timeStampRef: 'number',
      vadInterval: 'number',
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      userPanes: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanes },
      backgrounds: { 'type': 'array', 'itemType': StartMPUTaskRequestBackgrounds },
      watermarks: { 'type': 'array', 'itemType': StartMPUTaskRequestWatermarks },
      clockWidgets: { 'type': 'array', 'itemType': StartMPUTaskRequestClockWidgets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class StartMPUTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartMPUTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  taskId?: string;
  taskProfile?: string;
  mediaEncode?: number;
  templateId?: string;
  subSpecUsers?: string[];
  userPanes?: StartRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      mediaEncode: 'MediaEncode',
      templateId: 'TemplateId',
      subSpecUsers: 'SubSpecUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      taskProfile: 'string',
      mediaEncode: 'number',
      templateId: 'string',
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class StartRecordTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRecordTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelUserPublishRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelUserPublishResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class StopChannelUserPublishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopChannelUserPublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopChannelUserPublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class StopMPUTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMPUTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordTaskRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class StopRecordTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopRecordTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  participantIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      participantIds: 'ParticipantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  participants?: UnmuteAudioResponseBodyParticipants;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
      participants: 'Participants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
      participants: UnmuteAudioResponseBodyParticipants,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnmuteAudioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnmuteAudioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioAllRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  conferenceId?: string;
  participantId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      conferenceId: 'ConferenceId',
      participantId: 'ParticipantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      conferenceId: 'string',
      participantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioAllResponseBody extends $tea.Model {
  requestId?: string;
  conferenceId?: string;
  participants?: UnmuteAudioAllResponseBodyParticipants;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conferenceId: 'ConferenceId',
      participants: 'Participants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conferenceId: 'string',
      participants: UnmuteAudioAllResponseBodyParticipants,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnmuteAudioAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnmuteAudioAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChannelRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  nonce?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      nonce: 'Nonce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      nonce: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChannelResponseBody extends $tea.Model {
  nonce?: string;
  requestId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      nonce: 'Nonce',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonce: 'string',
      requestId: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  taskId?: string;
  cropMode?: number;
  backgroundColor?: number;
  layoutIds?: number[];
  subSpecUsers?: string[];
  userPanes?: UpdateMPULayoutRequestUserPanes[];
  backgrounds?: UpdateMPULayoutRequestBackgrounds[];
  watermarks?: UpdateMPULayoutRequestWatermarks[];
  clockWidgets?: UpdateMPULayoutRequestClockWidgets[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      taskId: 'TaskId',
      cropMode: 'CropMode',
      backgroundColor: 'BackgroundColor',
      layoutIds: 'LayoutIds',
      subSpecUsers: 'SubSpecUsers',
      userPanes: 'UserPanes',
      backgrounds: 'Backgrounds',
      watermarks: 'Watermarks',
      clockWidgets: 'ClockWidgets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      taskId: 'string',
      cropMode: 'number',
      backgroundColor: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateMPULayoutRequestUserPanes },
      backgrounds: { 'type': 'array', 'itemType': UpdateMPULayoutRequestBackgrounds },
      watermarks: { 'type': 'array', 'itemType': UpdateMPULayoutRequestWatermarks },
      clockWidgets: { 'type': 'array', 'itemType': UpdateMPULayoutRequestClockWidgets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateMPULayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMPULayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  channelId?: string;
  taskId?: string;
  templateId?: string;
  subSpecUsers?: string[];
  userPanes?: UpdateRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      subSpecUsers: 'SubSpecUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      templateId: 'string',
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateRecordTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRecordTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  appId?: string;
  name?: string;
  templateId?: string;
  taskProfile?: string;
  mediaEncode?: number;
  backgroundColor?: number;
  ossBucket?: string;
  ossFilePrefix?: string;
  mnsQueue?: string;
  httpCallbackUrl?: string;
  fileSplitInterval?: number;
  delayStopTime?: number;
  layoutIds?: number[];
  formats?: string[];
  backgrounds?: UpdateRecordTemplateRequestBackgrounds[];
  watermarks?: UpdateRecordTemplateRequestWatermarks[];
  clockWidgets?: UpdateRecordTemplateRequestClockWidgets[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      appId: 'AppId',
      name: 'Name',
      templateId: 'TemplateId',
      taskProfile: 'TaskProfile',
      mediaEncode: 'MediaEncode',
      backgroundColor: 'BackgroundColor',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      mnsQueue: 'MnsQueue',
      httpCallbackUrl: 'HttpCallbackUrl',
      fileSplitInterval: 'FileSplitInterval',
      delayStopTime: 'DelayStopTime',
      layoutIds: 'LayoutIds',
      formats: 'Formats',
      backgrounds: 'Backgrounds',
      watermarks: 'Watermarks',
      clockWidgets: 'ClockWidgets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      appId: 'string',
      name: 'string',
      templateId: 'string',
      taskProfile: 'string',
      mediaEncode: 'number',
      backgroundColor: 'number',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      mnsQueue: 'string',
      httpCallbackUrl: 'string',
      fileSplitInterval: 'number',
      delayStopTime: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      formats: { 'type': 'array', 'itemType': 'string' },
      backgrounds: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestBackgrounds },
      watermarks: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestWatermarks },
      clockWidgets: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestClockWidgets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestBackgrounds extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestWatermarks extends $tea.Model {
  alpha?: number;
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestClockWidgets extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  ZOrder?: number;
  x?: number;
  fontSize?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      ZOrder: 'ZOrder',
      x: 'X',
      fontSize: 'FontSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      ZOrder: 'number',
      x: 'number',
      fontSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConferenceResponseBodyAuthInfo extends $tea.Model {
  key?: string;
  nonce?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nonce: 'Nonce',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nonce: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutRequestPanes extends $tea.Model {
  majorPane?: number;
  width?: number;
  height?: number;
  y?: number;
  paneId?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      majorPane: 'MajorPane',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      paneId: 'PaneId',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorPane: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      paneId: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppListAppServiceAreas extends $tea.Model {
  serviceArea?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceArea: 'ServiceArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppListApp extends $tea.Model {
  status?: number;
  appName?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  appId?: string;
  createTime?: string;
  billType?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      appName: 'AppName',
      serviceAreas: 'ServiceAreas',
      appId: 'AppId',
      createTime: 'CreateTime',
      billType: 'BillType',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      appName: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      appId: 'string',
      createTime: 'string',
      billType: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppList extends $tea.Model {
  app?: DescribeAppsResponseBodyAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppListApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponseBodyRules extends $tea.Model {
  callBack?: string;
  playDomain?: string;
  createTime?: string;
  ruleName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      playDomain: 'PlayDomain',
      createTime: 'CreateTime',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      playDomain: 'string',
      createTime: 'string',
      ruleName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponseBodyUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConferenceAuthInfoResponseBodyAuthInfo extends $tea.Model {
  key?: string;
  nonce?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nonce: 'Nonce',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nonce: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoResponseBodyLayoutPanesPanes extends $tea.Model {
  majorPane?: number;
  width?: number;
  height?: number;
  y?: number;
  paneId?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      majorPane: 'MajorPane',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      paneId: 'PaneId',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorPane: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      paneId: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoResponseBodyLayoutPanes extends $tea.Model {
  panes?: DescribeMPULayoutInfoResponseBodyLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeMPULayoutInfoResponseBodyLayoutPanesPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoResponseBodyLayout extends $tea.Model {
  layoutId?: number;
  panes?: DescribeMPULayoutInfoResponseBodyLayoutPanes;
  name?: string;
  audioMixCount?: number;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      panes: 'Panes',
      name: 'Name',
      audioMixCount: 'AudioMixCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'number',
      panes: DescribeMPULayoutInfoResponseBodyLayoutPanes,
      name: 'string',
      audioMixCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes extends $tea.Model {
  majorPane?: number;
  width?: number;
  height?: number;
  y?: number;
  paneId?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      majorPane: 'MajorPane',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      paneId: 'PaneId',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorPane: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      paneId: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes extends $tea.Model {
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayout extends $tea.Model {
  layoutId?: number;
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes;
  name?: string;
  audioMixCount?: number;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      panes: 'Panes',
      name: 'Name',
      audioMixCount: 'AudioMixCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'number',
      panes: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes,
      name: 'string',
      audioMixCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayouts extends $tea.Model {
  layout?: DescribeMPULayoutInfoListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayout },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutListResponseBodyLayoutIds extends $tea.Model {
  layoutId?: string[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPURuleResponseBodyRules extends $tea.Model {
  mediaEncode?: number;
  cropMode?: number;
  callBack?: string;
  playDomain?: string;
  channelPrefix?: string;
  backgroudColor?: number;
  isEnable?: number;
  layoutIds?: string[];
  taskProfile?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaEncode: 'MediaEncode',
      cropMode: 'CropMode',
      callBack: 'CallBack',
      playDomain: 'PlayDomain',
      channelPrefix: 'ChannelPrefix',
      backgroudColor: 'BackgroudColor',
      isEnable: 'IsEnable',
      layoutIds: 'LayoutIds',
      taskProfile: 'TaskProfile',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaEncode: 'number',
      cropMode: 'number',
      callBack: 'string',
      playDomain: 'string',
      channelPrefix: 'string',
      backgroudColor: 'number',
      isEnable: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      taskProfile: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponseBodyRecordFiles extends $tea.Model {
  startTime?: string;
  createTime?: string;
  appId?: string;
  channelId?: string;
  url?: string;
  duration?: number;
  taskId?: string;
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      createTime: 'CreateTime',
      appId: 'AppId',
      channelId: 'ChannelId',
      url: 'Url',
      duration: 'Duration',
      taskId: 'TaskId',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      createTime: 'string',
      appId: 'string',
      channelId: 'string',
      url: 'string',
      duration: 'number',
      taskId: 'string',
      stopTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTasksResponseBodyRecordTasksUserPanes extends $tea.Model {
  userId?: string;
  paneId?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      paneId: 'PaneId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      paneId: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTasksResponseBodyRecordTasks extends $tea.Model {
  status?: number;
  subSpecUsers?: string[];
  userPanes?: DescribeRecordTasksResponseBodyRecordTasksUserPanes[];
  createTime?: string;
  appId?: string;
  channelId?: string;
  taskId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subSpecUsers: 'SubSpecUsers',
      userPanes: 'UserPanes',
      createTime: 'CreateTime',
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': DescribeRecordTasksResponseBodyRecordTasksUserPanes },
      createTime: 'string',
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesClockWidgets extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  ZOrder?: number;
  x?: number;
  fontSize?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      ZOrder: 'ZOrder',
      x: 'X',
      fontSize: 'FontSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      ZOrder: 'number',
      x: 'number',
      fontSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesBackgrounds extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesWatermarks extends $tea.Model {
  alpha?: number;
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplates extends $tea.Model {
  mnsQueue?: string;
  ossFilePrefix?: string;
  createTime?: string;
  clockWidgets?: DescribeRecordTemplatesResponseBodyTemplatesClockWidgets[];
  ossBucket?: string;
  delayStopTime?: string;
  layoutIds?: number[];
  mediaEncode?: number;
  fileSplitInterval?: number;
  httpCallbackUrl?: string;
  formats?: string[];
  backgroundColor?: number;
  backgrounds?: DescribeRecordTemplatesResponseBodyTemplatesBackgrounds[];
  watermarks?: DescribeRecordTemplatesResponseBodyTemplatesWatermarks[];
  name?: string;
  templateId?: string;
  taskProfile?: string;
  static names(): { [key: string]: string } {
    return {
      mnsQueue: 'MnsQueue',
      ossFilePrefix: 'OssFilePrefix',
      createTime: 'CreateTime',
      clockWidgets: 'ClockWidgets',
      ossBucket: 'OssBucket',
      delayStopTime: 'DelayStopTime',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      fileSplitInterval: 'FileSplitInterval',
      httpCallbackUrl: 'HttpCallbackUrl',
      formats: 'Formats',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      watermarks: 'Watermarks',
      name: 'Name',
      templateId: 'TemplateId',
      taskProfile: 'TaskProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsQueue: 'string',
      ossFilePrefix: 'string',
      createTime: 'string',
      clockWidgets: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesClockWidgets },
      ossBucket: 'string',
      delayStopTime: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      fileSplitInterval: 'number',
      httpCallbackUrl: 'string',
      formats: { 'type': 'array', 'itemType': 'string' },
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesBackgrounds },
      watermarks: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesWatermarks },
      name: 'string',
      templateId: 'string',
      taskProfile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelCntDataResponseBodyChannelCntDataPerIntervalChannelCntModule extends $tea.Model {
  activeChannelCnt?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeChannelCnt: 'ActiveChannelCnt',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelCnt: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelCntDataResponseBodyChannelCntDataPerInterval extends $tea.Model {
  channelCntModule?: DescribeRtcChannelCntDataResponseBodyChannelCntDataPerIntervalChannelCntModule[];
  static names(): { [key: string]: string } {
    return {
      channelCntModule: 'ChannelCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCntModule: { 'type': 'array', 'itemType': DescribeRtcChannelCntDataResponseBodyChannelCntDataPerIntervalChannelCntModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailResponseBodyChannelInfo extends $tea.Model {
  sid?: string;
  deviceType?: string;
  OS?: string;
  leaveTime?: string;
  joinTime?: string;
  platform?: string;
  sdkVersion?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      deviceType: 'DeviceType',
      OS: 'OS',
      leaveTime: 'LeaveTime',
      joinTime: 'JoinTime',
      platform: 'Platform',
      sdkVersion: 'SdkVersion',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      deviceType: 'string',
      OS: 'string',
      leaveTime: 'string',
      joinTime: 'string',
      platform: 'string',
      sdkVersion: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelListChannelListCallArea extends $tea.Model {
  callArea?: string[];
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelListChannelList extends $tea.Model {
  endTime?: string;
  totalUserCnt?: number;
  startTime?: string;
  callArea?: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea;
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      totalUserCnt: 'TotalUserCnt',
      startTime: 'StartTime',
      callArea: 'CallArea',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      totalUserCnt: 'number',
      startTime: 'string',
      callArea: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea,
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelList extends $tea.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelListChannelList[];
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: { 'type': 'array', 'itemType': DescribeRtcChannelListResponseBodyChannelListChannelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration extends $tea.Model {
  video720?: number;
  video1080?: number;
  video360?: number;
  content?: number;
  audio?: number;
  static names(): { [key: string]: string } {
    return {
      video720: 'Video720',
      video1080: 'Video1080',
      video360: 'Video360',
      content: 'Content',
      audio: 'Audio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video720: 'number',
      video1080: 'number',
      video360: 'number',
      content: 'number',
      audio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration extends $tea.Model {
  video720?: number;
  video1080?: number;
  video360?: number;
  content?: number;
  audio?: number;
  static names(): { [key: string]: string } {
    return {
      video720: 'Video720',
      video1080: 'Video1080',
      video360: 'Video360',
      content: 'Content',
      audio: 'Audio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video720: 'number',
      video1080: 'number',
      video360: 'number',
      content: 'number',
      audio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration extends $tea.Model {
  subDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration;
  pubDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration;
  static names(): { [key: string]: string } {
    return {
      subDuration: 'SubDuration',
      pubDuration: 'PubDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration,
      pubDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric extends $tea.Model {
  endTime?: string;
  startTime?: string;
  subUserCount?: number;
  channelId?: string;
  userCount?: number;
  pubUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      subUserCount: 'SubUserCount',
      channelId: 'ChannelId',
      userCount: 'UserCount',
      pubUserCount: 'PubUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      subUserCount: 'number',
      channelId: 'string',
      userCount: 'number',
      pubUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfo extends $tea.Model {
  duration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration;
  channelMetric?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      channelMetric: 'ChannelMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration,
      channelMetric: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricsResponseBodyMetrics extends $tea.Model {
  mid?: string;
  KVs?: string[];
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      mid: 'Mid',
      KVs: 'KVs',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mid: 'string',
      KVs: { 'type': 'array', 'itemType': 'string' },
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelsResponseBodyChannels extends $tea.Model {
  endTime?: string;
  startTime?: string;
  channelId?: string;
  finished?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      channelId: 'ChannelId',
      finished: 'Finished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      channelId: 'string',
      finished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUserListResponseBodyUserListUserList extends $tea.Model {
  subVideo720?: number;
  subVideo1080?: number;
  subContent?: number;
  userId?: string;
  pubVideo360?: number;
  subVideo360?: number;
  serviceArea?: string;
  endTime?: string;
  startTime?: string;
  pubContent?: number;
  channelId?: string;
  pubVideo1080?: number;
  pubAudio?: number;
  pubVideo720?: number;
  subAudio?: number;
  static names(): { [key: string]: string } {
    return {
      subVideo720: 'SubVideo720',
      subVideo1080: 'SubVideo1080',
      subContent: 'SubContent',
      userId: 'UserId',
      pubVideo360: 'PubVideo360',
      subVideo360: 'SubVideo360',
      serviceArea: 'ServiceArea',
      endTime: 'EndTime',
      startTime: 'StartTime',
      pubContent: 'PubContent',
      channelId: 'ChannelId',
      pubVideo1080: 'PubVideo1080',
      pubAudio: 'PubAudio',
      pubVideo720: 'PubVideo720',
      subAudio: 'SubAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subVideo720: 'number',
      subVideo1080: 'number',
      subContent: 'number',
      userId: 'string',
      pubVideo360: 'number',
      subVideo360: 'number',
      serviceArea: 'string',
      endTime: 'string',
      startTime: 'string',
      pubContent: 'number',
      channelId: 'string',
      pubVideo1080: 'number',
      pubAudio: 'number',
      pubVideo720: 'number',
      subAudio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUserListResponseBodyUserList extends $tea.Model {
  userList?: DescribeRtcChannelUserListResponseBodyUserListUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': DescribeRtcChannelUserListResponseBodyUserListUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule extends $tea.Model {
  contentDuration?: number;
  v720Duration?: number;
  v360Duration?: number;
  audioDuration?: number;
  timeStamp?: string;
  v1080Duration?: number;
  totalDuration?: number;
  static names(): { [key: string]: string } {
    return {
      contentDuration: 'ContentDuration',
      v720Duration: 'V720Duration',
      v360Duration: 'V360Duration',
      audioDuration: 'AudioDuration',
      timeStamp: 'TimeStamp',
      v1080Duration: 'V1080Duration',
      totalDuration: 'TotalDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentDuration: 'number',
      v720Duration: 'number',
      v360Duration: 'number',
      audioDuration: 'number',
      timeStamp: 'string',
      v1080Duration: 'number',
      totalDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerInterval extends $tea.Model {
  durationModule?: DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule[];
  static names(): { [key: string]: string } {
    return {
      durationModule: 'DurationModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationModule: { 'type': 'array', 'itemType': DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule extends $tea.Model {
  activeChannelPeakTime?: string;
  timeStamp?: string;
  activeChannelPeak?: number;
  static names(): { [key: string]: string } {
    return {
      activeChannelPeakTime: 'ActiveChannelPeakTime',
      timeStamp: 'TimeStamp',
      activeChannelPeak: 'ActiveChannelPeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelPeakTime: 'string',
      timeStamp: 'string',
      activeChannelPeak: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval extends $tea.Model {
  peakChannelCntModule?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule[];
  static names(): { [key: string]: string } {
    return {
      peakChannelCntModule: 'PeakChannelCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntModule: { 'type': 'array', 'itemType': DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerIntervalPeakUserCntModule extends $tea.Model {
  activeUserPeakTime?: string;
  timeStamp?: string;
  activeUserPeak?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserPeakTime: 'ActiveUserPeakTime',
      timeStamp: 'TimeStamp',
      activeUserPeak: 'ActiveUserPeak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserPeakTime: 'string',
      timeStamp: 'string',
      activeUserPeak: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerInterval extends $tea.Model {
  peakUserCntModule?: DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerIntervalPeakUserCntModule[];
  static names(): { [key: string]: string } {
    return {
      peakUserCntModule: 'PeakUserCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakUserCntModule: { 'type': 'array', 'itemType': DescribeRtcPeakUserCntDataResponseBodyPeakUserCntDataPerIntervalPeakUserCntModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleResponseBodyScale extends $tea.Model {
  sessionCount?: number;
  time?: string;
  channelCount?: number;
  audioDuration?: number;
  userCount?: number;
  videoDuration?: number;
  static names(): { [key: string]: string } {
    return {
      sessionCount: 'SessionCount',
      time: 'Time',
      channelCount: 'ChannelCount',
      audioDuration: 'AudioDuration',
      userCount: 'UserCount',
      videoDuration: 'VideoDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionCount: 'number',
      time: 'string',
      channelCount: 'number',
      audioDuration: 'number',
      userCount: 'number',
      videoDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcScaleDetailResponseBodyScale extends $tea.Model {
  CC?: number;
  TS?: string;
  UC?: number;
  static names(): { [key: string]: string } {
    return {
      CC: 'CC',
      TS: 'TS',
      UC: 'UC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CC: 'number',
      TS: 'string',
      UC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule extends $tea.Model {
  activeUserCnt?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeUserCnt: 'ActiveUserCnt',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCnt: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval extends $tea.Model {
  userCntModule?: DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule[];
  static names(): { [key: string]: string } {
    return {
      userCntModule: 'UserCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCntModule: { 'type': 'array', 'itemType': DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventsResponseBodyEvents extends $tea.Model {
  eventId?: string;
  eventTime?: number;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventTime: 'EventTime',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventTime: 'number',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserListResponseBodyUserListUserList extends $tea.Model {
  user?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserListResponseBodyUserList extends $tea.Model {
  userList?: DescribeRtcUserListResponseBodyUserListUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': DescribeRtcUserListResponseBodyUserListUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBodyProperty extends $tea.Model {
  session?: string;
  join?: number;
  role?: number;
  static names(): { [key: string]: string } {
    return {
      session: 'Session',
      join: 'Join',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      session: 'string',
      join: 'number',
      role: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequestPanes extends $tea.Model {
  majorPane?: number;
  width?: number;
  height?: number;
  y?: number;
  paneId?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      majorPane: 'MajorPane',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      paneId: 'PaneId',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorPane: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      paneId: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioResponseBodyParticipantsParticipant extends $tea.Model {
  code?: string;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioResponseBodyParticipants extends $tea.Model {
  participant?: MuteAudioResponseBodyParticipantsParticipant[];
  static names(): { [key: string]: string } {
    return {
      participant: 'Participant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participant: { 'type': 'array', 'itemType': MuteAudioResponseBodyParticipantsParticipant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioAllResponseBodyParticipantsParticipant extends $tea.Model {
  code?: string;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MuteAudioAllResponseBodyParticipants extends $tea.Model {
  participant?: MuteAudioAllResponseBodyParticipantsParticipant[];
  static names(): { [key: string]: string } {
    return {
      participant: 'Participant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participant: { 'type': 'array', 'itemType': MuteAudioAllResponseBodyParticipantsParticipant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveParticipantsResponseBodyParticipantsParticipant extends $tea.Model {
  code?: string;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveParticipantsResponseBodyParticipants extends $tea.Model {
  participant?: RemoveParticipantsResponseBodyParticipantsParticipant[];
  static names(): { [key: string]: string } {
    return {
      participant: 'Participant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participant: { 'type': 'array', 'itemType': RemoveParticipantsResponseBodyParticipantsParticipant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBodyTerminalsTerminal extends $tea.Model {
  code?: number;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBodyTerminals extends $tea.Model {
  terminal?: RemoveTerminalsResponseBodyTerminalsTerminal[];
  static names(): { [key: string]: string } {
    return {
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terminal: { 'type': 'array', 'itemType': RemoveTerminalsResponseBodyTerminalsTerminal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesImages extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesTexts extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  text?: string;
  ZOrder?: number;
  fontSize?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      text: 'Text',
      ZOrder: 'ZOrder',
      fontSize: 'FontSize',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      text: 'string',
      ZOrder: 'number',
      fontSize: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanes extends $tea.Model {
  images?: StartMPUTaskRequestUserPanesImages[];
  segmentType?: number;
  userId?: string;
  texts?: StartMPUTaskRequestUserPanesTexts[];
  sourceType?: string;
  paneId?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      segmentType: 'SegmentType',
      userId: 'UserId',
      texts: 'Texts',
      sourceType: 'SourceType',
      paneId: 'PaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesImages },
      segmentType: 'number',
      userId: 'string',
      texts: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesTexts },
      sourceType: 'string',
      paneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestBackgrounds extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestWatermarks extends $tea.Model {
  alpha?: number;
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestClockWidgets extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  ZOrder?: number;
  x?: number;
  fontSize?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      ZOrder: 'ZOrder',
      x: 'X',
      fontSize: 'FontSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      ZOrder: 'number',
      x: 'number',
      fontSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanesImages extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanesTexts extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  text?: string;
  ZOrder?: number;
  fontSize?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      text: 'Text',
      ZOrder: 'ZOrder',
      fontSize: 'FontSize',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      text: 'string',
      ZOrder: 'number',
      fontSize: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanes extends $tea.Model {
  images?: StartRecordTaskRequestUserPanesImages[];
  userId?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
  sourceType?: string;
  paneId?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      userId: 'UserId',
      texts: 'Texts',
      sourceType: 'SourceType',
      paneId: 'PaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesImages },
      userId: 'string',
      texts: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesTexts },
      sourceType: 'string',
      paneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioResponseBodyParticipantsParticipant extends $tea.Model {
  code?: string;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioResponseBodyParticipants extends $tea.Model {
  participant?: UnmuteAudioResponseBodyParticipantsParticipant[];
  static names(): { [key: string]: string } {
    return {
      participant: 'Participant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participant: { 'type': 'array', 'itemType': UnmuteAudioResponseBodyParticipantsParticipant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioAllResponseBodyParticipantsParticipant extends $tea.Model {
  code?: string;
  message?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmuteAudioAllResponseBodyParticipants extends $tea.Model {
  participant?: UnmuteAudioAllResponseBodyParticipantsParticipant[];
  static names(): { [key: string]: string } {
    return {
      participant: 'Participant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participant: { 'type': 'array', 'itemType': UnmuteAudioAllResponseBodyParticipantsParticipant },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestUserPanesImages extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestUserPanesTexts extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  text?: string;
  ZOrder?: number;
  fontSize?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      text: 'Text',
      ZOrder: 'ZOrder',
      fontSize: 'FontSize',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      text: 'string',
      ZOrder: 'number',
      fontSize: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestUserPanes extends $tea.Model {
  images?: UpdateMPULayoutRequestUserPanesImages[];
  segmentType?: number;
  userId?: string;
  texts?: UpdateMPULayoutRequestUserPanesTexts[];
  sourceType?: string;
  paneId?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      segmentType: 'SegmentType',
      userId: 'UserId',
      texts: 'Texts',
      sourceType: 'SourceType',
      paneId: 'PaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateMPULayoutRequestUserPanesImages },
      segmentType: 'number',
      userId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateMPULayoutRequestUserPanesTexts },
      sourceType: 'string',
      paneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestBackgrounds extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestWatermarks extends $tea.Model {
  alpha?: number;
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPULayoutRequestClockWidgets extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  ZOrder?: number;
  x?: number;
  fontSize?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      ZOrder: 'ZOrder',
      x: 'X',
      fontSize: 'FontSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      ZOrder: 'number',
      x: 'number',
      fontSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanesImages extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanesTexts extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  text?: string;
  ZOrder?: number;
  fontSize?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      text: 'Text',
      ZOrder: 'ZOrder',
      fontSize: 'FontSize',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      text: 'string',
      ZOrder: 'number',
      fontSize: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanes extends $tea.Model {
  images?: UpdateRecordTaskRequestUserPanesImages[];
  userId?: string;
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  sourceType?: string;
  paneId?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      userId: 'UserId',
      texts: 'Texts',
      sourceType: 'SourceType',
      paneId: 'PaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesImages },
      userId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesTexts },
      sourceType: 'string',
      paneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestBackgrounds extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestWatermarks extends $tea.Model {
  alpha?: number;
  width?: number;
  height?: number;
  y?: number;
  url?: string;
  display?: number;
  ZOrder?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      url: 'Url',
      display: 'Display',
      ZOrder: 'ZOrder',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      width: 'number',
      height: 'number',
      y: 'number',
      url: 'string',
      display: 'number',
      ZOrder: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestClockWidgets extends $tea.Model {
  fontType?: number;
  fontColor?: number;
  y?: number;
  ZOrder?: number;
  x?: number;
  fontSize?: number;
  static names(): { [key: string]: string } {
    return {
      fontType: 'FontType',
      fontColor: 'FontColor',
      y: 'Y',
      ZOrder: 'ZOrder',
      x: 'X',
      fontSize: 'FontSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontType: 'number',
      fontColor: 'number',
      y: 'number',
      ZOrder: 'number',
      x: 'number',
      fontSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rtc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addRecordTemplateWithOptions(request: AddRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddRecordTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRecordTemplateResponse>(await this.doRPCRequest("AddRecordTemplate", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new AddRecordTemplateResponse({}));
  }

  async addRecordTemplate(request: AddRecordTemplateRequest): Promise<AddRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordTemplateWithOptions(request, runtime);
  }

  async createAutoLiveStreamRuleWithOptions(request: CreateAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAutoLiveStreamRuleResponse>(await this.doRPCRequest("CreateAutoLiveStreamRule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAutoLiveStreamRuleResponse({}));
  }

  async createAutoLiveStreamRule(request: CreateAutoLiveStreamRuleRequest): Promise<CreateAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async createChannelWithOptions(request: CreateChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateChannelResponse>(await this.doRPCRequest("CreateChannel", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateChannelResponse({}));
  }

  async createChannel(request: CreateChannelRequest): Promise<CreateChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChannelWithOptions(request, runtime);
  }

  async createConferenceWithOptions(request: CreateConferenceRequest, runtime: $Util.RuntimeOptions): Promise<CreateConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConferenceResponse>(await this.doRPCRequest("CreateConference", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConferenceResponse({}));
  }

  async createConference(request: CreateConferenceRequest): Promise<CreateConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConferenceWithOptions(request, runtime);
  }

  async createEventSubscribeWithOptions(request: CreateEventSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEventSubscribeResponse>(await this.doRPCRequest("CreateEventSubscribe", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEventSubscribeResponse({}));
  }

  async createEventSubscribe(request: CreateEventSubscribeRequest): Promise<CreateEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventSubscribeWithOptions(request, runtime);
  }

  async createMPULayoutWithOptions(request: CreateMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<CreateMPULayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMPULayoutResponse>(await this.doRPCRequest("CreateMPULayout", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMPULayoutResponse({}));
  }

  async createMPULayout(request: CreateMPULayoutRequest): Promise<CreateMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPULayoutWithOptions(request, runtime);
  }

  async createMPURuleWithOptions(request: CreateMPURuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateMPURuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMPURuleResponse>(await this.doRPCRequest("CreateMPURule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMPURuleResponse({}));
  }

  async createMPURule(request: CreateMPURuleRequest): Promise<CreateMPURuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPURuleWithOptions(request, runtime);
  }

  async createServiceLinkedRoleForRtcWithOptions(request: CreateServiceLinkedRoleForRtcRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleForRtcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceLinkedRoleForRtcResponse>(await this.doRPCRequest("CreateServiceLinkedRoleForRtc", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleForRtcResponse({}));
  }

  async createServiceLinkedRoleForRtc(request: CreateServiceLinkedRoleForRtcRequest): Promise<CreateServiceLinkedRoleForRtcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleForRtcWithOptions(request, runtime);
  }

  async createSubscribeWithOptions(request: CreateSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubscribeResponse>(await this.doRPCRequest("CreateSubscribe", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubscribeResponse({}));
  }

  async createSubscribe(request: CreateSubscribeRequest): Promise<CreateSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscribeWithOptions(request, runtime);
  }

  async deleteAutoLiveStreamRuleWithOptions(request: DeleteAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAutoLiveStreamRuleResponse>(await this.doRPCRequest("DeleteAutoLiveStreamRule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAutoLiveStreamRuleResponse({}));
  }

  async deleteAutoLiveStreamRule(request: DeleteAutoLiveStreamRuleRequest): Promise<DeleteAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async deleteChannelWithOptions(request: DeleteChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChannelResponse>(await this.doRPCRequest("DeleteChannel", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChannelResponse({}));
  }

  async deleteChannel(request: DeleteChannelRequest): Promise<DeleteChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  async deleteConferenceWithOptions(request: DeleteConferenceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConferenceResponse>(await this.doRPCRequest("DeleteConference", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConferenceResponse({}));
  }

  async deleteConference(request: DeleteConferenceRequest): Promise<DeleteConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConferenceWithOptions(request, runtime);
  }

  async deleteEventSubscribeWithOptions(request: DeleteEventSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventSubscribeResponse>(await this.doRPCRequest("DeleteEventSubscribe", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventSubscribeResponse({}));
  }

  async deleteEventSubscribe(request: DeleteEventSubscribeRequest): Promise<DeleteEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventSubscribeWithOptions(request, runtime);
  }

  async deleteMPULayoutWithOptions(request: DeleteMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMPULayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMPULayoutResponse>(await this.doRPCRequest("DeleteMPULayout", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMPULayoutResponse({}));
  }

  async deleteMPULayout(request: DeleteMPULayoutRequest): Promise<DeleteMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMPULayoutWithOptions(request, runtime);
  }

  async deleteMPURuleWithOptions(request: DeleteMPURuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMPURuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMPURuleResponse>(await this.doRPCRequest("DeleteMPURule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMPURuleResponse({}));
  }

  async deleteMPURule(request: DeleteMPURuleRequest): Promise<DeleteMPURuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMPURuleWithOptions(request, runtime);
  }

  async deleteRecordTemplateWithOptions(request: DeleteRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRecordTemplateResponse>(await this.doRPCRequest("DeleteRecordTemplate", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRecordTemplateResponse({}));
  }

  async deleteRecordTemplate(request: DeleteRecordTemplateRequest): Promise<DeleteRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordTemplateWithOptions(request, runtime);
  }

  async deleteSubscribeWithOptions(request: DeleteSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubscribeResponse>(await this.doRPCRequest("DeleteSubscribe", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubscribeResponse({}));
  }

  async deleteSubscribe(request: DeleteSubscribeRequest): Promise<DeleteSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscribeWithOptions(request, runtime);
  }

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppsResponse>(await this.doRPCRequest("DescribeApps", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppsResponse({}));
  }

  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  async describeAutoLiveStreamRuleWithOptions(request: DescribeAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoLiveStreamRuleResponse>(await this.doRPCRequest("DescribeAutoLiveStreamRule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoLiveStreamRuleResponse({}));
  }

  async describeAutoLiveStreamRule(request: DescribeAutoLiveStreamRuleRequest): Promise<DescribeAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async describeChannelParticipantsWithOptions(request: DescribeChannelParticipantsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelParticipantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeChannelParticipantsResponse>(await this.doRPCRequest("DescribeChannelParticipants", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeChannelParticipantsResponse({}));
  }

  async describeChannelParticipants(request: DescribeChannelParticipantsRequest): Promise<DescribeChannelParticipantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelParticipantsWithOptions(request, runtime);
  }

  async describeChannelUsersWithOptions(request: DescribeChannelUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeChannelUsersResponse>(await this.doRPCRequest("DescribeChannelUsers", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeChannelUsersResponse({}));
  }

  async describeChannelUsers(request: DescribeChannelUsersRequest): Promise<DescribeChannelUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUsersWithOptions(request, runtime);
  }

  async describeConferenceAuthInfoWithOptions(request: DescribeConferenceAuthInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConferenceAuthInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConferenceAuthInfoResponse>(await this.doRPCRequest("DescribeConferenceAuthInfo", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConferenceAuthInfoResponse({}));
  }

  async describeConferenceAuthInfo(request: DescribeConferenceAuthInfoRequest): Promise<DescribeConferenceAuthInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConferenceAuthInfoWithOptions(request, runtime);
  }

  async describeMPULayoutInfoWithOptions(request: DescribeMPULayoutInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPULayoutInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMPULayoutInfoResponse>(await this.doRPCRequest("DescribeMPULayoutInfo", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMPULayoutInfoResponse({}));
  }

  async describeMPULayoutInfo(request: DescribeMPULayoutInfoRequest): Promise<DescribeMPULayoutInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPULayoutInfoWithOptions(request, runtime);
  }

  async describeMPULayoutInfoListWithOptions(request: DescribeMPULayoutInfoListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPULayoutInfoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMPULayoutInfoListResponse>(await this.doRPCRequest("DescribeMPULayoutInfoList", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMPULayoutInfoListResponse({}));
  }

  async describeMPULayoutInfoList(request: DescribeMPULayoutInfoListRequest): Promise<DescribeMPULayoutInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPULayoutInfoListWithOptions(request, runtime);
  }

  async describeMPULayoutListWithOptions(request: DescribeMPULayoutListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPULayoutListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMPULayoutListResponse>(await this.doRPCRequest("DescribeMPULayoutList", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMPULayoutListResponse({}));
  }

  async describeMPULayoutList(request: DescribeMPULayoutListRequest): Promise<DescribeMPULayoutListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPULayoutListWithOptions(request, runtime);
  }

  async describeMPURuleWithOptions(request: DescribeMPURuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPURuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMPURuleResponse>(await this.doRPCRequest("DescribeMPURule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMPURuleResponse({}));
  }

  async describeMPURule(request: DescribeMPURuleRequest): Promise<DescribeMPURuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPURuleWithOptions(request, runtime);
  }

  async describeRecordFilesWithOptions(request: DescribeRecordFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordFilesResponse>(await this.doRPCRequest("DescribeRecordFiles", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordFilesResponse({}));
  }

  async describeRecordFiles(request: DescribeRecordFilesRequest): Promise<DescribeRecordFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordFilesWithOptions(request, runtime);
  }

  async describeRecordTasksWithOptions(request: DescribeRecordTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordTasksResponse>(await this.doRPCRequest("DescribeRecordTasks", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordTasksResponse({}));
  }

  async describeRecordTasks(request: DescribeRecordTasksRequest): Promise<DescribeRecordTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordTasksWithOptions(request, runtime);
  }

  async describeRecordTemplatesWithOptions(request: DescribeRecordTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordTemplatesResponse>(await this.doRPCRequest("DescribeRecordTemplates", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordTemplatesResponse({}));
  }

  async describeRecordTemplates(request: DescribeRecordTemplatesRequest): Promise<DescribeRecordTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordTemplatesWithOptions(request, runtime);
  }

  async describeRTCAppKeyWithOptions(request: DescribeRTCAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRTCAppKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRTCAppKeyResponse>(await this.doRPCRequest("DescribeRTCAppKey", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRTCAppKeyResponse({}));
  }

  async describeRTCAppKey(request: DescribeRTCAppKeyRequest): Promise<DescribeRTCAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRTCAppKeyWithOptions(request, runtime);
  }

  async describeRtcChannelCntDataWithOptions(request: DescribeRtcChannelCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelCntDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelCntDataResponse>(await this.doRPCRequest("DescribeRtcChannelCntData", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelCntDataResponse({}));
  }

  async describeRtcChannelCntData(request: DescribeRtcChannelCntDataRequest): Promise<DescribeRtcChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelCntDataWithOptions(request, runtime);
  }

  async describeRtcChannelDetailWithOptions(request: DescribeRtcChannelDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelDetailResponse>(await this.doRPCRequest("DescribeRtcChannelDetail", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelDetailResponse({}));
  }

  async describeRtcChannelDetail(request: DescribeRtcChannelDetailRequest): Promise<DescribeRtcChannelDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelDetailWithOptions(request, runtime);
  }

  async describeRtcChannelListWithOptions(request: DescribeRtcChannelListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelListResponse>(await this.doRPCRequest("DescribeRtcChannelList", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelListResponse({}));
  }

  async describeRtcChannelList(request: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelListWithOptions(request, runtime);
  }

  async describeRtcChannelMetricWithOptions(request: DescribeRtcChannelMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelMetricResponse>(await this.doRPCRequest("DescribeRtcChannelMetric", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelMetricResponse({}));
  }

  async describeRtcChannelMetric(request: DescribeRtcChannelMetricRequest): Promise<DescribeRtcChannelMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelMetricWithOptions(request, runtime);
  }

  async describeRtcChannelMetricsWithOptions(request: DescribeRtcChannelMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelMetricsResponse>(await this.doRPCRequest("DescribeRtcChannelMetrics", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelMetricsResponse({}));
  }

  async describeRtcChannelMetrics(request: DescribeRtcChannelMetricsRequest): Promise<DescribeRtcChannelMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelMetricsWithOptions(request, runtime);
  }

  async describeRtcChannelsWithOptions(request: DescribeRtcChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelsResponse>(await this.doRPCRequest("DescribeRtcChannels", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelsResponse({}));
  }

  async describeRtcChannels(request: DescribeRtcChannelsRequest): Promise<DescribeRtcChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelsWithOptions(request, runtime);
  }

  async describeRtcChannelUserListWithOptions(request: DescribeRtcChannelUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelUserListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcChannelUserListResponse>(await this.doRPCRequest("DescribeRtcChannelUserList", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcChannelUserListResponse({}));
  }

  async describeRtcChannelUserList(request: DescribeRtcChannelUserListRequest): Promise<DescribeRtcChannelUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelUserListWithOptions(request, runtime);
  }

  async describeRtcDurationDataWithOptions(request: DescribeRtcDurationDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcDurationDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcDurationDataResponse>(await this.doRPCRequest("DescribeRtcDurationData", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcDurationDataResponse({}));
  }

  async describeRtcDurationData(request: DescribeRtcDurationDataRequest): Promise<DescribeRtcDurationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcDurationDataWithOptions(request, runtime);
  }

  async describeRtcPeakChannelCntDataWithOptions(request: DescribeRtcPeakChannelCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcPeakChannelCntDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcPeakChannelCntDataResponse>(await this.doRPCRequest("DescribeRtcPeakChannelCntData", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcPeakChannelCntDataResponse({}));
  }

  async describeRtcPeakChannelCntData(request: DescribeRtcPeakChannelCntDataRequest): Promise<DescribeRtcPeakChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  async describeRtcPeakUserCntDataWithOptions(request: DescribeRtcPeakUserCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcPeakUserCntDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcPeakUserCntDataResponse>(await this.doRPCRequest("DescribeRtcPeakUserCntData", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcPeakUserCntDataResponse({}));
  }

  async describeRtcPeakUserCntData(request: DescribeRtcPeakUserCntDataRequest): Promise<DescribeRtcPeakUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcPeakUserCntDataWithOptions(request, runtime);
  }

  async describeRtcScaleWithOptions(request: DescribeRtcScaleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcScaleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcScaleResponse>(await this.doRPCRequest("DescribeRtcScale", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcScaleResponse({}));
  }

  async describeRtcScale(request: DescribeRtcScaleRequest): Promise<DescribeRtcScaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcScaleWithOptions(request, runtime);
  }

  async describeRtcScaleDetailWithOptions(request: DescribeRtcScaleDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcScaleDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcScaleDetailResponse>(await this.doRPCRequest("DescribeRtcScaleDetail", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcScaleDetailResponse({}));
  }

  async describeRtcScaleDetail(request: DescribeRtcScaleDetailRequest): Promise<DescribeRtcScaleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcScaleDetailWithOptions(request, runtime);
  }

  async describeRtcUserCntDataWithOptions(request: DescribeRtcUserCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcUserCntDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcUserCntDataResponse>(await this.doRPCRequest("DescribeRtcUserCntData", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcUserCntDataResponse({}));
  }

  async describeRtcUserCntData(request: DescribeRtcUserCntDataRequest): Promise<DescribeRtcUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcUserCntDataWithOptions(request, runtime);
  }

  async describeRtcUserEventsWithOptions(request: DescribeRtcUserEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcUserEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcUserEventsResponse>(await this.doRPCRequest("DescribeRtcUserEvents", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcUserEventsResponse({}));
  }

  async describeRtcUserEvents(request: DescribeRtcUserEventsRequest): Promise<DescribeRtcUserEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcUserEventsWithOptions(request, runtime);
  }

  async describeRtcUserListWithOptions(request: DescribeRtcUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcUserListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRtcUserListResponse>(await this.doRPCRequest("DescribeRtcUserList", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRtcUserListResponse({}));
  }

  async describeRtcUserList(request: DescribeRtcUserListRequest): Promise<DescribeRtcUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcUserListWithOptions(request, runtime);
  }

  async describeUserInfoInChannelWithOptions(request: DescribeUserInfoInChannelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserInfoInChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserInfoInChannelResponse>(await this.doRPCRequest("DescribeUserInfoInChannel", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserInfoInChannelResponse({}));
  }

  async describeUserInfoInChannel(request: DescribeUserInfoInChannelRequest): Promise<DescribeUserInfoInChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserInfoInChannelWithOptions(request, runtime);
  }

  async disableMPURuleWithOptions(request: DisableMPURuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableMPURuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableMPURuleResponse>(await this.doRPCRequest("DisableMPURule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new DisableMPURuleResponse({}));
  }

  async disableMPURule(request: DisableMPURuleRequest): Promise<DisableMPURuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMPURuleWithOptions(request, runtime);
  }

  async enableMPURuleWithOptions(request: EnableMPURuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableMPURuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableMPURuleResponse>(await this.doRPCRequest("EnableMPURule", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new EnableMPURuleResponse({}));
  }

  async enableMPURule(request: EnableMPURuleRequest): Promise<EnableMPURuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMPURuleWithOptions(request, runtime);
  }

  async getMPUTaskStatusWithOptions(request: GetMPUTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMPUTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMPUTaskStatusResponse>(await this.doRPCRequest("GetMPUTaskStatus", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetMPUTaskStatusResponse({}));
  }

  async getMPUTaskStatus(request: GetMPUTaskStatusRequest): Promise<GetMPUTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMPUTaskStatusWithOptions(request, runtime);
  }

  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAppResponse>(await this.doRPCRequest("ModifyApp", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAppResponse({}));
  }

  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  async modifyConferenceWithOptions(request: ModifyConferenceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyConferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyConferenceResponse>(await this.doRPCRequest("ModifyConference", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyConferenceResponse({}));
  }

  async modifyConference(request: ModifyConferenceRequest): Promise<ModifyConferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyConferenceWithOptions(request, runtime);
  }

  async modifyMPULayoutWithOptions(request: ModifyMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMPULayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMPULayoutResponse>(await this.doRPCRequest("ModifyMPULayout", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMPULayoutResponse({}));
  }

  async modifyMPULayout(request: ModifyMPULayoutRequest): Promise<ModifyMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMPULayoutWithOptions(request, runtime);
  }

  async muteAudioWithOptions(request: MuteAudioRequest, runtime: $Util.RuntimeOptions): Promise<MuteAudioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MuteAudioResponse>(await this.doRPCRequest("MuteAudio", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new MuteAudioResponse({}));
  }

  async muteAudio(request: MuteAudioRequest): Promise<MuteAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.muteAudioWithOptions(request, runtime);
  }

  async muteAudioAllWithOptions(request: MuteAudioAllRequest, runtime: $Util.RuntimeOptions): Promise<MuteAudioAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MuteAudioAllResponse>(await this.doRPCRequest("MuteAudioAll", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new MuteAudioAllResponse({}));
  }

  async muteAudioAll(request: MuteAudioAllRequest): Promise<MuteAudioAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.muteAudioAllWithOptions(request, runtime);
  }

  async receiveNotifyWithOptions(request: ReceiveNotifyRequest, runtime: $Util.RuntimeOptions): Promise<ReceiveNotifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReceiveNotifyResponse>(await this.doRPCRequest("ReceiveNotify", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new ReceiveNotifyResponse({}));
  }

  async receiveNotify(request: ReceiveNotifyRequest): Promise<ReceiveNotifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.receiveNotifyWithOptions(request, runtime);
  }

  async removeParticipantsWithOptions(request: RemoveParticipantsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveParticipantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveParticipantsResponse>(await this.doRPCRequest("RemoveParticipants", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveParticipantsResponse({}));
  }

  async removeParticipants(request: RemoveParticipantsRequest): Promise<RemoveParticipantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeParticipantsWithOptions(request, runtime);
  }

  async removeTerminalsWithOptions(request: RemoveTerminalsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTerminalsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTerminalsResponse>(await this.doRPCRequest("RemoveTerminals", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTerminalsResponse({}));
  }

  async removeTerminals(request: RemoveTerminalsRequest): Promise<RemoveTerminalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTerminalsWithOptions(request, runtime);
  }

  async setChannelPropertyWithOptions(request: SetChannelPropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetChannelPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetChannelPropertyResponse>(await this.doRPCRequest("SetChannelProperty", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetChannelPropertyResponse({}));
  }

  async setChannelProperty(request: SetChannelPropertyRequest): Promise<SetChannelPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setChannelPropertyWithOptions(request, runtime);
  }

  async startMPUTaskWithOptions(request: StartMPUTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartMPUTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartMPUTaskResponse>(await this.doRPCRequest("StartMPUTask", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new StartMPUTaskResponse({}));
  }

  async startMPUTask(request: StartMPUTaskRequest): Promise<StartMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMPUTaskWithOptions(request, runtime);
  }

  async startRecordTaskWithOptions(request: StartRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRecordTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRecordTaskResponse>(await this.doRPCRequest("StartRecordTask", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new StartRecordTaskResponse({}));
  }

  async startRecordTask(request: StartRecordTaskRequest): Promise<StartRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordTaskWithOptions(request, runtime);
  }

  async stopChannelUserPublishWithOptions(request: StopChannelUserPublishRequest, runtime: $Util.RuntimeOptions): Promise<StopChannelUserPublishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopChannelUserPublishResponse>(await this.doRPCRequest("StopChannelUserPublish", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new StopChannelUserPublishResponse({}));
  }

  async stopChannelUserPublish(request: StopChannelUserPublishRequest): Promise<StopChannelUserPublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopChannelUserPublishWithOptions(request, runtime);
  }

  async stopMPUTaskWithOptions(request: StopMPUTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopMPUTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMPUTaskResponse>(await this.doRPCRequest("StopMPUTask", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new StopMPUTaskResponse({}));
  }

  async stopMPUTask(request: StopMPUTaskRequest): Promise<StopMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMPUTaskWithOptions(request, runtime);
  }

  async stopRecordTaskWithOptions(request: StopRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopRecordTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopRecordTaskResponse>(await this.doRPCRequest("StopRecordTask", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new StopRecordTaskResponse({}));
  }

  async stopRecordTask(request: StopRecordTaskRequest): Promise<StopRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordTaskWithOptions(request, runtime);
  }

  async unmuteAudioWithOptions(request: UnmuteAudioRequest, runtime: $Util.RuntimeOptions): Promise<UnmuteAudioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnmuteAudioResponse>(await this.doRPCRequest("UnmuteAudio", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UnmuteAudioResponse({}));
  }

  async unmuteAudio(request: UnmuteAudioRequest): Promise<UnmuteAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unmuteAudioWithOptions(request, runtime);
  }

  async unmuteAudioAllWithOptions(request: UnmuteAudioAllRequest, runtime: $Util.RuntimeOptions): Promise<UnmuteAudioAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnmuteAudioAllResponse>(await this.doRPCRequest("UnmuteAudioAll", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UnmuteAudioAllResponse({}));
  }

  async unmuteAudioAll(request: UnmuteAudioAllRequest): Promise<UnmuteAudioAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unmuteAudioAllWithOptions(request, runtime);
  }

  async updateChannelWithOptions(request: UpdateChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateChannelResponse>(await this.doRPCRequest("UpdateChannel", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateChannelResponse({}));
  }

  async updateChannel(request: UpdateChannelRequest): Promise<UpdateChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateChannelWithOptions(request, runtime);
  }

  async updateMPULayoutWithOptions(request: UpdateMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMPULayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMPULayoutResponse>(await this.doRPCRequest("UpdateMPULayout", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMPULayoutResponse({}));
  }

  async updateMPULayout(request: UpdateMPULayoutRequest): Promise<UpdateMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMPULayoutWithOptions(request, runtime);
  }

  async updateRecordTaskWithOptions(request: UpdateRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRecordTaskResponse>(await this.doRPCRequest("UpdateRecordTask", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRecordTaskResponse({}));
  }

  async updateRecordTask(request: UpdateRecordTaskRequest): Promise<UpdateRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTaskWithOptions(request, runtime);
  }

  async updateRecordTemplateWithOptions(request: UpdateRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRecordTemplateResponse>(await this.doRPCRequest("UpdateRecordTemplate", "2018-01-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRecordTemplateResponse({}));
  }

  async updateRecordTemplate(request: UpdateRecordTemplateRequest): Promise<UpdateRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTemplateWithOptions(request, runtime);
  }

}
