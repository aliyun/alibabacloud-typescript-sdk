// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSmartJobsResponseBodySmartJobListInputConfig } from "./ListSmartJobsResponseBodySmartJobListInputConfig";
import { ListSmartJobsResponseBodySmartJobListOutputConfig } from "./ListSmartJobsResponseBodySmartJobListOutputConfig";


export class ListSmartJobsResponseBodySmartJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @remarks
   * The editing configurations.
   * 
   * @example
   * {"AudioConfig":{},"InputConfig":""}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputConfig?: ListSmartJobsResponseBodySmartJobListInputConfig;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished: The job is complete.
   * *   Failed: The job failed.
   * *   Executing: The job is in progress.
   * *   Created: The job is created.
   * 
   * @example
   * Finished
   */
  jobState?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   ASR: ASR job.
   * *   DynamicChart: dynamic chart job.
   * *   TextToSpeech: intelligent audio production job.
   * 
   * @example
   * ASR
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations.
   */
  outputConfig?: ListSmartJobsResponseBodySmartJobListOutputConfig;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"user":"data"}
   */
  userData?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1084506228******
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      jobId: 'JobId',
      jobState: 'JobState',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      editingConfig: 'string',
      inputConfig: ListSmartJobsResponseBodySmartJobListInputConfig,
      jobId: 'string',
      jobState: 'string',
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: ListSmartJobsResponseBodySmartJobListOutputConfig,
      title: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

