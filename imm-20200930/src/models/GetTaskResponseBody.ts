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
   * The time when the task ended. The value is a UTC timestamp in ISO 8601 format with millisecond precision.
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
   * The task progress. Valid values: 0 to 100. Unit: percent (%).
   * 
   * > -  The GetTask operation does not support this parameter.
   * > -  This parameter is meaningful only when the task status `State` is `Running`.
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
   * test-project
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
   * The time when the task started. The value is a UTC timestamp in ISO 8601 format with millisecond precision.
   * 
   * @example
   * 2021-12-24T03:01:41.662060377Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * 
   * - Running: The task is running.
   * 
   * - Succeeded: The task is completed.
   * 
   * - Failed: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task tags. These are the tags that the user passed in when creating the task.
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
   * The original request parameters used to create the task.
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
   * The type of the task. For valid values, see [Task type list](https://help.aliyun.com/document_detail/2743993.html).
   * 
   * @example
   * FileCompression
   */
  taskType?: string;
  /**
   * @remarks
   * The custom information specified by the user.
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

