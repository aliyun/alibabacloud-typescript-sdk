// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FastFailPolicy extends $dara.Model {
  /**
   * @example
   * abort
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

