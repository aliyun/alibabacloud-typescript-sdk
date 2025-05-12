// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList";
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput";


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution extends $dara.Model {
  /**
   * @remarks
   * The methods that are called in the media workflow.
   */
  activityList?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList;
  /**
   * @remarks
   * The time when the media workflow was created.
   * 
   * @example
   * 016-04-01T06:53:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The input data of the media workflow.
   */
  input?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput;
  /**
   * @remarks
   * The ID of the media asset. A media file contains all the information about a media workflow.
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
   * 93ab850b4f6f44eab54b6e91****81d4
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
   * *   Running: The media workflow is running.
   * *   Completed: The media workflow is complete.
   * 
   * > Completed only indicates that the media workflow is complete. View the status of each method in the workflow, such as the transcode and snapshot methods, to check whether the method is called.
   * 
   * *   Fail: The media workflow fails.
   * 
   * @example
   * Completed
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
      activityList: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList,
      creationTime: 'string',
      input: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput,
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

