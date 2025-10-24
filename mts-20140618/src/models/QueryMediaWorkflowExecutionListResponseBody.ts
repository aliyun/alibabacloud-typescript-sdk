// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the MNS message fails to be sent. This parameter is not returned if the MNS message is sent.
   * 
   * @example
   * The Topic/Queue config is empty, not send message
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the MNS message fails to be sent. This parameter is not returned if the MNS message is sent.
   * 
   * @example
   * MessageConfigEmpty
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message that indicates the MNS message is sent. This parameter is not returned if the MNS message fails to be sent.
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * *   This parameter is returned only if **Fail** is returned for the State parameter.
   * *   This parameter is not returned if the method status is **Success**.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The time when the method ends.
   * 
   * @example
   * 2016-04-01T06:53:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of the jobs that are generated when the methods are called, such as the job IDs for the analysis, transcode, and snapshot methods.
   * 
   * @example
   * 2376030d9d0849399cd20e20f4f3****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify the user of the job result.
   */
  MNSMessageResult?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult;
  /**
   * @remarks
   * The error message.
   * 
   * *   This parameter is returned only if **Fail** is returned for the State parameter.
   * *   This parameter is not returned if the method status is **Success**.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * > The name of each method in a media workflow is unique.
   * 
   * @example
   * Start
   */
  name?: string;
  /**
   * @remarks
   * The time when the method is called.
   * 
   * @example
   * 2016-04-01T06:53:44Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the workflow method. Valid values:
   * 
   * *   Running: The method is being called.
   * *   Success: The method is called.
   * *   Fail: The method failed to be called.
   * *   Skipped: The method is skipped.
   * 
   * > For example, after the analysis is complete, the transcode method is called and high-definition and standard-definition transcoding jobs are created. The system determines whether to run the jobs based on the analysis result. If the resolution of the input video is low, the high-definition transcoding job may be skipped.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The methods that are supported in the media workflow. Valid values: Start, Snapshot, Transcode, Analysis, and Report. For more information, see [Methods supported for media workflows](https://help.aliyun.com/document_detail/68494.html).
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
      MNSMessageResult: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult,
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $dara.Model {
  activity?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the input file resides.
   * 
   * @example
   * mps-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $dara.Model {
  /**
   * @remarks
   * The input file of the media workflow.
   */
  inputFile?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * example data ****
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
      inputFile: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
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

export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList extends $dara.Model {
  mediaWorkflowExecution?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
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

export class QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds extends $dara.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.runId)) {
      $dara.Model.validateArray(this.runId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaWorkflowExecutionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflows.
   */
  mediaWorkflowExecutionList?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList;
  /**
   * @remarks
   * The IDs of the execution instances that do not exist.
   */
  nonExistRunIds?: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds;
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
      nonExistRunIds: 'NonExistRunIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList,
      nonExistRunIds: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflowExecutionList && typeof (this.mediaWorkflowExecutionList as any).validate === 'function') {
      (this.mediaWorkflowExecutionList as any).validate();
    }
    if(this.nonExistRunIds && typeof (this.nonExistRunIds as any).validate === 'function') {
      (this.nonExistRunIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

