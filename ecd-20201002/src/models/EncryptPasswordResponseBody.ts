// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The encrypted password.
   * 
   * @example
   * d34601bc-e6b1-4433-b0cc-8f6c5e52;n4apvGub3OBoj4Grwg==;thhO4UEomJfdvwnwlA==
   */
  encryptedPassword?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF538DA8-FFC6-52DA-8FF8-7B92579F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

