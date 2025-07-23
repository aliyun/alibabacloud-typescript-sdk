// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateWithCsrRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR file.\\
   * The key algorithm in the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography (ECC), and the key length of the RSA algorithm must be greater than or equal to 2,048 characters. For more information about how to create a CSR file, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)\\
   * A CSR file contains the information about your server and company. When you apply for a certificate, you must submit the CSR file to the CA. The CA signs the CSR file by using the private key of the root certificate and generates a public key file to issue your certificate.
   * 
   * >  The **CN** field in the CSR file specifies the domain name that is bound to the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The contact email address of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The phone number of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The specifications of the certificate that you want to apply for. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain DV certificate in a three-month free trial, available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate in a one-year free trial, available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateCertificateWithCsrRequestRequestTags[];
  /**
   * @remarks
   * The name of the applicant.
   * 
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The method to verify the ownership of a domain name. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name. You must have operation permissions on domain name resolution to verify the ownership of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server. You must have administrative rights on the DNS server to verify the ownership of the domain name.
   * 
   * For more information about the verification methods, see [Verify the ownership of a domain name](https://help.aliyun.com/document_detail/48016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      tags: 'Tags',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateWithCsrRequestRequestTags },
      username: 'string',
      validateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

