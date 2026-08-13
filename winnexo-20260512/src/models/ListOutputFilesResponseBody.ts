// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesResponseBodyItemsOutputItemsEmailInfo extends $dara.Model {
  /**
   * @remarks
   * 邮件内容
   * 
   * @example
   * string_value
   */
  body?: string;
  /**
   * @remarks
   * 内容类型，如 MARKDOWN/JSONML/HTML
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * recipients
   * 
   * @example
   * string_value
   */
  recipients?: string[];
  /**
   * @remarks
   * 邮件主题
   * 
   * @example
   * string_value
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      contentType: 'contentType',
      recipients: 'recipients',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      contentType: 'string',
      recipients: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recipients)) {
      $dara.Model.validateArray(this.recipients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutputFilesResponseBodyItemsOutputItemsFileInfo extends $dara.Model {
  /**
   * @remarks
   * 文件描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
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
  /**
   * @remarks
   * 文件类型，如 .pdf, .md
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutputFilesResponseBodyItemsOutputItemsSlidesInfo extends $dara.Model {
  /**
   * @remarks
   * 已完成幻灯片数
   * 
   * @example
   * 1
   */
  completedSlides?: number;
  /**
   * @remarks
   * PPT ID
   * 
   * @example
   * examplePptId
   */
  pptId?: string;
  /**
   * @remarks
   * PPT 名称
   * 
   * @example
   * string_value
   */
  pptName?: string;
  /**
   * @remarks
   * 总幻灯片数
   * 
   * @example
   * 1
   */
  totalSlides?: number;
  static names(): { [key: string]: string } {
    return {
      completedSlides: 'completedSlides',
      pptId: 'pptId',
      pptName: 'pptName',
      totalSlides: 'totalSlides',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedSlides: 'number',
      pptId: 'string',
      pptName: 'string',
      totalSlides: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutputFilesResponseBodyItemsOutputItems extends $dara.Model {
  /**
   * @remarks
   * 创建时间(ISO8601)
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  createTime?: string;
  emailInfo?: ListOutputFilesResponseBodyItemsOutputItemsEmailInfo;
  fileInfo?: ListOutputFilesResponseBodyItemsOutputItemsFileInfo;
  /**
   * @remarks
   * 数据库创建时间(ISO8601)
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 数据库更新时间(ISO8601)
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * 产出名称
   * 
   * @example
   * exampleItemName
   */
  itemName?: string;
  /**
   * @remarks
   * 产出明细类型: ppt/html/document/picture/slides/video/audio/email/others
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * 产出明细类型国际化展示名称
   * 
   * @example
   * string_value
   */
  itemTypeDisplayName?: string;
  /**
   * @remarks
   * 助手消息ID，由 sendAsyncChatMessage 返回；不属于当前租户时返回 404
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * 产出明细 ID
   * 
   * @example
   * string_example_value
   */
  outputItemId?: string;
  /**
   * @remarks
   * 是否开启分享
   * 
   * @example
   * true
   */
  shareEnabled?: boolean;
  /**
   * @remarks
   * 分享令牌
   * 
   * @example
   * example_share_token
   */
  shareToken?: string;
  /**
   * @remarks
   * 技能产出 ID
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  slidesInfo?: ListOutputFilesResponseBodyItemsOutputItemsSlidesInfo;
  /**
   * @remarks
   * 任务执行 ID
   * 
   * @example
   * exampleTaskExecutionId
   */
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      emailInfo: 'emailInfo',
      fileInfo: 'fileInfo',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemName: 'itemName',
      itemType: 'itemType',
      itemTypeDisplayName: 'itemTypeDisplayName',
      messageId: 'messageId',
      outputItemId: 'outputItemId',
      shareEnabled: 'shareEnabled',
      shareToken: 'shareToken',
      skillOutputId: 'skillOutputId',
      slidesInfo: 'slidesInfo',
      taskExecutionId: 'taskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      emailInfo: ListOutputFilesResponseBodyItemsOutputItemsEmailInfo,
      fileInfo: ListOutputFilesResponseBodyItemsOutputItemsFileInfo,
      gmtCreate: 'string',
      gmtModified: 'string',
      itemName: 'string',
      itemType: 'string',
      itemTypeDisplayName: 'string',
      messageId: 'string',
      outputItemId: 'string',
      shareEnabled: 'boolean',
      shareToken: 'string',
      skillOutputId: 'string',
      slidesInfo: ListOutputFilesResponseBodyItemsOutputItemsSlidesInfo,
      taskExecutionId: 'string',
    };
  }

  validate() {
    if(this.emailInfo && typeof (this.emailInfo as any).validate === 'function') {
      (this.emailInfo as any).validate();
    }
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    if(this.slidesInfo && typeof (this.slidesInfo as any).validate === 'function') {
      (this.slidesInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutputFilesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 会话 ID
   * 
   * @example
   * exampleConversationId
   */
  conversationId?: string;
  /**
   * @remarks
   * 创建时间(ISO8601)
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 更新时间(ISO8601)
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
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
   * 数字员工（运营对象）名称
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 产出 ID
   * 
   * @example
   * exampleOutputId
   */
  outputId?: string;
  outputItems?: ListOutputFilesResponseBodyItemsOutputItems[];
  /**
   * @remarks
   * 产出类型: conversation/skill/task
   * 
   * @example
   * conversation
   */
  outputType?: string;
  /**
   * @remarks
   * 产出类型国际化展示名称
   * 
   * @example
   * string_value
   */
  outputTypeDisplayName?: string;
  /**
   * @remarks
   * 技能产出 ID
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * @example
   * string_example_value
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'conversationId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      outputId: 'outputId',
      outputItems: 'outputItems',
      outputType: 'outputType',
      outputTypeDisplayName: 'outputTypeDisplayName',
      skillOutputId: 'skillOutputId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      operatingObjectName: 'string',
      outputId: 'string',
      outputItems: { 'type': 'array', 'itemType': ListOutputFilesResponseBodyItemsOutputItems },
      outputType: 'string',
      outputTypeDisplayName: 'string',
      skillOutputId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputItems)) {
      $dara.Model.validateArray(this.outputItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutputFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListOutputFilesResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * 符合条件的产出总数
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListOutputFilesResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

