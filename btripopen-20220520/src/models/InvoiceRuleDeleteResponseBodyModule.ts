// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleDeleteResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  removeNum?: number;
  /**
   * @example
   * 0
   */
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      removeNum: 'remove_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeNum: 'number',
      selectedUserNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

