// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TBAccountInfoQueryResponseBodyModule extends $dara.Model {
  tbAccount?: string;
  /**
   * @example
   * true
   */
  tbBond?: boolean;
  static names(): { [key: string]: string } {
    return {
      tbAccount: 'tb_account',
      tbBond: 'tb_bond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbAccount: 'string',
      tbBond: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

