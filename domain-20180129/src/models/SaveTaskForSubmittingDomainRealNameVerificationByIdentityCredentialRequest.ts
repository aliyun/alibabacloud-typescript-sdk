// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to be verified in bulk.
   * 
   * This parameter is required.
   */
  domainName?: string[];
  /**
   * @remarks
   * The Base64-encoded content of the identity credential file.
   * 
   * This parameter is required.
   */
  identityCredential?: string;
  /**
   * @remarks
   * The ID number of the identity credential.
   * 
   * This parameter is required.
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * The type of the identity credential. Valid values: IDC, Passport, and OfficerAcademy.
   * 
   * This parameter is required.
   */
  identityCredentialType?: string;
  /**
   * @remarks
   * The response language. Valid values: zh-CN and en-US. The default is en-US.
   */
  lang?: string;
  /**
   * @remarks
   * The client IP address.
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

