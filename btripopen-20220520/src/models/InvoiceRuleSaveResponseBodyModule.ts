// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleSaveResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  addNum?: number;
  /**
   * @example
   * 1
   */
  removeNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      removeNum: 'remove_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      removeNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

