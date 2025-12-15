// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocumentAnalyzeTaskRequestDocument extends $dara.Model {
  content?: string;
  fileName?: string;
  fileType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'file_name',
      fileType: 'file_type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileType: 'string',
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

export class CreateDocumentAnalyzeTaskRequestOutput extends $dara.Model {
  imageStorage?: string;
  static names(): { [key: string]: string } {
    return {
      imageStorage: 'image_storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageStorage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskRequestStrategy extends $dara.Model {
  enableSemantic?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSemantic: 'enable_semantic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSemantic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskRequest extends $dara.Model {
  document?: CreateDocumentAnalyzeTaskRequestDocument;
  output?: CreateDocumentAnalyzeTaskRequestOutput;
  strategy?: CreateDocumentAnalyzeTaskRequestStrategy;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      output: 'output',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateDocumentAnalyzeTaskRequestDocument,
      output: CreateDocumentAnalyzeTaskRequestOutput,
      strategy: CreateDocumentAnalyzeTaskRequestStrategy,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

