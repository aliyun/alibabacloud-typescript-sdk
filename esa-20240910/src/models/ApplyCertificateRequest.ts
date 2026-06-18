// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of domain names.
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
   * The certificate type. Valid values: `lets_encrypt` for a Let\\"s Encrypt certificate, `digicert_single` for a Digicert single-domain certificate, and `digicert_wildcard` for a Digicert wildcard certificate.
   * 
   * @example
   * lets_encrypt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

