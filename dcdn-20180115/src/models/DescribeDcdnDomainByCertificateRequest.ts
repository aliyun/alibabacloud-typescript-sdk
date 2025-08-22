// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainByCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the domain name list to return matches the SSL certificate.
   * - **true**: The domain name list matches the SSL certificate.
   * - **false**: The domain name list does not match the SSL certificate.
   * 
   * @example
   * true
   */
  exact?: boolean;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * You must use Base64 encoding schemes and then the encodeURIComponent method to encode the public key. PEM files are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  SSLPub?: string;
  /**
   * @remarks
   * Specifies whether the domain name list to return contains only domain names with HTTPS enabled or disabled.
   * 
   * *   true: The list contains only domain names with HTTPS enabled.
   * *   false: The list contains only domain names with HTTPS disabled.
   * 
   * @example
   * true
   */
  SSLStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      exact: 'Exact',
      SSLPub: 'SSLPub',
      SSLStatus: 'SSLStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exact: 'boolean',
      SSLPub: 'string',
      SSLStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

