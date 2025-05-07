// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1705388704855
   */
  expiredTime?: number;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

