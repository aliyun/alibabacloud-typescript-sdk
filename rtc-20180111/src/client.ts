// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRecordTemplateRequest extends $tea.Model {
  appId?: string;
  backgroundColor?: number;
  backgrounds?: AddRecordTemplateRequestBackgrounds[];
  clockWidgets?: AddRecordTemplateRequestClockWidgets[];
  delayStopTime?: number;
  enableM3u8DateTime?: boolean;
  fileSplitInterval?: number;
  formats?: string[];
  httpCallbackUrl?: string;
  layoutIds?: number[];
  mediaEncode?: number;
  mnsQueue?: string;
  name?: string;
  ossBucket?: string;
  ossFilePrefix?: string;
  ownerId?: number;
  taskProfile?: string;
  watermarks?: AddRecordTemplateRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      delayStopTime: 'DelayStopTime',
      enableM3u8DateTime: 'EnableM3u8DateTime',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      httpCallbackUrl: 'HttpCallbackUrl',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mnsQueue: 'MnsQueue',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      taskProfile: 'TaskProfile',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': AddRecordTemplateRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': AddRecordTemplateRequestClockWidgets },
      delayStopTime: 'number',
      enableM3u8DateTime: 'boolean',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      httpCallbackUrl: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mnsQueue: 'string',
      name: 'string',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      taskProfile: 'string',
      watermarks: { 'type': 'array', 'itemType': AddRecordTemplateRequestWatermarks },
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
  appId?: string;
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  mediaEncode?: number;
  ownerId?: number;
  playDomain?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      ownerId: 'number',
      playDomain: 'string',
      ruleName: 'string',
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

