// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshTokenResponseBody extends $dara.Model {
  /**
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

