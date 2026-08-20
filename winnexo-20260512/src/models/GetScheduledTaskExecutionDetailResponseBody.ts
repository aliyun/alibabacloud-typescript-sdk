// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionDetailResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * @example
   * https://example.com/oss/file.pdf
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskExecutionDetailResponseBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The token usage information.
   * 
   * @example
   * string_value
   */
  usage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      usage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.usage) {
      $dara.Model.validateMap(this.usage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskExecutionDetailResponseBodyTriggerInfo extends $dara.Model {
  /**
   * @remarks
   * The user identifier that triggered the execution.
   * 
   * @example
   * user_10001
   */
  triggeredBy?: string;
  static names(): { [key: string]: string } {
    return {
      triggeredBy: 'triggeredBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggeredBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskExecutionDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The completion time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  completedAt?: string;
  /**
   * @remarks
   * The full execution content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * string_value
   */
  creator?: string;
  /**
   * @remarks
   * The list of digital employee names.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * The list of output files.
   */
  files?: GetScheduledTaskExecutionDetailResponseBodyFiles[];
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The extended metadata.
   */
  metadata?: GetScheduledTaskExecutionDetailResponseBodyMetadata;
  /**
   * @remarks
   * The structured output content.
   * 
   * @example
   * string_value
   */
  outputContent?: string;
  /**
   * @remarks
   * The push status of the execution result.
   * 
   * @example
   * succuss
   */
  pushResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of associated skill codes.
   * 
   * @example
   * string_value
   */
  skillCodes?: string[];
  /**
   * @remarks
   * The start time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The execution result title.
   * 
   * @example
   * Sample title
   */
  title?: string;
  /**
   * @remarks
   * The trigger information.
   */
  triggerInfo?: GetScheduledTaskExecutionDetailResponseBodyTriggerInfo;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  /**
   * @remarks
   * The visibility scope of the execution record, which is always equal to the visibility scope of the associated task. Valid values: PRIVATE, COLLABORATIVE, and PUBLIC. This field is empty for personal task executions.
   * 
   * @example
   * COLLABORATIVE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completedAt: 'completedAt',
      content: 'content',
      creator: 'creator',
      digitalEmployeeName: 'digitalEmployeeName',
      errorMessage: 'errorMessage',
      executionId: 'executionId',
      files: 'files',
      gmtCreate: 'gmtCreate',
      message: 'message',
      metadata: 'metadata',
      outputContent: 'outputContent',
      pushResult: 'pushResult',
      requestId: 'requestId',
      skillCodes: 'skillCodes',
      startedAt: 'startedAt',
      status: 'status',
      taskId: 'taskId',
      title: 'title',
      triggerInfo: 'triggerInfo',
      triggerType: 'triggerType',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedAt: 'string',
      content: 'string',
      creator: 'string',
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      errorMessage: 'string',
      executionId: 'string',
      files: { 'type': 'array', 'itemType': GetScheduledTaskExecutionDetailResponseBodyFiles },
      gmtCreate: 'string',
      message: 'string',
      metadata: GetScheduledTaskExecutionDetailResponseBodyMetadata,
      outputContent: 'string',
      pushResult: 'string',
      requestId: 'string',
      skillCodes: { 'type': 'array', 'itemType': 'string' },
      startedAt: 'string',
      status: 'string',
      taskId: 'string',
      title: 'string',
      triggerInfo: GetScheduledTaskExecutionDetailResponseBodyTriggerInfo,
      triggerType: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.skillCodes)) {
      $dara.Model.validateArray(this.skillCodes);
    }
    if(this.triggerInfo && typeof (this.triggerInfo as any).validate === 'function') {
      (this.triggerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

