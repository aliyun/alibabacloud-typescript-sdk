// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMnsmessageResult";


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * *   The specific error code appears if the state of the activity is **Fail**.
   * *   This parameter is not returned if the state of the activity is **Success**.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The end time of the activity.
   * 
   * @example
   * 2016-04-01T06:54:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the job generated when the activity is executed. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * 2376030d9d0849399cd20e20c876****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify the user of the job result.
   */
  MNSMessageResult?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * *   The detailed error message appears if the state of the activity is **Fail**.
   * *   This parameter is not returned if the state of the activity is **Success**.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The name of the media workflow activity.
   * 
   * > The name of an activity in a media workflow is unique.
   * 
   * @example
   * Act-2
   */
  name?: string;
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 2016-04-01T06:53:45Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the activity. Valid values:
   * 
   * *   **Running**: The activity is being executed.
   * *   **Fail**: The activity failed to be executed.
   * *   **Skipped**: The activity was skipped.
   * *   **Success**: The activity was successfully executed.
   * 
   * > For example, the high-definition and standard-definition transcoding activities are to be run after the analysis activity is complete. The system determines the activity to run based on the analysis result. If the definition of the input video content is insufficient, the high-definition transcoding activity may be skipped.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The type of the media workflow activity. Valid values: Start, Snapshot, Transcode, Analysis, and Report. For more information, see [Methods supported for media workflows](https://help.aliyun.com/document_detail/68494.html).
   * 
   * @example
   * Start
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      jobId: 'string',
      MNSMessageResult: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult,
      message: 'string',
      name: 'string',
      startTime: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

