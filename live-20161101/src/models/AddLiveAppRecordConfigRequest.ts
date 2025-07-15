// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAppRecordConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The recording cycle. Unit: seconds. If you do not specify this parameter, the default value 6 hours is used.
   * 
   * > 
   * 
   * *   If a live stream is interrupted during a recording cycle but is resumed within the interruption duration threshold, the stream is recorded in the same recording before and after the interruption.
   * 
   * *   If a live stream is interrupted for longer than the interruption duration threshold, a new recording is generated.
   * 
   * @example
   * 1
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The recording format. Supported formats include M3U8, FLV, MP4, and CMAF. Valid values:
   * 
   * >  You need to specify at lease one of the RecordFormat and TranscodeRecordFormat parameters. If you set this parameter to m3u8 or cmaf, you must also specify the RecordFormat.N.SliceOssObjectPrefix and RecordFormat.N.SliceDuration parameters.
   * 
   * *   m3u8
   * *   flv
   * *   mp4
   * *   cmaf
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The naming format of a recording to store in OSS.
   * 
   * *   The name must be less than 256 bytes in length and can contain the {AppName}, {StreamName}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime} variables.
   * *   The name must contain the {StartTime} and {EndTime} variables or the {EscapedStartTime} and {EscapedEndTime} variables.
   * 
   * @example
   * record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of a single segment. Unit: seconds.
   * 
   * >  This parameter takes effect only if you set the RecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * If you do not specify this parameter, the default value 30 seconds is used. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The naming format of a segment.
   * 
   * >  This parameter is required only if you set the RecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * *   By default, the duration of a segment is 30 seconds. The segment name must be less than 256 bytes in length and can contain the {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence} variables.
   * *   The segment name must contain the {UnixTimestamp} and {Sequence} variables.
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
   * The transcoded stream recording cycle. Unit: seconds. If you do not specify this parameter, the default value 6 hours is used.
   * 
   * @example
   * 21600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The transcoded stream recording format. Supported formats include M3U8, FLV, MP4, and CMAF. Valid values:
   * 
   * >  If you set this parameter to m3u8 or cmaf, you must also specify the TranscodeRecordFormat.N.SliceOssObjectPrefix and TranscodeRecordFormat.N.SliceDuration parameters.
   * 
   * *   m3u8
   * *   flv
   * *   mp4
   * *   cmaf
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The naming format of a transcoded stream recording to store in OSS.
   * 
   * *   The name must be less than 256 bytes in length and can contain the {AppName}, {StreamName}, {Sequence}, {StartTime}, {EndTime}, {EscapedStartTime}, and {EscapedEndTime} variables.
   * *   The name must contain the {StartTime} and {EndTime} variables or the {EscapedStartTime} and {EscapedEndTime} variables.
   * 
   * @example
   * record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of a single segment in a transcoded stream recording. Unit: seconds.
   * 
   * >  This parameter takes effect only if you set the TranscodeRecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * If you do not specify this parameter, the default value 30 seconds is used. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The naming format of a segment in a transcoded stream recording.
   * 
   * >  This parameter is required only if you set the TranscodeRecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * *   By default, the duration of a segment is 30 seconds. The segment name must be less than 256 bytes in length and can contain the {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence} variables.
   * *   The segment name must contain the {UnixTimestamp} and {Sequence} variables.
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
   * The name of the application to which the live stream belongs. The value of this parameter must be the same as the application name in the ingest URL. Otherwise, the configuration does not take effect. If you want to match all applications, specify an asterisk (\\*) as the value.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * Duration for stream concatenation. If the live streaming interruption exceeds the set concatenation duration, a new file will be generated. The concatenation duration can be set between 15 to 21600 seconds.
   * 
   * @example
   * 180
   */
  delayTime?: number;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Recording end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * > The difference between EndTime and StartTime should not exceed 7 days; if it does, it will be calculated as 7 days. This is only valid for stream-level recording (when StreamName is not empty).
   * 
   * @example
   * 2018-04-16T09:57:21Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable on-demand recording. Valid values:
   * 
   * *   **0**: disables on-demand recording.
   * *   **1**: enables on-demand recording by using the HTTP callback method.
   * *   **2**: enables on-demand recording by parsing the stream ingest parameters.
   * *   **7**: By default, ApsaraVideo Live does not automatically record live streams. You can call the [RealTimeRecordCommand](https://help.aliyun.com/document_detail/2847882.html) operation to manually start or stop recording.
   * 
   * >  If you set the OnDemand parameter to **1**, you need to call the [AddLiveRecordNotifyConfig](https://help.aliyun.com/document_detail/2847891.html) operation to configure the OnDemandUrl parameter. Otherwise, ApsaraVideo Live does not perform on-demand recording.
   * 
   * @example
   * 1
   */
  onDemand?: number;
  /**
   * @remarks
   * The name of the OSS bucket where live streaming recording files are stored. To store recorded files in OSS, you need to create an OSS bucket in advance. For creation method, please refer to [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
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
   * To store live stream recordings in OSS, you need to create an OSS bucket in advance. For more information, see Configure OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * learn.developer.aliyundoc.com
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
   * Start time of the recording. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * > The set time must be within 7 days of the actual streaming start time, and is only valid for stream-level recording (when StreamName is not empty).
   * 
   * @example
   * 2018-04-10T09:57:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * Stream broadcast name.
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
   * Transcoding stream recording template group.
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

