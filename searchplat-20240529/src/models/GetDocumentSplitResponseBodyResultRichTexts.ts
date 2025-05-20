// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSplitResponseBodyResultRichTexts extends $dara.Model {
  content?: string;
  meta?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

