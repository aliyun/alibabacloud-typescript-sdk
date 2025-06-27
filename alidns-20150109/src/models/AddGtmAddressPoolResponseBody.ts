// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool created.
   * 
   * @example
   * hraf3x
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The ID of the health check configuration.
   * 
   * @example
   * hraf14
   */
  monitorConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
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

