// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The server time that corresponds to the cursor. The value is a UNIX timestamp. A UNIX timestamp represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * @example
   * 1554260243
   */
  cursorTime?: string;
  static names(): { [key: string]: string } {
    return {
      cursorTime: 'cursor_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursorTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

