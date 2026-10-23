// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesResponseBodyItemsOutputItemsEmailInfo extends $dara.Model {
  /**
   * @remarks
   * The email content.
   * 
   * @example
   * The quarterly business report has been generated. Please review
   */
  body?: string;
  /**
   * @remarks
   * The content type, such as MARKDOWN, JSONML, or HTML.
   * 
   * @example
   * MARKDOWN
   */
  contentType?: string;
  /**
   * @remarks
   * The recipient list.
   * 
   * @example
   * ["reader@example.com"]
   */
  recipients?: string[];
  /**
   * @remarks
   * The email subject.
   * 
   * @example
   * Quarterly business analysis report
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
   * Quarterly revenue, cost, and trend analysis report
   */
  description?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Quarterly business analysis report.pdf
   */
  name?: string;
  /**
   * @remarks
   * The file location. It is compatible with file URLs and legacy OSS object keys. The specific value is derived from the output registration information.
   * 
   * @example
   * reports/2026/quarterly-report.pdf
   */
  path?: string;
  /**
   * @remarks
   * The file type, such as .pdf or .md.
   * 
   * @example
   * .pdf
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
   * 8
   */
  completedSlides?: number;
  /**
   * @remarks
   * The PPT file ID.
   * 
   * @example
   * ppt_123e4567-e89b-42d3-a456-426614174015
   */
  pptId?: string;
  /**
   * @remarks
   * The PPT name.
   * 
   * @example
   * Quarterly Business Analysis Report
   */
  pptName?: string;
  /**
   * @remarks
   * The total number of slides.
   * 
   * @example
   * 10
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
   * The creation time of the output detail, serialized from a backend datetime value into an ISO 8601 string, with time zone information returned along with the original value.
   * 
   * @example
   * 2026-10-12T03:10:00+00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The email information, present when the type is email.
   */
  emailInfo?: ListOutputFilesResponseBodyItemsOutputItemsEmailInfo;
  /**
   * @remarks
   * The file information, present when the type is file.
   */
  fileInfo?: ListOutputFilesResponseBodyItemsOutputItemsFileInfo;
  /**
   * @remarks
   * The creation time of the output or detail, serialized from a backend datetime value into an ISO 8601 string, with time zone information returned along with the original value.
   * 
   * @example
   * 2026-10-12T03:10:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time of the output or detail, serialized from a backend datetime value into an ISO 8601 string, with time zone information returned along with the original value.
   * 
   * @example
   * 2026-10-12T03:12:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * Quarterly business analysis report.pdf
   */
  itemName?: string;
  /**
   * @remarks
   * The output item type. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * document
   */
  itemType?: string;
  /**
   * @remarks
   * The internationalized display name of the output detail type.
   * 
   * @example
   * Document
   */
  itemTypeDisplayName?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * msg_123e4567-e89b-42d3-a456-426614174012
   */
  messageId?: string;
  /**
   * @remarks
   * The output detail ID.
   * 
   * @example
   * item_123e4567-e89b-42d3-a456-426614174010
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
   * The share token, present when sharing is enabled. You can use this token to access the public share preview API.
   * 
   * @example
   * demo_public_preview_token
   */
  shareToken?: string;
  /**
   * @remarks
   * The skill output ID.
   * 
   * @example
   * skillout_123e4567-e89b-42d3-a456-426614174011
   */
  skillOutputId?: string;
  /**
   * @remarks
   * The slide deck information, present when the type is slide deck.
   */
  slidesInfo?: ListOutputFilesResponseBodyItemsOutputItemsSlidesInfo;
  /**
   * @remarks
   * The task execution ID.
   * 
   * @example
   * execution_123e4567-e89b-42d3-a456-426614174013
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
   * session_123e4567-e89b-42d3-a456-426614174008
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time of the output or detail, serialized from a backend datetime value into an ISO 8601 string, with time zone information returned along with the original value.
   * 
   * @example
   * 2026-10-12T03:10:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time of the output or detail, serialized from a backend datetime value into an ISO 8601 string, with time zone information returned along with the original value.
   * 
   * @example
   * 2026-10-12T03:12:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * Quarterly business analysis report.pdf
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital worker (operating object).
   * 
   * @example
   * Business Analysis Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The output ID.
   * 
   * @example
   * output_123e4567-e89b-42d3-a456-426614174009
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
   * The localized display name of the output type.
   * 
   * @example
   * Conversation output
   */
  outputTypeDisplayName?: string;
  /**
   * @remarks
   * The skill output ID.
   * 
   * @example
   * skillout_123e4567-e89b-42d3-a456-426614174011
   */
  skillOutputId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task_123e4567-e89b-42d3-a456-426614174014
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
   * The message.
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
   * The number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174007
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching outputs.
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

