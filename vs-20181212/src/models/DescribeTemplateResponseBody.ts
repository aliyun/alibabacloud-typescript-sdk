// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResponseBodyTransConfigs extends $dara.Model {
  /**
   * @example
   * 25
   */
  fps?: number;
  /**
   * @example
   * 50
   */
  gop?: number;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 399*****430-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * sd
   */
  name?: string;
  /**
   * @example
   * 800
   */
  videoBitrate?: number;
  /**
   * @example
   * h264
   */
  videoCodec?: string;
  /**
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
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2020-12-10T10:00:00Z
   */
  createdTime?: string;
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
   * my_oss_bucket
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
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  transConfigs?: DescribeTemplateResponseBodyTransConfigs[];
  /**
   * @example
   * auto
   */
  trigger?: string;
  /**
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

