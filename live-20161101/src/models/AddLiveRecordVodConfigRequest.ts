// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveRecordVodConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically merge recording files for this format after the stream ends. Valid values:
   * 
   * - `ON`: Enables automatic merging.
   * 
   * - `OFF`: Disables automatic merging.
   * 
   * @example
   * ON
   */
  autoCompose?: string;
  /**
   * @remarks
   * The recording format. Valid values:
   * 
   * - `m3u8`
   * 
   * - `flv`
   * 
   * - `mp4`
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The video processing method. Valid values:
   * 
   * - `transcode`: Uses a transcoding template group to process the video.
   * 
   * - `workflow`: Uses a workflow to process the video.
   * 
   * @example
   * transcode
   */
  processMethod?: string;
  /**
   * @remarks
   * The ID of the transcoding template group or workflow.
   * 
   * > The specified ID must match the `ProcessMethod`. For example, provide a transcoding template group ID if `ProcessMethod` is `transcode`, or a workflow ID if `ProcessMethod` is `workflow`.
   * 
   * @example
   * e2d796d3bb5fd8049d32bff62f94****
   */
  processTemplateId?: string;
  /**
   * @remarks
   * The slice duration, in seconds.
   * 
   * This parameter applies only to the `m3u8` format.
   * 
   * The value must be between 5 and 30. The default is 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The tags for video categorization.
   * 
   * @example
   * sports
   */
  tags?: string;
  /**
   * @remarks
   * The video source to process. Valid values:
   * 
   * - `origin` (Default): The per-cycle recording files.
   * 
   * - `compose`: The single video file composed from all cycles.
   * 
   * To process both video sources, separate the values with a comma (,), for example, `origin,compose`.
   * 
   * @example
   * origin
   */
  videoProcess?: string;
  static names(): { [key: string]: string } {
    return {
      autoCompose: 'AutoCompose',
      format: 'Format',
      processMethod: 'ProcessMethod',
      processTemplateId: 'ProcessTemplateId',
      sliceDuration: 'SliceDuration',
      tags: 'Tags',
      videoProcess: 'VideoProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCompose: 'string',
      format: 'string',
      processMethod: 'string',
      processTemplateId: 'string',
      sliceDuration: 'number',
      tags: 'string',
      videoProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLiveRecordVodConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application that the stream belongs to. You can find this value on the [stream management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  appName?: string;
  /**
   * @remarks
   * >Notice: This parameter is ignored if `RecordFormat` is specified.
   * Specifies whether to automatically merge files from multiple recording cycles into a single file after a live stream ends.
   * 
   * A value of **ON** enables automatic merging. If enabled, you must also specify the `ComposeVodTranscodeGroupId` parameter. By default, automatic merging is disabled.
   * 
   * @example
   * ON
   */
  autoCompose?: string;
  /**
   * @remarks
   * >Notice: This parameter is ignored if `RecordFormat` is specified.
   * The ID of the ApsaraVideo VOD transcoding template group for transcoding the merged video. This parameter is required if `AutoCompose` is set to `ON`.
   * 
   * @example
   * *****
   */
  composeVodTranscodeGroupId?: string;
  /**
   * @remarks
   * The cycle duration, in seconds. The default value is **3600**. The value must be between **300** and **21600**.
   * 
   * @example
   * 300
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The stream interruption timeout, in seconds. If a stream interruption is shorter than this duration, recording continues in the same file. If the interruption is longer, a new file is created. Valid values: 15 to 21600.
   * 
   * @example
   * 180
   */
  delayTime?: number;
  /**
   * @remarks
   * The streaming domain.
   * 
   * > Ensure ApsaraVideo VOD is activated in the same region as the streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The recording trigger mode. Valid values:
   * 
   * - **0** (Default): Automatic recording.
   * 
   * - **1**: On-demand recording triggered by an HTTP callback.
   * 
   * - **2**: On-demand recording triggered by ingest parameters.
   * 
   * - **7**: Manual recording. Allows you to start and stop recording by calling the `RealTimeRecordCommand` operation.
   * 
   * @example
   * 0
   */
  onDemand?: number;
  ownerId?: number;
  /**
   * @remarks
   * The recorded content. Valid values:
   * 
   * - `raw` (Default): Records the source stream.
   * 
   * - `transcode`: Records transcoded streams.
   * 
   * To record both source and transcoded streams, provide a comma-separated list, for example, `raw,transcode`.
   * 
   * > If this parameter is set to include `transcode`, you must specify at least one template in the `TranscodeTemplates` parameter.
   * 
   * @example
   * raw
   */
  recordContent?: string;
  /**
   * @remarks
   * A list of format-specific recording configurations.
   */
  recordFormat?: AddLiveRecordVodConfigRequestRecordFormat[];
  /**
   * @remarks
   * The region ID. The example value `cn-shanghai` indicates the China (Shanghai) region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VOD application space. You can obtain this ID from the **VOD console** or by calling an [API operation to query application information](https://help.aliyun.com/document_detail/454873.html). This parameter applies only when the VOD application space feature is enabled.
   * 
   * @example
   * app-1000000
   */
  spaceId?: string;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * ****-tjptr2vatm.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The stream name. You can find this value on the [stream management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * stream
   */
  streamName?: string;
  /**
   * @remarks
   * A list of transcoding templates for recording transcoded streams.
   */
  transcodeTemplates?: string[];
  /**
   * @remarks
   * >Notice: This parameter is ignored if `RecordFormat` is specified.
   * The ID of the ApsaraVideo VOD transcoding template group for transcoding recorded videos.
   * 
   * @example
   * e2d796d3bb5fd8049d32bff62f94****
   */
  vodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      autoCompose: 'AutoCompose',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
      cycleDuration: 'CycleDuration',
      delayTime: 'DelayTime',
      domainName: 'DomainName',
      onDemand: 'OnDemand',
      ownerId: 'OwnerId',
      recordContent: 'RecordContent',
      recordFormat: 'RecordFormat',
      regionId: 'RegionId',
      spaceId: 'SpaceId',
      storageLocation: 'StorageLocation',
      streamName: 'StreamName',
      transcodeTemplates: 'TranscodeTemplates',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      autoCompose: 'string',
      composeVodTranscodeGroupId: 'string',
      cycleDuration: 'number',
      delayTime: 'number',
      domainName: 'string',
      onDemand: 'number',
      ownerId: 'number',
      recordContent: 'string',
      recordFormat: { 'type': 'array', 'itemType': AddLiveRecordVodConfigRequestRecordFormat },
      regionId: 'string',
      spaceId: 'string',
      storageLocation: 'string',
      streamName: 'string',
      transcodeTemplates: { 'type': 'array', 'itemType': 'string' },
      vodTranscodeGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    if(Array.isArray(this.transcodeTemplates)) {
      $dara.Model.validateArray(this.transcodeTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

