// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCasterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic standby switchover configuration.
   * `eofThres`: the duration of stream interruption after which the system automatically switches to the standby video, in seconds.
   * 
   * @example
   * {"eofThres":3}
   */
  autoSwitchUrgentConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic switchover to the standby video when the stream is interrupted.
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  autoSwitchUrgentOn?: boolean;
  /**
   * @remarks
   * The callback URL. To receive callback notifications, enter a valid receiving address that accepts the HTTP protocol. If this parameter is set to empty, callback notifications for the production studio are canceled by default.
   * > For more information about production studio callbacks, see [Cloud production studio callback information](https://help.aliyun.com/document_detail/213633.html).
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the ID.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The name of the production studio.
   * 
   * @example
   * liveCaster****
   */
  casterName?: string;
  /**
   * @remarks
   * Specifies whether to enable Channel. If Channel was previously enabled (ChannelEnable=1), you must explicitly pass ChannelEnable=1 in each call to maintain the channel status. Otherwise, the error InvalidCaster.ChannelDisableUnsupported is returned.
   *          
   * - **0** (default): disabled.
   * - **1**: enabled. 
   * 
   * > Channel is disabled by default and cannot be disabled after it is enabled. When Channel is disabled, resources are directly referenced by layouts. To enable Channel for the first time, the production studio must be stopped. Existing layouts are discarded. Resources must first be assigned to a Channel, and new layouts directly reference the Channel. Through Channel, you can adjust the playback progress and status of video sources. In this mode, if the video source, PVW, and PGM areas reference the same resource, the corresponding views remain synchronized.
   * 
   * @example
   * 1
   */
  channelEnable?: number;
  /**
   * @remarks
   * The stream delay, in seconds.
   * 
   * - **0** (default): disables stream delay.
   * - Greater than **0**: enables stream delay.
   * - **Empty**: clears the stream delay configuration by default.
   * > The maximum value is 300 seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * Complete the domain name configuration before starting the production studio. If this parameter is empty, the domain name configuration of the production studio is cleared by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether the program list takes effect. 
   * 
   * - **0**: does not take effect.
   * - **1**: takes effect.
   * 
   * @example
   * 1
   */
  programEffect?: number;
  /**
   * @remarks
   * The name of the program list. This parameter can be configured when the program list feature is used.
   * 
   * @example
   * program_name
   */
  programName?: string;
  /**
   * @remarks
   * The recording configuration in JSON format. The configuration elements are as follows:
   * 
   * - **endpoint**: the API endpoint of the Alibaba Cloud service.
   * - **ossBucket**: the name of the OSS bucket.
   * - **videoFormat**: the video file formats supported for export. Example: `[{\\"OssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\\",\\"Format\\":\\"m3u8\\",\\"CycleDuration\\":21600,\\"SliceOssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{UnixTimestamp}\\"},{\\"OssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\\",\\"Format\\":\\"flv\\",\\"CycleDuration\\":21600}]`.
   * - **interval**: the time interval, in milliseconds (ms).
   * 
   * >If this parameter is set to empty, the recording feature is not enabled. If this parameter is set to empty, the recording configuration is cleared by default.
   * 
   * @example
   * { "endpoint": "http://oss-cn-********.aliyuncs.com/api",  "ossBucket****": "liveBucket****", "VideoFormat":[{\\"OssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\\",\\"Format\\":\\"m3u8\\",\\"CycleDuration\\":21600,\\"SliceOssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{UnixTimestamp}\\"},{\\"OssObjectPrefix\\":\\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\\",\\"Format\\":\\"flv\\",\\"CycleDuration\\":21600}] "interval": 5 }
   */
  recordConfig?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ingest URL that corresponds to the custom bypass output address of the production studio. 
   * If this parameter is empty, the ingest URL that corresponds to the output address automatically generated by Alibaba Cloud is used by default.
   * > Currently, SideOutputUrl supports only the RTMP protocol for stream ingest.
   */
  sideOutputUrl?: string;
  /**
   * @remarks
   * The list of multi-destination relay streaming addresses. The addresses can be CDN ingest URLs from Alibaba Cloud or third-party providers. A maximum of 20 RTMP relay addresses can be added to a production studio.
   * 
   * 
   * > Specify multiple addresses in the array format: ["rtmp://domain/app1/stream1","rtmp://domain/app2/stream2"].
   * 
   * @example
   * rtmp://domain/app/stream?***
   */
  sideOutputUrlList?: string;
  /**
   * @remarks
   * The multi-view synchronization configuration that synchronizes multiple video sources.
   * Multi-view synchronization has two modes:
   * 
   * - mode: 0 (streamer mode. Multiple video sources are synchronized based on the specified mode.)
   * 
   * - mode: 1 (conference mode. There is no concept of a streamer video. All video sources are synchronized with each other.)
   * 
   * 
   * 
   * Streamer mode: hostResourceId: the streamer video source in streamer mode.
   * 
   * Conference mode: the hostResourceId field is not required. Only the resource IDs in resourceIds need to be provided.
   * 
   * @example
   * "[{\\"mode\\":0,\\"resourceIds\\":[\\"5a6c1c33-8424-46f6-813c-c152220a****\\",\\"4e6521dc-a40a-4077-b6bf-1fb12a76****\\"],\\"hostResourceId\\":\\"3aa2b39a-fd0e-4b8c-be73-b7af31c4****\\"}]"
   */
  syncGroupsConfig?: string;
  /**
   * @remarks
   * The transcoding configuration. 
   * 
   * A JSON-formatted string. Use upper camel case for internal fields of the struct. If this parameter is set to empty, the transcoding configuration is cleared by default. If the transcoding template is empty, an error is returned when the production studio starts.
   * 
   * @example
   * {"casterTemplate": "lp_ld"}
   */
  transcodeConfig?: string;
  /**
   * @remarks
   * The media asset ID of the standby image in the media library.
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
   * The media asset ID of the standby video in the media library. If this parameter is set to empty, the standby configuration is cleared by default.
   * 
   * @example
   * a2b8e671
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
      ownerId: 'OwnerId',
      programEffect: 'ProgramEffect',
      programName: 'ProgramName',
      recordConfig: 'RecordConfig',
      regionId: 'RegionId',
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
      autoSwitchUrgentOn: 'boolean',
      callbackUrl: 'string',
      casterId: 'string',
      casterName: 'string',
      channelEnable: 'number',
      delay: 'number',
      domainName: 'string',
      ownerId: 'number',
      programEffect: 'number',
      programName: 'string',
      recordConfig: 'string',
      regionId: 'string',
      sideOutputUrl: 'string',
      sideOutputUrlList: 'string',
      syncGroupsConfig: 'string',
      transcodeConfig: 'string',
      urgentImageId: 'string',
      urgentImageUrl: 'string',
      urgentLiveStreamUrl: 'string',
      urgentMaterialId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

