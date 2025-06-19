// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences } from "./CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences";


export class CreateRunResponseBodyMessagesContentStructPartsReferencePart extends $dara.Model {
  references?: CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences },
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

