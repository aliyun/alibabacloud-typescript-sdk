// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the certificate.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:certificate/98e85c94-52d0-40c9-b3b2-afda52f4****
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the certificate. It is the globally unique identifier (GUID) of the certificate in Certificates Manager.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The CSR in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----\\nMIIDADCCAegCAQAwgboxCzAJBgNVBAYTAkNOMREwDwYDVQQIEwhaaGVqaWFuZzER\\n****\\nmkj4rg==\\n-----END CERTIFICATE REQUEST-----\\n
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15a735a1-8fe6-45cc-a64c-3c4ff839334e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      csr: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

