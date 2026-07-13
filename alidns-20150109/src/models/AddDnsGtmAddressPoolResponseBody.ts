// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * hrbv**
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * hra**a
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD5799335**B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      monitorConfigId: 'string',
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

