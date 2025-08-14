// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * imsbucket1
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the storage service.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The type of the storage address.
   * 
   * Valid values:
   * 
   * *   vod
   * *   oss
   * 
   * @example
   * oss
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
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

export class ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput extends $dara.Model {
  /**
   * @remarks
   * The type of the live stream URL.
   * 
   * @example
   * rtmp
   */
  type?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://example-live.com/live/stream1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBodyLiveRecordJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T03:26:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the recording job.
   * 
   * @example
   * ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the recording job.
   */
  name?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://example.com/imsnotify
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The storage address of the recording.
   */
  recordOutput?: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput;
  /**
   * @remarks
   * The state of the recording job.
   * 
   * @example
   * paused
   */
  status?: string;
  /**
   * @remarks
   * The URL of the live stream.
   */
  streamInput?: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput;
  /**
   * @remarks
   * The ID of the recording template.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the recording template.
   * 
   * @example
   * test template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      notifyUrl: 'string',
      recordOutput: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput,
      status: 'string',
      streamInput: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput,
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.recordOutput && typeof (this.recordOutput as any).validate === 'function') {
      (this.recordOutput as any).validate();
    }
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of live stream recording jobs.
   */
  liveRecordJobs?: ListLiveRecordJobsResponseBodyLiveRecordJobs[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A27DFFA4-F272-5563-8363-CB0BC42740BA
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 180
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordJobs: 'LiveRecordJobs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordJobs: { 'type': 'array', 'itemType': ListLiveRecordJobsResponseBodyLiveRecordJobs },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveRecordJobs)) {
      $dara.Model.validateArray(this.liveRecordJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

