// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket of the output endpoint. If the storage type is set to oss, the OSS bucket is returned.
   * 
   * @example
   * testbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The output endpoint. If the storage type is set to oss, the Object Storage Service (OSS) domain name is returned.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage type. The value can only be oss.
   * 
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   */
  jobName?: string;
  /**
   * @remarks
   * The output information.
   */
  snapshotOutput?: ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput;
  /**
   * @remarks
   * The state of the job.
   * 
   * Valid values:
   * 
   * *   init: The job is not started.
   * *   paused: The job is paused.
   * *   started: The job is in progress.
   * 
   * @example
   * started
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287666****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  /**
   * @remarks
   * The interval between two adjacent snapshots. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobName: 'JobName',
      snapshotOutput: 'SnapshotOutput',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      jobName: 'string',
      snapshotOutput: ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput,
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  validate() {
    if(this.snapshotOutput && typeof (this.snapshotOutput as any).validate === 'function') {
      (this.snapshotOutput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobList?: ListLiveSnapshotJobsResponseBodyJobList[];
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
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the jobs by creation time.
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListLiveSnapshotJobsResponseBodyJobList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

