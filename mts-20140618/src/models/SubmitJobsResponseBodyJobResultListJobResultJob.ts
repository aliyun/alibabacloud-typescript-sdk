// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobInput } from "./SubmitJobsResponseBodyJobResultListJobResultJobInput";
import { SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult } from "./SubmitJobsResponseBodyJobResultListJobResultJobMnsmessageResult";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutput } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutput";


export class SubmitJobsResponseBodyJobResultListJobResultJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2014-01-10T12:20:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: SubmitJobsResponseBodyJobResultListJobResultJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 31fa3c9ca8134f9cec2b4b0b0f78****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by MNS to notify users of the job result.
   */
  MNSMessageResult?: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job was successful.
   * 
   * @example
   * The operation has failed due to some unknown error, exception or failure.
   */
  message?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: SubmitJobsResponseBodyJobResultListJobResultJobOutput;
  /**
   * @remarks
   * The transcoding progress.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a126797
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job. Valid values:
   * 
   * *   **Submitted**
   * *   **TranscodeFail**
   * 
   * @example
   * Submitted
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      output: 'Output',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: SubmitJobsResponseBodyJobResultListJobResultJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitJobsResponseBodyJobResultListJobResultJobMNSMessageResult,
      message: 'string',
      output: SubmitJobsResponseBodyJobResultListJobResultJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
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

