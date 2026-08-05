// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterConfigResponseBodyRecordConfigRecordFormatRecordFormat extends $dara.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceOssObjectPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyRecordConfigRecordFormat extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyRecordConfig extends $dara.Model {
  /**
   * @remarks
   * The on-demand recording mode. Valid values:
   * 
   * - 0: Disabled.
   * 
   * - 1: HTTP callback-based.
   * 
   * - 2: On-demand recording by parsing stream ingest parameters.
   * 
   * - 7: Not recorded by default.
   * 
   * @example
   * 0
   */
  onDemand?: number;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint of the storage location.
   * 
   * @example
   * oss-cn-shanghai.aliyundoc.com
   */
  ossEndpoint?: string;
  recordFormat?: DescribeCasterConfigResponseBodyRecordConfigRecordFormat;
  static names(): { [key: string]: string } {
    return {
      onDemand: 'OnDemand',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemand: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      recordFormat: DescribeCasterConfigResponseBodyRecordConfigRecordFormat,
    };
  }

  validate() {
    if(this.recordFormat && typeof (this.recordFormat as any).validate === 'function') {
      (this.recordFormat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroupResourceIds extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroup extends $dara.Model {
  hostResourceId?: string;
  mode?: number;
  resourceIds?: DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroupResourceIds;
  static names(): { [key: string]: string } {
    return {
      hostResourceId: 'HostResourceId',
      mode: 'Mode',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostResourceId: 'string',
      mode: 'number',
      resourceIds: DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroupResourceIds,
    };
  }

  validate() {
    if(this.resourceIds && typeof (this.resourceIds as any).validate === 'function') {
      (this.resourceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodySyncGroupsConfig extends $dara.Model {
  syncGroup?: DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroup[];
  static names(): { [key: string]: string } {
    return {
      syncGroup: 'SyncGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncGroup: { 'type': 'array', 'itemType': DescribeCasterConfigResponseBodySyncGroupsConfigSyncGroup },
    };
  }

  validate() {
    if(Array.isArray(this.syncGroup)) {
      $dara.Model.validateArray(this.syncGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfigCustomParamsVideo extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 300
   */
  bitrate?: number;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 300
   */
  fps?: number;
  /**
   * @remarks
   * The video height. Unit: pixels (px).
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The video width. Unit: pixels (px).
   * 
   * @example
   * 1080
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'bitrate',
      fps: 'fps',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      fps: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfigCustomParams extends $dara.Model {
  /**
   * @remarks
   * The video parameters.
   */
  video?: DescribeCasterConfigResponseBodyTranscodeConfigCustomParamsVideo;
  static names(): { [key: string]: string } {
    return {
      video: 'video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: DescribeCasterConfigResponseBodyTranscodeConfigCustomParamsVideo,
    };
  }

  validate() {
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.locationId)) {
      $dara.Model.validateArray(this.locationId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBodyTranscodeConfig extends $dara.Model {
  /**
   * @remarks
   * The production studio transcoding template. Valid values:
   * 
   * - **lp_ld**: low definition.
   * - **lp_sd**: standard definition.
   * - **lp_hd**: high definition.
   * - **lp_ud**: ultra-high definition.
   * - **lp_ld_v**: portrait low definition.
   * - **lp_sd_v**: portrait standard definition.
   * - **lp_hd_v**: portrait high definition.
   * - **lp_ud_v**: portrait ultra-high definition.
   * 
   * @example
   * lp_hd
   */
  casterTemplate?: string;
  /**
   * @remarks
   * The custom configuration.
   */
  customParams?: DescribeCasterConfigResponseBodyTranscodeConfigCustomParams;
  liveTemplateIds?: DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds;
  static names(): { [key: string]: string } {
    return {
      casterTemplate: 'CasterTemplate',
      customParams: 'CustomParams',
      liveTemplateIds: 'LiveTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterTemplate: 'string',
      customParams: DescribeCasterConfigResponseBodyTranscodeConfigCustomParams,
      liveTemplateIds: DescribeCasterConfigResponseBodyTranscodeConfigLiveTemplateIds,
    };
  }

  validate() {
    if(this.customParams && typeof (this.customParams as any).validate === 'function') {
      (this.customParams as any).validate();
    }
    if(this.liveTemplateIds && typeof (this.liveTemplateIds as any).validate === 'function') {
      (this.liveTemplateIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterConfigResponseBody extends $dara.Model {
  audioMixerMode?: string;
  /**
   * @remarks
   * The automatic standby video switching configuration. `eofThres`: specifies the duration of stream interruption before automatically switching to the standby video. Unit: seconds.
   * 
   * @example
   * {"eofThres":3}
   */
  autoSwitchUrgentConfig?: string;
  /**
   * @remarks
   * Indicates whether automatic switchover to the standby video upon stream interruption is enabled.
   * - **true**: Enabled.
   * - **false**: Shutdown.
   * 
   * @example
   * true
   */
  autoSwitchUrgentOn?: string;
  /**
   * @remarks
   * The user callback URL.
   * 
   * @example
   * http://learn.aliyundoc.com/callBackLive
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The production studio ID.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The production studio name.
   * 
   * @example
   * coco-caster10
   */
  casterName?: string;
  /**
   * @remarks
   * Indicates whether Channel is enabled. Valid values:
   *          
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  channelEnable?: number;
  /**
   * @remarks
   * The stream delay. Unit: seconds. 
   *          
   * - **0**: Stream delay is disabled.
   * - Greater than **0**: Stream delay is enabled.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The playlist effective flag. Valid values:
   *          
   * - **0**: Not effective.
   * - **1**: Effective.
   * 
   * @example
   * 0
   */
  programEffect?: number;
  /**
   * @remarks
   * The playlist name.
   * 
   * @example
   * program_name
   */
  programName?: string;
  /**
   * @remarks
   * The recording configuration. If this parameter is empty, the recording feature is not enabled.
   */
  recordConfig?: DescribeCasterConfigResponseBodyRecordConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-8833e1b64597
   */
  requestId?: string;
  /**
   * @remarks
   * The custom side output URL of the production studio.
   * 
   * @example
   * rtmp://sophon-developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  sideOutputUrl?: string;
  /**
   * @remarks
   * The list of custom side output URLs of the production studio.
   * 
   * @example
   * ["rtmp://domain/app1/stream1","rtmp://domain/app2/stream2"]
   */
  sideOutputUrlList?: string;
  syncGroupsConfig?: DescribeCasterConfigResponseBodySyncGroupsConfig;
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcodeConfig?: DescribeCasterConfigResponseBodyTranscodeConfig;
  /**
   * @remarks
   * The media library asset ID of the standby image.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  urgentImageId?: string;
  /**
   * @remarks
   * The URL of the standby image.
   * 
   * @example
   * http://learn.aliyundoc.com/AppName/image.jpg
   */
  urgentImageUrl?: string;
  /**
   * @remarks
   * The URL of the standby live stream.
   * 
   * @example
   * rtmp://demo.aliyundoc.com
   */
  urgentLiveStreamUrl?: string;
  /**
   * @remarks
   * The media library asset ID of the standby video.
   * 
   * @example
   * 98646538-bcf9-4aef-bd4a-e6bb76588****
   */
  urgentMaterialId?: string;
  static names(): { [key: string]: string } {
    return {
      audioMixerMode: 'AudioMixerMode',
      autoSwitchUrgentConfig: 'AutoSwitchUrgentConfig',
      autoSwitchUrgentOn: 'AutoSwitchUrgentOn',
      callbackUrl: 'CallbackUrl',
      casterId: 'CasterId',
      casterName: 'CasterName',
      channelEnable: 'ChannelEnable',
      delay: 'Delay',
      domainName: 'DomainName',
      programEffect: 'ProgramEffect',
      programName: 'ProgramName',
      recordConfig: 'RecordConfig',
      requestId: 'RequestId',
      sideOutputUrl: 'SideOutputUrl',
      sideOutputUrlList: 'SideOutputUrlList',
      syncGroupsConfig: 'SyncGroupsConfig',
      transcodeConfig: 'TranscodeConfig',
      urgentImageId: 'UrgentImageId',
      urgentImageUrl: 'UrgentImageUrl',
      urgentLiveStreamUrl: 'UrgentLiveStreamUrl',
      urgentMaterialId: 'UrgentMaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMixerMode: 'string',
      autoSwitchUrgentConfig: 'string',
      autoSwitchUrgentOn: 'string',
      callbackUrl: 'string',
      casterId: 'string',
      casterName: 'string',
      channelEnable: 'number',
      delay: 'number',
      domainName: 'string',
      programEffect: 'number',
      programName: 'string',
      recordConfig: DescribeCasterConfigResponseBodyRecordConfig,
      requestId: 'string',
      sideOutputUrl: 'string',
      sideOutputUrlList: 'string',
      syncGroupsConfig: DescribeCasterConfigResponseBodySyncGroupsConfig,
      transcodeConfig: DescribeCasterConfigResponseBodyTranscodeConfig,
      urgentImageId: 'string',
      urgentImageUrl: 'string',
      urgentLiveStreamUrl: 'string',
      urgentMaterialId: 'string',
    };
  }

  validate() {
    if(this.recordConfig && typeof (this.recordConfig as any).validate === 'function') {
      (this.recordConfig as any).validate();
    }
    if(this.syncGroupsConfig && typeof (this.syncGroupsConfig as any).validate === 'function') {
      (this.syncGroupsConfig as any).validate();
    }
    if(this.transcodeConfig && typeof (this.transcodeConfig as any).validate === 'function') {
      (this.transcodeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

