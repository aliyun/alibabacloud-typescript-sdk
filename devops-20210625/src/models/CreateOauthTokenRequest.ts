// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOAuthTokenRequest extends $dara.Model {
  /**
   * @remarks
   * clientId
   * 
   * This parameter is required.
   * 
   * @example
   * dc7e0b3c00a3e58f46
   */
  clientId?: string;
  /**
   * @remarks
   * client_secret
   * 
   * This parameter is required.
   * 
   * @example
   * a433294edea39cae7e7870
   */
  clientSecret?: string;
  /**
   * @example
   * 86df532f74454e189740d100ac97f4b9
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * code
   */
  grantType?: string;
  /**
   * @example
   * username
   */
  login?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * read:repo
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      code: 'code',
      grantType: 'grantType',
      login: 'login',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      grantType: 'string',
      login: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

