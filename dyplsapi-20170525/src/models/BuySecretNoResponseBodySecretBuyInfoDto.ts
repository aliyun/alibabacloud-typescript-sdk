// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuySecretNoResponseBodySecretBuyInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 1390000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

