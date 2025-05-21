// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlatformUserInfoForPartnerResponseBody extends $dara.Model {
  /**
   * @example
   * djisdpfOjofjifojfajaspsdkasdada
   */
  encryptedOpenId?: string;
  /**
   * @example
   * djisdpfOjofjifojfajaspsdkasdada
   */
  encryptedUnionId?: string;
  /**
   * @example
   * 11111111111111111111111
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0320C9F4-5EDC-5355-9D7E-DF4CF6C2B3BB
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      encryptedOpenId: 'EncryptedOpenId',
      encryptedUnionId: 'EncryptedUnionId',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedOpenId: 'string',
      encryptedUnionId: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

