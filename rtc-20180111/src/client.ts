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
  ossEndpoint?: string;
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
      ossEndpoint: 'OssEndpoint',
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
      ossEndpoint: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplate?: CreateAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: CreateAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateShrinkRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateResponseBody extends $tea.Model {
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

export class CreateAppStreamingOutTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppStreamingOutTemplateResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  role?: number;
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
      role: 'Role',
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
      role: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMPULayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplate?: DeleteAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: DeleteAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateShrinkRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateResponseBody extends $tea.Model {
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

export class DeleteAppStreamingOutTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppStreamingOutTemplateResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequest extends $tea.Model {
  appId?: string;
  condition?: DescribeAppStreamingOutTemplatesRequestCondition;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: DescribeAppStreamingOutTemplatesRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesShrinkRequest extends $tea.Model {
  appId?: string;
  conditionShrink?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conditionShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templates?: DescribeAppStreamingOutTemplatesResponseBodyTemplates[];
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
      templates: { 'type': 'array', 'itemType': DescribeAppStreamingOutTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppStreamingOutTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppStreamingOutTemplatesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAutoLiveStreamRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  extDataType?: string;
  queryExpInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      extDataType: 'ExtDataType',
      queryExpInfo: 'QueryExpInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      extDataType: 'string',
      queryExpInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBody extends $tea.Model {
  callInfo?: DescribeCallResponseBodyCallInfo;
  requestId?: string;
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      requestId: 'string',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListRequest extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  endTs?: number;
  orderBy?: string;
  pageNo?: number;
  pageSize?: number;
  queryMode?: string;
  startTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      endTs: 'number',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryMode: 'string',
      startTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBody extends $tea.Model {
  callList?: DescribeCallListResponseBodyCallList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callList: 'CallList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callList: { 'type': 'array', 'itemType': DescribeCallListResponseBodyCallList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  parentArea?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      parentArea: 'ParentArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      parentArea: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBody extends $tea.Model {
  areaStatList?: DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaStatList: 'AreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaStatList: { 'type': 'array', 'itemType': DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  statList?: DescribeChannelDistributionStatDataResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeChannelDistributionStatDataResponseBodyStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBody extends $tea.Model {
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelOverallDataResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelParticipantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelParticipantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBody extends $tea.Model {
  requestId?: string;
  topPubUserDetailList?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topPubUserDetailList: 'TopPubUserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topPubUserDetailList: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelTopPubUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelTopPubUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBody extends $tea.Model {
  metricDatas?: DescribeChannelUserMetricsResponseBodyMetricDatas[];
  overallData?: DescribeChannelUserMetricsResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatas },
      overallData: DescribeChannelUserMetricsResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUserMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUserMetricsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBody extends $tea.Model {
  nodes?: DescribeEndPointEventListResponseBodyNodes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndPointEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndPointEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  metrics?: string;
  pubCallIdList?: string;
  pubUserId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      metrics: 'Metrics',
      pubCallIdList: 'PubCallIdList',
      pubUserId: 'PubUserId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      metrics: 'string',
      pubCallIdList: 'string',
      pubUserId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBody extends $tea.Model {
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  requestId?: string;
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  static names(): { [key: string]: string } {
    return {
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
      subMetrics: 'SubMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndPointMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndPointMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBody extends $tea.Model {
  requestId?: string;
  statList?: DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisFactorDistributionStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisFactorDistributionStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  startTs?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBody extends $tea.Model {
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  faultType?: string;
  queryCallUserInfo?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      faultType: 'FaultType',
      queryCallUserInfo: 'QueryCallUserInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      faultType: 'string',
      queryCallUserInfo: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBody extends $tea.Model {
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  networkOperators?: string[];
  requestId?: string;
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      factorList: 'FactorList',
      faultMetricData: 'FaultMetricData',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
      userDetail: 'UserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisUserDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisUserDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTs?: number;
  faultTypes?: string;
  pageNo?: number;
  pageSize?: number;
  startTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      faultTypes: 'FaultTypes',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      faultTypes: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  userList?: DescribeFaultDiagnosisUserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisUserListResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMPULayoutInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMPULayoutInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBody extends $tea.Model {
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  requestId?: string;
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'CallStatus',
      pubUserDetailList: 'PubUserDetailList',
      requestId: 'RequestId',
      subUserDetail: 'SubUserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      requestId: 'string',
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePubUserListBySubUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePubUserListBySubUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBody extends $tea.Model {
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  requestId?: string;
  videoData?: DescribeQoeMetricDataResponseBodyVideoData[];
  static names(): { [key: string]: string } {
    return {
      audioData: 'AudioData',
      requestId: 'RequestId',
      videoData: 'VideoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioData },
      requestId: 'string',
      videoData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQoeMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQoeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  parentArea?: string;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      parentArea: 'string',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBody extends $tea.Model {
  qualityStatDataList?: DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBody extends $tea.Model {
  qualityStatDataList?: DescribeQualityDistributionStatDataResponseBodyQualityStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBody extends $tea.Model {
  qualityOsSdkVersionStatDataList?: DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOsSdkVersionStatDataList: 'QualityOsSdkVersionStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOsSdkVersionStatDataList: { 'type': 'array', 'itemType': DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBody extends $tea.Model {
  qualityOverallData?: DescribeQualityOverallDataResponseBodyQualityOverallData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOverallData: 'QualityOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOverallData: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityOverallDataResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecordTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  serviceArea?: string;
  sortType?: string;
  timePoint?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      serviceArea: 'ServiceArea',
      sortType: 'SortType',
      timePoint: 'TimePoint',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      serviceArea: 'string',
      sortType: 'string',
      timePoint: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBody extends $tea.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelList;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: DescribeRtcChannelListResponseBodyChannelList,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcChannelListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcChannelListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  ownerId?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBody extends $tea.Model {
  channelMetricInfo?: DescribeRtcChannelMetricResponseBodyChannelMetricInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelMetricInfo: 'ChannelMetricInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetricInfo: DescribeRtcChannelMetricResponseBodyChannelMetricInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcChannelMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcChannelMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataRequest extends $tea.Model {
  appId?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  serviceArea?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBody extends $tea.Model {
  durationDataPerInterval?: DescribeRtcDurationDataResponseBodyDurationDataPerInterval;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      durationDataPerInterval: 'DurationDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationDataPerInterval: DescribeRtcDurationDataResponseBodyDurationDataPerInterval,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcDurationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcDurationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataRequest extends $tea.Model {
  appId?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  serviceArea?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcPeakChannelCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcPeakChannelCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataRequest extends $tea.Model {
  appId?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  serviceArea?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcUserCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcUserCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: string;
  parentArea?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'string',
      parentArea: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageAreaStatList: 'UsageAreaStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageStatList: 'UsageStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBody extends $tea.Model {
  requestId?: string;
  usageOverallData?: DescribeUsageOverallDataResponseBodyUsageOverallData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOverallData: 'UsageOverallData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOverallData: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageOverallDataResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserInfoInChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMPUTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplate?: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateShrinkRequest extends $tea.Model {
  appId?: string;
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateResponseBody extends $tea.Model {
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

export class ModifyAppStreamingOutTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppStreamingOutTemplateResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTerminalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  cropMode?: number;
  layoutIds?: number[];
  mediaEncode?: number;
  ownerId?: number;
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
  userPanes?: UpdateRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
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
      ownerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  ossEndpoint?: string;
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
      ossEndpoint: 'OssEndpoint',
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
      ossEndpoint: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class CreateAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  enableVad?: boolean;
  layoutIds?: string[];
  mediaEncode?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      enableVad: 'EnableVad',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVad: 'boolean',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
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

export class DeleteAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequestCondition extends $tea.Model {
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesResponseBodyTemplates extends $tea.Model {
  createTime?: string;
  enableVad?: boolean;
  layoutIds?: string[];
  mediaEncode?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enableVad: 'EnableVad',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enableVad: 'boolean',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
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
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      billType: 'BillType',
      createTime: 'CreateTime',
      serviceAreas: 'ServiceAreas',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      billType: 'string',
      createTime: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      status: 'number',
      version: 'string',
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

export class DescribeCallResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $tea.Model {
  pubAudio?: number;
  pubVideo1080?: number;
  pubVideo360?: number;
  pubVideo720?: number;
  pubVideoScreenShare?: number;
  subAudio?: number;
  subVideo1080?: number;
  subVideo360?: number;
  subVideo720?: number;
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailList extends $tea.Model {
  callExp?: string;
  createdTs?: number;
  destroyedTs?: number;
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  duration?: number;
  location?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      durMetricStatData: 'DurMetricStatData',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      durMetricStatData: DescribeCallResponseBodyUserDetailListDurMetricStatData,
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBodyCallList extends $tea.Model {
  appId?: string;
  badExpUserCnt?: number;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  userCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      badExpUserCnt: 'BadExpUserCnt',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      badExpUserCnt: 'number',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $tea.Model {
  areaName?: string;
  callUserCount?: number;
  highQualityTransmissionRate?: string;
  pubUserCount?: number;
  subUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      callUserCount: 'CallUserCount',
      highQualityTransmissionRate: 'HighQualityTransmissionRate',
      pubUserCount: 'PubUserCount',
      subUserCount: 'SubUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      callUserCount: 'number',
      highQualityTransmissionRate: 'string',
      pubUserCount: 'number',
      subUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBodyStatList extends $tea.Model {
  callUserCount?: number;
  callUserRatio?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callUserCount: 'number',
      callUserRatio: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatas extends $tea.Model {
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyOverallData extends $tea.Model {
  connAvgTime?: number;
  fiveSecJoinRate?: number;
  totalAudioStuckRate?: number;
  totalVideoStuckRate?: number;
  totalVideoVagueRate?: number;
  static names(): { [key: string]: string } {
    return {
      connAvgTime: 'ConnAvgTime',
      fiveSecJoinRate: 'FiveSecJoinRate',
      totalAudioStuckRate: 'TotalAudioStuckRate',
      totalVideoStuckRate: 'TotalVideoStuckRate',
      totalVideoVagueRate: 'TotalVideoVagueRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAvgTime: 'number',
      fiveSecJoinRate: 'number',
      totalAudioStuckRate: 'number',
      totalVideoStuckRate: 'number',
      totalVideoVagueRate: 'number',
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

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList extends $tea.Model {
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  onlineDuration?: number;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $tea.Model {
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyOverallData extends $tea.Model {
  totalBadExpNum?: number;
  totalJoinFailNum?: number;
  totalPubUserNum?: number;
  totalSubUserNum?: number;
  totalUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalBadExpNum: 'TotalBadExpNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalUserNum: 'TotalUserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBadExpNum: 'number',
      totalJoinFailNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalUserNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $tea.Model {
  eventName?: string;
  eventType?: string;
  ts?: number;
  tsInMs?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
      tsInMs: 'TsInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
      tsInMs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $tea.Model {
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodes extends $tea.Model {
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetricsNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetrics extends $tea.Model {
  nodes?: DescribeEndPointMetricDataResponseBodyPubMetricsNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetricsNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetrics extends $tea.Model {
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList extends $tea.Model {
  factorId?: string;
  userCount?: number;
  userRatio?: number;
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      userCount: 'UserCount',
      userRatio: 'UserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      userCount: 'number',
      userRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricData extends $tea.Model {
  nodes?: DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyOverallData extends $tea.Model {
  faultUserCount?: number;
  faultUserRatio?: number;
  totalUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      faultUserCount: 'FaultUserCount',
      faultUserRatio: 'FaultUserRatio',
      totalUserCount: 'TotalUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultUserCount: 'number',
      faultUserRatio: 'number',
      totalUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList extends $tea.Model {
  eventName?: string;
  eventType?: string;
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems extends $tea.Model {
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList },
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas extends $tea.Model {
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  role?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems },
      role: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $tea.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  role?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      role: 'Role',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
      role: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $tea.Model {
  factorId?: string;
  faultSource?: string;
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedEventDatas: 'RelatedEventDatas',
      relatedMetricDatas: 'RelatedMetricDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData extends $tea.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetail extends $tea.Model {
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  onlineDuration?: number;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  os?: string;
  sdkVersion?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods },
      os: 'string',
      sdkVersion: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserListFaultList extends $tea.Model {
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserList extends $tea.Model {
  channelCreatedTs?: number;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCreatedTs: 'ChannelCreatedTs',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      faultList: 'FaultList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCreatedTs: 'number',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      faultList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserListFaultList },
      userId: 'string',
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

export class DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailList extends $tea.Model {
  callIdList?: string[];
  clientType?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callIdList: 'CallIdList',
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetail extends $tea.Model {
  clientType?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioData extends $tea.Model {
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoData extends $tea.Model {
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  os?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      os: 'Os',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      os: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallData extends $tea.Model {
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
      type: 'string',
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
  callArea?: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea;
  channelId?: string;
  endTime?: string;
  startTime?: string;
  totalUserCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      totalUserCnt: 'TotalUserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea,
      channelId: 'string',
      endTime: 'string',
      startTime: 'string',
      totalUserCnt: 'number',
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

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric extends $tea.Model {
  channelId?: string;
  endTime?: string;
  pubUserCount?: number;
  startTime?: string;
  subUserCount?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pubUserCount: 'PubUserCount',
      startTime: 'StartTime',
      subUserCount: 'SubUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      endTime: 'string',
      pubUserCount: 'number',
      startTime: 'string',
      subUserCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration extends $tea.Model {
  audio?: number;
  content?: number;
  video1080?: number;
  video360?: number;
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration extends $tea.Model {
  audio?: number;
  content?: number;
  video1080?: number;
  video360?: number;
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration extends $tea.Model {
  pubDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration;
  subDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration;
  static names(): { [key: string]: string } {
    return {
      pubDuration: 'PubDuration',
      subDuration: 'SubDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration,
      subDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfo extends $tea.Model {
  channelMetric?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric;
  duration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration;
  static names(): { [key: string]: string } {
    return {
      channelMetric: 'ChannelMetric',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetric: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric,
      duration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule extends $tea.Model {
  audioDuration?: number;
  contentDuration?: number;
  timeStamp?: string;
  totalDuration?: number;
  v1080Duration?: number;
  v360Duration?: number;
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      contentDuration: 'ContentDuration',
      timeStamp: 'TimeStamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v360Duration: 'V360Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      contentDuration: 'number',
      timeStamp: 'string',
      totalDuration: 'number',
      v1080Duration: 'number',
      v360Duration: 'number',
      v720Duration: 'number',
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
  activeChannelPeak?: number;
  activeChannelPeakTime?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeChannelPeak: 'ActiveChannelPeak',
      activeChannelPeakTime: 'ActiveChannelPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelPeak: 'number',
      activeChannelPeakTime: 'string',
      timeStamp: 'string',
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

export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $tea.Model {
  audioCallDuration?: number;
  name?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $tea.Model {
  audioCallDuration?: number;
  callDurationRatio?: string;
  name?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $tea.Model {
  audioCallDuration?: number;
  callDurationRatio?: string;
  name?: string;
  os?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      os: 'Os',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      os: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallData extends $tea.Model {
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
      type: 'string',
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

export class ModifyAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  enableVad?: boolean;
  layoutIds?: string[];
  mediaEncode?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      enableVad: 'EnableVad',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVad: 'boolean',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
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

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
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

  async createAppStreamingOutTemplateWithOptions(tmpReq: CreateAppStreamingOutTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppStreamingOutTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppStreamingOutTemplateResponse({}));
  }

  async createAppStreamingOutTemplate(request: CreateAppStreamingOutTemplateRequest): Promise<CreateAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppStreamingOutTemplateWithOptions(request, runtime);
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
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

  async deleteAppStreamingOutTemplateWithOptions(tmpReq: DeleteAppStreamingOutTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppStreamingOutTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAppStreamingOutTemplateResponse({}));
  }

  async deleteAppStreamingOutTemplate(request: DeleteAppStreamingOutTemplateRequest): Promise<DeleteAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppStreamingOutTemplateWithOptions(request, runtime);
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

  async describeAppStreamingOutTemplatesWithOptions(tmpReq: DescribeAppStreamingOutTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppStreamingOutTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeAppStreamingOutTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
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
      action: "DescribeAppStreamingOutTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppStreamingOutTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeAppStreamingOutTemplatesResponse({}));
  }

  async describeAppStreamingOutTemplates(request: DescribeAppStreamingOutTemplatesRequest): Promise<DescribeAppStreamingOutTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppStreamingOutTemplatesWithOptions(request, runtime);
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

  async describeCallWithOptions(request: DescribeCallRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.extDataType)) {
      query["ExtDataType"] = request.extDataType;
    }

    if (!Util.isUnset(request.queryExpInfo)) {
      query["QueryExpInfo"] = request.queryExpInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCall",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallResponse>(await this.callApi(params, req, runtime), new DescribeCallResponse({}));
  }

  async describeCall(request: DescribeCallRequest): Promise<DescribeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCallWithOptions(request, runtime);
  }

  async describeCallListWithOptions(request: DescribeCallListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCallListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callStatus)) {
      query["CallStatus"] = request.callStatus;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCallList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallListResponse>(await this.callApi(params, req, runtime), new DescribeCallListResponse({}));
  }

  async describeCallList(request: DescribeCallListRequest): Promise<DescribeCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCallListWithOptions(request, runtime);
  }

  async describeChannelAreaDistributionStatDataWithOptions(request: DescribeChannelAreaDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelAreaDistributionStatDataResponse({}));
  }

  async describeChannelAreaDistributionStatData(request: DescribeChannelAreaDistributionStatDataRequest): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelAreaDistributionStatDataWithOptions(request, runtime);
  }

  async describeChannelDistributionStatDataWithOptions(request: DescribeChannelDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelDistributionStatDataResponse({}));
  }

  async describeChannelDistributionStatData(request: DescribeChannelDistributionStatDataRequest): Promise<DescribeChannelDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelDistributionStatDataWithOptions(request, runtime);
  }

  async describeChannelOverallDataWithOptions(request: DescribeChannelOverallDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelOverallDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelOverallDataResponse({}));
  }

  async describeChannelOverallData(request: DescribeChannelOverallDataRequest): Promise<DescribeChannelOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelOverallDataWithOptions(request, runtime);
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

  async describeChannelTopPubUserListWithOptions(request: DescribeChannelTopPubUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelTopPubUserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelTopPubUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelTopPubUserListResponse>(await this.callApi(params, req, runtime), new DescribeChannelTopPubUserListResponse({}));
  }

  async describeChannelTopPubUserList(request: DescribeChannelTopPubUserListRequest): Promise<DescribeChannelTopPubUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelTopPubUserListWithOptions(request, runtime);
  }

  async describeChannelUserMetricsWithOptions(request: DescribeChannelUserMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelUserMetricsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelUserMetrics",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelUserMetricsResponse>(await this.callApi(params, req, runtime), new DescribeChannelUserMetricsResponse({}));
  }

  async describeChannelUserMetrics(request: DescribeChannelUserMetricsRequest): Promise<DescribeChannelUserMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUserMetricsWithOptions(request, runtime);
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

  async describeEndPointEventListWithOptions(request: DescribeEndPointEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndPointEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndPointEventList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndPointEventListResponse>(await this.callApi(params, req, runtime), new DescribeEndPointEventListResponse({}));
  }

  async describeEndPointEventList(request: DescribeEndPointEventListRequest): Promise<DescribeEndPointEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndPointEventListWithOptions(request, runtime);
  }

  async describeEndPointMetricDataWithOptions(request: DescribeEndPointMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndPointMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.pubCallIdList)) {
      query["PubCallIdList"] = request.pubCallIdList;
    }

    if (!Util.isUnset(request.pubUserId)) {
      query["PubUserId"] = request.pubUserId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndPointMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndPointMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeEndPointMetricDataResponse({}));
  }

  async describeEndPointMetricData(request: DescribeEndPointMetricDataRequest): Promise<DescribeEndPointMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndPointMetricDataWithOptions(request, runtime);
  }

  async describeFaultDiagnosisFactorDistributionStatWithOptions(request: DescribeFaultDiagnosisFactorDistributionStatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisFactorDistributionStat",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisFactorDistributionStatResponse({}));
  }

  async describeFaultDiagnosisFactorDistributionStat(request: DescribeFaultDiagnosisFactorDistributionStatRequest): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisFactorDistributionStatWithOptions(request, runtime);
  }

  async describeFaultDiagnosisOverallDataWithOptions(request: DescribeFaultDiagnosisOverallDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisOverallDataResponse({}));
  }

  async describeFaultDiagnosisOverallData(request: DescribeFaultDiagnosisOverallDataRequest): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisOverallDataWithOptions(request, runtime);
  }

  async describeFaultDiagnosisUserDetailWithOptions(request: DescribeFaultDiagnosisUserDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.faultType)) {
      query["FaultType"] = request.faultType;
    }

    if (!Util.isUnset(request.queryCallUserInfo)) {
      query["QueryCallUserInfo"] = request.queryCallUserInfo;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisUserDetail",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisUserDetailResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserDetailResponse({}));
  }

  async describeFaultDiagnosisUserDetail(request: DescribeFaultDiagnosisUserDetailRequest): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserDetailWithOptions(request, runtime);
  }

  async describeFaultDiagnosisUserListWithOptions(request: DescribeFaultDiagnosisUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisUserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.faultTypes)) {
      query["FaultTypes"] = request.faultTypes;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisUserListResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserListResponse({}));
  }

  async describeFaultDiagnosisUserList(request: DescribeFaultDiagnosisUserListRequest): Promise<DescribeFaultDiagnosisUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserListWithOptions(request, runtime);
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

  async describePubUserListBySubUserWithOptions(request: DescribePubUserListBySubUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribePubUserListBySubUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePubUserListBySubUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePubUserListBySubUserResponse>(await this.callApi(params, req, runtime), new DescribePubUserListBySubUserResponse({}));
  }

  async describePubUserListBySubUser(request: DescribePubUserListBySubUserRequest): Promise<DescribePubUserListBySubUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePubUserListBySubUserWithOptions(request, runtime);
  }

  async describeQoeMetricDataWithOptions(request: DescribeQoeMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQoeMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQoeMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQoeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeQoeMetricDataResponse({}));
  }

  async describeQoeMetricData(request: DescribeQoeMetricDataRequest): Promise<DescribeQoeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQoeMetricDataWithOptions(request, runtime);
  }

  async describeQualityAreaDistributionStatDataWithOptions(request: DescribeQualityAreaDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityAreaDistributionStatDataResponse({}));
  }

  async describeQualityAreaDistributionStatData(request: DescribeQualityAreaDistributionStatDataRequest): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, runtime);
  }

  async describeQualityDistributionStatDataWithOptions(request: DescribeQualityDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQualityDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityDistributionStatDataResponse({}));
  }

  async describeQualityDistributionStatData(request: DescribeQualityDistributionStatDataRequest): Promise<DescribeQualityDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityDistributionStatDataWithOptions(request, runtime);
  }

  async describeQualityOsSdkVersionDistributionStatDataWithOptions(request: DescribeQualityOsSdkVersionDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeQualityOsSdkVersionDistributionStatData(request: DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  async describeQualityOverallDataWithOptions(request: DescribeQualityOverallDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOverallDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOverallDataResponse({}));
  }

  async describeQualityOverallData(request: DescribeQualityOverallDataRequest): Promise<DescribeQualityOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityOverallDataWithOptions(request, runtime);
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

  async describeRtcChannelListWithOptions(request: DescribeRtcChannelListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelListResponse> {
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

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelListResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelListResponse({}));
  }

  async describeRtcChannelList(request: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelListWithOptions(request, runtime);
  }

  async describeRtcChannelMetricWithOptions(request: DescribeRtcChannelMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelMetricResponse> {
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

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelMetric",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelMetricResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelMetricResponse({}));
  }

  async describeRtcChannelMetric(request: DescribeRtcChannelMetricRequest): Promise<DescribeRtcChannelMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelMetricWithOptions(request, runtime);
  }

  async describeRtcDurationDataWithOptions(request: DescribeRtcDurationDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcDurationDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcDurationData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcDurationDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcDurationDataResponse({}));
  }

  async describeRtcDurationData(request: DescribeRtcDurationDataRequest): Promise<DescribeRtcDurationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcDurationDataWithOptions(request, runtime);
  }

  async describeRtcPeakChannelCntDataWithOptions(request: DescribeRtcPeakChannelCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcPeakChannelCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcPeakChannelCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcPeakChannelCntDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcPeakChannelCntDataResponse({}));
  }

  async describeRtcPeakChannelCntData(request: DescribeRtcPeakChannelCntDataRequest): Promise<DescribeRtcPeakChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  async describeRtcUserCntDataWithOptions(request: DescribeRtcUserCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRtcUserCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcUserCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcUserCntDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcUserCntDataResponse({}));
  }

  async describeRtcUserCntData(request: DescribeRtcUserCntDataRequest): Promise<DescribeRtcUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcUserCntDataWithOptions(request, runtime);
  }

  async describeUsageAreaDistributionStatDataWithOptions(request: DescribeUsageAreaDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageAreaDistributionStatDataResponse({}));
  }

  async describeUsageAreaDistributionStatData(request: DescribeUsageAreaDistributionStatDataRequest): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, runtime);
  }

  async describeUsageDistributionStatDataWithOptions(request: DescribeUsageDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsageDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageDistributionStatDataResponse({}));
  }

  async describeUsageDistributionStatData(request: DescribeUsageDistributionStatDataRequest): Promise<DescribeUsageDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageDistributionStatDataWithOptions(request, runtime);
  }

  async describeUsageOsSdkVersionDistributionStatDataWithOptions(request: DescribeUsageOsSdkVersionDistributionStatDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeUsageOsSdkVersionDistributionStatData(request: DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  async describeUsageOverallDataWithOptions(request: DescribeUsageOverallDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOverallDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOverallDataResponse({}));
  }

  async describeUsageOverallData(request: DescribeUsageOverallDataRequest): Promise<DescribeUsageOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageOverallDataWithOptions(request, runtime);
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

  async modifyAppStreamingOutTemplateWithOptions(tmpReq: ModifyAppStreamingOutTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppStreamingOutTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new ModifyAppStreamingOutTemplateResponse({}));
  }

  async modifyAppStreamingOutTemplate(request: ModifyAppStreamingOutTemplateRequest): Promise<ModifyAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppStreamingOutTemplateWithOptions(request, runtime);
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
    if (!Util.isUnset(request.enhancedParam)) {
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

    if (!Util.isUnset(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!Util.isUnset(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!Util.isUnset(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
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

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
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
