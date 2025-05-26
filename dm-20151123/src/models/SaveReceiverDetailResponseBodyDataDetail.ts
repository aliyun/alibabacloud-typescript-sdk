// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveReceiverDetailResponseBodyDataDetail extends $dara.Model {
  /**
   * @remarks
   * Recipient address.
   * 
   * @example
   * test@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

