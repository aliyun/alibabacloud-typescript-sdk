// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMessageResponseBodyMessagesContentStructViewParts } from "./ListMessageResponseBodyMessagesContentStructViewParts";


export class ListMessageResponseBodyMessagesContentStructView extends $dara.Model {
  parts?: ListMessageResponseBodyMessagesContentStructViewParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentStructViewParts },
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

