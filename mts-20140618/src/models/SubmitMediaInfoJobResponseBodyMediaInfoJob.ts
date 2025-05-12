// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobInput } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobInput";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobMnsmessageResult";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobProperties } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobProperties";


export class SubmitMediaInfoJobResponseBodyMediaInfoJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the job is run in asynchronous mode.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.JsonObjectFormatInvalid
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
   * The information about the input media file.
   */
  input?: SubmitMediaInfoJobResponseBodyMediaInfoJobInput;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 23ca1d184c0e4341e5b665e2a12****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job fails.
   * 
   * @example
   * The parameter ”*” does not conform to the JSON Object specification
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the analysis job is submitted.
   * 
   * @example
   * 88c6ca184c0e432bbf5b665e2a15****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The properties of the input media file.
   */
  properties?: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * *   **Analyzing**: The job is being run.
   * 
   * @example
   * Analyzing
   */
  state?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      creationTime: 'CreationTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      properties: 'Properties',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      creationTime: 'string',
      input: SubmitMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      properties: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties,
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

