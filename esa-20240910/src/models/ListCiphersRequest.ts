// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCiphersRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cipher suite group, which can be: all, strict, custom.
   * 
   * This parameter is required.
   * 
   * @example
   * strict
   */
  ciphersGroup?: string;
  static names(): { [key: string]: string } {
    return {
      ciphersGroup: 'CiphersGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphersGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

