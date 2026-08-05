// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveRecordVodConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic composition. Valid values:
   * 
   * - `ON`: Enables automatic composition.
   * 
   * - `OFF`: Disables automatic composition.
   * 
   * @example
   * ON
   */
  autoCompose?: string;
  /**
   * @remarks
   * The recording storage format.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The video processing method. Valid values:
   * 
   * - `transcode`: Processes the video by using a transcoding template group.
   * 
   * - `workflow`: Processes the video by using a workflow.
   * 
   * @example
   * transcode
   */
  processMethod?: string;
  /**
   * @remarks
   * The ID of the transcoding template group or workflow.
   * 
   * > ## The ID must match the video processing method specified in ProcessMethod. For example, if ProcessMethod is set to transcode, you must use a transcoding template group ID.
   * 
   * @example
   * e2d796d3bb5fd8049d32bff62f94****
   */
  processTemplateId?: string;
  /**
   * @remarks
   * The duration of each segment, in seconds.
   * >Notice: This parameter applies only to the `m3u8` format.
   * The default value is 30. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * A tag for video classification.
   * 
   * @example
   * sports
   */
  tags?: string;
  /**
   * @remarks
   * The video source to process. Valid values:
   * 
   * - `origin` (default): Processes the source video.
   * 
   * - `compose`: Processes the composed video.
   * 
   * To process both the source and composed videos, separate the values with a comma. For example, `origin,compose`.
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

export class UpdateLiveRecordVodConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. You can view the `AppName` on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  appName?: string;
  /**
   * @remarks
   * >Notice: This parameter is ignored if the `RecordFormat` parameter is specified.
   * Specifies whether to enable automatic composition. Valid values:
   * 
   * - **ON**: Enables automatic composition. If you set this value to ON, you must also specify the `ComposeVodTranscodeGroupId` parameter.
   * 
   * @example
   * OFF
   */
  autoCompose?: string;
  /**
   * @remarks
   * >Notice: This parameter is ignored if the `RecordFormat` parameter is specified.
   * The ID of the ApsaraVideo for VOD transcoding template group used to transcode the video after automatic composition.
   * 
   * > You can get the ID by calling the [Query Transcoding Configuration List](https://help.aliyun.com/document_detail/454928.html) operation.
   * 
   * @example
   * *****
   */
  composeVodTranscodeGroupId?: string;
  /**
   * @remarks
   * The duration of each cyclical recording file, in seconds. Default value: **3600**. Valid values: **300** to **21600**.
   * 
   * @example
   * 300
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The maximum duration of a stream interruption, in seconds. If a stream interruption exceeds this duration, the system generates a new file. Valid values: 15 to 21600.
   * 
   * @example
   * 180
   */
  delayTime?: number;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The on-demand recording mode. Valid values:
   * 
   * - **0** (default): Disables on-demand recording.
   * 
   * - **1**: Enables on-demand recording triggered by an HTTP callback.
   * 
   * - **2**: Triggers recording by parsing push streaming parameters.
   * 
   * - **7**: Manual recording. Call the [RealTimeRecordCommand](https://help.aliyun.com/document_detail/2847882.html) operation to start or stop recording.
   * 
   * @example
   * 0
   */
  onDemand?: number;
  ownerId?: number;
  /**
   * @remarks
   * A list of parameters for each recording format.
   */
  recordFormat?: UpdateLiveRecordVodConfigRequestRecordFormat[];
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
   * The stream name. You can view the `StreamName` on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * stream
   */
  streamName?: string;
  /**
   * @remarks
   * A list of transcoding templates.
   */
  transcodeTemplates?: string[];
  /**
   * @remarks
   * >Notice: This parameter is ignored if the `RecordFormat` parameter is specified. The ID of the ApsaraVideo for VOD transcoding template group.
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
      recordFormat: 'RecordFormat',
      regionId: 'RegionId',
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
      recordFormat: { 'type': 'array', 'itemType': UpdateLiveRecordVodConfigRequestRecordFormat },
      regionId: 'string',
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

