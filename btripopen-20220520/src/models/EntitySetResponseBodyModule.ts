// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntitySetResponseBodyModule extends $dara.Model {
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
  /**
   * @example
   * 1
   */
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      removeNum: 'remove_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
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

