// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchParseDocumentLayoutTaskResponseBodyDataLayoutResultElements extends $dara.Model {
  /**
   * @remarks
   * Content
   * 
   * @example
   * 一、本月主要工作进展\\n
   */
  content?: string;
  /**
   * @remarks
   * For headings, content with heading numbers removed
   * 
   * @example
   * 本月主要工作进展
   */
  formatContent?: string;
  /**
   * @remarks
   * Index order of each element
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * 支持的类型如下
   *     HEADING("标题"),
   *     H1("一级标题"),
   *     H2("二级标题"),
   *     H3("三级标题"),
   *     H4("四级标题"),
   *     H5("五级标题"),
   *     H6("六级标题"),
   *     PARAGRAPH("段落"),
   *     SIGNATURE("落款"),
   *     FOOTNOTE("脚注"),
   *     TABLE("表格"),
   *     CODE_BLOCK("代码块"),
   *     ATTACHMENT("附件"),
   *     BLOCKQUOTE("引用");
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      formatContent: 'FormatContent',
      index: 'Index',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      formatContent: 'string',
      index: 'number',
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

export class FetchParseDocumentLayoutTaskResponseBodyDataLayoutResult extends $dara.Model {
  /**
   * @remarks
   * Returned element data
   */
  elements?: FetchParseDocumentLayoutTaskResponseBodyDataLayoutResultElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': FetchParseDocumentLayoutTaskResponseBodyDataLayoutResultElements },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchParseDocumentLayoutTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Structured content after formatting
   */
  layoutResult?: FetchParseDocumentLayoutTaskResponseBodyDataLayoutResult;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * PENDING-待执行、RUNNING-执行中、SUCCESSED-成功、SUSPENDED-暂停、FAILED-失败、CANCELLED-取消
   */
  taskStats?: string;
  static names(): { [key: string]: string } {
    return {
      layoutResult: 'LayoutResult',
      taskStats: 'TaskStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutResult: FetchParseDocumentLayoutTaskResponseBodyDataLayoutResult,
      taskStats: 'string',
    };
  }

  validate() {
    if(this.layoutResult && typeof (this.layoutResult as any).validate === 'function') {
      (this.layoutResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchParseDocumentLayoutTaskResponseBody extends $dara.Model {
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
  data?: FetchParseDocumentLayoutTaskResponseBodyData;
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
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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
      data: FetchParseDocumentLayoutTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

