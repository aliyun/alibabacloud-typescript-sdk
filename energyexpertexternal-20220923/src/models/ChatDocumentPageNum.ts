// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocPostion } from "./ChatRefDocPostion";


export class ChatDocumentPageNum extends $dara.Model {
  num?: number;
  pos?: ChatRefDocPostion[][];
  static names(): { [key: string]: string } {
    return {
      num: 'num',
      pos: 'pos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pos: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ChatRefDocPostion } },
    };
  }

  validate() {
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

