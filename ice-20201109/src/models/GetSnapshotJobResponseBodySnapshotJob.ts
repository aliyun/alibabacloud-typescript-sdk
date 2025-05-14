// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSnapshotJobResponseBodySnapshotJobInput } from "./GetSnapshotJobResponseBodySnapshotJobInput";
import { GetSnapshotJobResponseBodySnapshotJobOutput } from "./GetSnapshotJobResponseBodySnapshotJobOutput";


export class GetSnapshotJobResponseBodySnapshotJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the snapshots were captured in asynchronous mode. Default value: true.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * Error codes
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The number of snapshots.
   * 
   * @example
   * 8
   */
  count?: number;
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
  input?: GetSnapshotJobResponseBodySnapshotJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * The specified resource for "Pipeline" could not be found.
   */
  message?: string;
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
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetSnapshotJobResponseBodySnapshotJobOutput;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * Valid values:
   * 
   * *   Init: The job is submitted.
   * *   Success: The job is successful.
   * *   Fail: The job failed.
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
   * The snapshot template configuration.
   * 
   * @example
   * {"Type":"Normal","FrameType":"normal","Time":0,"Count":10}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****d80e4e4044975745c14b****
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
  /**
   * @remarks
   * Snapshot types
   * 
   * Valid values:
   * 
   * *   WebVtt
   * *   Sprite
   * *   Normal
   * 
   * @example
   * Sprite
   */
  type?: string;
  /**
   * @remarks
   * The user-defined parameters.
   * 
   * @example
   * {"test parameter": "test value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      count: 'Count',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      count: 'number',
      createTime: 'string',
      finishTime: 'string',
      input: GetSnapshotJobResponseBodySnapshotJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetSnapshotJobResponseBodySnapshotJobOutput,
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
      type: 'string',
      userData: 'string',
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

