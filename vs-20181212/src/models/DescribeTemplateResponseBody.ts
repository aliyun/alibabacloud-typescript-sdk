// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResponseBodyTransConfigs extends $dara.Model {
  /**
   * @remarks
   * Video frame rate, in fps.
   * 
   * @example
   * 25
   */
  fps?: number;
  /**
   * @remarks
   * Video GOP, in frames.
   * 
   * @example
   * 50
   */
  gop?: number;
  /**
   * @remarks
   * Video height.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Transcoding configuration ID.
   * 
   * @example
   * 399*****430-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Transcoding rule name. The name appears as a suffix in the transcoded stream. We recommend using recognizable suffixes such as sd or 200k. Only letters and digits are supported.
   * 
   * @example
   * sd
   */
  name?: string;
  /**
   * @remarks
   * Video bitrate, in kbps.
   * 
   * @example
   * 800
   */
  videoBitrate?: number;
  /**
   * @remarks
   * Video encoding.
   * 
   * @example
   * h264
   */
  videoCodec?: string;
  /**
   * @remarks
   * Video width.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      id: 'string',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
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

export class DescribeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Callback URL triggered after template execution.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * Template creation time.
   * 
   * @example
   * 2020-12-10T10:00:00Z
   */
  createdTime?: string;
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
   * Storage file format. Separate multiple values with commas. Valid values: mp4, flv, hls, jpg
   * 
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @remarks
   * Storage path for FLV files.
   * 
   * > Applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @remarks
   * Storage path for HLS .m3u8 files.
   * 
   * > Applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @remarks
   * Storage path for HLS .ts files.
   * 
   * > Applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Operation interval, in seconds.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * Storage path for JPG files used for on-demand snapshots.
   * 
   * > Applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @remarks
   * Storage path for JPG files used to overwrite snapshots.
   * 
   * > Applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @remarks
   * Storage path for JPG files used for sequential snapshots.
   * 
   * > Applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @remarks
   * Storage path for MP4 files.
   * 
   * > Applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  /**
   * @remarks
   * Template name.
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
   * my_oss_bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * OSS domain name.
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
  /**
   * @remarks
   * OSS region, which is the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Timeshift retention period, in days.
   * 
   * > Applies only to timeshift templates.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * List of transcoding configurations.
   * 
   * > Applies only to transcoding templates.
   */
  transConfigs?: DescribeTemplateResponseBodyTransConfigs[];
  /**
   * @remarks
   * Template trigger type. Valid values:
   * 
   * - auto
   * 
   * - ondemand
   * 
   * > Applies only to recording templates.
   * 
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @remarks
   * Template type. Valid values:
   * 
   * - record
   * 
   * - snapshot
   * 
   * - transcode
   * 
   * - timeshift
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      id: 'Id',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      region: 'Region',
      requestId: 'RequestId',
      retention: 'Retention',
      transConfigs: 'TransConfigs',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      id: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      region: 'string',
      requestId: 'string',
      retention: 'number',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplateResponseBodyTransConfigs },
      trigger: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transConfigs)) {
      $dara.Model.validateArray(this.transConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

