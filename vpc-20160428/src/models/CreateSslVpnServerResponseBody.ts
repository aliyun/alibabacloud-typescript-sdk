// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSslVpnServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SSL server name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E98A9651-7098-40C7-8F85-C818D1EBBA85
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * @example
   * vss-bp18q7hzj6largv4v****
   */
  sslVpnServerId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
      sslVpnServerId: 'SslVpnServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
      sslVpnServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

