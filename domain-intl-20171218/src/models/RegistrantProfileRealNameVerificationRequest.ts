// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistrantProfileRealNameVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredential?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityCredentialType?: string;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registrantProfileID?: number;
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

