// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertJobConfig } from "./MediaConvertJobConfig";
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";
import { MediaConvertOutputGroupDetail } from "./MediaConvertOutputGroupDetail";


export class MediaConvertJob extends $dara.Model {
  /**
   * @remarks
   * The idempotency key of the request for creating the task.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * An error code returned if the task failed.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The task configuration.
   */
  config?: MediaConvertJobConfig;
  /**
   * @remarks
   * The time the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-07T07:16:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the task was completed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-07T07:16:11Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The reason for a failed task.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * An array containing the results for each output.
   */
  outputDetails?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The details of the output groups.
   */
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  /**
   * @remarks
   * The completion percentage of the task.
   * 
   * @example
   * 0
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the queue that processed the task.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The ID of the API request that created this task.
   * 
   * @example
   * 7B117AF5-2A1******
   */
  requestId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * *   Inited: Initialized
   * *   Running
   * *   Complete
   * *   Error
   * *   Cancelled
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      config: 'Config',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      message: 'Message',
      outputDetails: 'OutputDetails',
      outputGroupDetails: 'OutputGroupDetails',
      percent: 'Percent',
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
      config: MediaConvertJobConfig,
      createTime: 'string',
      finishTime: 'string',
      jobId: 'string',
      message: 'string',
      outputDetails: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      outputGroupDetails: { 'type': 'array', 'itemType': MediaConvertOutputGroupDetail },
      percent: 'number',
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

