// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTemplatesResponseBodyTemplatesTransConfigs } from "./DescribeTemplatesResponseBodyTemplatesTransConfigs";


export class DescribeTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2018-12-10T10:00:00Z
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
   * my_prefix
   */
  ossFilePrefix?: string;
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
  transConfigs?: DescribeTemplatesResponseBodyTemplatesTransConfigs[];
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

