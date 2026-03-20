// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateWebCertRequest extends $dara.Model {
  /**
   * @remarks
   * The public key of the certificate that you want to associate. This parameter must be used together with the CertName and Key parameters.
   * 
   * >  If you specify a value for the CertName, Cert, and Key parameters, you do not need to specify a value for the CertId parameter.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- 62EcYPWd2Oy1vs6MTXcJSfN9Z7rZ9fmxWr2BFN2XbahgnsSXM48ixZJ4krc+1M+j2kcubVpsE2cgHdj4v8H6jUz9Ji4mr7vMNS6dXv8PUkl/qoDeNGCNdyTS5NIL5ir+g92cL8IGOkjgvhlqt9vc65Cgb4mL+n5+DV9uOyTZTW/MojmlgfUekC2xiXa54nxJf17Y1TADGSbyJbsC0Q9nIrHsPl8YKkvRWvIAqYxXZ7wRwWWmv4TMxFhWRiNY7yZIo2ZUhl02SIDNggIEeg== -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  If you specify a certificate ID, you do not need to specify a value for the CertName, Cert, and Key parameters. You can specify only one of this parameter and the CertIdentifier parameter.
   * 
   * @example
   * 2404693
   */
  certId?: number;
  /**
   * @remarks
   * The globally unique ID of the certificate. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of the CertIdentifier parameter is 123-cn-hangzhou.
   * 
   * >  You can specify only one of this parameter and the CertId parameter.
   * 
   * @example
   * 9430680-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * >  You can specify the name of the certificate that you want to associate. This parameter must be used together with the Cert and Key parameters.
   * 
   * @example
   * example-cert
   */
  certName?: string;
  /**
   * @remarks
   * The region of the certificate. Valid values: **cn-hangzhou** and **ap-southeast-1**. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The private key of the certificate that you want to associate. This parameter must be used together with the CertName and Cert parameters.
   * 
   * >  If you specify a value for the CertName, Cert, and Key parameters, you do not need to specify a value for the CertId parameter.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- DADTPZoOHd9WtZ3UKHJTRgNQmioPQn2bqdKHop+B/dn/4VZL7Jt8zSDGM9sTMThLyvsmLQKBgQCr+ujntC1kN6pGBj2Fw2l/EA/W3rYEce2tyhjgmG7rZ+A/jVE9fld5sQra6ZdwBcQJaiygoIYoaMF2EjRwc0qwHaluq0C15f6ujSoHh2e+D5zdmkTg/3NKNjqNv6xA2gYpinVDzFdZ9Zujxvuh9o4Vqf0YF8bv5UK5G04RtKadOw== -----END RSA PRIVATE KEY-----
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certRegion: 'CertRegion',
      domain: 'Domain',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      certRegion: 'string',
      domain: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

