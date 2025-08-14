// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The time when the file was created in UTC.
   * 
   * @example
   * 2016-05-27T09:40:56Z
   */
  createTime?: string;
  /**
   * @remarks
   * The recording length. Unit: seconds.
   * 
   * @example
   * 100.0
   */
  duration?: number;
  /**
   * @remarks
   * The end of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T07:36:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The format of the recording file.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 640
   */
  height?: number;
  /**
   * @remarks
   * The ID of the recording job.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the recording job.
   * 
   * @example
   * LiveRecordJob***
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the index file.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f****
   */
  recordId?: string;
  /**
   * @remarks
   * The storage information about the recording file.
   * 
   * @example
   * { "Type": "oss", "Endpoint":"oss-cn-shanghai.aliyuncs.com", "Bucket": "test-bucket" }
   */
  recordOutput?: string;
  /**
   * @remarks
   * The URL of the index file.
   */
  recordUrl?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T07:36:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * LiveStream***
   */
  streamUrl?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * @example
   * 480
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      duration: 'Duration',
      endTime: 'EndTime',
      format: 'Format',
      height: 'Height',
      jobId: 'JobId',
      jobName: 'JobName',
      recordId: 'RecordId',
      recordOutput: 'RecordOutput',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      streamUrl: 'StreamUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      duration: 'number',
      endTime: 'string',
      format: 'string',
      height: 'number',
      jobId: 'string',
      jobName: 'string',
      recordId: 'string',
      recordOutput: 'string',
      recordUrl: 'string',
      startTime: 'string',
      streamUrl: 'string',
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

export class ListLiveRecordFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of index files.
   */
  files?: ListLiveRecordFilesResponseBodyFiles[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE24625C-7C0F-4020-8448-****
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the index files by creation time.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of files that meet the specified conditions.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListLiveRecordFilesResponseBodyFiles },
      pageNo: 'number',
      pageSize: 'string',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

