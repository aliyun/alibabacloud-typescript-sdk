// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the cursor.
   * 
   * @example
   * MTQ0NzI5OTYwNjg5NjYzMjM1Ng==
   */
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

