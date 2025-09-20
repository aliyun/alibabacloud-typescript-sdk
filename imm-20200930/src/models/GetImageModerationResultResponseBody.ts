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
   * The violated frames.
   */
  blockFrames?: GetImageModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
   * @remarks
   * The total number of detected frames.
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
   * List of categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The information about video and motion detection frames.
   */
  frames?: GetImageModerationResultResponseBodyModerationResultFrames;
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

