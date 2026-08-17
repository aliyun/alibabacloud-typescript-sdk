// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyJobListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the job tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the job tag.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * Additional information about the application.
   * 
   * @example
   * {\\"xxx\\": \\"xxxxx\\"}
   */
  appExtraInfo?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Alphafold3
   */
  appName?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2024-01-25 12:29:21
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job ended.
   * 
   * @example
   * 2024-01-25 12:35:23
   */
  endTime?: string;
  /**
   * @remarks
   * The number of running nodes.
   * 
   * @example
   * 1
   */
  executorCount?: number;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * job-xxx
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The UID of the user who created the job.
   * 
   * @example
   * 129**********
   */
  ownerUid?: string;
  /**
   * @remarks
   * The time when the job started.
   * 
   * @example
   * 2024-01-25 12:29:23
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Possible values:
   * 
   * - Pending: The job is in the queue.
   * 
   * - Initing: The job is initializing.
   * 
   * - Succeeded: The job was successful.
   * 
   * - Failed: The job failed.
   * 
   * - Running: The job is running.
   * 
   * - Exception: A scheduling exception occurred.
   * 
   * - Retrying: The job is being retried.
   * 
   * - Expired: The job timed out.
   * 
   * - Suspended: The job is in hibernation.
   * 
   * - Restarting: The job is restarting.
   * 
   * - Deleted: The job is deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of job tags.
   */
  tags?: ListJobsResponseBodyJobListTags[];
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 1
   */
  taskCount?: number;
  /**
   * @remarks
   * Indicates whether the job is a long-running job.
   * 
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      appExtraInfo: 'AppExtraInfo',
      appName: 'AppName',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorCount: 'ExecutorCount',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      ownerUid: 'OwnerUid',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskCount: 'TaskCount',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appExtraInfo: 'string',
      appName: 'string',
      createTime: 'string',
      endTime: 'string',
      executorCount: 'number',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      ownerUid: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyJobListTags },
      taskCount: 'number',
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobList?: ListJobsResponseBodyJobList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the filter conditions.
   * This parameter is optional and may not be returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListJobsResponseBodyJobList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

