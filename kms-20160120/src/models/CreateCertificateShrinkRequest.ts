// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the private key of the certificate can be exported for use. Valid values:
   * 
   * *   true: The private key of the certificate can be exported for use. This is the default value.
   * *   false: The private key of the certificate cannot be exported for use. We recommend that you set this parameter to false to protect keys with a higher security level.
   * 
   * @example
   * true
   */
  exportablePrivateKey?: boolean;
  /**
   * @remarks
   * The type of the key. Valid values:
   * 
   * *   RSA_2048
   * *   EC_P256
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  keySpec?: string;
  /**
   * @remarks
   * The certificate subject, which is the owner of the certificate.
   * 
   * Specify the value in the distinguished name (DN) format, as defined in [RFC 2253](https://tools.ietf.org/html/rfc2253?spm=a2c4g.11186623.2.13.265f1a1cGFCn3Q). A DN is a sequence of relative distinguished names (RDNs).
   * 
   * RDNs are key-value pairs in the format of `attribute1=value1,attribute2=value2`. Separate multiple RDNs with commas (,).
   * 
   * The Subject parameter consists of the following fields:
   * 
   * *   CN: required. The name of the certificate subject.
   * *   C: required. The two-character country or region code in the [ISO 3166-1](https://www.iso.org/obp/ui/#search/code/) standard. For example, CN indicates China.
   * *   O: required. The legal name of the enterprise, company, organization, or institution.
   * *   OU: required. The name of the department.
   * *   ST: optional. The name of the province, municipality, autonomous region, or special administrative region.
   * *   L: optional. The name of the city.
   * 
   * This parameter is required.
   * 
   * @example
   * CN=userName,OU=kms,O=aliyun,C=CN
   */
  subject?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   * 
   * @example
   * ["test1.example.com","test2.example.com"]
   */
  subjectAlternativeNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportablePrivateKey: 'ExportablePrivateKey',
      keySpec: 'KeySpec',
      subject: 'Subject',
      subjectAlternativeNamesShrink: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportablePrivateKey: 'boolean',
      keySpec: 'string',
      subject: 'string',
      subjectAlternativeNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

