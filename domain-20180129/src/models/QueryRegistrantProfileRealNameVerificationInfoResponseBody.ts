// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfileRealNameVerificationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded image of the identity verification documents.
   * 
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @remarks
   * The certificate number used for identity verification.
   * 
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * The type of certificate used for identity verification. Valid values:  
   * - **SFZ**: Identity card.  
   * - **HZ**: Passport.  
   * - **YYZZ**: Business license.  
   * - **ORG**: Organization code certificate.  
   * - **XYDM**: Unified Social Credit Code certificate.  
   * - **TXZ**: Mainland Travel Permits for Hong Kong and Macao Residents.  
   * 
   * > For more certificate types, see [Certificate Types Supported for Identity Verification](https://help.aliyun.com/document_detail/72209.html).
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @remarks
   * The download URL of the identity verification image.
   * 
   * @example
   * http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @remarks
   * The update time of the identity verification documents.
   * 
   * @example
   * 2017-05-22 19:04:49
   */
  modificationDate?: string;
  /**
   * @remarks
   * The ID of the queried information template.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
   */
  requestId?: string;
  /**
   * @remarks
   * The submission time of the identity verification documents.
   * 
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

