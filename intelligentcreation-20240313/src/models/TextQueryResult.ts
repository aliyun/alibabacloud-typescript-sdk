// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Text } from "./Text";


export class TextQueryResult extends $dara.Model {
  requestId?: string;
  texts?: Text[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      texts: 'texts',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

