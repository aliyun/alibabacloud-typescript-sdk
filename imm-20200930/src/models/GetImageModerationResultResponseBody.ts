// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageModerationResultResponseBodyModerationResultFramesBlockFrames extends $dara.Model {
  /**
   * @remarks
   * The label of the violation.
   * 
   * @example
   * {
   *       "test": "val"
   * }
   */
  label?: string;
  /**
   * @remarks
   * The offset of the frame.
   * 
   * @example
   * 2
   */
  offset?: number;
  /**
   * @remarks
   * The confidence level of the violation.
   * 
   * @example
   * 30
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

export class GetImageModerationResultResponseBodyModerationResultFrames extends $dara.Model {
  /**
   * @remarks
   * The frames that violate content policies.
   */
  blockFrames?: GetImageModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
   * @remarks
   * The total number of frames that were moderated.
   * 
   * @example
   * 30
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
      blockFrames: { 'type': 'array', 'itemType': GetImageModerationResultResponseBodyModerationResultFramesBlockFrames },
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

export class GetImageModerationResultResponseBodyModerationResult extends $dara.Model {
  /**
   * @remarks
   * The list of categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The frame information for video or animated image moderation.
   */
  frames?: GetImageModerationResultResponseBodyModerationResultFrames;
  /**
   * @remarks
   * The recommended action. Valid values:
   * 
   * - pass: The image is normal. No further action is required.
   * 
   * - review: The moderation result is uncertain. Manual review is required.
   * 
   * - block: The image violates content policies. Further action is recommended, such as deleting or restricting the image.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The storage location of the OSS file. The address follows the format oss://${bucketname}/${objectname}, where bucketname is the name of an OSS bucket in the same region as the current project, and objectname is the file path.
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
      frames: GetImageModerationResultResponseBodyModerationResultFrames,
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
   * The end time of the task. The value is a UTC timestamp in ISO 8601 format with millisecond precision.
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
   * The content moderation result.
   */
  moderationResult?: GetImageModerationResultResponseBodyModerationResult;
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
   * E6A120B1-BEB3-0F63-A7C2-0783B6******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task. The value is a UTC timestamp in ISO 8601 format with millisecond precision.
   * 
   * @example
   * 2023-04-03T09:44:31.029Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * 
   * - Running: The task is running.
   * - Succeeded: The task is completed successfully.
   * - Failed: The task failed.
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
   * The task type.
   * 
   * @example
   * ImageModeration
   */
  taskType?: string;
  /**
   * @remarks
   * The custom user data.
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

