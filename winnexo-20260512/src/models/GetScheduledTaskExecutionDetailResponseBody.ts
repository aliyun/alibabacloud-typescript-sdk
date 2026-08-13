// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionDetailResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 文件 OSS URL
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
   * 会话 ID
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * 执行结果推送状态（多频道时为列表）
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
   * 触发执行的用户标识
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
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 完成时间 ISO8601
   * 
   * @example
   * string_value
   */
  completedAt?: string;
  /**
   * @remarks
   * 执行完整内容
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * string_value
   */
  creator?: string;
  /**
   * @remarks
   * digitalEmployeeName
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * 执行 ID
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  files?: GetScheduledTaskExecutionDetailResponseBodyFiles[];
  /**
   * @remarks
   * 创建时间 ISO8601
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  metadata?: GetScheduledTaskExecutionDetailResponseBodyMetadata;
  /**
   * @remarks
   * 结构化输出内容
   * 
   * @example
   * string_value
   */
  outputContent?: string;
  pushResult?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * skillCodes
   * 
   * @example
   * string_value
   */
  skillCodes?: string[];
  /**
   * @remarks
   * 开始时间 ISO8601
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * 执行状态
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * 执行结果标题
   * 
   * @example
   * 示例标题
   */
  title?: string;
  triggerInfo?: GetScheduledTaskExecutionDetailResponseBodyTriggerInfo;
  /**
   * @remarks
   * 触发类型
   * 
   * @example
   * string_value
   */
  triggerType?: string;
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

