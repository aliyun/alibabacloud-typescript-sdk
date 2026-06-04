// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchParseDocumentLayoutTaskResponseBodyDataLayoutResultElements extends $dara.Model {
  content?: string;
  formatContent?: string;
  /**
   * @example
   * 1
   */
  index?: number;
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
  layoutResult?: FetchParseDocumentLayoutTaskResponseBodyDataLayoutResult;
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
   * @example
   * successful
   */
  code?: string;
  data?: FetchParseDocumentLayoutTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

