// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterConfigResponseBodyRecordConfigRecordFormatRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The length of the recording.
   * 
   * @example
   * 3600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The format of the recording.
   * 
   * @example
   * M3U8
   */
  format?: string;
  /**
   * @remarks
   * The name of the recording.
   * 
   * @example
   * record/{liveApp****}/{liveStream****}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The name of the segment.
   * 
   * @example
   * record/{liveApp****}/{liveStream****}/{UnixTimestamp****}
   */
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
   * On-demand recording. Values:
   * - 0: Off. 
   * - 1: Via HTTP callback. 
   * - 2: Parse streaming parameters for on-demand recording. 
   * - 7: Default to not record.
   * 
   * @example
   * 0
   */
  onDemand?: number;
  /**
   * @remarks
   * The OSS bucket for storage.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) endpoint.
   * 
   * @example
   * oss-cn-shanghai.aliyundoc.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The recording configuration.
   */
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
  /**
   * @remarks
   * The ID of the resource in the production studio.
   * 
   * @example
   * 28768383240243****
   */
  hostResourceId?: string;
  /**
   * @remarks
   * The cache mode of the Static Page Caching policy. Valid values:
   * 
   * *   0: standard mode
   * *   1: force mode
   * *   2: no cache
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   */
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
   * The video height. Unit: pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The video width. Unit: pixels.
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
   * The transcoding template of the production studio. Valid values:
   * 
   * *   **lp_ld**: low definition
   * *   **lp_sd**: standard definition
   * *   **lp_hd**: high definition
   * *   **lp_ud**: ultra high definition
   * *   **lp_ld_v**: low definition (portrait mode)
   * *   **lp_sd_v**: standard definition (portrait mode)
   * *   **lp_hd_v**: high definition (portrait mode)
   * *   **lp_ud_v**: ultra high definition (portrait mode)
   * 
   * @example
   * lp_hd
   */
  casterTemplate?: string;
  /**
   * @remarks
   * The custom settings.
   */
  customParams?: DescribeCasterConfigResponseBodyTranscodeConfigCustomParams;
  /**
   * @remarks
   * The transcoding setting for live streams.
   */
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
  /**
   * @remarks
   * The configuration for automatic switchover to the standby resource. The `eofThres` field specifies the duration after which the production studio automatically switches to the standby resource if a stream interruption occurs. Unit: seconds.
   * 
   * @example
   * {"eofThres":3}
   */
  autoSwitchUrgentConfig?: string;
  /**
   * @remarks
   * Indicates whether the production studio automatically switches to the standby resource in case of a stream interruption.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoSwitchUrgentOn?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://learn.aliyundoc.com/callBackLive
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The name of the production studio.
   * 
   * @example
   * coco-caster10
   */
  casterName?: string;
  /**
   * @remarks
   * Indicates whether channels are enabled for the production studio. Valid values:
   * 
   * *   **0**: Channels are disabled.
   * *   **1**: Channels are enabled.
   * 
   * @example
   * 1
   */
  channelEnable?: number;
  /**
   * @remarks
   * Indicates whether stream delay is enabled. Unit: seconds.
   * 
   * *   **0**: Stream delay is disabled.
   * *   **A value greater than 0**: Stream delay is enabled.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the carousel playback feature is enabled. Valid values:
   * 
   * *   **0**: The carousel playback feature is disabled.
   * *   **1**: The carousel playback feature is enabled.
   * 
   * @example
   * 0
   */
  programEffect?: number;
  /**
   * @remarks
   * The name of the playlist for carousel playback.
   * 
   * @example
   * program_name
   */
  programName?: string;
  /**
   * @remarks
   * The recording configuration. If this parameter is empty, the recording feature is disabled.
   */
  recordConfig?: DescribeCasterConfigResponseBodyRecordConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-8833e1b64597
   */
  requestId?: string;
  /**
   * @remarks
   * The custom stream redirect URL.
   * 
   * @example
   * rtmp://sophon-developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  sideOutputUrl?: string;
  /**
   * @remarks
   * The list of custom stream redirect URLs.
   * 
   * @example
   * rtmp://sophon-developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  sideOutputUrlList?: string;
  /**
   * @remarks
   * The storage configuration.
   */
  syncGroupsConfig?: DescribeCasterConfigResponseBodySyncGroupsConfig;
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcodeConfig?: DescribeCasterConfigResponseBodyTranscodeConfig;
  /**
   * @remarks
   * Prepared broadcast image media asset ID.
   * 
   * @example
   * a089175eb5f4427684fc0715159a****
   */
  urgentImageId?: string;
  /**
   * @remarks
   * URL of the standby image material.
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
   * The ID of the material that is used as the standby video from the media library.
   * 
   * @example
   * 98646538-bcf9-4aef-bd4a-e6bb76588****
   */
  urgentMaterialId?: string;
  static names(): { [key: string]: string } {
    return {
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

