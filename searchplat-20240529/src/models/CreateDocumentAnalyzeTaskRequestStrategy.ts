// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

