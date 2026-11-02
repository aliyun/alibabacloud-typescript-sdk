// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateWithCsrRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The content of the existing CSR file.  
   * The key type of the CSR file must be RSA or ECC. If the RSA algorithm is used, the key length must be greater than or equal to 2048 bits. For more information about how to create a CSR file, see [How to create a CSR file](https://help.aliyun.com/document_detail/42218.html).  <props="china">You can also create a CSR in the [Certificate Management Service console](https://yundunnext.console.aliyun.com/?&p=cas). For more information, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html).  
   * A CSR is digital certificate signing request file that contains your server and company information. When you apply for digital certificate, you must submit the CSR file to the CA for review. After the CA signs the CSR file with the private key of the root certificate, digital certificate public key file (the SSL certificate issued to you) is generated.
   * 
   * > The **CN** field in the CSR specifies the domain name bound to the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The email address of the contact for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the contact for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The certificate specification for which you want to apply. Valid values:
   * 
   * - **digicert-free-1-free** (default): a 3-month free DV certificate for individual testing. Available only on the China site.
   * - **symantec-free-1-free**: a 12-month pro DV certificate for individual testing. Available only on the China site.
   * - **symantec-dv-1-starter**: a DigiCert DV wildcard certificate.
   * 
   * - **geotrust-dv-1-starter**: a GeoTrust DV single-domain certificate.
   * - **geotrust-dv-w-starter**: a GeoTrust DV wildcard certificate.
   * 
   * - **globalsign-dv-1-personal**: a GlobalSign DV single-domain certificate.
   * - **globalsign-dv-w-advanced**: a GlobalSign DV wildcard certificate.
   * 
   * @example
   * digicert-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateCertificateWithCsrRequestRequestTags[];
  /**
   * @remarks
   * The name of the contact for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The validation method for domain name ownership. Valid values:
   * 
   * - **DNS**: DNS validation. You can validate the ownership of the domain name by adding a TXT DNS record for the domain name on the DNS management platform. You must have the management permissions on DNS resolution to complete the validation.
   * - **FILE**: file validation. You can validate the ownership of the domain name by creating a specified file on the domain name server. You must have the administrator permissions on the domain name server to complete the validation.
   * 
   * For more information about the two validation methods, see [How do I configure domain name ownership validation?](https://help.aliyun.com/document_detail/48016.html).
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

