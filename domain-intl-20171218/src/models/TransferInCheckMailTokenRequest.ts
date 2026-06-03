// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferInCheckMailTokenRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  token?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      token: 'Token',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      token: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

