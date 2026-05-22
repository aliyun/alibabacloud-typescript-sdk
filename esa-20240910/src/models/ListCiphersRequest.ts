// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCiphersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

