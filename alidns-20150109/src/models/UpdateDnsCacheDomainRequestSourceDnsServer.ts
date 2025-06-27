// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsCacheDomainRequestSourceDnsServer extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the origin DNS server.
   * 
   * @example
   * 223.5.5.5
   */
  host?: string;
  /**
   * @remarks
   * The port of the origin DNS server.
   * 
   * @example
   * 53
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

