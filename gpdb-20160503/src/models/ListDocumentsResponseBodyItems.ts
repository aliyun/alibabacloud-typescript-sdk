// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDocumentsResponseBodyItemsDocumentList } from "./ListDocumentsResponseBodyItemsDocumentList";


export class ListDocumentsResponseBodyItems extends $dara.Model {
  documentList?: ListDocumentsResponseBodyItemsDocumentList[];
  static names(): { [key: string]: string } {
    return {
      documentList: 'DocumentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentList: { 'type': 'array', 'itemType': ListDocumentsResponseBodyItemsDocumentList },
    };
  }

  validate() {
    if(Array.isArray(this.documentList)) {
      $dara.Model.validateArray(this.documentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

