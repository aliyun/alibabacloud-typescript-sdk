// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecursionZoneRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of the request. You can specify a custom value. Make sure that the value is unique among different requests. The value can contain up to 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable recursive proxy for subdomains. Valid values:
   * 
   * zone: Disables recursive proxy. An NXDOMAIN response is returned for non-existent subdomains. record: Enables recursive proxy. For non-existent subdomains, the system queries the forwarding and recursion modules in sequence and returns the final result.
   * 
   * @example
   * record
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      proxyPattern: 'ProxyPattern',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      proxyPattern: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

