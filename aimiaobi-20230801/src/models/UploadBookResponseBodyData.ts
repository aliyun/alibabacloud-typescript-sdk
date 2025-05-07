// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBookResponseBodyData extends $dara.Model {
  docIds?: string[];
  existedIds?: string[];
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      existedIds: 'ExistedIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      existedIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    if(Array.isArray(this.existedIds)) {
      $dara.Model.validateArray(this.existedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

