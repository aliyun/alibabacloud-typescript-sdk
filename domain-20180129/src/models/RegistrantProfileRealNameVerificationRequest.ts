// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistrantProfileRealNameVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 43012512345678****
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileID?: number;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      registrantProfileID: 'RegistrantProfileID',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      registrantProfileID: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

