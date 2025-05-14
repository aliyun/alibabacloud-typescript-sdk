// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaConvertJobResponseBodyJobConfig } from "./SubmitMediaConvertJobResponseBodyJobConfig";
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";
import { MediaConvertOutputGroupDetail } from "./MediaConvertOutputGroupDetail";


export class SubmitMediaConvertJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The idempotency key of the request for creating the transcoding task.
   * 
   * @example
   * FB7F25E9-AD9B-1603-8AF6-F1E42DF2E706
   */
  clientToken?: string;
  /**
   * @remarks
   * The error code returned when the transcoding task failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configurations of the transcoding task.
   */
  config?: SubmitMediaConvertJobResponseBodyJobConfig;
  /**
   * @remarks
   * The ID of the transcoding task.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message returned when the transcoding task failed.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The details of the transcoded outputs.
   */
  outputDetails?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The details of the output groups.
   */
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  /**
   * @remarks
   * The ID of the queue.
   * 
   * @example
   * 3780049
   */
  pipelineId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2129C9F-CE95-58B5-B8C1-07758FF6C86F
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the transcoding task. Valid values:
   * 
   * *   Inited: The task is initialized.
   * *   Running
   * *   Success
   * *   Failed
   * *   Cancelled
   * 
   * @example
   * Created
   */
  state?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"videoId":"abcd"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      config: 'Config',
      jobId: 'JobId',
      message: 'Message',
      outputDetails: 'OutputDetails',
      outputGroupDetails: 'OutputGroupDetails',
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      config: SubmitMediaConvertJobResponseBodyJobConfig,
      jobId: 'string',
      message: 'string',
      outputDetails: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      outputGroupDetails: { 'type': 'array', 'itemType': MediaConvertOutputGroupDetail },
      pipelineId: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.outputDetails)) {
      $dara.Model.validateArray(this.outputDetails);
    }
    if(Array.isArray(this.outputGroupDetails)) {
      $dara.Model.validateArray(this.outputGroupDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

