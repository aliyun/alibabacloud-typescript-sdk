// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetProxyPatternRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The token must be unique for each request. It can contain only ASCII characters and must be no more than 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The proxy mode for recursive resolution of subdomains. Valid values:
   * 
   * - **ZONE**: Disables the proxy. If a subdomain does not exist, an NXDOMAIN response is returned.
   * 
   * - **RECORD**: Enables the proxy. If a subdomain does not exist, the system queries the forwarding and recursion modules and returns the final result.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 10.61.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      proxyPattern: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

