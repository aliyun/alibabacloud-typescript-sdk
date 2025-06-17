// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainByCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the domain name list to return match the SSL certificate.
   * 
   * *   true: The domain name list match the SSL certificate.
   * *   false: The domain name list do not match the SSL certificate.
   * 
   * @example
   * true
   */
  exact?: boolean;
  /**
   * @remarks
   * The public key of the SSL certificate. You must encode the public key in Base64 and then call the encodeURIComponent function to encode the public key again.
   * 
   * The public key must be in the PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  SSLPub?: string;
  /**
   * @remarks
   * Specifies whether the domain name list to return contains only domain names with HTTPS enabled or disabled.
   * 
   * *   true: The domain name list contains only domain names with HTTPS enabled.
   * *   false: The domain name list contains only domain names with HTTPS disabled.
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

