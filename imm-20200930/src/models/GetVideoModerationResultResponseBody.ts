// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames extends $dara.Model {
  /**
   * @remarks
   * The label of the violation.
   * 
   * @example
   * {"teat":"val"}
   */
  label?: string;
  /**
   * @remarks
   * The offset of the frame.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The confidence level of the violation.
   * 
   * @example
   * 10
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBodyModerationResultFrames extends $dara.Model {
  /**
   * @remarks
   * The information about violated frames.
   */
  blockFrames?: GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
   * @remarks
   * The total number of detected frames.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'BlockFrames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockFrames)) {
      $dara.Model.validateArray(this.blockFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBodyModerationResult extends $dara.Model {
  /**
   * @remarks
   * The category list.
   */
  categories?: string[];
  /**
   * @remarks
   * The information about video and motion detection frames.
   */
  frames?: GetVideoModerationResultResponseBodyModerationResultFrames;
  /**
   * @remarks
   * The recommended operation. Valid values:
   * 
   * *   pass: The image has passed the check. No action is required.
   * *   review: The image contains suspected violations and requires human review.
   * *   block: The image contains violations. Further actions, such as deleting or blocking the image, are recommended.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The OSS URI of the file. The URI follows the oss://${bucketname}/${objectname} format. bucketname indicates the name of an OSS bucket that is in the same region as the current project, and objectname is the file path.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      frames: 'Frames',
      suggestion: 'Suggestion',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      frames: GetVideoModerationResultResponseBodyModerationResultFrames,
      suggestion: 'string',
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.frames && typeof (this.frames as any).validate === 'function') {
      (this.frames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBody extends $dara.Model {
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
   * 2023-04-03T10:20:56.87Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 05C-1XBQvsG2Tn5kBx2dUWo43******
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
  moderationResult?: GetVideoModerationResultResponseBodyModerationResult;
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
   * VideoModeration-d0f0df1d-531d-4ab4-b353-e7f475******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2023-04-03T10:20:41.432Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Running: The task is running.
   * *   Succeeded: The task is successful.
   * *   Failed: The task failed.
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
   * VideoModeration-d0f0df1d-531d-4ab4-b353-e7f4750******
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * VideoModeration
   */
  taskType?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {
   *       "id": "test-id",
   *       "name": "test-name"
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

