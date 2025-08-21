// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithAligenieUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UYugfm/3Nb9q24AyES2rYmC5tIglSoDX3Mbna/vrldcjGPtC8VzFwo+CU5c4CHLjrK7ekskG2WVaevM5Zi9f0w==
   */
  encryptedAligenieUserIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbe2eb4458302b9246c6da17fbc95f4b
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedAligenieUserIdentifier: 'EncryptedAligenieUserIdentifier',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedAligenieUserIdentifier: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

