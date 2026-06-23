// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSslVpnClientCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL-VPN client certificate.
   * 
   * @example
   * SslVpnClientCert
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
   * The ID of the SSL-VPN client certificate.
   * 
   * @example
   * vsc-m5euof6s5jy8vs5kd****
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

