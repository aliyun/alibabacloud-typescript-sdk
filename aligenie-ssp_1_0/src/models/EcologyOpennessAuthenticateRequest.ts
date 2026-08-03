// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcologyOpennessAuthenticateRequest extends $dara.Model {
  /**
   * @remarks
   * entity key
   * 
   * This parameter is required.
   * 
   * @example
   * 12*****
   */
  encodeKey?: string;
  /**
   * @remarks
   * entity Type
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * logon state access token
   * 
   * This parameter is required.
   * 
   * @example
   * d15aa*****ee
   */
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      loginStateAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

