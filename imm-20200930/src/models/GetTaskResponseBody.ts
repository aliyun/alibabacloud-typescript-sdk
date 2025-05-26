// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code of the task.
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-12-24T03:01:49.480109219Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2F6-1Bz99Xi93EnRpNEyLudILJm****
   */
  eventId?: string;
  /**
   * @remarks
   * The error message of the task.
   * 
   * @example
   * The specified resource project is not found.
   */
  message?: string;
  /**
   * @remarks
   * The task progress. Valid values: 0 to 100. Unit: %.
   * 
   * >  This parameter is valid only if the task is in the `Running` state.``
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C5C1E0F-D8B8-4DA0-8127-EC32C771****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-12-24T03:01:41.662060377Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   RUNNING: The task is running.
   * *   Succeeded: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags. This parameter is returned only if you specified Tags when you created the task.
   * 
   * @example
   * {"test": "val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * c2b277b9-0d30-4882-ad6d-ad661382****
   */
  taskId?: string;
  /**
   * @remarks
   * The initial request parameters used to create the task.
   * 
   * @example
   * {
   * 	"ProjectName":"test-project",
   * 	"CompressedFormat":"zip",
   * 	"TargetURI":"oss://test-bucket/output/test.zip",
   * 	"Sources":[{"URI":"oss://test-bucket/input/test.jpg"}]
   * }
   */
  taskRequestDefinition?: string;
  /**
   * @remarks
   * The type of the task. For more information, see [Task types](https://help.aliyun.com/document_detail/2743993.html).
   * 
   * @example
   * VideoLabelClassification
   */
  taskType?: string;
  /**
   * @remarks
   * The user data of the task.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
      progress: 'Progress',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskRequestDefinition: 'TaskRequestDefinition',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      message: 'string',
      progress: 'number',
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
      taskRequestDefinition: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

