// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when transcoding fails.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when transcoding fails.
   * 
   * @example
   * ErrorMessage
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-08-19T02:28:22Z
   */
  finishTimeUtc?: string;
  /**
   * @remarks
   * The time when the task was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-07-28T02:17:26Z
   */
  gmtCreateUtc?: string;
  /**
   * @remarks
   * The node results of the workflow task. The value is in JSON format and varies based on the workflow configuration.
   * 
   * @example
   * {}
   */
  nodeResults?: string;
  /**
   * @remarks
   * The output information.
   * 
   * @example
   * {}
   */
  outputs?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 63E8B7C7-4812-46*****AD-0FA56029AC86
   */
  requestId?: string;
  /**
   * @remarks
   * The result of this review. This indicates the current manual review result. Valid values:
   * - **running**: Running.
   * - **stopped**: Stopped.
   * - **failed**: Failed.
   * - **partial-succeeded**: Partially succeeded.
   * - **succeeded**: Succeeded.
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * The task ID used to query the refresh status.
   * 
   * @example
   * 70422****
   */
  taskId?: string;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Workflow Management** to view the ID.
   * 
   * @example
   * 613efff3887ec34af685714cc461****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      finishTimeUtc: 'FinishTimeUtc',
      gmtCreateUtc: 'GmtCreateUtc',
      nodeResults: 'NodeResults',
      outputs: 'Outputs',
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      finishTimeUtc: 'string',
      gmtCreateUtc: 'string',
      nodeResults: 'string',
      outputs: 'string',
      requestId: 'string',
      status: 'string',
      taskId: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

