// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAuthCodeBindForExtShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authCode obtained by specifying a user ID
   * 
   * This parameter is required.
   * 
   * @example
   * Aexfgc
   */
  authCode?: string;
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project containing the ProductKey of this product in the Tmall Genie AI platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * List of user identifier information.
   * 
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      encodeKey: 'string',
      encodeType: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

