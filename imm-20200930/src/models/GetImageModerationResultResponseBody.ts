// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageModerationResultResponseBodyModerationResult } from "./GetImageModerationResultResponseBodyModerationResult";


export class GetImageModerationResultResponseBody extends $dara.Model {
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
   * 2023-04-03T09:44:32Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1B6-1XBMX3BixLMILvXVGtlkr******
   */
  eventId?: string;
  /**
   * @remarks
   * The error message of the task.
   * 
   * @example
   * The specified resource TaskId is not found.
   */
  message?: string;
  /**
   * @remarks
   * The result of the image compliance detection task.
   */
  moderationResult?: GetImageModerationResultResponseBodyModerationResult;
  /**
   * @remarks
   * The name of the project.
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
   * E6A120B1-BEB3-0F63-A7C2-0783B6******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2023-04-03T09:44:31.029Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Running
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ImageModeration-ff207203-3f93-4645-a041-7b8f0f******
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ImageModeration
   */
  taskType?: string;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {
   *       "fileId": "123"
   * }
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
      moderationResult: 'ModerationResult',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
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
      moderationResult: GetImageModerationResultResponseBodyModerationResult,
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.moderationResult && typeof (this.moderationResult as any).validate === 'function') {
      (this.moderationResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

