// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRecordTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: AddRecordTemplateRequestBackgrounds[];
  clockWidgets?: AddRecordTemplateRequestClockWidgets[];
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  formats?: string[];
  /**
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  layoutIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc-record-oss
   */
  ossBucket?: string;
  ossEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4IN_1080P
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 76dasgb****
   */
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

export class CreateAppRecordTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplate?: CreateAppRecordTemplateRequestRecordTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplate: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplate: CreateAppRecordTemplateRequestRecordTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplateShrink: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * lD7muaxx
   */
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

export class CreateAppRecordTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  /**
   * @example
   * bc5v****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @example
   * testRule
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ChannelEvent
   */
  events?: string[];
  /**
   * @example
   * false
   */
  needCallbackAuth?: boolean;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  role?: number;
  /**
   * @example
   * user1
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * ad53276431c****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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

export class DeleteAppRecordTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  template?: DeleteAppRecordTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      template: DeleteAppRecordTemplateRequestTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      templateShrink: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      templateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class DeleteAppRecordTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD825C17
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ad53276431c****
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * 1
   */
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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

export class DescribeAllCallbackResponseBody extends $tea.Model {
  callbacks?: DescribeAllCallbackResponseBodyCallbacks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbacks: 'Callbacks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbacks: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20A6D1E3-1F5F-5440-A4F1-EC7831646FE4
   */
  requestId?: string;
  /**
   * @example
   * enable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppCallStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppCallStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyResponseBody extends $tea.Model {
  /**
   * @example
   * a656b296a30xxxxxxxxxx1cd4
   */
  callbackSecretKey?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSecretKey: 'CallbackSecretKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSecretKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppCallbackSecretKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppCallbackSecretKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0cho****
   */
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
  /**
   * @remarks
   * AppKey。
   * 
   * @example
   * ba133b2cee4ab9be424674892c33****
   */
  appKey?: string;
  /**
   * @example
   * 154EF5DE-3D08-1F2C-A482-281F78D74B7C
   */
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

export class DescribeAppLayoutsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  condition?: DescribeAppLayoutsRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
      condition: DescribeAppLayoutsRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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

export class DescribeAppLayoutsResponseBody extends $tea.Model {
  layouts?: DescribeAppLayoutsResponseBodyLayouts[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
      layouts: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayouts },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppLayoutsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppLayoutsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * disable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppLiveStreamStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppLiveStreamStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * disable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  condition?: DescribeAppRecordTemplatesRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      condition: DescribeAppRecordTemplatesRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      conditionShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A7497D0-BEAE-58E7-B13A-751BD8EAE4C6
   */
  requestId?: string;
  templates?: DescribeAppRecordTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
      templates: { 'type': 'array', 'itemType': DescribeAppRecordTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponseBody extends $tea.Model {
  items?: DescribeAppRecordingFilesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAppRecordingFilesResponseBodyItems },
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

export class DescribeAppRecordingFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordingFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordingFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  condition?: DescribeAppStreamingOutTemplatesRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B0A2FCBC-43A4-428F-BC1D-3F4F85837F76
   */
  requestId?: string;
  templates?: DescribeAppStreamingOutTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 3.0
   */
  appVersion?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
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
      appVersion: 'string',
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
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
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
  /**
   * @example
   * 069BCB66-CD80-11E8-A82B-A70F78BBDC00
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * USER_DURATION_STAT
   */
  extDataType?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @example
   * BAD_EXP_USER_COUNT_DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ALL
   */
  queryMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @example
   * c906531af5f9****
   */
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
  /**
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
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

export class DescribeCallbacksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponseBody extends $tea.Model {
  callbacks?: DescribeCallbacksResponseBodyCallbacks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbacks: 'Callbacks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbacks: { 'type': 'array', 'itemType': DescribeCallbacksResponseBodyCallbacks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallbacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallbacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponseBody extends $tea.Model {
  /**
   * @remarks
   * channel
   */
  channel?: DescribeChannelResponseBodyChannel;
  channelExist?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: DescribeChannelResponseBodyChannel,
      channelExist: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponseBody extends $tea.Model {
  channelExist?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: DescribeChannelAllUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeChannelAllUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelAllUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelAllUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OS
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615893133
   */
  createdTs?: number;
  /**
   * @example
   * 1615893757
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  /**
   * @example
   * 3
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615893133
   */
  createdTs?: number;
  /**
   * @example
   * 1615893757
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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

export class DescribeChannelUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponseBody extends $tea.Model {
  channelExist?: boolean;
  inChannel?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  sessions?: DescribeChannelUserResponseBodySessions[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      inChannel: 'InChannel',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      inChannel: 'boolean',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeChannelUserResponseBodySessions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a2hz****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
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
  /**
   * @example
   * 1
   */
  channelProfile?: number;
  /**
   * @example
   * 100
   */
  commTotalNum?: number;
  interactiveUserList?: string[];
  /**
   * @example
   * 0
   */
  interactiveUserNum?: number;
  /**
   * @example
   * true
   */
  isChannelExist?: boolean;
  liveUserList?: string[];
  /**
   * @example
   * 0
   */
  liveUserNum?: number;
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
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

export class DescribeChannelsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: string[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid1,testuserid2
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VIDEO_STUCK_CAMERA
   */
  metrics?: string;
  /**
   * @example
   * testcall1,testcall2
   */
  pubCallIdList?: string;
  /**
   * @example
   * testuserid
   */
  pubUserId?: string;
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596****
   */
  endTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW_USER
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  createdTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW
   */
  faultType?: string;
  /**
   * @example
   * true
   */
  queryCallUserInfo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c906531af5f9****
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @example
   * JOIN_SLOW,AUDIO_STUCK
   */
  faultTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @example
   * c906531af5f9****
   */
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
  /**
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
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
  /**
   * @example
   * IN
   */
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @example
   * 中国
   */
  parentArea?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CHANNEL_ONLINE
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 2020-11-02T17:36:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2020-11-01T17:36:00Z
   */
  startTime?: string;
  /**
   * @example
   * yourTaskId
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * 1
   */
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 76dasgb****
   */
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
  /**
   * @example
   * C292B80E-5175-4BA4-8CC292B80E-5175-4BA4-8C1E-2ABEC4D7C2FE1E-2ABEC4D7****
   */
  requestId?: string;
  templates?: DescribeRecordTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  serviceArea?: string;
  /**
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  /**
   * @example
   * testUser
   */
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
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2020-02-04T07:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2018-01-29T01:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class DescribeStreamingOutStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1qaz***x
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testChannel
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * taskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamingOutStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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

export class DescribeStreamingOutStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamingOutStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStreamingOutStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBody extends $tea.Model {
  layouts?: DescribeSystemLayoutListResponseBodyLayouts;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalNum?: number;
  /**
   * @example
   * 2
   */
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
      layouts: DescribeSystemLayoutListResponseBodyLayouts,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemLayoutListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSystemLayoutListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataRequest extends $tea.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: string;
  parentArea?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CHANNEL_ONLINE
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * a2hz****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ONLINE_USER_PEAK
   */
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
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
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
  /**
   * @example
   * true
   */
  isChannelExist?: boolean;
  /**
   * @example
   * true
   */
  isInChannel?: boolean;
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * defaultName
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class ModifyAppCallbackStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppCallbackStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F80AAC02-87BD-5D9C-B925-8AB40171BA1A
   */
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

export class ModifyAppCallbackStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppCallbackStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppCallbackStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLiveStreamStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726xxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLiveStreamStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class ModifyAppLiveStreamStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppLiveStreamStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppLiveStreamStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726xxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D53303DB-AA68-5D09-90C2-A345072DCC5A
   */
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

export class ModifyAppRecordStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplate?: ModifyAppRecordTemplateRequestRecordTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplate: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplate: ModifyAppRecordTemplateRequestRecordTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplateShrink: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class ModifyAppRecordTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppRecordTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  /**
   * @example
   * ac7N****
   */
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

export class ModifyCallbackMetaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: ModifyCallbackMetaRequestCallback;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: ModifyCallbackMetaRequestCallback,
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaResponseBody extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 0
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class ModifyCallbackMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCallbackMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCallbackMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10117
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811xxxx
   */
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
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
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

export class RemoveUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  users?: RemoveUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersRequestUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: RemoveUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersResponseBodyUsers },
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

export class StartCategoryCallbackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: StartCategoryCallbackRequestCallback;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: StartCategoryCallbackRequestCallback,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
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

export class StartCategoryCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCategoryCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCategoryCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequest extends $tea.Model {
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * channelName
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartCloudRecordRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordRequestImages[];
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordRequestPanes[];
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordRequestStorageConfig;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * templateId
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      panes: 'Panes',
      storageConfig: 'StorageConfig',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestImages },
      panes: { 'type': 'array', 'itemType': StartCloudRecordRequestPanes },
      storageConfig: StartCloudRecordRequestStorageConfig,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCloudRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: StartMPUTaskRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  /**
   * @example
   * 1
   */
  cropMode?: number;
  enhancedParam?: StartMPUTaskRequestEnhancedParam;
  /**
   * @example
   * 1
   */
  layoutIds?: number[];
  /**
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  payloadType?: number;
  /**
   * @example
   * 0
   */
  reportVad?: number;
  /**
   * @example
   * 0
   */
  rtpExtInfo?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @example
   * audioUserID
   */
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @example
   * 15273582735
   */
  timeStampRef?: number;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartMPUTaskRequestUserPanes[];
  /**
   * @example
   * 86400
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * 1
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * 1
   */
  subSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  subSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  /**
   * @example
   * 1
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b****
   */
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

export class StartStreamingOutRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutRequestImages[];
  panes?: StartStreamingOutRequestPanes[];
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartStreamingOutRequestTexts[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestImages },
      panes: { 'type': 'array', 'itemType': StartStreamingOutRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestTexts },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartStreamingOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: StopCategoryCallbackRequestCallback;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: StopCategoryCallbackRequestCallback,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DCE8D7E-BE3B-54AB-8DAC-32F34BED0763
   */
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

export class StopCategoryCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCategoryCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCategoryCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
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

export class StopChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCloudRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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

export class StopStreamingOutRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamingOutResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamingOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopStreamingOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoLiveStreamRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @example
   * testRule
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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

export class UpdateCloudRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateCloudRecordRequestClockWidgets[];
  images?: UpdateCloudRecordRequestImages[];
  panes?: UpdateCloudRecordRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestImages },
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCloudRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: UpdateMPUTaskRequestBackgrounds[];
  clockWidgets?: UpdateMPUTaskRequestClockWidgets[];
  /**
   * @example
   * 1
   */
  cropMode?: number;
  layoutIds?: number[];
  /**
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  cropMode?: number;
  layoutIds?: number[];
  mediaEncode?: number;
  ownerId?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: UpdateRecordTemplateRequestBackgrounds[];
  clockWidgets?: UpdateRecordTemplateRequestClockWidgets[];
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  formats?: string[];
  /**
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc-record-pre
   */
  ossBucket?: string;
  ossEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
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
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 76dasgb****
   */
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

export class UpdateStreamingOutRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateStreamingOutRequestClockWidgets[];
  images?: UpdateStreamingOutRequestImages[];
  panes?: UpdateStreamingOutRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateStreamingOutRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestImages },
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutResponseBody extends $tea.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStreamingOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequestBackgrounds extends $tea.Model {
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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

export class CreateAppRecordTemplateRequestRecordTemplate extends $tea.Model {
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  formats?: string[];
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 1
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
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

export class DeleteAppRecordTemplateRequestTemplate extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
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

export class DeleteAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xd4c****
   */
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

export class DescribeAllCallbackResponseBodyCallbacksSubEvent extends $tea.Model {
  /**
   * @example
   * 2000
   */
  event?: number;
  /**
   * @example
   * 录制开始
   */
  eventName?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventName: 'EventName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'number',
      eventName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponseBodyCallbacks extends $tea.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 录制回调
   */
  name?: string;
  subEvent?: DescribeAllCallbackResponseBodyCallbacksSubEvent[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      name: 'Name',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      name: 'string',
      subEvent: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacksSubEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsRequestCondition extends $tea.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsResponseBodyLayoutsPanes extends $tea.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
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

export class DescribeAppLayoutsResponseBodyLayouts extends $tea.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  panes?: DescribeAppLayoutsResponseBodyLayoutsPanes[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
      panes: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayoutsPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesRequestCondition extends $tea.Model {
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * ac7N****
   */
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

export class DescribeAppRecordTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: Buffer;
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  formats?: string[];
  layoutIds?: number[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * wv7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'Buffer',
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponseBodyItems extends $tea.Model {
  /**
   * @example
   * rtc-bucket
   */
  bucket?: string;
  /**
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @example
   * 1712376032000
   */
  fileCreateTs?: number;
  /**
   * @example
   * 200
   */
  fileDuration?: number;
  /**
   * @example
   * record/appid/12_task_local1/1712279809158_1712279844691/playlist.mp4
   */
  filePath?: string;
  /**
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * 1712376012000
   */
  startTs?: number;
  /**
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      channelId: 'ChannelId',
      fileCreateTs: 'FileCreateTs',
      fileDuration: 'FileDuration',
      filePath: 'FilePath',
      fileSize: 'FileSize',
      region: 'Region',
      startTs: 'StartTs',
      taskId: 'TaskId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      channelId: 'string',
      fileCreateTs: 'number',
      fileDuration: 'number',
      filePath: 'string',
      fileSize: 'number',
      region: 'number',
      startTs: 'number',
      taskId: 'string',
      vendor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequestCondition extends $tea.Model {
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * Bj6D****
   */
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
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  layoutIds?: string[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 模版名称
   */
  name?: string;
  /**
   * @example
   * Bj6D****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
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
  /**
   * @example
   * rgf1****"
   */
  appId?: string;
  /**
   * @example
   * Default AppName
   */
  appName?: string;
  /**
   * @example
   * universal
   */
  appType?: string;
  /**
   * @example
   * paybyduration
   */
  billType?: string;
  /**
   * @example
   * 2020-01-09T02:02:29Z
   */
  createTime?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * http://example.com/callBack
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 2021-08-19T02:53:07Z
   */
  createTime?: string;
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @example
   * testRule
   */
  ruleName?: string;
  /**
   * @example
   * disable
   */
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
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * xxxxxxxx
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 0
   */
  pubAudio?: number;
  /**
   * @example
   * 0
   */
  pubVideo1080?: number;
  /**
   * @example
   * 0
   */
  pubVideo360?: number;
  /**
   * @example
   * 0
   */
  pubVideo720?: number;
  /**
   * @example
   * 0
   */
  pubVideoScreenShare?: number;
  /**
   * @example
   * 0
   */
  subAudio?: number;
  /**
   * @example
   * 0
   */
  subVideo1080?: number;
  /**
   * @example
   * 0
   */
  subVideo360?: number;
  /**
   * @example
   * 0
   */
  subVideo720?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * GOOD
   */
  callExp?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
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
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  badExpUserCnt?: number;
  /**
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 5
   */
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

export class DescribeCallbacksResponseBodyCallbacks extends $tea.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 1
   */
  checkStatus?: string;
  /**
   * @example
   * RESPONSE_INVALID
   */
  code?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      checkStatus: 'CheckStatus',
      code: 'Code',
      conf: 'Conf',
      msg: 'Msg',
      status: 'Status',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkStatus: 'string',
      code: 'string',
      conf: 'string',
      msg: 'string',
      status: 'number',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponseBodyChannel extends $tea.Model {
  /**
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @example
   * 1557909133
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponseBodyUsers extends $tea.Model {
  /**
   * @example
   * 1811****
   */
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

export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $tea.Model {
  /**
   * @example
   * 浙江省
   */
  areaName?: string;
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 0.9999
   */
  highQualityTransmissionRate?: string;
  /**
   * @example
   * 1
   */
  pubUserCount?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 1.0000
   */
  callUserRatio?: string;
  /**
   * @example
   * OS
   */
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
  /**
   * @example
   * rjdhtnqy
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @example
   * 123
   */
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
  /**
   * @example
   * CALL_QUALITY
   */
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
  /**
   * @example
   * 0.5
   */
  connAvgTime?: number;
  /**
   * @example
   * 0.91
   */
  fiveSecJoinRate?: number;
  /**
   * @example
   * 0.02
   */
  totalAudioStuckRate?: number;
  /**
   * @example
   * 0.02
   */
  totalVideoStuckRate?: number;
  /**
   * @example
   * 0.02
   */
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
  /**
   * @example
   * 1615893327
   */
  joinTs?: number;
  /**
   * @example
   * 1615893442
   */
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
  /**
   * @example
   * 1615893327
   */
  createdTs?: number;
  /**
   * @example
   * 1615893442
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  /**
   * @example
   * testuserid
   */
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

export class DescribeChannelUserResponseBodySessions extends $tea.Model {
  /**
   * @example
   * 1557909133
   */
  joined?: number;
  /**
   * @example
   * xa744sxx8rtobgj****
   */
  sessionId?: string;
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      joined: 'Joined',
      sessionId: 'SessionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joined: 'number',
      sessionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @example
   * 123
   */
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
  /**
   * @example
   * ALL_NUM
   */
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
  /**
   * @example
   * 0
   */
  totalBadExpNum?: number;
  /**
   * @example
   * 0
   */
  totalJoinFailNum?: number;
  /**
   * @example
   * 1
   */
  totalPubUserNum?: number;
  /**
   * @example
   * 3
   */
  totalSubUserNum?: number;
  /**
   * @example
   * 5
   */
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
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  /**
   * @example
   * 1614936817123
   */
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
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @example
   * 230100
   */
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
  /**
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @example
   * 230100
   */
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
  /**
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * 100
   */
  userCount?: number;
  /**
   * @example
   * 0.9239
   */
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
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 20
   */
  faultUserCount?: number;
  /**
   * @example
   * 0.1
   */
  faultUserRatio?: number;
  /**
   * @example
   * 40
   */
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
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1620957905
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * 0a497933****
   */
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
  /**
   * @example
   * 1615892596
   */
  x?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * AUDIO_STUCK
   */
  type?: string;
  /**
   * @example
   * 0a497933****
   */
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
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * LOCAL
   */
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
  /**
   * @example
   * 1620957900
   */
  x?: string;
  /**
   * @example
   * 0.4540
   */
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
  /**
   * @example
   * 1620957919
   */
  joinTs?: number;
  /**
   * @example
   * 1620958150
   */
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
  /**
   * @example
   * 1620957919
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @example
   * 231
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  /**
   * @example
   * 231
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @example
   * 0a497933****
   */
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
  /**
   * @example
   * JOIN_SLOW
   */
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
  /**
   * @example
   * 1614936817
   */
  channelCreatedTs?: number;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  /**
   * @example
   * 123456
   */
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
  /**
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @example
   * 0.5
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
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
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
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
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
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
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
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
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @example
   * 123
   */
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
  /**
   * @example
   * AUDIO
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @example
   * 123
   */
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
  /**
   * @example
   * VIDEO_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
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
  /**
   * @example
   * 347
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9933
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0021
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.6654
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9338
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9356
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 中国_浙江省
   */
  name?: string;
  /**
   * @example
   * 291
   */
  videoDelay?: number;
  /**
   * @example
   * 1363
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9967
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0058
   */
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
  /**
   * @example
   * 554
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9953
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0014
   */
  audioStuckRate?: string;
  /**
   * @example
   * 1.0000
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9560
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9575
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 517
   */
  videoDelay?: number;
  /**
   * @example
   * 1299
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9981
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0264
   */
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
  /**
   * @example
   * 248
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9987
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0011
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 2.1.0.210316.dev--release/rtcsdk_v2.1
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 333
   */
  videoDelay?: number;
  /**
   * @example
   * 5643
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9997
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0054
   */
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
  /**
   * @example
   * 1615831200
   */
  x?: string;
  /**
   * @example
   * 1.0000
   */
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
  /**
   * @example
   * 0.9376
   */
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  /**
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
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
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 2020-10-02T17:36:00Z
   */
  createTime?: string;
  /**
   * @example
   * 1800
   */
  duration?: number;
  /**
   * @example
   * 2020-11-01T17:36:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2020-11-02T17:36:00Z
   */
  stopTime?: string;
  /**
   * @example
   * yourTaskId
   */
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
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: DescribeRecordTemplatesResponseBodyTemplatesBackgrounds[];
  clockWidgets?: DescribeRecordTemplatesResponseBodyTemplatesClockWidgets[];
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  formats?: string[];
  /**
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  layoutIds?: number[];
  /**
   * @example
   * 50
   */
  mediaEncode?: number;
  /**
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  name?: string;
  /**
   * @example
   * rtc-record-oss
   */
  ossBucket?: string;
  /**
   * @example
   * record/pre/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  /**
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @example
   * 1ca698e2-57fa-4314-8e11-00d950d4****
   */
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
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  /**
   * @example
   * 2018-01-29T02:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2018-01-29T01:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2
   */
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
  /**
   * @example
   * example_channel
   */
  channelId?: string;
  /**
   * @example
   * 2019-06-06T18:57:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  pubUserCount?: number;
  /**
   * @example
   * 2019-06-06T17:57:00Z
   */
  startTime?: string;
  /**
   * @example
   * 25
   */
  subUserCount?: number;
  /**
   * @example
   * 30
   */
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
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 200
   */
  audioDuration?: number;
  /**
   * @example
   * 200
   */
  contentDuration?: number;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 1000
   */
  totalDuration?: number;
  /**
   * @example
   * 300
   */
  v1080Duration?: number;
  /**
   * @example
   * 300
   */
  v360Duration?: number;
  /**
   * @example
   * 200
   */
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
  /**
   * @example
   * 10
   */
  activeChannelPeak?: number;
  /**
   * @example
   * 2018-01-29T00:01:00Z
   */
  activeChannelPeakTime?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
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
  /**
   * @example
   * 10
   */
  activeUserCnt?: number;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
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

export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes extends $tea.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * MajorPane。
   * 
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
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

export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes extends $tea.Model {
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayoutsLayout extends $tea.Model {
  /**
   * @remarks
   * AudioMixCount。
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 22
   */
  layoutId?: number;
  name?: string;
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes;
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
      panes: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayouts extends $tea.Model {
  layout?: DescribeSystemLayoutListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayout },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $tea.Model {
  /**
   * @example
   * 45
   */
  audioCallDuration?: number;
  /**
   * @example
   * 中国
   */
  name?: string;
  /**
   * @example
   * 4821
   */
  totalCallDuration?: number;
  /**
   * @example
   * 4776
   */
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
  /**
   * @example
   * 51
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.9782
   */
  callDurationRatio?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 10636
   */
  totalCallDuration?: number;
  /**
   * @example
   * 10585
   */
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
  /**
   * @example
   * 3
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 1.0.0
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 476
   */
  totalCallDuration?: number;
  /**
   * @example
   * 473
   */
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
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * ONLINE_USER_PEAK
   */
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
  /**
   * @example
   * 1557909133
   */
  join?: number;
  /**
   * @example
   * 1
   */
  role?: number;
  /**
   * @example
   * xa744sxx8rtobgj****
   */
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

export class ModifyAppRecordTemplateRequestRecordTemplate extends $tea.Model {
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  formats?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyAppStreamingOutTemplateRequestStreamingOutTemplate extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyCallbackMetaRequestCallback extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      conf: 'Conf',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      conf: 'string',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequestPanes extends $tea.Model {
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 1811****
   */
  id?: string;
  /**
   * @example
   * Success
   */
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

export class RemoveUsersRequestUsers extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811****
   */
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

export class RemoveUsersResponseBodyUsers extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackRequestCallback extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgets extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTexts extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanes extends $tea.Model {
  images?: StartCloudRecordRequestPanesImages[];
  /**
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * paneId
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * source
   */
  source?: string;
  /**
   * @remarks
   * sourceType
   * 
   * @example
   * video
   */
  sourceType?: string;
  texts?: StartCloudRecordRequestPanesTexts[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestStorageConfig extends $tea.Model {
  /**
   * @remarks
   * accessKey
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * bucket
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * region
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * vendor
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTexts extends $tea.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestBackgrounds extends $tea.Model {
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.2456
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
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

export class StartStreamingOutRequestClockWidgetsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestClockWidgetsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestClockWidgets extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTexts extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanes extends $tea.Model {
  images?: StartStreamingOutRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: string;
  /**
   * @example
   * 1811****
   */
  source?: string;
  /**
   * @example
   * Video
   */
  sourceType?: string;
  texts?: StartStreamingOutRequestPanesTexts[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTexts extends $tea.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackRequestCallback extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgetsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgetsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgets extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTexts extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanes extends $tea.Model {
  images?: UpdateCloudRecordRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateCloudRecordRequestPanesTexts[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTexts extends $tea.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestBackgrounds extends $tea.Model {
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestUserID
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
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
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @example
   * 0
   */
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

export class UpdateStreamingOutRequestClockWidgetsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestClockWidgetsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestClockWidgets extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesImages extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTexts extends $tea.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanes extends $tea.Model {
  images?: UpdateStreamingOutRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateStreamingOutRequestPanesTexts[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTextsBoxColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTextsFontColor extends $tea.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTexts extends $tea.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
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

  /**
   * @param request - AddRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordTemplateResponse
   */
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

  /**
   * @param request - AddRecordTemplateRequest
   * @returns AddRecordTemplateResponse
   */
  async addRecordTemplate(request: AddRecordTemplateRequest): Promise<AddRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 增加应用录制模版
   * 
   * @param tmpReq - CreateAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplateWithOptions(tmpReq: CreateAppRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppRecordTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppRecordTemplateResponse({}));
  }

  /**
   * 增加应用录制模版
   * 
   * @param request - CreateAppRecordTemplateRequest
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplate(request: CreateAppRecordTemplateRequest): Promise<CreateAppRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 创建应用推流模版
   * 
   * @param tmpReq - CreateAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppStreamingOutTemplateResponse
   */
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

  /**
   * 创建应用推流模版
   * 
   * @param request - CreateAppStreamingOutTemplateRequest
   * @returns CreateAppStreamingOutTemplateResponse
   */
  async createAppStreamingOutTemplate(request: CreateAppStreamingOutTemplateRequest): Promise<CreateAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @returns CreateAutoLiveStreamRuleResponse
   */
  async createAutoLiveStreamRule(request: CreateAutoLiveStreamRuleRequest): Promise<CreateAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventSubscribeResponse
   */
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

  /**
   * @param request - CreateEventSubscribeRequest
   * @returns CreateEventSubscribeResponse
   */
  async createEventSubscribe(request: CreateEventSubscribeRequest): Promise<CreateEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMPULayoutResponse
   */
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

  /**
   * @param request - CreateMPULayoutRequest
   * @returns CreateMPULayoutResponse
   */
  async createMPULayout(request: CreateMPULayoutRequest): Promise<CreateMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPULayoutWithOptions(request, runtime);
  }

  /**
   * 删除应用录制模版
   * 
   * @param tmpReq - DeleteAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplateWithOptions(tmpReq: DeleteAppRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppRecordTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAppRecordTemplateResponse({}));
  }

  /**
   * 删除应用录制模版
   * 
   * @param request - DeleteAppRecordTemplateRequest
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplate(request: DeleteAppRecordTemplateRequest): Promise<DeleteAppRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 删除应用推流模版
   * 
   * @param tmpReq - DeleteAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppStreamingOutTemplateResponse
   */
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

  /**
   * 删除应用推流模版
   * 
   * @param request - DeleteAppStreamingOutTemplateRequest
   * @returns DeleteAppStreamingOutTemplateResponse
   */
  async deleteAppStreamingOutTemplate(request: DeleteAppStreamingOutTemplateRequest): Promise<DeleteAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @returns DeleteAutoLiveStreamRuleResponse
   */
  async deleteAutoLiveStreamRule(request: DeleteAutoLiveStreamRuleRequest): Promise<DeleteAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChannelResponse
   */
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

  /**
   * @param request - DeleteChannelRequest
   * @returns DeleteChannelResponse
   */
  async deleteChannel(request: DeleteChannelRequest): Promise<DeleteChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventSubscribeResponse
   */
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

  /**
   * @param request - DeleteEventSubscribeRequest
   * @returns DeleteEventSubscribeResponse
   */
  async deleteEventSubscribe(request: DeleteEventSubscribeRequest): Promise<DeleteEventSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMPULayoutResponse
   */
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

  /**
   * @param request - DeleteMPULayoutRequest
   * @returns DeleteMPULayoutResponse
   */
  async deleteMPULayout(request: DeleteMPULayoutRequest): Promise<DeleteMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMPULayoutWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordTemplateResponse
   */
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

  /**
   * @param request - DeleteRecordTemplateRequest
   * @returns DeleteRecordTemplateResponse
   */
  async deleteRecordTemplate(request: DeleteRecordTemplateRequest): Promise<DeleteRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 列出系统支持的事件回调
   * 
   * @param request - DescribeAllCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallbackWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAllCallbackResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAllCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllCallbackResponse>(await this.callApi(params, req, runtime), new DescribeAllCallbackResponse({}));
  }

  /**
   * 列出系统支持的事件回调
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallback(): Promise<DescribeAllCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllCallbackWithOptions(runtime);
  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatusWithOptions(request: DescribeAppCallStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppCallStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppCallStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppCallStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppCallStatusResponse({}));
  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatus(request: DescribeAppCallStatusRequest): Promise<DescribeAppCallStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppCallStatusWithOptions(request, runtime);
  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKeyWithOptions(request: DescribeAppCallbackSecretKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppCallbackSecretKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppCallbackSecretKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppCallbackSecretKeyResponse>(await this.callApi(params, req, runtime), new DescribeAppCallbackSecretKeyResponse({}));
  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKey(request: DescribeAppCallbackSecretKeyRequest): Promise<DescribeAppCallbackSecretKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppCallbackSecretKeyWithOptions(request, runtime);
  }

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppKeyResponse
   */
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

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @returns DescribeAppKeyResponse
   */
  async describeAppKey(request: DescribeAppKeyRequest): Promise<DescribeAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppKeyWithOptions(request, runtime);
  }

  /**
   * 查询app自定义布局
   * 
   * @param tmpReq - DescribeAppLayoutsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayoutsWithOptions(tmpReq: DescribeAppLayoutsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppLayoutsResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeAppLayoutsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppLayouts",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppLayoutsResponse>(await this.callApi(params, req, runtime), new DescribeAppLayoutsResponse({}));
  }

  /**
   * 查询app自定义布局
   * 
   * @param request - DescribeAppLayoutsRequest
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayouts(request: DescribeAppLayoutsRequest): Promise<DescribeAppLayoutsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppLayoutsWithOptions(request, runtime);
  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatusWithOptions(request: DescribeAppLiveStreamStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppLiveStreamStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppLiveStreamStatusResponse({}));
  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatus(request: DescribeAppLiveStreamStatusRequest): Promise<DescribeAppLiveStreamStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatusWithOptions(request: DescribeAppRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppRecordStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppRecordStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordStatusResponse({}));
  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatus(request: DescribeAppRecordStatusRequest): Promise<DescribeAppRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 应用录制模版列表
   * 
   * @param tmpReq - DescribeAppRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplatesWithOptions(tmpReq: DescribeAppRecordTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppRecordTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeAppRecordTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppRecordTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordTemplatesResponse({}));
  }

  /**
   * 应用录制模版列表
   * 
   * @param request - DescribeAppRecordTemplatesRequest
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplates(request: DescribeAppRecordTemplatesRequest): Promise<DescribeAppRecordTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * 查询录制列表
   * 
   * @param tmpReq - DescribeAppRecordingFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFilesWithOptions(tmpReq: DescribeAppRecordingFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppRecordingFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeAppRecordingFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppRecordingFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppRecordingFilesResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordingFilesResponse({}));
  }

  /**
   * 查询录制列表
   * 
   * @param request - DescribeAppRecordingFilesRequest
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFiles(request: DescribeAppRecordingFilesRequest): Promise<DescribeAppRecordingFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppRecordingFilesWithOptions(request, runtime);
  }

  /**
   * 应用推流模版列表
   * 
   * @param tmpReq - DescribeAppStreamingOutTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
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

  /**
   * 应用推流模版列表
   * 
   * @param request - DescribeAppStreamingOutTemplatesRequest
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
  async describeAppStreamingOutTemplates(request: DescribeAppStreamingOutTemplatesRequest): Promise<DescribeAppStreamingOutTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppStreamingOutTemplatesWithOptions(request, runtime);
  }

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
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

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @returns DescribeAutoLiveStreamRuleResponse
   */
  async describeAutoLiveStreamRule(request: DescribeAutoLiveStreamRuleRequest): Promise<DescribeAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallResponse
   */
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

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @returns DescribeCallResponse
   */
  async describeCall(request: DescribeCallRequest): Promise<DescribeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCallWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallListResponse
   */
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

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @returns DescribeCallListResponse
   */
  async describeCallList(request: DescribeCallListRequest): Promise<DescribeCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCallListWithOptions(request, runtime);
  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacksWithOptions(request: DescribeCallbacksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCallbacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCallbacks",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallbacksResponse>(await this.callApi(params, req, runtime), new DescribeCallbacksResponse({}));
  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacks(request: DescribeCallbacksRequest): Promise<DescribeCallbacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCallbacksWithOptions(request, runtime);
  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelResponse
   */
  async describeChannelWithOptions(request: DescribeChannelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelResponse>(await this.callApi(params, req, runtime), new DescribeChannelResponse({}));
  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @returns DescribeChannelResponse
   */
  async describeChannel(request: DescribeChannelRequest): Promise<DescribeChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelWithOptions(request, runtime);
  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsersWithOptions(request: DescribeChannelAllUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelAllUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelAllUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelAllUsersResponse>(await this.callApi(params, req, runtime), new DescribeChannelAllUsersResponse({}));
  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsers(request: DescribeChannelAllUsersRequest): Promise<DescribeChannelAllUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelAllUsersWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
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

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
  async describeChannelAreaDistributionStatData(request: DescribeChannelAreaDistributionStatDataRequest): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelDistributionStatDataResponse
   */
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

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @returns DescribeChannelDistributionStatDataResponse
   */
  async describeChannelDistributionStatData(request: DescribeChannelDistributionStatDataRequest): Promise<DescribeChannelDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelOverallDataResponse
   */
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

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @returns DescribeChannelOverallDataResponse
   */
  async describeChannelOverallData(request: DescribeChannelOverallDataRequest): Promise<DescribeChannelOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelParticipantsResponse
   */
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

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @returns DescribeChannelParticipantsResponse
   */
  async describeChannelParticipants(request: DescribeChannelParticipantsRequest): Promise<DescribeChannelParticipantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelParticipantsWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelTopPubUserListResponse
   */
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

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @returns DescribeChannelTopPubUserListResponse
   */
  async describeChannelTopPubUserList(request: DescribeChannelTopPubUserListRequest): Promise<DescribeChannelTopPubUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelTopPubUserListWithOptions(request, runtime);
  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUserWithOptions(request: DescribeChannelUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannelUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelUserResponse>(await this.callApi(params, req, runtime), new DescribeChannelUserResponse({}));
  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUser(request: DescribeChannelUserRequest): Promise<DescribeChannelUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserMetricsResponse
   */
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

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @returns DescribeChannelUserMetricsResponse
   */
  async describeChannelUserMetrics(request: DescribeChannelUserMetricsRequest): Promise<DescribeChannelUserMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUserMetricsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUsersResponse
   */
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

  /**
   * @param request - DescribeChannelUsersRequest
   * @returns DescribeChannelUsersResponse
   */
  async describeChannelUsers(request: DescribeChannelUsersRequest): Promise<DescribeChannelUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelUsersWithOptions(request, runtime);
  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelsResponse
   */
  async describeChannelsWithOptions(request: DescribeChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChannelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChannels",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelsResponse>(await this.callApi(params, req, runtime), new DescribeChannelsResponse({}));
  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @returns DescribeChannelsResponse
   */
  async describeChannels(request: DescribeChannelsRequest): Promise<DescribeChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChannelsWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointEventListResponse
   */
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

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @returns DescribeEndPointEventListResponse
   */
  async describeEndPointEventList(request: DescribeEndPointEventListRequest): Promise<DescribeEndPointEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndPointEventListWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointMetricDataResponse
   */
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

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @returns DescribeEndPointMetricDataResponse
   */
  async describeEndPointMetricData(request: DescribeEndPointMetricDataRequest): Promise<DescribeEndPointMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndPointMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
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

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
  async describeFaultDiagnosisFactorDistributionStat(request: DescribeFaultDiagnosisFactorDistributionStatRequest): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisFactorDistributionStatWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
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

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
  async describeFaultDiagnosisOverallData(request: DescribeFaultDiagnosisOverallDataRequest): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisOverallDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
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

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
  async describeFaultDiagnosisUserDetail(request: DescribeFaultDiagnosisUserDetailRequest): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserDetailWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserListResponse
   */
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

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @returns DescribeFaultDiagnosisUserListResponse
   */
  async describeFaultDiagnosisUserList(request: DescribeFaultDiagnosisUserListRequest): Promise<DescribeFaultDiagnosisUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMPULayoutInfoListResponse
   */
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

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @returns DescribeMPULayoutInfoListResponse
   */
  async describeMPULayoutInfoList(request: DescribeMPULayoutInfoListRequest): Promise<DescribeMPULayoutInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPULayoutInfoListWithOptions(request, runtime);
  }

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePubUserListBySubUserResponse
   */
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

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @returns DescribePubUserListBySubUserResponse
   */
  async describePubUserListBySubUser(request: DescribePubUserListBySubUserRequest): Promise<DescribePubUserListBySubUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePubUserListBySubUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQoeMetricDataResponse
   */
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

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @returns DescribeQoeMetricDataResponse
   */
  async describeQoeMetricData(request: DescribeQoeMetricDataRequest): Promise<DescribeQoeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQoeMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
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

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
  async describeQualityAreaDistributionStatData(request: DescribeQualityAreaDistributionStatDataRequest): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityDistributionStatDataResponse
   */
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

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @returns DescribeQualityDistributionStatDataResponse
   */
  async describeQualityDistributionStatData(request: DescribeQualityDistributionStatDataRequest): Promise<DescribeQualityDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
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

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
  async describeQualityOsSdkVersionDistributionStatData(request: DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOverallDataResponse
   */
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

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @returns DescribeQualityOverallDataResponse
   */
  async describeQualityOverallData(request: DescribeQualityOverallDataRequest): Promise<DescribeQualityOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQualityOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordFilesResponse
   */
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

  /**
   * @param request - DescribeRecordFilesRequest
   * @returns DescribeRecordFilesResponse
   */
  async describeRecordFiles(request: DescribeRecordFilesRequest): Promise<DescribeRecordFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordFilesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordTemplatesResponse
   */
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

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @returns DescribeRecordTemplatesResponse
   */
  async describeRecordTemplates(request: DescribeRecordTemplatesRequest): Promise<DescribeRecordTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelListResponse
   */
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

  /**
   * @param request - DescribeRtcChannelListRequest
   * @returns DescribeRtcChannelListResponse
   */
  async describeRtcChannelList(request: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelMetricResponse
   */
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

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @returns DescribeRtcChannelMetricResponse
   */
  async describeRtcChannelMetric(request: DescribeRtcChannelMetricRequest): Promise<DescribeRtcChannelMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcChannelMetricWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcDurationDataResponse
   */
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

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @returns DescribeRtcDurationDataResponse
   */
  async describeRtcDurationData(request: DescribeRtcDurationDataRequest): Promise<DescribeRtcDurationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcDurationDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
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

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
  async describeRtcPeakChannelCntData(request: DescribeRtcPeakChannelCntDataRequest): Promise<DescribeRtcPeakChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcUserCntDataResponse
   */
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

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @returns DescribeRtcUserCntDataResponse
   */
  async describeRtcUserCntData(request: DescribeRtcUserCntDataRequest): Promise<DescribeRtcUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRtcUserCntDataWithOptions(request, runtime);
  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatusWithOptions(request: DescribeStreamingOutStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamingOutStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStreamingOutStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStreamingOutStatusResponse>(await this.callApi(params, req, runtime), new DescribeStreamingOutStatusResponse({}));
  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatus(request: DescribeStreamingOutStatusRequest): Promise<DescribeStreamingOutStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamingOutStatusWithOptions(request, runtime);
  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutListWithOptions(request: DescribeSystemLayoutListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemLayoutListResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeSystemLayoutList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemLayoutListResponse>(await this.callApi(params, req, runtime), new DescribeSystemLayoutListResponse({}));
  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutList(request: DescribeSystemLayoutListRequest): Promise<DescribeSystemLayoutListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemLayoutListWithOptions(request, runtime);
  }

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
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

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
  async describeUsageAreaDistributionStatData(request: DescribeUsageAreaDistributionStatDataRequest): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageDistributionStatDataResponse
   */
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

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @returns DescribeUsageDistributionStatDataResponse
   */
  async describeUsageDistributionStatData(request: DescribeUsageDistributionStatDataRequest): Promise<DescribeUsageDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
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

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
  async describeUsageOsSdkVersionDistributionStatData(request: DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOverallDataResponse
   */
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

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @returns DescribeUsageOverallDataResponse
   */
  async describeUsageOverallData(request: DescribeUsageOverallDataRequest): Promise<DescribeUsageOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsageOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserInfoInChannelResponse
   */
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

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @returns DescribeUserInfoInChannelResponse
   */
  async describeUserInfoInChannel(request: DescribeUserInfoInChannelRequest): Promise<DescribeUserInfoInChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserInfoInChannelWithOptions(request, runtime);
  }

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @returns DisableAutoLiveStreamRuleResponse
   */
  async disableAutoLiveStreamRule(request: DisableAutoLiveStreamRuleRequest): Promise<DisableAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @returns EnableAutoLiveStreamRuleResponse
   */
  async enableAutoLiveStreamRule(request: EnableAutoLiveStreamRuleRequest): Promise<EnableAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - GetMPUTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMPUTaskStatusResponse
   */
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

  /**
   * @param request - GetMPUTaskStatusRequest
   * @returns GetMPUTaskStatusResponse
   */
  async getMPUTaskStatus(request: GetMPUTaskStatusRequest): Promise<GetMPUTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMPUTaskStatusWithOptions(request, runtime);
  }

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
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

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatusWithOptions(request: ModifyAppCallbackStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppCallbackStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppCallbackStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppCallbackStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppCallbackStatusResponse({}));
  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatus(request: ModifyAppCallbackStatusRequest): Promise<ModifyAppCallbackStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppCallbackStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatusWithOptions(request: ModifyAppLiveStreamStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppLiveStreamStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppLiveStreamStatusResponse({}));
  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatus(request: ModifyAppLiveStreamStatusRequest): Promise<ModifyAppLiveStreamStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatusWithOptions(request: ModifyAppRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppRecordStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppRecordStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppRecordStatusResponse({}));
  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatus(request: ModifyAppRecordStatusRequest): Promise<ModifyAppRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制模版
   * 
   * @param tmpReq - ModifyAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplateWithOptions(tmpReq: ModifyAppRecordTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppRecordTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new ModifyAppRecordTemplateResponse({}));
  }

  /**
   * 修改应用录制模版
   * 
   * @param request - ModifyAppRecordTemplateRequest
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplate(request: ModifyAppRecordTemplateRequest): Promise<ModifyAppRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新应用推流模版
   * 
   * @param tmpReq - ModifyAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppStreamingOutTemplateResponse
   */
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

  /**
   * 更新应用推流模版
   * 
   * @param request - ModifyAppStreamingOutTemplateRequest
   * @returns ModifyAppStreamingOutTemplateResponse
   */
  async modifyAppStreamingOutTemplate(request: ModifyAppStreamingOutTemplateRequest): Promise<ModifyAppStreamingOutTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * 更新app回调
   * 
   * @param tmpReq - ModifyCallbackMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMetaWithOptions(tmpReq: ModifyCallbackMetaRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCallbackMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyCallbackMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCallbackMeta",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCallbackMetaResponse>(await this.callApi(params, req, runtime), new ModifyCallbackMetaResponse({}));
  }

  /**
   * 更新app回调
   * 
   * @param request - ModifyCallbackMetaRequest
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMeta(request: ModifyCallbackMetaRequest): Promise<ModifyCallbackMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCallbackMetaWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMPULayoutResponse
   */
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

  /**
   * @param request - ModifyMPULayoutRequest
   * @returns ModifyMPULayoutResponse
   */
  async modifyMPULayout(request: ModifyMPULayoutRequest): Promise<ModifyMPULayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMPULayoutWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTerminalsResponse
   */
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

  /**
   * @param request - RemoveTerminalsRequest
   * @returns RemoveTerminalsResponse
   */
  async removeTerminals(request: RemoveTerminalsRequest): Promise<RemoveTerminalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTerminalsWithOptions(request, runtime);
  }

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUsers",
      version: "2018-01-11",
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

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * 开启某个事件回调
   * 
   * @param tmpReq - StartCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallbackWithOptions(tmpReq: StartCategoryCallbackRequest, runtime: $Util.RuntimeOptions): Promise<StartCategoryCallbackResponse> {
    Util.validateModel(tmpReq);
    let request = new StartCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCategoryCallbackResponse>(await this.callApi(params, req, runtime), new StartCategoryCallbackResponse({}));
  }

  /**
   * 开启某个事件回调
   * 
   * @param request - StartCategoryCallbackRequest
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallback(request: StartCategoryCallbackRequest): Promise<StartCategoryCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * StartCloudRecord
   * 
   * @param request - StartCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudRecordResponse
   */
  async startCloudRecordWithOptions(request: StartCloudRecordRequest, runtime: $Util.RuntimeOptions): Promise<StartCloudRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!Util.isUnset(request.storageConfig)) {
      query["StorageConfig"] = request.storageConfig;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCloudRecordResponse>(await this.callApi(params, req, runtime), new StartCloudRecordResponse({}));
  }

  /**
   * StartCloudRecord
   * 
   * @param request - StartCloudRecordRequest
   * @returns StartCloudRecordResponse
   */
  async startCloudRecord(request: StartCloudRecordRequest): Promise<StartCloudRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StartMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMPUTaskResponse
   */
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

  /**
   * @param request - StartMPUTaskRequest
   * @returns StartMPUTaskResponse
   */
  async startMPUTask(request: StartMPUTaskRequest): Promise<StartMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordTaskResponse
   */
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

  /**
   * @param request - StartRecordTaskRequest
   * @returns StartRecordTaskResponse
   */
  async startRecordTask(request: StartRecordTaskRequest): Promise<StartRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordTaskWithOptions(request, runtime);
  }

  /**
   * StartStreamingOut
   * 
   * @param request - StartStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartStreamingOutResponse
   */
  async startStreamingOutWithOptions(request: StartStreamingOutRequest, runtime: $Util.RuntimeOptions): Promise<StartStreamingOutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.texts)) {
      query["Texts"] = request.texts;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartStreamingOutResponse>(await this.callApi(params, req, runtime), new StartStreamingOutResponse({}));
  }

  /**
   * StartStreamingOut
   * 
   * @param request - StartStreamingOutRequest
   * @returns StartStreamingOutResponse
   */
  async startStreamingOut(request: StartStreamingOutRequest): Promise<StartStreamingOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startStreamingOutWithOptions(request, runtime);
  }

  /**
   * 关闭某个事件回调
   * 
   * @param tmpReq - StopCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallbackWithOptions(tmpReq: StopCategoryCallbackRequest, runtime: $Util.RuntimeOptions): Promise<StopCategoryCallbackResponse> {
    Util.validateModel(tmpReq);
    let request = new StopCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCategoryCallbackResponse>(await this.callApi(params, req, runtime), new StopCategoryCallbackResponse({}));
  }

  /**
   * 关闭某个事件回调
   * 
   * @param request - StopCategoryCallbackRequest
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallback(request: StopCategoryCallbackRequest): Promise<StopCategoryCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChannelResponse
   */
  async stopChannelWithOptions(request: StopChannelRequest, runtime: $Util.RuntimeOptions): Promise<StopChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopChannelResponse>(await this.callApi(params, req, runtime), new StopChannelResponse({}));
  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @returns StopChannelResponse
   */
  async stopChannel(request: StopChannelRequest): Promise<StopChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopChannelWithOptions(request, runtime);
  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecordWithOptions(request: StopCloudRecordRequest, runtime: $Util.RuntimeOptions): Promise<StopCloudRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCloudRecordResponse>(await this.callApi(params, req, runtime), new StopCloudRecordResponse({}));
  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecord(request: StopCloudRecordRequest): Promise<StopCloudRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StopMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMPUTaskResponse
   */
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

  /**
   * @param request - StopMPUTaskRequest
   * @returns StopMPUTaskResponse
   */
  async stopMPUTask(request: StopMPUTaskRequest): Promise<StopMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordTaskResponse
   */
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

  /**
   * @param request - StopRecordTaskRequest
   * @returns StopRecordTaskResponse
   */
  async stopRecordTask(request: StopRecordTaskRequest): Promise<StopRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordTaskWithOptions(request, runtime);
  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOutWithOptions(request: StopStreamingOutRequest, runtime: $Util.RuntimeOptions): Promise<StopStreamingOutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopStreamingOutResponse>(await this.callApi(params, req, runtime), new StopStreamingOutResponse({}));
  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOut(request: StopStreamingOutRequest): Promise<StopStreamingOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStreamingOutWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoLiveStreamRuleResponse
   */
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

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @returns UpdateAutoLiveStreamRuleResponse
   */
  async updateAutoLiveStreamRule(request: UpdateAutoLiveStreamRuleRequest): Promise<UpdateAutoLiveStreamRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 更新云端录制任务
   * 
   * @param request - UpdateCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecordWithOptions(request: UpdateCloudRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCloudRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCloudRecordResponse>(await this.callApi(params, req, runtime), new UpdateCloudRecordResponse({}));
  }

  /**
   * 更新云端录制任务
   * 
   * @param request - UpdateCloudRecordRequest
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecord(request: UpdateCloudRecordRequest): Promise<UpdateCloudRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMPUTaskResponse
   */
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

  /**
   * @param request - UpdateMPUTaskRequest
   * @returns UpdateMPUTaskResponse
   */
  async updateMPUTask(request: UpdateMPUTaskRequest): Promise<UpdateMPUTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTaskResponse
   */
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

  /**
   * @param request - UpdateRecordTaskRequest
   * @returns UpdateRecordTaskResponse
   */
  async updateRecordTask(request: UpdateRecordTaskRequest): Promise<UpdateRecordTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTemplateResponse
   */
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

  /**
   * @param request - UpdateRecordTemplateRequest
   * @returns UpdateRecordTemplateResponse
   */
  async updateRecordTemplate(request: UpdateRecordTemplateRequest): Promise<UpdateRecordTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新旁路推流任务
   * 
   * @param request - UpdateStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOutWithOptions(request: UpdateStreamingOutRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStreamingOutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!Util.isUnset(request.images)) {
      query["Images"] = request.images;
    }

    if (!Util.isUnset(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStreamingOutResponse>(await this.callApi(params, req, runtime), new UpdateStreamingOutResponse({}));
  }

  /**
   * 更新旁路推流任务
   * 
   * @param request - UpdateStreamingOutRequest
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOut(request: UpdateStreamingOutRequest): Promise<UpdateStreamingOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStreamingOutWithOptions(request, runtime);
  }

}
