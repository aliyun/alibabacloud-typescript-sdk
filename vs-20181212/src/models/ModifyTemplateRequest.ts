// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL that is used after the template is executed.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * 录制模板
   */
  description?: string;
  /**
   * @remarks
   * The file format for storage. Separate multiple values with commas. Valid values:
   * 
   * - mp4
   * 
   * - flv
   * 
   * - hls
   * 
   * > Recording in FLV and MP4 formats is not supported in the China (Qingdao) region.
   * 
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @remarks
   * The storage path for FLV files. For information about the format, see the description of the Mp4 parameter.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @remarks
   * The storage path for HLS M3U8 files. For information about the format, see the description of the Mp4 parameter.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @remarks
   * The storage path for HLS TS files.
   * 
   * - The path supports variables such as {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * 
   * - You must include the {UnixTimestamp} and {Sequence} variables.
   * 
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The operation interval, in seconds.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * The storage path for JPG files. This path is used for on-demand snapshots.
   * 
   * - Only JPG images are supported.
   * 
   * - The path supports variables such as {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * 
   * - You must include either {UnixTimestamp} or {Sequence}.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @remarks
   * The storage path for JPG files. This path is used to overwrite snapshots.
   * 
   * - Only JPG images are supported.
   * 
   * - The path supports variables such as {AppName} and {StreamName}.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @remarks
   * The storage path for JPG files. This path is used for sequence snapshots.
   * 
   * - Only JPG images are supported.
   * 
   * - The path supports variables such as {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}.
   * 
   * - You must include either {UnixTimestamp} or {Sequence}.
   * 
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @remarks
   * The storage path for MP4 files.
   * 
   * - The path supports variables such as {AppName}, {StreamName}, {Sequence}, {EscapedStartTime}, and {EscapedEndTime}.
   * 
   * - You must include {EscapedStartTime} and {EscapedEndTime}.
   * 
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  /**
   * @remarks
   * The name of the template.
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
   * bucketname
   */
  ossBucket?: string;
  /**
   * @remarks
   * The domain name of the OSS bucket.
   * 
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The prefix of the OSS file.
   * 
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Object Storage Service (OSS) bucket is located.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The retention period for time shifting, in days.
   * 
   * @example
   * 3
   */
  retention?: number;
  /**
   * @remarks
   * An array of transcoding configurations of the TransConfig type, in a JSON-formatted string.
   * 
   * @example
   * [{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]
   */
  transConfigsJSON?: string;
  /**
   * @remarks
   * The trigger type of the template. The default value is auto. Valid values:
   * 
   * - auto (automatic)
   * 
   * - ondemand (on-demand)
   * 
   * @example
   * auto
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
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
      ownerId: 'OwnerId',
      region: 'Region',
      retention: 'Retention',
      transConfigsJSON: 'TransConfigsJSON',
      trigger: 'Trigger',
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
      ownerId: 'number',
      region: 'string',
      retention: 'number',
      transConfigsJSON: 'string',
      trigger: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

