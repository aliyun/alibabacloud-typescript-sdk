// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm type.
   */
  algType?: string;
  /**
   * @remarks
   * The list of domain names, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com,blog.example.com
   */
  domains?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The certificate type. Valid values:
   * - lets_encrypt: Let\\"s Encrypt certificate.
   * - digicert_single: DigiCert single-domain certificate.
   * - digicert_wildcard: DigiCert wildcard domain certificate.
   * 
   * @example
   * lets_encrypt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algType: 'AlgType',
      domains: 'Domains',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algType: 'string',
      domains: 'string',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

