// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentSplitRequestDocument } from "./GetDocumentSplitRequestDocument";
import { GetDocumentSplitRequestStrategy } from "./GetDocumentSplitRequestStrategy";


export class GetDocumentSplitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  document?: GetDocumentSplitRequestDocument;
  strategy?: GetDocumentSplitRequestStrategy;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: GetDocumentSplitRequestDocument,
      strategy: GetDocumentSplitRequestStrategy,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
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

