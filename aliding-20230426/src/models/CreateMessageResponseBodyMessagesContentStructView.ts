// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageResponseBodyMessagesContentStructViewParts } from "./CreateMessageResponseBodyMessagesContentStructViewParts";


export class CreateMessageResponseBodyMessagesContentStructView extends $dara.Model {
  parts?: CreateMessageResponseBodyMessagesContentStructViewParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentStructViewParts },
    };
  }

  validate() {
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

