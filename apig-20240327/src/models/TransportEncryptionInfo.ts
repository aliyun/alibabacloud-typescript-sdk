// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransportCertificateInfo } from "./TransportCertificateInfo";


export class TransportEncryptionInfo extends $dara.Model {
  /**
   * @remarks
   * The list of transport certificates added by the user.
   */
  certificates?: TransportCertificateInfo[];
  /**
   * @remarks
   * The reason for the deployment failure.
   * 
   * @example
   * “”
   */
  deployError?: string;
  /**
   * @remarks
   * The submit status.
   * 
   * @example
   * Success
   */
  deployStatus?: string;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The TLS cipher suite policy.
   * 
   * @example
   * tls_cipher_policy_1_2
   */
  tlsPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'certificates',
      deployError: 'deployError',
      deployStatus: 'deployStatus',
      http2Enabled: 'http2Enabled',
      tlsPolicy: 'tlsPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': TransportCertificateInfo },
      deployError: 'string',
      deployStatus: 'string',
      http2Enabled: 'boolean',
      tlsPolicy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

