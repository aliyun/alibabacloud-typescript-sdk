// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithTaobaoUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KsVgypxAipf+xNECMZV2ONMcheqiIoEGFvgx+T8s1oV6/euTK9+ImYvLVPsSqFDh
   */
  encryptedTaobaoUserIdentifier?: string;
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
      encryptedTaobaoUserIdentifier: 'EncryptedTaobaoUserIdentifier',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedTaobaoUserIdentifier: 'string',
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

