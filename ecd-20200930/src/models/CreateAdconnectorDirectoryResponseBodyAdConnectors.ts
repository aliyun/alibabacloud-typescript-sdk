// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateADConnectorDirectoryResponseBodyAdConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address.
   * 
   * @example
   * ``127.0.**.**``
   */
  address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

