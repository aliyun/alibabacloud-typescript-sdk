// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateRequestRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. You cannot specify empty strings as tag keys.
   * 
   * The key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
   * 
   * >  You must specify at least one of **Tag.N** (**Tag.N.Key** and **Tag.N.Value**).
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value cannot exceed 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.
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
   * The domain name that you want to bind to the certificate. You can specify only one domain name.
   * 
   * >  The domain name must match the certificate specifications that you specify for the **ProductCode** parameter. If you apply for a single-domain certificate, you must specify a single domain name for this parameter. If you apply for a wildcard certificate, you must specify a wildcard domain name such as `*.aliyundoc.com` for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
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
   * The specifications of the certificate. Valid values:
   * 
   * *   **digicert-free-1-free** (default): DigiCert single-domain DV certificate, which is free and valid for 3 months.
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate, which is free and valid for 1 year. This value is available only on the China site (aliyun.com).
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
   * The tags.
   */
  tags?: CreateCertificateRequestRequestTags[];
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

