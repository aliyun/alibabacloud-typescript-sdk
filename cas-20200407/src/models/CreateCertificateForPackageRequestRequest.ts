// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCertificateForPackageRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * runtime
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can query multiple tag values.
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

export class CreateCertificateForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the company that applies for the certificate.
   * 
   * > This parameter applies only to OV certificates. When you apply for an OV certificate, you must first add the company information in the **Information Management** module of the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/). For more information, see [Manage company information](https://help.aliyun.com/document_detail/198289.html). When you apply for a DV certificate, you do not need to add company information.
   * 
   * When you apply for an OV certificate, if you specify the company name here, the corresponding company information in the **Information Management** module is used. If you do not specify this parameter, the latest company information added in the **Information Management** module is used.
   * 
   * @example
   * Example Company
   */
  companyName?: string;
  /**
   * @remarks
   * The content of the certificate signing request (CSR) file that you manually generated for the domain name by using OpenSSL or Keytool. The key type of the CSR file must be RSA or ECC, and the key length of the RSA algorithm must be greater than or equal to 2048 bits. For more information about how to create a CSR file, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html). If you do not specify this parameter, Certificate Management Service automatically creates a CSR for you.
   * 
   * A CSR is a certificate signing request file that contains your server and company information. When you apply for a certificate, you must submit the CSR file to the certificate authority (CA) for review. After the CA signs the CSR file by using the private key of the root certificate, a certificate public key file (the SSL certificate issued to you) is generated.
   * 
   * >Notice:  
   * 
   * The **CN** field in the CSR indicates the domain name bound to the certificate. This field is required when you specify the CSR parameter.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The domain name to be bound to the certificate. Requirements:
   * 
   * - You can specify a single domain name or a wildcard domain name, such as `*.aliyundoc.com`.
   * - You can specify multiple domain names. Separate multiple domain names with commas (,). You can specify up to five domain names.
   * - If you specify multiple domain names, all the domain names must be single domain names or wildcard domain names. You cannot specify both single domain names and wildcard domain names at the same time.
   * 
   * >Notice:  
   * 
   * If you bind multiple domain names to the certificate, this parameter is required. This parameter and the **Csr** parameter cannot be left empty at the same time. If you specify both this parameter and the **Csr** parameter, the value of the **CN** field in the **Csr** parameter is used as the domain name bound to the certificate.
   * 
   * @example
   * aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The email address of the contact for the application. After the CA receives your certificate application, the CA sends a certificate application verification email to this email address. You must log on to the email account, check the email, and complete the verification as prompted in the email.
   * 
   * If you do not specify this parameter, the latest contact information added in the **Information Management** module is used. For more information about how to add a contact in the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the contact for the application. The CA staff may contact you at this phone number to verify your certificate application information.
   * 
   * If you do not specify this parameter, the latest contact information added in the **Information Management** module is used. For more information about how to add a contact in the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The specifications of the certificate for which you want to apply. Valid values:
   * - **digicert-free-1-free** (default): a 3-month personal test certificate (free edition). Available only on the China site.
   * - **symantec-free-1-free**: a 12-month personal test certificate (pro). Available only on the China site.
   * - **symantec-dv-1-starter**: a DigiCert DV wildcard certificate.
   * - **symantec-ov-1-personal**: a DigiCert OV single-domain certificate.
   * - **symantec-ov-w-personal**: a DigiCert OV wildcard certificate.
   * 
   * - **geotrust-dv-1-starter**: a GeoTrust DV single-domain certificate.
   * - **geotrust-dv-w-starter**: a GeoTrust DV wildcard certificate.
   * - **geotrust-ov-1-personal**: a GeoTrust OV single-domain certificate.
   * - **geotrust-ov-w-personal**: a GeoTrust OV wildcard certificate.
   * 
   * - **globalsign-dv-1-personal**: a GlobalSign DV single-domain certificate.
   * - **globalsign-dv-w-advanced**: a GlobalSign DV wildcard certificate.
   * - **globalsign-ov-1-personal**: a GlobalSign OV single-domain certificate.
   * - **globalsign-ov-w-advanced**: a GlobalSign OV wildcard certificate.
   * 
   * 
   * - **cfca-ov-1-personal**: a CFCA OV single-domain certificate (available only on the China site).
   * - **cfca-ev-w-advanced**: a CFCA OV wildcard certificate (available only on the China site).
   * 
   * @example
   * digicert-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateCertificateForPackageRequestRequestTags[];
  /**
   * @remarks
   * The name of the contact for the application.
   * 
   * If you do not specify this parameter, the latest contact information added in the **Information Management** module is used. For more information about how to add a contact in the **Information Management** module, see [Manage contacts](https://help.aliyun.com/document_detail/198262.html).
   * 
   * @example
   * Tom
   */
  username?: string;
  /**
   * @remarks
   * The verification method for domain name ownership. Valid values:
   * 
   * - **DNS**: DNS verification. You can verify the ownership of the domain name by adding a TXT record for the domain name on the DNS management platform. You must have the management permissions on DNS resolution to complete the verification.
   * 
   * - **FILE**: file verification. You can verify the ownership of the domain name by creating a specified file on the domain name server. You must have the administrator permissions on the domain name server to complete the verification.
   * 
   * For more information about the two verification methods, see [How do I configure domain name authorization verification?](https://help.aliyun.com/document_detail/48016.html).
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      csr: 'Csr',
      domain: 'Domain',
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
      companyName: 'string',
      csr: 'string',
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateForPackageRequestRequestTags },
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

