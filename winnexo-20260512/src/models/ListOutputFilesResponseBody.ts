// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesResponseBodyItemsOutputItemsEmailInfo extends $dara.Model {
  /**
   * @remarks
   * The email body.
   * 
   * @example
   * string_value
   */
  body?: string;
  /**
   * @remarks
   * The content type, such as MARKDOWN/JSONML/HTML.
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * The recipient list.
   * 
   * @example
   * string_value
   */
  recipients?: string[];
  /**
   * @remarks
   * The email subject.
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
   * The file description.
   * 
   * @example
   * Sample description
   */
  description?: string;
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
   * The file path (OSS object key).
   * 
   * @example
   * https://example.com/oss/file.pdf
   */
  path?: string;
  /**
   * @remarks
   * The file type, such as .pdf or .md.
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
   * The number of completed slides.
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
   * The PPT name.
   * 
   * @example
   * string_value
   */
  pptName?: string;
  /**
   * @remarks
   * The total number of slides.
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
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The email information. This field is present when the output type is email.
   */
  emailInfo?: ListOutputFilesResponseBodyItemsOutputItemsEmailInfo;
  /**
   * @remarks
   * The file information. This field is present when the output type is file.
   */
  fileInfo?: ListOutputFilesResponseBodyItemsOutputItemsFileInfo;
  /**
   * @remarks
   * The database creation time in ISO 8601 format.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The database update time in ISO 8601 format.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * exampleItemName
   */
  itemName?: string;
  /**
   * @remarks
   * The type of the output item. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * The internationalized display name of the output detail type.
   * 
   * @example
   * string_value
   */
  itemTypeDisplayName?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * The output detail ID.
   * 
   * @example
   * string_example_value
   */
  outputItemId?: string;
  /**
   * @remarks
   * Indicates whether sharing is enabled.
   * 
   * @example
   * true
   */
  shareEnabled?: boolean;
  /**
   * @remarks
   * The share token, which is present when sharing is enabled. You can use this token to access the public share preview API.
   * 
   * @example
   * example_share_token
   */
  shareToken?: string;
  /**
   * @remarks
   * The skill output ID.
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  /**
   * @remarks
   * The slides information. This field is present when the output type is slides.
   */
  slidesInfo?: ListOutputFilesResponseBodyItemsOutputItemsSlidesInfo;
  /**
   * @remarks
   * The task execution ID.
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
   * The conversation ID.
   * 
   * @example
   * exampleConversationId
   */
  conversationId?: string;
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
   * The update time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The output ID.
   * 
   * @example
   * exampleOutputId
   */
  outputId?: string;
  /**
   * @remarks
   * The output detail list.
   */
  outputItems?: ListOutputFilesResponseBodyItemsOutputItems[];
  /**
   * @remarks
   * The output type: `conversation/skill/task`.
   * 
   * @example
   * conversation
   */
  outputType?: string;
  /**
   * @remarks
   * The internationalized display name of the output type.
   * 
   * @example
   * string_value
   */
  outputTypeDisplayName?: string;
  /**
   * @remarks
   * The skill output ID.
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  /**
   * @remarks
   * The task ID.
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
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The output list.
   */
  items?: ListOutputFilesResponseBodyItems[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of outputs that match the specified conditions.
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

