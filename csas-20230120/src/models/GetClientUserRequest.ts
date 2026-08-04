// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the custom identity source configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  idpConfigId?: string;
  /**
   * @remarks
   * Username.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      idpConfigId: 'IdpConfigId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpConfigId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

