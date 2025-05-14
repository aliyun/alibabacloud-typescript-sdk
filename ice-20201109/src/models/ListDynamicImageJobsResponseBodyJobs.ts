// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDynamicImageJobsResponseBodyJobsInput } from "./ListDynamicImageJobsResponseBodyJobsInput";
import { ListDynamicImageJobsResponseBodyJobsOutput } from "./ListDynamicImageJobsResponseBodyJobsOutput";


export class ListDynamicImageJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  input?: ListDynamicImageJobsResponseBodyJobsInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2022-07-12T16:30:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: ListDynamicImageJobsResponseBodyJobsOutput;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * *   **Success**: The job is successful.
   * *   **Fail**: The job failed.
   * *   **Init**: The job is submitted.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  templateId?: string;
  /**
   * @remarks
   * The request trigger source.
   * 
   * Valid values:
   * 
   * *   Console
   * *   Workflow
   * *   API
   * 
   * @example
   * API
   */
  triggerSource?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      input: ListDynamicImageJobsResponseBodyJobsInput,
      jobId: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: ListDynamicImageJobsResponseBodyJobsOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'string',
      triggerSource: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

