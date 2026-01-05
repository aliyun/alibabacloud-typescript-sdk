// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSlotRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

