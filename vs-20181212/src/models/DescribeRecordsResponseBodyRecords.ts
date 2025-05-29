// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 2021-11-23T18:33:48
   */
  endTime?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 2be2a673-6033-4874-b6f2-f2bc0a1*****
   */
  id?: string;
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
   * record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  ossObject?: string;
  /**
   * @example
   * 2021-11-23T18:19:32
   */
  startTime?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @example
   * 388*****204-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  type?: string;
  /**
   * @example
   * http://my_oss_bucket.oss-cn-qingdao.aliyuncs.com/record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  url?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileFormat: 'FileFormat',
      height: 'Height',
      id: 'Id',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      streamId: 'StreamId',
      templateId: 'TemplateId',
      type: 'Type',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fileFormat: 'string',
      height: 'number',
      id: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      startTime: 'string',
      streamId: 'string',
      templateId: 'string',
      type: 'string',
      url: 'string',
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

