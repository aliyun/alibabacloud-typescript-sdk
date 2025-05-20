// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageAnalyzeTaskRequestDocument } from "./CreateImageAnalyzeTaskRequestDocument";


export class CreateImageAnalyzeTaskRequest extends $dara.Model {
  document?: CreateImageAnalyzeTaskRequestDocument;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateImageAnalyzeTaskRequestDocument,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

