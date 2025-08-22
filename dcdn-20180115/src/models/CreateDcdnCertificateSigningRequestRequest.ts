// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnCertificateSigningRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The city. Default value: Hangzhou.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The Common Name of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  commonName?: string;
  /**
   * @remarks
   * The country or region in which the organization is located. Default value: CN.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * test@aliyundoc.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the organization. Default value: Alibaba Inc.
   * 
   * @example
   * Alibaba Inc
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Aliyun CDN.
   * 
   * @example
   * Aliyun CDN
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) extension that allows multiple domain names to be associated with the certificate. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com,example.org
   */
  SANs?: string;
  /**
   * @remarks
   * The provincial district. Default value: Zhejiang.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      commonName: 'CommonName',
      country: 'Country',
      email: 'Email',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      SANs: 'SANs',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      commonName: 'string',
      country: 'string',
      email: 'string',
      organization: 'string',
      organizationUnit: 'string',
      SANs: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

