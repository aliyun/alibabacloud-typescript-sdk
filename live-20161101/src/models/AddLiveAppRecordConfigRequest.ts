// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAppRecordConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The recording length per epoch. Unit: seconds.
   * 
   * > - If this parameter is not specified, the default value varies by recording format: 6 hours for m3u8 and cmaf formats, and 1 hour for flv and mp4 formats.
   * > - If a live stream is disconnected within a recording epoch but resumes stream ingest within the stream discontinuity merging duration, recording continues in the same file. This is Normal behavior.
   * > - A recording file is generated only after the live stream is disconnected for longer than the stream discontinuity merging duration.
   * 
   * @example
   * 1
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The format. M3U8, FLV, MP4, and CMAF are supported. Valid values:
   * 
   * >Notice: At least one of RecordFormat and TranscodeRecordFormat must be set. If you select m3u8 or cmaf, you must also set the request parameters RecordFormat.N.SliceOssObjectPrefix and RecordFormat.N.SliceDuration.
   * 
   * 
   * - m3u8.
   * - flv.
   * - mp4.
   * - cmaf.
   * 
   * > Settings for RecordFormat and TranscodeRecordFormat: at least one must be specified.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the recording file stored in OSS.
   * 
   * - The file name must be less than 256 bytes and supports variable matching, including {AppName}, {StreamName}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime}.
   * - The value must contain {StartTime} or {EscapedStartTime} and {EndTime} or {EscapedEndTime}.
   * 
   * @example
   * record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The segment length of a single segment. Unit: seconds.
   * 
   * >Notice: This parameter takes effect only when RecordFormat.N.Format is set to m3u8 or cmaf.
   * 
   * 
   * If this parameter is not specified, the default value is 30 seconds. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The segment name.
   * 
   * >Notice: This parameter is required only when RecordFormat.N.Format is set to m3u8 or cmaf.
   * 
   * 
   * - The default segment length is 30 seconds. The value must be less than 256 bytes and supports variable matching, including {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * - The value must contain the {UnixTimestamp} and {Sequence} variables.
   * 
   * @example
   * record/{AppName}/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
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

export class AddLiveAppRecordConfigRequestTranscodeRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The recording length per epoch for transcoding stream recording. Unit: seconds.
   * > If this parameter is not specified, the default value varies by recording format: 6 hours for m3u8 and cmaf formats, and 1 hour for flv and mp4 formats.
   * 
   * @example
   * 21600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The transcoding stream recording format. M3U8, FLV, MP4, and CMAF are supported. Valid values:
   * >Notice: If you select m3u8 or cmaf, you must also set the request parameters TranscodeRecordFormat.N.SliceOssObjectPrefix and TranscodeRecordFormat.N.SliceDuration.
   * 
   * 
   * - m3u8.
   * - flv.
   * - mp4.
   * - cmaf.
   * 
   * > Settings: if you select m3u8 or cmaf format, the corresponding slice parameters must also be configured.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the transcoded stream recording file stored in OSS.
   * - The file name must be less than 256 bytes and supports variable matching, including {AppName}, {StreamName}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime}.
   * - The value must contain {StartTime} or {EscapedStartTime} and {EndTime} or {EscapedEndTime}.
   * 
   * @example
   * record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The segment length of a single segment for transcoding stream recording. Unit: seconds.
   * 
   * >Notice: This parameter takes effect only when TranscodeRecordFormat.N.Format (transcoding stream recording format) is set to m3u8 or cmaf.
   * 
   * 
   * If this parameter is not specified, the default value is 30 seconds. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The segment name for transcoded stream recording.
   * 
   * >Notice: This parameter is required only when TranscodeRecordFormat.N.Format is set to m3u8 or cmaf.
   * 
   * 
   * - The default segment length is 30 seconds. The value must be less than 256 bytes and supports variable matching, including {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * - The value must contain the {UnixTimestamp} and {Sequence} variables.
   * 
   * @example
   * record/{AppName}/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
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

export class AddLiveAppRecordConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. The template takes effect only when the AppName value matches the AppName in the ingest URL. To match all application names, set this parameter to an asterisk (*).
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The stream discontinuity merging duration. If the live stream is disconnected for longer than the specified merging duration, a new file is generated. Valid values: 15 to 21600. Unit: seconds.
   * 
   * @example
   * 180
   */
  delayTime?: number;
  /**
   * @remarks
   * The streaming domain of the streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The recording end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * > The difference between EndTime and StartTime cannot exceed 7 days. If it exceeds 7 days, the value is calculated as 7 days. This parameter is valid only for stream-level recording (when StreamName is not empty).
   * 
   * @example
   * 2018-04-16T09:57:21Z
   */
  endTime?: string;
  /**
   * @remarks
   * The on-demand or manual recording mode. Valid values:
   * 
   * - **0** (default): disabled. Automatic recording is used.
   * - **1**: on-demand recording through HTTP callback. You must first configure OnDemandUrl by calling the [AddLiveRecordNotifyConfig](https://help.aliyun.com/document_detail/2847891.html) operation. Otherwise, recording is not performed by default.
   * - **2**: on-demand recording by parsing stream ingest parameters.
   * - **7**: manual recording. Recording is not performed by default. You can call the [RealTimeRecordCommand](https://help.aliyun.com/document_detail/2847882.html) operation to manually start or stop recording.
   * 
   * @example
   * 1
   */
  onDemand?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * To store live recordings in OSS, create an OSS bucket in advance. For more information, see [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
   * 
   * This parameter is required.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * To store live recordings in OSS, create an OSS bucket in advance. For more information, see [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recording details.
   */
  recordFormat?: AddLiveAppRecordConfigRequestRecordFormat[];
  securityToken?: string;
  /**
   * @remarks
   * The recording start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * > The specified time must be within 7 days of the actual stream ingest start time. This parameter is valid only for stream-level recording (when StreamName is not empty).
   * 
   * @example
   * 2018-04-10T09:57:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. The template takes effect only when the StreamName value matches the StreamName in the ingest URL. To match all stream names under the specified AppName, set this parameter to an asterisk (*).
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The transcoded stream recording details.
   */
  transcodeRecordFormat?: AddLiveAppRecordConfigRequestTranscodeRecordFormat[];
  /**
   * @remarks
   * The transcoding template group for transcoded stream recording.
   * 
   * @example
   * sd
   */
  transcodeTemplates?: string[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      delayTime: 'DelayTime',
      domainName: 'DomainName',
      endTime: 'EndTime',
      onDemand: 'OnDemand',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ownerId: 'OwnerId',
      recordFormat: 'RecordFormat',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      streamName: 'StreamName',
      transcodeRecordFormat: 'TranscodeRecordFormat',
      transcodeTemplates: 'TranscodeTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      delayTime: 'number',
      domainName: 'string',
      endTime: 'string',
      onDemand: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ownerId: 'number',
      recordFormat: { 'type': 'array', 'itemType': AddLiveAppRecordConfigRequestRecordFormat },
      securityToken: 'string',
      startTime: 'string',
      streamName: 'string',
      transcodeRecordFormat: { 'type': 'array', 'itemType': AddLiveAppRecordConfigRequestTranscodeRecordFormat },
      transcodeTemplates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    if(Array.isArray(this.transcodeRecordFormat)) {
      $dara.Model.validateArray(this.transcodeRecordFormat);
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

