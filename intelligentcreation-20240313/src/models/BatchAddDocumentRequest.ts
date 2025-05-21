// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDocumentInfo } from "./AddDocumentInfo";


export class BatchAddDocumentRequest extends $dara.Model {
  addDocumentInfos?: AddDocumentInfo[];
  static names(): { [key: string]: string } {
    return {
      addDocumentInfos: 'addDocumentInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentInfos: { 'type': 'array', 'itemType': AddDocumentInfo },
    };
  }

  validate() {
    if(Array.isArray(this.addDocumentInfos)) {
      $dara.Model.validateArray(this.addDocumentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

