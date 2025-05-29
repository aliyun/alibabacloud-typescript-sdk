// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  name?: string;
  /**
   * @example
   * bucketname
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  /**
   * @example
   * [{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]
   */
  transConfigsJSON?: string;
  /**
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

