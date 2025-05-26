// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoModerationResultResponseBodyModerationResult } from "./GetVideoModerationResultResponseBodyModerationResult";


export class GetVideoModerationResultResponseBody extends $dara.Model {
  /**
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @example
   * 2023-04-03T10:20:56.87Z
   */
  endTime?: string;
  /**
   * @example
   * 05C-1XBQvsG2Tn5kBx2dUWo43******
   */
  eventId?: string;
  /**
   * @example
   * The specified resource TaskId is not found.
   */
  message?: string;
  moderationResult?: GetVideoModerationResultResponseBodyModerationResult;
  /**
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @example
   * VideoModeration-d0f0df1d-531d-4ab4-b353-e7f475******
   */
  requestId?: string;
  /**
   * @example
   * 2023-04-03T10:20:41.432Z
   */
  startTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * VideoModeration-d0f0df1d-531d-4ab4-b353-e7f4750******
   */
  taskId?: string;
  /**
   * @example
   * VideoModeration
   */
  taskType?: string;
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
      moderationResult: GetVideoModerationResultResponseBodyModerationResult,
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

