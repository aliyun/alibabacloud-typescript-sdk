// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainJwtAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationTokenId: 'authenticationTokenId',
      consumerId: 'consumerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationTokenId: 'string',
      consumerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

