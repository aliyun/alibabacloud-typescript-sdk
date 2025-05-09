// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityProxyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat97ac4d7cc3834a5daf40
   */
  proxyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3DC3CAB
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

