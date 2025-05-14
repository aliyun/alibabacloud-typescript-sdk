// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDynamicImageJobResponseBodyDynamicImageJobInput } from "./GetDynamicImageJobResponseBodyDynamicImageJobInput";
import { GetDynamicImageJobResponseBodyDynamicImageJobOutput } from "./GetDynamicImageJobResponseBodyDynamicImageJobOutput";


export class GetDynamicImageJobResponseBodyDynamicImageJob extends $dara.Model {
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
  input?: GetDynamicImageJobResponseBodyDynamicImageJobInput;
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
   * The specified resource for "CustomTemplate" could not be found.
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
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetDynamicImageJobResponseBodyDynamicImageJobOutput;
  /**
   * @remarks
   * The URL of the output animated image.
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/output.gif
   */
  outputUrl?: string;
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
   * The animation template configuration.
   * 
   * @example
   * {"Format":"gif","Fps":5,"Height":1080,"Width":1920}
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
   * The user-defined data.
   * 
   * @example
   * {"sampleParam": "sampleValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      input: GetDynamicImageJobResponseBodyDynamicImageJobInput,
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetDynamicImageJobResponseBodyDynamicImageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      status: 'string',
      submitTime: 'string',
      templateConfig: 'string',
      templateId: 'string',
      triggerSource: 'string',
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

