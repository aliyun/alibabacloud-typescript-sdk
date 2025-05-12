// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList";
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput";


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution extends $dara.Model {
  /**
   * @remarks
   * The activities that are executed in the media workflow.
   */
  activityList?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList;
  /**
   * @remarks
   * The time when the media workflow was created.
   * 
   * @example
   * 2016-04-01T06:53:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The custom data of the media workflow.
   */
  input?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput;
  /**
   * @remarks
   * The ID of the media file. A media file contains all the information about a media workflow.
   * 
   * @example
   * 512046582a924698a41e0f8b0d2b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the media workflow.
   * 
   * @example
   * 43b7335a4b1d4fe883670036affb****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the media workflow.
   * 
   * @example
   * example-mediaworkflow-****
   */
  name?: string;
  /**
   * @remarks
   * The ID of the execution instance.
   * 
   * @example
   * 48e33690ac19445488c706924321****
   */
  runId?: string;
  /**
   * @remarks
   * The status of the media workflow. Valid values:
   * 
   * *   **running**: The execution is in progress.
   * *   **Completed**: The execution is complete.
   * 
   * > A value of Completed indicates that the execution is complete. For the information about whether each activity, such as Transcode or Snapshot, is successful, check the status of the activity.
   * 
   * *   **Fail**: The execution failed.
   * *   **Success**: The execution was successful.
   * 
   * @example
   * Success
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      activityList: 'ActivityList',
      creationTime: 'CreationTime',
      input: 'Input',
      mediaId: 'MediaId',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      runId: 'RunId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityList: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList,
      creationTime: 'string',
      input: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput,
      mediaId: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      runId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.activityList && typeof (this.activityList as any).validate === 'function') {
      (this.activityList as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

