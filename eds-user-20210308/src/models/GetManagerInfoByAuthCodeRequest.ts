// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagerInfoByAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * e49cd070452f0044813a467d4743****
   */
  authCode?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

