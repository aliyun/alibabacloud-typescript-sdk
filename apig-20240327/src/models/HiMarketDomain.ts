// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketDomain extends $dara.Model {
  /**
   * @remarks
   * The domain name address.
   * 
   * @example
   * api.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The access protocol.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      networkType: 'networkType',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      networkType: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

