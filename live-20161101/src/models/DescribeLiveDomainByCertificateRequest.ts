// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainByCertificateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The public key of the certificate. The public key must be Base64 encoding and then URL-encoded (encodeURIComponent). The PEM format is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  SSLPub?: string;
  /**
   * @remarks
   * Specifies whether the returned domain name list includes only domain names with HTTPS enabled or disabled.
   * - **true**: HTTPS is enabled.
   * - **false**: HTTPS is disabled.
   * 
   * @example
   * true
   */
  SSLStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      SSLPub: 'SSLPub',
      SSLStatus: 'SSLStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
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

