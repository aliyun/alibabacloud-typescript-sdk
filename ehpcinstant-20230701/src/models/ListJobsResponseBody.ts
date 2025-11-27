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
   * The additional information about the application.
   * 
   * @example
   * {\\"xxx\\": \\"xxxxx\\"}
   */
  appExtraInfo?: string;
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
   * The end time of the job.
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
   * The job name.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 129**********
   */
  ownerUid?: string;
  /**
   * @remarks
   * The start time of the job.
   * 
   * @example
   * 2024-01-25 12:29:23
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Pending
   * *   Initing
   * *   Succeed
   * *   Failed
   * *   Running
   * *   Exception
   * *   Retrying
   * *   Expired
   * *   Deleting
   * *   Deleted
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
   * Indicate whether the job is a long-running job.
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
   * The number of entries returned per page.
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
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned. This parameter is optional and is not returned by default.
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

