// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Text } from "./Text";


export class TextResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: Text;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      text: Text,
    };
  }

  validate() {
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

