// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddLiveASRConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  mnsTopic?: string;
  mnsRegion?: string;
  period?: number;
  httpCallbackURL?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddLiveASRConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveAsrConfigRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAsrConfigResponse extends $tea.Model {
  requestId: string;
  liveAsrConfig: DescribeLiveAsrConfigResponseLiveAsrConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAsrConfig: 'LiveAsrConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAsrConfig: DescribeLiveAsrConfigResponseLiveAsrConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveASRConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveASRConfigResponse extends $tea.Model {
  requestId: string;
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

export class UpdateLiveASRConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  mnsTopic?: string;
  mnsRegion?: string;
  period?: number;
  httpCallbackURL?: string;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateLiveASRConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteMixStreamRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  mixStreamId: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      mixStreamId: 'MixStreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteMixStreamResponse extends $tea.Model {
  requestId: string;
  mixStreamId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mixStreamId: 'MixStreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mixStreamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMixStreamRequest extends $tea.Model {
  domainName: string;
  mixStreamId: string;
  inputStreamList: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      mixStreamId: 'MixStreamId',
      inputStreamList: 'InputStreamList',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateMixStreamResponse extends $tea.Model {
  requestId: string;
  mixStreamId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mixStreamId: 'MixStreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mixStreamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMixStreamRequest extends $tea.Model {
  domainName: string;
  layoutId: string;
  inputStreamList: string;
  outputConfig: string;
  callbackConfig?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      layoutId: 'LayoutId',
      inputStreamList: 'InputStreamList',
      outputConfig: 'OutputConfig',
      callbackConfig: 'CallbackConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateMixStreamResponse extends $tea.Model {
  requestId: string;
  mixStreamId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mixStreamId: 'MixStreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mixStreamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixStreamListRequest extends $tea.Model {
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

export class DescribeMixStreamListResponse extends $tea.Model {
  requestId: string;
  total: number;
  mixStreamList: DescribeMixStreamListResponseMixStreamList[];
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
      mixStreamList: { 'type': 'array', 'itemType': DescribeMixStreamListResponseMixStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRtsLiveStreamTranscodeRequest extends $tea.Model {
  domain: string;
  app: string;
  template: string;
  templateType: string;
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

export class AddRtsLiveStreamTranscodeResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainTimeShiftDataRequest extends $tea.Model {
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainTimeShiftDataResponse extends $tea.Model {
  requestId: string;
  timeShiftData: DescribeLiveDomainTimeShiftDataResponseTimeShiftData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeShiftData: 'TimeShiftData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeShiftData: DescribeLiveDomainTimeShiftDataResponseTimeShiftData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHtmlResourceRequest extends $tea.Model {
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      htmlResourceId: 'string',
      htmlUrl: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHtmlResourceResponse extends $tea.Model {
  requestId: string;
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

export class DescribeHtmlResourceRequest extends $tea.Model {
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  static names(): { [key: string]: string } {
    return {
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      htmlResourceId: 'string',
      htmlUrl: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceResponse extends $tea.Model {
  requestId: string;
  htmlResource: DescribeHtmlResourceResponseHtmlResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      htmlResource: 'HtmlResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      htmlResource: DescribeHtmlResourceResponseHtmlResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlHtmlResourceRequest extends $tea.Model {
  htmlResourceId?: string;
  htmlUrl?: string;
  casterId?: string;
  operate: string;
  static names(): { [key: string]: string } {
    return {
      htmlResourceId: 'HtmlResourceId',
      htmlUrl: 'htmlUrl',
      casterId: 'CasterId',
      operate: 'Operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ControlHtmlResourceResponse extends $tea.Model {
  requestId: string;
  streamId: string;
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

export class EditHtmlResourceRequest extends $tea.Model {
  htmlResourceId?: string;
  casterId?: string;
  htmlUrl?: string;
  htmlContent?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      htmlResourceId: 'HtmlResourceId',
      casterId: 'CasterId',
      htmlUrl: 'HtmlUrl',
      htmlContent: 'htmlContent',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EditHtmlResourceResponse extends $tea.Model {
  requestId: string;
  htmlResourceId: string;
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

export class DescribeLiveUserTagsRequest extends $tea.Model {
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

export class DescribeLiveUserTagsResponse extends $tea.Model {
  requestId: string;
  tags: DescribeLiveUserTagsResponseTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeLiveUserTagsResponseTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagLiveResourcesRequest extends $tea.Model {
  resourceId: string[];
  resourceType: string;
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UnTagLiveResourcesResponse extends $tea.Model {
  requestId: string;
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

export class TagLiveResourcesRequest extends $tea.Model {
  resourceId: string[];
  resourceType: string;
  tag: TagLiveResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagLiveResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagLiveResourcesResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveTagResourcesRequest extends $tea.Model {
  resourceId: string[];
  resourceType: string;
  tag?: DescribeLiveTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponse extends $tea.Model {
  requestId: string;
  tagResources: DescribeLiveTagResourcesResponseTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddLiveAudioAuditConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveAudioAuditConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveAudioAuditConfigRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponse extends $tea.Model {
  requestId: string;
  liveAudioAuditConfigList: DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAudioAuditConfigList: 'LiveAudioAuditConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAudioAuditConfigList: DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateLiveAudioAuditConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  domainName: string;
  callback?: string;
  callbackTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      callback: 'string',
      callbackTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  requestId: string;
  liveAudioAuditNotifyConfigList: DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAudioAuditNotifyConfigList: 'LiveAudioAuditNotifyConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAudioAuditNotifyConfigList: DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditNotifyConfigRequest extends $tea.Model {
  domainName: string;
  callback?: string;
  callbackTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      callback: 'string',
      callbackTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAudioAuditNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainPushTrafficDataRequest extends $tea.Model {
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLiveDomainPushTrafficDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  trafficDataPerInterval: DescribeLiveDomainPushTrafficDataResponseTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeLiveDomainPushTrafficDataResponseTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataRequest extends $tea.Model {
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLiveDomainPushBpsDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  bpsDataPerInterval: DescribeLiveDomainPushBpsDataResponseBpsDataPerInterval;
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
      bpsDataPerInterval: DescribeLiveDomainPushBpsDataResponseBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSyncGroupRequest extends $tea.Model {
  casterId: string;
  syncGroup?: SetCasterSyncGroupRequestSyncGroup[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      syncGroup: 'SyncGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      syncGroup: { 'type': 'array', 'itemType': SetCasterSyncGroupRequestSyncGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCasterSyncGroupResponse extends $tea.Model {
  requestId: string;
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

export class DescribeCasterSyncGroupRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  syncGroups: DescribeCasterSyncGroupResponseSyncGroups;
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
      syncGroups: DescribeCasterSyncGroupResponseSyncGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataRequest extends $tea.Model {
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

export class DescribeLiveDetectPornDataResponse extends $tea.Model {
  requestId: string;
  detectPornData: DescribeLiveDetectPornDataResponseDetectPornData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      detectPornData: 'DetectPornData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      detectPornData: DescribeLiveDetectPornDataResponseDetectPornData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRealTimeLogLogstoreRequest extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
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

export class DeleteLiveRealTimeLogLogstoreResponse extends $tea.Model {
  requestId: string;
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

export class DisableLiveRealtimeLogDeliveryRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLiveRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
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

export class EnableLiveRealtimeLogDeliveryRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLiveRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
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

export class ListLiveRealtimeLogDeliveryDomainsRequest extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
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

export class ListLiveRealtimeLogDeliveryDomainsResponse extends $tea.Model {
  requestId: string;
  content: ListLiveRealtimeLogDeliveryDomainsResponseContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryDomainsResponseContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveRealtimeLogDeliveryRequest extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyLiveRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveRealtimeDeliveryAccRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  interval?: string;
  project?: string;
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      project: 'Project',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveRealtimeDeliveryAccResponse extends $tea.Model {
  requestId: string;
  realTimeDeliveryAccData: DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      realTimeDeliveryAccData: 'RealTimeDeliveryAccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      realTimeDeliveryAccData: DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeLogAuthorizedRequest extends $tea.Model {
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeLogAuthorizedResponse extends $tea.Model {
  requestId: string;
  authorizedStatus: string;
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

export class ListLiveRealtimeLogDeliveryRequest extends $tea.Model {
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
  content: ListLiveRealtimeLogDeliveryResponseContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryResponseContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosRequest extends $tea.Model {
  liveOpenapiReserve?: string;
  static names(): { [key: string]: string } {
    return {
      liveOpenapiReserve: 'LiveOpenapiReserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveOpenapiReserve: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponse extends $tea.Model {
  requestId: string;
  content: ListLiveRealtimeLogDeliveryInfosResponseContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: ListLiveRealtimeLogDeliveryInfosResponseContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealtimeLogDeliveryRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
  project: string;
  region: string;
  logstore: string;
  status: string;
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

export class DeleteLiveRealtimeLogDeliveryRequest extends $tea.Model {
  domainName: string;
  project: string;
  logstore: string;
  region: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteLiveRealtimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
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

export class CreateLiveRealTimeLogDeliveryRequest extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      logstore: 'Logstore',
      region: 'Region',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateLiveRealTimeLogDeliveryResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainLimitRequest extends $tea.Model {
  domainName: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponse extends $tea.Model {
  requestId: string;
  liveDomainLimitList: DescribeLiveDomainLimitResponseLiveDomainLimitList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDomainLimitList: 'LiveDomainLimitList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDomainLimitList: DescribeLiveDomainLimitResponseLiveDomainLimitList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampRequest extends $tea.Model {
  domainName: string;
  timePoint: string;
  ispNames: string;
  locationNames: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      timePoint: 'TimePoint',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainBpsDataByTimeStampResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  timeStamp: string;
  bpsDataList: DescribeLiveDomainBpsDataByTimeStampResponseBpsDataList;
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
      bpsDataList: DescribeLiveDomainBpsDataByTimeStampResponseBpsDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumResponse extends $tea.Model {
  requestId: string;
  total: number;
  transcodedNumber: number;
  untranscodeNumber: number;
  lazyTranscodedNumber: number;
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

export class UpdateLiveTopLevelDomainRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  topLevelDomain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveTopLevelDomainResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainCertificateInfoRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponse extends $tea.Model {
  requestId: string;
  certInfos: DescribeLiveDomainCertificateInfoResponseCertInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certInfos: 'CertInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certInfos: DescribeLiveDomainCertificateInfoResponseCertInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveDomainSchdmByPropertyRequest extends $tea.Model {
  domainName: string;
  property: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      property: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveDomainSchdmByPropertyResponse extends $tea.Model {
  requestId: string;
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

export class SetLiveStreamOptimizedFeatureConfigRequest extends $tea.Model {
  domainName: string;
  configName: string;
  configStatus: string;
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

export class SetLiveStreamOptimizedFeatureConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamOptimizedFeatureConfigRequest extends $tea.Model {
  domainName: string;
  configName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      configName: 'ConfigName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      configName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponse extends $tea.Model {
  requestId: string;
  liveStreamOptimizedFeatureConfigList: DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamOptimizedFeatureConfigList: 'LiveStreamOptimizedFeatureConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamOptimizedFeatureConfigList: DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamDelayConfigRequest extends $tea.Model {
  domainName: string;
  hlsDelay?: number;
  hlsLevel?: string;
  flvDelay?: number;
  flvLevel?: string;
  rtmpDelay?: number;
  rtmpLevel?: string;
  static names(): { [key: string]: string } {
    return {
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

export class SetLiveStreamDelayConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamDelayConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponse extends $tea.Model {
  requestId: string;
  liveStreamHlsDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamHlsDelayConfig;
  liveStreamFlvDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamFlvDelayConfig;
  liveStreamRtmpDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamRtmpDelayConfig;
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
      liveStreamHlsDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamHlsDelayConfig,
      liveStreamFlvDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamFlvDelayConfig,
      liveStreamRtmpDelayConfig: DescribeLiveStreamDelayConfigResponseLiveStreamRtmpDelayConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumRequest extends $tea.Model {
  domainName: string;
  queryTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      queryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponse extends $tea.Model {
  requestId: string;
  streamCount: number;
  userCount: number;
  onlineUserInfo: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamCount: 'StreamCount',
      userCount: 'UserCount',
      onlineUserInfo: 'OnlineUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamCount: 'number',
      userCount: 'number',
      onlineUserInfo: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataRequest extends $tea.Model {
  domainName: string;
  queryTime: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      queryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponse extends $tea.Model {
  requestId: string;
  frameRateAndBitRateInfos: DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBoardCallbackRequest extends $tea.Model {
  appId: string;
  authKey?: string;
  authSwitch?: string;
  callbackEnable: number;
  callbackUri?: string;
  callbackEvents?: string;
  static names(): { [key: string]: string } {
    return {
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

export class SetBoardCallbackResponse extends $tea.Model {
  requestId: string;
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

export class DescribeRecordsRequest extends $tea.Model {
  appId: string;
  pageNum: number;
  pageSize: number;
  recordState?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordState: 'RecordState',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRecordsResponse extends $tea.Model {
  requestId: string;
  records: DescribeRecordsResponseRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordRequest extends $tea.Model {
  appId: string;
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResponse extends $tea.Model {
  requestId: string;
  recordId: string;
  appId: string;
  boardId: number;
  recordStartTime: number;
  startTime: number;
  endTime: number;
  state: number;
  ossPath: string;
  ossBucket: string;
  ossEndpoint: string;
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

export class CompleteBoardRecordRequest extends $tea.Model {
  appId: string;
  recordId: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      recordId: 'RecordId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      recordId: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardRecordResponse extends $tea.Model {
  requestId: string;
  ossPath: string;
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

export class StartBoardRecordRequest extends $tea.Model {
  appId: string;
  boardId: string;
  startTime: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      boardId: 'BoardId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      boardId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBoardRecordResponse extends $tea.Model {
  requestId: string;
  recordId: string;
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

export class ApplyRecordTokenRequest extends $tea.Model {
  appId: string;
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

export class ApplyRecordTokenResponse extends $tea.Model {
  requestId: string;
  securityToken: string;
  accessKeySecret: string;
  accessKeyId: string;
  expiration: string;
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

export class UpdateBoardCallbackRequest extends $tea.Model {
  appId: string;
  authKey?: string;
  authSwitch?: string;
  callbackEnable: number;
  callbackUri?: string;
  callbackEvents?: string;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateBoardCallbackResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainMappingRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponse extends $tea.Model {
  requestId: string;
  liveDomainModels: DescribeLiveDomainMappingResponseLiveDomainModels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDomainModels: 'LiveDomainModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDomainModels: DescribeLiveDomainMappingResponseLiveDomainModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveIndexRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class StopLiveIndexResponse extends $tea.Model {
  requestId: string;
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

export class StartLiveIndexRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  tokenId: string;
  inputUrl: string;
  interval?: number;
  ossBucket?: string;
  ossEndpoint?: string;
  ossUserId?: string;
  ossRamRole?: string;
  static names(): { [key: string]: string } {
    return {
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

export class StartLiveIndexResponse extends $tea.Model {
  requestId: string;
  taskId: string;
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

export class RealTimeSnapshotCommandRequest extends $tea.Model {
  command: string;
  domainName: string;
  appName: string;
  streamName: string;
  mode?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
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

export class RealTimeSnapshotCommandResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveTopDomainsByFlowRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponse extends $tea.Model {
  requestId: string;
  startTime: string;
  endTime: string;
  domainCount: number;
  domainOnlineCount: number;
  topDomains: DescribeLiveTopDomainsByFlowResponseTopDomains;
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
      topDomains: DescribeLiveTopDomainsByFlowResponseTopDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataRequest extends $tea.Model {
  domainName: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainRealTimeBpsDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  realTimeBpsDataPerInterval: DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      realTimeBpsDataPerInterval: 'RealTimeBpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      realTimeBpsDataPerInterval: DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataRequest extends $tea.Model {
  domainName: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  realTimeHttpCodeData: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      realTimeHttpCodeData: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataRequest extends $tea.Model {
  domainName: string;
  startTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainRealTimeTrafficDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  realTimeTrafficDataPerInterval: DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dataInterval: 'DataInterval',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      dataInterval: 'string',
      realTimeTrafficDataPerInterval: DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainPlayMappingRequest extends $tea.Model {
  playDomain: string;
  pullDomain: string;
  static names(): { [key: string]: string } {
    return {
      playDomain: 'PlayDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainPlayMappingResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveLazyPullStreamInfoConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveLazyPullStreamInfoConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveLazyPullStreamConfigRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  liveapiRequestFrom?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      liveapiRequestFrom: 'LiveapiRequestFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponse extends $tea.Model {
  requestId: string;
  liveLazyPullConfigList: DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveLazyPullConfigList: 'LiveLazyPullConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveLazyPullConfigList: DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveLazyPullStreamInfoConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  pullDomainName: string;
  pullAppName?: string;
  pullProtocol: string;
  pullAuthType?: string;
  pullAuthKey?: string;
  pullArgs?: string;
  liveapiRequestFrom?: string;
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
      liveapiRequestFrom: 'LiveapiRequestFrom',
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
      liveapiRequestFrom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveLazyPullStreamInfoConfigResponse extends $tea.Model {
  requestId: string;
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

export class UpdateCasterSceneAudioRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  followEnable?: number;
  audioLayer?: UpdateCasterSceneAudioRequestAudioLayer[];
  mixList?: string[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
      followEnable: 'FollowEnable',
      audioLayer: 'AudioLayer',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateCasterSceneAudioResponse extends $tea.Model {
  requestId: string;
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

export class SetCasterChannelRequest extends $tea.Model {
  casterId: string;
  channelId: string;
  resourceId?: string;
  seekOffset?: number;
  playStatus?: number;
  reloadFlag?: number;
  static names(): { [key: string]: string } {
    return {
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

export class SetCasterChannelResponse extends $tea.Model {
  requestId: string;
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

export class DescribeCasterSceneAudioRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  followEnable: number;
  audioLayers: DescribeCasterSceneAudioResponseAudioLayers;
  mixList: DescribeCasterSceneAudioResponseMixList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      followEnable: 'FollowEnable',
      audioLayers: 'AudioLayers',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      followEnable: 'number',
      audioLayers: DescribeCasterSceneAudioResponseAudioLayers,
      mixList: DescribeCasterSceneAudioResponseMixList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponse extends $tea.Model {
  requestId: string;
  total: number;
  channels: DescribeCasterChannelsResponseChannels;
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
      channels: DescribeCasterChannelsResponseChannels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardRequest extends $tea.Model {
  appId: string;
  boardData: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      boardData: 'BoardData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      boardData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBoardResponse extends $tea.Model {
  requestId: string;
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

export class JoinBoardRequest extends $tea.Model {
  appId: string;
  appUid: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appUid: 'AppUid',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appUid: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinBoardResponse extends $tea.Model {
  requestId: string;
  token: string;
  boardId: string;
  topicId: string;
  keepaliveTopic: string;
  keepaliveInterval: number;
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

export class DescribeBoardSnapshotRequest extends $tea.Model {
  appId: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponse extends $tea.Model {
  requestId: string;
  snapshot: DescribeBoardSnapshotResponseSnapshot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshot: DescribeBoardSnapshotResponseSnapshot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsRequest extends $tea.Model {
  appId: string;
  pageNum: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsResponse extends $tea.Model {
  requestId: string;
  boards: DescribeBoardsResponseBoards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      boards: 'Boards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      boards: { 'type': 'array', 'itemType': DescribeBoardsResponseBoards },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardEventsRequest extends $tea.Model {
  appId: string;
  startTime: string;
  endTime?: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeBoardEventsResponse extends $tea.Model {
  requestId: string;
  events: DescribeBoardEventsResponseEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeBoardEventsResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBoardRequest extends $tea.Model {
  appId: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBoardResponse extends $tea.Model {
  requestId: string;
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

export class CreateBoardRequest extends $tea.Model {
  appId: string;
  appUid: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appUid: 'AppUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBoardResponse extends $tea.Model {
  requestId: string;
  boardId: string;
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

export class CompleteBoardRequest extends $tea.Model {
  appId: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteBoardResponse extends $tea.Model {
  requestId: string;
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

export class ApplyBoardTokenRequest extends $tea.Model {
  appId: string;
  appUid: string;
  boardId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appUid: 'AppUid',
      boardId: 'BoardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appUid: 'string',
      boardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBoardTokenResponse extends $tea.Model {
  requestId: string;
  token: string;
  expired: string;
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

export class DescribeLiveStreamCountRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponse extends $tea.Model {
  requestId: string;
  streamCountInfos: DescribeLiveStreamCountResponseStreamCountInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamCountInfos: 'StreamCountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamCountInfos: DescribeLiveStreamCountResponseStreamCountInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateDetailRequest extends $tea.Model {
  securityToken?: string;
  certName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateDetailResponse extends $tea.Model {
  requestId: string;
  cert: string;
  key: string;
  certId: number;
  certName: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cert: 'Cert',
      key: 'Key',
      certId: 'CertId',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cert: 'string',
      key: 'string',
      certId: 'number',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataRequest extends $tea.Model {
  domainName?: string;
  time: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponse extends $tea.Model {
  time: string;
  requestId: string;
  usageData: DescribeHlsLiveStreamRealTimeBpsDataResponseUsageData[];
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      requestId: 'RequestId',
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      requestId: 'string',
      usageData: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveDomainRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveDomainResponse extends $tea.Model {
  requestId: string;
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

export class StartLiveDomainRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLiveDomainResponse extends $tea.Model {
  requestId: string;
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

export class SetLiveDomainCertificateRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  certName?: string;
  certType?: string;
  SSLProtocol: string;
  SSLPub?: string;
  SSLPri?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
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

export class SetLiveDomainCertificateResponse extends $tea.Model {
  requestId: string;
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

export class BatchSetLiveDomainConfigsRequest extends $tea.Model {
  securityToken?: string;
  domainNames: string;
  functions: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainNames: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetLiveDomainConfigsResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveCertificateListRequest extends $tea.Model {
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponse extends $tea.Model {
  requestId: string;
  certificateListModel: DescribeLiveCertificateListResponseCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeLiveCertificateListResponseCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainConfigsRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  functionNames: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponse extends $tea.Model {
  requestId: string;
  domainConfigs: DescribeLiveDomainConfigsResponseDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeLiveDomainConfigsResponseDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainRequest extends $tea.Model {
  securityToken?: string;
  liveDomainType: string;
  domainName: string;
  region: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddLiveDomainResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainDetailRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponse extends $tea.Model {
  requestId: string;
  domainDetail: DescribeLiveDomainDetailResponseDomainDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainDetail: 'DomainDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainDetail: DescribeLiveDomainDetailResponseDomainDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteLiveDomainConfigsRequest extends $tea.Model {
  securityToken?: string;
  domainNames: string;
  functionNames: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainNames: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteLiveDomainConfigsResponse extends $tea.Model {
  requestId: string;
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

export class DescribeRoomStatusRequest extends $tea.Model {
  appId: string;
  roomId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomStatusResponse extends $tea.Model {
  requestId: string;
  roomStatus: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roomStatus: 'RoomStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roomStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListRequest extends $tea.Model {
  appId: string;
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

export class DescribeRoomListResponse extends $tea.Model {
  requestId: string;
  totalNum: number;
  totalPage: number;
  roomList: DescribeRoomListResponseRoomList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      roomList: 'RoomList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
      roomList: { 'type': 'array', 'itemType': DescribeRoomListResponseRoomList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListRequest extends $tea.Model {
  appId: string;
  roomId: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRoomKickoutUserListResponse extends $tea.Model {
  requestId: string;
  totalNum: number;
  totalPage: number;
  userList: DescribeRoomKickoutUserListResponseUserList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
      userList: { 'type': 'array', 'itemType': DescribeRoomKickoutUserListResponseUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomUserNotificationRequest extends $tea.Model {
  appId: string;
  roomId: string;
  appUid: string;
  toAppUid: string;
  data: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
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

export class SendRoomUserNotificationResponse extends $tea.Model {
  requestId: string;
  messageId: string;
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

export class DescribeForbidPushStreamRoomListRequest extends $tea.Model {
  appId: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeForbidPushStreamRoomListResponse extends $tea.Model {
  requestId: string;
  totalNum: number;
  totalPage: number;
  roomList: DescribeForbidPushStreamRoomListResponseRoomList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      roomList: 'RoomList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
      roomList: { 'type': 'array', 'itemType': DescribeForbidPushStreamRoomListResponseRoomList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRoomNotificationRequest extends $tea.Model {
  appId: string;
  roomId: string;
  appUid?: string;
  data: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      appUid: 'AppUid',
      data: 'Data',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SendRoomNotificationResponse extends $tea.Model {
  requestId: string;
  messageId: string;
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

export class ForbidPushStreamRequest extends $tea.Model {
  appId: string;
  roomId: string;
  userData?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      userData: 'UserData',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ForbidPushStreamResponse extends $tea.Model {
  requestId: string;
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

export class DeleteRoomRequest extends $tea.Model {
  appId: string;
  roomId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoomResponse extends $tea.Model {
  requestId: string;
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

export class CreateRoomRequest extends $tea.Model {
  appId: string;
  roomId: string;
  anchorId: string;
  templateIds?: string;
  useAppTranscode?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
      anchorId: 'AnchorId',
      templateIds: 'TemplateIds',
      useAppTranscode: 'UseAppTranscode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateRoomResponse extends $tea.Model {
  requestId: string;
  appId: string;
  roomId: string;
  anchorId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appId: 'AppId',
      roomId: 'RoomId',
      anchorId: 'AnchorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appId: 'string',
      roomId: 'string',
      anchorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllowPushStreamRequest extends $tea.Model {
  appId: string;
  roomId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      roomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllowPushStreamResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveUserDomainsRequest extends $tea.Model {
  securityToken?: string;
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

export class DescribeLiveUserDomainsResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  domains: DescribeLiveUserDomainsResponseDomains;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      domains: DescribeLiveUserDomainsResponseDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterRtcInfoRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterRtcInfoResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  authToken: string;
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

export class DescribeUpBpsPeakDataRequest extends $tea.Model {
  startTime: string;
  endTime: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeUpBpsPeakDataResponse extends $tea.Model {
  requestId: string;
  describeUpPeakTraffics: DescribeUpBpsPeakDataResponseDescribeUpPeakTraffics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpPeakTraffics: 'DescribeUpPeakTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpPeakTraffics: DescribeUpBpsPeakDataResponseDescribeUpPeakTraffics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineRequest extends $tea.Model {
  startTime: string;
  endTime: string;
  line: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      line: 'Line',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeUpBpsPeakOfLineResponse extends $tea.Model {
  requestId: string;
  describeUpBpsPeakOfLines: DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLines;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpBpsPeakOfLines: 'DescribeUpBpsPeakOfLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpBpsPeakOfLines: DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataRequest extends $tea.Model {
  startTime: string;
  endTime: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeUpPeakPublishStreamDataResponse extends $tea.Model {
  requestId: string;
  describeUpPeakPublishStreamDatas: DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeUpPeakPublishStreamDatas: 'DescribeUpPeakPublishStreamDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeUpPeakPublishStreamDatas: DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainMappingRequest extends $tea.Model {
  securityToken?: string;
  pushDomain: string;
  pullDomain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pushDomain: 'PushDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pushDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDomainMappingResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveDomainMappingRequest extends $tea.Model {
  securityToken?: string;
  pushDomain: string;
  pullDomain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      pushDomain: 'PushDomain',
      pullDomain: 'PullDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      pushDomain: 'string',
      pullDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDomainMappingResponse extends $tea.Model {
  requestId: string;
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

export class AddCasterEpisodeGroupContentRequest extends $tea.Model {
  clientToken: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentResponse extends $tea.Model {
  requestId: string;
  programId: string;
  itemIds: AddCasterEpisodeGroupContentResponseItemIds;
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
      itemIds: AddCasterEpisodeGroupContentResponseItemIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramRequest extends $tea.Model {
  casterId: string;
  episode: ModifyCasterProgramRequestEpisode[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': ModifyCasterProgramRequestEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterProgramResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class ModifyCasterEpisodeRequest extends $tea.Model {
  casterId: string;
  episodeId: string;
  episodeName?: string;
  resourceId?: string;
  componentId?: string[];
  startTime?: string;
  endTime?: string;
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episodeId: 'string',
      episodeName: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterEpisodeResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  episodeId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramRequest extends $tea.Model {
  casterId: string;
  episodeId?: string;
  episodeType?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeCasterProgramResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  programName: string;
  programEffect: number;
  total: number;
  episodes: DescribeCasterProgramResponseEpisodes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      programName: 'ProgramName',
      programEffect: 'ProgramEffect',
      total: 'Total',
      episodes: 'Episodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      programName: 'string',
      programEffect: 'number',
      total: 'number',
      episodes: DescribeCasterProgramResponseEpisodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterProgramRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterProgramResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class DeleteCasterEpisodeGroupRequest extends $tea.Model {
  programId: string;
  static names(): { [key: string]: string } {
    return {
      programId: 'ProgramId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeGroupResponse extends $tea.Model {
  requestId: string;
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

export class DeleteCasterEpisodeRequest extends $tea.Model {
  casterId: string;
  episodeId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterEpisodeResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  episodeId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      episodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramRequest extends $tea.Model {
  casterId: string;
  episode: AddCasterProgramRequestEpisode[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': AddCasterProgramRequestEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponse extends $tea.Model {
  requestId: string;
  episodeIds: AddCasterProgramResponseEpisodeIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      episodeIds: 'EpisodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      episodeIds: AddCasterProgramResponseEpisodeIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupRequest extends $tea.Model {
  clientToken: string;
  domainName: string;
  item: AddCasterEpisodeGroupRequestItem[];
  startTime: string;
  repeatNum: number;
  sideOutputUrl: string;
  callbackUrl: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      item: 'Item',
      startTime: 'StartTime',
      repeatNum: 'RepeatNum',
      sideOutputUrl: 'SideOutputUrl',
      callbackUrl: 'CallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      domainName: 'string',
      item: { 'type': 'array', 'itemType': AddCasterEpisodeGroupRequestItem },
      startTime: 'string',
      repeatNum: 'number',
      sideOutputUrl: 'string',
      callbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupResponse extends $tea.Model {
  requestId: string;
  programId: string;
  itemIds: AddCasterEpisodeGroupResponseItemIds;
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
      itemIds: AddCasterEpisodeGroupResponseItemIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeRequest extends $tea.Model {
  casterId: string;
  episodeType: string;
  episodeName?: string;
  resourceId?: string;
  componentId?: string[];
  startTime: string;
  endTime: string;
  switchType: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episodeType: 'EpisodeType',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episodeType: 'string',
      episodeName: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeResponse extends $tea.Model {
  requestId: string;
  episodeId: string;
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

export class DescribeLiveDomainTranscodeDataRequest extends $tea.Model {
  domainName?: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTranscodeDataResponse extends $tea.Model {
  requestId: string;
  transcodeDataInfos: DescribeLiveDomainTranscodeDataResponseTranscodeDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeDataInfos: 'TranscodeDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeDataInfos: DescribeLiveDomainTranscodeDataResponseTranscodeDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataRequest extends $tea.Model {
  domainName?: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponse extends $tea.Model {
  requestId: string;
  snapshotDataInfos: DescribeLiveDomainSnapshotDataResponseSnapshotDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotDataInfos: 'SnapshotDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotDataInfos: DescribeLiveDomainSnapshotDataResponseSnapshotDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataRequest extends $tea.Model {
  domainName?: string;
  startTime: string;
  endTime: string;
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveDomainRecordDataResponse extends $tea.Model {
  requestId: string;
  recordDataInfos: DescribeLiveDomainRecordDataResponseRecordDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordDataInfos: 'RecordDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordDataInfos: DescribeLiveDomainRecordDataResponseRecordDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeRecordCommandRequest extends $tea.Model {
  command: string;
  domainName: string;
  appName: string;
  streamName: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RealTimeRecordCommandResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDomainTrafficDataRequest extends $tea.Model {
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLiveDomainTrafficDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  trafficDataPerInterval: DescribeLiveDomainTrafficDataResponseTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeLiveDomainTrafficDataResponseTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLiveDomainBpsDataResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  startTime: string;
  endTime: string;
  dataInterval: string;
  bpsDataPerInterval: DescribeLiveDomainBpsDataResponseBpsDataPerInterval;
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
      bpsDataPerInterval: DescribeLiveDomainBpsDataResponseBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTrancodeSEIRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  text: string;
  pattern: string;
  repeat: number;
  delay: number;
  static names(): { [key: string]: string } {
    return {
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

export class AddTrancodeSEIResponse extends $tea.Model {
  requestId: string;
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

export class DeleteCasterSceneConfigRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterSceneConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddCustomLiveStreamTranscodeRequest extends $tea.Model {
  domain: string;
  app: string;
  template: string;
  templateType: string;
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

export class AddCustomLiveStreamTranscodeResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveRecordVodConfigsRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveRecordVodConfigsResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  total: string;
  liveRecordVodConfigs: DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
      liveRecordVodConfigs: 'LiveRecordVodConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      total: 'string',
      liveRecordVodConfigs: DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordVodConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordVodConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveRecordVodConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName?: string;
  vodTranscodeGroupId: string;
  cycleDuration?: number;
  autoCompose?: string;
  storageLocation?: string;
  composeVodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddLiveRecordVodConfigResponse extends $tea.Model {
  requestId: string;
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

export class ModifyCasterComponentRequest extends $tea.Model {
  casterId: string;
  componentId: string;
  componentName?: string;
  componentType?: string;
  effect?: string;
  componentLayer?: string;
  textLayerContent?: string;
  imageLayerContent?: string;
  captionLayerContent?: string;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyCasterComponentResponse extends $tea.Model {
  requestId: string;
  componentId: string;
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

export class DescribeCasterComponentsRequest extends $tea.Model {
  casterId: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponse extends $tea.Model {
  requestId: string;
  total: number;
  components: DescribeCasterComponentsResponseComponents;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      components: DescribeCasterComponentsResponseComponents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterComponentRequest extends $tea.Model {
  casterId: string;
  componentId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterComponentResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  componentId: string;
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

export class AddCasterComponentRequest extends $tea.Model {
  casterId: string;
  componentName?: string;
  locationId: string;
  componentType: string;
  effect?: string;
  componentLayer: string;
  layerOrder?: string;
  textLayerContent?: string;
  imageLayerContent?: string;
  captionLayerContent?: string;
  htmlLayerContent?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddCasterComponentResponse extends $tea.Model {
  requestId: string;
  componentId: string;
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

export class StopCasterRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterResponse extends $tea.Model {
  requestId: string;
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

export class StartCasterRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponse extends $tea.Model {
  requestId: string;
  pvwSceneInfos: StartCasterResponsePvwSceneInfos;
  pgmSceneInfos: StartCasterResponsePgmSceneInfos;
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
      pvwSceneInfos: StartCasterResponsePvwSceneInfos,
      pgmSceneInfos: StartCasterResponsePgmSceneInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamHistoryUserNumResponse extends $tea.Model {
  requestId: string;
  liveStreamUserNumInfos: DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamUserNumInfos: 'LiveStreamUserNumInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamUserNumInfos: DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneConfigRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  layoutId: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
      layoutId: 'LayoutId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateCasterSceneConfigResponse extends $tea.Model {
  requestId: string;
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

export class StopCasterSceneRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCasterSceneResponse extends $tea.Model {
  requestId: string;
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

export class StartCasterSceneRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterSceneResponse extends $tea.Model {
  requestId: string;
  streamUrl: string;
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

export class SetCasterSceneConfigRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  layoutId?: string;
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
      layoutId: 'LayoutId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SetCasterSceneConfigResponse extends $tea.Model {
  requestId: string;
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

export class SetCasterConfigRequest extends $tea.Model {
  casterId: string;
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

export class SetCasterConfigResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class ModifyCasterVideoResourceRequest extends $tea.Model {
  casterId: string;
  resourceId: string;
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

export class ModifyCasterVideoResourceResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequest extends $tea.Model {
  casterId: string;
  layoutId: string;
  videoLayer: ModifyCasterLayoutRequestVideoLayer[];
  audioLayer: ModifyCasterLayoutRequestAudioLayer[];
  blendList: string[];
  mixList: string[];
  static names(): { [key: string]: string } {
    return {
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

export class ModifyCasterLayoutResponse extends $tea.Model {
  requestId: string;
  layoutId: string;
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

export class EffectCasterVideoResourceRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterVideoResourceResponse extends $tea.Model {
  requestId: string;
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

export class EffectCasterUrgentRequest extends $tea.Model {
  casterId: string;
  sceneId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EffectCasterUrgentResponse extends $tea.Model {
  requestId: string;
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

export class DescribeCasterVideoResourcesRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponse extends $tea.Model {
  requestId: string;
  total: number;
  videoResources: DescribeCasterVideoResourcesResponseVideoResources;
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
      videoResources: DescribeCasterVideoResourcesResponseVideoResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  total: number;
  casterStreams: DescribeCasterStreamUrlResponseCasterStreams;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      total: 'Total',
      casterStreams: 'CasterStreams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      total: 'number',
      casterStreams: DescribeCasterStreamUrlResponseCasterStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesRequest extends $tea.Model {
  casterId: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponse extends $tea.Model {
  requestId: string;
  total: number;
  sceneList: DescribeCasterScenesResponseSceneList;
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
      sceneList: DescribeCasterScenesResponseSceneList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersRequest extends $tea.Model {
  casterId?: string;
  casterName?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeCastersResponse extends $tea.Model {
  requestId: string;
  total: number;
  casterList: DescribeCastersResponseCasterList;
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
      casterList: DescribeCastersResponseCasterList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsRequest extends $tea.Model {
  casterId: string;
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponse extends $tea.Model {
  requestId: string;
  total: number;
  layouts: DescribeCasterLayoutsResponseLayouts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      layouts: 'Layouts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      layouts: DescribeCasterLayoutsResponseLayouts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigRequest extends $tea.Model {
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  casterName: string;
  domainName: string;
  delay: number;
  urgentMaterialId: string;
  sideOutputUrl: string;
  callbackUrl: string;
  programName: string;
  programEffect: number;
  channelEnable: number;
  transcodeConfig: DescribeCasterConfigResponseTranscodeConfig;
  recordConfig: DescribeCasterConfigResponseRecordConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      casterName: 'CasterName',
      domainName: 'DomainName',
      delay: 'Delay',
      urgentMaterialId: 'UrgentMaterialId',
      sideOutputUrl: 'SideOutputUrl',
      callbackUrl: 'CallbackUrl',
      programName: 'ProgramName',
      programEffect: 'ProgramEffect',
      channelEnable: 'ChannelEnable',
      transcodeConfig: 'TranscodeConfig',
      recordConfig: 'RecordConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      casterName: 'string',
      domainName: 'string',
      delay: 'number',
      urgentMaterialId: 'string',
      sideOutputUrl: 'string',
      callbackUrl: 'string',
      programName: 'string',
      programEffect: 'number',
      channelEnable: 'number',
      transcodeConfig: DescribeCasterConfigResponseTranscodeConfig,
      recordConfig: DescribeCasterConfigResponseRecordConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterVideoResourceRequest extends $tea.Model {
  casterId: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterVideoResourceResponse extends $tea.Model {
  requestId: string;
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

export class DeleteCasterLayoutRequest extends $tea.Model {
  casterId: string;
  layoutId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterLayoutResponse extends $tea.Model {
  requestId: string;
  casterId: string;
  layoutId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      casterId: 'CasterId',
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      casterId: 'string',
      layoutId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterRequest extends $tea.Model {
  securityToken?: string;
  casterId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      casterId: 'CasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      casterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCasterResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class CreateCasterRequest extends $tea.Model {
  casterName?: string;
  clientToken: string;
  normType: number;
  chargeType: string;
  purchaseTime?: string;
  expireTime?: string;
  casterTemplate?: string;
  static names(): { [key: string]: string } {
    return {
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

export class CreateCasterResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class CopyCasterSceneConfigRequest extends $tea.Model {
  casterId: string;
  fromSceneId: string;
  toSceneId: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      fromSceneId: 'FromSceneId',
      toSceneId: 'ToSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      fromSceneId: 'string',
      toSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterSceneConfigResponse extends $tea.Model {
  requestId: string;
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

export class CopyCasterRequest extends $tea.Model {
  casterName: string;
  srcCasterId: string;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      casterName: 'CasterName',
      srcCasterId: 'SrcCasterId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterName: 'string',
      srcCasterId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCasterResponse extends $tea.Model {
  requestId: string;
  casterId: string;
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

export class AddCasterVideoResourceRequest extends $tea.Model {
  casterId: string;
  resourceName: string;
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

export class AddCasterVideoResourceResponse extends $tea.Model {
  requestId: string;
  resourceId: string;
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

export class AddCasterLayoutRequest extends $tea.Model {
  casterId: string;
  videoLayer: AddCasterLayoutRequestVideoLayer[];
  audioLayer: AddCasterLayoutRequestAudioLayer[];
  blendList: string[];
  mixList: string[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      videoLayer: 'VideoLayer',
      audioLayer: 'AudioLayer',
      blendList: 'BlendList',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class AddCasterLayoutResponse extends $tea.Model {
  requestId: string;
  layoutId: string;
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

export class DescribeLivePullStreamConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponse extends $tea.Model {
  requestId: string;
  liveAppRecordList: DescribeLivePullStreamConfigResponseLiveAppRecordList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAppRecordList: 'LiveAppRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAppRecordList: DescribeLivePullStreamConfigResponseLiveAppRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLivePullStreamInfoConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLivePullStreamInfoConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLivePullStreamInfoConfigRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  sourceUrl: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLivePullStreamInfoConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamBitRateDataRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamBitRateDataResponse extends $tea.Model {
  requestId: string;
  frameRateAndBitRateInfos: DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  notifyUrl: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveDetectNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  ossEndpoint: string;
  ossBucket: string;
  ossObject?: string;
  scene?: string[];
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      scene: 'Scene',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      scene: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveDetectNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponse extends $tea.Model {
  requestId: string;
  liveDetectNotifyConfig: DescribeLiveDetectNotifyConfigResponseLiveDetectNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveDetectNotifyConfig: 'LiveDetectNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveDetectNotifyConfig: DescribeLiveDetectNotifyConfigResponseLiveDetectNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  order: string;
  totalNum: number;
  totalPage: number;
  liveSnapshotDetectPornConfigList: DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      liveSnapshotDetectPornConfigList: 'LiveSnapshotDetectPornConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
      totalNum: 'number',
      totalPage: 'number',
      liveSnapshotDetectPornConfigList: DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveDetectNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  notifyUrl: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveDetectNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class UpdateLiveSnapshotDetectPornConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  ossEndpoint?: string;
  ossBucket?: string;
  ossObject?: string;
  interval?: number;
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class UpdateLiveSnapshotDetectPornConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  notifyUrl: string;
  needStatusNotify?: boolean;
  onDemandUrl?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      needStatusNotify: 'NeedStatusNotify',
      onDemandUrl: 'OnDemandUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

export class AddLiveRecordNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveRecordNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponse extends $tea.Model {
  requestId: string;
  liveRecordNotifyConfig: DescribeLiveRecordNotifyConfigResponseLiveRecordNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveRecordNotifyConfig: 'LiveRecordNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveRecordNotifyConfig: DescribeLiveRecordNotifyConfigResponseLiveRecordNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  domainName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  requestId: string;
  liveStreamsNotifyConfig: DescribeLiveStreamsNotifyUrlConfigResponseLiveStreamsNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamsNotifyConfig: DescribeLiveStreamsNotifyUrlConfigResponseLiveStreamsNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveRecordNotifyConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  notifyUrl?: string;
  onDemandUrl?: string;
  needStatusNotify?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      onDemandUrl: 'OnDemandUrl',
      needStatusNotify: 'NeedStatusNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

export class UpdateLiveRecordNotifyConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamsBlockListRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponse extends $tea.Model {
  requestId: string;
  domainName: string;
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  streamUrls: DescribeLiveStreamsBlockListResponseStreamUrls;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      streamUrls: 'StreamUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPage: 'number',
      streamUrls: DescribeLiveStreamsBlockListResponseStreamUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamOnlineUserNumResponse extends $tea.Model {
  requestId: string;
  totalUserNumber: number;
  onlineUserInfo: DescribeLiveStreamOnlineUserNumResponseOnlineUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalUserNumber: 'TotalUserNumber',
      onlineUserInfo: 'OnlineUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalUserNumber: 'number',
      onlineUserInfo: DescribeLiveStreamOnlineUserNumResponseOnlineUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  startTime: string;
  endTime: string;
  pageSize?: number;
  pageNumber?: number;
  streamType?: string;
  queryType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLiveStreamsPublishListResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  publishInfo: DescribeLiveStreamsPublishListResponsePublishInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      publishInfo: 'PublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPage: 'number',
      publishInfo: DescribeLiveStreamsPublishListResponsePublishInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListRequest extends $tea.Model {
  domainName: string;
  appName?: string;
  streamName?: string;
  pageSize?: number;
  pageNum?: number;
  streamType?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      streamType: 'StreamType',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      pageSize: 'number',
      pageNum: 'number',
      streamType: 'string',
      queryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  onlineInfo: DescribeLiveStreamsOnlineListResponseOnlineInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      onlineInfo: 'OnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPage: 'number',
      onlineInfo: DescribeLiveStreamsOnlineListResponseOnlineInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName?: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponse extends $tea.Model {
  requestId: string;
  controlInfo: DescribeLiveStreamsControlHistoryResponseControlInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      controlInfo: 'ControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      controlInfo: DescribeLiveStreamsControlHistoryResponseControlInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveStreamTranscodeRequest extends $tea.Model {
  domain: string;
  app: string;
  template: string;
  lazy?: string;
  watermark?: string;
  mix?: string;
  onlyAudio?: string;
  waterPattern?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      app: 'App',
      template: 'Template',
      lazy: 'Lazy',
      watermark: 'Watermark',
      mix: 'Mix',
      onlyAudio: 'OnlyAudio',
      waterPattern: 'WaterPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      app: 'string',
      template: 'string',
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

export class AddLiveStreamTranscodeResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveStreamTranscodeRequest extends $tea.Model {
  securityToken?: string;
  domain: string;
  app: string;
  template: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domain: 'Domain',
      app: 'App',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domain: 'string',
      app: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamTranscodeResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamsFrameRateAndBitRateDataRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamsFrameRateAndBitRateDataResponse extends $tea.Model {
  requestId: string;
  frameRateAndBitRateInfos: DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frameRateAndBitRateInfos: 'FrameRateAndBitRateInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frameRateAndBitRateInfos: DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidLiveStreamRequest extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  liveStreamType: string;
  oneshot?: string;
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      resumeTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidLiveStreamResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveStreamTranscodeInfoRequest extends $tea.Model {
  domainTranscodeName: string;
  static names(): { [key: string]: string } {
    return {
      domainTranscodeName: 'DomainTranscodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTranscodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponse extends $tea.Model {
  requestId: string;
  domainTranscodeList: DescribeLiveStreamTranscodeInfoResponseDomainTranscodeList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainTranscodeList: 'DomainTranscodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainTranscodeList: DescribeLiveStreamTranscodeInfoResponseDomainTranscodeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamsNotifyUrlConfigRequest extends $tea.Model {
  domainName: string;
  notifyUrl: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLiveStreamsNotifyUrlConfigResponse extends $tea.Model {
  requestId: string;
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

export class ResumeLiveStreamRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  liveStreamType: string;
  appName: string;
  streamName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

export class ResumeLiveStreamResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  timeInterval: number;
  ossEndpoint: string;
  ossBucket: string;
  overwriteOssObject?: string;
  sequenceOssObject?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class AddLiveAppSnapshotConfigResponse extends $tea.Model {
  requestId: string;
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

export class AddLiveAppRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  ossEndpoint: string;
  ossBucket: string;
  recordFormat: AddLiveAppRecordConfigRequestRecordFormat[];
  streamName?: string;
  startTime?: string;
  endTime?: string;
  onDemand?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      recordFormat: 'RecordFormat',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      onDemand: 'OnDemand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      recordFormat: { 'type': 'array', 'itemType': AddLiveAppRecordConfigRequestRecordFormat },
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      onDemand: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppRecordConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName?: string;
  streamName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveRecordConfigResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  order: string;
  totalNum: number;
  totalPage: number;
  liveAppRecordList: DescribeLiveRecordConfigResponseLiveAppRecordList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      liveAppRecordList: 'LiveAppRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
      totalNum: 'number',
      totalPage: 'number',
      liveAppRecordList: DescribeLiveRecordConfigResponseLiveAppRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppSnapshotConfigResponse extends $tea.Model {
  requestId: string;
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

export class DeleteLiveAppRecordConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveAppRecordConfigResponse extends $tea.Model {
  requestId: string;
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

export class CreateLiveStreamRecordIndexFilesRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  ossEndpoint: string;
  ossBucket: string;
  ossObject: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class CreateLiveStreamRecordIndexFilesResponse extends $tea.Model {
  requestId: string;
  recordInfo: CreateLiveStreamRecordIndexFilesResponseRecordInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordInfo: 'RecordInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordInfo: CreateLiveStreamRecordIndexFilesResponseRecordInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  startTime: string;
  endTime: string;
  limit?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamSnapshotInfoResponse extends $tea.Model {
  requestId: string;
  nextStartTime: string;
  liveStreamSnapshotInfoList: DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextStartTime: 'NextStartTime',
      liveStreamSnapshotInfoList: 'LiveStreamSnapshotInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextStartTime: 'string',
      liveStreamSnapshotInfoList: DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  startTime: string;
  endTime: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamRecordIndexFilesResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  order: string;
  totalNum: number;
  totalPage: number;
  recordIndexInfoList: DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      recordIndexInfoList: 'RecordIndexInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
      totalNum: 'number',
      totalPage: 'number',
      recordIndexInfoList: DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

export class DescribeLiveStreamRecordIndexFileResponse extends $tea.Model {
  requestId: string;
  recordIndexInfo: DescribeLiveStreamRecordIndexFileResponseRecordIndexInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordIndexInfo: 'RecordIndexInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordIndexInfo: DescribeLiveStreamRecordIndexFileResponseRecordIndexInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  streamName: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveStreamRecordContentResponse extends $tea.Model {
  requestId: string;
  recordContentInfoList: DescribeLiveStreamRecordContentResponseRecordContentInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordContentInfoList: 'RecordContentInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordContentInfoList: DescribeLiveStreamRecordContentResponseRecordContentInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName?: string;
  pageNum?: number;
  pageSize?: number;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class DescribeLiveSnapshotConfigResponse extends $tea.Model {
  requestId: string;
  pageNum: number;
  pageSize: number;
  order: string;
  totalNum: number;
  totalPage: number;
  liveStreamSnapshotConfigList: DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      order: 'Order',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      liveStreamSnapshotConfigList: 'LiveStreamSnapshotConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      order: 'string',
      totalNum: 'number',
      totalPage: 'number',
      liveStreamSnapshotConfigList: DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAppSnapshotConfigRequest extends $tea.Model {
  securityToken?: string;
  domainName: string;
  appName: string;
  timeInterval?: number;
  ossEndpoint?: string;
  ossBucket?: string;
  overwriteOssObject?: string;
  sequenceOssObject?: string;
  callback?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
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

export class UpdateLiveAppSnapshotConfigResponse extends $tea.Model {
  requestId: string;
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

export class DescribeLiveAsrConfigResponseLiveAsrConfigLiveAsrConfigList extends $tea.Model {
  domainName: number;
  appName: string;
  streamName: string;
  period: number;
  mnsTopic: string;
  mnsRegion: string;
  httpCallbackURL: string;
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

export class DescribeLiveAsrConfigResponseLiveAsrConfig extends $tea.Model {
  liveAsrConfigList: DescribeLiveAsrConfigResponseLiveAsrConfigLiveAsrConfigList[];
  static names(): { [key: string]: string } {
    return {
      liveAsrConfigList: 'LiveAsrConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAsrConfigList: { 'type': 'array', 'itemType': DescribeLiveAsrConfigResponseLiveAsrConfigLiveAsrConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMixStreamListResponseMixStreamList extends $tea.Model {
  mixstreamId: string;
  domainName: string;
  appName: string;
  streamName: string;
  layoutId: string;
  inputStreamNumber: number;
  mixStreamTemplate: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      mixstreamId: 'MixstreamId',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      layoutId: 'LayoutId',
      inputStreamNumber: 'InputStreamNumber',
      mixStreamTemplate: 'MixStreamTemplate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixstreamId: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      layoutId: 'string',
      inputStreamNumber: 'number',
      mixStreamTemplate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseTimeShiftDataDataModule extends $tea.Model {
  timeStamp: string;
  size: string;
  type: string;
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

export class DescribeLiveDomainTimeShiftDataResponseTimeShiftData extends $tea.Model {
  dataModule: DescribeLiveDomainTimeShiftDataResponseTimeShiftDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTimeShiftDataResponseTimeShiftDataDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHtmlResourceResponseHtmlResource extends $tea.Model {
  htmlResourceId: string;
  htmlUrl: string;
  htmlContent: string;
  casterId: string;
  config: string;
  streamId: string;
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

export class DescribeLiveUserTagsResponseTags extends $tea.Model {
  key: string;
  value: string[];
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

export class TagLiveResourcesRequestTag extends $tea.Model {
  key: string;
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

export class DescribeLiveTagResourcesResponseTagResourcesTag extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeLiveTagResourcesResponseTagResources extends $tea.Model {
  resourceId: string;
  tag: DescribeLiveTagResourcesResponseTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseTagResourcesTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfigScenes extends $tea.Model {
  scene: string[];
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

export class DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfig extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  bizType: string;
  scenes: DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfigScenes;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      bizType: 'BizType',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      bizType: 'string',
      scenes: DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfigScenes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigList extends $tea.Model {
  liveAudioAuditConfig: DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditConfig: 'LiveAudioAuditConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditConfigResponseLiveAudioAuditConfigListLiveAudioAuditConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig extends $tea.Model {
  domainName: string;
  callback: string;
  callbackTemplate: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      callback: 'string',
      callbackTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigList extends $tea.Model {
  liveAudioAuditNotifyConfig: DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditNotifyConfig: 'LiveAudioAuditNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditNotifyConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditNotifyConfigResponseLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushTrafficDataResponseTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  trafficValue: string;
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

export class DescribeLiveDomainPushTrafficDataResponseTrafficDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainPushTrafficDataResponseTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainPushTrafficDataResponseTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPushBpsDataResponseBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  bpsValue: string;
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

export class DescribeLiveDomainPushBpsDataResponseBpsDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainPushBpsDataResponseBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainPushBpsDataResponseBpsDataPerIntervalDataModule },
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

export class DescribeCasterSyncGroupResponseSyncGroupsSyncGroupResourceIds extends $tea.Model {
  resourceId: string[];
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

export class DescribeCasterSyncGroupResponseSyncGroupsSyncGroup extends $tea.Model {
  mode: number;
  hostResourceId: string;
  resourceIds: DescribeCasterSyncGroupResponseSyncGroupsSyncGroupResourceIds;
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
      resourceIds: DescribeCasterSyncGroupResponseSyncGroupsSyncGroupResourceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSyncGroupResponseSyncGroups extends $tea.Model {
  syncGroup: DescribeCasterSyncGroupResponseSyncGroupsSyncGroup[];
  static names(): { [key: string]: string } {
    return {
      syncGroup: 'SyncGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncGroup: { 'type': 'array', 'itemType': DescribeCasterSyncGroupResponseSyncGroupsSyncGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectPornDataResponseDetectPornDataDataModule extends $tea.Model {
  timeStamp: string;
  app: string;
  domain: string;
  stream: string;
  fee: string;
  scene: string;
  region: string;
  count: number;
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

export class DescribeLiveDetectPornDataResponseDetectPornData extends $tea.Model {
  dataModule: DescribeLiveDetectPornDataResponseDetectPornDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDetectPornDataResponseDetectPornDataDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryDomainsResponseContentDomains extends $tea.Model {
  domainName: string;
  status: string;
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

export class ListLiveRealtimeLogDeliveryDomainsResponseContent extends $tea.Model {
  domains: ListLiveRealtimeLogDeliveryDomainsResponseContentDomains[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryDomainsResponseContentDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccDataAccData extends $tea.Model {
  timeStamp: string;
  successNum: number;
  failedNum: number;
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

export class DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccData extends $tea.Model {
  accData: DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeLiveRealtimeDeliveryAccResponseRealTimeDeliveryAccDataAccData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryResponseContentRealtimeLogDeliveryInfo extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
  domainName: string;
  dmId: number;
  status: string;
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

export class ListLiveRealtimeLogDeliveryResponseContent extends $tea.Model {
  realtimeLogDeliveryInfo: ListLiveRealtimeLogDeliveryResponseContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryResponseContentRealtimeLogDeliveryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRealtimeLogDeliveryInfosResponseContentRealtimeLogDeliveryInfos extends $tea.Model {
  project: string;
  logstore: string;
  region: string;
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

export class ListLiveRealtimeLogDeliveryInfosResponseContent extends $tea.Model {
  realtimeLogDeliveryInfos: ListLiveRealtimeLogDeliveryInfosResponseContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryInfosResponseContentRealtimeLogDeliveryInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseLiveDomainLimitListLiveDomainLimit extends $tea.Model {
  domainName: string;
  limitNum: number;
  limitTranscodeNum: number;
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

export class DescribeLiveDomainLimitResponseLiveDomainLimitList extends $tea.Model {
  liveDomainLimit: DescribeLiveDomainLimitResponseLiveDomainLimitListLiveDomainLimit[];
  static names(): { [key: string]: string } {
    return {
      liveDomainLimit: 'LiveDomainLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainLimit: { 'type': 'array', 'itemType': DescribeLiveDomainLimitResponseLiveDomainLimitListLiveDomainLimit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataByTimeStampResponseBpsDataListBpsDataModel extends $tea.Model {
  timeStamp: string;
  locationName: string;
  ispName: string;
  bps: number;
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

export class DescribeLiveDomainBpsDataByTimeStampResponseBpsDataList extends $tea.Model {
  bpsDataModel: DescribeLiveDomainBpsDataByTimeStampResponseBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeLiveDomainBpsDataByTimeStampResponseBpsDataListBpsDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainCertificateInfoResponseCertInfosCertInfo extends $tea.Model {
  domainName: string;
  certName: string;
  certDomainName: string;
  certExpireTime: string;
  certLife: string;
  certOrg: string;
  certType: string;
  SSLProtocol: string;
  status: string;
  SSLPub: string;
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

export class DescribeLiveDomainCertificateInfoResponseCertInfos extends $tea.Model {
  certInfo: DescribeLiveDomainCertificateInfoResponseCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeLiveDomainCertificateInfoResponseCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig extends $tea.Model {
  domainName: string;
  configName: string;
  configStatus: string;
  configValue: string;
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

export class DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigList extends $tea.Model {
  liveStreamOptimizedFeatureConfig: DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOptimizedFeatureConfig: 'LiveStreamOptimizedFeatureConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOptimizedFeatureConfig: { 'type': 'array', 'itemType': DescribeLiveStreamOptimizedFeatureConfigResponseLiveStreamOptimizedFeatureConfigListLiveStreamOptimizedFeatureConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseLiveStreamHlsDelayConfig extends $tea.Model {
  level: string;
  delay: number;
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

export class DescribeLiveStreamDelayConfigResponseLiveStreamFlvDelayConfig extends $tea.Model {
  level: string;
  delay: number;
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

export class DescribeLiveStreamDelayConfigResponseLiveStreamRtmpDelayConfig extends $tea.Model {
  level: string;
  delay: number;
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

export class DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo extends $tea.Model {
  transcodeTemplate: string;
  userNumber: number;
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

export class DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfos extends $tea.Model {
  info: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo[];
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo extends $tea.Model {
  streamName: string;
  infos: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfos;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      infos: 'Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      infos: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfoInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainOnlineUserNumResponseOnlineUserInfo extends $tea.Model {
  liveStreamOnlineUserNumInfo: DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveDomainOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  audioFrameRate: number;
  bitRate: number;
  videoFrameRate: number;
  streamUrl: string;
  static names(): { [key: string]: string } {
    return {
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      videoFrameRate: 'VideoFrameRate',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrameRate: 'number',
      bitRate: 'number',
      videoFrameRate: 'number',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo: DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveDomainFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseRecords extends $tea.Model {
  recordId: string;
  appId: string;
  boardId: number;
  recordStartTime: number;
  startTime: number;
  endTime: number;
  state: number;
  ossPath: string;
  ossBucket: string;
  ossEndpoint: string;
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

export class DescribeLiveDomainMappingResponseLiveDomainModelsLiveDomainModel extends $tea.Model {
  domainName: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseLiveDomainModels extends $tea.Model {
  liveDomainModel: DescribeLiveDomainMappingResponseLiveDomainModelsLiveDomainModel[];
  static names(): { [key: string]: string } {
    return {
      liveDomainModel: 'LiveDomainModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainModel: { 'type': 'array', 'itemType': DescribeLiveDomainMappingResponseLiveDomainModelsLiveDomainModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTopDomainsByFlowResponseTopDomainsTopDomain extends $tea.Model {
  domainName: string;
  rank: number;
  totalTraffic: string;
  trafficPercent: string;
  maxBps: number;
  maxBpsTime: string;
  totalAccess: number;
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

export class DescribeLiveTopDomainsByFlowResponseTopDomains extends $tea.Model {
  topDomain: DescribeLiveTopDomainsByFlowResponseTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeLiveTopDomainsByFlowResponseTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeBpsDataResponseRealTimeBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
  code: string;
  proportion: string;
  count: string;
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

export class DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageData extends $tea.Model {
  timeStamp: string;
  value: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageDataValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeData extends $tea.Model {
  usageData: DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeHttpCodeDataResponseRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeTrafficDataResponseRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigListLiveLazyPullConfig extends $tea.Model {
  domainName: string;
  appName: string;
  pullDomainName: string;
  pullAppName: string;
  pullProtocol: string;
  pullAuthType: string;
  pullAuthKey: string;
  pullArgs: string;
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

export class DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigList extends $tea.Model {
  liveLazyPullConfig: DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigListLiveLazyPullConfig[];
  static names(): { [key: string]: string } {
    return {
      liveLazyPullConfig: 'LiveLazyPullConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveLazyPullConfig: { 'type': 'array', 'itemType': DescribeLiveLazyPullStreamConfigResponseLiveLazyPullConfigListLiveLazyPullConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCasterSceneAudioRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  validChannel?: string;
  fixedDelayDuration?: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      validChannel: 'ValidChannel',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      validChannel: 'string',
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseAudioLayersAudioLayer extends $tea.Model {
  volumeRate: number;
  validChannel: string;
  fixedDelayDuration: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      validChannel: 'ValidChannel',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      validChannel: 'string',
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseAudioLayers extends $tea.Model {
  audioLayer: DescribeCasterSceneAudioResponseAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterSceneAudioResponseAudioLayersAudioLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseMixList extends $tea.Model {
  locationId: string[];
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

export class DescribeCasterChannelsResponseChannelsChannel extends $tea.Model {
  channelId: string;
  resourceId: string;
  streamUrl: string;
  rtmpUrl: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      resourceId: 'ResourceId',
      streamUrl: 'StreamUrl',
      rtmpUrl: 'RtmpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      resourceId: 'string',
      streamUrl: 'string',
      rtmpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseChannels extends $tea.Model {
  channel: DescribeCasterChannelsResponseChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': DescribeCasterChannelsResponseChannelsChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseSnapshotBoardPagesElements extends $tea.Model {
  elementIndex: string;
  ownerId: string;
  elementType: number;
  updateTimestamp: number;
  data: string;
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

export class DescribeBoardSnapshotResponseSnapshotBoardPages extends $tea.Model {
  pageIndex: number;
  elements: DescribeBoardSnapshotResponseSnapshotBoardPagesElements[];
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      elements: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseSnapshotBoardPagesElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseSnapshotBoardConfigs extends $tea.Model {
  appUid: string;
  data: string;
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

export class DescribeBoardSnapshotResponseSnapshotBoard extends $tea.Model {
  boardId: string;
  appUid: string;
  eventTimestamp: number;
  createTimestamp: number;
  updateTimestamp: number;
  pages: DescribeBoardSnapshotResponseSnapshotBoardPages[];
  configs: DescribeBoardSnapshotResponseSnapshotBoardConfigs[];
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
      pages: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseSnapshotBoardPages },
      configs: { 'type': 'array', 'itemType': DescribeBoardSnapshotResponseSnapshotBoardConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardSnapshotResponseSnapshot extends $tea.Model {
  board: DescribeBoardSnapshotResponseSnapshotBoard;
  static names(): { [key: string]: string } {
    return {
      board: 'Board',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: DescribeBoardSnapshotResponseSnapshotBoard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBoardsResponseBoards extends $tea.Model {
  boardId: string;
  topic: string;
  state: number;
  userId: string;
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

export class DescribeBoardEventsResponseEvents extends $tea.Model {
  eventId: number;
  eventType: number;
  userId: number;
  data: string;
  timestamp: number;
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

export class DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail extends $tea.Model {
  format: string;
  videoDataRate: number;
  count: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      videoDataRate: 'VideoDataRate',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      videoDataRate: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetails extends $tea.Model {
  streamCountDetail: DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail[];
  static names(): { [key: string]: string } {
    return {
      streamCountDetail: 'StreamCountDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountDetail: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfo extends $tea.Model {
  count: number;
  limit: number;
  type: string;
  streamCountDetails: DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetails;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      limit: 'Limit',
      type: 'Type',
      streamCountDetails: 'StreamCountDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      limit: 'number',
      type: 'string',
      streamCountDetails: DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfoStreamCountDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseStreamCountInfos extends $tea.Model {
  streamCountInfo: DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfo[];
  static names(): { [key: string]: string } {
    return {
      streamCountInfo: 'StreamCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountInfo: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseStreamCountInfosStreamCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfosInfos extends $tea.Model {
  downFlow: number;
  rate: string;
  online: number;
  static names(): { [key: string]: string } {
    return {
      downFlow: 'DownFlow',
      rate: 'Rate',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downFlow: 'number',
      rate: 'string',
      online: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfos extends $tea.Model {
  streamName: string;
  infos: DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfosInfos[];
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      infos: 'Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      infos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfosInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseUsageData extends $tea.Model {
  domainName: string;
  streamInfos: DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      streamInfos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseUsageDataStreamInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseCertificateListModelCertListCert extends $tea.Model {
  certName: string;
  certId: number;
  fingerprint: string;
  common: string;
  issuer: string;
  lastTime: number;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certId: 'CertId',
      fingerprint: 'Fingerprint',
      common: 'Common',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certId: 'number',
      fingerprint: 'string',
      common: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseCertificateListModelCertList extends $tea.Model {
  cert: DescribeLiveCertificateListResponseCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeLiveCertificateListResponseCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCertificateListResponseCertificateListModel extends $tea.Model {
  count: number;
  certList: DescribeLiveCertificateListResponseCertificateListModelCertList;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      certList: 'CertList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      certList: DescribeLiveCertificateListResponseCertificateListModelCertList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName: string;
  argValue: string;
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

export class DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg: DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseDomainConfigsDomainConfig extends $tea.Model {
  functionName: string;
  configId: string;
  status: string;
  functionArgs: DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      configId: 'ConfigId',
      status: 'Status',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      configId: 'string',
      status: 'string',
      functionArgs: DescribeLiveDomainConfigsResponseDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainConfigsResponseDomainConfigs extends $tea.Model {
  domainConfig: DescribeLiveDomainConfigsResponseDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponseDomainDetail extends $tea.Model {
  gmtCreated: string;
  gmtModified: string;
  domainStatus: string;
  cname: string;
  domainName: string;
  liveDomainType: string;
  region: string;
  description: string;
  SSLProtocol: string;
  SSLPub: string;
  scope: string;
  certName: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      domainName: 'DomainName',
      liveDomainType: 'LiveDomainType',
      region: 'Region',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      domainStatus: 'string',
      cname: 'string',
      domainName: 'string',
      liveDomainType: 'string',
      region: 'string',
      description: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomListResponseRoomList extends $tea.Model {
  roomId: string;
  anchorId: string;
  roomStatus: number;
  forbidStream: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      anchorId: 'AnchorId',
      roomStatus: 'RoomStatus',
      forbidStream: 'ForbidStream',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      anchorId: 'string',
      roomStatus: 'number',
      forbidStream: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoomKickoutUserListResponseUserList extends $tea.Model {
  appUid: string;
  opStartTime: string;
  opEndTime: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      opStartTime: 'OpStartTime',
      opEndTime: 'OpEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      opStartTime: 'string',
      opEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForbidPushStreamRoomListResponseRoomList extends $tea.Model {
  roomId: string;
  anchorId: string;
  opStartTime: string;
  opEndTime: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      anchorId: 'AnchorId',
      opStartTime: 'OpStartTime',
      opEndTime: 'OpEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      anchorId: 'string',
      opStartTime: 'string',
      opEndTime: 'string',
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

export class DescribeLiveUserDomainsResponseDomainsPageData extends $tea.Model {
  domainName: string;
  cname: string;
  liveDomainType: string;
  gmtCreated: string;
  gmtModified: string;
  description: string;
  liveDomainStatus: string;
  regionName: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      cname: 'Cname',
      liveDomainType: 'LiveDomainType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      description: 'Description',
      liveDomainStatus: 'LiveDomainStatus',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      cname: 'string',
      liveDomainType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      description: 'string',
      liveDomainStatus: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseDomains extends $tea.Model {
  pageData: DescribeLiveUserDomainsResponseDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeLiveUserDomainsResponseDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakDataResponseDescribeUpPeakTrafficsDescribeUpPeakTraffic extends $tea.Model {
  peakTime: string;
  queryTime: string;
  statName: string;
  bandWidth: string;
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

export class DescribeUpBpsPeakDataResponseDescribeUpPeakTraffics extends $tea.Model {
  describeUpPeakTraffic: DescribeUpBpsPeakDataResponseDescribeUpPeakTrafficsDescribeUpPeakTraffic[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakTraffic: 'DescribeUpPeakTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakTraffic: { 'type': 'array', 'itemType': DescribeUpBpsPeakDataResponseDescribeUpPeakTrafficsDescribeUpPeakTraffic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine extends $tea.Model {
  bandWidth: number;
  peakTime: string;
  queryTime: string;
  statName: string;
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

export class DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLines extends $tea.Model {
  describeUpBpsPeakOfLine: DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine[];
  static names(): { [key: string]: string } {
    return {
      describeUpBpsPeakOfLine: 'DescribeUpBpsPeakOfLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpBpsPeakOfLine: { 'type': 'array', 'itemType': DescribeUpBpsPeakOfLineResponseDescribeUpBpsPeakOfLinesDescribeUpBpsPeakOfLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData extends $tea.Model {
  publishStreamNum: number;
  peakTime: string;
  queryTime: string;
  statName: string;
  bandWidth: string;
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

export class DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatas extends $tea.Model {
  describeUpPeakPublishStreamData: DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData[];
  static names(): { [key: string]: string } {
    return {
      describeUpPeakPublishStreamData: 'DescribeUpPeakPublishStreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeUpPeakPublishStreamData: { 'type': 'array', 'itemType': DescribeUpPeakPublishStreamDataResponseDescribeUpPeakPublishStreamDatasDescribeUpPeakPublishStreamData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupContentResponseItemIds extends $tea.Model {
  itemId: string[];
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

export class ModifyCasterProgramRequestEpisode extends $tea.Model {
  episodeId?: string;
  episodeType?: string;
  episodeName?: string;
  resourceId?: string;
  componentId?: string[];
  startTime?: string;
  endTime?: string;
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
      episodeType: 'EpisodeType',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: 'string',
      episodeType: 'string',
      episodeName: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseEpisodesEpisodeComponentIds extends $tea.Model {
  componentId: string[];
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

export class DescribeCasterProgramResponseEpisodesEpisode extends $tea.Model {
  episodeId: string;
  episodeType: string;
  episodeName: string;
  resourceId: string;
  startTime: string;
  endTime: string;
  switchType: string;
  status: number;
  componentIds: DescribeCasterProgramResponseEpisodesEpisodeComponentIds;
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
      episodeType: 'EpisodeType',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
      status: 'Status',
      componentIds: 'ComponentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: 'string',
      episodeType: 'string',
      episodeName: 'string',
      resourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
      status: 'number',
      componentIds: DescribeCasterProgramResponseEpisodesEpisodeComponentIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseEpisodes extends $tea.Model {
  episode: DescribeCasterProgramResponseEpisodesEpisode[];
  static names(): { [key: string]: string } {
    return {
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episode: { 'type': 'array', 'itemType': DescribeCasterProgramResponseEpisodesEpisode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramRequestEpisode extends $tea.Model {
  episodeType?: string;
  episodeName?: string;
  resourceId?: string;
  componentId?: string[];
  startTime?: string;
  endTime?: string;
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      episodeType: 'EpisodeType',
      episodeName: 'EpisodeName',
      resourceId: 'ResourceId',
      componentId: 'ComponentId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeType: 'string',
      episodeName: 'string',
      resourceId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      endTime: 'string',
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseEpisodeIdsEpisodeId extends $tea.Model {
  episodeId: string;
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

export class AddCasterProgramResponseEpisodeIds extends $tea.Model {
  episodeId: AddCasterProgramResponseEpisodeIdsEpisodeId[];
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: { 'type': 'array', 'itemType': AddCasterProgramResponseEpisodeIdsEpisodeId },
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

export class AddCasterEpisodeGroupResponseItemIds extends $tea.Model {
  itemId: string[];
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

export class DescribeLiveDomainTranscodeDataResponseTranscodeDataInfosTranscodeDataInfo extends $tea.Model {
  date: string;
  total: number;
  detail: string;
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

export class DescribeLiveDomainTranscodeDataResponseTranscodeDataInfos extends $tea.Model {
  transcodeDataInfo: DescribeLiveDomainTranscodeDataResponseTranscodeDataInfosTranscodeDataInfo[];
  static names(): { [key: string]: string } {
    return {
      transcodeDataInfo: 'TranscodeDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainTranscodeDataResponseTranscodeDataInfosTranscodeDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseSnapshotDataInfosSnapshotDataInfo extends $tea.Model {
  date: string;
  total: number;
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

export class DescribeLiveDomainSnapshotDataResponseSnapshotDataInfos extends $tea.Model {
  snapshotDataInfo: DescribeLiveDomainSnapshotDataResponseSnapshotDataInfosSnapshotDataInfo[];
  static names(): { [key: string]: string } {
    return {
      snapshotDataInfo: 'SnapshotDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainSnapshotDataResponseSnapshotDataInfosSnapshotDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfoDetail extends $tea.Model {
  MP4: number;
  FLV: number;
  TS: number;
  static names(): { [key: string]: string } {
    return {
      MP4: 'MP4',
      FLV: 'FLV',
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MP4: 'number',
      FLV: 'number',
      TS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfo extends $tea.Model {
  date: string;
  total: number;
  detail: DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfoDetail;
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
      detail: DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfoDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainRecordDataResponseRecordDataInfos extends $tea.Model {
  recordDataInfo: DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfo[];
  static names(): { [key: string]: string } {
    return {
      recordDataInfo: 'RecordDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainRecordDataResponseRecordDataInfosRecordDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseTrafficDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  trafficValue: string;
  httpTrafficValue: string;
  httpsTrafficValue: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      httpTrafficValue: 'HttpTrafficValue',
      httpsTrafficValue: 'HttpsTrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
      httpTrafficValue: 'string',
      httpsTrafficValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseTrafficDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainTrafficDataResponseTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTrafficDataResponseTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponseBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp: string;
  bpsValue: string;
  httpBpsValue: string;
  httpsBpsValue: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      bpsValue: 'BpsValue',
      httpBpsValue: 'HttpBpsValue',
      httpsBpsValue: 'HttpsBpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      bpsValue: 'string',
      httpBpsValue: 'string',
      httpsBpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainBpsDataResponseBpsDataPerInterval extends $tea.Model {
  dataModule: DescribeLiveDomainBpsDataResponseBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainBpsDataResponseBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigsLiveRecordVodConfig extends $tea.Model {
  createTime: string;
  domainName: string;
  appName: string;
  streamName: string;
  vodTranscodeGroupId: string;
  cycleDuration: number;
  autoCompose: string;
  composeVodTranscodeGroupId: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
      cycleDuration: 'CycleDuration',
      autoCompose: 'AutoCompose',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      vodTranscodeGroupId: 'string',
      cycleDuration: 'number',
      autoCompose: 'string',
      composeVodTranscodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigs extends $tea.Model {
  liveRecordVodConfig: DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigsLiveRecordVodConfig[];
  static names(): { [key: string]: string } {
    return {
      liveRecordVodConfig: 'LiveRecordVodConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVodConfig: { 'type': 'array', 'itemType': DescribeLiveRecordVodConfigsResponseLiveRecordVodConfigsLiveRecordVodConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseComponentsComponentComponentLayerPositionNormalizeds extends $tea.Model {
  position: number[];
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

export class DescribeCasterComponentsResponseComponentsComponentComponentLayer extends $tea.Model {
  heightNormalized: number;
  widthNormalized: number;
  positionRefer: string;
  transparency: number;
  positionNormalizeds: DescribeCasterComponentsResponseComponentsComponentComponentLayerPositionNormalizeds;
  static names(): { [key: string]: string } {
    return {
      heightNormalized: 'HeightNormalized',
      widthNormalized: 'WidthNormalized',
      positionRefer: 'PositionRefer',
      transparency: 'Transparency',
      positionNormalizeds: 'PositionNormalizeds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heightNormalized: 'number',
      widthNormalized: 'number',
      positionRefer: 'string',
      transparency: 'number',
      positionNormalizeds: DescribeCasterComponentsResponseComponentsComponentComponentLayerPositionNormalizeds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseComponentsComponentTextLayerContent extends $tea.Model {
  text: string;
  color: string;
  fontName: string;
  sizeNormalized: number;
  borderWidthNormalized: number;
  borderColor: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      color: 'Color',
      fontName: 'FontName',
      sizeNormalized: 'SizeNormalized',
      borderWidthNormalized: 'BorderWidthNormalized',
      borderColor: 'BorderColor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      color: 'string',
      fontName: 'string',
      sizeNormalized: 'number',
      borderWidthNormalized: 'number',
      borderColor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseComponentsComponentImageLayerContent extends $tea.Model {
  materialId: string;
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

export class DescribeCasterComponentsResponseComponentsComponentCaptionLayerContent extends $tea.Model {
  locationId: string;
  ptsOffset: number;
  wordsCount: number;
  color: string;
  fontName: string;
  sizeNormalized: number;
  borderWidthNormalized: number;
  borderColor: string;
  wordCountPerLine: number;
  wordSpaceNormalized: number;
  lineSpaceNormalized: number;
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
      ptsOffset: 'PtsOffset',
      wordsCount: 'WordsCount',
      color: 'Color',
      fontName: 'FontName',
      sizeNormalized: 'SizeNormalized',
      borderWidthNormalized: 'BorderWidthNormalized',
      borderColor: 'BorderColor',
      wordCountPerLine: 'WordCountPerLine',
      wordSpaceNormalized: 'WordSpaceNormalized',
      lineSpaceNormalized: 'LineSpaceNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: 'string',
      ptsOffset: 'number',
      wordsCount: 'number',
      color: 'string',
      fontName: 'string',
      sizeNormalized: 'number',
      borderWidthNormalized: 'number',
      borderColor: 'string',
      wordCountPerLine: 'number',
      wordSpaceNormalized: 'number',
      lineSpaceNormalized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseComponentsComponent extends $tea.Model {
  componentId: string;
  componentName: string;
  locationId: string;
  componentType: string;
  effect: string;
  componentLayer: DescribeCasterComponentsResponseComponentsComponentComponentLayer;
  textLayerContent: DescribeCasterComponentsResponseComponentsComponentTextLayerContent;
  imageLayerContent: DescribeCasterComponentsResponseComponentsComponentImageLayerContent;
  captionLayerContent: DescribeCasterComponentsResponseComponentsComponentCaptionLayerContent;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      locationId: 'LocationId',
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
      componentId: 'string',
      componentName: 'string',
      locationId: 'string',
      componentType: 'string',
      effect: 'string',
      componentLayer: DescribeCasterComponentsResponseComponentsComponentComponentLayer,
      textLayerContent: DescribeCasterComponentsResponseComponentsComponentTextLayerContent,
      imageLayerContent: DescribeCasterComponentsResponseComponentsComponentImageLayerContent,
      captionLayerContent: DescribeCasterComponentsResponseComponentsComponentCaptionLayerContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterComponentsResponseComponents extends $tea.Model {
  component: DescribeCasterComponentsResponseComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': DescribeCasterComponentsResponseComponentsComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponsePvwSceneInfosSceneInfo extends $tea.Model {
  sceneId: string;
  streamUrl: string;
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

export class StartCasterResponsePvwSceneInfos extends $tea.Model {
  sceneInfo: StartCasterResponsePvwSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponsePvwSceneInfosSceneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponsePgmSceneInfosSceneInfoStreamInfosStreamInfo extends $tea.Model {
  transcodeConfig: string;
  videoFormat: string;
  outputStreamUrl: string;
  static names(): { [key: string]: string } {
    return {
      transcodeConfig: 'TranscodeConfig',
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeConfig: 'string',
      videoFormat: 'string',
      outputStreamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponsePgmSceneInfosSceneInfoStreamInfos extends $tea.Model {
  streamInfo: StartCasterResponsePgmSceneInfosSceneInfoStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': StartCasterResponsePgmSceneInfosSceneInfoStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponsePgmSceneInfosSceneInfo extends $tea.Model {
  sceneId: string;
  streamUrl: string;
  streamInfos: StartCasterResponsePgmSceneInfosSceneInfoStreamInfos;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      streamUrl: 'string',
      streamInfos: StartCasterResponsePgmSceneInfosSceneInfoStreamInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponsePgmSceneInfos extends $tea.Model {
  sceneInfo: StartCasterResponsePgmSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponsePgmSceneInfosSceneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfosLiveStreamUserNumInfo extends $tea.Model {
  streamTime: string;
  userNum: string;
  static names(): { [key: string]: string } {
    return {
      streamTime: 'StreamTime',
      userNum: 'UserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamTime: 'string',
      userNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfos extends $tea.Model {
  liveStreamUserNumInfo: DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfosLiveStreamUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamUserNumInfo: 'LiveStreamUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveStreamHistoryUserNumResponseLiveStreamUserNumInfosLiveStreamUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequestVideoLayer extends $tea.Model {
  fillMode?: string;
  heightNormalized?: number;
  widthNormalized?: number;
  positionRefer?: string;
  positionNormalized?: number[];
  fixedDelayDuration?: number;
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      heightNormalized: 'HeightNormalized',
      widthNormalized: 'WidthNormalized',
      positionRefer: 'PositionRefer',
      positionNormalized: 'PositionNormalized',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      heightNormalized: 'number',
      widthNormalized: 'number',
      positionRefer: 'string',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCasterLayoutRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  validChannel?: string;
  fixedDelayDuration?: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      validChannel: 'ValidChannel',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      validChannel: 'string',
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseVideoResourcesVideoResource extends $tea.Model {
  materialId: string;
  resourceId: string;
  resourceName: string;
  locationId: string;
  liveStreamUrl: string;
  repeatNum: number;
  vodUrl: string;
  beginOffset: number;
  endOffset: number;
  ptsCallbackInterval: number;
  static names(): { [key: string]: string } {
    return {
      materialId: 'MaterialId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      locationId: 'LocationId',
      liveStreamUrl: 'LiveStreamUrl',
      repeatNum: 'RepeatNum',
      vodUrl: 'VodUrl',
      beginOffset: 'BeginOffset',
      endOffset: 'EndOffset',
      ptsCallbackInterval: 'PtsCallbackInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      locationId: 'string',
      liveStreamUrl: 'string',
      repeatNum: 'number',
      vodUrl: 'string',
      beginOffset: 'number',
      endOffset: 'number',
      ptsCallbackInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterVideoResourcesResponseVideoResources extends $tea.Model {
  videoResource: DescribeCasterVideoResourcesResponseVideoResourcesVideoResource[];
  static names(): { [key: string]: string } {
    return {
      videoResource: 'VideoResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoResource: { 'type': 'array', 'itemType': DescribeCasterVideoResourcesResponseVideoResourcesVideoResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfosStreamInfo extends $tea.Model {
  transcodeConfig: string;
  videoFormat: string;
  outputStreamUrl: string;
  static names(): { [key: string]: string } {
    return {
      transcodeConfig: 'TranscodeConfig',
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeConfig: 'string',
      videoFormat: 'string',
      outputStreamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfos extends $tea.Model {
  streamInfo: DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseCasterStreamsCasterStream extends $tea.Model {
  sceneId: string;
  streamUrl: string;
  rtmpUrl: string;
  outputType: number;
  streamInfos: DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfos;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
      rtmpUrl: 'RtmpUrl',
      outputType: 'OutputType',
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      streamUrl: 'string',
      rtmpUrl: 'string',
      outputType: 'number',
      streamInfos: DescribeCasterStreamUrlResponseCasterStreamsCasterStreamStreamInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseCasterStreams extends $tea.Model {
  casterStream: DescribeCasterStreamUrlResponseCasterStreamsCasterStream[];
  static names(): { [key: string]: string } {
    return {
      casterStream: 'CasterStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterStream: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseCasterStreamsCasterStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseSceneListSceneStreamInfosStreamInfo extends $tea.Model {
  transcodeConfig: string;
  videoFormat: string;
  outputStreamUrl: string;
  static names(): { [key: string]: string } {
    return {
      transcodeConfig: 'TranscodeConfig',
      videoFormat: 'VideoFormat',
      outputStreamUrl: 'OutputStreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeConfig: 'string',
      videoFormat: 'string',
      outputStreamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseSceneListSceneStreamInfos extends $tea.Model {
  streamInfo: DescribeCasterScenesResponseSceneListSceneStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterScenesResponseSceneListSceneStreamInfosStreamInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseSceneListSceneComponentIds extends $tea.Model {
  componentId: string[];
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

export class DescribeCasterScenesResponseSceneListScene extends $tea.Model {
  sceneId: string;
  sceneName: string;
  outputType: string;
  layoutId: string;
  streamUrl: string;
  status: number;
  streamInfos: DescribeCasterScenesResponseSceneListSceneStreamInfos;
  componentIds: DescribeCasterScenesResponseSceneListSceneComponentIds;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      outputType: 'OutputType',
      layoutId: 'LayoutId',
      streamUrl: 'StreamUrl',
      status: 'Status',
      streamInfos: 'StreamInfos',
      componentIds: 'ComponentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      sceneName: 'string',
      outputType: 'string',
      layoutId: 'string',
      streamUrl: 'string',
      status: 'number',
      streamInfos: DescribeCasterScenesResponseSceneListSceneStreamInfos,
      componentIds: DescribeCasterScenesResponseSceneListSceneComponentIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseSceneList extends $tea.Model {
  scene: DescribeCasterScenesResponseSceneListScene[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': DescribeCasterScenesResponseSceneListScene },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseCasterListCaster extends $tea.Model {
  status: number;
  normType: number;
  casterId: string;
  casterName: string;
  createTime: string;
  startTime: string;
  purchaseTime: string;
  expireTime: string;
  chargeType: string;
  casterTemplate: string;
  channelEnable: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      normType: 'NormType',
      casterId: 'CasterId',
      casterName: 'CasterName',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      purchaseTime: 'PurchaseTime',
      expireTime: 'ExpireTime',
      chargeType: 'ChargeType',
      casterTemplate: 'CasterTemplate',
      channelEnable: 'ChannelEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      normType: 'number',
      casterId: 'string',
      casterName: 'string',
      createTime: 'string',
      startTime: 'string',
      purchaseTime: 'string',
      expireTime: 'string',
      chargeType: 'string',
      casterTemplate: 'string',
      channelEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseCasterList extends $tea.Model {
  caster: DescribeCastersResponseCasterListCaster[];
  static names(): { [key: string]: string } {
    return {
      caster: 'Caster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caster: { 'type': 'array', 'itemType': DescribeCastersResponseCasterListCaster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds extends $tea.Model {
  position: number[];
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

export class DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayer extends $tea.Model {
  fillMode: string;
  heightNormalized: number;
  widthNormalized: number;
  positionRefer: string;
  fixedDelayDuration: number;
  positionNormalizeds: DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds;
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      heightNormalized: 'HeightNormalized',
      widthNormalized: 'WidthNormalized',
      positionRefer: 'PositionRefer',
      fixedDelayDuration: 'FixedDelayDuration',
      positionNormalizeds: 'PositionNormalizeds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      heightNormalized: 'number',
      widthNormalized: 'number',
      positionRefer: 'string',
      fixedDelayDuration: 'number',
      positionNormalizeds: DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayerPositionNormalizeds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayoutsLayoutVideoLayers extends $tea.Model {
  videoLayer: DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayer[];
  static names(): { [key: string]: string } {
    return {
      videoLayer: 'VideoLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseLayoutsLayoutVideoLayersVideoLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayoutsLayoutAudioLayersAudioLayer extends $tea.Model {
  volumeRate: number;
  validChannel: string;
  fixedDelayDuration: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      validChannel: 'ValidChannel',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      validChannel: 'string',
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayoutsLayoutAudioLayers extends $tea.Model {
  audioLayer: DescribeCasterLayoutsResponseLayoutsLayoutAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseLayoutsLayoutAudioLayersAudioLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayoutsLayoutBlendList extends $tea.Model {
  locationId: string[];
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

export class DescribeCasterLayoutsResponseLayoutsLayoutMixList extends $tea.Model {
  locationId: string[];
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

export class DescribeCasterLayoutsResponseLayoutsLayout extends $tea.Model {
  layoutId: string;
  videoLayers: DescribeCasterLayoutsResponseLayoutsLayoutVideoLayers;
  audioLayers: DescribeCasterLayoutsResponseLayoutsLayoutAudioLayers;
  blendList: DescribeCasterLayoutsResponseLayoutsLayoutBlendList;
  mixList: DescribeCasterLayoutsResponseLayoutsLayoutMixList;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      videoLayers: 'VideoLayers',
      audioLayers: 'AudioLayers',
      blendList: 'BlendList',
      mixList: 'MixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      videoLayers: DescribeCasterLayoutsResponseLayoutsLayoutVideoLayers,
      audioLayers: DescribeCasterLayoutsResponseLayoutsLayoutAudioLayers,
      blendList: DescribeCasterLayoutsResponseLayoutsLayoutBlendList,
      mixList: DescribeCasterLayoutsResponseLayoutsLayoutMixList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterLayoutsResponseLayouts extends $tea.Model {
  layout: DescribeCasterLayoutsResponseLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeCasterLayoutsResponseLayoutsLayout },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseTranscodeConfigLiveTemplateIds extends $tea.Model {
  locationId: string[];
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

export class DescribeCasterConfigResponseTranscodeConfig extends $tea.Model {
  casterTemplate: string;
  liveTemplateIds: DescribeCasterConfigResponseTranscodeConfigLiveTemplateIds;
  static names(): { [key: string]: string } {
    return {
      casterTemplate: 'CasterTemplate',
      liveTemplateIds: 'LiveTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterTemplate: 'string',
      liveTemplateIds: DescribeCasterConfigResponseTranscodeConfigLiveTemplateIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseRecordConfigRecordFormatRecordFormat extends $tea.Model {
  format: string;
  ossObjectPrefix: string;
  sliceOssObjectPrefix: string;
  cycleDuration: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      cycleDuration: 'CycleDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      ossObjectPrefix: 'string',
      sliceOssObjectPrefix: 'string',
      cycleDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseRecordConfigRecordFormat extends $tea.Model {
  recordFormat: DescribeCasterConfigResponseRecordConfigRecordFormatRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeCasterConfigResponseRecordConfigRecordFormatRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseRecordConfig extends $tea.Model {
  ossEndpoint: string;
  ossBucket: string;
  recordFormat: DescribeCasterConfigResponseRecordConfigRecordFormat;
  static names(): { [key: string]: string } {
    return {
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossEndpoint: 'string',
      ossBucket: 'string',
      recordFormat: DescribeCasterConfigResponseRecordConfigRecordFormat,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutRequestVideoLayer extends $tea.Model {
  fillMode?: string;
  heightNormalized?: number;
  widthNormalized?: number;
  positionRefer?: string;
  positionNormalized?: number[];
  fixedDelayDuration?: number;
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      heightNormalized: 'HeightNormalized',
      widthNormalized: 'WidthNormalized',
      positionRefer: 'PositionRefer',
      positionNormalized: 'PositionNormalized',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      heightNormalized: 'number',
      widthNormalized: 'number',
      positionRefer: 'string',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterLayoutRequestAudioLayer extends $tea.Model {
  volumeRate?: number;
  validChannel?: string;
  fixedDelayDuration?: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
      validChannel: 'ValidChannel',
      fixedDelayDuration: 'FixedDelayDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
      validChannel: 'string',
      fixedDelayDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseLiveAppRecordListLiveAppRecord extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  sourceUrl: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseLiveAppRecordList extends $tea.Model {
  liveAppRecord: DescribeLivePullStreamConfigResponseLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLivePullStreamConfigResponseLiveAppRecordListLiveAppRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  streamUrl: string;
  videoFrameRate: number;
  audioFrameRate: number;
  bitRate: number;
  time: string;
  static names(): { [key: string]: string } {
    return {
      streamUrl: 'StreamUrl',
      videoFrameRate: 'VideoFrameRate',
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamUrl: 'string',
      videoFrameRate: 'number',
      audioFrameRate: 'number',
      bitRate: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo: DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponseLiveDetectNotifyConfig extends $tea.Model {
  domainName: string;
  notifyUrl: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes extends $tea.Model {
  scene: string[];
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

export class DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig extends $tea.Model {
  domainName: string;
  appName: string;
  ossEndpoint: string;
  ossBucket: string;
  ossObject: string;
  interval: number;
  scenes: DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      interval: 'Interval',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      interval: 'number',
      scenes: DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigList extends $tea.Model {
  liveSnapshotDetectPornConfig: DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig[];
  static names(): { [key: string]: string } {
    return {
      liveSnapshotDetectPornConfig: 'LiveSnapshotDetectPornConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveSnapshotDetectPornConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotDetectPornConfigResponseLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponseLiveRecordNotifyConfig extends $tea.Model {
  domainName: string;
  notifyUrl: string;
  onDemandUrl: string;
  needStatusNotify: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      onDemandUrl: 'OnDemandUrl',
      needStatusNotify: 'NeedStatusNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLiveStreamsNotifyUrlConfigResponseLiveStreamsNotifyConfig extends $tea.Model {
  domainName: string;
  notifyUrl: string;
  authType: string;
  authKey: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      authType: 'AuthType',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyUrl: 'string',
      authType: 'string',
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsBlockListResponseStreamUrls extends $tea.Model {
  streamUrl: string[];
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

export class DescribeLiveStreamOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo extends $tea.Model {
  streamUrl: string;
  userNumber: number;
  time: string;
  static names(): { [key: string]: string } {
    return {
      streamUrl: 'StreamUrl',
      userNumber: 'UserNumber',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamUrl: 'string',
      userNumber: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamOnlineUserNumResponseOnlineUserInfo extends $tea.Model {
  liveStreamOnlineUserNumInfo: DescribeLiveStreamOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeLiveStreamOnlineUserNumResponseOnlineUserInfoLiveStreamOnlineUserNumInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponsePublishInfoLiveStreamPublishInfo extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  streamUrl: string;
  publishTime: string;
  stopTime: string;
  publishUrl: string;
  clientAddr: string;
  edgeNodeAddr: string;
  publishDomain: string;
  publishType: string;
  transcoded: string;
  transcodeId: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      streamUrl: 'StreamUrl',
      publishTime: 'PublishTime',
      stopTime: 'StopTime',
      publishUrl: 'PublishUrl',
      clientAddr: 'ClientAddr',
      edgeNodeAddr: 'EdgeNodeAddr',
      publishDomain: 'PublishDomain',
      publishType: 'PublishType',
      transcoded: 'Transcoded',
      transcodeId: 'TranscodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      streamUrl: 'string',
      publishTime: 'string',
      stopTime: 'string',
      publishUrl: 'string',
      clientAddr: 'string',
      edgeNodeAddr: 'string',
      publishDomain: 'string',
      publishType: 'string',
      transcoded: 'string',
      transcodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsPublishListResponsePublishInfo extends $tea.Model {
  liveStreamPublishInfo: DescribeLiveStreamsPublishListResponsePublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsPublishListResponsePublishInfoLiveStreamPublishInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseOnlineInfoLiveStreamOnlineInfo extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  publishTime: string;
  publishUrl: string;
  publishDomain: string;
  publishType: string;
  transcoded: string;
  transcodeId: string;
  serverIp: string;
  clientIp: string;
  videoCodecId: number;
  videoDataRate: number;
  frameRate: number;
  width: number;
  height: number;
  audioCodecId: number;
  audioDataRate: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      publishTime: 'PublishTime',
      publishUrl: 'PublishUrl',
      publishDomain: 'PublishDomain',
      publishType: 'PublishType',
      transcoded: 'Transcoded',
      transcodeId: 'TranscodeId',
      serverIp: 'ServerIp',
      clientIp: 'ClientIp',
      videoCodecId: 'VideoCodecId',
      videoDataRate: 'VideoDataRate',
      frameRate: 'FrameRate',
      width: 'Width',
      height: 'Height',
      audioCodecId: 'AudioCodecId',
      audioDataRate: 'AudioDataRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      publishTime: 'string',
      publishUrl: 'string',
      publishDomain: 'string',
      publishType: 'string',
      transcoded: 'string',
      transcodeId: 'string',
      serverIp: 'string',
      clientIp: 'string',
      videoCodecId: 'number',
      videoDataRate: 'number',
      frameRate: 'number',
      width: 'number',
      height: 'number',
      audioCodecId: 'number',
      audioDataRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsOnlineListResponseOnlineInfo extends $tea.Model {
  liveStreamOnlineInfo: DescribeLiveStreamsOnlineListResponseOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsOnlineListResponseOnlineInfoLiveStreamOnlineInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseControlInfoLiveStreamControlInfo extends $tea.Model {
  streamName: string;
  clientIP: string;
  action: string;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      clientIP: 'ClientIP',
      action: 'Action',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      clientIP: 'string',
      action: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseControlInfo extends $tea.Model {
  liveStreamControlInfo: DescribeLiveStreamsControlHistoryResponseControlInfoLiveStreamControlInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamControlInfo: 'LiveStreamControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamControlInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsControlHistoryResponseControlInfoLiveStreamControlInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo extends $tea.Model {
  streamUrl: string;
  videoFrameRate: number;
  audioFrameRate: number;
  bitRate: number;
  time: string;
  static names(): { [key: string]: string } {
    return {
      streamUrl: 'StreamUrl',
      videoFrameRate: 'VideoFrameRate',
      audioFrameRate: 'AudioFrameRate',
      bitRate: 'BitRate',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamUrl: 'string',
      videoFrameRate: 'number',
      audioFrameRate: 'number',
      bitRate: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfos extends $tea.Model {
  frameRateAndBitRateInfo: DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo[];
  static names(): { [key: string]: string } {
    return {
      frameRateAndBitRateInfo: 'FrameRateAndBitRateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRateAndBitRateInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsFrameRateAndBitRateDataResponseFrameRateAndBitRateInfosFrameRateAndBitRateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters extends $tea.Model {
  rtsFlag: string;
  bframes: string;
  videoBitrate: number;
  FPS: number;
  height: number;
  width: number;
  templateType: string;
  videoProfile: string;
  gop: string;
  audioBitrate: number;
  audioProfile: string;
  audioCodec: string;
  audioRate: number;
  audioChannelNum: number;
  static names(): { [key: string]: string } {
    return {
      rtsFlag: 'RtsFlag',
      bframes: 'Bframes',
      videoBitrate: 'VideoBitrate',
      FPS: 'FPS',
      height: 'Height',
      width: 'Width',
      templateType: 'TemplateType',
      videoProfile: 'VideoProfile',
      gop: 'Gop',
      audioBitrate: 'AudioBitrate',
      audioProfile: 'AudioProfile',
      audioCodec: 'AudioCodec',
      audioRate: 'AudioRate',
      audioChannelNum: 'AudioChannelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtsFlag: 'string',
      bframes: 'string',
      videoBitrate: 'number',
      FPS: 'number',
      height: 'number',
      width: 'number',
      templateType: 'string',
      videoProfile: 'string',
      gop: 'string',
      audioBitrate: 'number',
      audioProfile: 'string',
      audioCodec: 'string',
      audioRate: 'number',
      audioChannelNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfo extends $tea.Model {
  transcodeApp: string;
  transcodeName: string;
  transcodeTemplate: string;
  customTranscodeParameters: DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters;
  static names(): { [key: string]: string } {
    return {
      transcodeApp: 'TranscodeApp',
      transcodeName: 'TranscodeName',
      transcodeTemplate: 'TranscodeTemplate',
      customTranscodeParameters: 'CustomTranscodeParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeApp: 'string',
      transcodeName: 'string',
      transcodeTemplate: 'string',
      customTranscodeParameters: DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfoCustomTranscodeParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeInfoResponseDomainTranscodeList extends $tea.Model {
  domainTranscodeInfo: DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfo[];
  static names(): { [key: string]: string } {
    return {
      domainTranscodeInfo: 'DomainTranscodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTranscodeInfo: { 'type': 'array', 'itemType': DescribeLiveStreamTranscodeInfoResponseDomainTranscodeListDomainTranscodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveAppRecordConfigRequestRecordFormat extends $tea.Model {
  format?: string;
  ossObjectPrefix?: string;
  sliceOssObjectPrefix?: string;
  cycleDuration?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      cycleDuration: 'CycleDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      ossObjectPrefix: 'string',
      sliceOssObjectPrefix: 'string',
      cycleDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat extends $tea.Model {
  format: string;
  ossObjectPrefix: string;
  sliceOssObjectPrefix: string;
  cycleDuration: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
      cycleDuration: 'CycleDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      ossObjectPrefix: 'string',
      sliceOssObjectPrefix: 'string',
      cycleDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatList extends $tea.Model {
  recordFormat: DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecord extends $tea.Model {
  domainName: string;
  appName: string;
  streamName: string;
  ossEndpoint: string;
  ossBucket: string;
  createTime: string;
  startTime: string;
  endTime: string;
  onDemond: number;
  recordFormatList: DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatList;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      createTime: 'CreateTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      onDemond: 'OnDemond',
      recordFormatList: 'RecordFormatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      createTime: 'string',
      startTime: 'string',
      endTime: 'string',
      onDemond: 'number',
      recordFormatList: DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecordRecordFormatList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseLiveAppRecordList extends $tea.Model {
  liveAppRecord: DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseLiveAppRecordListLiveAppRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLiveStreamRecordIndexFilesResponseRecordInfo extends $tea.Model {
  recordId: string;
  recordUrl: string;
  domainName: string;
  appName: string;
  streamName: string;
  ossBucket: string;
  ossEndpoint: string;
  ossObject: string;
  startTime: string;
  endTime: string;
  duration: number;
  height: number;
  width: number;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      recordUrl: 'RecordUrl',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      duration: 'Duration',
      height: 'Height',
      width: 'Width',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      recordUrl: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      startTime: 'string',
      endTime: 'string',
      duration: 'number',
      height: 'number',
      width: 'number',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoListLiveStreamSnapshotInfo extends $tea.Model {
  ossEndpoint: string;
  ossBucket: string;
  ossObject: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoList extends $tea.Model {
  liveStreamSnapshotInfo: DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoListLiveStreamSnapshotInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotInfo: 'LiveStreamSnapshotInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotInfo: { 'type': 'array', 'itemType': DescribeLiveStreamSnapshotInfoResponseLiveStreamSnapshotInfoListLiveStreamSnapshotInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoListRecordIndexInfo extends $tea.Model {
  recordId: string;
  recordUrl: string;
  domainName: string;
  appName: string;
  streamName: string;
  ossBucket: string;
  ossEndpoint: string;
  ossObject: string;
  startTime: string;
  endTime: string;
  duration: number;
  height: number;
  width: number;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      recordUrl: 'RecordUrl',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      duration: 'Duration',
      height: 'Height',
      width: 'Width',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      recordUrl: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      startTime: 'string',
      endTime: 'string',
      duration: 'number',
      height: 'number',
      width: 'number',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoList extends $tea.Model {
  recordIndexInfo: DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoListRecordIndexInfo[];
  static names(): { [key: string]: string } {
    return {
      recordIndexInfo: 'RecordIndexInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIndexInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordIndexFilesResponseRecordIndexInfoListRecordIndexInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileResponseRecordIndexInfo extends $tea.Model {
  recordId: string;
  recordUrl: string;
  domainName: string;
  appName: string;
  streamName: string;
  ossBucket: string;
  ossEndpoint: string;
  ossObject: string;
  startTime: string;
  endTime: string;
  duration: number;
  height: number;
  width: number;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      recordUrl: 'RecordUrl',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      duration: 'Duration',
      height: 'Height',
      width: 'Width',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      recordUrl: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      startTime: 'string',
      endTime: 'string',
      duration: 'number',
      height: 'number',
      width: 'number',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseRecordContentInfoListRecordContentInfo extends $tea.Model {
  ossEndpoint: string;
  ossBucket: string;
  ossObjectPrefix: string;
  startTime: string;
  endTime: string;
  duration: number;
  static names(): { [key: string]: string } {
    return {
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObjectPrefix: 'OssObjectPrefix',
      startTime: 'StartTime',
      endTime: 'EndTime',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObjectPrefix: 'string',
      startTime: 'string',
      endTime: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseRecordContentInfoList extends $tea.Model {
  recordContentInfo: DescribeLiveStreamRecordContentResponseRecordContentInfoListRecordContentInfo[];
  static names(): { [key: string]: string } {
    return {
      recordContentInfo: 'RecordContentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContentInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordContentResponseRecordContentInfoListRecordContentInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigListLiveStreamSnapshotConfig extends $tea.Model {
  domainName: string;
  appName: string;
  timeInterval: number;
  ossEndpoint: string;
  ossBucket: string;
  overwriteOssObject: string;
  sequenceOssObject: string;
  createTime: string;
  callback: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      appName: 'AppName',
      timeInterval: 'TimeInterval',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      overwriteOssObject: 'OverwriteOssObject',
      sequenceOssObject: 'SequenceOssObject',
      createTime: 'CreateTime',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      appName: 'string',
      timeInterval: 'number',
      ossEndpoint: 'string',
      ossBucket: 'string',
      overwriteOssObject: 'string',
      sequenceOssObject: 'string',
      createTime: 'string',
      callback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigList extends $tea.Model {
  liveStreamSnapshotConfig: DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigListLiveStreamSnapshotConfig[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotConfig: 'LiveStreamSnapshotConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotConfigResponseLiveStreamSnapshotConfigListLiveStreamSnapshotConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
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


  async addLiveASRConfigWithOptions(request: AddLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveASRConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveASRConfigResponse>(await this.doRequest("AddLiveASRConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveASRConfigResponse({}));
  }

  async addLiveASRConfig(request: AddLiveASRConfigRequest): Promise<AddLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveASRConfigWithOptions(request, runtime);
  }

  async describeLiveAsrConfigWithOptions(request: DescribeLiveAsrConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAsrConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveAsrConfigResponse>(await this.doRequest("DescribeLiveAsrConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveAsrConfigResponse({}));
  }

  async describeLiveAsrConfig(request: DescribeLiveAsrConfigRequest): Promise<DescribeLiveAsrConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAsrConfigWithOptions(request, runtime);
  }

  async deleteLiveASRConfigWithOptions(request: DeleteLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveASRConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveASRConfigResponse>(await this.doRequest("DeleteLiveASRConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveASRConfigResponse({}));
  }

  async deleteLiveASRConfig(request: DeleteLiveASRConfigRequest): Promise<DeleteLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveASRConfigWithOptions(request, runtime);
  }

  async updateLiveASRConfigWithOptions(request: UpdateLiveASRConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveASRConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveASRConfigResponse>(await this.doRequest("UpdateLiveASRConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveASRConfigResponse({}));
  }

  async updateLiveASRConfig(request: UpdateLiveASRConfigRequest): Promise<UpdateLiveASRConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveASRConfigWithOptions(request, runtime);
  }

  async deleteMixStreamWithOptions(request: DeleteMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMixStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteMixStreamResponse>(await this.doRequest("DeleteMixStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteMixStreamResponse({}));
  }

  async deleteMixStream(request: DeleteMixStreamRequest): Promise<DeleteMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMixStreamWithOptions(request, runtime);
  }

  async updateMixStreamWithOptions(request: UpdateMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMixStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMixStreamResponse>(await this.doRequest("UpdateMixStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateMixStreamResponse({}));
  }

  async updateMixStream(request: UpdateMixStreamRequest): Promise<UpdateMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMixStreamWithOptions(request, runtime);
  }

  async createMixStreamWithOptions(request: CreateMixStreamRequest, runtime: $Util.RuntimeOptions): Promise<CreateMixStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMixStreamResponse>(await this.doRequest("CreateMixStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CreateMixStreamResponse({}));
  }

  async createMixStream(request: CreateMixStreamRequest): Promise<CreateMixStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMixStreamWithOptions(request, runtime);
  }

  async describeMixStreamListWithOptions(request: DescribeMixStreamListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMixStreamListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeMixStreamListResponse>(await this.doRequest("DescribeMixStreamList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeMixStreamListResponse({}));
  }

  async describeMixStreamList(request: DescribeMixStreamListRequest): Promise<DescribeMixStreamListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMixStreamListWithOptions(request, runtime);
  }

  async addRtsLiveStreamTranscodeWithOptions(request: AddRtsLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddRtsLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    return $tea.cast<AddRtsLiveStreamTranscodeResponse>(await this.doRequest("AddRtsLiveStreamTranscode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddRtsLiveStreamTranscodeResponse({}));
  }

  async addRtsLiveStreamTranscode(request: AddRtsLiveStreamTranscodeRequest): Promise<AddRtsLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRtsLiveStreamTranscodeWithOptions(request, runtime);
  }

  async describeLiveDomainTimeShiftDataWithOptions(request: DescribeLiveDomainTimeShiftDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTimeShiftDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainTimeShiftDataResponse>(await this.doRequest("DescribeLiveDomainTimeShiftData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainTimeShiftDataResponse({}));
  }

  async describeLiveDomainTimeShiftData(request: DescribeLiveDomainTimeShiftDataRequest): Promise<DescribeLiveDomainTimeShiftDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTimeShiftDataWithOptions(request, runtime);
  }

  async deleteHtmlResourceWithOptions(request: DeleteHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHtmlResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteHtmlResourceResponse>(await this.doRequest("DeleteHtmlResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteHtmlResourceResponse({}));
  }

  async deleteHtmlResource(request: DeleteHtmlResourceRequest): Promise<DeleteHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHtmlResourceWithOptions(request, runtime);
  }

  async describeHtmlResourceWithOptions(request: DescribeHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHtmlResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHtmlResourceResponse>(await this.doRequest("DescribeHtmlResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeHtmlResourceResponse({}));
  }

  async describeHtmlResource(request: DescribeHtmlResourceRequest): Promise<DescribeHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHtmlResourceWithOptions(request, runtime);
  }

  async controlHtmlResourceWithOptions(request: ControlHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<ControlHtmlResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<ControlHtmlResourceResponse>(await this.doRequest("ControlHtmlResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ControlHtmlResourceResponse({}));
  }

  async controlHtmlResource(request: ControlHtmlResourceRequest): Promise<ControlHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.controlHtmlResourceWithOptions(request, runtime);
  }

  async editHtmlResourceWithOptions(request: EditHtmlResourceRequest, runtime: $Util.RuntimeOptions): Promise<EditHtmlResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<EditHtmlResourceResponse>(await this.doRequest("EditHtmlResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new EditHtmlResourceResponse({}));
  }

  async editHtmlResource(request: EditHtmlResourceRequest): Promise<EditHtmlResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editHtmlResourceWithOptions(request, runtime);
  }

  async describeLiveUserTagsWithOptions(request: DescribeLiveUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveUserTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveUserTagsResponse>(await this.doRequest("DescribeLiveUserTags", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveUserTagsResponse({}));
  }

  async describeLiveUserTags(request: DescribeLiveUserTagsRequest): Promise<DescribeLiveUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveUserTagsWithOptions(request, runtime);
  }

  async unTagLiveResourcesWithOptions(request: UnTagLiveResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagLiveResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UnTagLiveResourcesResponse>(await this.doRequest("UnTagLiveResources", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UnTagLiveResourcesResponse({}));
  }

  async unTagLiveResources(request: UnTagLiveResourcesRequest): Promise<UnTagLiveResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagLiveResourcesWithOptions(request, runtime);
  }

  async tagLiveResourcesWithOptions(request: TagLiveResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagLiveResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagLiveResourcesResponse>(await this.doRequest("TagLiveResources", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new TagLiveResourcesResponse({}));
  }

  async tagLiveResources(request: TagLiveResourcesRequest): Promise<TagLiveResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagLiveResourcesWithOptions(request, runtime);
  }

  async describeLiveTagResourcesWithOptions(request: DescribeLiveTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveTagResourcesResponse>(await this.doRequest("DescribeLiveTagResources", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveTagResourcesResponse({}));
  }

  async describeLiveTagResources(request: DescribeLiveTagResourcesRequest): Promise<DescribeLiveTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveTagResourcesWithOptions(request, runtime);
  }

  async addLiveAudioAuditConfigWithOptions(request: AddLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveAudioAuditConfigResponse>(await this.doRequest("AddLiveAudioAuditConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveAudioAuditConfigResponse({}));
  }

  async addLiveAudioAuditConfig(request: AddLiveAudioAuditConfigRequest): Promise<AddLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async deleteLiveAudioAuditConfigWithOptions(request: DeleteLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveAudioAuditConfigResponse>(await this.doRequest("DeleteLiveAudioAuditConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveAudioAuditConfigResponse({}));
  }

  async deleteLiveAudioAuditConfig(request: DeleteLiveAudioAuditConfigRequest): Promise<DeleteLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async describeLiveAudioAuditConfigWithOptions(request: DescribeLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveAudioAuditConfigResponse>(await this.doRequest("DescribeLiveAudioAuditConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveAudioAuditConfigResponse({}));
  }

  async describeLiveAudioAuditConfig(request: DescribeLiveAudioAuditConfigRequest): Promise<DescribeLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async updateLiveAudioAuditConfigWithOptions(request: UpdateLiveAudioAuditConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAudioAuditConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveAudioAuditConfigResponse>(await this.doRequest("UpdateLiveAudioAuditConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveAudioAuditConfigResponse({}));
  }

  async updateLiveAudioAuditConfig(request: UpdateLiveAudioAuditConfigRequest): Promise<UpdateLiveAudioAuditConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAudioAuditConfigWithOptions(request, runtime);
  }

  async addLiveAudioAuditNotifyConfigWithOptions(request: AddLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveAudioAuditNotifyConfigResponse>(await this.doRequest("AddLiveAudioAuditNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveAudioAuditNotifyConfigResponse({}));
  }

  async addLiveAudioAuditNotifyConfig(request: AddLiveAudioAuditNotifyConfigRequest): Promise<AddLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveAudioAuditNotifyConfigWithOptions(request: DeleteLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveAudioAuditNotifyConfigResponse>(await this.doRequest("DeleteLiveAudioAuditNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveAudioAuditNotifyConfigResponse({}));
  }

  async deleteLiveAudioAuditNotifyConfig(request: DeleteLiveAudioAuditNotifyConfigRequest): Promise<DeleteLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveAudioAuditNotifyConfigWithOptions(request: DescribeLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveAudioAuditNotifyConfigResponse>(await this.doRequest("DescribeLiveAudioAuditNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveAudioAuditNotifyConfigResponse({}));
  }

  async describeLiveAudioAuditNotifyConfig(request: DescribeLiveAudioAuditNotifyConfigRequest): Promise<DescribeLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async updateLiveAudioAuditNotifyConfigWithOptions(request: UpdateLiveAudioAuditNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAudioAuditNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveAudioAuditNotifyConfigResponse>(await this.doRequest("UpdateLiveAudioAuditNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveAudioAuditNotifyConfigResponse({}));
  }

  async updateLiveAudioAuditNotifyConfig(request: UpdateLiveAudioAuditNotifyConfigRequest): Promise<UpdateLiveAudioAuditNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAudioAuditNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveDomainPushTrafficDataWithOptions(request: DescribeLiveDomainPushTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainPushTrafficDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainPushTrafficDataResponse>(await this.doRequest("DescribeLiveDomainPushTrafficData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainPushTrafficDataResponse({}));
  }

  async describeLiveDomainPushTrafficData(request: DescribeLiveDomainPushTrafficDataRequest): Promise<DescribeLiveDomainPushTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainPushTrafficDataWithOptions(request, runtime);
  }

  async describeLiveDomainPushBpsDataWithOptions(request: DescribeLiveDomainPushBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainPushBpsDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainPushBpsDataResponse>(await this.doRequest("DescribeLiveDomainPushBpsData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainPushBpsDataResponse({}));
  }

  async describeLiveDomainPushBpsData(request: DescribeLiveDomainPushBpsDataRequest): Promise<DescribeLiveDomainPushBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainPushBpsDataWithOptions(request, runtime);
  }

  async setCasterSyncGroupWithOptions(request: SetCasterSyncGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterSyncGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<SetCasterSyncGroupResponse>(await this.doRequest("SetCasterSyncGroup", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetCasterSyncGroupResponse({}));
  }

  async setCasterSyncGroup(request: SetCasterSyncGroupRequest): Promise<SetCasterSyncGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterSyncGroupWithOptions(request, runtime);
  }

  async describeCasterSyncGroupWithOptions(request: DescribeCasterSyncGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterSyncGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterSyncGroupResponse>(await this.doRequest("DescribeCasterSyncGroup", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterSyncGroupResponse({}));
  }

  async describeCasterSyncGroup(request: DescribeCasterSyncGroupRequest): Promise<DescribeCasterSyncGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterSyncGroupWithOptions(request, runtime);
  }

  async describeLiveDetectPornDataWithOptions(request: DescribeLiveDetectPornDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDetectPornDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDetectPornDataResponse>(await this.doRequest("DescribeLiveDetectPornData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDetectPornDataResponse({}));
  }

  async describeLiveDetectPornData(request: DescribeLiveDetectPornDataRequest): Promise<DescribeLiveDetectPornDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDetectPornDataWithOptions(request, runtime);
  }

  async deleteLiveRealTimeLogLogstoreWithOptions(request: DeleteLiveRealTimeLogLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRealTimeLogLogstoreResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveRealTimeLogLogstoreResponse>(await this.doRequest("DeleteLiveRealTimeLogLogstore", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DeleteLiveRealTimeLogLogstoreResponse({}));
  }

  async deleteLiveRealTimeLogLogstore(request: DeleteLiveRealTimeLogLogstoreRequest): Promise<DeleteLiveRealTimeLogLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRealTimeLogLogstoreWithOptions(request, runtime);
  }

  async disableLiveRealtimeLogDeliveryWithOptions(request: DisableLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableLiveRealtimeLogDeliveryResponse>(await this.doRequest("DisableLiveRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DisableLiveRealtimeLogDeliveryResponse({}));
  }

  async disableLiveRealtimeLogDelivery(request: DisableLiveRealtimeLogDeliveryRequest): Promise<DisableLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async enableLiveRealtimeLogDeliveryWithOptions(request: EnableLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<EnableLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableLiveRealtimeLogDeliveryResponse>(await this.doRequest("EnableLiveRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new EnableLiveRealtimeLogDeliveryResponse({}));
  }

  async enableLiveRealtimeLogDelivery(request: EnableLiveRealtimeLogDeliveryRequest): Promise<EnableLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryDomainsWithOptions(request: ListLiveRealtimeLogDeliveryDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListLiveRealtimeLogDeliveryDomainsResponse>(await this.doRequest("ListLiveRealtimeLogDeliveryDomains", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new ListLiveRealtimeLogDeliveryDomainsResponse({}));
  }

  async listLiveRealtimeLogDeliveryDomains(request: ListLiveRealtimeLogDeliveryDomainsRequest): Promise<ListLiveRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  async modifyLiveRealtimeLogDeliveryWithOptions(request: ModifyLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyLiveRealtimeLogDeliveryResponse>(await this.doRequest("ModifyLiveRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new ModifyLiveRealtimeLogDeliveryResponse({}));
  }

  async modifyLiveRealtimeLogDelivery(request: ModifyLiveRealtimeLogDeliveryRequest): Promise<ModifyLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async describeLiveRealtimeDeliveryAccWithOptions(request: DescribeLiveRealtimeDeliveryAccRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRealtimeDeliveryAccResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveRealtimeDeliveryAccResponse>(await this.doRequest("DescribeLiveRealtimeDeliveryAcc", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveRealtimeDeliveryAccResponse({}));
  }

  async describeLiveRealtimeDeliveryAcc(request: DescribeLiveRealtimeDeliveryAccRequest): Promise<DescribeLiveRealtimeDeliveryAccResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRealtimeDeliveryAccWithOptions(request, runtime);
  }

  async describeLiveRealtimeLogAuthorizedWithOptions(request: DescribeLiveRealtimeLogAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRealtimeLogAuthorizedResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveRealtimeLogAuthorizedResponse>(await this.doRequest("DescribeLiveRealtimeLogAuthorized", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeLiveRealtimeLogAuthorizedResponse({}));
  }

  async describeLiveRealtimeLogAuthorized(request: DescribeLiveRealtimeLogAuthorizedRequest): Promise<DescribeLiveRealtimeLogAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRealtimeLogAuthorizedWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryWithOptions(request: ListLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<ListLiveRealtimeLogDeliveryResponse>(await this.doRequest("ListLiveRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new ListLiveRealtimeLogDeliveryResponse({}));
  }

  async listLiveRealtimeLogDelivery(request: ListLiveRealtimeLogDeliveryRequest): Promise<ListLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async listLiveRealtimeLogDeliveryInfosWithOptions(request: ListLiveRealtimeLogDeliveryInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListLiveRealtimeLogDeliveryInfosResponse> {
    Util.validateModel(request);
    return $tea.cast<ListLiveRealtimeLogDeliveryInfosResponse>(await this.doRequest("ListLiveRealtimeLogDeliveryInfos", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new ListLiveRealtimeLogDeliveryInfosResponse({}));
  }

  async listLiveRealtimeLogDeliveryInfos(request: ListLiveRealtimeLogDeliveryInfosRequest): Promise<ListLiveRealtimeLogDeliveryInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLiveRealtimeLogDeliveryInfosWithOptions(request, runtime);
  }

  async describeLiveDomainRealtimeLogDeliveryWithOptions(request: DescribeLiveDomainRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainRealtimeLogDeliveryResponse>(await this.doRequest("DescribeLiveDomainRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeLiveDomainRealtimeLogDeliveryResponse({}));
  }

  async describeLiveDomainRealtimeLogDelivery(request: DescribeLiveDomainRealtimeLogDeliveryRequest): Promise<DescribeLiveDomainRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async deleteLiveRealtimeLogDeliveryWithOptions(request: DeleteLiveRealtimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRealtimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveRealtimeLogDeliveryResponse>(await this.doRequest("DeleteLiveRealtimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DeleteLiveRealtimeLogDeliveryResponse({}));
  }

  async deleteLiveRealtimeLogDelivery(request: DeleteLiveRealtimeLogDeliveryRequest): Promise<DeleteLiveRealtimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRealtimeLogDeliveryWithOptions(request, runtime);
  }

  async createLiveRealTimeLogDeliveryWithOptions(request: CreateLiveRealTimeLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveRealTimeLogDeliveryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLiveRealTimeLogDeliveryResponse>(await this.doRequest("CreateLiveRealTimeLogDelivery", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new CreateLiveRealTimeLogDeliveryResponse({}));
  }

  async createLiveRealTimeLogDelivery(request: CreateLiveRealTimeLogDeliveryRequest): Promise<CreateLiveRealTimeLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveRealTimeLogDeliveryWithOptions(request, runtime);
  }

  async describeLiveDomainLimitWithOptions(request: DescribeLiveDomainLimitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainLimitResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainLimitResponse>(await this.doRequest("DescribeLiveDomainLimit", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainLimitResponse({}));
  }

  async describeLiveDomainLimit(request: DescribeLiveDomainLimitRequest): Promise<DescribeLiveDomainLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainLimitWithOptions(request, runtime);
  }

  async describeLiveDomainBpsDataByTimeStampWithOptions(request: DescribeLiveDomainBpsDataByTimeStampRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainBpsDataByTimeStampResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainBpsDataByTimeStampResponse>(await this.doRequest("DescribeLiveDomainBpsDataByTimeStamp", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainBpsDataByTimeStampResponse({}));
  }

  async describeLiveDomainBpsDataByTimeStamp(request: DescribeLiveDomainBpsDataByTimeStampRequest): Promise<DescribeLiveDomainBpsDataByTimeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  async describeLiveStreamTranscodeStreamNumWithOptions(request: DescribeLiveStreamTranscodeStreamNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamTranscodeStreamNumResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamTranscodeStreamNumResponse>(await this.doRequest("DescribeLiveStreamTranscodeStreamNum", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamTranscodeStreamNumResponse({}));
  }

  async describeLiveStreamTranscodeStreamNum(request: DescribeLiveStreamTranscodeStreamNumRequest): Promise<DescribeLiveStreamTranscodeStreamNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamTranscodeStreamNumWithOptions(request, runtime);
  }

  async updateLiveTopLevelDomainWithOptions(request: UpdateLiveTopLevelDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveTopLevelDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveTopLevelDomainResponse>(await this.doRequest("UpdateLiveTopLevelDomain", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveTopLevelDomainResponse({}));
  }

  async updateLiveTopLevelDomain(request: UpdateLiveTopLevelDomainRequest): Promise<UpdateLiveTopLevelDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveTopLevelDomainWithOptions(request, runtime);
  }

  async describeLiveDomainCertificateInfoWithOptions(request: DescribeLiveDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainCertificateInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainCertificateInfoResponse>(await this.doRequest("DescribeLiveDomainCertificateInfo", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainCertificateInfoResponse({}));
  }

  async describeLiveDomainCertificateInfo(request: DescribeLiveDomainCertificateInfoRequest): Promise<DescribeLiveDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainCertificateInfoWithOptions(request, runtime);
  }

  async modifyLiveDomainSchdmByPropertyWithOptions(request: ModifyLiveDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLiveDomainSchdmByPropertyResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyLiveDomainSchdmByPropertyResponse>(await this.doRequest("ModifyLiveDomainSchdmByProperty", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyLiveDomainSchdmByPropertyResponse({}));
  }

  async modifyLiveDomainSchdmByProperty(request: ModifyLiveDomainSchdmByPropertyRequest): Promise<ModifyLiveDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLiveDomainSchdmByPropertyWithOptions(request, runtime);
  }

  async setLiveStreamOptimizedFeatureConfigWithOptions(request: SetLiveStreamOptimizedFeatureConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamOptimizedFeatureConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetLiveStreamOptimizedFeatureConfigResponse>(await this.doRequest("SetLiveStreamOptimizedFeatureConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetLiveStreamOptimizedFeatureConfigResponse({}));
  }

  async setLiveStreamOptimizedFeatureConfig(request: SetLiveStreamOptimizedFeatureConfigRequest): Promise<SetLiveStreamOptimizedFeatureConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamOptimizedFeatureConfigWithOptions(request, runtime);
  }

  async describeLiveStreamOptimizedFeatureConfigWithOptions(request: DescribeLiveStreamOptimizedFeatureConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamOptimizedFeatureConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamOptimizedFeatureConfigResponse>(await this.doRequest("DescribeLiveStreamOptimizedFeatureConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamOptimizedFeatureConfigResponse({}));
  }

  async describeLiveStreamOptimizedFeatureConfig(request: DescribeLiveStreamOptimizedFeatureConfigRequest): Promise<DescribeLiveStreamOptimizedFeatureConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamOptimizedFeatureConfigWithOptions(request, runtime);
  }

  async setLiveStreamDelayConfigWithOptions(request: SetLiveStreamDelayConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamDelayConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetLiveStreamDelayConfigResponse>(await this.doRequest("SetLiveStreamDelayConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetLiveStreamDelayConfigResponse({}));
  }

  async setLiveStreamDelayConfig(request: SetLiveStreamDelayConfigRequest): Promise<SetLiveStreamDelayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamDelayConfigWithOptions(request, runtime);
  }

  async describeLiveStreamDelayConfigWithOptions(request: DescribeLiveStreamDelayConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamDelayConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamDelayConfigResponse>(await this.doRequest("DescribeLiveStreamDelayConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamDelayConfigResponse({}));
  }

  async describeLiveStreamDelayConfig(request: DescribeLiveStreamDelayConfigRequest): Promise<DescribeLiveStreamDelayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamDelayConfigWithOptions(request, runtime);
  }

  async describeLiveDomainOnlineUserNumWithOptions(request: DescribeLiveDomainOnlineUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainOnlineUserNumResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainOnlineUserNumResponse>(await this.doRequest("DescribeLiveDomainOnlineUserNum", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainOnlineUserNumResponse({}));
  }

  async describeLiveDomainOnlineUserNum(request: DescribeLiveDomainOnlineUserNumRequest): Promise<DescribeLiveDomainOnlineUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainOnlineUserNumWithOptions(request, runtime);
  }

  async describeLiveDomainFrameRateAndBitRateDataWithOptions(request: DescribeLiveDomainFrameRateAndBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainFrameRateAndBitRateDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainFrameRateAndBitRateDataResponse>(await this.doRequest("DescribeLiveDomainFrameRateAndBitRateData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainFrameRateAndBitRateDataResponse({}));
  }

  async describeLiveDomainFrameRateAndBitRateData(request: DescribeLiveDomainFrameRateAndBitRateDataRequest): Promise<DescribeLiveDomainFrameRateAndBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainFrameRateAndBitRateDataWithOptions(request, runtime);
  }

  async setBoardCallbackWithOptions(request: SetBoardCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SetBoardCallbackResponse> {
    Util.validateModel(request);
    return $tea.cast<SetBoardCallbackResponse>(await this.doRequest("SetBoardCallback", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetBoardCallbackResponse({}));
  }

  async setBoardCallback(request: SetBoardCallbackRequest): Promise<SetBoardCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBoardCallbackWithOptions(request, runtime);
  }

  async describeRecordsWithOptions(request: DescribeRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRecordsResponse>(await this.doRequest("DescribeRecords", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeRecordsResponse({}));
  }

  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  async describeRecordWithOptions(request: DescribeRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRecordResponse>(await this.doRequest("DescribeRecord", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeRecordResponse({}));
  }

  async describeRecord(request: DescribeRecordRequest): Promise<DescribeRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordWithOptions(request, runtime);
  }

  async completeBoardRecordWithOptions(request: CompleteBoardRecordRequest, runtime: $Util.RuntimeOptions): Promise<CompleteBoardRecordResponse> {
    Util.validateModel(request);
    return $tea.cast<CompleteBoardRecordResponse>(await this.doRequest("CompleteBoardRecord", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CompleteBoardRecordResponse({}));
  }

  async completeBoardRecord(request: CompleteBoardRecordRequest): Promise<CompleteBoardRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeBoardRecordWithOptions(request, runtime);
  }

  async startBoardRecordWithOptions(request: StartBoardRecordRequest, runtime: $Util.RuntimeOptions): Promise<StartBoardRecordResponse> {
    Util.validateModel(request);
    return $tea.cast<StartBoardRecordResponse>(await this.doRequest("StartBoardRecord", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StartBoardRecordResponse({}));
  }

  async startBoardRecord(request: StartBoardRecordRequest): Promise<StartBoardRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBoardRecordWithOptions(request, runtime);
  }

  async applyRecordTokenWithOptions(request: ApplyRecordTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRecordTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<ApplyRecordTokenResponse>(await this.doRequest("ApplyRecordToken", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ApplyRecordTokenResponse({}));
  }

  async applyRecordToken(request: ApplyRecordTokenRequest): Promise<ApplyRecordTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRecordTokenWithOptions(request, runtime);
  }

  async updateBoardCallbackWithOptions(request: UpdateBoardCallbackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBoardCallbackResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateBoardCallbackResponse>(await this.doRequest("UpdateBoardCallback", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateBoardCallbackResponse({}));
  }

  async updateBoardCallback(request: UpdateBoardCallbackRequest): Promise<UpdateBoardCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBoardCallbackWithOptions(request, runtime);
  }

  async describeLiveDomainMappingWithOptions(request: DescribeLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainMappingResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainMappingResponse>(await this.doRequest("DescribeLiveDomainMapping", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeLiveDomainMappingResponse({}));
  }

  async describeLiveDomainMapping(request: DescribeLiveDomainMappingRequest): Promise<DescribeLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainMappingWithOptions(request, runtime);
  }

  async stopLiveIndexWithOptions(request: StopLiveIndexRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveIndexResponse> {
    Util.validateModel(request);
    return $tea.cast<StopLiveIndexResponse>(await this.doRequest("StopLiveIndex", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StopLiveIndexResponse({}));
  }

  async stopLiveIndex(request: StopLiveIndexRequest): Promise<StopLiveIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveIndexWithOptions(request, runtime);
  }

  async startLiveIndexWithOptions(request: StartLiveIndexRequest, runtime: $Util.RuntimeOptions): Promise<StartLiveIndexResponse> {
    Util.validateModel(request);
    return $tea.cast<StartLiveIndexResponse>(await this.doRequest("StartLiveIndex", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StartLiveIndexResponse({}));
  }

  async startLiveIndex(request: StartLiveIndexRequest): Promise<StartLiveIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLiveIndexWithOptions(request, runtime);
  }

  async realTimeSnapshotCommandWithOptions(request: RealTimeSnapshotCommandRequest, runtime: $Util.RuntimeOptions): Promise<RealTimeSnapshotCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<RealTimeSnapshotCommandResponse>(await this.doRequest("RealTimeSnapshotCommand", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new RealTimeSnapshotCommandResponse({}));
  }

  async realTimeSnapshotCommand(request: RealTimeSnapshotCommandRequest): Promise<RealTimeSnapshotCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.realTimeSnapshotCommandWithOptions(request, runtime);
  }

  async describeLiveTopDomainsByFlowWithOptions(request: DescribeLiveTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveTopDomainsByFlowResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveTopDomainsByFlowResponse>(await this.doRequest("DescribeLiveTopDomainsByFlow", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveTopDomainsByFlowResponse({}));
  }

  async describeLiveTopDomainsByFlow(request: DescribeLiveTopDomainsByFlowRequest): Promise<DescribeLiveTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeBpsDataWithOptions(request: DescribeLiveDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainRealTimeBpsDataResponse>(await this.doRequest("DescribeLiveDomainRealTimeBpsData", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeLiveDomainRealTimeBpsDataResponse({}));
  }

  async describeLiveDomainRealTimeBpsData(request: DescribeLiveDomainRealTimeBpsDataRequest): Promise<DescribeLiveDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeHttpCodeDataWithOptions(request: DescribeLiveDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainRealTimeHttpCodeDataResponse>(await this.doRequest("DescribeLiveDomainRealTimeHttpCodeData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainRealTimeHttpCodeDataResponse({}));
  }

  async describeLiveDomainRealTimeHttpCodeData(request: DescribeLiveDomainRealTimeHttpCodeDataRequest): Promise<DescribeLiveDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  async describeLiveDomainRealTimeTrafficDataWithOptions(request: DescribeLiveDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainRealTimeTrafficDataResponse>(await this.doRequest("DescribeLiveDomainRealTimeTrafficData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainRealTimeTrafficDataResponse({}));
  }

  async describeLiveDomainRealTimeTrafficData(request: DescribeLiveDomainRealTimeTrafficDataRequest): Promise<DescribeLiveDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  async addLiveDomainPlayMappingWithOptions(request: AddLiveDomainPlayMappingRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainPlayMappingResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveDomainPlayMappingResponse>(await this.doRequest("AddLiveDomainPlayMapping", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveDomainPlayMappingResponse({}));
  }

  async addLiveDomainPlayMapping(request: AddLiveDomainPlayMappingRequest): Promise<AddLiveDomainPlayMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainPlayMappingWithOptions(request, runtime);
  }

  async deleteLiveLazyPullStreamInfoConfigWithOptions(request: DeleteLiveLazyPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveLazyPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveLazyPullStreamInfoConfigResponse>(await this.doRequest("DeleteLiveLazyPullStreamInfoConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveLazyPullStreamInfoConfigResponse({}));
  }

  async deleteLiveLazyPullStreamInfoConfig(request: DeleteLiveLazyPullStreamInfoConfigRequest): Promise<DeleteLiveLazyPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveLazyPullStreamInfoConfigWithOptions(request, runtime);
  }

  async describeLiveLazyPullStreamConfigWithOptions(request: DescribeLiveLazyPullStreamConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveLazyPullStreamConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveLazyPullStreamConfigResponse>(await this.doRequest("DescribeLiveLazyPullStreamConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveLazyPullStreamConfigResponse({}));
  }

  async describeLiveLazyPullStreamConfig(request: DescribeLiveLazyPullStreamConfigRequest): Promise<DescribeLiveLazyPullStreamConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveLazyPullStreamConfigWithOptions(request, runtime);
  }

  async setLiveLazyPullStreamInfoConfigWithOptions(request: SetLiveLazyPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveLazyPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetLiveLazyPullStreamInfoConfigResponse>(await this.doRequest("SetLiveLazyPullStreamInfoConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetLiveLazyPullStreamInfoConfigResponse({}));
  }

  async setLiveLazyPullStreamInfoConfig(request: SetLiveLazyPullStreamInfoConfigRequest): Promise<SetLiveLazyPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveLazyPullStreamInfoConfigWithOptions(request, runtime);
  }

  async updateCasterSceneAudioWithOptions(request: UpdateCasterSceneAudioRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCasterSceneAudioResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateCasterSceneAudioResponse>(await this.doRequest("UpdateCasterSceneAudio", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateCasterSceneAudioResponse({}));
  }

  async updateCasterSceneAudio(request: UpdateCasterSceneAudioRequest): Promise<UpdateCasterSceneAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCasterSceneAudioWithOptions(request, runtime);
  }

  async setCasterChannelWithOptions(request: SetCasterChannelRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<SetCasterChannelResponse>(await this.doRequest("SetCasterChannel", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetCasterChannelResponse({}));
  }

  async setCasterChannel(request: SetCasterChannelRequest): Promise<SetCasterChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterChannelWithOptions(request, runtime);
  }

  async describeCasterSceneAudioWithOptions(request: DescribeCasterSceneAudioRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterSceneAudioResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterSceneAudioResponse>(await this.doRequest("DescribeCasterSceneAudio", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterSceneAudioResponse({}));
  }

  async describeCasterSceneAudio(request: DescribeCasterSceneAudioRequest): Promise<DescribeCasterSceneAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterSceneAudioWithOptions(request, runtime);
  }

  async describeCasterChannelsWithOptions(request: DescribeCasterChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterChannelsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterChannelsResponse>(await this.doRequest("DescribeCasterChannels", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterChannelsResponse({}));
  }

  async describeCasterChannels(request: DescribeCasterChannelsRequest): Promise<DescribeCasterChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterChannelsWithOptions(request, runtime);
  }

  async updateBoardWithOptions(request: UpdateBoardRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBoardResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateBoardResponse>(await this.doRequest("UpdateBoard", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateBoardResponse({}));
  }

  async updateBoard(request: UpdateBoardRequest): Promise<UpdateBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBoardWithOptions(request, runtime);
  }

  async joinBoardWithOptions(request: JoinBoardRequest, runtime: $Util.RuntimeOptions): Promise<JoinBoardResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinBoardResponse>(await this.doRequest("JoinBoard", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new JoinBoardResponse({}));
  }

  async joinBoard(request: JoinBoardRequest): Promise<JoinBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinBoardWithOptions(request, runtime);
  }

  async describeBoardSnapshotWithOptions(request: DescribeBoardSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBoardSnapshotResponse>(await this.doRequest("DescribeBoardSnapshot", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeBoardSnapshotResponse({}));
  }

  async describeBoardSnapshot(request: DescribeBoardSnapshotRequest): Promise<DescribeBoardSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardSnapshotWithOptions(request, runtime);
  }

  async describeBoardsWithOptions(request: DescribeBoardsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBoardsResponse>(await this.doRequest("DescribeBoards", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeBoardsResponse({}));
  }

  async describeBoards(request: DescribeBoardsRequest): Promise<DescribeBoardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardsWithOptions(request, runtime);
  }

  async describeBoardEventsWithOptions(request: DescribeBoardEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBoardEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBoardEventsResponse>(await this.doRequest("DescribeBoardEvents", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeBoardEventsResponse({}));
  }

  async describeBoardEvents(request: DescribeBoardEventsRequest): Promise<DescribeBoardEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBoardEventsWithOptions(request, runtime);
  }

  async deleteBoardWithOptions(request: DeleteBoardRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBoardResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBoardResponse>(await this.doRequest("DeleteBoard", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteBoardResponse({}));
  }

  async deleteBoard(request: DeleteBoardRequest): Promise<DeleteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBoardWithOptions(request, runtime);
  }

  async createBoardWithOptions(request: CreateBoardRequest, runtime: $Util.RuntimeOptions): Promise<CreateBoardResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateBoardResponse>(await this.doRequest("CreateBoard", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CreateBoardResponse({}));
  }

  async createBoard(request: CreateBoardRequest): Promise<CreateBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBoardWithOptions(request, runtime);
  }

  async completeBoardWithOptions(request: CompleteBoardRequest, runtime: $Util.RuntimeOptions): Promise<CompleteBoardResponse> {
    Util.validateModel(request);
    return $tea.cast<CompleteBoardResponse>(await this.doRequest("CompleteBoard", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CompleteBoardResponse({}));
  }

  async completeBoard(request: CompleteBoardRequest): Promise<CompleteBoardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeBoardWithOptions(request, runtime);
  }

  async applyBoardTokenWithOptions(request: ApplyBoardTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyBoardTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<ApplyBoardTokenResponse>(await this.doRequest("ApplyBoardToken", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ApplyBoardTokenResponse({}));
  }

  async applyBoardToken(request: ApplyBoardTokenRequest): Promise<ApplyBoardTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyBoardTokenWithOptions(request, runtime);
  }

  async describeLiveStreamCountWithOptions(request: DescribeLiveStreamCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamCountResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamCountResponse>(await this.doRequest("DescribeLiveStreamCount", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeLiveStreamCountResponse({}));
  }

  async describeLiveStreamCount(request: DescribeLiveStreamCountRequest): Promise<DescribeLiveStreamCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamCountWithOptions(request, runtime);
  }

  async describeLiveCertificateDetailWithOptions(request: DescribeLiveCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveCertificateDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveCertificateDetailResponse>(await this.doRequest("DescribeLiveCertificateDetail", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveCertificateDetailResponse({}));
  }

  async describeLiveCertificateDetail(request: DescribeLiveCertificateDetailRequest): Promise<DescribeLiveCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveCertificateDetailWithOptions(request, runtime);
  }

  async describeHlsLiveStreamRealTimeBpsDataWithOptions(request: DescribeHlsLiveStreamRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHlsLiveStreamRealTimeBpsDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHlsLiveStreamRealTimeBpsDataResponse>(await this.doRequest("DescribeHlsLiveStreamRealTimeBpsData", "HTTPS", "GET", "2016-11-01", "AK", $tea.toMap(request), null, runtime), new DescribeHlsLiveStreamRealTimeBpsDataResponse({}));
  }

  async describeHlsLiveStreamRealTimeBpsData(request: DescribeHlsLiveStreamRealTimeBpsDataRequest): Promise<DescribeHlsLiveStreamRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHlsLiveStreamRealTimeBpsDataWithOptions(request, runtime);
  }

  async stopLiveDomainWithOptions(request: StopLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<StopLiveDomainResponse>(await this.doRequest("StopLiveDomain", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StopLiveDomainResponse({}));
  }

  async stopLiveDomain(request: StopLiveDomainRequest): Promise<StopLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveDomainWithOptions(request, runtime);
  }

  async startLiveDomainWithOptions(request: StartLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartLiveDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<StartLiveDomainResponse>(await this.doRequest("StartLiveDomain", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StartLiveDomainResponse({}));
  }

  async startLiveDomain(request: StartLiveDomainRequest): Promise<StartLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLiveDomainWithOptions(request, runtime);
  }

  async setLiveDomainCertificateWithOptions(request: SetLiveDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveDomainCertificateResponse> {
    Util.validateModel(request);
    return $tea.cast<SetLiveDomainCertificateResponse>(await this.doRequest("SetLiveDomainCertificate", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetLiveDomainCertificateResponse({}));
  }

  async setLiveDomainCertificate(request: SetLiveDomainCertificateRequest): Promise<SetLiveDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveDomainCertificateWithOptions(request, runtime);
  }

  async batchSetLiveDomainConfigsWithOptions(request: BatchSetLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetLiveDomainConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchSetLiveDomainConfigsResponse>(await this.doRequest("BatchSetLiveDomainConfigs", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new BatchSetLiveDomainConfigsResponse({}));
  }

  async batchSetLiveDomainConfigs(request: BatchSetLiveDomainConfigsRequest): Promise<BatchSetLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetLiveDomainConfigsWithOptions(request, runtime);
  }

  async describeLiveCertificateListWithOptions(request: DescribeLiveCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveCertificateListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveCertificateListResponse>(await this.doRequest("DescribeLiveCertificateList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveCertificateListResponse({}));
  }

  async describeLiveCertificateList(request: DescribeLiveCertificateListRequest): Promise<DescribeLiveCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveCertificateListWithOptions(request, runtime);
  }

  async deleteLiveDomainWithOptions(request: DeleteLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveDomainResponse>(await this.doRequest("DeleteLiveDomain", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveDomainResponse({}));
  }

  async deleteLiveDomain(request: DeleteLiveDomainRequest): Promise<DeleteLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDomainWithOptions(request, runtime);
  }

  async describeLiveDomainConfigsWithOptions(request: DescribeLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainConfigsResponse>(await this.doRequest("DescribeLiveDomainConfigs", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainConfigsResponse({}));
  }

  async describeLiveDomainConfigs(request: DescribeLiveDomainConfigsRequest): Promise<DescribeLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainConfigsWithOptions(request, runtime);
  }

  async addLiveDomainWithOptions(request: AddLiveDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveDomainResponse>(await this.doRequest("AddLiveDomain", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveDomainResponse({}));
  }

  async addLiveDomain(request: AddLiveDomainRequest): Promise<AddLiveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainWithOptions(request, runtime);
  }

  async describeLiveDomainDetailWithOptions(request: DescribeLiveDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainDetailResponse>(await this.doRequest("DescribeLiveDomainDetail", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainDetailResponse({}));
  }

  async describeLiveDomainDetail(request: DescribeLiveDomainDetailRequest): Promise<DescribeLiveDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainDetailWithOptions(request, runtime);
  }

  async batchDeleteLiveDomainConfigsWithOptions(request: BatchDeleteLiveDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteLiveDomainConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchDeleteLiveDomainConfigsResponse>(await this.doRequest("BatchDeleteLiveDomainConfigs", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new BatchDeleteLiveDomainConfigsResponse({}));
  }

  async batchDeleteLiveDomainConfigs(request: BatchDeleteLiveDomainConfigsRequest): Promise<BatchDeleteLiveDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteLiveDomainConfigsWithOptions(request, runtime);
  }

  async describeRoomStatusWithOptions(request: DescribeRoomStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRoomStatusResponse>(await this.doRequest("DescribeRoomStatus", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeRoomStatusResponse({}));
  }

  async describeRoomStatus(request: DescribeRoomStatusRequest): Promise<DescribeRoomStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomStatusWithOptions(request, runtime);
  }

  async describeRoomListWithOptions(request: DescribeRoomListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRoomListResponse>(await this.doRequest("DescribeRoomList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeRoomListResponse({}));
  }

  async describeRoomList(request: DescribeRoomListRequest): Promise<DescribeRoomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomListWithOptions(request, runtime);
  }

  async describeRoomKickoutUserListWithOptions(request: DescribeRoomKickoutUserListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoomKickoutUserListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRoomKickoutUserListResponse>(await this.doRequest("DescribeRoomKickoutUserList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeRoomKickoutUserListResponse({}));
  }

  async describeRoomKickoutUserList(request: DescribeRoomKickoutUserListRequest): Promise<DescribeRoomKickoutUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoomKickoutUserListWithOptions(request, runtime);
  }

  async sendRoomUserNotificationWithOptions(request: SendRoomUserNotificationRequest, runtime: $Util.RuntimeOptions): Promise<SendRoomUserNotificationResponse> {
    Util.validateModel(request);
    return $tea.cast<SendRoomUserNotificationResponse>(await this.doRequest("SendRoomUserNotification", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SendRoomUserNotificationResponse({}));
  }

  async sendRoomUserNotification(request: SendRoomUserNotificationRequest): Promise<SendRoomUserNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendRoomUserNotificationWithOptions(request, runtime);
  }

  async describeForbidPushStreamRoomListWithOptions(request: DescribeForbidPushStreamRoomListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeForbidPushStreamRoomListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeForbidPushStreamRoomListResponse>(await this.doRequest("DescribeForbidPushStreamRoomList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeForbidPushStreamRoomListResponse({}));
  }

  async describeForbidPushStreamRoomList(request: DescribeForbidPushStreamRoomListRequest): Promise<DescribeForbidPushStreamRoomListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeForbidPushStreamRoomListWithOptions(request, runtime);
  }

  async sendRoomNotificationWithOptions(request: SendRoomNotificationRequest, runtime: $Util.RuntimeOptions): Promise<SendRoomNotificationResponse> {
    Util.validateModel(request);
    return $tea.cast<SendRoomNotificationResponse>(await this.doRequest("SendRoomNotification", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SendRoomNotificationResponse({}));
  }

  async sendRoomNotification(request: SendRoomNotificationRequest): Promise<SendRoomNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendRoomNotificationWithOptions(request, runtime);
  }

  async forbidPushStreamWithOptions(request: ForbidPushStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidPushStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<ForbidPushStreamResponse>(await this.doRequest("ForbidPushStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ForbidPushStreamResponse({}));
  }

  async forbidPushStream(request: ForbidPushStreamRequest): Promise<ForbidPushStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidPushStreamWithOptions(request, runtime);
  }

  async deleteRoomWithOptions(request: DeleteRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoomResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRoomResponse>(await this.doRequest("DeleteRoom", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteRoomResponse({}));
  }

  async deleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoomWithOptions(request, runtime);
  }

  async createRoomWithOptions(request: CreateRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoomResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRoomResponse>(await this.doRequest("CreateRoom", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CreateRoomResponse({}));
  }

  async createRoom(request: CreateRoomRequest): Promise<CreateRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoomWithOptions(request, runtime);
  }

  async allowPushStreamWithOptions(request: AllowPushStreamRequest, runtime: $Util.RuntimeOptions): Promise<AllowPushStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<AllowPushStreamResponse>(await this.doRequest("AllowPushStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AllowPushStreamResponse({}));
  }

  async allowPushStream(request: AllowPushStreamRequest): Promise<AllowPushStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allowPushStreamWithOptions(request, runtime);
  }

  async describeLiveUserDomainsWithOptions(request: DescribeLiveUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveUserDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveUserDomainsResponse>(await this.doRequest("DescribeLiveUserDomains", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveUserDomainsResponse({}));
  }

  async describeLiveUserDomains(request: DescribeLiveUserDomainsRequest): Promise<DescribeLiveUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveUserDomainsWithOptions(request, runtime);
  }

  async describeCasterRtcInfoWithOptions(request: DescribeCasterRtcInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterRtcInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterRtcInfoResponse>(await this.doRequest("DescribeCasterRtcInfo", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterRtcInfoResponse({}));
  }

  async describeCasterRtcInfo(request: DescribeCasterRtcInfoRequest): Promise<DescribeCasterRtcInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterRtcInfoWithOptions(request, runtime);
  }

  async describeUpBpsPeakDataWithOptions(request: DescribeUpBpsPeakDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpBpsPeakDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUpBpsPeakDataResponse>(await this.doRequest("DescribeUpBpsPeakData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeUpBpsPeakDataResponse({}));
  }

  async describeUpBpsPeakData(request: DescribeUpBpsPeakDataRequest): Promise<DescribeUpBpsPeakDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpBpsPeakDataWithOptions(request, runtime);
  }

  async describeUpBpsPeakOfLineWithOptions(request: DescribeUpBpsPeakOfLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpBpsPeakOfLineResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUpBpsPeakOfLineResponse>(await this.doRequest("DescribeUpBpsPeakOfLine", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeUpBpsPeakOfLineResponse({}));
  }

  async describeUpBpsPeakOfLine(request: DescribeUpBpsPeakOfLineRequest): Promise<DescribeUpBpsPeakOfLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpBpsPeakOfLineWithOptions(request, runtime);
  }

  async describeUpPeakPublishStreamDataWithOptions(request: DescribeUpPeakPublishStreamDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpPeakPublishStreamDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUpPeakPublishStreamDataResponse>(await this.doRequest("DescribeUpPeakPublishStreamData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeUpPeakPublishStreamDataResponse({}));
  }

  async describeUpPeakPublishStreamData(request: DescribeUpPeakPublishStreamDataRequest): Promise<DescribeUpPeakPublishStreamDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  async deleteLiveDomainMappingWithOptions(request: DeleteLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDomainMappingResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveDomainMappingResponse>(await this.doRequest("DeleteLiveDomainMapping", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveDomainMappingResponse({}));
  }

  async deleteLiveDomainMapping(request: DeleteLiveDomainMappingRequest): Promise<DeleteLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDomainMappingWithOptions(request, runtime);
  }

  async addLiveDomainMappingWithOptions(request: AddLiveDomainMappingRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDomainMappingResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveDomainMappingResponse>(await this.doRequest("AddLiveDomainMapping", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveDomainMappingResponse({}));
  }

  async addLiveDomainMapping(request: AddLiveDomainMappingRequest): Promise<AddLiveDomainMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDomainMappingWithOptions(request, runtime);
  }

  async addCasterEpisodeGroupContentWithOptions(request: AddCasterEpisodeGroupContentRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeGroupContentResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterEpisodeGroupContentResponse>(await this.doRequest("AddCasterEpisodeGroupContent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterEpisodeGroupContentResponse({}));
  }

  async addCasterEpisodeGroupContent(request: AddCasterEpisodeGroupContentRequest): Promise<AddCasterEpisodeGroupContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeGroupContentWithOptions(request, runtime);
  }

  async modifyCasterProgramWithOptions(request: ModifyCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterProgramResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCasterProgramResponse>(await this.doRequest("ModifyCasterProgram", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyCasterProgramResponse({}));
  }

  async modifyCasterProgram(request: ModifyCasterProgramRequest): Promise<ModifyCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterProgramWithOptions(request, runtime);
  }

  async modifyCasterEpisodeWithOptions(request: ModifyCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterEpisodeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCasterEpisodeResponse>(await this.doRequest("ModifyCasterEpisode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyCasterEpisodeResponse({}));
  }

  async modifyCasterEpisode(request: ModifyCasterEpisodeRequest): Promise<ModifyCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterEpisodeWithOptions(request, runtime);
  }

  async describeCasterProgramWithOptions(request: DescribeCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterProgramResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterProgramResponse>(await this.doRequest("DescribeCasterProgram", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterProgramResponse({}));
  }

  async describeCasterProgram(request: DescribeCasterProgramRequest): Promise<DescribeCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterProgramWithOptions(request, runtime);
  }

  async deleteCasterProgramWithOptions(request: DeleteCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterProgramResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterProgramResponse>(await this.doRequest("DeleteCasterProgram", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterProgramResponse({}));
  }

  async deleteCasterProgram(request: DeleteCasterProgramRequest): Promise<DeleteCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterProgramWithOptions(request, runtime);
  }

  async deleteCasterEpisodeGroupWithOptions(request: DeleteCasterEpisodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterEpisodeGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterEpisodeGroupResponse>(await this.doRequest("DeleteCasterEpisodeGroup", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterEpisodeGroupResponse({}));
  }

  async deleteCasterEpisodeGroup(request: DeleteCasterEpisodeGroupRequest): Promise<DeleteCasterEpisodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterEpisodeGroupWithOptions(request, runtime);
  }

  async deleteCasterEpisodeWithOptions(request: DeleteCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterEpisodeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterEpisodeResponse>(await this.doRequest("DeleteCasterEpisode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterEpisodeResponse({}));
  }

  async deleteCasterEpisode(request: DeleteCasterEpisodeRequest): Promise<DeleteCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterEpisodeWithOptions(request, runtime);
  }

  async addCasterProgramWithOptions(request: AddCasterProgramRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterProgramResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterProgramResponse>(await this.doRequest("AddCasterProgram", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterProgramResponse({}));
  }

  async addCasterProgram(request: AddCasterProgramRequest): Promise<AddCasterProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterProgramWithOptions(request, runtime);
  }

  async addCasterEpisodeGroupWithOptions(request: AddCasterEpisodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterEpisodeGroupResponse>(await this.doRequest("AddCasterEpisodeGroup", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterEpisodeGroupResponse({}));
  }

  async addCasterEpisodeGroup(request: AddCasterEpisodeGroupRequest): Promise<AddCasterEpisodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeGroupWithOptions(request, runtime);
  }

  async addCasterEpisodeWithOptions(request: AddCasterEpisodeRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterEpisodeResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterEpisodeResponse>(await this.doRequest("AddCasterEpisode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterEpisodeResponse({}));
  }

  async addCasterEpisode(request: AddCasterEpisodeRequest): Promise<AddCasterEpisodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterEpisodeWithOptions(request, runtime);
  }

  async describeLiveDomainTranscodeDataWithOptions(request: DescribeLiveDomainTranscodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTranscodeDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainTranscodeDataResponse>(await this.doRequest("DescribeLiveDomainTranscodeData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainTranscodeDataResponse({}));
  }

  async describeLiveDomainTranscodeData(request: DescribeLiveDomainTranscodeDataRequest): Promise<DescribeLiveDomainTranscodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTranscodeDataWithOptions(request, runtime);
  }

  async describeLiveDomainSnapshotDataWithOptions(request: DescribeLiveDomainSnapshotDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainSnapshotDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainSnapshotDataResponse>(await this.doRequest("DescribeLiveDomainSnapshotData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainSnapshotDataResponse({}));
  }

  async describeLiveDomainSnapshotData(request: DescribeLiveDomainSnapshotDataRequest): Promise<DescribeLiveDomainSnapshotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainSnapshotDataWithOptions(request, runtime);
  }

  async describeLiveDomainRecordDataWithOptions(request: DescribeLiveDomainRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainRecordDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainRecordDataResponse>(await this.doRequest("DescribeLiveDomainRecordData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainRecordDataResponse({}));
  }

  async describeLiveDomainRecordData(request: DescribeLiveDomainRecordDataRequest): Promise<DescribeLiveDomainRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainRecordDataWithOptions(request, runtime);
  }

  async realTimeRecordCommandWithOptions(request: RealTimeRecordCommandRequest, runtime: $Util.RuntimeOptions): Promise<RealTimeRecordCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<RealTimeRecordCommandResponse>(await this.doRequest("RealTimeRecordCommand", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new RealTimeRecordCommandResponse({}));
  }

  async realTimeRecordCommand(request: RealTimeRecordCommandRequest): Promise<RealTimeRecordCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.realTimeRecordCommandWithOptions(request, runtime);
  }

  async describeLiveDomainTrafficDataWithOptions(request: DescribeLiveDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainTrafficDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainTrafficDataResponse>(await this.doRequest("DescribeLiveDomainTrafficData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainTrafficDataResponse({}));
  }

  async describeLiveDomainTrafficData(request: DescribeLiveDomainTrafficDataRequest): Promise<DescribeLiveDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainTrafficDataWithOptions(request, runtime);
  }

  async describeLiveDomainBpsDataWithOptions(request: DescribeLiveDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDomainBpsDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDomainBpsDataResponse>(await this.doRequest("DescribeLiveDomainBpsData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDomainBpsDataResponse({}));
  }

  async describeLiveDomainBpsData(request: DescribeLiveDomainBpsDataRequest): Promise<DescribeLiveDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDomainBpsDataWithOptions(request, runtime);
  }

  async addTrancodeSEIWithOptions(request: AddTrancodeSEIRequest, runtime: $Util.RuntimeOptions): Promise<AddTrancodeSEIResponse> {
    Util.validateModel(request);
    return $tea.cast<AddTrancodeSEIResponse>(await this.doRequest("AddTrancodeSEI", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddTrancodeSEIResponse({}));
  }

  async addTrancodeSEI(request: AddTrancodeSEIRequest): Promise<AddTrancodeSEIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTrancodeSEIWithOptions(request, runtime);
  }

  async deleteCasterSceneConfigWithOptions(request: DeleteCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterSceneConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterSceneConfigResponse>(await this.doRequest("DeleteCasterSceneConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterSceneConfigResponse({}));
  }

  async deleteCasterSceneConfig(request: DeleteCasterSceneConfigRequest): Promise<DeleteCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterSceneConfigWithOptions(request, runtime);
  }

  async addCustomLiveStreamTranscodeWithOptions(request: AddCustomLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCustomLiveStreamTranscodeResponse>(await this.doRequest("AddCustomLiveStreamTranscode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCustomLiveStreamTranscodeResponse({}));
  }

  async addCustomLiveStreamTranscode(request: AddCustomLiveStreamTranscodeRequest): Promise<AddCustomLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomLiveStreamTranscodeWithOptions(request, runtime);
  }

  async describeLiveRecordVodConfigsWithOptions(request: DescribeLiveRecordVodConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordVodConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveRecordVodConfigsResponse>(await this.doRequest("DescribeLiveRecordVodConfigs", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveRecordVodConfigsResponse({}));
  }

  async describeLiveRecordVodConfigs(request: DescribeLiveRecordVodConfigsRequest): Promise<DescribeLiveRecordVodConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordVodConfigsWithOptions(request, runtime);
  }

  async deleteLiveRecordVodConfigWithOptions(request: DeleteLiveRecordVodConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordVodConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveRecordVodConfigResponse>(await this.doRequest("DeleteLiveRecordVodConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveRecordVodConfigResponse({}));
  }

  async deleteLiveRecordVodConfig(request: DeleteLiveRecordVodConfigRequest): Promise<DeleteLiveRecordVodConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordVodConfigWithOptions(request, runtime);
  }

  async addLiveRecordVodConfigWithOptions(request: AddLiveRecordVodConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveRecordVodConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveRecordVodConfigResponse>(await this.doRequest("AddLiveRecordVodConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveRecordVodConfigResponse({}));
  }

  async addLiveRecordVodConfig(request: AddLiveRecordVodConfigRequest): Promise<AddLiveRecordVodConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveRecordVodConfigWithOptions(request, runtime);
  }

  async modifyCasterComponentWithOptions(request: ModifyCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterComponentResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCasterComponentResponse>(await this.doRequest("ModifyCasterComponent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyCasterComponentResponse({}));
  }

  async modifyCasterComponent(request: ModifyCasterComponentRequest): Promise<ModifyCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterComponentWithOptions(request, runtime);
  }

  async describeCasterComponentsWithOptions(request: DescribeCasterComponentsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterComponentsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterComponentsResponse>(await this.doRequest("DescribeCasterComponents", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterComponentsResponse({}));
  }

  async describeCasterComponents(request: DescribeCasterComponentsRequest): Promise<DescribeCasterComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterComponentsWithOptions(request, runtime);
  }

  async deleteCasterComponentWithOptions(request: DeleteCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterComponentResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterComponentResponse>(await this.doRequest("DeleteCasterComponent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterComponentResponse({}));
  }

  async deleteCasterComponent(request: DeleteCasterComponentRequest): Promise<DeleteCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterComponentWithOptions(request, runtime);
  }

  async addCasterComponentWithOptions(request: AddCasterComponentRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterComponentResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterComponentResponse>(await this.doRequest("AddCasterComponent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterComponentResponse({}));
  }

  async addCasterComponent(request: AddCasterComponentRequest): Promise<AddCasterComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterComponentWithOptions(request, runtime);
  }

  async stopCasterWithOptions(request: StopCasterRequest, runtime: $Util.RuntimeOptions): Promise<StopCasterResponse> {
    Util.validateModel(request);
    return $tea.cast<StopCasterResponse>(await this.doRequest("StopCaster", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StopCasterResponse({}));
  }

  async stopCaster(request: StopCasterRequest): Promise<StopCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCasterWithOptions(request, runtime);
  }

  async startCasterWithOptions(request: StartCasterRequest, runtime: $Util.RuntimeOptions): Promise<StartCasterResponse> {
    Util.validateModel(request);
    return $tea.cast<StartCasterResponse>(await this.doRequest("StartCaster", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StartCasterResponse({}));
  }

  async startCaster(request: StartCasterRequest): Promise<StartCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCasterWithOptions(request, runtime);
  }

  async describeLiveStreamHistoryUserNumWithOptions(request: DescribeLiveStreamHistoryUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamHistoryUserNumResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamHistoryUserNumResponse>(await this.doRequest("DescribeLiveStreamHistoryUserNum", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamHistoryUserNumResponse({}));
  }

  async describeLiveStreamHistoryUserNum(request: DescribeLiveStreamHistoryUserNumRequest): Promise<DescribeLiveStreamHistoryUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamHistoryUserNumWithOptions(request, runtime);
  }

  async updateCasterSceneConfigWithOptions(request: UpdateCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCasterSceneConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateCasterSceneConfigResponse>(await this.doRequest("UpdateCasterSceneConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateCasterSceneConfigResponse({}));
  }

  async updateCasterSceneConfig(request: UpdateCasterSceneConfigRequest): Promise<UpdateCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCasterSceneConfigWithOptions(request, runtime);
  }

  async stopCasterSceneWithOptions(request: StopCasterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopCasterSceneResponse> {
    Util.validateModel(request);
    return $tea.cast<StopCasterSceneResponse>(await this.doRequest("StopCasterScene", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StopCasterSceneResponse({}));
  }

  async stopCasterScene(request: StopCasterSceneRequest): Promise<StopCasterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCasterSceneWithOptions(request, runtime);
  }

  async startCasterSceneWithOptions(request: StartCasterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartCasterSceneResponse> {
    Util.validateModel(request);
    return $tea.cast<StartCasterSceneResponse>(await this.doRequest("StartCasterScene", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new StartCasterSceneResponse({}));
  }

  async startCasterScene(request: StartCasterSceneRequest): Promise<StartCasterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCasterSceneWithOptions(request, runtime);
  }

  async setCasterSceneConfigWithOptions(request: SetCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterSceneConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetCasterSceneConfigResponse>(await this.doRequest("SetCasterSceneConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetCasterSceneConfigResponse({}));
  }

  async setCasterSceneConfig(request: SetCasterSceneConfigRequest): Promise<SetCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterSceneConfigWithOptions(request, runtime);
  }

  async setCasterConfigWithOptions(request: SetCasterConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetCasterConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetCasterConfigResponse>(await this.doRequest("SetCasterConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetCasterConfigResponse({}));
  }

  async setCasterConfig(request: SetCasterConfigRequest): Promise<SetCasterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCasterConfigWithOptions(request, runtime);
  }

  async modifyCasterVideoResourceWithOptions(request: ModifyCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterVideoResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCasterVideoResourceResponse>(await this.doRequest("ModifyCasterVideoResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyCasterVideoResourceResponse({}));
  }

  async modifyCasterVideoResource(request: ModifyCasterVideoResourceRequest): Promise<ModifyCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterVideoResourceWithOptions(request, runtime);
  }

  async modifyCasterLayoutWithOptions(request: ModifyCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCasterLayoutResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCasterLayoutResponse>(await this.doRequest("ModifyCasterLayout", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ModifyCasterLayoutResponse({}));
  }

  async modifyCasterLayout(request: ModifyCasterLayoutRequest): Promise<ModifyCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCasterLayoutWithOptions(request, runtime);
  }

  async effectCasterVideoResourceWithOptions(request: EffectCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<EffectCasterVideoResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<EffectCasterVideoResourceResponse>(await this.doRequest("EffectCasterVideoResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new EffectCasterVideoResourceResponse({}));
  }

  async effectCasterVideoResource(request: EffectCasterVideoResourceRequest): Promise<EffectCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.effectCasterVideoResourceWithOptions(request, runtime);
  }

  async effectCasterUrgentWithOptions(request: EffectCasterUrgentRequest, runtime: $Util.RuntimeOptions): Promise<EffectCasterUrgentResponse> {
    Util.validateModel(request);
    return $tea.cast<EffectCasterUrgentResponse>(await this.doRequest("EffectCasterUrgent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new EffectCasterUrgentResponse({}));
  }

  async effectCasterUrgent(request: EffectCasterUrgentRequest): Promise<EffectCasterUrgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.effectCasterUrgentWithOptions(request, runtime);
  }

  async describeCasterVideoResourcesWithOptions(request: DescribeCasterVideoResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterVideoResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterVideoResourcesResponse>(await this.doRequest("DescribeCasterVideoResources", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterVideoResourcesResponse({}));
  }

  async describeCasterVideoResources(request: DescribeCasterVideoResourcesRequest): Promise<DescribeCasterVideoResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterVideoResourcesWithOptions(request, runtime);
  }

  async describeCasterStreamUrlWithOptions(request: DescribeCasterStreamUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterStreamUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterStreamUrlResponse>(await this.doRequest("DescribeCasterStreamUrl", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterStreamUrlResponse({}));
  }

  async describeCasterStreamUrl(request: DescribeCasterStreamUrlRequest): Promise<DescribeCasterStreamUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterStreamUrlWithOptions(request, runtime);
  }

  async describeCasterScenesWithOptions(request: DescribeCasterScenesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterScenesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterScenesResponse>(await this.doRequest("DescribeCasterScenes", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterScenesResponse({}));
  }

  async describeCasterScenes(request: DescribeCasterScenesRequest): Promise<DescribeCasterScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterScenesWithOptions(request, runtime);
  }

  async describeCastersWithOptions(request: DescribeCastersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCastersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCastersResponse>(await this.doRequest("DescribeCasters", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCastersResponse({}));
  }

  async describeCasters(request: DescribeCastersRequest): Promise<DescribeCastersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCastersWithOptions(request, runtime);
  }

  async describeCasterLayoutsWithOptions(request: DescribeCasterLayoutsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterLayoutsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterLayoutsResponse>(await this.doRequest("DescribeCasterLayouts", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterLayoutsResponse({}));
  }

  async describeCasterLayouts(request: DescribeCasterLayoutsRequest): Promise<DescribeCasterLayoutsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterLayoutsWithOptions(request, runtime);
  }

  async describeCasterConfigWithOptions(request: DescribeCasterConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCasterConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCasterConfigResponse>(await this.doRequest("DescribeCasterConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeCasterConfigResponse({}));
  }

  async describeCasterConfig(request: DescribeCasterConfigRequest): Promise<DescribeCasterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCasterConfigWithOptions(request, runtime);
  }

  async deleteCasterVideoResourceWithOptions(request: DeleteCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterVideoResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterVideoResourceResponse>(await this.doRequest("DeleteCasterVideoResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterVideoResourceResponse({}));
  }

  async deleteCasterVideoResource(request: DeleteCasterVideoResourceRequest): Promise<DeleteCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterVideoResourceWithOptions(request, runtime);
  }

  async deleteCasterLayoutWithOptions(request: DeleteCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterLayoutResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterLayoutResponse>(await this.doRequest("DeleteCasterLayout", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterLayoutResponse({}));
  }

  async deleteCasterLayout(request: DeleteCasterLayoutRequest): Promise<DeleteCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterLayoutWithOptions(request, runtime);
  }

  async deleteCasterWithOptions(request: DeleteCasterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCasterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCasterResponse>(await this.doRequest("DeleteCaster", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteCasterResponse({}));
  }

  async deleteCaster(request: DeleteCasterRequest): Promise<DeleteCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCasterWithOptions(request, runtime);
  }

  async createCasterWithOptions(request: CreateCasterRequest, runtime: $Util.RuntimeOptions): Promise<CreateCasterResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCasterResponse>(await this.doRequest("CreateCaster", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CreateCasterResponse({}));
  }

  async createCaster(request: CreateCasterRequest): Promise<CreateCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCasterWithOptions(request, runtime);
  }

  async copyCasterSceneConfigWithOptions(request: CopyCasterSceneConfigRequest, runtime: $Util.RuntimeOptions): Promise<CopyCasterSceneConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<CopyCasterSceneConfigResponse>(await this.doRequest("CopyCasterSceneConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CopyCasterSceneConfigResponse({}));
  }

  async copyCasterSceneConfig(request: CopyCasterSceneConfigRequest): Promise<CopyCasterSceneConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCasterSceneConfigWithOptions(request, runtime);
  }

  async copyCasterWithOptions(request: CopyCasterRequest, runtime: $Util.RuntimeOptions): Promise<CopyCasterResponse> {
    Util.validateModel(request);
    return $tea.cast<CopyCasterResponse>(await this.doRequest("CopyCaster", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CopyCasterResponse({}));
  }

  async copyCaster(request: CopyCasterRequest): Promise<CopyCasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCasterWithOptions(request, runtime);
  }

  async addCasterVideoResourceWithOptions(request: AddCasterVideoResourceRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterVideoResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterVideoResourceResponse>(await this.doRequest("AddCasterVideoResource", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterVideoResourceResponse({}));
  }

  async addCasterVideoResource(request: AddCasterVideoResourceRequest): Promise<AddCasterVideoResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterVideoResourceWithOptions(request, runtime);
  }

  async addCasterLayoutWithOptions(request: AddCasterLayoutRequest, runtime: $Util.RuntimeOptions): Promise<AddCasterLayoutResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCasterLayoutResponse>(await this.doRequest("AddCasterLayout", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddCasterLayoutResponse({}));
  }

  async addCasterLayout(request: AddCasterLayoutRequest): Promise<AddCasterLayoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCasterLayoutWithOptions(request, runtime);
  }

  async describeLivePullStreamConfigWithOptions(request: DescribeLivePullStreamConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLivePullStreamConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLivePullStreamConfigResponse>(await this.doRequest("DescribeLivePullStreamConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLivePullStreamConfigResponse({}));
  }

  async describeLivePullStreamConfig(request: DescribeLivePullStreamConfigRequest): Promise<DescribeLivePullStreamConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLivePullStreamConfigWithOptions(request, runtime);
  }

  async deleteLivePullStreamInfoConfigWithOptions(request: DeleteLivePullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLivePullStreamInfoConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLivePullStreamInfoConfigResponse>(await this.doRequest("DeleteLivePullStreamInfoConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLivePullStreamInfoConfigResponse({}));
  }

  async deleteLivePullStreamInfoConfig(request: DeleteLivePullStreamInfoConfigRequest): Promise<DeleteLivePullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLivePullStreamInfoConfigWithOptions(request, runtime);
  }

  async addLivePullStreamInfoConfigWithOptions(request: AddLivePullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLivePullStreamInfoConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLivePullStreamInfoConfigResponse>(await this.doRequest("AddLivePullStreamInfoConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLivePullStreamInfoConfigResponse({}));
  }

  async addLivePullStreamInfoConfig(request: AddLivePullStreamInfoConfigRequest): Promise<AddLivePullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLivePullStreamInfoConfigWithOptions(request, runtime);
  }

  async describeLiveStreamBitRateDataWithOptions(request: DescribeLiveStreamBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamBitRateDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamBitRateDataResponse>(await this.doRequest("DescribeLiveStreamBitRateData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamBitRateDataResponse({}));
  }

  async describeLiveStreamBitRateData(request: DescribeLiveStreamBitRateDataRequest): Promise<DescribeLiveStreamBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamBitRateDataWithOptions(request, runtime);
  }

  async addLiveDetectNotifyConfigWithOptions(request: AddLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveDetectNotifyConfigResponse>(await this.doRequest("AddLiveDetectNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveDetectNotifyConfigResponse({}));
  }

  async addLiveDetectNotifyConfig(request: AddLiveDetectNotifyConfigRequest): Promise<AddLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async addLiveSnapshotDetectPornConfigWithOptions(request: AddLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveSnapshotDetectPornConfigResponse>(await this.doRequest("AddLiveSnapshotDetectPornConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveSnapshotDetectPornConfigResponse({}));
  }

  async addLiveSnapshotDetectPornConfig(request: AddLiveSnapshotDetectPornConfigRequest): Promise<AddLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async deleteLiveDetectNotifyConfigWithOptions(request: DeleteLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveDetectNotifyConfigResponse>(await this.doRequest("DeleteLiveDetectNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveDetectNotifyConfigResponse({}));
  }

  async deleteLiveDetectNotifyConfig(request: DeleteLiveDetectNotifyConfigRequest): Promise<DeleteLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveDetectNotifyConfigWithOptions(request: DescribeLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveDetectNotifyConfigResponse>(await this.doRequest("DescribeLiveDetectNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveDetectNotifyConfigResponse({}));
  }

  async describeLiveDetectNotifyConfig(request: DescribeLiveDetectNotifyConfigRequest): Promise<DescribeLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveSnapshotDetectPornConfigWithOptions(request: DeleteLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveSnapshotDetectPornConfigResponse>(await this.doRequest("DeleteLiveSnapshotDetectPornConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveSnapshotDetectPornConfigResponse({}));
  }

  async deleteLiveSnapshotDetectPornConfig(request: DeleteLiveSnapshotDetectPornConfigRequest): Promise<DeleteLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async describeLiveSnapshotDetectPornConfigWithOptions(request: DescribeLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveSnapshotDetectPornConfigResponse>(await this.doRequest("DescribeLiveSnapshotDetectPornConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveSnapshotDetectPornConfigResponse({}));
  }

  async describeLiveSnapshotDetectPornConfig(request: DescribeLiveSnapshotDetectPornConfigRequest): Promise<DescribeLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async updateLiveDetectNotifyConfigWithOptions(request: UpdateLiveDetectNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveDetectNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveDetectNotifyConfigResponse>(await this.doRequest("UpdateLiveDetectNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveDetectNotifyConfigResponse({}));
  }

  async updateLiveDetectNotifyConfig(request: UpdateLiveDetectNotifyConfigRequest): Promise<UpdateLiveDetectNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveDetectNotifyConfigWithOptions(request, runtime);
  }

  async updateLiveSnapshotDetectPornConfigWithOptions(request: UpdateLiveSnapshotDetectPornConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveSnapshotDetectPornConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveSnapshotDetectPornConfigResponse>(await this.doRequest("UpdateLiveSnapshotDetectPornConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveSnapshotDetectPornConfigResponse({}));
  }

  async updateLiveSnapshotDetectPornConfig(request: UpdateLiveSnapshotDetectPornConfigRequest): Promise<UpdateLiveSnapshotDetectPornConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveSnapshotDetectPornConfigWithOptions(request, runtime);
  }

  async addLiveRecordNotifyConfigWithOptions(request: AddLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveRecordNotifyConfigResponse>(await this.doRequest("AddLiveRecordNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveRecordNotifyConfigResponse({}));
  }

  async addLiveRecordNotifyConfig(request: AddLiveRecordNotifyConfigRequest): Promise<AddLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async deleteLiveStreamsNotifyUrlConfigWithOptions(request: DeleteLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveStreamsNotifyUrlConfigResponse>(await this.doRequest("DeleteLiveStreamsNotifyUrlConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveStreamsNotifyUrlConfigResponse({}));
  }

  async deleteLiveStreamsNotifyUrlConfig(request: DeleteLiveStreamsNotifyUrlConfigRequest): Promise<DeleteLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async deleteLiveRecordNotifyConfigWithOptions(request: DeleteLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveRecordNotifyConfigResponse>(await this.doRequest("DeleteLiveRecordNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveRecordNotifyConfigResponse({}));
  }

  async deleteLiveRecordNotifyConfig(request: DeleteLiveRecordNotifyConfigRequest): Promise<DeleteLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveRecordNotifyConfigWithOptions(request: DescribeLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveRecordNotifyConfigResponse>(await this.doRequest("DescribeLiveRecordNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveRecordNotifyConfigResponse({}));
  }

  async describeLiveRecordNotifyConfig(request: DescribeLiveRecordNotifyConfigRequest): Promise<DescribeLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveStreamsNotifyUrlConfigWithOptions(request: DescribeLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsNotifyUrlConfigResponse>(await this.doRequest("DescribeLiveStreamsNotifyUrlConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsNotifyUrlConfigResponse({}));
  }

  async describeLiveStreamsNotifyUrlConfig(request: DescribeLiveStreamsNotifyUrlConfigRequest): Promise<DescribeLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async updateLiveRecordNotifyConfigWithOptions(request: UpdateLiveRecordNotifyConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveRecordNotifyConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveRecordNotifyConfigResponse>(await this.doRequest("UpdateLiveRecordNotifyConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveRecordNotifyConfigResponse({}));
  }

  async updateLiveRecordNotifyConfig(request: UpdateLiveRecordNotifyConfigRequest): Promise<UpdateLiveRecordNotifyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveRecordNotifyConfigWithOptions(request, runtime);
  }

  async describeLiveStreamsBlockListWithOptions(request: DescribeLiveStreamsBlockListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsBlockListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsBlockListResponse>(await this.doRequest("DescribeLiveStreamsBlockList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsBlockListResponse({}));
  }

  async describeLiveStreamsBlockList(request: DescribeLiveStreamsBlockListRequest): Promise<DescribeLiveStreamsBlockListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsBlockListWithOptions(request, runtime);
  }

  async describeLiveStreamOnlineUserNumWithOptions(request: DescribeLiveStreamOnlineUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamOnlineUserNumResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamOnlineUserNumResponse>(await this.doRequest("DescribeLiveStreamOnlineUserNum", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamOnlineUserNumResponse({}));
  }

  async describeLiveStreamOnlineUserNum(request: DescribeLiveStreamOnlineUserNumRequest): Promise<DescribeLiveStreamOnlineUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamOnlineUserNumWithOptions(request, runtime);
  }

  async describeLiveStreamsPublishListWithOptions(request: DescribeLiveStreamsPublishListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsPublishListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsPublishListResponse>(await this.doRequest("DescribeLiveStreamsPublishList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsPublishListResponse({}));
  }

  async describeLiveStreamsPublishList(request: DescribeLiveStreamsPublishListRequest): Promise<DescribeLiveStreamsPublishListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsPublishListWithOptions(request, runtime);
  }

  async describeLiveStreamsOnlineListWithOptions(request: DescribeLiveStreamsOnlineListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsOnlineListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsOnlineListResponse>(await this.doRequest("DescribeLiveStreamsOnlineList", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsOnlineListResponse({}));
  }

  async describeLiveStreamsOnlineList(request: DescribeLiveStreamsOnlineListRequest): Promise<DescribeLiveStreamsOnlineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsOnlineListWithOptions(request, runtime);
  }

  async describeLiveStreamsControlHistoryWithOptions(request: DescribeLiveStreamsControlHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsControlHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsControlHistoryResponse>(await this.doRequest("DescribeLiveStreamsControlHistory", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsControlHistoryResponse({}));
  }

  async describeLiveStreamsControlHistory(request: DescribeLiveStreamsControlHistoryRequest): Promise<DescribeLiveStreamsControlHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsControlHistoryWithOptions(request, runtime);
  }

  async addLiveStreamTranscodeWithOptions(request: AddLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveStreamTranscodeResponse>(await this.doRequest("AddLiveStreamTranscode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveStreamTranscodeResponse({}));
  }

  async addLiveStreamTranscode(request: AddLiveStreamTranscodeRequest): Promise<AddLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveStreamTranscodeWithOptions(request, runtime);
  }

  async deleteLiveStreamTranscodeWithOptions(request: DeleteLiveStreamTranscodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveStreamTranscodeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveStreamTranscodeResponse>(await this.doRequest("DeleteLiveStreamTranscode", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveStreamTranscodeResponse({}));
  }

  async deleteLiveStreamTranscode(request: DeleteLiveStreamTranscodeRequest): Promise<DeleteLiveStreamTranscodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveStreamTranscodeWithOptions(request, runtime);
  }

  async describeLiveStreamsFrameRateAndBitRateDataWithOptions(request: DescribeLiveStreamsFrameRateAndBitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamsFrameRateAndBitRateDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamsFrameRateAndBitRateDataResponse>(await this.doRequest("DescribeLiveStreamsFrameRateAndBitRateData", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamsFrameRateAndBitRateDataResponse({}));
  }

  async describeLiveStreamsFrameRateAndBitRateData(request: DescribeLiveStreamsFrameRateAndBitRateDataRequest): Promise<DescribeLiveStreamsFrameRateAndBitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamsFrameRateAndBitRateDataWithOptions(request, runtime);
  }

  async forbidLiveStreamWithOptions(request: ForbidLiveStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidLiveStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<ForbidLiveStreamResponse>(await this.doRequest("ForbidLiveStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ForbidLiveStreamResponse({}));
  }

  async forbidLiveStream(request: ForbidLiveStreamRequest): Promise<ForbidLiveStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidLiveStreamWithOptions(request, runtime);
  }

  async describeLiveStreamTranscodeInfoWithOptions(request: DescribeLiveStreamTranscodeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamTranscodeInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamTranscodeInfoResponse>(await this.doRequest("DescribeLiveStreamTranscodeInfo", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamTranscodeInfoResponse({}));
  }

  async describeLiveStreamTranscodeInfo(request: DescribeLiveStreamTranscodeInfoRequest): Promise<DescribeLiveStreamTranscodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamTranscodeInfoWithOptions(request, runtime);
  }

  async setLiveStreamsNotifyUrlConfigWithOptions(request: SetLiveStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetLiveStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SetLiveStreamsNotifyUrlConfigResponse>(await this.doRequest("SetLiveStreamsNotifyUrlConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new SetLiveStreamsNotifyUrlConfigResponse({}));
  }

  async setLiveStreamsNotifyUrlConfig(request: SetLiveStreamsNotifyUrlConfigRequest): Promise<SetLiveStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLiveStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async resumeLiveStreamWithOptions(request: ResumeLiveStreamRequest, runtime: $Util.RuntimeOptions): Promise<ResumeLiveStreamResponse> {
    Util.validateModel(request);
    return $tea.cast<ResumeLiveStreamResponse>(await this.doRequest("ResumeLiveStream", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new ResumeLiveStreamResponse({}));
  }

  async resumeLiveStream(request: ResumeLiveStreamRequest): Promise<ResumeLiveStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeLiveStreamWithOptions(request, runtime);
  }

  async addLiveAppSnapshotConfigWithOptions(request: AddLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveAppSnapshotConfigResponse>(await this.doRequest("AddLiveAppSnapshotConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveAppSnapshotConfigResponse({}));
  }

  async addLiveAppSnapshotConfig(request: AddLiveAppSnapshotConfigRequest): Promise<AddLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAppSnapshotConfigWithOptions(request, runtime);
  }

  async addLiveAppRecordConfigWithOptions(request: AddLiveAppRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLiveAppRecordConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLiveAppRecordConfigResponse>(await this.doRequest("AddLiveAppRecordConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new AddLiveAppRecordConfigResponse({}));
  }

  async addLiveAppRecordConfig(request: AddLiveAppRecordConfigRequest): Promise<AddLiveAppRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLiveAppRecordConfigWithOptions(request, runtime);
  }

  async describeLiveRecordConfigWithOptions(request: DescribeLiveRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveRecordConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveRecordConfigResponse>(await this.doRequest("DescribeLiveRecordConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveRecordConfigResponse({}));
  }

  async describeLiveRecordConfig(request: DescribeLiveRecordConfigRequest): Promise<DescribeLiveRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveRecordConfigWithOptions(request, runtime);
  }

  async deleteLiveAppSnapshotConfigWithOptions(request: DeleteLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveAppSnapshotConfigResponse>(await this.doRequest("DeleteLiveAppSnapshotConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveAppSnapshotConfigResponse({}));
  }

  async deleteLiveAppSnapshotConfig(request: DeleteLiveAppSnapshotConfigRequest): Promise<DeleteLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAppSnapshotConfigWithOptions(request, runtime);
  }

  async deleteLiveAppRecordConfigWithOptions(request: DeleteLiveAppRecordConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLiveAppRecordConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLiveAppRecordConfigResponse>(await this.doRequest("DeleteLiveAppRecordConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DeleteLiveAppRecordConfigResponse({}));
  }

  async deleteLiveAppRecordConfig(request: DeleteLiveAppRecordConfigRequest): Promise<DeleteLiveAppRecordConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLiveAppRecordConfigWithOptions(request, runtime);
  }

  async createLiveStreamRecordIndexFilesWithOptions(request: CreateLiveStreamRecordIndexFilesRequest, runtime: $Util.RuntimeOptions): Promise<CreateLiveStreamRecordIndexFilesResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLiveStreamRecordIndexFilesResponse>(await this.doRequest("CreateLiveStreamRecordIndexFiles", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new CreateLiveStreamRecordIndexFilesResponse({}));
  }

  async createLiveStreamRecordIndexFiles(request: CreateLiveStreamRecordIndexFilesRequest): Promise<CreateLiveStreamRecordIndexFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLiveStreamRecordIndexFilesWithOptions(request, runtime);
  }

  async describeLiveStreamSnapshotInfoWithOptions(request: DescribeLiveStreamSnapshotInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamSnapshotInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamSnapshotInfoResponse>(await this.doRequest("DescribeLiveStreamSnapshotInfo", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamSnapshotInfoResponse({}));
  }

  async describeLiveStreamSnapshotInfo(request: DescribeLiveStreamSnapshotInfoRequest): Promise<DescribeLiveStreamSnapshotInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamSnapshotInfoWithOptions(request, runtime);
  }

  async describeLiveStreamRecordIndexFilesWithOptions(request: DescribeLiveStreamRecordIndexFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordIndexFilesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamRecordIndexFilesResponse>(await this.doRequest("DescribeLiveStreamRecordIndexFiles", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamRecordIndexFilesResponse({}));
  }

  async describeLiveStreamRecordIndexFiles(request: DescribeLiveStreamRecordIndexFilesRequest): Promise<DescribeLiveStreamRecordIndexFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordIndexFilesWithOptions(request, runtime);
  }

  async describeLiveStreamRecordIndexFileWithOptions(request: DescribeLiveStreamRecordIndexFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordIndexFileResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamRecordIndexFileResponse>(await this.doRequest("DescribeLiveStreamRecordIndexFile", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamRecordIndexFileResponse({}));
  }

  async describeLiveStreamRecordIndexFile(request: DescribeLiveStreamRecordIndexFileRequest): Promise<DescribeLiveStreamRecordIndexFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordIndexFileWithOptions(request, runtime);
  }

  async describeLiveStreamRecordContentWithOptions(request: DescribeLiveStreamRecordContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveStreamRecordContentResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveStreamRecordContentResponse>(await this.doRequest("DescribeLiveStreamRecordContent", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveStreamRecordContentResponse({}));
  }

  async describeLiveStreamRecordContent(request: DescribeLiveStreamRecordContentRequest): Promise<DescribeLiveStreamRecordContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveStreamRecordContentWithOptions(request, runtime);
  }

  async describeLiveSnapshotConfigWithOptions(request: DescribeLiveSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLiveSnapshotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLiveSnapshotConfigResponse>(await this.doRequest("DescribeLiveSnapshotConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new DescribeLiveSnapshotConfigResponse({}));
  }

  async describeLiveSnapshotConfig(request: DescribeLiveSnapshotConfigRequest): Promise<DescribeLiveSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLiveSnapshotConfigWithOptions(request, runtime);
  }

  async updateLiveAppSnapshotConfigWithOptions(request: UpdateLiveAppSnapshotConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLiveAppSnapshotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateLiveAppSnapshotConfigResponse>(await this.doRequest("UpdateLiveAppSnapshotConfig", "HTTPS", "POST", "2016-11-01", "AK", null, $tea.toMap(request), runtime), new UpdateLiveAppSnapshotConfigResponse({}));
  }

  async updateLiveAppSnapshotConfig(request: UpdateLiveAppSnapshotConfigRequest): Promise<UpdateLiveAppSnapshotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLiveAppSnapshotConfigWithOptions(request, runtime);
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

}
