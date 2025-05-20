// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

