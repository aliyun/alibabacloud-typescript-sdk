// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupParticipantsRequestPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

