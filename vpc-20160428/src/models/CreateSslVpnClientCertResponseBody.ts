// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSslVpnClientCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL client certificate.
   * 
   * @example
   * SslVpnClientCert
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 079874CD-AEC1-43E6-AC03-ADD96B6E4907
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SSL client certificate.
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

