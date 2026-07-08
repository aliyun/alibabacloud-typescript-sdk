// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyTemplatesTransConfigs extends $dara.Model {
  /**
   * @remarks
   * Video frame rate in fps.
   * 
   * @example
   * 25
   */
  fps?: number;
  /**
   * @remarks
   * Video GOP in frames.
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
   * Transcoding rule name. This name becomes the suffix of the transcoded stream. Use a descriptive suffix such as sd or 200k. Only letters and numbers are allowed.
   * 
   * @example
   * sd
   */
  name?: string;
  /**
   * @remarks
   * Video bitrate in kbps.
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
  /**
   * @remarks
   * Transcoding configuration ID.
   * 
   * @example
   * 399788187729597430-cn-qingdao
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      width: 'number',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * Callback URL after template execution.
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
   * 2018-12-10T10:00:00Z
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
   * Storage file format. Separate multiple values with commas. Valid values: mp4, flv, hls, jpg.
   * 
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @remarks
   * FLV storage path.
   * 
   * > This applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @remarks
   * HLS storage path for M3U8 files.
   * 
   * > This applies only to recording templates.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @remarks
   * HLS storage path for TS files.
   * 
   * > This applies only to recording templates.
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
   * Operation interval in seconds.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * JPG storage path for on-demand snapshots.
   * 
   * > This applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @remarks
   * JPG storage path for overwrite snapshots.
   * 
   * > This applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @remarks
   * JPG storage path for sequential snapshots.
   * 
   * > This applies only to snapshot templates.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @remarks
   * MP4 storage path.
   * 
   * > This applies only to recording templates.
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
   * The OSS bucket.
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
   * my_prefix
   */
  ossFilePrefix?: string;
  /**
   * @remarks
   * OSS region, also known as service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Time-shifting retention period in days.
   * 
   * > This applies only to time-shifting templates.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * Transcoding configuration list.
   * 
   * > This applies only to transcoding templates.
   */
  transConfigs?: DescribeTemplatesResponseBodyTemplatesTransConfigs[];
  /**
   * @remarks
   * Template trigger type. Valid values:
   * 
   * - auto (automatic)
   * 
   * - ondemand (on demand)
   * 
   * > This applies only to recording templates.
   * 
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @remarks
   * Template type. Valid values:
   * 
   * - record (recording)
   * 
   * - snapshot (snapshot)
   * 
   * - transcode (transcoding)
   * 
   * - timeshift (time shifting)
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
      retention: 'number',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplatesTransConfigs },
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

export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F3F88C96-CA6E-573E-B8F7-5BE83A1A0BCF
   */
  requestId?: string;
  /**
   * @remarks
   * Template list.
   */
  templates?: DescribeTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * Total number of templates.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

