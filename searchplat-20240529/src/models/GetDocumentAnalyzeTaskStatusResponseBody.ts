// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentAnalyzeTaskStatusResponseBodyResultData extends $dara.Model {
  content?: string;
  contentType?: string;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'content_type',
      pageNum: 'page_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      pageNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetDocumentAnalyzeTaskStatusResponseBodyResultData;
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocumentAnalyzeTaskStatusResponseBodyResultData,
      error: 'string',
      status: 'string',
      taskId: 'string',
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

export class GetDocumentAnalyzeTaskStatusResponseBodyUsage extends $dara.Model {
  imageCount?: number;
  semanticTokenCount?: number;
  tableCount?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'image_count',
      semanticTokenCount: 'semantic_token_count',
      tableCount: 'table_count',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      semanticTokenCount: 'number',
      tableCount: 'number',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentAnalyzeTaskStatusResponseBodyResult;
  usage?: GetDocumentAnalyzeTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetDocumentAnalyzeTaskStatusResponseBodyResult,
      usage: GetDocumentAnalyzeTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

