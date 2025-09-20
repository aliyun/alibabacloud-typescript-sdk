// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames extends $dara.Model {
  /**
   * @example
   * {"teat":"val"}
   */
  label?: string;
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
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
  blockFrames?: GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames[];
  /**
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
  categories?: string[];
  frames?: GetVideoModerationResultResponseBodyModerationResultFrames;
  /**
   * @example
   * block
   */
  suggestion?: string;
  /**
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

