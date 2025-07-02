// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EqualRule extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /old
   */
  match?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /new
   */
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      replacement: 'replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: 'string',
      replacement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

