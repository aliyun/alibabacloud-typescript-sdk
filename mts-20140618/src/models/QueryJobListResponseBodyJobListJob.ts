// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobInput } from "./QueryJobListResponseBodyJobListJobInput";
import { QueryJobListResponseBodyJobListJobMNSMessageResult } from "./QueryJobListResponseBodyJobListJobMnsmessageResult";
import { QueryJobListResponseBodyJobListJobOutput } from "./QueryJobListResponseBodyJobListJobOutput";


export class QueryJobListResponseBodyJobListJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * InvalidParameter.NullValue
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
   * 2014-01-10T12:20:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryJobListResponseBodyJobListJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: QueryJobListResponseBodyJobListJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * The specified parameter "%s" cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * The job output.
   */
  output?: QueryJobListResponseBodyJobListJobOutput;
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
   * The ID of the MPS queue that is used to run the job.
   * 
   * @example
   * 88c6ca184c0e47b665e2a1267971****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * *   **Submitted**: The job was submitted.
   * *   **Transcoding**: Transcoding is in process.
   * *   **TranscodeSuccess**: The job was successful.
   * *   **TranscodeFail**: The job failed.
   * *   **TranscodeCancelled**: The job was canceled.
   * 
   * @example
   * TranscodeSuccess
   */
  state?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2021-03-04T06:44:43Z
   */
  submitTime?: string;
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
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      finishTime: 'string',
      input: QueryJobListResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: QueryJobListResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: QueryJobListResponseBodyJobListJobOutput,
      percent: 'number',
      pipelineId: 'string',
      state: 'string',
      submitTime: 'string',
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

