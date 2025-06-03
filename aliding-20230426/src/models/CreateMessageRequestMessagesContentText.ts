// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageRequestMessagesContentText extends $dara.Model {
  /**
   * @example
   * 你好！
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

