// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences } from "./ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences";


export class ListMessageResponseBodyMessagesContentStructViewPartsReferencePart extends $dara.Model {
  references?: ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences },
    };
  }

  validate() {
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

