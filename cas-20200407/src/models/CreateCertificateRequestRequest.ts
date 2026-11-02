// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
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

export class CreateCertificateRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to bind to the certificate. You can specify only one domain name.
   * 
   * > The domain name must match the specification of the certificate to apply for, which is specified by the **ProductCode** parameter. When you apply for a single-domain certificate, you must specify a single domain name. When you apply for a wildcard certificate, you must specify a wildcard domain name, such as `*.aliyundoc.com`.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
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
   * The specification of the certificate to apply for. Valid values:
   * 
   * - **digicert-free-1-free** (default): a free 3-month DV certificate for individual testing. Available only on the Alibaba Cloud China site.
   * - **symantec-free-1-free**: a 12-month DV certificate for individual testing (Pro). Available only on the Alibaba Cloud China site.
   * - **symantec-dv-1-starter**: a DigiCert DV wildcard certificate.
   * 
   * - **geotrust-dv-1-starter**: a GeoTrust DV single-domain certificate.
   * - **geotrust-dv-w-starter**: a GeoTrust DV wildcard certificate.
   * 
   * - **globalsign-dv-1-personal**: a GlobalSign DV single-domain certificate.
   * - **globalsign-dv-w-advanced**: a GlobalSign DV wildcard certificate.
   * 
   * @example
   * symantec-dv-1-starter
   */
  productCode?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateCertificateRequestRequestTags[];
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
   * The verification method for domain name ownership. Valid values:
   * 
   * - **DNS**: DNS verification. You can verify the ownership of the domain name by adding a TXT DNS record for the domain name on the DNS management platform. You must have the management permissions on DNS resolution to complete the verification.
   * 
   * - **FILE**: file verification. You can verify the ownership of the domain name by creating a specified file on the domain name server. You must have the administrator permissions on the domain name server to complete the verification.
   * 
   * For more information about the two verification methods, see [How do I configure domain name authorization verification?](https://help.aliyun.com/document_detail/48016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DNS
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
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
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      tags: { 'type': 'array', 'itemType': CreateCertificateRequestRequestTags },
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

