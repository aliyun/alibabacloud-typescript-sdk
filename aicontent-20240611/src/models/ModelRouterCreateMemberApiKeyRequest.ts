// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateMemberApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time in the format of yyyy-MM-dd HH:mm:ss. This parameter is optional. If not specified, the key is permanently valid.
   * 
   * @example
   * 2027-07-31 00:00:00
   */
  expireAt?: string;
  /**
   * @remarks
   * The name of the API key. This parameter is optional.
   * 
   * @example
   * TestKey
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'expireAt',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

