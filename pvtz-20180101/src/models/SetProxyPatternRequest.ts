// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetProxyPatternRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable the recursive resolution proxy for subdomain names. Valid values:
   * 
   * *   **ZONE**: disables the recursive resolution proxy for subdomain names. In this case, NXDOMAIN is returned if the queried subdomain name does not exist in the zone.
   * *   **RECORD**: enables the recursive resolution proxy for subdomain names. In this case, if the queried domain name does not exist in the zone, Domain Name System (DNS) requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
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
   * The zone ID. This ID uniquely identifies the zone.
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

