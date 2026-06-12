// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorRequest extends $dara.Model {
  /**
   * @remarks
   * A point in time. This can be a UNIX timestamp or the string `begin` or `end`.
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

