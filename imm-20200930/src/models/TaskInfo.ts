// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
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
   * The error message.
   * 
   * @example
   * The specified resource project is not found.
   */
  message?: string;
  /**
   * @remarks
   * The progress of the task.
   * 
   * @example
   * 0
   */
  progress?: number;
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
   * *   Running: The task is running.
   * *   Succeeded: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the task. You can search for tasks by tag.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * c2b277b9-0d30-4882-ad6d-ad661382****
   */
  taskId?: string;
  /**
   * @remarks
   * The parameter definition in the JSON string format. For more information, see the Request parameters section of the topic about an asynchronous processing task.
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
   * The type of the task.
   * 
   * @example
   * VideoLabelClassification
   */
  taskType?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      message: 'Message',
      progress: 'Progress',
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
      message: 'string',
      progress: 'number',
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

