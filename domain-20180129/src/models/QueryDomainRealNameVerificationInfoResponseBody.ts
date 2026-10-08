// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealNameVerificationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Base64-encoded image of the real-name verification certificate. Requirements for the image:  
   * - Format must be **jpg** or **bmp**.  
   * - Original image size must be between **55 KB and 1 MB**.
   * 
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @remarks
   * Certificate number used for real-name verification, such as an identity card number or Unified Social Credit Code.
   * 
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * The type of certificate used for real-name verification. Valid values:  
   * - **SFZ**: Identity card.  
   * - **HZ**: Passport.  
   * - **YYZZ**: Business license.  
   * - **ORG**: Organization code certificate.  
   * - **XYDM**: Unified Social Credit Code certificate.  
   * - **TXZ**: Mainland Travel Permits for Hong Kong and Macao Residents.  
   * 
   * If your certificate type is not listed above, see the section [Supported Certificate Types for Real-Name Verification](https://help.aliyun.com/document_detail/72209.html) for the corresponding value.  
   * > You must select the certificate type that matches the certificate you provide.
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @remarks
   * Download URL of the real-name verification image.
   * 
   * @example
   * http://dbu-nap-p.oss-cn-hangzhou.aliyuncs.com/20190219/140692647406xxxx_5d6baea3e7314fd986afdd86e33exxxx.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * S2019270W570****
   */
  instanceId?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * 4DF9D693-0D5B-4EB7-8922-7ECA6BD59314
   */
  requestId?: string;
  /**
   * @remarks
   * Updated At.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialUrl: 'IdentityCredentialUrl',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      submissionDate: 'SubmissionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      identityCredentialUrl: 'string',
      instanceId: 'string',
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

