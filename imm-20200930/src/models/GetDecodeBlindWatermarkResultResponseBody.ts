// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDecodeBlindWatermarkResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task error code.
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The watermark content.
   * 
   * @example
   * 阿里云版权所有
   */
  content?: string;
  /**
   * @remarks
   * The time when the task ended. The time is in the ISO 8601 UTC timestamp format with millisecond precision.
   * 
   * @example
   * 2024-03-03T09:45:56.87Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2C2-1I0EG57VR37J4rQ8oKG6C9*****
   */
  eventId?: string;
  /**
   * @remarks
   * The task error message.
   * 
   * @example
   * The specified resource project is not found.
   */
  message?: string;
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
   * 93126E40-0296-4129-95E3-AFAC709372E5
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the task started. The time is in the ISO 8601 UTC timestamp format with millisecond precision.
   * 
   * @example
   * 2024-03-03T09:44:31.029Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
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
   * DecodeBlindWatermark-c09b0943-ed79-4983-8dbe-7a882574****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * DecodeBlindWatermark
   */
  taskType?: string;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
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
      content: 'string',
      endTime: 'string',
      eventId: 'string',
      message: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

