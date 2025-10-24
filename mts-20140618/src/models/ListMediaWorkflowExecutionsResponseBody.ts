// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * The Topic/Queue config is empty, not send message
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the job failed. If the job was successful, this parameter is not returned.
   * 
   * @example
   * MessageConfigEmpty
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the success message. If the job failed, this parameter is not returned.
   * 
   * @example
   * 4f3bc83233de4e2f81c7dade443e****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $dara.Model {
  activity?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
    };
  }

  validate() {
    if(Array.isArray(this.activity)) {
      $dara.Model.validateArray(this.activity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
   * 
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input media file.
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $dara.Model {
  /**
   * @remarks
   * The information about the storage location of the input file of the media workflow in OSS.
   */
  inputFile?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
      userData: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList extends $dara.Model {
  mediaWorkflowExecution?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
    };
  }

  validate() {
    if(Array.isArray(this.mediaWorkflowExecution)) {
      $dara.Model.validateArray(this.mediaWorkflowExecution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaWorkflowExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflows.
   */
  mediaWorkflowExecutionList?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList;
  /**
   * @remarks
   * The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1D5C080-8E2F-5030-8AB4-13092F17631B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecutionList: 'MediaWorkflowExecutionList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflowExecutionList && typeof (this.mediaWorkflowExecutionList as any).validate === 'function') {
      (this.mediaWorkflowExecutionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

