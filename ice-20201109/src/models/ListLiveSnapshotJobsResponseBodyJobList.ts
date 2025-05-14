// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput } from "./ListLiveSnapshotJobsResponseBodyJobListSnapshotOutput";


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

