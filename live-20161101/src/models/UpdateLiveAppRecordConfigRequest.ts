// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAppRecordConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The recording cycle. Unit: seconds If you do not specify this parameter, the default value 6 hours is used.
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
   * The recording format. Supported formats include M3U8, Flash Video (FLV), MP4, and Common Media Application Format (CMAF). Valid values:
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
   * The duration of a single segment. Unit: seconds
   * 
   * >  This parameter takes effect only if you set the RecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * If you do not specify this parameter, the default value 30 seconds is used. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      sliceDuration: 'SliceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      sliceDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAppRecordConfigRequestTranscodeRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The transcoded stream recording cycle. Unit: seconds If you do not specify this parameter, the default value 6 hours is used.
   * 
   * @example
   * 21600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The format of the transcoded stream recording. Supported formats include M3U8, FLV, MP4, and CMAF. Valid values:
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
   * The duration of a single segment in the transcoded stream recording. Unit: seconds.
   * 
   * >  This parameter takes effect only if you set the TranscodeRecordFormat.N.Format parameter to m3u8 or cmaf.
   * 
   * If you do not specify this parameter, the default value 30 seconds is used. Valid values: 5 to 30.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      sliceDuration: 'SliceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      sliceDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLiveAppRecordConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The interruption duration for merge. If the stream interruption duration exceeds the specified duration, a new recording is generated. The value of this parameter ranges from 15 to 21600 seconds.
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
   * The recording end time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  The time range that is specified by the EndTime and StartTime parameters must be less than or equal to seven days. If the value exceeds seven days, ApsaraVideo Live considers seven days as the time range. This parameter takes effect only for the live stream specified by the StreamName parameter. If the StreamName parameter is not specified, this parameter does not take effect.
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
   * The endpoint of the Object Storage Service (OSS) bucket.
   * 
   * To store live stream recordings in OSS, you need to create an OSS bucket in advance. For more information, see [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
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
  recordFormat?: UpdateLiveAppRecordConfigRequestRecordFormat[];
  securityToken?: string;
  /**
   * @remarks
   * The recording start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  The start time must be within seven days after the stream ingest starts. This parameter takes effect only for the live stream specified by the StreamName parameter. If the StreamName parameter is not specified, this parameter does not take effect.
   * 
   * @example
   * 2018-04-10T09:57:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The transcoded stream recording details.
   */
  transcodeRecordFormat?: UpdateLiveAppRecordConfigRequestTranscodeRecordFormat[];
  /**
   * @remarks
   * The transcoding template group details.
   */
  transcodeTemplates?: string[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      delayTime: 'DelayTime',
      domainName: 'DomainName',
      endTime: 'EndTime',
      onDemand: 'OnDemand',
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
      ossEndpoint: 'string',
      ownerId: 'number',
      recordFormat: { 'type': 'array', 'itemType': UpdateLiveAppRecordConfigRequestRecordFormat },
      securityToken: 'string',
      startTime: 'string',
      streamName: 'string',
      transcodeRecordFormat: { 'type': 'array', 'itemType': UpdateLiveAppRecordConfigRequestTranscodeRecordFormat },
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