export class CreateEventSubscribeRequest extends $tea.Model {
  appId?: string;
  callbackUrl?: string;
  channelId?: string;
  clientToken?: string;
  events?: string[];
  needCallbackAuth?: boolean;
  ownerId?: number;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      events: 'Events',
      needCallbackAuth: 'NeedCallbackAuth',
      ownerId: 'OwnerId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelId: 'string',
      clientToken: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      needCallbackAuth: 'boolean',
      ownerId: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscribeId: 'string',
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
  appId?: string;
  audioMixCount?: number;
  name?: string;
  ownerId?: number;
  panes?: CreateMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      name: 'string',
      ownerId: 'number',
      panes: { 'type': 'array', 'itemType': CreateMPULayoutRequestPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutResponseBody extends $tea.Model {
  layoutId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'number',
      requestId: 'string',
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

export class DeleteAutoLiveStreamRuleRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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
  appId?: string;
  channelId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
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

export class DeleteEventSubscribeRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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
  appId?: string;
  layoutId?: number;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      ownerId: 'number',
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

export class DeleteRecordTemplateRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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

export class DescribeAppKeyRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyResponseBody extends $tea.Model {
  appKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $tea.Model {
  appId?: string;
  order?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  appList?: DescribeAppsResponseBodyAppList;
  requestId?: string;
  totalNum?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: DescribeAppsResponseBodyAppList,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
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
  appId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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
  appId?: string;
  channelId?: string;
  order?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponseBody extends $tea.Model {
  requestId?: string;
  timestamp?: number;
  totalNum?: number;
  totalPage?: number;
  userList?: DescribeChannelParticipantsResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timestamp: 'number',
      totalNum: 'number',
      totalPage: 'number',
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
  appId?: string;
  channelId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersResponseBody extends $tea.Model {
  channelProfile?: number;
  commTotalNum?: number;
  interactiveUserList?: string[];
  interactiveUserNum?: number;
  isChannelExist?: boolean;
  liveUserList?: string[];
  liveUserNum?: number;
  requestId?: string;
  timestamp?: number;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      channelProfile: 'ChannelProfile',
      commTotalNum: 'CommTotalNum',
      interactiveUserList: 'InteractiveUserList',
      interactiveUserNum: 'InteractiveUserNum',
      isChannelExist: 'IsChannelExist',
      liveUserList: 'LiveUserList',
      liveUserNum: 'LiveUserNum',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelProfile: 'number',
      commTotalNum: 'number',
      interactiveUserList: { 'type': 'array', 'itemType': 'string' },
      interactiveUserNum: 'number',
      isChannelExist: 'boolean',
      liveUserList: { 'type': 'array', 'itemType': 'string' },
      liveUserNum: 'number',
      requestId: 'string',
      timestamp: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeMPULayoutInfoListRequest extends $tea.Model {
  appId?: string;
  layoutId?: number;
  name?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBody extends $tea.Model {
  layouts?: DescribeMPULayoutInfoListResponseBodyLayouts;
  requestId?: string;
  totalNum?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: DescribeMPULayoutInfoListResponseBodyLayouts,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
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

export class DescribeRecordFilesRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTime?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  startTime?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponseBody extends $tea.Model {
  recordFiles?: DescribeRecordFilesResponseBodyRecordFiles[];
  requestId?: string;
  totalNum?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      recordFiles: 'RecordFiles',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFiles: { 'type': 'array', 'itemType': DescribeRecordFilesResponseBodyRecordFiles },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
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

export class DescribeRecordTemplatesRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribeRecordTemplatesResponseBodyTemplates[];
  totalNum?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
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

export class DescribeUserInfoInChannelRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  ownerId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBody extends $tea.Model {
  isChannelExist?: boolean;
  isInChannel?: boolean;
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  requestId?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      isChannelExist: 'IsChannelExist',
      isInChannel: 'IsInChannel',
      property: 'Property',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isChannelExist: 'boolean',
      isInChannel: 'boolean',
      property: { 'type': 'array', 'itemType': DescribeUserInfoInChannelResponseBodyProperty },
      requestId: 'string',
      timestamp: 'number',
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

export class DisableAutoLiveStreamRuleRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoLiveStreamRuleResponseBody extends $tea.Model {
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

export class DisableAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoLiveStreamRuleRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoLiveStreamRuleResponseBody extends $tea.Model {
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

export class EnableAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
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
  appId?: string;
  appName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      ownerId: 'number',
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

export class ModifyMPULayoutRequest extends $tea.Model {
  appId?: string;
  audioMixCount?: number;
  layoutId?: number;
  name?: string;
  ownerId?: number;
  panes?: ModifyMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
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

export class RemoveTerminalsRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  ownerId?: number;
  terminalIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      terminalIds: 'TerminalIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
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

export class StartMPUTaskRequest extends $tea.Model {
  appId?: string;
  backgroundColor?: number;
  backgrounds?: StartMPUTaskRequestBackgrounds[];
  channelId?: string;
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  cropMode?: number;
  enhancedParam?: StartMPUTaskRequestEnhancedParam;
  layoutIds?: number[];
  mediaEncode?: number;
  mixMode?: number;
  ownerId?: number;
  payloadType?: number;
  reportVad?: number;
  rtpExtInfo?: number;
  sourceType?: string;
  streamType?: number;
  streamURL?: string;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  taskId?: string;
  taskType?: number;
  timeStampRef?: number;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartMPUTaskRequestUserPanes[];
  vadInterval?: number;
  watermarks?: StartMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      enhancedParam: 'EnhancedParam',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      payloadType: 'PayloadType',
      reportVad: 'ReportVad',
      rtpExtInfo: 'RtpExtInfo',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      streamURL: 'StreamURL',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskType: 'TaskType',
      timeStampRef: 'TimeStampRef',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      vadInterval: 'VadInterval',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': StartMPUTaskRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartMPUTaskRequestClockWidgets },
      cropMode: 'number',
      enhancedParam: StartMPUTaskRequestEnhancedParam,
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      payloadType: 'number',
      reportVad: 'number',
      rtpExtInfo: 'number',
      sourceType: 'string',
      streamType: 'number',
      streamURL: 'string',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskType: 'number',
      timeStampRef: 'number',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanes },
      vadInterval: 'number',
      watermarks: { 'type': 'array', 'itemType': StartMPUTaskRequestWatermarks },
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
  appId?: string;
  channelId?: string;
  cropMode?: number;
  layoutIds?: number[];
  mediaEncode?: number;
  mixMode?: number;
  ownerId?: number;
  sourceType?: string;
  streamType?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  taskId?: string;
  taskProfile?: string;
  templateId?: string;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      sourceType: 'string',
      streamType: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskProfile: 'string',
      templateId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
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

export class StopMPUTaskRequest extends $tea.Model {
  appId?: string;
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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
  appId?: string;
  ownerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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

export class UpdateAutoLiveStreamRuleRequest extends $tea.Model {
  appId?: string;
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  mediaEncode?: number;
  ownerId?: number;
  playDomain?: string;
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      ownerId: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoLiveStreamRuleResponseBody extends $tea.Model {
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

export class UpdateAutoLiveStreamRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequest extends $tea.Model {
  appId?: string;
  backgroundColor?: number;
  backgrounds?: UpdateMPUTaskRequestBackgrounds[];
  clockWidgets?: UpdateMPUTaskRequestClockWidgets[];
  cropMode?: number;
  layoutIds?: number[];
  mediaEncode?: number;
  mixMode?: number;
  ownerId?: number;
  sourceType?: string;
  streamType?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  taskId?: string;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: UpdateMPUTaskRequestUserPanes[];
  watermarks?: UpdateMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': UpdateMPUTaskRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': UpdateMPUTaskRequestClockWidgets },
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      sourceType: 'string',
      streamType: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanes },
      watermarks: { 'type': 'array', 'itemType': UpdateMPUTaskRequestWatermarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskResponseBody extends $tea.Model {
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

export class UpdateMPUTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMPUTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  layoutIds?: number[];
  ownerId?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  taskId?: string;
  templateId?: string;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: UpdateRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      layoutIds: 'LayoutIds',
      ownerId: 'OwnerId',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      ownerId: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      templateId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
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
  appId?: string;
  backgroundColor?: number;
  backgrounds?: UpdateRecordTemplateRequestBackgrounds[];
  clockWidgets?: UpdateRecordTemplateRequestClockWidgets[];
  delayStopTime?: number;
  enableM3u8DateTime?: boolean;
  fileSplitInterval?: number;
  formats?: string[];
  httpCallbackUrl?: string;
  layoutIds?: number[];
  mediaEncode?: number;
  mnsQueue?: string;
  name?: string;
  ossBucket?: string;
  ossFilePrefix?: string;
  ownerId?: number;
  taskProfile?: string;
  templateId?: string;
  watermarks?: UpdateRecordTemplateRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      delayStopTime: 'DelayStopTime',
      enableM3u8DateTime: 'EnableM3u8DateTime',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      httpCallbackUrl: 'HttpCallbackUrl',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mnsQueue: 'MnsQueue',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestClockWidgets },
      delayStopTime: 'number',
      enableM3u8DateTime: 'boolean',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      httpCallbackUrl: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mnsQueue: 'string',
      name: 'string',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      taskProfile: 'string',
      templateId: 'string',
      watermarks: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestWatermarks },
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
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestClockWidgets extends $tea.Model {
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestWatermarks extends $tea.Model {
  alpha?: number;
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutRequestPanes extends $tea.Model {
  height?: number;
  majorPane?: number;
  paneId?: number;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
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
  appId?: string;
  appName?: string;
  appType?: string;
  billType?: string;
  createTime?: string;
  region?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      billType: 'BillType',
      createTime: 'CreateTime',
      region: 'Region',
      serviceAreas: 'ServiceAreas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      billType: 'string',
      createTime: 'string',
      region: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      status: 'number',
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
  channelIdPrefixes?: string[];
  channelIds?: string[];
  createTime?: string;
  mediaEncode?: number;
  playDomain?: string;
  ruleId?: number;
  ruleName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      mediaEncode: 'MediaEncode',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      mediaEncode: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
      status: 'string',
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

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes extends $tea.Model {
  height?: number;
  majorPane?: number;
  paneId?: number;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
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
  audioMixCount?: number;
  layoutId?: number;
  name?: string;
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes;
  static names(): { [key: string]: string } {
    return {
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      panes: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes,
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

export class DescribeRecordFilesResponseBodyRecordFiles extends $tea.Model {
  appId?: string;
  channelId?: string;
  createTime?: string;
  duration?: number;
  startTime?: string;
  stopTime?: string;
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      duration: 'Duration',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createTime: 'string',
      duration: 'number',
      startTime: 'string',
      stopTime: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesBackgrounds extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesClockWidgets extends $tea.Model {
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesWatermarks extends $tea.Model {
  alpha?: number;
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplates extends $tea.Model {
  backgroundColor?: number;
  backgrounds?: DescribeRecordTemplatesResponseBodyTemplatesBackgrounds[];
  clockWidgets?: DescribeRecordTemplatesResponseBodyTemplatesClockWidgets[];
  createTime?: string;
  delayStopTime?: number;
  enableM3u8DateTime?: boolean;
  fileSplitInterval?: number;
  formats?: string[];
  httpCallbackUrl?: string;
  layoutIds?: number[];
  mediaEncode?: number;
  mnsQueue?: string;
  name?: string;
  ossBucket?: string;
  ossFilePrefix?: string;
  taskProfile?: string;
  templateId?: string;
  watermarks?: DescribeRecordTemplatesResponseBodyTemplatesWatermarks[];
  static names(): { [key: string]: string } {
    return {
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      createTime: 'CreateTime',
      delayStopTime: 'DelayStopTime',
      enableM3u8DateTime: 'EnableM3u8DateTime',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      httpCallbackUrl: 'HttpCallbackUrl',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mnsQueue: 'MnsQueue',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesClockWidgets },
      createTime: 'string',
      delayStopTime: 'number',
      enableM3u8DateTime: 'boolean',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      httpCallbackUrl: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mnsQueue: 'string',
      name: 'string',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      taskProfile: 'string',
      templateId: 'string',
      watermarks: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesWatermarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBodyProperty extends $tea.Model {
  join?: number;
  role?: number;
  session?: string;
  static names(): { [key: string]: string } {
    return {
      join: 'Join',
      role: 'Role',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      join: 'number',
      role: 'number',
      session: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequestPanes extends $tea.Model {
  height?: number;
  majorPane?: number;
  paneId?: number;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBodyTerminalsTerminal extends $tea.Model {
  code?: number;
  id?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
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

export class StartMPUTaskRequestBackgrounds extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestClockWidgets extends $tea.Model {
  alpha?: number;
  borderColor?: number;
  borderWidth?: number;
  box?: boolean;
  boxBorderWidth?: number;
  boxColor?: number;
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestEnhancedParam extends $tea.Model {
  enablePortraitSegmentation?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePortraitSegmentation: 'EnablePortraitSegmentation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePortraitSegmentation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesImages extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesTexts extends $tea.Model {
  alpha?: number;
  borderColor?: number;
  borderWidth?: number;
  box?: boolean;
  boxBorderWidth?: number;
  boxColor?: number;
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  text?: string;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanes extends $tea.Model {
  images?: StartMPUTaskRequestUserPanesImages[];
  paneId?: number;
  segmentType?: number;
  sourceType?: string;
  texts?: StartMPUTaskRequestUserPanesTexts[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestWatermarks extends $tea.Model {
  alpha?: number;
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanesImages extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanesTexts extends $tea.Model {
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  text?: string;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequestUserPanes extends $tea.Model {
  images?: StartRecordTaskRequestUserPanesImages[];
  paneId?: number;
  sourceType?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestBackgrounds extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestClockWidgets extends $tea.Model {
  alpha?: number;
  borderColor?: number;
  borderWidth?: number;
  box?: boolean;
  boxBorderWidth?: number;
  boxColor?: number;
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestUserPanesImages extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestUserPanesTexts extends $tea.Model {
  alpha?: number;
  borderColor?: number;
  borderWidth?: number;
  box?: boolean;
  boxBorderWidth?: number;
  boxColor?: number;
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  text?: string;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestUserPanes extends $tea.Model {
  images?: UpdateMPUTaskRequestUserPanesImages[];
  paneId?: number;
  segmentType?: number;
  sourceType?: string;
  texts?: UpdateMPUTaskRequestUserPanesTexts[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestWatermarks extends $tea.Model {
  alpha?: number;
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanesImages extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanesTexts extends $tea.Model {
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  text?: string;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequestUserPanes extends $tea.Model {
  images?: UpdateRecordTaskRequestUserPanesImages[];
  paneId?: number;
  sourceType?: string;
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestBackgrounds extends $tea.Model {
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestClockWidgets extends $tea.Model {
  fontColor?: number;
  fontSize?: number;
  fontType?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateRequestWatermarks extends $tea.Model {
  alpha?: number;
  display?: number;
  height?: number;
  url?: string;
  width?: number;
  x?: number;
  y?: number;
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
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
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!Util.isUnset(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!Util.isUnset(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!Util.isUnset(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!Util.isUnset(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!Util.isUnset(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!Util.isUnset(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRecordTemplateResponse>(await this.callApi(params, req, runtime), new AddRecordTemplateResponse({}));
  }

  async addRecordTemplate(request: AddRecordTemplateRequest): Promise<AddRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordTemplateWithOptions(request, runtime);
  }

  async createAutoLiveStreamRuleWithOptions(request: CreateAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!Util.isUnset(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new CreateAutoLiveStreamRuleResponse({}));
  }

  async createAutoLiveStreamRule(request: CreateAutoLiveStreamRuleRequest): Promise<CreateAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async createEventSubscribeWithOptions(request: CreateEventSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventSubscribeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.events)) {
      query["Events"] = request.events;
    }

    if (!Util.isUnset(request.needCallbackAuth)) {
      query["NeedCallbackAuth"] = request.needCallbackAuth;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventSubscribeResponse>(await this.callApi(params, req, runtime), new CreateEventSubscribeResponse({}));
  }

  async createEventSubscribe(request: CreateEventSubscribeRequest): Promise<CreateEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventSubscribeWithOptions(request, runtime);
  }

  async createMPULayoutWithOptions(request: CreateMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<CreateMPULayoutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMPULayoutResponse>(await this.callApi(params, req, runtime), new CreateMPULayoutResponse({}));
  }

  async createMPULayout(request: CreateMPULayoutRequest): Promise<CreateMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPULayoutWithOptions(request, runtime);
  }

  async deleteAutoLiveStreamRuleWithOptions(request: DeleteAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DeleteAutoLiveStreamRuleResponse({}));
  }

  async deleteAutoLiveStreamRule(request: DeleteAutoLiveStreamRuleRequest): Promise<DeleteAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async deleteChannelWithOptions(request: DeleteChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChannelResponse>(await this.callApi(params, req, runtime), new DeleteChannelResponse({}));
  }

  async deleteChannel(request: DeleteChannelRequest): Promise<DeleteChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  async deleteEventSubscribeWithOptions(request: DeleteEventSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventSubscribeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventSubscribeResponse>(await this.callApi(params, req, runtime), new DeleteEventSubscribeResponse({}));
  }

  async deleteEventSubscribe(request: DeleteEventSubscribeRequest): Promise<DeleteEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventSubscribeWithOptions(request, runtime);
  }

  async deleteMPULayoutWithOptions(request: DeleteMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMPULayoutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMPULayoutResponse>(await this.callApi(params, req, runtime), new DeleteMPULayoutResponse({}));
  }

  async deleteMPULayout(request: DeleteMPULayoutRequest): Promise<DeleteMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMPULayoutWithOptions(request, runtime);
  }

  async deleteRecordTemplateWithOptions(request: DeleteRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordTemplateResponse>(await this.callApi(params, req, runtime), new DeleteRecordTemplateResponse({}));
  }

  async deleteRecordTemplate(request: DeleteRecordTemplateRequest): Promise<DeleteRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordTemplateWithOptions(request, runtime);
  }

  async describeAppKeyWithOptions(request: DescribeAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppKeyResponse>(await this.callApi(params, req, runtime), new DescribeAppKeyResponse({}));
  }

  async describeAppKey(request: DescribeAppKeyRequest): Promise<DescribeAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppKeyWithOptions(request, runtime);
  }

  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
  }

  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  async describeAutoLiveStreamRuleWithOptions(request: DescribeAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DescribeAutoLiveStreamRuleResponse({}));
  }

  async describeAutoLiveStreamRule(request: DescribeAutoLiveStreamRuleRequest): Promise<DescribeAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async describeChannelParticipantsWithOptions(request: DescribeChannelParticipantsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelParticipantsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelParticipants",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelParticipantsResponse>(await this.callApi(params, req, runtime), new DescribeChannelParticipantsResponse({}));
  }

  async describeChannelParticipants(request: DescribeChannelParticipantsRequest): Promise<DescribeChannelParticipantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelParticipantsWithOptions(request, runtime);
  }

  async describeChannelUsersWithOptions(request: DescribeChannelUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelUsersResponse>(await this.callApi(params, req, runtime), new DescribeChannelUsersResponse({}));
  }

  async describeChannelUsers(request: DescribeChannelUsersRequest): Promise<DescribeChannelUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUsersWithOptions(request, runtime);
  }

  async describeMPULayoutInfoListWithOptions(request: DescribeMPULayoutInfoListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPULayoutInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMPULayoutInfoList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMPULayoutInfoListResponse>(await this.callApi(params, req, runtime), new DescribeMPULayoutInfoListResponse({}));
  }

  async describeMPULayoutInfoList(request: DescribeMPULayoutInfoListRequest): Promise<DescribeMPULayoutInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPULayoutInfoListWithOptions(request, runtime);
  }

  async describeRecordFilesWithOptions(request: DescribeRecordFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "DescribeRecordFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordFilesResponse>(await this.callApi(params, req, runtime), new DescribeRecordFilesResponse({}));
  }

  async describeRecordFiles(request: DescribeRecordFilesRequest): Promise<DescribeRecordFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordFilesWithOptions(request, runtime);
  }

  async describeRecordTemplatesWithOptions(request: DescribeRecordTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeRecordTemplatesResponse({}));
  }

  async describeRecordTemplates(request: DescribeRecordTemplatesRequest): Promise<DescribeRecordTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordTemplatesWithOptions(request, runtime);
  }

  async describeUserInfoInChannelWithOptions(request: DescribeUserInfoInChannelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserInfoInChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserInfoInChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserInfoInChannelResponse>(await this.callApi(params, req, runtime), new DescribeUserInfoInChannelResponse({}));
  }

  async describeUserInfoInChannel(request: DescribeUserInfoInChannelRequest): Promise<DescribeUserInfoInChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserInfoInChannelWithOptions(request, runtime);
  }

  async disableAutoLiveStreamRuleWithOptions(request: DisableAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DisableAutoLiveStreamRuleResponse({}));
  }

  async disableAutoLiveStreamRule(request: DisableAutoLiveStreamRuleRequest): Promise<DisableAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async enableAutoLiveStreamRuleWithOptions(request: EnableAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new EnableAutoLiveStreamRuleResponse({}));
  }

  async enableAutoLiveStreamRule(request: EnableAutoLiveStreamRuleRequest): Promise<EnableAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async getMPUTaskStatusWithOptions(request: GetMPUTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMPUTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMPUTaskStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMPUTaskStatusResponse>(await this.callApi(params, req, runtime), new GetMPUTaskStatusResponse({}));
  }

  async getMPUTaskStatus(request: GetMPUTaskStatusRequest): Promise<GetMPUTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMPUTaskStatusWithOptions(request, runtime);
  }

  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
  }

  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  async modifyMPULayoutWithOptions(request: ModifyMPULayoutRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMPULayoutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!Util.isUnset(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMPULayoutResponse>(await this.callApi(params, req, runtime), new ModifyMPULayoutResponse({}));
  }

  async modifyMPULayout(request: ModifyMPULayoutRequest): Promise<ModifyMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMPULayoutWithOptions(request, runtime);
  }

  async removeTerminalsWithOptions(request: RemoveTerminalsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTerminalsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.terminalIds)) {
      query["TerminalIds"] = request.terminalIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTerminals",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTerminalsResponse>(await this.callApi(params, req, runtime), new RemoveTerminalsResponse({}));
  }

  async removeTerminals(request: RemoveTerminalsRequest): Promise<RemoveTerminalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTerminalsWithOptions(request, runtime);
  }

  async startMPUTaskWithOptions(request: StartMPUTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartMPUTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!Util.isUnset(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payloadType)) {
      query["PayloadType"] = request.payloadType;
    }

    if (!Util.isUnset(request.reportVad)) {
      query["ReportVad"] = request.reportVad;
    }

    if (!Util.isUnset(request.rtpExtInfo)) {
      query["RtpExtInfo"] = request.rtpExtInfo;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.streamURL)) {
      query["StreamURL"] = request.streamURL;
    }

    if (!Util.isUnset(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!Util.isUnset(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!Util.isUnset(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.timeStampRef)) {
      query["TimeStampRef"] = request.timeStampRef;
    }

    if (!Util.isUnset(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!Util.isUnset(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!Util.isUnset(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!Util.isUnset(request.vadInterval)) {
      query["VadInterval"] = request.vadInterval;
    }

    if (!Util.isUnset(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.enhancedParam))) {
      bodyFlat["EnhancedParam"] = request.enhancedParam;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartMPUTaskResponse>(await this.callApi(params, req, runtime), new StartMPUTaskResponse({}));
  }

  async startMPUTask(request: StartMPUTaskRequest): Promise<StartMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMPUTaskWithOptions(request, runtime);
  }

  async startRecordTaskWithOptions(request: StartRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRecordTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!Util.isUnset(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!Util.isUnset(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!Util.isUnset(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!Util.isUnset(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRecordTaskResponse>(await this.callApi(params, req, runtime), new StartRecordTaskResponse({}));
  }

  async startRecordTask(request: StartRecordTaskRequest): Promise<StartRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordTaskWithOptions(request, runtime);
  }

  async stopMPUTaskWithOptions(request: StopMPUTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopMPUTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopMPUTaskResponse>(await this.callApi(params, req, runtime), new StopMPUTaskResponse({}));
  }

  async stopMPUTask(request: StopMPUTaskRequest): Promise<StopMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMPUTaskWithOptions(request, runtime);
  }

  async stopRecordTaskWithOptions(request: StopRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopRecordTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopRecordTaskResponse>(await this.callApi(params, req, runtime), new StopRecordTaskResponse({}));
  }

  async stopRecordTask(request: StopRecordTaskRequest): Promise<StopRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordTaskWithOptions(request, runtime);
  }

  async updateAutoLiveStreamRuleWithOptions(request: UpdateAutoLiveStreamRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoLiveStreamRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!Util.isUnset(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new UpdateAutoLiveStreamRuleResponse({}));
  }

  async updateAutoLiveStreamRule(request: UpdateAutoLiveStreamRuleRequest): Promise<UpdateAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoLiveStreamRuleWithOptions(request, runtime);
  }

  async updateMPUTaskWithOptions(request: UpdateMPUTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMPUTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!Util.isUnset(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!Util.isUnset(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!Util.isUnset(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!Util.isUnset(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!Util.isUnset(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!Util.isUnset(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMPUTaskResponse>(await this.callApi(params, req, runtime), new UpdateMPUTaskResponse({}));
  }

  async updateMPUTask(request: UpdateMPUTaskRequest): Promise<UpdateMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMPUTaskWithOptions(request, runtime);
  }

  async updateRecordTaskWithOptions(request: UpdateRecordTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!Util.isUnset(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!Util.isUnset(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!Util.isUnset(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!Util.isUnset(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!Util.isUnset(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordTaskResponse>(await this.callApi(params, req, runtime), new UpdateRecordTaskResponse({}));
  }

  async updateRecordTask(request: UpdateRecordTaskRequest): Promise<UpdateRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTaskWithOptions(request, runtime);
  }

  async updateRecordTemplateWithOptions(request: UpdateRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!Util.isUnset(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!Util.isUnset(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!Util.isUnset(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!Util.isUnset(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!Util.isUnset(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!Util.isUnset(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordTemplateResponse>(await this.callApi(params, req, runtime), new UpdateRecordTemplateResponse({}));
  }

  async updateRecordTemplate(request: UpdateRecordTemplateRequest): Promise<UpdateRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTemplateWithOptions(request, runtime);
  }

}
