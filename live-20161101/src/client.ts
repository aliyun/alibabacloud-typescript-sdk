// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCasterComponentRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  componentName?: string;
  locationId?: string;
  componentType?: string;
  effect?: string;
  componentLayer?: string;
  layerOrder?: string;
  textLayerContent?: string;
  imageLayerContent?: string;
  captionLayerContent?: string;
  htmlLayerContent?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      componentName: 'ComponentName',
      locationId: 'LocationId',
      componentType: 'ComponentType',
      effect: 'Effect',
      componentLayer: 'ComponentLayer',
      layerOrder: 'LayerOrder',
      textLayerContent: 'TextLayerContent',
      imageLayerContent: 'ImageLayerContent',
      captionLayerContent: 'CaptionLayerContent',
      htmlLayerContent: 'HtmlLayerContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      componentName: 'string',
      locationId: 'string',
      componentType: 'string',
      effect: 'string',
      componentLayer: 'string',
      layerOrder: 'string',
      textLayerContent: 'string',
      imageLayerContent: 'string',
      captionLayerContent: 'string',
      htmlLayerContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterComponentResponseBody extends $tea.Model {
  requestId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episodeType?: string;
  episodeName?: string;
  resourceId?: string;
  startTime?: string;
  endTime?: string;
  switchType?: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episodeType: 'EpisodeType',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episodeType: 'string',
      episodeName: 'string',
      resourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeResponseBody extends $tea.Model {
  requestId?: string;
  episodeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterEpisodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterEpisodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  domainName?: string;
  startTime?: string;
  repeatNum?: number;
  sideOutputUrl?: string;
  callbackUrl?: string;
  item?: AddCasterEpisodeGroupRequestItem[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      startTime: 'StartTime',
      repeatNum: 'RepeatNum',
      sideOutputUrl: 'SideOutputUrl',
      callbackUrl: 'CallbackUrl',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      domainName: 'string',
      startTime: 'string',
      repeatNum: 'number',
      sideOutputUrl: 'string',
      callbackUrl: 'string',
      item: { 'type': 'array', 'itemType': AddCasterEpisodeGroupRequestItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupResponseBody extends $tea.Model {
  requestId?: string;
  programId?: string;
  itemIds?: AddCasterEpisodeGroupResponseBodyItemIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programId: 'ProgramId',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programId: 'string',
      itemIds: AddCasterEpisodeGroupResponseBodyItemIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterEpisodeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterEpisodeGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentResponseBody extends $tea.Model {
  requestId?: string;
  programId?: string;
  itemIds?: AddCasterEpisodeGroupContentResponseBodyItemIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programId: 'ProgramId',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programId: 'string',
      itemIds: AddCasterEpisodeGroupContentResponseBodyItemIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterEpisodeGroupContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterEpisodeGroupContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  videoLayer?: AddCasterLayoutRequestVideoLayer[];
  audioLayer?: AddCasterLayoutRequestAudioLayer[];
  blendList?: string[];
  mixList?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      videoLayer: 'VideoLayer',
      audioLayer: 'AudioLayer',
      blendList: 'BlendList',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      videoLayer: { 'type': 'array', 'itemType': AddCasterLayoutRequestVideoLayer },
      audioLayer: { 'type': 'array', 'itemType': AddCasterLayoutRequestAudioLayer },
      blendList: { 'type': 'array', 'itemType': 'string' },
      mixList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutResponseBody extends $tea.Model {
  requestId?: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episode?: AddCasterProgramRequestEpisode[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': AddCasterProgramRequestEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseBody extends $tea.Model {
  episodeIds?: AddCasterProgramResponseBodyEpisodeIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      episodeIds: 'EpisodeIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeIds: AddCasterProgramResponseBodyEpisodeIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterProgramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterProgramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterVideoResourceRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  resourceName?: string;
  locationId?: string;
  liveStreamUrl?: string;
  streamId?: string;
  materialId?: string;
  vodUrl?: string;
  beginOffset?: number;
  endOffset?: number;
  repeatNum?: number;
  ptsCallbackInterval?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      resourceName: 'ResourceName',
      locationId: 'LocationId',
      liveStreamUrl: 'LiveStreamUrl',
      streamId: 'StreamId',
      materialId: 'MaterialId',
      vodUrl: 'VodUrl',
      beginOffset: 'BeginOffset',
      endOffset: 'EndOffset',
      repeatNum: 'RepeatNum',
      ptsCallbackInterval: 'PtsCallbackInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      resourceName: 'string',
      locationId: 'string',
      liveStreamUrl: 'string',
      streamId: 'string',
      materialId: 'string',
      vodUrl: 'string',
      beginOffset: 'number',
      endOffset: 'number',
      repeatNum: 'number',
      ptsCallbackInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterVideoResourceResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterVideoResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCasterVideoResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCasterVideoResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLiveStreamTranscodeRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  app?: string;
  template?: string;
  templateType?: string;
  height?: number;
  width?: number;
  FPS?: number;
  videoBitrate?: number;
  audioBitrate?: number;
  gop?: string;
  profile?: number;
  audioProfile?: string;
  audioCodec?: string;
  audioRate?: number;
  audioChannelNum?: number;
  lazy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
      app: 'App',
      template: 'Template',
      templateType: 'TemplateType',
      height: 'Height',
      width: 'Width',
      FPS: 'FPS',
      videoBitrate: 'VideoBitrate',
      audioBitrate: 'AudioBitrate',
      gop: 'Gop',
      profile: 'Profile',
      audioProfile: 'AudioProfile',
      audioCodec: 'AudioCodec',
      audioRate: 'AudioRate',
      audioChannelNum: 'AudioChannelNum',
      lazy: 'Lazy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
      app: 'string',
      template: 'string',
      templateType: 'string',
      height: 'number',
      width: 'number',
      FPS: 'number',
      videoBitrate: 'number',
      audioBitrate: 'number',
      gop: 'string',
      profile: 'number',
      audioProfile: 'string',
      audioCodec: 'string',
      audioRate: 'number',
      audioChannelNum: 'number',
      lazy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLiveStreamTranscodeResponseBody extends $tea.Model {
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

export class AddCustomLiveStreamTranscodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCustomLiveStreamTranscodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCustomLiveStreamTranscodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  ossEndpoint?: string;
  ossBucket?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  onDemand?: number;
  recordFormat?: AddLiveAppRecordConfigRequestRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      onDemand: 'OnDemand',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      onDemand: 'number',
      recordFormat: { 'type': 'array', 'itemType': AddLiveAppRecordConfigRequestRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppRecordConfigResponseBody extends $tea.Model {
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

export class AddLiveAppRecordConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveAppRecordConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveAppRecordConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  timeInterval?: number;
  ossEndpoint?: string;
  ossBucket?: string;
  overwriteOssObject?: string;
  sequenceOssObject?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      timeInterval: 'TimeInterval',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      overwriteOssObject: 'OverwriteOssObject',
      sequenceOssObject: 'SequenceOssObject',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      timeInterval: 'number',
      ossEndpoint: 'string',
      ossBucket: 'string',
      overwriteOssObject: 'string',
      sequenceOssObject: 'string',
      callback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppSnapshotConfigResponseBody extends $tea.Model {
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

export class AddLiveAppSnapshotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveAppSnapshotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveAppSnapshotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveASRConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  mnsTopic?: string;
  mnsRegion?: string;
  period?: number;
  httpCallbackURL?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mnsTopic: 'MnsTopic',
      mnsRegion: 'MnsRegion',
      period: 'Period',
      httpCallbackURL: 'HttpCallbackURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      mnsTopic: 'string',
      mnsRegion: 'string',
      period: 'number',
      httpCallbackURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveASRConfigResponseBody extends $tea.Model {
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

export class AddLiveASRConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveASRConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveASRConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditConfigResponseBody extends $tea.Model {
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

export class AddLiveAudioAuditConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveAudioAuditConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveAudioAuditConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  callback?: string;
  callbackTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      callback: 'string',
      callbackTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditNotifyConfigResponseBody extends $tea.Model {
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

export class AddLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveAudioAuditNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveAudioAuditNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDetectNotifyConfigResponseBody extends $tea.Model {
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

export class AddLiveDetectNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveDetectNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveDetectNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  liveDomainType?: string;
  domainName?: string;
  region?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      liveDomainType: 'LiveDomainType',
      domainName: 'DomainName',
      region: 'Region',
      checkUrl: 'CheckUrl',
      scope: 'Scope',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      liveDomainType: 'string',
      domainName: 'string',
      region: 'string',
      checkUrl: 'string',
      scope: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainResponseBody extends $tea.Model {
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

export class AddLiveDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainMappingRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  pushDomain?: string;
  pullDomain?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      pushDomain: 'PushDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      pushDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainMappingResponseBody extends $tea.Model {
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

export class AddLiveDomainMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveDomainMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveDomainMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainPlayMappingRequest extends $tea.Model {
  ownerId?: number;
  playDomain?: string;
  pullDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      playDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainPlayMappingResponseBody extends $tea.Model {
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

export class AddLiveDomainPlayMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveDomainPlayMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveDomainPlayMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLivePullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  sourceUrl?: string;
  startTime?: string;
  endTime?: string;
  pullAlways?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pullAlways: 'PullAlways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      endTime: 'string',
      pullAlways: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLivePullStreamInfoConfigResponseBody extends $tea.Model {
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

export class AddLivePullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLivePullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLivePullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  notifyUrl?: string;
  needStatusNotify?: boolean;
  onDemandUrl?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      needStatusNotify: 'NeedStatusNotify',
      onDemandUrl: 'OnDemandUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      notifyUrl: 'string',
      needStatusNotify: 'boolean',
      onDemandUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveRecordNotifyConfigResponseBody extends $tea.Model {
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

export class AddLiveRecordNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveRecordNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveRecordNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveRecordVodConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  vodTranscodeGroupId?: string;
  cycleDuration?: number;
  autoCompose?: string;
  storageLocation?: string;
  composeVodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
      cycleDuration: 'CycleDuration',
      autoCompose: 'AutoCompose',
      storageLocation: 'StorageLocation',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      vodTranscodeGroupId: 'string',
      cycleDuration: 'number',
      autoCompose: 'string',
      storageLocation: 'string',
      composeVodTranscodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveRecordVodConfigResponseBody extends $tea.Model {
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

export class AddLiveRecordVodConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveRecordVodConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveRecordVodConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  ossEndpoint?: string;
  ossBucket?: string;
  ossObject?: string;
  interval?: number;
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      interval: 'Interval',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      interval: 'number',
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveSnapshotDetectPornConfigResponseBody extends $tea.Model {
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

export class AddLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveSnapshotDetectPornConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveSnapshotDetectPornConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveStreamTranscodeRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  app?: string;
  template?: string;
  encryptParameters?: string;
  lazy?: string;
  watermark?: string;
  mix?: string;
  onlyAudio?: string;
  waterPattern?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
      app: 'App',
      template: 'Template',
      encryptParameters: 'EncryptParameters',
      lazy: 'Lazy',
      watermark: 'Watermark',
      mix: 'Mix',
      onlyAudio: 'OnlyAudio',
      waterPattern: 'WaterPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
      app: 'string',
      template: 'string',
      encryptParameters: 'string',
      lazy: 'string',
      watermark: 'string',
      mix: 'string',
      onlyAudio: 'string',
      waterPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveStreamTranscodeResponseBody extends $tea.Model {
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

export class AddLiveStreamTranscodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLiveStreamTranscodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLiveStreamTranscodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRtsLiveStreamTranscodeRequest extends $tea.Model {
  ownerId?: number;
  domain?: string;
  app?: string;
  template?: string;
  templateType?: string;
  height?: number;
  width?: number;
  FPS?: number;
  videoBitrate?: number;
  audioBitrate?: number;
  gop?: string;
  deleteBframes?: boolean;
  opus?: boolean;
  profile?: number;
  audioProfile?: string;
  audioCodec?: string;
  audioRate?: number;
  audioChannelNum?: number;
  lazy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domain: 'Domain',
      app: 'App',
      template: 'Template',
      templateType: 'TemplateType',
      height: 'Height',
      width: 'Width',
      FPS: 'FPS',
      videoBitrate: 'VideoBitrate',
      audioBitrate: 'AudioBitrate',
      gop: 'Gop',
      deleteBframes: 'DeleteBframes',
      opus: 'Opus',
      profile: 'Profile',
      audioProfile: 'AudioProfile',
      audioCodec: 'AudioCodec',
      audioRate: 'AudioRate',
      audioChannelNum: 'AudioChannelNum',
      lazy: 'Lazy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domain: 'string',
      app: 'string',
      template: 'string',
      templateType: 'string',
      height: 'number',
      width: 'number',
      FPS: 'number',
      videoBitrate: 'number',
      audioBitrate: 'number',
      gop: 'string',
      deleteBframes: 'boolean',
      opus: 'boolean',
      profile: 'number',
      audioProfile: 'string',
      audioCodec: 'string',
      audioRate: 'number',
      audioChannelNum: 'number',
      lazy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRtsLiveStreamTranscodeResponseBody extends $tea.Model {
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

export class AddRtsLiveStreamTranscodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRtsLiveStreamTranscodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRtsLiveStreamTranscodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrancodeSEIRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  text?: string;
  pattern?: string;
  repeat?: number;
  delay?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      text: 'Text',
      pattern: 'Pattern',
      repeat: 'Repeat',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      text: 'string',
      pattern: 'string',
      repeat: 'number',
      delay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrancodeSEIResponseBody extends $tea.Model {
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

export class AddTrancodeSEIResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTrancodeSEIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTrancodeSEIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllowPushStreamRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllowPushStreamResponseBody extends $tea.Model {
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

export class AllowPushStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllowPushStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllowPushStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBoardTokenRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  appUid?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      appUid: 'AppUid',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      appUid: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBoardTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  expired?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
      expired: 'Expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
      expired: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBoardTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyBoardTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyBoardTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRecordTokenRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRecordTokenResponseBody extends $tea.Model {
  requestId?: string;
  securityToken?: string;
  accessKeySecret?: string;
  accessKeyId?: string;
  expiration?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      accessKeySecret: 'AccessKeySecret',
      accessKeyId: 'AccessKeyId',
      expiration: 'Expiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityToken: 'string',
      accessKeySecret: 'string',
      accessKeyId: 'string',
      expiration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRecordTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyRecordTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyRecordTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteLiveDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteLiveDomainConfigsResponseBody extends $tea.Model {
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

export class BatchDeleteLiveDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteLiveDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteLiveDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetLiveDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetLiveDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetLiveDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetLiveDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetLiveDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardResponseBody extends $tea.Model {
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

export class CompleteBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompleteBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompleteBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardRecordRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  recordId?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      recordId: 'RecordId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      recordId: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardRecordResponseBody extends $tea.Model {
  requestId?: string;
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompleteBoardRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompleteBoardRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlHtmlResourceRequest extends $tea.Model {
  ownerId?: number;
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  operate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
      operate: 'Operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      htmlResourceId: 'string',
      htmlUrl: 'string',
      casterId: 'string',
      operate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlHtmlResourceResponseBody extends $tea.Model {
  requestId?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlHtmlResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ControlHtmlResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ControlHtmlResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterRequest extends $tea.Model {
  ownerId?: number;
  casterName?: string;
  srcCasterId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterName: 'CasterName',
      srcCasterId: 'SrcCasterId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterName: 'string',
      srcCasterId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyCasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyCasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterSceneConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  fromSceneId?: string;
  toSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      fromSceneId: 'FromSceneId',
      toSceneId: 'ToSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      fromSceneId: 'string',
      toSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterSceneConfigResponseBody extends $tea.Model {
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

export class CopyCasterSceneConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyCasterSceneConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyCasterSceneConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBoardRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  appUid?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      appUid: 'AppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      appUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBoardResponseBody extends $tea.Model {
  requestId?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCasterRequest extends $tea.Model {
  ownerId?: number;
  casterName?: string;
  clientToken?: string;
  normType?: number;
  chargeType?: string;
  purchaseTime?: string;
  expireTime?: string;
  casterTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterName: 'CasterName',
      clientToken: 'ClientToken',
      normType: 'NormType',
      chargeType: 'ChargeType',
      purchaseTime: 'PurchaseTime',
      expireTime: 'ExpireTime',
      casterTemplate: 'CasterTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterName: 'string',
      clientToken: 'string',
      normType: 'number',
      chargeType: 'string',
      purchaseTime: 'string',
      expireTime: 'string',
      casterTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCasterResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRealTimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveRealTimeLogDeliveryResponseBody extends $tea.Model {
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

export class CreateLiveRealTimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveRealTimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveRealTimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveStreamRecordIndexFilesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  ossEndpoint?: string;
  ossBucket?: string;
  ossObject?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveStreamRecordIndexFilesResponseBody extends $tea.Model {
  requestId?: string;
  recordInfo?: CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordInfo: 'RecordInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordInfo: CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveStreamRecordIndexFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLiveStreamRecordIndexFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLiveStreamRecordIndexFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixStreamRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  layoutId?: string;
  inputStreamList?: string;
  outputConfig?: string;
  callbackConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      layoutId: 'LayoutId',
      inputStreamList: 'InputStreamList',
      outputConfig: 'OutputConfig',
      callbackConfig: 'CallbackConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      layoutId: 'string',
      inputStreamList: 'string',
      outputConfig: 'string',
      callbackConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixStreamResponseBody extends $tea.Model {
  mixStreamId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mixStreamId: 'MixStreamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMixStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMixStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  anchorId?: string;
  templateIds?: string;
  useAppTranscode?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      anchorId: 'AnchorId',
      templateIds: 'TemplateIds',
      useAppTranscode: 'UseAppTranscode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      anchorId: 'string',
      templateIds: 'string',
      useAppTranscode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponseBody extends $tea.Model {
  requestId?: string;
  appId?: string;
  anchorId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appId: 'AppId',
      anchorId: 'AnchorId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appId: 'string',
      anchorId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBoardRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBoardResponseBody extends $tea.Model {
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

export class DeleteBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterComponentRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterComponentResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episodeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeResponseBody extends $tea.Model {
  requestId?: string;
  episodeId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      episodeId: 'EpisodeId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      episodeId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterEpisodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterEpisodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeGroupRequest extends $tea.Model {
  ownerId?: number;
  programId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      programId: 'ProgramId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      programId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeGroupResponseBody extends $tea.Model {
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

export class DeleteCasterEpisodeGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterEpisodeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterEpisodeGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterLayoutRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterLayoutResponseBody extends $tea.Model {
  requestId?: string;
  layoutId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layoutId: 'LayoutId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layoutId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterProgramRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterProgramResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterProgramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterProgramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterProgramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterSceneConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterSceneConfigResponseBody extends $tea.Model {
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

export class DeleteCasterSceneConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterSceneConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterSceneConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterVideoResourceRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterVideoResourceResponseBody extends $tea.Model {
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

export class DeleteCasterVideoResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCasterVideoResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCasterVideoResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHtmlResourceRequest extends $tea.Model {
  ownerId?: number;
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      htmlResourceId: 'string',
      htmlUrl: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHtmlResourceResponseBody extends $tea.Model {
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

export class DeleteHtmlResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHtmlResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHtmlResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppRecordConfigResponseBody extends $tea.Model {
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

export class DeleteLiveAppRecordConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveAppRecordConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveAppRecordConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppSnapshotConfigResponseBody extends $tea.Model {
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

export class DeleteLiveAppSnapshotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveAppSnapshotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveAppSnapshotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveASRConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveASRConfigResponseBody extends $tea.Model {
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

export class DeleteLiveASRConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveASRConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveASRConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditConfigResponseBody extends $tea.Model {
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

export class DeleteLiveAudioAuditConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveAudioAuditConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveAudioAuditConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditNotifyConfigResponseBody extends $tea.Model {
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

export class DeleteLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveAudioAuditNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveAudioAuditNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDetectNotifyConfigResponseBody extends $tea.Model {
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

export class DeleteLiveDetectNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveDetectNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveDetectNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainResponseBody extends $tea.Model {
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

export class DeleteLiveDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainMappingRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  pushDomain?: string;
  pullDomain?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      pushDomain: 'PushDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      pushDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainMappingResponseBody extends $tea.Model {
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

export class DeleteLiveDomainMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveDomainMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveDomainMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainPlayMappingRequest extends $tea.Model {
  ownerId?: number;
  playDomain?: string;
  pullDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      playDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainPlayMappingResponseBody extends $tea.Model {
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

export class DeleteLiveDomainPlayMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveDomainPlayMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveDomainPlayMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveLazyPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveLazyPullStreamInfoConfigResponseBody extends $tea.Model {
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

export class DeleteLiveLazyPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveLazyPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveLazyPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLivePullStreamInfoConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLivePullStreamInfoConfigResponseBody extends $tea.Model {
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

export class DeleteLivePullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLivePullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLivePullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class DeleteLiveRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRealTimeLogLogstoreRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRealTimeLogLogstoreResponseBody extends $tea.Model {
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

export class DeleteLiveRealTimeLogLogstoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveRealTimeLogLogstoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveRealTimeLogLogstoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordNotifyConfigResponseBody extends $tea.Model {
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

export class DeleteLiveRecordNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveRecordNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveRecordNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordVodConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordVodConfigResponseBody extends $tea.Model {
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

export class DeleteLiveRecordVodConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveRecordVodConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveRecordVodConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotDetectPornConfigResponseBody extends $tea.Model {
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

export class DeleteLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveSnapshotDetectPornConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveSnapshotDetectPornConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamsNotifyUrlConfigResponseBody extends $tea.Model {
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

export class DeleteLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamTranscodeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domain?: string;
  app?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domain: 'Domain',
      app: 'App',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domain: 'string',
      app: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamTranscodeResponseBody extends $tea.Model {
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

export class DeleteLiveStreamTranscodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLiveStreamTranscodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLiveStreamTranscodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixStreamRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  mixStreamId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mixStreamId: 'MixStreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      mixStreamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixStreamResponseBody extends $tea.Model {
  mixStreamId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mixStreamId: 'MixStreamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMixStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMixStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMixStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomResponseBody extends $tea.Model {
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

export class DeleteRoomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardEventsRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  startTime?: string;
  endTime?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      startTime: 'string',
      endTime: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardEventsResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeBoardEventsResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeBoardEventsResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBoardEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBoardEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsResponseBody extends $tea.Model {
  requestId?: string;
  boards?: DescribeBoardsResponseBodyBoards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      boards: 'Boards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      boards: { 'type': 'array', 'itemType': DescribeBoardsResponseBodyBoards },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBoardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBoardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  snapshot?: DescribeBoardSnapshotResponseBodySnapshot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshot: DescribeBoardSnapshotResponseBodySnapshot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBoardSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBoardSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  channels?: DescribeCasterChannelsResponseBodyChannels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      channels: DescribeCasterChannelsResponseBodyChannels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBody extends $tea.Model {
  components?: DescribeCasterComponentsResponseBodyComponents;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: DescribeCasterComponentsResponseBodyComponents,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBody extends $tea.Model {
  channelEnable?: number;
  requestId?: string;
  domainName?: string;
  urgentMaterialId?: string;
  transcodeConfig?: DescribeCasterConfigResponseBodyTranscodeConfig;
  programName?: string;
  delay?: number;
  callbackUrl?: string;
  sideOutputUrl?: string;
  casterName?: string;
  programEffect?: number;
  casterId?: string;
  recordConfig?: DescribeCasterConfigResponseBodyRecordConfig;
  static names(): { [key: string]: string } {
    return {
      channelEnable: 'ChannelEnable',
      requestId: 'RequestId',
      domainName: 'DomainName',
      urgentMaterialId: 'UrgentMaterialId',
      transcodeConfig: 'TranscodeConfig',
      programName: 'ProgramName',
      delay: 'Delay',
      callbackUrl: 'CallbackUrl',
      sideOutputUrl: 'SideOutputUrl',
      casterName: 'CasterName',
      programEffect: 'ProgramEffect',
      casterId: 'CasterId',
      recordConfig: 'RecordConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelEnable: 'number',
      requestId: 'string',
      domainName: 'string',
      urgentMaterialId: 'string',
      transcodeConfig: DescribeCasterConfigResponseBodyTranscodeConfig,
      programName: 'string',
      delay: 'number',
      callbackUrl: 'string',
      sideOutputUrl: 'string',
      casterName: 'string',
      programEffect: 'number',
      casterId: 'string',
      recordConfig: DescribeCasterConfigResponseBodyRecordConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBody extends $tea.Model {
  requestId?: string;
  layouts?: DescribeCasterLayoutsResponseBodyLayouts;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layouts: 'Layouts',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layouts: DescribeCasterLayoutsResponseBodyLayouts,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterLayoutsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterLayoutsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episodeId?: string;
  episodeType?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
      episodeType: 'EpisodeType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episodeId: 'string',
      episodeType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseBody extends $tea.Model {
  requestId?: string;
  programEffect?: number;
  total?: number;
  episodes?: DescribeCasterProgramResponseBodyEpisodes;
  programName?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programEffect: 'ProgramEffect',
      total: 'Total',
      episodes: 'Episodes',
      programName: 'ProgramName',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programEffect: 'number',
      total: 'number',
      episodes: DescribeCasterProgramResponseBodyEpisodes,
      programName: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterProgramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterProgramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterRtcInfoRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterRtcInfoResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  authToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      authToken: 'AuthToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      authToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterRtcInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterRtcInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterRtcInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  casterName?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      casterName: 'CasterName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      casterName: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  casterList?: DescribeCastersResponseBodyCasterList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      casterList: 'CasterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      casterList: DescribeCastersResponseBodyCasterList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCastersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCastersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBody extends $tea.Model {
  mixList?: DescribeCasterSceneAudioResponseBodyMixList;
  requestId?: string;
  audioLayers?: DescribeCasterSceneAudioResponseBodyAudioLayers;
  casterId?: string;
  followEnable?: number;
  static names(): { [key: string]: string } {
    return {
      mixList: 'MixList',
      requestId: 'RequestId',
      audioLayers: 'AudioLayers',
      casterId: 'CasterId',
      followEnable: 'FollowEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixList: DescribeCasterSceneAudioResponseBodyMixList,
      requestId: 'string',
      audioLayers: DescribeCasterSceneAudioResponseBodyAudioLayers,
      casterId: 'string',
      followEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterSceneAudioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterSceneAudioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  sceneList?: DescribeCasterScenesResponseBodySceneList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      sceneList: DescribeCasterScenesResponseBodySceneList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  casterStreams?: DescribeCasterStreamUrlResponseBodyCasterStreams;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      casterStreams: 'CasterStreams',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      casterStreams: DescribeCasterStreamUrlResponseBodyCasterStreams,
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterStreamUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterStreamUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  syncGroups?: DescribeCasterSyncGroupResponseBodySyncGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      syncGroups: 'SyncGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      syncGroups: DescribeCasterSyncGroupResponseBodySyncGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterSyncGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterSyncGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  videoResources?: DescribeCasterVideoResourcesResponseBodyVideoResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      videoResources: 'VideoResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      videoResources: DescribeCasterVideoResourcesResponseBodyVideoResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCasterVideoResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCasterVideoResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataRequest extends $tea.Model {
  ownerId?: number;
  type?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  area?: string;
  field?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      type: 'Type',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      area: 'Area',
      field: 'Field',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      type: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      area: 'string',
      field: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBody extends $tea.Model {
  usageDataPerInterval?: DescribeDomainUsageDataResponseBodyUsageDataPerInterval;
  field?: string;
  area?: string;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      usageDataPerInterval: 'UsageDataPerInterval',
      field: 'Field',
      area: 'Area',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageDataPerInterval: DescribeDomainUsageDataResponseBodyUsageDataPerInterval,
      field: 'string',
      area: 'string',
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForbidPushStreamRoomListRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForbidPushStreamRoomListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  roomList?: DescribeForbidPushStreamRoomListResponseBodyRoomList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      roomList: 'RoomList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      roomList: { 'type': 'array', 'itemType': DescribeForbidPushStreamRoomListResponseBodyRoomList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForbidPushStreamRoomListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeForbidPushStreamRoomListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeForbidPushStreamRoomListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBody extends $tea.Model {
  requestId?: string;
  usageData?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData[];
  time?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageData: 'UsageData',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageData: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData },
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHlsLiveStreamRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHlsLiveStreamRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceRequest extends $tea.Model {
  ownerId?: number;
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      htmlResourceId: 'string',
      htmlUrl: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceResponseBody extends $tea.Model {
  requestId?: string;
  htmlResource?: DescribeHtmlResourceResponseBodyHtmlResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      htmlResource: 'HtmlResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      htmlResource: DescribeHtmlResourceResponseBodyHtmlResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHtmlResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHtmlResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveAsrConfig?: DescribeLiveAsrConfigResponseBodyLiveAsrConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAsrConfig: 'LiveAsrConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAsrConfig: DescribeLiveAsrConfigResponseBodyLiveAsrConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveAsrConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveAsrConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveAudioAuditConfigList?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAudioAuditConfigList: 'LiveAudioAuditConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAudioAuditConfigList: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveAudioAuditConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveAudioAuditConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveAudioAuditNotifyConfigList?: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAudioAuditNotifyConfigList: 'LiveAudioAuditNotifyConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAudioAuditNotifyConfigList: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveAudioAuditNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveAudioAuditNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  certName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateDetailResponseBody extends $tea.Model {
  requestId?: string;
  certId?: number;
  certName?: string;
  cert?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certId: 'number',
      certName: 'string',
      cert: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeLiveCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeLiveCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveDetectNotifyConfig?: DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDetectNotifyConfig: 'LiveDetectNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDetectNotifyConfig: DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDetectNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDetectNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  app?: string;
  stream?: string;
  fee?: string;
  scene?: string;
  region?: string;
  splitBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      app: 'App',
      stream: 'Stream',
      fee: 'Fee',
      scene: 'Scene',
      region: 'Region',
      splitBy: 'SplitBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      app: 'string',
      stream: 'string',
      fee: 'string',
      scene: 'string',
      region: 'string',
      splitBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataResponseBody extends $tea.Model {
  requestId?: string;
  detectPornData?: DescribeLiveDetectPornDataResponseBodyDetectPornData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      detectPornData: 'DetectPornData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      detectPornData: DescribeLiveDetectPornDataResponseBodyDetectPornData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDetectPornDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDetectPornDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeLiveDomainBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeLiveDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  timePoint?: string;
  ispNames?: string;
  locationNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      timePoint: 'TimePoint',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      timePoint: 'string',
      ispNames: 'string',
      locationNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  timeStamp?: string;
  bpsDataList?: DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      timeStamp: 'TimeStamp',
      bpsDataList: 'BpsDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      timeStamp: 'string',
      bpsDataList: DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainBpsDataByTimeStampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainBpsDataByTimeStampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponseBody extends $tea.Model {
  requestId?: string;
  certInfos?: DescribeLiveDomainCertificateInfoResponseBodyCertInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certInfos: 'CertInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certInfos: DescribeLiveDomainCertificateInfoResponseBodyCertInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeLiveDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeLiveDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeLiveDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeLiveDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  queryTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      queryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  frameRateAndBitRateInfos?: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainFrameRateAndBitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainFrameRateAndBitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseBody extends $tea.Model {
  requestId?: string;
  liveDomainLimitList?: DescribeLiveDomainLimitResponseBodyLiveDomainLimitList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDomainLimitList: 'LiveDomainLimitList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDomainLimitList: DescribeLiveDomainLimitResponseBodyLiveDomainLimitList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseBody extends $tea.Model {
  requestId?: string;
  liveDomainModels?: DescribeLiveDomainMappingResponseBodyLiveDomainModels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDomainModels: 'LiveDomainModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDomainModels: DescribeLiveDomainMappingResponseBodyLiveDomainModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  queryTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      queryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBody extends $tea.Model {
  streamCount?: number;
  onlineUserInfo?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo;
  requestId?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      streamCount: 'StreamCount',
      onlineUserInfo: 'OnlineUserInfo',
      requestId: 'RequestId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCount: 'number',
      onlineUserInfo: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo,
      requestId: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainOnlineUserNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainOnlineUserNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainPushBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainPushBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  dataInterval?: string;
  trafficDataPerInterval?: DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      trafficDataPerInterval: DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainPushTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainPushTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  dataInterval?: string;
  pvUvDataInfos?: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      pvUvDataInfos: 'PvUvDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      pvUvDataInfos: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainPvUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainPvUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeBpsDataPerInterval?: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeBpsDataPerInterval: 'RealTimeBpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeBpsDataPerInterval: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeHttpCodeData?: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeHttpCodeData: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainRealTimeHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealtimeLogDeliveryResponseBody extends $tea.Model {
  requestId?: string;
  project?: string;
  region?: string;
  logstore?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      project: 'Project',
      region: 'Region',
      logstore: 'Logstore',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      project: 'string',
      region: 'string',
      logstore: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeTrafficDataPerInterval?: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      realTimeTrafficDataPerInterval: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainRealTimeTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      recordType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseBody extends $tea.Model {
  requestId?: string;
  recordDataInfos?: DescribeLiveDomainRecordDataResponseBodyRecordDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordDataInfos: 'RecordDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordDataInfos: DescribeLiveDomainRecordDataResponseBodyRecordDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseBody extends $tea.Model {
  snapshotDataInfos?: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotDataInfos: 'SnapshotDataInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotDataInfos: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainSnapshotDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainSnapshotDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseBody extends $tea.Model {
  requestId?: string;
  timeShiftData?: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeShiftData: 'TimeShiftData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeShiftData: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainTimeShiftDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainTimeShiftDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      trafficDataPerInterval: 'TrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      trafficDataPerInterval: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataResponseBody extends $tea.Model {
  requestId?: string;
  transcodeDataInfos?: DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeDataInfos: 'TranscodeDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeDataInfos: DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveDomainTranscodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveDomainTranscodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveLazyPullConfigList?: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveLazyPullConfigList: 'LiveLazyPullConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveLazyPullConfigList: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveLazyPullStreamConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveLazyPullStreamConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveAppRecordList?: DescribeLivePullStreamConfigResponseBodyLiveAppRecordList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAppRecordList: 'LiveAppRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAppRecordList: DescribeLivePullStreamConfigResponseBodyLiveAppRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLivePullStreamConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLivePullStreamConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  interval?: string;
  project?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      project: 'Project',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      project: 'string',
      logStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccResponseBody extends $tea.Model {
  requestId?: string;
  realTimeDeliveryAccData?: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      realTimeDeliveryAccData: 'RealTimeDeliveryAccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      realTimeDeliveryAccData: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveRealtimeDeliveryAccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveRealtimeDeliveryAccResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeLogAuthorizedRequest extends $tea.Model {
  ownerId?: number;
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeLogAuthorizedResponseBody extends $tea.Model {
  requestId?: string;
  authorizedStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      authorizedStatus: 'AuthorizedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      authorizedStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeLogAuthorizedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveRealtimeLogAuthorizedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveRealtimeLogAuthorizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBody extends $tea.Model {
  order?: string;
  totalNum?: number;
  pageNum?: number;
  requestId?: string;
  totalPage?: number;
  pageSize?: number;
  liveAppRecordList?: DescribeLiveRecordConfigResponseBodyLiveAppRecordList;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      totalNum: 'TotalNum',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      liveAppRecordList: 'LiveAppRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      totalNum: 'number',
      pageNum: 'number',
      requestId: 'string',
      totalPage: 'number',
      pageSize: 'number',
      liveAppRecordList: DescribeLiveRecordConfigResponseBodyLiveAppRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveRecordConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveRecordConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveRecordNotifyConfig?: DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveRecordNotifyConfig: 'LiveRecordNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveRecordNotifyConfig: DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveRecordNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveRecordNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBody extends $tea.Model {
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  liveRecordVodConfigs?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      liveRecordVodConfigs: 'LiveRecordVodConfigs',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      liveRecordVodConfigs: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs,
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveRecordVodConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveRecordVodConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseBody extends $tea.Model {
  order?: string;
  totalNum?: number;
  pageNum?: number;
  requestId?: string;
  totalPage?: number;
  pageSize?: number;
  liveStreamSnapshotConfigList?: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      totalNum: 'TotalNum',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      liveStreamSnapshotConfigList: 'LiveStreamSnapshotConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      totalNum: 'number',
      pageNum: 'number',
      requestId: 'string',
      totalPage: 'number',
      pageSize: 'number',
      liveStreamSnapshotConfigList: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveSnapshotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveSnapshotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBody extends $tea.Model {
  order?: string;
  totalNum?: number;
  pageNum?: number;
  requestId?: string;
  totalPage?: number;
  pageSize?: number;
  liveSnapshotDetectPornConfigList?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      totalNum: 'TotalNum',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      liveSnapshotDetectPornConfigList: 'LiveSnapshotDetectPornConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      totalNum: 'number',
      pageNum: 'number',
      requestId: 'string',
      totalPage: 'number',
      pageSize: 'number',
      liveSnapshotDetectPornConfigList: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveSnapshotDetectPornConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveSnapshotDetectPornConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  frameRateAndBitRateInfos?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamBitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamBitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBody extends $tea.Model {
  requestId?: string;
  streamCountInfos?: DescribeLiveStreamCountResponseBodyStreamCountInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamCountInfos: 'StreamCountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamCountInfos: DescribeLiveStreamCountResponseBodyStreamCountInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveStreamHlsDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig;
  liveStreamFlvDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig;
  liveStreamRtmpDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamHlsDelayConfig: 'LiveStreamHlsDelayConfig',
      liveStreamFlvDelayConfig: 'LiveStreamFlvDelayConfig',
      liveStreamRtmpDelayConfig: 'LiveStreamRtmpDelayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamHlsDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig,
      liveStreamFlvDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig,
      liveStreamRtmpDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamDelayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamDelayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseBody extends $tea.Model {
  liveStreamUserNumInfos?: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamUserNumInfos: 'LiveStreamUserNumInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamUserNumInfos: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamHistoryUserNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamHistoryUserNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumResponseBody extends $tea.Model {
  onlineUserInfo?: DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfo;
  requestId?: string;
  totalUserNumber?: number;
  static names(): { [key: string]: string } {
    return {
      onlineUserInfo: 'OnlineUserInfo',
      requestId: 'RequestId',
      totalUserNumber: 'TotalUserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineUserInfo: DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfo,
      requestId: 'string',
      totalUserNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamOnlineUserNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamOnlineUserNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configName: 'ConfigName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveStreamOptimizedFeatureConfigList?: DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamOptimizedFeatureConfigList: 'LiveStreamOptimizedFeatureConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamOptimizedFeatureConfigList: DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamOptimizedFeatureConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamOptimizedFeatureConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseBody extends $tea.Model {
  requestId?: string;
  recordContentInfoList?: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordContentInfoList: 'RecordContentInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordContentInfoList: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamRecordContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamRecordContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileResponseBody extends $tea.Model {
  recordIndexInfo?: DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordIndexInfo: 'RecordIndexInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIndexInfo: DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamRecordIndexFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamRecordIndexFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseBody extends $tea.Model {
  order?: string;
  totalNum?: number;
  pageNum?: number;
  requestId?: string;
  totalPage?: number;
  pageSize?: number;
  recordIndexInfoList?: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      totalNum: 'TotalNum',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      recordIndexInfoList: 'RecordIndexInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      totalNum: 'number',
      pageNum: 'number',
      requestId: 'string',
      totalPage: 'number',
      pageSize: 'number',
      recordIndexInfoList: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamRecordIndexFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamRecordIndexFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponseBody extends $tea.Model {
  totalNum?: number;
  pageNum?: number;
  requestId?: string;
  totalPage?: number;
  pageSize?: number;
  domainName?: string;
  streamUrls?: DescribeLiveStreamsBlockListResponseBodyStreamUrls;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      domainName: 'DomainName',
      streamUrls: 'StreamUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      pageNum: 'number',
      requestId: 'string',
      totalPage: 'number',
      pageSize: 'number',
      domainName: 'string',
      streamUrls: DescribeLiveStreamsBlockListResponseBodyStreamUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsBlockListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsBlockListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  startTime?: string;
  endTime?: string;
  page?: number;
  rows?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      page: 'Page',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      startTime: 'string',
      endTime: 'string',
      page: 'number',
      rows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseBody extends $tea.Model {
  requestId?: string;
  controlInfo?: DescribeLiveStreamsControlHistoryResponseBodyControlInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      controlInfo: 'ControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      controlInfo: DescribeLiveStreamsControlHistoryResponseBodyControlInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsControlHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsControlHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  frameRateAndBitRateInfos?: DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsFrameRateAndBitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsFrameRateAndBitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  limit?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
      order: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseBody extends $tea.Model {
  liveStreamSnapshotInfoList?: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList;
  requestId?: string;
  nextStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotInfoList: 'LiveStreamSnapshotInfoList',
      requestId: 'RequestId',
      nextStartTime: 'NextStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotInfoList: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList,
      requestId: 'string',
      nextStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamSnapshotInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamSnapshotInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveStreamsNotifyConfig?: DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamsNotifyConfig: DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  pageSize?: number;
  pageNum?: number;
  streamType?: string;
  startTime?: string;
  endTime?: string;
  queryType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      streamType: 'StreamType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      queryType: 'QueryType',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      pageSize: 'number',
      pageNum: 'number',
      streamType: 'string',
      startTime: 'string',
      endTime: 'string',
      queryType: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  onlineInfo?: DescribeLiveStreamsOnlineListResponseBodyOnlineInfo;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      onlineInfo: 'OnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      onlineInfo: DescribeLiveStreamsOnlineListResponseBodyOnlineInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsOnlineListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsOnlineListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  streamType?: string;
  queryType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      streamType: 'StreamType',
      queryType: 'QueryType',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      streamType: 'string',
      queryType: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  publishInfo?: DescribeLiveStreamsPublishListResponseBodyPublishInfo;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      publishInfo: 'PublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      publishInfo: DescribeLiveStreamsPublishListResponseBodyPublishInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamsPublishListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamsPublishListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoRequest extends $tea.Model {
  ownerId?: number;
  domainTranscodeName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainTranscodeName: 'DomainTranscodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainTranscodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBody extends $tea.Model {
  requestId?: string;
  domainTranscodeList?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainTranscodeList: 'DomainTranscodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainTranscodeList: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamTranscodeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamTranscodeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  transcodedNumber?: number;
  untranscodeNumber?: number;
  lazyTranscodedNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      transcodedNumber: 'TranscodedNumber',
      untranscodeNumber: 'UntranscodeNumber',
      lazyTranscodedNumber: 'LazyTranscodedNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      transcodedNumber: 'number',
      untranscodeNumber: 'number',
      lazyTranscodedNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveStreamTranscodeStreamNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveStreamTranscodeStreamNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceId?: string[];
  resourceType?: string;
  tag?: DescribeLiveTagResourcesRequestTag[];
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveTagResourcesRequestTag },
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeLiveTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponseBody extends $tea.Model {
  requestId?: string;
  startTime?: string;
  endTime?: string;
  domainCount?: number;
  domainOnlineCount?: number;
  topDomains?: DescribeLiveTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      startTime: 'string',
      endTime: 'string',
      domainCount: 'number',
      domainOnlineCount: 'number',
      topDomains: DescribeLiveTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  liveDomainType?: string;
  pageSize?: number;
  pageNumber?: number;
  domainName?: string;
  regionName?: string;
  domainSearchType?: string;
  domainStatus?: string;
  tag?: DescribeLiveUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      liveDomainType: 'LiveDomainType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domainName: 'DomainName',
      regionName: 'RegionName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      liveDomainType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domainName: 'string',
      regionName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeLiveUserDomainsResponseBodyDomains;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeLiveUserDomainsResponseBodyDomains,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserTagsRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeLiveUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeLiveUserTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveVerifyContentRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveVerifyContentResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLiveVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLiveVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixStreamListRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  mixStreamId?: string;
  startTime?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mixStreamId: 'MixStreamId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      mixStreamId: 'string',
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

export class DescribeMixStreamListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  mixStreamList?: DescribeMixStreamListResponseBodyMixStreamList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      mixStreamList: 'MixStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      mixStreamList: { 'type': 'array', 'itemType': DescribeMixStreamListResponseBodyMixStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixStreamListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMixStreamListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMixStreamListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  appId?: string;
  boardId?: number;
  recordStartTime?: number;
  startTime?: number;
  endTime?: number;
  state?: number;
  ossPath?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
      appId: 'AppId',
      boardId: 'BoardId',
      recordStartTime: 'RecordStartTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      state: 'State',
      ossPath: 'OssPath',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
      appId: 'string',
      boardId: 'number',
      recordStartTime: 'number',
      startTime: 'number',
      endTime: 'number',
      state: 'number',
      ossPath: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  recordState?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordState: 'RecordState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      recordState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBody extends $tea.Model {
  requestId?: string;
  records?: DescribeRecordsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  userList?: DescribeRoomKickoutUserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      userList: { 'type': 'array', 'itemType': DescribeRoomKickoutUserListResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRoomKickoutUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRoomKickoutUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  anchorId?: string;
  roomStatus?: number;
  startTime?: string;
  endTime?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      anchorId: 'AnchorId',
      roomStatus: 'RoomStatus',
      startTime: 'StartTime',
      endTime: 'EndTime',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      anchorId: 'string',
      roomStatus: 'number',
      startTime: 'string',
      endTime: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  requestId?: string;
  roomList?: DescribeRoomListResponseBodyRoomList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      roomList: 'RoomList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      requestId: 'string',
      roomList: { 'type': 'array', 'itemType': DescribeRoomListResponseBodyRoomList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRoomListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRoomListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomStatusRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomStatusResponseBody extends $tea.Model {
  roomStatus?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      roomStatus: 'RoomStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRoomStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRoomStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      domainSwitch: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponseBody extends $tea.Model {
  requestId?: string;
  describeUpPeakTraffics?: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpPeakTraffics: 'DescribeUpPeakTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpPeakTraffics: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUpBpsPeakDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpBpsPeakDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  line?: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      line: 'Line',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      line: 'string',
      domainSwitch: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponseBody extends $tea.Model {
  requestId?: string;
  describeUpBpsPeakOfLines?: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpBpsPeakOfLines: 'DescribeUpBpsPeakOfLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpBpsPeakOfLines: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUpBpsPeakOfLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpBpsPeakOfLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      domainSwitch: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponseBody extends $tea.Model {
  requestId?: string;
  describeUpPeakPublishStreamDatas?: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpPeakPublishStreamDatas: 'DescribeUpPeakPublishStreamDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpPeakPublishStreamDatas: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUpPeakPublishStreamDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpPeakPublishStreamDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLiveRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLiveRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class DisableLiveRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableLiveRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableLiveRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditHtmlResourceRequest extends $tea.Model {
  ownerId?: number;
  htmlResourceId?: string;
  casterId?: string;
  htmlUrl?: string;
  htmlContent?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      htmlResourceId: 'HtmlResourceId',
      casterId: 'CasterId',
      htmlUrl: 'HtmlUrl',
      htmlContent: 'htmlContent',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      htmlResourceId: 'string',
      casterId: 'string',
      htmlUrl: 'string',
      htmlContent: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditHtmlResourceResponseBody extends $tea.Model {
  requestId?: string;
  htmlResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      htmlResourceId: 'HtmlResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      htmlResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditHtmlResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditHtmlResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditHtmlResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterUrgentRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterUrgentResponseBody extends $tea.Model {
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

export class EffectCasterUrgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EffectCasterUrgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EffectCasterUrgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterVideoResourceRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterVideoResourceResponseBody extends $tea.Model {
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

export class EffectCasterVideoResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EffectCasterVideoResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EffectCasterVideoResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class EnableLiveRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLiveRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLiveRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidLiveStreamRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  liveStreamType?: string;
  oneshot?: string;
  controlStreamAction?: string;
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      controlStreamAction: 'ControlStreamAction',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      controlStreamAction: 'string',
      resumeTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidLiveStreamResponseBody extends $tea.Model {
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

export class ForbidLiveStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ForbidLiveStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ForbidLiveStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidPushStreamRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  userData?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      userData: 'UserData',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      userData: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidPushStreamResponseBody extends $tea.Model {
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

export class ForbidPushStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ForbidPushStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ForbidPushStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinBoardRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  appUid?: string;
  boardId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      appUid: 'AppUid',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      appUid: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinBoardResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  boardId?: string;
  topicId?: string;
  keepaliveTopic?: string;
  keepaliveInterval?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
      boardId: 'BoardId',
      topicId: 'TopicId',
      keepaliveTopic: 'KeepaliveTopic',
      keepaliveInterval: 'KeepaliveInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
      boardId: 'string',
      topicId: 'string',
      keepaliveTopic: 'string',
      keepaliveInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponseBody extends $tea.Model {
  requestId?: string;
  content?: ListLiveRealtimeLogDeliveryResponseBodyContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryResponseBodyContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponseBody extends $tea.Model {
  requestId?: string;
  content?: ListLiveRealtimeLogDeliveryDomainsResponseBodyContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryDomainsResponseBodyContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRealtimeLogDeliveryDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRealtimeLogDeliveryDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosRequest extends $tea.Model {
  ownerId?: number;
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponseBody extends $tea.Model {
  requestId?: string;
  content?: ListLiveRealtimeLogDeliveryInfosResponseBodyContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryInfosResponseBodyContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLiveRealtimeLogDeliveryInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLiveRealtimeLogDeliveryInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterComponentRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  componentId?: string;
  componentName?: string;
  componentType?: string;
  effect?: string;
  componentLayer?: string;
  textLayerContent?: string;
  imageLayerContent?: string;
  captionLayerContent?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      effect: 'Effect',
      componentLayer: 'ComponentLayer',
      textLayerContent: 'TextLayerContent',
      imageLayerContent: 'ImageLayerContent',
      captionLayerContent: 'CaptionLayerContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      componentId: 'string',
      componentName: 'string',
      componentType: 'string',
      effect: 'string',
      componentLayer: 'string',
      textLayerContent: 'string',
      imageLayerContent: 'string',
      captionLayerContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterComponentResponseBody extends $tea.Model {
  requestId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCasterComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCasterComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterEpisodeRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episodeId?: string;
  episodeName?: string;
  resourceId?: string;
  startTime?: string;
  endTime?: string;
  switchType?: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episodeId: 'string',
      episodeName: 'string',
      resourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterEpisodeResponseBody extends $tea.Model {
  requestId?: string;
  episodeId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      episodeId: 'EpisodeId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      episodeId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterEpisodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCasterEpisodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCasterEpisodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  layoutId?: string;
  videoLayer?: ModifyCasterLayoutRequestVideoLayer[];
  audioLayer?: ModifyCasterLayoutRequestAudioLayer[];
  blendList?: string[];
  mixList?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      layoutId: 'LayoutId',
      videoLayer: 'VideoLayer',
      audioLayer: 'AudioLayer',
      blendList: 'BlendList',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      layoutId: 'string',
      videoLayer: { 'type': 'array', 'itemType': ModifyCasterLayoutRequestVideoLayer },
      audioLayer: { 'type': 'array', 'itemType': ModifyCasterLayoutRequestAudioLayer },
      blendList: { 'type': 'array', 'itemType': 'string' },
      mixList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutResponseBody extends $tea.Model {
  requestId?: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCasterLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCasterLayoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  episode?: ModifyCasterProgramRequestEpisode[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': ModifyCasterProgramRequestEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCasterProgramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCasterProgramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterVideoResourceRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  resourceId?: string;
  resourceName?: string;
  liveStreamUrl?: string;
  materialId?: string;
  vodUrl?: string;
  beginOffset?: number;
  endOffset?: number;
  repeatNum?: number;
  ptsCallbackInterval?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      liveStreamUrl: 'LiveStreamUrl',
      materialId: 'MaterialId',
      vodUrl: 'VodUrl',
      beginOffset: 'BeginOffset',
      endOffset: 'EndOffset',
      repeatNum: 'RepeatNum',
      ptsCallbackInterval: 'PtsCallbackInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      liveStreamUrl: 'string',
      materialId: 'string',
      vodUrl: 'string',
      beginOffset: 'number',
      endOffset: 'number',
      repeatNum: 'number',
      ptsCallbackInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterVideoResourceResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterVideoResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCasterVideoResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCasterVideoResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveDomainSchdmByPropertyRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  property?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      property: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveDomainSchdmByPropertyResponseBody extends $tea.Model {
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

export class ModifyLiveDomainSchdmByPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLiveDomainSchdmByPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLiveDomainSchdmByPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveRealtimeLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  project?: string;
  logstore?: string;
  region?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      project: 'string',
      logstore: 'string',
      region: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveRealtimeLogDeliveryResponseBody extends $tea.Model {
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

export class ModifyLiveRealtimeLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLiveRealtimeLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLiveRealtimeLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeRecordCommandRequest extends $tea.Model {
  ownerId?: number;
  command?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      command: 'Command',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      command: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeRecordCommandResponseBody extends $tea.Model {
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

export class RealTimeRecordCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RealTimeRecordCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RealTimeRecordCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeSnapshotCommandRequest extends $tea.Model {
  ownerId?: number;
  command?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  mode?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      command: 'Command',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mode: 'Mode',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      command: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      mode: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeSnapshotCommandResponseBody extends $tea.Model {
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

export class RealTimeSnapshotCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RealTimeSnapshotCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RealTimeSnapshotCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeLiveStreamRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  liveStreamType?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      liveStreamType: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeLiveStreamResponseBody extends $tea.Model {
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

export class ResumeLiveStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeLiveStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeLiveStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomNotificationRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  appUid?: string;
  data?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      appUid: 'AppUid',
      data: 'Data',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      appUid: 'string',
      data: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomNotificationResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendRoomNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendRoomNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomUserNotificationRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  roomId?: string;
  appUid?: string;
  toAppUid?: string;
  data?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      roomId: 'RoomId',
      appUid: 'AppUid',
      toAppUid: 'ToAppUid',
      data: 'Data',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      roomId: 'string',
      appUid: 'string',
      toAppUid: 'string',
      data: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomUserNotificationResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomUserNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendRoomUserNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendRoomUserNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBoardCallbackRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  authKey?: string;
  authSwitch?: string;
  callbackEnable?: number;
  callbackUri?: string;
  callbackEvents?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackEnable: 'CallbackEnable',
      callbackUri: 'CallbackUri',
      callbackEvents: 'CallbackEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackEnable: 'number',
      callbackUri: 'string',
      callbackEvents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBoardCallbackResponseBody extends $tea.Model {
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

export class SetBoardCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetBoardCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetBoardCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterChannelRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  channelId?: string;
  resourceId?: string;
  seekOffset?: number;
  playStatus?: number;
  reloadFlag?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      channelId: 'ChannelId',
      resourceId: 'ResourceId',
      seekOffset: 'SeekOffset',
      playStatus: 'PlayStatus',
      reloadFlag: 'ReloadFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      channelId: 'string',
      resourceId: 'string',
      seekOffset: 'number',
      playStatus: 'number',
      reloadFlag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterChannelResponseBody extends $tea.Model {
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

export class SetCasterChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCasterChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCasterChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  casterName?: string;
  domainName?: string;
  transcodeConfig?: string;
  recordConfig?: string;
  delay?: number;
  urgentMaterialId?: string;
  sideOutputUrl?: string;
  callbackUrl?: string;
  programEffect?: number;
  programName?: string;
  channelEnable?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      casterName: 'CasterName',
      domainName: 'DomainName',
      transcodeConfig: 'TranscodeConfig',
      recordConfig: 'RecordConfig',
      delay: 'Delay',
      urgentMaterialId: 'UrgentMaterialId',
      sideOutputUrl: 'SideOutputUrl',
      callbackUrl: 'CallbackUrl',
      programEffect: 'ProgramEffect',
      programName: 'ProgramName',
      channelEnable: 'ChannelEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      casterName: 'string',
      domainName: 'string',
      transcodeConfig: 'string',
      recordConfig: 'string',
      delay: 'number',
      urgentMaterialId: 'string',
      sideOutputUrl: 'string',
      callbackUrl: 'string',
      programEffect: 'number',
      programName: 'string',
      channelEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterConfigResponseBody extends $tea.Model {
  requestId?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCasterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCasterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSceneConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  layoutId?: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
      layoutId: 'LayoutId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
      layoutId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSceneConfigResponseBody extends $tea.Model {
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

export class SetCasterSceneConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCasterSceneConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCasterSceneConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSyncGroupRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  syncGroup?: SetCasterSyncGroupRequestSyncGroup[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      syncGroup: 'SyncGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      syncGroup: { 'type': 'array', 'itemType': SetCasterSyncGroupRequestSyncGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSyncGroupResponseBody extends $tea.Model {
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

export class SetCasterSyncGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCasterSyncGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCasterSyncGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  certType?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  SSLPri?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certName: 'CertName',
      certType: 'CertType',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      forceSet: 'ForceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certName: 'string',
      certType: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      forceSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveDomainCertificateResponseBody extends $tea.Model {
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

export class SetLiveDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLiveDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLiveDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveLazyPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  pullDomainName?: string;
  pullAppName?: string;
  pullProtocol?: string;
  pullAuthType?: string;
  pullAuthKey?: string;
  pullArgs?: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      pullDomainName: 'PullDomainName',
      pullAppName: 'PullAppName',
      pullProtocol: 'PullProtocol',
      pullAuthType: 'PullAuthType',
      pullAuthKey: 'PullAuthKey',
      pullArgs: 'PullArgs',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      pullDomainName: 'string',
      pullAppName: 'string',
      pullProtocol: 'string',
      pullAuthType: 'string',
      pullAuthKey: 'string',
      pullArgs: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveLazyPullStreamInfoConfigResponseBody extends $tea.Model {
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

export class SetLiveLazyPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLiveLazyPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLiveLazyPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamDelayConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  hlsDelay?: number;
  hlsLevel?: string;
  flvDelay?: number;
  flvLevel?: string;
  rtmpDelay?: number;
  rtmpLevel?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      hlsDelay: 'HlsDelay',
      hlsLevel: 'HlsLevel',
      flvDelay: 'FlvDelay',
      flvLevel: 'FlvLevel',
      rtmpDelay: 'RtmpDelay',
      rtmpLevel: 'RtmpLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      hlsDelay: 'number',
      hlsLevel: 'string',
      flvDelay: 'number',
      flvLevel: 'string',
      rtmpDelay: 'number',
      rtmpLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamDelayConfigResponseBody extends $tea.Model {
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

export class SetLiveStreamDelayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLiveStreamDelayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLiveStreamDelayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamOptimizedFeatureConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  configName?: string;
  configStatus?: string;
  configValue?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      configName: 'ConfigName',
      configStatus: 'ConfigStatus',
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      configName: 'string',
      configStatus: 'string',
      configValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamOptimizedFeatureConfigResponseBody extends $tea.Model {
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

export class SetLiveStreamOptimizedFeatureConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLiveStreamOptimizedFeatureConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLiveStreamOptimizedFeatureConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  notifyUrl?: string;
  notifyType?: string;
  authType?: string;
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      notifyType: 'NotifyType',
      authType: 'AuthType',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      notifyUrl: 'string',
      notifyType: 'string',
      authType: 'string',
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamsNotifyUrlConfigResponseBody extends $tea.Model {
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

export class SetLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetLiveStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetLiveStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBoardRecordRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  boardId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      boardId: 'BoardId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      boardId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBoardRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBoardRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartBoardRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartBoardRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBody extends $tea.Model {
  requestId?: string;
  pvwSceneInfos?: StartCasterResponseBodyPvwSceneInfos;
  pgmSceneInfos?: StartCasterResponseBodyPgmSceneInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pvwSceneInfos: 'PvwSceneInfos',
      pgmSceneInfos: 'PgmSceneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pvwSceneInfos: StartCasterResponseBodyPvwSceneInfos,
      pgmSceneInfos: StartCasterResponseBodyPgmSceneInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterSceneRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterSceneResponseBody extends $tea.Model {
  requestId?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCasterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCasterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveDomainResponseBody extends $tea.Model {
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

export class StartLiveDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartLiveDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartLiveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveIndexRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  tokenId?: string;
  inputUrl?: string;
  interval?: number;
  ossBucket?: string;
  ossEndpoint?: string;
  ossUserId?: string;
  ossRamRole?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      tokenId: 'TokenId',
      inputUrl: 'InputUrl',
      interval: 'Interval',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossUserId: 'OssUserId',
      ossRamRole: 'OssRamRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      tokenId: 'string',
      inputUrl: 'string',
      interval: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossUserId: 'string',
      ossRamRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveIndexResponseBody extends $tea.Model {
  requestId?: string;
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

export class StartLiveIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartLiveIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartLiveIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterResponseBody extends $tea.Model {
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

export class StopCasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopCasterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopCasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterSceneRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterSceneResponseBody extends $tea.Model {
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

export class StopCasterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopCasterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopCasterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveDomainResponseBody extends $tea.Model {
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

export class StopLiveDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLiveDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLiveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveIndexRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveIndexResponseBody extends $tea.Model {
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

export class StopLiveIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLiveIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLiveIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagLiveResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagLiveResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagLiveResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagLiveResourcesResponseBody extends $tea.Model {
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

export class TagLiveResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagLiveResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagLiveResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagLiveResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagLiveResourcesResponseBody extends $tea.Model {
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

export class UnTagLiveResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnTagLiveResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnTagLiveResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  boardData?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      boardData: 'BoardData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      boardData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardResponseBody extends $tea.Model {
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

export class UpdateBoardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBoardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBoardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardCallbackRequest extends $tea.Model {
  ownerId?: number;
  appId?: string;
  authKey?: string;
  authSwitch?: string;
  callbackEnable?: number;
  callbackUri?: string;
  callbackEvents?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackEnable: 'CallbackEnable',
      callbackUri: 'CallbackUri',
      callbackEvents: 'CallbackEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackEnable: 'number',
      callbackUri: 'string',
      callbackEvents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardCallbackResponseBody extends $tea.Model {
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

export class UpdateBoardCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBoardCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBoardCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneAudioRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  followEnable?: number;
  audioLayer?: UpdateCasterSceneAudioRequestAudioLayer[];
  mixList?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
      followEnable: 'FollowEnable',
      audioLayer: 'AudioLayer',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
      followEnable: 'number',
      audioLayer: { 'type': 'array', 'itemType': UpdateCasterSceneAudioRequestAudioLayer },
      mixList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneAudioResponseBody extends $tea.Model {
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

export class UpdateCasterSceneAudioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCasterSceneAudioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCasterSceneAudioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneConfigRequest extends $tea.Model {
  ownerId?: number;
  casterId?: string;
  sceneId?: string;
  layoutId?: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      casterId: 'CasterId',
      sceneId: 'SceneId',
      layoutId: 'LayoutId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      casterId: 'string',
      sceneId: 'string',
      layoutId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneConfigResponseBody extends $tea.Model {
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

export class UpdateCasterSceneConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCasterSceneConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCasterSceneConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  timeInterval?: number;
  ossEndpoint?: string;
  ossBucket?: string;
  overwriteOssObject?: string;
  sequenceOssObject?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      timeInterval: 'TimeInterval',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      overwriteOssObject: 'OverwriteOssObject',
      sequenceOssObject: 'SequenceOssObject',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      timeInterval: 'number',
      ossEndpoint: 'string',
      ossBucket: 'string',
      overwriteOssObject: 'string',
      sequenceOssObject: 'string',
      callback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAppSnapshotConfigResponseBody extends $tea.Model {
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

export class UpdateLiveAppSnapshotConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveAppSnapshotConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveAppSnapshotConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveASRConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  mnsTopic?: string;
  mnsRegion?: string;
  period?: number;
  httpCallbackURL?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mnsTopic: 'MnsTopic',
      mnsRegion: 'MnsRegion',
      period: 'Period',
      httpCallbackURL: 'HttpCallbackURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      mnsTopic: 'string',
      mnsRegion: 'string',
      period: 'number',
      httpCallbackURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveASRConfigResponseBody extends $tea.Model {
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

export class UpdateLiveASRConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveASRConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveASRConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  appName?: string;
  streamName?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditConfigResponseBody extends $tea.Model {
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

export class UpdateLiveAudioAuditConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveAudioAuditConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveAudioAuditConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  callback?: string;
  callbackTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      callback: 'string',
      callbackTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditNotifyConfigResponseBody extends $tea.Model {
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

export class UpdateLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveAudioAuditNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveAudioAuditNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveDetectNotifyConfigResponseBody extends $tea.Model {
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

export class UpdateLiveDetectNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveDetectNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveDetectNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  notifyUrl?: string;
  onDemandUrl?: string;
  needStatusNotify?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      onDemandUrl: 'OnDemandUrl',
      needStatusNotify: 'NeedStatusNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      notifyUrl: 'string',
      onDemandUrl: 'string',
      needStatusNotify: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordNotifyConfigResponseBody extends $tea.Model {
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

export class UpdateLiveRecordNotifyConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveRecordNotifyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveRecordNotifyConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  domainName?: string;
  appName?: string;
  ossEndpoint?: string;
  ossBucket?: string;
  ossObject?: string;
  interval?: number;
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      interval: 'Interval',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      interval: 'number',
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveSnapshotDetectPornConfigResponseBody extends $tea.Model {
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

export class UpdateLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveSnapshotDetectPornConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveSnapshotDetectPornConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTopLevelDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTopLevelDomainResponseBody extends $tea.Model {
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

export class UpdateLiveTopLevelDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLiveTopLevelDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLiveTopLevelDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMixStreamRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  mixStreamId?: string;
  inputStreamList?: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      mixStreamId: 'MixStreamId',
      inputStreamList: 'InputStreamList',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      mixStreamId: 'string',
      inputStreamList: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMixStreamResponseBody extends $tea.Model {
  mixStreamId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mixStreamId: 'MixStreamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMixStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMixStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMixStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLiveDomainOwnerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLiveDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLiveDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyLiveDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyLiveDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupRequestItem extends $tea.Model {
  itemName?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      itemName: 'ItemName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemName: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupResponseBodyItemIds extends $tea.Model {
  itemId?: string[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentResponseBodyItemIds extends $tea.Model {
  itemId?: string[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutRequestVideoLayer extends $tea.Model {
  fixedDelayDuration?: number;
  heightNormalized?: number;
  fillMode?: string;
  positionRefer?: string;
  positionNormalized?: number[];
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      fixedDelayDuration: 'FixedDelayDuration',
      heightNormalized: 'HeightNormalized',
      fillMode: 'FillMode',
      positionRefer: 'PositionRefer',
      positionNormalized: 'PositionNormalized',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelayDuration: 'number',
      heightNormalized: 'number',
      fillMode: 'string',
      positionRefer: 'string',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      widthNormalized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  fixedDelayDuration?: number;
  validChannel?: string;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      fixedDelayDuration: 'number',
      validChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramRequestEpisode extends $tea.Model {
  endTime?: string;
  startTime?: string;
  episodeName?: string;
  episodeType?: string;
  resourceId?: string;
  componentId?: string[];
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseBodyEpisodeIdsEpisodeId extends $tea.Model {
  episodeId?: string;
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseBodyEpisodeIds extends $tea.Model {
  episodeId?: AddCasterProgramResponseBodyEpisodeIdsEpisodeId[];
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: { 'type': 'array', 'itemType': AddCasterProgramResponseBodyEpisodeIdsEpisodeId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppRecordConfigRequestRecordFormat extends $tea.Model {
  sliceOssObjectPrefix?: string;
  cycleDuration?: number;
  ossObjectPrefix?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      cycleDuration: 'CycleDuration',
      ossObjectPrefix: 'OssObjectPrefix',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sliceOssObjectPrefix: 'string',
      cycleDuration: 'number',
      ossObjectPrefix: 'string',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo extends $tea.Model {
  streamName?: string;
  recordUrl?: string;
  recordId?: string;
  createTime?: string;
  height?: number;
  ossBucket?: string;
  domainName?: string;
  endTime?: string;
  ossObject?: string;
  startTime?: string;
  appName?: string;
  width?: number;
  duration?: number;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      recordUrl: 'RecordUrl',
      recordId: 'RecordId',
      createTime: 'CreateTime',
      height: 'Height',
      ossBucket: 'OssBucket',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      appName: 'AppName',
      width: 'Width',
      duration: 'Duration',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      recordUrl: 'string',
      recordId: 'string',
      createTime: 'string',
      height: 'number',
      ossBucket: 'string',
      domainName: 'string',
      endTime: 'string',
      ossObject: 'string',
      startTime: 'string',
      appName: 'string',
      width: 'number',
      duration: 'number',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardEventsResponseBodyEvents extends $tea.Model {
  eventId?: number;
  eventType?: number;
  userId?: number;
  data?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventType: 'EventType',
      userId: 'UserId',
      data: 'Data',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      eventType: 'number',
      userId: 'number',
      data: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsResponseBodyBoards extends $tea.Model {
  boardId?: string;
  topic?: string;
  state?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      boardId: 'BoardId',
      topic: 'Topic',
      state: 'State',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boardId: 'string',
      topic: 'string',
      state: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBodySnapshotBoardPagesElements extends $tea.Model {
  elementIndex?: string;
  ownerId?: string;
  elementType?: number;
  updateTimestamp?: number;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      elementIndex: 'ElementIndex',
      ownerId: 'OwnerId',
      elementType: 'ElementType',
      updateTimestamp: 'UpdateTimestamp',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementIndex: 'string',
      ownerId: 'string',
      elementType: 'number',
      updateTimestamp: 'number',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBodySnapshotBoardPages extends $tea.Model {
  pageIndex?: number;
  elements?: DescribeBoardSnapshotResponseBodySnapshotBoardPagesElements[];
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      elements: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseBodySnapshotBoardPagesElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBodySnapshotBoardConfigs extends $tea.Model {
  appUid?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBodySnapshotBoard extends $tea.Model {
  boardId?: string;
  appUid?: string;
  eventTimestamp?: number;
  createTimestamp?: number;
  updateTimestamp?: number;
  pages?: DescribeBoardSnapshotResponseBodySnapshotBoardPages[];
  configs?: DescribeBoardSnapshotResponseBodySnapshotBoardConfigs[];
  static names(): { [key: string]: string } {
    return {
      boardId: 'BoardId',
      appUid: 'AppUid',
      eventTimestamp: 'EventTimestamp',
      createTimestamp: 'CreateTimestamp',
      updateTimestamp: 'UpdateTimestamp',
      pages: 'Pages',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boardId: 'string',
      appUid: 'string',
      eventTimestamp: 'number',
      createTimestamp: 'number',
      updateTimestamp: 'number',
      pages: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseBodySnapshotBoardPages },
      configs: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseBodySnapshotBoardConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseBodySnapshot extends $tea.Model {
  board?: DescribeBoardSnapshotResponseBodySnapshotBoard;
  static names(): { [key: string]: string } {
    return {
      board: 'Board',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: DescribeBoardSnapshotResponseBodySnapshotBoard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseBodyChannelsChannel extends $tea.Model {
  rtmpUrl?: string;
  channelId?: string;
  resourceId?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      rtmpUrl: 'RtmpUrl',
      channelId: 'ChannelId',
      resourceId: 'ResourceId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtmpUrl: 'string',
      channelId: 'string',
      resourceId: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseBodyChannels extends $tea.Model {
  channel?: DescribeCasterChannelsResponseBodyChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': DescribeCasterChannelsResponseBodyChannelsChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent extends $tea.Model {
  color?: string;
  borderColor?: string;
  borderWidthNormalized?: number;
  text?: string;
  sizeNormalized?: number;
  fontName?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      borderColor: 'BorderColor',
      borderWidthNormalized: 'BorderWidthNormalized',
      text: 'Text',
      sizeNormalized: 'SizeNormalized',
      fontName: 'FontName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      borderColor: 'string',
      borderWidthNormalized: 'number',
      text: 'string',
      sizeNormalized: 'number',
      fontName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds extends $tea.Model {
  position?: number[];
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer extends $tea.Model {
  transparency?: number;
  positionNormalizeds?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds;
  heightNormalized?: number;
  positionRefer?: string;
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      transparency: 'Transparency',
      positionNormalizeds: 'PositionNormalizeds',
      heightNormalized: 'HeightNormalized',
      positionRefer: 'PositionRefer',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transparency: 'number',
      positionNormalizeds: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayerPositionNormalizeds,
      heightNormalized: 'number',
      positionRefer: 'string',
      widthNormalized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent extends $tea.Model {
  materialId?: string;
  static names(): { [key: string]: string } {
    return {
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent extends $tea.Model {
  color?: string;
  wordSpaceNormalized?: number;
  borderWidthNormalized?: number;
  sourceLan?: string;
  wordCountPerLine?: number;
  targetLan?: string;
  borderColor?: string;
  locationId?: string;
  lineSpaceNormalized?: number;
  sizeNormalized?: number;
  showSourceLan?: boolean;
  wordsCount?: number;
  fontName?: string;
  ptsOffset?: number;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      wordSpaceNormalized: 'WordSpaceNormalized',
      borderWidthNormalized: 'BorderWidthNormalized',
      sourceLan: 'SourceLan',
      wordCountPerLine: 'WordCountPerLine',
      targetLan: 'TargetLan',
      borderColor: 'BorderColor',
      locationId: 'LocationId',
      lineSpaceNormalized: 'LineSpaceNormalized',
      sizeNormalized: 'SizeNormalized',
      showSourceLan: 'ShowSourceLan',
      wordsCount: 'WordsCount',
      fontName: 'FontName',
      ptsOffset: 'PtsOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      wordSpaceNormalized: 'number',
      borderWidthNormalized: 'number',
      sourceLan: 'string',
      wordCountPerLine: 'number',
      targetLan: 'string',
      borderColor: 'string',
      locationId: 'string',
      lineSpaceNormalized: 'number',
      sizeNormalized: 'number',
      showSourceLan: 'boolean',
      wordsCount: 'number',
      fontName: 'string',
      ptsOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponentsComponent extends $tea.Model {
  textLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent;
  effect?: string;
  componentName?: string;
  componentLayer?: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer;
  imageLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent;
  componentType?: string;
  locationId?: string;
  captionLayerContent?: DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      textLayerContent: 'TextLayerContent',
      effect: 'Effect',
      componentName: 'ComponentName',
      componentLayer: 'ComponentLayer',
      imageLayerContent: 'ImageLayerContent',
      componentType: 'ComponentType',
      locationId: 'LocationId',
      captionLayerContent: 'CaptionLayerContent',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentTextLayerContent,
      effect: 'string',
      componentName: 'string',
      componentLayer: DescribeCasterComponentsResponseBodyComponentsComponentComponentLayer,
      imageLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentImageLayerContent,
      componentType: 'string',
      locationId: 'string',
      captionLayerContent: DescribeCasterComponentsResponseBodyComponentsComponentCaptionLayerContent,
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseBodyComponents extends $tea.Model {
  component?: DescribeCasterComponentsResponseBodyComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': DescribeCasterComponentsResponseBodyComponentsComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds extends $tea.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfig extends $tea.Model {
  casterTemplate?: string;
  liveTemplateIds?: DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds;
  static names(): { [key: string]: string } {
    return {
      casterTemplate: 'CasterTemplate',
      liveTemplateIds: 'LiveTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterTemplate: 'string',
      liveTemplateIds: DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyRecordConfigRecordFormatRecordFormat extends $tea.Model {
  cycleDuration?: number;
  sliceOssObjectPrefix?: string;
  ossObjectPrefix?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      ossObjectPrefix: 'OssObjectPrefix',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      sliceOssObjectPrefix: 'string',
      ossObjectPrefix: 'string',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyRecordConfigRecordFormat extends $tea.Model {
  recordFormat?: DescribeCasterConfigResponseBodyRecordConfigRecordFormatRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeCasterConfigResponseBodyRecordConfigRecordFormatRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyRecordConfig extends $tea.Model {
  recordFormat?: DescribeCasterConfigResponseBodyRecordConfigRecordFormat;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: DescribeCasterConfigResponseBodyRecordConfigRecordFormat,
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer extends $tea.Model {
  volumeRate?: number;
  fixedDelayDuration?: number;
  validChannel?: string;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      fixedDelayDuration: 'number',
      validChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers extends $tea.Model {
  audioLayer?: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayersAudioLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds extends $tea.Model {
  position?: number[];
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer extends $tea.Model {
  fixedDelayDuration?: number;
  positionNormalizeds?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds;
  heightNormalized?: number;
  fillMode?: string;
  positionRefer?: string;
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      fixedDelayDuration: 'FixedDelayDuration',
      positionNormalizeds: 'PositionNormalizeds',
      heightNormalized: 'HeightNormalized',
      fillMode: 'FillMode',
      positionRefer: 'PositionRefer',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelayDuration: 'number',
      positionNormalizeds: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds,
      heightNormalized: 'number',
      fillMode: 'string',
      positionRefer: 'string',
      widthNormalized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers extends $tea.Model {
  videoLayer?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer[];
  static names(): { [key: string]: string } {
    return {
      videoLayer: 'VideoLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayersVideoLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList extends $tea.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList extends $tea.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayoutsLayout extends $tea.Model {
  layoutId?: string;
  audioLayers?: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers;
  videoLayers?: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers;
  mixList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList;
  blendList?: DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      audioLayers: 'AudioLayers',
      videoLayers: 'VideoLayers',
      mixList: 'MixList',
      blendList: 'BlendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      audioLayers: DescribeCasterLayoutsResponseBodyLayoutsLayoutAudioLayers,
      videoLayers: DescribeCasterLayoutsResponseBodyLayoutsLayoutVideoLayers,
      mixList: DescribeCasterLayoutsResponseBodyLayoutsLayoutMixList,
      blendList: DescribeCasterLayoutsResponseBodyLayoutsLayoutBlendList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseBodyLayouts extends $tea.Model {
  layout?: DescribeCasterLayoutsResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseBodyLayoutsLayout },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds extends $tea.Model {
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseBodyEpisodesEpisode extends $tea.Model {
  status?: number;
  endTime?: string;
  startTime?: string;
  episodeName?: string;
  episodeType?: string;
  episodeId?: string;
  resourceId?: string;
  switchType?: string;
  componentIds?: DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      startTime: 'StartTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      episodeId: 'EpisodeId',
      resourceId: 'ResourceId',
      switchType: 'SwitchType',
      componentIds: 'ComponentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      endTime: 'string',
      startTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
      episodeId: 'string',
      resourceId: 'string',
      switchType: 'string',
      componentIds: DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseBodyEpisodes extends $tea.Model {
  episode?: DescribeCasterProgramResponseBodyEpisodesEpisode[];
  static names(): { [key: string]: string } {
    return {
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episode: { 'type': 'array', 'itemType': DescribeCasterProgramResponseBodyEpisodesEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBodyCasterListCaster extends $tea.Model {
  status?: number;
  startTime?: string;
  purchaseTime?: string;
  expireTime?: string;
  createTime?: string;
  casterTemplate?: string;
  chargeType?: string;
  casterName?: string;
  normType?: number;
  casterId?: string;
  channelEnable?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      purchaseTime: 'PurchaseTime',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      casterTemplate: 'CasterTemplate',
      chargeType: 'ChargeType',
      casterName: 'CasterName',
      normType: 'NormType',
      casterId: 'CasterId',
      channelEnable: 'ChannelEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      startTime: 'string',
      purchaseTime: 'string',
      expireTime: 'string',
      createTime: 'string',
      casterTemplate: 'string',
      chargeType: 'string',
      casterName: 'string',
      normType: 'number',
      casterId: 'string',
      channelEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBodyCasterList extends $tea.Model {
  caster?: DescribeCastersResponseBodyCasterListCaster[];
  static names(): { [key: string]: string } {
    return {
      caster: 'Caster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caster: { 'type': 'array', 'itemType': DescribeCastersResponseBodyCasterListCaster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBodyMixList extends $tea.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer extends $tea.Model {
  volumeRate?: number;
  fixedDelayDuration?: number;
  validChannel?: string;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      fixedDelayDuration: 'number',
      validChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBodyAudioLayers extends $tea.Model {
  audioLayer?: DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo extends $tea.Model {
  videoFormat?: string;
  outputStreamUrl?: string;
  transcodeConfig?: string;
  static names(): { [key: string]: string } {
    return {
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
      transcodeConfig: 'TranscodeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFormat: 'string',
      outputStreamUrl: 'string',
      transcodeConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneListSceneStreamInfos extends $tea.Model {
  streamInfo?: DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneListSceneComponentIds extends $tea.Model {
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'componentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneListScene extends $tea.Model {
  status?: number;
  layoutId?: string;
  outputType?: string;
  streamInfos?: DescribeCasterScenesResponseBodySceneListSceneStreamInfos;
  sceneId?: string;
  sceneName?: string;
  componentIds?: DescribeCasterScenesResponseBodySceneListSceneComponentIds;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      layoutId: 'LayoutId',
      outputType: 'OutputType',
      streamInfos: 'StreamInfos',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      componentIds: 'ComponentIds',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      layoutId: 'string',
      outputType: 'string',
      streamInfos: DescribeCasterScenesResponseBodySceneListSceneStreamInfos,
      sceneId: 'string',
      sceneName: 'string',
      componentIds: DescribeCasterScenesResponseBodySceneListSceneComponentIds,
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneList extends $tea.Model {
  scene?: DescribeCasterScenesResponseBodySceneListScene[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': DescribeCasterScenesResponseBodySceneListScene },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo extends $tea.Model {
  videoFormat?: string;
  outputStreamUrl?: string;
  transcodeConfig?: string;
  static names(): { [key: string]: string } {
    return {
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
      transcodeConfig: 'TranscodeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFormat: 'string',
      outputStreamUrl: 'string',
      transcodeConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos extends $tea.Model {
  streamInfo?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream extends $tea.Model {
  rtmpUrl?: string;
  outputType?: number;
  streamInfos?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos;
  sceneId?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      rtmpUrl: 'RtmpUrl',
      outputType: 'OutputType',
      streamInfos: 'StreamInfos',
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtmpUrl: 'string',
      outputType: 'number',
      streamInfos: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos,
      sceneId: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreams extends $tea.Model {
  casterStream?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream[];
  static names(): { [key: string]: string } {
    return {
      casterStream: 'CasterStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterStream: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroupResourceIds extends $tea.Model {
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroup extends $tea.Model {
  mode?: number;
  hostResourceId?: string;
  resourceIds?: DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroupResourceIds;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      hostResourceId: 'HostResourceId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      hostResourceId: 'string',
      resourceIds: DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroupResourceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponseBodySyncGroups extends $tea.Model {
  syncGroup?: DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroup[];
  static names(): { [key: string]: string } {
    return {
      syncGroup: 'SyncGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncGroup: { 'type': 'array', 'itemType': DescribeCasterSyncGroupResponseBodySyncGroupsSyncGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource extends $tea.Model {
  endOffset?: number;
  beginOffset?: number;
  ptsCallbackInterval?: number;
  materialId?: string;
  locationId?: string;
  liveStreamUrl?: string;
  vodUrl?: string;
  resourceId?: string;
  repeatNum?: number;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      endOffset: 'EndOffset',
      beginOffset: 'BeginOffset',
      ptsCallbackInterval: 'PtsCallbackInterval',
      materialId: 'MaterialId',
      locationId: 'LocationId',
      liveStreamUrl: 'LiveStreamUrl',
      vodUrl: 'VodUrl',
      resourceId: 'ResourceId',
      repeatNum: 'RepeatNum',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOffset: 'number',
      beginOffset: 'number',
      ptsCallbackInterval: 'number',
      materialId: 'string',
      locationId: 'string',
      liveStreamUrl: 'string',
      vodUrl: 'string',
      resourceId: 'string',
      repeatNum: 'number',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseBodyVideoResources extends $tea.Model {
  videoResource?: DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource[];
  static names(): { [key: string]: string } {
    return {
      videoResource: 'VideoResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoResource: { 'type': 'array', 'itemType': DescribeCasterVideoResourcesResponseBodyVideoResourcesVideoResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUsageDataResponseBodyUsageDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainUsageDataResponseBodyUsageDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForbidPushStreamRoomListResponseBodyRoomList extends $tea.Model {
  opEndTime?: string;
  anchorId?: string;
  opStartTime?: string;
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      opEndTime: 'OpEndTime',
      anchorId: 'AnchorId',
      opStartTime: 'OpStartTime',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEndTime: 'string',
      anchorId: 'string',
      opStartTime: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos extends $tea.Model {
  downFlow?: number;
  online?: number;
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      downFlow: 'DownFlow',
      online: 'Online',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downFlow: 'number',
      online: 'number',
      rate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos extends $tea.Model {
  streamName?: string;
  infos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos[];
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      infos: 'Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      infos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData extends $tea.Model {
  streamInfos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos[];
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos },
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceResponseBodyHtmlResource extends $tea.Model {
  htmlResourceId?: string;
  htmlUrl?: string;
  htmlContent?: string;
  casterId?: string;
  config?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'HtmlUrl',
      htmlContent: 'HtmlContent',
      casterId: 'CasterId',
      config: 'Config',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      htmlResourceId: 'string',
      htmlUrl: 'string',
      htmlContent: 'string',
      casterId: 'string',
      config: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigResponseBodyLiveAsrConfigLiveAsrConfigList extends $tea.Model {
  domainName?: number;
  appName?: string;
  streamName?: string;
  period?: number;
  mnsTopic?: string;
  mnsRegion?: string;
  httpCallbackURL?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      period: 'Period',
      mnsTopic: 'MnsTopic',
      mnsRegion: 'MnsRegion',
      httpCallbackURL: 'HttpCallbackURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'number',
      appName: 'string',
      streamName: 'string',
      period: 'number',
      mnsTopic: 'string',
      mnsRegion: 'string',
      httpCallbackURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigResponseBodyLiveAsrConfig extends $tea.Model {
  liveAsrConfigList?: DescribeLiveAsrConfigResponseBodyLiveAsrConfigLiveAsrConfigList[];
  static names(): { [key: string]: string } {
    return {
      liveAsrConfigList: 'LiveAsrConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAsrConfigList: { 'type': 'array', 'itemType': DescribeLiveAsrConfigResponseBodyLiveAsrConfigLiveAsrConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes extends $tea.Model {
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig extends $tea.Model {
  appName?: string;
  streamName?: string;
  scenes?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes;
  domainName?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      streamName: 'StreamName',
      scenes: 'Scenes',
      domainName: 'DomainName',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      streamName: 'string',
      scenes: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes,
      domainName: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList extends $tea.Model {
  liveAudioAuditConfig?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditConfig: 'LiveAudioAuditConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig extends $tea.Model {
  callbackTemplate?: string;
  domainName?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      callbackTemplate: 'CallbackTemplate',
      domainName: 'DomainName',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackTemplate: 'string',
      domainName: 'string',
      callback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList extends $tea.Model {
  liveAudioAuditNotifyConfig?: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditNotifyConfig: 'LiveAudioAuditNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditNotifyConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
  lastTime?: number;
  fingerprint?: string;
  certName?: string;
  issuer?: string;
  certId?: number;
  common?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      fingerprint: 'Fingerprint',
      certName: 'CertName',
      issuer: 'Issuer',
      certId: 'CertId',
      common: 'Common',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      fingerprint: 'string',
      certName: 'string',
      issuer: 'string',
      certId: 'number',
      common: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeLiveCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeLiveCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeLiveCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig extends $tea.Model {
  notifyUrl?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      notifyUrl: 'NotifyUrl',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyUrl: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule extends $tea.Model {
  timeStamp?: string;
  app?: string;
  domain?: string;
  stream?: string;
  fee?: string;
  scene?: string;
  region?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      app: 'App',
      domain: 'Domain',
      stream: 'Stream',
      fee: 'Fee',
      scene: 'Scene',
      region: 'Region',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      app: 'string',
      domain: 'string',
      stream: 'string',
      fee: 'string',
      scene: 'string',
      region: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataResponseBodyDetectPornData extends $tea.Model {
  dataModule?: DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  httpsBpsValue?: string;
  bpsValue?: string;
  timeStamp?: string;
  httpBpsValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsBpsValue: 'HttpsBpsValue',
      bpsValue: 'BpsValue',
      timeStamp: 'TimeStamp',
      httpBpsValue: 'HttpBpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsBpsValue: 'string',
      bpsValue: 'string',
      timeStamp: 'string',
      httpBpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $tea.Model {
  timeStamp?: string;
  locationName?: string;
  ispName?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      locationName: 'LocationName',
      ispName: 'IspName',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      locationName: 'string',
      ispName: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataList extends $tea.Model {
  bpsDataModel?: DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeLiveDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  domainName?: string;
  certName?: string;
  certDomainName?: string;
  certExpireTime?: string;
  certLife?: string;
  certOrg?: string;
  certType?: string;
  SSLProtocol?: string;
  status?: string;
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      certName: 'CertName',
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certLife: 'CertLife',
      certOrg: 'CertOrg',
      certType: 'CertType',
      SSLProtocol: 'SSLProtocol',
      status: 'Status',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      certName: 'string',
      certDomainName: 'string',
      certExpireTime: 'string',
      certLife: 'string',
      certOrg: 'string',
      certType: 'string',
      SSLProtocol: 'string',
      status: 'string',
      SSLPub: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponseBodyDomainDetail extends $tea.Model {
  SSLPub?: string;
  gmtModified?: string;
  domainName?: string;
  gmtCreated?: string;
  liveDomainType?: string;
  description?: string;
  SSLProtocol?: string;
  region?: string;
  certName?: string;
  scope?: string;
  cname?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      SSLPub: 'SSLPub',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      liveDomainType: 'LiveDomainType',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      region: 'Region',
      certName: 'CertName',
      scope: 'Scope',
      cname: 'Cname',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLPub: 'string',
      gmtModified: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      liveDomainType: 'string',
      description: 'string',
      SSLProtocol: 'string',
      region: 'string',
      certName: 'string',
      scope: 'string',
      cname: 'string',
      domainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  audioFrameRate?: number;
  videoFrameRate?: number;
  streamUrl?: string;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      audioFrameRate: 'AudioFrameRate',
      videoFrameRate: 'VideoFrameRate',
      streamUrl: 'StreamUrl',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrameRate: 'number',
      videoFrameRate: 'number',
      streamUrl: 'string',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo?: DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveDomainFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit extends $tea.Model {
  domainName?: string;
  limitNum?: number;
  limitTranscodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      limitNum: 'LimitNum',
      limitTranscodeNum: 'LimitTranscodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      limitNum: 'number',
      limitTranscodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseBodyLiveDomainLimitList extends $tea.Model {
  liveDomainLimit?: DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit[];
  static names(): { [key: string]: string } {
    return {
      liveDomainLimit: 'LiveDomainLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainLimit: { 'type': 'array', 'itemType': DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel extends $tea.Model {
  type?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseBodyLiveDomainModels extends $tea.Model {
  liveDomainModel?: DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel[];
  static names(): { [key: string]: string } {
    return {
      liveDomainModel: 'LiveDomainModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainModel: { 'type': 'array', 'itemType': DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo extends $tea.Model {
  transcodeTemplate?: string;
  userNumber?: number;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplate: 'TranscodeTemplate',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplate: 'string',
      userNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos extends $tea.Model {
  info?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo[];
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo extends $tea.Model {
  streamName?: string;
  infos?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      infos: 'Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      infos: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfo extends $tea.Model {
  liveStreamOnlineUserNumInfo?: DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  bpsValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      bpsValue: 'BpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      bpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainPushBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  trafficValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainPushTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $tea.Model {
  PV?: string;
  UV?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      PV: 'PV',
      UV: 'UV',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PV: 'string',
      UV: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfos extends $tea.Model {
  pvUvDataInfo?: DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo[];
  static names(): { [key: string]: string } {
    return {
      pvUvDataInfo: 'PvUvDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvUvDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeBpsDataResponseBodyRealTimeBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData?: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
  usageData?: DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfoDetail extends $tea.Model {
  FLV?: number;
  TS?: number;
  MP4?: number;
  static names(): { [key: string]: string } {
    return {
      FLV: 'FLV',
      TS: 'TS',
      MP4: 'MP4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FLV: 'number',
      TS: 'number',
      MP4: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfo extends $tea.Model {
  date?: string;
  total?: number;
  detail?: DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfoDetail;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      total: 'number',
      detail: DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfoDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseBodyRecordDataInfos extends $tea.Model {
  recordDataInfo?: DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfo[];
  static names(): { [key: string]: string } {
    return {
      recordDataInfo: 'RecordDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainRecordDataResponseBodyRecordDataInfosRecordDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo extends $tea.Model {
  date?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos extends $tea.Model {
  snapshotDataInfo?: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo[];
  static names(): { [key: string]: string } {
    return {
      snapshotDataInfo: 'SnapshotDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule extends $tea.Model {
  timeStamp?: string;
  size?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      size: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData extends $tea.Model {
  dataModule?: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  trafficValue?: string;
  httpTrafficValue?: string;
  httpsTrafficValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      trafficValue: 'TrafficValue',
      httpTrafficValue: 'HttpTrafficValue',
      httpsTrafficValue: 'HttpsTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficValue: 'string',
      httpTrafficValue: 'string',
      httpsTrafficValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfosTranscodeDataInfo extends $tea.Model {
  date?: string;
  total?: number;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      total: 'Total',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      total: 'number',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfos extends $tea.Model {
  transcodeDataInfo?: DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfosTranscodeDataInfo[];
  static names(): { [key: string]: string } {
    return {
      transcodeDataInfo: 'TranscodeDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainTranscodeDataResponseBodyTranscodeDataInfosTranscodeDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig extends $tea.Model {
  domainName?: string;
  appName?: string;
  pullDomainName?: string;
  pullAppName?: string;
  pullProtocol?: string;
  pullAuthType?: string;
  pullAuthKey?: string;
  pullArgs?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      pullDomainName: 'PullDomainName',
      pullAppName: 'PullAppName',
      pullProtocol: 'PullProtocol',
      pullAuthType: 'PullAuthType',
      pullAuthKey: 'PullAuthKey',
      pullArgs: 'PullArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      pullDomainName: 'string',
      pullAppName: 'string',
      pullProtocol: 'string',
      pullAuthType: 'string',
      pullAuthKey: 'string',
      pullArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList extends $tea.Model {
  liveLazyPullConfig?: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig[];
  static names(): { [key: string]: string } {
    return {
      liveLazyPullConfig: 'LiveLazyPullConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveLazyPullConfig: { 'type': 'array', 'itemType': DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord extends $tea.Model {
  endTime?: string;
  appName?: string;
  sourceUrl?: string;
  startTime?: string;
  streamName?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      appName: 'AppName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      appName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      streamName: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseBodyLiveAppRecordList extends $tea.Model {
  liveAppRecord?: DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData extends $tea.Model {
  timeStamp?: string;
  successNum?: number;
  failedNum?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      successNum: 'SuccessNum',
      failedNum: 'FailedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      successNum: 'number',
      failedNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData extends $tea.Model {
  accData?: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat extends $tea.Model {
  cycleDuration?: number;
  sliceOssObjectPrefix?: string;
  ossObjectPrefix?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      ossObjectPrefix: 'OssObjectPrefix',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      sliceOssObjectPrefix: 'string',
      ossObjectPrefix: 'string',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList extends $tea.Model {
  recordFormat?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord extends $tea.Model {
  endTime?: string;
  startTime?: string;
  appName?: string;
  streamName?: string;
  createTime?: string;
  onDemond?: number;
  ossBucket?: string;
  recordFormatList?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList;
  domainName?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      appName: 'AppName',
      streamName: 'StreamName',
      createTime: 'CreateTime',
      onDemond: 'OnDemond',
      ossBucket: 'OssBucket',
      recordFormatList: 'RecordFormatList',
      domainName: 'DomainName',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      appName: 'string',
      streamName: 'string',
      createTime: 'string',
      onDemond: 'number',
      ossBucket: 'string',
      recordFormatList: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList,
      domainName: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordList extends $tea.Model {
  liveAppRecord?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig extends $tea.Model {
  needStatusNotify?: boolean;
  onDemandUrl?: string;
  notifyUrl?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      needStatusNotify: 'NeedStatusNotify',
      onDemandUrl: 'OnDemandUrl',
      notifyUrl: 'NotifyUrl',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needStatusNotify: 'boolean',
      onDemandUrl: 'string',
      notifyUrl: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig extends $tea.Model {
  appName?: string;
  autoCompose?: string;
  streamName?: string;
  createTime?: string;
  vodTranscodeGroupId?: string;
  cycleDuration?: number;
  domainName?: string;
  composeVodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      autoCompose: 'AutoCompose',
      streamName: 'StreamName',
      createTime: 'CreateTime',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
      cycleDuration: 'CycleDuration',
      domainName: 'DomainName',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      autoCompose: 'string',
      streamName: 'string',
      createTime: 'string',
      vodTranscodeGroupId: 'string',
      cycleDuration: 'number',
      domainName: 'string',
      composeVodTranscodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs extends $tea.Model {
  liveRecordVodConfig?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig[];
  static names(): { [key: string]: string } {
    return {
      liveRecordVodConfig: 'LiveRecordVodConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVodConfig: { 'type': 'array', 'itemType': DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig extends $tea.Model {
  overwriteOssObject?: string;
  timeInterval?: number;
  appName?: string;
  createTime?: string;
  ossBucket?: string;
  domainName?: string;
  callback?: string;
  sequenceOssObject?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteOssObject: 'OverwriteOssObject',
      timeInterval: 'TimeInterval',
      appName: 'AppName',
      createTime: 'CreateTime',
      ossBucket: 'OssBucket',
      domainName: 'DomainName',
      callback: 'Callback',
      sequenceOssObject: 'SequenceOssObject',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteOssObject: 'string',
      timeInterval: 'number',
      appName: 'string',
      createTime: 'string',
      ossBucket: 'string',
      domainName: 'string',
      callback: 'string',
      sequenceOssObject: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList extends $tea.Model {
  liveStreamSnapshotConfig?: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotConfig: 'LiveStreamSnapshotConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes extends $tea.Model {
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig extends $tea.Model {
  ossObject?: string;
  appName?: string;
  interval?: number;
  scenes?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes;
  ossBucket?: string;
  domainName?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      ossObject: 'OssObject',
      appName: 'AppName',
      interval: 'Interval',
      scenes: 'Scenes',
      ossBucket: 'OssBucket',
      domainName: 'DomainName',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObject: 'string',
      appName: 'string',
      interval: 'number',
      scenes: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes,
      ossBucket: 'string',
      domainName: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList extends $tea.Model {
  liveSnapshotDetectPornConfig?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig[];
  static names(): { [key: string]: string } {
    return {
      liveSnapshotDetectPornConfig: 'LiveSnapshotDetectPornConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveSnapshotDetectPornConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  time?: string;
  audioFrameRate?: number;
  videoFrameRate?: number;
  streamUrl?: string;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      audioFrameRate: 'AudioFrameRate',
      videoFrameRate: 'VideoFrameRate',
      streamUrl: 'StreamUrl',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      audioFrameRate: 'number',
      videoFrameRate: 'number',
      streamUrl: 'string',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo?: DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail extends $tea.Model {
  videoDataRate?: number;
  format?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      videoDataRate: 'VideoDataRate',
      format: 'Format',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoDataRate: 'number',
      format: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails extends $tea.Model {
  streamCountDetail?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail[];
  static names(): { [key: string]: string } {
    return {
      streamCountDetail: 'StreamCountDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountDetail: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo extends $tea.Model {
  type?: string;
  streamCountDetails?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails;
  limit?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      streamCountDetails: 'StreamCountDetails',
      limit: 'Limit',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      streamCountDetails: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails,
      limit: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfos extends $tea.Model {
  streamCountInfo?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo[];
  static names(): { [key: string]: string } {
    return {
      streamCountInfo: 'StreamCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountInfo: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig extends $tea.Model {
  level?: string;
  delay?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      delay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig extends $tea.Model {
  level?: string;
  delay?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      delay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig extends $tea.Model {
  level?: string;
  delay?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      delay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo extends $tea.Model {
  userNum?: string;
  streamTime?: string;
  static names(): { [key: string]: string } {
    return {
      userNum: 'UserNum',
      streamTime: 'StreamTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userNum: 'string',
      streamTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfos extends $tea.Model {
  liveStreamUserNumInfo?: DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamUserNumInfo: 'LiveStreamUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveStreamHistoryUserNumResponseBodyLiveStreamUserNumInfosLiveStreamUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo extends $tea.Model {
  time?: string;
  userNumber?: number;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      userNumber: 'UserNumber',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      userNumber: 'number',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfo extends $tea.Model {
  liveStreamOnlineUserNumInfo?: DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveStreamOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig extends $tea.Model {
  domainName?: string;
  configName?: string;
  configStatus?: string;
  configValue?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      configName: 'ConfigName',
      configStatus: 'ConfigStatus',
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      configName: 'string',
      configStatus: 'string',
      configValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigList extends $tea.Model {
  liveStreamOptimizedFeatureConfig?: DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOptimizedFeatureConfig: 'LiveStreamOptimizedFeatureConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOptimizedFeatureConfig: { 'type': 'array', 'itemType': DescribeLiveStreamOptimizedFeatureConfigResponseBodyLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo extends $tea.Model {
  endTime?: string;
  startTime?: string;
  duration?: number;
  ossBucket?: string;
  ossObjectPrefix?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      duration: 'Duration',
      ossBucket: 'OssBucket',
      ossObjectPrefix: 'OssObjectPrefix',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      duration: 'number',
      ossBucket: 'string',
      ossObjectPrefix: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList extends $tea.Model {
  recordContentInfo?: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo[];
  static names(): { [key: string]: string } {
    return {
      recordContentInfo: 'RecordContentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContentInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo extends $tea.Model {
  streamName?: string;
  recordUrl?: string;
  recordId?: string;
  createTime?: string;
  height?: number;
  ossBucket?: string;
  domainName?: string;
  endTime?: string;
  ossObject?: string;
  startTime?: string;
  appName?: string;
  width?: number;
  duration?: number;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      recordUrl: 'RecordUrl',
      recordId: 'RecordId',
      createTime: 'CreateTime',
      height: 'Height',
      ossBucket: 'OssBucket',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      appName: 'AppName',
      width: 'Width',
      duration: 'Duration',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      recordUrl: 'string',
      recordId: 'string',
      createTime: 'string',
      height: 'number',
      ossBucket: 'string',
      domainName: 'string',
      endTime: 'string',
      ossObject: 'string',
      startTime: 'string',
      appName: 'string',
      width: 'number',
      duration: 'number',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo extends $tea.Model {
  streamName?: string;
  recordUrl?: string;
  recordId?: string;
  createTime?: string;
  height?: number;
  ossBucket?: string;
  domainName?: string;
  endTime?: string;
  ossObject?: string;
  startTime?: string;
  appName?: string;
  width?: number;
  duration?: number;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      recordUrl: 'RecordUrl',
      recordId: 'RecordId',
      createTime: 'CreateTime',
      height: 'Height',
      ossBucket: 'OssBucket',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      appName: 'AppName',
      width: 'Width',
      duration: 'Duration',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      recordUrl: 'string',
      recordId: 'string',
      createTime: 'string',
      height: 'number',
      ossBucket: 'string',
      domainName: 'string',
      endTime: 'string',
      ossObject: 'string',
      startTime: 'string',
      appName: 'string',
      width: 'number',
      duration: 'number',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList extends $tea.Model {
  recordIndexInfo?: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo[];
  static names(): { [key: string]: string } {
    return {
      recordIndexInfo: 'RecordIndexInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIndexInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponseBodyStreamUrls extends $tea.Model {
  streamUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo extends $tea.Model {
  action?: string;
  streamName?: string;
  clientIP?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      streamName: 'StreamName',
      clientIP: 'ClientIP',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      streamName: 'string',
      clientIP: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseBodyControlInfo extends $tea.Model {
  liveStreamControlInfo?: DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamControlInfo: 'LiveStreamControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamControlInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  time?: string;
  audioFrameRate?: number;
  videoFrameRate?: number;
  streamUrl?: string;
  bitRate?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      audioFrameRate: 'AudioFrameRate',
      videoFrameRate: 'VideoFrameRate',
      streamUrl: 'StreamUrl',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      audioFrameRate: 'number',
      videoFrameRate: 'number',
      streamUrl: 'string',
      bitRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo?: DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsFrameRateAndBitRateDataResponseBodyFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo extends $tea.Model {
  ossObject?: string;
  createTime?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      ossObject: 'OssObject',
      createTime: 'CreateTime',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObject: 'string',
      createTime: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList extends $tea.Model {
  liveStreamSnapshotInfo?: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotInfo: 'LiveStreamSnapshotInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotInfo: { 'type': 'array', 'itemType': DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig extends $tea.Model {
  notifyUrl?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      notifyUrl: 'NotifyUrl',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyUrl: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $tea.Model {
  publishUrl?: string;
  streamName?: string;
  domainName?: string;
  publishDomain?: string;
  appName?: string;
  publishTime?: string;
  static names(): { [key: string]: string } {
    return {
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      domainName: 'DomainName',
      publishDomain: 'PublishDomain',
      appName: 'AppName',
      publishTime: 'PublishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishUrl: 'string',
      streamName: 'string',
      domainName: 'string',
      publishDomain: 'string',
      appName: 'string',
      publishTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseBodyOnlineInfo extends $tea.Model {
  liveStreamOnlineInfo?: DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $tea.Model {
  edgeNodeAddr?: string;
  publishUrl?: string;
  streamName?: string;
  stopTime?: string;
  domainName?: string;
  transcodeId?: string;
  publishDomain?: string;
  publishTime?: string;
  appName?: string;
  publishType?: string;
  transcoded?: string;
  clientAddr?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      edgeNodeAddr: 'EdgeNodeAddr',
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      stopTime: 'StopTime',
      domainName: 'DomainName',
      transcodeId: 'TranscodeId',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      appName: 'AppName',
      publishType: 'PublishType',
      transcoded: 'Transcoded',
      clientAddr: 'ClientAddr',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeNodeAddr: 'string',
      publishUrl: 'string',
      streamName: 'string',
      stopTime: 'string',
      domainName: 'string',
      transcodeId: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      appName: 'string',
      publishType: 'string',
      transcoded: 'string',
      clientAddr: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponseBodyPublishInfo extends $tea.Model {
  liveStreamPublishInfo?: DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters extends $tea.Model {
  videoProfile?: string;
  audioBitrate?: number;
  height?: number;
  rtsFlag?: string;
  templateType?: string;
  bframes?: string;
  audioRate?: number;
  audioCodec?: string;
  FPS?: number;
  gop?: string;
  width?: number;
  videoBitrate?: number;
  audioChannelNum?: number;
  audioProfile?: string;
  static names(): { [key: string]: string } {
    return {
      videoProfile: 'VideoProfile',
      audioBitrate: 'AudioBitrate',
      height: 'Height',
      rtsFlag: 'RtsFlag',
      templateType: 'TemplateType',
      bframes: 'Bframes',
      audioRate: 'AudioRate',
      audioCodec: 'AudioCodec',
      FPS: 'FPS',
      gop: 'Gop',
      width: 'Width',
      videoBitrate: 'VideoBitrate',
      audioChannelNum: 'AudioChannelNum',
      audioProfile: 'AudioProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoProfile: 'string',
      audioBitrate: 'number',
      height: 'number',
      rtsFlag: 'string',
      templateType: 'string',
      bframes: 'string',
      audioRate: 'number',
      audioCodec: 'string',
      FPS: 'number',
      gop: 'string',
      width: 'number',
      videoBitrate: 'number',
      audioChannelNum: 'number',
      audioProfile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters extends $tea.Model {
  encryptType?: string;
  kmsKeyID?: string;
  kmsKeyExpireInterval?: string;
  static names(): { [key: string]: string } {
    return {
      encryptType: 'EncryptType',
      kmsKeyID: 'KmsKeyID',
      kmsKeyExpireInterval: 'KmsKeyExpireInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptType: 'string',
      kmsKeyID: 'string',
      kmsKeyExpireInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo extends $tea.Model {
  customTranscodeParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters;
  transcodeApp?: string;
  transcodeTemplate?: string;
  encryptParameters?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters;
  transcodeName?: string;
  static names(): { [key: string]: string } {
    return {
      customTranscodeParameters: 'CustomTranscodeParameters',
      transcodeApp: 'TranscodeApp',
      transcodeTemplate: 'TranscodeTemplate',
      encryptParameters: 'EncryptParameters',
      transcodeName: 'TranscodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTranscodeParameters: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters,
      transcodeApp: 'string',
      transcodeTemplate: 'string',
      encryptParameters: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfoEncryptParameters,
      transcodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeList extends $tea.Model {
  domainTranscodeInfo?: DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo[];
  static names(): { [key: string]: string } {
    return {
      domainTranscodeInfo: 'DomainTranscodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTranscodeInfo: { 'type': 'array', 'itemType': DescribeLiveStreamTranscodeInfoResponseBodyDomainTranscodeListDomainTranscodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  tag?: DescribeLiveTagResourcesResponseBodyTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseBodyTagResourcesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  domainName?: string;
  rank?: number;
  totalTraffic?: string;
  trafficPercent?: string;
  maxBps?: number;
  maxBpsTime?: string;
  totalAccess?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      rank: 'Rank',
      totalTraffic: 'TotalTraffic',
      trafficPercent: 'TrafficPercent',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      totalAccess: 'TotalAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      rank: 'number',
      totalTraffic: 'string',
      trafficPercent: 'string',
      maxBps: 'number',
      maxBpsTime: 'string',
      totalAccess: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeLiveTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  liveDomainType?: string;
  liveDomainStatus?: string;
  regionName?: string;
  description?: string;
  cname?: string;
  gmtModified?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      liveDomainType: 'LiveDomainType',
      liveDomainStatus: 'LiveDomainStatus',
      regionName: 'RegionName',
      description: 'Description',
      cname: 'Cname',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      liveDomainType: 'string',
      liveDomainStatus: 'string',
      regionName: 'string',
      description: 'string',
      cname: 'string',
      gmtModified: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeLiveUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeLiveUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserTagsResponseBodyTags extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixStreamListResponseBodyMixStreamList extends $tea.Model {
  mixStreamTemplate?: string;
  appName?: string;
  layoutId?: string;
  streamName?: string;
  gmtCreate?: string;
  mixstreamId?: string;
  gmtModified?: string;
  inputStreamNumber?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      mixStreamTemplate: 'MixStreamTemplate',
      appName: 'AppName',
      layoutId: 'LayoutId',
      streamName: 'StreamName',
      gmtCreate: 'GmtCreate',
      mixstreamId: 'MixstreamId',
      gmtModified: 'GmtModified',
      inputStreamNumber: 'InputStreamNumber',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamTemplate: 'string',
      appName: 'string',
      layoutId: 'string',
      streamName: 'string',
      gmtCreate: 'string',
      mixstreamId: 'string',
      gmtModified: 'string',
      inputStreamNumber: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBodyRecords extends $tea.Model {
  recordId?: string;
  appId?: string;
  boardId?: number;
  recordStartTime?: number;
  startTime?: number;
  endTime?: number;
  state?: number;
  ossPath?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      appId: 'AppId',
      boardId: 'BoardId',
      recordStartTime: 'RecordStartTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      state: 'State',
      ossPath: 'OssPath',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      appId: 'string',
      boardId: 'number',
      recordStartTime: 'number',
      startTime: 'number',
      endTime: 'number',
      state: 'number',
      ossPath: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListResponseBodyUserList extends $tea.Model {
  opEndTime?: string;
  appUid?: string;
  opStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      opEndTime: 'OpEndTime',
      appUid: 'AppUid',
      opStartTime: 'OpStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEndTime: 'string',
      appUid: 'string',
      opStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListResponseBodyRoomList extends $tea.Model {
  anchorId?: string;
  createTime?: string;
  forbidStream?: string;
  roomId?: string;
  roomStatus?: number;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      createTime: 'CreateTime',
      forbidStream: 'ForbidStream',
      roomId: 'RoomId',
      roomStatus: 'RoomStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      createTime: 'string',
      forbidStream: 'string',
      roomId: 'string',
      roomStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic extends $tea.Model {
  peakTime?: string;
  queryTime?: string;
  statName?: string;
  bandWidth?: string;
  static names(): { [key: string]: string } {
    return {
      peakTime: 'PeakTime',
      queryTime: 'QueryTime',
      statName: 'StatName',
      bandWidth: 'BandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakTime: 'string',
      queryTime: 'string',
      statName: 'string',
      bandWidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTraffics extends $tea.Model {
  describeUpPeakTraffic?: DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakTraffic: 'DescribeUpPeakTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakTraffic: { 'type': 'array', 'itemType': DescribeUpBpsPeakDataResponseBodyDescribeUpPeakTrafficsDescribeUpPeakTraffic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine extends $tea.Model {
  bandWidth?: number;
  peakTime?: string;
  queryTime?: string;
  statName?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      peakTime: 'PeakTime',
      queryTime: 'QueryTime',
      statName: 'StatName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      peakTime: 'string',
      queryTime: 'string',
      statName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLines extends $tea.Model {
  describeUpBpsPeakOfLine?: DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine[];
  static names(): { [key: string]: string } {
    return {
      describeUpBpsPeakOfLine: 'DescribeUpBpsPeakOfLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpBpsPeakOfLine: { 'type': 'array', 'itemType': DescribeUpBpsPeakOfLineResponseBodyDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData extends $tea.Model {
  publishStreamNum?: number;
  peakTime?: string;
  queryTime?: string;
  statName?: string;
  bandWidth?: string;
  static names(): { [key: string]: string } {
    return {
      publishStreamNum: 'PublishStreamNum',
      peakTime: 'PeakTime',
      queryTime: 'QueryTime',
      statName: 'StatName',
      bandWidth: 'BandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishStreamNum: 'number',
      peakTime: 'string',
      queryTime: 'string',
      statName: 'string',
      bandWidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatas extends $tea.Model {
  describeUpPeakPublishStreamData?: DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakPublishStreamData: 'DescribeUpPeakPublishStreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakPublishStreamData: { 'type': 'array', 'itemType': DescribeUpPeakPublishStreamDataResponseBodyDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo extends $tea.Model {
  project?: string;
  logstore?: string;
  region?: string;
  domainName?: string;
  dmId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domainName: 'DomainName',
      dmId: 'DmId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      logstore: 'string',
      region: 'string',
      domainName: 'string',
      dmId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponseBodyContent extends $tea.Model {
  realtimeLogDeliveryInfo?: ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains extends $tea.Model {
  domainName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponseBodyContent extends $tea.Model {
  domains?: ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryDomainsResponseBodyContentDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos extends $tea.Model {
  project?: string;
  logstore?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      logstore: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponseBodyContent extends $tea.Model {
  realtimeLogDeliveryInfos?: ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequestVideoLayer extends $tea.Model {
  fixedDelayDuration?: number;
  heightNormalized?: number;
  fillMode?: string;
  positionRefer?: string;
  positionNormalized?: number[];
  widthNormalized?: number;
  static names(): { [key: string]: string } {
    return {
      fixedDelayDuration: 'FixedDelayDuration',
      heightNormalized: 'HeightNormalized',
      fillMode: 'FillMode',
      positionRefer: 'PositionRefer',
      positionNormalized: 'PositionNormalized',
      widthNormalized: 'WidthNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelayDuration: 'number',
      heightNormalized: 'number',
      fillMode: 'string',
      positionRefer: 'string',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      widthNormalized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  fixedDelayDuration?: number;
  validChannel?: string;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      fixedDelayDuration: 'number',
      validChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramRequestEpisode extends $tea.Model {
  endTime?: string;
  startTime?: string;
  episodeName?: string;
  episodeType?: string;
  episodeId?: string;
  resourceId?: string;
  componentId?: string[];
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      episodeId: 'EpisodeId',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
      episodeId: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSyncGroupRequestSyncGroup extends $tea.Model {
  mode?: number;
  syncDelayThreshold?: number;
  hostResourceId?: string;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      syncDelayThreshold: 'SyncDelayThreshold',
      hostResourceId: 'HostResourceId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      syncDelayThreshold: 'number',
      hostResourceId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPvwSceneInfosSceneInfo extends $tea.Model {
  sceneId?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPvwSceneInfos extends $tea.Model {
  sceneInfo?: StartCasterResponseBodyPvwSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPvwSceneInfosSceneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo extends $tea.Model {
  videoFormat?: string;
  outputStreamUrl?: string;
  transcodeConfig?: string;
  static names(): { [key: string]: string } {
    return {
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
      transcodeConfig: 'TranscodeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFormat: 'string',
      outputStreamUrl: 'string',
      transcodeConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos extends $tea.Model {
  streamInfo?: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfosSceneInfo extends $tea.Model {
  streamInfos?: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos;
  sceneId?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos,
      sceneId: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfos extends $tea.Model {
  sceneInfo?: StartCasterResponseBodyPgmSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPgmSceneInfosSceneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagLiveResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneAudioRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  fixedDelayDuration?: number;
  validChannel?: string;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      fixedDelayDuration: 'number',
      validChannel: 'string',
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
      'cn-qingdao': "live.aliyuncs.com",
      'cn-beijing': "live.aliyuncs.com",
      'cn-hangzhou': "live.aliyuncs.com",
      'cn-shanghai': "live.aliyuncs.com",
      'cn-shenzhen': "live.aliyuncs.com",
      'ap-southeast-1': "live.aliyuncs.com",
      'ap-southeast-5': "live.aliyuncs.com",
      'ap-northeast-1': "live.aliyuncs.com",
      'eu-central-1': "live.aliyuncs.com",
      'ap-south-1': "live.aliyuncs.com",
      'ap-northeast-2-pop': "live.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "live.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "live.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "live.aliyuncs.com",
      'cn-beijing-finance-pop': "live.aliyuncs.com",
      'cn-beijing-gov-1': "live.aliyuncs.com",
      'cn-beijing-nu16-b01': "live.aliyuncs.com",
      'cn-chengdu': "live.aliyuncs.com",
      'cn-edge-1': "live.aliyuncs.com",
      'cn-fujian': "live.aliyuncs.com",
      'cn-haidian-cm12-c01': "live.aliyuncs.com",
      'cn-hangzhou-bj-b01': "live.aliyuncs.com",
      'cn-hangzhou-finance': "live.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "live.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "live.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "live.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "live.aliyuncs.com",
      'cn-hangzhou-test-306': "live.aliyuncs.com",
      'cn-hongkong': "live.aliyuncs.com",
      'cn-hongkong-finance-pop': "live.aliyuncs.com",
      'cn-huhehaote': "live.aliyuncs.com",
      'cn-north-2-gov-1': "live.aliyuncs.com",
      'cn-qingdao-nebula': "live.aliyuncs.com",
      'cn-shanghai-et15-b01': "live.aliyuncs.com",
      'cn-shanghai-et2-b01': "live.aliyuncs.com",
      'cn-shanghai-finance-1': "live.aliyuncs.com",
      'cn-shanghai-inner': "live.aliyuncs.com",
      'cn-shanghai-internal-test-1': "live.aliyuncs.com",
      'cn-shenzhen-finance-1': "live.aliyuncs.com",
      'cn-shenzhen-inner': "live.aliyuncs.com",
      'cn-shenzhen-st4-d01': "live.aliyuncs.com",
      'cn-shenzhen-su18-b01': "live.aliyuncs.com",
      'cn-wuhan': "live.aliyuncs.com",
      'cn-yushanfang': "live.aliyuncs.com",
      'cn-zhangbei-na61-b01': "live.aliyuncs.com",
      'cn-zhangjiakou': "live.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "live.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "live.aliyuncs.com",
      'eu-west-1': "live.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "live.ap-southeast-1.aliyuncs.com",
      'me-east-1': "live.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "live.ap-southeast-1.aliyuncs.com",
      'us-east-1': "live.ap-southeast-1.aliyuncs.com",
      'us-west-1': "live.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("live", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCasterComponentWithOptions(request: AddCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterComponentResponse>(await this.doRPCRequest("AddCasterComponent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterComponentResponse({}));
  }

  async addCasterComponent(request: AddCasterComponentRequest): Promise<AddCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterComponentWithOptions(request, runtime);
  }

  async addCasterEpisodeWithOptions(request: AddCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterEpisodeResponse>(await this.doRPCRequest("AddCasterEpisode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterEpisodeResponse({}));
  }

  async addCasterEpisode(request: AddCasterEpisodeRequest): Promise<AddCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeWithOptions(request, runtime);
  }

  async addCasterEpisodeGroupWithOptions(request: AddCasterEpisodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterEpisodeGroupResponse>(await this.doRPCRequest("AddCasterEpisodeGroup", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterEpisodeGroupResponse({}));
  }

  async addCasterEpisodeGroup(request: AddCasterEpisodeGroupRequest): Promise<AddCasterEpisodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeGroupWithOptions(request, runtime);
  }

  async addCasterEpisodeGroupContentWithOptions(request: AddCasterEpisodeGroupContentRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeGroupContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterEpisodeGroupContentResponse>(await this.doRPCRequest("AddCasterEpisodeGroupContent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterEpisodeGroupContentResponse({}));
  }

  async addCasterEpisodeGroupContent(request: AddCasterEpisodeGroupContentRequest): Promise<AddCasterEpisodeGroupContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeGroupContentWithOptions(request, runtime);
  }

  async addCasterLayoutWithOptions(request: AddCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterLayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterLayoutResponse>(await this.doRPCRequest("AddCasterLayout", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterLayoutResponse({}));
  }

  async addCasterLayout(request: AddCasterLayoutRequest): Promise<AddCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterLayoutWithOptions(request, runtime);
  }

  async addCasterProgramWithOptions(request: AddCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterProgramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterProgramResponse>(await this.doRPCRequest("AddCasterProgram", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterProgramResponse({}));
  }

  async addCasterProgram(request: AddCasterProgramRequest): Promise<AddCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterProgramWithOptions(request, runtime);
  }

  async addCasterVideoResourceWithOptions(request: AddCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterVideoResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCasterVideoResourceResponse>(await this.doRPCRequest("AddCasterVideoResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCasterVideoResourceResponse({}));
  }

  async addCasterVideoResource(request: AddCasterVideoResourceRequest): Promise<AddCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterVideoResourceWithOptions(request, runtime);
  }

  async addCustomLiveStreamTranscodeWithOptions(request: AddCustomLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCustomLiveStreamTranscodeResponse>(await this.doRPCRequest("AddCustomLiveStreamTranscode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCustomLiveStreamTranscodeResponse({}));
  }

  async addCustomLiveStreamTranscode(request: AddCustomLiveStreamTranscodeRequest): Promise<AddCustomLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomLiveStreamTranscodeWithOptions(request, runtime);
  }

  async addLiveAppRecordConfigWithOptions(request: AddLiveAppRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAppRecordConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveAppRecordConfigResponse>(await this.doRPCRequest("AddLiveAppRecordConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveAppRecordConfigResponse({}));
  }

  async addLiveAppRecordConfig(request: AddLiveAppRecordConfigRequest): Promise<AddLiveAppRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAppRecordConfigWithOptions(request, runtime);
  }

  async addLiveAppSnapshotConfigWithOptions(request: AddLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveAppSnapshotConfigResponse>(await this.doRPCRequest("AddLiveAppSnapshotConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveAppSnapshotConfigResponse({}));
  }

  async addLiveAppSnapshotConfig(request: AddLiveAppSnapshotConfigRequest): Promise<AddLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAppSnapshotConfigWithOptions(request, runtime);
  }

  async addLiveASRConfigWithOptions(request: AddLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveASRConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveASRConfigResponse>(await this.doRPCRequest("AddLiveASRConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveASRConfigResponse({}));
  }

  async addLiveASRConfig(request: AddLiveASRConfigRequest): Promise<AddLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveASRConfigWithOptions(request, runtime);
  }

  async addLiveAudioAuditConfigWithOptions(request: AddLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveAudioAuditConfigResponse>(await this.doRPCRequest("AddLiveAudioAuditConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveAudioAuditConfigResponse({}));
  }

  async addLiveAudioAuditConfig(request: AddLiveAudioAuditConfigRequest): Promise<AddLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async addLiveAudioAuditNotifyConfigWithOptions(request: AddLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveAudioAuditNotifyConfigResponse>(await this.doRPCRequest("AddLiveAudioAuditNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveAudioAuditNotifyConfigResponse({}));
  }

  async addLiveAudioAuditNotifyConfig(request: AddLiveAudioAuditNotifyConfigRequest): Promise<AddLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async addLiveDetectNotifyConfigWithOptions(request: AddLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveDetectNotifyConfigResponse>(await this.doRPCRequest("AddLiveDetectNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveDetectNotifyConfigResponse({}));
  }

  async addLiveDetectNotifyConfig(request: AddLiveDetectNotifyConfigRequest): Promise<AddLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async addLiveDomainWithOptions(request: AddLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveDomainResponse>(await this.doRPCRequest("AddLiveDomain", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveDomainResponse({}));
  }

  async addLiveDomain(request: AddLiveDomainRequest): Promise<AddLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainWithOptions(request, runtime);
  }

  async addLiveDomainMappingWithOptions(request: AddLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainMappingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveDomainMappingResponse>(await this.doRPCRequest("AddLiveDomainMapping", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveDomainMappingResponse({}));
  }

  async addLiveDomainMapping(request: AddLiveDomainMappingRequest): Promise<AddLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainMappingWithOptions(request, runtime);
  }

  async addLiveDomainPlayMappingWithOptions(request: AddLiveDomainPlayMappingRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainPlayMappingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveDomainPlayMappingResponse>(await this.doRPCRequest("AddLiveDomainPlayMapping", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveDomainPlayMappingResponse({}));
  }

  async addLiveDomainPlayMapping(request: AddLiveDomainPlayMappingRequest): Promise<AddLiveDomainPlayMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainPlayMappingWithOptions(request, runtime);
  }

  async addLivePullStreamInfoConfigWithOptions(request: AddLivePullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLivePullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLivePullStreamInfoConfigResponse>(await this.doRPCRequest("AddLivePullStreamInfoConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLivePullStreamInfoConfigResponse({}));
  }

  async addLivePullStreamInfoConfig(request: AddLivePullStreamInfoConfigRequest): Promise<AddLivePullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLivePullStreamInfoConfigWithOptions(request, runtime);
  }

  async addLiveRecordNotifyConfigWithOptions(request: AddLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveRecordNotifyConfigResponse>(await this.doRPCRequest("AddLiveRecordNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveRecordNotifyConfigResponse({}));
  }

  async addLiveRecordNotifyConfig(request: AddLiveRecordNotifyConfigRequest): Promise<AddLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async addLiveRecordVodConfigWithOptions(request: AddLiveRecordVodConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveRecordVodConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveRecordVodConfigResponse>(await this.doRPCRequest("AddLiveRecordVodConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveRecordVodConfigResponse({}));
  }

  async addLiveRecordVodConfig(request: AddLiveRecordVodConfigRequest): Promise<AddLiveRecordVodConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveRecordVodConfigWithOptions(request, runtime);
  }

  async addLiveSnapshotDetectPornConfigWithOptions(request: AddLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveSnapshotDetectPornConfigResponse>(await this.doRPCRequest("AddLiveSnapshotDetectPornConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveSnapshotDetectPornConfigResponse({}));
  }

  async addLiveSnapshotDetectPornConfig(request: AddLiveSnapshotDetectPornConfigRequest): Promise<AddLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async addLiveStreamTranscodeWithOptions(request: AddLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLiveStreamTranscodeResponse>(await this.doRPCRequest("AddLiveStreamTranscode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddLiveStreamTranscodeResponse({}));
  }

  async addLiveStreamTranscode(request: AddLiveStreamTranscodeRequest): Promise<AddLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveStreamTranscodeWithOptions(request, runtime);
  }

  async addRtsLiveStreamTranscodeWithOptions(request: AddRtsLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddRtsLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRtsLiveStreamTranscodeResponse>(await this.doRPCRequest("AddRtsLiveStreamTranscode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddRtsLiveStreamTranscodeResponse({}));
  }

  async addRtsLiveStreamTranscode(request: AddRtsLiveStreamTranscodeRequest): Promise<AddRtsLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRtsLiveStreamTranscodeWithOptions(request, runtime);
  }

  async addTrancodeSEIWithOptions(request: AddTrancodeSEIRequest, runtime: $Util.RuntimeOptions): Promise<AddTrancodeSEIResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTrancodeSEIResponse>(await this.doRPCRequest("AddTrancodeSEI", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddTrancodeSEIResponse({}));
  }

  async addTrancodeSEI(request: AddTrancodeSEIRequest): Promise<AddTrancodeSEIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrancodeSEIWithOptions(request, runtime);
  }

  async allowPushStreamWithOptions(request: AllowPushStreamRequest, runtime: $Util.RuntimeOptions): Promise<AllowPushStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllowPushStreamResponse>(await this.doRPCRequest("AllowPushStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllowPushStreamResponse({}));
  }

  async allowPushStream(request: AllowPushStreamRequest): Promise<AllowPushStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allowPushStreamWithOptions(request, runtime);
  }

  async applyBoardTokenWithOptions(request: ApplyBoardTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyBoardTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyBoardTokenResponse>(await this.doRPCRequest("ApplyBoardToken", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyBoardTokenResponse({}));
  }

  async applyBoardToken(request: ApplyBoardTokenRequest): Promise<ApplyBoardTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyBoardTokenWithOptions(request, runtime);
  }

  async applyRecordTokenWithOptions(request: ApplyRecordTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRecordTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyRecordTokenResponse>(await this.doRPCRequest("ApplyRecordToken", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyRecordTokenResponse({}));
  }

  async applyRecordToken(request: ApplyRecordTokenRequest): Promise<ApplyRecordTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRecordTokenWithOptions(request, runtime);
  }

  async batchDeleteLiveDomainConfigsWithOptions(request: BatchDeleteLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteLiveDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteLiveDomainConfigsResponse>(await this.doRPCRequest("BatchDeleteLiveDomainConfigs", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteLiveDomainConfigsResponse({}));
  }

  async batchDeleteLiveDomainConfigs(request: BatchDeleteLiveDomainConfigsRequest): Promise<BatchDeleteLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteLiveDomainConfigsWithOptions(request, runtime);
  }

  async batchSetLiveDomainConfigsWithOptions(request: BatchSetLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetLiveDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetLiveDomainConfigsResponse>(await this.doRPCRequest("BatchSetLiveDomainConfigs", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetLiveDomainConfigsResponse({}));
  }

  async batchSetLiveDomainConfigs(request: BatchSetLiveDomainConfigsRequest): Promise<BatchSetLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetLiveDomainConfigsWithOptions(request, runtime);
  }

  async completeBoardWithOptions(request: CompleteBoardRequest, runtime: $Util.RuntimeOptions): Promise<CompleteBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteBoardResponse>(await this.doRPCRequest("CompleteBoard", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteBoardResponse({}));
  }

  async completeBoard(request: CompleteBoardRequest): Promise<CompleteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeBoardWithOptions(request, runtime);
  }

  async completeBoardRecordWithOptions(request: CompleteBoardRecordRequest, runtime: $Util.RuntimeOptions): Promise<CompleteBoardRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteBoardRecordResponse>(await this.doRPCRequest("CompleteBoardRecord", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteBoardRecordResponse({}));
  }

  async completeBoardRecord(request: CompleteBoardRecordRequest): Promise<CompleteBoardRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeBoardRecordWithOptions(request, runtime);
  }

  async controlHtmlResourceWithOptions(request: ControlHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<ControlHtmlResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ControlHtmlResourceResponse>(await this.doRPCRequest("ControlHtmlResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ControlHtmlResourceResponse({}));
  }

  async controlHtmlResource(request: ControlHtmlResourceRequest): Promise<ControlHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.controlHtmlResourceWithOptions(request, runtime);
  }

  async copyCasterWithOptions(request: CopyCasterRequest, runtime: $Util.RuntimeOptions): Promise<CopyCasterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyCasterResponse>(await this.doRPCRequest("CopyCaster", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CopyCasterResponse({}));
  }

  async copyCaster(request: CopyCasterRequest): Promise<CopyCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCasterWithOptions(request, runtime);
  }

  async copyCasterSceneConfigWithOptions(request: CopyCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<CopyCasterSceneConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyCasterSceneConfigResponse>(await this.doRPCRequest("CopyCasterSceneConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CopyCasterSceneConfigResponse({}));
  }

  async copyCasterSceneConfig(request: CopyCasterSceneConfigRequest): Promise<CopyCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCasterSceneConfigWithOptions(request, runtime);
  }

  async createBoardWithOptions(request: CreateBoardRequest, runtime: $Util.RuntimeOptions): Promise<CreateBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBoardResponse>(await this.doRPCRequest("CreateBoard", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBoardResponse({}));
  }

  async createBoard(request: CreateBoardRequest): Promise<CreateBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBoardWithOptions(request, runtime);
  }

  async createCasterWithOptions(request: CreateCasterRequest, runtime: $Util.RuntimeOptions): Promise<CreateCasterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCasterResponse>(await this.doRPCRequest("CreateCaster", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCasterResponse({}));
  }

  async createCaster(request: CreateCasterRequest): Promise<CreateCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCasterWithOptions(request, runtime);
  }

  async createLiveRealTimeLogDeliveryWithOptions(request: CreateLiveRealTimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRealTimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateLiveRealTimeLogDeliveryResponse>(await this.doRPCRequest("CreateLiveRealTimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new CreateLiveRealTimeLogDeliveryResponse({}));
  }

  async createLiveRealTimeLogDelivery(request: CreateLiveRealTimeLogDeliveryRequest): Promise<CreateLiveRealTimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRealTimeLogDeliveryWithOptions(request, runtime);
  }

  async createLiveStreamRecordIndexFilesWithOptions(request: CreateLiveStreamRecordIndexFilesRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveStreamRecordIndexFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLiveStreamRecordIndexFilesResponse>(await this.doRPCRequest("CreateLiveStreamRecordIndexFiles", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLiveStreamRecordIndexFilesResponse({}));
  }

  async createLiveStreamRecordIndexFiles(request: CreateLiveStreamRecordIndexFilesRequest): Promise<CreateLiveStreamRecordIndexFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveStreamRecordIndexFilesWithOptions(request, runtime);
  }

  async createMixStreamWithOptions(request: CreateMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<CreateMixStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMixStreamResponse>(await this.doRPCRequest("CreateMixStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMixStreamResponse({}));
  }

  async createMixStream(request: CreateMixStreamRequest): Promise<CreateMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMixStreamWithOptions(request, runtime);
  }

  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoomResponse>(await this.doRPCRequest("CreateRoom", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async deleteBoardWithOptions(request: DeleteBoardRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBoardResponse>(await this.doRPCRequest("DeleteBoard", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBoardResponse({}));
  }

  async deleteBoard(request: DeleteBoardRequest): Promise<DeleteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBoardWithOptions(request, runtime);
  }

  async deleteCasterWithOptions(request: DeleteCasterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterResponse>(await this.doRPCRequest("DeleteCaster", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterResponse({}));
  }

  async deleteCaster(request: DeleteCasterRequest): Promise<DeleteCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterWithOptions(request, runtime);
  }

  async deleteCasterComponentWithOptions(request: DeleteCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterComponentResponse>(await this.doRPCRequest("DeleteCasterComponent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterComponentResponse({}));
  }

  async deleteCasterComponent(request: DeleteCasterComponentRequest): Promise<DeleteCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterComponentWithOptions(request, runtime);
  }

  async deleteCasterEpisodeWithOptions(request: DeleteCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterEpisodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterEpisodeResponse>(await this.doRPCRequest("DeleteCasterEpisode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterEpisodeResponse({}));
  }

  async deleteCasterEpisode(request: DeleteCasterEpisodeRequest): Promise<DeleteCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterEpisodeWithOptions(request, runtime);
  }

  async deleteCasterEpisodeGroupWithOptions(request: DeleteCasterEpisodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterEpisodeGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterEpisodeGroupResponse>(await this.doRPCRequest("DeleteCasterEpisodeGroup", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterEpisodeGroupResponse({}));
  }

  async deleteCasterEpisodeGroup(request: DeleteCasterEpisodeGroupRequest): Promise<DeleteCasterEpisodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterEpisodeGroupWithOptions(request, runtime);
  }

  async deleteCasterLayoutWithOptions(request: DeleteCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterLayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterLayoutResponse>(await this.doRPCRequest("DeleteCasterLayout", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterLayoutResponse({}));
  }

  async deleteCasterLayout(request: DeleteCasterLayoutRequest): Promise<DeleteCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterLayoutWithOptions(request, runtime);
  }

  async deleteCasterProgramWithOptions(request: DeleteCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterProgramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterProgramResponse>(await this.doRPCRequest("DeleteCasterProgram", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterProgramResponse({}));
  }

  async deleteCasterProgram(request: DeleteCasterProgramRequest): Promise<DeleteCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterProgramWithOptions(request, runtime);
  }

  async deleteCasterSceneConfigWithOptions(request: DeleteCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterSceneConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterSceneConfigResponse>(await this.doRPCRequest("DeleteCasterSceneConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterSceneConfigResponse({}));
  }

  async deleteCasterSceneConfig(request: DeleteCasterSceneConfigRequest): Promise<DeleteCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterSceneConfigWithOptions(request, runtime);
  }

  async deleteCasterVideoResourceWithOptions(request: DeleteCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterVideoResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCasterVideoResourceResponse>(await this.doRPCRequest("DeleteCasterVideoResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCasterVideoResourceResponse({}));
  }

  async deleteCasterVideoResource(request: DeleteCasterVideoResourceRequest): Promise<DeleteCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterVideoResourceWithOptions(request, runtime);
  }

  async deleteHtmlResourceWithOptions(request: DeleteHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHtmlResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHtmlResourceResponse>(await this.doRPCRequest("DeleteHtmlResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHtmlResourceResponse({}));
  }

  async deleteHtmlResource(request: DeleteHtmlResourceRequest): Promise<DeleteHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHtmlResourceWithOptions(request, runtime);
  }

  async deleteLiveAppRecordConfigWithOptions(request: DeleteLiveAppRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAppRecordConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveAppRecordConfigResponse>(await this.doRPCRequest("DeleteLiveAppRecordConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveAppRecordConfigResponse({}));
  }

  async deleteLiveAppRecordConfig(request: DeleteLiveAppRecordConfigRequest): Promise<DeleteLiveAppRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAppRecordConfigWithOptions(request, runtime);
  }

  async deleteLiveAppSnapshotConfigWithOptions(request: DeleteLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveAppSnapshotConfigResponse>(await this.doRPCRequest("DeleteLiveAppSnapshotConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveAppSnapshotConfigResponse({}));
  }

  async deleteLiveAppSnapshotConfig(request: DeleteLiveAppSnapshotConfigRequest): Promise<DeleteLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAppSnapshotConfigWithOptions(request, runtime);
  }

  async deleteLiveASRConfigWithOptions(request: DeleteLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveASRConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveASRConfigResponse>(await this.doRPCRequest("DeleteLiveASRConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveASRConfigResponse({}));
  }

  async deleteLiveASRConfig(request: DeleteLiveASRConfigRequest): Promise<DeleteLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveASRConfigWithOptions(request, runtime);
  }

  async deleteLiveAudioAuditConfigWithOptions(request: DeleteLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveAudioAuditConfigResponse>(await this.doRPCRequest("DeleteLiveAudioAuditConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveAudioAuditConfigResponse({}));
  }

  async deleteLiveAudioAuditConfig(request: DeleteLiveAudioAuditConfigRequest): Promise<DeleteLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async deleteLiveAudioAuditNotifyConfigWithOptions(request: DeleteLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveAudioAuditNotifyConfigResponse>(await this.doRPCRequest("DeleteLiveAudioAuditNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveAudioAuditNotifyConfigResponse({}));
  }

  async deleteLiveAudioAuditNotifyConfig(request: DeleteLiveAudioAuditNotifyConfigRequest): Promise<DeleteLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveDetectNotifyConfigWithOptions(request: DeleteLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveDetectNotifyConfigResponse>(await this.doRPCRequest("DeleteLiveDetectNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveDetectNotifyConfigResponse({}));
  }

  async deleteLiveDetectNotifyConfig(request: DeleteLiveDetectNotifyConfigRequest): Promise<DeleteLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveDomainWithOptions(request: DeleteLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveDomainResponse>(await this.doRPCRequest("DeleteLiveDomain", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveDomainResponse({}));
  }

  async deleteLiveDomain(request: DeleteLiveDomainRequest): Promise<DeleteLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDomainWithOptions(request, runtime);
  }

  async deleteLiveDomainMappingWithOptions(request: DeleteLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDomainMappingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveDomainMappingResponse>(await this.doRPCRequest("DeleteLiveDomainMapping", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveDomainMappingResponse({}));
  }

  async deleteLiveDomainMapping(request: DeleteLiveDomainMappingRequest): Promise<DeleteLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDomainMappingWithOptions(request, runtime);
  }

  async deleteLiveDomainPlayMappingWithOptions(request: DeleteLiveDomainPlayMappingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDomainPlayMappingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveDomainPlayMappingResponse>(await this.doRPCRequest("DeleteLiveDomainPlayMapping", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveDomainPlayMappingResponse({}));
  }

  async deleteLiveDomainPlayMapping(request: DeleteLiveDomainPlayMappingRequest): Promise<DeleteLiveDomainPlayMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDomainPlayMappingWithOptions(request, runtime);
  }

  async deleteLiveLazyPullStreamInfoConfigWithOptions(request: DeleteLiveLazyPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveLazyPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveLazyPullStreamInfoConfigResponse>(await this.doRPCRequest("DeleteLiveLazyPullStreamInfoConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveLazyPullStreamInfoConfigResponse({}));
  }

  async deleteLiveLazyPullStreamInfoConfig(request: DeleteLiveLazyPullStreamInfoConfigRequest): Promise<DeleteLiveLazyPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveLazyPullStreamInfoConfigWithOptions(request, runtime);
  }

  async deleteLivePullStreamInfoConfigWithOptions(request: DeleteLivePullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLivePullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLivePullStreamInfoConfigResponse>(await this.doRPCRequest("DeleteLivePullStreamInfoConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLivePullStreamInfoConfigResponse({}));
  }

  async deleteLivePullStreamInfoConfig(request: DeleteLivePullStreamInfoConfigRequest): Promise<DeleteLivePullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLivePullStreamInfoConfigWithOptions(request, runtime);
  }

  async deleteLiveRealtimeLogDeliveryWithOptions(request: DeleteLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteLiveRealtimeLogDeliveryResponse>(await this.doRPCRequest("DeleteLiveRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteLiveRealtimeLogDeliveryResponse({}));
  }

  async deleteLiveRealtimeLogDelivery(request: DeleteLiveRealtimeLogDeliveryRequest): Promise<DeleteLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async deleteLiveRealTimeLogLogstoreWithOptions(request: DeleteLiveRealTimeLogLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRealTimeLogLogstoreResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteLiveRealTimeLogLogstoreResponse>(await this.doRPCRequest("DeleteLiveRealTimeLogLogstore", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteLiveRealTimeLogLogstoreResponse({}));
  }

  async deleteLiveRealTimeLogLogstore(request: DeleteLiveRealTimeLogLogstoreRequest): Promise<DeleteLiveRealTimeLogLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRealTimeLogLogstoreWithOptions(request, runtime);
  }

  async deleteLiveRecordNotifyConfigWithOptions(request: DeleteLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveRecordNotifyConfigResponse>(await this.doRPCRequest("DeleteLiveRecordNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveRecordNotifyConfigResponse({}));
  }

  async deleteLiveRecordNotifyConfig(request: DeleteLiveRecordNotifyConfigRequest): Promise<DeleteLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveRecordVodConfigWithOptions(request: DeleteLiveRecordVodConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordVodConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveRecordVodConfigResponse>(await this.doRPCRequest("DeleteLiveRecordVodConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveRecordVodConfigResponse({}));
  }

  async deleteLiveRecordVodConfig(request: DeleteLiveRecordVodConfigRequest): Promise<DeleteLiveRecordVodConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordVodConfigWithOptions(request, runtime);
  }

  async deleteLiveSnapshotDetectPornConfigWithOptions(request: DeleteLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveSnapshotDetectPornConfigResponse>(await this.doRPCRequest("DeleteLiveSnapshotDetectPornConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveSnapshotDetectPornConfigResponse({}));
  }

  async deleteLiveSnapshotDetectPornConfig(request: DeleteLiveSnapshotDetectPornConfigRequest): Promise<DeleteLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async deleteLiveStreamsNotifyUrlConfigWithOptions(request: DeleteLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("DeleteLiveStreamsNotifyUrlConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveStreamsNotifyUrlConfigResponse({}));
  }

  async deleteLiveStreamsNotifyUrlConfig(request: DeleteLiveStreamsNotifyUrlConfigRequest): Promise<DeleteLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async deleteLiveStreamTranscodeWithOptions(request: DeleteLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLiveStreamTranscodeResponse>(await this.doRPCRequest("DeleteLiveStreamTranscode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLiveStreamTranscodeResponse({}));
  }

  async deleteLiveStreamTranscode(request: DeleteLiveStreamTranscodeRequest): Promise<DeleteLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveStreamTranscodeWithOptions(request, runtime);
  }

  async deleteMixStreamWithOptions(request: DeleteMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMixStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMixStreamResponse>(await this.doRPCRequest("DeleteMixStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMixStreamResponse({}));
  }

  async deleteMixStream(request: DeleteMixStreamRequest): Promise<DeleteMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMixStreamWithOptions(request, runtime);
  }

  async deleteRoomWithOptions(request: DeleteRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRoomResponse>(await this.doRPCRequest("DeleteRoom", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRoomResponse({}));
  }

  async deleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoomWithOptions(request, runtime);
  }

  async describeBoardEventsWithOptions(request: DescribeBoardEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBoardEventsResponse>(await this.doRPCRequest("DescribeBoardEvents", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBoardEventsResponse({}));
  }

  async describeBoardEvents(request: DescribeBoardEventsRequest): Promise<DescribeBoardEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardEventsWithOptions(request, runtime);
  }

  async describeBoardsWithOptions(request: DescribeBoardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBoardsResponse>(await this.doRPCRequest("DescribeBoards", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBoardsResponse({}));
  }

  async describeBoards(request: DescribeBoardsRequest): Promise<DescribeBoardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardsWithOptions(request, runtime);
  }

  async describeBoardSnapshotWithOptions(request: DescribeBoardSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBoardSnapshotResponse>(await this.doRPCRequest("DescribeBoardSnapshot", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBoardSnapshotResponse({}));
  }

  async describeBoardSnapshot(request: DescribeBoardSnapshotRequest): Promise<DescribeBoardSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardSnapshotWithOptions(request, runtime);
  }

  async describeCasterChannelsWithOptions(request: DescribeCasterChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterChannelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterChannelsResponse>(await this.doRPCRequest("DescribeCasterChannels", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterChannelsResponse({}));
  }

  async describeCasterChannels(request: DescribeCasterChannelsRequest): Promise<DescribeCasterChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterChannelsWithOptions(request, runtime);
  }

  async describeCasterComponentsWithOptions(request: DescribeCasterComponentsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterComponentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterComponentsResponse>(await this.doRPCRequest("DescribeCasterComponents", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterComponentsResponse({}));
  }

  async describeCasterComponents(request: DescribeCasterComponentsRequest): Promise<DescribeCasterComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterComponentsWithOptions(request, runtime);
  }

  async describeCasterConfigWithOptions(request: DescribeCasterConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterConfigResponse>(await this.doRPCRequest("DescribeCasterConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterConfigResponse({}));
  }

  async describeCasterConfig(request: DescribeCasterConfigRequest): Promise<DescribeCasterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterConfigWithOptions(request, runtime);
  }

  async describeCasterLayoutsWithOptions(request: DescribeCasterLayoutsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterLayoutsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterLayoutsResponse>(await this.doRPCRequest("DescribeCasterLayouts", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterLayoutsResponse({}));
  }

  async describeCasterLayouts(request: DescribeCasterLayoutsRequest): Promise<DescribeCasterLayoutsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterLayoutsWithOptions(request, runtime);
  }

  async describeCasterProgramWithOptions(request: DescribeCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterProgramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterProgramResponse>(await this.doRPCRequest("DescribeCasterProgram", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterProgramResponse({}));
  }

  async describeCasterProgram(request: DescribeCasterProgramRequest): Promise<DescribeCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterProgramWithOptions(request, runtime);
  }

  async describeCasterRtcInfoWithOptions(request: DescribeCasterRtcInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterRtcInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterRtcInfoResponse>(await this.doRPCRequest("DescribeCasterRtcInfo", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterRtcInfoResponse({}));
  }

  async describeCasterRtcInfo(request: DescribeCasterRtcInfoRequest): Promise<DescribeCasterRtcInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterRtcInfoWithOptions(request, runtime);
  }

  async describeCastersWithOptions(request: DescribeCastersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCastersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCastersResponse>(await this.doRPCRequest("DescribeCasters", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCastersResponse({}));
  }

  async describeCasters(request: DescribeCastersRequest): Promise<DescribeCastersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCastersWithOptions(request, runtime);
  }

  async describeCasterSceneAudioWithOptions(request: DescribeCasterSceneAudioRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterSceneAudioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterSceneAudioResponse>(await this.doRPCRequest("DescribeCasterSceneAudio", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterSceneAudioResponse({}));
  }

  async describeCasterSceneAudio(request: DescribeCasterSceneAudioRequest): Promise<DescribeCasterSceneAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterSceneAudioWithOptions(request, runtime);
  }

  async describeCasterScenesWithOptions(request: DescribeCasterScenesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterScenesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterScenesResponse>(await this.doRPCRequest("DescribeCasterScenes", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterScenesResponse({}));
  }

  async describeCasterScenes(request: DescribeCasterScenesRequest): Promise<DescribeCasterScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterScenesWithOptions(request, runtime);
  }

  async describeCasterStreamUrlWithOptions(request: DescribeCasterStreamUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterStreamUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterStreamUrlResponse>(await this.doRPCRequest("DescribeCasterStreamUrl", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterStreamUrlResponse({}));
  }

  async describeCasterStreamUrl(request: DescribeCasterStreamUrlRequest): Promise<DescribeCasterStreamUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterStreamUrlWithOptions(request, runtime);
  }

  async describeCasterSyncGroupWithOptions(request: DescribeCasterSyncGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterSyncGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterSyncGroupResponse>(await this.doRPCRequest("DescribeCasterSyncGroup", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterSyncGroupResponse({}));
  }

  async describeCasterSyncGroup(request: DescribeCasterSyncGroupRequest): Promise<DescribeCasterSyncGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterSyncGroupWithOptions(request, runtime);
  }

  async describeCasterVideoResourcesWithOptions(request: DescribeCasterVideoResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterVideoResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCasterVideoResourcesResponse>(await this.doRPCRequest("DescribeCasterVideoResources", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCasterVideoResourcesResponse({}));
  }

  async describeCasterVideoResources(request: DescribeCasterVideoResourcesRequest): Promise<DescribeCasterVideoResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterVideoResourcesWithOptions(request, runtime);
  }

  async describeDomainUsageDataWithOptions(request: DescribeDomainUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUsageDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainUsageDataResponse>(await this.doRPCRequest("DescribeDomainUsageData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainUsageDataResponse({}));
  }

  async describeDomainUsageData(request: DescribeDomainUsageDataRequest): Promise<DescribeDomainUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUsageDataWithOptions(request, runtime);
  }

  async describeForbidPushStreamRoomListWithOptions(request: DescribeForbidPushStreamRoomListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeForbidPushStreamRoomListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeForbidPushStreamRoomListResponse>(await this.doRPCRequest("DescribeForbidPushStreamRoomList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeForbidPushStreamRoomListResponse({}));
  }

  async describeForbidPushStreamRoomList(request: DescribeForbidPushStreamRoomListRequest): Promise<DescribeForbidPushStreamRoomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeForbidPushStreamRoomListWithOptions(request, runtime);
  }

  async describeHlsLiveStreamRealTimeBpsDataWithOptions(request: DescribeHlsLiveStreamRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHlsLiveStreamRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeHlsLiveStreamRealTimeBpsDataResponse>(await this.doRPCRequest("DescribeHlsLiveStreamRealTimeBpsData", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeHlsLiveStreamRealTimeBpsDataResponse({}));
  }

  async describeHlsLiveStreamRealTimeBpsData(request: DescribeHlsLiveStreamRealTimeBpsDataRequest): Promise<DescribeHlsLiveStreamRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHlsLiveStreamRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeHtmlResourceWithOptions(request: DescribeHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHtmlResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHtmlResourceResponse>(await this.doRPCRequest("DescribeHtmlResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHtmlResourceResponse({}));
  }

  async describeHtmlResource(request: DescribeHtmlResourceRequest): Promise<DescribeHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHtmlResourceWithOptions(request, runtime);
  }

  async describeLiveAsrConfigWithOptions(request: DescribeLiveAsrConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAsrConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveAsrConfigResponse>(await this.doRPCRequest("DescribeLiveAsrConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveAsrConfigResponse({}));
  }

  async describeLiveAsrConfig(request: DescribeLiveAsrConfigRequest): Promise<DescribeLiveAsrConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAsrConfigWithOptions(request, runtime);
  }

  async describeLiveAudioAuditConfigWithOptions(request: DescribeLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveAudioAuditConfigResponse>(await this.doRPCRequest("DescribeLiveAudioAuditConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveAudioAuditConfigResponse({}));
  }

  async describeLiveAudioAuditConfig(request: DescribeLiveAudioAuditConfigRequest): Promise<DescribeLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async describeLiveAudioAuditNotifyConfigWithOptions(request: DescribeLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveAudioAuditNotifyConfigResponse>(await this.doRPCRequest("DescribeLiveAudioAuditNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveAudioAuditNotifyConfigResponse({}));
  }

  async describeLiveAudioAuditNotifyConfig(request: DescribeLiveAudioAuditNotifyConfigRequest): Promise<DescribeLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveCertificateDetailWithOptions(request: DescribeLiveCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveCertificateDetailResponse>(await this.doRPCRequest("DescribeLiveCertificateDetail", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveCertificateDetailResponse({}));
  }

  async describeLiveCertificateDetail(request: DescribeLiveCertificateDetailRequest): Promise<DescribeLiveCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveCertificateDetailWithOptions(request, runtime);
  }

  async describeLiveCertificateListWithOptions(request: DescribeLiveCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveCertificateListResponse>(await this.doRPCRequest("DescribeLiveCertificateList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveCertificateListResponse({}));
  }

  async describeLiveCertificateList(request: DescribeLiveCertificateListRequest): Promise<DescribeLiveCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveCertificateListWithOptions(request, runtime);
  }

  async describeLiveDetectNotifyConfigWithOptions(request: DescribeLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDetectNotifyConfigResponse>(await this.doRPCRequest("DescribeLiveDetectNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDetectNotifyConfigResponse({}));
  }

  async describeLiveDetectNotifyConfig(request: DescribeLiveDetectNotifyConfigRequest): Promise<DescribeLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveDetectPornDataWithOptions(request: DescribeLiveDetectPornDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDetectPornDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDetectPornDataResponse>(await this.doRPCRequest("DescribeLiveDetectPornData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDetectPornDataResponse({}));
  }

  async describeLiveDetectPornData(request: DescribeLiveDetectPornDataRequest): Promise<DescribeLiveDetectPornDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDetectPornDataWithOptions(request, runtime);
  }

  async describeLiveDomainBpsDataWithOptions(request: DescribeLiveDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainBpsDataResponse>(await this.doRPCRequest("DescribeLiveDomainBpsData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainBpsDataResponse({}));
  }

  async describeLiveDomainBpsData(request: DescribeLiveDomainBpsDataRequest): Promise<DescribeLiveDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainBpsDataWithOptions(request, runtime);
  }

  async describeLiveDomainBpsDataByTimeStampWithOptions(request: DescribeLiveDomainBpsDataByTimeStampRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainBpsDataByTimeStampResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainBpsDataByTimeStampResponse>(await this.doRPCRequest("DescribeLiveDomainBpsDataByTimeStamp", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainBpsDataByTimeStampResponse({}));
  }

  async describeLiveDomainBpsDataByTimeStamp(request: DescribeLiveDomainBpsDataByTimeStampRequest): Promise<DescribeLiveDomainBpsDataByTimeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  async describeLiveDomainCertificateInfoWithOptions(request: DescribeLiveDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeLiveDomainCertificateInfo", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainCertificateInfoResponse({}));
  }

  async describeLiveDomainCertificateInfo(request: DescribeLiveDomainCertificateInfoRequest): Promise<DescribeLiveDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeLiveDomainConfigsWithOptions(request: DescribeLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainConfigsResponse>(await this.doRPCRequest("DescribeLiveDomainConfigs", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainConfigsResponse({}));
  }

  async describeLiveDomainConfigs(request: DescribeLiveDomainConfigsRequest): Promise<DescribeLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainConfigsWithOptions(request, runtime);
  }

  async describeLiveDomainDetailWithOptions(request: DescribeLiveDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainDetailResponse>(await this.doRPCRequest("DescribeLiveDomainDetail", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainDetailResponse({}));
  }

  async describeLiveDomainDetail(request: DescribeLiveDomainDetailRequest): Promise<DescribeLiveDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainDetailWithOptions(request, runtime);
  }

  async describeLiveDomainFrameRateAndBitRateDataWithOptions(request: DescribeLiveDomainFrameRateAndBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainFrameRateAndBitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainFrameRateAndBitRateDataResponse>(await this.doRPCRequest("DescribeLiveDomainFrameRateAndBitRateData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainFrameRateAndBitRateDataResponse({}));
  }

  async describeLiveDomainFrameRateAndBitRateData(request: DescribeLiveDomainFrameRateAndBitRateDataRequest): Promise<DescribeLiveDomainFrameRateAndBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainFrameRateAndBitRateDataWithOptions(request, runtime);
  }

  async describeLiveDomainLimitWithOptions(request: DescribeLiveDomainLimitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainLimitResponse>(await this.doRPCRequest("DescribeLiveDomainLimit", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainLimitResponse({}));
  }

  async describeLiveDomainLimit(request: DescribeLiveDomainLimitRequest): Promise<DescribeLiveDomainLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainLimitWithOptions(request, runtime);
  }

  async describeLiveDomainMappingWithOptions(request: DescribeLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainMappingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLiveDomainMappingResponse>(await this.doRPCRequest("DescribeLiveDomainMapping", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLiveDomainMappingResponse({}));
  }

  async describeLiveDomainMapping(request: DescribeLiveDomainMappingRequest): Promise<DescribeLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainMappingWithOptions(request, runtime);
  }

  async describeLiveDomainOnlineUserNumWithOptions(request: DescribeLiveDomainOnlineUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainOnlineUserNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainOnlineUserNumResponse>(await this.doRPCRequest("DescribeLiveDomainOnlineUserNum", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainOnlineUserNumResponse({}));
  }

  async describeLiveDomainOnlineUserNum(request: DescribeLiveDomainOnlineUserNumRequest): Promise<DescribeLiveDomainOnlineUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainOnlineUserNumWithOptions(request, runtime);
  }

  async describeLiveDomainPushBpsDataWithOptions(request: DescribeLiveDomainPushBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainPushBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainPushBpsDataResponse>(await this.doRPCRequest("DescribeLiveDomainPushBpsData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainPushBpsDataResponse({}));
  }

  async describeLiveDomainPushBpsData(request: DescribeLiveDomainPushBpsDataRequest): Promise<DescribeLiveDomainPushBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainPushBpsDataWithOptions(request, runtime);
  }

  async describeLiveDomainPushTrafficDataWithOptions(request: DescribeLiveDomainPushTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainPushTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainPushTrafficDataResponse>(await this.doRPCRequest("DescribeLiveDomainPushTrafficData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainPushTrafficDataResponse({}));
  }

  async describeLiveDomainPushTrafficData(request: DescribeLiveDomainPushTrafficDataRequest): Promise<DescribeLiveDomainPushTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainPushTrafficDataWithOptions(request, runtime);
  }

  async describeLiveDomainPvUvDataWithOptions(request: DescribeLiveDomainPvUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainPvUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainPvUvDataResponse>(await this.doRPCRequest("DescribeLiveDomainPvUvData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainPvUvDataResponse({}));
  }

  async describeLiveDomainPvUvData(request: DescribeLiveDomainPvUvDataRequest): Promise<DescribeLiveDomainPvUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainPvUvDataWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeBpsDataWithOptions(request: DescribeLiveDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLiveDomainRealTimeBpsDataResponse>(await this.doRPCRequest("DescribeLiveDomainRealTimeBpsData", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLiveDomainRealTimeBpsDataResponse({}));
  }

  async describeLiveDomainRealTimeBpsData(request: DescribeLiveDomainRealTimeBpsDataRequest): Promise<DescribeLiveDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeHttpCodeDataWithOptions(request: DescribeLiveDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainRealTimeHttpCodeDataResponse>(await this.doRPCRequest("DescribeLiveDomainRealTimeHttpCodeData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainRealTimeHttpCodeDataResponse({}));
  }

  async describeLiveDomainRealTimeHttpCodeData(request: DescribeLiveDomainRealTimeHttpCodeDataRequest): Promise<DescribeLiveDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  async describeLiveDomainRealtimeLogDeliveryWithOptions(request: DescribeLiveDomainRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLiveDomainRealtimeLogDeliveryResponse>(await this.doRPCRequest("DescribeLiveDomainRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLiveDomainRealtimeLogDeliveryResponse({}));
  }

  async describeLiveDomainRealtimeLogDelivery(request: DescribeLiveDomainRealtimeLogDeliveryRequest): Promise<DescribeLiveDomainRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeTrafficDataWithOptions(request: DescribeLiveDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainRealTimeTrafficDataResponse>(await this.doRPCRequest("DescribeLiveDomainRealTimeTrafficData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainRealTimeTrafficDataResponse({}));
  }

  async describeLiveDomainRealTimeTrafficData(request: DescribeLiveDomainRealTimeTrafficDataRequest): Promise<DescribeLiveDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  async describeLiveDomainRecordDataWithOptions(request: DescribeLiveDomainRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRecordDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainRecordDataResponse>(await this.doRPCRequest("DescribeLiveDomainRecordData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainRecordDataResponse({}));
  }

  async describeLiveDomainRecordData(request: DescribeLiveDomainRecordDataRequest): Promise<DescribeLiveDomainRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRecordDataWithOptions(request, runtime);
  }

  async describeLiveDomainSnapshotDataWithOptions(request: DescribeLiveDomainSnapshotDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainSnapshotDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainSnapshotDataResponse>(await this.doRPCRequest("DescribeLiveDomainSnapshotData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainSnapshotDataResponse({}));
  }

  async describeLiveDomainSnapshotData(request: DescribeLiveDomainSnapshotDataRequest): Promise<DescribeLiveDomainSnapshotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainSnapshotDataWithOptions(request, runtime);
  }

  async describeLiveDomainTimeShiftDataWithOptions(request: DescribeLiveDomainTimeShiftDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTimeShiftDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainTimeShiftDataResponse>(await this.doRPCRequest("DescribeLiveDomainTimeShiftData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainTimeShiftDataResponse({}));
  }

  async describeLiveDomainTimeShiftData(request: DescribeLiveDomainTimeShiftDataRequest): Promise<DescribeLiveDomainTimeShiftDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTimeShiftDataWithOptions(request, runtime);
  }

  async describeLiveDomainTrafficDataWithOptions(request: DescribeLiveDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainTrafficDataResponse>(await this.doRPCRequest("DescribeLiveDomainTrafficData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainTrafficDataResponse({}));
  }

  async describeLiveDomainTrafficData(request: DescribeLiveDomainTrafficDataRequest): Promise<DescribeLiveDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTrafficDataWithOptions(request, runtime);
  }

  async describeLiveDomainTranscodeDataWithOptions(request: DescribeLiveDomainTranscodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTranscodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveDomainTranscodeDataResponse>(await this.doRPCRequest("DescribeLiveDomainTranscodeData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveDomainTranscodeDataResponse({}));
  }

  async describeLiveDomainTranscodeData(request: DescribeLiveDomainTranscodeDataRequest): Promise<DescribeLiveDomainTranscodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTranscodeDataWithOptions(request, runtime);
  }

  async describeLiveLazyPullStreamConfigWithOptions(request: DescribeLiveLazyPullStreamConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveLazyPullStreamConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveLazyPullStreamConfigResponse>(await this.doRPCRequest("DescribeLiveLazyPullStreamConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveLazyPullStreamConfigResponse({}));
  }

  async describeLiveLazyPullStreamConfig(request: DescribeLiveLazyPullStreamConfigRequest): Promise<DescribeLiveLazyPullStreamConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveLazyPullStreamConfigWithOptions(request, runtime);
  }

  async describeLivePullStreamConfigWithOptions(request: DescribeLivePullStreamConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLivePullStreamConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLivePullStreamConfigResponse>(await this.doRPCRequest("DescribeLivePullStreamConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLivePullStreamConfigResponse({}));
  }

  async describeLivePullStreamConfig(request: DescribeLivePullStreamConfigRequest): Promise<DescribeLivePullStreamConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLivePullStreamConfigWithOptions(request, runtime);
  }

  async describeLiveRealtimeDeliveryAccWithOptions(request: DescribeLiveRealtimeDeliveryAccRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRealtimeDeliveryAccResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveRealtimeDeliveryAccResponse>(await this.doRPCRequest("DescribeLiveRealtimeDeliveryAcc", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveRealtimeDeliveryAccResponse({}));
  }

  async describeLiveRealtimeDeliveryAcc(request: DescribeLiveRealtimeDeliveryAccRequest): Promise<DescribeLiveRealtimeDeliveryAccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRealtimeDeliveryAccWithOptions(request, runtime);
  }

  async describeLiveRealtimeLogAuthorizedWithOptions(request: DescribeLiveRealtimeLogAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRealtimeLogAuthorizedResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLiveRealtimeLogAuthorizedResponse>(await this.doRPCRequest("DescribeLiveRealtimeLogAuthorized", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLiveRealtimeLogAuthorizedResponse({}));
  }

  async describeLiveRealtimeLogAuthorized(request: DescribeLiveRealtimeLogAuthorizedRequest): Promise<DescribeLiveRealtimeLogAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRealtimeLogAuthorizedWithOptions(request, runtime);
  }

  async describeLiveRecordConfigWithOptions(request: DescribeLiveRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveRecordConfigResponse>(await this.doRPCRequest("DescribeLiveRecordConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveRecordConfigResponse({}));
  }

  async describeLiveRecordConfig(request: DescribeLiveRecordConfigRequest): Promise<DescribeLiveRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordConfigWithOptions(request, runtime);
  }

  async describeLiveRecordNotifyConfigWithOptions(request: DescribeLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveRecordNotifyConfigResponse>(await this.doRPCRequest("DescribeLiveRecordNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveRecordNotifyConfigResponse({}));
  }

  async describeLiveRecordNotifyConfig(request: DescribeLiveRecordNotifyConfigRequest): Promise<DescribeLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveRecordVodConfigsWithOptions(request: DescribeLiveRecordVodConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordVodConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveRecordVodConfigsResponse>(await this.doRPCRequest("DescribeLiveRecordVodConfigs", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveRecordVodConfigsResponse({}));
  }

  async describeLiveRecordVodConfigs(request: DescribeLiveRecordVodConfigsRequest): Promise<DescribeLiveRecordVodConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordVodConfigsWithOptions(request, runtime);
  }

  async describeLiveSnapshotConfigWithOptions(request: DescribeLiveSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveSnapshotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveSnapshotConfigResponse>(await this.doRPCRequest("DescribeLiveSnapshotConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveSnapshotConfigResponse({}));
  }

  async describeLiveSnapshotConfig(request: DescribeLiveSnapshotConfigRequest): Promise<DescribeLiveSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveSnapshotConfigWithOptions(request, runtime);
  }

  async describeLiveSnapshotDetectPornConfigWithOptions(request: DescribeLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveSnapshotDetectPornConfigResponse>(await this.doRPCRequest("DescribeLiveSnapshotDetectPornConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveSnapshotDetectPornConfigResponse({}));
  }

  async describeLiveSnapshotDetectPornConfig(request: DescribeLiveSnapshotDetectPornConfigRequest): Promise<DescribeLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async describeLiveStreamBitRateDataWithOptions(request: DescribeLiveStreamBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamBitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamBitRateDataResponse>(await this.doRPCRequest("DescribeLiveStreamBitRateData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamBitRateDataResponse({}));
  }

  async describeLiveStreamBitRateData(request: DescribeLiveStreamBitRateDataRequest): Promise<DescribeLiveStreamBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamBitRateDataWithOptions(request, runtime);
  }

  async describeLiveStreamCountWithOptions(request: DescribeLiveStreamCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLiveStreamCountResponse>(await this.doRPCRequest("DescribeLiveStreamCount", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLiveStreamCountResponse({}));
  }

  async describeLiveStreamCount(request: DescribeLiveStreamCountRequest): Promise<DescribeLiveStreamCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamCountWithOptions(request, runtime);
  }

  async describeLiveStreamDelayConfigWithOptions(request: DescribeLiveStreamDelayConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamDelayConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamDelayConfigResponse>(await this.doRPCRequest("DescribeLiveStreamDelayConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamDelayConfigResponse({}));
  }

  async describeLiveStreamDelayConfig(request: DescribeLiveStreamDelayConfigRequest): Promise<DescribeLiveStreamDelayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamDelayConfigWithOptions(request, runtime);
  }

  async describeLiveStreamHistoryUserNumWithOptions(request: DescribeLiveStreamHistoryUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamHistoryUserNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamHistoryUserNumResponse>(await this.doRPCRequest("DescribeLiveStreamHistoryUserNum", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamHistoryUserNumResponse({}));
  }

  async describeLiveStreamHistoryUserNum(request: DescribeLiveStreamHistoryUserNumRequest): Promise<DescribeLiveStreamHistoryUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamHistoryUserNumWithOptions(request, runtime);
  }

  async describeLiveStreamOnlineUserNumWithOptions(request: DescribeLiveStreamOnlineUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamOnlineUserNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamOnlineUserNumResponse>(await this.doRPCRequest("DescribeLiveStreamOnlineUserNum", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamOnlineUserNumResponse({}));
  }

  async describeLiveStreamOnlineUserNum(request: DescribeLiveStreamOnlineUserNumRequest): Promise<DescribeLiveStreamOnlineUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamOnlineUserNumWithOptions(request, runtime);
  }

  async describeLiveStreamOptimizedFeatureConfigWithOptions(request: DescribeLiveStreamOptimizedFeatureConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamOptimizedFeatureConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamOptimizedFeatureConfigResponse>(await this.doRPCRequest("DescribeLiveStreamOptimizedFeatureConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamOptimizedFeatureConfigResponse({}));
  }

  async describeLiveStreamOptimizedFeatureConfig(request: DescribeLiveStreamOptimizedFeatureConfigRequest): Promise<DescribeLiveStreamOptimizedFeatureConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamOptimizedFeatureConfigWithOptions(request, runtime);
  }

  async describeLiveStreamRecordContentWithOptions(request: DescribeLiveStreamRecordContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamRecordContentResponse>(await this.doRPCRequest("DescribeLiveStreamRecordContent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamRecordContentResponse({}));
  }

  async describeLiveStreamRecordContent(request: DescribeLiveStreamRecordContentRequest): Promise<DescribeLiveStreamRecordContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordContentWithOptions(request, runtime);
  }

  async describeLiveStreamRecordIndexFileWithOptions(request: DescribeLiveStreamRecordIndexFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordIndexFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamRecordIndexFileResponse>(await this.doRPCRequest("DescribeLiveStreamRecordIndexFile", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamRecordIndexFileResponse({}));
  }

  async describeLiveStreamRecordIndexFile(request: DescribeLiveStreamRecordIndexFileRequest): Promise<DescribeLiveStreamRecordIndexFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordIndexFileWithOptions(request, runtime);
  }

  async describeLiveStreamRecordIndexFilesWithOptions(request: DescribeLiveStreamRecordIndexFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordIndexFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamRecordIndexFilesResponse>(await this.doRPCRequest("DescribeLiveStreamRecordIndexFiles", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamRecordIndexFilesResponse({}));
  }

  async describeLiveStreamRecordIndexFiles(request: DescribeLiveStreamRecordIndexFilesRequest): Promise<DescribeLiveStreamRecordIndexFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordIndexFilesWithOptions(request, runtime);
  }

  async describeLiveStreamsBlockListWithOptions(request: DescribeLiveStreamsBlockListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsBlockListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsBlockListResponse>(await this.doRPCRequest("DescribeLiveStreamsBlockList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsBlockListResponse({}));
  }

  async describeLiveStreamsBlockList(request: DescribeLiveStreamsBlockListRequest): Promise<DescribeLiveStreamsBlockListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsBlockListWithOptions(request, runtime);
  }

  async describeLiveStreamsControlHistoryWithOptions(request: DescribeLiveStreamsControlHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsControlHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsControlHistoryResponse>(await this.doRPCRequest("DescribeLiveStreamsControlHistory", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsControlHistoryResponse({}));
  }

  async describeLiveStreamsControlHistory(request: DescribeLiveStreamsControlHistoryRequest): Promise<DescribeLiveStreamsControlHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsControlHistoryWithOptions(request, runtime);
  }

  async describeLiveStreamsFrameRateAndBitRateDataWithOptions(request: DescribeLiveStreamsFrameRateAndBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsFrameRateAndBitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsFrameRateAndBitRateDataResponse>(await this.doRPCRequest("DescribeLiveStreamsFrameRateAndBitRateData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsFrameRateAndBitRateDataResponse({}));
  }

  async describeLiveStreamsFrameRateAndBitRateData(request: DescribeLiveStreamsFrameRateAndBitRateDataRequest): Promise<DescribeLiveStreamsFrameRateAndBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsFrameRateAndBitRateDataWithOptions(request, runtime);
  }

  async describeLiveStreamSnapshotInfoWithOptions(request: DescribeLiveStreamSnapshotInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamSnapshotInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamSnapshotInfoResponse>(await this.doRPCRequest("DescribeLiveStreamSnapshotInfo", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamSnapshotInfoResponse({}));
  }

  async describeLiveStreamSnapshotInfo(request: DescribeLiveStreamSnapshotInfoRequest): Promise<DescribeLiveStreamSnapshotInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamSnapshotInfoWithOptions(request, runtime);
  }

  async describeLiveStreamsNotifyUrlConfigWithOptions(request: DescribeLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("DescribeLiveStreamsNotifyUrlConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsNotifyUrlConfigResponse({}));
  }

  async describeLiveStreamsNotifyUrlConfig(request: DescribeLiveStreamsNotifyUrlConfigRequest): Promise<DescribeLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async describeLiveStreamsOnlineListWithOptions(request: DescribeLiveStreamsOnlineListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsOnlineListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsOnlineListResponse>(await this.doRPCRequest("DescribeLiveStreamsOnlineList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsOnlineListResponse({}));
  }

  async describeLiveStreamsOnlineList(request: DescribeLiveStreamsOnlineListRequest): Promise<DescribeLiveStreamsOnlineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsOnlineListWithOptions(request, runtime);
  }

  async describeLiveStreamsPublishListWithOptions(request: DescribeLiveStreamsPublishListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsPublishListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamsPublishListResponse>(await this.doRPCRequest("DescribeLiveStreamsPublishList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamsPublishListResponse({}));
  }

  async describeLiveStreamsPublishList(request: DescribeLiveStreamsPublishListRequest): Promise<DescribeLiveStreamsPublishListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsPublishListWithOptions(request, runtime);
  }

  async describeLiveStreamTranscodeInfoWithOptions(request: DescribeLiveStreamTranscodeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamTranscodeInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamTranscodeInfoResponse>(await this.doRPCRequest("DescribeLiveStreamTranscodeInfo", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamTranscodeInfoResponse({}));
  }

  async describeLiveStreamTranscodeInfo(request: DescribeLiveStreamTranscodeInfoRequest): Promise<DescribeLiveStreamTranscodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamTranscodeInfoWithOptions(request, runtime);
  }

  async describeLiveStreamTranscodeStreamNumWithOptions(request: DescribeLiveStreamTranscodeStreamNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamTranscodeStreamNumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveStreamTranscodeStreamNumResponse>(await this.doRPCRequest("DescribeLiveStreamTranscodeStreamNum", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveStreamTranscodeStreamNumResponse({}));
  }

  async describeLiveStreamTranscodeStreamNum(request: DescribeLiveStreamTranscodeStreamNumRequest): Promise<DescribeLiveStreamTranscodeStreamNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamTranscodeStreamNumWithOptions(request, runtime);
  }

  async describeLiveTagResourcesWithOptions(request: DescribeLiveTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveTagResourcesResponse>(await this.doRPCRequest("DescribeLiveTagResources", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveTagResourcesResponse({}));
  }

  async describeLiveTagResources(request: DescribeLiveTagResourcesRequest): Promise<DescribeLiveTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveTagResourcesWithOptions(request, runtime);
  }

  async describeLiveTopDomainsByFlowWithOptions(request: DescribeLiveTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveTopDomainsByFlowResponse>(await this.doRPCRequest("DescribeLiveTopDomainsByFlow", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveTopDomainsByFlowResponse({}));
  }

  async describeLiveTopDomainsByFlow(request: DescribeLiveTopDomainsByFlowRequest): Promise<DescribeLiveTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeLiveUserDomainsWithOptions(request: DescribeLiveUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveUserDomainsResponse>(await this.doRPCRequest("DescribeLiveUserDomains", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveUserDomainsResponse({}));
  }

  async describeLiveUserDomains(request: DescribeLiveUserDomainsRequest): Promise<DescribeLiveUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveUserDomainsWithOptions(request, runtime);
  }

  async describeLiveUserTagsWithOptions(request: DescribeLiveUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveUserTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveUserTagsResponse>(await this.doRPCRequest("DescribeLiveUserTags", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveUserTagsResponse({}));
  }

  async describeLiveUserTags(request: DescribeLiveUserTagsRequest): Promise<DescribeLiveUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveUserTagsWithOptions(request, runtime);
  }

  async describeLiveVerifyContentWithOptions(request: DescribeLiveVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveVerifyContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLiveVerifyContentResponse>(await this.doRPCRequest("DescribeLiveVerifyContent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLiveVerifyContentResponse({}));
  }

  async describeLiveVerifyContent(request: DescribeLiveVerifyContentRequest): Promise<DescribeLiveVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveVerifyContentWithOptions(request, runtime);
  }

  async describeMixStreamListWithOptions(request: DescribeMixStreamListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMixStreamListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMixStreamListResponse>(await this.doRPCRequest("DescribeMixStreamList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMixStreamListResponse({}));
  }

  async describeMixStreamList(request: DescribeMixStreamListRequest): Promise<DescribeMixStreamListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMixStreamListWithOptions(request, runtime);
  }

  async describeRecordWithOptions(request: DescribeRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordResponse>(await this.doRPCRequest("DescribeRecord", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordResponse({}));
  }

  async describeRecord(request: DescribeRecordRequest): Promise<DescribeRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordWithOptions(request, runtime);
  }

  async describeRecordsWithOptions(request: DescribeRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordsResponse>(await this.doRPCRequest("DescribeRecords", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordsResponse({}));
  }

  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  async describeRoomKickoutUserListWithOptions(request: DescribeRoomKickoutUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomKickoutUserListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoomKickoutUserListResponse>(await this.doRPCRequest("DescribeRoomKickoutUserList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoomKickoutUserListResponse({}));
  }

  async describeRoomKickoutUserList(request: DescribeRoomKickoutUserListRequest): Promise<DescribeRoomKickoutUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomKickoutUserListWithOptions(request, runtime);
  }

  async describeRoomListWithOptions(request: DescribeRoomListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoomListResponse>(await this.doRPCRequest("DescribeRoomList", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoomListResponse({}));
  }

  async describeRoomList(request: DescribeRoomListRequest): Promise<DescribeRoomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomListWithOptions(request, runtime);
  }

  async describeRoomStatusWithOptions(request: DescribeRoomStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoomStatusResponse>(await this.doRPCRequest("DescribeRoomStatus", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoomStatusResponse({}));
  }

  async describeRoomStatus(request: DescribeRoomStatusRequest): Promise<DescribeRoomStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomStatusWithOptions(request, runtime);
  }

  async describeUpBpsPeakDataWithOptions(request: DescribeUpBpsPeakDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpBpsPeakDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpBpsPeakDataResponse>(await this.doRPCRequest("DescribeUpBpsPeakData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpBpsPeakDataResponse({}));
  }

  async describeUpBpsPeakData(request: DescribeUpBpsPeakDataRequest): Promise<DescribeUpBpsPeakDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpBpsPeakDataWithOptions(request, runtime);
  }

  async describeUpBpsPeakOfLineWithOptions(request: DescribeUpBpsPeakOfLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpBpsPeakOfLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpBpsPeakOfLineResponse>(await this.doRPCRequest("DescribeUpBpsPeakOfLine", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpBpsPeakOfLineResponse({}));
  }

  async describeUpBpsPeakOfLine(request: DescribeUpBpsPeakOfLineRequest): Promise<DescribeUpBpsPeakOfLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpBpsPeakOfLineWithOptions(request, runtime);
  }

  async describeUpPeakPublishStreamDataWithOptions(request: DescribeUpPeakPublishStreamDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpPeakPublishStreamDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpPeakPublishStreamDataResponse>(await this.doRPCRequest("DescribeUpPeakPublishStreamData", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpPeakPublishStreamDataResponse({}));
  }

  async describeUpPeakPublishStreamData(request: DescribeUpPeakPublishStreamDataRequest): Promise<DescribeUpPeakPublishStreamDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  async disableLiveRealtimeLogDeliveryWithOptions(request: DisableLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DisableLiveRealtimeLogDeliveryResponse>(await this.doRPCRequest("DisableLiveRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new DisableLiveRealtimeLogDeliveryResponse({}));
  }

  async disableLiveRealtimeLogDelivery(request: DisableLiveRealtimeLogDeliveryRequest): Promise<DisableLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async editHtmlResourceWithOptions(request: EditHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<EditHtmlResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditHtmlResourceResponse>(await this.doRPCRequest("EditHtmlResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new EditHtmlResourceResponse({}));
  }

  async editHtmlResource(request: EditHtmlResourceRequest): Promise<EditHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editHtmlResourceWithOptions(request, runtime);
  }

  async effectCasterUrgentWithOptions(request: EffectCasterUrgentRequest, runtime: $Util.RuntimeOptions): Promise<EffectCasterUrgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EffectCasterUrgentResponse>(await this.doRPCRequest("EffectCasterUrgent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new EffectCasterUrgentResponse({}));
  }

  async effectCasterUrgent(request: EffectCasterUrgentRequest): Promise<EffectCasterUrgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.effectCasterUrgentWithOptions(request, runtime);
  }

  async effectCasterVideoResourceWithOptions(request: EffectCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<EffectCasterVideoResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EffectCasterVideoResourceResponse>(await this.doRPCRequest("EffectCasterVideoResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new EffectCasterVideoResourceResponse({}));
  }

  async effectCasterVideoResource(request: EffectCasterVideoResourceRequest): Promise<EffectCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.effectCasterVideoResourceWithOptions(request, runtime);
  }

  async enableLiveRealtimeLogDeliveryWithOptions(request: EnableLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<EnableLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EnableLiveRealtimeLogDeliveryResponse>(await this.doRPCRequest("EnableLiveRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new EnableLiveRealtimeLogDeliveryResponse({}));
  }

  async enableLiveRealtimeLogDelivery(request: EnableLiveRealtimeLogDeliveryRequest): Promise<EnableLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async forbidLiveStreamWithOptions(request: ForbidLiveStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidLiveStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ForbidLiveStreamResponse>(await this.doRPCRequest("ForbidLiveStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ForbidLiveStreamResponse({}));
  }

  async forbidLiveStream(request: ForbidLiveStreamRequest): Promise<ForbidLiveStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidLiveStreamWithOptions(request, runtime);
  }

  async forbidPushStreamWithOptions(request: ForbidPushStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidPushStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ForbidPushStreamResponse>(await this.doRPCRequest("ForbidPushStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ForbidPushStreamResponse({}));
  }

  async forbidPushStream(request: ForbidPushStreamRequest): Promise<ForbidPushStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidPushStreamWithOptions(request, runtime);
  }

  async joinBoardWithOptions(request: JoinBoardRequest, runtime: $Util.RuntimeOptions): Promise<JoinBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinBoardResponse>(await this.doRPCRequest("JoinBoard", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new JoinBoardResponse({}));
  }

  async joinBoard(request: JoinBoardRequest): Promise<JoinBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinBoardWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryWithOptions(request: ListLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListLiveRealtimeLogDeliveryResponse>(await this.doRPCRequest("ListLiveRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListLiveRealtimeLogDeliveryResponse({}));
  }

  async listLiveRealtimeLogDelivery(request: ListLiveRealtimeLogDeliveryRequest): Promise<ListLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryDomainsWithOptions(request: ListLiveRealtimeLogDeliveryDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryDomainsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListLiveRealtimeLogDeliveryDomainsResponse>(await this.doRPCRequest("ListLiveRealtimeLogDeliveryDomains", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListLiveRealtimeLogDeliveryDomainsResponse({}));
  }

  async listLiveRealtimeLogDeliveryDomains(request: ListLiveRealtimeLogDeliveryDomainsRequest): Promise<ListLiveRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryInfosWithOptions(request: ListLiveRealtimeLogDeliveryInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryInfosResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListLiveRealtimeLogDeliveryInfosResponse>(await this.doRPCRequest("ListLiveRealtimeLogDeliveryInfos", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListLiveRealtimeLogDeliveryInfosResponse({}));
  }

  async listLiveRealtimeLogDeliveryInfos(request: ListLiveRealtimeLogDeliveryInfosRequest): Promise<ListLiveRealtimeLogDeliveryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryInfosWithOptions(request, runtime);
  }

  async modifyCasterComponentWithOptions(request: ModifyCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCasterComponentResponse>(await this.doRPCRequest("ModifyCasterComponent", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCasterComponentResponse({}));
  }

  async modifyCasterComponent(request: ModifyCasterComponentRequest): Promise<ModifyCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterComponentWithOptions(request, runtime);
  }

  async modifyCasterEpisodeWithOptions(request: ModifyCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterEpisodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCasterEpisodeResponse>(await this.doRPCRequest("ModifyCasterEpisode", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCasterEpisodeResponse({}));
  }

  async modifyCasterEpisode(request: ModifyCasterEpisodeRequest): Promise<ModifyCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterEpisodeWithOptions(request, runtime);
  }

  async modifyCasterLayoutWithOptions(request: ModifyCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterLayoutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCasterLayoutResponse>(await this.doRPCRequest("ModifyCasterLayout", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCasterLayoutResponse({}));
  }

  async modifyCasterLayout(request: ModifyCasterLayoutRequest): Promise<ModifyCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterLayoutWithOptions(request, runtime);
  }

  async modifyCasterProgramWithOptions(request: ModifyCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterProgramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCasterProgramResponse>(await this.doRPCRequest("ModifyCasterProgram", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCasterProgramResponse({}));
  }

  async modifyCasterProgram(request: ModifyCasterProgramRequest): Promise<ModifyCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterProgramWithOptions(request, runtime);
  }

  async modifyCasterVideoResourceWithOptions(request: ModifyCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterVideoResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCasterVideoResourceResponse>(await this.doRPCRequest("ModifyCasterVideoResource", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCasterVideoResourceResponse({}));
  }

  async modifyCasterVideoResource(request: ModifyCasterVideoResourceRequest): Promise<ModifyCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterVideoResourceWithOptions(request, runtime);
  }

  async modifyLiveDomainSchdmByPropertyWithOptions(request: ModifyLiveDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLiveDomainSchdmByPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLiveDomainSchdmByPropertyResponse>(await this.doRPCRequest("ModifyLiveDomainSchdmByProperty", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLiveDomainSchdmByPropertyResponse({}));
  }

  async modifyLiveDomainSchdmByProperty(request: ModifyLiveDomainSchdmByPropertyRequest): Promise<ModifyLiveDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLiveDomainSchdmByPropertyWithOptions(request, runtime);
  }

  async modifyLiveRealtimeLogDeliveryWithOptions(request: ModifyLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyLiveRealtimeLogDeliveryResponse>(await this.doRPCRequest("ModifyLiveRealtimeLogDelivery", "2016-11-01", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyLiveRealtimeLogDeliveryResponse({}));
  }

  async modifyLiveRealtimeLogDelivery(request: ModifyLiveRealtimeLogDeliveryRequest): Promise<ModifyLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async realTimeRecordCommandWithOptions(request: RealTimeRecordCommandRequest, runtime: $Util.RuntimeOptions): Promise<RealTimeRecordCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RealTimeRecordCommandResponse>(await this.doRPCRequest("RealTimeRecordCommand", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RealTimeRecordCommandResponse({}));
  }

  async realTimeRecordCommand(request: RealTimeRecordCommandRequest): Promise<RealTimeRecordCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.realTimeRecordCommandWithOptions(request, runtime);
  }

  async realTimeSnapshotCommandWithOptions(request: RealTimeSnapshotCommandRequest, runtime: $Util.RuntimeOptions): Promise<RealTimeSnapshotCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RealTimeSnapshotCommandResponse>(await this.doRPCRequest("RealTimeSnapshotCommand", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RealTimeSnapshotCommandResponse({}));
  }

  async realTimeSnapshotCommand(request: RealTimeSnapshotCommandRequest): Promise<RealTimeSnapshotCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.realTimeSnapshotCommandWithOptions(request, runtime);
  }

  async resumeLiveStreamWithOptions(request: ResumeLiveStreamRequest, runtime: $Util.RuntimeOptions): Promise<ResumeLiveStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeLiveStreamResponse>(await this.doRPCRequest("ResumeLiveStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeLiveStreamResponse({}));
  }

  async resumeLiveStream(request: ResumeLiveStreamRequest): Promise<ResumeLiveStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeLiveStreamWithOptions(request, runtime);
  }

  async sendRoomNotificationWithOptions(request: SendRoomNotificationRequest, runtime: $Util.RuntimeOptions): Promise<SendRoomNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendRoomNotificationResponse>(await this.doRPCRequest("SendRoomNotification", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendRoomNotificationResponse({}));
  }

  async sendRoomNotification(request: SendRoomNotificationRequest): Promise<SendRoomNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendRoomNotificationWithOptions(request, runtime);
  }

  async sendRoomUserNotificationWithOptions(request: SendRoomUserNotificationRequest, runtime: $Util.RuntimeOptions): Promise<SendRoomUserNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendRoomUserNotificationResponse>(await this.doRPCRequest("SendRoomUserNotification", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendRoomUserNotificationResponse({}));
  }

  async sendRoomUserNotification(request: SendRoomUserNotificationRequest): Promise<SendRoomUserNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendRoomUserNotificationWithOptions(request, runtime);
  }

  async setBoardCallbackWithOptions(request: SetBoardCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetBoardCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetBoardCallbackResponse>(await this.doRPCRequest("SetBoardCallback", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetBoardCallbackResponse({}));
  }

  async setBoardCallback(request: SetBoardCallbackRequest): Promise<SetBoardCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBoardCallbackWithOptions(request, runtime);
  }

  async setCasterChannelWithOptions(request: SetCasterChannelRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCasterChannelResponse>(await this.doRPCRequest("SetCasterChannel", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetCasterChannelResponse({}));
  }

  async setCasterChannel(request: SetCasterChannelRequest): Promise<SetCasterChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterChannelWithOptions(request, runtime);
  }

  async setCasterConfigWithOptions(request: SetCasterConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCasterConfigResponse>(await this.doRPCRequest("SetCasterConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetCasterConfigResponse({}));
  }

  async setCasterConfig(request: SetCasterConfigRequest): Promise<SetCasterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterConfigWithOptions(request, runtime);
  }

  async setCasterSceneConfigWithOptions(request: SetCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterSceneConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCasterSceneConfigResponse>(await this.doRPCRequest("SetCasterSceneConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetCasterSceneConfigResponse({}));
  }

  async setCasterSceneConfig(request: SetCasterSceneConfigRequest): Promise<SetCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterSceneConfigWithOptions(request, runtime);
  }

  async setCasterSyncGroupWithOptions(request: SetCasterSyncGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterSyncGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCasterSyncGroupResponse>(await this.doRPCRequest("SetCasterSyncGroup", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetCasterSyncGroupResponse({}));
  }

  async setCasterSyncGroup(request: SetCasterSyncGroupRequest): Promise<SetCasterSyncGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterSyncGroupWithOptions(request, runtime);
  }

  async setLiveDomainCertificateWithOptions(request: SetLiveDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLiveDomainCertificateResponse>(await this.doRPCRequest("SetLiveDomainCertificate", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetLiveDomainCertificateResponse({}));
  }

  async setLiveDomainCertificate(request: SetLiveDomainCertificateRequest): Promise<SetLiveDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveDomainCertificateWithOptions(request, runtime);
  }

  async setLiveLazyPullStreamInfoConfigWithOptions(request: SetLiveLazyPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveLazyPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLiveLazyPullStreamInfoConfigResponse>(await this.doRPCRequest("SetLiveLazyPullStreamInfoConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetLiveLazyPullStreamInfoConfigResponse({}));
  }

  async setLiveLazyPullStreamInfoConfig(request: SetLiveLazyPullStreamInfoConfigRequest): Promise<SetLiveLazyPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveLazyPullStreamInfoConfigWithOptions(request, runtime);
  }

  async setLiveStreamDelayConfigWithOptions(request: SetLiveStreamDelayConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamDelayConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLiveStreamDelayConfigResponse>(await this.doRPCRequest("SetLiveStreamDelayConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetLiveStreamDelayConfigResponse({}));
  }

  async setLiveStreamDelayConfig(request: SetLiveStreamDelayConfigRequest): Promise<SetLiveStreamDelayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamDelayConfigWithOptions(request, runtime);
  }

  async setLiveStreamOptimizedFeatureConfigWithOptions(request: SetLiveStreamOptimizedFeatureConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamOptimizedFeatureConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLiveStreamOptimizedFeatureConfigResponse>(await this.doRPCRequest("SetLiveStreamOptimizedFeatureConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetLiveStreamOptimizedFeatureConfigResponse({}));
  }

  async setLiveStreamOptimizedFeatureConfig(request: SetLiveStreamOptimizedFeatureConfigRequest): Promise<SetLiveStreamOptimizedFeatureConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamOptimizedFeatureConfigWithOptions(request, runtime);
  }

  async setLiveStreamsNotifyUrlConfigWithOptions(request: SetLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetLiveStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("SetLiveStreamsNotifyUrlConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetLiveStreamsNotifyUrlConfigResponse({}));
  }

  async setLiveStreamsNotifyUrlConfig(request: SetLiveStreamsNotifyUrlConfigRequest): Promise<SetLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async startBoardRecordWithOptions(request: StartBoardRecordRequest, runtime: $Util.RuntimeOptions): Promise<StartBoardRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartBoardRecordResponse>(await this.doRPCRequest("StartBoardRecord", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartBoardRecordResponse({}));
  }

  async startBoardRecord(request: StartBoardRecordRequest): Promise<StartBoardRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBoardRecordWithOptions(request, runtime);
  }

  async startCasterWithOptions(request: StartCasterRequest, runtime: $Util.RuntimeOptions): Promise<StartCasterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCasterResponse>(await this.doRPCRequest("StartCaster", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartCasterResponse({}));
  }

  async startCaster(request: StartCasterRequest): Promise<StartCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCasterWithOptions(request, runtime);
  }

  async startCasterSceneWithOptions(request: StartCasterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartCasterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCasterSceneResponse>(await this.doRPCRequest("StartCasterScene", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartCasterSceneResponse({}));
  }

  async startCasterScene(request: StartCasterSceneRequest): Promise<StartCasterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCasterSceneWithOptions(request, runtime);
  }

  async startLiveDomainWithOptions(request: StartLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartLiveDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartLiveDomainResponse>(await this.doRPCRequest("StartLiveDomain", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartLiveDomainResponse({}));
  }

  async startLiveDomain(request: StartLiveDomainRequest): Promise<StartLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLiveDomainWithOptions(request, runtime);
  }

  async startLiveIndexWithOptions(request: StartLiveIndexRequest, runtime: $Util.RuntimeOptions): Promise<StartLiveIndexResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartLiveIndexResponse>(await this.doRPCRequest("StartLiveIndex", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartLiveIndexResponse({}));
  }

  async startLiveIndex(request: StartLiveIndexRequest): Promise<StartLiveIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLiveIndexWithOptions(request, runtime);
  }

  async stopCasterWithOptions(request: StopCasterRequest, runtime: $Util.RuntimeOptions): Promise<StopCasterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopCasterResponse>(await this.doRPCRequest("StopCaster", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopCasterResponse({}));
  }

  async stopCaster(request: StopCasterRequest): Promise<StopCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCasterWithOptions(request, runtime);
  }

  async stopCasterSceneWithOptions(request: StopCasterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopCasterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopCasterSceneResponse>(await this.doRPCRequest("StopCasterScene", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopCasterSceneResponse({}));
  }

  async stopCasterScene(request: StopCasterSceneRequest): Promise<StopCasterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCasterSceneWithOptions(request, runtime);
  }

  async stopLiveDomainWithOptions(request: StopLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLiveDomainResponse>(await this.doRPCRequest("StopLiveDomain", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopLiveDomainResponse({}));
  }

  async stopLiveDomain(request: StopLiveDomainRequest): Promise<StopLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveDomainWithOptions(request, runtime);
  }

  async stopLiveIndexWithOptions(request: StopLiveIndexRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveIndexResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLiveIndexResponse>(await this.doRPCRequest("StopLiveIndex", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopLiveIndexResponse({}));
  }

  async stopLiveIndex(request: StopLiveIndexRequest): Promise<StopLiveIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveIndexWithOptions(request, runtime);
  }

  async tagLiveResourcesWithOptions(request: TagLiveResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagLiveResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagLiveResourcesResponse>(await this.doRPCRequest("TagLiveResources", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagLiveResourcesResponse({}));
  }

  async tagLiveResources(request: TagLiveResourcesRequest): Promise<TagLiveResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagLiveResourcesWithOptions(request, runtime);
  }

  async unTagLiveResourcesWithOptions(request: UnTagLiveResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagLiveResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnTagLiveResourcesResponse>(await this.doRPCRequest("UnTagLiveResources", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnTagLiveResourcesResponse({}));
  }

  async unTagLiveResources(request: UnTagLiveResourcesRequest): Promise<UnTagLiveResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagLiveResourcesWithOptions(request, runtime);
  }

  async updateBoardWithOptions(request: UpdateBoardRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBoardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateBoardResponse>(await this.doRPCRequest("UpdateBoard", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateBoardResponse({}));
  }

  async updateBoard(request: UpdateBoardRequest): Promise<UpdateBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBoardWithOptions(request, runtime);
  }

  async updateBoardCallbackWithOptions(request: UpdateBoardCallbackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBoardCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateBoardCallbackResponse>(await this.doRPCRequest("UpdateBoardCallback", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateBoardCallbackResponse({}));
  }

  async updateBoardCallback(request: UpdateBoardCallbackRequest): Promise<UpdateBoardCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBoardCallbackWithOptions(request, runtime);
  }

  async updateCasterSceneAudioWithOptions(request: UpdateCasterSceneAudioRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCasterSceneAudioResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCasterSceneAudioResponse>(await this.doRPCRequest("UpdateCasterSceneAudio", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCasterSceneAudioResponse({}));
  }

  async updateCasterSceneAudio(request: UpdateCasterSceneAudioRequest): Promise<UpdateCasterSceneAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCasterSceneAudioWithOptions(request, runtime);
  }

  async updateCasterSceneConfigWithOptions(request: UpdateCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCasterSceneConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCasterSceneConfigResponse>(await this.doRPCRequest("UpdateCasterSceneConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCasterSceneConfigResponse({}));
  }

  async updateCasterSceneConfig(request: UpdateCasterSceneConfigRequest): Promise<UpdateCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCasterSceneConfigWithOptions(request, runtime);
  }

  async updateLiveAppSnapshotConfigWithOptions(request: UpdateLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveAppSnapshotConfigResponse>(await this.doRPCRequest("UpdateLiveAppSnapshotConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveAppSnapshotConfigResponse({}));
  }

  async updateLiveAppSnapshotConfig(request: UpdateLiveAppSnapshotConfigRequest): Promise<UpdateLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAppSnapshotConfigWithOptions(request, runtime);
  }

  async updateLiveASRConfigWithOptions(request: UpdateLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveASRConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveASRConfigResponse>(await this.doRPCRequest("UpdateLiveASRConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveASRConfigResponse({}));
  }

  async updateLiveASRConfig(request: UpdateLiveASRConfigRequest): Promise<UpdateLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveASRConfigWithOptions(request, runtime);
  }

  async updateLiveAudioAuditConfigWithOptions(request: UpdateLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveAudioAuditConfigResponse>(await this.doRPCRequest("UpdateLiveAudioAuditConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveAudioAuditConfigResponse({}));
  }

  async updateLiveAudioAuditConfig(request: UpdateLiveAudioAuditConfigRequest): Promise<UpdateLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async updateLiveAudioAuditNotifyConfigWithOptions(request: UpdateLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveAudioAuditNotifyConfigResponse>(await this.doRPCRequest("UpdateLiveAudioAuditNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveAudioAuditNotifyConfigResponse({}));
  }

  async updateLiveAudioAuditNotifyConfig(request: UpdateLiveAudioAuditNotifyConfigRequest): Promise<UpdateLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async updateLiveDetectNotifyConfigWithOptions(request: UpdateLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveDetectNotifyConfigResponse>(await this.doRPCRequest("UpdateLiveDetectNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveDetectNotifyConfigResponse({}));
  }

  async updateLiveDetectNotifyConfig(request: UpdateLiveDetectNotifyConfigRequest): Promise<UpdateLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async updateLiveRecordNotifyConfigWithOptions(request: UpdateLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveRecordNotifyConfigResponse>(await this.doRPCRequest("UpdateLiveRecordNotifyConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveRecordNotifyConfigResponse({}));
  }

  async updateLiveRecordNotifyConfig(request: UpdateLiveRecordNotifyConfigRequest): Promise<UpdateLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async updateLiveSnapshotDetectPornConfigWithOptions(request: UpdateLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveSnapshotDetectPornConfigResponse>(await this.doRPCRequest("UpdateLiveSnapshotDetectPornConfig", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveSnapshotDetectPornConfigResponse({}));
  }

  async updateLiveSnapshotDetectPornConfig(request: UpdateLiveSnapshotDetectPornConfigRequest): Promise<UpdateLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async updateLiveTopLevelDomainWithOptions(request: UpdateLiveTopLevelDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveTopLevelDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLiveTopLevelDomainResponse>(await this.doRPCRequest("UpdateLiveTopLevelDomain", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLiveTopLevelDomainResponse({}));
  }

  async updateLiveTopLevelDomain(request: UpdateLiveTopLevelDomainRequest): Promise<UpdateLiveTopLevelDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveTopLevelDomainWithOptions(request, runtime);
  }

  async updateMixStreamWithOptions(request: UpdateMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMixStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMixStreamResponse>(await this.doRPCRequest("UpdateMixStream", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMixStreamResponse({}));
  }

  async updateMixStream(request: UpdateMixStreamRequest): Promise<UpdateMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMixStreamWithOptions(request, runtime);
  }

  async verifyLiveDomainOwnerWithOptions(request: VerifyLiveDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyLiveDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyLiveDomainOwnerResponse>(await this.doRPCRequest("VerifyLiveDomainOwner", "2016-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyLiveDomainOwnerResponse({}));
  }

  async verifyLiveDomainOwner(request: VerifyLiveDomainOwnerRequest): Promise<VerifyLiveDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyLiveDomainOwnerWithOptions(request, runtime);
  }

}
