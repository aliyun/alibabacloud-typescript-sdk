// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDocumentAnalyzeTaskRequestDocument } from "./CreateDocumentAnalyzeTaskRequestDocument";
import { CreateDocumentAnalyzeTaskRequestOutput } from "./CreateDocumentAnalyzeTaskRequestOutput";
import { CreateDocumentAnalyzeTaskRequestStrategy } from "./CreateDocumentAnalyzeTaskRequestStrategy";


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

