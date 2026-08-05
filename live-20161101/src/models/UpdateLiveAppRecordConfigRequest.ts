// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAppRecordConfigRequestRecordFormat extends $dara.Model {
  /**
   * @remarks
   * The duration of a single recording cycle in seconds. If not specified, the default value is 6 hours
   * 
   * > If a live stream is interrupted during a recording cycle but resumes normal streaming within the merge window, recording will continue in the same file. A recording file is generated only when a live stream is interrupted for longer than the merge window.
   * 
   * @example
   * 1
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The recording format. Valid values:
   * 
   * >Notice: 
   * 
   * If you choose m3u8 or cmaf, you must also set SliceOssObjectPrefix and SliceDuration. At least one of RecordFormat or TranscodeRecordFormat must be specified.
   * 
   * 
   * 
   * - m3u8
   * 
   * - flv
   * 
   * - mp4
   * 
   * - cmaf
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The duration of a single segment. Unit: seconds
   * 
   * > This parameter takes effect only if you set the RecordFormat.N.Format parameter to m3u8 or cmaf.
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
   * The transcoded stream recording cycle. Unit: seconds. If you do not specify this parameter, the default value 6 hours is used.
   * 
   * @example
   * 21600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The format of the transcoded stream recording. Valid values:
   * 
   * > If you choose m3u8 or cmaf, you must specify the TranscodeRecordFormat.N.SliceOssObjectPrefix and TranscodeRecordFormat.N.SliceDuration parameters.
   * 
   * - m3u8
   * 
   * - flv
   * 
   * - mp4
   * 
   * - cmaf
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The duration of a single segment for transcoded stream recording. Unit: seconds.
   * 
   * > This parameter takes effect only if you set the TranscodeRecordFormat.N.Format parameter to m3u8 or cmaf.
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
   * The AppName of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The window in seconds for merging fragmented recording after an interruption. If a stream disconnects and reconnects within this window, the recording will continue in the same file. Valid values: 15 to 21600.
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
   * The recording end time. Format: *yyyy-MM-dd*T*HH:mm:ss*Z (UTC time).
   * 
   * > This parameter is only effective for stream-level recordings. The interval between EndTime and StartTime cannot exceed 7 days.
   * 
   * @example
   * 2018-04-16T09:57:21Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies the recording mode. Valid values:
   * 
   * - **0**: disables on-demand recording.
   * 
   * - **1**: On-demand recording via HTTP callback.
   * 
   * - **2**: On-demand recording by parsing parameters in the ingest URL.
   * 
   * - **7**: Manual recording. You can call the [RealTimeRecordCommand](https://help.aliyun.com/document_detail/2847882.html) API to manually start or stop recording.
   * 
   * > If you set OnDemand to **1**, you need to call the [AddLiveRecordNotifyConfig](https://help.aliyun.com/document_detail/2847891.html) API to configure the OnDemandUrl parameter. Otherwise, ApsaraVideo Live does not perform on-demand recording.
   * 
   * @example
   * 1
   */
  onDemand?: number;
  /**
   * @remarks
   * The endpoint for OSS storage. You must create an OSS bucket before using this feature. See [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
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
   * The recording start time. Format: *yyyy-MM-dd*T*HH:mm:ss*Z (UTC time).
   * 
   * > This parameter is only effective for stream-level recordings (i.e., when `StreamName` is specified). The time must be within 7 days of the actual stream start time.
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
   * The transcoded stream recording configuration.
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

