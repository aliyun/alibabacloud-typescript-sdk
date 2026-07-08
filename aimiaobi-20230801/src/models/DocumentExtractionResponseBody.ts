// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentExtractionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Author
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * Content
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Custom unique ID for the document
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique identifier for the document
   * 
   * @example
   * 8df2d69d63a247b6b52ff455b2d426b6
   */
  docUuid?: string;
  /**
   * @remarks
   * Publication time
   * 
   * @example
   * 2024-05-14 08:54:33
   */
  pubTime?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * 新闻来源
   */
  source?: string;
  /**
   * @remarks
   * Article summary
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * Tag
   * 
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL
   * 
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentExtractionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: DocumentExtractionResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DocumentExtractionResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

