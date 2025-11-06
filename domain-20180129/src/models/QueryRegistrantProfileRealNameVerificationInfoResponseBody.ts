// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfileRealNameVerificationInfoResponseBody extends $dara.Model {
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @example
   * 2017-05-22 19:04:49
   */
  modificationDate?: string;
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
   */
  requestId?: string;
  /**
   * @example
   * 2017-05-22 19:04:49
   */
  submissionDate?: string;
  static names(): { [key: string]: string } {
    return {
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialUrl: 'IdentityCredentialUrl',
      modificationDate: 'ModificationDate',
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
      submissionDate: 'SubmissionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      identityCredentialUrl: 'string',
      modificationDate: 'string',
      registrantProfileId: 'number',
      requestId: 'string',
      submissionDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

