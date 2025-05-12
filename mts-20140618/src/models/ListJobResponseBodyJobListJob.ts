// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobInput } from "./ListJobResponseBodyJobListJobInput";
import { ListJobResponseBodyJobListJobMNSMessageResult } from "./ListJobResponseBodyJobListJobMnsmessageResult";
import { ListJobResponseBodyJobListJobOutput } from "./ListJobResponseBodyJobListJobOutput";


export class ListJobResponseBodyJobListJob extends $dara.Model {
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
   * 2014-01-10T12:20:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: ListJobResponseBodyJobListJobInput;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: ListJobResponseBodyJobListJobMNSMessageResult;
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
  output?: ListJobResponseBodyJobListJobOutput;
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
   * 88c6ca184c0e47b665e2a1267971****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The state of the job. Valid values:
   * 
   * *   **Submitted**
   * *   **Transcoding**
   * *   **TranscodeSuccess**
   * *   **TranscodeFail**
   * *   **TranscodeCancelled**
   * 
   * @example
   * TranscodeSuccess
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
      input: ListJobResponseBodyJobListJobInput,
      jobId: 'string',
      MNSMessageResult: ListJobResponseBodyJobListJobMNSMessageResult,
      message: 'string',
      output: ListJobResponseBodyJobListJobOutput,
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

