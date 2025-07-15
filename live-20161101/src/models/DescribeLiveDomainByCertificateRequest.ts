// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainByCertificateRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The public key of the SSL certificate. You must Base64-encode the public key before you invoke the encodeURIComponent function to encode a URI component. The public key must be in the PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  SSLPub?: string;
  /**
   * @remarks
   * Specifies whether to return only domain names with HTTPS enabled or disabled.
   * 
   * *   **true**: returns only domain names with HTTPS enabled.
   * *   **false**: The rule is disabled.
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

