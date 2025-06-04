// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption settings. Valid values:
   * 
   * *   PlainText
   * *   Secret
   * 
   * @example
   * PlainText
   */
  encryptOption?: string;
  static names(): { [key: string]: string } {
    return {
      encryptOption: 'EncryptOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptOption: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

