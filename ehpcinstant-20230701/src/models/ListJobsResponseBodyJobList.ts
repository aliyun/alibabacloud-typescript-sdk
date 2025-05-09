// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyJobListTags } from "./ListJobsResponseBodyJobListTags";


export class ListJobsResponseBodyJobList extends $dara.Model {
  appExtraInfo?: string;
  appName?: string;
  /**
   * @example
   * 2024-01-25 12:29:21
   */
  createTime?: string;
  /**
   * @example
   * 2024-01-25 12:35:23
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executorCount?: number;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @example
   * job-xxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @example
   * 129**********
   */
  ownerUid?: string;
  /**
   * @example
   * 2024-01-25 12:29:23
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListJobsResponseBodyJobListTags[];
  /**
   * @example
   * 1
   */
  taskCount?: number;
  /**
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

