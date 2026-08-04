// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdpConfigRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the identity provider configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

