// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KeepaliveIntlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

