// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTokenVaultRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

