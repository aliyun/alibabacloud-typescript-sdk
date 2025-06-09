// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorRequest extends $dara.Model {
  /**
   * @remarks
   * The point in time that you want to use to query a cursor. Set the value to a UNIX timestamp or a string such as `begin` and `end`.
   * 
   * This parameter is required.
   * 
   * @example
   * begin
   */
  from?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

