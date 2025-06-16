// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySslVpnClientCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL client certificate.
   * 
   * @example
   * cert2
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 606998F0-B94D-48FE-8316-ACA81BB230DA
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SSL client certificate.
   * 
   * @example
   * vsc-bp1n8wcf134yl0osr****
   */
  sslVpnClientCertId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
      sslVpnClientCertId: 'SslVpnClientCertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
      sslVpnClientCertId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

