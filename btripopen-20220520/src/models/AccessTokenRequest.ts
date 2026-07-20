// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The API secret of the application. For information about how to obtain the secret, see [Application credentials](/#/document/server/application-of-basic-information?handbookId=development-support).
   * 
   * This parameter is required.
   * 
   * @example
   * ggZADk********eDxdaD
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'app_secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

