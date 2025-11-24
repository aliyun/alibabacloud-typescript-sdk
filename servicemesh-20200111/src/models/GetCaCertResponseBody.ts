// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded content of the CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIFszCCA5ugAwIBAgIDM/1OMA0GCSqGSIb3DQEBCwUAME427zhT4HDLcCEW****-----END CERTIFICATE-----\\n
   */
  caCert?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0496204-7586-5B4C-B364-2361CC0ED****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      caCert: 'CaCert',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCert: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

