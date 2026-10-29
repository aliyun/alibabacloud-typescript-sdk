// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The end time of the storage record. The time is in the YYYY-MM-DDTHH:mm:ss format.
   * 
   * @example
   * 2021-11-23T18:33:48
   */
  endTime?: string;
  /**
   * @remarks
   * The format of the storage file. Valid values:
   * - mp4
   * - flv
   * - hls
   * - jpg
   * 
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The ID of the storage record.
   * > Only applicable to recording queries.
   * 
   * @example
   * 2be2a673-6033-4874-b6f2-f2bc0a1*****
   */
  id?: string;
  /**
   * @remarks
   * The OSS bucket of the storage file.
   * 
   * @example
   * my_oss_bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The OSS object of the storage file.
   * 
   * @example
   * record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  ossObject?: string;
  /**
   * @remarks
   * The start time of the storage record. The time is in the YYYY-MM-DDTHH:mm:ss format.
   * 
   * @example
   * 2021-11-23T18:19:32
   */
  startTime?: string;
  /**
   * @remarks
   * The stream ID.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 388*****204-cn-qingdao
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the storage record. Valid values:
   * - record: recording
   * - snapshot: snapshot
   * 
   * @example
   * record
   */
  type?: string;
  /**
   * @remarks
   * The URL of the storage file.
   * 
   * @example
   * http://my_oss_bucket.oss-cn-qingdao.aliyuncs.com/record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  url?: string;
  /**
   * @remarks
   * The width.
   * 
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

export class DescribeRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start time for querying the next record.
   * > Only applicable to snapshot queries. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2018-12-10T11:00:00Z
   */
  nextStartTime?: string;
  /**
   * @remarks
   * The total number of pages.
   * > Only applicable to recording queries.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * The page number.
   * > Only applicable to recording queries.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * > Only applicable to recording queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of storage records.
   */
  records?: DescribeRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of storage records.
   * > Only applicable to recording queries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextStartTime: 'NextStartTime',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStartTime: 'string',
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

