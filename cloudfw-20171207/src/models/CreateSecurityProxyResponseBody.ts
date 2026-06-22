// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityProxyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAT firewall ID.
   * 
   * @example
   * proxy-nat97a******
   */
  proxyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      proxyId: 'ProxyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyId: 'string',
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

