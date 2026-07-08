// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Callback URL to be invoked after template execution.  
   * 
   * > Note: Templates triggered on demand do not support callback parameters.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * Template description.
   * 
   * @example
   * 录制模板
   */
  description?: string;
  /**
   * @remarks
   * Storage file format. Multiple values are separated by commas. Valid values:
   * - mp4
   * - flv
   * - hls
   * > The Qingdao ingest endpoint does not support recording in FLV or MP4 formats.
   * 
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @remarks
   * Storage path for FLV files. For the format, see the description for Mp4.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @remarks
   * Storage path for HLS m3u8 files. For the format, see the description for Mp4.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @remarks
   * Storage path for HLS .ts files.
   * - Variables can be used in the path. Supported variables include {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * - The variables {UnixTimestamp} and {Sequence} must both be included.
   * 
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @remarks
   * Operation epoch, in seconds.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * Storage path for on-demand JPG screenshots.
   * - Only JPG images are currently supported.
   * - Variables can be used in the path. Supported variables include {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * - Either {UnixTimestamp} or {Sequence} must be included.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @remarks
   * Storage path for JPG files used in overwrite snapshots.  
   * - Only JPG images are currently supported.  
   * - Supports variable substitution with {AppName} and {StreamName}.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @remarks
   * Storage path for JPG files used in sequential snapshots.  
   * - Only JPG images are currently supported.  
   * - Supports variable substitution with {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.  
   * - Either {UnixTimestamp} or {Sequence} is required.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @remarks
   * Storage path for MP4 files.  
   * - The path supports variable substitution. Available variables include {AppName}, {StreamName}, {Sequence}, {EscapedStartTime}, and {EscapedEndTime}.  
   * - {EscapedStartTime} and {EscapedEndTime} are required.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  /**
   * @remarks
   * Template Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 录制模板
   */
  name?: string;
  /**
   * @remarks
   * OSS bucket.
   * 
   * @example
   * bucketname
   */
  ossBucket?: string;
  /**
   * @remarks
   * Domain name of OSS.
   * 
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * OSS file prefix.
   * 
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region where the OSS bucket resides, that is, the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Time-shift retention period, in days.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * An array of TransConfig-type transcoding configurations, formatted as a JSON string.
   * 
   * @example
   * [{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]
   */
  transConfigsJSON?: string;
  /**
   * @remarks
   * Template trigger type. Default value: auto. Valid values:  
   * - auto (automatic)  
   * - ondemand (on-demand)
   * 
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @remarks
   * Template type. Valid values:  
   * - record (recording)  
   * - snapshot (snapshot)  
   * - transcode (transcoding)  
   * - timeshift (time shifting)
   * 
   * This parameter is required.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      region: 'Region',
      retention: 'Retention',
      transConfigsJSON: 'TransConfigsJSON',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      region: 'string',
      retention: 'number',
      transConfigsJSON: 'string',
      trigger: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

