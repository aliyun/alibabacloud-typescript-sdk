// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZoneRequest extends $dara.Model {
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
   * The logical location type of the built-in authoritative module in which the zone is added. Valid values:
   * 
   * *   **NORMAL_ZONE**: the regular module. DNS results are stored in the cache module and DNS requests are sent to the regular module if the DNS requests do not match the DNS records in the cache module. DNS record updates take effect based on the time to live (TTL) value. The regular module does not support DNS resolution over user-defined lines or based on weight values.
   * *   **FAST_ZONE**: the acceleration module. It directly responds to DNS requests with the lowest latency and updates DNS records in real time. The acceleration module supports DNS resolution over user-defined lines or based on weight values.
   * 
   * Default value: **NORMAL_ZONE**.
   * 
   * >  The DNS results returned by the built-in authoritative acceleration module are not stored in the cache module because the built-in authoritative acceleration module is located before the cache module. As a result, you are charged more for DNS requests.
   * 
   * @example
   * FAST_ZONE
   */
  dnsGroup?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
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
   * *   **RECORD**: enables the recursive resolution proxy for subdomain names. In this case, if the queried subdomain name does not exist in the zone, DNS requests are recursively forwarded to the forward module and then to the recursion module until DNS results are returned.
   * 
   * Default value: **ZONE**.
   * 
   * @example
   * ZONE
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmykd63gt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the zone to be added.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dnsGroup: 'DnsGroup',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      resourceGroupId: 'ResourceGroupId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dnsGroup: 'string',
      lang: 'string',
      proxyPattern: 'string',
      resourceGroupId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

