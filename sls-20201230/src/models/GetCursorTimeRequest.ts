// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor.
   * 
   * This parameter is required.
   * 
   * @example
   * MTU0NzQ3MDY4MjM3NjUxMzQ0Ng==
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

